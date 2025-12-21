import '../../Button/core/Button.js';
import { ButtonFx } from './_ButtonFx';

if (!customElements.get('ag-button-fx')) {
  customElements.define('ag-button-fx', ButtonFx);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-button-fx': ButtonFx;
  }
}

export * from './_ButtonFx.js';
