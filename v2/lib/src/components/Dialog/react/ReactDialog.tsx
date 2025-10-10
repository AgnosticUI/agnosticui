import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  AgnosticDialog,
  type DialogProps,
  type DialogOpenEvent,
  type DialogCloseEvent,
  type DialogCancelEvent
} from '../core/_dialog';

/**
 * React-specific props for Dialog
 */
export interface ReactDialogProps extends DialogProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Helper component for dialog header slot
 */
export interface DialogHeaderProps {
  children?: React.ReactNode;
}

/**
 * Helper component for dialog footer slot
 */
export interface DialogFooterProps {
  children?: React.ReactNode;
}

// Create Dialog component with @lit/react
export const ReactDialog = createComponent({
  tagName: 'ag-dialog',
  elementClass: AgnosticDialog,
  react: React,
  events: {
    onDialogOpen: 'dialog-open' as EventName<DialogOpenEvent>,
    onDialogClose: 'dialog-close' as EventName<DialogCloseEvent>,
    onDialogCancel: 'dialog-cancel' as EventName<DialogCancelEvent>,
  },
});

// Helper components for slots (simple React components)
export const DialogHeader: React.FC<DialogHeaderProps> = ({ children }) => {
  return <div slot="header">{children}</div>;
};

export const DialogFooter: React.FC<DialogFooterProps> = ({ children }) => {
  return <div slot="footer">{children}</div>;
};

// Re-export event types
export type { DialogOpenEvent, DialogCloseEvent, DialogCancelEvent } from '../core/_dialog';
