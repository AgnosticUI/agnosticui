import { AgToggle } from './_Toggle';

if (!customElements.get('ag-toggle')) {
  customElements.define('ag-toggle', AgToggle);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-toggle': AgToggle;
  }
}

export * from './_Toggle';
