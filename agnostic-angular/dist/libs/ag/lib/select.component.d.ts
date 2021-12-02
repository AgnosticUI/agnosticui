import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface SelectOptions {
    value: string;
    label: string;
}
export declare class SelectComponent {
    private selected;
    uniqueId: string;
    labelCopy: string;
    defaultOptionLabel?: string;
    name: string;
    options: SelectOptions[];
    isDisabled?: boolean;
    isMultiple?: boolean;
    multipleSize?: number;
    size?: 'small' | 'large' | '';
    changed: EventEmitter<any>;
    showDefaultOption(): boolean;
    changeSelection(ev: Event): void;
    selectClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "ag-select", never, { "uniqueId": "uniqueId"; "labelCopy": "labelCopy"; "defaultOptionLabel": "defaultOptionLabel"; "name": "name"; "options": "options"; "isDisabled": "isDisabled"; "isMultiple": "isMultiple"; "multipleSize": "multipleSize"; "size": "size"; }, { "changed": "changed"; }, never, never>;
}
