import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AgDivider } from './Divider.js';
import styles from './divider-structure.module.css';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Divider', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createDivider = async (props: Partial<AgDivider> = {}, slotContent?: string) => {
    const divider = new AgDivider();
    Object.assign(divider, props);
    if (slotContent) {
      divider.textContent = slotContent;
    }
    container.appendChild(divider);
    await divider.updateComplete;
    return divider;
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const divider = await createDivider();
      const results = await axe(divider);
      expect(results).toHaveNoViolations();
    });
  });

  it('renders correctly with default props', async () => {
    const el = await createDivider();
    expect(el).toBeInstanceOf(AgDivider);
    const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
    expect(dividerEl).toBeTruthy();
  });

  it('has role="separator" by default', async () => {
    const el = await createDivider();
    const dividerEl = el.shadowRoot?.querySelector('[role="separator"]');
    expect(dividerEl).toBeTruthy();
  });

  describe('Orientation', () => {
    it('has aria-orientation="horizontal" by default', async () => {
      const el = await createDivider();
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.getAttribute('aria-orientation')).toBe('horizontal');
    });

    it('has aria-orientation="vertical" when vertical is true', async () => {
      const el = await createDivider({ vertical: true });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.getAttribute('aria-orientation')).toBe('vertical');
    });

    it('applies divider-vertical class when vertical is true', async () => {
      const el = await createDivider({ vertical: true });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerVertical)).toBe(true);
    });
  });

  describe('Justify', () => {
    it('centers content by default', async () => {
      const el = await createDivider();
      expect(el.justify).toBe('center');
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerJustifyStart)).toBe(false);
      expect(dividerEl?.classList.contains(styles.dividerJustifyEnd)).toBe(false);
    });

    it('applies divider-justify-start class', async () => {
      const el = await createDivider({ justify: 'start' });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerJustifyStart)).toBe(true);
    });

    it('applies divider-justify-end class', async () => {
      const el = await createDivider({ justify: 'end' });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerJustifyEnd)).toBe(true);
    });

    it('does not apply justify classes when vertical', async () => {
      const el = await createDivider({ vertical: true, justify: 'start' });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerJustifyStart)).toBe(false);
    });
  });

  describe('Sizes', () => {
    it('applies default size by default', async () => {
      const el = await createDivider();
      expect(el.size).toBe('default');
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.className).toContain(styles.dividerWrapper);
    });

    it('applies divider-small class', async () => {
      const el = await createDivider({ size: 'small' });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerSizeSmall)).toBe(true);
    });

    it('applies divider-large class', async () => {
      const el = await createDivider({ size: 'large' });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerSizeLarge)).toBe(true);
    });

    it('applies divider-xlarge class', async () => {
      const el = await createDivider({ size: 'xlarge' });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerSizeXlarge)).toBe(true);
    });
  });

  describe('Variants', () => {
    it('applies default variant by default', async () => {
      const el = await createDivider();
      expect(el.variant).toBe('default');
    });

    it('applies divider-success class via host reflection properties', async () => {
      const el = await createDivider({ variant: 'success' });
      expect(el.variant).toBe('success');
      expect(el.getAttribute('variant')).toBe('success');
    });

    it('applies divider-info class via host reflection properties', async () => {
      const el = await createDivider({ variant: 'info' });
      expect(el.variant).toBe('info');
      expect(el.getAttribute('variant')).toBe('info');
    });

    it('applies divider-warning class via host reflection properties', async () => {
      const el = await createDivider({ variant: 'warning' });
      expect(el.variant).toBe('warning');
      expect(el.getAttribute('variant')).toBe('warning');
    });

    it('applies divider-error class via host reflection properties', async () => {
      const el = await createDivider({ variant: 'error' });
      expect(el.variant).toBe('error');
      expect(el.getAttribute('variant')).toBe('error');
    });
  });

  describe('Slotted Content', () => {
    it('renders slotted content', async () => {
      const el = await createDivider({}, 'Custom Text');
      const slot = el.shadowRoot?.querySelector('slot');
      slot?.dispatchEvent(new Event('slotchange'));
      await el.updateComplete;
      expect(el.textContent).toBe('Custom Text');
    });

    it('renders without content', async () => {
      const el = await createDivider();
      const slot = el.shadowRoot?.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('CSS Shadow Parts', () => {
    it('exposes ag-divider part', async () => {
      const el = await createDivider();
      const dividerPart = el.shadowRoot?.querySelector('[part="ag-divider"]');
      expect(dividerPart).toBeTruthy();
    });

    it('exposes ag-divider-content part', async () => {
      const el = await createDivider({}, 'Content');
      const contentPart = el.shadowRoot?.querySelector('[part="ag-divider-content"]');
      expect(contentPart).toBeTruthy();
    });
  });

  describe('Property updates', () => {
    it('updates vertical dynamically', async () => {
      const el = await createDivider({ vertical: false });
      el.vertical = true;
      await el.updateComplete;
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerVertical)).toBe(true);
      expect(dividerEl?.getAttribute('aria-orientation')).toBe('vertical');
    });

    it('updates justify dynamically', async () => {
      const el = await createDivider({ justify: 'center' });
      el.justify = 'start';
      await el.updateComplete;
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerJustifyStart)).toBe(true);
    });

    it('updates size dynamically', async () => {
      const el = await createDivider({ size: 'default' });
      el.size = 'large';
      await el.updateComplete;
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerSizeLarge)).toBe(true);
    });

    it('updates variant dynamically', async () => {
      const el = await createDivider({ variant: 'default' });
      el.variant = 'success';
      await el.updateComplete;
      expect(el.variant).toBe('success');
      expect(el.getAttribute('variant')).toBe('success');
    });
  });

  /* ADDITIVE SPECIFICATIONS: Verifying layouts against CSS Module dictionary structures cleanly */
  describe('AgDivider layout token specification assertions', () => {
    it('should evaluate layout tokens correctly from css module map definitions', async () => {
      const hasDividerWrapperToken = typeof styles.dividerWrapper === 'string';
      expect(hasDividerWrapperToken).toBe(true);

      const el = await createDivider({ size: 'small', justify: 'end' });
      const dividerEl = el.shadowRoot?.querySelector(`.${styles.dividerWrapper}`);
      expect(dividerEl?.classList.contains(styles.dividerSizeSmall)).toBe(true);
    });
  });
});
