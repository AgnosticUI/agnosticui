"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabButton = exports.TabPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tabsModule = _interopRequireDefault(require("./tabs.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TabHeader = function TabHeader(_ref) {
  var isBorderless = _ref.isBorderless,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_tabsModule["default"].tabList, " ").concat(isBorderless ? _tabsModule["default"].tabListBorderless : ''),
    role: "tablist",
    "aria-label": "Tabs"
  }, children);
};

TabHeader.propTypes = {
  isBorderless: _propTypes["default"].bool,
  children: _propTypes["default"].array.isRequired
};

var TabPanel = function TabPanel(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _tabsModule["default"].pane,
    "aria-label": title,
    role: "tabpanel"
  }, children);
};

exports.TabPanel = TabPanel;
TabPanel.propTypes = {
  title: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired
};

var TabButton = function TabButton(_ref3) {
  var size = _ref3.size,
      isBorderless = _ref3.isBorderless,
      index = _ref3.index,
      selectedTab = _ref3.selectedTab,
      _onClick = _ref3.onClick,
      children = _ref3.children;

  var tabButtonClasses = function tabButtonClasses(active) {
    var klasses = [_tabsModule["default"]["tabItem"], _tabsModule["default"]["tabButton"], active ? _tabsModule["default"]['active'] : '', isBorderless ? _tabsModule["default"].tabButtonBorderless : '', size === 'large' ? _tabsModule["default"]['tabButtonLarge'] : '', size === 'jumbo' ? _tabsModule["default"]['tabButtonJumbo'] : ''];
    return klasses.filter(function (klass) {
      return klass.length;
    }).join(' ');
  };

  return /*#__PURE__*/_react["default"].createElement("button", {
    key: "".concat(index),
    onClick: function onClick() {
      return _onClick(index);
    },
    className: tabButtonClasses(selectedTab === index),
    role: "tab",
    "aria-selected": selectedTab === index
  }, children);
};

exports.TabButton = TabButton;
TabButton.propTypes = {
  children: _propTypes["default"].node.isRequired,
  // The tab manager (aka Tabs below) mixes these in via cloneElement
  index: _propTypes["default"].number,
  isBorderless: _propTypes["default"].bool,
  size: _propTypes["default"].string,
  selectedTab: _propTypes["default"].number,
  onClick: _propTypes["default"].func
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

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  var selectTab = (0, _react.useCallback)(function (index) {
    setSelectedTab(index);
  }, [setSelectedTab]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(TabHeader, {
    isBorderless: isBorderless
  }, tabButtons.map(function (btn, i) {
    return /*#__PURE__*/_react["default"].cloneElement(btn, {
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
  size: _propTypes["default"].string,
  isBorderless: _propTypes["default"].bool,
  tabButtons: _propTypes["default"].array.isRequired,
  tabPanels: _propTypes["default"].array.isRequired
};
Tabs.defaultProps = {
  size: '',
  isBorderless: false
};
var _default = Tabs;
exports["default"] = _default;