import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  AgnosticDialog,
  type DialogProps,
  type DialogOpenEvent,
  type DialogCloseEvent,
  type DialogCancelEvent
} from '../core/Dialog';

/**
 * React-specific props for Dialog.
 *
 * Includes onOpenChange for controlled-component support. This is necessary
 * because the underlying Lit web component manages its own open state internally
 * (e.g. it sets this.open = false on Escape or backdrop click). @lit/react's
 * createComponent only bridges DOM events -> React props, so without explicitly
 * calling onOpenChange(false) on close/cancel, React's state never learns the
 * dialog closed. The stale open={true} is then re-applied on the next render,
 * causing previously dismissed dialogs to reappear behind newer ones.
 */
export interface ReactDialogProps extends DialogProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Called with the new open state whenever the dialog opens or closes.
   * Wire this to your React state setter (e.g. onOpenChange={setIsOpen}) so
   * React stays in sync when the dialog closes itself internally.
   */
  onOpenChange?: (open: boolean) => void;
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

// Raw @lit/react bridge — maps Lit custom events to React prop callbacks.
// Does NOT handle onOpenChange; that requires the wrapper below.
const _ReactDialogBase = createComponent({
  tagName: 'ag-dialog',
  elementClass: AgnosticDialog,
  react: React,
  events: {
    onDialogOpen: 'dialog-open' as EventName<DialogOpenEvent>,
    onDialogClose: 'dialog-close' as EventName<DialogCloseEvent>,
    onDialogCancel: 'dialog-cancel' as EventName<DialogCancelEvent>,
  },
});

/**
 * ReactDialog wraps _ReactDialogBase to add onOpenChange support.
 *
 * The Lit element fires "dialog-close" when the close button is clicked and
 * "dialog-cancel" when the user presses Escape or clicks the backdrop. Both
 * mean the dialog is now closed. We intercept those two events and call
 * onOpenChange(false) so React state reflects the new closed state immediately,
 * preventing the stale open={true} from being pushed back into the element on
 * the next render.
 */
export const ReactDialog = React.forwardRef<AgnosticDialog, ReactDialogProps>(
  ({ onOpenChange, onDialogOpen, onDialogClose, onDialogCancel, ...props }, ref) => {
    const handleDialogOpen = (event: DialogOpenEvent) => {
      onDialogOpen?.(event);
      onOpenChange?.(true);
    };

    // Both close and cancel mean the dialog is no longer open — notify React.
    const handleDialogClose = (event: DialogCloseEvent) => {
      onDialogClose?.(event);
      onOpenChange?.(false);
    };

    const handleDialogCancel = (event: DialogCancelEvent) => {
      onDialogCancel?.(event);
      onOpenChange?.(false);
    };

    return (
      <_ReactDialogBase
        ref={ref}
        onDialogOpen={handleDialogOpen}
        onDialogClose={handleDialogClose}
        onDialogCancel={handleDialogCancel}
        {...props}
      />
    );
  }
);

ReactDialog.displayName = 'ReactDialog';

// Helper components for slots (simple React components)
export const DialogHeader: React.FC<DialogHeaderProps> = ({ children }) => {
  return <div slot="header">{children}</div>;
};

export const DialogFooter: React.FC<DialogFooterProps> = ({ children }) => {
  return <div slot="footer">{children}</div>;
};

// Re-export event types
export type { DialogOpenEvent, DialogCloseEvent, DialogCancelEvent } from '../core/Dialog';
