import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css'

const Card = ({ isStacked, isSkinned, css, children }) => {
  let klasses = [
    isSkinned ? styles.card : styles.cardBase,
    isStacked ? styles.cardStacked : '',
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");

  return (
    <div className={klasses}>
      {children}
    </div>
  )
}

Card.propTypes = {
  isSkinned: PropTypes.bool,
  isStacked: PropTypes.bool,
  css: PropTypes.string,
  children: PropTypes.element.isRequired,
}

Card.defaultProps = {
  isSkinned: true,
  isStacked: false,
  css: undefined,
}

export default Card;
