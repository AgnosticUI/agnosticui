import { describe, it, expect } from 'vitest';
import { _BadgeFallback } from './_BadgeFallback';

describe('_BadgeFallback pure HTML string engine', () => {
  it('renders standard badge baseline markup and displays value content', () => {
    const html = _BadgeFallback({ value: 8 });
    expect(html).toContain('ag-badge');
    expect(html).toContain('8');
  });

  it('enforces maximum threshold caps and appends plus indicators on overload', () => {
    const html = _BadgeFallback({ value: 150, max: 99 });
    expect(html).toContain('99+');
  });

  it('hides dot variations from assistive screen readers when status labels are missing', () => {
    const html = _BadgeFallback({ dot: true });
    expect(html).toContain('aria-hidden="true"');
  });

  it('exposes dot attributes when providing context descriptor status labels', () => {
    const html = _BadgeFallback({ dot: true, statusLabel: 'Active Worker Node' });
    expect(html).toContain('aria-hidden="false"');
    expect(html).toContain('aria-label="Active Worker Node"');
  });
});
