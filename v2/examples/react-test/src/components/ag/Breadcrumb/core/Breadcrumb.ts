import { AgBreadcrumb } from './_Breadcrumb';

if (!customElements.get('ag-breadcrumb')) {
  customElements.define('ag-breadcrumb', AgBreadcrumb);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-breadcrumb': AgBreadcrumb;
  }
}

export * from './_Breadcrumb';
