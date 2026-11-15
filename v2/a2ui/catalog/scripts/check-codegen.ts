/**
 * @file check-codegen.ts
 * @description CI drift check for AgnosticUI's A2UI v1.0 catalog codegen.
 * Runs generate-catalog.ts and verifies that agnosticui-catalog.json,
 * SKILL.md, and generated Lit wrappers match v2/lib source interfaces.
 */

import { execFileSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const SCRIPTS_DIR = dirname(fileURLToPath(import.meta.url));
const CATALOG_ROOT = resolve(SCRIPTS_DIR, '..');
const A2UI_ROOT = resolve(CATALOG_ROOT, '..');

function run(cmd: string, args: string[], cwd: string): string {
  return execFileSync(cmd, args, { cwd, encoding: 'utf8' });
}

console.log('[check-codegen] Regenerating A2UI v1.0 catalog & wrappers...');
run('npx', ['tsx', 'scripts/generate-catalog.ts'], CATALOG_ROOT);

console.log('[check-codegen] Verifying zero drift across v2/a2ui...');
const dirty = run(
  'git',
  [
    'status',
    '--porcelain',
    'catalog/agnosticui-catalog.json',
    'catalog/SKILL.md',
    'renderers/lit/src',
  ],
  A2UI_ROOT,
).trim();

if (dirty.length > 0) {
  console.error(
    '[check-codegen] DRIFT DETECTED! Run `npm run generate` in v2/a2ui/catalog and commit updated artifacts:\n' +
      dirty,
  );
  process.exit(1);
}

console.log('[check-codegen] OK — A2UI v1.0 catalog, SKILL.md, and Lit wrappers are in sync.');
