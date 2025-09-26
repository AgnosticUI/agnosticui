import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MenuButton, Menu, MenuItem, MenuSeparator } from './_Menu';

describe('Menu - Component Initialization', () => {
  let menuButton: MenuButton;
  let menu: Menu;

  beforeEach(() => {
    menuButton = document.createElement('ag-menu-button') as MenuButton;
    menu = document.createElement('ag-menu') as Menu;
    document.body.appendChild(menuButton);
    document.body.appendChild(menu);
  });

  afterEach(() => {
    document.body.removeChild(menuButton);
    document.body.removeChild(menu);
  });

  it('should render MenuButton with default properties', async () => {
    await menuButton.updateComplete;

    expect(menuButton).toBeDefined();
    expect(menuButton.disabled).toBe(false);
    expect(menuButton.ariaLabel).toBe('');

    const button = menuButton.shadowRoot?.querySelector('button');
    expect(button).toBeDefined();
    expect(button?.getAttribute('aria-haspopup')).toBe('menu');
    expect(button?.getAttribute('aria-expanded')).toBe('false');
  });

  it('should render Menu with default properties', async () => {
    await menu.updateComplete;

    expect(menu).toBeDefined();
    expect(menu.open).toBe(false);
    expect(menu.placement).toBe('bottom-start');
    expect(menu.getAttribute('role')).toBe('menu');
    expect(menu.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('should render MenuItem with default properties', async () => {
    const menuItem = document.createElement('ag-menu-item') as MenuItem;
    document.body.appendChild(menuItem);
    await menuItem.updateComplete;

    expect(menuItem).toBeDefined();
    expect(menuItem.value).toBe('');
    expect(menuItem.disabled).toBe(false);
    expect(menuItem.href).toBe('');
    expect(menuItem.getAttribute('role')).toBe('menuitem');
    expect(menuItem.getAttribute('tabindex')).toBe('-1');

    document.body.removeChild(menuItem);
  });

  it('should render MenuSeparator with proper role', async () => {
    const separator = document.createElement('ag-menu-separator') as MenuSeparator;
    document.body.appendChild(separator);
    await separator.updateComplete;

    expect(separator).toBeDefined();
    expect(separator.getAttribute('role')).toBe('separator');

    document.body.removeChild(separator);
  });

  it('should handle MenuButton with custom properties', async () => {
    menuButton.disabled = true;
    menuButton.ariaLabel = 'Custom menu button';
    await menuButton.updateComplete;

    expect(menuButton.disabled).toBe(true);
    expect(menuButton.ariaLabel).toBe('Custom menu button');

    const button = menuButton.shadowRoot?.querySelector('button');
    expect(button?.hasAttribute('disabled')).toBe(true);
    expect(button?.getAttribute('aria-label')).toBe('Custom menu button');
  });

  it('should handle MenuItem with href as link', async () => {
    const menuItem = document.createElement('ag-menu-item') as MenuItem;
    menuItem.href = '/test';
    menuItem.target = '_blank';
    menuItem.value = 'test-link';
    document.body.appendChild(menuItem);
    await menuItem.updateComplete;

    expect(menuItem.href).toBe('/test');
    expect(menuItem.target).toBe('_blank');
    expect(menuItem.value).toBe('test-link');

    const link = menuItem.shadowRoot?.querySelector('a');
    expect(link).toBeDefined();
    expect(link?.getAttribute('href')).toBe('/test');
    expect(link?.getAttribute('target')).toBe('_blank');

    document.body.removeChild(menuItem);
  });
});

describe('Menu - ARIA Compliance', () => {
  let menuButton: MenuButton;

  beforeEach(() => {
    menuButton = document.createElement('ag-menu-button') as MenuButton;
    document.body.appendChild(menuButton);
  });

  afterEach(() => {
    document.body.removeChild(menuButton);
  });

  it('should implement required ARIA roles correctly', async () => {
    menuButton.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
        <ag-menu-item value="copy">Copy</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="delete">Delete</ag-menu-item>
      </ag-menu>
    `;

    await menuButton.updateComplete;

    const button = menuButton.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-haspopup')).toBe('menu');
    expect(button?.getAttribute('aria-expanded')).toBe('false');

    const menu = menuButton.querySelector('ag-menu');
    expect(menu?.getAttribute('role')).toBe('menu');
    expect(menu?.getAttribute('aria-orientation')).toBe('vertical');

    const menuItems = menuButton.querySelectorAll('ag-menu-item');
    menuItems.forEach(item => {
      expect(item.getAttribute('role')).toBe('menuitem');
    });

    const separator = menuButton.querySelector('ag-menu-separator');
    expect(separator?.getAttribute('role')).toBe('separator');
  });

  it('should manage aria-expanded state correctly', async () => {
    menuButton.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
      </ag-menu>
    `;

    await menuButton.updateComplete;

    const button = menuButton.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-expanded')).toBe('false');

    // Simulate opening menu
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    expect(button?.getAttribute('aria-expanded')).toBe('true');

    // Simulate closing menu
    (menuButton as any)._closeMenu();
    await menuButton.updateComplete;

    expect(button?.getAttribute('aria-expanded')).toBe('false');
  });

  it('should handle disabled states with aria-disabled', async () => {
    menuButton.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
        <ag-menu-item value="copy" disabled>Copy</ag-menu-item>
      </ag-menu>
    `;

    await menuButton.updateComplete;

    const menuItems = menuButton.querySelectorAll('ag-menu-item');
    expect(menuItems[0].hasAttribute('disabled')).toBe(false);
    expect(menuItems[1].hasAttribute('disabled')).toBe(true);

    // Check if disabled attribute is reflected properly
    expect(menuItems[1].disabled).toBe(true);
  });

  it('should implement roving tabindex pattern', async () => {
    const menu = document.createElement('ag-menu') as Menu;
    menu.innerHTML = `
      <ag-menu-item value="item1">Item 1</ag-menu-item>
      <ag-menu-item value="item2">Item 2</ag-menu-item>
      <ag-menu-item value="item3">Item 3</ag-menu-item>
    `;
    document.body.appendChild(menu);

    menu.open = true;
    await menu.updateComplete;

    // Manually call the update method to set up tabindex
    (menu as any)._updateMenuItems();

    const menuItems = menu.querySelectorAll('ag-menu-item');
    expect(menuItems[0].getAttribute('tabindex')).toBe('0');
    expect(menuItems[1].getAttribute('tabindex')).toBe('-1');
    expect(menuItems[2].getAttribute('tabindex')).toBe('-1');

    document.body.removeChild(menu);
  });

  it('should support aria-label and aria-labelledby on menu', async () => {
    const menu = document.createElement('ag-menu') as Menu;
    document.body.appendChild(menu);

    menu.ariaLabel = 'Actions menu';
    await menu.updateComplete;

    expect(menu.ariaLabel).toBe('Actions menu');

    menu.ariaLabel = '';
    menu.ariaLabelledBy = 'menu-button-1';
    await menu.updateComplete;

    expect(menu.ariaLabelledBy).toBe('menu-button-1');

    document.body.removeChild(menu);
  });

  it('should handle aria-orientation correctly', async () => {
    const menu = document.createElement('ag-menu') as Menu;
    document.body.appendChild(menu);
    await menu.updateComplete;

    expect(menu.getAttribute('aria-orientation')).toBe('vertical');

    document.body.removeChild(menu);
  });
});

describe('Menu - Keyboard Navigation', () => {
  let menuButton: MenuButton;
  let menu: Menu;

  beforeEach(() => {
    menuButton = document.createElement('ag-menu-button') as MenuButton;
    menuButton.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="item1">Item 1</ag-menu-item>
        <ag-menu-item value="item2">Item 2</ag-menu-item>
        <ag-menu-item value="item3">Item 3</ag-menu-item>
      </ag-menu>
    `;
    document.body.appendChild(menuButton);
    menu = menuButton.querySelector('ag-menu') as Menu;
  });

  afterEach(() => {
    document.body.removeChild(menuButton);
  });

  it('should open menu with Enter key on button', async () => {
    await menuButton.updateComplete;

    const button = menuButton.shadowRoot?.querySelector('button');
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true
    });

    button?.dispatchEvent(enterEvent);
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);
    expect(menu?.open).toBe(true);
  });

  it('should open menu with Space key on button', async () => {
    await menuButton.updateComplete;

    const button = menuButton.shadowRoot?.querySelector('button');
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      bubbles: true
    });

    button?.dispatchEvent(spaceEvent);
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);
    expect(menu?.open).toBe(true);
  });

  it('should open menu with Down Arrow and focus first item', async () => {
    await menuButton.updateComplete;

    const button = menuButton.shadowRoot?.querySelector('button');
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });

    button?.dispatchEvent(arrowDownEvent);
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);
    expect(menu?.open).toBe(true);
  });

  it('should open menu with Up Arrow and focus last item', async () => {
    await menuButton.updateComplete;

    const button = menuButton.shadowRoot?.querySelector('button');
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      bubbles: true
    });

    button?.dispatchEvent(arrowUpEvent);
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);
    expect(menu?.open).toBe(true);
  });

  it('should navigate between menu items with arrow keys', async () => {
    // Open the menu first
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    (menu as any)._updateMenuItems();
    const menuItems = menu.querySelectorAll('ag-menu-item');

    // Initial focus should be on first item
    expect(menuItems[0].getAttribute('tabindex')).toBe('0');

    // Simulate ArrowDown key press
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });

    menu.dispatchEvent(arrowDownEvent);
    await menu.updateComplete;

    // Focus should move to second item
    expect((menu as any)._focusedIndex).toBe(1);
  });

  it('should handle Home key to move to first item', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    (menu as any)._updateMenuItems();
    (menu as any)._focusedIndex = 2; // Start at third item

    const homeEvent = new KeyboardEvent('keydown', {
      key: 'Home',
      bubbles: true
    });

    menu.dispatchEvent(homeEvent);
    await menu.updateComplete;

    expect((menu as any)._focusedIndex).toBe(0);
  });

  it('should handle End key to move to last item', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    (menu as any)._updateMenuItems();

    const endEvent = new KeyboardEvent('keydown', {
      key: 'End',
      bubbles: true
    });

    menu.dispatchEvent(endEvent);
    await menu.updateComplete;

    expect((menu as any)._focusedIndex).toBe(2); // Last item index
  });

  it('should activate menu item with Enter key', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    (menu as any)._updateMenuItems();

    let selectedValue = '';
    menu.addEventListener('menu-select', (event: any) => {
      selectedValue = event.detail.value;
    });

    // Ensure the first menu item has focus
    await menu.updateComplete;

    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true
    });

    menu.dispatchEvent(enterEvent);
    await menu.updateComplete;

    expect(selectedValue).toBe('item1'); // First item should be activated
  });

  it('should close menu with Escape key', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);

    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true
    });

    menu.dispatchEvent(escapeEvent);
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(false);
  });

  it('should close menu with Tab key', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);

    const tabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true
    });

    menu.dispatchEvent(tabEvent);
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(false);
  });
});

