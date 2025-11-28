
import { IconButtonFx } from './_IconButtonFx';

if (!customElements.get('ag-icon-button-fx')) {
  customElements.define('ag-icon-button-fx', IconButtonFx);
}
declare global {
  interface HTMLElementTagNameMap {
    'ag-icon-button-fx': IconButtonFx;
  }
}

// Export everything from implementation
export * from './_IconButtonFx.js';
