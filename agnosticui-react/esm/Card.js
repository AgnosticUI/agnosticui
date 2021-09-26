"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cardModule = _interopRequireDefault(require("./card.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(_ref) {
  var isAnimated = _ref.isAnimated,
      isStacked = _ref.isStacked,
      isSkinned = _ref.isSkinned,
      css = _ref.css,
      children = _ref.children;
  var klasses = [isSkinned ? _cardModule["default"].card : _cardModule["default"].cardBase, isAnimated ? _cardModule["default"].cardAnimated : '', isStacked ? _cardModule["default"].cardStacked : '', css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: klasses
  }, children);
};

Card.propTypes = {
  isSkinned: _propTypes["default"].bool,
  isStacked: _propTypes["default"].bool,
  isAnimated: _propTypes["default"].bool,
  css: _propTypes["default"].string,
  children: _propTypes["default"].element.isRequired
};
Card.defaultProps = {
  isSkinned: true,
  isAnimated: false,
  isStacked: false,
  css: undefined
};
var _default = Card;
exports["default"] = _default;