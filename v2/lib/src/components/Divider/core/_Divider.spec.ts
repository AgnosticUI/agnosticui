import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Divider } from './_Divider';
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

  const createDivider = async (props: Partial<Divider> = {}, slotContent?: string) => {
    const divider = new Divider();
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
    expect(el).toBeInstanceOf(Divider);
    const dividerEl = el.shadowRoot?.querySelector('.divider');
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
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.getAttribute('aria-orientation')).toBe('horizontal');
    });

    it('has aria-orientation="vertical" when isVertical is true', async () => {
      const el = await createDivider({ isVertical: true });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.getAttribute('aria-orientation')).toBe('vertical');
    });

    it('applies divider-vertical class when isVertical is true', async () => {
      const el = await createDivider({ isVertical: true });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-vertical')).toBe(true);
    });
  });

  describe('Justify', () => {
    it('centers content by default', async () => {
      const el = await createDivider();
      expect(el.justify).toBe('center');
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-justify-start')).toBe(false);
      expect(dividerEl?.classList.contains('divider-justify-end')).toBe(false);
    });

    it('applies divider-justify-start class', async () => {
      const el = await createDivider({ justify: 'start' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-justify-start')).toBe(true);
    });

    it('applies divider-justify-end class', async () => {
      const el = await createDivider({ justify: 'end' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-justify-end')).toBe(true);
    });

    it('does not apply justify classes when vertical', async () => {
      const el = await createDivider({ isVertical: true, justify: 'start' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-justify-start')).toBe(false);
    });
  });

  describe('Sizes', () => {
    it('applies default size by default', async () => {
      const el = await createDivider();
      expect(el.size).toBe('default');
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.className).toBe('divider');
    });

    it('applies divider-small class', async () => {
      const el = await createDivider({ size: 'small' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-small')).toBe(true);
    });

    it('applies divider-large class', async () => {
      const el = await createDivider({ size: 'large' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-large')).toBe(true);
    });

    it('applies divider-xlarge class', async () => {
      const el = await createDivider({ size: 'xlarge' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-xlarge')).toBe(true);
    });
  });

  describe('Variants', () => {
    it('applies default variant by default', async () => {
      const el = await createDivider();
      expect(el.variant).toBe('default');
    });

    it('applies divider-success class', async () => {
      const el = await createDivider({ variant: 'success' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-success')).toBe(true);
    });

    it('applies divider-info class', async () => {
      const el = await createDivider({ variant: 'info' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-info')).toBe(true);
    });

    it('applies divider-warning class', async () => {
      const el = await createDivider({ variant: 'warning' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-warning')).toBe(true);
    });

    it('applies divider-error class', async () => {
      const el = await createDivider({ variant: 'error' });
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-error')).toBe(true);
    });
  });

  describe('Slotted Content', () => {
    it('renders slotted content', async () => {
      const el = await createDivider({}, 'Custom Text');
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
    it('updates isVertical dynamically', async () => {
      const el = await createDivider({ isVertical: false });
      el.isVertical = true;
      await el.updateComplete;
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-vertical')).toBe(true);
      expect(dividerEl?.getAttribute('aria-orientation')).toBe('vertical');
    });

    it('updates justify dynamically', async () => {
      const el = await createDivider({ justify: 'center' });
      el.justify = 'start';
      await el.updateComplete;
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-justify-start')).toBe(true);
    });

    it('updates size dynamically', async () => {
      const el = await createDivider({ size: 'default' });
      el.size = 'large';
      await el.updateComplete;
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-large')).toBe(true);
    });

    it('updates variant dynamically', async () => {
      const el = await createDivider({ variant: 'default' });
      el.variant = 'success';
      await el.updateComplete;
      const dividerEl = el.shadowRoot?.querySelector('.divider');
      expect(dividerEl?.classList.contains('divider-success')).toBe(true);
    });
  });
});
