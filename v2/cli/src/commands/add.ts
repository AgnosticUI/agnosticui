/**
 * ag add command - Add components to the project
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { stat, readdir, readFile, writeFile } from 'node:fs/promises';
import type { AddOptions, Framework } from '../types/index.js';
import { logger } from '../utils/logger.js';
import { loadConfig, saveConfig, addComponentToConfig, hasComponent } from '../utils/config.js';
import { ensureDir, pathExists } from '../utils/files.js';
import {
  getAvailableComponents,
  componentExists,
  getComponentSourcePaths,
  normalizeComponentName,
  scanForSharedDependencies,
  scanForComponentDependencies,
  scanForUtilsDependencies,
  scanForStyleDependencies,
  scanForTypeDependencies,
  getSharedComponentSourcePaths,
  getUtilSourcePath,
  getStyleSourcePath,
  getTypeSourcePath,
} from '../utils/components.js';
import pc from 'picocolors';

export async function add(componentNames: string[], options: AddOptions = {}): Promise<void> {
  // Setup signal handlers to allow Control-C to work
  let spinner: ReturnType<typeof p.spinner> | null = null;
  const handleExit = () => {
    if (spinner) {
      spinner.stop('Operation cancelled');
    }
    process.exit(130); // Standard exit code for SIGINT
  };

  process.on('SIGINT', handleExit);
  process.on('SIGTERM', handleExit);

  try {
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
    spinner = p.spinner();
    const results: { name: string; success: boolean; files: string[] }[] = [];

    for (const componentName of componentNames) {
      spinner.start(`Adding ${componentName}...`);

      try {
        const files = await addComponent(
          componentName,
          referencePath,
          componentsPath,
          config.framework,
          config.paths.components
        );

        // Process shared dependencies
        const sharedFiles = await processSharedDependencies(
          files,
          referencePath,
          componentsPath,
          config.paths.components
        );
        files.push(...sharedFiles);

        // Process component dependencies (e.g., CopyButton depends on IconButton)
        const componentFiles = await processComponentDependencies(
          files,
          referencePath,
          componentsPath,
          config.framework,
          config.paths.components,
          config
        );
        files.push(...componentFiles);

        // Process utility dependencies
        const utilFiles = await processUtilsDependencies(
          files,
          referencePath,
          process.cwd() // Project root
        );
        // We don't necessarily need to track utils in the component files list for config,
        // but we could if we want to version them. For now, let's just ensure they exist.

        // Process style dependencies
        const styleFiles = await processStyleDependencies(
          files,
          referencePath,
          process.cwd() // Project root
        );
        // Style files are shared across components, so we don't track them per component

        // Process type dependencies
        const typeFiles = await processTypeDependencies(
          files,
          referencePath,
          process.cwd() // Project root
        );
        // Type files are shared across components, so we don't track them per component

        results.push({ name: componentName, success: true, files });
        spinner.message(`Added ${componentName}`);
      } catch (error) {
        results.push({ name: componentName, success: false, files: [] });
        logger.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        // Don't stop spinner here, let it continue for next component
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
        // Calculate import path relative to src/ directory (where most app files are)
        const fullComponentPath = path.join(componentsPath, result.name);
        let importPath = path.relative(process.cwd(), fullComponentPath);

        // If the path starts with 'src/', remove it since imports are typically
        // from files already in src/
        if (importPath.startsWith('src' + path.sep)) {
          importPath = importPath.substring(4); // Remove 'src/'
        } else if (importPath.startsWith('src/')) {
          importPath = importPath.substring(4); // Remove 'src/' (forward slash)
        }

        let importStatement = '';
        if (config.framework === 'lit') {
          // Lit uses side-effect import to register custom element
          importStatement = `import './${importPath}/core/${result.name}'`;
        } else {
          const componentExportName = getComponentExportName(result.name, config.framework);
          importStatement = `import { ${componentExportName} } from './${importPath}'`;
        }

        logger.box(`${result.name}:`, [
          pc.dim('Import in your app (assuming consuming script is in src/):'),
          '  ' + logger.command(importStatement),
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
  } finally {
    // Clean up signal handlers
    process.off('SIGINT', handleExit);
    process.off('SIGTERM', handleExit);
  }
}

/**
 * Add a single component
 */
