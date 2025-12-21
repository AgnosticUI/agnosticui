import { BadgeFx } from './_BadgeFx';

if (!customElements.get('ag-badge-fx')) {
  customElements.define('ag-badge-fx', BadgeFx);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-badge-fx': BadgeFx;
  }
}

export * from './_BadgeFx';
