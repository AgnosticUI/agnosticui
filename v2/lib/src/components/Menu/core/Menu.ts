import { MenuButton, Menu, MenuItem, MenuSeparator } from './_Menu.js';

if (!customElements.get('ag-menu-button')) {
  customElements.define('ag-menu-button', MenuButton);
}

if (!customElements.get('ag-menu')) {
  customElements.define('ag-menu', Menu);
}

if (!customElements.get('ag-menu-item')) {
  customElements.define('ag-menu-item', MenuItem);
}

if (!customElements.get('ag-menu-separator')) {
  customElements.define('ag-menu-separator', MenuSeparator);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-menu-button': MenuButton;
    'ag-menu': Menu;
    'ag-menu-item': MenuItem;
    'ag-menu-separator': MenuSeparator;
  }
}

export * from './_Menu.js';
