import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { add } from '../src/commands/add.js';
import { createTempDir, removeTempDir, createInitializedProject } from './helpers.js';

describe('ag add', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(async () => {
    originalCwd = process.cwd();
    tmpDir = await createTempDir();
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    process.chdir(originalCwd);
    await removeTempDir(tmpDir);
  });

  it('copies Button core and react directories to the components path', async () => {
    await createInitializedProject(tmpDir, 'react');
    await add(['button'], {});
    const componentBase = path.join(tmpDir, 'src', 'components', 'ag', 'Button');
    expect(existsSync(path.join(componentBase, 'core'))).toBe(true);
    expect(existsSync(path.join(componentBase, 'react'))).toBe(true);
  });

  it('accepts PascalCase component name', async () => {
    await createInitializedProject(tmpDir, 'react');
    await add(['Button'], {});
    expect(existsSync(path.join(tmpDir, 'src', 'components', 'ag', 'Button', 'core'))).toBe(true);
  });

  it('records the component in agnosticui.config.json', async () => {
    await createInitializedProject(tmpDir, 'react');
    await add(['button'], {});
    const raw = await readFile(path.join(tmpDir, 'agnosticui.config.json'), 'utf-8');
    const config = JSON.parse(raw);
    expect(config.components).toHaveProperty('Button');
  });

  it('exits with error when agnosticui.config.json is missing', async () => {
    await expect(add(['button'], {})).rejects.toThrow(/process\.exit/);
  });

  it('exits with error for an unknown component slug', async () => {
    await createInitializedProject(tmpDir, 'react');
    await expect(add(['NonExistentWidget'], {})).rejects.toThrow(/process\.exit/);
  });

  it('exits with code 0 when component already added and --force not set', async () => {
    await createInitializedProject(tmpDir, 'react');
    await add(['button'], {});
    // Second add of same component — exits 0 (already present, nothing to do)
    await expect(add(['button'], {})).rejects.toThrow(
      /process\.exit unexpectedly called with "0"/,
    );
    // Files from the first add are still present
    expect(existsSync(path.join(tmpDir, 'src', 'components', 'ag', 'Button', 'core'))).toBe(true);
  });
});
