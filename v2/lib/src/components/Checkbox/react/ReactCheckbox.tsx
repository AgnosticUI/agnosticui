import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  Checkbox,
  type CheckboxProps,
  type CheckboxChangeEvent,
} from '../core/Checkbox';

/**
 * React-specific props interface derived from core CheckboxProps
 * Extends core props including event handlers
 */
export interface ReactCheckboxProps extends CheckboxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Explicitly include event handler types
  onClick?: (event: MouseEvent) => void;
  onChange?: (event: CheckboxChangeEvent) => void;
}

// Create component with @lit/react
export const ReactCheckbox = createComponent({
  tagName: 'ag-checkbox',
  elementClass: Checkbox,
  react: React,
  events: {
    onChange: 'change' as EventName<CheckboxChangeEvent>,
  },
});

// Re-export types
export type {
  CheckboxChangeEvent,
  CheckboxSize,
  CheckboxTheme,
} from '../core/Checkbox';
