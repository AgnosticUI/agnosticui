/**
 * @file vitest.shared.mts
 * @description Shared Vite/Vitest module deduplication helper for v2/a2ui renderers.
 * Ensures Lit 3 and @lit-labs/signals resolve to a single runtime instance across
 * symlinked file:../lit dependencies during local monorepo test runs.
 */

import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const A2UI_ROOT = dirname(fileURLToPath(import.meta.url));
const LIT_NM = resolve(A2UI_ROOT, 'renderers/lit/node_modules');

export function sharedA2uiResolve(extraDedupe: string[] = []) {
  return {
    dedupe: [
      'lit',
      '@lit/reactive-element',
      'lit-html',
      'lit-element',
      '@lit-labs/signals',
      'zod',
      ...extraDedupe,
    ],
    alias: [
      {
        find: /^@agnosticui\/a2ui-lit$/,
        replacement: resolve(A2UI_ROOT, 'renderers/lit/src/index.ts'),
      },
      { find: /^lit$/, replacement: resolve(LIT_NM, 'lit/index.js') },
      { find: /^lit\/(.*)$/, replacement: resolve(LIT_NM, 'lit/$1') },
      {
        find: /^@lit\/reactive-element$/,
        replacement: resolve(
          LIT_NM,
          '@lit/reactive-element/reactive-element.js',
        ),
      },
      { find: /^lit-html$/, replacement: resolve(LIT_NM, 'lit-html/lit-html.js') },
      {
        find: /^lit-element$/,
        replacement: resolve(LIT_NM, 'lit-element/index.js'),
      },
      {
        find: /^@lit-labs\/signals$/,
        replacement: resolve(LIT_NM, '@lit-labs/signals/index.js'),
      },
    ],
  };
}
