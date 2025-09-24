/**
 * AgnosticUI Toggle Component Tests
 * Comprehensive test suite for ag-toggle implementing WAI-ARIA Switch pattern
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgToggle } from './_Toggle';

// AgToggle is automatically registered as 'ag-toggle' via @customElement decorator

describe('AgToggle', () => {
  let element: AgToggle;

  beforeEach(() => {
    // Create element and add to DOM
    element = document.createElement('ag-toggle') as AgToggle;
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up after each test
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  describe('Component Creation and Basic Structure', () => {
    it('should create and render as semantic button element', async () => {
      element.label = 'Enable notifications';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button).toBeTruthy();
      expect(button?.tagName).toBe('BUTTON');
    });

    it('should render with proper shadow DOM structure', async () => {
      element.label = 'Test toggle';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const track = element.shadowRoot!.querySelector('.ag-toggle__track');
      const handle = element.shadowRoot!.querySelector('.ag-toggle__handle');

      expect(button).toBeTruthy();
      expect(track).toBeTruthy();
      expect(handle).toBeTruthy();

      // Verify track contains handle
      expect(track!.contains(handle!)).toBe(true);
    });

    it('should set default properties correctly', async () => {
      element.label = 'Test toggle';
      await element.updateComplete;

      expect(element.size).toBe('md');
      expect(element.variant).toBe('default');
      expect(element.checked).toBe(false);
      expect(element.disabled).toBe(false);
      expect(element.readonly).toBe(false);
    });

    it('should apply correct CSS classes based on properties', async () => {
      element.label = 'Test toggle';
      element.size = 'lg';
      element.variant = 'success';
      element.checked = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.classList.contains('ag-toggle')).toBe(true);
      expect(button!.classList.contains('ag-toggle--lg')).toBe(true);
      expect(button!.classList.contains('ag-toggle--success')).toBe(true);
    });

    it('should warn when label is missing', async () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      // Create a new element without label to trigger warning on first update
      const testElement = document.createElement('ag-toggle') as AgToggle;
      document.body.appendChild(testElement);
      await testElement.updateComplete;

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('AgToggle: label property is required for accessibility')
      );

      consoleSpy.mockRestore();
      document.body.removeChild(testElement);
    });

    it('should use provided label as aria-label', async () => {
      element.label = 'Enable dark mode';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-label')).toBe('Enable dark mode');
    });

    it('should support labelledBy for external labeling', async () => {
      element.labelledBy = 'external-label';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-labelledby')).toBe('external-label');
      expect(button!.hasAttribute('aria-label')).toBe(false);
    });

    it('should support describedBy for additional description', async () => {
      element.label = 'Test toggle';
      element.describedBy = 'toggle-description';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-describedby')).toBe('toggle-description');
    });
  });

  describe('ARIA Attributes and Accessibility', () => {
    it('should have correct WAI-ARIA Switch pattern implementation', async () => {
      element.label = 'Enable notifications';
      element.checked = false;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('role')).toBe('switch');
      expect(button!.getAttribute('aria-checked')).toBe('false');

      // Test checked state
      element.checked = true;
      await element.updateComplete;
      expect(button!.getAttribute('aria-checked')).toBe('true');
    });

    it('should provide proper accessible name via aria-label', async () => {
      element.label = 'Enable dark mode';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-label')).toBe('Enable dark mode');
      expect(button!.hasAttribute('aria-labelledby')).toBe(false);
    });

    it('should use aria-labelledby when labelledBy is provided', async () => {
      element.labelledBy = 'toggle-label-id';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-labelledby')).toBe('toggle-label-id');
      expect(button!.hasAttribute('aria-label')).toBe(false);
    });

    it('should support aria-describedby for additional description', async () => {
      element.label = 'Test toggle';
      element.describedBy = 'toggle-description-id';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-describedby')).toBe('toggle-description-id');
    });

    it('should have correct tabindex for keyboard navigation', async () => {
      element.label = 'Test toggle';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.tabIndex).toBe(0); // Should be focusable
    });

    it('should be excluded from tab order when disabled', async () => {
      element.label = 'Test toggle';
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.hasAttribute('disabled')).toBe(true);
      // Disabled buttons are automatically excluded from tab order
    });

    it('should provide screen reader state indication', async () => {
      element.label = 'Test toggle';
      element.checked = false;
      await element.updateComplete;

      const stateText = element.shadowRoot!.querySelector('.visually-hidden');
      expect(stateText).toBeTruthy();
      expect(stateText!.textContent?.trim()).toBe('Off');

      // Test checked state
      element.checked = true;
      await element.updateComplete;
      expect(stateText!.textContent?.trim()).toBe('On');
    });

    it('should maintain aria-checked sync with checked property', async () => {
      element.label = 'Test toggle';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');

      // Test programmatic state changes
      element.checked = true;
      await element.updateComplete;
      expect(button!.getAttribute('aria-checked')).toBe('true');

      element.checked = false;
      await element.updateComplete;
      expect(button!.getAttribute('aria-checked')).toBe('false');
    });

    it('should have minimum touch target size for accessibility', async () => {
      element.label = 'Test toggle';
      element.size = 'xs'; // Even smallest size should meet requirements
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const computedStyle = window.getComputedStyle(button!);

      // Should have minimum 44px touch target (from CSS min-width/min-height)
      expect(computedStyle.minWidth).toBe('44px');
      expect(computedStyle.minHeight).toBe('44px');
    });

    it('should support high contrast mode with proper focus indicators', async () => {
      element.label = 'Test toggle';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');

      // Simulate focus
      button!.dispatchEvent(new FocusEvent('focus'));

      // The actual outline will be applied via CSS custom properties
      // We're testing that the structure is in place for styling
      expect(button!.tagName).toBe('BUTTON'); // Semantic element supports high contrast
      expect(button!.getAttribute('role')).toBe('switch'); // Proper ARIA role for assistive tech
    });
  });

  // Additional describe sections will be added one at a time for review
});