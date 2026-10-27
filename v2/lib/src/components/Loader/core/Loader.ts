import { Loader } from './_Loader.js';

if (!customElements.get('ag-loader')) {
  customElements.define('ag-loader', Loader);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-loader': Loader;
  }
}

export * from './_Loader.js';
export { _LoaderFallback } from './_LoaderFallback.js';
export type { LoaderFallbackProps } from './_LoaderFallback.js';
