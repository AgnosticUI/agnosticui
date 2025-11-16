import { describe, it, expect, afterEach } from 'vitest';
import { AgKbd, type KbdVariant, type KbdSize } from './_Kbd';
import './Kbd';

// IMPORTANT: We need to include the component import here so that the custom element is defined.

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

  const variants: KbdVariant[] = ['default', 'primary', 'secondary', 'info', 'warning', 'success', 'danger', 'error'];
  variants.forEach(variant => {
    it(`should set the variant to ${variant}`, async () => {
      element = await setup({ variant });
      expect(element.variant).toBe(variant);
      const kbdWrapper = element.shadowRoot?.querySelector('.kbd-wrapper');
      expect(kbdWrapper).toHaveClass('kbd-wrapper');
    });
  });

  const sizes: KbdSize[] = ['sm', 'md', 'lg'];
  sizes.forEach(size => {
    it(`should set the size to ${size}`, async () => {
      element = await setup({ size });
      expect(element.size).toBe(size);
      const kbdWrapper = element.shadowRoot?.querySelector('.kbd-wrapper');
      expect(kbdWrapper).toHaveClass('kbd-wrapper');
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
});
