import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './choice-input.module.css';

const Choice = ({ disabled, classes, type, name, value, checked = false, onChange }) => (
  <input
    aria-hidden="true"
    className={classes}
    type={type}
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    disabled={disabled}
  />
);

Choice.propTypes = {
  disabled: PropTypes.bool,
  // id: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

const ChoiceInput = ({
  isInline,
  legendLabel,
  isFieldset,
  isDisabled,
  options,
  checkedOptions,
  disabledOptions,
  size,
  type,
  onChange,
}) => {
  const TYPE = ['checkbox', 'radio'];

  const precheckedOptions = Array.from(checkedOptions);
  const [checked, setChecked] = useState(precheckedOptions);

  const handleChange = (e) => {
    const value = e.target.value;
    if (type === 'checkbox') {
      let checkedItemsUpdated;
      if (checked.includes(value)) {
        checkedItemsUpdated = checked.filter((item) => item !== value);
        setChecked(checkedItemsUpdated);
      } else {
        checkedItemsUpdated = [...checked, value];
        setChecked(checkedItemsUpdated);
        // Since useState is async we use the value directly here
      }
    } else {
      // Type is radio. We ignore if they're trying to check the currently
      // checked radio
      if (!checked.includes(value)) {
        // Since you can only have one checked radio at a time, we simply
        // set to the new radio to be checked
        setChecked([value]);
        // If they've subscribed for change we use the value directly since
        // useState is async
        if (onChange) {
          onChange(value);
        }
      }
    }
  };

  const getType = () => {
    if (!TYPE.includes(type)) {
      console.warn(`allowed types are ${TYPE}`);
      type = 'checkbox';
    }
    return type;
  };

  const legendClasses = () => {
    let klasses = [
      styles[`${type}-legend`],
      // .screenreader-only is expected to be globally available via common.min.css
      isFieldset === false ? 'screenreader-only' : null,
    ];
    return klasses.join(' ');
  };

  const labelClasses = () => {
    let klasses = [
      type ? styles[`${type}-label-wrap`] : '',
      isInline ? styles[`${type}-label-wrap-inline`] : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  };

  const labelSpanClasses = () => {
    let klasses = [
      type ? styles[`${type}-label`] : '',
      size ? styles[`${type}-label-${size}`] : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  };

  const fieldsetClasses = () => {
    let klasses = [
      type ? styles[`${type}-group`] : '',
      // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
      size === 'large' ? styles[`${type}-group-${size}`] : '',
      isFieldset === false ? styles[`${type}-group-hidden`] : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  };

  const inputClasses = () => {
    let inputKlasses = [
      type ? styles[`${type}`] : '',
      size ? styles[`${type}-${size}`] : '',
      isDisabled ? 'disabled' : '',
    ];
    inputKlasses = inputKlasses.filter((klass) => klass.length);
    return inputKlasses.join(' ');
  };

  return (
    <fieldset className={fieldsetClasses()}>
      <legend className={legendClasses()}>{legendLabel}</legend>
      {options.map(({ name, value, label }, i) => {
        return (
          <label
            disabled={isDisabled || disabledOptions.includes(value)}
            className={labelClasses()}
            key={`label-${i}`}
          >
            <Choice
              classes={inputClasses()}
              type={getType()}
              name={name}
              value={value}
              aria-hidden="true"
              disabled={isDisabled || disabledOptions.includes(value)}
              checked={checked.includes(value)}
              onChange={handleChange}
            />
            <span className={labelSpanClasses()}>{label}</span>
          </label>
        );
      })}
    </fieldset>
  );
};

ChoiceInput.propTypes = {
  isInline: PropTypes.bool,
  isFieldset: PropTypes.bool,
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  disabledOptions: PropTypes.arrayOf(PropTypes.string),
  checkedOptions: PropTypes.arrayOf(PropTypes.string),
  legendLabel: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
};

ChoiceInput.defaultProps = {
  options: [],
  disabledOptions: [],
  checkedOptions: [],
  isInline: false,
  isDisabled: false,
  isFieldset: true,
  legendLabel: '',
  type: 'checkbox',
  size: '',
  onChange: undefined,
};

export default ChoiceInput;
