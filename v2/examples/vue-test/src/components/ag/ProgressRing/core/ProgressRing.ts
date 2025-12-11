import { AgProgressRing } from './_ProgressRing';

if (!customElements.get('ag-progress-ring')) {
  customElements.define('ag-progress-ring', AgProgressRing);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-progress-ring': AgProgressRing;
  }
}

// Re-export everything from the implementation file
export * from './_ProgressRing';

export type { AgProgressRingProps } from './_ProgressRing';
