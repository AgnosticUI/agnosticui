import { AgTag } from './_Tag.js';

if (!customElements.get('ag-tag')) {
  customElements.define('ag-tag', AgTag);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tag': AgTag;
  }
}

// Export everything from implementation
export * from './_Tag.js';