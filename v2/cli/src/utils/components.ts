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
  const componentsPath = path.join(referencePath, 'lib/src/components');

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
  const componentPath = path.join(referencePath, 'lib/src/components', componentName);
  return pathExists(componentPath) && await isDirectory(componentPath);
}

/**
 * Get metadata about a component
 */
export async function getComponentMetadata(
  referencePath: string,
  componentName: string
): Promise<ComponentMetadata | null> {
  const componentPath = path.join(referencePath, 'lib/src/components', componentName);

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
  const componentPath = path.join(referencePath, 'lib/src/components', componentName);

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
