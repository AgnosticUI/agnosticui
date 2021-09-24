import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js'; // We can override some of the boilerplate button styles by passing the `css` prop.

import styles from './TabButtonCustom.module.css';

var TabButtonCustom = function TabButtonCustom(_ref) {
  var index = _ref.index,
      selectedTab = _ref.selectedTab,
      _onClick = _ref.onClick,
      css = _ref.css,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Button, {
    isBordered: true,
    key: "".concat(index),
    onClick: function onClick() {
      return _onClick(index);
    },
    role: "tab",
    "aria-selected": selectedTab === index,
    css: "\n        ".concat(styles.customTabButton, " ").concat(styles.active, " ").concat(css ? css : '', "\n      ")
  }, children);
};

TabButtonCustom.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.string,
  // The tab manager mixes these in via cloneElement
  index: PropTypes.number,
  selectedTab: PropTypes.number,
  // Custom tab button must call this with the current index
  onClick: PropTypes.func // isBorderless: PropTypes.bool, // ignored in this example
  // size: PropTypes.string, // ignored in this example

};
TabButtonCustom.defaultProps = {
  styles: ''
};
export default TabButtonCustom;