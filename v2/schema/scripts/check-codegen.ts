// v2/schema/scripts/check-codegen.ts
// Run: npm run check-codegen   (from v2/schema/)
//
// Verifies that all committed generated files match what codegen would produce.
// Exits non-zero with a diff if any file is out of sync.

import { resolve } from 'path';
import { writeFileSync, readFileSync, mkdirSync } from 'fs';
import { tmpdir } from 'os';
import { execSync } from 'child_process';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { AgNodeSchema } from '../src/schema.js';
import {
  ROOT,
  SCHEMA_ROOT,
  buildComponents,
  generateTypesTs,
  generateSchemaTs,
  generateIndexTs,
  generateReactRenderer,
  generateVueRenderer,
  generateLitRenderer,
} from './codegen.js';

function generateSchemaJson(): string {
  const schema = zodToJsonSchema(AgNodeSchema, { $refStrategy: 'none' });
  return JSON.stringify(schema, null, 2) + '\n';
}

const RENDERERS_ROOT = resolve(ROOT, 'v2/renderers');

interface CheckTarget {
  label: string;
  committedPath: string;
  generate: () => string;
}

async function main() {
  const components = await buildComponents();

  const targets: CheckTarget[] = [
    {
      label: 'v2/schema/src/types.ts',
      committedPath: resolve(SCHEMA_ROOT, 'src/types.ts'),
      generate: () => generateTypesTs(components),
    },
    {
      label: 'v2/schema/src/schema.ts',
      committedPath: resolve(SCHEMA_ROOT, 'src/schema.ts'),
      generate: () => generateSchemaTs(components),
    },
    {
      label: 'v2/schema/src/index.ts',
      committedPath: resolve(SCHEMA_ROOT, 'src/index.ts'),
      generate: () => generateIndexTs(components.map(c => c.name)),
    },
    {
      label: 'v2/renderers/react/src/AgDynamicRenderer.tsx',
      committedPath: resolve(RENDERERS_ROOT, 'react/src/AgDynamicRenderer.tsx'),
      generate: () => generateReactRenderer(components),
    },
    {
      label: 'v2/renderers/vue/src/AgDynamicRenderer.ts',
      committedPath: resolve(RENDERERS_ROOT, 'vue/src/AgDynamicRenderer.ts'),
      generate: () => generateVueRenderer(components),
    },
    {
      label: 'v2/renderers/lit/src/AgDynamicRenderer.ts',
      committedPath: resolve(RENDERERS_ROOT, 'lit/src/AgDynamicRenderer.ts'),
      generate: () => generateLitRenderer(components),
    },
    {
      label: 'v2/schema/agnosticui-schema.json',
      committedPath: resolve(SCHEMA_ROOT, 'agnosticui-schema.json'),
      generate: () => generateSchemaJson(),
    },
  ];

  const tmpDir = resolve(tmpdir(), `agnosticui-check-codegen-${process.pid}`);
  mkdirSync(tmpDir, { recursive: true });

  const failed: string[] = [];

  for (const target of targets) {
    const generated = target.generate();
    const committed = readFileSync(target.committedPath, 'utf8');

    if (generated === committed) {
      console.log(`  ok  ${target.label}`);
      continue;
    }

    // Write to temp file for diff output
    const tmpFile = resolve(tmpDir, target.label.replace(/\//g, '_'));
    writeFileSync(tmpFile, generated, 'utf8');

    console.error(`  DIFF  ${target.label}`);
    try {
      // diff exits 1 when files differ; execSync throws, so we catch and print output
      execSync(`diff -u "${target.committedPath}" "${tmpFile}"`, { stdio: 'pipe' });
    } catch (err: unknown) {
      const e = err as { stdout?: Buffer; stderr?: Buffer };
      if (e.stdout) process.stderr.write(e.stdout);
    }

    failed.push(target.label);
  }

  console.log('');

  if (failed.length > 0) {
    // Map each failed label back to a repo-root-relative path for the git add instruction
    const failedPaths = failed.map(label => {
      const t = targets.find(x => x.label === label)!;
      return t.committedPath.replace(ROOT + '/', '');
    });

    console.error(
      `check-codegen: ${failed.length} file(s) are out of sync with codegen output:\n` +
      failed.map(f => `  - ${f}`).join('\n') +
      '\n\nThese files are AUTO-GENERATED. To fix, regenerate them and commit the result:\n\n' +
      '  cd v2/schema\n' +
      '  npm run codegen -- --emit-schema-json\n' +
      `  git add ${failedPaths.join(' \\\n        ')}\n` +
      '  git commit -m "regen: update generated files"\n' +
      '  git push\n'
    );
    process.exit(1);
  }

  console.log(`check-codegen: all ${targets.length} files are up to date.`);
}

main().catch(err => { console.error(err); process.exit(1); });
