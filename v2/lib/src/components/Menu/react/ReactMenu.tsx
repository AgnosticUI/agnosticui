import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  AgMenuButton,
  AgMenu,
  AgMenuItem,
  AgMenuSeparator,
  type MenuButtonProps,
  type MenuProps,
  type MenuItemProps,
  type MenuOpenEvent,
  type MenuCloseEvent,
  type MenuSelectEvent,
} from "../core/Menu";

/**
 * React-specific props interface for MenuButton component
 */
export interface ReactMenuButtonProps extends MenuButtonProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Explicitly include event handler types
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onMenuOpen?: (event: MenuOpenEvent) => void;
  onMenuClose?: (event: MenuCloseEvent) => void;
}

/**
 * React-specific props interface for Menu component
 */
export interface ReactMenuProps extends MenuProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  slot?: string;
  // Explicitly include event handler types
  onKeyDown?: (event: KeyboardEvent) => void;
}

/**
 * React-specific props interface for MenuItem component
 */
export interface ReactMenuItemProps extends MenuItemProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Explicitly include event handler types
  onClick?: (event: MouseEvent) => void;
  onMenuSelect?: (event: MenuSelectEvent) => void;
}

/**
 * React-specific props interface for MenuSeparator component
 */
export interface ReactMenuSeparatorProps {
  className?: string;
  id?: string;
}

// Create MenuButton component with @lit/react
export const ReactMenuButton = createComponent({
  tagName: "ag-menu-button",
  elementClass: AgMenuButton,
  react: React,
  events: {
    // Map custom events only (native events work automatically)
    onMenuOpen: "menu-open" as EventName<MenuOpenEvent>,
    onMenuClose: "menu-close" as EventName<MenuCloseEvent>,
  },
}) as React.ForwardRefExoticComponent<
  ReactMenuButtonProps & React.RefAttributes<AgMenuButton>
>;

// Create Menu component with @lit/react
export const ReactMenu = createComponent({
  tagName: "ag-menu",
  elementClass: AgMenu,
  react: React,
}) as React.ForwardRefExoticComponent<
  ReactMenuProps & React.RefAttributes<AgMenu>
>;

// Create MenuItem component with @lit/react
export const ReactMenuItem = createComponent({
  tagName: "ag-menu-item",
  elementClass: AgMenuItem,
  react: React,
  events: {
    // Map custom events only (native events work automatically)
    onMenuSelect: "menu-select" as EventName<MenuSelectEvent>,
  },
}) as React.ForwardRefExoticComponent<
  ReactMenuItemProps & React.RefAttributes<AgMenuItem>
>;

// Create MenuSeparator component with @lit/react
export const ReactMenuSeparator = createComponent({
  tagName: "ag-menu-separator",
  elementClass: AgMenuSeparator,
  react: React,
}) as React.ForwardRefExoticComponent<
  ReactMenuSeparatorProps & React.RefAttributes<AgMenuSeparator>
>;

// Re-export event types for consumer convenience
export type {
  MenuOpenEvent,
  MenuCloseEvent,
  MenuSelectEvent,
} from "../core/Menu";
