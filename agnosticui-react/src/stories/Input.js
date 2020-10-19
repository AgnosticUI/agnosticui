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
  isSkinned,
  isUnderlinedWithBackground,
  isUnderlined,
  size,
  value,
  type,
  rest,
}) => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  let inputClasses = [
    isSkinned ? styles.input : styles.inputBase,
    isRounded ? styles.rounded : '',
    isUnderlined ? styles.underlined : '',
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
        value={value}
        type={type}
        className={inputClasses}
        {...rest}
      />
    )
  }
  return (
    <div className="width-full">
      <label className={labelClasses} for={uniqueId}>{label}</label>
      {type == 'textarea' && (
        <textarea
          id={uniqueId}
          value={value}
          className={inputClasses}
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
  helpText: PropTypes.string,
  invalidText: PropTypes.string,
  hasLeftAddon: PropTypes.bool,
  hasRightAddon: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRounded: PropTypes.bool,
  inputCss: PropTypes.string,
  isSkinned: PropTypes.bool,
  isUnderlinedWithBackground: PropTypes.bool,
  isUnderlined: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'textarea']),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onInput: PropTypes.func,
}

Input.defaultProps = {
  labelCss: undefined,
  helpText: undefined,
  invalidText: undefined,
  hasLeftAddon: false,
  hasRightAddon: false,
  isInvalid: false,
  isRounded: false,
  inputCss: undefined,
  isSkinned: true,
  isUnderlined: false,
  isUnderlinedWithBackground: false,
  size: undefined,
  value: '',
  type: 'text',
  onClick: undefined,
  onFocus: undefined,
  onBlur: undefined,
  onInput: undefined,
}

export default Input;
