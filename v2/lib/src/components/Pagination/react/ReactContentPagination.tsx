import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  ContentPagination,
  type ContentPaginationProps,
  type NavigateEvent,
} from '../core/ContentPagination';

/**
 * React-specific props interface for ContentPagination component
 * Extends core ContentPaginationProps with React-specific additions
 */
export interface ReactContentPaginationProps extends ContentPaginationProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

// Create ContentPagination component with @lit/react
export const ReactContentPagination = createComponent({
  tagName: 'ag-content-pagination',
  elementClass: ContentPagination,
  react: React,
  events: {
    onNavigate: 'navigate' as EventName<NavigateEvent>,
  },
});

// Re-export event types
export type {
  NavigateEvent,
  NavigateEventDetail,
  ContentNavigationItem,
} from '../core/ContentPagination';
