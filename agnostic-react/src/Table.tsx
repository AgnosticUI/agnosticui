import React, { FC } from 'react';
import styles from './table.module.css';

export interface TableProps {
  tableSize?: '' | 'small' | 'large' | 'xlarge';
  responsiveSize?: '' | 'small' | 'medium' | 'large' | 'xlarge';
  captionPosition?: '' | 'top' | 'bottom' | 'end';
  uppercaseHeader?: boolean;
  isBordered?: boolean;
  isBorderless?: boolean;
  isStriped?: boolean;
  isHoverable?: boolean;
  isStacked?: boolean;
}
export const Table: FC<TableProps> = ({
  responsiveSize = '',
  captionPosition = '',
  tableSize = '',
  uppercaseHeader = false,
  isBordered = false,
  isBorderless = false,
  isStriped = false,
  isHoverable = false,
  isStacked = false,
}) => {
  const captionPositionCapitalized = captionPosition
    ? `${captionPosition.slice(0, 1).toUpperCase()}${captionPosition.slice(1)}`
    : '';

  const captionClasses = captionPosition
    ? styles[`tableResponsive${captionPositionCapitalized}`]
    : '';

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
    uppercaseHeader ? styles.tableCaps : '',
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
        <caption className={captionClasses}>Tennis Superstars</caption>
        <thead>
          <tr>
            <th aria-sort="ascending" scope="col">
              <div className={styles.tableHeaderContainer}>
                <span className={styles.tableSortLabel}>Id</span>
                <button type="button" className={styles.tableSort}>
                  <span className="screenreader-only">Id</span>
                  <span className={`${styles.iconSort} ${styles.iconSortAscending}`} />
                </button>
              </div>
            </th>
            <th aria-sort="none" scope="col">
              <div className={styles.tableHeaderContainer}>
                <span className={styles.tableSortLabel}>Name</span>
                <button type="button" className={styles.tableSort}>
                  <span className="screenreader-only">Name</span>
                  <span className={styles.iconSort} />
                </button>
              </div>
            </th>
            <th scope="col">Weapon</th>
            <th aria-sort="descending" scope="col">
              <div className={styles.tableHeaderContainer}>
                <span className={styles.tableSortLabel}>Grand Slams</span>
                <button type="button" className={styles.tableSort}>
                  <span className="screenreader-only">Grand Slams</span>
                  <span className={`${styles.iconSort} ${styles.iconSortDescending}`} />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Serena Williams</td>
            <td>Biggest serve in women&apos;s tennis all-time</td>
            <td>23</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Roger Federer</td>
            <td>Forehand and Serve</td>
            <td>20</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Novak Djokovic</td>
            <td>Backhand and speed</td>
            <td>20</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Martina Navratilova</td>
            <td>Serve and volley</td>
            <td>18</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Andre Agassi (* honorable mention)</td>
            <td>Return of serve. Groundstrokes</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
