"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ButtonGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonModule = _interopRequireDefault(require("./button.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  isSkinned ? _buttonModule["default"].btn : _buttonModule["default"].btnBase, mode ? _buttonModule["default"]["".concat(mode)] : '', size ? _buttonModule["default"]["".concat(size)] : '', isBordered ? _buttonModule["default"].bordered : '', isRounded ? _buttonModule["default"].rounded : '', isCircle ? _buttonModule["default"].circle : '', isDisabled ? _buttonModule["default"].disabled : '', isRaised ? _buttonModule["default"].raised : '', isBlock ? _buttonModule["default"].block : '', isBlank ? _buttonModule["default"].blank : '', css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    className: klasses,
    onClick: onClick,
    disabled: isDisabled,
    role: role
  }, children);
};

Button.propTypes = {
  children: _propTypes["default"].node,
  mode: _propTypes["default"].oneOf(['primary', 'secondary']),
  size: _propTypes["default"].string,
  css: _propTypes["default"].string,
  role: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['reset', 'button', 'submit']),
  onClick: _propTypes["default"].func,
  isBordered: _propTypes["default"].bool,
  isSkinned: _propTypes["default"].bool,
  isBlank: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  isRaised: _propTypes["default"].bool,
  isBlock: _propTypes["default"].bool,
  isCircle: _propTypes["default"].bool,
  isRounded: _propTypes["default"].bool
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

var ButtonGroup = function ButtonGroup(_ref2) {
  var ariaLabel = _ref2.ariaLabel,
      children = _ref2.children,
      css = _ref2.css;

  var props = _objectSpread({
    className: "".concat(_buttonModule["default"].group, " ").concat(css ? css : ''),
    role: 'group'
  }, ariaLabel && {
    'aria-label': ariaLabel
  });

  return /*#__PURE__*/_react["default"].createElement("div", props, children);
};

exports.ButtonGroup = ButtonGroup;
ButtonGroup.propTypes = {
  ariaLabel: _propTypes["default"].string.isRequired,
  css: _propTypes["default"].string,
  children: _propTypes["default"].arrayOf(_propTypes["default"].element)
};
ButtonGroup.defaultProps = {
  css: undefined
};
var _default = Button;
exports["default"] = _default;