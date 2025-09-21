
export interface VueButtonProps {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    toggle?: boolean;
    pressed?: boolean;
    ariaLabel?: string;
    ariaDescribedby?: string;
}
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueButtonProps>, {
    type: string;
    disabled: boolean;
    loading: boolean;
    toggle: boolean;
    pressed: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: Event) => void;
    toggle: (detail: {
        pressed: boolean;
    }) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueButtonProps>, {
    type: string;
    disabled: boolean;
    loading: boolean;
    toggle: boolean;
    pressed: boolean;
}>>> & Readonly<{
    onClick?: ((event: Event) => any) | undefined;
    onToggle?: ((detail: {
        pressed: boolean;
    }) => any) | undefined;
}>, {
    type: "button" | "submit" | "reset";
    disabled: boolean;
    toggle: boolean;
    loading: boolean;
    pressed: boolean;
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
//# sourceMappingURL=VueButton.vue.d.ts.map