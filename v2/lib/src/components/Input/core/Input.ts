import { AgInput } from './_Input.js';

if (!customElements.get('ag-input')) {
  customElements.define('ag-input', AgInput);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-input': AgInput;
  }
}

export * from './_Input.js';
