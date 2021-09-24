import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';

var Card = function Card(_ref) {
  var isAnimated = _ref.isAnimated,
      isStacked = _ref.isStacked,
      isSkinned = _ref.isSkinned,
      css = _ref.css,
      children = _ref.children;
  var klasses = [isSkinned ? styles.card : styles.cardBase, isAnimated ? styles.cardAnimated : '', isStacked ? styles.cardStacked : '', css ? "".concat(css) : ''];
  klasses = klasses.filter(function (klass) {
    return klass.length;
  });
  klasses = klasses.join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: klasses
  }, children);
};

Card.propTypes = {
  isSkinned: PropTypes.bool,
  isStacked: PropTypes.bool,
  isAnimated: PropTypes.bool,
  css: PropTypes.string,
  children: PropTypes.element.isRequired
};
Card.defaultProps = {
  isSkinned: true,
  isAnimated: false,
  isStacked: false,
  css: undefined
};
export default Card;