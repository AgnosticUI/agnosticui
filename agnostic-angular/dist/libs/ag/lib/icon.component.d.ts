import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IconComponent implements OnInit {
    $element: ElementRef<HTMLSpanElement>;
    size?: 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 64;
    type: 'warning' | 'error' | 'success' | 'info' | '';
    isSkinned?: boolean;
    constructor($element: ElementRef<HTMLSpanElement>);
    ngOnInit(): void;
    get iconClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "ag-icon", never, { "size": "size"; "type": "type"; "isSkinned": "isSkinned"; }, {}, never, ["*"]>;
}
