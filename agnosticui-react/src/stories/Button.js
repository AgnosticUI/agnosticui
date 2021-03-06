import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({
  children,
  mode,
  size,
  isSkinned,
  isBordered,
  isRounded,
  isCircle,
  isDisabled,
  isRaised,
  isBlock,
  isBlank,
  css,
  type,
  onClick,
}) => {
  let klasses = [
    // By default, we provide both btn-base and btn-skin. However,
    // folks can opt-out by setting `isSkinned: false`, in which case
    // we will only include the base button styles so they can skin.
    isSkinned ? styles.btn : styles.btnBase,
    mode ? styles[`${mode}`] : '',
    size ? styles[`${size}`] : '',
    isBordered ? styles.bordered : '',
    isRounded ? styles.rounded : '',
    isCircle ? styles.circle : '',
    isDisabled ? styles.disabled : '',
    isRaised ? styles.raised : '',
    isBlock ? styles.block : '',
    isBlank ? styles.blank : '',
    css ? `${css}` : '',
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(' ');

  return (
    <button type={type} className={klasses} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.string,
  css: PropTypes.string,
  type: PropTypes.oneOf(['reset', 'button', 'submit']),
  onClick: PropTypes.func,
  isBordered: PropTypes.bool,
  isSkinned: PropTypes.bool,
  isBlank: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRaised: PropTypes.bool,
  isBlock: PropTypes.bool,
  isCircle: PropTypes.bool,
  isRounded: PropTypes.bool,
};

Button.defaultProps = {
  mode: undefined,
  size: undefined,
  css: undefined,
  type: 'button',
  onClick: undefined,
  isBordered: false,
  isSkinned: true,
  isBlank: false,
  isDisabled: false,
  isRaised: false,
  isBlock: false,
  isCircle: false,
  isRounded: false,
};

export const ButtonGroup = ({ ariaLabel, children, css }) => {
  var props = {
    className: `${styles.group} ${css ? css : ''}`,
    role: 'group',
    ...(ariaLabel && { 'aria-label': ariaLabel }),
  };
  return <div {...props}>{children}</div>;
};

ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  css: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

ButtonGroup.defaultProps = {
  css: undefined,
};

export default Button;
