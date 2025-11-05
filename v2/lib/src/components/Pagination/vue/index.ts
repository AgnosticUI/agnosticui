export { default } from './VuePagination.vue';
export { default as VuePagination } from './VuePagination.vue';

// Re-export types from core for convenience
export type { PageChangeEventDetail, PageChangeEvent } from '../core/Pagination';

/**
 * Props for VuePagination component
 */
export interface VuePaginationProps {
  current?: number;
  totalPages?: number;
  offset?: 1 | 2;
  justify?: 'start' | 'center' | 'end' | '';
  ariaLabel?: string;
  bordered?: boolean;
  firstLastNavigation?: boolean;
  navigationLabels?: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}

/**
 * Props with event handlers for programmatic usage (e.g., Storybook, testing, imperative APIs)
 * In Vue templates, use @page-change instead of :onPageChange
 */
export interface VuePaginationPropsWithEvents extends VuePaginationProps {
  onPageChange?: (detail: { page: number; pages: (number | '...')[] }) => void;
}
