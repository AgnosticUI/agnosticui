import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';
export var HeaderNav = function HeaderNav(_ref) {
  var children = _ref.children,
      css = _ref.css;
  var klasses = [styles.headerNav, css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    className: klasses
  }, children));
};
HeaderNav.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string
};
export var HeaderNavItem = function HeaderNavItem(_ref2) {
  var children = _ref2.children,
      css = _ref2.css;
  var klasses = [styles.headerNavItem, css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/React.createElement("li", {
    className: klasses
  }, children);
};
HeaderNavItem.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string
};

var Header = function Header(_ref3) {
  var children = _ref3.children,
      css = _ref3.css,
      isSticky = _ref3.isSticky,
      isSkinned = _ref3.isSkinned;
  var klasses = [isSkinned ? styles.header : styles.headerBase, isSticky ? styles.sticky : '', css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/React.createElement("header", {
    className: klasses
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['headerContent']
  }, children));
};

Header.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
  isSticky: PropTypes.bool,
  isSkinned: PropTypes.bool
};
Header.defaultProps = {
  css: undefined,
  isSticky: false,
  isSkinned: true
};
export default Header;