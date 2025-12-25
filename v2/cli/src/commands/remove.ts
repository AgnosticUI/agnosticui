/**
 * ag remove command - Remove components from the project
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { rm } from 'node:fs/promises';
import type { RemoveOptions } from '../types/index.js';
import { logger } from '../utils/logger.js';
import { loadConfig, saveConfig, removeComponentFromConfig, hasComponent, getComponentEntry } from '../utils/config.js';
import { normalizeComponentName } from '../utils/components.js';
import { pathExists } from '../utils/files.js';
import pc from 'picocolors';

export async function remove(componentNames: string[], options: RemoveOptions = {}): Promise<void> {
  // Load config
  const config = await loadConfig();
  if (!config) {
    logger.error('AgnosticUI is not initialized in this project.');
    logger.info('Run ' + pc.cyan('npx agnosticui-cli init') + ' to get started.');
    process.exit(1);
  }

  const componentsPath = path.resolve(config.paths.components);

  // Normalize and validate component names
  const normalizedNames = componentNames.map(normalizeComponentName);
  const notAdded = normalizedNames.filter(name => !hasComponent(config, name));

  if (notAdded.length > 0) {
    logger.error(`Component(s) not found: ${notAdded.join(', ')}`);
    logger.info('Run ' + pc.cyan('npx agnosticui-cli list') + ' to see installed components.');

    // Filter out not added components
    const toRemove = normalizedNames.filter(name => hasComponent(config, name));
    if (toRemove.length === 0) {
      process.exit(1);
    }
    componentNames = toRemove;
  } else {
    componentNames = normalizedNames;
  }

  // Confirm removal unless --force
  if (!options.force) {
    const shouldContinue = await p.confirm({
      message: `Remove ${componentNames.length} component(s): ${componentNames.join(', ')}?`,
      initialValue: false,
    });

    if (p.isCancel(shouldContinue) || !shouldContinue) {
      logger.info('Operation cancelled.');
      process.exit(0);
    }
  }

  // Process each component
  const spinner = p.spinner();
  const results: { name: string; success: boolean }[] = [];

  for (const componentName of componentNames) {
    spinner.start(`Removing ${componentName}...`);

    try {
      const entry = getComponentEntry(config, componentName);
      if (!entry) {
        throw new Error(`Component "${componentName}" not found in config`);
      }

      // Remove component directory
      const componentDir = path.join(componentsPath, componentName);
      if (pathExists(componentDir)) {
        await rm(componentDir, { recursive: true, force: true });
      }

      results.push({ name: componentName, success: true });
      spinner.message(`Removed ${componentName}`);
    } catch (error) {
      results.push({ name: componentName, success: false });
      spinner.stop(pc.red('✖') + ` Failed to remove ${componentName}`);
      logger.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  spinner.stop();

  // Update config with successfully removed components
  let updatedConfig = config;
  for (const result of results) {
    if (result.success) {
      updatedConfig = removeComponentFromConfig(updatedConfig, result.name);
    }
  }
  await saveConfig(updatedConfig);

  // Display results
  const successCount = results.filter(r => r.success).length;
  const failureCount = results.filter(r => !r.success).length;

  logger.newline();
  if (successCount > 0) {
    logger.success(`Removed ${successCount} component(s) successfully!`);

    if (results.length > 0) {
      logger.box('Removed components:', results.filter(r => r.success).map(r => '  ' + pc.dim(r.name)));
    }
  }

  if (failureCount > 0) {
    logger.error(`Failed to remove ${failureCount} component(s).`);
    process.exit(1);
  }
}
