import * as i0 from "@angular/core";
export declare class IconComponent {
    size?: 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 64;
    type: 'warning' | 'error' | 'success' | 'info' | '';
    isSkinned?: boolean;
    get iconClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "ag-icon", never, { "size": "size"; "type": "type"; "isSkinned": "isSkinned"; }, {}, never, ["*"]>;
}
