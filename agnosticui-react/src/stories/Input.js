import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.css';

const Input = ({
  label,
  uniqueId,
  labelCss,
  helpText,
  invalidText,
  hasLeftAddon,
  hasRightAddon,
  isInvalid,
  isRounded,
  inputCss,
  isDisabled,
  isInline,
  isSkinned,
  isUnderlinedWithBackground,
  isUnderlined,
  size,
  defaultValue,
  type,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  rest,
}) => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  let inputClasses = [
    isSkinned ? styles.input : styles.inputBase,
    isRounded ? styles.rounded : '',
    isUnderlined ? styles.underlined : '',
    isDisabled ? styles.disabled : "",
    isInline ? styles.inputInline : "",
    hasLeftAddon ? styles.leftAddon : '',
    hasRightAddon ? styles.rightAddon : '',
    isInvalid ? styles.invalid : '',
    isUnderlinedWithBackground ? styles.underlinedWithBackground : '',
    inputCss ? `${inputCss}` : '',
    size ? styles[`input${capitalize(size)}`] : '',
  ];
  inputClasses = inputClasses.filter((klass) => klass.length);
  inputClasses = inputClasses.join(" ");

  let labelClasses = [
    styles.label,
    isInvalid ? styles.labelError : "",
    isInline ? styles.labelInline : "",
    size ? styles[`label${capitalize(size)}`] : "",
    labelCss ? labelCss : "",
  ];
  labelClasses = labelClasses.filter((klass) => klass.length);
  labelClasses = labelClasses.join(" ");

  const invalidClasses = size ? styles[`fieldError${capitalize(size)}`] : styles.fieldError;
  const helpClasses = size ? styles[`fieldHelp${capitalize(size)}`] : styles.fieldHelp;
  const addonContainerClasses = styles.inputAddonContainer;

  const renderInput = () => {
    return (
      <input
        id={uniqueId}
        name={uniqueId}
        defaultValue={defaultValue}
        type={type}
        disabled={isDisabled}
        className={inputClasses}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
  }
  return (
    <div className="width-full">
      <label className={labelClasses} htmlFor={uniqueId}>{label}</label>
      {type == 'textarea' && (
        <textarea
          id={uniqueId}
          name={uniqueId}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={inputClasses}
          disabled={isDisabled}
          {...rest}
        />
      )}
      {hasLeftAddon || hasRightAddon ? (
        <div className={addonContainerClasses}>
          {addOnLeft && (
            <div>{addOnLeft}</div>
          )}
          {renderInput()}
          {addOnRight && (
            <div>{addOnRight}</div>
          )}
        </div>
      ) : (
          <>
            { renderInput()}
          </>
        )
      }

      {isInvalid && (
        <span className={invalidClasses}>{invalidText}</span>
      )}
      {helpText && (
        <span className={helpClasses}>{helpText}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
  labelCss: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  invalidText: PropTypes.string,
  hasLeftAddon: PropTypes.bool,
  hasRightAddon: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRounded: PropTypes.bool,
  inputCss: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  isSkinned: PropTypes.bool,
  isUnderlinedWithBackground: PropTypes.bool,
  isUnderlined: PropTypes.bool,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'textarea']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

Input.defaultProps = {
  placeholder: undefined,
  labelCss: undefined,
  helpText: undefined,
  invalidText: undefined,
  hasLeftAddon: false,
  hasRightAddon: false,
  isInvalid: false,
  isRounded: false,
  inputCss: undefined,
  isSkinned: true,
  isDisabled: false,
  isInline: false,
  isUnderlined: false,
  isUnderlinedWithBackground: false,
  size: undefined,
  defaultValue: '',
  type: 'text',
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Input;
