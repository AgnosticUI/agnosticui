import { AgnosticDrawer } from './_drawer.js';

if (!customElements.get('ag-drawer')) {
  customElements.define('ag-drawer', AgnosticDrawer);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-drawer': AgnosticDrawer;
  }
}

export * from './_drawer.js';
