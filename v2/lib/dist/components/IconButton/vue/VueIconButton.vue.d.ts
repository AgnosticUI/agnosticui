
export interface VueIconButtonProps {
    /** Required accessible name for the button */
    label: string;
    /** Icon identifier or name (for icon systems) */
    icon?: string;
    /** Unicode symbol for simple icons (×, ☰, etc.) */
    unicode?: string;
    /** Button size variant */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Visual variant */
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    /** Button type */
    type?: 'button' | 'submit' | 'reset';
    /** Disabled state */
    disabled?: boolean;
    /** Pressed state for toggle buttons */
    pressed?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Additional ARIA label (will override label prop) */
    ariaLabel?: string;
    /** ARIA described by reference */
    ariaDescribedby?: string;
}
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueIconButtonProps>, {
    size: string;
    variant: string;
    type: string;
    disabled: boolean;
    pressed: boolean;
    loading: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: Event) => void;
    activate: (detail: {
        label: string;
        pressed: boolean;
        originalEvent: KeyboardEvent;
    }) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueIconButtonProps>, {
    size: string;
    variant: string;
    type: string;
    disabled: boolean;
    pressed: boolean;
    loading: boolean;
}>>> & Readonly<{
    onClick?: ((event: Event) => any) | undefined;
    onActivate?: ((detail: {
        label: string;
        pressed: boolean;
        originalEvent: KeyboardEvent;
    }) => any) | undefined;
}>, {
    type: "button" | "submit" | "reset";
    disabled: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    variant: "primary" | "secondary" | "ghost" | "danger";
    pressed: boolean;
    loading: boolean;
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
//# sourceMappingURL=VueIconButton.vue.d.ts.map