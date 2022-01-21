import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ChoiceInputComponent {
    constructor() {
        this.isInline = false;
        this.isFieldset = true;
        this.isSkinned = true;
        this.isDisabled = false;
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
        let klasses = [
            this.type ? `${this.type}-label` : '',
            this.size ? `${this.type}-label-${this.size}` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
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
        let inputKlasses = [
            `${this.type}`,
            this.size ? `${this.size}` : '',
            this.isDisabled ? 'disabled' : '',
        ];
        inputKlasses = inputKlasses.filter((klass) => klass.length);
        return inputKlasses.join(' ');
    }
    fieldsetClass() {
        const skin = this.isSkinned ? `${this.type}-group` : '';
        const sizeSkin = this.isSkinned && this.size === 'large'
            ? `${this.type}-group-${this.size}`
            : '';
        const overrides = this.css ? `${this.css}` : '';
        const klasses = [
            overrides ? overrides : '',
            skin,
            sizeSkin,
            this.isFieldset === false ? `${this.type}-group-hidden` : '',
        ];
        return klasses.filter((klass) => klass.length);
    }
    legendClasses() {
        const skin = this.isSkinned ? `${this.type}-legend` : '';
        const klasses = [
            skin,
            this.isFieldset === false ? 'screenreader-only' : null,
        ];
        return klasses.join(' ');
    }
    labelClasses() {
        let klasses = [
            this.type ? `${this.type}-label-wrap` : '',
            this.isInline ? `${this.type}-label-wrap-inline` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
ChoiceInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ChoiceInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChoiceInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ChoiceInputComponent, selector: "ag-choice-input", inputs: { isInline: "isInline", isFieldset: "isFieldset", isSkinned: "isSkinned", isDisabled: "isDisabled", options: "options", disabledOptions: "disabledOptions", checkedOptions: "checkedOptions", css: "css", legendLabel: "legendLabel", type: "type", size: "size" }, outputs: { selected: "selected" }, ngImport: i0, template: `<fieldset [ngClass]="fieldsetClass()">
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
        <span [ngClass]="labelSpanClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`, isInline: true, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:block;cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label,.radio-label{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]+.checkbox-label,.radio[disabled]+.radio-label,.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
        <span [ngClass]="labelSpanClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:block;cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label,.radio-label{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]+.checkbox-label,.radio[disabled]+.radio-label,.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"] }]
        }], propDecorators: { isInline: [{
                type: Input
            }], isFieldset: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isDisabled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9jaG9pY2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDOzs7QUEyQnZCLE1BQU0sT0FBTyxvQkFBb0I7SUF6QmpDO1FBMEJXLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUd0QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQVUzQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQXlCLFVBQVUsQ0FBQztRQUV4QyxTQUFJLEdBQTJCLEVBQUUsQ0FBQztRQUVqQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWdGOUM7SUE5RkMsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDSSxjQUFjLENBQUMsR0FBVTtRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztJQUM3QixDQUFDO0lBVUQsZ0JBQWdCO1FBQ2QsSUFBSSxPQUFPLEdBQUc7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NB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QWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQU9GLGNBQWM7c0JBRGpCLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctY2hvaWNlLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZmllbGRzZXQgW25nQ2xhc3NdPVwiZmllbGRzZXRDbGFzcygpXCI+XG4gICAgPGxlZ2VuZCBbbmdDbGFzc109XCJsZWdlbmRDbGFzc2VzKClcIj57eyBsZWdlbmRMYWJlbCB9fTwvbGVnZW5kPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZCB8fCBkaXNhYmxlZE9wdGlvbnM/LmluY2x1ZGVzKG9wdGlvbi52YWx1ZSlcIlxuICAgICAgICBbbmdDbGFzc109XCJsYWJlbENsYXNzZXMoKVwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NlcygpXCJcbiAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgICAgICBbbmFtZV09XCJvcHRpb24ubmFtZVwiXG4gICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQgfHwgZGlzYWJsZWRPcHRpb25zPy5pbmNsdWRlcyhvcHRpb24udmFsdWUpXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkT3B0aW9ucz8uaW5jbHVkZXMob3B0aW9uLnZhbHVlKSB8fCBmYWxzZVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJ0aGlzLmhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwibGFiZWxTcGFuQ2xhc3NlcygpXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9maWVsZHNldD5gLFxuICBzdHlsZVVybHM6IFsnLi9jaG9pY2UtaW5wdXQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaG9pY2VJbnB1dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzSW5saW5lPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0ZpZWxkc2V0PzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzU2tpbm5lZD86IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvcHRpb25zPzogYW55W10gPSBbXTtcbiAgQElucHV0KCkgZGlzYWJsZWRPcHRpb25zPzogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSBfY2hlY2tlZE9wdGlvbnM6IGFueVtdID0gW107XG4gIGdldCBjaGVja2VkT3B0aW9ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWRPcHRpb25zO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjaGVja2VkT3B0aW9ucyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fY2hlY2tlZE9wdGlvbnMgPSB2YWw7XG4gIH1cblxuICBASW5wdXQoKSBjc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxlZ2VuZExhYmVsID0gJyc7XG4gIEBJbnB1dCgpIHR5cGU6ICdyYWRpbycgfCAnY2hlY2tib3gnID0gJ2NoZWNrYm94JztcbiAgLy8gTWVkaXVtIGlzIGRlZmF1bHQgc28gd2UganVzdCB1c2UgZW1wdHkgc3RyaW5nXG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJycgPSAnJztcbiAgLy8gVE9ETyB0eXBlIHRoaXNcbiAgQE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgbGFiZWxTcGFuQ2xhc3NlcygpIHtcbiAgICBsZXQga2xhc3NlcyA9IFtcbiAgICAgIHRoaXMudHlwZSA/IGAke3RoaXMudHlwZX0tbGFiZWxgIDogJycsXG4gICAgICB0aGlzLnNpemUgPyBgJHt0aGlzLnR5cGV9LWxhYmVsLSR7dGhpcy5zaXplfWAgOiAnJyxcbiAgICBdO1xuICAgIGtsYXNzZXMgPSBrbGFzc2VzLmZpbHRlcigoa2xhc3MpID0+IGtsYXNzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGtsYXNzZXMuam9pbignICcpO1xuICB9XG4gIGhhbmRsZUNoYW5nZShldjogRXZlbnQpIHtcbiAgICBjb25zdCBlbCA9IGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHZhbHVlID0gZWwudmFsdWU7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgbGV0IGNoZWNrZWRJdGVtc1VwZGF0ZWQ7XG4gICAgICBpZiAodGhpcy5jaGVja2VkT3B0aW9ucz8uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIGNoZWNrZWRJdGVtc1VwZGF0ZWQgPSB0aGlzLmNoZWNrZWRPcHRpb25zPy5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0gIT09IHZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnMgPSBjaGVja2VkSXRlbXNVcGRhdGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tlZEl0ZW1zVXBkYXRlZCA9IFsuLi50aGlzLmNoZWNrZWRPcHRpb25zLCB2YWx1ZV07XG4gICAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnMgPSBjaGVja2VkSXRlbXNVcGRhdGVkO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KGNoZWNrZWRJdGVtc1VwZGF0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUeXBlIGlzIHJhZGlvLiBXZSBpZ25vcmUgaWYgdGhleSdyZSB0cnlpbmcgdG8gY2hlY2sgdGhlIGN1cnJlbnRseSBjaGVja2VkXG4gICAgICBpZiAodGhpcy5jaGVja2VkT3B0aW9ucz8uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIC8vIFNpbmNlIHlvdSBjYW4gb25seSBoYXZlIG9uZSBjaGVja2VkIHJhZGlvIGF0IGEgdGltZSwgd2Ugc2ltcGx5XG4gICAgICAgIC8vIHNldCB0byB0aGUgbmV3IHJhZGlvIHRvIGJlIGNoZWNrZWRcbiAgICAgICAgdGhpcy5jaGVja2VkT3B0aW9ucyA9IFt2YWx1ZV07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzLmNoZWNrZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW5wdXRDbGFzc2VzKCkge1xuICAgIGxldCBpbnB1dEtsYXNzZXMgPSBbXG4gICAgICBgJHt0aGlzLnR5cGV9YCxcbiAgICAgIHRoaXMuc2l6ZSA/IGAke3RoaXMuc2l6ZX1gIDogJycsXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXG4gICAgXTtcbiAgICBpbnB1dEtsYXNzZXMgPSBpbnB1dEtsYXNzZXMuZmlsdGVyKChrbGFzcykgPT4ga2xhc3MubGVuZ3RoKTtcbiAgICByZXR1cm4gaW5wdXRLbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuICBmaWVsZHNldENsYXNzKCkge1xuICAgIC8vIElmIGNvbnN1bWVyIHNldHMgaXMgc2tpbm5lZCB0byBmYWxzZSB3ZSBkb24ndCBzdHlsZSB0aGUgZmllbGRzZXRcbiAgICBjb25zdCBza2luID0gdGhpcy5pc1NraW5uZWQgPyBgJHt0aGlzLnR5cGV9LWdyb3VwYCA6ICcnO1xuXG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGZpZWxkc2V0IGNsYXNzIGZvciBsYXJnZSAobm90IHNtYWxsKSBlLmcuIHJhZGlvfGNoZWNrYm94LWdyb3VwLWxhcmdlXG4gICAgY29uc3Qgc2l6ZVNraW4gPVxuICAgICAgdGhpcy5pc1NraW5uZWQgJiYgdGhpcy5zaXplID09PSAnbGFyZ2UnXG4gICAgICAgID8gYCR7dGhpcy50eXBlfS1ncm91cC0ke3RoaXMuc2l6ZX1gXG4gICAgICAgIDogJyc7XG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLmNzcyA/IGAke3RoaXMuY3NzfWAgOiAnJztcbiAgICBjb25zdCBrbGFzc2VzID0gW1xuICAgICAgb3ZlcnJpZGVzID8gb3ZlcnJpZGVzIDogJycsXG4gICAgICBza2luLFxuICAgICAgc2l6ZVNraW4sXG4gICAgICB0aGlzLmlzRmllbGRzZXQgPT09IGZhbHNlID8gYCR7dGhpcy50eXBlfS1ncm91cC1oaWRkZW5gIDogJycsXG4gICAgXTtcbiAgICByZXR1cm4ga2xhc3Nlcy5maWx0ZXIoKGtsYXNzKSA9PiBrbGFzcy5sZW5ndGgpO1xuICB9XG4gIGxlZ2VuZENsYXNzZXMoKSB7XG4gICAgY29uc3Qgc2tpbiA9IHRoaXMuaXNTa2lubmVkID8gYCR7dGhpcy50eXBlfS1sZWdlbmRgIDogJyc7XG4gICAgY29uc3Qga2xhc3NlcyA9IFtcbiAgICAgIHNraW4sXG4gICAgICAvLyAuc2NyZWVucmVhZGVyLW9ubHkgaXMgZXhwZWN0ZWQgdG8gYmUgZ2xvYmFsbHkgYXZhaWxhYmxlIHZpYSBjb21tb24ubWluLmNzc1xuICAgICAgdGhpcy5pc0ZpZWxkc2V0ID09PSBmYWxzZSA/ICdzY3JlZW5yZWFkZXItb25seScgOiBudWxsLFxuICAgIF07XG4gICAgcmV0dXJuIGtsYXNzZXMuam9pbignICcpO1xuICB9XG4gIGxhYmVsQ2xhc3NlcygpIHtcbiAgICBsZXQga2xhc3NlcyA9IFtcbiAgICAgIHRoaXMudHlwZSA/IGAke3RoaXMudHlwZX0tbGFiZWwtd3JhcGAgOiAnJyxcbiAgICAgIHRoaXMuaXNJbmxpbmUgPyBgJHt0aGlzLnR5cGV9LWxhYmVsLXdyYXAtaW5saW5lYCA6ICcnLFxuICAgIF07XG4gICAga2xhc3NlcyA9IGtsYXNzZXMuZmlsdGVyKChrbGFzcykgPT4ga2xhc3MubGVuZ3RoKTtcbiAgICByZXR1cm4ga2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==