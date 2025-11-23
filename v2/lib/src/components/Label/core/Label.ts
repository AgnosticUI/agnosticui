import { AgLabel } from './_Label.js';

if (!customElements.get('ag-label')) {
  customElements.define('ag-label', AgLabel);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-label': AgLabel;
  }
}

export * from './_Label.js';
