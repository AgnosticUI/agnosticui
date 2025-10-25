import { Checkbox } from './_Checkbox.js';

if (!customElements.get('ag-checkbox')) {
  customElements.define('ag-checkbox', Checkbox);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-checkbox': Checkbox;
  }
}

export * from './_Checkbox.js';
