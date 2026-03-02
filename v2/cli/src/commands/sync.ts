/**
 * ag sync command - Update reference library from NPM or a local tarball
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { logger } from '../utils/logger.js';
import { loadConfig, saveConfig } from '../utils/config.js';
import { extractTarball, ensureDir, pathExists } from '../utils/files.js';
import { determineTarballPath, cleanupTempDownload } from '../utils/npm.js';
import type { SyncOptions } from '../types/index.js';
import pc from 'picocolors';

const DEFAULT_REFERENCE_PATH = './agnosticui';

export async function sync(options: SyncOptions = {}): Promise<void> {
  console.log('');
  p.intro(pc.bold(pc.cyan('AgnosticUI Local - Sync')));

  // Check if initialized
  const config = await loadConfig();
  if (!config) {
    logger.error('AgnosticUI is not initialized in this project.');
    logger.info('Run ' + pc.cyan('npx agnosticui-cli init') + ' to initialize first.');
    process.exit(1);
  }

  // Resolve tarball path: explicit --tarball > NPM download
  let tarballPath: string | null = options.tarball ?? null;

  if (!tarballPath) {
    const version = options.tag ?? 'alpha';
    tarballPath = await determineTarballPath(version);

    if (!tarballPath) {
      logger.error('Could not find AgnosticUI tarball.');
      logger.info('Specify a version: ' + pc.cyan(`npx agnosticui-cli sync --version ${version}`));
      logger.info('Or a local tarball: ' + pc.cyan('npx agnosticui-cli sync --tarball /path/to/tarball.tgz'));
      process.exit(1);
    }
  } else {
    // Explicit --tarball: resolve to absolute path and verify it exists
    tarballPath = path.resolve(tarballPath);
    logger.newline();
    logger.info('Using tarball at:');
    console.log('  ' + pc.dim(tarballPath));
    logger.newline();

    if (!pathExists(tarballPath)) {
      logger.error('Tarball not found at specified path!');
      logger.info('Run without --tarball to download the latest from NPM:');
      logger.info('  ' + pc.cyan('npx agnosticui-cli sync'));
      process.exit(1);
    }
  }

  // Read version from tarball (extract to temp dir first)
  let tarballVersion = 'unknown';
  const tempExtractPath = path.join(DEFAULT_REFERENCE_PATH, '.temp-sync');
  try {
    await ensureDir(tempExtractPath);
    await extractTarball(tarballPath, tempExtractPath);

    const { readFile } = await import('node:fs/promises');
    const versionJsonPath = path.join(tempExtractPath, 'version.json');
    const packageJsonPath = path.join(tempExtractPath, 'package.json');
    if (pathExists(versionJsonPath)) {
      const versionData = JSON.parse(await readFile(versionJsonPath, 'utf-8'));
      tarballVersion = versionData.version || tarballVersion;
    } else if (pathExists(packageJsonPath)) {
      const packageData = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
      tarballVersion = packageData.version || tarballVersion;
    }

    // Clean up temp extraction
    const { rm } = await import('node:fs/promises');
    await rm(tempExtractPath, { recursive: true, force: true });
  } catch {
    logger.warn('Could not read version from tarball, continuing...');
  }

  logger.info(pc.green('✓') + ` Found tarball (version ${pc.cyan(tarballVersion)})`);
  logger.newline();

  // Confirm with user (unless forced)
  if (!options.force) {
    const shouldProceed = await p.confirm({
      message: 'Proceed with sync?',
      initialValue: true,
    });

    if (p.isCancel(shouldProceed) || !shouldProceed) {
      p.cancel('Operation cancelled.');
      process.exit(0);
    }
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

    const tokensSourcePath = path.join(DEFAULT_REFERENCE_PATH, 'src', 'styles');
    const tokenFiles = ['ag-tokens.css', 'ag-tokens-dark.css'];
    for (const tokenFile of tokenFiles) {
      const srcFile = path.join(tokensSourcePath, tokenFile);
      const destFile = path.join(stylesPath, tokenFile);
      if (pathExists(srcFile)) {
        const { copyFile } = await import('node:fs/promises');
        await copyFile(srcFile, destFile);
      }
    }

    // Copy shared infrastructure (shared, utils, styles, types)
    spinner.message('Updating shared infrastructure...');
    const { copyDirectoryFiltered } = await import('../utils/files.js');
    const infraDirs = ['shared', 'utils', 'styles', 'types'];

    for (const dir of infraDirs) {
      const srcDir = path.join(DEFAULT_REFERENCE_PATH, 'src', dir);
      const destDir = path.join(componentsPath, dir);

      if (pathExists(srcDir)) {
        await copyDirectoryFiltered(srcDir, destDir, {
          exclude: ['*.spec.ts', '*.spec.js'],
        });
      }
    }

    // Update config with new version info
    spinner.message('Updating configuration...');
    config.tarball = {
      source: options.tarball ? path.resolve(options.tarball) : 'npm',
      version: tarballVersion,
      installed: new Date().toISOString(),
    };
    await saveConfig(config);

    spinner.stop(pc.green('✓') + ' Sync completed successfully!');

    p.outro(pc.green('Reference library updated!'));

    logger.newline();
    logger.info(pc.dim('Updated:'));
    console.log('  ' + pc.cyan('✓') + ' Reference library → ' + pc.dim('./agnosticui/'));
    console.log('  ' + pc.cyan('✓') + ' CSS tokens → ' + pc.dim(`${componentsPath}/styles/`));
    console.log('  ' + pc.cyan('✓') + ' Shared infrastructure → ' + pc.dim(`${componentsPath}/shared/, ${componentsPath}/utils/, ${componentsPath}/styles/, ${componentsPath}/types/`));
    console.log('  ' + pc.cyan('✓') + ' Config → ' + pc.dim('agnosticui.config.json'));
    logger.newline();
    logger.info(pc.dim('Your installed components were not modified.'));
    logger.info(pc.dim('To update a component: ') + pc.cyan('npx agnosticui-cli add <component> --force'));
  } catch (error) {
    spinner.stop(pc.red('✖') + ' Failed to sync');
    logger.error(`Sync failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    process.exit(1);
  } finally {
    // Clean up any NPM temp download
    await cleanupTempDownload();
  }
}
