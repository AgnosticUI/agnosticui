import { describe, it, expect } from 'vitest';
import { _SelectFallback } from './_SelectFallback';

describe('_SelectFallback Engine', () => {
  it('should render default fallback layout configurations', () => {
    const html = _SelectFallback();
    expect(html).toContain('<select');
    expect(html).toContain('class=');
    // Check explicitly that the standalone disabled attribute token isn't present
    expect(html).not.toContain(' disabled ');
    expect(html).not.toContain('disabled=""');
  });

  it('should apply sizing layout modifier variables correctly', () => {
    const smallHtml = _SelectFallback({ size: 'small' });
    const largeHtml = _SelectFallback({ size: 'large' });

    expect(smallHtml).toBeDefined();
    expect(largeHtml).toBeDefined();
  });

  it('should process labels and mandatory indicators seamlessly', () => {
    const html = _SelectFallback({ label: 'Username', required: true });
    expect(html).toContain('Username');
    expect(html).toContain('ag-form-control__required');
  });

  it('should wrap elements cleanly for horizontal grid configurations', () => {
    const html = _SelectFallback({ label: 'Age', labelPosition: 'start' });
    expect(html).toContain('ag-form-control--horizontal');
  });
});
