import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { BackToTop } from './_BackToTop';

// Ensure the custom element is defined
if (!customElements.get('ag-back-to-top')) {
  customElements.define('ag-back-to-top', BackToTop);
}

describe('BackToTop', () => {
  let element: BackToTop;
  let scrollToSpy: ReturnType<typeof vi.spyOn>;
  let addEventListenerSpy: ReturnType<typeof vi.spyOn>;
  let removeEventListenerSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Mock window scroll properties and methods
    Object.defineProperty(window, 'scrollY', { writable: true, value: 0 });
    scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    element = document.createElement('ag-back-to-top') as BackToTop;
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
    scrollToSpy.mockRestore();
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it('renders correctly', async () => {
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe('ag-back-to-top');
    await element.updateComplete;
    const button = element.shadowRoot?.querySelector('ag-button');
    expect(button).toBeDefined();
  });

  it('is not visible by default', async () => {
    expect(element.visible).toBe(false);
    expect(element.getAttribute('visible')).toBeNull();
  });

  it('becomes visible when scrollY exceeds threshold', async () => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
    window.dispatchEvent(new Event('scroll'));
    await element.updateComplete;
    expect(element.visible).toBe(true);
    expect(element.getAttribute('visible')).toBe('');
  });

  it('becomes not visible when scrollY is below threshold', async () => {
    // First make it visible
    Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
    window.dispatchEvent(new Event('scroll'));
    await element.updateComplete;
    expect(element.visible).toBe(true);

    // Then scroll back up
    Object.defineProperty(window, 'scrollY', { writable: true, value: 100 });
    window.dispatchEvent(new Event('scroll'));
    await element.updateComplete;
    expect(element.visible).toBe(false);
    expect(element.getAttribute('visible')).toBeNull();
  });

  it('calls scrollToTop when button is clicked', async () => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
    window.dispatchEvent(new Event('scroll'));
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('ag-button');
    button?.click();
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('attaches scroll listener on connectedCallback', () => {
    const handleScrollMethod = (element as any)._handleScroll;
    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', handleScrollMethod, { passive: true });
  });

  it('removes scroll listener on disconnectedCallback', () => {
    const handleScrollMethod = (element as any)._handleScroll;
    element.remove();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', handleScrollMethod);
  });

  it('renders custom slot content', async () => {
    const customContent = '<span>⬆️</span>';
    const elWithContent = document.createElement('ag-back-to-top') as BackToTop;
    elWithContent.innerHTML = customContent;
    document.body.appendChild(elWithContent);
    await elWithContent.updateComplete;

    const slot = elWithContent.shadowRoot?.querySelector('slot');
    expect(slot?.assignedNodes({ flatten: true })[0].textContent).toBe('⬆️');
    elWithContent.remove();
  });

  it('sets a custom threshold', async () => {
    element.threshold = 100;
    await element.updateComplete;

    Object.defineProperty(window, 'scrollY', { writable: true, value: 99 });
    window.dispatchEvent(new Event('scroll'));
    await element.updateComplete;
    expect(element.visible).toBe(false);

    Object.defineProperty(window, 'scrollY', { writable: true, value: 101 });
    window.dispatchEvent(new Event('scroll'));
    await element.updateComplete;
    expect(element.visible).toBe(true);
  });
});
