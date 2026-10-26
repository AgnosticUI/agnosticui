import { describe, it, expect } from 'vitest';
import { _SliderFallback } from './_SliderFallback';

describe('_SliderFallback pure HTML engine', () => {
  it('renders standard slider baseline output containing inputs and range values', () => {
    const html = _SliderFallback({ label: 'Volume Control', value: 45 });
    expect(html).toContain('ag-slider');
    expect(html).toContain('value="45"');
    expect(html).toContain('type="range"');
  });

  it('handles dual-range value configurations cleanly on output metrics', () => {
    const html = _SliderFallback({ dual: true, value: [15, 85] });
    expect(html).toContain('value="15"');
    expect(html).toContain('value="85"');
  });
});
