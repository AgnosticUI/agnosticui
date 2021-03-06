import React from 'react';
import PropTypes from 'prop-types';
import getClass from './classNames';
import createProps from './createProps';
import { ViewportSizeType } from './types';

const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const propTypes = {
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
  children: PropTypes.node,
};

function getRowClassNames(props) {
  const modifiers = [props.className, getClass('row')];

  for (let i = 0; i < rowKeys.length; ++i) {
    const key = rowKeys[i];
    const value = props[key];
    if (value) {
      modifiers.push(getClass(`${key}-${value}`));
    }
  }

  if (props.reverse) {
    modifiers.push(getClass('reverse'));
  }

  return modifiers;
}

export function getRowProps(props) {
  const rowPropsCreated = createProps(propTypes, props, getRowClassNames(props));
  return rowPropsCreated;
}

const FlexRow = (props) => {
  return React.createElement(props.tagName || 'div', getRowProps(props));
};

FlexRow.propTypes = propTypes;

export default FlexRow;
