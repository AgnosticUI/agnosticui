import { AgCollapsible } from './_Collapsible';

if (!customElements.get('ag-collapsible')) {
  customElements.define('ag-collapsible', AgCollapsible);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-collapsible': AgCollapsible;
  }
}

export * from './_Collapsible';
