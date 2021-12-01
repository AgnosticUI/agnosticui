import { FC } from 'react';
import styles from './select.module.css';

export interface SelectOptions {
  value: string;
  label: string;
}

export interface SelectProps {
  uniqueId: string;
  name: string;
  labelCopy: string;
  options: SelectOptions[];
  size?: 'small' | 'large' | '';
  multipleSize?: number;
  isMultiple?: boolean;
  defaultOptionLabel?: string;
  isDisabled?: boolean;
  isSkinned?: boolean;
  css?: string;
}

export const Select: FC<SelectProps> = ({
  uniqueId,
  name,
  labelCopy,
  options,
  size = '',
  multipleSize,
  isMultiple = false,
  defaultOptionLabel = 'Please select an option',
  isDisabled,
  isSkinned = true,
  css = '',
}): JSX.Element => {
  const sizeCapitalized = size ? `${size.slice(0, 1).toUpperCase()}${size.slice(1)}` : '';

  const classes = [
    isSkinned ? styles.select : styles.selectBase,
    size ? styles[`select${sizeCapitalized}`] : '',
    css ? `${css}` : '',
  ]
    .filter((cl) => cl)
    .join(' ');

  const showDefaultOption = !isMultiple;

  return (
    <>
      <label className="screenreader-only" htmlFor={uniqueId}>
        {labelCopy}
      </label>
      <select
        className={classes}
        id={uniqueId}
        name={name}
        disabled={isDisabled}
        multiple={isMultiple}
        size={multipleSize}
        defaultValue={showDefaultOption ? 'select-option' : undefined}
      >
        {showDefaultOption && (
          <option value="select-option" disabled>
            {defaultOptionLabel}
          </option>
        )}
        {options.map(({ value, label }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
