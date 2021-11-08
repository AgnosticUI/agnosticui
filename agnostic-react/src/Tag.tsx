import { FC, ReactElement } from 'react';
import styles from './tag.module.css';

export interface TagProps {
  isUppercase?: boolean;
  type?: 'warning' | 'error' | 'info' | 'success' | '';
  shape?: 'pill' | 'round' | 'circle' | '';
}

export const Tag: FC<TagProps> = ({
  isUppercase = false,
  type = '',
  shape = '',
  children,
}): ReactElement => {
  // Type might be empty string so we only capitalize if it's truthy
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';
  const shapeCapitalized = shape ? `${shape.slice(0, 1).toUpperCase()}${shape.slice(1)}` : '';

  const tagClasses = [
    styles.tag,
    type ? styles[`tag${typeCapitalized}`] : '',
    shape ? styles[`tag${shapeCapitalized}`] : '',
    isUppercase ? styles.tagUpper : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  return <span className={tagClasses}>{children}</span>;
};
