import { Alert } from './_Alert.js';

if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', Alert);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-alert': Alert;
  }
}

// Export everything from implementation
export * from './_Alert.js';
