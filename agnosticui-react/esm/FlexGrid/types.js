"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportSizeType = exports.ColumnSizeType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ColumnSizeType = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool]);

exports.ColumnSizeType = ColumnSizeType;

var ViewportSizeType = _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

exports.ViewportSizeType = ViewportSizeType;