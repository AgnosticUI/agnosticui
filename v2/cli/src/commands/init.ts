/**
 * ag init command - Initialize AgnosticUI Local in a project
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile, writeFile, copyFile } from 'node:fs/promises';
import type { Framework, InitOptions } from '../types/index.js';
import { logger } from '../utils/logger.js';
import { loadConfig, saveConfig, createDefaultConfig } from '../utils/config.js';
import { extractTarball, ensureDir, pathExists, updateIgnoreFile, updateEslintConfig } from '../utils/files.js';
import { determineTarballPath, cleanupTempDownload } from '../utils/npm.js';
import {
  getFrameworkDependencies,
  checkDependenciesInstalled,
  installDependencies,
  detectPackageManager,
} from '../utils/dependencies.js';
import pc from 'picocolors';

const DEFAULT_COMPONENTS_PATH = './src/components/ag';
const DEFAULT_REFERENCE_PATH = './agnosticui';

export async function init(options: InitOptions = {}): Promise<void> {
  console.log('');
  p.intro(pc.bold(pc.cyan('AgnosticUI Local - Initialization')));

  // Check if already initialized
  const existingConfig = await loadConfig();
  if (existingConfig) {
    if (!options.force) {
      logger.error('AgnosticUI is already initialized in this project.');
      logger.info('Run ' + pc.cyan('npx agnosticui-cli add <component>') + ' to add components.');
      logger.info('To re-initialize, run: ' + pc.cyan('npx agnosticui-cli init --force'));
      process.exit(1);
    }
    // --force: reuse existing framework and components path unless explicitly overridden
    options.framework = options.framework ?? existingConfig.framework;
    options.componentsPath = options.componentsPath ?? existingConfig.paths.components;
    logger.info(pc.yellow('Re-initializing') + ' existing AgnosticUI project...');
  }

  // Validate we're inside a project directory
  if (!existsSync(path.join(process.cwd(), 'package.json'))) {
    logger.error("No package.json found. Please run this command from inside an existing project.");
    process.exit(1);
  }
  const hasMainTs = existsSync(path.join(process.cwd(), 'src', 'main.ts'));
  const hasMainTsx = existsSync(path.join(process.cwd(), 'src', 'main.tsx'));
  // entryPoint is null when no Vite-style entry exists (e.g. Next.js, Nuxt, SvelteKit)
  const entryPoint: string | null = hasMainTsx ? 'main.tsx' : hasMainTs ? 'main.ts' : null;

  // Prompt for framework if not provided
  let framework = options.framework;
  if (!framework) {
    if (options.skipPrompts) {
      logger.error('Framework not specified. Use --framework option in non-interactive mode.');
      logger.info('Example: ' + pc.cyan('npx agnosticui-cli init --framework react --skip-prompts'));
      process.exit(1);
    }

    const frameworkChoice = await p.select({
      message: 'Which framework are you using?',
      options: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'lit', label: 'Lit' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'other', label: 'Other (Angular, Solid, Preact, etc. - Uses web components)' },
      ],
    });

    if (p.isCancel(frameworkChoice)) {
      p.cancel('Operation cancelled.');
      process.exit(0);
    }

    framework = frameworkChoice as Framework;
  }

  // Prompt for components path if not provided
  let componentsPath = options.componentsPath;
  if (!componentsPath) {
    if (options.skipPrompts) {
      componentsPath = DEFAULT_COMPONENTS_PATH;
    } else {
      const pathChoice = await p.text({
        message: 'Where should components be generated?',
        placeholder: DEFAULT_COMPONENTS_PATH,
        defaultValue: DEFAULT_COMPONENTS_PATH,
      });

      if (p.isCancel(pathChoice)) {
        p.cancel('Operation cancelled.');
        process.exit(0);
      }

      componentsPath = pathChoice as string;
    }
  }

  // Determine tarball path
  const version = options.tag || 'alpha';
  const tarballPath = options.tarball || await determineTarballPath(version);

  if (!tarballPath) {
    logger.error('Could not find AgnosticUI tarball.');
    logger.info('Please specify a tarball path with --tarball option or ensure agnosticui-core is published to NPM.');
    process.exit(1);
  }

  // Start spinner
  const spinner = p.spinner();
  spinner.start(existingConfig ? 'Re-initializing AgnosticUI Local...' : 'Initializing AgnosticUI Local...');

  try {
    // Extract tarball to reference path
    spinner.message('Extracting reference library...');
    await ensureDir(DEFAULT_REFERENCE_PATH);
    await extractTarball(tarballPath, DEFAULT_REFERENCE_PATH);

    // Read version from extracted tarball
    const versionJsonPath = path.join(DEFAULT_REFERENCE_PATH, 'version.json');
    let tarballVersion = '2.0.0-alpha'; // fallback
    if (pathExists(versionJsonPath)) {
      try {
        const versionData = JSON.parse(await readFile(versionJsonPath, 'utf-8'));
        tarballVersion = versionData.version || tarballVersion;
      } catch {
        // Use fallback version
      }
    }

    // Create config file
    spinner.message('Creating configuration...');
    const config = createDefaultConfig(framework, componentsPath, tarballVersion);

    // Add tarball info to config
    config.tarball = {
      source: path.resolve(tarballPath),
      version: tarballVersion,
      installed: new Date().toISOString(),
    };

    await saveConfig(config);

    // Create components directory
    spinner.message('Creating components directory...');
    await ensureDir(componentsPath);

    // Copy CSS tokens to components/styles directory
    spinner.message('Copying CSS tokens...');
    const stylesPath = path.join(componentsPath, 'styles');
    await ensureDir(stylesPath);

    const tokensSourcePath = path.join(DEFAULT_REFERENCE_PATH, 'src', 'styles');
    const tokenFiles = ['ag-tokens.css', 'ag-tokens-dark.css'];

    for (const tokenFile of tokenFiles) {
      const srcFile = path.join(tokensSourcePath, tokenFile);
      const destFile = path.join(stylesPath, tokenFile);
      if (pathExists(srcFile)) {
        await copyFile(srcFile, destFile);
      }
    }

    // Copy shared infrastructure (shared, utils, styles, types)
    spinner.message('Copying shared infrastructure...');
    const { copyDirectoryFiltered } = await import('../utils/files.js');
    const infraDirs = ['shared', 'utils', 'styles', 'types'];

    for (const dir of infraDirs) {
      const srcDir = path.join(DEFAULT_REFERENCE_PATH, 'src', dir);
      const destDir = path.join(componentsPath, dir);

      if (pathExists(srcDir)) {
        await copyDirectoryFiltered(srcDir, destDir, {
          exclude: ['*.spec.ts', '*.spec.js'] // Skip test files
        });
      }
    }

    spinner.stop(pc.green('✓') + (existingConfig ? ' Re-initialized successfully!' : ' Initialized successfully!'));

    if (!existingConfig) {
      // First-time init only: install dependencies, update ignore/eslint/tsconfig files
      await handleDependencies(framework, options.skipPrompts);

      spinner.message('Updating .gitignore...');
      const referenceDirName = path.basename(DEFAULT_REFERENCE_PATH);
      const ignorePattern = `${referenceDirName}/`;

      await updateIgnoreFile(path.join(process.cwd(), '.gitignore'), ignorePattern);
      await updateIgnoreFile(path.join(process.cwd(), '.gitignore'), '.agnosticui-viewer/');

      const eslintConfigPath = path.join(process.cwd(), 'eslint.config.js');
      if (pathExists(eslintConfigPath)) {
        spinner.message('Updating eslint.config.js...');
        const updated = await updateEslintConfig(eslintConfigPath, `${referenceDirName}/`);

        if (!updated) {
          logger.newline();
          logger.info(pc.yellow('ESLint Configuration:') + ' Please add the following to your ' + pc.cyan('eslint.config.js') + ':');
          console.log('  ' + pc.dim('{'));
          console.log('    ' + pc.cyan(`ignores: ["${referenceDirName}/"]`));
          console.log('  ' + pc.dim('}'));
        }
      }

      spinner.message('Configuring TypeScript...');
      await updateTsConfigs();

      if (framework === 'vue') {
        spinner.message('Patching vite.config.ts for Vue web components...');
        await patchViteConfigForVue();
      }
    }

    logger.newline();

    if (existingConfig) {
      // Force reinit: just confirm what was updated
      logger.box('Re-initialization complete:', [
        pc.dim('Updated:'),
        '  ' + pc.cyan('✓') + ' Reference library → ' + pc.dim('./agnosticui/'),
        '  ' + pc.cyan('✓') + ' CSS tokens → ' + pc.dim(`${componentsPath}/styles/`),
        '  ' + pc.cyan('✓') + ' Shared infrastructure → ' + pc.dim(`${componentsPath}/shared/, ${componentsPath}/utils/`),
        '',
        pc.dim('Your installed components were not modified.'),
        pc.dim('To update a component: ') + pc.cyan('npx agnosticui-cli add <component> --force'),
      ]);
      return;
    }

    // First-time init: show full next-steps guide
    let exampleImport = '';
    if (framework === 'react') {
      exampleImport = `import { ReactButton } from '${componentsPath}/Button/react/ReactButton'`;
    } else if (framework === 'vue') {
      exampleImport = `import VueButton from '${componentsPath}/Button/vue/VueButton.vue'`;
    } else {
      // Lit, Svelte, and Other (Angular, Solid, etc.) use web components from core
      exampleImport = `import '${componentsPath}/Button/core/Button'`;
    }

    logger.box('Next Steps:', [
      pc.dim(`1. Import CSS tokens in your app entry point${entryPoint ? ` (${entryPoint})` : ' or global CSS file'}:`),
      '  ' + logger.code(`import '${componentsPath}/styles/ag-tokens.css'`),
      '  ' + logger.code(`import '${componentsPath}/styles/ag-tokens-dark.css'`),
      pc.dim(entryPoint ? '  (Or use <link> tags in your index.html)' : '  (e.g. globals.css, app.css, app/layout.tsx, nuxt.config.ts css array, etc.)'),
      '',
      pc.dim('2. Set up theming (override Vite\'s default dark mode):'),
      '  ' + pc.dim('Add to your main CSS file or <style> tag:'),
      '  ' + logger.code('body { background: var(--ag-background-primary); color: var(--ag-text-primary); }'),
      '  ' + pc.dim('For dark mode, add to <html>: data-theme="dark"'),
      '  ' + pc.dim('See: https://www.agnosticui.com/theming.html'),
      '',
      pc.dim('3. Add a component:'),
      '  ' + logger.command('npx agnosticui-cli add button'),
      '',
      pc.dim('4. List available components:'),
      '  ' + logger.command('npx agnosticui-cli list'),
      '',
      pc.dim('5. Use in your app:'),
      '  ' + logger.code(exampleImport),
    ]);

    // Clean up temporary download directory if it exists
    await cleanupTempDownload();
  } catch (error) {
    spinner.stop(pc.red('✖') + ' Failed to initialize');
    logger.error(`Initialization failed: ${error instanceof Error ? error.message : 'Unknown error'}`);

    // Clean up on error too
    await cleanupTempDownload();

    process.exit(1);
  }
}

/**
 * Update tsconfig files with required options
 */
