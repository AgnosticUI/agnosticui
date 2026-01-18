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
    logger.error('AgnosticUI is already initialized in this project.');
    logger.info('Run ' + pc.cyan('npx agnosticui-cli add <component>') + ' to add components.');
    process.exit(1);
  }

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
  const version = options.version || 'alpha';
  const tarballPath = options.tarball || await determineTarballPath(version);

  if (!tarballPath) {
    logger.error('Could not find AgnosticUI tarball.');
    logger.info('Please specify a tarball path with --tarball option or ensure agnosticui-core is published to NPM.');
    process.exit(1);
  }

  // Start spinner
  const spinner = p.spinner();
  spinner.start('Initializing AgnosticUI Local...');

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

    spinner.stop(pc.green('✓') + ' Initialized successfully!');

    // Check and install dependencies
    await handleDependencies(framework, options.skipPrompts);

    // Update ignore files for the reference library
    spinner.message('Updating .gitignore...');
    const referenceDirName = path.basename(DEFAULT_REFERENCE_PATH);
    const ignorePattern = `${referenceDirName}/`;

    // Update .gitignore
    await updateIgnoreFile(path.join(process.cwd(), '.gitignore'), ignorePattern);
    
    // Check for eslint.config.js and update or warn
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

    // Update TS Configs
    spinner.message('Configuring TypeScript...');
    await updateTsConfigs();

    spinner.stop(pc.green('✓') + ' Initialized successfully!');

    logger.newline();

    // Generate example import statement based on framework
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
      pc.dim('1. Import CSS tokens in your app entry point (e.g., main.tsx):'),
      '  ' + logger.command(`import '${componentsPath}/styles/ag-tokens.css'`),
      '  ' + logger.command(`import '${componentsPath}/styles/ag-tokens-dark.css'`),
      pc.dim('  (Or use <link> tags in your index.html)'),
      '',
      pc.dim('2. Set up theming (override Vite\'s default dark mode):'),
      '  ' + pc.dim('Add to your main CSS file or <style> tag:'),
      '  ' + logger.command('body { background: var(--ag-background-primary); color: var(--ag-text-primary); }'),
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
      '  ' + logger.command(exampleImport),
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
 * Determine the tarball path (local or download from NPM)
 */
async function determineTarballPath(version: string = 'alpha'): Promise<string | null> {
  // For local development, look for the tarball in the dist folder
  const localTarballPath = path.resolve(process.cwd(), '../../dist/agnosticui-local-v2.0.0-alpha.tar.gz');

  if (existsSync(localTarballPath)) {
    logger.info('Using local development tarball');
    return localTarballPath;
  }

  // In production, download from NPM registry
  try {
    const { execSync } = await import('child_process');
    const { readdir, rm } = await import('node:fs/promises');
    const tmpDir = path.join(process.cwd(), '.tmp-ag-download');

    await ensureDir(tmpDir);

    logger.info(`Downloading agnosticui-core@${version} from NPM...`);

    // Download package using npm pack
    execSync(`npm pack agnosticui-core@${version}`, {
      cwd: tmpDir,
      stdio: 'pipe'
    });

    // Find the downloaded tarball
    const files = await readdir(tmpDir);
    const tarball = files.find(f => f.startsWith('agnosticui-core-') && f.endsWith('.tgz'));

    if (tarball) {
      return path.join(tmpDir, tarball);
    }

    // Clean up if no tarball found
    await rm(tmpDir, { recursive: true, force: true });
  } catch (error) {
    logger.error('Failed to download agnosticui-core from NPM');
    logger.info(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  return null;
}

/**
 * Clean up temporary download directory
 */
async function cleanupTempDownload(): Promise<void> {
  try {
    const { rm } = await import('node:fs/promises');
    const tmpDir = path.join(process.cwd(), '.tmp-ag-download');

    if (pathExists(tmpDir)) {
      await rm(tmpDir, { recursive: true, force: true });
    }
  } catch (error) {
    // Ignore cleanup errors - not critical
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

  // Skip installation in non-interactive mode
  if (skipPrompts) {
    logger.newline();
    logger.info(`This framework requires the following dependencies:`);
    requiredDeps.forEach(dep => {
      console.log('  ' + pc.cyan(dep));
    });
    logger.newline();
    const packageManager = detectPackageManager();
    logger.info(`Install them with: ${pc.cyan(`${packageManager} ${packageManager === 'npm' ? 'install' : 'add'} ${requiredDeps.join(' ')}`)}`);
    return;
  }

  // Detect package manager
  const packageManager = detectPackageManager();

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
