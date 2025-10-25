import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgInput, type InputProps } from '../core/Input';

/**
 * React-specific props for Input
 */
export interface ReactInputProps extends InputProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Native events work automatically, no need to map
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
}

// Create Input component with @lit/react
// Note: Native events (input, change, focus, blur) work automatically
export const ReactInput = createComponent({
  tagName: 'ag-input',
  elementClass: AgInput,
  react: React,
  events: {
    // Native events don't need to be mapped, they work automatically
  },
});
