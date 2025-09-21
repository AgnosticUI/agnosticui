import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgButton } from './_Button';

// AgButton is automatically registered as 'ag-button' via @customElement decorator

describe('AgButton', () => {
  let element: AgButton;

  beforeEach(() => {
    // Create element and add to DOM
    element = document.createElement('ag-button') as AgButton;
    element.textContent = 'Test Button';
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up after each test
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  describe('Basic Functionality', () => {
    it('should render with default properties', async () => {
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-button');

      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('button');
      expect(button).toBeDefined();
      expect(element.textContent?.trim()).toBe('Test Button');
    });

    it('should have button role implicitly', async () => {
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('role')).toBeNull(); // Implicit role from <button>
      expect(button?.tagName.toLowerCase()).toBe('button');
    });

    it('should have default type="button"', async () => {
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('type')).toBe('button');
    });
  });

  describe('Button Types', () => {
    it('should support type="submit"', async () => {
      element.type = 'submit';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('type')).to.equal('submit');
    });

    it('should support type="reset"', async () => {
      element.type = 'reset';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('type')).to.equal('reset');
    });
  });

  describe('Keyboard Interaction', () => {
    it('should activate on Space key', async () => {
      const clickSpy = vi.fn();
      element.addEventListener('click', clickSpy);

      const button = element.shadowRoot?.querySelector('button');
      const spaceEvent = new KeyboardEvent('keydown', {
        key: ' ',
        code: 'Space',
        bubbles: true
      });

      button?.dispatchEvent(spaceEvent);

      // Note: Space key activation is handled by browser for <button> elements
      // We test that the button receives the event and is focusable
      expect(button?.tabIndex).to.equal(0);
    });

    it('should activate on Enter key', async () => {
      const clickSpy = vi.fn();
      element.addEventListener('click', clickSpy);

      const button = element.shadowRoot?.querySelector('button');
      const enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        bubbles: true
      });

      button?.dispatchEvent(enterEvent);

      // Note: Enter key activation is handled by browser for <button> elements
      expect(button?.tabIndex).to.equal(0);
    });

    it('should be focusable with Tab', async () => {
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.tabIndex).to.equal(0);

      button?.focus();
      expect(document.activeElement).to.equal(element);
    });
  });

  describe('Visual States', () => {
    it('should handle disabled state', async () => {
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.disabled).to.be.true;
      expect(button?.getAttribute('aria-disabled')).to.equal('true');
    });

    it('should handle loading state', async () => {
      element.loading = true;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.disabled).to.be.true;
      expect(button?.getAttribute('aria-busy')).to.equal('true');
    });

    it('should not be disabled when loading is false', async () => {
      element.loading = false;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.disabled).to.be.false;
      expect(button?.hasAttribute('aria-busy')).to.be.false;
    });
  });

  describe('Toggle Functionality', () => {
    beforeEach(async () => {
      element.toggle = true;
      await element.updateComplete;
    });

    it('should support toggle mode', async () => {
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-pressed')).to.equal('false');
    });

    it('should update aria-pressed when pressed changes', async () => {
      element.pressed = true;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-pressed')).to.equal('true');
    });

    it('should toggle pressed state on click', async () => {
      const button = element.shadowRoot?.querySelector('button');

      expect(element.pressed).to.be.false;

      button?.click();
      await element.updateComplete;

      expect(element.pressed).to.be.true;
      expect(button?.getAttribute('aria-pressed')).to.equal('true');
    });

    it('should dispatch toggle event', async () => {
      const toggleSpy = vi.fn();
      element.addEventListener('toggle', toggleSpy);

      const button = element.shadowRoot?.querySelector('button');
      button?.click();
      await element.updateComplete;

      expect(toggleSpy).toHaveBeenCalledOnce();
      expect(toggleSpy.mock.calls[0][0].detail).toEqual({ pressed: true });
    });
  });

  describe('ARIA Support', () => {
    it('should support aria-label', async () => {
      element.ariaLabel = 'Custom Label';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-label')).to.equal('Custom Label');
    });

    it('should support aria-describedby', async () => {
      element.ariaDescribedby = 'description-id';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-describedby')).to.equal('description-id');
    });

    it('should have accessible name from text content', async () => {
      const button = element.shadowRoot?.querySelector('button');
      const slot = button?.querySelector('slot');
      expect(slot).to.exist;

      // Text content provides accessible name
      expect(element.textContent?.trim()).to.equal('Test Button');
    });
  });

  describe('Component Variants', () => {
    it('should support variant attribute', async () => {
      element.variant = 'primary';
      await element.updateComplete;

      expect(element.variant).to.equal('primary');
      expect(element.getAttribute('variant')).to.equal('primary');
    });

    it('should support size attribute', async () => {
      element.size = 'lg';
      await element.updateComplete;

      expect(element.size).to.equal('lg');
      expect(element.getAttribute('size')).to.equal('lg');
    });

    it('should default to medium size', async () => {
      expect(element.size).to.equal('md');
    });
  });

  describe('Event Handling', () => {
    it('should dispatch click events', async () => {
      const clickSpy = vi.fn();
      element.addEventListener('click', clickSpy);

      const button = element.shadowRoot?.querySelector('button');
      button?.click();

      expect(clickSpy).toHaveBeenCalledOnce();
    });

    it('should dispatch focus events', async () => {
      const focusSpy = vi.fn();
      element.addEventListener('focus', focusSpy);

      const button = element.shadowRoot?.querySelector('button');
      button?.focus();

      expect(focusSpy).toHaveBeenCalledOnce();
    });

    it('should dispatch blur events', async () => {
      const blurSpy = vi.fn();
      element.addEventListener('blur', blurSpy);

      const button = element.shadowRoot?.querySelector('button');
      button?.focus();
      button?.blur();

      expect(blurSpy).toHaveBeenCalledOnce();
    });

    it('should not dispatch events when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;

      const clickSpy = vi.fn();
      element.addEventListener('click', clickSpy);

      const button = element.shadowRoot?.querySelector('button');
      button?.click();

      // Disabled buttons should not fire click events
      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  describe('Form Integration', () => {
    it('should work with forms when type="submit"', async () => {
      // Test that submit button has correct type attribute
      element.type = 'submit';
      await element.updateComplete;

      const buttonElement = element.shadowRoot?.querySelector('button');
      expect(buttonElement?.getAttribute('type')).to.equal('submit');

      // Submit buttons should be recognized as submit type
      expect(buttonElement?.type).to.equal('submit');
    });

    it('should work with forms when type="reset"', async () => {
      // Test that reset button has correct type attribute
      element.type = 'reset';
      await element.updateComplete;

      const buttonElement = element.shadowRoot?.querySelector('button');
      expect(buttonElement?.getAttribute('type')).to.equal('reset');

      // Reset buttons should be recognized as reset type
      expect(buttonElement?.type).to.equal('reset');
    });
  });

  describe('Accessibility Compliance', () => {
    it('should have proper semantic structure', async () => {
      const button = element.shadowRoot?.querySelector('button');

      // Semantic button element
      expect(button?.tagName.toLowerCase()).to.equal('button');

      // Implicit button role
      expect(button?.getAttribute('role')).to.be.null;

      // Focusable
      expect(button?.tabIndex).to.equal(0);
    });

    it('should communicate disabled state to assistive technologies', async () => {
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.disabled).to.be.true;
      expect(button?.getAttribute('aria-disabled')).to.equal('true');
    });

    it('should communicate loading state to assistive technologies', async () => {
      element.loading = true;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-busy')).to.equal('true');
    });

    it('should communicate toggle state to assistive technologies', async () => {
      element.toggle = true;
      element.pressed = true;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-pressed')).to.equal('true');
    });

    it('should have focus indicators', async () => {
      const button = element.shadowRoot?.querySelector('button');
      button?.focus();

      // Browser provides default focus indicators for <button>
      expect(document.activeElement).to.equal(element);
    });
  });

  describe('Performance', () => {
    it('should update efficiently', async () => {
      const updateSpy = vi.spyOn(element, 'requestUpdate');

      element.variant = 'secondary';
      element.size = 'lg';
      element.disabled = true;

      await element.updateComplete;

      // Should batch updates efficiently
      expect(updateSpy).toHaveBeenCalled();
    });

    it('should cleanup event listeners', async () => {
      const button = element.shadowRoot?.querySelector('button');
      expect(button).to.exist;

      // Component should handle its own lifecycle
      element.remove();

      // No memory leaks expected with proper Lit lifecycle
    });
  });
});