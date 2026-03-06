import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { playbook } from '../src/commands/playbook.js';
import { createTempDir, removeTempDir, initPackageJson, MOCK_MANIFEST } from './helpers.js';

function buildFetchMock(fileContent: string = '/* placeholder */') {
  return vi.fn(async (url: string) => {
    if (String(url).includes('playbooks-manifest.json')) {
      return { ok: true, json: async () => MOCK_MANIFEST };
    }
    return {
      ok: true,
      text: async () => fileContent,
      arrayBuffer: async () => new ArrayBuffer(0),
    };
  });
}

describe('ag playbook', () => {
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
    await initPackageJson(tmpDir);
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    process.chdir(originalCwd);
    await removeTempDir(tmpDir);
  });

  it('--list prints available playbook slugs', async () => {
    vi.stubGlobal('fetch', buildFetchMock());
    await playbook(undefined, { list: true });
    const output = logLines.join('\n');
    expect(output).toContain('login');
    expect(output).toContain('dashboard');
  });

  it('prints available playbooks when no slug provided', async () => {
    vi.stubGlobal('fetch', buildFetchMock());
    await playbook(undefined, {});
    expect(logLines.join('\n')).toContain('login');
  });

  it('installs login --framework react to src/playbooks/login/', async () => {
    vi.stubGlobal('fetch', buildFetchMock('export default {}'));
    await playbook('login', { framework: 'react', force: true });
    const destDir = path.join(tmpDir, 'src', 'playbooks', 'login');
    expect(existsSync(destDir)).toBe(true);
    expect(existsSync(path.join(destDir, 'App.tsx'))).toBe(true);
    expect(existsSync(path.join(destDir, 'main.tsx'))).toBe(true);
  });

  it('installs to a custom --path', async () => {
    vi.stubGlobal('fetch', buildFetchMock('// content'));
    await playbook('login', { framework: 'react', path: 'custom/login', force: true });
    expect(existsSync(path.join(tmpDir, 'custom', 'login', 'App.tsx'))).toBe(true);
  });

  it('exits with error for unknown playbook slug', async () => {
    vi.stubGlobal('fetch', buildFetchMock());
    await expect(
      playbook('nonexistent-slug', { framework: 'react', force: true }),
    ).rejects.toThrow(/process\.exit/);
  });

  it('exits with error for invalid framework', async () => {
    vi.stubGlobal('fetch', buildFetchMock());
    await expect(
      playbook('login', { framework: 'svelte', force: true }),
    ).rejects.toThrow(/process\.exit/);
  });

  it('exits with error when manifest fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 503 })));
    await expect(playbook(undefined, { list: true })).rejects.toThrow(/process\.exit/);
  });
});
