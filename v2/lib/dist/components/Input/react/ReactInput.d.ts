import { default as React } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                label?: string;
                'label-hidden'?: boolean;
                'no-label'?: boolean;
                'aria-label'?: string;
                'labelled-by'?: string;
                type?: string;
                value?: string;
                placeholder?: string;
                rows?: number;
                cols?: number;
                size?: 'small' | 'default' | 'large';
                'is-rounded'?: boolean;
                'is-underlined'?: boolean;
                'is-underlined-with-background'?: boolean;
                'is-inline'?: boolean;
                'has-left-addon'?: boolean;
                'has-right-addon'?: boolean;
                required?: boolean;
                disabled?: boolean;
                readonly?: boolean;
                invalid?: boolean;
                'error-message'?: string;
                'help-text'?: string;
            }, HTMLElement>;
        }
    }
}
interface ReactInputProps {
    label?: string;
    labelHidden?: boolean;
    noLabel?: boolean;
    ariaLabel?: string;
    labelledBy?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    size?: 'small' | 'default' | 'large';
    isRounded?: boolean;
    isUnderlined?: boolean;
    isUnderlinedWithBackground?: boolean;
    isInline?: boolean;
    hasLeftAddon?: boolean;
    hasRightAddon?: boolean;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    invalid?: boolean;
    errorMessage?: string;
    helpText?: string;
    onChange?: (event: Event) => void;
    onInput?: (event: Event) => void;
    onFocus?: (event: Event) => void;
    onBlur?: (event: Event) => void;
    children?: React.ReactNode;
    className?: string;
    id?: string;
}
export declare const ReactInput: React.FC<ReactInputProps>;
export {};
//# sourceMappingURL=ReactInput.d.ts.map