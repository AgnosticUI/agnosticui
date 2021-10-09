import { FC, HTMLAttributes } from 'react';
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
export declare const Switch: FC<SwitchProps>;
