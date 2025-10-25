import { Card } from './_Card.js';

if (!customElements.get('ag-card')) {
  customElements.define('ag-card', Card);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-card': Card;
  }
}

// Export everything from implementation
export * from './_Card.js';
