import { FC, ReactElement } from 'react';
import styles from './pagination.module.css';

export interface PagingLink {
  label: string;
  isDisabled?: boolean;
  isActive?: boolean;
  href?: string;
}

export interface PaginationProps {
  justify?: 'start' | 'center' | 'end' | '';
  ariaLabel?: string;
  pagingLinks: PagingLink[];
  isBordered?: boolean;
}

export const Pagination: FC<PaginationProps> = ({
  pagingLinks,
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
  /* eslint-disable no-nested-ternary */
  /* eslint-disable react/no-array-index-key */
  return (
    <nav aria-label={ariaLabel}>
      <ul className={paginationClasses}>
        {pagingLinks.map((link: PagingLink, i: number) => (link.isDisabled ? (
          <li key={i} className={`${styles.paginationItem} ${styles.paginationItemDisabled}`}>
            <a
              className={styles.paginationLink}
              href={link.href}
              aria-disabled="true"
              tabIndex={-1}
            >
              {link.label}
            </a>
          </li>
        ) : link.href ? (
          <li
            key={i}
            className={`${styles.paginationItem} ${link.isActive ? styles.paginationActive : ''}`}
          >
            <a className={styles.paginationLink} href={link.href}>
              {link.label}
            </a>
          </li>
        ) : (
        // for the ... links divider
          <li key={i} className={styles.paginationItem}>
            <span>{link.label}</span>
          </li>
        )))}
      </ul>
    </nav>
  );
};
