import { Mark } from './_Mark.js';

if (!customElements.get('ag-mark')) {
  customElements.define('ag-mark', Mark);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-mark': Mark;
  }
}

export * from './_Mark.js';