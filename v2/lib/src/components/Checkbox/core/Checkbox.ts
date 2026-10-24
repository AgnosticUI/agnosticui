// v2/lib/src/components/Checkbox/core/Checkbox.ts
import { AgCheckbox } from './_Checkbox.js';

if (!customElements.get('ag-checkbox')) {
  customElements.define('ag-checkbox', AgCheckbox);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-checkbox': AgCheckbox;
  }
}

export * from './_Checkbox.js';
// Expose the universal SSR fallback engine to layout bundlers
export { _InputFallback as _CheckboxFallback } from './_InputFallback.js';
export type { CheckboxFallbackProps } from './_InputFallback.js';
