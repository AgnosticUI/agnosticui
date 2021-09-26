"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Progress = _interopRequireDefault(require("./Progress.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'AG—React/Progress',
  component: _Progress["default"]
};
exports["default"] = _default;

var All = function All() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Progress["default"], {
    value: 30,
    max: 100
  }), /*#__PURE__*/_react["default"].createElement(_Progress["default"], {
    value: 30,
    max: 100,
    css: "foo-bar"
  }), /*#__PURE__*/_react["default"].createElement(_Progress["default"], {
    value: 0,
    max: 100,
    css: "foo-bar"
  }), /*#__PURE__*/_react["default"].createElement(_Progress["default"], {
    value: 100,
    max: 100,
    css: "foo-bar"
  }));
};

exports.All = All;