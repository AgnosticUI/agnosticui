import { AgProgressRing } from './_AgProgressRing.js';

if (!customElements.get('ag-progress-ring')) {
  customElements.define('ag-progress-ring', AgProgressRing);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-progress-ring': AgProgressRing;
  }
}

// Re-export everything from the implementation file
export * from './_AgProgressRing.js';
