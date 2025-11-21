import { BackToTop } from './_BackToTop.js';

if (!customElements.get('ag-back-to-top')) {
  customElements.define('ag-back-to-top', BackToTop);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-back-to-top': BackToTop;
  }
}

export * from './_BackToTop.js';