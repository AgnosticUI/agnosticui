import { AgIconButton } from './_IconButton';

if (!customElements.get('ag-icon-button')) {
  customElements.define('ag-icon-button', AgIconButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-icon-button': AgIconButton;
  }
}

export * from './_IconButton';
