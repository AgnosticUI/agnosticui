import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgSelectionButton, type SelectionButtonProps } from '../core/SelectionButton';

export interface ReactSelectionButtonProps extends SelectionButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const ReactSelectionButton = createComponent({
  tagName: 'ag-selection-button',
  elementClass: AgSelectionButton,
  react: React,
});

export type { SelectionButtonProps } from '../core/SelectionButton';
