import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgInput, type InputProps } from '../core/Input';

/**
 * React-specific props for Input
 *
 * Following AgnosticUI v2 event conventions:
 * - All events are native (click, input, change, focus, blur)
 * - Native events work automatically in React, no event mapping needed
 */
export interface ReactInputProps extends InputProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Native events work automatically via callback props
  onClick?: (event: MouseEvent) => void;
  onInput?: (event: InputEvent) => void;
  onChange?: (event: Event) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

// Create Input component with @lit/react
// Note: Native events (click, input, change, focus, blur) work automatically
// No need to map them in the events object
export const ReactInput = createComponent({
  tagName: 'ag-input',
  elementClass: AgInput,
  react: React,
  events: {
    // Native events don't need to be mapped - they work automatically
  },
});
