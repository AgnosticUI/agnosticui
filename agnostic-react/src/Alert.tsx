import { FC, ReactElement } from 'react';
import styles from './alert.module.css';

export interface AlertProps {
  isToast?: boolean;
  icon?: JSX.Element;
  isRounded?: boolean;
  isBorderAll?: boolean;
  isBorderLeft?: boolean;
  isBorderRight?: boolean;
  isBorderTop?: boolean;
  isBorderBottom?: boolean;
  isBlockEnd?: boolean;
  type?: 'warning' | 'error' | 'info' | 'success' | 'dark' | '';
}

export const Alert: FC<AlertProps> = ({
  icon,
  isToast = false,
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
    // If a toast, we need to expand to the toast containing element's
    // full width so we apply the w-100 utility class
    isToast ? 'w-100' : '',
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

  // We only add aria-live and aria-atomic if this is a toast
  let ariaLiveValue;
  if (isToast && type === 'error') {
    ariaLiveValue = 'assertive';
  } else if (isToast) {
    ariaLiveValue = 'polite';
  } else {
    ariaLiveValue = undefined;
  }
  return (
    <div
      className={alertClasses}
      role="alert"
      aria-live={ariaLiveValue}
      aria-atomic={isToast ? true : undefined}
    >
      {icon || <></>}
      {children}
    </div>
  );
};
