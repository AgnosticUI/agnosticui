import { AgCheckbox } from './_Checkbox';

if (!customElements.get('ag-checkbox')) {
  customElements.define('ag-checkbox', AgCheckbox);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-checkbox': AgCheckbox;
  }
}

export * from './_Checkbox';
