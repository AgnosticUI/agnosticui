import { FC, ReactElement } from 'react';
import styles from './alert.module.css';

export interface AlertProps {
  icon?: JSX.Element;
  isRounded?: boolean;
  isBorderAll?: boolean;
  isBorderLeft?: boolean;
  isBorderRight?: boolean;
  isBorderTop?: boolean;
  isBorderBottom?: boolean;
  isBlockEnd?: boolean;
  type?: 'warning' | 'error' | 'info' | 'success' | 'dark' | '';
  horizontalPosition?: 'start' | 'center' | 'end';
  verticalPosition?: 'top' | 'bottom';
}

export const Alert: FC<AlertProps> = ({
  icon,
  isRounded = false,
  isBorderAll = false,
  isBorderLeft = false,
  isBorderRight = false,
  isBorderTop = false,
  isBorderBottom = false,
  isBlockEnd = false,
  horizontalPosition,
  verticalPosition,
  type = '',
  children,
}): ReactElement => {
  // Type might be empty string so we only capitalize if it's truthy
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';
  const isToast = !!(horizontalPosition || verticalPosition);

  const alertClasses = [
    styles.alert,
    horizontalPosition || '',
    verticalPosition || '',
    isToast ? styles.alertToast : '',
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
