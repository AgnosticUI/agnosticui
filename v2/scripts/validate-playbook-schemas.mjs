#!/usr/bin/env node
/**
 * validate-playbook-schemas.mjs
 *
 * Two checks in one pass:
 *   1. Schema health — every typed node in playbook-sdui.schema.json has a description.
 *   2. Instance validation — every sdui.json under v2/playbooks/ satisfies the schema rules.
 *
 * Validation rules mirror JSON Schema draft-07 for the fields defined in
 * playbook-sdui.schema.json without requiring an external validator package.
 *
 * Usage:
 *   node v2/scripts/validate-playbook-schemas.mjs
 *
 * Exit codes:
 *   0 — schema healthy and all instance files valid (or no sdui.json files found)
 *   1 — schema missing descriptions, or one or more instance files failed validation
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PLAYBOOKS_DIR = join(ROOT, 'playbooks');
const SCHEMA_PATH = join(PLAYBOOKS_DIR, 'playbook-sdui.schema.json');

const RESET  = '\x1b[0m';
const RED    = '\x1b[31m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const BOLD   = '\x1b[1m';

function pass(msg) { console.log(`  ${GREEN}✓${RESET} ${msg}`); }
function fail(msg) { console.log(`  ${RED}✗${RESET} ${msg}`); }
function warn(msg) { console.log(`  ${YELLOW}!${RESET} ${msg}`); }

// Current expected schema version — bump when playbook-sdui.schema.json shape changes.
const CURRENT_SCHEMA_VERSION = 1;

/**
 * Walk a JSON Schema object and collect paths of typed nodes missing a description.
 * Catches authoring gaps in playbook-sdui.schema.json before instance files are checked.
 */
function checkSchemaHealth(node, path = 'schema', issues = []) {
  if (node.type && !node.description && path !== 'schema') issues.push(path);
  if (node.properties) {
    for (const [k, v] of Object.entries(node.properties)) checkSchemaHealth(v, `${path}.${k}`, issues);
  }
  if (node.items) checkSchemaHealth(node.items, `${path}.items`, issues);
  return issues;
}

/**
 * Recursively find all sdui.json files under a directory.
 */
