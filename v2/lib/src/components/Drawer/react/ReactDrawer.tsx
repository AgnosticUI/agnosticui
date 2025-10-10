import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  AgnosticDrawer,
  type DrawerProps,
  type DrawerCloseEvent
} from '../core/_drawer';

/**
 * React-specific props for Drawer
 */
export interface ReactDrawerProps extends DrawerProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
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

// Create Drawer component with @lit/react
export const ReactDrawer = createComponent({
  tagName: 'ag-drawer',
  elementClass: AgnosticDrawer,
  react: React,
  events: {
    onClose: 'close' as EventName<DrawerCloseEvent>,
  },
});

// Helper components for slots (simple React components)
export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children }) => {
  return <div slot="header">{children}</div>;
};

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ children }) => {
  return <div slot="footer">{children}</div>;
};

// Re-export event types
export type { DrawerCloseEvent } from '../core/_drawer';
