/// <reference path="../../../types/css.d.ts" />
import { describe, it, expect } from 'vitest';
import { _InputFallback } from './_InputFallback';
import styles from './input-structure.module.css';

describe('_InputFallback Engine', () => {
  it('renders a default text input layout configuration', () => {
    const html = _InputFallback({ value: 'Initial Text' });
    expect(html).toContain('<input');
    expect(html).toContain('class=');
    expect(html).toContain(styles.agInputInput);
    expect(html).toContain('ag-input__input');
    expect(html).not.toContain('disabled');
  });

  it('renders a textarea configuration when type is textarea', () => {
    const html = _InputFallback({ type: 'textarea', value: 'Comments block', rows: 6, cols: 40 });
    expect(html).toContain('<textarea');
    expect(html).toContain(styles.agInputTextarea);
    expect(html).toContain('ag-input__textarea');
    expect(html).toContain('Comments block');
  });

  it('handles visible label elements and mandatory indicator markers cleanly', () => {
    const html = _InputFallback({ label: 'Your Password', required: true });
    expect(html).toContain('Your Password');
    expect(html).toContain(styles.agInputRequired);
    expect(html).toContain('ag-input__required');
  });

  it('hides the label container visually when labelHidden parameter is flagged', () => {
    const html = _InputFallback({ label: 'Screen Reader Only', labelHidden: true });
    expect(html).toContain('Screen Reader Only');
    expect(html).toContain(styles['ag-form-control__label--hidden']);
    expect(html).toContain('ag-input__label--hidden');
  });

  it('skips label block assembly entirely if noLabel configuration is selected', () => {
    const html = _InputFallback({ label: 'Skipped Label', noLabel: true });
    expect(html).not.toContain('Skipped Label');
  });

  it('applies validation error layouts and sets appropriate aria parameters', () => {
    const html = _InputFallback({ invalid: true, errorMessage: 'Field validation failed' });
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain(styles.agInputError);
    expect(html).toContain('ag-input__error');
  });

  it('applies contextual help strings beneath input boundaries cleanly', () => {
    const html = _InputFallback({ helpText: 'Format: rules' });
    expect(html).toContain(styles.agInputHelp);
    expect(html).toContain('ag-input__help');
  });

  it('assembles functional addon structures cleanly when slots contain elements', () => {
    const html = _InputFallback({
      slotAddonLeft: '<span>$</span>',
      slotAddonRight: '<span>USD</span>'
    });
    expect(html).toContain(styles.agInputField);
    expect(html).toContain('ag-input__field');
    expect(html).toContain('ag-input__addon--left');
  });
});
