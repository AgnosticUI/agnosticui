import { useEffect, useRef, FC, ReactElement, MouseEvent } from 'react';
import styles from './pagination.module.css';
import { PageArrayItem } from './hooks/usePagination';

export interface PagingLink {
  label: string;
  isDisabled?: boolean;
  isActive?: boolean;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export interface PaginationProps {
  justify?: 'start' | 'center' | 'end' | '';
  ariaLabel?: string;
  pagingLinks: PagingLink[];
  isBordered?: boolean;
}

export interface Pagination2Props {
  justify?: 'start' | 'center' | 'end' | '';
  ariaLabel?: string;
  current: number;
  pages: PageArrayItem[];
  onPageChange?: (page: number) => void;
  isBordered?: boolean;
}

export const Pagination: FC<Pagination2Props> = ({
  current,
  pages,
  onPageChange,
  justify = '',
  ariaLabel = 'pagination',
  isBordered = false,
}): ReactElement => {
  const justifyCapitalized = justify
    ? `${justify.slice(0, 1).toUpperCase()}${justify.slice(1)}`
    : '';
  const paginationClasses = [
    styles.pagination,
    isBordered ? styles.paginationBordered : '',
    justify ? styles[`pagination${justifyCapitalized}`] : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  const handleClick = (pageNumber: number) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  // On render / rerender of pagination links we want to focus on the current page button
  const currentButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (currentButtonRef.current) currentButtonRef.current.focus();
  }, [pages, current, currentButtonRef]);

  return (
    <nav aria-label={ariaLabel}>
      <h1>TODO -- implement first, previous, next, and last</h1>
      <button>First</button>
      <button>Previous</button>
      <ul className={paginationClasses}>
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
                className={styles.paginationLink}
                ref={currentButtonRef}
              >
                {link}
              </button>
            ) : (
              <button
                onClick={() => handleClick(link)}
                type="button"
                className={styles.paginationLink}
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
      </ul>
      <button>Next</button>
      <button>Last</button>
    </nav>
  );
};
