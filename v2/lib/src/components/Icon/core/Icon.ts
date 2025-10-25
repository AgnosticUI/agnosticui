import { Icon } from './_Icon.js';

if (!customElements.get('ag-icon')) {
  customElements.define('ag-icon', Icon);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-icon': Icon;
  }
}

// Export everything from implementation
export * from './_Icon.js';
