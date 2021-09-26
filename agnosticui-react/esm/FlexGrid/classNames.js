"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getClass;

var _FlexBoxGrid2CustomModule = _interopRequireDefault(require("./FlexBoxGrid2Custom.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getClass(className) {
  return _FlexBoxGrid2CustomModule["default"] && _FlexBoxGrid2CustomModule["default"][className] ? _FlexBoxGrid2CustomModule["default"][className] : className;
}