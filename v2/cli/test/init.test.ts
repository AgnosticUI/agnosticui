import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { init } from '../src/commands/init.js';
import {
  createTempDir,
  removeTempDir,
  initPackageJson,
  createMockTarball,
} from './helpers.js';

describe('ag init', () => {
  let tmpDir: string;
  let tarballDir: string;
  let tarballFile: string;
  let originalCwd: string;

  beforeEach(async () => {
    originalCwd = process.cwd();
    tmpDir = await createTempDir();
    tarballDir = await createTempDir();
    tarballFile = path.join(tarballDir, 'agnosticui-core.tgz');
    await createMockTarball(tarballDir, tarballFile);
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    process.chdir(originalCwd);
    await removeTempDir(tmpDir);
    await removeTempDir(tarballDir);
  });

  it('creates agnosticui.config.json in a new project', async () => {
    await initPackageJson(tmpDir);
    await init({ framework: 'react', tarball: tarballFile, skipPrompts: true });
    expect(existsSync(path.join(tmpDir, 'agnosticui.config.json'))).toBe(true);
  });

  it('writes correct framework into config', async () => {
    await initPackageJson(tmpDir);
    await init({ framework: 'vue', tarball: tarballFile, skipPrompts: true });
    const raw = await readFile(path.join(tmpDir, 'agnosticui.config.json'), 'utf-8');
    const config = JSON.parse(raw);
    expect(config.framework).toBe('vue');
    expect(config.paths.components).toBe('./src/components/ag');
  });

  it('creates src/components/ag/styles/ with CSS token files', async () => {
    await initPackageJson(tmpDir);
    await init({ framework: 'react', tarball: tarballFile, skipPrompts: true });
    expect(existsSync(path.join(tmpDir, 'src', 'components', 'ag', 'styles', 'ag-tokens.css'))).toBe(true);
    expect(existsSync(path.join(tmpDir, 'src', 'components', 'ag', 'styles', 'ag-tokens-dark.css'))).toBe(true);
  });

  it('exits with error when no package.json found', async () => {
    await expect(
      init({ framework: 'react', tarball: tarballFile, skipPrompts: true }),
    ).rejects.toThrow(/process\.exit/);
  });

  it('exits with error when already initialized and --force not set', async () => {
    await initPackageJson(tmpDir);
    await init({ framework: 'react', tarball: tarballFile, skipPrompts: true });
    await expect(
      init({ tarball: tarballFile, skipPrompts: true }),
    ).rejects.toThrow(/process\.exit/);
  });

  it('re-initializes successfully with --force', async () => {
    await initPackageJson(tmpDir);
    await init({ framework: 'react', tarball: tarballFile, skipPrompts: true });
    await init({ tarball: tarballFile, skipPrompts: true, force: true });
    expect(existsSync(path.join(tmpDir, 'agnosticui.config.json'))).toBe(true);
  });

  describe('--sdui flag', () => {
    it('creates src/sdui/fixture.ts for react', async () => {
      await initPackageJson(tmpDir);
      await init({ framework: 'react', tarball: tarballFile, skipPrompts: true, sdui: true });
      expect(existsSync(path.join(tmpDir, 'src', 'sdui', 'fixture.ts'))).toBe(true);
    });

    it('creates src/sdui/SduiDemo.tsx for react', async () => {
      await initPackageJson(tmpDir);
      await init({ framework: 'react', tarball: tarballFile, skipPrompts: true, sdui: true });
      expect(existsSync(path.join(tmpDir, 'src', 'sdui', 'SduiDemo.tsx'))).toBe(true);
    });

    it('fixture.ts contains AgNode import and fixture export', async () => {
      await initPackageJson(tmpDir);
      await init({ framework: 'react', tarball: tarballFile, skipPrompts: true, sdui: true });
      const content = await readFile(path.join(tmpDir, 'src', 'sdui', 'fixture.ts'), 'utf-8');
      expect(content).toContain("from '@agnosticui/schema'");
      expect(content).toContain('export const fixture');
      expect(content).toContain('AgInput');
      expect(content).toContain('AgButton');
    });

    it('SduiDemo.tsx imports AgDynamicRenderer from render-react', async () => {
      await initPackageJson(tmpDir);
      await init({ framework: 'react', tarball: tarballFile, skipPrompts: true, sdui: true });
      const content = await readFile(path.join(tmpDir, 'src', 'sdui', 'SduiDemo.tsx'), 'utf-8');
      expect(content).toContain("from '@agnosticui/render-react'");
      expect(content).toContain('AgDynamicRenderer');
    });

    it('creates src/sdui/SduiDemo.vue for vue', async () => {
      await initPackageJson(tmpDir);
      await init({ framework: 'vue', tarball: tarballFile, skipPrompts: true, sdui: true });
      expect(existsSync(path.join(tmpDir, 'src', 'sdui', 'SduiDemo.vue'))).toBe(true);
      const content = await readFile(path.join(tmpDir, 'src', 'sdui', 'SduiDemo.vue'), 'utf-8');
      expect(content).toContain("from '@agnosticui/render-vue'");
    });

    it('creates src/sdui/SduiDemo.ts for lit', async () => {
      await initPackageJson(tmpDir);
      await init({ framework: 'lit', tarball: tarballFile, skipPrompts: true, sdui: true });
      expect(existsSync(path.join(tmpDir, 'src', 'sdui', 'SduiDemo.ts'))).toBe(true);
      const content = await readFile(path.join(tmpDir, 'src', 'sdui', 'SduiDemo.ts'), 'utf-8');
      expect(content).toContain("'@agnosticui/render-lit'");
      expect(content).toContain('ag-dynamic-renderer');
    });

    it('does not create sdui files when --sdui flag is absent', async () => {
      await initPackageJson(tmpDir);
      await init({ framework: 'react', tarball: tarballFile, skipPrompts: true });
      expect(existsSync(path.join(tmpDir, 'src', 'sdui'))).toBe(false);
    });
  });
});
