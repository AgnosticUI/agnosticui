import { AgButton } from './_Button.js';

if (!customElements.get('ag-button')) {
  customElements.define('ag-button', AgButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-button': AgButton;
  }
}

export * from './_Button.js';
