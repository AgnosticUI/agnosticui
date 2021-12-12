import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwitchComponent {
    constructor() {
        this.labelPosition = 'left';
        this.isDisabled = false;
        this.isAction = false;
        this.isBordered = false;
        this.size = '';
        this.selected = new EventEmitter();
    }
    get isChecked() {
        return this.switchChecked;
    }
    set isChecked(val) {
        this.switchChecked = val;
    }
    toggleChecked(ev) {
        const el = ev.target;
        if (el.getAttribute('aria-checked') == 'true') {
            el.setAttribute('aria-checked', 'false');
            this.switchChecked = false;
        }
        else {
            el.setAttribute('aria-checked', 'true');
            this.switchChecked = true;
        }
        this.selected.emit(this.switchChecked);
    }
    switchContainer() {
        let klasses = [
            'switch-container',
            this.css ? this.css : '',
            this.labelPosition === 'right' ? 'switch-right' : '',
            this.isDisabled ? 'disabled' : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
    switchSpan() {
        let klasses = [
            'switch',
            this.isBordered ? 'switch-border' : '',
            this.isAction ? 'switch-action' : '',
            this.size ? `switch-${this.size}` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
SwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SwitchComponent, selector: "ag-switch", inputs: { label: "label", css: "css", labelPosition: "labelPosition", isDisabled: "isDisabled", isAction: "isAction", isBordered: "isBordered", size: "size", isChecked: "isChecked" }, outputs: { selected: "selected" }, ngImport: i0, template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition === 'left'" class="switch-label">{{
      label
    }}</span>
    <input
      type="checkbox"
      [checked]="isChecked"
      class="switch-input"
      [disabled]="isDisabled"
      role="switch"
      (change)="toggleChecked($event)"
    />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition === 'right'" class="switch-label">{{
      label
    }}</span>
  </label>`, isInline: true, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:after{right:.5em}.switch-right .switch-label{position:absolute;right:0;transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-input{margin:0;opacity:.01%;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}@media screen and (prefers-reduced-motion: reduce), (update: slow){.switch:after,.switch:before{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-switch',
                    template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition === 'left'" class="switch-label">{{
      label
    }}</span>
    <input
      type="checkbox"
      [checked]="isChecked"
      class="switch-input"
      [disabled]="isDisabled"
      role="switch"
      (change)="toggleChecked($event)"
    />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition === 'right'" class="switch-label">{{
      label
    }}</span>
  </label>`,
                    styleUrls: ['./switch.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { label: [{
                type: Input
            }], css: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isAction: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], size: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], selected: [{
                type: Output
            }] } });
//# sourceMappingURL=switch.component.js.map
