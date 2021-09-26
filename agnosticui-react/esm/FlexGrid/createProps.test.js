"use strict";

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createProps = _interopRequireDefault(require("./createProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var propTypes = {
  b: _propTypes["default"].bool,
  s: _propTypes["default"].string,
  children: _propTypes["default"].node
};
test('removes prop types besides children', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var classNames, props, result;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          classNames = ['class_a', 'class_b'];
          props = {
            s: 'string',
            // expected: gets removed
            b: true,
            // expected: gets removed
            style: 'color: hotpink;',
            // expected: preserved
            children: 'le children'
          };
          result = (0, _createProps["default"])(propTypes, props, classNames);
          expect(result.children).toEqual('le children');
          expect(result.className).toEqual('class_a class_b'); // keys that are not in propTypes are preserved

          expect(result.style).toBeDefined(); // only the children component prop (and props not in propTypes) are preserved

          expect(result.b).toBeUndefined();
          expect(result.s).toBeUndefined();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));