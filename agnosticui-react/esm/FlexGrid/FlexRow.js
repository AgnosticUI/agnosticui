"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowProps = getRowProps;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("./classNames"));

var _createProps = _interopRequireDefault(require("./createProps"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];
var propTypes = {
  reverse: _propTypes["default"].bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _propTypes["default"].string,
  tagName: _propTypes["default"].string,
  children: _propTypes["default"].node
};

function getRowClassNames(props) {
  var modifiers = [props.className, (0, _classNames["default"])('row')];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];

    if (value) {
      modifiers.push((0, _classNames["default"])("".concat(key, "-").concat(value)));
    }
  }

  if (props.reverse) {
    modifiers.push((0, _classNames["default"])('reverse'));
  }

  return modifiers;
}

function getRowProps(props) {
  var rowPropsCreated = (0, _createProps["default"])(propTypes, props, getRowClassNames(props));
  return rowPropsCreated;
}

var FlexRow = function FlexRow(props) {
  return /*#__PURE__*/_react["default"].createElement(props.tagName || 'div', getRowProps(props));
};

FlexRow.propTypes = propTypes;
var _default = FlexRow;
exports["default"] = _default;