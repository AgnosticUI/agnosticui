import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';

const Header = ({ children, css, isSticky, isSkinned }) => {
  let klasses = [
    isSkinned ? styles.header : styles.headerBase,
    isSticky ? styles.sticky : '',
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");

  return (
    <header className={klasses}>
      <div className={styles['headerContent']}>
        foo bar
        {children}
      </div>
    </header>
  )
}

Header.propTypes = {
  css: PropTypes.string,
  isSticky: PropTypes.bool,
  isSkinned: PropTypes.bool,
}

Header.defaultProps = {
  css: undefined,
  isSticky: false,
  isSkinned: true,
}

export default Header;
