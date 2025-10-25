import { Spinner } from './_Spinner';

if (!customElements.get('ag-spinner')) {
  customElements.define('ag-spinner', Spinner);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-spinner': Spinner;
  }
}

// Export everything from implementation
export * from './_Spinner.js';
