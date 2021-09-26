"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Switch = _interopRequireDefault(require("./Switch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionsData = {
  change: (0, _addonActions.action)('change')
};
var _default = {
  title: 'AG—React/Switch',
  component: _Switch["default"],
  on: _objectSpread({}, actionsData)
};
exports["default"] = _default;

var All = function All() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "1",
    label: "Switch small",
    size: "small",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "2",
    label: "Switch default",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "3",
    label: "Switch large",
    size: "large",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "4",
    label: "Switch prechecked",
    size: "large",
    isChecked: true,
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "5",
    label: "Switch disabled",
    size: "large",
    isChecked: true,
    disabled: true
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "6",
    label: "Switch action",
    size: "large",
    isAction: true,
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "7",
    label: "Switch bordered",
    size: "large",
    isBordered: true,
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "8",
    label: "Switch bordered action",
    size: "large",
    isAction: true,
    isBordered: true,
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "9",
    label: "Switch label on right",
    labelPosition: "right",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "10",
    label: "Switch right bordered",
    labelPosition: "right",
    isBordered: true,
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "11",
    label: "Switch right action",
    labelPosition: "right",
    isAction: true,
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "12",
    label: "Switch right action bordered",
    labelPosition: "right",
    isAction: true,
    isBordered: true,
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    id: "13",
    label: "Switch right action bordered disabled",
    disabled: true,
    labelPosition: "right",
    isAction: true,
    isBordered: true
  }));
};

exports.All = All;