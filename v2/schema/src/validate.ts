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
