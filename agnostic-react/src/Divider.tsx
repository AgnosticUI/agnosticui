import { FC, ReactElement } from 'react';
import styles from './divider.module.css';

export interface DividerProps {
  isVertical?: boolean;
  justify?: 'start' | 'end' | '';
  size?: 'small' | 'large' | 'xlarge' | '';
  type?: 'info' | 'success' | 'warning' | 'error' | '';
  children?: ReactElement;
}
export const Divider: FC<DividerProps> = ({
  isVertical = false,
  justify = '',
  size = '',
  type = '',
  children,
}): ReactElement => {
  const sizeCapitalized = size ? `${size.slice(0, 1).toUpperCase()}${size.slice(1)}` : '';
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';
  const justifyCapitalized = justify
    ? `${justify.slice(0, 1).toUpperCase()}${justify.slice(1)}`
    : '';

  const dividerClasses = [
    styles.divider,
    isVertical ? styles.dividerVertical : '',
    size ? styles[`divider${sizeCapitalized}`] : '',
    type ? styles[`divider${typeCapitalized}`] : '',
    justify ? styles[`divider${justifyCapitalized}`] : '',
  ]
    .filter((cl) => cl)
    .join(' ');

  return (
    <>
      <div className={dividerClasses}>
        {children && <div className={styles.dividerContent}>{children}</div>}
      </div>
    </>
  );
};
