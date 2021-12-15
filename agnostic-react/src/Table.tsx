import React, { FC } from 'react';
import styles from './table.module.css';

export interface TableHeaders {
  label: string;
  key: string;
  sortable?: boolean;
  sortFn?: (a: any, b: any) => number;
}

export interface TableRows {
  id: number;
  name: string;
  weapon: string;
  slams: number;
}

export interface TableProps {
  headers: TableHeaders[];
  rows: TableRows[];
  tableSize?: '' | 'small' | 'large' | 'xlarge';
  responsiveSize?: '' | 'small' | 'medium' | 'large' | 'xlarge';
  captionPosition?: 'top' | 'bottom' | 'end' | 'hidden';
  caption: string;
  isUppercasedHeaders?: boolean;
  isBordered?: boolean;
  isBorderless?: boolean;
  isStriped?: boolean;
  isHoverable?: boolean;
  isStacked?: boolean;
}
export const Table: FC<TableProps> = ({
  headers,
  rows,
  caption,
  captionPosition = 'hidden',
  responsiveSize = '',
  tableSize = '',
  isUppercasedHeaders = false,
  isBordered = false,
  isBorderless = false,
  isStriped = false,
  isHoverable = false,
  isStacked = false,
}) => {
  const captionPositionCapitalized = captionPosition
    ? `${captionPosition.slice(0, 1).toUpperCase()}${captionPosition.slice(1)}`
    : '';

  let captionClasses;
  if (captionPosition === 'hidden') {
    captionClasses = 'screenreader-only';
  } else {
    captionClasses = styles[`tableResponsive${captionPositionCapitalized}`];
  }

  const responsiveSizeCapitalized = responsiveSize
    ? `${responsiveSize.slice(0, 1).toUpperCase()}${responsiveSize.slice(1)}`
    : '';

  const responsiveContainerClasses = responsiveSize
    ? styles[`tableResponsive${responsiveSizeCapitalized}`]
    : styles.tableResponsive;

  const tableSizeCapitalized = tableSize
    ? `${tableSize.slice(0, 1).toUpperCase()}${tableSize.slice(1)}`
    : '';

  const tableClasses = [
    styles.table,
    tableSize ? styles[`table${tableSizeCapitalized}`] : '',
    isUppercasedHeaders ? styles.tableCaps : '',
    isBordered ? styles.tableBordered : '',
    isBorderless ? styles.tableBorderless : '',
    isStriped ? styles.tableStriped : '',
    isHoverable ? styles.tableHoverable : '',
    isStacked ? styles.tableStacked : '',
  ]
    .filter((cl) => cl)
    .join(' ');

  return (
    <div className={responsiveContainerClasses}>
      <table className={tableClasses}>
        <caption className={captionClasses}>{caption}</caption>
        <thead>
          <tr>
            {headers.map((headerCell) => (headerCell.sortable ? (
              <th aria-sort="none" scope="col" key={headerCell.key}>
                <div className={styles.tableHeaderContainer}>
                  <span className={styles.tableSortLabel}>{headerCell.label}</span>
                  <button type="button" className={styles.tableSort}>
                    <span className="screenreader-only">{headerCell.label}</span>
                    <span className={`${styles.iconSort}`} />
                  </button>
                </div>
              </th>
            ) : (
              <th scope="col" key={headerCell.key}>
                {headerCell.label}
              </th>
            )))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.weapon}</td>
              <td>{row.slams}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