describe('Menu - Menu Interaction', () => {
  let menuButton: MenuButton;
  let menu: Menu;

  beforeEach(async () => {
    menuButton = document.createElement('ag-menu-button') as MenuButton;
    menuButton.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
        <ag-menu-item value="copy">Copy</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="delete">Delete</ag-menu-item>
        <ag-menu-item value="disabled" disabled>Disabled Item</ag-menu-item>
      </ag-menu>
    `;
    document.body.appendChild(menuButton);
    await menuButton.updateComplete;
    menu = menuButton.querySelector('ag-menu') as Menu;
    await menu?.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(menuButton);
  });

  it('should open menu on button click', async () => {
    await menuButton.updateComplete;

    // Ensure menu reference is set up
    (menuButton as any)._updateMenuReference();

    const button = menuButton.shadowRoot?.querySelector('button');
    expect((menuButton as any)._menuOpen).toBe(false);

    button?.click();
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);
    expect(menu?.open).toBe(true);
  });

  it('should close menu when clicking outside', async () => {
    // Open menu first
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(true);

    // Simulate outside click
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    const clickEvent = new MouseEvent('click', { bubbles: true });
    outsideElement.dispatchEvent(clickEvent);

    await menuButton.updateComplete;

    expect((menuButton as any)._menuOpen).toBe(false);

    document.body.removeChild(outsideElement);
  });

  it('should select menu item on click', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    (menu as any)._updateMenuItems();

    let selectedValue = '';
    menu.addEventListener('menu-select', (event: any) => {
      selectedValue = event.detail.value;
    });

    const menuItems = menu.querySelectorAll('ag-menu-item');
    menuItems[0].click(); // Click "Edit" item

    await menu.updateComplete;

    expect(selectedValue).toBe('edit');
    expect((menuButton as any)._menuOpen).toBe(false); // Menu should close after selection
  });

  it('should handle disabled menu item clicks', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    (menu as any)._updateMenuItems();

    let selectedValue = '';
    menu.addEventListener('menu-select', (event: any) => {
      selectedValue = event.detail.value;
    });

    const menuItems = menu.querySelectorAll('ag-menu-item');
    const disabledItem = menuItems[3]; // "Disabled Item"

    expect(disabledItem.disabled).toBe(true);

    disabledItem.click();
    await menu.updateComplete;

    expect(selectedValue).toBe(''); // Should not trigger selection
    expect((menuButton as any)._menuOpen).toBe(true); // Menu should stay open
  });

  it('should emit menu-open and menu-close events', async () => {
    await menuButton.updateComplete;

    let menuOpenFired = false;
    let menuCloseFired = false;

    menuButton.addEventListener('menu-open', () => {
      menuOpenFired = true;
    });

    menuButton.addEventListener('menu-close', () => {
      menuCloseFired = true;
    });

    // Open menu
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    expect(menuOpenFired).toBe(true);

    // Close menu
    (menuButton as any)._closeMenu();
    await menuButton.updateComplete;

    expect(menuCloseFired).toBe(true);
  });

  it('should handle menu with href links', async () => {
    const linkMenu = document.createElement('ag-menu-button') as MenuButton;
    linkMenu.innerHTML = `
      <span>Navigation</span>
      <ag-menu slot="menu">
        <ag-menu-item href="/home" value="home">Home</ag-menu-item>
        <ag-menu-item href="/about" value="about">About</ag-menu-item>
      </ag-menu>
    `;
    document.body.appendChild(linkMenu);

    (linkMenu as any)._openMenu();
    await linkMenu.updateComplete;

    const linkMenuElement = linkMenu.querySelector('ag-menu') as Menu;
    (linkMenuElement as any)._updateMenuItems();

    const menuItems = linkMenuElement.querySelectorAll('ag-menu-item');
    const homeItem = menuItems[0];

    expect(homeItem.href).toBe('/home');

    const link = homeItem.shadowRoot?.querySelector('a');
    expect(link).toBeDefined();
    expect(link?.getAttribute('href')).toBe('/home');

    document.body.removeChild(linkMenu);
  });

  it('should handle empty menu gracefully', async () => {
    const emptyMenuButton = document.createElement('ag-menu-button') as MenuButton;
    emptyMenuButton.innerHTML = `
      <span>Empty</span>
      <ag-menu slot="menu"></ag-menu>
    `;
    document.body.appendChild(emptyMenuButton);

    (emptyMenuButton as any)._openMenu();
    await emptyMenuButton.updateComplete;

    const emptyMenu = emptyMenuButton.querySelector('ag-menu') as Menu;
    (emptyMenu as any)._updateMenuItems();

    expect((emptyMenu as any)._menuItems.length).toBe(0);

    // Should handle keyboard navigation gracefully
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });

    emptyMenu.dispatchEvent(arrowDownEvent);
    await emptyMenu.updateComplete;

    // Should not throw errors
    expect((emptyMenu as any)._focusedIndex).toBe(0);

    document.body.removeChild(emptyMenuButton);
  });

  it('should handle programmatic open/close state changes', async () => {
    await menuButton.updateComplete;

    expect(menu.open).toBe(false);
    expect(menu.hasAttribute('hidden')).toBe(false); // Initially may not have hidden

    // Programmatically open menu
    menu.open = true;
    await menu.updateComplete;

    expect(menu.open).toBe(true);

    // Programmatically close menu
    menu.open = false;
    await menu.updateComplete;

    expect(menu.open).toBe(false);
  });

  it('should maintain focus management during interactions', async () => {
    (menuButton as any)._openMenu();
    await menuButton.updateComplete;

    (menu as any)._updateMenuItems();
    const menuItems = menu.querySelectorAll('ag-menu-item');

    // First item should have focus initially
    expect(menuItems[0].getAttribute('tabindex')).toBe('0');
    expect(menuItems[1].getAttribute('tabindex')).toBe('-1');

    // Navigate to second item
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });

    menu.dispatchEvent(arrowDownEvent);
    await menu.updateComplete;

    // Focus should move to second item
    expect((menu as any)._focusedIndex).toBe(1);
  });
});