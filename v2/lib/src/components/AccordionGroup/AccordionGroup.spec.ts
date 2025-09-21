import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AccordionGroup } from './AccordionGroup';
import { AccordionItem } from '../Accordion/core/_Accordion';

describe('AccordionGroup', () => {
  let iframe: HTMLIFrameElement;
  let doc: Document;

  beforeEach(() => {
    iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    doc = iframe.contentDocument!;
    iframe.contentWindow!.customElements.define('ag-accordion', AccordionGroup);
    iframe.contentWindow!.customElements.define('ag-accordion-item', AccordionItem);
  });

  afterEach(() => {
    iframe.remove();
  });

  const setupGroup = async (count: number) => {
    const group = doc.createElement('ag-accordion') as AccordionGroup;
    doc.body.appendChild(group);
    for (let i = 0; i < count; i++) {
      const accordion = doc.createElement('ag-accordion-item') as AccordionItem;
      group.appendChild(accordion);
    }
    await group.updateComplete;
    const accordions = Array.from(group.querySelectorAll('ag-accordion-item')) as AccordionItem[];
    for (const acc of accordions) {
      await acc.updateComplete;
    }
    return { group, accordions };
  };

  it('should move focus down on ArrowDown key', async () => {
    const { group, accordions } = await setupGroup(3);
    const firstAccordion = accordions[0];

    firstAccordion.focus();
    // Simulate the accordion-keydown custom event directly (bypass the keyboard event handling)
    firstAccordion.dispatchEvent(new CustomEvent('accordion-keydown', {
      detail: { key: 'ArrowDown', accordionItem: firstAccordion },
      bubbles: true
    }));
    await group.updateComplete;

    // Check that focus moved to the second accordion item
    const focusedIndex = accordions.indexOf(doc.activeElement as AccordionItem);
    expect(focusedIndex).toBe(1);
    expect(doc.activeElement!.shadowRoot!.activeElement?.tagName).toBe('BUTTON');
  });

  it('should move focus up on ArrowUp key', async () => {
    const { group, accordions } = await setupGroup(3);
    const secondAccordion = accordions[1];

    secondAccordion.focus();
    secondAccordion.dispatchEvent(new CustomEvent('accordion-keydown', {
      detail: { key: 'ArrowUp', accordionItem: secondAccordion },
      bubbles: true
    }));
    await group.updateComplete;

    const focusedIndex = accordions.indexOf(doc.activeElement as AccordionItem);
    expect(focusedIndex).toBe(0);
    expect(doc.activeElement!.shadowRoot!.activeElement?.tagName).toBe('BUTTON');
  });

  it('should move focus to the last item on End key', async () => {
    const { group, accordions } = await setupGroup(3);
    const firstAccordion = accordions[0];

    firstAccordion.focus();
    firstAccordion.dispatchEvent(new CustomEvent('accordion-keydown', {
      detail: { key: 'End', accordionItem: firstAccordion },
      bubbles: true
    }));
    await group.updateComplete;

    const focusedIndex = accordions.indexOf(doc.activeElement as AccordionItem);
    expect(focusedIndex).toBe(2);
    expect(doc.activeElement!.shadowRoot!.activeElement?.tagName).toBe('BUTTON');
  });

  it('should move focus to the first item on Home key', async () => {
    const { group, accordions } = await setupGroup(3);
    const lastAccordion = accordions[2];

    lastAccordion.focus();
    lastAccordion.dispatchEvent(new CustomEvent('accordion-keydown', {
      detail: { key: 'Home', accordionItem: lastAccordion },
      bubbles: true
    }));
    await group.updateComplete;

    const focusedIndex = accordions.indexOf(doc.activeElement as AccordionItem);
    expect(focusedIndex).toBe(0);
    expect(doc.activeElement!.shadowRoot!.activeElement?.tagName).toBe('BUTTON');
  });

  it('should wrap focus from last to first on ArrowDown', async () => {
    const { group, accordions } = await setupGroup(3);
    const lastAccordion = accordions[2];

    lastAccordion.focus();
    lastAccordion.dispatchEvent(new CustomEvent('accordion-keydown', {
      detail: { key: 'ArrowDown', accordionItem: lastAccordion },
      bubbles: true
    }));
    await group.updateComplete;

    const focusedIndex = accordions.indexOf(doc.activeElement as AccordionItem);
    expect(focusedIndex).toBe(0);
    expect(doc.activeElement!.shadowRoot!.activeElement?.tagName).toBe('BUTTON');
  });

  it('should wrap focus from first to last on ArrowUp', async () => {
    const { group, accordions } = await setupGroup(3);
    const firstAccordion = accordions[0];

    firstAccordion.focus();
    firstAccordion.dispatchEvent(new CustomEvent('accordion-keydown', {
      detail: { key: 'ArrowUp', accordionItem: firstAccordion },
      bubbles: true
    }));
    await group.updateComplete;

    const focusedIndex = accordions.indexOf(doc.activeElement as AccordionItem);
    expect(focusedIndex).toBe(2);
    expect(doc.activeElement!.shadowRoot!.activeElement?.tagName).toBe('BUTTON');
  });

  it('should handle dynamically added accordion items', async () => {
    const { group } = await setupGroup(2);
    
    const newAccordion = doc.createElement('ag-accordion-item') as AccordionItem;
    group.appendChild(newAccordion);
    await newAccordion.updateComplete;

    const updatedAccordions = Array.from(group.querySelectorAll('ag-accordion-item')) as AccordionItem[];
    expect(updatedAccordions.length).toBe(3);

    // Test focus wrapping with the new item
    const lastAccordion = updatedAccordions[2];
    lastAccordion.focus();
    lastAccordion.dispatchEvent(new CustomEvent('accordion-keydown', {
      detail: { key: 'ArrowDown', accordionItem: lastAccordion },
      bubbles: true
    }));
    await group.updateComplete;

    const focusedIndex = updatedAccordions.indexOf(doc.activeElement as AccordionItem);
    expect(focusedIndex).toBe(0);
  });
});