async function updateTsConfigs(): Promise<void> {
  const tsconfigFiles = ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'];
  const cwd = process.cwd();
  let updatedAny = false;

  for (const file of tsconfigFiles) {
    const filePath = path.join(cwd, file);
    if (pathExists(filePath)) {
      try {
        const content = await readFile(filePath, 'utf-8');
        
        // Try to parse JSON (support comments by stripping them)
        let json;
        try {
          const jsonContent = stripJsonComments(content);
          json = JSON.parse(jsonContent);
        } catch {
          // If parsing still fails
          continue;
        }

        let modified = false;

        // Ensure compilerOptions exists
        if (!json.compilerOptions) {
          json.compilerOptions = {};
          modified = true;
        }

        // Set experimentalDecorators
        if (json.compilerOptions.experimentalDecorators !== true) {
          json.compilerOptions.experimentalDecorators = true;
          modified = true;
        }

        // Set useDefineForClassFields
        if (json.compilerOptions.useDefineForClassFields !== false) {
          json.compilerOptions.useDefineForClassFields = false;
          modified = true;
        }

        // Disable erasableSyntaxOnly if present (as it conflicts with decorators)
        if (json.compilerOptions.erasableSyntaxOnly === true) {
          json.compilerOptions.erasableSyntaxOnly = false;
          modified = true;
        }

        // Add exclude pattern if not present
        if (!json.exclude) {
          json.exclude = [];
        }
        
        const excludePatterns = ['agnosticui', '**/agnosticui/**'];
        for (const pattern of excludePatterns) {
          if (!json.exclude.includes(pattern)) {
            json.exclude.push(pattern);
            modified = true;
          }
        }

        if (modified) {
          await writeFile(filePath, JSON.stringify(json, null, 2));
          logger.info(`Updated ${file} with required configuration.`);
          updatedAny = true;
        }
      } catch (error) {
        // Ignore errors, user will see the note
      }
    }
  }
  
  // Show verify note instead of "Add to..." if we updated files
  showTypeScriptNote(updatedAny);
}

