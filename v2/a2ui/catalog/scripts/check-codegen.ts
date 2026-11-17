/**
 * @file check-codegen.ts
 * @description CI drift check for AgnosticUI's A2UI v1.0 catalog codegen.
 * Runs generate-catalog.ts and verifies byte-for-byte parity and zero git drift
 * across catalog/, renderers/lit/, and v2/site/docs/public/a2ui/v1/catalog.json.
 */

import { execFileSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const SCRIPTS_DIR = dirname(fileURLToPath(import.meta.url));
const CATALOG_ROOT = resolve(SCRIPTS_DIR, '..');
const A2UI_ROOT = resolve(CATALOG_ROOT, '..');
const REPO_ROOT = resolve(A2UI_ROOT, '../..');

function run(cmd: string, args: string[], cwd: string): string {
  return execFileSync(cmd, args, { cwd, encoding: 'utf8' });
}

function assertIdenticalFiles(paths: string[], label: string): void {
  const contents = paths.map((p) => {
    if (!existsSync(p)) {
      throw new Error(`[check-codegen] Missing required synced ${label} artifact: ${p}`);
    }
    return readFileSync(p, 'utf8');
  });

  const baseline = contents[0];
  for (let i = 1; i < contents.length; i++) {
    if (contents[i] !== baseline) {
      throw new Error(
        `[check-codegen] PARITY MISMATCH for ${label}: ${paths[i]} differs from ${paths[0]}`,
      );
    }
  }
  console.log(`[check-codegen] Verified byte-for-byte parity across ${paths.length} ${label} copies.`);
}

console.log('[check-codegen] Regenerating A2UI v1.0 catalog, SKILL.md & Lit wrappers...');
run('npx', ['tsx', 'scripts/generate-catalog.ts'], CATALOG_ROOT);

assertIdenticalFiles(
  [
    resolve(CATALOG_ROOT, 'agnosticui-catalog.json'),
    resolve(A2UI_ROOT, 'renderers/lit/agnosticui-catalog.json'),
    resolve(REPO_ROOT, 'v2/site/docs/public/a2ui/v1/catalog.json'),
  ],
  'catalog.json',
);

assertIdenticalFiles(
  [
    resolve(CATALOG_ROOT, 'SKILL.md'),
    resolve(A2UI_ROOT, 'renderers/lit/SKILL.md'),
  ],
  'SKILL.md',
);

console.log('[check-codegen] Verifying zero git drift across repo...');
const dirty = run(
  'git',
  [
    'status',
    '--porcelain',
    'v2/a2ui/catalog/agnosticui-catalog.json',
    'v2/a2ui/catalog/SKILL.md',
    'v2/a2ui/renderers/lit/agnosticui-catalog.json',
    'v2/a2ui/renderers/lit/SKILL.md',
    'v2/a2ui/renderers/lit/src',
    'v2/site/docs/public/a2ui/v1/catalog.json',
  ],
  REPO_ROOT,
).trim();

if (dirty.length > 0) {
  console.error(
    '[check-codegen] DRIFT DETECTED! Run `npm run generate` in v2/a2ui/catalog and commit updated artifacts:\n' +
      dirty,
  );
  process.exit(1);
}

console.log('[check-codegen] OK — A2UI v1.0 catalog, SKILL.md, Lit wrappers, and static public schema are in sync.');
