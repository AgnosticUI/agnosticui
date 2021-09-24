function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

var Button = function Button(_ref) {
  var children = _ref.children,
      mode = _ref.mode,
      size = _ref.size,
      isSkinned = _ref.isSkinned,
      isBordered = _ref.isBordered,
      isRounded = _ref.isRounded,
      isCircle = _ref.isCircle,
      isDisabled = _ref.isDisabled,
      isRaised = _ref.isRaised,
      isBlock = _ref.isBlock,
      isBlank = _ref.isBlank,
      css = _ref.css,
      role = _ref.role,
      type = _ref.type,
      onClick = _ref.onClick;
  var klasses = [// By default, we provide both btn-base and btn-skin. However,
  // folks can opt-out by setting `isSkinned: false`, in which case
  // we will only include the base button styles so they can skin.
  isSkinned ? styles.btn : styles.btnBase, mode ? styles["".concat(mode)] : '', size ? styles["".concat(size)] : '', isBordered ? styles.bordered : '', isRounded ? styles.rounded : '', isCircle ? styles.circle : '', isDisabled ? styles.disabled : '', isRaised ? styles.raised : '', isBlock ? styles.block : '', isBlank ? styles.blank : '', css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: klasses,
    onClick: onClick,
    disabled: isDisabled,
    role: role
  }, children);
};

Button.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.string,
  css: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.oneOf(['reset', 'button', 'submit']),
  onClick: PropTypes.func,
  isBordered: PropTypes.bool,
  isSkinned: PropTypes.bool,
  isBlank: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRaised: PropTypes.bool,
  isBlock: PropTypes.bool,
  isCircle: PropTypes.bool,
  isRounded: PropTypes.bool
};
Button.defaultProps = {
  role: undefined,
  mode: undefined,
  size: undefined,
  css: undefined,
  type: 'button',
  onClick: undefined,
  isBordered: false,
  isSkinned: true,
  isBlank: false,
  isDisabled: false,
  isRaised: false,
  isBlock: false,
  isCircle: false,
  isRounded: false
};
export var ButtonGroup = function ButtonGroup(_ref2) {
  var ariaLabel = _ref2.ariaLabel,
      children = _ref2.children,
      css = _ref2.css;

  var props = _objectSpread({
    className: "".concat(styles.group, " ").concat(css ? css : ''),
    role: 'group'
  }, ariaLabel && {
    'aria-label': ariaLabel
  });

  return /*#__PURE__*/React.createElement("div", props, children);
};
ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  css: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};
ButtonGroup.defaultProps = {
  css: undefined
};
export default Button;