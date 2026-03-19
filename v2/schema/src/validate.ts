import { AgNodeSchema } from './schema.js';
import type { AgNode } from './types.js';

export interface ValidateSuccess {
  success: true;
  data: AgNode;
}

export interface ValidateFailure {
  success: false;
  errors: string[];
}

export type ValidateResult = ValidateSuccess | ValidateFailure;

/**
 * Validate an unknown value against the AgNode discriminated union schema.
 *
 * Returns { success: true, data } on success or { success: false, errors }
 * on failure. Error messages include field paths for easy debugging.
 */
export function validate(value: unknown): ValidateResult {
  const result = AgNodeSchema.safeParse(value);
  if (result.success) {
    return { success: true, data: result.data as AgNode };
  }
  return {
    success: false,
    errors: result.error.errors.map(e => {
      const path = e.path.length ? `${e.path.join('.')}: ` : '';
      return `${path}${e.message}`;
    }),
  };
}

export interface GraphNodeError {
  nodeId: string;
  errors: string[];
}

export interface ValidateGraphResult {
  success: boolean;
  errors: GraphNodeError[];
}

/**
 * Validate an array of AgNodes as a complete graph.
 *
 * Each node is validated against the schema; child ID references are checked
 * to confirm every referenced ID exists within the same graph.
 *
 * Returns { success: true, errors: [] } when all nodes pass, or
 * { success: false, errors } with one entry per failing node.
 */
export function validateGraph(nodes: unknown[]): ValidateGraphResult {
  const errors: GraphNodeError[] = [];

  // Collect all declared IDs for child-ref checks.
  const ids = new Set<string>();
  for (const node of nodes) {
    if (node !== null && typeof node === 'object' && 'id' in node && typeof (node as Record<string, unknown>).id === 'string') {
      ids.add((node as Record<string, unknown>).id as string);
    }
  }

  for (const node of nodes) {
    const nodeId =
      node !== null && typeof node === 'object' && 'id' in node
        ? String((node as Record<string, unknown>).id)
        : '<unknown>';

    const result = validate(node);
    if (!result.success) {
      errors.push({ nodeId, errors: result.errors });
      continue;
    }

    // Check that every child ID reference resolves within this graph.
    const data = result.data as unknown as Record<string, unknown>;
    if (Array.isArray(data['children'])) {
      const missing = (data['children'] as string[]).filter(id => !ids.has(id));
      if (missing.length > 0) {
        errors.push({
          nodeId,
          errors: missing.map(id => `child ref "${id}" not found in graph`),
        });
      }
    }
  }

  return { success: errors.length === 0, errors };
}
