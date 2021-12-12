import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  css?: string;
  isSkinned?: boolean;
  isAnimated?: boolean;
  isStacked?: boolean;
  isShadow?: boolean;
  isBorder?: boolean;
  isRounded?: boolean;
  type?: 'success' | 'info' | 'warning' | 'error';
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({
  isAnimated = false,
  isStacked = false,
  isShadow = false,
  isBorder = false,
  isRounded = false,
  isSkinned = true,
  css = '',
  type,
  children,
}) => {
  // Type might be empty string so we only capitalize if it's truthy
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';

  const classes = [
    isSkinned ? styles.card : styles.cardBase,
    isAnimated ? styles.cardAnimated : '',
    isStacked ? styles.cardStacked : '',
    isShadow ? styles.cardShadow : '',
    isRounded ? styles.cardRounded : '',
    isBorder ? styles.cardBorder : '',
    type ? styles[`card${typeCapitalized}`] : '',
    css ? `${css}` : '',
  ]
    .filter((cls) => cls.length)
    .join(' ');

  return <div className={classes}>{children}</div>;
};
