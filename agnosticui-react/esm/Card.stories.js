"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("./Card.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'AG—React/Card',
  component: _Card["default"]
};
exports["default"] = _default;

var All = function All() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Card["default"], null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Card"))), /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    isStacked: true
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Stacked"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Card"))), /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    isAnimated: true,
    isStacked: true
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Animated & Stacked"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Card"))), /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    isSkinned: false
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Base Card"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "No Skin"))), /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    css: "foo-bar"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Custom CSS Class"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 24
    }
  }, "Inspect to see foo-bar"))));
};

exports.All = All;