import * as i0 from "@angular/core";
export declare class DividerComponent {
    hasContent?: boolean;
    isVertical?: boolean;
    justify?: 'start' | 'end' | '';
    type?: 'info' | 'success' | 'error' | 'warning' | '';
    size?: 'small' | 'large' | 'xlarge' | '';
    get dividerClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DividerComponent, "ag-divider", never, { "hasContent": "hasContent"; "isVertical": "isVertical"; "justify": "justify"; "type": "type"; "size": "size"; }, {}, never, ["*"]>;
}
