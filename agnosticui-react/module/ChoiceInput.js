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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './choice-input.module.css';

var Choice = function Choice(_ref) {
  var disabled = _ref.disabled,
      classes = _ref.classes,
      type = _ref.type,
      name = _ref.name,
      value = _ref.value,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("input", {
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
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
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

  var _useState = useState(precheckedOptions),
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
    var klasses = [styles["".concat(type, "-legend")], // .screenreader-only is expected to be globally available via common.min.css
    isFieldset === false ? 'screenreader-only' : null];
    return klasses.join(' ');
  };

  var labelClasses = function labelClasses() {
    var klasses = [type ? styles["".concat(type, "-label-wrap")] : '', isInline ? styles["".concat(type, "-label-wrap-inline")] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var labelSpanClasses = function labelSpanClasses() {
    var klasses = [type ? styles["".concat(type, "-label")] : '', size ? styles["".concat(type, "-label-").concat(size)] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var fieldsetClasses = function fieldsetClasses() {
    var klasses = [type ? styles["".concat(type, "-group")] : '', // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
    size === 'large' ? styles["".concat(type, "-group-").concat(size)] : '', isFieldset === false ? styles["".concat(type, "-group-hidden")] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var inputClasses = function inputClasses() {
    var inputKlasses = [type ? styles["".concat(type)] : '', size ? styles["".concat(type, "-").concat(size)] : '', isDisabled ? 'disabled' : ''];
    inputKlasses = inputKlasses.filter(function (klass) {
      return klass.length;
    });
    return inputKlasses.join(' ');
  };

  return /*#__PURE__*/React.createElement("fieldset", {
    className: fieldsetClasses()
  }, /*#__PURE__*/React.createElement("legend", {
    className: legendClasses()
  }, legendLabel), options.map(function (_ref3, i) {
    var name = _ref3.name,
        value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement("label", {
      disabled: isDisabled || disabledOptions.includes(value),
      className: labelClasses(),
      key: "label-".concat(i)
    }, /*#__PURE__*/React.createElement(Choice, {
      classes: inputClasses(),
      type: getType(),
      name: name,
      value: value,
      "aria-hidden": "true",
      disabled: isDisabled || disabledOptions.includes(value),
      checked: checked.includes(value),
      onChange: handleChange
    }), /*#__PURE__*/React.createElement("span", {
      className: labelSpanClasses()
    }, label));
  }));
};

ChoiceInput.propTypes = {
  isInline: PropTypes.bool,
  isFieldset: PropTypes.bool,
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  disabledOptions: PropTypes.arrayOf(PropTypes.string),
  checkedOptions: PropTypes.arrayOf(PropTypes.string),
  legendLabel: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func
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
export default ChoiceInput;