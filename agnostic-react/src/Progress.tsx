import { FC } from 'react';
import styles from './progress.module.css';

export interface ProgressProps {
  max: number;
  value?: number;
  css?: string;
}

export const Progress: FC<ProgressProps> = ({ value = 0, max, css = '' }) => {
  const klasses = [styles.progressBar, css ? `${css}` : ''];
  const classes = klasses.filter((klass) => klass.length).join(' ');
  return <progress className={classes} value={value} max={max} />;
};
