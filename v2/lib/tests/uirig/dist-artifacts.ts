// v2/lib/tests/uirig/dist-artifacts.ts
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const REQUIRED_DIST_ARTIFACTS = [
  'dist/index.js',
  'dist/styles/ag-tokens.css',
  'dist/styles/ag-tokens-dark.css',
] as const;

export function findMissingDistArtifacts(libRoot: string): string[] {
  return REQUIRED_DIST_ARTIFACTS.filter(
    (relPath) => !existsSync(resolve(libRoot, relPath))
  );
}

export function assertDistArtifactsExist(libRoot: string): void {
  const missing = findMissingDistArtifacts(libRoot);
  if (missing.length > 0) {
    throw new Error(
      `Missing required dist artifacts for --dist audit: ${missing.join(', ')}. ` +
        `Run "npm run build:no-sync" in v2/lib first.`
    );
  }
}

export function getViteServerArgs(useDist: boolean): string[] {
  return useDist
    ? ['preview', '--config', 'vite.uirig.config.ts']
    : ['--config', 'vite.uirig.config.ts'];
}

export function buildDistPreviewHarness(libRoot: string, viteBin: string): void {
  const proc = spawnSync(
    viteBin,
    ['build', '--config', 'vite.uirig.config.ts'],
    {
      cwd: libRoot,
      encoding: 'utf8',
    }
  );

  if (proc.status !== 0) {
    throw new Error(
      `Failed to build dist preview harness (exit=${proc.status}): ${proc.stderr || proc.stdout || ''}`
    );
  }
}
