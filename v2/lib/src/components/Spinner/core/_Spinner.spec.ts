import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AgSpinner } from './_Spinner.js';
import { _SpinnerFallback } from './_SpinnerFallback.js';
import { axe, toHaveNoViolations } from 'jest-axe';
import styles from './spinner-structure.module.css';
import './Spinner.js';

expect.extend(toHaveNoViolations);

describe('AgSpinner', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createSpinner = async (props: Partial<AgSpinner> = {}) => {
    const spinner = document.createElement('ag-spinner') as AgSpinner;
    Object.assign(spinner, props);
    container.appendChild(spinner);
    await spinner.updateComplete;
    return spinner;
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const spinner = await createSpinner();
      const results = await axe(spinner);
      expect(results).toHaveNoViolations();
    });

    it('has role="status"', async () => {
      const el = await createSpinner();
      const spinnerEl = el.shadowRoot?.querySelector(`.${styles.spinner}`);
      expect(spinnerEl?.getAttribute('role')).toBe('status');
    });

    it('has aria-live="polite"', async () => {
      const el = await createSpinner();
      const spinnerEl = el.shadowRoot?.querySelector(`.${styles.spinner}`);
      expect(spinnerEl?.getAttribute('aria-live')).toBe('polite');
    });

    it('has aria-busy="true" by default', async () => {
      const el = await createSpinner();
      const spinnerEl = el.shadowRoot?.querySelector(`.${styles.spinner}`);
      expect(spinnerEl?.getAttribute('aria-busy')).toBe('true');
    });

    it('contains screen reader text', async () => {
      const el = await createSpinner();
      const label = el.shadowRoot?.querySelector(`.${styles.spinnerLabel}`);
      expect(label?.textContent?.trim()).toBe('Loading...');
    });

    it('uses custom aria label when provided', async () => {
      const el = await createSpinner({ ariaLabel: 'Please wait...' });
      const label = el.shadowRoot?.querySelector(`.${styles.spinnerLabel}`);
      expect(label?.textContent?.trim()).toBe('Please wait...');
    });
  });

  it('renders correctly with default props', async () => {
    const el = await createSpinner();
    expect(el).toBeInstanceOf(AgSpinner);
    expect(el.size).toBe('default');
  });

  describe('Sizes', () => {
    it('applies default size by default', async () => {
      const el = await createSpinner();
      expect(el.size).toBe('default');
    });

    it('applies small size', async () => {
      const el = await createSpinner({ size: 'small' });
      expect(el.size).toBe('small');
      expect(el.getAttribute('size')).toBe('small');
    });

    it('applies large size', async () => {
      const el = await createSpinner({ size: 'large' });
      expect(el.size).toBe('large');
      expect(el.getAttribute('size')).toBe('large');
    });

    it('applies xlarge size', async () => {
      const el = await createSpinner({ size: 'xlarge' });
      expect(el.size).toBe('xlarge');
      expect(el.getAttribute('size')).toBe('xlarge');
    });

    it('updates size dynamically', async () => {
      const el = await createSpinner({ size: 'small' });
      el.size = 'large';
      await el.updateComplete;
      expect(el.size).toBe('large');
      expect(el.getAttribute('size')).toBe('large');
    });
  });

  describe('CSS Shadow Parts', () => {
    it('exposes ag-spinner part', async () => {
      const el = await createSpinner();
      const spinnerPart = el.shadowRoot?.querySelector('[part="ag-spinner"]');
      expect(spinnerPart).toBeTruthy();
    });

    it('exposes ag-spinner-label part', async () => {
      const el = await createSpinner();
      const labelPart = el.shadowRoot?.querySelector('[part="ag-spinner-label"]');
      expect(labelPart).toBeTruthy();
    });
  });

  describe('Slot content', () => {
    it('displays slotted content when provided', async () => {
      const el = await createSpinner();
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
      const el = await createSpinner({ ariaLabel: 'Loading...' });
      el.ariaLabel = 'Processing...';
      await el.updateComplete;
      const label = el.shadowRoot?.querySelector(`.${styles.spinnerLabel}`);
      expect(label?.textContent?.trim()).toBe('Processing...');
    });
  });

  /* Isomorphic Fallback Engine Assertion Coverage */
  describe('Isomorphic Fallback Engine Integration', () => {
    it('should generate basic fallback markup matching default states', () => {
      const html = _SpinnerFallback({});
      expect(html).toContain('size="default"');
      expect(html).toContain('aria-label="Loading..."');
      expect(html).toContain('class="ag-spinner"');
    });

    it('should correctly propagate custom size configuration attributes', () => {
      const html = _SpinnerFallback({ size: 'xlarge', ariaLabel: 'Syncing database blocks...' });
      expect(html).toContain('size="xlarge"');
      expect(html).toContain('aria-label="Syncing database blocks..."');
    });
  });
});
