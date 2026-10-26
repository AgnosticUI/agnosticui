import { describe, it, expect } from 'vitest';
import { _DividerFallback } from './_DividerFallback';

describe('_DividerFallback pure HTML string engine', () => {
  it('renders standard horizontal layout parameters securely', () => {
    const html = _DividerFallback({ justify: 'start', size: 'large' });
    expect(html).toContain('role="separator"');
    expect(html).toContain('aria-orientation="horizontal"');
    expect(html).toContain('ag-divider--justify-start');
    expect(html).toContain('ag-divider--large');
  });

  it('transforms string expressions of vertical configurations flawlessly', () => {
    const html = _DividerFallback({ vertical: 'true', variant: 'success' });
    expect(html).toContain('aria-orientation="vertical"');
    expect(html).toContain('ag-divider--vertical');
    expect(html).toContain('ag-divider--variant-success');
  });

  it('packs slot text content into internal alignment wrappers seamlessly', () => {
    const html = _DividerFallback({ children: 'Section Break' });
    expect(html).toContain('ag-divider--has-content');
    expect(html).toContain('Section Break');
  });
});
