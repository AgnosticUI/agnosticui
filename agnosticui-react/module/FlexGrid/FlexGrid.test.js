import React from 'react';
import FlexGrid from './FlexGrid';
import FlexRow from './FlexRow';
import FlexCol from './FlexCol';
import styles from './FlexGridExample.module.css';
import renderer from 'react-test-renderer';

var Field = function Field() {
  return /*#__PURE__*/React.createElement("p", {
    className: styles.Field
  }, "Field");
};

describe('FlexGrid', function () {
  describe('API', function () {
    test('exports properly', function () {
      expect(FlexGrid).toBeDefined();
      expect(FlexRow).toBeDefined();
      expect(FlexCol).toBeDefined();
    });
  });
  describe('rendering component', function () {
    test('default', function () {
      var tree = renderer.create( /*#__PURE__*/React.createElement(FlexGrid, null, /*#__PURE__*/React.createElement(FlexRow, {
        className: styles.DemoCol
      }, /*#__PURE__*/React.createElement(FlexCol, {
        xs: 12,
        sm: 4,
        lg: 6
      }, /*#__PURE__*/React.createElement(Field, null)), /*#__PURE__*/React.createElement(FlexCol, {
        xs: 12,
        sm: 4,
        lg: 6
      }, /*#__PURE__*/React.createElement(Field, null))))).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});