export { default } from './VueAccordion.vue';
export { default as VueAccordion } from './VueAccordion.vue';
export { default as VueAccordionItem } from './VueAccordionItem.vue';
export { default as VueAccordionHeader } from './VueAccordionHeader.vue';
export { default as VueAccordionContent } from './VueAccordionContent.vue';

// Define types separately since Vue component types are handled differently
export interface VueAccordionProps {
  // No specific props for the group container
}

export interface VueAccordionItemProps {
  open?: boolean;
  headingLevel?: number;
  disabled?: boolean;
  indicator?: boolean;
  background?: boolean;
  bordered?: boolean;
}

export interface VueAccordionHeaderProps {
  // No specific props for header
}

export interface VueAccordionContentProps {
  // No specific props for content
}
