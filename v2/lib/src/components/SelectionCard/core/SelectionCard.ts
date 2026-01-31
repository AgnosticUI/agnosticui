import { AgSelectionCard } from './_SelectionCard.js';

if (!customElements.get('ag-selection-card')) {
  customElements.define('ag-selection-card', AgSelectionCard);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-selection-card': AgSelectionCard;
  }
}

export * from './_SelectionCard.js';
