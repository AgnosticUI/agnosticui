import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  Popover,
  type PopoverProps,
  type PopoverShowEvent,
  type PopoverHideEvent,
} from '../core/Popover';

/**
 * React-specific props for Popover
 */
export interface ReactPopoverProps extends PopoverProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Helper component for popover trigger slot
 */
export interface PopoverTriggerProps {
  children?: React.ReactNode;
}

/**
 * Helper component for popover title slot
 */
export interface PopoverTitleProps {
  children?: React.ReactNode;
}

/**
 * Helper component for popover content slot
 */
export interface PopoverContentProps {
  children?: React.ReactNode;
}

// Create Popover component with @lit/react
export const ReactPopover = createComponent({
  tagName: 'ag-popover',
  elementClass: Popover,
  react: React,
  events: {
    onShow: 'show' as EventName<PopoverShowEvent>,
    onHide: 'hide' as EventName<PopoverHideEvent>,
  },
});

// Helper components for slots (simple React components)
export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children }) => {
  return <div slot="trigger">{children}</div>;
};

export const PopoverTitle: React.FC<PopoverTitleProps> = ({ children }) => {
  return <div slot="title">{children}</div>;
};

export const PopoverContent: React.FC<PopoverContentProps> = ({ children }) => {
  return <div slot="content">{children}</div>;
};
