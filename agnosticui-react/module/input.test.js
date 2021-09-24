function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import 'regenerator-runtime/runtime.js';
import Input from './Input.js';
test('snapshot', function () {
  var changeHandler = jest.fn();
  var rendered = render( /*#__PURE__*/React.createElement(Input, {
    label: "label is require prop haha",
    uniqueId: "myUniqId",
    onChange: changeHandler
  }));
  expect(rendered).toMatchSnapshot();
});
test('take input', function () {
  var changeHandler = jest.fn();
  var rendered = render( /*#__PURE__*/React.createElement(Input, {
    label: "label is require prop haha",
    uniqueId: "myUniqId",
    onChange: changeHandler
  }));
  var input = rendered.getByRole('textbox');
  fireEvent.change(input, {
    target: {
      value: '123'
    }
  });
  expect(input.value).toBe('123');
});
test('delete input', function () {
  var changeHandler = jest.fn();
  var utils = render( /*#__PURE__*/React.createElement(Input, {
    label: "label is require prop haha",
    uniqueId: "myUniqId",
    onChange: changeHandler
  }));
  var input = utils.getByRole('textbox');
  fireEvent.change(input, {
    target: {
      value: '123'
    }
  });
  expect(input.value).toBe('123');
  fireEvent.change(input, {
    target: {
      value: '12'
    }
  });
  expect(input.value).toBe('12');
  fireEvent.change(input, {
    target: {
      value: ''
    }
  });
  expect(input.value).toBe('');
});
test('onChange', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var changeHandler, _render, getByRole, input, mockTypingEvent;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          changeHandler = jest.fn();
          _render = render( /*#__PURE__*/React.createElement(Input, {
            label: "label is require prop haha",
            uniqueId: "myUniqId",
            onChange: changeHandler
          })), getByRole = _render.getByRole;
          input = getByRole('textbox');
          mockTypingEvent = {
            target: {
              value: 'changed-value'
            }
          };
          _context.next = 6;
          return fireEvent.change(input, mockTypingEvent);

        case 6:
          expect(changeHandler).toHaveBeenCalledTimes(1);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
test('onFocus', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var focusHandler, _render2, getByRole, input, mockTypingEvent;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          focusHandler = jest.fn();
          _render2 = render( /*#__PURE__*/React.createElement(Input, {
            label: "label is require prop haha",
            uniqueId: "myUniqId",
            onFocus: focusHandler
          })), getByRole = _render2.getByRole;
          input = getByRole('textbox');
          mockTypingEvent = {
            target: {
              value: 'focus-value'
            }
          };
          _context2.next = 6;
          return fireEvent.focus(input, mockTypingEvent);

        case 6:
          expect(focusHandler).toHaveBeenCalledTimes(1);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
test('onBlur', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var blurHandler, _render3, getByRole, input, mockTypingEvent;

  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          blurHandler = jest.fn();
          _render3 = render( /*#__PURE__*/React.createElement(Input, {
            label: "label is require prop haha",
            uniqueId: "myUniqId",
            onBlur: blurHandler
          })), getByRole = _render3.getByRole;
          input = getByRole('textbox');
          mockTypingEvent = {
            target: {
              value: 'blur-value'
            }
          };
          _context3.next = 6;
          return fireEvent.blur(input, mockTypingEvent);

        case 6:
          expect(blurHandler).toHaveBeenCalledTimes(1);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));