// Shared keyboard navigation utility for experimental accordions

export interface AccordionItemElement extends HTMLElement {
  disabled: boolean;
  focus(): void;
}

export const getAccordionItems = (container: Element): AccordionItemElement[] =>
  Array.from(container.children).filter((item): item is AccordionItemElement =>
    'disabled' in item && 'focus' in item && typeof (item as AccordionItemElement).focus === 'function' && !(item as AccordionItemElement).disabled
  );

export const handleAccordionKeydown = (e: Event, container: Element) => {
  const customEvent = e as CustomEvent;
  const accordions = getAccordionItems(container);
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

export const addKeyboardNavigation = (element: Element) => {
  element.addEventListener('accordion-keydown', (e) => handleAccordionKeydown(e, element));
};