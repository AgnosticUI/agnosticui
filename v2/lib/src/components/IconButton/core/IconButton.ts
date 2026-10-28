/* v2/lib/src/components/IconButton/core/IconButton.ts */
import { AgIconButton } from './_IconButton.js';

if (!customElements.get('ag-icon-button')) {
  customElements.define('ag-icon-button', AgIconButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-icon-button': AgIconButton;
  }
}

export * from './_IconButton.js';
export { _IconButtonFallback } from './_IconButtonFallback.js';
export type { IconButtonFallbackProps } from './_IconButtonFallback.js';
