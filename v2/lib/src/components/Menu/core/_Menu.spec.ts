import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import { MenuButton, Menu, MenuItem, MenuSeparator } from './Menu';

// All components are automatically registered via @customElement decorators

describe('Menu Components', () => {
  describe('MenuButton', () => {
    let menuButton: MenuButton;

    beforeEach(() => {
      menuButton = document.createElement('ag-menu-button') as MenuButton;
      menuButton.textContent = 'Menu Button';
      document.body.appendChild(menuButton);
    });

    afterEach(() => {
      if (menuButton && menuButton.parentNode) {
        menuButton.parentNode.removeChild(menuButton);
      }
    });

    it('should render with default properties', async () => {
      expect(menuButton).toBeDefined();
      expect(menuButton.tagName.toLowerCase()).toBe('ag-menu-button');
      expect(menuButton.disabled).toBe(false);
      expect(menuButton.ariaLabel).toBe('');

      await menuButton.updateComplete;
      const button = menuButton.shadowRoot?.querySelector('button');
      expect(button).toBeDefined();
      expect(button?.getAttribute('aria-haspopup')).toBe('menu');
      expect(button?.getAttribute('aria-expanded')).toBe('false');
    });

    it('should handle disabled state', async () => {
      menuButton.disabled = true;
      await menuButton.updateComplete;

      const button = menuButton.shadowRoot?.querySelector('button');
      expect(button?.hasAttribute('disabled')).toBe(true);
    });

    it('should handle aria-label', async () => {
      menuButton.ariaLabel = 'Actions menu';
      await menuButton.updateComplete;

      const button = menuButton.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-label')).toBe('Actions menu');
    });

    it('should toggle menu open state', async () => {
      expect(menuButton._menuOpen).toBe(false);

      menuButton._openMenu();
      expect(menuButton._menuOpen).toBe(true);

      await menuButton.updateComplete;
      const button = menuButton.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-expanded')).toBe('true');

      menuButton._closeMenu();
      expect(menuButton._menuOpen).toBe(false);

      await menuButton.updateComplete;
      expect(button?.getAttribute('aria-expanded')).toBe('false');
    });

    it('should handle button clicks', async () => {
      // Add a menu child to the button for proper testing
      const menu = document.createElement('ag-menu') as Menu;
      menu.setAttribute('slot', 'menu');
      menuButton.appendChild(menu);

      await menuButton.updateComplete;
      await menu.updateComplete;

      expect(menuButton._menuOpen).toBe(false);

      // Call the handler directly as fireEvent may not work with Lit event handling
      menuButton['_handleClick'](new Event('click'));
      expect(menuButton._menuOpen).toBe(true);

      menuButton['_handleClick'](new Event('click'));
      expect(menuButton._menuOpen).toBe(false);
    });

    it('should handle keyboard events', async () => {
      await menuButton.updateComplete;
      const button = menuButton.shadowRoot?.querySelector('button') as HTMLButtonElement;

      // Enter key should open menu
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(menuButton._menuOpen).toBe(true);

      menuButton._closeMenu();

      // Space key should open menu
      fireEvent.keyDown(button, { key: ' ' });
      expect(menuButton._menuOpen).toBe(true);
    });
  });

  describe('Menu', () => {
    let menu: Menu;

    beforeEach(() => {
      menu = document.createElement('ag-menu') as Menu;
      document.body.appendChild(menu);
    });

    afterEach(() => {
      if (menu && menu.parentNode) {
        menu.parentNode.removeChild(menu);
      }
    });

    it('should render with default properties', async () => {
      expect(menu).toBeDefined();
      expect(menu.tagName.toLowerCase()).toBe('ag-menu');
      expect(menu.open).toBe(false);
      expect(menu.placement).toBe('bottom-start');

      await menu.updateComplete;
      expect(menu.getAttribute('role')).toBe('menu');
      expect(menu.getAttribute('aria-orientation')).toBe('vertical');
      expect(menu.hasAttribute('hidden')).toBe(true);
    });

    it('should show/hide based on open property', async () => {
      expect(menu.hasAttribute('hidden')).toBe(true);

      menu.open = true;
      await menu.updateComplete;
      expect(menu.hasAttribute('hidden')).toBe(false);

      menu.open = false;
      await menu.updateComplete;
      expect(menu.hasAttribute('hidden')).toBe(true);
    });

    it('should handle aria attributes', async () => {
      menu.ariaLabel = 'Menu list';
      menu.ariaLabelledBy = 'button-id';
      await menu.updateComplete;

      expect(menu.ariaLabel).toBe('Menu list');
      expect(menu.ariaLabelledBy).toBe('button-id');
    });

    it('should manage menu items', () => {
      const item1 = document.createElement('ag-menu-item') as MenuItem;
      const item2 = document.createElement('ag-menu-item') as MenuItem;

      menu.appendChild(item1);
      menu.appendChild(item2);

      menu._updateMenuItems();
      expect(menu._menuItems.length).toBe(2);
      expect(menu._menuItems[0]).toBe(item1);
      expect(menu._menuItems[1]).toBe(item2);
    });

    it('should handle focus management', () => {
      const item1 = document.createElement('ag-menu-item') as MenuItem;
      const item2 = document.createElement('ag-menu-item') as MenuItem;
      const item3 = document.createElement('ag-menu-item') as MenuItem;

      menu.appendChild(item1);
      menu.appendChild(item2);
      menu.appendChild(item3);
      menu._updateMenuItems();

      // Test focus navigation
      expect(menu._focusedIndex).toBe(0);

      // Focus next item
      menu['_focusNextItem']();
      expect(menu._focusedIndex).toBe(1);

      menu['_focusNextItem']();
      expect(menu._focusedIndex).toBe(2);

      // Should wrap to first
      menu['_focusNextItem']();
      expect(menu._focusedIndex).toBe(0);

      // Focus previous item
      menu['_focusPreviousItem']();
      expect(menu._focusedIndex).toBe(2);
    });
  });

  describe('MenuItem', () => {
    let menuItem: MenuItem;

    beforeEach(() => {
      menuItem = document.createElement('ag-menu-item') as MenuItem;
      menuItem.textContent = 'Edit';
      document.body.appendChild(menuItem);
    });

    afterEach(() => {
      if (menuItem && menuItem.parentNode) {
        menuItem.parentNode.removeChild(menuItem);
      }
    });

    it('should render with default properties', async () => {
      expect(menuItem).toBeDefined();
      expect(menuItem.tagName.toLowerCase()).toBe('ag-menu-item');
      expect(menuItem.value).toBe('');
      expect(menuItem.disabled).toBe(false);
      expect(menuItem.href).toBe('');

      await menuItem.updateComplete;
      expect(menuItem.getAttribute('role')).toBe('menuitem');
      expect(menuItem.getAttribute('tabindex')).toBe('-1');
    });

    it('should render as button by default', async () => {
      await menuItem.updateComplete;
      const button = menuItem.shadowRoot?.querySelector('button');
      expect(button).toBeDefined();
      // MenuItem content comes from slot, check that element has text
      expect(menuItem.textContent?.trim()).toBe('Edit');
    });

    it('should render as link when href is provided', async () => {
      menuItem.href = '/edit';
      menuItem.target = '_blank';
      await menuItem.updateComplete;

      const link = menuItem.shadowRoot?.querySelector('a');
      expect(link).toBeDefined();
      expect(link?.getAttribute('href')).toBe('/edit');
      expect(link?.getAttribute('target')).toBe('_blank');
    });

    it('should handle disabled state', async () => {
      menuItem.disabled = true;
      await menuItem.updateComplete;

      const button = menuItem.shadowRoot?.querySelector('button');
      expect(button?.hasAttribute('disabled')).toBe(true);
    });

    it('should emit menu-select event on click', async () => {
      let selectedValue = '';
      menuItem.value = 'edit';
      menuItem.addEventListener('menu-select', (e: Event) => {
        const customEvent = e as CustomEvent;
        selectedValue = customEvent.detail.value;
      });

      await menuItem.updateComplete;
      const button = menuItem.shadowRoot?.querySelector('button') as HTMLButtonElement;
      button.click();

      expect(selectedValue).toBe('edit');
    });

    it('should not emit event when disabled', async () => {
      let eventFired = false;
      menuItem.disabled = true;
      menuItem.addEventListener('menu-select', () => { eventFired = true; });

      await menuItem.updateComplete;
      const button = menuItem.shadowRoot?.querySelector('button') as HTMLButtonElement;
      button.click();

      expect(eventFired).toBe(false);
    });
  });

  describe('MenuSeparator', () => {
    let separator: MenuSeparator;

    beforeEach(() => {
      separator = document.createElement('ag-menu-separator') as MenuSeparator;
      document.body.appendChild(separator);
    });

    afterEach(() => {
      if (separator && separator.parentNode) {
        separator.parentNode.removeChild(separator);
      }
    });

    it('should render with correct role', async () => {
      expect(separator).toBeDefined();
      expect(separator.tagName.toLowerCase()).toBe('ag-menu-separator');

      await separator.updateComplete;
      expect(separator.getAttribute('role')).toBe('separator');
    });
  });

  describe('Integration', () => {
    let menuButton: MenuButton;
    let menu: Menu;
    let menuItem1: MenuItem;
    let menuItem2: MenuItem;

    beforeEach(async () => {
      menuButton = document.createElement('ag-menu-button') as MenuButton;
      menu = document.createElement('ag-menu') as Menu;
      menuItem1 = document.createElement('ag-menu-item') as MenuItem;
      menuItem2 = document.createElement('ag-menu-item') as MenuItem;

      menuButton.textContent = 'Actions';
      menuItem1.textContent = 'Edit';
      menuItem1.value = 'edit';
      menuItem2.textContent = 'Delete';
      menuItem2.value = 'delete';

      menu.appendChild(menuItem1);
      menu.appendChild(menuItem2);
      menu.setAttribute('slot', 'menu');
      menuButton.appendChild(menu);

      document.body.appendChild(menuButton);

      await menuButton.updateComplete;
      await menu.updateComplete;
      await menuItem1.updateComplete;
      await menuItem2.updateComplete;
    });

    afterEach(() => {
      if (menuButton && menuButton.parentNode) {
        menuButton.parentNode.removeChild(menuButton);
      }
    });

    it('should connect menu button and menu', () => {
      expect(menuButton.querySelector('ag-menu')).toBe(menu);
      expect(menu.children.length).toBe(2);
    });

    it('should open menu and manage items', () => {
      expect(menuButton._menuOpen).toBe(false);
      expect(menu.open).toBe(false);

      menuButton._openMenu();
      expect(menuButton._menuOpen).toBe(true);
      expect(menu.open).toBe(true);

      menu._updateMenuItems();
      expect(menu._menuItems.length).toBe(2);
    });

    it('should handle menu item selection', async () => {
      let selectedValue = '';
      menuButton.addEventListener('menu-select', (e: Event) => {
        const customEvent = e as CustomEvent;
        selectedValue = customEvent.detail.value;
      });

      const button = menuItem1.shadowRoot?.querySelector('button') as HTMLButtonElement;
      button.click();

      expect(selectedValue).toBe('edit');
    });
  });
});