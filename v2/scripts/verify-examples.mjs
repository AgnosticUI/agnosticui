#!/usr/bin/env node
/**
 * verify-examples.mjs
 *
 * Audits every example project (react-test, vue-test, lit-test) and reports
 * health issues that would cause stale installs or version drift.
 *
 * Usage:
 *   node v2/scripts/verify-examples.mjs          # audit all examples
 *   node v2/scripts/verify-examples.mjs --fix    # auto-fix what can be fixed safely
 *
 * Checks performed:
 *   1. package.json exists and has a "scripts.dev" entry
 *   2. agnosticui-cli tarball version matches v2/cli/package.json version
 *   3. agnosticui.config.json version matches v2/lib/package.json version
 *   4. src/components/ag/ directory exists and is non-empty
 *   5. agnosticui-core does NOT appear in dependencies
 *
 * --fix auto-fixes:
 *   - Bumps agnosticui-cli tarball filename in package.json to current CLI version
 *   - Updates agnosticui.config.json version field to current lib version
 */

import { readFileSync, existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const EXAMPLES_DIR = join(ROOT, 'examples');
const CLI_PACKAGE = JSON.parse(readFileSync(join(ROOT, 'cli', 'package.json'), 'utf-8'));
const LIB_PACKAGE = JSON.parse(readFileSync(join(ROOT, 'lib', 'package.json'), 'utf-8'));
const CURRENT_CLI_VERSION = CLI_PACKAGE.version;
const CURRENT_LIB_VERSION = LIB_PACKAGE.version;
const FIX_MODE = process.argv.includes('--fix');

const RESET  = '\x1b[0m';
const RED    = '\x1b[31m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const BOLD   = '\x1b[1m';

function pass(msg)  { console.log(`  ${GREEN}✓${RESET} ${msg}`); }
function fail(msg)  { console.log(`  ${RED}✗${RESET} ${msg}`); }
function warn(msg)  { console.log(`  ${YELLOW}!${RESET} ${msg}`); }
function fixed(msg) { console.log(`  ${CYAN}⚡${RESET} ${msg}`); }

/**
 * Find all direct child directories of EXAMPLES_DIR that contain agnosticui.config.json.
 */
function findExamples() {
  if (!existsSync(EXAMPLES_DIR)) return [];
  return readdirSync(EXAMPLES_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => join(EXAMPLES_DIR, e.name))
    .filter(dir => existsSync(join(dir, 'agnosticui.config.json')));
}

/**
 * Extract the version string from an agnosticui-cli tarball reference.
 * e.g. "file:../../cli/agnosticui-cli-2.0.0-alpha.15.tgz" -> "2.0.0-alpha.15"
 */
function parseTarballVersion(value) {
  const match = value.match(/agnosticui-cli-([\d.\w-]+)\.tgz$/);
  return match ? match[1] : null;
}

function checkExample(exampleDir) {
  const rel = relative(ROOT, exampleDir);
  console.log(`\n${BOLD}${rel}${RESET}`);

  let issues = 0;

  // Check 1: package.json exists and has a dev script
  const pkgPath = join(exampleDir, 'package.json');
  if (!existsSync(pkgPath)) {
    fail('package.json not found');
    return ++issues;
  }

  let pkg;
  try {
    pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  } catch {
    fail('package.json is invalid JSON');
    return ++issues;
  }

  if (!pkg.scripts?.dev) {
    warn('package.json has no "scripts.dev" entry');
  } else {
    pass('"scripts.dev" present');
  }

  // Check 2: agnosticui-cli tarball version matches current CLI version
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
  const cliValue = allDeps['agnosticui-cli'];
  if (!cliValue) {
    warn('agnosticui-cli not found in dependencies -- is this a CLI-first project?');
  } else {
    const tarballVersion = parseTarballVersion(cliValue);
    if (!tarballVersion) {
      warn(`Could not parse tarball version from: ${cliValue}`);
    } else if (tarballVersion !== CURRENT_CLI_VERSION) {
      if (FIX_MODE) {
        const newValue = cliValue.replace(
          /agnosticui-cli-[\d.\w-]+\.tgz/,
          `agnosticui-cli-${CURRENT_CLI_VERSION}.tgz`
        );
        if (pkg.dependencies?.['agnosticui-cli']) pkg.dependencies['agnosticui-cli'] = newValue;
        if (pkg.devDependencies?.['agnosticui-cli']) pkg.devDependencies['agnosticui-cli'] = newValue;
        writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
        fixed(`Updated agnosticui-cli tarball: ${tarballVersion} -> ${CURRENT_CLI_VERSION}`);
      } else {
        fail(`agnosticui-cli tarball version ${tarballVersion} does not match CLI ${CURRENT_CLI_VERSION}`);
        issues++;
      }
    } else {
      pass(`agnosticui-cli tarball version ${tarballVersion} matches CLI`);
    }
  }

  // Check 3: agnosticui-core should not be in dependencies
  if ('agnosticui-core' in allDeps) {
    const val = allDeps['agnosticui-core'];
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

  // Check 4: agnosticui.config.json version matches current lib version
  const configPath = join(exampleDir, 'agnosticui.config.json');
  let config;
  try {
    config = JSON.parse(readFileSync(configPath, 'utf-8'));
  } catch {
    fail('agnosticui.config.json is missing or invalid JSON');
    issues++;
    config = null;
  }

  if (config) {
    // tarball.version may be set to the sentinel 'unknown'; prefer config.version as the source of truth
    const tarballVersion = config.tarball?.version;
    const configVersion = (tarballVersion && tarballVersion !== 'unknown') ? tarballVersion : config.version;
    if (!configVersion) {
      warn('agnosticui.config.json has no version field');
    } else if (configVersion !== CURRENT_LIB_VERSION) {
      if (FIX_MODE) {
        config.version = CURRENT_LIB_VERSION;
        if (config.tarball) config.tarball.version = CURRENT_LIB_VERSION;
        writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
        fixed(`Updated agnosticui.config.json version: ${configVersion} -> ${CURRENT_LIB_VERSION}`);
      } else {
        warn(`Config version ${configVersion} does not match lib ${CURRENT_LIB_VERSION} -- run with --fix or: npx agnosticui-cli sync`);
      }
    } else {
      pass(`agnosticui.config.json version ${configVersion} matches lib`);
    }
  }

  // Check 5: src/components/ag/ exists and is non-empty
  const componentsPath = join(exampleDir, config?.paths?.components ?? 'src/components/ag');
  if (!existsSync(componentsPath)) {
    fail(`components directory not found: ${config?.paths?.components ?? 'src/components/ag'}`);
    issues++;
  } else {
    const entries = readdirSync(componentsPath);
    if (entries.length === 0) {
      fail('components directory exists but is empty -- run: ag add <component>');
      issues++;
    } else {
      pass(`Components directory exists with ${entries.length} component(s)`);
    }
  }

  if (issues === 0) {
    console.log(`  ${GREEN}All checks passed${RESET}`);
  } else {
    console.log(`  ${RED}${issues} issue(s) found${RESET}${FIX_MODE ? '' : ' -- run with --fix to auto-fix where possible'}`);
  }

  return issues;
}

// Main
const examples = findExamples();

console.log(`${BOLD}AgnosticUI Examples Verifier${RESET}`);
console.log(`CLI version: ${CYAN}${CURRENT_CLI_VERSION}${RESET}`);
console.log(`Lib version: ${CYAN}${CURRENT_LIB_VERSION}${RESET}`);
console.log(`Found ${examples.length} example(s) in v2/examples/`);
if (FIX_MODE) console.log(`${YELLOW}Fix mode enabled${RESET}`);

let totalIssues = 0;
for (const example of examples.sort()) {
  totalIssues += checkExample(example);
}

console.log(`\n${BOLD}Summary:${RESET} ${totalIssues === 0
  ? `${GREEN}All ${examples.length} examples healthy${RESET}`
  : `${RED}${totalIssues} issue(s) across ${examples.length} examples${RESET}`
}`);

process.exit(totalIssues > 0 ? 1 : 0);
