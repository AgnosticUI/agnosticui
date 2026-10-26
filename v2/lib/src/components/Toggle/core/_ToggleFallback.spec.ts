import { describe, it, expect } from 'vitest';
import { _ToggleFallback } from './_ToggleFallback';

describe('_ToggleFallback pure HTML string engine', () => {
  it('renders standard fallback toggle structural output matching checked state', () => {
    const html = _ToggleFallback({ label: 'Test Toggle', checked: true });
    expect(html).toContain('aria-checked="true"');
    expect(html).toContain('ag-toggle-wrapper');
    expect(html).toContain('On');
  });

  it('renders standard fallback toggle un-checked state safely', () => {
    const html = _ToggleFallback({ label: 'Test Toggle', checked: false });
    expect(html).toContain('aria-checked="false"');
    expect(html).toContain('Off');
  });
});
