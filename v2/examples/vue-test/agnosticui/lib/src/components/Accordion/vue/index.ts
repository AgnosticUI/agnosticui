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
  background?: boolean;
  bordered?: boolean;
  // Indicator variants (mutually exclusive, priority: noIndicator > useX > useMinus > useChevron)
  useChevron?: boolean;
  useX?: boolean;
  useMinus?: boolean;
  noIndicator?: boolean;
}

export interface VueAccordionHeaderProps {
  // No specific props for header
}

export interface VueAccordionContentProps {
  // No specific props for content
}
