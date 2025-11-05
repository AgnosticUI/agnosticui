import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  Pagination,
  type PaginationProps,
  type PageChangeEvent,
} from '../core/Pagination';

/**
 * React-specific props interface for Pagination component
 * Extends core PaginationProps with React-specific additions
 */
export interface ReactPaginationProps extends PaginationProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

// Create Pagination component with @lit/react
export const ReactPagination = createComponent({
  tagName: 'ag-pagination',
  elementClass: Pagination,
  react: React,
  events: {
    onPageChange: 'page-change' as EventName<PageChangeEvent>,
  },
});

// Re-export event types
export type { PageChangeEvent, PageChangeEventDetail } from '../core/Pagination';
