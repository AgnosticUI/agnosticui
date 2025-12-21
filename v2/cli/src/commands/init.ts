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
    logger.info('Run ' + pc.cyan('npx ag add <component>') + ' to add components.');
    process.exit(1);
  }

  // Prompt for framework if not provided
  let framework = options.framework;
  if (!framework) {
    const frameworkChoice = await p.select({
      message: 'Which framework are you using?',
      options: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'lit', label: 'Lit' },
        { value: 'svelte', label: 'Svelte' },
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
    await handleDependencies(framework);

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
      exampleImport = `import { VueButton } from '${componentsPath}/Button/vue/VueButton'`;
    } else {
      // Lit, Svelte, etc. use web components from core
      exampleImport = `import '${componentsPath}/Button/core/Button'`;
    }

    logger.box('Next Steps:', [
      pc.dim('1. Import CSS tokens in your app entry point (e.g., main.tsx):'),
      '  ' + logger.command(`import '${componentsPath}/styles/ag-tokens.css'`),
      '  ' + logger.command(`import '${componentsPath}/styles/ag-tokens-dark.css'`),
      '',
      pc.dim('2. Add a component:'),
      '  ' + logger.command('npx ag add button'),
      '',
      pc.dim('3. List available components:'),
      '  ' + logger.command('npx ag list'),
      '',
      pc.dim('4. Use in your app:'),
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
        }
      } catch (error) {
        // Ignore errors, user will see the note
      }
    }
  }
  
  // Always show the note as a reminder or in case we missed something (like comments preventing parse)
  showTypeScriptNote();
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
async function handleDependencies(framework: Framework): Promise<void> {
  const requiredDeps = getFrameworkDependencies(framework);

  // Check if dependencies are already installed
  if (checkDependenciesInstalled(requiredDeps)) {
    logger.newline();
    logger.info('Required dependencies already installed: ' + pc.dim(requiredDeps.join(', ')));
    showTypeScriptNote();
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
    showTypeScriptNote();
  } catch (error) {
    spinner.stop(pc.red('✖') + ' Failed to install dependencies');
    logger.error(`Installation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    logger.info(`You can install manually with: ${pc.cyan(`${packageManager} ${packageManager === 'npm' ? 'install' : 'add'} ${requiredDeps.join(' ')}`)}`);
  }
}

/**
 * Show TypeScript decorator configuration note
 */
function showTypeScriptNote(): void {
  if (pathExists('tsconfig.json')) {
    logger.newline();
    logger.info(pc.yellow('TypeScript Note:') + ' Add to ' + pc.cyan('ALL') + ' tsconfig files:');
    console.log('  ' + pc.dim('"compilerOptions": {'));
    console.log('    ' + pc.cyan('"experimentalDecorators": true'));
    console.log('  ' + pc.dim('},'));
    console.log('  ' + pc.dim('"exclude": ['));
    console.log('    ' + pc.cyan('"agnosticui",'));
    console.log('    ' + pc.cyan('"**/agnosticui/**"'));
    console.log('  ' + pc.dim(']'));
    logger.newline();
    logger.info(pc.dim('(For Vite: add to both tsconfig.json AND tsconfig.app.json)'));
  }
}

/**
 * Strip comments from JSON content
 */
function stripJsonComments(json: string): string {
  return json.replace(/\"|"(?:\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
}
