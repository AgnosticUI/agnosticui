import { Pagination } from './_Pagination.js';

// Manual registration with conditional check
if (!customElements.get('ag-pagination')) {
  customElements.define('ag-pagination', Pagination);
}

// TypeScript type mapping for autocomplete
declare global {
  interface HTMLElementTagNameMap {
    'ag-pagination': Pagination;
  }
}

export * from './_Pagination.js';
