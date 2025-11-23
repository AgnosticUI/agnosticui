import { AgFormControl } from './_FormControl.js';

if (!customElements.get('ag-form-control')) {
  customElements.define('ag-form-control', AgFormControl);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-form-control': AgFormControl;
  }
}

export * from './_FormControl.js';
