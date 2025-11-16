import { AgIcon } from './_Icon.js';

if (!customElements.get('ag-icon')) {
  customElements.define('ag-icon', AgIcon);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-icon': AgIcon;
  }
}

// Export everything from implementation
export * from './_Icon.js';
