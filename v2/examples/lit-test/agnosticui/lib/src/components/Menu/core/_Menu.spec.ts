import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import { AgMenuButton, AgMenu, AgMenuItem, AgMenuSeparator } from './Menu';

// All components are automatically registered via @customElement decorators

describe('AgMenu Components', () => {
  describe('AgMenuButton', () => {
    let menuButton: AgMenuButton;

    beforeEach(() => {
      menuButton = document.createElement('ag-menu-button') as AgMenuButton;
      menuButton.textContent = 'AgMenu Button';
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
      const agButton = menuButton.shadowRoot?.querySelector('ag-button');
      expect(agButton).toBeDefined();
      expect(agButton?.getAttribute('aria-haspopup')).toBe('menu');
      expect(agButton?.getAttribute('aria-expanded')).toBe('false');
    });

    it('should handle disabled state', async () => {
      menuButton.disabled = true;
      await menuButton.updateComplete;

      const agButton = menuButton.shadowRoot?.querySelector('ag-button');
      expect(agButton?.hasAttribute('disabled')).toBe(true);
    });

    it('should handle aria-label', async () => {
      menuButton.ariaLabel = 'Actions menu';
      await menuButton.updateComplete;

      const agButton = menuButton.shadowRoot?.querySelector('ag-button');
      expect(agButton?.getAttribute('aria-label')).toBe('Actions menu');
    });

    it('should toggle menu open state', async () => {
      expect(menuButton._menuOpen).toBe(false);

      menuButton._openMenu();
      expect(menuButton._menuOpen).toBe(true);

      await menuButton.updateComplete;
      const agButton = menuButton.shadowRoot?.querySelector('ag-button');
      expect(agButton?.getAttribute('aria-expanded')).toBe('true');

      menuButton._closeMenu();
      expect(menuButton._menuOpen).toBe(false);

      await menuButton.updateComplete;
      expect(agButton?.getAttribute('aria-expanded')).toBe('false');
    });

    it('should handle button clicks', async () => {
      // Add a menu child to the button for proper testing
      const menu = document.createElement('ag-menu') as AgMenu;
      menu.setAttribute('slot', 'menu');
      menuButton.appendChild(menu);

      await menuButton.updateComplete;
      await menu.updateComplete;

      expect(menuButton._menuOpen).toBe(false);

      // Call the handler directly as fireEvent may not work with Lit event handling
      menuButton['_handleClick'](new MouseEvent('click'));
      expect(menuButton._menuOpen).toBe(true);

      menuButton['_handleClick'](new MouseEvent('click'));
      expect(menuButton._menuOpen).toBe(false);
    });

    it('should handle keyboard events', async () => {
      await menuButton.updateComplete;
      const agButton = menuButton.shadowRoot?.querySelector('ag-button');

      // Enter key should open menu
      fireEvent.keyDown(agButton!, { key: 'Enter' });
      expect(menuButton._menuOpen).toBe(true);

      menuButton._closeMenu();

      // Space key should open menu
      fireEvent.keyDown(agButton!, { key: ' ' });
      expect(menuButton._menuOpen).toBe(true);
    });
  });

  describe('AgMenu', () => {
    let menu: AgMenu;

    beforeEach(() => {
      menu = document.createElement('ag-menu') as AgMenu;
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
      menu.ariaLabel = 'AgMenu list';
      menu.ariaLabelledBy = 'button-id';
      await menu.updateComplete;

      expect(menu.ariaLabel).toBe('AgMenu list');
      expect(menu.ariaLabelledBy).toBe('button-id');
    });

    it('should manage menu items', () => {
      const item1 = document.createElement('ag-menu-item') as AgMenuItem;
      const item2 = document.createElement('ag-menu-item') as AgMenuItem;

      menu.appendChild(item1);
      menu.appendChild(item2);

      menu._updateMenuItems();
      expect(menu._menuItems.length).toBe(2);
      expect(menu._menuItems[0]).toBe(item1);
      expect(menu._menuItems[1]).toBe(item2);
    });

    it('should handle focus management', () => {
      const item1 = document.createElement('ag-menu-item') as AgMenuItem;
      const item2 = document.createElement('ag-menu-item') as AgMenuItem;
      const item3 = document.createElement('ag-menu-item') as AgMenuItem;

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

  describe('AgMenuItem', () => {
    let menuItem: AgMenuItem;

    beforeEach(() => {
      menuItem = document.createElement('ag-menu-item') as AgMenuItem;
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
      // AgMenuItem content comes from slot, check that element has text
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

  describe('AgMenuSeparator', () => {
    let separator: AgMenuSeparator;

    beforeEach(() => {
      separator = document.createElement('ag-menu-separator') as AgMenuSeparator;
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

  describe('Event Handling', () => {
    describe('AgMenuButton Events', () => {
      let menuButton: AgMenuButton;

      beforeEach(() => {
        menuButton = document.createElement('ag-menu-button') as AgMenuButton;
        document.body.appendChild(menuButton);
      });

      afterEach(() => {
        if (menuButton && menuButton.parentNode) {
          menuButton.parentNode.removeChild(menuButton);
        }
      });

      it('should support addEventListener for menu-open event', async () => {
        const menu = document.createElement('ag-menu') as AgMenu;
        menu.setAttribute('slot', 'menu');
        menuButton.appendChild(menu);

        let eventFired = false;
        let eventDetail: any;
        menuButton.addEventListener('menu-open', (e: Event) => {
          eventFired = true;
          eventDetail = (e as CustomEvent).detail;
        });

        await menuButton.updateComplete;
        menuButton._openMenu();

        expect(eventFired).toBe(true);
        expect(eventDetail.open).toBe(true);
      });

      it('should support addEventListener for menu-close event', async () => {
        const menu = document.createElement('ag-menu') as AgMenu;
        menu.setAttribute('slot', 'menu');
        menuButton.appendChild(menu);

        let eventFired = false;
        let eventDetail: any;
        menuButton.addEventListener('menu-close', (e: Event) => {
          eventFired = true;
          eventDetail = (e as CustomEvent).detail;
        });

        await menuButton.updateComplete;
        menuButton._openMenu();
        menuButton._closeMenu();

        expect(eventFired).toBe(true);
        expect(eventDetail.open).toBe(false);
      });

      it('should support callback prop for onMenuOpen', async () => {
        const menu = document.createElement('ag-menu') as AgMenu;
        menu.setAttribute('slot', 'menu');
        menuButton.appendChild(menu);

        let callbackFired = false;
        let callbackDetail: any;
        menuButton.onMenuOpen = (e) => {
          callbackFired = true;
          callbackDetail = e.detail;
        };

        await menuButton.updateComplete;
        menuButton._openMenu();

        expect(callbackFired).toBe(true);
        expect(callbackDetail.open).toBe(true);
      });

      it('should support callback prop for onMenuClose', async () => {
        const menu = document.createElement('ag-menu') as AgMenu;
        menu.setAttribute('slot', 'menu');
        menuButton.appendChild(menu);

        let callbackFired = false;
        let callbackDetail: any;
        menuButton.onMenuClose = (e) => {
          callbackFired = true;
          callbackDetail = e.detail;
        };

        await menuButton.updateComplete;
        menuButton._openMenu();
        menuButton._closeMenu();

        expect(callbackFired).toBe(true);
        expect(callbackDetail.open).toBe(false);
      });

      it('should support callback prop for onClick', async () => {
        let callbackFired = false;
        menuButton.onClick = () => {
          callbackFired = true;
        };

        await menuButton.updateComplete;
        const agButton = menuButton.shadowRoot?.querySelector('ag-button');
        agButton?.click();

        expect(callbackFired).toBe(true);
      });

      it('should support callback props for onFocus and onBlur', async () => {
        let focusFired = false;
        let blurFired = false;

        menuButton.onFocus = () => {
          focusFired = true;
        };
        menuButton.onBlur = () => {
          blurFired = true;
        };

        await menuButton.updateComplete;
        const agButton = menuButton.shadowRoot?.querySelector('ag-button');

        agButton?.dispatchEvent(new FocusEvent('focus'));
        expect(focusFired).toBe(true);

        agButton?.dispatchEvent(new FocusEvent('blur'));
        expect(blurFired).toBe(true);
      });

      it('should re-dispatch focus event from host', async () => {
        let hostFocusFired = false;
        menuButton.addEventListener('focus', () => {
          hostFocusFired = true;
        });

        await menuButton.updateComplete;
        const agButton = menuButton.shadowRoot?.querySelector('ag-button');
        agButton?.dispatchEvent(new FocusEvent('focus'));

        expect(hostFocusFired).toBe(true);
      });

      it('should re-dispatch blur event from host', async () => {
        let hostBlurFired = false;
        menuButton.addEventListener('blur', () => {
          hostBlurFired = true;
        });

        await menuButton.updateComplete;
        const agButton = menuButton.shadowRoot?.querySelector('ag-button');
        agButton?.dispatchEvent(new FocusEvent('blur'));

        expect(hostBlurFired).toBe(true);
      });
    });

    describe('AgMenuItem Events', () => {
      let menuItem: AgMenuItem;

      beforeEach(() => {
        menuItem = document.createElement('ag-menu-item') as AgMenuItem;
        menuItem.value = 'test';
        document.body.appendChild(menuItem);
      });

      afterEach(() => {
        if (menuItem && menuItem.parentNode) {
          menuItem.parentNode.removeChild(menuItem);
        }
      });

      it('should support addEventListener for menu-select event', async () => {
        let eventFired = false;
        let eventDetail: any;
        menuItem.addEventListener('menu-select', (e: Event) => {
          eventFired = true;
          eventDetail = (e as CustomEvent).detail;
        });

        await menuItem.updateComplete;
        const button = menuItem.shadowRoot?.querySelector('button') as HTMLButtonElement;
        button.click();

        expect(eventFired).toBe(true);
        expect(eventDetail.value).toBe('test');
      });

      it('should support callback prop for onMenuSelect', async () => {
        let callbackFired = false;
        let callbackDetail: any;
        menuItem.onMenuSelect = (e) => {
          callbackFired = true;
          callbackDetail = e.detail;
        };

        await menuItem.updateComplete;
        const button = menuItem.shadowRoot?.querySelector('button') as HTMLButtonElement;
        button.click();

        expect(callbackFired).toBe(true);
        expect(callbackDetail.value).toBe('test');
      });

      it('should support callback prop for onClick', async () => {
        let callbackFired = false;
        menuItem.onClick = () => {
          callbackFired = true;
        };

        await menuItem.updateComplete;
        const button = menuItem.shadowRoot?.querySelector('button') as HTMLButtonElement;
        button.click();

        expect(callbackFired).toBe(true);
      });
    });
  });

  describe('Integration', () => {
    let menuButton: AgMenuButton;
    let menu: AgMenu;
    let menuItem1: AgMenuItem;
    let menuItem2: AgMenuItem;

    beforeEach(async () => {
      menuButton = document.createElement('ag-menu-button') as AgMenuButton;
      menu = document.createElement('ag-menu') as AgMenu;
      menuItem1 = document.createElement('ag-menu-item') as AgMenuItem;
      menuItem2 = document.createElement('ag-menu-item') as AgMenuItem;

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

    it('should position menu with additionalGutter when provided', async () => {
      // Set additionalGutter property
      menuButton.additionalGutter = '20px';
      await menuButton.updateComplete;

      // Open the menu to trigger positioning
      menuButton._openMenu();
      await menuButton.updateComplete;

      // Check that the menu's top style includes the calc with additionalGutter
      const topStyle = menu.style.top;
      expect(topStyle).toContain('calc(');
      expect(topStyle).toContain('20px');
    });

    it('should position menu without additionalGutter when not provided', async () => {
      // Ensure additionalGutter is empty (default)
      menuButton.additionalGutter = '';
      await menuButton.updateComplete;

      // Open the menu to trigger positioning
      menuButton._openMenu();
      await menuButton.updateComplete;

      // Check that the menu's top style is just the button height in pixels
      const topStyle = menu.style.top;
      expect(topStyle).toMatch(/^\d+px$/);
      expect(topStyle).not.toContain('calc(');
    });

    it('should update data-menu-open attribute when menu state changes', async () => {
      // Initially closed
      expect(menuButton.getAttribute('data-menu-open')).toBe('false');

      // Open menu
      menuButton._openMenu();
      await menuButton.updateComplete;
      expect(menuButton.getAttribute('data-menu-open')).toBe('true');

      // Close menu
      menuButton._closeMenu();
      await menuButton.updateComplete;
      expect(menuButton.getAttribute('data-menu-open')).toBe('false');
    });
  });
});