async function addComponent(
  componentName: string,
  referencePath: string,
  componentsPath: string,
  framework: Framework,
  configComponentsPath: string
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
    await copyAndTransform(sourcePaths.core, destCore, configComponentsPath);

    // Track files (relative to project root)
    copiedFiles.push(path.join(destPath, 'core'));
  }

  // Copy framework-specific directory
  if (pathExists(sourcePaths.framework)) {
    const destFramework = path.join(destPath, framework);
    await copyAndTransform(sourcePaths.framework, destFramework, configComponentsPath);

    // Track files (relative to project root)
    copiedFiles.push(path.join(destPath, framework));
  } else {
    // For Lit, we use the core component directly, so it's okay if a specific 'lit' folder doesn't exist
    if (framework !== 'lit') {
      throw new Error(`${framework} implementation not found for ${componentName}`);
    }
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

/**
 * Process shared dependencies for a list of files
 */
async function processSharedDependencies(
  files: string[],
  referencePath: string,
  componentsPath: string,
  configComponentsPath: string,
  processed: Set<string> = new Set(),
  depth: number = 0
): Promise<string[]> {
  // Prevent infinite recursion - max depth of 10 levels
  if (depth > 10) {
    logger.warn('Maximum dependency depth reached (10 levels). Stopping recursive dependency scan.');
    return [];
  }

  const newFiles: string[] = [];

  for (const fileOrDir of files) {
    const absPath = path.resolve(process.cwd(), fileOrDir);
    let filesToScan: string[] = [];

    try {
      const stats = await stat(absPath);
      if (stats.isDirectory()) {
        const children = await readdir(absPath);
        filesToScan = children
          .filter(f => /\.(ts|js|tsx|jsx|vue|svelte)$/.test(f))
          .map(f => path.join(absPath, f))
          .slice(0, 100); // Limit to first 100 files to prevent hangs
      } else {
        if (/\.(ts|js|tsx|jsx|vue|svelte)$/.test(absPath)) {
          filesToScan = [absPath];
        }
      }
    } catch (err) {
      // Silently skip files that can't be accessed
      continue;
    }

    for (const file of filesToScan) {
      const deps = await scanForSharedDependencies(file);

      for (const dep of deps) {
        if (processed.has(dep)) continue;
        processed.add(dep);

        try {
          // Add this shared component
          const sharedFiles = await addSharedComponent(dep, referencePath, componentsPath, configComponentsPath);
          newFiles.push(...sharedFiles);

          // Recursively process its deps
          const recursiveFiles = await processSharedDependencies(
            sharedFiles,
            referencePath,
            componentsPath,
            configComponentsPath,
            processed,
            depth + 1
          );
          newFiles.push(...recursiveFiles);
        } catch (error) {
          logger.warn(`Failed to add shared dependency "${dep}": ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    }
  }
  return newFiles;
}

/**
 * Add a shared component
 */
async function addSharedComponent(
  componentName: string,
  referencePath: string,
  componentsPath: string,
  configComponentsPath: string
): Promise<string[]> {
  const sourcePaths = getSharedComponentSourcePaths(referencePath, componentName);
  const destPath = path.join(componentsPath, 'shared', componentName); // src/components/ag/shared/Name

  await ensureDir(destPath);

  if (pathExists(sourcePaths.path)) {
    await copyAndTransform(sourcePaths.path, destPath, configComponentsPath);
    return [path.join(destPath)];
  } else {
    throw new Error(`Shared component "${componentName}" not found at ${sourcePaths.path}`);
  }
}

/**
 * Process component dependencies for a list of files
 * Handles cases like CopyButton depending on IconButton
 */
async function processComponentDependencies(
  files: string[],
  referencePath: string,
  componentsPath: string,
  framework: Framework,
  configComponentsPath: string,
  config: any,
  processed: Set<string> = new Set(),
  depth: number = 0
): Promise<string[]> {
  // Prevent infinite recursion
  if (depth > 10) {
    logger.warn('Maximum component dependency depth reached (10 levels).');
    return [];
  }

  const newFiles: string[] = [];

  for (const fileOrDir of files) {
    const absPath = path.resolve(process.cwd(), fileOrDir);
    let filesToScan: string[] = [];

    try {
      const stats = await stat(absPath);
      if (stats.isDirectory()) {
        const children = await readdir(absPath);
        filesToScan = children
          .filter(f => /\.(ts|js|tsx|jsx|vue|svelte)$/.test(f))
          .map(f => path.join(absPath, f))
          .slice(0, 100);
      } else {
        if (/\.(ts|js|tsx|jsx|vue|svelte)$/.test(absPath)) {
          filesToScan = [absPath];
        }
      }
    } catch (err) {
      continue;
    }

    for (const file of filesToScan) {
      const deps = await scanForComponentDependencies(file);

      for (const dep of deps) {
        if (processed.has(dep)) continue;

        // Check if component is already added
        if (hasComponent(config, dep)) {
          processed.add(dep);
          continue;
        }

        processed.add(dep);

        try {
          logger.info(`  → Detected dependency: ${dep}`);
          // Add the component using the same logic as the main add
          const componentFiles = await addComponent(
            dep,
            referencePath,
            componentsPath,
            framework,
            configComponentsPath
          );
          newFiles.push(...componentFiles);

          // Update config for this dependency
          config = addComponentToConfig(
            config,
            dep,
            '2.0.0-alpha',
            componentFiles
          );

          // Recursively process dependencies of this component
          const recursiveFiles = await processComponentDependencies(
            componentFiles,
            referencePath,
            componentsPath,
            framework,
            configComponentsPath,
            config,
            processed,
            depth + 1
          );
          newFiles.push(...recursiveFiles);
        } catch (error) {
          logger.warn(`Failed to add component dependency "${dep}": ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    }
  }

  return newFiles;
}

/**
 * Calculate the number of '../' needed based on components path depth
 * Reference library: src/components/BadgeFx/core/_File.ts uses ../../../ to reach src/
 * User's project: src/components/ag/BadgeFx/core/_File.ts should use ../../../../ to reach src/
 */
function calculatePathDepth(componentsPath: string): number {
  // Normalize the path and remove leading './'
  const normalized = componentsPath.replace(/^\.\//, '');

  // Find the position of 'src' in the path
  const parts = normalized.split('/').filter(s => s.length > 0);
  const srcIndex = parts.indexOf('src');

  if (srcIndex === -1) {
    // No 'src' directory, assume styles/types/utils are at project root
    // Count all segments + ComponentName + core
    return parts.length + 2;
  }

  // Count segments after 'src' (e.g., for 'src/components/ag' -> ['components', 'ag'] = 2)
  const segmentsAfterSrc = parts.slice(srcIndex + 1);
  // Add 2 for ComponentName/core/
  return segmentsAfterSrc.length + 2;
}

/**
 * Copy directory and transform extension from .js to empty in imports
 */
async function copyAndTransform(src: string, dest: string, componentsPath: string): Promise<void> {
  await ensureDir(dest);

  const entries = await readdir(src, { withFileTypes: true });

  // Calculate how many '../' we need for the user's project structure
  const userDepth = calculatePathDepth(componentsPath);
  const referenceDepth = 3; // Reference library uses ../../../ for src/components/Component/core/
  const extraLevels = userDepth - referenceDepth;

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyAndTransform(srcPath, destPath, componentsPath);
    } else {
      // If it is a code file, we transform content
      if (/\.(ts|tsx|js|jsx|vue|svelte)$/.test(entry.name)) {
        let content = await readFile(srcPath, 'utf-8');

        // Transform imports: strip .js extension from relative imports
        // 1. import ... from './something.js' -> import ... from './something'
        // 2. export ... from './something.js' -> export ... from './something'
        // 3. import './something.js' -> import './something'

        content = content.replace(/(from\s+['"]\..+?)\.js(['"])/g, '$1$2');
        content = content.replace(/(import\s+['"]\..+?)\.js(['"])/g, '$1$2');

        // Adjust imports for different nesting depth based on componentsPath
        // Only adjust if we need extra levels
        if (extraLevels > 0) {
          const extraDots = '../'.repeat(extraLevels);

          // ../../../utils/ -> ../../../../utils/ (or more based on depth)
          content = content.replace(/(from\s+)(['"])(?:\.\.\/){3}(utils\/)/g, `$1$2../../../${extraDots}$3`);
          content = content.replace(/(import\s+)(['"])(?:\.\.\/){3}(utils\/)/g, `$1$2../../../${extraDots}$3`);

          // ../../../styles/ -> ../../../../styles/ (or more based on depth)
          content = content.replace(/(from\s+)(['"])(?:\.\.\/){3}(styles\/)/g, `$1$2../../../${extraDots}$3`);
          content = content.replace(/(import\s+)(['"])(?:\.\.\/){3}(styles\/)/g, `$1$2../../../${extraDots}$3`);

          // ../../../types/ -> ../../../../types/ (or more based on depth)
          content = content.replace(/(from\s+)(['"])(?:\.\.\/){3}(types\/)/g, `$1$2../../../${extraDots}$3`);
          content = content.replace(/(import\s+)(['"])(?:\.\.\/){3}(types\/)/g, `$1$2../../../${extraDots}$3`);
        }
        // If extraLevels === 0, no transformation needed (same depth as reference)

        await writeFile(destPath, content, 'utf-8');
      } else {
        // Just copy binary or other files
        const { copyFile } = await import('node:fs/promises');
        await copyFile(srcPath, destPath);
      }
    }
  }
}

/**
 * Process utility dependencies for a list of files
 */
async function processUtilsDependencies(
  files: string[],
  referencePath: string,
  projectRoot: string,
  processed: Set<string> = new Set()
): Promise<string[]> {
  const newFiles: string[] = [];
  
  for (const fileOrDir of files) {
    const absPath = path.resolve(process.cwd(), fileOrDir);
    let filesToScan: string[] = [];

    try {
      const stats = await stat(absPath);
      if (stats.isDirectory()) {
        const children = await readdir(absPath);
        filesToScan = children
          .filter(f => /\.(ts|js|tsx|jsx|vue|svelte)$/.test(f))
          .map(f => path.join(absPath, f))
          .slice(0, 100); // Limit to first 100 files to prevent hangs
      } else {
        if (/\.(ts|js|tsx|jsx|vue|svelte)$/.test(absPath)) {
          filesToScan = [absPath];
        }
      }
    } catch (err) {
      // Silently skip files that can't be accessed
      continue;
    }

    for (const file of filesToScan) {
      const deps = await scanForUtilsDependencies(file);

      for (const dep of deps) {
        if (processed.has(dep)) continue;
        processed.add(dep);

        try {
          const utilFiles = await addUtil(dep, referencePath, projectRoot);
          newFiles.push(...utilFiles);
        } catch (error) {
          logger.warn(`Failed to add utility "${dep}": ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    }
  }
  return newFiles;
}

/**
 * Add a utility file
 */
async function addUtil(
  utilName: string,
  referencePath: string,
  projectRoot: string
): Promise<string[]> {
  const sourcePath = getUtilSourcePath(referencePath, utilName);
  // specific to AgnosticUI structure: utils are in src/utils
  const destPath = path.join(projectRoot, 'src/utils', `${utilName}.ts`); // assuming TS for now

  await ensureDir(path.dirname(destPath));

  // simple copy
  const { copyFile } = await import('node:fs/promises');

  if (pathExists(sourcePath)) {
     await copyFile(sourcePath, destPath);
     return [destPath];
  } else {
    // try .js if .ts not found?
    const sourcePathJs = sourcePath.replace('.ts', '.js');
    if (pathExists(sourcePathJs)) {
       const destPathJs = destPath.replace('.ts', '.js');
       await copyFile(sourcePathJs, destPathJs);
       return [destPathJs];
    }
    throw new Error(`Utility "${utilName}" not found at ${sourcePath}`);
  }
}

/**
 * Process style dependencies for a list of files
 */
async function processStyleDependencies(
  files: string[],
  referencePath: string,
  projectRoot: string,
  processed: Set<string> = new Set()
): Promise<string[]> {
  const newFiles: string[] = [];

  for (const fileOrDir of files) {
    const absPath = path.resolve(process.cwd(), fileOrDir);
    let filesToScan: string[] = [];

    try {
      const stats = await stat(absPath);
      if (stats.isDirectory()) {
        const children = await readdir(absPath);
        filesToScan = children
          .filter(f => /\.(ts|js|tsx|jsx|vue|svelte)$/.test(f))
          .map(f => path.join(absPath, f))
          .slice(0, 100); // Limit to first 100 files to prevent hangs
      } else {
        if (/\.(ts|js|tsx|jsx|vue|svelte)$/.test(absPath)) {
          filesToScan = [absPath];
        }
      }
    } catch (err) {
      // Silently skip files that can't be accessed
      continue;
    }

    for (const file of filesToScan) {
      const deps = await scanForStyleDependencies(file);

      for (const dep of deps) {
        if (processed.has(dep)) continue;
        processed.add(dep);

        try {
          const styleFiles = await addStyle(dep, referencePath, projectRoot);
          newFiles.push(...styleFiles);
        } catch (error) {
          logger.warn(`Failed to add style "${dep}": ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    }
  }
  return newFiles;
}

/**
 * Add a style file
 */
async function addStyle(
  styleName: string,
  referencePath: string,
  projectRoot: string
): Promise<string[]> {
  const sourcePath = getStyleSourcePath(referencePath, styleName);
  // Styles are in src/styles (parallel to src/components)
  const destPath = path.join(projectRoot, 'src/styles', `${styleName}.ts`); // assuming TS for now

  await ensureDir(path.dirname(destPath));

  // simple copy
  const { copyFile } = await import('node:fs/promises');

  if (pathExists(sourcePath)) {
     await copyFile(sourcePath, destPath);
     return [destPath];
  } else {
    // try .js if .ts not found?
    const sourcePathJs = sourcePath.replace('.ts', '.js');
    if (pathExists(sourcePathJs)) {
       const destPathJs = destPath.replace('.ts', '.js');
       await copyFile(sourcePathJs, destPathJs);
       return [destPathJs];
    }
    throw new Error(`Style "${styleName}" not found at ${sourcePath}`);
  }
}

/**
 * Process type dependencies for a list of files
 */
async function processTypeDependencies(
  files: string[],
  referencePath: string,
  projectRoot: string,
  processed: Set<string> = new Set()
): Promise<string[]> {
  const newFiles: string[] = [];

  for (const fileOrDir of files) {
    const absPath = path.resolve(process.cwd(), fileOrDir);
    let filesToScan: string[] = [];

    try {
      const stats = await stat(absPath);
      if (stats.isDirectory()) {
        const children = await readdir(absPath);
        filesToScan = children
          .filter(f => /\.(ts|js|tsx|jsx|vue|svelte)$/.test(f))
          .map(f => path.join(absPath, f))
          .slice(0, 100); // Limit to first 100 files to prevent hangs
      } else {
        if (/\.(ts|js|tsx|jsx|vue|svelte)$/.test(absPath)) {
          filesToScan = [absPath];
        }
      }
    } catch (err) {
      // Silently skip files that can't be accessed
      continue;
    }

    for (const file of filesToScan) {
      const deps = await scanForTypeDependencies(file);

      for (const dep of deps) {
        if (processed.has(dep)) continue;
        processed.add(dep);

        try {
          const typeFiles = await addType(dep, referencePath, projectRoot);
          newFiles.push(...typeFiles);
        } catch (error) {
          logger.warn(`Failed to add type "${dep}": ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    }
  }
  return newFiles;
}

/**
 * Add a type file
 */
async function addType(
  typeName: string,
  referencePath: string,
  projectRoot: string
): Promise<string[]> {
  const sourcePath = getTypeSourcePath(referencePath, typeName);
  // Types are in src/types (parallel to src/components)
  const destPath = path.join(projectRoot, 'src/types', `${typeName}.ts`); // assuming TS for now

  await ensureDir(path.dirname(destPath));

  // simple copy
  const { copyFile } = await import('node:fs/promises');

  if (pathExists(sourcePath)) {
     await copyFile(sourcePath, destPath);
     return [destPath];
  } else {
    // try .js if .ts not found?
    const sourcePathJs = sourcePath.replace('.ts', '.js');
    if (pathExists(sourcePathJs)) {
       const destPathJs = destPath.replace('.ts', '.js');
       await copyFile(sourcePathJs, destPathJs);
       return [destPathJs];
    }
    throw new Error(`Type "${typeName}" not found at ${sourcePath}`);
  }
}
