"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createProps = _interopRequireDefault(require("./createProps"));

var _classNames = _interopRequireDefault(require("./classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  fluid: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  tagName: _propTypes["default"].string,
  children: _propTypes["default"].node
};
/**
 * FlexGrid is a flexbox based React component for doing layout. Under the hood it uses
 * a customized version of [flexboxgrid2](https://evgenyrodionov.github.io/flexboxgrid2)
 * that removes the magic gutters used by the original flexboxgrid2 css library. This
 * customized version (at `./FlexBoxGrid2Custom.css.scss`) is pulled in using CSS Modules.
 *
 * @public
 *
 * @param {string} className - in addition to sizing attributes, you can add custom CSS for the grid container
 * @param {string} tagName - what type of html tag to use for the container defaults to `<div>`
 * @param {ReactNode} children - children to render within the grid
 */

var FlexGrid = function FlexGrid(props) {
  var containerClass = (0, _classNames["default"])('flexgrid-container');
  var classNames = [props.className, containerClass];
  var gridPropsCreated = (0, _createProps["default"])(propTypes, props, classNames); // We're essentially taking the props passed in and:
  //   - rejecting any props passed in that are not in propTypes
  //   - adding classNames to our new react element below
  //   - allowing for a custom tagName or falling back to 'div'

  return /*#__PURE__*/_react["default"].createElement(props.tagName || 'div', gridPropsCreated);
};

FlexGrid.propTypes = propTypes;
var _default = FlexGrid;
exports["default"] = _default;