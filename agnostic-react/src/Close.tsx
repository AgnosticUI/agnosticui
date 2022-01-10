import { FC, ReactElement } from 'react';
import styles from './close.module.css';

export interface CloseProps {
  size?: 'small' | 'large' | 'xlarge' | '';
}

export const CloseButtonIcon = () => (
  <svg className={styles.close} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
    />
  </svg>
);

export const closeButtonContainerClasses = ({ size = '' }: CloseProps): string => {
  // Type might be empty string so we only capitalize if it's truthy
  const sizeCapitalized = size ? `${size.slice(0, 1).toUpperCase()}${size.slice(1)}` : '';

  const closeClasses = [styles.closeButton, size ? styles[`closeButton${sizeCapitalized}`] : '']
    .filter((cls) => cls)
    .join(' ');
  return closeClasses;
};

export const Close: FC<CloseProps> = ({ size = '' }): ReactElement => (
  <button className={closeButtonContainerClasses({ size })} aria-label="Close">
    <CloseButtonIcon />
  </button>
);
