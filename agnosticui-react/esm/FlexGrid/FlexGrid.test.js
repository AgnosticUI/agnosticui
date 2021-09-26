"use strict";

var _react = _interopRequireDefault(require("react"));

var _FlexGrid = _interopRequireDefault(require("./FlexGrid"));

var _FlexRow = _interopRequireDefault(require("./FlexRow"));

var _FlexCol = _interopRequireDefault(require("./FlexCol"));

var _FlexGridExampleModule = _interopRequireDefault(require("./FlexGridExample.module.css"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Field = function Field() {
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: _FlexGridExampleModule["default"].Field
  }, "Field");
};

describe('FlexGrid', function () {
  describe('API', function () {
    test('exports properly', function () {
      expect(_FlexGrid["default"]).toBeDefined();
      expect(_FlexRow["default"]).toBeDefined();
      expect(_FlexCol["default"]).toBeDefined();
    });
  });
  describe('rendering component', function () {
    test('default', function () {
      var tree = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_FlexGrid["default"], null, /*#__PURE__*/_react["default"].createElement(_FlexRow["default"], {
        className: _FlexGridExampleModule["default"].DemoCol
      }, /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
        xs: 12,
        sm: 4,
        lg: 6
      }, /*#__PURE__*/_react["default"].createElement(Field, null)), /*#__PURE__*/_react["default"].createElement(_FlexCol["default"], {
        xs: 12,
        sm: 4,
        lg: 6
      }, /*#__PURE__*/_react["default"].createElement(Field, null))))).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});