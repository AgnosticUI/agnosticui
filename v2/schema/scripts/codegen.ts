// Stub for sub-issue #369 — validates codegen.config.ts against live source interfaces.
// Full code generation implemented in sub-issue #370.

import { Project, type Symbol as MorphSymbol } from 'ts-morph';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { omitConfig, actionAliasMap, skipComponents } from './codegen.config.js';

// scripts/ -> schema/ -> v2/ -> agnosticui/
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const GLOB = `${ROOT}/v2/lib/src/components/*/core/_*.ts`;

function isFunctionSymbol(sym: MorphSymbol): boolean {
  const decl = sym.getValueDeclaration();
  if (!decl) return false;
  // getNonNullableType strips `| undefined` from optional props before checking
  return decl.getType().getNonNullableType().getCallSignatures().length > 0;
}

async function main() {
  const project = new Project({
    tsConfigFilePath: resolve(ROOT, 'v2/lib/tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
  });
  project.addSourceFilesAtPaths(GLOB);

  // Exclude spec files picked up by the glob
  const sourceFiles = project.getSourceFiles().filter(
    sf => !sf.getFilePath().endsWith('.spec.ts')
  );

  let errors = 0;

  // --- Validate omitConfig entries ---
  for (const sf of sourceFiles) {
    const parts = sf.getFilePath().split('/');
    const coreIdx = parts.lastIndexOf('core');
    if (coreIdx < 1) continue;
    const componentName = parts[coreIdx - 1];

    if (skipComponents.includes(componentName)) continue;

    const sdui = `Ag${componentName}`;
    if (!(sdui in omitConfig)) continue;

    const iface = sf.getInterface(`${componentName}Props`);
    if (!iface) {
      console.warn(
        `WARN: no ${componentName}Props in ${sf.getFilePath()} — skipping stale check for ${sdui}`
      );
      continue;
    }

    // Use getType().getProperties() to include props inherited from base interfaces
    const allProps = iface.getType().getProperties();
    const propByName = new Map(allProps.map(sym => [sym.getName(), sym]));

    for (const omittedProp of omitConfig[sdui]) {
      if (!propByName.has(omittedProp)) {
        console.error(
          `ERROR: omitConfig lists '${omittedProp}' in ${sdui} ` +
          `but ${componentName}Props no longer has that property. Remove it.`
        );
        errors++;
        continue;
      }

      // Must not be function-typed — those are auto-detected, not manually listed
      const sym = propByName.get(omittedProp)!;
      if (isFunctionSymbol(sym)) {
        console.error(
          `ERROR: omitConfig lists '${omittedProp}' in ${sdui} ` +
          `but that prop is function-typed and will be auto-detected. ` +
          `Remove it from omitConfig (add to actionAliasMap if it needs a string alias).`
        );
        errors++;
      }
    }
  }

  // --- Validate actionAliasMap entries ---
  // Collect all function-typed prop names across every discovered Props interface
  const allFunctionPropNames = new Set<string>();
  for (const sf of sourceFiles) {
    const parts = sf.getFilePath().split('/');
    const coreIdx = parts.lastIndexOf('core');
    if (coreIdx < 1) continue;
    const componentName = parts[coreIdx - 1];
    if (skipComponents.includes(componentName)) continue;

    const iface = sf.getInterface(`${componentName}Props`);
    if (!iface) continue;

    for (const sym of iface.getType().getProperties()) {
      if (isFunctionSymbol(sym)) {
        allFunctionPropNames.add(sym.getName());
      }
    }
  }

  for (const aliasKey of Object.keys(actionAliasMap)) {
    if (!allFunctionPropNames.has(aliasKey)) {
      console.warn(
        `WARN: actionAliasMap lists '${aliasKey}' but no discovered Props interface has that function prop.`
      );
    }
  }

  if (errors > 0) process.exit(1);
  console.log('codegen.config.ts is valid.');
}

main().catch(err => { console.error(err); process.exit(1); });
