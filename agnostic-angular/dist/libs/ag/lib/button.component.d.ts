import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    mode: 'primary' | 'secondary' | undefined;
    type?: 'button' | 'reset' | 'submit' | 'faux';
    size?: 'small' | 'medium' | 'large';
    css?: string;
    isDisabled?: true | false;
    isSkinned?: boolean;
    isBlank?: boolean;
    isLink?: boolean;
    isCircle?: boolean;
    isBlock?: boolean;
    isBordered?: boolean;
    isCapsule?: boolean;
    isRounded?: boolean;
    handleClick: EventEmitter<MouseEvent>;
    get classes(): string;
    get getDisabled(): boolean;
    get getType(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "ag-button", never, { "mode": "mode"; "type": "type"; "size": "size"; "css": "css"; "isDisabled": "isDisabled"; "isSkinned": "isSkinned"; "isBlank": "isBlank"; "isLink": "isLink"; "isCircle": "isCircle"; "isBlock": "isBlock"; "isBordered": "isBordered"; "isCapsule": "isCapsule"; "isRounded": "isRounded"; }, { "handleClick": "handleClick"; }, never, ["*"]>;
}
