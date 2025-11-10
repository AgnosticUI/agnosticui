import { AgEmptyState } from './_EmptyState.js';

if (!customElements.get('ag-empty-state')) {
  customElements.define('ag-empty-state', AgEmptyState);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-empty-state': AgEmptyState;
  }
}

// Re-export everything from core
export * from './_EmptyState.js';
