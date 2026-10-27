import { AgSpinner } from './_Spinner.js';

if (!customElements.get('ag-spinner')) {
  customElements.define('ag-spinner', AgSpinner);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-spinner': AgSpinner;
  }
}

export * from './_Spinner.js';
export { _SpinnerFallback } from './_SpinnerFallback.js';
export type { SpinnerFallbackProps } from './_SpinnerFallback.js';
