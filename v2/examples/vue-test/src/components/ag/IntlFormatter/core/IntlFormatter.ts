import { IntlFormatter } from './_IntlFormatter';

if (!customElements.get('ag-intl-formatter')) {
  customElements.define('ag-intl-formatter', IntlFormatter);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-intl-formatter': IntlFormatter;
  }
}

export * from './_IntlFormatter';
