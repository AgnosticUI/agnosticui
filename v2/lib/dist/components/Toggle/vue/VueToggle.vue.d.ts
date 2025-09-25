
export interface VueToggleProps {
    label?: string;
    checked?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    readonly?: boolean;
    labelledBy?: string;
    describedBy?: string;
    name?: string;
    value?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueToggleProps>, {
    checked: boolean;
    size: string;
    variant: string;
    disabled: boolean;
    readonly: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "toggle-change": (detail: {
        checked: boolean;
        name: string;
        value: string;
    }) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueToggleProps>, {
    checked: boolean;
    size: string;
    variant: string;
    disabled: boolean;
    readonly: boolean;
}>>> & Readonly<{
    "onToggle-change"?: ((detail: {
        checked: boolean;
        name: string;
        value: string;
    }) => any) | undefined;
}>, {
    disabled: boolean;
    checked: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    variant: "default" | "success" | "warning" | "danger";
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
//# sourceMappingURL=VueToggle.vue.d.ts.map