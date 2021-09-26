"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChoiceInput = _interopRequireDefault(require("./ChoiceInput.js"));

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionsData = {
  change: (0, _addonActions.action)('change')
};
var _default = {
  title: 'AG—React/ChoiceInput',
  component: _ChoiceInput["default"],
  on: _objectSpread({}, actionsData)
};
exports["default"] = _default;
var reusableOptions = [{
  name: 'frequency',
  value: 'daily',
  label: 'Daily'
}, {
  name: 'frequency',
  value: 'weekly',
  label: 'Weekly'
}, {
  name: 'frequency',
  value: 'monthly',
  label: 'Monthly'
}];
var disabledOptions = ['weekly', 'monthly'];

var All = function All() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "checkbox",
    options: reusableOptions,
    legendLabel: "Checkbox legend",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    isDisabled: true,
    type: "checkbox",
    options: reusableOptions,
    legendLabel: "Checkbox disabled",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    disabledOptions: disabledOptions,
    type: "checkbox",
    options: reusableOptions,
    legendLabel: "Checkbox specific options disabled",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "checkbox",
    isFieldset: false,
    options: reusableOptions,
    legendLabel: "Checkbox fieldset hidden",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "checkbox",
    isInline: true,
    options: reusableOptions,
    legendLabel: "Checkbox inline",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "checkbox",
    isInline: true,
    size: "small",
    options: reusableOptions,
    legendLabel: "Checkbox small",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "checkbox",
    isInline: true,
    size: "large",
    options: reusableOptions,
    legendLabel: "Checkbox large",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "checkbox",
    isInline: true,
    size: "large",
    checkedOptions: ['daily', 'weekly'],
    options: reusableOptions,
    legendLabel: "Checkbox prechecked options",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio legend",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    isDisabled: true,
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio disabled",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    disabledOptions: ['two'],
    type: "radio",
    options: [{
      name: 'numbers',
      value: 'one',
      label: 'one'
    }, {
      name: 'numbers',
      value: 'two',
      label: 'two'
    }, {
      name: 'numbers',
      value: 'three',
      label: 'three'
    }],
    legendLabel: "Radio specific options disabled",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "radio",
    isFieldset: false,
    options: [{
      name: 'es',
      value: 'uno',
      label: 'uno'
    }, {
      name: 'es',
      value: 'dos',
      label: 'dos'
    }, {
      name: 'es',
      value: 'tres',
      label: 'tres'
    }],
    legendLabel: "Radio fieldset hidden",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "radio",
    isInline: true,
    options: [{
      name: 'colors',
      value: 'blue',
      label: 'Blue'
    }, {
      name: 'colors',
      value: 'red',
      label: 'Red'
    }, {
      name: 'colors',
      value: 'silver',
      label: 'Silver'
    }],
    legendLabel: "Radio inline",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "radio",
    isInline: true,
    size: "small",
    options: [{
      name: 'shape',
      value: 'square',
      label: 'Square'
    }, {
      name: 'shape',
      value: 'circle',
      label: 'Circle'
    }],
    legendLabel: "Radio small",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "radio",
    isInline: true,
    size: "large",
    options: [{
      name: 'bands',
      value: 'bonjovi',
      label: 'Bon Jovi'
    }, {
      name: 'bands',
      value: 'stones',
      label: 'Rolling Stones'
    }, {
      name: 'bands',
      value: 'isleybros',
      label: 'Isley Brothers'
    }],
    legendLabel: "Radio large",
    onChange: (0, _addonActions.action)('change')
  }), /*#__PURE__*/_react["default"].createElement(_ChoiceInput["default"], {
    type: "radio",
    isInline: true,
    size: "large",
    checkedOptions: ['charlie'],
    options: [{
      name: 'solo',
      value: 'stevie',
      label: 'Stevie Wonder'
    }, {
      name: 'solo',
      value: 'charlie',
      label: 'Charlie Wilson'
    }, {
      name: 'solo',
      value: 'whitney',
      label: 'Whitney Houston'
    }],
    legendLabel: "Radio prechecked option",
    onChange: (0, _addonActions.action)('change')
  }));
};

exports.All = All;