import { describe, it, expect } from 'vitest';
import { validate, validateGraph } from './validate.js';
import { formatHint, formatHints } from './hints.js';
import type { ZodIssue } from 'zod';

describe('@agnosticui/schema — validate()', () => {
  // ─── Shared rules ────────────────────────────────────────────────────────────

  it('requires an id field', () => {
    const result = validate({ component: 'AgButton' });
    expect(result.success).toBe(false);
  });

  it('requires a component field', () => {
    const result = validate({ id: 'btn-1' });
    expect(result.success).toBe(false);
  });

  it('rejects an unknown component name', () => {
    const result = validate({ id: 'x-1', component: 'AgUnknown' });
    expect(result.success).toBe(false);
  });

  it('rejects a non-object value', () => {
    expect(validate(null).success).toBe(false);
    expect(validate(42).success).toBe(false);
    expect(validate('AgButton').success).toBe(false);
  });

  it('populates errors with field paths on failure', () => {
    const result = validate({ id: 'btn-1', component: 'AgButton', variant: 'bad-value' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toMatch(/variant/);
    }
  });

  // ─── validateGraph() ─────────────────────────────────────────────────────────

  describe('validateGraph()', () => {
    it('returns success for a valid single-node graph', () => {
      const result = validateGraph([{ id: 'btn-1', component: 'AgButton', variant: 'primary' }]);
      expect(result.success).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('returns success for a multi-node graph with valid child refs', () => {
      const result = validateGraph([
        { id: 'card-1', component: 'AgCard', children: ['btn-1'] },
        { id: 'btn-1', component: 'AgButton', variant: 'secondary' },
      ]);
      expect(result.success).toBe(true);
    });

    it('fails when a node does not pass schema validation', () => {
      const result = validateGraph([{ id: 'btn-1', component: 'AgButton', variant: 'rainbow' }]);
      expect(result.success).toBe(false);
      expect(result.errors[0].nodeId).toBe('btn-1');
      expect(result.errors[0].errors[0]).toMatch(/variant/);
    });

    it('fails when a child ref ID is missing from the graph', () => {
      const result = validateGraph([
        { id: 'card-1', component: 'AgCard', children: ['missing-id'] },
      ]);
      expect(result.success).toBe(false);
      expect(result.errors[0].nodeId).toBe('card-1');
      expect(result.errors[0].errors[0]).toMatch(/missing-id/);
    });

    it('reports all failing nodes, not just the first', () => {
      const result = validateGraph([
        { id: 'btn-1', component: 'AgButton', variant: 'bad' },
        { id: 'btn-2', component: 'AgButton', size: 'xxl' },
      ]);
      expect(result.success).toBe(false);
      expect(result.errors).toHaveLength(2);
    });

    it('returns success for an empty graph', () => {
      expect(validateGraph([]).success).toBe(true);
    });
  });

  // ─── Developer hints ─────────────────────────────────────────────────────────

  describe('dev hints', () => {
    it('returns hints when dev: true and an enum value is wrong', () => {
      const result = validate({ id: 'btn-1', component: 'AgButton', variant: 'rainbow' }, { dev: true });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.hints).toBeDefined();
        expect(result.hints![0]).toMatch(/\[AgButton\]/);
        expect(result.hints![0]).toMatch(/rainbow/);
        expect(result.hints![0]).toMatch(/primary/);
      }
    });

    it('returns hints when dev: true and a required prop is missing', () => {
      const result = validate({ component: 'AgButton' }, { dev: true });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.hints).toBeDefined();
        expect(result.hints![0]).toMatch(/required/);
      }
    });

    it('returns hints when dev: true and an unknown prop is present', () => {
      const result = validate({ id: 'btn-1', component: 'AgButton', label: 'bad' }, { dev: true });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.hints).toBeDefined();
        expect(result.hints!.some(h => h.toLowerCase().includes('unknown') || h.toLowerCase().includes('unrecognized'))).toBe(true);
        expect(result.hints!.join(' ')).toMatch(/label/);
      }
    });

    it('does not include hints when dev: false', () => {
      const result = validate({ id: 'btn-1', component: 'AgButton', variant: 'rainbow' }, { dev: false });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.hints).toBeUndefined();
      }
    });

    it('includes hints in validateGraph errors when dev: true', () => {
      const result = validateGraph([{ id: 'btn-1', component: 'AgButton', variant: 'rainbow' }], { dev: true });
      expect(result.success).toBe(false);
      expect(result.errors[0].hints).toBeDefined();
      expect(result.errors[0].hints![0]).toMatch(/\[AgButton\]/);
    });
  });

  // ─── formatHints() ────────────────────────────────────────────────────────────

  describe('formatHints()', () => {
    it('formats an invalid_enum_value issue', () => {
      const issue: ZodIssue = {
        code: 'invalid_enum_value',
        path: ['variant'],
        message: 'Invalid enum value',
        options: ['primary', 'secondary'],
        received: 'rainbow',
      };
      const hint = formatHint(issue, 'AgButton');
      expect(hint).toBe('[AgButton] variant: "rainbow" is not a valid value. Expected one of: "primary", "secondary".');
    });

    it('formats an invalid_type (missing required) issue', () => {
      const issue: ZodIssue = {
        code: 'invalid_type',
        path: ['id'],
        message: 'Required',
        expected: 'string',
        received: 'undefined',
      };
      const hint = formatHint(issue, 'AgButton');
      expect(hint).toBe('[AgButton] id: required but missing.');
    });

    it('formats an unrecognized_keys issue', () => {
      const issue: ZodIssue = {
        code: 'unrecognized_keys',
        path: [],
        message: 'Unrecognized key(s)',
        keys: ['label', 'foo'],
      };
      const hint = formatHint(issue, 'AgButton');
      expect(hint).toMatch(/Unknown props/);
      expect(hint).toMatch(/"label"/);
      expect(hint).toMatch(/"foo"/);
    });

    it('formatHints returns an array of hint strings', () => {
      const issues: ZodIssue[] = [
        { code: 'invalid_enum_value', path: ['variant'], message: '', options: ['primary'], received: 'bad' },
        { code: 'invalid_type', path: ['id'], message: 'Required', expected: 'string', received: 'undefined' },
      ];
      const hints = formatHints(issues, 'AgButton');
      expect(hints).toHaveLength(2);
      expect(hints[0]).toMatch(/variant/);
      expect(hints[1]).toMatch(/id/);
    });
  });

  // ─── AgButton ─────────────────────────────────────────────────────────────────

  describe('AgButton', () => {
    it('accepts a minimal valid node', () => {
      expect(validate({ id: 'btn-1', component: 'AgButton' }).success).toBe(true);
    });

    it('accepts a fully-specified node', () => {
      const result = validate({
        id: 'btn-1',
        component: 'AgButton',
        variant: 'primary',
        size: 'md',
        shape: 'capsule',
        disabled: false,
        loading: false,
        type: 'submit',
        children: ['child-1'],
        on_click: 'SUBMIT_FORM',
      });
      expect(result.success).toBe(true);
    });

    it('accepts all valid variant values', () => {
      for (const variant of ['success', 'primary', 'secondary', 'warning', 'danger', 'monochrome']) {
        expect(validate({ id: 'btn-1', component: 'AgButton', variant }).success).toBe(true);
      }
    });

    it('rejects an invalid variant', () => {
      expect(validate({ id: 'btn-1', component: 'AgButton', variant: 'rainbow' }).success).toBe(false);
    });

    it('rejects an invalid size', () => {
      expect(validate({ id: 'btn-1', component: 'AgButton', size: 'xxl' }).success).toBe(false);
    });

    it('rejects an invalid type', () => {
      expect(validate({ id: 'btn-1', component: 'AgButton', type: 'image' }).success).toBe(false);
    });

    it('accepts a string action alias for on_click', () => {
      expect(validate({ id: 'btn-1', component: 'AgButton', on_click: 'SUBMIT_FORM' }).success).toBe(true);
    });
  });

  // ─── AgCard ───────────────────────────────────────────────────────────────────

  describe('AgCard', () => {
    it('accepts a minimal valid node', () => {
      expect(validate({ id: 'card-1', component: 'AgCard' }).success).toBe(true);
    });

    it('accepts children (array of id strings)', () => {
      expect(validate({ id: 'card-1', component: 'AgCard', children: ['btn-1', 'btn-2'] }).success).toBe(true);
    });

    it('rejects an invalid rounded value', () => {
      expect(validate({ id: 'card-1', component: 'AgCard', rounded: 'xl' }).success).toBe(false);
    });

    it('rejects an invalid variant', () => {
      expect(validate({ id: 'card-1', component: 'AgCard', variant: 'primary' }).success).toBe(false);
    });
  });

  // ─── AgInput ──────────────────────────────────────────────────────────────────

  describe('AgInput', () => {
    it('accepts a minimal valid node', () => {
      expect(validate({ id: 'input-1', component: 'AgInput' }).success).toBe(true);
    });

    it('accepts a fully-specified node', () => {
      expect(validate({
        id: 'input-1',
        component: 'AgInput',
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'you@example.com',
        required: true,
        on_change: 'UPDATE_EMAIL',
      }).success).toBe(true);
    });

    it('rejects an invalid input type', () => {
      expect(validate({ id: 'input-1', component: 'AgInput', type: 'textarea' }).success).toBe(false);
    });
  });

  // ─── AgSelect ─────────────────────────────────────────────────────────────────

  describe('AgSelect', () => {
    it('accepts a minimal valid node', () => {
      expect(validate({ id: 'sel-1', component: 'AgSelect' }).success).toBe(true);
    });

    it('accepts valid size values', () => {
      expect(validate({ id: 'sel-1', component: 'AgSelect', size: 'small' }).success).toBe(true);
      expect(validate({ id: 'sel-1', component: 'AgSelect', size: 'large' }).success).toBe(true);
    });

    it('rejects an invalid size', () => {
      expect(validate({ id: 'sel-1', component: 'AgSelect', size: 'medium' }).success).toBe(false);
    });
  });

  // ─── AgCheckbox ───────────────────────────────────────────────────────────────

  describe('AgCheckbox', () => {
    it('accepts a minimal valid node', () => {
      expect(validate({ id: 'chk-1', component: 'AgCheckbox' }).success).toBe(true);
    });

    it('accepts a fully-specified node', () => {
      expect(validate({
        id: 'chk-1',
        component: 'AgCheckbox',
        name: 'agree',
        labelText: 'I agree',
        checked: false,
        required: true,
        on_change: 'TOGGLE_AGREE',
      }).success).toBe(true);
    });
  });

  // ─── AgToggle ─────────────────────────────────────────────────────────────────

  describe('AgToggle', () => {
    it('accepts a minimal valid node', () => {
      expect(validate({ id: 'tog-1', component: 'AgToggle' }).success).toBe(true);
    });

    it('accepts all valid variant values', () => {
      for (const variant of ['default', 'success', 'warning', 'danger', 'monochrome']) {
        expect(validate({ id: 'tog-1', component: 'AgToggle', variant }).success).toBe(true);
      }
    });

    it('rejects an invalid variant', () => {
      expect(validate({ id: 'tog-1', component: 'AgToggle', variant: 'primary' }).success).toBe(false);
    });

    it('rejects an invalid size', () => {
      expect(validate({ id: 'tog-1', component: 'AgToggle', size: 'x-sm' }).success).toBe(false);
    });
  });
});
