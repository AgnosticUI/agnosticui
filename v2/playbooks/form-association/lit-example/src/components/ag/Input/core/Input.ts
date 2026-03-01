import { AgInput } from './_Input';

if (!customElements.get('ag-input')) {
  customElements.define('ag-input', AgInput);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-input': AgInput;
  }
}

export * from './_Input';
