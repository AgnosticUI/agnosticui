/**
 * @file nodeGuard.ts
 * @description Domain-focused verification guard executing edge action sanitization
 * and core schema structural compliance audits.
 */

import { validate, type AgNode } from '@agnosticui/schema';
import { ACTION_DICTIONARY } from './actions.js';

/**
 * Intercepts untrusted objects, neutralizes non-component tokens, and enforces schema boundaries.
 * @param parsedNode - Raw, unbalanced object payload extracted from the text stream buffer.
 * @returns AgNode | null - Clean, fully validated node graph on success; null on validation dropping.
 */
export function sanitizeAndValidateNode(parsedNode: any): AgNode | null {
  if (!parsedNode) return null;

  // 1. Edge-Level Action Sanitization
  if (parsedNode.actionToken !== undefined) {
    const token = parsedNode.actionToken;
    if (typeof token === 'string' && (token.startsWith('javascript:') || !ACTION_DICTIONARY[token])) {
      console.warn(`[NODE_GUARD] 🛡️ Intercepted and scrubbed malicious or unauthorized action: "${token}"`);
    }
    // Wipe token property to clean the object layout before validation audits run
    delete parsedNode.actionToken;
  }

  // 2. Structural Library Schema Audit
  const validationOutcome = validate(parsedNode, { dev: true });
  if (!validationOutcome.success) {
    console.error('\n❌ [NODE_GUARD_FAILURE] Node layout violated core schema properties!');
    console.error('❌ Zod Validation Fault Array:', validationOutcome.errors);
    return null;
  }

  return validationOutcome.data;
}
