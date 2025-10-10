import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  Accordion,
  AccordionItem as AccordionItemElement,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionItemToggleEvent
} from '../core/_Accordion';
import '../../AccordionGroup/AccordionGroup';

/**
 * React-specific props for Accordion container
 */
export interface ReactAccordionProps extends AccordionProps {
  children?: React.ReactNode;
}

/**
 * React-specific props for AccordionItem
 */
export interface ReactAccordionItemProps extends AccordionItemProps {
  children?: React.ReactNode;
}

/**
 * Helper component for accordion item header slot
 */
export interface ItemHeaderProps {
  children?: React.ReactNode;
}

/**
 * Helper component for accordion item content slot
 */
export interface ItemContentProps {
  children?: React.ReactNode;
}

// Create Accordion container component with @lit/react
export const ReactAccordion = createComponent({
  tagName: 'ag-accordion',
  elementClass: Accordion,
  react: React,
  events: {},
});

// Create AccordionItem component with @lit/react
export const AccordionItem = createComponent({
  tagName: 'ag-accordion-item',
  elementClass: AccordionItemElement,
  react: React,
  events: {
    onToggle: 'toggle' as EventName<AccordionItemToggleEvent>,
  },
});

// Helper components for slots (simple React components)
export const ItemHeader: React.FC<ItemHeaderProps> = ({ children }) => {
  return <span slot="header">{children}</span>;
};

export const ItemContent: React.FC<ItemContentProps> = ({ children }) => {
  return <div slot="content">{children}</div>;
};

// Re-export event types
export type { AccordionItemToggleEvent } from '../core/_Accordion';
