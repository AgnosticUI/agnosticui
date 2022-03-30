import React, { FC, useState } from 'react';
import styles from './table.module.css';

export interface TableHeaderCell {
  label: string;
  key: string;
  sortable?: boolean;
  width?: string;
  // This is just a render prop allowing the consumer to put custom markup for the row cell
  // https://reactjs.org/docs/render-props.html#using-props-other-than-render
  renderFn?: (rowKey: string, rowValue: string) => React.ReactElement;
  /**
   * Custom sorting `compareFunction` which will take the values from the
   * two respective row cells being compared.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
   */
  sortFn?: (cellLeft: any, cellRight: any) => -1 | 0 | 1;
}

/**
 * Header Cell Components
 * A th cell that only has a label like <th scope="col">foo</th>
 */
export interface HeaderCellProps {
  headerCell: TableHeaderCell;
}

export const HeaderCell: FC<HeaderCellProps> = ({ headerCell }) => (
  <th scope="col" key={headerCell.key} style={headerCell.width ? { width: headerCell.width } : {}}>
    {headerCell.label}
  </th>
);

/**
 * Sortable Header Cell Components
 * A th cell that has sorting enabled and thus a table sort button to sort
 * the rows by this column's key.
 */
export type Direction = 'ascending' | 'descending' | 'none';
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
  <th
    aria-sort={direction}
    scope="col"
    key={headerCell.key}
    style={headerCell.width ? { width: headerCell.width } : {}}
  >
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
  headers: TableHeaderCell[];
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

  /**
   * Plucks the columns from rows by key of the current sortingKey; sortingKey
   * reflects the currently being sorted column due to user interaction e.g. they
   * have clicked on that columns table header cell.
   *
   * Since we want to sort rows but by column comparisons, we need to "pluck out"
   * these columns from the two rows. If we cannot find the columns in rows by the
   * `sortingKey`, then we set these to `-Infinity` which places them at the bottom.
   *
   * @param rowLeft left row to compare
   * @param rowRight right row to compare
   * @returns Normalized columns from both rows in form of { a:a, b:b }
   */
  const pluckColumnToSort = (rowLeft: any, rowRight: any) => {
    const colLeft = rowLeft[sortingKey] === null || rowLeft[sortingKey] === undefined
      ? -Infinity
      : rowLeft[sortingKey];
    const colRight = rowRight[sortingKey] === null || rowRight[sortingKey] === undefined
      ? -Infinity
      : rowRight[sortingKey];
    return {
      colLeft,
      colRight,
    };
  };

  /**
   * This function first checks if there is a corresponding custom sort function
   * that was supplied in a header cell with key" of `sortingKey` named `.sortFn`
   * per the API. If it finds, it will delegate to that for actual sort comparison.
   * Otherwise, the function supplies its own fallback default (naive) sorting logic.
   * @param rowLeft left row to compare
   * @param rowRight right row to compare
   * @returns Standard `Array.sort`'s `compareFunction` return of 0, -1, or 1
   */
  const internalSort = (rowLeft: any, rowRight: any) => {
    let { colLeft, colRight } = pluckColumnToSort(rowLeft, rowRight);
    /**
     * First check if the corresponding header cell has a custom sort
     * method. If so, we use that, else we proceed with our default one.
     */
    const headerWithCustomSortFunction = headers.find(
      (h: TableHeaderCell) => h.key === sortingKey && !!h.sortFn,
    );
    if (headerWithCustomSortFunction && headerWithCustomSortFunction.sortFn) {
      return headerWithCustomSortFunction.sortFn(colLeft, colRight);
    }

    // No custom sort method for the header cell, so we continue with our own.
    // Strings converted to lowercase; dollar currency etc. stripped (not yet i18n safe!)
    colLeft = typeof colLeft === 'string' ? colLeft.toLowerCase().replace(/(^\$|,)/g, '') : colLeft;
    colRight = typeof colRight === 'string' ? colRight.toLowerCase().replace(/(^\$|,)/g, '') : colRight;

    // If raw value represents a number explicitly set to Number
    colLeft = !Number.isNaN(Number(colLeft)) ? Number(colLeft) : colLeft;
    colRight = !Number.isNaN(Number(colRight)) ? Number(colRight) : colRight;

    if (colLeft > colRight) {
      return 1;
    }
    if (colLeft < colRight) {
      return -1;
    }
    return 0;
  };

  // Simply flips the sign of results of the ascending sort
  const descendingSort = (r: any, r2: any) => internalSort(r, r2) * -1;

  /**
   * This memoized function is what actually sorts the array of items. It relies
   * on state updates, but just delegates to the other sorting routines.
   */
  const sortedRows = React.useMemo(() => {
    const sortableItems = [...rows];
    if (direction === 'ascending') {
      sortableItems.sort(internalSort);
    } else if (direction === 'descending') {
      sortableItems.sort(descendingSort);
    }
    // If direction was 'none' this will be the original unadultrated rows
    return sortableItems;
  }, [rows, sortingKey, direction]);

  /**
   * Updates sorting states: `direction` and `sortingKey` when a `SortableHeaderCell` clicked
   * @param headerKey the key of this header cell
   */
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
  };

  /**
   * Generates th header cell classes on `SortableHeaderCell`'s which are used to
   * display the appropriate sorting icons.
   * @param headerKey the key of this header cell
   * @returns CSS classes appropriate for the `SortableHeaderCell`'s current sorting state
   */
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
    // If not currently being sorted apply base class only
    return styles.iconSort;
  };

  /**
   * CSS class generation routines
   */
  const captionPositionCapitalized = captionPosition
    ? `${captionPosition.slice(0, 1).toUpperCase()}${captionPosition.slice(1)}`
    : '';

  let captionClasses;
  if (captionPosition === 'hidden') {
    captionClasses = 'screenreader-only';
  } else {
    captionClasses = styles[`caption${captionPositionCapitalized}`];
  }

  const tableResponsiveSizeCapitalized = responsiveSize
    ? `${responsiveSize.slice(0, 1).toUpperCase()}${responsiveSize.slice(1)}`
    : '';

  const tableResponsiveClasses = responsiveSize
    ? styles[`tableResponsive${tableResponsiveSizeCapitalized}`]
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
    <div className={tableResponsiveClasses}>
      <table className={tableClasses}>
        <caption className={captionClasses}>{caption}</caption>
        <thead>
          <tr>
            {headers.map((headerCell: TableHeaderCell) => (headerCell.sortable ? (
              <SortableHeaderCell
                key={headerCell.key}
                headerCell={headerCell}
                sortHandler={handleSortClicked}
                direction={direction}
                iconSortClasses={getSortingClassesFor(headerCell.key)}
              />
            ) : (
              <HeaderCell headerCell={headerCell} key={headerCell.key} />
            )))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              {Object.keys(row).map((key, cIndex) => (headers[cIndex].renderFn ? (
                  headers[cIndex].renderFn!(key, row[key])
              ) : (
              // eslint-disable-next-line react/no-array-index-key
                <td key={cIndex}>{row[key]}</td>
              )))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
