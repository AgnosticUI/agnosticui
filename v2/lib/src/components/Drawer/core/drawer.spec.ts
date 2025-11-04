import { beforeEach, afterEach, describe, it, expect, vi } from "vitest";
import { AgnosticDrawer } from './Drawer';
import { AgnosticDialog } from "../../Dialog/core/Dialog";

describe('AgnosticDrawer', () => {
  let element: AgnosticDrawer;

  beforeEach(() => {
    element = document.createElement('ag-drawer') as AgnosticDrawer;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('Basic Rendering', () => {
    it('should render with basic properties', async () => {
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-drawer');
    });

    it('should wrap ag-dialog', async () => {
      await element.updateComplete;
      expect(element).toBeDefined();
      const shadow = element.shadowRoot;
      const dialog = shadow?.firstElementChild;
      expect(dialog).toBeDefined();
      expect(dialog?.tagName.toLowerCase()).toBe('ag-dialog');
    });
  });
  describe('drawerPosition', async () => {

    it('should pass start and apply', async () => {
      element.position = 'start';
      element.open = true;
      await element.updateComplete;
      const dialog = element.shadowRoot?.querySelector('ag-dialog') as AgnosticDialog;
      expect(dialog.drawerPosition).toBe('start');
      expect(dialog.getAttribute('drawer-position')).toBe('start');
      expect(dialog.open).toBeTruthy();
    });

    it('should pass end and apply', async () => {
      element.position = 'end';
      element.open = true;
      await element.updateComplete;
      const dialog = element.shadowRoot?.querySelector('ag-dialog') as AgnosticDialog;
      expect(dialog.drawerPosition).toBe('end');
      expect(dialog.getAttribute('drawer-position')).toBe('end');
    });

    it('should pass top and apply', async () => {
      element.position = 'top';
      element.open = true;
      await element.updateComplete;
      const dialog = element.shadowRoot?.querySelector('ag-dialog') as AgnosticDialog;
      expect(dialog.drawerPosition).toBe('top');
      expect(dialog.getAttribute('drawer-position')).toBe('top');
    });

    it('should pass bottom and apply', async () => {
      element.position = 'bottom';
      element.open = true;
      await element.updateComplete;
      const dialog = element.shadowRoot?.querySelector('ag-dialog') as AgnosticDialog;
      expect(dialog.drawerPosition).toBe('bottom');
      expect(dialog.getAttribute('drawer-position')).toBe('bottom');
    });
  });

  describe('Event Dispatching', () => {
    it('should dispatch drawer-open event when dialog opens', async () => {
      const openSpy = vi.fn();
      element.addEventListener('drawer-open', openSpy);

      element.open = true;
      await element.updateComplete;

      // Wait for Dialog to settle and dispatch event
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(openSpy).toHaveBeenCalledTimes(1);
    });

    it('should dispatch drawer-close event when dialog closes', async () => {
      const closeSpy = vi.fn();
      element.addEventListener('drawer-close', closeSpy);

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      element.open = false;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(closeSpy).toHaveBeenCalled();
    });

    it('should dispatch drawer-cancel event when dialog is cancelled', async () => {
      const cancelSpy = vi.fn();
      element.addEventListener('drawer-cancel', cancelSpy);

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      // Simulate Escape key press
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(cancelSpy).toHaveBeenCalled();
    });
  });

  describe('Event Callback Props (Dual-Dispatch Pattern)', () => {
    it('should invoke onDrawerOpen callback when opened', async () => {
      const openCallback = vi.fn();
      element.onDrawerOpen = openCallback;

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(openCallback).toHaveBeenCalledTimes(1);
      expect(openCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'drawer-open',
          bubbles: true,
          composed: true,
        })
      );
    });

    it('should invoke onDrawerClose callback when closed', async () => {
      const closeCallback = vi.fn();
      element.onDrawerClose = closeCallback;

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      element.open = false;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(closeCallback).toHaveBeenCalled();
      expect(closeCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'drawer-close',
          bubbles: true,
          composed: true,
        })
      );
    });

    it('should invoke onDrawerCancel callback on Escape key', async () => {
      const cancelCallback = vi.fn();
      element.onDrawerCancel = cancelCallback;

      element.open = true;
      element.noCloseOnEscape = false;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(cancelCallback).toHaveBeenCalled();
      expect(cancelCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'drawer-cancel',
          bubbles: true,
          composed: true,
        })
      );
    });

    it('should support both addEventListener and callback prop patterns simultaneously', async () => {
      const listenerSpy = vi.fn();
      const callbackSpy = vi.fn();

      element.addEventListener('drawer-open', listenerSpy);
      element.onDrawerOpen = callbackSpy;

      element.open = true;
      await element.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));

      // Both should be called
      expect(listenerSpy).toHaveBeenCalledTimes(1);
      expect(callbackSpy).toHaveBeenCalledTimes(1);
    });
  });
});
