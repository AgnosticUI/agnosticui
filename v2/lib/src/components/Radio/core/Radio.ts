import { Radio } from './_Radio.js';

if (!customElements.get('ag-radio')) {
  customElements.define('ag-radio', Radio);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-radio': Radio;
  }
}

export * from './_Radio.js';
