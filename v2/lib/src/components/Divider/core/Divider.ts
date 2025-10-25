import { Divider } from './_Divider.js';

if (!customElements.get('ag-divider')) {
  customElements.define('ag-divider', Divider);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-divider': Divider;
  }
}

export * from './_Divider.js';
