import React, { FC, useState } from 'react';
import styles from './choice-input.module.css';

export interface ChoiceOptions {
  name: string;
  value: string;
  label: string;
}

export interface ChoiceInputProps {
  id: string;
  css?: string;
  legendLabel: string;
  isInline?: boolean;
  isSkinned?: boolean;
  isFieldset?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  type?: 'checkbox' | 'radio';
  size?: 'small' | 'large' | '';
  options: ChoiceOptions[];
  // array of names of choice options that should be disabled
  disabledOptions?: string[];
  // array of names of choice options that should be checked
  checkedOptions?: string[];
  onChange: (checkedItems: any[]) => void; // eslint-disable-line no-unused-vars
}

export const ChoiceInput: FC<ChoiceInputProps> = ({
  id,
  css,
  isInline = false,
  legendLabel,
  isFieldset = true,
  isSkinned = true,
  isDisabled = false,
  isInvalid = false,
  options,
  disabledOptions = [],
  checkedOptions = [],
  size = '',
  type = 'checkbox',
  onChange,
}) => {
  const precheckedOptions = Array.from(checkedOptions);
  const [checked, setChecked] = useState(precheckedOptions);

  const handleChange = (e: React.ChangeEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value as string;

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
      if (onChange) {
        onChange(checkedItemsUpdated);
      }
      // Type is radio. We ignore if they're trying to check the currently
      // checked radio
    } else if (!checked.includes(value)) {
      // Since you can only have one checked radio at a time, we simply
      // set to the new radio to be checked
      setChecked([value]);
      if (onChange) {
        onChange([value]);
      }
    }
  };

  const legendClasses = () => {
    // If consumer sets is skinned to false we don't style the legend
    const skin = isSkinned ? styles[`${type}-legend`] : '';
    const klasses = [
      skin,
      // .screenreader-only is expected to be globally available via common.min.css
      isFieldset === false ? 'screenreader-only' : null,
    ];
    return klasses.filter((cl) => cl && cl.length).join(' ');
  };

  const labelClasses = () => {
    const klasses = [
      styles[`${type}-label-wrap`],
      isInline ? styles[`${type}-label-wrap-inline`] : '',
      // https://github.com/css-modules/css-modules/issues/189#issuecomment-260021613
      // isDisabled ? styles.disabled : '',
    ];
    return klasses.filter((cl) => cl && cl.length).join(' ');
  };

  const labelSpanClasses = () => {
    const klasses = [styles[`${type}-label`], size ? styles[`${type}-label-${size}`] : ''];
    return klasses.filter((cl) => cl && cl.length).join(' ');
  };

  const labelCopyClasses = () => [
    styles[`${type}-label-copy`],
    size ? styles[`${type}-label-copy-${size}`] : '',
    isInvalid ? styles['choice-input-error'] : '',
  ]
    .filter((c) => c)
    .join(' ');

  const fieldsetClasses = () => {
    // If consumer sets is skinned to false we don't style the fieldset
    const skin = isSkinned ? styles[`${type}-group`] : '';

    // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
    const sizeSkin = isSkinned && size === 'large' ? styles[`${type}-group-${size}`] : '';
    const klasses = [
      css || '',
      skin,
      sizeSkin,
      isFieldset === false ? styles[`${type}-group-hidden`] : '',
    ];
    return klasses.filter((cl) => cl && cl.length).join(' ');
  };

  const inputClasses = () => {
    const klasses = [styles[`${type}`], size ? styles[`${type}-${size}`] : ''];
    return klasses.filter((cl) => cl && cl.length).join(' ');
  };

  return (
    <fieldset className={fieldsetClasses()}>
      <legend className={legendClasses()}>{legendLabel}</legend>
      {options.map(({ name, value, label }, i) => (
        <label key={`${id}-${value}`} className={labelClasses()}>
          <input
            id={`${id}-${name}-${i}`}
            className={inputClasses()}
            aria-hidden="true"
            type={type}
            name={name}
            value={value}
            disabled={isDisabled || disabledOptions.includes(value)}
            checked={checked.includes(value)}
            onChange={handleChange}
          />
          <span className={labelSpanClasses()} />
          <span className={labelCopyClasses()}>{label}</span>
        </label>
      ))}
    </fieldset>
  );
};
