import { useEffect, useRef, FC, ReactElement } from 'react';
import styles from './pagination.module.css';

export interface NavigationLabels {
  first: string;
  previous: string;
  next: string;
  last: string;
}
export interface PaginationProps {
  /**
   * Justification of the pagination controls
   */
  justify?: 'start' | 'center' | 'end' | '';
  /**
   * Alternative aria-label (falls back to just aria-label="pagination")
   */
  ariaLabel?: string;
  /**
   * Sets current page — note that we start pages at 1
   */
  current: number;
  /**
   * List of paging items; use the usePagination hooks to generate:
   *   const paging = usePagination({ offset: 2 });
   *   const pages = paging.generate(page, 20);
   */
  pages: any[];
  /**
   * Page change events from clicking on a new page link
   *
   * @param {number} pageThe current page
   */
  onPageChange?: (page: number) => void;
  /**
   * Bordered causes active link to have border instead of solid background
   */
  isBordered?: boolean;
  /**
   * Bordered causes active link to have border instead of solid background
   */
  isFirstLast?: boolean;
  /**
   * Labels for first, previous, next, last.
   */
  navigationLabels?: NavigationLabels;
}

export const Pagination: FC<PaginationProps> = ({
  current,
  pages,
  onPageChange,
  justify = '',
  ariaLabel = 'pagination',
  isBordered = false,
  isFirstLast = true,
  navigationLabels = {
    first: 'First',
    last: 'Last',
    previous: 'Previous',
    next: 'Next',
  },
}): ReactElement => {
  const justifyCapitalized = justify
    ? `${justify.slice(0, 1).toUpperCase()}${justify.slice(1)}`
    : '';
  const paginationContainerClasses = [
    styles.paginationContainer,
    justify ? styles[`pagination${justifyCapitalized}`] : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  const paginationClasses = [styles.pagination, isBordered ? styles.paginationBordered : '']
    .filter((cls) => cls)
    .join(' ');

  const handleClick = (pageNumber: number) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  // On render / rerender of pagination we want to focus on the current
  // page button. We hold a reference so we can .focus() on it below.
  const currentButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (currentButtonRef.current) currentButtonRef.current.focus();
  }, [pages, current, currentButtonRef]);

  const getLastPageNumber = () => pages[pages.length - 1] as number;

  return (
    <nav className={paginationContainerClasses} aria-label={ariaLabel}>
      <ul className={paginationClasses}>
        {isFirstLast && (
          <li
            className={`styles.paginationItem ${
              current === 1 ? styles.paginationItemDisabled : ''
            }`}
          >
            <button
              className={styles.paginationButton}
              onClick={() => handleClick(1)}
              disabled={current === 1}
              aria-disabled={current === 1}
              aria-label="Goto page 1"
            >
              {String.fromCharCode(171)}
              {' '}
              {navigationLabels.first}
            </button>
          </li>
        )}
        <li
          className={`styles.paginationItem ${current === 1 ? styles.paginationItemDisabled : ''}`}
        >
          <button
            className={styles.paginationButton}
            onClick={() => handleClick(current - 1)}
            disabled={current === 1}
            aria-disabled={current === 1}
            aria-label="Goto previous page"
          >
            {String.fromCharCode(8249)}
            {' '}
            {navigationLabels.previous}
          </button>
        </li>
        {pages.map((page, i: number) => (page !== '...' ? (
          <li
            key={Number(i)}
            className={`${styles.paginationItem} ${
              current === page ? styles.paginationActive : ''
            }`}
          >
            {current === page ? (
              <button
                onClick={() => handleClick(page)}
                type="button"
                className={styles.paginationButton}
                aria-current="page"
                aria-label={`Page ${page}, current page`}
                ref={currentButtonRef}
              >
                {page}
              </button>
            ) : (
              <button
                onClick={() => handleClick(page)}
                type="button"
                className={styles.paginationButton}
                aria-label={`Goto page ${page}`}
              >
                {page}
              </button>
            )}
          </li>
        ) : (
          <li key={Number(i)} className={styles.paginationItem}>
            <span>{page}</span>
          </li>
        )))}
        <li
          className={`styles.paginationItem ${
            current === getLastPageNumber() ? styles.paginationItemDisabled : ''
          }`}
        >
          <button
            className={styles.paginationButton}
            onClick={() => handleClick(current + 1)}
            disabled={current === getLastPageNumber()}
            aria-disabled={current === getLastPageNumber()}
            aria-label="Goto next page"
          >
            {navigationLabels.next}
            {' '}
            {String.fromCharCode(8250)}
          </button>
        </li>
        {isFirstLast && (
          <li
            className={`styles.paginationItem ${
              current === getLastPageNumber() ? styles.paginationItemDisabled : ''
            }`}
          >
            <button
              className={styles.paginationButton}
              onClick={() => handleClick(getLastPageNumber())}
              disabled={current === getLastPageNumber()}
              aria-disabled={current === getLastPageNumber()}
              aria-label="Goto last page"
            >
              {navigationLabels.last}
              {' '}
              {String.fromCharCode(187)}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
