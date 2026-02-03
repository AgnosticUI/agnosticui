import { AgSelectionButton } from './_SelectionButton';

if (!customElements.get('ag-selection-button')) {
  customElements.define('ag-selection-button', AgSelectionButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-selection-button': AgSelectionButton;
  }
}

export * from './_SelectionButton';
