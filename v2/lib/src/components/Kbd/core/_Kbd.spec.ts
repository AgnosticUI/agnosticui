import { describe, it, expect, afterEach } from 'vitest';
import { AgKbd, type KbdVariant, type KbdSize } from './_Kbd.js';
import { _KbdFallback } from './_KbdFallback.js';
import styles from './kbd-structure.module.css';
import './Kbd.js';

describe('Kbd Component', () => {
  let element: AgKbd;

  const setup = async (props: Partial<AgKbd> = {}) => {
    element = document.createElement('ag-kbd') as AgKbd;
    Object.assign(element, props);
    document.body.appendChild(element);
    await element.updateComplete;
    return element;
  };

  afterEach(() => {
    element?.remove();
  });

  it('should create the component', async () => {
    element = await setup();
    expect(element).toBeInstanceOf(AgKbd);
  });

  it('should have correct default properties', async () => {
    element = await setup();
    expect(element.variant).toBe('default');
    expect(element.size).toBe('md');
    expect(element.bordered).toBe(true);
    expect(element.background).toBe(false);
  });

  it('should render slot content', async () => {
    const content = '⌘';
    element = await setup();
    element.innerHTML = content;
    await element.updateComplete;
    const slot = element.shadowRoot?.querySelector('slot');
    expect(slot?.assignedNodes()[0].textContent).toBe(content);
  });

  const variants: KbdVariant[] = ['default', 'primary', 'secondary', 'info', 'warning', 'success', 'danger', 'error', 'monochrome'];
  variants.forEach(variant => {
    it(`should set the variant to ${variant}`, async () => {
      element = await setup({ variant });
      expect(element.variant).toBe(variant);
      const kbdWrapper = element.shadowRoot?.querySelector(`.${styles.kbdWrapper}`);
      expect(kbdWrapper).toBeTruthy();
    });
  });

  const sizes: KbdSize[] = ['sm', 'md', 'lg'];
  sizes.forEach(size => {
    it(`should set the size to ${size}`, async () => {
      element = await setup({ size });
      expect(element.size).toBe(size);
      const kbdWrapper = element.shadowRoot?.querySelector(`.${styles.kbdWrapper}`);
      expect(kbdWrapper).toBeTruthy();
    });
  });

  it('should handle the bordered property correctly', async () => {
    element = await setup({ bordered: true });
    expect(element.bordered).toBe(true);
    element.bordered = false;
    await element.updateComplete;
    expect(element.bordered).toBe(false);
  });

  it('should handle the background property correctly', async () => {
    element = await setup({ background: true });
    expect(element.background).toBe(true);
    element.background = false;
    await element.updateComplete;
    expect(element.background).toBe(false);
  });

  it('uses correct CSS attribute selectors for boolean props', () => {
    const styleContent = AgKbd.styles.toString();
    expect(styleContent).toContain(':host([bordered])');
    expect(styleContent).not.toContain('[bordered="true"]');
    expect(styleContent).toContain(':host([background])');
    expect(styleContent).not.toContain('[background="true"]');
  });

  /* Isomorphic Fallback Engine Assertion Coverage */
  describe('Isomorphic Fallback Engine Integration', () => {
    it('should generate basic default fallback markup with expected attributes', () => {
      const html = _KbdFallback({ children: 'Ctrl' });
      expect(html).toContain('variant="default"');
      expect(html).toContain('size="md"');
      expect(html).toContain('bordered');
      expect(html).not.toContain('background');
      expect(html).not.toContain('single-char');
      expect(html).toContain('Ctrl');
    });

    it('should catch single character content strings and attach single-char attribute', () => {
      const html = _KbdFallback({ children: 'A', size: 'sm' });
      expect(html).toContain('single-char');
      expect(html).toContain('size="sm"');
      expect(html).toContain('A');
    });

    it('should safely parse loose string attributes passed down by servers', () => {
      const html = _KbdFallback({ bordered: 'false', background: 'true', variant: 'primary', children: 'Shift' });
      expect(html).not.toContain('bordered');
      expect(html).toContain('background');
      expect(html).toContain('variant="primary"');
    });
  });
});
