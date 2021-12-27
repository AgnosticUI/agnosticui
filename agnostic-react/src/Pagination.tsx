import { useEffect, useRef, FC, ReactElement } from 'react';
import styles from './pagination.module.css';
import { PageArrayItem } from './hooks/usePagination';

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
  pages: PageArrayItem[];
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
}

export const Pagination: FC<PaginationProps> = ({
  current,
  pages,
  onPageChange,
  justify = '',
  ariaLabel = 'pagination',
  isBordered = false,
  isFirstLast = true,
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
          <li className={styles.paginationItem}>
            <button
              className={styles.paginationButton}
              onClick={() => handleClick(1)}
              disabled={current < 2}
            >
              {String.fromCharCode(171)}
              {' '}
              First
            </button>
          </li>
        )}
        <li className={styles.paginationItem}>
          <button
            className={styles.paginationButton}
            onClick={() => handleClick(current - 1)}
            disabled={current < 2}
          >
            {String.fromCharCode(8249)}
            {' '}
            Previous
          </button>
        </li>
        {pages.map((link: PageArrayItem, i: number) => (link !== '...' ? (
          <li
            key={Number(i)}
            className={`${styles.paginationItem} ${
              current === link ? styles.paginationActive : ''
            }`}
          >
            {current === link ? (
              <button
                onClick={() => handleClick(link)}
                type="button"
                className={styles.paginationButton}
                ref={currentButtonRef}
              >
                {link}
              </button>
            ) : (
              <button
                onClick={() => handleClick(link)}
                type="button"
                className={styles.paginationButton}
              >
                {link}
              </button>
            )}
          </li>
        ) : (
          <li key={Number(i)} className={styles.paginationItem}>
            <span>{link}</span>
          </li>
        )))}
        <li className={styles.paginationItem}>
          <button
            className={styles.paginationButton}
            onClick={() => handleClick(current + 1)}
            disabled={current === getLastPageNumber()}
          >
            Next
            {' '}
            {String.fromCharCode(8250)}
          </button>
        </li>
        {isFirstLast && (
          <li className={styles.paginationItem}>
            <button
              className={styles.paginationButton}
              onClick={() => handleClick(getLastPageNumber())}
              disabled={current === getLastPageNumber()}
            >
              Last
              {' '}
              {String.fromCharCode(187)}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
