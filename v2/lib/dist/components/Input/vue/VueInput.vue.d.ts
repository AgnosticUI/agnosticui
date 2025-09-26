
export interface VueInputProps {
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
}
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueInputProps>, {
    label: string;
    labelHidden: boolean;
    noLabel: boolean;
    ariaLabel: string;
    labelledBy: string;
    type: string;
    value: string;
    placeholder: string;
    rows: number;
    cols: number;
    size: string;
    isRounded: boolean;
    isUnderlined: boolean;
    isUnderlinedWithBackground: boolean;
    isInline: boolean;
    hasLeftAddon: boolean;
    hasRightAddon: boolean;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    invalid: boolean;
    errorMessage: string;
    helpText: string;
}>>, {
    focus: () => void;
    blur: () => void;
    select: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: Event) => void;
    focus: (event: Event) => void;
    change: (event: Event) => void;
    input: (event: Event) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueInputProps>, {
    label: string;
    labelHidden: boolean;
    noLabel: boolean;
    ariaLabel: string;
    labelledBy: string;
    type: string;
    value: string;
    placeholder: string;
    rows: number;
    cols: number;
    size: string;
    isRounded: boolean;
    isUnderlined: boolean;
    isUnderlinedWithBackground: boolean;
    isInline: boolean;
    hasLeftAddon: boolean;
    hasRightAddon: boolean;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    invalid: boolean;
    errorMessage: string;
    helpText: string;
}>>> & Readonly<{
    onBlur?: ((event: Event) => any) | undefined;
    onFocus?: ((event: Event) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
}>, {
    type: string;
    disabled: boolean;
    ariaLabel: string;
    invalid: boolean;
    label: string;
    size: "small" | "default" | "large";
    readonly: boolean;
    labelledBy: string;
    value: string;
    required: boolean;
    labelHidden: boolean;
    noLabel: boolean;
    rows: number;
    cols: number;
    isRounded: boolean;
    isUnderlined: boolean;
    isUnderlinedWithBackground: boolean;
    isInline: boolean;
    hasLeftAddon: boolean;
    hasRightAddon: boolean;
    errorMessage: string;
    helpText: string;
    placeholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VueInput.vue.d.ts.map