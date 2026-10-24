// v2/lib/src/components/Input/core/_InputFallback.spec.ts
import { describe, it, expect } from 'vitest';
import { _InputFallback } from './_InputFallback';

describe('_InputFallback Engine', () => {
  it('renders a default text input layout configuration', () => {
    const html = _InputFallback({ value: 'Initial Text' });
    expect(html).toContain('<input');
    expect(html).toContain('type="text"');
    expect(html).toContain('value="Initial Text"');
    expect(html).not.toContain('disabled');
    expect(html).not.toContain('required');
  });

  it('renders a textarea configuration when type is textarea', () => {
    const html = _InputFallback({ type: 'textarea', value: 'Comments block', rows: 6, cols: 40 });
    expect(html).toContain('<textarea');
    expect(html).toContain('rows="6"');
    expect(html).toContain('cols="40"');
    expect(html).toContain('Comments block');
    expect(html).not.toContain('<input');
  });

  it('handles visible label elements and mandatory indicator markers cleanly', () => {
    const html = _InputFallback({ label: 'Your Password', required: true });
    expect(html).toContain('Your Password');
    expect(html).toContain('ag-input__required');
    expect(html).toContain('required');
    expect(html).toContain('aria-required="true"');
  });

  it('hides the label container visually when labelHidden parameter is flagged', () => {
    const html = _InputFallback({ label: 'Screen Reader Only', labelHidden: true });
    expect(html).toContain('Screen Reader Only');
    expect(html).toContain('ag-form-control__label--hidden');
    expect(html).toContain('ag-input__label--hidden');
  });

  it('skips label block assembly entirely if noLabel configuration is selected', () => {
    const html = _InputFallback({ label: 'Skipped Label', noLabel: true });
    expect(html).not.toContain('Skipped Label');
    expect(html).not.toContain('<label');
  });

  it('supports explicit aria-label parameters for icon-only variations', () => {
    const html = _InputFallback({ noLabel: true, ariaLabel: 'Search site content' });
    expect(html).toContain('aria-label="Search site content"');
  });

  it('applies validation error layouts and sets appropriate aria parameters', () => {
    const html = _InputFallback({ invalid: true, errorMessage: 'Field validation failed' });
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain('Field validation failed');
    expect(html).toContain('ag-input__error');
  });

  it('applies contextual help strings beneath input boundaries cleanly', () => {
    const html = _InputFallback({ helpText: 'Format: secondary domain title structure' });
    expect(html).toContain('Format: secondary domain title structure');
    expect(html).toContain('ag-input__help');
  });

  it('assembles functional addon structures cleanly when left or right slots contain elements', () => {
    const html = _InputFallback({
      slotAddonLeft: '<span>$</span>',
      slotAddonRight: '<span>USD</span>',
      value: '100'
    });
    expect(html).toContain('ag-input__field');
    expect(html).toContain('ag-input__addon--left');
    expect(html).toContain('ag-input__addon--right');
    expect(html).toContain('<span>$</span>');
    expect(html).toContain('<span>USD</span>');
  });

  it('arranges horizontal row layout configurations seamlessly when requested', () => {
    const html = _InputFallback({ label: 'Horizontal Title', labelPosition: 'start' });
    expect(html).toContain('ag-form-control--horizontal');
    expect(html).toContain('ag-form-control__label--start');
  });

  it('applies unique size and shape baseline module class selectors accurately', () => {
    const html = _InputFallback({ size: 'large', capsule: true, inline: true });
    expect(html).toContain('agInputLarge');
    expect(html).toContain('agInputCapsule');
    expect(html).toContain('agInputInline');
  });
});
