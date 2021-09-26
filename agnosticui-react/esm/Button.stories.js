"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customizations = exports.Types = exports.DisabledAll = exports.Sizes = exports.Default = exports.Secondary = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionsData = {
  click: (0, _addonActions.action)('click')
};
var _default = {
  title: 'AG—React/Button',
  component: _Button["default"],
  on: _objectSpread({}, actionsData)
};
exports["default"] = _default;

var Primary = function Primary() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isBordered: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isRounded: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isRounded: true,
    isBordered: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isRounded: true,
    isRaised: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isCircle: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isCircle: true,
    isBordered: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isBlock: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click'),
    isBordered: true,
    isBlock: true
  }, "Go"));
};

exports.Primary = Primary;

var Secondary = function Secondary() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isRounded: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isBordered: true,
    isRounded: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isRaised: true,
    isRounded: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isCircle: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isCircle: true,
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isBlock: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isBordered: true,
    isBlock: true,
    onClick: (0, _addonActions.action)('click')
  }, "Go"));
};

exports.Secondary = Secondary;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click')
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isBordered: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isRounded: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isBordered: true,
    isRounded: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isRaised: true,
    isRounded: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isCircle: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isCircle: true,
    isBordered: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isBlock: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isBordered: true,
    isBlock: true
  }, "Go"));
};

exports.Default = Default;

var Sizes = function Sizes() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    size: "small"
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    size: "large"
  }, "Go"));
};

exports.Sizes = Sizes;

var DisabledAll = function DisabledAll() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isDisabled: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    mode: "primary",
    isDisabled: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    mode: "secondary",
    isDisabled: true
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    mode: "secondary",
    isDisabled: true,
    isBordered: true
  }, "Go"));
};

exports.DisabledAll = DisabledAll;

var Types = function Types() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    type: "reset"
  }, "Go"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    type: "submit"
  }, "Go"));
};

exports.Types = Types;

var Customizations = function Customizations() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    css: "my-custom-css-klass"
  }, "Inspect me to find custom classes"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isBlank: true
  }, "Blank button"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click'),
    isSkinned: false
  }, "Unskinned"));
};

exports.Customizations = Customizations;