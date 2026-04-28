#!/usr/bin/env node
/**
 * draft-sdui-json.mjs <playbook-name>
 *
 * Generates a scaffold sdui.json for a playbook that has PROMPT-3-FRAMEWORKS.md
 * but no sdui.json. Real data where extractable (slug, displayName, component names);
 * TODO placeholder strings for semantic fields that require human authorship
 * (layout, component roles, triggers, description, notes).
 *
 * The output is structurally valid against playbook-sdui.schema.json so the human
 * only needs to replace TODO strings — no need to learn the schema from scratch.
 *
 * Usage:
 *   node v2/scripts/draft-sdui-json.mjs <playbook-name>
 *
 * Example:
 *   node v2/scripts/draft-sdui-json.mjs my-new-playbook
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PLAYBOOKS_DIR = join(ROOT, 'playbooks');

const RESET  = '\x1b[0m';
const RED    = '\x1b[31m';
const GREEN  = '\x1b[32m';
const CYAN   = '\x1b[36m';
const BOLD   = '\x1b[1m';

const playbookName = process.argv[2];
if (!playbookName) {
  console.error(`${RED}Usage: node v2/scripts/draft-sdui-json.mjs <playbook-name>${RESET}`);
  process.exit(1);
}

const playbookDir = join(PLAYBOOKS_DIR, playbookName);
const promptPath = join(playbookDir, 'PROMPT-3-FRAMEWORKS.md');
const outputPath = join(playbookDir, 'sdui.json');

if (!existsSync(playbookDir)) {
  console.error(`${RED}Playbook directory not found: ${playbookDir}${RESET}`);
  process.exit(1);
}

if (!existsSync(promptPath)) {
  console.error(`${RED}No PROMPT-3-FRAMEWORKS.md found at ${promptPath}${RESET}`);
  process.exit(1);
}

if (existsSync(outputPath)) {
  console.error(`${RED}sdui.json already exists at ${outputPath}${RESET}`);
  console.error(`Remove it first if you want to regenerate the scaffold.`);
  process.exit(1);
}

const promptContent = readFileSync(promptPath, 'utf-8');

// Extract unique component names from all `npx agnosticui-cli add ...` lines.
// The same component list appears once per framework — deduplicate across all three.
const addMatches = [...promptContent.matchAll(/npx agnosticui-cli add\s+([\w\s\\]+)/g)];
const components = [
  ...new Set(
    addMatches.flatMap(m =>
      m[1].replace(/\\\s*/g, ' ').trim().split(/\s+/)
    )
  )
].filter(Boolean);

function toDisplayName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const slug = playbookName;
const displayName = toDisplayName(slug);

const sdui = {
  $schema: '../playbook-sdui.schema.json',
  version: 1,
  slug,
  displayName,
  description: `TODO: One sentence describing what the ${displayName} playbook demonstrates.`,
  intent: {
    triggers: [slug, `TODO: add synonyms and domain terms (e.g. "${displayName.toLowerCase()} page", "...")`],
    summary: `TODO: When the user asks for a ${displayName.toLowerCase()}, refer to the AgnosticUI ${displayName} Playbook.`
  },
  recipe: {
    layout: 'TODO: Plain-English description of the page layout skeleton — describe regions, not components.',
    components: components.map(name => ({
      component: `Ag${name}`,
      role: `TODO: What does Ag${name} do in this specific playbook?`
    })),
    notes: 'TODO: Optional — 1-2 implementation hints with a small AgNode JSON snippet as syntax flavor. Delete this field if not needed.'
  }
};

writeFileSync(outputPath, JSON.stringify(sdui, null, 2) + '\n');

console.log(`${GREEN}✓${RESET} Scaffold written to ${BOLD}${outputPath}${RESET}`);
console.log(`  Components detected (${components.length}): ${CYAN}${components.join(', ')}${RESET}`);
console.log(`\nNext steps:`);
console.log(`  1. Open ${outputPath} and replace every TODO string`);
console.log(`     (see v2/docs/agentic-intent-authoring-guide.md for field guidance)`);
console.log(`  2. Validate:`);
console.log(`     ${CYAN}node v2/scripts/validate-playbook-schemas.mjs${RESET}`);
