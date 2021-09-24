import React from 'react';
import PropTypes from 'prop-types';
import getClass from './classNames';
import createProps from './createProps';
import { ViewportSizeType } from './types';
var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];
var propTypes = {
  reverse: PropTypes.bool,
  start: ViewportSizeType,
  center: ViewportSizeType,
  end: ViewportSizeType,
  top: ViewportSizeType,
  middle: ViewportSizeType,
  bottom: ViewportSizeType,
  around: ViewportSizeType,
  between: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

function getRowClassNames(props) {
  var modifiers = [props.className, getClass('row')];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];

    if (value) {
      modifiers.push(getClass("".concat(key, "-").concat(value)));
    }
  }

  if (props.reverse) {
    modifiers.push(getClass('reverse'));
  }

  return modifiers;
}

export function getRowProps(props) {
  var rowPropsCreated = createProps(propTypes, props, getRowClassNames(props));
  return rowPropsCreated;
}

var FlexRow = function FlexRow(props) {
  return /*#__PURE__*/React.createElement(props.tagName || 'div', getRowProps(props));
};

FlexRow.propTypes = propTypes;
export default FlexRow;