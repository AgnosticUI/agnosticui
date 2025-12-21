/**
 * AgnosticUI Toggle Component Tests
 * Comprehensive test suite for ag-toggle implementing WAI-ARIA Switch pattern
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgToggle } from './Toggle';

// AgToggle is automatically registered as 'ag-toggle' via @customElement decorator

describe('AgToggle', () => {
  let element: AgToggle;

  beforeEach(() => {
    // Create element and add to DOM
    element = document.createElement('ag-toggle') as AgToggle;
    // Set default label to prevent accessibility warnings during testing
    element.label = 'Test toggle';
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

    it('should render label element and associate with toggle', async () => {
      element.label = 'Enable dark mode';
      await element.updateComplete;

      const label = element.shadowRoot!.querySelector('label');
      const button = element.shadowRoot!.querySelector('button');

      expect(label).toBeTruthy();
      expect(label!.textContent?.trim()).toBe('Enable dark mode');
      expect(button!.getAttribute('aria-labelledby')).toBeTruthy();
    });

    it('should support helpText with aria-describedby', async () => {
      element.label = 'Test toggle';
      element.helpText = 'This toggle controls the feature';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const helpText = element.shadowRoot!.querySelector('.ag-form-control__helper');

      expect(helpText).toBeTruthy();
      expect(helpText!.textContent?.trim()).toBe('This toggle controls the feature');
      expect(button!.getAttribute('aria-describedby')).toBeTruthy();
    });

    it('should support errorMessage with aria-describedby when invalid', async () => {
      element.label = 'Test toggle';
      element.invalid = true;
      element.errorMessage = 'This field is required';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const errorText = element.shadowRoot!.querySelector('.ag-form-control__error');

      expect(errorText).toBeTruthy();
      expect(errorText!.textContent?.trim()).toBe('This field is required');
      expect(button!.getAttribute('aria-describedby')).toBeTruthy();
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

    it('should provide proper accessible name via aria-labelledby', async () => {
      element.label = 'Enable dark mode';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const label = element.shadowRoot!.querySelector('label');

      expect(button!.hasAttribute('aria-labelledby')).toBe(true);
      expect(label).toBeTruthy();
      expect(label!.textContent?.trim()).toBe('Enable dark mode');
    });

    it('should support labelPosition prop', async () => {
      element.label = 'Test toggle';
      element.labelPosition = 'start';
      await element.updateComplete;

      const wrapper = element.shadowRoot!.querySelector('.ag-form-control--horizontal');
      expect(wrapper).toBeTruthy();
    });

    it('should support aria-describedby with helpText', async () => {
      element.label = 'Test toggle';
      element.helpText = 'Additional information';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const helpText = element.shadowRoot!.querySelector('.ag-form-control__helper');

      expect(button!.getAttribute('aria-describedby')).toBeTruthy();
      expect(helpText).toBeTruthy();
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

  describe('State Management and Events', () => {
    it('should toggle checked state when clicked', async () => {
      element.label = 'Test toggle';
      element.checked = false;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(element.checked).toBe(true);
      expect(button!.getAttribute('aria-checked')).toBe('true');
    });

    it('should dispatch toggle-change event when state changes', async () => {
      element.label = 'Event test';
      element.checked = false;
      await element.updateComplete;

      const eventSpy = vi.fn();
      element.addEventListener('toggle-change', eventSpy);

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(eventSpy).toHaveBeenCalledOnce();
      expect(eventSpy.mock.calls[0][0]).toBeInstanceOf(CustomEvent);

      const event = eventSpy.mock.calls[0][0] as CustomEvent;
      expect(event.detail.checked).toBe(true);
      expect(event.detail.value).toBe(element.value || '');
      expect(event.bubbles).toBe(true);
    });

    it('should include form name and value in event detail', async () => {
      element.label = 'Form test';
      element.name = 'testToggle';
      element.value = 'yes';
      element.checked = false;
      await element.updateComplete;

      const eventSpy = vi.fn();
      element.addEventListener('toggle-change', eventSpy);

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      const event = eventSpy.mock.calls[0][0] as CustomEvent;
      expect(event.detail.name).toBe('testToggle');
      expect(event.detail.value).toBe('yes');
    });

    it('should not change state when disabled', async () => {
      element.label = 'Disabled test';
      element.checked = false;
      element.disabled = true;
      await element.updateComplete;

      const eventSpy = vi.fn();
      element.addEventListener('toggle-change', eventSpy);

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(element.checked).toBe(false);
      expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should not change state when readonly', async () => {
      element.label = 'Readonly test';
      element.checked = false;
      element.readonly = true;
      await element.updateComplete;

      const eventSpy = vi.fn();
      element.addEventListener('toggle-change', eventSpy);

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(element.checked).toBe(false);
      expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should allow programmatic state changes', async () => {
      element.label = 'Programmatic test';
      element.checked = false;
      await element.updateComplete;

      // Test direct property assignment
      element.checked = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-checked')).toBe('true');

      // Test back to false
      element.checked = false;
      await element.updateComplete;
      expect(button!.getAttribute('aria-checked')).toBe('false');
    });

    it('should maintain checked state through re-renders', async () => {
      element.label = 'Persistence test';
      element.checked = true;
      await element.updateComplete;

      // Trigger re-render by changing another property
      element.size = 'lg';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-checked')).toBe('true');
      expect(element.checked).toBe(true);
    });

    it('should update screen reader text based on state', async () => {
      element.label = 'Screen reader test';
      element.checked = false;
      await element.updateComplete;

      const stateText = element.shadowRoot!.querySelector('.visually-hidden');
      expect(stateText!.textContent?.trim()).toBe('Off');

      element.checked = true;
      await element.updateComplete;
      expect(stateText!.textContent?.trim()).toBe('On');
    });

    it('should support initial checked state', async () => {
      const testElement = document.createElement('ag-toggle') as AgToggle;
      testElement.label = 'Initially checked';
      testElement.checked = true;
      document.body.appendChild(testElement);
      await testElement.updateComplete;

      const button = testElement.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-checked')).toBe('true');
      expect(testElement.checked).toBe(true);

      document.body.removeChild(testElement);
    });
  });

  describe('Keyboard Interactions', () => {
    it('should toggle when Space key is pressed', async () => {
      element.label = 'Keyboard test';
      element.checked = false;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const spaceEvent = new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true
      });

      button!.dispatchEvent(spaceEvent);
      await element.updateComplete;

      expect(element.checked).toBe(true);
      expect(button!.getAttribute('aria-checked')).toBe('true');
    });

    it('should toggle when Enter key is pressed', async () => {
      element.label = 'Enter test';
      element.checked = false;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true
      });

      button!.dispatchEvent(enterEvent);
      await element.updateComplete;

      expect(element.checked).toBe(true);
      expect(button!.getAttribute('aria-checked')).toBe('true');
    });

    it('should not toggle when other keys are pressed', async () => {
      element.label = 'Other keys test';
      element.checked = false;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');

      // Test various keys that should not trigger toggle
      const keys = ['ArrowUp', 'ArrowDown', 'Tab', 'Escape', 'a', '1', 'Home', 'End'];

      for (const key of keys) {
        const keyEvent = new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true
        });

        button!.dispatchEvent(keyEvent);
        await element.updateComplete;

        expect(element.checked).toBe(false);
      }
    });

    it('should prevent default behavior on Space and Enter keys', async () => {
      element.label = 'Prevent default test';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');

      // Test Space key preventDefault
      const spaceEvent = new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true
      });

      const spacePreventDefaultSpy = vi.spyOn(spaceEvent, 'preventDefault');
      button!.dispatchEvent(spaceEvent);

      expect(spacePreventDefaultSpy).toHaveBeenCalled();

      // Test Enter key preventDefault
      const enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true
      });

      const enterPreventDefaultSpy = vi.spyOn(enterEvent, 'preventDefault');
      button!.dispatchEvent(enterEvent);

      expect(enterPreventDefaultSpy).toHaveBeenCalled();
    });

    it('should not toggle when disabled and keyboard is used', async () => {
      element.label = 'Disabled keyboard test';
      element.checked = false;
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const spaceEvent = new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true
      });

      button!.dispatchEvent(spaceEvent);
      await element.updateComplete;

      expect(element.checked).toBe(false);
    });

    it('should not toggle when readonly and keyboard is used', async () => {
      element.label = 'Readonly keyboard test';
      element.checked = false;
      element.readonly = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true
      });

      button!.dispatchEvent(enterEvent);
      await element.updateComplete;

      expect(element.checked).toBe(false);
    });

    it('should dispatch events for keyboard activation', async () => {
      element.label = 'Keyboard event test';
      element.checked = false;
      await element.updateComplete;

      const eventSpy = vi.fn();
      element.addEventListener('toggle-change', eventSpy);

      const button = element.shadowRoot!.querySelector('button');
      const spaceEvent = new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true
      });

      button!.dispatchEvent(spaceEvent);
      await element.updateComplete;

      expect(eventSpy).toHaveBeenCalledOnce();
      expect(element.checked).toBe(true);
    });

    it('should be focusable via keyboard navigation', async () => {
      element.label = 'Focus test';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.tabIndex).toBe(0);
      expect(button!.hasAttribute('disabled')).toBe(false);

      // Button should be focusable
      button!.focus();
      expect(document.activeElement).toBe(element);
    });

    it('should not be focusable when disabled', async () => {
      element.label = 'Disabled focus test';
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.hasAttribute('disabled')).toBe(true);
      // Disabled buttons are automatically excluded from tab order by the browser
    });
  });

  describe('Size Variants and Visual States', () => {
    it('should apply size variant CSS classes correctly', async () => {
      element.label = 'Size test';
      const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = ['xs', 'sm', 'md', 'lg', 'xl'];

      for (const size of sizes) {
        element.size = size;
        await element.updateComplete;

        const button = element.shadowRoot!.querySelector('button');
        expect(button!.classList.contains(`ag-toggle--${size}`)).toBe(true);

        // Check that size is reflected in the attribute for CSS styling
        expect(element.getAttribute('size')).toBe(size);
      }
    });

    it('should apply variant CSS classes correctly', async () => {
      element.label = 'Variant test';
      const variants: Array<'default' | 'success' | 'warning' | 'danger'> =
        ['default', 'success', 'warning', 'danger'];

      for (const variant of variants) {
        element.variant = variant;
        await element.updateComplete;

        const button = element.shadowRoot!.querySelector('button');
        expect(button!.classList.contains(`ag-toggle--${variant}`)).toBe(true);

        // Check that variant is reflected in the attribute for CSS styling
        expect(element.getAttribute('variant')).toBe(variant);
      }
    });

    it('should apply disabled state styling', async () => {
      element.label = 'Disabled styling test';
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.hasAttribute('disabled')).toBe(true);
      expect(element.hasAttribute('disabled')).toBe(true);
    });

    it('should apply checked state styling via attribute', async () => {
      element.label = 'Checked styling test';
      element.checked = false;
      await element.updateComplete;

      expect(element.hasAttribute('checked')).toBe(false);

      element.checked = true;
      await element.updateComplete;
      expect(element.hasAttribute('checked')).toBe(true);
    });

    it('should apply readonly state styling via attribute', async () => {
      element.label = 'Readonly styling test';
      element.readonly = true;
      await element.updateComplete;

      expect(element.hasAttribute('readonly')).toBe(true);
    });

    it('should have correct CSS custom property structure', async () => {
      element.label = 'CSS properties test';
      element.size = 'lg';
      element.variant = 'success';
      element.checked = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const track = element.shadowRoot!.querySelector('.ag-toggle__track');
      const handle = element.shadowRoot!.querySelector('.ag-toggle__handle');

      // Verify structural CSS classes exist for styling hooks
      expect(button!.classList.contains('ag-toggle')).toBe(true);
      expect(button!.classList.contains('ag-toggle--lg')).toBe(true);
      expect(button!.classList.contains('ag-toggle--success')).toBe(true);
      expect(track!.classList.contains('ag-toggle__track')).toBe(true);
      expect(handle!.classList.contains('ag-toggle__handle')).toBe(true);
    });

    it('should support combining size and variant classes', async () => {
      element.label = 'Combined classes test';
      element.size = 'xl';
      element.variant = 'danger';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.classList.contains('ag-toggle')).toBe(true);
      expect(button!.classList.contains('ag-toggle--xl')).toBe(true);
      expect(button!.classList.contains('ag-toggle--danger')).toBe(true);

      // Should have both attributes for external CSS targeting
      expect(element.getAttribute('size')).toBe('xl');
      expect(element.getAttribute('variant')).toBe('danger');
    });

    it('should maintain consistent button structure across all variants', async () => {
      element.label = 'Structure consistency test';
      const variants: Array<'default' | 'success' | 'warning' | 'danger'> =
        ['default', 'success', 'warning', 'danger'];

      for (const variant of variants) {
        element.variant = variant;
        await element.updateComplete;

        const button = element.shadowRoot!.querySelector('button');
        const track = element.shadowRoot!.querySelector('.ag-toggle__track');
        const handle = element.shadowRoot!.querySelector('.ag-toggle__handle');
        const stateText = element.shadowRoot!.querySelector('.visually-hidden');

        // All variants should have same DOM structure
        expect(button).toBeTruthy();
        expect(track).toBeTruthy();
        expect(handle).toBeTruthy();
        expect(stateText).toBeTruthy();

        // Track should contain handle
        expect(track!.contains(handle!)).toBe(true);
        // Button should contain all elements
        expect(button!.contains(track!)).toBe(true);
        expect(button!.contains(stateText!)).toBe(true);
      }
    });

    it('should reflect boolean properties as attributes for CSS styling', async () => {
      element.label = 'Attribute reflection test';

      // Test checked reflection
      element.checked = true;
      await element.updateComplete;
      expect(element.hasAttribute('checked')).toBe(true);

      element.checked = false;
      await element.updateComplete;
      expect(element.hasAttribute('checked')).toBe(false);

      // Test disabled reflection
      element.disabled = true;
      await element.updateComplete;
      expect(element.hasAttribute('disabled')).toBe(true);

      element.disabled = false;
      await element.updateComplete;
      expect(element.hasAttribute('disabled')).toBe(false);

      // Test readonly reflection
      element.readonly = true;
      await element.updateComplete;
      expect(element.hasAttribute('readonly')).toBe(true);

      element.readonly = false;
      await element.updateComplete;
      expect(element.hasAttribute('readonly')).toBe(false);
    });

    it('should provide semantic token integration points', async () => {
      element.label = 'Semantic tokens test';
      await element.updateComplete;

      // The component should be styled primarily through CSS custom properties
      // This test verifies the structure is in place for semantic token integration
      const button = element.shadowRoot!.querySelector('button');
      expect(button!.classList.contains('ag-toggle')).toBe(true);

      // Component should have adoptedStyleSheets for CSS integration
      expect(element.shadowRoot!.adoptedStyleSheets).toBeDefined();

      // Test that CSS classes are applied for styling hooks
      expect(button!.classList.contains('ag-toggle')).toBe(true);
      expect(element.shadowRoot!.querySelector('.ag-toggle__track')).toBeTruthy();
      expect(element.shadowRoot!.querySelector('.ag-toggle__handle')).toBeTruthy();
    });
  });

  describe('Event Propagation (Standardized Pattern)', () => {
    it('should dispatch toggle-change event via addEventListener pattern', async () => {
      element.label = 'Event test';
      element.checked = false;
      await element.updateComplete;

      const eventSpy = vi.fn();
      element.addEventListener('toggle-change', eventSpy);

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(eventSpy).toHaveBeenCalledOnce();
      const event = eventSpy.mock.calls[0][0] as CustomEvent;
      expect(event.detail).toEqual({
        checked: true,
        name: '',
        value: ''
      });
      expect(event.bubbles).toBe(true);
      expect(event.composed).toBe(true);
    });

    it('should invoke onToggleChange callback prop pattern', async () => {
      element.label = 'Callback test';
      element.checked = false;

      const onToggleChangeSpy = vi.fn();
      element.onToggleChange = onToggleChangeSpy;

      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(onToggleChangeSpy).toHaveBeenCalledOnce();
      const event = onToggleChangeSpy.mock.calls[0][0];
      expect(event.detail).toEqual({
        checked: true,
        name: '',
        value: ''
      });
    });

    it('should invoke onClick callback for native click event', async () => {
      element.label = 'Click callback test';

      const onClickSpy = vi.fn();
      element.onClick = onClickSpy;

      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(onClickSpy).toHaveBeenCalledOnce();
      const event = onClickSpy.mock.calls[0][0];
      expect(event).toBeInstanceOf(MouseEvent);
    });

    it('should dispatch both DOM event and invoke callback (dual-dispatch)', async () => {
      element.label = 'Dual dispatch test';
      element.checked = false;

      const domEventSpy = vi.fn();
      const callbackSpy = vi.fn();

      element.addEventListener('toggle-change', domEventSpy);
      element.onToggleChange = callbackSpy;

      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      // Both should be called
      expect(domEventSpy).toHaveBeenCalledOnce();
      expect(callbackSpy).toHaveBeenCalledOnce();

      // Both should receive the same event data
      const domEvent = domEventSpy.mock.calls[0][0] as CustomEvent;
      const callbackEvent = callbackSpy.mock.calls[0][0];
      expect(domEvent.detail).toEqual(callbackEvent.detail);
    });

    it('should include form integration data in toggle-change event', async () => {
      element.label = 'Form data test';
      element.name = 'notifications';
      element.value = 'enabled';
      element.checked = false;
      await element.updateComplete;

      const eventSpy = vi.fn();
      element.addEventListener('toggle-change', eventSpy);

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      expect(eventSpy).toHaveBeenCalledOnce();
      const event = eventSpy.mock.calls[0][0] as CustomEvent;
      expect(event.detail).toEqual({
        checked: true,
        name: 'notifications',
        value: 'enabled'
      });
    });

    it('should not invoke callbacks when disabled', async () => {
      element.label = 'Disabled callback test';
      element.disabled = true;

      const onClickSpy = vi.fn();
      const onToggleChangeSpy = vi.fn();

      element.onClick = onClickSpy;
      element.onToggleChange = onToggleChangeSpy;

      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      // Disabled buttons don't fire click events at all (native browser behavior)
      expect(onClickSpy).not.toHaveBeenCalled();
      // And onToggleChange should not be called either
      expect(onToggleChangeSpy).not.toHaveBeenCalled();
    });

    it('should not invoke callbacks when readonly', async () => {
      element.label = 'Readonly callback test';
      element.readonly = true;

      const onClickSpy = vi.fn();
      const onToggleChangeSpy = vi.fn();

      element.onClick = onClickSpy;
      element.onToggleChange = onToggleChangeSpy;

      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      button!.click();
      await element.updateComplete;

      // onClick should still be called (native event behavior)
      expect(onClickSpy).toHaveBeenCalledOnce();
      // But onToggleChange should not (toggle is prevented)
      expect(onToggleChangeSpy).not.toHaveBeenCalled();
    });

    it('should invoke callbacks for keyboard activation', async () => {
      element.label = 'Keyboard callback test';
      element.checked = false;

      const onToggleChangeSpy = vi.fn();
      element.onToggleChange = onToggleChangeSpy;

      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const spaceEvent = new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true
      });

      button!.dispatchEvent(spaceEvent);
      await element.updateComplete;

      expect(onToggleChangeSpy).toHaveBeenCalledOnce();
      expect(element.checked).toBe(true);
    });
  });
});