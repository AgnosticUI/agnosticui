import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { context } from '../src/commands/context.js';
import { createTempDir, removeTempDir, createInitializedProject } from './helpers.js';

async function addButtonToConfig(projectDir: string): Promise<void> {
  const configPath = path.join(projectDir, 'agnosticui.config.json');
  const raw = await readFile(configPath, 'utf-8');
  const config = JSON.parse(raw);
  config.components['Button'] = {
    added: new Date().toISOString(),
    version: '2.0.0-alpha.test',
    framework: config.framework,
    files: [`${config.paths.components}/Button/core`, `${config.paths.components}/Button/react`],
  };
  await writeFile(configPath, JSON.stringify(config, null, 2));
}

describe('ag context', () => {
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

  it('creates the output file with component import info', async () => {
    await createInitializedProject(tmpDir, 'react');
    await addButtonToConfig(tmpDir);
    await context({ output: 'CLAUDE.md' });
    const outputPath = path.join(tmpDir, 'CLAUDE.md');
    expect(existsSync(outputPath)).toBe(true);
    const content = await readFile(outputPath, 'utf-8');
    expect(content).toContain('Button');
    expect(content).toContain('ReactButton');
  });

  it('writes cursor MDC format with --format cursor', async () => {
    await createInitializedProject(tmpDir, 'react');
    await addButtonToConfig(tmpDir);
    await context({ format: 'cursor' });
    const outputPath = path.join(tmpDir, '.cursor', 'rules', 'agnosticui.mdc');
    expect(existsSync(outputPath)).toBe(true);
    const content = await readFile(outputPath, 'utf-8');
    expect(content).toContain("applyTo: '**'");
    expect(content).toContain('Button');
  });

  it('appends the context section to an existing file', async () => {
    await createInitializedProject(tmpDir, 'react');
    await addButtonToConfig(tmpDir);
    await writeFile(path.join(tmpDir, 'CLAUDE.md'), '# My Project\n\nExisting content here.\n');
    await context({ output: 'CLAUDE.md' });
    const content = await readFile(path.join(tmpDir, 'CLAUDE.md'), 'utf-8');
    expect(content).toContain('# My Project');
    expect(content).toContain('Existing content here.');
    expect(content).toContain('AgnosticUI Components');
  });

  it('replaces an existing AgnosticUI section on re-run', async () => {
    await createInitializedProject(tmpDir, 'react');
    await addButtonToConfig(tmpDir);
    await context({ output: 'CLAUDE.md' });
    await context({ output: 'CLAUDE.md' });
    const content = await readFile(path.join(tmpDir, 'CLAUDE.md'), 'utf-8');
    const occurrences = (content.match(/<!-- agnosticui:context:start -->/g) || []).length;
    expect(occurrences).toBe(1);
  });

  it('exits with error when no config exists', async () => {
    await expect(context({ output: 'CLAUDE.md' })).rejects.toThrow(/process\.exit/);
  });

  it('exits cleanly when no components are installed', async () => {
    await createInitializedProject(tmpDir, 'react');
    // Config has empty components — context exits with code 0
    await expect(context({ output: 'CLAUDE.md' })).rejects.toThrow(
      /process\.exit unexpectedly called with "0"/,
    );
  });

  it('creates parent directories for nested output paths', async () => {
    await createInitializedProject(tmpDir, 'react');
    await addButtonToConfig(tmpDir);
    await context({ output: '.github/copilot-instructions.md' });
    expect(existsSync(path.join(tmpDir, '.github', 'copilot-instructions.md'))).toBe(true);
  });
});
