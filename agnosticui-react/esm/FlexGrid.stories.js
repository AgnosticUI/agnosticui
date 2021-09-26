"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsageExamples = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FlexGrid = _interopRequireDefault(require("./FlexGrid/FlexGrid.js"));

var _FlexRow = _interopRequireDefault(require("./FlexGrid/FlexRow.js"));

var _FlexCol = _interopRequireDefault(require("./FlexGrid/FlexCol.js"));

var _FlexGridExampleModule = _interopRequireDefault(require("./FlexGrid/FlexGridExample.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line react/prop-types
var Field = function Field(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Field' : _ref$label;
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: _FlexGridExampleModule["default"].Field
  }, label);
};

var _default = {
  title: 'AG—React/Grid',
  component: _FlexGrid["default"]
};
exports["default"] = _default;

var UsageExamples = function UsageExamples() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("h1", null, "FlexGrid"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("i", null, "xs"), " = Extra Small.", /*#__PURE__*/_react["default"].createElement("i", null, "sm"), " = Small.", /*#__PURE__*/_react["default"].createElement("i", null, "md"), " = Medium.", /*#__PURE__*/_react["default"].createElement("i", null, "lg"), " = Large.", /*#__PURE__*/_react["default"].createElement("i", null, "xl"), " = Extra Large."), /*#__PURE__*/_react["default"].createElement(_FlexGrid["default"], null, /*#__PURE__*/_react["default"].createElement(_FlexRow["default"], {
    className: _FlexGridExampleModule["default"].DemoCol
  }, /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 4,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={4} lg={6}"
  })), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 4,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={4} lg={6}"
  })), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 4,
    lg: 3
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={4} lg={3}"
  })), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 4,
    lg: 3
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={4} lg={3}"
  })), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 4,
    lg: 3
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={4} lg={3}"
  })), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 4,
    lg: 3
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={4} lg={3}"
  }))))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Complex"), /*#__PURE__*/_react["default"].createElement("p", null, "Not that you would want this level of complexity, but it is available:"), /*#__PURE__*/_react["default"].createElement(_FlexGrid["default"], null, /*#__PURE__*/_react["default"].createElement(_FlexRow["default"], {
    className: _FlexGridExampleModule["default"].DemoCol
  }, /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 8,
    md: 4,
    lg: 3,
    xl: 2
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={8} md={4} lg={3} xl={2}"
  })), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 8,
    md: 4,
    lg: 3,
    xl: 2
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={8} md={4} lg={3} xl={2}"
  })), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    xs: 12,
    sm: 8,
    md: 4,
    lg: 3,
    xl: 2
  }, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "xs={12} sm={8} md={4} lg={3} xl={2}"
  }))))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Offsets"), /*#__PURE__*/_react["default"].createElement(_FlexGrid["default"], null, /*#__PURE__*/_react["default"].createElement(_FlexRow["default"], {
    className: _FlexGridExampleModule["default"].DemoCol
  }, /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    sm: 2,
    style: {
      border: '1px solid #f7cac9'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, "sm=", 2)), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    sm: 2,
    smOffset: 1,
    style: {
      border: '1px solid #39cccc'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, "sm=", 2, " smOffset=", 1)), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    sm: 2,
    smOffset: 1,
    style: {
      border: '1px solid #7fdbff'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, "sm=", 2, " smOffset=", 1)), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
    sm: 2,
    smOffset: 1,
    style: {
      border: '1px solid #ff6f61'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, "sm=", 2, " smOffset=", 1)))), /*#__PURE__*/_react["default"].createElement("p", null, "See ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://evgenyrodionov.github.io/flexboxgrid2/"
  }, "flexboxgrid2"), " for more examples.")));
};

exports.UsageExamples = UsageExamples;