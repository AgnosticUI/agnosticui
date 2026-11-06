// v2/sdui/demo-support-center/src/client/index.ts

import { type AgNode } from '@agnosticui/schema';

// Re-export the canonical layout type straight from our dogfooded core package boundary
export type { AgNode };

/**
 * Functional callback mapping signature tracking an individual parsed node event.
 * Securely bound to the unified discriminated union type schema.
 */
export type NodeCallback = (node: AgNode) => void;

/**
 * Functional callback mapping signature tracking network cycle completions or drops.
 */
export type StatusCallback = (status: 'CONNECTED' | 'COMPLETED' | 'FAILED') => void;
