/**
 * File system utilities
 */
import { mkdir, readdir, copyFile, readFile, writeFile, stat, appendFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { extract } from 'tar';

/**
 * Ensure a directory exists, creating it if necessary
 */
export async function ensureDir(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

/**
 * Copy a file from source to destination
 */
export async function copyFileToDestination(src: string, dest: string): Promise<void> {
  await ensureDir(path.dirname(dest));
  await copyFile(src, dest);
}

/**
 * Recursively copy a directory
 */
export async function copyDirectory(src: string, dest: string): Promise<void> {
  await ensureDir(dest);

  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

/**
 * Recursively copy a directory with file filtering
 */
export async function copyDirectoryFiltered(
  src: string,
  dest: string,
  options: { exclude?: string[] } = {}
): Promise<void> {
  await ensureDir(dest);

  const entries = await readdir(src, { withFileTypes: true });
  const excludePatterns = options.exclude || [];

  for (const entry of entries) {
    // Check if file should be excluded
    const shouldExclude = excludePatterns.some(pattern => {
      if (pattern.startsWith('*.')) {
        // Extension pattern like '*.spec.ts'
        const ext = pattern.slice(1); // Remove the *
        return entry.name.endsWith(ext);
      }
      // Exact match
      return entry.name === pattern;
    });

    if (shouldExclude) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectoryFiltered(srcPath, destPath, options);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

/**
 * Extract a tarball to a destination directory
 */
export async function extractTarball(tarballPath: string, destPath: string): Promise<void> {
  await ensureDir(destPath);

  await extract({
    file: tarballPath,
    cwd: destPath,
    strip: 1, // Remove the top-level directory from the tarball
  });
}

/**
 * Check if a path exists
 */
export function pathExists(filePath: string): boolean {
  return existsSync(filePath);
}

/**
 * Read JSON file
 */
export async function readJSON<T>(filePath: string): Promise<T> {
  const content = await readFile(filePath, 'utf-8');
  return JSON.parse(content) as T;
}

/**
 * Get all subdirectories in a directory
 */
export async function getDirectories(dirPath: string): Promise<string[]> {
  const entries = await readdir(dirPath, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
}

/**
 * Check if path is a directory
 */
export async function isDirectory(dirPath: string): Promise<boolean> {
  try {
    const stats = await stat(dirPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Add a pattern to an ignore file (e.g. .gitignore or .eslintignore)
 * Creates the file if it doesn't exist
 */
export async function updateIgnoreFile(filePath: string, pattern: string): Promise<void> {
  if (pathExists(filePath)) {
    const content = await readFile(filePath, 'utf-8');
    if (!content.includes(pattern)) {
      const separator = content.endsWith('\n') ? '' : '\n';
      await appendFile(filePath, `${separator}${pattern}\n`);
    }
  } else {
    // Determine default content based on file type
    let defaultContent = '';
    const basename = path.basename(filePath);
    
    if (basename === '.gitignore') {
      defaultContent = '# Logs\nlogs\n*.log\nnpm-debug.log*\n\n# Node\nnode_modules/\n\n# OS\n.DS_Store\n\n';
    }
    
    await writeFile(filePath, `${defaultContent}${pattern}\n`);
  }
}
