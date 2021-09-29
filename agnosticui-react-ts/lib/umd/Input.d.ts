import { FC, ReactNode, HTMLAttributes } from 'react';
export interface InputProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    uniqueId: string;
    label: string;
    size?: 'small' | 'large';
    labelCss?: string;
    placeholder?: string;
    helpText?: string;
    invalidText?: string;
    addOnLeft?: ReactNode;
    addOnRight?: ReactNode;
    hasLeftAddon?: boolean;
    hasRightAddon?: boolean;
    inputCss?: string;
    isInvalid?: boolean;
    isRounded?: boolean;
    isDisabled?: boolean;
    isInline?: boolean;
    isSkinned?: boolean;
    isUnderlined?: boolean;
    isUnderlinedWithBackground?: boolean;
    defaultValue?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search' | 'textarea';
    rows?: number;
    cols?: number;
}
export declare const Input: FC<InputProps>;
