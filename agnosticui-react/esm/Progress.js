"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _progressModule = _interopRequireDefault(require("./progress.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Progress = function Progress(_ref) {
  var value = _ref.value,
      max = _ref.max,
      css = _ref.css;
  var klasses = [_progressModule["default"].progressBar, css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/_react["default"].createElement("progress", {
    className: klasses,
    value: value,
    max: max
  });
};

Progress.propTypes = {
  value: _propTypes["default"].number,
  max: _propTypes["default"].number.isRequired,
  css: _propTypes["default"].string
};
Progress.defaultProps = {
  value: 0,
  css: undefined
};
var _default = Progress;
exports["default"] = _default;