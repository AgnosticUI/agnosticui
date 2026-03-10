import { describe, it, expect } from 'vitest';
import { validate } from './validate.js';

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

  // ─── AgButton ─────────────────────────────────────────────────────────────────

  describe('AgButton', () => {
    it('accepts a minimal valid node', () => {
      expect(validate({ id: 'btn-1', component: 'AgButton' }).success).toBe(true);
    });

    it('accepts a fully-specified node', () => {
      const result = validate({
        id: 'btn-1',
        component: 'AgButton',
        label: 'Submit',
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
