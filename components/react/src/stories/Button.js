import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({
  children,
  mode,
  label,
  size,
  isBordered,
  isRounded,
  isDisabled,
  isRaised,
  isIconLeft,
  isIconRight,
  isBlank,
  css,
  type,
  onClick,
}) => {
  let klasses = [
    styles.btn,
    mode ? styles[`${mode}`] : "",
    size ? styles[`${size}`] : "",
    isBordered ? styles.bordered : "",
    isRounded ? styles.rounded : "",
    isDisabled ? styles.disabled : "",
    isRaised ? styles.raised : "",
    isIconLeft ? styles.iconLeft : "",
    isIconRight ? styles.iconRight : "",
    isBlank ? styles.blank : "",
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");

  return (
    <button type={type} className={klasses} onClick={onClick}>
      <>
        {isIconLeft && (
          <>
            {children}
          </>
        )}
        {label}
        {isIconRight && (
          <>
            {children}
          </>
        )}
      </>
    </button>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string,
  size: PropTypes.string,
  css: PropTypes.string,
  type: PropTypes.oneOf(['reset', 'button', 'submit']),
  onClick: PropTypes.func,
  isBordered: PropTypes.bool,
  isBlank: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRaised: PropTypes.bool,
  isRounded: PropTypes.bool,
  isIconLeft: PropTypes.bool,
  isIconRight: PropTypes.bool,
}

Button.defaultProps = {
  mode: undefined,
  label: undefined,
  size: undefined,
  css: undefined,
  type: 'button',
  onClick: undefined,
  isBordered: false,
  isBlank: false,
  isDisabled: false,
  isRaised: false,
  isRounded: false,
  isIconLeft: false,
  isIconRight: false,
}

export default Button;
