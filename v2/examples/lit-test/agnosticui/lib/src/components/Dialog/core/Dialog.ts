import { AgnosticDialog } from './_dialog.js';

if (!customElements.get('ag-dialog')) {
  customElements.define('ag-dialog', AgnosticDialog);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-dialog': AgnosticDialog;
  }
}

export * from './_dialog.js';