/**
 * Patch vite.config.ts for Vue projects to add isCustomElement so ag-* web component
 * tags are not treated as unresolved Vue components.
 */
async function patchViteConfigForVue(): Promise<void> {
  const cwd = process.cwd();
  const candidates = ['vite.config.ts', 'vite.config.js'];

  for (const filename of candidates) {
    const filePath = path.join(cwd, filename);
    if (!pathExists(filePath)) continue;

    const content = await readFile(filePath, 'utf-8');

    // Already patched
    if (content.includes('isCustomElement')) {
      logger.info(`${filename} already has isCustomElement configured.`);
      return;
    }

    // Only patch if @vitejs/plugin-vue is used (vue() call present)
    if (!content.includes('vue()') && !content.includes('vue({')) {
      logger.info(`${filename} does not use @vitejs/plugin-vue — skipping isCustomElement patch.`);
      return;
    }

    // Replace vue() with vue({ template: { compilerOptions: { isCustomElement: ... } } })
    // Handle both `vue()` and `vue({...})` forms
    let patched: string;
    if (content.includes('vue()')) {
      patched = content.replace(
        'vue()',
        `vue({\n    template: {\n      compilerOptions: {\n        isCustomElement: (tag) => tag.startsWith('ag-'),\n      },\n    },\n  })`
      );
    } else {
      // vue({ ... }) — insert isCustomElement into the existing options object
      patched = content.replace(
        /vue\(\{/,
        `vue({\n    template: {\n      compilerOptions: {\n        isCustomElement: (tag) => tag.startsWith('ag-'),\n      },\n    },`
      );
    }

    if (patched !== content) {
      await writeFile(filePath, patched, 'utf-8');
      logger.info(pc.green('✓') + ` Patched ${filename} with isCustomElement for ag-* web components`);
      return;
    }
  }
}

/**
 * Handle dependency installation for the selected framework
 */
async function handleDependencies(framework: Framework, skipPrompts: boolean = false): Promise<void> {
  const requiredDeps = getFrameworkDependencies(framework);

  // Check if dependencies are already installed
  if (checkDependenciesInstalled(requiredDeps)) {
    logger.newline();
    logger.info('Required dependencies already installed: ' + pc.dim(requiredDeps.join(', ')));
    return;
  }

  // Detect package manager
  const packageManager = detectPackageManager();

  // In non-interactive mode, auto-install without prompting
  if (skipPrompts) {
    logger.newline();
    logger.info(`Installing required dependencies: ${pc.dim(requiredDeps.join(', '))}`);
    const spinner = p.spinner();
    spinner.start('Installing dependencies...');
    try {
      installDependencies(requiredDeps);
      spinner.stop(pc.green('✓') + ' Dependencies installed successfully!');
    } catch (error) {
      spinner.stop(pc.red('✖') + ' Failed to install dependencies');
      logger.error(`Installation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      logger.info(`You can install manually with: ${pc.cyan(`${packageManager} ${packageManager === 'npm' ? 'install' : 'add'} ${requiredDeps.join(' ')}`)}`);
    }
    return;
  }

  // Prompt user
  logger.newline();
  logger.info(`This framework requires the following dependencies:`);
  requiredDeps.forEach(dep => {
    console.log('  ' + pc.cyan(dep));
  });
  logger.newline();

  const shouldInstall = await p.confirm({
    message: `Install using ${pc.cyan(packageManager)}?`,
    initialValue: true,
  });

  if (p.isCancel(shouldInstall)) {
    logger.newline();
    logger.warn('Skipped dependency installation.');
    logger.info(`You can install manually later with: ${pc.cyan(`${packageManager} ${packageManager === 'npm' ? 'install' : 'add'} ${requiredDeps.join(' ')}`)}`);
    return;
  }

  if (!shouldInstall) {
    logger.newline();
    logger.warn('Skipped dependency installation.');
    logger.info(`You can install manually later with: ${pc.cyan(`${packageManager} ${packageManager === 'npm' ? 'install' : 'add'} ${requiredDeps.join(' ')}`)}`);
    return;
  }

  // Install dependencies
  const spinner = p.spinner();
  spinner.start('Installing dependencies...');

  try {
    installDependencies(requiredDeps);
    spinner.stop(pc.green('✓') + ' Dependencies installed successfully!');
  } catch (error) {
    spinner.stop(pc.red('✖') + ' Failed to install dependencies');
    logger.error(`Installation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    logger.info(`You can install manually with: ${pc.cyan(`${packageManager} ${packageManager === 'npm' ? 'install' : 'add'} ${requiredDeps.join(' ')}`)}`);
  }
}

/**
 * Show TypeScript decorator configuration note
 */
function showTypeScriptNote(wasUpdated: boolean = false): void {
  if (pathExists('tsconfig.json')) {
    logger.newline();
    if (wasUpdated) {
      logger.info(pc.green('TypeScript Configuration Updated:') + ' verified the following settings:');
    } else {
      logger.info(pc.yellow('TypeScript Note:') + ' Add to ' + pc.cyan('ALL') + ' tsconfig files:');
    }
    console.log('  ' + pc.dim('"compilerOptions": {'));
    console.log('    ' + pc.cyan('"experimentalDecorators": true'));
    console.log('  ' + pc.dim('},'));
    console.log('  ' + pc.dim('"exclude": ['));
    console.log('    ' + pc.cyan('"agnosticui",'));
    console.log('    ' + pc.cyan('"**/agnosticui/**"'));
    console.log('  ' + pc.dim(']'));
    logger.newline();
    if (!wasUpdated) {
      logger.info(pc.dim('(For Vite: add to both tsconfig.json AND tsconfig.app.json)'));
    }
  }
}

/**
 * Strip comments from JSON content
 *
 * The regex matches either:
 * 1. Complete quoted strings (to preserve them, including glob patterns)
 * 2. Single-line comments (// ...)
 * 3. Multi-line comments (slash-star ... star-slash)
 *
 * Only captured comments (group g) are removed; strings are preserved.
 *
 * Example - Vue's tsconfig.app.json contains:
 *   "include": ["src/STAR-STAR/STAR.ts", "src/STAR-STAR/STAR.tsx", "src/STAR-STAR/STAR.vue"]
 *   (where STAR = asterisk, written this way to avoid closing this JSDoc comment)
 *
 * The glob pattern "src/STAR-STAR/STAR.ts" contains "/STAR-STAR/" which looks like
 * a multi-line comment. The regex must match the ENTIRE quoted string first, so the
 * glob is preserved:
 *
 *   Pattern: "(?:\\"|[^"])*"
 *   Input:   "src/STAR-STAR/STAR.ts"
 *   Match:   "src/STAR-STAR/STAR.ts" (entire string matched, preserved)
 *
 * Without the full string pattern matching first, the glob would incorrectly
 * be treated as containing a comment and get stripped, corrupting it to "src*.ts".
 */
function stripJsonComments(json: string): string {
  return json.replace(/"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
}
