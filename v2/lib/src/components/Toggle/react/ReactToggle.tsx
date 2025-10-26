import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { AgToggle, type ToggleProps, type ToggleChangeEvent } from '../core/Toggle';

/**
 * React-specific props interface derived from core ToggleProps
 * Extends core props including event handlers (onToggleChange)
 */
export interface ReactToggleProps extends ToggleProps {
  children?: React.ReactNode;
}

// Create component with @lit/react
export const ReactToggle = createComponent({
  tagName: 'ag-toggle',
  elementClass: AgToggle,
  react: React,
  events: {
    onToggleChange: 'toggle-change' as EventName<ToggleChangeEvent>,
  },
});

// Re-export event types
export type { ToggleChangeEvent } from '../core/Toggle';
