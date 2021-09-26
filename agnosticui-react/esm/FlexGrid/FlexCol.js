"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = getColumnProps;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createProps = _interopRequireDefault(require("./createProps"));

var _classNames = _interopRequireDefault(require("./classNames"));

var _types = require("./types");

var _excluded = ["tagName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** xs - number of units when viewport is "extra small" */
  xs: _types.ColumnSizeType,

  /** sm - number of units when viewport is "small" */
  sm: _types.ColumnSizeType,

  /** md - number of units when viewport is "medium" */
  md: _types.ColumnSizeType,

  /** lg - number of units when viewport is "large" */
  lg: _types.ColumnSizeType,

  /** xl - number of units when viewport is "extra large" */
  xl: _types.ColumnSizeType,

  /** xsOffset - number of units to offset when viewport is "extra small" */
  xsOffset: _propTypes["default"].number,

  /** smOffset - number of units to offset when viewport is "small" */
  smOffset: _propTypes["default"].number,

  /** mdOffset - number of units to offset when viewport is "medium" */
  mdOffset: _propTypes["default"].number,

  /** lgOffset - number of units to offset when viewport is "large" */
  lgOffset: _propTypes["default"].number,

  /** xlOffset - number of units to offset when viewport is "extra large" */
  xlOffset: _propTypes["default"].number,

  /** first - Forces a column to appear first */
  first: _types.ViewportSizeType,

  /** last - Forces a column to appear last */
  last: _types.ViewportSizeType,

  /** className - additional custom class to use */
  className: _propTypes["default"].string,

  /** tagName - tag to use defaults to div */
  tagName: _propTypes["default"].string,

  /** children - react children */
  children: _propTypes["default"].node
};
var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xl: 'col-xl',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push((0, _classNames["default"])('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push((0, _classNames["default"])('last-' + props.last));
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _classNames["default"])(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
  }).concat(extraClasses);
}

function getColumnProps(props) {
  return (0, _createProps["default"])(propTypes, props, getColClassNames(props));
}

var FlexCol = function FlexCol(props) {
  var tagName = props.tagName,
      columnProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement(tagName || 'div', getColumnProps(columnProps));
};

FlexCol.propTypes = propTypes;
var _default = FlexCol;
exports["default"] = _default;