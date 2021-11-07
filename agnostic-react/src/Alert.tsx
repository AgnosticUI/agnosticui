import React, { FC, ReactElement } from 'react';
import styles from './alert.module.css';

export interface AlertProps {
  isRounded?: boolean;
  isBorderAll?: boolean;
  isBorderLeft?: boolean;
  isBorderRight?: boolean;
  isBorderTop?: boolean;
  isBorderBottom?: boolean;
  isBlockEnd?: boolean;
  type?: 'warning' | 'error' | 'info' | 'success' | '';
}

export const Alert: FC<AlertProps> = ({
  isRounded = false,
  isBorderAll = false,
  isBorderLeft = false,
  isBorderRight = false,
  isBorderTop = false,
  isBorderBottom = false,
  isBlockEnd = false,
  type = '',
  children,
}): ReactElement => {
  // Type might be empty string so we only capitalize if it's truthy
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';

  const alertClasses = [
    styles.alert,
    type ? styles[`alert${typeCapitalized}`] : '',
    isBorderAll ? styles.alertBorderAll : '',
    isBorderLeft ? styles.alertBorderLeft : '',
    isBorderRight ? styles.alertBorderRight : '',
    isBorderTop ? styles.alertBorderTop : '',
    isBorderBottom ? styles.alertBorderBottom : '',
    isBlockEnd ? styles.alertBlockEnd : '',
    isRounded ? styles.alertRounded : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  const svgClasses = type
    ? [styles[`alert${typeCapitalized}Icon`], styles.alertIcon].join(' ')
    : styles.alertIcon;

  return (
    <div className={alertClasses} role="alert">
      <svg
        className={svgClasses}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      {children}
    </div>
  );
};
