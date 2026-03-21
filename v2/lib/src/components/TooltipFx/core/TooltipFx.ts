import { TooltipFx } from './_TooltipFx.js';

if (!customElements.get('ag-tooltip-fx')) {
  customElements.define('ag-tooltip-fx', TooltipFx);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tooltip-fx': TooltipFx;
  }
}

export * from './_TooltipFx.js';
