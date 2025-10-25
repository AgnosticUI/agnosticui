import { beforeEach, afterEach, describe, it, expect } from "vitest";
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
});
