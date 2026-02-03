import { AgAlert } from './_Alert';

if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', AgAlert);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-alert': AgAlert;
  }
}

// Export everything from implementation
export * from './_Alert';
