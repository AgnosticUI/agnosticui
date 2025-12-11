import { AgSpinner } from './_Spinner';

if (!customElements.get('ag-spinner')) {
  customElements.define('ag-spinner', AgSpinner);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-spinner': AgSpinner;
  }
}

// Export everything from implementation
export * from './_Spinner.js';
