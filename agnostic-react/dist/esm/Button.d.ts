import { FC, HTMLAttributes, ReactNode } from 'react';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    mode?: string;
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
    children?: ReactNode;
}
export declare const Button: FC<ButtonProps>;
export interface ButtonGroupProps {
    ariaLabel: string;
    css?: string;
    children: ReactNode;
}
export declare const ButtonGroup: FC<ButtonGroupProps>;
