import { BreadcrumbItem } from '../core/_Breadcrumb';

export interface VueBreadcrumbProps {
    items: BreadcrumbItem[];
    type?: 'default' | 'slash' | 'bullet' | 'arrow';
    ariaLabel?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueBreadcrumbProps>, {
    type: string;
    ariaLabel: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "breadcrumb-click": (detail: {
        item: BreadcrumbItem;
        index: number;
        event: MouseEvent;
    }) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueBreadcrumbProps>, {
    type: string;
    ariaLabel: string;
}>>> & Readonly<{
    "onBreadcrumb-click"?: ((detail: {
        item: BreadcrumbItem;
        index: number;
        event: MouseEvent;
    }) => any) | undefined;
}>, {
    type: "default" | "slash" | "bullet" | "arrow";
    ariaLabel: string;
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
//# sourceMappingURL=VueBreadcrumb.vue.d.ts.map