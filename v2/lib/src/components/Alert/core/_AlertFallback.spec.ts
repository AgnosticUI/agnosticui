/* v2/lib/src/components/Alert/core/_AlertFallback.spec.ts */
import { describe, it, expect } from 'vitest';
import { _AlertFallback } from './_AlertFallback';

describe('_AlertFallback Engine', () => {
  it('should compile standard alert layouts into static markup text', () => {
    const html = _AlertFallback({ variant: 'success', slotDefault: 'Operation clear!' });
    expect(html).toContain('class="ag-alert ag-alert-success"');
    expect(html).toContain('Operation clear!');
    expect(html).toContain('role="alert"');
  });

  it('should render structural close button layout elements additively when dismissible', () => {
    const html = _AlertFallback({ variant: 'danger', dismissible: true });
    expect(html).toContain('class="ag-alert-close"');
    expect(html).toContain('aria-label="Dismiss alert"');
  });
});
