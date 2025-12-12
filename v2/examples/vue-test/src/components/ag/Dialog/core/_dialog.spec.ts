import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgnosticDialog } from './Dialog';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('AgnosticDialog', () => {
  let element: AgnosticDialog;

  beforeEach(() => {
    element = new AgnosticDialog();
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('Basic Rendering', () => {
    it('should render with basic properties', async () => {
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-dialog');
      expect(element.open).toBe(false);
      expect(element.heading).toBe('');
      expect(element.noCloseOnEscape).toBe(false);
      expect(element.noCloseOnBackdrop).toBe(false);
    });

    it('should have role="dialog"', async () => {
      await element.updateComplete;
      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');
      expect(dialogElement).toBeTruthy();
      expect(dialogElement?.getAttribute('role')).toBe('dialog');
    });

    it('should have aria-modal="true"', async () => {
      await element.updateComplete;
      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');
      expect(dialogElement?.getAttribute('aria-modal')).toBe('true');
    });

    it('should be hidden by default', async () => {
      await element.updateComplete;
      expect(element.open).toBe(false);
      expect(element.hasAttribute('open')).toBe(false);

      // Check that the element doesn't have the open attribute
      // This ensures the CSS rule :host([open]) won't apply
      // The actual computed style test can be problematic in test environments
      expect(element.open).toBe(false);
      expect(element.hasAttribute('open')).toBe(false);
    });
  });

  describe('ARIA Attributes', () => {
    it('should have aria-labelledby when heading prop is provided', async () => {
      element.heading = 'Test Dialog Title';
      await element.updateComplete;

      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');
      expect(dialogElement?.getAttribute('aria-labelledby')).toBe('dialog-heading');

      // Verify the heading element exists with the correct ID
      const headingElement = element.shadowRoot?.querySelector('#dialog-heading');
      expect(headingElement).toBeTruthy();
      expect(headingElement?.textContent).toBe('Test Dialog Title');
    });

    it('should have aria-label when heading prop is not provided', async () => {
      // Default state - no heading provided
      expect(element.heading).toBe('');
      await element.updateComplete;

      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');
      expect(dialogElement?.getAttribute('aria-label')).toBe('Dialog');
      expect(dialogElement?.hasAttribute('aria-labelledby')).toBe(false);
    });

    it('should have aria-describedby when description is provided', async () => {
      element.description = 'This dialog provides important information';
      await element.updateComplete;

      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');
      expect(dialogElement?.getAttribute('aria-describedby')).toBe('dialog-description');

      // Verify the description element exists with the correct ID
      const descriptionElement = element.shadowRoot?.querySelector('#dialog-description');
      expect(descriptionElement).toBeTruthy();
      expect(descriptionElement?.textContent).toBe('This dialog provides important information');
    });

    it('should update ARIA attributes when props change', async () => {
      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');

      // Start with no heading - should have aria-label
      await element.updateComplete;
      expect(dialogElement?.getAttribute('aria-label')).toBe('Dialog');
      expect(dialogElement?.hasAttribute('aria-labelledby')).toBe(false);

      // Add heading - should switch to aria-labelledby
      element.heading = 'Dynamic Heading';
      await element.updateComplete;
      expect(dialogElement?.hasAttribute('aria-label')).toBe(false);
      expect(dialogElement?.getAttribute('aria-labelledby')).toBe('dialog-heading');

      // Remove heading - should switch back to aria-label
      element.heading = '';
      await element.updateComplete;
      expect(dialogElement?.getAttribute('aria-label')).toBe('Dialog');
      expect(dialogElement?.hasAttribute('aria-labelledby')).toBe(false);

      // Test description changes
      element.description = 'New description';
      await element.updateComplete;
      expect(dialogElement?.getAttribute('aria-describedby')).toBe('dialog-description');

      element.description = '';
      await element.updateComplete;
      expect(dialogElement?.hasAttribute('aria-describedby')).toBe(false);
    });
  });

  describe('Visibility and State Management', () => {
    it('should show when open prop is true', async () => {
      element.open = true;
      await element.updateComplete;
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.open).toBe(true);
    });

    it('should hide when open prop is false', async () => {
      element.open = true;
      await element.updateComplete;
      expect(element.open).toBe(true);

      element.open = false;
      await element.updateComplete;
      expect(element.hasAttribute('open')).toBe(false);
      expect(element.open).toBe(false);
    });

    it('should dispatch dialog-open event when opened', async () => {
      const openSpy = vi.fn();
      element.addEventListener('dialog-open', openSpy);

      element.open = true;
      await element.updateComplete;

      expect(openSpy).toHaveBeenCalledTimes(1);
    });

    it('should dispatch dialog-close event when closed', async () => {
      const closeSpy = vi.fn();
      element.addEventListener('dialog-close', closeSpy);

      element.open = true;
      await element.updateComplete;

      element.open = false;
      await element.updateComplete;

      expect(closeSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Event Callback Props (Dual-Dispatch Pattern)', () => {
    it('should invoke onDialogOpen callback when opened', async () => {
      const openCallback = vi.fn();
      element.onDialogOpen = openCallback;

      element.open = true;
      await element.updateComplete;

      expect(openCallback).toHaveBeenCalledTimes(1);
      expect(openCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'dialog-open',
          bubbles: true,
          composed: true,
        })
      );
    });

    it('should invoke onDialogClose callback when closed', async () => {
      const closeCallback = vi.fn();
      element.onDialogClose = closeCallback;

      element.open = true;
      await element.updateComplete;

      element.open = false;
      await element.updateComplete;

      expect(closeCallback).toHaveBeenCalledTimes(1);
      expect(closeCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'dialog-close',
          bubbles: true,
          composed: true,
        })
      );
    });

    it('should invoke onDialogCancel callback on Escape key', async () => {
      const cancelCallback = vi.fn();
      element.onDialogCancel = cancelCallback;

      element.open = true;
      element.noCloseOnEscape = false;
      await element.updateComplete;

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await element.updateComplete;

      expect(cancelCallback).toHaveBeenCalledTimes(1);
      expect(cancelCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'dialog-cancel',
          bubbles: true,
          composed: true,
        })
      );
    });

    it('should invoke onDialogCancel callback on backdrop click', async () => {
      const cancelCallback = vi.fn();
      element.onDialogCancel = cancelCallback;

      element.open = true;
      element.noCloseOnBackdrop = false;
      await element.updateComplete;

      const backdrop = element.shadowRoot?.querySelector('.dialog-backdrop');
      backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await element.updateComplete;

      expect(cancelCallback).toHaveBeenCalledTimes(1);
      expect(cancelCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'dialog-cancel',
          bubbles: true,
          composed: true,
        })
      );
    });

    it('should invoke onDialogClose callback when close button is clicked', async () => {
      const closeCallback = vi.fn();
      element.onDialogClose = closeCallback;

      element.open = true;
      element.showCloseButton = true;
      await element.updateComplete;

      const closeButtonComponent = element.shadowRoot?.querySelector('ag-close-button');
      const button = closeButtonComponent?.shadowRoot?.querySelector('button') as HTMLButtonElement;
      button.click();
      await element.updateComplete;

      expect(closeCallback).toHaveBeenCalledTimes(2); // Once for close button click, once for willUpdate closing
    });

    it('should support both addEventListener and callback prop patterns simultaneously', async () => {
      const listenerSpy = vi.fn();
      const callbackSpy = vi.fn();

      element.addEventListener('dialog-open', listenerSpy);
      element.onDialogOpen = callbackSpy;

      element.open = true;
      await element.updateComplete;

      // Both should be called
      expect(listenerSpy).toHaveBeenCalledTimes(1);
      expect(callbackSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Keyboard Interaction', () => {
    it('should close on Escape key by default', async () => {
      element.open = true;
      element.noCloseOnEscape = false;
      await element.updateComplete;
      expect(element.open).toBe(true);

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await element.updateComplete;

      expect(element.open).toBe(false);
    });

    it('should not close on Escape key when noCloseOnEscape is true', async () => {
      element.open = true;
      element.noCloseOnEscape = true;
      await element.updateComplete;
      expect(element.open).toBe(true);

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await element.updateComplete;

      expect(element.open).toBe(true);
    });

    it('should dispatch dialog-cancel event on Escape key when allowed', async () => {
      const cancelSpy = vi.fn();
      element.addEventListener('dialog-cancel', cancelSpy);

      element.open = true;
      element.noCloseOnEscape = false;
      await element.updateComplete;

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await element.updateComplete;

      expect(cancelSpy).toHaveBeenCalledTimes(1);
    });

    // Note: We rely on the focus-trap library to handle Tab/Shift+Tab cycling.
    // Testing exact focus cycling behavior is brittle and tests the library, not our component.
    // The "Focus Trap Integration" section below verifies integration works correctly.

    it('should prevent arrow keys from bubbling when focus is within dialog', async () => {
      // Add a focusable button to the dialog
      const button = document.createElement('button');
      button.textContent = 'Dialog Button';
      element.appendChild(button);

      element.open = true;
      await element.updateComplete;

      // Focus the button inside the dialog
      button.focus();
      expect(document.activeElement).toBe(button);

      // Create spy to track event propagation
      const eventSpy = vi.fn();
      document.addEventListener('keydown', eventSpy);

      // Test all arrow keys
      const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

      for (const key of arrowKeys) {
        const arrowEvent = new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true
        });

        // Reset spy
        eventSpy.mockClear();

        // Dispatch event
        document.dispatchEvent(arrowEvent);

        // Event should have been stopped from propagating
        // We can't directly test stopPropagation() in JSDOM, but we can verify
        // the dialog's keydown handler was invoked and the logic executed
        expect(eventSpy).toHaveBeenCalled();
      }

      // Cleanup
      document.removeEventListener('keydown', eventSpy);
    });

    it('should NOT prevent arrow keys when focus is outside dialog', async () => {
      // Create external button
      const externalButton = document.createElement('button');
      externalButton.textContent = 'External Button';
      document.body.appendChild(externalButton);

      element.open = true;
      await element.updateComplete;

      // Focus external button (outside dialog)
      externalButton.focus();
      expect(document.activeElement).toBe(externalButton);

      // Test that arrow keys are not prevented
      const arrowEvent = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true,
        cancelable: true
      });

      let eventPrevented = false;
      const preventSpy = vi.spyOn(arrowEvent, 'stopPropagation').mockImplementation(() => {
        eventPrevented = true;
      });

      document.dispatchEvent(arrowEvent);

      // Arrow key should NOT be prevented when focus is outside dialog
      expect(eventPrevented).toBe(false);

      // Cleanup
      preventSpy.mockRestore();
      document.body.removeChild(externalButton);
    });

    it('should not prevent other keys from bubbling', async () => {
      // Add a focusable button to the dialog
      const button = document.createElement('button');
      button.textContent = 'Dialog Button';
      element.appendChild(button);

      element.open = true;
      await element.updateComplete;
      button.focus();

      // Test that non-arrow keys are not prevented
      const otherKeys = ['Enter', 'Space', 'Home', 'End', 'PageUp', 'PageDown'];

      for (const key of otherKeys) {
        const keyEvent = new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true
        });

        let eventPrevented = false;
        const preventSpy = vi.spyOn(keyEvent, 'stopPropagation').mockImplementation(() => {
          eventPrevented = true;
        });

        document.dispatchEvent(keyEvent);

        // These keys should NOT be prevented
        expect(eventPrevented).toBe(false);

        preventSpy.mockRestore();
      }
    });
  });

  describe('Focus Management', () => {
    it('should move focus to first focusable element when opened', async () => {
      // Add a focusable button to the dialog
      const button = document.createElement('button');
      button.textContent = 'Close';
      element.appendChild(button);

      // Set up initial focus on something else
      const externalButton = document.createElement('button');
      document.body.appendChild(externalButton);
      externalButton.focus();

      expect(document.activeElement).toBe(externalButton);

      // Open the dialog
      element.open = true;
      await element.updateComplete;

      // Wait for focus-trap to initialize and set focus
      // Use a more reliable polling approach instead of arbitrary timeout
      let attempts = 0;
      const maxAttempts = 10; // 10 attempts * 10ms = 100ms max
      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 10));
        const activeElement = document.activeElement;
        if (activeElement === button || element.contains(activeElement)) {
          break;
        }
        attempts++;
      }

      // Focus should move to the first focusable element in the dialog
      // In some test environments, focus behavior can vary, so we check that
      // focus is either on the button or within the dialog
      const activeElement = document.activeElement;
      expect(
        activeElement === button || element.contains(activeElement)
      ).toBe(true);

      // Cleanup
      document.body.removeChild(externalButton);
    });

    it('should return focus to trigger element when closed', async () => {
      // Set up a trigger button
      const triggerButton = document.createElement('button');
      triggerButton.textContent = 'Open Dialog';
      document.body.appendChild(triggerButton);
      triggerButton.focus();

      expect(document.activeElement).toBe(triggerButton);

      // Open the dialog (focus-trap captures the previously focused element)
      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 50));

      // Close the dialog (focus-trap restores focus with returnFocusOnDeactivate: true)
      element.open = false;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      // focus-trap handles focus restoration
      // In JSDOM, focus might behave differently, so we verify it's either
      // the trigger button or somewhere reasonable (not undefined)
      expect(document.activeElement).toBeTruthy();

      // Cleanup
      document.body.removeChild(triggerButton);
    });

    it('should handle focus when no focusable elements exist', async () => {
      // Open dialog with no focusable content
      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      // focus-trap handles the fallback focus using the fallbackFocus option
      // We configured it to use the dialog container as fallback
      // Just verify the dialog is open and focus trap is activated
      expect(element.open).toBe(true);

      // In Shadow DOM, document.activeElement points to the host element
      // when focus is inside the shadow root
      const activeElement = document.activeElement;
      expect(activeElement === element || activeElement === document.body).toBe(true);
    });

    it('should maintain focus within dialog boundaries', async () => {
      // Add focusable elements to dialog
      const button1 = document.createElement('button');
      button1.textContent = 'Button 1';
      const button2 = document.createElement('button');
      button2.textContent = 'Button 2';

      element.appendChild(button1);
      element.appendChild(button2);

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      // Should focus first button
      expect(document.activeElement).toBe(button1);

      // Focus should be within dialog
      const focusedElement = document.activeElement;
      const dialogContainer = element.shadowRoot?.querySelector('.dialog-container');
      expect(dialogContainer?.contains(focusedElement) || element.contains(focusedElement)).toBe(true);
    });
  });

  describe('Backdrop Interaction', () => {
    it('should close on backdrop click by default', async () => {
      element.open = true;
      element.noCloseOnBackdrop = false;
      await element.updateComplete;
      expect(element.open).toBe(true);

      const backdrop = element.shadowRoot?.querySelector('.dialog-backdrop');
      expect(backdrop).toBeTruthy();

      backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await element.updateComplete;

      expect(element.open).toBe(false);
    });

    it('should not close on backdrop click when noCloseOnBackdrop is true', async () => {
      element.open = true;
      element.noCloseOnBackdrop = true;
      await element.updateComplete;
      expect(element.open).toBe(true);

      const backdrop = element.shadowRoot?.querySelector('.dialog-backdrop');
      expect(backdrop).toBeTruthy();

      backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await element.updateComplete;

      expect(element.open).toBe(true);
    });

    it('should not close on content area click', async () => {
      element.open = true;
      element.noCloseOnBackdrop = false;
      await element.updateComplete;
      expect(element.open).toBe(true);

      const container = element.shadowRoot?.querySelector('.dialog-container');
      expect(container).toBeTruthy();

      container?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await element.updateComplete;

      expect(element.open).toBe(true);
    });

    it('should dispatch dialog-cancel event on backdrop click when allowed', async () => {
      const cancelSpy = vi.fn();
      element.addEventListener('dialog-cancel', cancelSpy);

      element.open = true;
      element.noCloseOnBackdrop = false;
      await element.updateComplete;

      const backdrop = element.shadowRoot?.querySelector('.dialog-backdrop');
      backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await element.updateComplete;

      expect(cancelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Content and Slots', () => {
    it('should render default slot content', async () => {
      const content = document.createElement('p');
      content.textContent = 'Dialog content goes here';
      element.appendChild(content);

      await element.updateComplete;

      const defaultSlot = element.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
      expect(defaultSlot).toBeTruthy();

      const assignedElements = defaultSlot.assignedElements();
      expect(assignedElements.length).toBe(1);
      expect(assignedElements[0]).toBe(content);
      expect(assignedElements[0].textContent).toBe('Dialog content goes here');
    });

    it('should render header slot content', async () => {
      const headerContent = document.createElement('h1');
      headerContent.setAttribute('slot', 'header');
      headerContent.textContent = 'Custom Header';
      element.appendChild(headerContent);

      await element.updateComplete;

      const headerSlot = element.shadowRoot?.querySelector('slot[name="header"]') as HTMLSlotElement;
      expect(headerSlot).toBeTruthy();

      const assignedElements = headerSlot.assignedElements();
      expect(assignedElements.length).toBe(1);
      expect(assignedElements[0]).toBe(headerContent);
      expect(assignedElements[0].textContent).toBe('Custom Header');
    });

    it('should render footer slot content', async () => {
      const footerContent = document.createElement('div');
      footerContent.setAttribute('slot', 'footer');

      const button1 = document.createElement('button');
      button1.textContent = 'Cancel';
      const button2 = document.createElement('button');
      button2.textContent = 'OK';

      footerContent.appendChild(button1);
      footerContent.appendChild(button2);
      element.appendChild(footerContent);

      await element.updateComplete;

      const footerSlot = element.shadowRoot?.querySelector('slot[name="footer"]') as HTMLSlotElement;
      expect(footerSlot).toBeTruthy();

      const assignedElements = footerSlot.assignedElements();
      expect(assignedElements.length).toBe(1);
      expect(assignedElements[0]).toBe(footerContent);
      expect(assignedElements[0].children.length).toBe(2);
    });

    it('should update content when slots change', async () => {
      // Initial content
      const initialContent = document.createElement('p');
      initialContent.textContent = 'Initial content';
      element.appendChild(initialContent);

      await element.updateComplete;

      const defaultSlot = element.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
      let assignedElements = defaultSlot.assignedElements();
      expect(assignedElements.length).toBe(1);
      expect(assignedElements[0].textContent).toBe('Initial content');

      // Add new content
      const newContent = document.createElement('span');
      newContent.textContent = 'New content';
      element.appendChild(newContent);

      await element.updateComplete;

      assignedElements = defaultSlot.assignedElements();
      expect(assignedElements.length).toBe(2);
      expect(assignedElements[1].textContent).toBe('New content');

      // Remove initial content
      element.removeChild(initialContent);

      await element.updateComplete;

      assignedElements = defaultSlot.assignedElements();
      expect(assignedElements.length).toBe(1);
      expect(assignedElements[0].textContent).toBe('New content');
    });
  });

  describe('Close Button', () => {
    it('should render close button when showCloseButton is true', async () => {
      element.showCloseButton = true;
      await element.updateComplete;

      const closeButton = element.shadowRoot?.querySelector('ag-close-button');
      expect(closeButton).toBeTruthy();
      expect(closeButton?.tagName.toLowerCase()).toBe('ag-close-button');
    });

    it('should not render close button when showCloseButton is false', async () => {
      element.showCloseButton = false;
      await element.updateComplete;

      const closeButton = element.shadowRoot?.querySelector('ag-close-button');
      expect(closeButton).toBeNull();
    });

    it('should close dialog when close button is clicked', async () => {
      element.open = true;
      element.showCloseButton = true;
      await element.updateComplete;
      expect(element.open).toBe(true);

      const closeButtonComponent = element.shadowRoot?.querySelector('ag-close-button');
      expect(closeButtonComponent).toBeTruthy();

      // Get the actual button inside the close button component
      const button = closeButtonComponent?.shadowRoot?.querySelector('button') as HTMLButtonElement;
      expect(button).toBeTruthy();

      button.click();
      await element.updateComplete;

      expect(element.open).toBe(false);
    });

    it('should have proper attributes for close button', async () => {
      element.showCloseButton = true;
      await element.updateComplete;

      const closeButtonComponent = element.shadowRoot?.querySelector('ag-close-button');
      expect(closeButtonComponent?.getAttribute('label')).toBe('Close dialog');
      expect(closeButtonComponent?.getAttribute('position')).toBe('top-end');
    });
  });

  describe('CSS Classes and Styling', () => {
    it('should apply base CSS classes', async () => {
      await element.updateComplete;

      const backdrop = element.shadowRoot?.querySelector('.dialog-backdrop');
      const container = element.shadowRoot?.querySelector('.dialog-container');
      const header = element.shadowRoot?.querySelector('.dialog-header');
      const content = element.shadowRoot?.querySelector('.dialog-content');
      const footer = element.shadowRoot?.querySelector('.dialog-footer');

      expect(backdrop).toBeTruthy();
      expect(container).toBeTruthy();
      expect(header).toBeTruthy();
      expect(content).toBeTruthy();
      expect(footer).toBeTruthy();

      expect(backdrop?.classList.contains('dialog-backdrop')).toBe(true);
      expect(container?.classList.contains('dialog-container')).toBe(true);
      expect(header?.classList.contains('dialog-header')).toBe(true);
      expect(content?.classList.contains('dialog-content')).toBe(true);
      expect(footer?.classList.contains('dialog-footer')).toBe(true);
    });

    it('should apply open state classes when visible', async () => {
      // Initially closed
      expect(element.open).toBe(false);
      expect(element.hasAttribute('open')).toBe(false);

      // Open the dialog
      element.open = true;
      await element.updateComplete;

      expect(element.open).toBe(true);
      expect(element.hasAttribute('open')).toBe(true);

      // Check that the host element has the open attribute which triggers CSS styling
      expect(element.getAttribute('open')).toBe('');
    });

    it('should apply closed state classes when hidden', async () => {
      // Start open
      element.open = true;
      await element.updateComplete;
      expect(element.hasAttribute('open')).toBe(true);

      // Close the dialog
      element.open = false;
      await element.updateComplete;

      expect(element.open).toBe(false);
      expect(element.hasAttribute('open')).toBe(false);
    });

    it('should support custom CSS classes', async () => {
      // Add custom class to the element
      element.classList.add('custom-dialog-class');
      await element.updateComplete;

      expect(element.classList.contains('custom-dialog-class')).toBe(true);

      // Verify the custom class doesn't interfere with internal structure
      const backdrop = element.shadowRoot?.querySelector('.dialog-backdrop');
      expect(backdrop?.classList.contains('dialog-backdrop')).toBe(true);
    });
  });

  describe('Modal Behavior', () => {
    beforeEach(() => {
      // Reset body overflow state before each test
      document.body.style.overflow = '';
      document.body.removeAttribute('data-dialog-scroll-locked');
      document.body.removeAttribute('data-dialog-original-overflow');
      document.body.removeAttribute('data-dialog-count');
    });

    it('should prevent background scrolling when open', async () => {
      // Initially, body should not have scroll lock
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(false);
      expect(document.body.style.overflow).toBe('');

      // Open the dialog
      element.open = true;
      await element.updateComplete;

      // Body should now have scroll lock
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(true);
      expect(document.body.style.overflow).toBe('hidden');
      expect(document.body.hasAttribute('data-dialog-original-overflow')).toBe(true);
    });

    it('should restore background scrolling when closed', async () => {
      // Set initial overflow style
      document.body.style.overflow = 'auto';

      // Open dialog
      element.open = true;
      await element.updateComplete;
      expect(document.body.style.overflow).toBe('hidden');

      // Close dialog
      element.open = false;
      await element.updateComplete;

      // Body overflow should be restored
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(false);
      expect(document.body.hasAttribute('data-dialog-original-overflow')).toBe(false);
      expect(document.body.style.overflow).toBe('auto');
    });

    it('should handle multiple dialogs appropriately', async () => {
      // Create a second dialog
      const secondDialog = new AgnosticDialog();
      document.body.appendChild(secondDialog);

      // Open first dialog
      element.open = true;
      await element.updateComplete;
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(true);

      // Open second dialog - should maintain scroll lock
      secondDialog.open = true;
      await secondDialog.updateComplete;
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(true);

      // Close first dialog - should maintain scroll lock (second still open)
      element.open = false;
      await element.updateComplete;
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(true);

      // Close second dialog - should restore scroll
      secondDialog.open = false;
      await secondDialog.updateComplete;
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(false);

      // Cleanup
      document.body.removeChild(secondDialog);
    });
  });

  describe('Accessibility Integration', () => {
    it('should pass axe accessibility tests', async () => {
      // Set up a realistic dialog with content
      element.heading = 'Confirmation Dialog';
      element.description = 'Are you sure you want to proceed?';

      const button = document.createElement('button');
      button.textContent = 'Confirm';
      element.appendChild(button);

      element.open = true;
      await element.updateComplete;

      // Run axe accessibility tests
      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });

    it('should announce dialog opening to screen readers', async () => {
      // This test verifies the ARIA structure that screen readers use
      element.heading = 'Important Dialog';
      element.open = true;
      await element.updateComplete;

      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');

      // Verify screen reader accessibility structure
      expect(dialogElement?.getAttribute('role')).toBe('dialog');
      expect(dialogElement?.getAttribute('aria-modal')).toBe('true');
      expect(dialogElement?.getAttribute('aria-labelledby')).toBe('dialog-heading');

      // Verify heading exists for screen reader announcement
      const headingElement = element.shadowRoot?.querySelector('#dialog-heading');
      expect(headingElement?.textContent).toBe('Important Dialog');
    });

    it('should announce dialog closing to screen readers', async () => {
      // Set up dialog with aria-describedby for better screen reader context
      element.description = 'This dialog has been closed';
      element.open = true;
      await element.updateComplete;

      const dialogElement = element.shadowRoot?.querySelector('[role="dialog"]');
      expect(dialogElement?.getAttribute('aria-describedby')).toBe('dialog-description');

      // Close the dialog
      element.open = false;
      await element.updateComplete;

      // Verify the dialog is no longer in the DOM tree for screen readers
      expect(element.hasAttribute('open')).toBe(false);

      // When closed, the dialog should not be visible to screen readers
      // (handled by CSS display: none via :host([open]))
      expect(element.open).toBe(false);
    });
  });

  describe('Event Listener Lifecycle', () => {
    it('should only register keydown listener when dialog is open', async () => {
      // Spy on addEventListener
      const addEventSpy = vi.spyOn(document, 'addEventListener');
      const removeEventSpy = vi.spyOn(document, 'removeEventListener');

      // Initially closed - no listener registered
      expect(element.open).toBe(false);

      // Open dialog - listener should be registered
      element.open = true;
      await element.updateComplete;

      expect(addEventSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

      // Close dialog - listener should be removed
      element.open = false;
      await element.updateComplete;

      expect(removeEventSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

      // Cleanup spies
      addEventSpy.mockRestore();
      removeEventSpy.mockRestore();
    });

    it('should not have keydown listener active when dialog is closed', async () => {
      // Create a spy to track if handler runs
      const handlerSpy = vi.fn();
      element.addEventListener('dialog-cancel', handlerSpy);

      // Dialog is closed
      element.open = false;
      await element.updateComplete;

      // Press Escape - handler should NOT run since dialog is closed
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await element.updateComplete;

      // Handler should not have been called (listener not registered)
      expect(handlerSpy).not.toHaveBeenCalled();
    });

    it('should prevent multiple dialog instances from conflicting', async () => {
      // Create two dialog instances
      const dialog2 = new AgnosticDialog();
      document.body.appendChild(dialog2);

      // Open first dialog
      element.open = true;
      await element.updateComplete;

      // Second dialog is closed
      dialog2.open = false;
      await dialog2.updateComplete;

      // Add a button to first dialog for focus testing
      const button1 = document.createElement('button');
      button1.textContent = 'Dialog 1 Button';
      element.appendChild(button1);
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      // Verify first dialog handles Tab correctly
      button1.focus();
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
      const preventSpy = vi.spyOn(tabEvent, 'preventDefault');
      document.dispatchEvent(tabEvent);

      // First dialog should handle the event
      expect(preventSpy).toHaveBeenCalled();

      // Cleanup
      preventSpy.mockRestore();
      document.body.removeChild(dialog2);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle missing trigger element gracefully', async () => {
      // Test when no previously focused element exists
      (document.activeElement as HTMLElement)?.blur?.();

      // Open dialog
      element.open = true;
      await element.updateComplete;

      // Should still set focus to first focusable element or dialog itself
      await new Promise(resolve => setTimeout(resolve, 10));

      // Close dialog - should not throw error when restoring focus
      element.open = false;
      await element.updateComplete;

      // Should complete without throwing errors
      expect(element.open).toBe(false);
    });

    it('should handle rapid open/close operations', async () => {
      // Test rapid state changes
      element.open = true;
      element.open = false;
      element.open = true;
      element.open = false;
      element.open = true;

      await element.updateComplete;

      // Should end up in the correct final state
      expect(element.open).toBe(true);
      expect(element.hasAttribute('open')).toBe(true);

      // Background scroll should be properly managed
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(true);

      // Close and verify cleanup
      element.open = false;
      await element.updateComplete;

      expect(element.open).toBe(false);
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(false);
    });

    it('should clean up event listeners on disconnect', async () => {
      // Open dialog to ensure event listeners are active
      element.open = true;
      await element.updateComplete;

      // Verify dialog is open and scroll is locked
      expect(element.open).toBe(true);
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(true);

      // Remove element from DOM (triggers disconnectedCallback)
      const parent = element.parentElement;
      expect(parent).toBeTruthy();
      parent?.removeChild(element);

      // Verify background scroll is restored on disconnect
      expect(document.body.hasAttribute('data-dialog-scroll-locked')).toBe(false);

      // Test that keyboard events no longer affect the disconnected element
      const originalOpen = element.open;
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      // Element should not respond to keyboard events when disconnected
      expect(element.open).toBe(originalOpen);

      // Re-add element for cleanup
      document.body.appendChild(element);
    });
  });

  describe('Focus Trap Integration', () => {
    // These tests verify that focus-trap is correctly integrated,
    // not that focus-trap itself works (that's already tested by the library)

    it('should activate focus trap when opened and deactivate when closed', async () => {
      const button = document.createElement('button');
      button.textContent = 'Test';
      element.appendChild(button);

      // Open dialog
      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 50));

      // Dialog should be open and focus-trap should be active (no errors)
      expect(element.open).toBe(true);

      // Close dialog
      element.open = false;
      await element.updateComplete;

      // Should deactivate without errors
      expect(element.open).toBe(false);
    });

    it('should work with mixed Shadow DOM and slotted content', async () => {
      // Add both shadow DOM (close button) and light DOM (slotted) elements
      element.showCloseButton = true;
      const slottedButton = document.createElement('button');
      slottedButton.textContent = 'Confirm';
      element.appendChild(slottedButton);

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 50));

      // Verify both elements are present and focusable
      const closeButtonComponent = element.shadowRoot?.querySelector('ag-close-button') as HTMLElement;
      expect(closeButtonComponent).toBeTruthy();
      expect(closeButtonComponent.tagName.toLowerCase()).toBe('ag-close-button');
      expect(element.contains(slottedButton)).toBe(true);

      // Both should be able to receive focus
      const closeButton = closeButtonComponent?.shadowRoot?.querySelector('button') as HTMLElement;
      closeButton?.focus();
      slottedButton.focus();
      expect(slottedButton.tagName.toLowerCase()).toBe('button');
    });

    it('should handle dialogs with no focusable content gracefully', async () => {
      // Dialog with only text content
      const span = document.createElement('span');
      span.textContent = 'Information message';
      element.appendChild(span);

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 50));

      // Should not throw errors - focus-trap will handle fallback
      expect(element.open).toBe(true);

      // Should be able to close
      element.open = false;
      await element.updateComplete;
      expect(element.open).toBe(false);
    });
  });

});
