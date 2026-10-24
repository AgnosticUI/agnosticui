// v2/lib/src/components/Button/core/Button.ts
import { AgButton } from './_Button.js';

if (!customElements.get('ag-button')) {
  customElements.define('ag-button', AgButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-button': AgButton;
  }
}

export * from './_Button.js';
// Expose the universal SSR layout engine to structural bundlers
export { _ButtonFallback } from './_ButtonFallback.js';
export type { ButtonFallbackProps } from './_ButtonFallback.js';
