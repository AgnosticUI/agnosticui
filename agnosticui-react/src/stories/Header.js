import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';

export const HeaderNav = ({ children, css }) => {
  let klasses = [styles.headerNav, css ? `${css}` : ''];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(' ');
  return (
    <nav>
      <ul className={klasses}>{children}</ul>
    </nav>
  );
};

HeaderNav.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
};

export const HeaderNavItem = ({ children, css }) => {
  let klasses = [styles.headerNavItem, css ? `${css}` : ''];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(' ');
  return <li className={klasses}>{children}</li>;
};

HeaderNavItem.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
};

const Header = ({ children, css, isSticky, isSkinned }) => {
  let klasses = [
    isSkinned ? styles.header : styles.headerBase,
    isSticky ? styles.sticky : '',
    css ? `${css}` : '',
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(' ');

  return (
    <header className={klasses}>
      <div className={styles['headerContent']}>{children}</div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
  isSticky: PropTypes.bool,
  isSkinned: PropTypes.bool,
};

Header.defaultProps = {
  css: undefined,
  isSticky: false,
  isSkinned: true,
};

export default Header;
