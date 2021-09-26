"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HeaderNavItem = exports.HeaderNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _headerModule = _interopRequireDefault(require("./header.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeaderNav = function HeaderNav(_ref) {
  var children = _ref.children,
      css = _ref.css;
  var klasses = [_headerModule["default"].headerNav, css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: klasses
  }, children));
};

exports.HeaderNav = HeaderNav;
HeaderNav.propTypes = {
  children: _propTypes["default"].node,
  css: _propTypes["default"].string
};

var HeaderNavItem = function HeaderNavItem(_ref2) {
  var children = _ref2.children,
      css = _ref2.css;
  var klasses = [_headerModule["default"].headerNavItem, css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: klasses
  }, children);
};

exports.HeaderNavItem = HeaderNavItem;
HeaderNavItem.propTypes = {
  children: _propTypes["default"].node,
  css: _propTypes["default"].string
};

var Header = function Header(_ref3) {
  var children = _ref3.children,
      css = _ref3.css,
      isSticky = _ref3.isSticky,
      isSkinned = _ref3.isSkinned;
  var klasses = [isSkinned ? _headerModule["default"].header : _headerModule["default"].headerBase, isSticky ? _headerModule["default"].sticky : '', css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: klasses
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _headerModule["default"]['headerContent']
  }, children));
};

Header.propTypes = {
  children: _propTypes["default"].node,
  css: _propTypes["default"].string,
  isSticky: _propTypes["default"].bool,
  isSkinned: _propTypes["default"].bool
};
Header.defaultProps = {
  css: undefined,
  isSticky: false,
  isSkinned: true
};
var _default = Header;
exports["default"] = _default;