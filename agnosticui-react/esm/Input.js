"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputModule = _interopRequireDefault(require("./input.module.css"));

var _excluded = ["addOnLeft", "addOnRight", "label", "uniqueId", "labelCss", "helpText", "invalidText", "hasLeftAddon", "hasRightAddon", "isInvalid", "isRounded", "inputCss", "isDisabled", "isInline", "isSkinned", "isUnderlinedWithBackground", "isUnderlined", "size", "defaultValue", "type", "onChange", "onFocus", "onBlur", "placeholder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  var inputClasses = [isSkinned ? _inputModule["default"].input : _inputModule["default"].inputBase, isRounded ? _inputModule["default"].rounded : '', isUnderlined ? _inputModule["default"].underlined : '', isDisabled ? _inputModule["default"].disabled : '', isInline ? _inputModule["default"].inputInline : '', hasLeftAddon ? _inputModule["default"].inputHasLeftAddon : '', hasRightAddon ? _inputModule["default"].inputHasRightAddon : '', isInvalid ? _inputModule["default"].invalid : '', isUnderlinedWithBackground ? _inputModule["default"].underlinedWithBackground : '', inputCss ? "".concat(inputCss) : '', size ? _inputModule["default"]["input".concat(capitalize(size))] : ''];
  inputClasses = inputClasses.filter(function (klass) {
    return klass ? klass.length : null;
  });
  inputClasses = inputClasses.join(' ');
  var labelClasses = [_inputModule["default"].label, isInvalid ? _inputModule["default"].labelError : '', isInline ? _inputModule["default"].labelInline : '', size ? _inputModule["default"]["label".concat(capitalize(size))] : '', labelCss ? labelCss : ''];
  labelClasses = labelClasses.filter(function (klass) {
    return klass.length;
  });
  labelClasses = labelClasses.join(' ');
  var invalidClasses = size ? _inputModule["default"]["fieldError".concat(capitalize(size))] : _inputModule["default"].fieldError;
  var helpClasses = size ? _inputModule["default"]["fieldHelp".concat(capitalize(size))] : _inputModule["default"].fieldHelp;
  var addonContainerClasses = _inputModule["default"].inputAddonContainer;

  var renderInput = function renderInput() {
    return /*#__PURE__*/_react["default"].createElement("input", _extends({
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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "width-full"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: labelClasses,
    htmlFor: uniqueId
  }, label), type == 'textarea' ? /*#__PURE__*/_react["default"].createElement("textarea", _extends({
    id: uniqueId,
    name: uniqueId,
    placeholder: placeholder,
    defaultValue: defaultValue,
    className: inputClasses,
    disabled: isDisabled
  }, rest)) : hasLeftAddon || hasRightAddon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: addonContainerClasses
  }, addOnLeft && /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputModule["default"].leftAddon
  }, addOnLeft), renderInput(), addOnRight && /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputModule["default"].rightAddon
  }, addOnRight)) : renderInput(), isInvalid && /*#__PURE__*/_react["default"].createElement("span", {
    role: "status",
    "aria-live": "polite",
    className: invalidClasses
  }, invalidText), helpText && /*#__PURE__*/_react["default"].createElement("span", {
    className: helpClasses
  }, helpText));
};

Input.propTypes = {
  size: _propTypes["default"].oneOf(['small', 'large']),
  label: _propTypes["default"].string.isRequired,
  uniqueId: _propTypes["default"].string.isRequired,
  labelCss: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  helpText: _propTypes["default"].string,
  invalidText: _propTypes["default"].string,
  addOnLeft: _propTypes["default"].node,
  addOnRight: _propTypes["default"].node,
  hasLeftAddon: _propTypes["default"].bool,
  hasRightAddon: _propTypes["default"].bool,
  isInvalid: _propTypes["default"].bool,
  isRounded: _propTypes["default"].bool,
  inputCss: _propTypes["default"].string,
  isDisabled: _propTypes["default"].bool,
  isInline: _propTypes["default"].bool,
  isSkinned: _propTypes["default"].bool,
  isUnderlinedWithBackground: _propTypes["default"].bool,
  isUnderlined: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'textarea']),
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  // Useful for valid html attribute e.g. if you have type textarea you may want to use rows or cols
  rest: _propTypes["default"].any
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
var _default = Input;
exports["default"] = _default;