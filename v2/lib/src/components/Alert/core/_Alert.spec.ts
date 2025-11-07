import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Alert, type AlertType } from './Alert';

if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', Alert);
}

describe('Alert Component', () => {
  let element: Alert;

  beforeEach(() => {
    element = document.createElement('ag-alert') as Alert;
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  it('should register the custom element', () => {
    expect(customElements.get('ag-alert')).toBeDefined();
  });

  it('should have default properties', async () => {
    await element.updateComplete;
    expect(element.type).toBe('default');
    expect(element.bordered).toBe(false);
    expect(element.rounded).toBe(false);
    expect(element.borderedLeft).toBe(false);
  });

  it('should have role="alert"', async () => {
    await element.updateComplete;
    const div = element.shadowRoot!.querySelector('.alert');
    expect(div).not.toBeNull();
    expect(div!.getAttribute('role')).toBe('alert');
  });

  it('should render slot content', async () => {
    const slotContent = '<div>My Alert</div>';
    element.innerHTML = slotContent;
    await element.updateComplete;
    // Vitest does not have a direct equivalent of `@open-wc/testing`'s `lightDom`,
    // so we inspect the element's innerHTML.
    expect(element.innerHTML).toContain('My Alert');
  });

  describe('Alert Types', () => {
    const alertTypes: AlertType[] = ['warning', 'info', 'success', 'error', 'primary', 'default'];
    alertTypes.forEach(type => {
      it(`should apply the correct class for type="${type}"`, async () => {
        element.type = type;
        await element.updateComplete;
        const div = element.shadowRoot!.querySelector('.alert');
        expect(div).not.toBeNull();
        expect(div!.classList.contains(`alert-${type}`)).toBe(true);
      });
    });
  });

  describe('Visual Modifiers', () => {
    it('should apply bordered class when bordered is true', async () => {
      element.bordered = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.classList.contains('alert-bordered')).toBe(true);
    });

    it('should apply rounded class when rounded is true', async () => {
      element.rounded = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.classList.contains('alert-rounded')).toBe(true);
    });

    it('should apply border-left class when borderedLeft is true', async () => {
      element.borderedLeft = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.classList.contains('alert-border-left')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have an implicit aria-live of "assertive" due to role="alert"', async () => {
      // While we cannot directly test the screen reader announcement,
      // we verify the presence of the role attribute that triggers it.
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.getAttribute('role')).toBe('alert');
    });
  });

  describe('Dismissible Functionality', () => {
    it('should not show close button when dismissible is false', async () => {
      element.dismissible = false;
      await element.updateComplete;
      const closeButton = element.shadowRoot!.querySelector('ag-close-button');
      expect(closeButton).toBeNull();
    });

    it('should show close button when dismissible is true', async () => {
      element.dismissible = true;
      await element.updateComplete;
      const closeButton = element.shadowRoot!.querySelector('ag-close-button');
      expect(closeButton).not.toBeNull();
    });

    it('should dispatch alert-dismiss event when close button is clicked', async () => {
      element.type = 'success';
      element.dismissible = true;
      await element.updateComplete;

      let eventFired = false;
      let eventDetail: any = null;

      element.addEventListener('alert-dismiss', (e: Event) => {
        eventFired = true;
        eventDetail = (e as CustomEvent).detail;
      });

      const closeButton = element.shadowRoot!.querySelector('ag-close-button') as HTMLElement;
      expect(closeButton).not.toBeNull();
      closeButton.click();

      expect(eventFired).toBe(true);
      expect(eventDetail.type).toBe('success');
    });

    it('should invoke onAlertDismiss callback when close button is clicked', async () => {
      const onDismissCallback = vi.fn();
      element.type = 'warning';
      element.dismissible = true;
      element.onAlertDismiss = onDismissCallback;
      await element.updateComplete;

      const closeButton = element.shadowRoot!.querySelector('ag-close-button') as HTMLElement;
      closeButton.click();

      expect(onDismissCallback).toHaveBeenCalledTimes(1);
      expect(onDismissCallback.mock.calls[0][0].detail.type).toBe('warning');
    });

    it('should support both addEventListener and callback props simultaneously', async () => {
      const onDismissCallback = vi.fn();
      let addEventListenerCalled = false;

      element.type = 'info';
      element.dismissible = true;
      element.onAlertDismiss = onDismissCallback;
      await element.updateComplete;

      element.addEventListener('alert-dismiss', () => {
        addEventListenerCalled = true;
      });

      const closeButton = element.shadowRoot!.querySelector('ag-close-button') as HTMLElement;
      closeButton.click();

      // Both patterns should work
      expect(onDismissCallback).toHaveBeenCalledTimes(1);
      expect(addEventListenerCalled).toBe(true);
    });
  });

  describe('Event Handling Patterns', () => {
    describe('addEventListener Pattern', () => {
      it('should dispatch alert-dismiss event with detail', async () => {
        element.type = 'danger';
        element.dismissible = true;
        await element.updateComplete;

        let eventFired = false;
        let eventDetail: any;

        element.addEventListener('alert-dismiss', (e: Event) => {
          eventFired = true;
          eventDetail = (e as CustomEvent).detail;
        });

        const closeButton = element.shadowRoot!.querySelector('ag-close-button') as HTMLElement;
        closeButton.click();

        expect(eventFired).toBe(true);
        expect(eventDetail.type).toBe('danger');
      });
    });

    describe('Callback Props Pattern', () => {
      it('should invoke onAlertDismiss callback with event detail', async () => {
        const onDismissCallback = vi.fn();
        element.type = 'primary';
        element.dismissible = true;
        element.onAlertDismiss = onDismissCallback;
        await element.updateComplete;

        const closeButton = element.shadowRoot!.querySelector('ag-close-button') as HTMLElement;
        closeButton.click();

        expect(onDismissCallback).toHaveBeenCalledTimes(1);
        expect(onDismissCallback.mock.calls[0][0].detail.type).toBe('primary');
      });
    });

    describe('Event Bubbling and Composition', () => {
      it('should dispatch events with bubbles: true and composed: true', async () => {
        element.dismissible = true;
        await element.updateComplete;

        let dismissEvent: any = null;

        element.addEventListener('alert-dismiss', (e: Event) => {
          dismissEvent = e;
        });

        const closeButton = element.shadowRoot!.querySelector('ag-close-button') as HTMLElement;
        closeButton.click();

        expect(dismissEvent.bubbles).toBe(true);
        expect(dismissEvent.composed).toBe(true);
      });
    });
  });
});
