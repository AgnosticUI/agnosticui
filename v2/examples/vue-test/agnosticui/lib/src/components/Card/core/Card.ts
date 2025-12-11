import { AgCard } from './_Card.js';

if (!customElements.get('ag-card')) {
  customElements.define('ag-card', AgCard);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-card': AgCard;
  }
}

// Export everything from implementation
export * from './_Card.js';
