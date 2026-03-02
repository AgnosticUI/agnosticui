import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  AgSelectionButtonGroup,
  type SelectionButtonGroupProps,
  type SelectionButtonChangeEvent,
} from '../core/SelectionButtonGroup';

export interface ReactSelectionButtonGroupProps extends SelectionButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
  onSelectionChange?: (event: SelectionButtonChangeEvent) => void;
}

export const ReactSelectionButtonGroup = createComponent({
  tagName: 'ag-selection-button-group',
  elementClass: AgSelectionButtonGroup,
  react: React,
  events: {
    onSelectionChange: 'selection-change' as EventName<SelectionButtonChangeEvent>,
  },
});

export type {
  SelectionButtonGroupProps,
  SelectionButtonChangeEvent,
  SelectionButtonChangeEventDetail,
  SelectionButtonType,
} from '../core/SelectionButtonGroup';
