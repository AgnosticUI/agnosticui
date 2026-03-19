import { AgNodeSchema } from './schema.js';
import type { AgNode } from './types.js';
import { formatHints } from './hints.js';

export interface ValidateOptions {
  /**
   * When true, the failure result includes a `hints` array with human-readable
   * messages that name the component, offending prop, and a concrete suggestion.
   * Defaults to true when NODE_ENV is not "production".
   */
  dev?: boolean;
}

export interface ValidateSuccess {
  success: true;
  data: AgNode;
}

export interface ValidateFailure {
  success: false;
  /** Raw "path: message" strings from Zod — always present. */
  errors: string[];
  /** Actionable developer hints — present when dev mode is on. */
  hints?: string[];
}

export type ValidateResult = ValidateSuccess | ValidateFailure;

function isDev(options?: ValidateOptions): boolean {
  if (options?.dev !== undefined) return options.dev;
  return typeof process === 'undefined' || process.env?.['NODE_ENV'] !== 'production';
}

function extractComponentName(value: unknown): string | undefined {
  if (value !== null && typeof value === 'object' && 'component' in value) {
    const c = (value as Record<string, unknown>)['component'];
    return typeof c === 'string' ? c : undefined;
  }
  return undefined;
}

/**
 * Validate an unknown value against the AgNode discriminated union schema.
 *
 * Returns { success: true, data } on success or { success: false, errors }
 * on failure. In dev mode, also returns `hints` with actionable messages.
 */
export function validate(value: unknown, options?: ValidateOptions): ValidateResult {
  const result = AgNodeSchema.safeParse(value);
  if (result.success) {
    return { success: true, data: result.data as AgNode };
  }

  const issues = result.error.errors;
  const errors = issues.map(e => {
    const path = e.path.length ? `${e.path.join('.')}: ` : '';
    return `${path}${e.message}`;
  });

  const failure: ValidateFailure = { success: false, errors };

  if (isDev(options)) {
    failure.hints = formatHints(issues, extractComponentName(value));
  }

  return failure;
}

export interface GraphNodeError {
  nodeId: string;
  /** Raw "path: message" strings from Zod — always present. */
  errors: string[];
  /** Actionable developer hints — present when dev mode is on. */
  hints?: string[];
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
 * In dev mode, each GraphNodeError also includes `hints`.
 */
export function validateGraph(nodes: unknown[], options?: ValidateOptions): ValidateGraphResult {
  const errors: GraphNodeError[] = [];
  const dev = isDev(options);

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

    const result = validate(node, options);
    if (!result.success) {
      const entry: GraphNodeError = { nodeId, errors: result.errors };
      if (dev && result.hints) entry.hints = result.hints;
      errors.push(entry);
      continue;
    }

    // Check that every child ID reference resolves within this graph.
    const data = result.data as unknown as Record<string, unknown>;
    if (Array.isArray(data['children'])) {
      const missing = (data['children'] as string[]).filter(id => !ids.has(id));
      if (missing.length > 0) {
        const childErrors = missing.map(id => `child ref "${id}" not found in graph`);
        const entry: GraphNodeError = { nodeId, errors: childErrors };
        if (dev) entry.hints = childErrors; // child-ref errors are already human-readable
        errors.push(entry);
      }
    }
  }

  return { success: errors.length === 0, errors };
}
