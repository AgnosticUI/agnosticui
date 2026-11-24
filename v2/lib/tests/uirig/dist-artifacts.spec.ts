// v2/lib/tests/uirig/dist-artifacts.spec.ts
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
  assertDistArtifactsExist,
  findMissingDistArtifacts,
  getViteServerArgs,
  REQUIRED_DIST_ARTIFACTS,
} from './dist-artifacts';

const tempDirs: string[] = [];

function createTempLibRoot(): string {
  const dir = mkdtempSync(join(tmpdir(), 'uirig-dist-test-'));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  while (tempDirs.length > 0) {
    const dir = tempDirs.pop();
    if (dir) {
      rmSync(dir, { recursive: true, force: true });
    }
  }
});

describe('dist-artifacts', () => {
  it('reports all required dist artifacts when dist/ is absent', () => {
    const root = createTempLibRoot();
    expect(findMissingDistArtifacts(root)).toEqual([...REQUIRED_DIST_ARTIFACTS]);
    expect(() => assertDistArtifactsExist(root)).toThrow(/npm run build:no-sync/);
  });

  it('passes when dist/index.js and token stylesheets exist', () => {
    const root = createTempLibRoot();
    mkdirSync(join(root, 'dist/styles'), { recursive: true });
    writeFileSync(join(root, 'dist/index.js'), 'export {};');
    writeFileSync(join(root, 'dist/styles/ag-tokens.css'), ':root {}');
    writeFileSync(join(root, 'dist/styles/ag-tokens-dark.css'), ':root {}');

    expect(findMissingDistArtifacts(root)).toEqual([]);
    expect(() => assertDistArtifactsExist(root)).not.toThrow();
  });

  it('returns vite dev args for source mode and vite preview args for dist mode', () => {
    expect(getViteServerArgs(false)).toEqual(['--config', 'vite.uirig.config.ts']);
    expect(getViteServerArgs(true)).toEqual([
      'preview',
      '--config',
      'vite.uirig.config.ts',
    ]);
  });
});
