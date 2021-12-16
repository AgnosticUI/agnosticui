import React, { FC, useState } from 'react';
import styles from './table.module.css';

export interface TableHeaders {
  label: string;
  key: string;
  sortable?: boolean;
}

export interface HeaderCellProps {
  headerCell: TableHeaders;
}

type Direction = 'ascending' | 'descending' | 'none';

/**
 * Header Cell Components
 */
export const HeaderCell: FC<HeaderCellProps> = ({ headerCell }) => (
  <th scope="col" key={headerCell.key}>
    {headerCell.label}
  </th>
);

export interface SortableHeaderCellProps extends HeaderCellProps {
  sortHandler: (key: string) => void;
  iconSortClasses: string;
  direction: Direction;
}

export const SortableHeaderCell: FC<SortableHeaderCellProps> = ({
  headerCell,
  sortHandler,
  direction,
  iconSortClasses,
}) => (
  <th aria-sort={direction} scope="col" key={headerCell.key}>
    <div className={styles.tableHeaderContainer}>
      <span className={styles.tableSortLabel}>{headerCell.label}</span>
      <button
        type="button"
        className={styles.tableSort}
        onClick={() => sortHandler(headerCell.key)}
      >
        <span className="screenreader-only">{headerCell.label}</span>
        <span className={iconSortClasses} />
      </button>
    </div>
  </th>
);

/**
 * Main Table Component
 */
export interface TableProps {
  headers: TableHeaders[];
  rows: any[];
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
  // TODO -- allow consumer to provide own sorting method
  // sortFn?: (a: any, b: any) => number;
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
  const [direction, setDirection] = useState<Direction>('none');
  const [sortingKey, setSortingKey] = useState('');

  const defaultSortMethod = (rowLeft: any, rowRight: any) => {
    // undef/null will go to bottom of table. Otherwise, we pluck out the column from row
    let a = rowLeft[sortingKey] === null || rowLeft[sortingKey] === undefined
      ? -Infinity
      : rowLeft[sortingKey];
    let b = rowRight[sortingKey] === null || rowRight[sortingKey] === undefined
      ? -Infinity
      : rowRight[sortingKey];

    // String values get converted to lowercase
    // if dollar currency strip extraneous (naive; not i18n safe yet)
    a = typeof a === 'string' ? a.toLowerCase().replace(/(^\$|,)/g, '') : a;
    b = typeof b === 'string' ? b.toLowerCase().replace(/(^\$|,)/g, '') : b;

    // If raw value represents a number explicitly set to Number
    a = !Number.isNaN(Number(a)) ? Number(a) : a;
    b = !Number.isNaN(Number(b)) ? Number(b) : b;

    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  };

  // Simply flips the sign of results of ascending sort
  const defaultSortDescendingMethod = (r: any, r2: any) => defaultSortMethod(r, r2) * -1;

  const sortedRows = React.useMemo(() => {
    const sortableItems = [...rows];

    // TODO -- allow consumer to optionally provide `props.sortFn` and use if exists
    if (direction === 'ascending') {
      sortableItems.sort(defaultSortMethod);
    } else if (direction === 'descending') {
      sortableItems.sort(defaultSortDescendingMethod);
    }
    // If direction was 'none' this will be the original unadultrated rows
    return sortableItems;
  }, [rows, sortingKey, direction]);

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

  const handleSortClicked = (headerKey: string): void => {
    // Our last direction state starts as the "latest direction". But, we have to account
    // for when the user clicks an entirely different sort header from the last one. In
    // this case, we always want to start anew with direction set as 'none'.
    let latestDirection = direction;
    if (sortingKey !== headerKey) {
      latestDirection = 'none';
      setSortingKey(headerKey);
    }

    switch (latestDirection) {
      case 'ascending':
        setDirection('descending');
        break;
      case 'descending':
        setDirection('none');
        break;
      case 'none':
        setDirection('ascending');
        break;
      default:
        /* eslint-disable-next-line no-console */
        console.warn('Table sorting only supports directions: ascending | descending | none');
    }

    // Here we'll need to call the actually row sorting method(s)
  };

  const getSortingClassesFor = (headerKey: string) => {
    // If it's the header currently being sorting on, add direction-based classes
    if (sortingKey === headerKey) {
      const directionCapitalized = direction
        ? `${direction.slice(0, 1).toUpperCase()}${direction.slice(1)}`
        : '';
      return [
        styles.iconSort,
        direction && direction !== 'none' ? styles[`iconSort${directionCapitalized}`] : '',
      ]
        .filter((c) => c.length)
        .join(' ');
    }
    // If not header that is currently being sorted return just base icon sort class
    return styles.iconSort;
  };

  return (
    <div className={responsiveContainerClasses}>
      <table className={tableClasses}>
        <caption className={captionClasses}>{caption}</caption>
        <thead>
          <tr>
            {headers.map((headerCell: TableHeaders) => (headerCell.sortable ? (
              <SortableHeaderCell
                key={headerCell.key}
                headerCell={headerCell}
                sortHandler={handleSortClicked}
                direction={direction}
                iconSortClasses={getSortingClassesFor(headerCell.key)}
              />
            ) : (
              <th scope="col" key={headerCell.key}>
                {headerCell.label}
              </th>
            )))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              {Object.keys(row).map((key, cIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={cIndex}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
