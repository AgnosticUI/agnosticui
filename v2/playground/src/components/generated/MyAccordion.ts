
// ⚠️ AI-generated vibe: review for accessibility + performance
import { Accordion, AccordionItem } from '@agnosticui/core';
import { customElement } from 'lit/decorators.js';
import { accordionStyles } from './my-accordion.styles.js';

@customElement('my-accordion')
export class MyAccordion extends Accordion {
  static styles = [accordionStyles];
}

@customElement('my-accordion-item')
export class MyAccordionItem extends AccordionItem {
  static styles = [AccordionItem.styles, accordionStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'my-accordion': MyAccordion;
    'my-accordion-item': MyAccordionItem;
  }
}
