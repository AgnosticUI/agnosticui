import { IntlFormatter } from './_IntlFormatter.js';

if (!customElements.get('ag-intl-formatter')) {
  customElements.define('ag-intl-formatter', IntlFormatter);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-intl-formatter': IntlFormatter;
  }
}

export * from './_IntlFormatter.js';
