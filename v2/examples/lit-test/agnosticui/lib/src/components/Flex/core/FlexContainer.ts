import { FlexContainer } from './_FlexContainer.js';

if (!customElements.get('ag-flex-container')) {
  customElements.define('ag-flex-container', FlexContainer);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-flex-container': FlexContainer;
  }
}

export * from './_FlexContainer.js';
