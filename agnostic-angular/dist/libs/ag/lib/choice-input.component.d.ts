import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChoiceInputComponent {
    isInline?: boolean;
    isFieldset?: boolean;
    isSkinned?: boolean;
    isDisabled?: boolean;
    options?: any[];
    disabledOptions?: string[];
    private _checkedOptions;
    get checkedOptions(): any[];
    set checkedOptions(val: any[]);
    css?: string;
    legendLabel: string;
    type: 'radio' | 'checkbox';
    size: 'small' | 'large' | '';
    selected: EventEmitter<any>;
    labelSpanClasses(): string;
    handleChange(ev: Event): void;
    inputClasses(): string;
    fieldsetClass(): string[];
    legendClasses(): string;
    labelClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChoiceInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChoiceInputComponent, "ag-choice-input", never, { "isInline": "isInline"; "isFieldset": "isFieldset"; "isSkinned": "isSkinned"; "isDisabled": "isDisabled"; "options": "options"; "disabledOptions": "disabledOptions"; "checkedOptions": "checkedOptions"; "css": "css"; "legendLabel": "legendLabel"; "type": "type"; "size": "size"; }, { "selected": "selected"; }, never, never>;
}
