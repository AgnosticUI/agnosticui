"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button.js"));

var _TabButtonCustomModule = _interopRequireDefault(require("./TabButtonCustom.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// We can override some of the boilerplate button styles by passing the `css` prop.
var TabButtonCustom = function TabButtonCustom(_ref) {
  var index = _ref.index,
      selectedTab = _ref.selectedTab,
      _onClick = _ref.onClick,
      css = _ref.css,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isBordered: true,
    key: "".concat(index),
    onClick: function onClick() {
      return _onClick(index);
    },
    role: "tab",
    "aria-selected": selectedTab === index,
    css: "\n        ".concat(_TabButtonCustomModule["default"].customTabButton, " ").concat(_TabButtonCustomModule["default"].active, " ").concat(css ? css : '', "\n      ")
  }, children);
};

TabButtonCustom.propTypes = {
  children: _propTypes["default"].node.isRequired,
  css: _propTypes["default"].string,
  // The tab manager mixes these in via cloneElement
  index: _propTypes["default"].number,
  selectedTab: _propTypes["default"].number,
  // Custom tab button must call this with the current index
  onClick: _propTypes["default"].func // isBorderless: PropTypes.bool, // ignored in this example
  // size: PropTypes.string, // ignored in this example

};
TabButtonCustom.defaultProps = {
  styles: ''
};
var _default = TabButtonCustom;
exports["default"] = _default;