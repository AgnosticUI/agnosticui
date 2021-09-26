"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _switchModule = _interopRequireDefault(require("./switch.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var _useState = (0, _react.useState)(isChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var switchSpan = function switchSpan() {
    var klasses = [_switchModule["default"]["switch"], isBordered ? _switchModule["default"]["switch-border"] : '', isAction ? _switchModule["default"]["switch-action"] : '', size ? _switchModule["default"]["switch-".concat(size)] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var switchContainer = function switchContainer() {
    var klasses = [_switchModule["default"]["switch-container"], labelPosition === 'right' ? _switchModule["default"]["switch-right"] : '', disabled ? _switchModule["default"]["disabled"] : ''];
    klasses = klasses.filter(function (klass) {
      return klass.length;
    });
    return klasses.join(' ');
  };

  var switchLabel = function switchLabel() {
    return _switchModule["default"]['switch-label'];
  };

  var switchInput = function switchInput() {
    return _switchModule["default"]['switch-input'];
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

  return /*#__PURE__*/_react["default"].createElement("label", {
    className: switchContainer(),
    htmlFor: id
  }, labelPosition === 'left' && /*#__PURE__*/_react["default"].createElement("span", {
    className: switchLabel()
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    className: switchInput(),
    id: id,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    onClick: handleClick,
    onKeyPress: handleKeypress,
    role: "switch"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: switchSpan(),
    "aria-hidden": "true"
  }), labelPosition === 'right' && /*#__PURE__*/_react["default"].createElement("span", {
    className: switchLabel()
  }, label));
};

Switch.propTypes = {
  id: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  isChecked: _propTypes["default"].bool,
  isAction: _propTypes["default"].bool,
  isBordered: _propTypes["default"].bool,
  label: _propTypes["default"].string.isRequired,
  labelPosition: _propTypes["default"].string,
  size: _propTypes["default"].string,
  onChange: _propTypes["default"].func
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
var _default = Switch;
exports["default"] = _default;