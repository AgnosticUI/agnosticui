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
  scanForUtilsDependencies,
  getSharedComponentSourcePaths,
  getUtilSourcePath,
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

      // Process shared dependencies
      const sharedFiles = await processSharedDependencies(
        files,
        referencePath,
        componentsPath
      );
      files.push(...sharedFiles);

      // Process utility dependencies
      const utilFiles = await processUtilsDependencies(
        files,
        referencePath,
        process.cwd() // Project root
      );
      // We don't necessarily need to track utils in the component files list for config, 
      // but we could if we want to version them. For now, let's just ensure they exist.
      
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
        let importStatement = '';
        if (config.framework === 'lit') {
          // Lit uses side-effect import to register custom element
          importStatement = `import './${importPath}/core/${result.name}'`;
        } else {
          const componentExportName = getComponentExportName(result.name, config.framework);
          importStatement = `import { ${componentExportName} } from './${importPath}'`;
        }

        logger.box(`${result.name}:`, [
          pc.dim('Import in your app:'),
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
    await copyAndTransform(sourcePaths.core, destCore);

    // Track files (relative to project root)
    copiedFiles.push(path.join(destPath, 'core'));
  }

  // Copy framework-specific directory
  if (pathExists(sourcePaths.framework)) {
    const destFramework = path.join(destPath, framework);
    await copyAndTransform(sourcePaths.framework, destFramework);

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
          .map(f => path.join(absPath, f));
      } else {
        if (/\.(ts|js|tsx|jsx|vue|svelte)$/.test(absPath)) {
          filesToScan = [absPath];
        }
      }
    } catch {
      continue;
    }

    for (const file of filesToScan) {
      const deps = await scanForSharedDependencies(file);

      for (const dep of deps) {
        if (processed.has(dep)) continue;
        processed.add(dep);

        try {
          // Add this shared component
          const sharedFiles = await addSharedComponent(dep, referencePath, componentsPath);
          newFiles.push(...sharedFiles);

          // Recursively process its deps
          const recursiveFiles = await processSharedDependencies(
            sharedFiles, 
            referencePath, 
            componentsPath, 
            processed
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
  componentsPath: string
): Promise<string[]> {
  const sourcePaths = getSharedComponentSourcePaths(referencePath, componentName);
  const destPath = path.join(componentsPath, 'shared', componentName); // src/components/ag/shared/Name
  
  await ensureDir(destPath);
  
  if (pathExists(sourcePaths.path)) {
    await copyAndTransform(sourcePaths.path, destPath);
    return [path.join(destPath)]; 
  } else {
    throw new Error(`Shared component "${componentName}" not found at ${sourcePaths.path}`);
  }
}

/**
 * Copy directory and transform extension from .js to empty in imports
 */
async function copyAndTransform(src: string, dest: string): Promise<void> {
  await ensureDir(dest);

  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyAndTransform(srcPath, destPath);
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

        // Adjust utility imports for deeper nesting (src/components/ag vs src/components)
        // ../../../utils/ -> ../../../../utils/
        content = content.replace(/(from\s+)(['"])(?:\.\.\/){3}utils\//g, '$1$2../../../../utils/');
        content = content.replace(/(import\s+)(['"])(?:\.\.\/){3}utils\//g, '$1$2../../../../utils/');

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
          .map(f => path.join(absPath, f));
      } else {
        if (/\.(ts|js|tsx|jsx|vue|svelte)$/.test(absPath)) {
          filesToScan = [absPath];
        }
      }
    } catch {
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
  
  if (await pathExists(sourcePath)) {
     await copyFile(sourcePath, destPath);
     return [destPath];
  } else {
    // try .js if .ts not found?
    const sourcePathJs = sourcePath.replace('.ts', '.js');
    if (await pathExists(sourcePathJs)) {
       const destPathJs = destPath.replace('.ts', '.js');
       await copyFile(sourcePathJs, destPathJs);
       return [destPathJs];
    }
    throw new Error(`Utility "${utilName}" not found at ${sourcePath}`);
  }
}
