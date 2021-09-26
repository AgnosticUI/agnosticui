"use strict";

var _react = _interopRequireDefault(require("react"));

require("@testing-library/jest-dom/extend-expect");

var _react2 = require("@testing-library/react");

require("regenerator-runtime/runtime.js");

var _Button = _interopRequireDefault(require("./Button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

test('onClick fires', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var state, clickHandler, _render, getByRole, button;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          state = 'original';

          clickHandler = function clickHandler() {
            state = 'click event fired';
          };

          _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Button["default"], {
            onClick: clickHandler
          })), getByRole = _render.getByRole;
          button = getByRole('button');
          _context.next = 6;
          return _react2.fireEvent.click(button);

        case 6:
          expect(state).toEqual('click event fired');

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));