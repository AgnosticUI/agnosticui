import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { rm } from 'node:fs/promises';
import path from 'node:path';
import { list } from '../src/commands/list.js';
import { createTempDir, removeTempDir, createInitializedProject } from './helpers.js';

describe('ag list', () => {
  let tmpDir: string;
  let originalCwd: string;
  const logLines: string[] = [];

  beforeEach(async () => {
    originalCwd = process.cwd();
    tmpDir = await createTempDir();
    process.chdir(tmpDir);
    logLines.length = 0;
    vi.spyOn(console, 'log').mockImplementation((...args: unknown[]) => {
      logLines.push(args.map(String).join(' '));
    });
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    process.chdir(originalCwd);
    await removeTempDir(tmpDir);
  });

  it('prints known component names from the reference library', async () => {
    await createInitializedProject(tmpDir, 'react');
    await list();
    expect(logLines.join('\n')).toContain('Button');
  });

  it('exits with error when agnosticui.config.json is missing', async () => {
    await expect(list()).rejects.toThrow(/process\.exit/);
  });

  it('exits with error when reference library directory is missing', async () => {
    await createInitializedProject(tmpDir, 'react');
    await rm(path.join(tmpDir, 'agnosticui'), { recursive: true, force: true });
    await expect(list()).rejects.toThrow(/process\.exit/);
  });
});
