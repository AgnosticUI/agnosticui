// v2/schema/scripts/emit-schema-json.ts
// Converts the live AgNodeSchema Zod object to a JSON Schema document and
// writes it to v2/schema/agnosticui-schema.json.
//
// Run directly:   tsx scripts/emit-schema-json.ts
// Via codegen:    npm run codegen -- --emit-schema-json

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { AgNodeSchema } from '../src/schema.js';

const SCHEMA_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_PATH = resolve(SCHEMA_ROOT, 'agnosticui-schema.json');

const schema = zodToJsonSchema(AgNodeSchema, { $refStrategy: 'none' });
const json = JSON.stringify(schema, null, 2) + '\n';

writeFileSync(OUT_PATH, json, 'utf8');
console.log('agnosticui-schema.json written.');
