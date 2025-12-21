import { Progress } from './_Progress.js';

if (!customElements.get('ag-progress')) {
  customElements.define('ag-progress', Progress);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-progress': Progress;
  }
}

// Export everything from implementation
export * from './_Progress.js';
