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
    logger.info('Run ' + pc.cyan('ag add <component>') + ' to add components.');
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

    spinner.stop(pc.green('✓') + ' Initialized successfully!');

    // Success message
    p.outro(pc.green('AgnosticUI Local is ready!'));

    logger.newline();
    logger.box('Next Steps:', [
      pc.dim('1. Add a component:'),
      '  ' + logger.command('ag add button'),
      '',
      pc.dim('2. List available components:'),
      '  ' + logger.command('ag list'),
      '',
      pc.dim('3. Use in your app:'),
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
