"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorAndHelpText = exports.Textareas = exports.AllInputs = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactUuid = _interopRequireDefault(require("react-uuid"));

var _addonActions = require("@storybook/addon-actions");

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionsData = {
  blur: (0, _addonActions.action)('blur'),
  change: (0, _addonActions.action)('change'),
  focus: (0, _addonActions.action)('focus')
};
var _default = {
  title: 'AG—React/Input',
  component: _Input["default"],
  on: _objectSpread({}, actionsData)
};
exports["default"] = _default;

var AllInputs = function AllInputs() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Default input",
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Inline input",
    isInline: true,
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Rounded input",
    isRounded: true,
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Underlined input",
    isUnderlined: true,
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Underlined with background input",
    isUnderlined: true,
    isUnderlinedWithBackground: true,
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Large input",
    size: "large",
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Small input",
    size: "small",
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Disabled",
    isDisabled: true
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    hasLeftAddon: true,
    addOnLeft: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "L")),
    hasRightAddon: true,
    addOnRight: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "R")),
    label: "Input with addons"
  }));
};

exports.AllInputs = AllInputs;

var Textareas = function Textareas() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Textarea",
    type: "textarea",
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Textarea small",
    type: "textarea",
    size: "small",
    rows: "10",
    cols: "5",
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Textarea large",
    type: "textarea",
    size: "large",
    rows: "10",
    cols: "5",
    onChange: (0, _addonActions.action)('change'),
    onFocus: (0, _addonActions.action)('focus'),
    onBlur: (0, _addonActions.action)('blur')
  }));
};

exports.Textareas = Textareas;

var ErrorAndHelpText = function ErrorAndHelpText() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Help text input",
    helpText: "Some useful help text."
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Invalid input",
    invalidText: "This field has errors.",
    isInvalid: true
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "small",
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Invalid small input",
    invalidText: "This field has errors.",
    isInvalid: true
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "large",
    uniqueId: "myid-".concat((0, _reactUuid["default"])()),
    label: "Invalid large input",
    invalidText: "This field has errors.",
    isInvalid: true
  }));
};

exports.ErrorAndHelpText = ErrorAndHelpText;