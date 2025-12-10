import { Tooltip } from './_Tooltip';

if (!customElements.get('ag-tooltip')) {
  customElements.define('ag-tooltip', Tooltip);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tooltip': Tooltip;
  }
}

export * from './_Tooltip';
