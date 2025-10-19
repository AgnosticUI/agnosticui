import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Loader } from './_Loader';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Loader', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createLoader = async (props: Partial<Loader> = {}) => {
    const loader = new Loader();
    Object.assign(loader, props);
    container.appendChild(loader);
    await loader.updateComplete;
    return loader;
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const loader = await createLoader();
      const results = await axe(loader);
      expect(results).toHaveNoViolations();
    });

    it('has role="status"', async () => {
      const el = await createLoader();
      const loaderEl = el.shadowRoot?.querySelector('.loader');
      expect(loaderEl?.getAttribute('role')).toBe('status');
    });

    it('has aria-live="polite"', async () => {
      const el = await createLoader();
      const loaderEl = el.shadowRoot?.querySelector('.loader');
      expect(loaderEl?.getAttribute('aria-live')).toBe('polite');
    });

    it('has aria-busy="true" by default', async () => {
      const el = await createLoader();
      const loaderEl = el.shadowRoot?.querySelector('.loader');
      expect(loaderEl?.getAttribute('aria-busy')).toBe('true');
    });

    it('contains screen reader text', async () => {
      const el = await createLoader();
      const label = el.shadowRoot?.querySelector('.loader-label');
      expect(label?.textContent?.trim()).toBe('Loading...');
    });

    it('uses custom aria label when provided', async () => {
      const el = await createLoader({ ariaLabel: 'Please wait...' });
      const label = el.shadowRoot?.querySelector('.loader-label');
      expect(label?.textContent?.trim()).toBe('Please wait...');
    });
  });

  it('renders correctly with default props', async () => {
    const el = await createLoader();
    expect(el).toBeInstanceOf(Loader);
    expect(el.size).toBe('default');
  });

  describe('Sizes', () => {
    it('applies default size by default', async () => {
      const el = await createLoader();
      expect(el.size).toBe('default');
    });

    it('applies small size', async () => {
      const el = await createLoader({ size: 'small' });
      expect(el.size).toBe('small');
      expect(el.getAttribute('size')).toBe('small');
    });

    it('applies large size', async () => {
      const el = await createLoader({ size: 'large' });
      expect(el.size).toBe('large');
      expect(el.getAttribute('size')).toBe('large');
    });

    it('updates size dynamically', async () => {
      const el = await createLoader({ size: 'small' });
      el.size = 'large';
      await el.updateComplete;
      expect(el.size).toBe('large');
      expect(el.getAttribute('size')).toBe('large');
    });
  });

  describe('CSS Shadow Parts', () => {
    it('exposes ag-loader part', async () => {
      const el = await createLoader();
      const loaderPart = el.shadowRoot?.querySelector('[part="ag-loader"]');
      expect(loaderPart).toBeTruthy();
    });

    it('exposes ag-loader-label part', async () => {
      const el = await createLoader();
      const labelPart = el.shadowRoot?.querySelector('[part="ag-loader-label"]');
      expect(labelPart).toBeTruthy();
    });
  });

  describe('CSS Structure', () => {
    it('uses correct CSS attribute selectors for size variants', () => {
      const styleContent = Loader.styles.toString();
      expect(styleContent).toContain(':host([size="small"])');
      expect(styleContent).toContain(':host([size="large"])');
    });

    it('applies blink animation', () => {
      const styleContent = Loader.styles.toString();
      expect(styleContent).toContain('@keyframes blink');
      expect(styleContent).toContain('animation: blink');
    });

    it('respects prefers-reduced-motion', () => {
      const styleContent = Loader.styles.toString();
      expect(styleContent).toContain('@media (prefers-reduced-motion)');
      expect(styleContent).toContain('animation-duration: 0.001ms !important');
    });
  });

  describe('Slot content', () => {
    it('displays slotted content when provided', async () => {
      const el = await createLoader();
      const span = document.createElement('span');
      span.textContent = 'Custom loading text';
      el.appendChild(span);
      await el.updateComplete;

      const slot = el.shadowRoot?.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('Property updates', () => {
    it('updates ariaLabel dynamically', async () => {
      const el = await createLoader({ ariaLabel: 'Loading...' });
      el.ariaLabel = 'Processing...';
      await el.updateComplete;
      const label = el.shadowRoot?.querySelector('.loader-label');
      expect(label?.textContent?.trim()).toBe('Processing...');
    });
  });
});
