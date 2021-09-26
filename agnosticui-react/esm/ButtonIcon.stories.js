"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonIcons = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'AG—React/ButtonIcons',
  component: _Button["default"]
};
exports["default"] = _default;

var SampleSvgIcon = function SampleSvgIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "btn-icon",
    role: "img",
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "16",
    height: "16",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("desc", null, "Example icon graphic"), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"
  }));
};

var ButtonIcons = function ButtonIcons() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary"
  }, /*#__PURE__*/_react["default"].createElement(SampleSvgIcon, null), "Icon Left")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary"
  }, "Icon Right", /*#__PURE__*/_react["default"].createElement(SampleSvgIcon, null))));
};

exports.ButtonIcons = ButtonIcons;