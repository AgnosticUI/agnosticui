import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SwitchComponent {
    label: string;
    css?: string;
    labelPosition: string;
    isDisabled?: boolean;
    isAction?: boolean;
    isBordered?: boolean;
    size?: string | undefined;
    private switchChecked;
    get isChecked(): boolean;
    set isChecked(val: boolean);
    selected: EventEmitter<boolean>;
    toggleChecked(ev: Event): void;
    switchContainer(): string;
    switchSpan(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchComponent, "ag-switch", never, { "label": "label"; "css": "css"; "labelPosition": "labelPosition"; "isDisabled": "isDisabled"; "isAction": "isAction"; "isBordered": "isBordered"; "size": "size"; "isChecked": "isChecked"; }, { "selected": "selected"; }, never, never>;
}
