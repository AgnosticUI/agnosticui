/**
 * Component utilities for working with AgnosticUI components
 */
import path from 'node:path';
import { readdir } from 'node:fs/promises';
import type { Framework, ComponentMetadata } from '../types/index.js';
import { pathExists, isDirectory } from './files.js';

/**
 * Get list of available components from the reference library
 */
export async function getAvailableComponents(referencePath: string): Promise<string[]> {
  const componentsPath = path.join(referencePath, 'src/components');

  if (!pathExists(componentsPath)) {
    throw new Error(`Reference library not found at: ${referencePath}`);
  }

  const entries = await readdir(componentsPath, { withFileTypes: true });

  // Filter out non-component directories (shared, react barrel, etc.)
  const components = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(name =>
      name !== 'shared' &&
      name !== 'react' &&
      !name.startsWith('.') &&
      !name.startsWith('_')
    )
    .sort();

  return components;
}

/**
 * Check if a component exists in the reference library
 */
export async function componentExists(referencePath: string, componentName: string): Promise<boolean> {
  const componentPath = path.join(referencePath, 'src/components', componentName);
  return pathExists(componentPath) && await isDirectory(componentPath);
}

/**
 * Get metadata about a component
 */
export async function getComponentMetadata(
  referencePath: string,
  componentName: string
): Promise<ComponentMetadata | null> {
  const componentPath = path.join(referencePath, 'src/components', componentName);

  if (!pathExists(componentPath)) {
    return null;
  }

  const hasCore = pathExists(path.join(componentPath, 'core'));
  const hasReact = pathExists(path.join(componentPath, 'react'));
  const hasVue = pathExists(path.join(componentPath, 'vue'));
  const hasLit = hasCore; // Lit is the core

  const frameworks: Framework[] = [];
  if (hasReact) frameworks.push('react');
  if (hasVue) frameworks.push('vue');
  if (hasLit) frameworks.push('lit');

  return {
    name: componentName,
    version: '2.0.0-alpha', // TODO: Read from version.json
    frameworks,
    hasCore,
    hasReact,
    hasVue,
    hasLit,
  };
}

/**
 * Get the source paths for a component based on framework
 */
export function getComponentSourcePaths(
  referencePath: string,
  componentName: string,
  framework: Framework
): { core: string; framework: string } {
  const componentPath = path.join(referencePath, 'src/components', componentName);

  return {
    core: path.join(componentPath, 'core'),
    framework: path.join(componentPath, framework),
  };
}

/**
 * Get the destination paths for a component
 */
export function getComponentDestinationPaths(
  componentsPath: string,
  componentName: string
): { core: string; framework: string } {
  const destPath = path.join(componentsPath, componentName);

  return {
    core: path.join(destPath, 'core'),
    framework: path.join(destPath, 'react'), // Framework-specific path
  };
}

/**
 * Normalize component name (handle case variations)
 */
export function normalizeComponentName(name: string): string {
  // Capitalize first letter
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Scan a file for shared component dependencies
 * Looks for imports like: import ../../shared/CloseButton/...
 */
export async function scanForSharedDependencies(filePath: string): Promise<string[]> {
  const { readFile } = await import('node:fs/promises');
  
  try {
    const content = await readFile(filePath, 'utf-8');
    const sharedRegex = /import\s+['"](?:\.\.\/)+shared\/([^/]+)/g;
    const matches = [...content.matchAll(sharedRegex)];
    return matches.map(match => match[1]);
  } catch (error) {
    return [];
  }
}

/**
 * Scan a file for utility dependencies
 * Looks for imports like: import ... from '../../utils/slot'
 */
export async function scanForUtilsDependencies(filePath: string): Promise<string[]> {
  const { readFile } = await import('node:fs/promises');
  
  try {
    const content = await readFile(filePath, 'utf-8');
    // Match ../utils/filename or ../../utils/filename
    const utilsRegex = /import\s+.*?from\s+['"](?:\.\.\/)+utils\/([^/'"]+)['"]/g;
    const matches = [...content.matchAll(utilsRegex)];
    return matches.map(match => match[1]); // returns filename like 'slot'
  } catch (error) {
    return [];
  }
}

/**
 * Get the source paths for a shared component
 */
export function getSharedComponentSourcePaths(
  referencePath: string,
  componentName: string
): { path: string } {
  // Shared components are in lib/src/components/shared/<Name>
  return {
    path: path.join(referencePath, 'src/components/shared', componentName),
  };
}

/**
 * Get the source path for a utility
 */
export function getUtilSourcePath(
  referencePath: string,
  utilName: string
): string {
  // Utils are in lib/src/utils/<Name>.ts or similar
  // We assume imports like 'utils/slot' map to 'lib/src/utils/slot.ts'
  return path.join(referencePath, 'src/utils', `${utilName}.ts`);
}

/**
 * Scan a file for style dependencies
 * Looks for imports like: import ... from '../../../styles/motion.styles'
 */
export async function scanForStyleDependencies(filePath: string): Promise<string[]> {
  const { readFile } = await import('node:fs/promises');

  try {
    const content = await readFile(filePath, 'utf-8');
    // Match ../styles/filename or ../../styles/filename or ../../../styles/filename
    const stylesRegex = /import\s+.*?from\s+['"](?:\.\.\/)+styles\/([^'"]+)['"]/g;
    const matches = [...content.matchAll(stylesRegex)];
    return matches.map(match => match[1]); // returns filename like 'motion.styles'
  } catch (error) {
    return [];
  }
}

/**
 * Get the source path for a style file
 */
export function getStyleSourcePath(
  referencePath: string,
  styleName: string
): string {
  // Styles are in lib/src/styles/<Name>.ts or similar
  return path.join(referencePath, 'src/styles', `${styleName}.ts`);
}

/**
 * Scan a file for type dependencies
 * Looks for imports like: import type ... from '../../../types/fx'
 */
export async function scanForTypeDependencies(filePath: string): Promise<string[]> {
  const { readFile } = await import('node:fs/promises');

  try {
    const content = await readFile(filePath, 'utf-8');
    // Match ../types/filename or ../../types/filename or ../../../types/filename
    const typesRegex = /import\s+.*?from\s+['"](?:\.\.\/)+types\/([^'"]+)['"]/g;
    const matches = [...content.matchAll(typesRegex)];
    return matches.map(match => match[1]); // returns filename like 'fx'
  } catch (error) {
    return [];
  }
}

/**
 * Get the source path for a type file
 */
export function getTypeSourcePath(
  referencePath: string,
  typeName: string
): string {
  // Types are in lib/src/types/<Name>.ts or similar
  return path.join(referencePath, 'src/types', `${typeName}.ts`);
}

/**
 * Scan a file for component dependencies
 * Looks for imports like: import "../../IconButton/core/IconButton"
 * or: import { ... } from "../../ComponentName/..."
 */
export async function scanForComponentDependencies(filePath: string): Promise<string[]> {
  const { readFile } = await import('node:fs/promises');

  try {
    const content = await readFile(filePath, 'utf-8');
    // Match ../../ComponentName/ patterns in imports
    const componentRegex = /import\s+(?:.*?from\s+)?['"](?:\.\.\/){2,}([A-Z][^/'"]+)\//g;
    const matches = [...content.matchAll(componentRegex)];
    const components = matches.map(match => match[1]); // Extract component name
    // Remove duplicates and filter out 'shared' directory
    return [...new Set(components)].filter(name => name !== 'shared');
  } catch (error) {
    return [];
  }
}
