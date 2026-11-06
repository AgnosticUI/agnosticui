// v2/sdui/demo-support-center/src/client/vocabularyGuard.ts

// Now cleanly importing from our unified types location
import { type AgNode } from './index.js';

export const ALLOWED_VOCABULARY = Object.freeze([
  'AgCard',
  'AgInput',
  'AgButton',
  'AgMessageBubble',
  'AgText'
] as const);

export function isNodeVocabularyValid(node: unknown): node is AgNode {
  console.log('[GUARD_AUDIT] Inspecting incoming layout node vocabulary profile...');

  if (!node || typeof node !== 'object') {
    console.warn('[GUARD_WARN] 🛡️ Rejected node: Input data structure is not an object.');
    return false;
  }

  const candidate = node as Record<string, any>;

  if (typeof candidate.id !== 'string' || typeof candidate.component !== 'string') {
    console.warn('[GUARD_WARN] 🛡️ Rejected node: Missing mandatory "id" or "component" string keys.');
    return false;
  }

  const isValidComponent = ALLOWED_VOCABULARY.includes(candidate.component as any);

  if (!isValidComponent) {
    console.warn(`[GUARD_WARN] 🛡️ Anti-Hallucination Intercept: Blocked unauthorized component tag "${candidate.component}"`);
    return false;
  }

  console.log(`[GUARD_SUCCESS] ✅ Node layout tag "${candidate.component}" matches vocabulary constraints.`);
  return true;
}
