import { ContentPagination } from './_ContentPagination.js';

// Manual registration with conditional check
if (!customElements.get('ag-content-pagination')) {
  customElements.define('ag-content-pagination', ContentPagination);
}

// TypeScript type mapping for autocomplete
declare global {
  interface HTMLElementTagNameMap {
    'ag-content-pagination': ContentPagination;
  }
}

export * from './_ContentPagination.js';
