import React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { Select as SelectWC, type SelectChangeEvent } from '../core/Select.js';

// Re-export event types
export type { SelectChangeEvent, SelectChangeEventDetail } from '../core/Select.js';

export interface ReactSelectProps {
  size?: 'small' | 'large' | '';
  multiple?: boolean;
  disabled?: boolean;
  name?: string;
  multipleSize?: number;
  children?: React.ReactNode;

  // External label support
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;

  // Event callbacks
  onChange?: (event: SelectChangeEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onClick?: (event: MouseEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}

export const ReactSelect = createComponent({
  tagName: 'ag-select',
  elementClass: SelectWC,
  react: React,
  events: {
    // Only map custom events - native events work automatically
    onChange: 'change' as EventName<SelectChangeEvent>,
  },
});
