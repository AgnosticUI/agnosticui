import { ScrollProgress } from './_ScrollProgress';

if (!customElements.get('ag-scroll-progress')) {
  customElements.define('ag-scroll-progress', ScrollProgress);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-scroll-progress': ScrollProgress;
  }
}

// Export everything from implementation
export * from './_ScrollProgress';
