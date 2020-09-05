import React from 'react';
import PropTypes from 'prop-types';
import styles from './progress.module.css';

const Progress = ({ value, max, css }) => {
  let klasses = [styles.progressBar, css ? `${css}` : ""];
  klasses = klasses.filter(klass => klass.length);
  klasses = klasses.join(" ");
  return (
    <progress className={klasses} value={value} max={max} />
  )
}

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  css: PropTypes.string,
}

Progress.defaultProps = {
  value: 0,
  css: undefined,
}

export default Progress;
