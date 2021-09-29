// import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';
import styles from './header.module.css';

export interface HeaderNavProps {
  css?: string;
  children: ReactNode;
}

export const HeaderNav: FC<HeaderNavProps> = ({ css = '', children }) => {
  const klasses = [styles.headerNav, css ? `${css}` : ''];
  const classes = klasses.filter((klass) => klass.length).join(' ');
  return (
    <nav>
      <ul className={classes}>{children}</ul>
    </nav>
  );
};

export interface HeaderNavItemProps {
  css?: string;
  children: ReactNode;
}
export const HeaderNavItem: FC<HeaderNavItemProps> = ({ css = '', children }) => {
  const klasses = [styles.headerNavItem, css ? `${css}` : ''];
  const classes = klasses.filter((klass) => klass.length).join(' ');
  return <li className={classes}>{children}</li>;
};

export interface HeaderProps {
  isSticky?: boolean;
  isSkinned?: boolean;
  css?: string;
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({
  css = '',
  isSticky = false,
  isSkinned = true,
  children,
}) => {
  const klasses = [
    isSkinned ? styles.header : styles.headerBase,
    isSticky ? styles.sticky : '',
    css ? `${css}` : '',
  ];
  const classes = klasses.filter((klass) => klass.length).join(' ');

  return (
    <header className={classes}>
      <div className={styles.headerContent}>{children}</div>
    </header>
  );
};
