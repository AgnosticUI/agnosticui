import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Skeleton } from './_SkeletonLoader';
import './SkeletonLoader';

describe('Skeleton', () => {
  let element: Skeleton;
  let host: HTMLElement;

  beforeEach(() => {
    host = document.createElement('div');
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('renders with default props', async () => {
    element = document.createElement('ag-skeleton') as Skeleton;
    host.appendChild(element);
    await element.updateComplete;

    expect(element).toBeDefined();
    expect(element.variant).toBe('text');
    expect(element.effect).toBe('pulse');
  });

  it('uses correct CSS attribute selectors for variant', () => {
    const styleContent = Skeleton.styles.toString();
    expect(styleContent).toContain(':host([variant=\'text\'])');
    expect(styleContent).toContain(':host([variant=\'circular\'])');
    expect(styleContent).toContain(':host([variant=\'rectangular\'])');
    expect(styleContent).toContain(':host([variant=\'rounded\'])');
    expect(styleContent).not.toContain('[variant="text"]');
  });

  it('uses correct CSS attribute selectors for effect', () => {
    const styleContent = Skeleton.styles.toString();
    expect(styleContent).toContain(':host([effect=\'pulse\'])');
    expect(styleContent).toContain(':host([effect=\'sheen\'])');
    expect(styleContent).toContain(':host([effect=\'none\'])');
    expect(styleContent).not.toContain('[effect="pulse"]');
  });

  it('uses correct CSS attribute selectors for intensity', () => {
    const styleContent = Skeleton.styles.toString();
    expect(styleContent).toContain(':host([intensity=\'light\'])');
    expect(styleContent).toContain(':host([intensity=\'medium\'])');
    expect(styleContent).not.toContain('[intensity="light"]');
  });

  describe('Variants', () => {
    it('renders text variant', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.variant = 'text';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.variant).toBe('text');
      expect(element.getAttribute('variant')).toBe('text');
    });

    it('renders circular variant', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.variant = 'circular';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.variant).toBe('circular');
      expect(element.getAttribute('variant')).toBe('circular');
    });

    it('renders rectangular variant', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.variant = 'rectangular';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.variant).toBe('rectangular');
      expect(element.getAttribute('variant')).toBe('rectangular');
    });

    it('renders rounded variant', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.variant = 'rounded';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.variant).toBe('rounded');
      expect(element.getAttribute('variant')).toBe('rounded');
    });
  });

  describe('Effects', () => {
    it('renders pulse effect (default)', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      host.appendChild(element);
      await element.updateComplete;

      expect(element.effect).toBe('pulse');
      expect(element.getAttribute('effect')).toBe('pulse');
    });

    it('renders sheen effect', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.effect = 'sheen';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.effect).toBe('sheen');
      expect(element.getAttribute('effect')).toBe('sheen');
    });

    it('renders no effect', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.effect = 'none';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.effect).toBe('none');
      expect(element.getAttribute('effect')).toBe('none');
    });
  });

  describe('Intensity', () => {
    it('renders light intensity (default)', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      host.appendChild(element);
      await element.updateComplete;

      expect(element.intensity).toBe('light');
      expect(element.getAttribute('intensity')).toBe('light');
    });

    it('renders medium intensity', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.intensity = 'medium';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.intensity).toBe('medium');
      expect(element.getAttribute('intensity')).toBe('medium');
    });
  });

  describe('Dimensions', () => {
    it('applies custom width', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.width = '200px';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.width).toBe('200px');
      expect(element.style.width).toBe('200px');
    });

    it('applies custom height', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.height = '50px';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.height).toBe('50px');
      expect(element.style.height).toBe('50px');
    });

    it('applies custom width and height', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.width = '200px';
      element.height = '50px';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.width).toBe('200px');
      expect(element.height).toBe('50px');
      expect(element.style.width).toBe('200px');
      expect(element.style.height).toBe('50px');
    });

    it('ensures equal dimensions for circular variant when only width is provided', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.variant = 'circular';
      element.width = '100px';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.style.width).toBe('100px');
      expect(element.style.height).toBe('100px');
    });

    it('ensures equal dimensions for circular variant when only height is provided', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.variant = 'circular';
      element.height = '100px';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.style.width).toBe('100px');
      expect(element.style.height).toBe('100px');
    });

    it('uses provided dimensions for circular variant when both are specified', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      element.variant = 'circular';
      element.width = '120px';
      element.height = '120px';
      host.appendChild(element);
      await element.updateComplete;

      expect(element.style.width).toBe('120px');
      expect(element.style.height).toBe('120px');
    });
  });

  describe('Shadow Parts', () => {
    it('exposes skeleton-wrapper part', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      host.appendChild(element);
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('[part="ag-skeleton-wrapper"]');
      expect(wrapper).toBeDefined();
    });
  });

  describe('Accessibility', () => {
    it('has aria-hidden attribute', async () => {
      element = document.createElement('ag-skeleton') as Skeleton;
      host.appendChild(element);
      await element.updateComplete;

      expect(element.getAttribute('aria-hidden')).toBe('true');
    });

    it('respects prefers-reduced-motion', () => {
      const styleContent = Skeleton.styles.toString();
      expect(styleContent).toContain('prefers-reduced-motion');
    });
  });
});
