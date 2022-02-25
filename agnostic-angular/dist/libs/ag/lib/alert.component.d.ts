import * as i0 from "@angular/core";
export declare class AlertComponent {
    isRounded: boolean;
    isBorderAll: boolean;
    isBorderLeft: boolean;
    isBorderRight: boolean;
    isBorderTop: boolean;
    isBorderBottom: boolean;
    isBlockEnd: boolean;
    type: 'dark' | 'warning' | 'error' | 'info' | 'success' | '';
    isAnimationFadeIn: boolean;
    isAnimationSlideUp: boolean;
    isToast: boolean;
    get ariaLiveValue(): string | undefined;
    get ariaAtomicValue(): boolean | undefined;
    get alertClasses(): string;
    get svgModifierClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "ag-alert", never, { "isRounded": "isRounded"; "isBorderAll": "isBorderAll"; "isBorderLeft": "isBorderLeft"; "isBorderRight": "isBorderRight"; "isBorderTop": "isBorderTop"; "isBorderBottom": "isBorderBottom"; "isBlockEnd": "isBlockEnd"; "type": "type"; "isAnimationFadeIn": "isAnimationFadeIn"; "isAnimationSlideUp": "isAnimationSlideUp"; "isToast": "isToast"; }, {}, never, ["*"]>;
}
