import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { AgIconButton, type IconButtonProps, type IconButtonClickEvent, type IconButtonActivateEvent } from '../core/_IconButton';

/**
 * React-specific props interface derived from core IconButtonProps
 * Extends core props including event handlers (onIconButtonClick, onIconButtonActivate)
 */
export interface ReactIconButtonProps extends IconButtonProps {
  children?: React.ReactNode;
}

// Create component with @lit/react
export const ReactIconButton = createComponent({
  tagName: 'ag-icon-button',
  elementClass: AgIconButton,
  react: React,
  events: {
    onIconButtonClick: 'icon-button-click' as EventName<IconButtonClickEvent>,
    onIconButtonActivate: 'icon-button-activate' as EventName<IconButtonActivateEvent>,
  },
});

// Re-export event types
export type { IconButtonClickEvent, IconButtonActivateEvent } from '../core/_IconButton';
