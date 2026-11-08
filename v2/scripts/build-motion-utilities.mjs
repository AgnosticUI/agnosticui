// v2/scripts/build-motion-utilities.mjs
import fs from 'fs';
import path from 'path';
import { sharedUtilityRules } from '../lib/src/styles/motion.styles.ts';

const outputPath = path.resolve('./dist/styles/motion-utilities.css');

// Formulate the auto-generated banner block to prevent manual drift
const cssContent = `/**
 * @file ag-motion-utilities.css
 * @description Auto-generated from motion.styles.ts. Do not edit directly.
 * Copyright (c) 2026 AgnosticUI OSS
 */

${sharedUtilityRules.cssText}`;

try {
  // Ensure the target directory structure exists prior to writing
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, cssContent, 'utf-8');
  console.log('✅ Success: dist/styles/motion-utilities.css generated cleanly from source of truth!');
} catch (error) {
  console.error('❌ Error compiling motion utilities asset:', error);
  process.exit(1);
}
