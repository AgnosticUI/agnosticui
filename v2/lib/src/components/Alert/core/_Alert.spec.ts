/* v2/lib/src/components/Alert/core/_Alert.spec.ts */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgAlert, type AlertVariant } from './Alert';
import styles from './alert-structure.module.css';

if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', AgAlert);
}

describe('AgAlert Component', () => {
  let element: AgAlert;

  beforeEach(() => {
    element = document.createElement('ag-alert') as AgAlert;
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
    expect(element.variant).toBe('default');
    expect(element.bordered).toBe(false);
    expect(element.rounded).toBe(false);
    expect(element.borderedLeft).toBe(false);
  });

  it('should have role="alert"', async () => {
    await element.updateComplete;
    const div = element.shadowRoot!.querySelector(`.${styles.alert}`);
    expect(div).not.toBeNull();
    expect(div!.getAttribute('role')).toBe('alert');
  });

  it('should render slot content', async () => {
    const slotContent = '<div>My Alert</div>';
    element.innerHTML = slotContent;
    await element.updateComplete;
    expect(element.innerHTML).toContain('My Alert');
  });

  describe('Alert Variants', () => {
    const alertVariants: AlertVariant[] = ['warning', 'info', 'success', 'error', 'primary', 'default'];
    alertVariants.forEach(variant => {
      it(`should apply the correct class for variant="${variant}"`, async () => {
        element.variant = variant;
        await element.updateComplete;
        const div = element.shadowRoot!.querySelector(`.${styles.alert}`);
        expect(div).not.toBeNull();
        
        const expectedClass = variant === 'warning' ? styles.alertWarning :
                              variant === 'info' ? styles.alertInfo :
                              variant === 'success' ? styles.alertSuccess :
                              variant === 'primary' ? styles.alertPrimary :
                              (variant === 'danger' || variant === 'error') ? styles.alertDanger : '';
                              
        if (expectedClass) {
          expect(div!.classList.contains(expectedClass)).toBe(true);
        }
      });
    });
  });

  describe('Visual Modifiers', () => {
    it('should apply bordered class when bordered is true', async () => {
      element.bordered = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector(`.${styles.alert}`);
      expect(div).not.toBeNull();
      expect(div!.classList.contains(styles.alertBordered)).toBe(true);
    });

    it('should apply rounded class when rounded is true', async () => {
      element.rounded = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector(`.${styles.alert}`);
      expect(div).not.toBeNull();
      expect(div!.classList.contains(styles.alertRounded)).toBe(true);
    });

    it('should apply border-left class when borderedLeft is true', async () => {
      element.borderedLeft = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector(`.${styles.alert}`);
      expect(div).not.toBeNull();
      expect(div!.classList.contains(styles.alertBorderLeft)).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have an implicit aria-live of "assertive" due to role="alert"', async () => {
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector(`.${styles.alert}`);
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
      element.variant = 'success';
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
      expect(eventDetail.variant).toBe('success');
    });

    it('should invoke onAlertDismiss callback when close button is clicked', async () => {
      const onDismissCallback = vi.fn();
      element.variant = 'warning';
      element.dismissible = true;
      element.onAlertDismiss = onDismissCallback;
      await element.updateComplete;

      const closeButton = element.shadowRoot!.querySelector('ag-close-button') as HTMLElement;
      closeButton.click();

      expect(onDismissCallback).toHaveBeenCalledTimes(1);
      expect(onDismissCallback.mock.calls[0][0].detail.variant).toBe('warning');
    });
  });
});
