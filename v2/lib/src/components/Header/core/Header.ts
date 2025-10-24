import { Header } from './_Header.js';

if (!customElements.get('ag-header')) {
  customElements.define('ag-header', Header);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-header': Header;
  }
}
