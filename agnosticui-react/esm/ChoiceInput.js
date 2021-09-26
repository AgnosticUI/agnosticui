"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _choiceInputModule = _interopRequireDefault(require("./choice-input.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Choice = function Choice(_ref) {
  var disabled = _ref.disabled,
      classes = _ref.classes,
      type = _ref.type,
      name = _ref.name,
      value = _ref.value,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("input", {
    className: classes,
    type: type,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  });
};

Choice.propTypes = {
  disabled: _propTypes["default"].bool,
  classes: _propTypes["default"].string,
  type: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired
};

var ChoiceInput = function ChoiceInput(_ref2) {
  var isInline = _ref2.isInline,
      legendLabel = _ref2.legendLabel,
      isFieldset = _ref2.isFieldset,
      isDisabled = _ref2.isDisabled,
      options = _ref2.options,
      checkedOptions = _ref2.checkedOptions,
      disabledOptions = _ref2.disabledOptions,
      size = _ref2.size,
      type = _ref2.type,
      onChange = _ref2.onChange;
  var TYPE = ['checkbox', 'radio'];
  var precheckedOptions = Array.from(checkedOptions);

  var _useState = (0, _react.useState)(precheckedOptions),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleChange = function handleChange(e) {
    var value = e.target.value;

    if (type === 'checkbox') {
      var checkedItemsUpdated;

      if (checked.includes(value)) {
        checkedItemsUpdated = checked.filter(function (item) {
          return item !== value;
        });
        setChecked(checkedItemsUpdated);
      } else {
        checkedItemsUpdated = [].concat(_toConsumableArray(checked), [value]);
        setChecked(checkedItemsUpdated); // Since useState is async we use the value directly here
      }

      if (onChange) {
        onChange(checkedItemsUpdated);
      }
    } else {
      // Type is radio. We ignore if they're trying to check the currently
      // checked radio
      if (!checked.includes(value)) {
        // Since you can only have one checked radio at a time, we simply
        // set to the new radio to be checked
        setChecked([value]); // If they've subscribed for change we use the value directly since
        // useState is async

        if (onChange) {
          onChange(value);
        }
      }
    }
  };

  var getType = function getType() {
    if (!TYPE.includes(type)) {
      console.warn("allowed types are ".concat(TYPE));
      type = 'checkbox';
    }

    return type;
  };

  var legendClasses = function legendClasses() {
    var klasses = [_choiceInputModule["default"]["".concat(type, "-legend")], // .screenreader-only is expected to be globally available via common.min.css
    isFieldset === false ? 'screenreader-only' : null];
    return klasses.join(' ');
  };

  var labelClasses = function labelClasses() {
    var klasses = [type ? _choiceInputModule["default"]["".concat(type, "-label-wrap")] : '', isInline ? _choiceInputModule["default"]["".concat(type, "-label-wrap-inline")] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var labelSpanClasses = function labelSpanClasses() {
    var klasses = [type ? _choiceInputModule["default"]["".concat(type, "-label")] : '', size ? _choiceInputModule["default"]["".concat(type, "-label-").concat(size)] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var fieldsetClasses = function fieldsetClasses() {
    var klasses = [type ? _choiceInputModule["default"]["".concat(type, "-group")] : '', // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
    size === 'large' ? _choiceInputModule["default"]["".concat(type, "-group-").concat(size)] : '', isFieldset === false ? _choiceInputModule["default"]["".concat(type, "-group-hidden")] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var inputClasses = function inputClasses() {
    var inputKlasses = [type ? _choiceInputModule["default"]["".concat(type)] : '', size ? _choiceInputModule["default"]["".concat(type, "-").concat(size)] : '', isDisabled ? 'disabled' : ''];
    inputKlasses = inputKlasses.filter(function (klass) {
      return klass.length;
    });
    return inputKlasses.join(' ');
  };

  return /*#__PURE__*/_react["default"].createElement("fieldset", {
    className: fieldsetClasses()
  }, /*#__PURE__*/_react["default"].createElement("legend", {
    className: legendClasses()
  }, legendLabel), options.map(function (_ref3, i) {
    var name = _ref3.name,
        value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/_react["default"].createElement("label", {
      disabled: isDisabled || disabledOptions.includes(value),
      className: labelClasses(),
      key: "label-".concat(i)
    }, /*#__PURE__*/_react["default"].createElement(Choice, {
      classes: inputClasses(),
      type: getType(),
      name: name,
      value: value,
      "aria-hidden": "true",
      disabled: isDisabled || disabledOptions.includes(value),
      checked: checked.includes(value),
      onChange: handleChange
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: labelSpanClasses()
    }, label));
  }));
};

ChoiceInput.propTypes = {
  isInline: _propTypes["default"].bool,
  isFieldset: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].object),
  disabledOptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  checkedOptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  legendLabel: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  size: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
ChoiceInput.defaultProps = {
  options: [],
  disabledOptions: [],
  checkedOptions: [],
  isInline: false,
  isDisabled: false,
  isFieldset: true,
  legendLabel: '',
  type: 'checkbox',
  size: '',
  onChange: undefined
};
var _default = ChoiceInput;
exports["default"] = _default;