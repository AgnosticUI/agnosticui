import { createComponent } from '@lit/react';
import React from 'react';
import { AgEmptyState, type EmptyStateProps } from '../core/EmptyState';

export interface ReactEmptyStateProps extends EmptyStateProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactEmptyState = createComponent({
  tagName: 'ag-empty-state',
  elementClass: AgEmptyState,
  react: React,
  events: {
    // No custom events for EmptyState
  },
});
