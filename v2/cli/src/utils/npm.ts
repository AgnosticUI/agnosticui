/**
 * NPM tarball utilities shared by init and sync commands
 */
import path from 'node:path';
import { existsSync } from 'node:fs';
import { ensureDir, pathExists } from './files.js';
import { logger } from './logger.js';

const LOCAL_TARBALL_PATH = path.resolve(process.cwd(), '../../dist/agnosticui-local-v2.0.0-alpha.tar.gz');

/**
 * Determine the tarball path: local dev tarball first, then NPM download.
 *
 * @param version  NPM dist-tag or semver (e.g. 'alpha', 'latest', '2.0.0-alpha.21').
 *                 Defaults to 'alpha'.
 */
export async function determineTarballPath(version: string = 'alpha'): Promise<string | null> {
  // Local development: prefer the pre-built tarball in the dist folder
  if (existsSync(LOCAL_TARBALL_PATH)) {
    logger.info('Using local development tarball');
    return LOCAL_TARBALL_PATH;
  }

  // Production: download from NPM registry using npm pack
  try {
    const { execSync } = await import('child_process');
    const { readdir, rm } = await import('node:fs/promises');
    const tmpDir = path.join(process.cwd(), '.tmp-ag-download');

    await ensureDir(tmpDir);

    logger.info(`Downloading agnosticui-core@${version} from NPM...`);

    execSync(`npm pack agnosticui-core@${version}`, {
      cwd: tmpDir,
      stdio: 'pipe',
    });

    const files = await readdir(tmpDir);
    const tarball = files.find(f => f.startsWith('agnosticui-core-') && f.endsWith('.tgz'));

    if (tarball) {
      return path.join(tmpDir, tarball);
    }

    // No tarball found in temp dir — clean up
    await rm(tmpDir, { recursive: true, force: true });
  } catch (error) {
    logger.error('Failed to download agnosticui-core from NPM');
    logger.info(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  return null;
}

/**
 * Remove the temporary download directory created by determineTarballPath().
 * Safe to call even if the directory does not exist.
 */
export async function cleanupTempDownload(): Promise<void> {
  try {
    const { rm } = await import('node:fs/promises');
    const tmpDir = path.join(process.cwd(), '.tmp-ag-download');

    if (pathExists(tmpDir)) {
      await rm(tmpDir, { recursive: true, force: true });
    }
  } catch {
    // Cleanup errors are non-critical — ignore
  }
}
