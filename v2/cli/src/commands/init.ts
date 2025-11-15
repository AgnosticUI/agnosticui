/**
 * ag init command - Initialize AgnosticUI Local in a project
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { existsSync } from 'node:fs';
import type { Framework, InitOptions } from '../types/index.js';
import { logger } from '../utils/logger.js';
import { loadConfig, saveConfig, createDefaultConfig } from '../utils/config.js';
import { extractTarball, ensureDir, pathExists } from '../utils/files.js';
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
  const tarballPath = options.tarball || await determineTarballPath();

  if (!tarballPath) {
    logger.error('Could not find AgnosticUI tarball.');
    logger.info('Please specify a tarball path with --tarball option.');
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

    // Create config file
    spinner.message('Creating configuration...');
    const config = createDefaultConfig(framework, componentsPath, '2.0.0-alpha');
    await saveConfig(config);

    // Create components directory
    spinner.message('Creating components directory...');
    await ensureDir(componentsPath);

    // Copy CSS tokens to components/styles directory
    spinner.message('Copying CSS tokens...');
    const stylesPath = path.join(componentsPath, 'styles');
    await ensureDir(stylesPath);

    const tokensSourcePath = path.join(DEFAULT_REFERENCE_PATH, 'tokens');
    const tokenFiles = ['ag-tokens.css', 'ag-tokens-dark.css'];

    for (const tokenFile of tokenFiles) {
      const srcFile = path.join(tokensSourcePath, tokenFile);
      const destFile = path.join(stylesPath, tokenFile);
      if (pathExists(srcFile)) {
        const { copyFile } = await import('node:fs/promises');
        await copyFile(srcFile, destFile);
      }
    }

    spinner.stop(pc.green('✓') + ' Initialized successfully!');

    // Check and install dependencies
    await handleDependencies(framework);

    // Success message
    p.outro(pc.green('AgnosticUI Local is ready!'));

    logger.newline();
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
      '  ' + logger.command(`import { ${framework === 'react' ? 'ReactButton' : 'Button'} } from '${componentsPath}/button'`),
    ]);
  } catch (error) {
    spinner.stop(pc.red('✖') + ' Failed to initialize');
    logger.error(`Initialization failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    process.exit(1);
  }
}

/**
 * Determine the tarball path (local or download)
 */
async function determineTarballPath(): Promise<string | null> {
  // For local development, look for the tarball in the dist folder
  const localTarballPath = path.resolve(process.cwd(), '../../dist/agnosticui-local-v2.0.0-alpha.tar.gz');

  if (existsSync(localTarballPath)) {
    return localTarballPath;
  }

  // TODO: In production, download from GitHub releases or CDN
  // const downloadedPath = await downloadTarball();
  // return downloadedPath;

  return null;
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

    // Show TypeScript decorator warning if tsconfig.json exists
    if (pathExists('tsconfig.json')) {
      logger.newline();
      logger.info(pc.yellow('TypeScript Note:') + ' Ensure your base ' + pc.cyan('tsconfig.json') + ' includes:');
      console.log('  ' + pc.dim('"compilerOptions": {'));
      console.log('    ' + pc.cyan('"experimentalDecorators": true'));
      console.log('  ' + pc.dim('}'));
      logger.newline();
      logger.info(pc.dim('(If using multiple tsconfig files, add to the base tsconfig.json that others extend from)'));
    }
  } catch (error) {
    spinner.stop(pc.red('✖') + ' Failed to install dependencies');
    logger.error(`Installation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    logger.info(`You can install manually with: ${pc.cyan(`${packageManager} ${packageManager === 'npm' ? 'install' : 'add'} ${requiredDeps.join(' ')}`)}`);
  }
}
