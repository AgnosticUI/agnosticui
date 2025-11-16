import { AgDivider } from './_Divider.js';

if (!customElements.get('ag-divider')) {
  customElements.define('ag-divider', AgDivider);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-divider': AgDivider;
  }
}

export * from './_Divider.js';
