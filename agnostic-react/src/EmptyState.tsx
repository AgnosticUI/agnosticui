import { FC, ReactElement } from 'react';
import styles from './empty-state.module.css';

export const EmptyStateHeader: FC = ({ children }): ReactElement => <>{children}</>;
export const EmptyStateBody: FC = ({ children }): ReactElement => <>{children}</>;
export const EmptyStateFooter: FC = ({ children }): ReactElement => (
  <div className={styles.emptyActions}>{children}</div>
);

export interface EmptyStateProps {
  isBordered?: boolean;
  isRounded?: boolean;
  children: ReactElement;
}

export const EmptyState: FC<EmptyStateProps> = ({
  isBordered = false,
  isRounded = false,
  children,
}): ReactElement => {
  const emptyClasses = [
    styles.empty,
    isRounded ? styles.emptyRounded : '',
    isBordered ? styles.emptyBordered : '',
  ]
    .filter((c) => c)
    .join(' ');

  return <div className={emptyClasses}>{children}</div>;
};
