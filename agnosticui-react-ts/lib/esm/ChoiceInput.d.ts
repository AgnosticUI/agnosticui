import React, { FC } from 'react';
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
export declare const Choice: FC<ChoiceProps>;
export interface ChoiceInputProps {
    uniqueId: string;
    legendLabel: string;
    isInline?: boolean;
    isFieldset?: boolean;
    isDisabled?: boolean;
    type?: 'checkbox' | 'radio';
    size?: 'small' | 'large' | '';
    options: any[];
    disabledOptions?: any[];
    checkedOptions?: any[];
    onChange: (checkedItems: any[]) => void;
}
export declare const ChoiceInput: FC<ChoiceInputProps>;
