import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  Checkbox,
  type CheckboxProps,
  type CheckboxChangeEvent,
} from '../core/Checkbox';

/**
 * React-specific props interface derived from core CheckboxProps
 * Extends core props including event handlers (onChange)
 */
export interface ReactCheckboxProps extends CheckboxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onChange?: (event: CheckboxChangeEvent) => void;
}

// Create component with @lit/react
export const ReactCheckbox = createComponent({
  tagName: 'ag-checkbox',
  elementClass: Checkbox,
  react: React,
  events: {
    onChange: 'ag-change' as EventName<CheckboxChangeEvent>,
  },
});

// Re-export types
export type {
  CheckboxChangeEvent,
  CheckboxSize,
  CheckboxTheme,
} from '../core/Checkbox';
