import { AgProgressRing } from './_ProgressRing.js';

if (!customElements.get('ag-progress-ring')) {
  customElements.define('ag-progress-ring', AgProgressRing);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-progress-ring': AgProgressRing;
  }
}

// Re-export everything from the implementation file
export * from './_ProgressRing.js';

export type { AgProgressRingProps } from './_ProgressRing.js';
