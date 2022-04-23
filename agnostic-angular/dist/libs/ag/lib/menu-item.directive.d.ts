import { ElementRef } from '@angular/core';
import { MenuBase } from './menu.types';
import * as i0 from "@angular/core";
export declare class MenuItemDirective {
    el: ElementRef<HTMLButtonElement>;
    private menu;
    isSelected: boolean;
    isRounded: boolean;
    isSmall: boolean;
    isLarge: boolean;
    get disabled(): boolean;
    constructor(el: ElementRef<HTMLButtonElement>, menu: MenuBase);
    onClick(): void;
    onKeydown(ev: KeyboardEvent): void;
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MenuItemDirective, "button[ag-menu-item]", never, { "isSelected": "isSelected"; }, {}, never>;
}
