import { TagFx } from './_TagFx.js';

if (!customElements.get('ag-tag-fx')) {
  customElements.define('ag-tag-fx', TagFx);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tag-fx': TagFx;
  }
}

export * from './_TagFx.js';