function findSduiFiles(dir, results = []) {
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Only recurse one level deep (direct playbook subdirectories), skip
      // generated framework example subdirs like react-example/, vue-example/
      const depth = relative(PLAYBOOKS_DIR, fullPath).split('/').length;
      if (depth === 1) findSduiFiles(fullPath, results);
    } else if (entry.name === 'sdui.json') {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Validate a parsed sdui.json object and return an array of error messages.
 * Implements the rules from playbook-sdui.schema.json (draft-07).
 */
function validateSdui(data) {
  const errors = [];

  // Top-level required fields
  const required = ['version', 'slug', 'displayName', 'description', 'intent', 'recipe'];
  for (const field of required) {
    if (data[field] === undefined || data[field] === null) {
      errors.push(`Missing required field: "${field}"`);
    }
  }

  // version: integer >= 1
  if (data.version !== undefined) {
    if (!Number.isInteger(data.version)) {
      errors.push('"version" must be an integer');
    } else if (data.version < 1) {
      errors.push('"version" must be >= 1');
    } else if (data.version < CURRENT_SCHEMA_VERSION) {
      warn(`"version" is ${data.version} but current schema version is ${CURRENT_SCHEMA_VERSION} — consider updating`);
    }
  }

  // slug: non-empty string
  if (data.slug !== undefined) {
    if (typeof data.slug !== 'string' || data.slug.trim() === '') {
      errors.push('"slug" must be a non-empty string');
    }
  }

  // displayName: non-empty string
  if (data.displayName !== undefined) {
    if (typeof data.displayName !== 'string' || data.displayName.trim() === '') {
      errors.push('"displayName" must be a non-empty string');
    }
  }

  // description: non-empty string
  if (data.description !== undefined) {
    if (typeof data.description !== 'string' || data.description.trim() === '') {
      errors.push('"description" must be a non-empty string');
    }
  }

  // intent: object with required triggers + summary
  if (data.intent !== undefined) {
    if (typeof data.intent !== 'object' || Array.isArray(data.intent)) {
      errors.push('"intent" must be an object');
    } else {
      if (!Array.isArray(data.intent.triggers) || data.intent.triggers.length === 0) {
        errors.push('"intent.triggers" must be a non-empty array of strings');
      } else {
        const nonStrings = data.intent.triggers.filter(t => typeof t !== 'string');
        if (nonStrings.length > 0) {
          errors.push('"intent.triggers" must contain only strings');
        }
      }

      if (typeof data.intent.summary !== 'string' || data.intent.summary.trim() === '') {
        errors.push('"intent.summary" must be a non-empty string');
      }
    }
  }

  // recipe: object with required layout + components
  if (data.recipe !== undefined) {
    if (typeof data.recipe !== 'object' || Array.isArray(data.recipe)) {
      errors.push('"recipe" must be an object');
    } else {
      if (typeof data.recipe.layout !== 'string' || data.recipe.layout.trim() === '') {
        errors.push('"recipe.layout" must be a non-empty string');
      }

      if (!Array.isArray(data.recipe.components) || data.recipe.components.length === 0) {
        errors.push('"recipe.components" must be a non-empty array');
      } else {
        data.recipe.components.forEach((item, idx) => {
          if (typeof item !== 'object' || Array.isArray(item)) {
            errors.push(`"recipe.components[${idx}]" must be an object`);
            return;
          }
          if (typeof item.component !== 'string' || item.component.trim() === '') {
            errors.push(`"recipe.components[${idx}].component" must be a non-empty string`);
          }
          if (typeof item.role !== 'string' || item.role.trim() === '') {
            errors.push(`"recipe.components[${idx}].role" must be a non-empty string`);
          }
        });
      }

      if (data.recipe.notes !== undefined && typeof data.recipe.notes !== 'string') {
        errors.push('"recipe.notes" must be a string when present');
      }
    }
  }

  return errors;
}

// ─── Main ───────────────────────────────────────────────────────────────────

console.log(`${BOLD}AgnosticUI Playbook Schema Validator${RESET}`);
console.log(`Schema: ${CYAN}${relative(ROOT, SCHEMA_PATH)}${RESET}\n`);

if (!existsSync(SCHEMA_PATH)) {
  console.error(`${RED}Schema file not found: ${SCHEMA_PATH}${RESET}`);
  process.exit(1);
}

// ── Schema health check (runs even when no sdui.json files exist yet) ────────
console.log(`${BOLD}playbooks/playbook-sdui.schema.json${RESET}`);
const schema = JSON.parse(readFileSync(SCHEMA_PATH, 'utf-8'));
const schemaIssues = checkSchemaHealth(schema);
if (schemaIssues.length > 0) {
  for (const p of schemaIssues) fail(`Missing description: ${p}`);
  console.log('');
  process.exit(1);
}
pass('All schema nodes have descriptions');
console.log('');

const files = findSduiFiles(PLAYBOOKS_DIR);

if (files.length === 0) {
  console.log(`${YELLOW}No sdui.json files found under v2/playbooks/ — nothing to validate.${RESET}`);
  process.exit(0);
}

console.log(`Found ${files.length} sdui.json file(s)\n`);

let totalErrors = 0;

for (const filePath of files.sort()) {
  const rel = relative(ROOT, filePath);
  console.log(`${BOLD}${rel}${RESET}`);

  let data;
  try {
    data = JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch (err) {
    fail(`Invalid JSON: ${err.message}`);
    totalErrors++;
    continue;
  }

  const errors = validateSdui(data);

  if (errors.length === 0) {
    pass('Valid');
  } else {
    for (const err of errors) {
      fail(err);
    }
    totalErrors += errors.length;
  }

  console.log('');
}

console.log(`${BOLD}Summary:${RESET} ${totalErrors === 0
  ? `${GREEN}All ${files.length} file(s) valid${RESET}`
  : `${RED}${totalErrors} error(s) across ${files.length} file(s)${RESET}`
}`);

process.exit(totalErrors > 0 ? 1 : 0);
