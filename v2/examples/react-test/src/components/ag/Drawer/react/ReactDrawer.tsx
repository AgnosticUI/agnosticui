import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  AgnosticDrawer,
  type DrawerProps,
  type DrawerOpenEvent,
  type DrawerCloseEvent,
  type DrawerCancelEvent
} from '../core/Drawer';

/**
 * React-specific props for Drawer.
 *
 * Includes onOpenChange for controlled-component support. This is necessary
 * because the underlying Lit web component manages its own open state internally
 * (e.g. it sets this.open = false on Escape or backdrop click). @lit/react's
 * createComponent only bridges DOM events -> React props, so without explicitly
 * calling onOpenChange(false) on close/cancel, React's state never learns the
 * drawer closed. The stale open={true} is then re-applied on the next render,
 * causing previously dismissed drawers to reappear when other drawers are opened.
 */
export interface ReactDrawerProps extends DrawerProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Called with the new open state whenever the drawer opens or closes.
   * Wire this to your React state setter (e.g. onOpenChange={setIsOpen}) so
   * React stays in sync when the drawer closes itself internally.
   */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Helper component for drawer header slot
 */
export interface DrawerHeaderProps {
  children?: React.ReactNode;
}

/**
 * Helper component for drawer footer slot
 */
export interface DrawerFooterProps {
  children?: React.ReactNode;
}

// Raw @lit/react bridge — maps Lit custom events to React prop callbacks.
// Does NOT handle onOpenChange; that requires the wrapper below.
const _ReactDrawerBase = createComponent({
  tagName: 'ag-drawer',
  elementClass: AgnosticDrawer,
  react: React,
  events: {
    onDrawerOpen: 'drawer-open' as EventName<DrawerOpenEvent>,
    onDrawerClose: 'drawer-close' as EventName<DrawerCloseEvent>,
    onDrawerCancel: 'drawer-cancel' as EventName<DrawerCancelEvent>,
  },
});

/**
 * ReactDrawer wraps _ReactDrawerBase to add onOpenChange support.
 *
 * The Lit element fires "drawer-close" when the close button is clicked and
 * "drawer-cancel" when the user presses Escape or clicks the backdrop. Both
 * mean the drawer is now closed. We intercept those two events and call
 * onOpenChange(false) so React state reflects the new closed state immediately,
 * preventing the stale open={true} from being pushed back into the element on
 * the next render.
 */
export const ReactDrawer = React.forwardRef<AgnosticDrawer, ReactDrawerProps>(
  ({ onOpenChange, onDrawerOpen, onDrawerClose, onDrawerCancel, ...props }, ref) => {
    const handleDrawerOpen = (event: DrawerOpenEvent) => {
      onDrawerOpen?.(event);
      onOpenChange?.(true);
    };

    // Both close and cancel mean the drawer is no longer open — notify React.
    const handleDrawerClose = (event: DrawerCloseEvent) => {
      onDrawerClose?.(event);
      onOpenChange?.(false);
    };

    const handleDrawerCancel = (event: DrawerCancelEvent) => {
      onDrawerCancel?.(event);
      onOpenChange?.(false);
    };

    return (
      <_ReactDrawerBase
        ref={ref}
        onDrawerOpen={handleDrawerOpen}
        onDrawerClose={handleDrawerClose}
        onDrawerCancel={handleDrawerCancel}
        {...props}
      />
    );
  }
);

ReactDrawer.displayName = 'ReactDrawer';

// Helper components for slots (simple React components)
export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children }) => {
  return <div slot="header">{children}</div>;
};

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ children }) => {
  return <div slot="footer">{children}</div>;
};

// Re-export event types
export type { DrawerOpenEvent, DrawerCloseEvent, DrawerCancelEvent } from '../core/Drawer';
