/**
 * Dependency management utilities
 */
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import type { Framework } from '../types/index.js';

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

/**
 * Detect the package manager being used in the project
 */
export function detectPackageManager(cwd: string = process.cwd()): PackageManager {
  // Check for lock files
  if (existsSync(path.join(cwd, 'bun.lockb'))) {
    return 'bun';
  }
  if (existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  if (existsSync(path.join(cwd, 'yarn.lock'))) {
    return 'yarn';
  }
  // Default to npm
  return 'npm';
}

/**
 * Get the install command for a package manager
 */
export function getInstallCommand(packageManager: PackageManager, packages: string[]): string {
  const pkgList = packages.join(' ');

  switch (packageManager) {
    case 'bun':
      return `bun add ${pkgList}`;
    case 'pnpm':
      return `pnpm add ${pkgList}`;
    case 'yarn':
      return `yarn add ${pkgList}`;
    case 'npm':
    default:
      return `npm install ${pkgList}`;
  }
}

/**
 * Get required dependencies for a framework
 */
export function getFrameworkDependencies(framework: Framework): string[] {
  switch (framework) {
    case 'react':
      return ['lit', '@lit/react'];
    case 'vue':
      return ['lit'];
    case 'lit':
      return ['lit'];
    case 'svelte':
      return ['lit'];
    default:
      return ['lit'];
  }
}

/**
 * Install dependencies using the detected package manager
 */
export function installDependencies(packages: string[], cwd: string = process.cwd()): void {
  const packageManager = detectPackageManager(cwd);
  const command = getInstallCommand(packageManager, packages);

  try {
    execSync(command, {
      cwd,
      stdio: 'inherit', // Show output to user
    });
  } catch (error) {
    throw new Error(`Failed to install dependencies: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Check if dependencies are already installed
 */
export function checkDependenciesInstalled(packages: string[], cwd: string = process.cwd()): boolean {
  const nodeModulesPath = path.join(cwd, 'node_modules');

  if (!existsSync(nodeModulesPath)) {
    return false;
  }

  // Check if all packages exist in node_modules
  return packages.every(pkg => {
    const pkgPath = path.join(nodeModulesPath, pkg);
    return existsSync(pkgPath);
  });
}
