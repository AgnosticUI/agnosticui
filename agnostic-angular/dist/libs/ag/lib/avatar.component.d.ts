import * as i0 from "@angular/core";
export declare class AvatarGroupComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarGroupComponent, "ag-avatar-group", never, {}, {}, never, ["*"]>;
}
export declare class AvatarComponent {
    isRounded: boolean;
    isSquare: boolean;
    isTransparent: boolean;
    type: 'warning' | 'error' | 'info' | 'success' | '';
    size: 'small' | 'large' | 'xlarge' | '';
    text: string;
    get avatarClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "ag-avatar", never, { "isRounded": "isRounded"; "isSquare": "isSquare"; "isTransparent": "isTransparent"; "type": "type"; "size": "size"; "text": "text"; }, {}, never, ["*"]>;
}
