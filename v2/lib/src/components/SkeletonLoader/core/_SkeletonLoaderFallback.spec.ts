import { describe, it, expect } from 'vitest';
import { _SkeletonLoaderFallback } from './_SkeletonLoaderFallback';

describe('_SkeletonLoaderFallback Engine', () => {
  it('renders text and pulse configuration options as standard defaults', () => {
    const html = _SkeletonLoaderFallback();
    expect(html).toContain('data-variant="text"');
    expect(html).toContain('data-effect="pulse"');
    expect(html).toContain('data-intensity="light"');
    expect(html).toContain('aria-hidden="true"');
  });

  it('binds variant attributes perfectly across configurations', () => {
    const html = _SkeletonLoaderFallback({ variant: 'circular' });
    expect(html).toContain('data-variant="circular"');
  });

  it('normalizes boolean and string values safely for hidden screen readers', () => {
    const disabledHtml = _SkeletonLoaderFallback({ ariaHidden: false });
    expect(disabledHtml).not.toContain('aria-hidden="true"');
  });

  it('calculates equal square sizing profiles on circular layouts', () => {
    const html = _SkeletonLoaderFallback({ variant: 'circular', width: '80px' });
    expect(html).toContain('style="width: 80px; height: 80px;"');
  });

  it('emits the core fallback class namespace to match global stylesheets', () => {
    const html = _SkeletonLoaderFallback({ effect: 'sheen' });
    expect(html).toContain('class="ag-skeleton-loader-wrapper"');
    expect(html).toContain('data-effect="sheen"');
  });
});
