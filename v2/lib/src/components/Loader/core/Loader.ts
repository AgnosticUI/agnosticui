import { Loader } from './_Loader.js';

if (!customElements.get('ag-loader')) {
  customElements.define('ag-loader', Loader);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-loader': Loader;
  }
}

// Export everything from implementation
export * from './_Loader.js';
