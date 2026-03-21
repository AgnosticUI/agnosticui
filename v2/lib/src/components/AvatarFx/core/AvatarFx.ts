import { AvatarFx } from './_AvatarFx.js';

if (!customElements.get('ag-avatar-fx')) {
  customElements.define('ag-avatar-fx', AvatarFx);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-avatar-fx': AvatarFx;
  }
}

export * from './_AvatarFx.js';
