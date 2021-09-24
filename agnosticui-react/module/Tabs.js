function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css';

var TabHeader = function TabHeader(_ref) {
  var isBorderless = _ref.isBorderless,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.tabList, " ").concat(isBorderless ? styles.tabListBorderless : ''),
    role: "tablist",
    "aria-label": "Tabs"
  }, children);
};

TabHeader.propTypes = {
  isBorderless: PropTypes.bool,
  children: PropTypes.array.isRequired
};
export var TabPanel = function TabPanel(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.pane,
    "aria-label": title,
    role: "tabpanel"
  }, children);
};
TabPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
export var TabButton = function TabButton(_ref3) {
  var size = _ref3.size,
      isBorderless = _ref3.isBorderless,
      index = _ref3.index,
      selectedTab = _ref3.selectedTab,
      _onClick = _ref3.onClick,
      children = _ref3.children;

  var tabButtonClasses = function tabButtonClasses(active) {
    var klasses = [styles["tabItem"], styles["tabButton"], active ? styles['active'] : '', isBorderless ? styles.tabButtonBorderless : '', size === 'large' ? styles['tabButtonLarge'] : '', size === 'jumbo' ? styles['tabButtonJumbo'] : ''];
    return klasses.filter(function (klass) {
      return klass.length;
    }).join(' ');
  };

  return /*#__PURE__*/React.createElement("button", {
    key: "".concat(index),
    onClick: function onClick() {
      return _onClick(index);
    },
    className: tabButtonClasses(selectedTab === index),
    role: "tab",
    "aria-selected": selectedTab === index
  }, children);
};
TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  // The tab manager (aka Tabs below) mixes these in via cloneElement
  index: PropTypes.number,
  isBorderless: PropTypes.bool,
  size: PropTypes.string,
  selectedTab: PropTypes.number,
  onClick: PropTypes.func
};
TabButton.defaultProps = {
  size: '',
  isBorderless: false
};

var Tabs = function Tabs(_ref4) {
  var size = _ref4.size,
      isBorderless = _ref4.isBorderless,
      tabButtons = _ref4.tabButtons,
      tabPanels = _ref4.tabPanels;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  var selectTab = useCallback(function (index) {
    setSelectedTab(index);
  }, [setSelectedTab]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TabHeader, {
    isBorderless: isBorderless
  }, tabButtons.map(function (btn, i) {
    return /*#__PURE__*/React.cloneElement(btn, {
      key: i,
      title: btn.props.title,
      size: size,
      isBorderless: isBorderless,
      index: i,
      selectedTab: selectedTab,
      onClick: selectTab,
      children: btn.children
    }, btn.props.children);
  })), tabPanels[selectedTab]);
};

Tabs.propTypes = {
  size: PropTypes.string,
  isBorderless: PropTypes.bool,
  tabButtons: PropTypes.array.isRequired,
  tabPanels: PropTypes.array.isRequired
};
Tabs.defaultProps = {
  size: '',
  isBorderless: false
};
export default Tabs;