import { AgIcon } from './_Icon.js';

if (!customElements.get('ag-icon')) {
  customElements.define('ag-icon', AgIcon);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-icon': AgIcon;
  }
}

export * from './_Icon.js';
export { _IconFallback } from './_IconFallback.js';
export type { IconFallbackProps } from './_IconFallback.js';
