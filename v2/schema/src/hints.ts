import { ZodIssueCode, type ZodIssue } from 'zod';

/**
 * Formats a single Zod issue into a human-readable developer hint.
 * Includes the component name (when known), the offending prop path,
 * and a concrete suggestion where possible.
 */
export function formatHint(issue: ZodIssue, componentName?: string): string {
  const path = issue.path.length ? issue.path.join('.') : '(root)';
  const prefix = componentName ? `[${componentName}] ` : '';

  switch (issue.code) {
    case ZodIssueCode.invalid_enum_value: {
      const expected = issue.options.map(o => `"${o}"`).join(', ');
      return `${prefix}${path}: "${issue.received}" is not a valid value. Expected one of: ${expected}.`;
    }

    case ZodIssueCode.invalid_type: {
      if (issue.received === 'undefined') {
        return `${prefix}${path}: required but missing.`;
      }
      return `${prefix}${path}: expected ${issue.expected} but received ${issue.received}.`;
    }

    case ZodIssueCode.unrecognized_keys: {
      const keys = issue.keys.map(k => `"${k}"`).join(', ');
      const plural = issue.keys.length > 1;
      return `${prefix}Unknown prop${plural ? 's' : ''}: ${keys}. Remove ${plural ? 'them' : 'it'} or check the schema for valid props.`;
    }

    case ZodIssueCode.invalid_literal: {
      return `${prefix}${path}: expected ${JSON.stringify(issue.expected)} but received ${JSON.stringify(issue.received)}.`;
    }

    case ZodIssueCode.too_small: {
      const min = issue.minimum;
      return `${prefix}${path}: value is too small (minimum is ${min}).`;
    }

    case ZodIssueCode.too_big: {
      const max = issue.maximum;
      return `${prefix}${path}: value is too large (maximum is ${max}).`;
    }

    default:
      return `${prefix}${path}: ${issue.message}`;
  }
}

/**
 * Formats a list of Zod issues into an array of human-readable developer hints.
 */
export function formatHints(issues: ZodIssue[], componentName?: string): string[] {
  return issues.map(issue => formatHint(issue, componentName));
}
