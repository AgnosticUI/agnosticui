import { AgCopyButton } from './_CopyButton.js';

if (!customElements.get('ag-copy-button')) {
  customElements.define('ag-copy-button', AgCopyButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-copy-button': AgCopyButton;
  }
}

export * from './_CopyButton.js';
