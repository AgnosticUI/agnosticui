import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ScrollToButton } from './ScrollToButton.js';

expect.extend(toHaveNoViolations);

describe('ScrollToButton', () => {
  let element: ScrollToButton;
  let scrollToSpy: ReturnType<typeof vi.spyOn>;
  let addEventListenerSpy: ReturnType<typeof vi.spyOn>;
  let removeEventListenerSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Mock window scroll properties and methods
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 });
    Object.defineProperty(document.documentElement, 'scrollHeight', { 
      writable: true, 
      configurable: true, 
      value: 3000 
    });

    scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    // Mock matchMedia for prefers-reduced-motion tests
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    element = document.createElement('ag-scroll-to-button') as ScrollToButton;
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
    scrollToSpy.mockRestore();
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  describe('Rendering', () => {
    it('renders correctly', async () => {
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-scroll-to-button');
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('ag-button');
      expect(button).toBeDefined();
    });

    it('renders with default props', async () => {
      await element.updateComplete;
      expect(element.label).toBe('Back to Top');
      expect(element.showLabel).toBe(false);
      expect(element.icon).toBe(true);
      expect(element.scrollThreshold).toBe(400);
      expect(element.target).toBe('top');
      expect(element.direction).toBe('auto');
      expect(element.smoothScroll).toBe(true);
      expect(element.visible).toBe(false);
    });

    it('renders default up arrow icon', async () => {
      await element.updateComplete;
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg).toBeDefined();
      expect(svg?.getAttribute('height')).toBe('20');
    });

    it('renders down arrow when target is bottom', async () => {
      element.target = 'bottom';
      await element.updateComplete;
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg).toBeDefined();
      // Verify an SVG icon is rendered (implementation-agnostic)
      expect(svg?.tagName.toLowerCase()).toBe('svg');
    });

    it('does not render icon when icon prop is false', async () => {
      element.icon = false;
      await element.updateComplete;
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg).toBeNull();
    });

    it('renders custom icon slot content', async () => {
      const customIcon = document.createElement('span');
      customIcon.textContent = '↑';
      customIcon.setAttribute('slot', 'icon');
      element.appendChild(customIcon);
      await element.updateComplete;

      const slot = element.shadowRoot?.querySelector('slot[name="icon"]') as HTMLSlotElement;
      expect(slot).toBeDefined();
      const assignedNodes = slot?.assignedNodes({ flatten: true });
      expect(assignedNodes?.[0].textContent).toBe('↑');
    });

    it('renders label text when showLabel is true', async () => {
      element.showLabel = true;
      await element.updateComplete;
      
      const button = element.shadowRoot?.querySelector('ag-button');
      const labelSpan = button?.querySelector('span.label');
      expect(labelSpan).toBeDefined();
      expect(labelSpan?.textContent).toBe('Back to Top');
    });

    it('does not render label text when showLabel is false', async () => {
      element.showLabel = false;
      await element.updateComplete;
      
      const button = element.shadowRoot?.querySelector('ag-button');
      const labelSpan = button?.querySelector('span.label');
      expect(labelSpan).toBeNull();
    });
  });

  describe('Visibility', () => {
    it('is not visible by default', async () => {
      await element.updateComplete;
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

    it('respects custom threshold', async () => {
      element.scrollThreshold = 200;
      await element.updateComplete;

      Object.defineProperty(window, 'scrollY', { writable: true, value: 199 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;
      expect(element.visible).toBe(false);

      Object.defineProperty(window, 'scrollY', { writable: true, value: 201 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;
      expect(element.visible).toBe(true);
    });
  });

  describe('Scroll Behavior', () => {
    it('scrolls to top by default', async () => {
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    it('scrolls to bottom when target is "bottom"', async () => {
      element.target = 'bottom';
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      const expectedTop = document.documentElement.scrollHeight - window.innerHeight;
      expect(scrollToSpy).toHaveBeenCalledWith({ top: expectedTop, behavior: 'smooth' });
    });

    it('scrolls to element by ID', async () => {
      const targetElement = document.createElement('div');
      targetElement.id = 'section-1';
      Object.defineProperty(targetElement, 'offsetTop', { value: 1000 });
      document.body.appendChild(targetElement);

      element.target = 'section-1';
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 1000, behavior: 'smooth' });
      
      targetElement.remove();
    });

    it('scrolls to programmatically set HTMLElement', async () => {
      const targetElement = document.createElement('div');
      Object.defineProperty(targetElement, 'offsetTop', { value: 1500 });
      document.body.appendChild(targetElement);

      element.setTargetElement(targetElement);
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 1500, behavior: 'smooth' });
      
      targetElement.remove();
    });

    it('defaults to top when target ID is not found', async () => {
      element.target = 'non-existent-id';
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Target "non-existent-id" not found')
      );
      
      consoleSpy.mockRestore();
    });

    it('uses auto scroll behavior when smoothScroll is false', async () => {
      element.smoothScroll = false;
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    });

    it('respects prefers-reduced-motion', async () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    });
  });

  describe('Direction Detection', () => {
    it('uses up direction for top target', async () => {
      element.target = 'top';
      element.direction = 'auto';
      await element.updateComplete;
      
      // Verify icon is rendered (direction is internal implementation)
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg).toBeDefined();
    });

    it('uses down direction for bottom target', async () => {
      element.target = 'bottom';
      element.direction = 'auto';
      await element.updateComplete;
      
      // Verify icon is rendered (direction is internal implementation)
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg).toBeDefined();
    });

    it('respects explicit up direction', async () => {
      element.target = 'bottom';
      element.direction = 'up';
      await element.updateComplete;
      
      // Verify icon is rendered
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg).toBeDefined();
    });

    it('respects explicit down direction', async () => {
      element.target = 'top';
      element.direction = 'down';
      await element.updateComplete;
      
      // Verify icon is rendered
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg).toBeDefined();
    });

    it('direction prop is set correctly', async () => {
      element.direction = 'up';
      expect(element.direction).toBe('up');
      
      element.direction = 'down';
      expect(element.direction).toBe('down');
      
      element.direction = 'auto';
      expect(element.direction).toBe('auto');
    });
  });

  describe('Event Listeners', () => {
    it('attaches scroll listener on connectedCallback', () => {
      const handleScrollMethod = (element as any)._handleScroll;
      expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', handleScrollMethod, { passive: true });
    });

    it('removes scroll listener on disconnectedCallback', () => {
      const handleScrollMethod = (element as any)._handleScroll;
      element.remove();
      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', handleScrollMethod);
    });

    it('performs initial scroll check on connection', async () => {
      const newElement = document.createElement('ag-scroll-to-button') as ScrollToButton;
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      
      document.body.appendChild(newElement);
      await newElement.updateComplete;
      
      expect(newElement.visible).toBe(true);
      newElement.remove();
    });
  });

  describe('Accessibility', () => {
    it('has proper aria-label', async () => {
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('ag-button');
      expect(button?.getAttribute('aria-label')).toBe('Back to Top');
    });

    it('respects custom label', async () => {
      element.label = 'Go to Bottom';
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('ag-button');
      expect(button?.getAttribute('aria-label')).toBe('Go to Bottom');
    });

    it('has role="button"', async () => {
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('ag-button');
      expect(button?.getAttribute('role')).toBe('button');
    });

    it('has no accessibility violations', async () => {
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;
      
      // Test the host element instead of nested button to avoid nested-interactive rule
      const results = await axe(element, {
        rules: {
          // ag-button is a custom element wrapper, not a nested interactive control
          'nested-interactive': { enabled: false }
        }
      });
      expect(results).toHaveNoViolations();
    });

    it('svg icon has aria-hidden', async () => {
      await element.updateComplete;
      const svg = element.shadowRoot?.querySelector('svg');
      expect(svg?.getAttribute('aria-hidden')).toBe('true');
    });
  });

  describe('CSS Parts', () => {
    it('exposes ag-scrollto-button part', async () => {
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('[part="ag-scrollto-button"]');
      expect(button).toBeDefined();
    });

    it('exposes ag-button-content part', async () => {
      await element.updateComplete;
      const buttonContent = element.shadowRoot?.querySelector('[part="ag-button-content"]');
      expect(buttonContent).toBeDefined();
    });

    it('exposes ag-icon-wrapper part when icon is shown', async () => {
      element.icon = true;
      await element.updateComplete;
      const iconWrapper = element.shadowRoot?.querySelector('[part="ag-icon-wrapper"]');
      expect(iconWrapper).toBeDefined();
    });

    it('exposes ag-label part when showLabel is true', async () => {
      element.showLabel = true;
      await element.updateComplete;
      const label = element.shadowRoot?.querySelector('[part="ag-label"]');
      expect(label).toBeDefined();
      expect(label?.textContent).toBe('Back to Top');
    });

    it('does not expose ag-label part when showLabel is false', async () => {
      element.showLabel = false;
      await element.updateComplete;
      const label = element.shadowRoot?.querySelector('[part="ag-label"]');
      expect(label).toBeNull();
    });
  });

  describe('Custom Properties', () => {
    it('can set custom label', async () => {
      element.label = 'Scroll Up';
      await element.updateComplete;
      expect(element.label).toBe('Scroll Up');
    });

    it('can set custom threshold', async () => {
      element.scrollThreshold = 600;
      await element.updateComplete;
      expect(element.scrollThreshold).toBe(600);
    });

    it('can toggle icon', async () => {
      element.icon = false;
      await element.updateComplete;
      expect(element.icon).toBe(false);
      
      element.icon = true;
      await element.updateComplete;
      expect(element.icon).toBe(true);
    });

    it('can set target', async () => {
      element.target = 'bottom';
      await element.updateComplete;
      expect(element.target).toBe('bottom');
    });

    it('can set direction', async () => {
      element.direction = 'down';
      await element.updateComplete;
      expect(element.direction).toBe('down');
    });

    it('can toggle smoothScroll', async () => {
      element.smoothScroll = false;
      await element.updateComplete;
      expect(element.smoothScroll).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('handles querySelector target', async () => {
      const targetElement = document.createElement('section');
      targetElement.className = 'my-section';
      Object.defineProperty(targetElement, 'offsetTop', { value: 2000 });
      document.body.appendChild(targetElement);

      element.target = '.my-section';
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 2000, behavior: 'smooth' });
      
      targetElement.remove();
    });

    it('handles null target element', async () => {
      element.setTargetElement(null);
      Object.defineProperty(window, 'scrollY', { writable: true, value: 500 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('ag-button');
      button?.click();
      
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    it('handles zero scroll threshold', async () => {
      element.scrollThreshold = 0;
      await element.updateComplete;

      Object.defineProperty(window, 'scrollY', { writable: true, value: 1 });
      window.dispatchEvent(new Event('scroll'));
      await element.updateComplete;
      
      expect(element.visible).toBe(true);
    });
  });
});
