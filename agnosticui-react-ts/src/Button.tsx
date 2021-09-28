import { FC, HTMLAttributes, ReactChild, ReactNode } from 'react';
import styles from './button.module.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  mode?: string
  size?: 'large' | 'small' | '';
  isSkinned?: boolean;
  isBordered?: boolean;
  isRounded?: boolean;
  isCircle?: boolean;
  isDisabled?: boolean;
  isRaised?: boolean;
  isBlock?: boolean;
  isBlank?: boolean;
  css?: string;
  role?: string;
  type?: 'faux' | 'button' | 'reset' | 'submit';
  children?: ReactChild;
}

export const Button: FC<ButtonProps> = ({
  children,
  mode = '',
  size = '',
  isSkinned = true,
  isBordered = false,
  isRounded = false,
  isCircle = false,
  isDisabled = false,
  isRaised = false,
  isBlock = false,
  isBlank = false,
  css,
  type = 'button',
  ...rest
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
  const classes = klasses.filter((klass) => klass.length).join(' ');

  return type === 'faux' ? (
    <div className={classes}>
      {children}
    </div>
  ) : (
    <button type={type} className={classes} disabled={isDisabled} {...rest}>
      {children}
    </button>
  );
};

export interface ButtonGroupProps {
  ariaLabel: string;
  css?: string;
  children: ReactNode;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ ariaLabel, children, css }) => {
  var props = {
    className: `${styles.group} ${css ? css : ''}`,
    role: 'group',
    ...(ariaLabel && { 'aria-label': ariaLabel }),
  };
  return <div {...props}>{children}</div>;
};
