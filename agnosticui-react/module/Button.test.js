function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import 'regenerator-runtime/runtime.js';
import Button from './Button.js';
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

          _render = render( /*#__PURE__*/React.createElement(Button, {
            onClick: clickHandler
          })), getByRole = _render.getByRole;
          button = getByRole('button');
          _context.next = 6;
          return fireEvent.click(button);

        case 6:
          expect(state).toEqual('click event fired');

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));