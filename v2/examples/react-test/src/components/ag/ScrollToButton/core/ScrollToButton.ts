import { ScrollToButton } from './_ScrollToButton';

if (!customElements.get('ag-scroll-to-button')) {
  customElements.define('ag-scroll-to-button', ScrollToButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-scroll-to-button': ScrollToButton;
  }
}

export * from './_ScrollToButton';
