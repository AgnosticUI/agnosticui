import { Toast } from './_Toast';

if (!customElements.get('ag-toast')) {
  customElements.define('ag-toast', Toast);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-toast': Toast;
  }
}

// Export everything from implementation
export * from './_Toast';