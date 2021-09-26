"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireWildcard(require("./Button"));

var _addonActions = require("@storybook/addon-actions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionsData = {
  click: (0, _addonActions.action)('click')
};
var _default = {
  title: 'AG—React/ButtonGroups',
  component: _Button.ButtonGroup,
  on: _objectSpread({}, actionsData)
};
exports["default"] = _default;

var All = function All() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "secondary",
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isRaised: true,
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isBordered: true,
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isDisabled: true
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click')
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isDisabled: true
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    onClick: (0, _addonActions.action)('click')
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isDisabled: true
  }, "Three")), /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
    ariaLabel: "Appropriate label for your button group"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isDisabled: true
  }, "One"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isDisabled: true
  }, "Two"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    mode: "primary",
    isDisabled: true
  }, "Three")));
};

exports.All = All;