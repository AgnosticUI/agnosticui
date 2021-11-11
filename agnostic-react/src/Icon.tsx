import { FC, ReactElement } from 'react';
import styles from './icon.module.css';

export interface IconProps {
  isSkinned?: boolean;
  type?: 'warning' | 'error' | 'info' | 'success' | '';
  size?: 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 64;
}

export const Icon: FC<IconProps> = ({
  isSkinned = true,
  type = '',
  size = '18',
  children,
}): ReactElement => {
  // Type might be empty string so we only capitalize if it's truthy
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';

  const iconClasses = [
    isSkinned ? styles.icon : styles.iconBase,
    type ? styles[`icon${typeCapitalized}`] : '',
    size ? styles[`icon${size}`] : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  return <span className={iconClasses}>{children}</span>;
};
