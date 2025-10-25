import React from 'react';
import { createComponent } from '@lit/react';
import { Select as SelectWC } from '../core/Select.js';

export interface ReactSelectProps {
  size?: 'small' | 'large' | '';
  multiple?: boolean;
  disabled?: boolean;
  name?: string;
  multipleSize?: number;
  children?: React.ReactNode;

  // Native select events
  onChange?: (event: CustomEvent<{ value: string | string[] }>) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onInput?: (event: InputEvent) => void;
  onClick?: (event: MouseEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}

export const ReactSelect = createComponent({
  tagName: 'ag-select',
  elementClass: SelectWC,
  react: React,
  events: {
    onChange: 'change',
    onFocus: 'focus',
    onBlur: 'blur',
    onInput: 'input',
    onClick: 'click',
    onKeyDown: 'keydown',
    onKeyUp: 'keyup',
  },
});
