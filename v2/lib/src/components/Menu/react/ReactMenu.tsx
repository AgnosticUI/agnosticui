import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  MenuButton,
  Menu,
  MenuItem,
  MenuSeparator,
} from '../core/Menu';

/**
 * Event detail for menu-select event
 */
export interface MenuSelectEventDetail {
  value: string;
}

/**
 * Custom event dispatched when a menu item is selected
 */
export type MenuSelectEvent = CustomEvent<MenuSelectEventDetail>;

/**
 * React-specific props interface for MenuButton component
 */
export interface ReactMenuButtonProps {
  variant?: 'chevron' | 'button' | 'icon';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  buttonVariant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  disabled?: boolean;
  ariaLabel?: string;
  icon?: string;
  unicode?: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

/**
 * React-specific props interface for Menu component
 */
export interface ReactMenuProps {
  open?: boolean;
  placement?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  slot?: string;
}

/**
 * React-specific props interface for MenuItem component
 */
export interface ReactMenuItemProps {
  value?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
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
  tagName: 'ag-menu-button',
  elementClass: MenuButton,
  react: React,
  events: {
    onMenuOpen: 'menu-open' as EventName<Event>,
    onMenuClose: 'menu-close' as EventName<Event>,
  },
}) as React.ForwardRefExoticComponent<ReactMenuButtonProps & React.RefAttributes<MenuButton>>;

// Create Menu component with @lit/react
export const ReactMenu = createComponent({
  tagName: 'ag-menu',
  elementClass: Menu,
  react: React,
}) as React.ForwardRefExoticComponent<ReactMenuProps & React.RefAttributes<Menu>>;

// Create MenuItem component with @lit/react
export const ReactMenuItem = createComponent({
  tagName: 'ag-menu-item',
  elementClass: MenuItem,
  react: React,
  events: {
    onMenuSelect: 'menu-select' as EventName<MenuSelectEvent>,
  },
}) as React.ForwardRefExoticComponent<ReactMenuItemProps & React.RefAttributes<MenuItem>>;

// Create MenuSeparator component with @lit/react
export const ReactMenuSeparator = createComponent({
  tagName: 'ag-menu-separator',
  elementClass: MenuSeparator,
  react: React,
}) as React.ForwardRefExoticComponent<ReactMenuSeparatorProps & React.RefAttributes<MenuSeparator>>;
