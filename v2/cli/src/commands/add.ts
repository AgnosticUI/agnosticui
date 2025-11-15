/**
 * ag add command - Add components to the project
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import type { AddOptions, Framework } from '../types/index.js';
import { logger } from '../utils/logger.js';
import { loadConfig, saveConfig, addComponentToConfig, hasComponent } from '../utils/config.js';
import { copyDirectory, ensureDir, pathExists } from '../utils/files.js';
import {
  getAvailableComponents,
  componentExists,
  getComponentSourcePaths,
  normalizeComponentName,
} from '../utils/components.js';
import pc from 'picocolors';

export async function add(componentNames: string[], options: AddOptions = {}): Promise<void> {
  // Load config
  const config = await loadConfig();
  if (!config) {
    logger.error('AgnosticUI is not initialized in this project.');
    logger.info('Run ' + pc.cyan('npx ag init') + ' to get started.');
    process.exit(1);
  }

  const referencePath = path.resolve(config.paths.reference);
  const componentsPath = path.resolve(config.paths.components);

  // Validate reference library exists
  if (!pathExists(referencePath)) {
    logger.error(`Reference library not found at: ${referencePath}`);
    logger.info('Please run ' + pc.cyan('npx ag init') + ' again.');
    process.exit(1);
  }

  // Get available components
  const availableComponents = await getAvailableComponents(referencePath);

  // Normalize and validate component names
  const normalizedNames = componentNames.map(normalizeComponentName);
  const invalidComponents = normalizedNames.filter(name => !availableComponents.includes(name));

  if (invalidComponents.length > 0) {
    logger.error(`Invalid component(s): ${invalidComponents.join(', ')}`);
    logger.info('Run ' + pc.cyan('npx ag list') + ' to see available components.');
    process.exit(1);
  }

  // Check for already added components (unless --force)
  if (!options.force) {
    const alreadyAdded = normalizedNames.filter(name => hasComponent(config, name));
    if (alreadyAdded.length > 0) {
      logger.warn(`Component(s) already added: ${alreadyAdded.join(', ')}`);
      logger.info('Use ' + pc.cyan('--force') + ' to overwrite.');

      // Filter out already added components
      const toAdd = normalizedNames.filter(name => !alreadyAdded.includes(name));
      if (toAdd.length === 0) {
        process.exit(0);
      }
      // Continue with remaining components
      componentNames = toAdd;
    } else {
      componentNames = normalizedNames;
    }
  } else {
    componentNames = normalizedNames;
  }

  // Process each component
  const spinner = p.spinner();
  const results: { name: string; success: boolean; files: string[] }[] = [];

  for (const componentName of componentNames) {
    spinner.start(`Adding ${componentName}...`);

    try {
      const files = await addComponent(
        componentName,
        referencePath,
        componentsPath,
        config.framework
      );

      results.push({ name: componentName, success: true, files });
      spinner.message(`Added ${componentName}`);
    } catch (error) {
      results.push({ name: componentName, success: false, files: [] });
      spinner.stop(pc.red('✖') + ` Failed to add ${componentName}`);
      logger.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  spinner.stop();

  // Update config with successfully added components
  let updatedConfig = config;
  for (const result of results) {
    if (result.success) {
      updatedConfig = addComponentToConfig(
        updatedConfig,
        result.name,
        '2.0.0-alpha',
        result.files
      );
    }
  }
  await saveConfig(updatedConfig);

  // Display results
  const successCount = results.filter(r => r.success).length;
  const failureCount = results.filter(r => !r.success).length;

  logger.newline();
  if (successCount > 0) {
    logger.success(`Added ${successCount} component(s) successfully!`);
    logger.newline();

    // Show import examples for each added component
    for (const result of results) {
      if (result.success) {
        const importPath = path.relative(
          process.cwd(),
          path.join(componentsPath, result.name)
        );
        const componentExportName = getComponentExportName(result.name, config.framework);

        logger.box(`${result.name}:`, [
          pc.dim('Import in your app:'),
          '  ' + logger.command(`import { ${componentExportName} } from './${importPath}'`),
          '',
          pc.dim('Files created:'),
          ...result.files.map(f => '  ' + pc.dim(f)),
        ]);
      }
    }
  }

  if (failureCount > 0) {
    logger.error(`Failed to add ${failureCount} component(s).`);
    process.exit(1);
  }
}

/**
 * Add a single component
 */
async function addComponent(
  componentName: string,
  referencePath: string,
  componentsPath: string,
  framework: Framework
): Promise<string[]> {
  // Verify component exists
  if (!(await componentExists(referencePath, componentName))) {
    throw new Error(`Component "${componentName}" not found in reference library`);
  }

  // Get source paths
  const sourcePaths = getComponentSourcePaths(referencePath, componentName, framework);

  // Create destination directory
  const destPath = path.join(componentsPath, componentName);
  await ensureDir(destPath);

  const copiedFiles: string[] = [];

  // Copy core directory (always needed)
  if (pathExists(sourcePaths.core)) {
    const destCore = path.join(destPath, 'core');
    await copyDirectory(sourcePaths.core, destCore);

    // Track files (relative to project root)
    copiedFiles.push(path.join(destPath, 'core'));
  }

  // Copy framework-specific directory
  if (pathExists(sourcePaths.framework)) {
    const destFramework = path.join(destPath, framework);
    await copyDirectory(sourcePaths.framework, destFramework);

    // Track files (relative to project root)
    copiedFiles.push(path.join(destPath, framework));
  } else {
    throw new Error(`${framework} implementation not found for ${componentName}`);
  }

  return copiedFiles;
}

/**
 * Get the export name for a component based on framework
 */
function getComponentExportName(componentName: string, framework: Framework): string {
  if (framework === 'react') {
    return `React${componentName}`;
  } else if (framework === 'vue') {
    return `Vue${componentName}`;
  } else {
    return componentName;
  }
}
