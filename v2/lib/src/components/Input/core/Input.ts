// v2/lib/src/components/Input/core/Input.ts
import { AgInput } from './_Input.js';

if (!customElements.get('ag-input')) {
  customElements.define('ag-input', AgInput);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-input': AgInput;
  }
}

export * from './_Input.js';
// Expose the universal SSR layout engine to structural bundlers
export { _InputFallback } from './_InputFallback.js';
export type { InputFallbackProps } from './_InputFallback.js';
