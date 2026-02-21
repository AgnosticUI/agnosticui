import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  AgSelectionCardGroup,
  type SelectionCardGroupProps,
  type SelectionChangeEvent,
} from '../core/SelectionCardGroup';

export interface ReactSelectionCardGroupProps extends SelectionCardGroupProps {
  children?: React.ReactNode;
  className?: string;
  onSelectionChange?: (event: SelectionChangeEvent) => void;
}

export const ReactSelectionCardGroup = createComponent({
  tagName: 'ag-selection-card-group',
  elementClass: AgSelectionCardGroup,
  react: React,
  events: {
    onSelectionChange: 'selection-change' as EventName<SelectionChangeEvent>,
  },
});

export type {
  SelectionCardGroupProps,
  SelectionChangeEvent,
  SelectionChangeEventDetail,
  SelectionType,
} from '../core/SelectionCardGroup';
