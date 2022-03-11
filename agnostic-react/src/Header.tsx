// import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';
import styles from './header.module.css';

export interface HeaderNavProps {
  css?: string;
  children: ReactNode;
}

export const HeaderNav: FC<HeaderNavProps> = ({ css = '', children }) => {
  const navClasses = [css ? `${css}` : ''].filter((c) => c).join(' ');
  return (
    <nav className={navClasses}>
      <ul className={styles.headerNav}>{children}</ul>
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
  isHeaderContentStart?: boolean;
  isHeaderContentEnd?: boolean;
  css?: string;
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({
  css = '',
  isSticky = false,
  isSkinned = true,
  isHeaderContentStart = false,
  isHeaderContentEnd = false,
  children,
}) => {
  const headerClasses = [
    isSkinned ? styles.header : styles.headerBase,
    isSticky ? styles.sticky : '',
    css ? `${css}` : '',
  ]
    .filter((c) => c.length)
    .join(' ');

  const headerContentClasses = [
    styles.headerContent,
    isHeaderContentStart ? styles.headerContentStart : '',
    isHeaderContentEnd ? styles.headerContentEnd : '',
  ]
    .filter((c) => c.length)
    .join(' ');

  return (
    <nav className={headerClasses}>
      <div className={headerContentClasses}>{children}</div>
    </nav>
  );
};
