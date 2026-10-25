/// <reference types="../../../types/css.d.ts" />
import { describe, it, expect } from 'vitest';
import { _SelectFallback } from './_SelectFallback';
import styles from './select-structure.module.css';

describe('_SelectFallback Engine', () => {
  it('should render default fallback layout configurations', () => {
    const html = _SelectFallback();
    expect(html).toContain('<select');
    expect(html).toContain('class=');
    // Verify Dual-Class Lifecycle Tokens are present side-by-side
    expect(html).toContain(styles.select);
    expect(html).toContain('ag-select');
    
    // Check explicitly that the standalone disabled attribute token isn't present
    expect(html).not.toContain(' disabled ');
    expect(html).not.toContain('disabled=""');
  });

  it('should apply sizing layout modifier variables correctly', () => {
    const smallHtml = _SelectFallback({ size: 'small' });
    const largeHtml = _SelectFallback({ size: 'large' });

    expect(smallHtml).toContain(styles.selectSmall);
    expect(smallHtml).toContain('ag-select-small');
    expect(largeHtml).toContain(styles.selectLarge);
    expect(largeHtml).toContain('ag-select-large');
  });

  it('should process labels and mandatory indicators seamlessly', () => {
    const html = _SelectFallback({ label: 'Username', required: true });
    expect(html).toContain('Username');
    expect(html).toContain('ag-form-control__required');
    expect(html).toContain(styles['ag-form-control__label']);
    expect(html).toContain('ag-form-control-label');
  });

  it('should wrap elements cleanly for horizontal grid configurations', () => {
    const html = _SelectFallback({ label: 'Age', labelPosition: 'start' });
    expect(html).toContain(styles['ag-form-control--horizontal']);
    expect(html).toContain('ag-form-control--horizontal');
    expect(html).toContain('ag-form-control-label--start');
  });

  it('should output decoupled helper and error lifecycles natively', () => {
    const errorHtml = _SelectFallback({ invalid: true, errorMessage: 'Field Error' });
    expect(errorHtml).toContain(styles['ag-form-control__error']);
    expect(errorHtml).toContain('ag-form-control-error');
    expect(errorHtml).toContain('Field Error');

    const helperHtml = _SelectFallback({ helpText: 'Field Info' });
    expect(helperHtml).toContain(styles['ag-form-control__helper']);
    expect(helperHtml).toContain('ag-form-control-helper');
    expect(helperHtml).toContain('Field Info');
  });
});
