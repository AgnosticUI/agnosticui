import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { Tooltip, type TooltipProps, type TooltipShowEvent, type TooltipHideEvent } from '../core/_Tooltip';

/**
 * React-specific props interface derived from core TooltipProps
 * Extends core props including event handlers (onShow, onHide)
 */
export interface ReactTooltipProps extends TooltipProps {
  children: React.ReactElement;
}

// Create component with @lit/react
export const ReactTooltip = createComponent({
  tagName: 'ag-tooltip',
  elementClass: Tooltip,
  react: React,
  events: {
    onShow: 'show' as EventName<TooltipShowEvent>,
    onHide: 'hide' as EventName<TooltipHideEvent>,
  },
});

// Re-export event types
export type { TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';
