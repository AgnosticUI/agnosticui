import { AgMenuButton, AgMenu, AgMenuItem, AgMenuSeparator } from './_Menu.js';

if (!customElements.get('ag-menu-button')) {
  customElements.define('ag-menu-button', AgMenuButton);
}

if (!customElements.get('ag-menu')) {
  customElements.define('ag-menu', AgMenu);
}

if (!customElements.get('ag-menu-item')) {
  customElements.define('ag-menu-item', AgMenuItem);
}

if (!customElements.get('ag-menu-separator')) {
  customElements.define('ag-menu-separator', AgMenuSeparator);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-menu-button': AgMenuButton;
    'ag-menu': AgMenu;
    'ag-menu-item': AgMenuItem;
    'ag-menu-separator': AgMenuSeparator;
  }
}

export * from './_Menu.js';
