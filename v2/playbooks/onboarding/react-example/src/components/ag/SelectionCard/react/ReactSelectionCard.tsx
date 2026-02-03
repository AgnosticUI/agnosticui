import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgSelectionCard, type SelectionCardProps } from '../core/SelectionCard';

export interface ReactSelectionCardProps extends SelectionCardProps {
  children?: React.ReactNode;
  className?: string;
}

export const ReactSelectionCard = createComponent({
  tagName: 'ag-selection-card',
  elementClass: AgSelectionCard,
  react: React,
});

export type { SelectionCardProps } from '../core/SelectionCard';
