import { AgSelectionButtonGroup } from './_SelectionButtonGroup';

if (!customElements.get('ag-selection-button-group')) {
  customElements.define('ag-selection-button-group', AgSelectionButtonGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-selection-button-group': AgSelectionButtonGroup;
  }
}

export * from './_SelectionButtonGroup';
