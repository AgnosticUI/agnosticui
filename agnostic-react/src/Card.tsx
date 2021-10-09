import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  css?: string;
  isSkinned?: boolean;
  isAnimated?: boolean;
  isStacked?: boolean;
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({
  isAnimated = false,
  isStacked = false,
  isSkinned = true,
  css = '',
  children,
}) => {
  const klasses = [
    isSkinned ? styles.card : styles.cardBase,
    isAnimated ? styles.cardAnimated : '',
    isStacked ? styles.cardStacked : '',
    css ? `${css}` : '',
  ];
  const classes = klasses.filter((klass) => klass.length).join(' ');

  return <div className={classes}>{children}</div>;
};
