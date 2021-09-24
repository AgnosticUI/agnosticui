var _excluded = ["addOnLeft", "addOnRight", "label", "uniqueId", "labelCss", "helpText", "invalidText", "hasLeftAddon", "hasRightAddon", "isInvalid", "isRounded", "inputCss", "isDisabled", "isInline", "isSkinned", "isUnderlinedWithBackground", "isUnderlined", "size", "defaultValue", "type", "onChange", "onFocus", "onBlur", "placeholder"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.css';

var Input = function Input(_ref) {
  var addOnLeft = _ref.addOnLeft,
      addOnRight = _ref.addOnRight,
      label = _ref.label,
      uniqueId = _ref.uniqueId,
      labelCss = _ref.labelCss,
      helpText = _ref.helpText,
      invalidText = _ref.invalidText,
      hasLeftAddon = _ref.hasLeftAddon,
      hasRightAddon = _ref.hasRightAddon,
      isInvalid = _ref.isInvalid,
      isRounded = _ref.isRounded,
      inputCss = _ref.inputCss,
      isDisabled = _ref.isDisabled,
      isInline = _ref.isInline,
      isSkinned = _ref.isSkinned,
      isUnderlinedWithBackground = _ref.isUnderlinedWithBackground,
      isUnderlined = _ref.isUnderlined,
      size = _ref.size,
      defaultValue = _ref.defaultValue,
      type = _ref.type,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, _excluded);

  var capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var inputClasses = [isSkinned ? styles.input : styles.inputBase, isRounded ? styles.rounded : '', isUnderlined ? styles.underlined : '', isDisabled ? styles.disabled : '', isInline ? styles.inputInline : '', hasLeftAddon ? styles.inputHasLeftAddon : '', hasRightAddon ? styles.inputHasRightAddon : '', isInvalid ? styles.invalid : '', isUnderlinedWithBackground ? styles.underlinedWithBackground : '', inputCss ? "".concat(inputCss) : '', size ? styles["input".concat(capitalize(size))] : ''];
  inputClasses = inputClasses.filter(function (klass) {
    return klass ? klass.length : null;
  });
  inputClasses = inputClasses.join(' ');
  var labelClasses = [styles.label, isInvalid ? styles.labelError : '', isInline ? styles.labelInline : '', size ? styles["label".concat(capitalize(size))] : '', labelCss ? labelCss : ''];
  labelClasses = labelClasses.filter(function (klass) {
    return klass.length;
  });
  labelClasses = labelClasses.join(' ');
  var invalidClasses = size ? styles["fieldError".concat(capitalize(size))] : styles.fieldError;
  var helpClasses = size ? styles["fieldHelp".concat(capitalize(size))] : styles.fieldHelp;
  var addonContainerClasses = styles.inputAddonContainer;

  var renderInput = function renderInput() {
    return /*#__PURE__*/React.createElement("input", _extends({
      id: uniqueId,
      name: uniqueId,
      defaultValue: defaultValue,
      type: type,
      disabled: isDisabled,
      className: inputClasses,
      placeholder: placeholder,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur
    }, rest));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "width-full"
  }, /*#__PURE__*/React.createElement("label", {
    className: labelClasses,
    htmlFor: uniqueId
  }, label), type == 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: uniqueId,
    name: uniqueId,
    placeholder: placeholder,
    defaultValue: defaultValue,
    className: inputClasses,
    disabled: isDisabled
  }, rest)) : hasLeftAddon || hasRightAddon ? /*#__PURE__*/React.createElement("div", {
    className: addonContainerClasses
  }, addOnLeft && /*#__PURE__*/React.createElement("div", {
    className: styles.leftAddon
  }, addOnLeft), renderInput(), addOnRight && /*#__PURE__*/React.createElement("div", {
    className: styles.rightAddon
  }, addOnRight)) : renderInput(), isInvalid && /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-live": "polite",
    className: invalidClasses
  }, invalidText), helpText && /*#__PURE__*/React.createElement("span", {
    className: helpClasses
  }, helpText));
};

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
  labelCss: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  invalidText: PropTypes.string,
  addOnLeft: PropTypes.node,
  addOnRight: PropTypes.node,
  hasLeftAddon: PropTypes.bool,
  hasRightAddon: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRounded: PropTypes.bool,
  inputCss: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  isSkinned: PropTypes.bool,
  isUnderlinedWithBackground: PropTypes.bool,
  isUnderlined: PropTypes.bool,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'textarea']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  // Useful for valid html attribute e.g. if you have type textarea you may want to use rows or cols
  rest: PropTypes.any
};
Input.defaultProps = {
  placeholder: undefined,
  labelCss: undefined,
  helpText: undefined,
  invalidText: undefined,
  addOnLeft: undefined,
  addOnRight: undefined,
  hasLeftAddon: false,
  hasRightAddon: false,
  isInvalid: false,
  isRounded: false,
  inputCss: undefined,
  isSkinned: true,
  isDisabled: false,
  isInline: false,
  isUnderlined: false,
  isUnderlinedWithBackground: false,
  size: undefined,
  defaultValue: '',
  type: 'text',
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined
};
export default Input;