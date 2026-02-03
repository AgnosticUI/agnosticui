import { AgSelectionCardGroup } from './_SelectionCardGroup';

if (!customElements.get('ag-selection-card-group')) {
  customElements.define('ag-selection-card-group', AgSelectionCardGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-selection-card-group': AgSelectionCardGroup;
  }
}

export * from './_SelectionCardGroup';
