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
// Expose the correctly named self-contained engine
export { _CheckboxFallback } from './_CheckboxFallback.js';
export type { CheckboxFallbackProps } from './_CheckboxFallback.js';
