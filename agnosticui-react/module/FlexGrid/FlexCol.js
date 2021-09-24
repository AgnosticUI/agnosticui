var _excluded = ["tagName"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import createProps from './createProps';
import getClass from './classNames';
import { ColumnSizeType, ViewportSizeType } from './types';
var propTypes = {
  /** xs - number of units when viewport is "extra small" */
  xs: ColumnSizeType,

  /** sm - number of units when viewport is "small" */
  sm: ColumnSizeType,

  /** md - number of units when viewport is "medium" */
  md: ColumnSizeType,

  /** lg - number of units when viewport is "large" */
  lg: ColumnSizeType,

  /** xl - number of units when viewport is "extra large" */
  xl: ColumnSizeType,

  /** xsOffset - number of units to offset when viewport is "extra small" */
  xsOffset: PropTypes.number,

  /** smOffset - number of units to offset when viewport is "small" */
  smOffset: PropTypes.number,

  /** mdOffset - number of units to offset when viewport is "medium" */
  mdOffset: PropTypes.number,

  /** lgOffset - number of units to offset when viewport is "large" */
  lgOffset: PropTypes.number,

  /** xlOffset - number of units to offset when viewport is "extra large" */
  xlOffset: PropTypes.number,

  /** first - Forces a column to appear first */
  first: ViewportSizeType,

  /** last - Forces a column to appear last */
  last: ViewportSizeType,

  /** className - additional custom class to use */
  className: PropTypes.string,

  /** tagName - tag to use defaults to div */
  tagName: PropTypes.string,

  /** children - react children */
  children: PropTypes.node
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
    extraClasses.push(getClass('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push(getClass('last-' + props.last));
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return getClass(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
  }).concat(extraClasses);
}

export function getColumnProps(props) {
  return createProps(propTypes, props, getColClassNames(props));
}

var FlexCol = function FlexCol(props) {
  var tagName = props.tagName,
      columnProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(tagName || 'div', getColumnProps(columnProps));
};

FlexCol.propTypes = propTypes;
export default FlexCol;