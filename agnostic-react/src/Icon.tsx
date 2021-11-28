import { FC, ReactElement } from 'react';

// We receive SVG as children. But, we need width CSS applied to the SVG itself
// in Safari; so we have to use global CSS like: `.icon-24 > :global(svg) { width: 24px }`
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
  const iconClasses = [
    isSkinned ? styles.icon : styles['icon-base'],
    type ? styles[`icon-${type}`] : '',
    size ? styles[`icon-${size}`] : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  return <span className={iconClasses}>{children}</span>;
};
