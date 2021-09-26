"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderSticky = exports.HeaderUnskinned = exports.HeaderAndNav = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireWildcard(require("./Header.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'AG—React/Header',
  component: _Header["default"]
};
exports["default"] = _default;

var HeaderAndNav = function HeaderAndNav() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    css: "custom-global-css-class"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "LOGO"), /*#__PURE__*/_react["default"].createElement(_Header.HeaderNav, null, /*#__PURE__*/_react["default"].createElement(_Header.HeaderNavItem, {
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: '#333333',
      textDecoration: 'none'
    },
    href: "#"
  }, "Home")), /*#__PURE__*/_react["default"].createElement(_Header.HeaderNavItem, {
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: '#333333',
      textDecoration: 'none'
    },
    href: "#"
  }, "Services")), /*#__PURE__*/_react["default"].createElement(_Header.HeaderNavItem, {
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: '#333333',
      textDecoration: 'none'
    },
    href: "#"
  }, "About")), /*#__PURE__*/_react["default"].createElement(_Header.HeaderNavItem, {
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: '#333333',
      textDecoration: 'none'
    },
    href: "#"
  }, "Contact"))))));
};

exports.HeaderAndNav = HeaderAndNav;

var HeaderUnskinned = function HeaderUnskinned() {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    isSkinned: false
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "NO-Skinz"), /*#__PURE__*/_react["default"].createElement(_Header.HeaderNav, null, /*#__PURE__*/_react["default"].createElement(_Header.HeaderNavItem, null, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: '#333333',
      textDecoration: 'none'
    },
    href: "#"
  }, "Not Skinned")))));
};

exports.HeaderUnskinned = HeaderUnskinned;

var HeaderSticky = function HeaderSticky() {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    isSticky: true
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Logo"), /*#__PURE__*/_react["default"].createElement(_Header.HeaderNav, null, /*#__PURE__*/_react["default"].createElement(_Header.HeaderNavItem, null, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: '#333333',
      textDecoration: 'none'
    },
    href: "#"
  }, "Sticky")))));
};

exports.HeaderSticky = HeaderSticky;