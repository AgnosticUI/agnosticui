/**
 * Shared test helpers for CLI integration tests
 */
import { mkdtemp, rm, writeFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { create as createTar } from 'tar';

export async function createTempDir(): Promise<string> {
  return mkdtemp(path.join(tmpdir(), 'ag-test-'));
}

export async function removeTempDir(dir: string): Promise<void> {
  await rm(dir, { recursive: true, force: true });
}

/** Write a minimal package.json into dir */
export async function initPackageJson(dir: string): Promise<void> {
  await writeFile(
    path.join(dir, 'package.json'),
    JSON.stringify({ name: 'test-project', version: '1.0.0' }, null, 2),
  );
}

/**
 * Create the extracted reference library structure directly in refDir.
 * Mirrors what `extractTarball` produces (strip:1 removes "package/" prefix).
 */
export async function createMockReferenceLibrary(refDir: string): Promise<void> {
  // version.json
  await mkdir(refDir, { recursive: true });
  await writeFile(
    path.join(refDir, 'version.json'),
    JSON.stringify({ version: '2.0.0-alpha.test' }),
  );

  // CSS tokens
  const stylesDir = path.join(refDir, 'src', 'styles');
  await mkdir(stylesDir, { recursive: true });
  await writeFile(path.join(stylesDir, 'ag-tokens.css'), ':root { --ag-color: #000; }');
  await writeFile(path.join(stylesDir, 'ag-tokens-dark.css'), '[data-theme="dark"] { --ag-color: #fff; }');

  // Shared infrastructure dirs (can be empty)
  for (const dir of ['shared', 'utils', 'types']) {
    await mkdir(path.join(refDir, 'src', dir), { recursive: true });
  }

  // Button component
  const buttonCoreDir = path.join(refDir, 'src', 'components', 'Button', 'core');
  const buttonReactDir = path.join(refDir, 'src', 'components', 'Button', 'react');
  const buttonVueDir = path.join(refDir, 'src', 'components', 'Button', 'vue');
  await mkdir(buttonCoreDir, { recursive: true });
  await mkdir(buttonReactDir, { recursive: true });
  await mkdir(buttonVueDir, { recursive: true });

  await writeFile(
    path.join(buttonCoreDir, 'Button.ts'),
    `import { LitElement } from 'lit';\nexport class AgButton extends LitElement {}\n`,
  );
  await writeFile(
    path.join(buttonCoreDir, '_Button.ts'),
    `export interface ButtonProps {\n  label?: string;\n  disabled?: boolean;\n}\n`,
  );
  await writeFile(
    path.join(buttonReactDir, 'ReactButton.tsx'),
    `import React from 'react';\nexport function ReactButton(_props: any) { return null; }\n`,
  );
  await writeFile(
    path.join(buttonVueDir, 'VueButton.vue'),
    `<template><slot /></template>\n`,
  );
}

/**
 * Create a minimal .tar.gz that the init command can extract via --tarball.
 * The tarball must have a single top-level "package/" directory (strip:1 removes it).
 */
export async function createMockTarball(workDir: string, outFile: string): Promise<void> {
  const pkgDir = path.join(workDir, 'package');
  await createMockReferenceLibrary(pkgDir);
  await createTar({ file: outFile, cwd: workDir, gzip: true }, ['package']);
}

/**
 * Set up a fully initialized project in projectDir without running `ag init`.
 * Creates: package.json, agnosticui.config.json, reference library, styles dir.
 */
export async function createInitializedProject(
  projectDir: string,
  framework: string = 'react',
): Promise<void> {
  await initPackageJson(projectDir);

  const refDir = path.join(projectDir, 'agnosticui');
  await createMockReferenceLibrary(refDir);

  const componentsDir = path.join(projectDir, 'src', 'components', 'ag');
  const stylesDir = path.join(componentsDir, 'styles');
  await mkdir(stylesDir, { recursive: true });
  await writeFile(path.join(stylesDir, 'ag-tokens.css'), ':root { --ag-color: #000; }');
  await writeFile(path.join(stylesDir, 'ag-tokens-dark.css'), '[data-theme="dark"] {}');

  const config = {
    $schema: 'https://agnosticui.com/schema.json',
    version: '2.0.0-alpha.test',
    framework,
    paths: {
      reference: './agnosticui',
      components: './src/components/ag',
    },
    components: {},
    ai: {
      includeReference: true,
      includeContext: true,
      contextPath: './agnosticui/docs',
    },
    git: { commitReference: true },
  };

  await writeFile(
    path.join(projectDir, 'agnosticui.config.json'),
    JSON.stringify(config, null, 2),
  );
}

/** Minimal manifest response for playbook tests */
export const MOCK_MANIFEST = {
  githubRawBase: 'https://raw.githubusercontent.com/AgnosticUI/agnosticui/master/v2/playbooks',
  playbooks: {
    login: {
      title: 'Login Page',
      frameworks: {
        react: { dir: 'react-example/src', files: ['App.tsx', 'main.tsx'] },
        vue: { dir: 'vue-example/src', files: ['App.vue', 'main.ts'] },
        lit: { dir: 'lit-example/src', files: ['app.ts', 'main.ts'] },
      },
    },
    dashboard: {
      title: 'Dashboard',
      frameworks: {
        react: { dir: 'react-example/src', files: ['App.tsx'] },
      },
    },
  },
};
