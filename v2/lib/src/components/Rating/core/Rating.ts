import { AgRating } from './_Rating.js';

// Manual registration with conditional check
if (!customElements.get('ag-rating')) {
  customElements.define('ag-rating', AgRating);
}

// TypeScript type mapping for autocomplete
declare global {
  interface HTMLElementTagNameMap {
    'ag-rating': AgRating;
  }
}

// Re-export everything from core
export * from './_Rating.js';
