import { AgBreadcrumb } from './_Breadcrumb.js';

if (!customElements.get('ag-breadcrumb')) {
  customElements.define('ag-breadcrumb', AgBreadcrumb);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-breadcrumb': AgBreadcrumb;
  }
}

export * from './_Breadcrumb.js';
