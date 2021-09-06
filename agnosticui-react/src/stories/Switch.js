import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './switch.module.css';

const Switch = ({
  id,
  label,
  labelPosition,
  size,
  isChecked,
  disabled,
  isBordered,
  isAction,
  onChange,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const switchSpan = () => {
    let klasses = [
      styles[`switch`],
      isBordered ? styles[`switch-border`] : '',
      isAction ? styles[`switch-action`] : '',
      size ? styles[`switch-${size}`] : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  };

  const switchContainer = () => {
    let klasses = [
      styles[`switch-container`],
      labelPosition === 'right' ? styles[`switch-right`] : '',
      disabled ? styles[`disabled`] : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  };

  const switchLabel = () => {
    return styles['switch-label'];
  };

  const switchInput = () => {
    return styles['switch-input'];
  };

  const handleClick = (evt) => {
    const el = evt.target;
    if (el.getAttribute('aria-pressed') == 'true') {
      el.setAttribute('aria-pressed', 'false');
      setChecked(false);
    } else {
      el.setAttribute('aria-pressed', 'true');
      setChecked(true);
    }
  };

  const handleKeypress = (evt) => {
    const keyCode = evt.keyCode || evt.which;
    switch (keyCode) {
      case 13:
        evt.preventDefault();
        evt.target.click();
        break;
    }
  };

  return (
    <label className={switchContainer()} htmlFor={id}>
      {labelPosition === 'left' && <span className={switchLabel()}>{label}</span>}
      <input
        type="checkbox"
        className={switchInput()}
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onClick={handleClick}
        onKeyPress={handleKeypress}
        role="switch"
      />
      <span className={switchSpan()} aria-hidden="true"></span>
      {labelPosition === 'right' && <span className={switchLabel()}>{label}</span>}
    </label>
  );
};

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isAction: PropTypes.bool,
  isBordered: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  disabled: false,
  isChecked: false,
  isAction: false,
  isBordered: false,
  labelPosition: 'left',
  size: '',
  onChange: undefined,
};

export default Switch;
