import { FC, HTMLAttributes, useState, KeyboardEvent, MouseEvent } from 'react';
import styles from './switch.module.css';

export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  css?: string;
  labelPosition?: 'left' | 'right';
  size?: 'small' | 'large' | '';
  isChecked?: boolean;
  isAction?: boolean;
  isBordered?: boolean;
  isDisabled?: boolean;
}

export const Switch: FC<SwitchProps> = ({
  id,
  label,
  css,
  labelPosition = 'left',
  size = '',
  isChecked = false,
  isDisabled = false,
  isBordered = false,
  isAction = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const switchSpan = () => {
    const klasses = [
      styles.switch,
      isBordered ? styles['switch-border'] : '',
      isAction ? styles['switch-action'] : '',
      size ? styles[`switch-${size}`] : '',
    ];
    return klasses.filter((klass) => klass.length).join(' ');
  };

  const switchContainer = () => {
    const klasses = [
      styles['switch-container'],
      labelPosition === 'right' ? styles['switch-right'] : '',
      isDisabled ? styles.disabled : '',
      css || '',
    ];
    return klasses.filter((klass) => klass.length).join(' ');
  };

  const switchLabel = () => styles['switch-label'];

  const switchInput = () => styles['switch-input'];

  const handleClick = (evt: MouseEvent<HTMLInputElement>) => {
    const el = evt.target as HTMLInputElement;
    if (el.getAttribute('aria-checked') === 'true') {
      el.setAttribute('aria-checked', 'false');
      setChecked(false);
    } else {
      el.setAttribute('aria-checked', 'true');
      setChecked(true);
    }
  };

  const handleKeypress = (evt: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = evt.keyCode || evt.which;
    if (keyCode === 13) {
      evt.preventDefault();
      const target = evt.target as HTMLElement;
      target.click();
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(evt);
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
        disabled={isDisabled}
        onChange={handleChange}
        onClick={handleClick}
        onKeyPress={handleKeypress}
        role="switch"
      />
      <span className={switchSpan()} aria-hidden="true" />
      {labelPosition === 'right' && <span className={switchLabel()}>{label}</span>}
    </label>
  );
};
