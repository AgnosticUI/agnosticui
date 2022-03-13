import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ChoiceInputComponent {
    constructor() {
        this.isInline = false;
        this.isFieldset = true;
        this.isSkinned = true;
        this.isDisabled = false;
        this.isInvalid = false;
        this.options = [];
        this._checkedOptions = [];
        this.legendLabel = '';
        this.type = 'checkbox';
        this.size = '';
        this.selected = new EventEmitter();
    }
    get checkedOptions() {
        return this._checkedOptions;
    }
    set checkedOptions(val) {
        this._checkedOptions = val;
    }
    labelSpanClasses() {
        return [
            this.type ? `${this.type}-label` : '',
            this.size ? `${this.type}-label-${this.size}` : '',
            this.isInvalid ? 'choice-input-error' : '',
        ].filter(c => c.length).join(' ');
    }
    labelSpanCopyClasses() {
        return [
            this.type ? `${this.type}-label` : '',
            this.size ? `${this.type}-label-${this.size}` : '',
            this.isInvalid ? 'choice-input-error' : '',
        ].filter(c => c.length).join(' ');
    }
    handleChange(ev) {
        const el = ev.target;
        const value = el.value;
        if (this.type === 'checkbox') {
            let checkedItemsUpdated;
            if (this.checkedOptions?.includes(value)) {
                checkedItemsUpdated = this.checkedOptions?.filter((item) => item !== value);
                this.checkedOptions = checkedItemsUpdated;
            }
            else {
                checkedItemsUpdated = [...this.checkedOptions, value];
                this.checkedOptions = checkedItemsUpdated;
            }
            this.selected.emit(checkedItemsUpdated);
        }
        else {
            if (this.checkedOptions?.includes(value)) {
                this.checkedOptions = [value];
                this.selected.emit(this.checkedOptions);
            }
        }
    }
    inputClasses() {
        return [
            `${this.type}`,
            this.size ? `${this.size}` : '',
            this.isDisabled ? 'disabled' : '',
        ].filter(c => c.length).join(' ');
    }
    fieldsetClass() {
        const skin = this.isSkinned ? `${this.type}-group` : '';
        const sizeSkin = this.isSkinned && this.size === 'large'
            ? `${this.type}-group-${this.size}`
            : '';
        const overrides = this.css ? `${this.css}` : '';
        return [
            overrides ? overrides : '',
            skin,
            sizeSkin,
            this.isFieldset === false ? `${this.type}-group-hidden` : '',
        ].filter(c => c.length).join(' ');
    }
    legendClasses() {
        const skin = this.isSkinned ? `${this.type}-legend` : '';
        return [
            skin,
            this.isFieldset === false ? 'screenreader-only' : null,
        ].filter(c => c).join(' ');
    }
    labelClasses() {
        return [
            this.type ? `${this.type}-label-wrap` : '',
            this.isInline ? `${this.type}-label-wrap-inline` : '',
        ].filter(c => c.length).join(' ');
    }
}
ChoiceInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ChoiceInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChoiceInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ChoiceInputComponent, selector: "ag-choice-input", inputs: { isInline: "isInline", isFieldset: "isFieldset", isSkinned: "isSkinned", isDisabled: "isDisabled", isInvalid: "isInvalid", options: "options", disabledOptions: "disabledOptions", checkedOptions: "checkedOptions", css: "css", legendLabel: "legendLabel", type: "type", size: "size" }, outputs: { selected: "selected" }, ngImport: i0, template: `<fieldset [ngClass]="fieldsetClass()">
    <legend [ngClass]="legendClasses()">{{ legendLabel }}</legend>
    <ng-container *ngFor="let option of options">
      <label
        [attr.disabled]="isDisabled || disabledOptions?.includes(option.value)"
        [ngClass]="labelClasses()"
      >
        <input
          [ngClass]="inputClasses()"
          [type]="type"
          [name]="option.name"
          [value]="option.value"
          [disabled]="isDisabled || disabledOptions?.includes(option.value)"
          [checked]="checkedOptions?.includes(option.value) || false"
          (change)="this.handleChange($event)"
        />
        <span [ngClass]="labelSpanClasses()"></span>
        <span [ngClass]="labelSpanCopyClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`, isInline: true, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label-copy,.radio-label-copy,.checkbox-label,.radio-label{display:inline-flex;position:relative;align-items:center;flex-wrap:wrap}.checkbox-label-copy-small,.radio-label-copy-small{font-size:var(--agnostic-small)}.checkbox-label-copy-large,.radio-label-copy-large{font-size:calc(var(--agnostic-body) + 2px)}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:1px;width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4));top:0}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]~.checkbox-label-copy,.radio[disabled]~.radio-label-copy,.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}.choice-input-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ChoiceInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-choice-input', template: `<fieldset [ngClass]="fieldsetClass()">
    <legend [ngClass]="legendClasses()">{{ legendLabel }}</legend>
    <ng-container *ngFor="let option of options">
      <label
        [attr.disabled]="isDisabled || disabledOptions?.includes(option.value)"
        [ngClass]="labelClasses()"
      >
        <input
          [ngClass]="inputClasses()"
          [type]="type"
          [name]="option.name"
          [value]="option.value"
          [disabled]="isDisabled || disabledOptions?.includes(option.value)"
          [checked]="checkedOptions?.includes(option.value) || false"
          (change)="this.handleChange($event)"
        />
        <span [ngClass]="labelSpanClasses()"></span>
        <span [ngClass]="labelSpanCopyClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label-copy,.radio-label-copy,.checkbox-label,.radio-label{display:inline-flex;position:relative;align-items:center;flex-wrap:wrap}.checkbox-label-copy-small,.radio-label-copy-small{font-size:var(--agnostic-small)}.checkbox-label-copy-large,.radio-label-copy-large{font-size:calc(var(--agnostic-body) + 2px)}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:1px;width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4));top:0}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]~.checkbox-label-copy,.radio[disabled]~.radio-label-copy,.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}.choice-input-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{outline:2px solid transparent;outline-offset:-2px}}\n"] }]
        }], propDecorators: { isInline: [{
                type: Input
            }], isFieldset: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isInvalid: [{
                type: Input
            }], options: [{
                type: Input
            }], disabledOptions: [{
                type: Input
            }], checkedOptions: [{
                type: Input
            }], css: [{
                type: Input
            }], legendLabel: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], selected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9jaG9pY2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDOzs7QUFpQ3ZCLE1BQU0sT0FBTyxvQkFBb0I7SUExQmpDO1FBMkJXLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUM1QixZQUFPLEdBQXlCLEVBQUUsQ0FBQztRQUdwQyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQVU5QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQXlCLFVBQVUsQ0FBQztRQUV4QyxTQUFJLEdBQTJCLEVBQUUsQ0FBQztRQUVqQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztLQXFGbkQ7SUFuR0MsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDSSxjQUFjLENBQUMsR0FBYTtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztJQUM3QixDQUFDO0lBVUQsZ0JBQWdCO1FBQ2QsT0FBTztZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMs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QU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7aUhBNUdVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLDhYQXhCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBb0JFOzJGQUlELG9CQUFvQjtrQkExQmhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQW9CRSxtQkFFSyx1QkFBdUIsQ0FBQyxNQUFNOzhCQUd0QyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBT0YsY0FBYztzQkFEakIsS0FBSztnQkFLRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENob2ljZUlucHV0T3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctY2hvaWNlLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZmllbGRzZXQgW25nQ2xhc3NdPVwiZmllbGRzZXRDbGFzcygpXCI+XG4gICAgPGxlZ2VuZCBbbmdDbGFzc109XCJsZWdlbmRDbGFzc2VzKClcIj57eyBsZWdlbmRMYWJlbCB9fTwvbGVnZW5kPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZCB8fCBkaXNhYmxlZE9wdGlvbnM/LmluY2x1ZGVzKG9wdGlvbi52YWx1ZSlcIlxuICAgICAgICBbbmdDbGFzc109XCJsYWJlbENsYXNzZXMoKVwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NlcygpXCJcbiAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgICAgICBbbmFtZV09XCJvcHRpb24ubmFtZVwiXG4gICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQgfHwgZGlzYWJsZWRPcHRpb25zPy5pbmNsdWRlcyhvcHRpb24udmFsdWUpXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkT3B0aW9ucz8uaW5jbHVkZXMob3B0aW9uLnZhbHVlKSB8fCBmYWxzZVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJ0aGlzLmhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwibGFiZWxTcGFuQ2xhc3NlcygpXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJsYWJlbFNwYW5Db3B5Q2xhc3NlcygpXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9maWVsZHNldD5gLFxuICBzdHlsZVVybHM6IFsnLi9jaG9pY2UtaW5wdXQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaG9pY2VJbnB1dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzSW5saW5lPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0ZpZWxkc2V0PzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzU2tpbm5lZD86IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0ludmFsaWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBDaG9pY2VJbnB1dE9wdGlvbltdID0gW107XG4gIEBJbnB1dCgpIGRpc2FibGVkT3B0aW9ucz86IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgX2NoZWNrZWRPcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBnZXQgY2hlY2tlZE9wdGlvbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkT3B0aW9ucztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZE9wdGlvbnModmFsOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NoZWNrZWRPcHRpb25zID0gdmFsO1xuICB9XG5cbiAgQElucHV0KCkgY3NzPzogc3RyaW5nO1xuICBASW5wdXQoKSBsZWdlbmRMYWJlbCA9ICcnO1xuICBASW5wdXQoKSB0eXBlOiAncmFkaW8nIHwgJ2NoZWNrYm94JyA9ICdjaGVja2JveCc7XG4gIC8vIE1lZGl1bSBpcyBkZWZhdWx0IHNvIHdlIGp1c3QgdXNlIGVtcHR5IHN0cmluZ1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ2xhcmdlJyB8ICcnID0gJyc7XG4gIC8vIFRPRE8gdHlwZSB0aGlzXG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgbGFiZWxTcGFuQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy50eXBlID8gYCR7dGhpcy50eXBlfS1sYWJlbGAgOiAnJyxcbiAgICAgIHRoaXMuc2l6ZSA/IGAke3RoaXMudHlwZX0tbGFiZWwtJHt0aGlzLnNpemV9YCA6ICcnLFxuICAgICAgdGhpcy5pc0ludmFsaWQgPyAnY2hvaWNlLWlucHV0LWVycm9yJyA6ICcnLFxuICAgIF0uZmlsdGVyKGMgPT4gYy5sZW5ndGgpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGxhYmVsU3BhbkNvcHlDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLnR5cGUgPyBgJHt0aGlzLnR5cGV9LWxhYmVsYCA6ICcnLFxuICAgICAgdGhpcy5zaXplID8gYCR7dGhpcy50eXBlfS1sYWJlbC0ke3RoaXMuc2l6ZX1gIDogJycsXG4gICAgICB0aGlzLmlzSW52YWxpZCA/ICdjaG9pY2UtaW5wdXQtZXJyb3InIDogJycsXG4gICAgXS5maWx0ZXIoYyA9PiBjLmxlbmd0aCkuam9pbignICcpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVsID0gZXYudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgdmFsdWUgPSBlbC52YWx1ZTtcbiAgICBpZiAodGhpcy50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBsZXQgY2hlY2tlZEl0ZW1zVXBkYXRlZDogc3RyaW5nW107XG4gICAgICBpZiAodGhpcy5jaGVja2VkT3B0aW9ucz8uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIGNoZWNrZWRJdGVtc1VwZGF0ZWQgPSB0aGlzLmNoZWNrZWRPcHRpb25zPy5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0gIT09IHZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnMgPSBjaGVja2VkSXRlbXNVcGRhdGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tlZEl0ZW1zVXBkYXRlZCA9IFsuLi50aGlzLmNoZWNrZWRPcHRpb25zLCB2YWx1ZV07XG4gICAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnMgPSBjaGVja2VkSXRlbXNVcGRhdGVkO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KGNoZWNrZWRJdGVtc1VwZGF0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUeXBlIGlzIHJhZGlvLiBXZSBpZ25vcmUgaWYgdGhleSdyZSB0cnlpbmcgdG8gY2hlY2sgdGhlIGN1cnJlbnRseSBjaGVja2VkXG4gICAgICBpZiAodGhpcy5jaGVja2VkT3B0aW9ucz8uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIC8vIFNpbmNlIHlvdSBjYW4gb25seSBoYXZlIG9uZSBjaGVja2VkIHJhZGlvIGF0IGEgdGltZSwgd2Ugc2ltcGx5XG4gICAgICAgIC8vIHNldCB0byB0aGUgbmV3IHJhZGlvIHRvIGJlIGNoZWNrZWRcbiAgICAgICAgdGhpcy5jaGVja2VkT3B0aW9ucyA9IFt2YWx1ZV07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzLmNoZWNrZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW5wdXRDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBgJHt0aGlzLnR5cGV9YCxcbiAgICAgIHRoaXMuc2l6ZSA/IGAke3RoaXMuc2l6ZX1gIDogJycsXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXG4gICAgXS5maWx0ZXIoYyA9PiBjLmxlbmd0aCkuam9pbignICcpO1xuICB9XG5cbiAgZmllbGRzZXRDbGFzcygpIHtcbiAgICAvLyBJZiBjb25zdW1lciBzZXRzIGlzIHNraW5uZWQgdG8gZmFsc2Ugd2UgZG9uJ3Qgc3R5bGUgdGhlIGZpZWxkc2V0XG4gICAgY29uc3Qgc2tpbiA9IHRoaXMuaXNTa2lubmVkID8gYCR7dGhpcy50eXBlfS1ncm91cGAgOiAnJztcblxuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBmaWVsZHNldCBjbGFzcyBmb3IgbGFyZ2UgKG5vdCBzbWFsbCkgZS5nLiByYWRpb3xjaGVja2JveC1ncm91cC1sYXJnZVxuICAgIGNvbnN0IHNpemVTa2luID1cbiAgICAgIHRoaXMuaXNTa2lubmVkICYmIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJ1xuICAgICAgICA/IGAke3RoaXMudHlwZX0tZ3JvdXAtJHt0aGlzLnNpemV9YFxuICAgICAgICA6ICcnO1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhpcy5jc3MgPyBgJHt0aGlzLmNzc31gIDogJyc7XG4gICAgcmV0dXJuIFtcbiAgICAgIG92ZXJyaWRlcyA/IG92ZXJyaWRlcyA6ICcnLFxuICAgICAgc2tpbixcbiAgICAgIHNpemVTa2luLFxuICAgICAgdGhpcy5pc0ZpZWxkc2V0ID09PSBmYWxzZSA/IGAke3RoaXMudHlwZX0tZ3JvdXAtaGlkZGVuYCA6ICcnLFxuICAgIF0uZmlsdGVyKGMgPT4gYy5sZW5ndGgpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGxlZ2VuZENsYXNzZXMoKSB7XG4gICAgY29uc3Qgc2tpbiA9IHRoaXMuaXNTa2lubmVkID8gYCR7dGhpcy50eXBlfS1sZWdlbmRgIDogJyc7XG4gICAgcmV0dXJuIFtcbiAgICAgIHNraW4sXG4gICAgICAvLyAuc2NyZWVucmVhZGVyLW9ubHkgaXMgZXhwZWN0ZWQgdG8gYmUgZ2xvYmFsbHkgYXZhaWxhYmxlIHZpYSBjb21tb24ubWluLmNzc1xuICAgICAgdGhpcy5pc0ZpZWxkc2V0ID09PSBmYWxzZSA/ICdzY3JlZW5yZWFkZXItb25seScgOiBudWxsLFxuICAgIF0uZmlsdGVyKGMgPT4gYykuam9pbignICcpO1xuICB9XG5cbiAgbGFiZWxDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLnR5cGUgPyBgJHt0aGlzLnR5cGV9LWxhYmVsLXdyYXBgIDogJycsXG4gICAgICB0aGlzLmlzSW5saW5lID8gYCR7dGhpcy50eXBlfS1sYWJlbC13cmFwLWlubGluZWAgOiAnJyxcbiAgICBdLmZpbHRlcihjID0+IGMubGVuZ3RoKS5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==