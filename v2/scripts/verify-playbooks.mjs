#!/usr/bin/env node
/**
 * verify-playbooks.mjs
 *
 * Audits every playbook example (any directory containing agnosticui.config.json)
 * and reports health issues that would break `npm i && npm run dev` for a fresh clone,
 * or indicate drift between lib source and the copies in src/components/ag/.
 *
 * Usage:
 *   node v2/scripts/verify-playbooks.mjs          # audit all playbooks
 *   node v2/scripts/verify-playbooks.mjs --fix    # auto-fix what can be fixed safely
 *
 * Checks performed:
 *   1. agnosticui-core should not appear in package.json dependencies
 *   2. Vue examples: VueInput.vue must have :name="name" binding
 *   3. agnosticui.config.json version should match the lib package.json version
 *   4. src/components/ag/ directory must exist
 *   5. package.json must exist and have a "scripts.dev" entry
 *   6. playbooks-manifest.json is current (regenerated if --fix is passed)
 */

import { readFileSync, existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { generateManifest, writeManifest, isManifestCurrent } from './generate-playbooks-manifest.mjs';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PLAYBOOKS_DIR = join(ROOT, 'playbooks');
const LIB_PACKAGE = JSON.parse(readFileSync(join(ROOT, 'lib', 'package.json'), 'utf-8'));
const CURRENT_VERSION = LIB_PACKAGE.version;
const FIX_MODE = process.argv.includes('--fix');

const RESET  = '\x1b[0m';
const RED    = '\x1b[31m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const BOLD   = '\x1b[1m';

function pass(msg) { console.log(`  ${GREEN}✓${RESET} ${msg}`); }
function fail(msg) { console.log(`  ${RED}✗${RESET} ${msg}`); }
function warn(msg) { console.log(`  ${YELLOW}!${RESET} ${msg}`); }
function fixed(msg){ console.log(`  ${CYAN}⚡${RESET} ${msg}`); }

/**
 * Recursively find all directories containing agnosticui.config.json
 */
function findExamples(dir, results = []) {
  if (!existsSync(dir)) return results;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const fullPath = join(dir, entry.name);
    if (existsSync(join(fullPath, 'agnosticui.config.json'))) {
      results.push(fullPath);
    } else {
      findExamples(fullPath, results);
    }
  }
  return results;
}

function checkExample(exampleDir) {
  const rel = relative(ROOT, exampleDir);
  console.log(`\n${BOLD}${rel}${RESET}`);

  let issues = 0;

  // Load agnosticui.config.json
  const configPath = join(exampleDir, 'agnosticui.config.json');
  let config;
  try {
    config = JSON.parse(readFileSync(configPath, 'utf-8'));
  } catch {
    fail('agnosticui.config.json is missing or invalid JSON');
    issues++;
    return issues;
  }

  const framework = config.framework;
  const componentsPath = join(exampleDir, config.paths?.components ?? 'src/components/ag');

  // Check 1: package.json exists and has a dev script
  const pkgPath = join(exampleDir, 'package.json');
  if (!existsSync(pkgPath)) {
    fail('package.json not found');
    issues++;
  } else {
    let pkg;
    try {
      pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    } catch {
      fail('package.json is invalid JSON');
      issues++;
      pkg = null;
    }

    if (pkg) {
      if (!pkg.scripts?.dev) {
        warn('package.json has no "scripts.dev" entry');
      } else {
        pass('"scripts.dev" present');
      }

      // Check 2: agnosticui-core should not be in dependencies
      const deps = { ...pkg.dependencies, ...pkg.devDependencies };
      if ('agnosticui-core' in deps) {
        const val = deps['agnosticui-core'];
        if (FIX_MODE) {
          delete pkg.dependencies?.['agnosticui-core'];
          delete pkg.devDependencies?.['agnosticui-core'];
          writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
          fixed(`Removed agnosticui-core (${val}) from package.json`);
        } else {
          fail(`agnosticui-core (${val}) found in package.json -- CLI-first projects should not depend on it directly`);
          issues++;
        }
      } else {
        pass('No agnosticui-core dependency (correct for CLI-first projects)');
      }
    }
  }

  // Check 3: src/components/ag/ exists
  if (!existsSync(componentsPath)) {
    fail(`components directory not found: ${config.paths?.components ?? 'src/components/ag'}`);
    issues++;
  } else {
    pass(`Components directory exists: ${config.paths?.components ?? 'src/components/ag'}`);
  }

  // Check 4: agnosticui.config.json version matches current lib version
  const configVersion = config.tarball?.version ?? config.version;
  if (configVersion && configVersion !== CURRENT_VERSION) {
    warn(`Config version ${configVersion} does not match lib ${CURRENT_VERSION} -- run: npx agnosticui-cli sync`);
  } else if (configVersion) {
    pass(`Config version ${configVersion} matches lib`);
  }

  // Check 5: Vue examples -- VueInput.vue must have :name="name"
  if (framework === 'vue') {
    const vueInputPath = join(componentsPath, 'Input', 'vue', 'VueInput.vue');
    if (existsSync(vueInputPath)) {
      const content = readFileSync(vueInputPath, 'utf-8');
      if (!content.includes(':name="name"')) {
        if (FIX_MODE) {
          const fixed_content = content.replace(
            /(\s*<ag-input\n)/,
            '$1    :name="name"\n'
          );
          writeFileSync(vueInputPath, fixed_content);
          fixed('Added :name="name" to VueInput.vue');
        } else {
          fail('VueInput.vue is missing :name="name" binding -- ag-input values will be absent from FormData');
          issues++;
        }
      } else {
        pass('VueInput.vue has :name="name" binding');
      }
    } else {
      warn('VueInput.vue not found (component may not be added yet)');
    }
  }

  if (issues === 0) {
    console.log(`  ${GREEN}All checks passed${RESET}`);
  } else {
    console.log(`  ${RED}${issues} issue(s) found${RESET}${FIX_MODE ? '' : ' -- run with --fix to auto-fix where possible'}`);
  }

  return issues;
}

/**
 * Check 6: playbooks-manifest.json currency
 * Re-generates the manifest from disk and compares to the committed copy.
 * Returns the number of issues found (0 or 1).
 */
function checkManifestCurrency() {
  console.log(`\n${BOLD}playbooks-manifest.json${RESET}`);
  if (isManifestCurrent()) {
    pass('playbooks-manifest.json is current');
    return 0;
  }
  if (FIX_MODE) {
    writeManifest(generateManifest());
    fixed('Regenerated playbooks-manifest.json');
    return 0;
  }
  fail('playbooks-manifest.json is stale -- run: node v2/scripts/verify-playbooks.mjs --fix');
  return 1;
}

// Main
const examples = findExamples(PLAYBOOKS_DIR);

console.log(`${BOLD}AgnosticUI Playbook Verifier${RESET}`);
console.log(`Lib version: ${CYAN}${CURRENT_VERSION}${RESET}`);
console.log(`Found ${examples.length} example(s) in v2/playbooks/`);
if (FIX_MODE) console.log(`${YELLOW}Fix mode enabled${RESET}`);

let totalIssues = 0;
for (const example of examples.sort()) {
  totalIssues += checkExample(example);
}

totalIssues += checkManifestCurrency();

console.log(`\n${BOLD}Summary:${RESET} ${totalIssues === 0
  ? `${GREEN}All ${examples.length} examples healthy${RESET}`
  : `${RED}${totalIssues} issue(s) across ${examples.length} examples${RESET}`
}`);

process.exit(totalIssues > 0 ? 1 : 0);
