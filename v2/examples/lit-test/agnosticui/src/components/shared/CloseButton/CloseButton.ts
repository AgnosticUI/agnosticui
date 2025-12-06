import { CloseButton } from './_CloseButton.js';

if (!customElements.get('ag-close-button')) {
  customElements.define('ag-close-button', CloseButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-close-button': CloseButton;
  }
}

// Export everything from implementation
export * from './_CloseButton.js';
