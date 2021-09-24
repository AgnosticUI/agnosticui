import React from 'react';
import PropTypes from 'prop-types';
import styles from './progress.module.css';

var Progress = function Progress(_ref) {
  var value = _ref.value,
      max = _ref.max,
      css = _ref.css;
  var klasses = [styles.progressBar, css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/React.createElement("progress", {
    className: klasses,
    value: value,
    max: max
  });
};

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  css: PropTypes.string
};
Progress.defaultProps = {
  value: 0,
  css: undefined
};
export default Progress;