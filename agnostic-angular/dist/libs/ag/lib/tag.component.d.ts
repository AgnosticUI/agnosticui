import * as i0 from "@angular/core";
export declare class TagComponent {
    type: 'warning' | 'error' | 'info' | 'success' | '';
    shape: 'pill' | 'round' | 'circle' | '';
    isUppercase?: boolean;
    get tagClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagComponent, "ag-tag", never, { "type": "type"; "shape": "shape"; "isUppercase": "isUppercase"; }, {}, never, ["*"]>;
}
