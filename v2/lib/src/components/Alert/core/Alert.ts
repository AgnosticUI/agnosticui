/* v2/lib/src/components/Alert/core/Alert.ts */
import { AgAlert } from './_Alert.js';

if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', AgAlert);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-alert': AgAlert;
  }
}

export * from './_Alert.js';
export { _AlertFallback } from './_AlertFallback.js';
export type { AlertFallbackProps } from './_AlertFallback.js';
