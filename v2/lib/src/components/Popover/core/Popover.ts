import { Popover } from './_Popover.js';

if (!customElements.get('ag-popover')) {
  customElements.define('ag-popover', Popover);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-popover': Popover;
  }
}

export * from './_Popover.js';
