import { AgRating } from './_Rating.js';

if (!customElements.get('ag-rating')) {
  customElements.define('ag-rating', AgRating);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-rating': AgRating;
  }
}

export * from './_Radio.js';
