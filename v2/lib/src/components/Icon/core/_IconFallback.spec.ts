import { expect, describe, it } from 'vitest';
import { _IconFallback } from './_IconFallback.js';
import styles from './icon-structure.module.css';

describe('_IconFallback Engine', () => {
  it('renders complete dual-class maps with default parameters', () => {
    const html = _IconFallback();
    expect(html).toContain(styles.iconBase);
    expect(html).toContain(styles.icon16);
    expect(html).toContain('ag-icon-base');
    expect(html).toContain('ag-icon-16');
  });

  it('normalizes variable isomorphic attributes appropriately', () => {
    const html = _IconFallback({ size: '24', type: 'success', noFill: 'true' });
    expect(html).toContain('size="24"');
    expect(html).toContain('type="success"');
    expect(html).toContain('no-fill');
    expect(html).toContain(styles.icon24);
  });

  it('interpolates nested markup slot parameters seamlessly', () => {
    const sampleSvg = '<svg class="test-svg"></svg>';
    const html = _IconFallback({ slot: sampleSvg });
    expect(html).toContain(sampleSvg);
  });
});
