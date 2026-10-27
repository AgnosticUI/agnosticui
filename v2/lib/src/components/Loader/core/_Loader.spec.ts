import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Loader } from './_Loader.js';
import { _LoaderFallback } from './_LoaderFallback.js';
import { axe, toHaveNoViolations } from 'jest-axe';
import styles from './loader-structure.module.css';
import './Loader.js'; // Ensure custom element registration passes into the environment

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
    // Swapped from new Loader() constructor to standard createElement factory to support Happy DOM lifecycle execution
    const loader = document.createElement('ag-loader') as Loader;
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

    it('contains screen reader text', async () => {
      const el = await createLoader();
      const label = el.shadowRoot?.querySelector(`.${styles.loaderLabel}`);
      expect(label?.textContent?.trim()).toBe('Loading...');
    });

    it('uses custom aria label when provided', async () => {
      const el = await createLoader({ ariaLabel: 'Please wait...' });
      const label = el.shadowRoot?.querySelector(`.${styles.loaderLabel}`);
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
      const label = el.shadowRoot?.querySelector(`.${styles.loaderLabel}`);
      expect(label?.textContent?.trim()).toBe('Processing...');
    });
  });

  /* Isomorphic Fallback Engine Assertion Coverage */
  describe('Isomorphic Fallback Engine Integration', () => {
    it('should generate basic fallback markup matching default states', () => {
      const html = _LoaderFallback({});
      expect(html).toContain('size="default"');
      expect(html).toContain('aria-label="Loading..."');
      expect(html).toContain('class="ag-loader"');
      expect(html).toContain('class="ag-loader-label"');
    });

    it('should correctly propagate custom attributes and text content contents', () => {
      const html = _LoaderFallback({ size: 'large', ariaLabel: 'Calculating metrics...' });
      expect(html).toContain('size="large"');
      expect(html).toContain('aria-label="Calculating metrics..."');
      expect(html).toContain('Calculating metrics...');
    });
  });
});
