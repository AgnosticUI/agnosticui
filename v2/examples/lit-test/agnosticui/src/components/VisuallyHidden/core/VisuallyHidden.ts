import { VisuallyHidden } from './_VisuallyHidden.js';

if (!customElements.get('ag-visually-hidden')) {
  customElements.define('ag-visually-hidden', VisuallyHidden);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-visually-hidden': VisuallyHidden;
  }
}

export * from './_VisuallyHidden.js';