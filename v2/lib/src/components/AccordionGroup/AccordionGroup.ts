import { LitElement, html } from 'lit';

// Interface for accordion items with focus capability
interface AccordionItemElement extends HTMLElement {
  disabled: boolean;
  focus(): void;
}

export class AccordionGroup extends LitElement {
  constructor() {
    super();
    this.addEventListener('accordion-keydown', this.handleAccordionKeydown as EventListener);
  }

  get accordions(): AccordionItemElement[] {
    // Look for any child element that implements the AccordionItem interface
    // This includes ag-accordion-item, ag-animated-accordion-item, and any future extensions
    return Array.from(this.children).filter((item): item is AccordionItemElement => {
      // Check if the element has the accordion interface (disabled property and focus method)
      return 'disabled' in item && 'focus' in item && typeof (item as AccordionItemElement).focus === 'function' && !(item as AccordionItemElement).disabled;
    });
  }

  handleAccordionKeydown = (e: Event) => {
    const customEvent = e as CustomEvent;
    const accordions = this.accordions;
    if (accordions.length === 0) return;

    const { key, accordionItem } = customEvent.detail;
    const currentIndex = accordions.indexOf(accordionItem);
    
    if (currentIndex === -1) return; // Not found in our accordion list

    let newIndex = currentIndex;

    switch (key) {
      case 'ArrowDown':
        newIndex = (currentIndex + 1) % accordions.length;
        break;
      case 'ArrowUp':
        newIndex = (currentIndex - 1 + accordions.length) % accordions.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = accordions.length - 1;
        break;
      default:
        return; // Unhandled key
    }

    if (newIndex !== currentIndex) {
      const newAccordion = accordions[newIndex];
      newAccordion.focus(); // Use the accordion's focus method
    }
  };

  render() {
    return html`<slot></slot>`;
  }
}

// ag-accordion is now the main accordion component with keyboard navigation
if (!customElements.get('ag-accordion')) {
  customElements.define('ag-accordion', AccordionGroup);
}
