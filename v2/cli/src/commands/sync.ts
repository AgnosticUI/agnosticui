/**
 * ag sync command - Update reference library from tarball
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { logger } from '../utils/logger.js';
import { loadConfig, saveConfig } from '../utils/config.js';
import { extractTarball, ensureDir, pathExists } from '../utils/files.js';
import pc from 'picocolors';

const DEFAULT_REFERENCE_PATH = './agnosticui';

export interface SyncOptions {
  tarball?: string;
}

export async function sync(options: SyncOptions = {}): Promise<void> {
  console.log('');
  p.intro(pc.bold(pc.cyan('AgnosticUI Local - Sync')));

  // Check if initialized
  const config = await loadConfig();
  if (!config) {
    logger.error('AgnosticUI is not initialized in this project.');
    logger.info('Run ' + pc.cyan('npx ag init') + ' to initialize first.');
    process.exit(1);
  }

  // Determine tarball path
  let tarballPath = options.tarball;

  if (!tarballPath) {
    // Use tarball path from config
    if (!config.tarball?.source) {
      logger.error('No tarball path found in config.');
      logger.info('Please specify a tarball path: ' + pc.cyan('npx ag sync --tarball /path/to/tarball.tgz'));
      process.exit(1);
    }
    tarballPath = config.tarball.source;
  }

  // Resolve to absolute path
  tarballPath = path.resolve(tarballPath);

  // Check if tarball exists
  logger.newline();
  logger.info('Looking for tarball at:');
  console.log('  ' + pc.dim(tarballPath));
  logger.newline();

  if (!existsSync(tarballPath)) {
    logger.error('Tarball not found at saved location!');
    logger.info('Please specify a new tarball path:');
    logger.info('  ' + pc.cyan(`npx ag sync --tarball /path/to/tarball.tgz`));
    process.exit(1);
  }

  // Read version from tarball (extract to temp dir first to peek at version.json)
  let tarballVersion = 'unknown';
  const tempExtractPath = path.join(DEFAULT_REFERENCE_PATH, '.temp-sync');
  try {
    await ensureDir(tempExtractPath);
    await extractTarball(tarballPath, tempExtractPath);

    const versionJsonPath = path.join(tempExtractPath, 'version.json');
    if (pathExists(versionJsonPath)) {
      const { readFile } = await import('node:fs/promises');
      const versionData = JSON.parse(await readFile(versionJsonPath, 'utf-8'));
      tarballVersion = versionData.version || tarballVersion;
    }

    // Clean up temp extraction
    const { rm } = await import('node:fs/promises');
    await rm(tempExtractPath, { recursive: true, force: true });
  } catch (error) {
    // If we can't read version, continue anyway
    logger.warn('Could not read version from tarball, continuing...');
  }

  logger.info(pc.green('✓') + ` Found tarball (version ${pc.cyan(tarballVersion)})`);
  logger.newline();

  // Confirm with user
  const shouldProceed = await p.confirm({
    message: 'Proceed with sync?',
    initialValue: true,
  });

  if (p.isCancel(shouldProceed) || !shouldProceed) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  // Start spinner
  const spinner = p.spinner();
  spinner.start('Syncing reference library...');

  try {
    // Extract tarball to reference path (overwrite)
    spinner.message('Extracting reference library...');
    await ensureDir(DEFAULT_REFERENCE_PATH);
    await extractTarball(tarballPath, DEFAULT_REFERENCE_PATH);

    // Copy CSS tokens to components/styles directory
    spinner.message('Updating CSS tokens...');
    const componentsPath = config.paths.components;
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

    // Update config with new tarball info
    spinner.message('Updating configuration...');
    config.tarball = {
      source: tarballPath,
      version: tarballVersion,
      installed: new Date().toISOString(),
    };
    await saveConfig(config);

    spinner.stop(pc.green('✓') + ' Sync completed successfully!');

    // Success message
    p.outro(pc.green('Reference library updated!'));

    logger.newline();
    logger.info(pc.dim('Updated:'));
    console.log('  ' + pc.cyan('✓') + ' Reference library → ' + pc.dim('./agnosticui/'));
    console.log('  ' + pc.cyan('✓') + ' CSS tokens → ' + pc.dim(`${componentsPath}/styles/`));
    console.log('  ' + pc.cyan('✓') + ' Config → ' + pc.dim('agnosticui.config.json'));
    logger.newline();
    logger.info(pc.dim('Your components in ') + pc.cyan(componentsPath) + pc.dim(' were not modified.'));
  } catch (error) {
    spinner.stop(pc.red('✖') + ' Failed to sync');
    logger.error(`Sync failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    process.exit(1);
  }
}
