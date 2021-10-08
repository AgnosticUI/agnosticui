import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ButtonComponent {
    constructor() {
        this.mode = undefined;
        this.type = 'button';
        this.size = 'medium';
        this.isDisabled = false;
        this.handleClick = new EventEmitter();
    }
    get classes() {
        const baseClass = this.isSkinned !== false ? `btn` : `btn-base`;
        const modeClass = this.mode ? `btn-${this.mode}` : '';
        const isBlankClass = this.isBlank === true ? 'btn-blank' : '';
        const isBorderedClass = this.isBordered === true ? 'btn-bordered' : '';
        const isRaisedClass = this.isRaised === true ? 'btn-raised' : '';
        const isCircleClass = this.isCircle === true ? 'btn-circle' : '';
        const isBlockClass = this.isBlock === true ? 'btn-block' : '';
        const isRoundedClass = this.isRounded === true ? 'btn-rounded' : '';
        const overrides = this.css ? `${this.css}` : '';
        const sizeClass = this.size ? `btn-${this.size}` : 'btn-medium';
        return [
            baseClass,
            modeClass,
            isBlankClass,
            sizeClass,
            isBorderedClass,
            isCircleClass,
            isRoundedClass,
            isRaisedClass,
            isBlockClass,
            overrides,
        ].join(' ');
    }
    get getDisabled() {
        return this.isDisabled || false;
    }
    get getType() {
        return this.type ? this.type : 'button';
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ButtonComponent, selector: "ag-button", inputs: { mode: "mode", type: "type", size: "size", css: "css", isDisabled: "isDisabled", isSkinned: "isSkinned", isBlank: "isBlank", isRaised: "isRaised", isCircle: "isCircle", isBlock: "isBlock", isBordered: "isBordered", isRounded: "isRounded" }, outputs: { handleClick: "handleClick" }, ngImport: i0, template: ` <button
      div
      *ngIf="getType !== 'faux'; else useFauxDiv"
      [type]="getType"
      (click)="handleClick.emit($event)"
      [disabled]="getDisabled"
      [class]="classes"
    >
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </button>
    <ng-template #useFauxDiv>
      <div [class]="classes">
        <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
      </div>
    </ng-template>
    <!-- We have to grab projected ng-content and put in this template.
      Then, we can reference it from the template outlets above -->
    <ng-template #contentTpl>
      <ng-content></ng-content>
    </ng-template>`, isInline: true, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnosticui-timing-medium)}.btn-skin,.btn{color:var(--agnosticui-btn-font-color, var(--agnosticui-dark));background-color:var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));border-color:var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));border-style:solid;border-width:var(--agnosticui-btn-border-size, 1px);font-family:var(--agnosticui-btn-font-family, var(--agnosticui-font-family));font-weight:var(--agnosticui-btn-font-weight, 400);font-size:var(--agnosticui-btn-font-size, 1rem);line-height:var(--agnosticui-line-height, 1.25rem);padding-block-start:var(--agnosticui-vertical-pad, .5rem);padding-block-end:var(--agnosticui-vertical-pad, .5rem);padding-inline-start:var(--agnosticui-side-padding, .75rem);padding-inline-end:var(--agnosticui-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnosticui-btn-font-color, var(--agnosticui-dark))}.btn:hover{opacity:.85;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgba(255,255,255,.3);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 3px var(--agnosticui-focus-ring-color);outline:3px solid transparent;transition:box-shadow var(--agnosticui-timing-fast) ease-out}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnosticui-btn-disabled-bg, var(--agnosticui-gray-mid-dark))!important;text-shadow:0 1px 1px rgba(255,255,255,1)!important;border-color:transparent;color:var(--agnosticui-btn-disabled-color, var(--agnosticui-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:.8!important}.btn-primary{background-color:var(--agnosticui-btn-primary, var(--agnosticui-primary));border-color:var(--agnosticui-btn-primary, var(--agnosticui-primary));color:var(--agnosticui-btn-primary-color, var(--agnosticui-light))}.btn-primary.btn-bordered{color:var(--agnosticui-btn-primary, var(--agnosticui-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnosticui-btn-primary, var(--agnosticui-primary));color:var(--agnosticui-btn-primary-color, var(--agnosticui-light))}.btn-primary:visited{color:var(--agnosticui-btn-primary-color, var(--agnosticui-light))}.btn-secondary{background-color:var(--agnosticui-btn-secondary, var(--agnosticui-secondary));border-color:var(--agnosticui-btn-secondary, var(--agnosticui-secondary));color:var(--agnosticui-btn-secondary-color, var(--agnosticui-light))}.btn-secondary.btn-bordered{color:var(--agnosticui-btn-secondary, var(--agnosticui-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnosticui-btn-secondary, var(--agnosticui-secondary));color:var(--agnosticui-btn-secondary-color, var(--agnosticui-light))}.btn-secondary:visited{color:var(--agnosticui-btn-secondary-color, var(--agnosticui-light))}.btn-raised{border-color:var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));border-style:solid;background:linear-gradient(var(--agnosticui-btn-raised-from, var(--agnosticui-gray-mid)),var(--agnosticui-btn-raised-to, var(--agnosticui-gray-extra-light)));box-shadow:inset 0 1px #ffffff4d,0 1px 2px #00000026}.btn-raised:hover,.btn-raised:focus{background:linear-gradient(to bottom,white,gainsboro)}.btn-raised.active{background:#eeeeee;box-shadow:inset 0 1px 3px #0003,0 1px #fff}.btn-raised.btn-primary{border-color:var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from));background:linear-gradient(var(--agnosticui-btn-primary-raised-from, var(--agnosticui-primary-from)),var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-to)))}.btn-raised.btn-primary:hover,.btn-raised.btn-primary:focus{background:linear-gradient(to bottom,var(--agnosticui-btn-primary-raised-hover-from, var(--agnosticui-primary-hover)),var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from)));background:linear-gradient(var(--agnosticui-btn-primary-raised-hover-from, var(--agnosticui-primary-hover)),var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from)))}.btn-raised.btn-primary:active,.btn-raised.btn-primary.active{opacity:.9;box-shadow:0 0 0 1px #0000004d}.btn-raised.btn-secondary{border-color:var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to));background:linear-gradient(var(--agnosticui-btn-secondary-raised-from, var(--agnosticui-secondary-from)),var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to)))}.btn-raised.btn-secondary:hover,.btn-raised.btn-secondary:focus{background:linear-gradient(to bottom,var(--agnosticui-btn-secondary-raised-hover-from, var(--agnosticui-secondary-hover)),var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to)));background:linear-gradient(var(--agnosticui-btn-secondary-raised-hover-from, var(--agnosticui-secondary-hover)),var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to)))}.btn-raised.btn-secondary:active,.btn-raised.btn-secondary.active{opacity:.9;box-shadow:0 0 0 1px #0000004d}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnosticui-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnosticui-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnosticui-btn-radius, .25rem)}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnosticui-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnosticui-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-blank{background-color:transparent;border:0;border-radius:0;box-shadow:none}.btn-blank:hover,.btn-blank:active,.btn-blank:focus{background:none;outline:3px solid transparent}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-button',
                    template: ` <button
      div
      *ngIf="getType !== 'faux'; else useFauxDiv"
      [type]="getType"
      (click)="handleClick.emit($event)"
      [disabled]="getDisabled"
      [class]="classes"
    >
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </button>
    <ng-template #useFauxDiv>
      <div [class]="classes">
        <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
      </div>
    </ng-template>
    <!-- We have to grab projected ng-content and put in this template.
      Then, we can reference it from the template outlets above -->
    <ng-template #contentTpl>
      <ng-content></ng-content>
    </ng-template>`,
                    styleUrls: ['./button.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { mode: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], css: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isBlank: [{
                type: Input
            }], isRaised: [{
                type: Input
            }], isCircle: [{
                type: Input
            }], isBlock: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], handleClick: [{
                type: Output
            }] } });
//# sourceMappingURL=button.component.js.map