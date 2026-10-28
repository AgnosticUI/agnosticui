/* v2/lib/src/components/IconButton/core/_IconButtonFallback.spec.ts */
import { describe, it, expect } from 'vitest';
import { _IconButtonFallback } from './_IconButtonFallback';

describe('_IconButtonFallback Engine', () => {
  it('should compile standard layouts into static raw markup strings', () => {
    const html = _IconButtonFallback({ label: 'Search target' });
    expect(html).toContain('class="ag-icon-button ag-icon-button-size-md ag-icon-button-variant-ghost"');
    expect(html).toContain('aria-label="Search target"');
  });

  it('should safely render unicode strings into icon node layers', () => {
    const html = _IconButtonFallback({ label: 'Dismiss', unicode: '×' });
    expect(html).toContain('class="ag-icon-button-icon"');
    expect(html).toContain('×');
  });
});
