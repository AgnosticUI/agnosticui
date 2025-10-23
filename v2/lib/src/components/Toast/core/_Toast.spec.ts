import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Toast } from './_Toast';

describe('Toast', () => {
  let element: Toast;

  beforeEach(() => {
    element = new Toast();
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('Basic Rendering', () => {
    it('renders with default props', async () => {
      await element.updateComplete;

      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-toast');
      expect(element.open).toBe(false);
      expect(element.type).toBe('default');
      expect(element.position).toBe('top-end');
      expect(element.duration).toBe(5000);
      expect(element.autoDismiss).toBe(true);
      expect(element.showCloseButton).toBe(true);
      expect(element.pauseOnHover).toBe(true);
      expect(element.rounded).toBe(true);
      expect(element.bordered).toBe(false);
      expect(element.borderedLeft).toBe(false);
    });

    it('renders toast container', async () => {
      await element.updateComplete;

      const container = element.shadowRoot?.querySelector('.toast-container');
      expect(container).toBeTruthy();
    });

    it('renders alert component', async () => {
      await element.updateComplete;

      const alert = element.shadowRoot?.querySelector('ag-alert');
      expect(alert).toBeTruthy();
    });

    it('is hidden by default', async () => {
      await element.updateComplete;

      expect(element.open).toBe(false);
      expect(element.hasAttribute('open')).toBe(false);
    });
  });

  describe('Visibility Control', () => {
    it('reflects open attribute', async () => {
      element.open = true;
      await element.updateComplete;

      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('open')).toBe('');
    });

    it('shows toast when open is true', async () => {
      element.open = true;
      await element.updateComplete;

      expect(element.hasAttribute('open')).toBe(true);
    });
  });

  describe('Type Variants', () => {
    const types: Array<typeof element.type> = ['default', 'info', 'success', 'warning', 'error', 'danger', 'primary'];

    types.forEach(type => {
      it(`passes ${type} to alert component`, async () => {
        element.type = type;
        await element.updateComplete;

        const alert = element.shadowRoot?.querySelector('ag-alert');
        expect(alert).toBeTruthy();
        // Check the property is set on the alert component
        expect((alert as any).type).toBe(type);
      });
    });
  });

  describe('Position Variants', () => {
    const positions: Array<typeof element.position> = [
      'top', 'top-start', 'top-end',
      'bottom', 'bottom-start', 'bottom-end',
      'start', 'end'
    ];

    positions.forEach(position => {
      it(`reflects ${position} attribute`, async () => {
        element.position = position;
        await element.updateComplete;

        expect(element.getAttribute('position')).toBe(position);
      });
    });
  });

  describe('Visual Modifiers', () => {
    it('passes rounded prop to alert component', async () => {
      element.rounded = true;
      await element.updateComplete;

      const alert = element.shadowRoot?.querySelector('ag-alert');
      expect((alert as any).rounded).toBe(true);
    });

    it('passes bordered prop to alert component', async () => {
      element.bordered = true;
      await element.updateComplete;

      const alert = element.shadowRoot?.querySelector('ag-alert');
      expect((alert as any).bordered).toBe(true);
    });

    it('passes borderedLeft prop to alert component', async () => {
      element.borderedLeft = true;
      await element.updateComplete;

      const alert = element.shadowRoot?.querySelector('ag-alert');
      expect((alert as any).borderedLeft).toBe(true);
    });
  });

  describe('Close Button', () => {
    it('renders close button when showCloseButton is true', async () => {
      element.showCloseButton = true;
      await element.updateComplete;

      const closeButton = element.shadowRoot?.querySelector('ag-close-button');
      expect(closeButton).toBeTruthy();
    });

    it('does not render close button when showCloseButton is false', async () => {
      element.showCloseButton = false;
      await element.updateComplete;

      const closeButton = element.shadowRoot?.querySelector('ag-close-button');
      expect(closeButton).toBeNull();
    });

    it('closes toast when close button is clicked', async () => {
      element.open = true;
      element.showCloseButton = true;
      await element.updateComplete;

      const closeButtonComponent = element.shadowRoot?.querySelector('ag-close-button');
      const button = closeButtonComponent?.shadowRoot?.querySelector('button') as HTMLButtonElement;

      button.click();
      await element.updateComplete;

      expect(element.open).toBe(false);
    });
  });

  describe('Events', () => {
    it('dispatches toast-open event when opened', async () => {
      const openSpy = vi.fn();
      element.addEventListener('toast-open', openSpy);

      element.open = true;
      await element.updateComplete;

      expect(openSpy).toHaveBeenCalledOnce();
    });

    it('dispatches toast-close event when closed', async () => {
      element.open = true;
      await element.updateComplete;

      const closeSpy = vi.fn();
      element.addEventListener('toast-close', closeSpy);

      element.open = false;
      await element.updateComplete;

      expect(closeSpy).toHaveBeenCalledOnce();
    });

    it('dispatches toast-dismiss event on auto-dismiss', async () => {
      const dismissSpy = vi.fn();
      element.addEventListener('toast-dismiss', dismissSpy);

      element.duration = 100;
      element.autoDismiss = true;
      element.open = true;
      await element.updateComplete;

      await new Promise(resolve => setTimeout(resolve, 150));

      expect(dismissSpy).toHaveBeenCalledOnce();
      expect(element.open).toBe(false);
    });
  });

  describe('Auto-dismiss Behavior', () => {
    it('auto-dismisses after configured duration', async () => {
      element.duration = 100;
      element.autoDismiss = true;
      element.open = true;
      await element.updateComplete;

      expect(element.open).toBe(true);

      await new Promise(resolve => setTimeout(resolve, 150));

      expect(element.open).toBe(false);
    });

    it('does not auto-dismiss when autoDismiss is false', async () => {
      element.duration = 100;
      element.autoDismiss = false;
      element.open = true;
      await element.updateComplete;

      await new Promise(resolve => setTimeout(resolve, 150));

      expect(element.open).toBe(true);
    });

    it('does not auto-dismiss when duration is 0', async () => {
      element.duration = 0;
      element.autoDismiss = true;
      element.open = true;
      await element.updateComplete;

      await new Promise(resolve => setTimeout(resolve, 100));

      expect(element.open).toBe(true);
    });

    it('clears timer on manual close', async () => {
      element.duration = 1000;
      element.autoDismiss = true;
      element.open = true;
      await element.updateComplete;

      // Manually close before auto-dismiss
      element.open = false;
      await element.updateComplete;

      expect(element.open).toBe(false);
    });
  });

  describe('Pause on Hover', () => {
    it('pauses timer when hovered and pauseOnHover is true', async () => {
      element.duration = 200;
      element.autoDismiss = true;
      element.pauseOnHover = true;
      element.open = true;
      await element.updateComplete;

      const container = element.shadowRoot?.querySelector('.toast-container') as HTMLElement;

      // Simulate hover after 50ms
      await new Promise(resolve => setTimeout(resolve, 50));
      container.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

      // Wait longer than original duration while hovered
      await new Promise(resolve => setTimeout(resolve, 200));

      // Should still be open because timer was paused
      expect(element.open).toBe(true);

      // Unhover
      container.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));

      // Now it should close after remaining time
      await new Promise(resolve => setTimeout(resolve, 200));
      expect(element.open).toBe(false);
    });

    it('does not pause timer when pauseOnHover is false', async () => {
      element.duration = 100;
      element.autoDismiss = true;
      element.pauseOnHover = false;
      element.open = true;
      await element.updateComplete;

      const container = element.shadowRoot?.querySelector('.toast-container') as HTMLElement;

      // Hover immediately
      container.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

      // Should still auto-dismiss even when hovered
      await new Promise(resolve => setTimeout(resolve, 150));
      expect(element.open).toBe(false);
    });
  });

  describe('Keyboard Support', () => {
    it('closes on Escape key when showCloseButton is true', async () => {
      element.open = true;
      element.showCloseButton = true;
      await element.updateComplete;

      const container = element.shadowRoot?.querySelector('.toast-container') as HTMLElement;
      const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      container.dispatchEvent(event);
      await element.updateComplete;

      expect(element.open).toBe(false);
    });

    it('does not close on Escape when showCloseButton is false', async () => {
      element.open = true;
      element.showCloseButton = false;
      await element.updateComplete;

      const container = element.shadowRoot?.querySelector('.toast-container') as HTMLElement;
      const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      container.dispatchEvent(event);
      await element.updateComplete;

      expect(element.open).toBe(true);
    });
  });

  describe('ARIA Attributes', () => {
    it('uses role="status" for non-urgent types', async () => {
      const nonUrgentTypes: Array<typeof element.type> = ['default', 'info', 'primary', 'success'];

      for (const type of nonUrgentTypes) {
        element.type = type;
        await element.updateComplete;

        const container = element.shadowRoot?.querySelector('.toast-container');
        expect(container?.getAttribute('role')).toBe('status');
        expect(container?.getAttribute('aria-live')).toBe('polite');
      }
    });

    it('uses role="alert" for urgent types', async () => {
      const urgentTypes: Array<typeof element.type> = ['error', 'danger', 'warning'];

      for (const type of urgentTypes) {
        element.type = type;
        await element.updateComplete;

        const container = element.shadowRoot?.querySelector('.toast-container');
        expect(container?.getAttribute('role')).toBe('alert');
        expect(container?.getAttribute('aria-live')).toBe('assertive');
      }
    });

    it('has aria-atomic="true"', async () => {
      await element.updateComplete;

      const container = element.shadowRoot?.querySelector('.toast-container');
      expect(container?.getAttribute('aria-atomic')).toBe('true');
    });
  });

  describe('CSS Shadow Parts', () => {
    it('exposes ag-toast part', async () => {
      await element.updateComplete;

      const container = element.shadowRoot?.querySelector('[part="ag-toast"]');
      expect(container).toBeTruthy();
    });

    it('exposes ag-toast-content part', async () => {
      await element.updateComplete;

      const content = element.shadowRoot?.querySelector('[part="ag-toast-content"]');
      expect(content).toBeTruthy();
    });
  });

  describe('Design Tokens', () => {
    it('uses design tokens for positioning and animation', () => {
      const styleContent = Toast.styles.toString();

      // Spacing tokens for positioning
      expect(styleContent).toContain('var(--ag-space-');

      // Motion tokens for animation
      expect(styleContent).toContain('var(--ag-motion-fast)');

      // Z-index token
      expect(styleContent).toContain('var(--ag-z-index-toast');
    });

    it('composes Alert component for styling', async () => {
      await element.updateComplete;

      const alert = element.shadowRoot?.querySelector('ag-alert');
      expect(alert).toBeTruthy();
    });
  });

  describe('Lifecycle', () => {
    it('clears timer on disconnectedCallback', async () => {
      element.duration = 1000;
      element.autoDismiss = true;
      element.open = true;
      await element.updateComplete;

      document.body.removeChild(element);

      // Timer should be cleared, no error should occur
      await new Promise(resolve => setTimeout(resolve, 1100));

      // Re-add for cleanup
      document.body.appendChild(element);
    });
  });

  describe('Reduced Motion', () => {
    it('respects prefers-reduced-motion', () => {
      const styleContent = Toast.styles.toString();

      expect(styleContent).toContain('@media (prefers-reduced-motion: reduce)');
      expect(styleContent).toContain('transform: none !important');
    });
  });
});
