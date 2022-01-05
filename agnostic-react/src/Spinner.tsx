import { FC, ReactElement } from 'react';
import styles from './spinner.module.css';

export interface SpinnerProps {
  size?: 'small' | 'large' | 'xlarge' | '';
  ariaLabel?: string;
}

export const Spinner: FC<SpinnerProps> = ({ ariaLabel = 'Loading…', size = '' }): ReactElement => {
  const sizeCapitalized = size ? `${size.slice(0, 1).toUpperCase()}${size.slice(1)}` : '';
  const spinnerClasses = [styles.spinner, size ? styles[`spinner${sizeCapitalized}`] : '']
    .filter((cls) => cls)
    .join(' ');

  return (
    <div className={spinnerClasses} role="status" aria-live="polite" aria-busy="true">
      <span className="screenreader-only">{ariaLabel}</span>
    </div>
  );
};
