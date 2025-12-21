import { AgRadio } from './_Radio';

if (!customElements.get('ag-radio')) {
  customElements.define('ag-radio', AgRadio);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-radio': AgRadio;
  }
}

export * from './_Radio';
