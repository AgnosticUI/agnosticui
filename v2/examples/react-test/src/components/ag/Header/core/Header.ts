import { Header } from './_Header';

if (!customElements.get('ag-header')) {
  customElements.define('ag-header', Header);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-header': Header;
  }
}

// Export everything from implementation
export * from './_Header';
