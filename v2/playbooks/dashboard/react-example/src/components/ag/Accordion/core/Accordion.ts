import { AccordionItem } from './_Accordion';
import { AccordionGroup } from './AccordionGroup';

if (!customElements.get('ag-accordion')) {
  customElements.define('ag-accordion', AccordionGroup);
}

if (!customElements.get('ag-accordion-item')) {
  customElements.define('ag-accordion-item', AccordionItem);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-accordion': AccordionGroup;
    'ag-accordion-item': AccordionItem;
  }
}

export * from './_Accordion';
export { AccordionGroup } from './AccordionGroup';
