import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './choice-input.module.css';

export interface ChoiceProps {
  id: string;
  name: string;
  value?: string;
  disabled?: boolean;
  classes?: string;
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Choice: FC<ChoiceProps> = ({
  id,
  name,
  value,
  disabled = false,
  classes = '',
  type = 'checkbox',
  checked = false,
  onChange,
}) => (
  <>
    <label className="screenreader-only" htmlFor={id}>{`Choice input ${name}`}</label>
    <input
      id={id}
      className={classes}
      type={type}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  </>
);

export interface ChoiceInputProps {
  uniqueId: string;
  css?: string;
  legendLabel: string;
  isInline?: boolean;
  isFieldset?: boolean;
  isDisabled?: boolean;
  type?: 'checkbox' | 'radio';
  size?: 'small' | 'large' | '';
  // TODO Type all these options
  options: any[];
  disabledOptions?: any[];
  checkedOptions?: any[];
  onChange: (checkedItems: any[]) => void; // eslint-disable-line no-unused-vars
}

export const ChoiceInput: FC<ChoiceInputProps> = ({
  uniqueId,
  css,
  isInline = false,
  legendLabel,
  isFieldset = true,
  isDisabled = false,
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
    const klasses = [
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
      css || '',
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
      {options.map(({ name, value, label }, i) => (
        <label key={uuidv4()} htmlFor={`${uniqueId}-${name}-${i}`} className={labelClasses()}>
          <Choice
            id={`${uniqueId}-${name}-${i}`}
            classes={inputClasses()}
            type={type}
            name={name}
            value={value}
            aria-hidden="true"
            disabled={isDisabled || disabledOptions.includes(value)}
            checked={checked.includes(value)}
            onChange={handleChange}
          />
          <span className={labelSpanClasses()}>{label}</span>
        </label>
      ))}
    </fieldset>
  );
};
