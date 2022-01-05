import { FC, ReactElement } from 'react';
import styles from './loader.module.css';

export interface LoaderProps {
  size?: 'small' | 'large' | '';
  ariaLabel?: string;
}

export const Loader: FC<LoaderProps> = ({ ariaLabel = 'Loading…', size = '' }): ReactElement => {
  const sizeCapitalized = size ? `${size.slice(0, 1).toUpperCase()}${size.slice(1)}` : '';
  const loaderClasses = [styles.loader, size ? styles[`loader${sizeCapitalized}`] : '']
    .filter((cls) => cls)
    .join(' ');

  return (
    <div className={loaderClasses} role="status" aria-live="polite" aria-busy="true">
      <span className="screenreader-only">{ariaLabel}</span>
    </div>
  );
};
