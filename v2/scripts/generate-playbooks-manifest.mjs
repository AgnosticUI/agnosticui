#!/usr/bin/env node
/**
 * generate-playbooks-manifest.mjs
 *
 * Generates v2/playbooks-manifest.json by scanning the actual playbook
 * directories on disk for file lists, combined with a small embedded
 * PLAYBOOK_METADATA object for titles, basePaths, frameworkDirs, and
 * externalFiles.
 *
 * This is the source of truth for the agnosticui-cli `ag playbook` command.
 * The VitePress playbooks-config.ts remains the source of truth for StackBlitz
 * integration (which has additional needs like contentReplacements and binary
 * file URL overrides). The two serve different consumers.
 *
 * Usage:
 *   node v2/scripts/generate-playbooks-manifest.mjs
 *
 * When to re-run:
 *   - After adding or removing files inside any playbook example directory
 *   - After adding a new playbook slug
 *   - After changing a playbook title, basePath, frameworkDirs, or externalFiles
 *
 * Integrated into verify-playbooks.mjs:
 *   node v2/scripts/verify-playbooks.mjs        # check 6 validates manifest is current
 *   node v2/scripts/verify-playbooks.mjs --fix  # check 6 regenerates if stale
 */

import { existsSync, readdirSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PLAYBOOKS_DIR = join(ROOT, 'playbooks');
const MANIFEST_PATH = join(ROOT, 'playbooks-manifest.json');

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/AgnosticUI/agnosticui/master/v2/playbooks';
const GITHUB_RAW_V2_BASE = 'https://raw.githubusercontent.com/AgnosticUI/agnosticui/master/v2';

const SKIN_SWITCHER_EXTERNAL_FILES = {
  'src/skins/skin-switcher-core.js': `${GITHUB_RAW_V2_BASE}/skins/skin-switcher-core.js`,
  'src/skins/skins-css-data.js': `${GITHUB_RAW_V2_BASE}/skins/skins-css-data.js`,
};

const SKIN_SWITCHER_CONTENT_REPLACEMENTS = {
  '../../../../skins/skin-switcher-core.js': './skins/skin-switcher-core.js',
};

/**
 * Metadata that cannot be derived from the filesystem.
 * File lists are scanned automatically; only add entries here for:
 *   - title: display name shown in `ag playbook` list
 *   - basePath: when the slug's directory differs from the slug key
 *   - frameworkDirs: when framework subdirs use non-default naming
 *   - externalFiles: files fetched from outside the playbook directory
 *
 * When adding a new playbook: add its entry here, then run this script.
 */
const PLAYBOOK_METADATA = {
  login: {
    title: 'Login',
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  'login-v2': {
    title: 'Login Variant II',
    basePath: 'login',
    frameworkDirs: { react: 'react-example-v2', vue: 'vue-example-v2', lit: 'lit-example-v2' },
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  onboarding: {
    title: 'Onboarding',
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  'onboarding-v2': {
    title: 'Onboarding Carousel Wizard V2',
    basePath: 'onboarding',
    frameworkDirs: { react: 'react-example-v2', vue: 'vue-example-v2', lit: 'lit-example-v2' },
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  dashboard: {
    title: 'Dashboard',
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  support: {
    title: 'Support Center',
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  grid: {
    title: 'Data Grid',
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  'grid-v2': {
    title: 'Data Grid V2',
    basePath: 'grid',
    frameworkDirs: { react: 'react-example-v2', vue: 'vue-example-v2', lit: 'lit-example-v2' },
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  blog: {
    title: 'Blog / Article Reader',
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  landing: {
    title: 'Landing / Marketing Page',
    externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
    contentReplacements: SKIN_SWITCHER_CONTENT_REPLACEMENTS,
  },
  'form-association': {
    title: 'Contact Form (FACE)',
  },
};

/** Directories and files to exclude from the manifest file lists. */
const EXCLUDE_DIRS = new Set(['node_modules', 'agnosticui', 'dist', '.vite', '.git']);
const EXCLUDE_FILES = new Set(['agnosticui.config.json', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml']);

/**
 * Recursively collect all files under `dir`, returning paths relative to `dir`.
 * Skips excluded directories and files.
 */
function collectFiles(dir, base = dir, results = []) {
  if (!existsSync(dir)) return results;

  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      collectFiles(join(dir, entry.name), base, results);
    } else {
      if (EXCLUDE_FILES.has(entry.name)) continue;
      results.push(relative(base, join(dir, entry.name)));
    }
  }
  return results;
}

/**
 * Build the full manifest object from disk + metadata.
 * Exported so verify-playbooks.mjs can call it without forking a subprocess.
 */
export function generateManifest() {
  const playbooks = {};

  for (const [slug, meta] of Object.entries(PLAYBOOK_METADATA)) {
    const basePath = meta.basePath || slug;
    const frameworks = {};

    for (const fw of ['react', 'vue', 'lit']) {
      const defaultDir = `${fw}-example`;
      const dir = meta.frameworkDirs?.[fw] || defaultDir;
      const exampleDir = join(PLAYBOOKS_DIR, basePath, dir);

      if (!existsSync(exampleDir)) continue;

      const files = collectFiles(exampleDir).sort();
      frameworks[fw] = { dir, files };
    }

    if (Object.keys(frameworks).length === 0) continue;

    const entry = { title: meta.title, frameworks };
    if (meta.basePath) entry.basePath = meta.basePath;
    if (meta.frameworkDirs) entry.frameworkDirs = meta.frameworkDirs;
    if (meta.externalFiles) entry.externalFiles = meta.externalFiles;
    if (meta.contentReplacements) entry.contentReplacements = meta.contentReplacements;

    // Include root-level sdui.json when present (agentic intent decoration file).
    if (existsSync(join(PLAYBOOKS_DIR, basePath, 'sdui.json'))) {
      entry.rootFiles = ['sdui.json'];
    }

    playbooks[slug] = entry;
  }

  return {
    githubRawBase: GITHUB_RAW_BASE,
    playbooks,
  };
}

/**
 * Write the manifest to disk.
 */
export function writeManifest(manifest) {
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
}

/**
 * Check whether the on-disk manifest matches what would be generated now.
 * Returns true if the manifest is current, false if stale or missing.
 */
export function isManifestCurrent() {
  if (!existsSync(MANIFEST_PATH)) return false;
  try {
    const onDisk = readFileSync(MANIFEST_PATH, 'utf-8').trim();
    const generated = JSON.stringify(generateManifest(), null, 2).trim();
    return onDisk === generated;
  } catch {
    return false;
  }
}

// Run as script when invoked directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const manifest = generateManifest();
  writeManifest(manifest);
  const count = Object.keys(manifest.playbooks).length;
  console.log(`Generated playbooks-manifest.json with ${count} playbook(s).`);
}
