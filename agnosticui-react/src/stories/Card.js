import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';

const Card = ({ isAnimated, isStacked, isSkinned, css, children }) => {
  let klasses = [
    isSkinned ? styles.card : styles.cardBase,
    isAnimated ? styles.cardAnimated : '',
    isStacked ? styles.cardStacked : '',
    css ? `${css}` : '',
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(' ');

  return <div className={klasses}>{children}</div>;
};

Card.propTypes = {
  isSkinned: PropTypes.bool,
  isStacked: PropTypes.bool,
  isAnimated: PropTypes.bool,
  css: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Card.defaultProps = {
  isSkinned: true,
  isAnimated: false,
  isStacked: false,
  css: undefined,
};

export default Card;
