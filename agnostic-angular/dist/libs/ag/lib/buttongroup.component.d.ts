import { QueryList } from '@angular/core';
import { ButtonComponent } from './button.component';
import * as i0 from "@angular/core";
export declare class ButtonGroupComponent {
    buttons: QueryList<ButtonComponent>;
    css?: string;
    ariaLabel: string | undefined;
    get getAriaLabel(): string;
    get classes(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonGroupComponent, "ag-button-group", never, { "css": "css"; "ariaLabel": "ariaLabel"; }, {}, ["buttons"], ["*"]>;
}
