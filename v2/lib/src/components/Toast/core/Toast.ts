import { Toast } from './_Toast.js';

if (!customElements.get('ag-toast')) {
  customElements.define('ag-toast', Toast);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-toast': Toast;
  }
}
