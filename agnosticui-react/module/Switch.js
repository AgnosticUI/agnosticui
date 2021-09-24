function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './switch.module.css';

var Switch = function Switch(_ref) {
  var id = _ref.id,
      label = _ref.label,
      labelPosition = _ref.labelPosition,
      size = _ref.size,
      isChecked = _ref.isChecked,
      disabled = _ref.disabled,
      isBordered = _ref.isBordered,
      isAction = _ref.isAction,
      onChange = _ref.onChange;

  var _useState = useState(isChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var switchSpan = function switchSpan() {
    var klasses = [styles["switch"], isBordered ? styles["switch-border"] : '', isAction ? styles["switch-action"] : '', size ? styles["switch-".concat(size)] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var switchContainer = function switchContainer() {
    var klasses = [styles["switch-container"], labelPosition === 'right' ? styles["switch-right"] : '', disabled ? styles["disabled"] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var switchLabel = function switchLabel() {
    return styles['switch-label'];
  };

  var switchInput = function switchInput() {
    return styles['switch-input'];
  };

  var handleClick = function handleClick(evt) {
    var el = evt.target;

    if (el.getAttribute('aria-checked') == 'true') {
      el.setAttribute('aria-checked', 'false');
      setChecked(false);
    } else {
      el.setAttribute('aria-checked', 'true');
      setChecked(true);
    }
  };

  var handleKeypress = function handleKeypress(evt) {
    var keyCode = evt.keyCode || evt.which;

    switch (keyCode) {
      case 13:
        evt.preventDefault();
        evt.target.click();
        break;
    }
  };

  return /*#__PURE__*/React.createElement("label", {
    className: switchContainer(),
    htmlFor: id
  }, labelPosition === 'left' && /*#__PURE__*/React.createElement("span", {
    className: switchLabel()
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: switchInput(),
    id: id,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    onClick: handleClick,
    onKeyPress: handleKeypress,
    role: "switch"
  }), /*#__PURE__*/React.createElement("span", {
    className: switchSpan(),
    "aria-hidden": "true"
  }), labelPosition === 'right' && /*#__PURE__*/React.createElement("span", {
    className: switchLabel()
  }, label));
};

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isAction: PropTypes.bool,
  isBordered: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func
};
Switch.defaultProps = {
  disabled: false,
  isChecked: false,
  isAction: false,
  isBordered: false,
  labelPosition: 'left',
  size: '',
  onChange: undefined
};
export default Switch;