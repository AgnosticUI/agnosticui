import { Select } from './_Select.js';

if (!customElements.get('ag-select')) {
  customElements.define('ag-select', Select);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-select': Select;
  }
}

export * from './_Select.js';
// Expose the universal SSR layout engine to structural bundlers
export { _SelectFallback } from './_SelectFallback.js';
export type { SelectFallbackProps } from './_SelectFallback.js';
