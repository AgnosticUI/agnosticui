import { Input, Output, ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SelectComponent {
    constructor() {
        this.selected = '';
        this.defaultOptionLabel = "Please select an option";
        this.isDisabled = false;
        this.isMultiple = false;
        this.multipleSize = 1;
        this.size = '';
        this.changed = new EventEmitter();
    }
    showDefaultOption() {
        return !this.isMultiple;
    }
    changeSelection(ev) {
        const option = ev.target;
        this.selected = option.value;
        this.changed.emit(this.selected);
    }
    selectClasses() {
        return [
            'select',
            this.size ? `select-${this.size}` : ''
        ].filter(c => c).join(' ');
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SelectComponent, selector: "ag-select", inputs: { uniqueId: "uniqueId", labelCopy: "labelCopy", defaultOptionLabel: "defaultOptionLabel", name: "name", options: "options", isDisabled: "isDisabled", isMultiple: "isMultiple", multipleSize: "multipleSize", size: "size" }, outputs: { changed: "changed" }, ngImport: i0, template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
  <select
    [id]="uniqueId"
    [name]="name"
    [ngClass]="selectClasses()"
    [disabled]="isDisabled"
    [multiple]="isMultiple"
    [size]="isMultiple && multipleSize"
    (change)="changeSelection($event)"
  >
    <option *ngIf="showDefaultOption()" [value]="null" disabled selected> {{ defaultOptionLabel }}</option>
    <option *ngFor="let option of options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>`, isInline: true, styles: [".select,.select-base{display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select,.select-skin{padding:var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);-moz-padding-start:calc(var(--fluid-12) - 3px);font-size:var(--fluid-16);font-weight:400;line-height:1.5;color:var(--agnostic-dark);background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right var(--fluid-12) center;background-size:var(--fluid-16) var(--fluid-12);border:1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));border-radius:var(--agnostic-radius);transition:border-color var(--agnostic-timing-fast) ease-in-out,box-shadow var(--agnostic-timing-fast) ease-in-out}.select:focus{border-color:var(--agnostic-focus-ring-color);box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.select-base,.select:disabled{background-color:var(--agnostic-disabled-bg)}.select-base,.select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--agnostic-dark)}@media (prefers-reduced-motion),(update: slow){.select,.select-base,.select:focus{transition:none}}.select-small{padding-top:var(--fluid-4);padding-bottom:var(--fluid-4);padding-left:var(--fluid-8);font-size:var(--fluid-14)}.select-large{padding-top:var(--fluid-8);padding-bottom:var(--fluid-8);padding-left:var(--fluid-16);font-size:var(--fluid-18)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-select',
                    template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
  <select
    [id]="uniqueId"
    [name]="name"
    [ngClass]="selectClasses()"
    [disabled]="isDisabled"
    [multiple]="isMultiple"
    [size]="isMultiple && multipleSize"
    (change)="changeSelection($event)"
  >
    <option *ngIf="showDefaultOption()" [value]="null" disabled selected> {{ defaultOptionLabel }}</option>
    <option *ngFor="let option of options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>`,
                    styleUrls: ['./select.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { uniqueId: [{
                type: Input
            }], labelCopy: [{
                type: Input
            }], defaultOptionLabel: [{
                type: Input
            }], name: [{
                type: Input
            }], options: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isMultiple: [{
                type: Input
            }], multipleSize: [{
                type: Input
            }], size: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=select.component.js.map