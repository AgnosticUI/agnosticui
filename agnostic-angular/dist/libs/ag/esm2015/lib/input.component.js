import { Component, HostBinding, Input, ChangeDetectionStrategy, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class InputComponent {
    constructor() {
        this.externalId = '';
        this._ID = '';
        this.helpText = '';
        this.invalidText = '';
        this.isInvalid = false;
        this.isSkinned = true;
        this.isRounded = false;
        this.isUnderlined = false;
        this.isInline = false;
        this.isDisabled = false;
        this.hasLeftAddon = false;
        this.hasRightAddon = false;
        this.isUnderlinedWithBackground = false;
        this.size = '';
    }
    set id(value) {
        this._ID = value;
        this.externalId = null;
    }
    get id() {
        return this._ID;
    }
    helpClasses() {
        const klasses = [
            !this.size ? 'field-help' : '',
            this.size ? `field-help-${this.size}` : '',
        ];
        return klasses.filter((klass) => klass.length).join(' ');
    }
    invalidClasses() {
        const klasses = [
            !this.size ? 'field-error' : '',
            this.size ? `field-error-${this.size}` : '',
        ];
        return klasses.filter((klass) => klass.length).join(' ');
    }
    labelClasses() {
        const labelKlasses = [
            'label',
            this.isInvalid ? 'label-error' : '',
            this.isInline ? 'label-inline' : '',
            this.size ? `label-${this.size}` : '',
            this.labelCss ? this.labelCss : '',
        ];
        return labelKlasses.filter((klass) => klass.length).join(' ');
    }
    inputClasses() {
        let klasses = [
            this.isSkinned ? 'input' : 'input-base',
            this.isRounded ? 'input-rounded' : '',
            this.isUnderlined ? 'input-underlined' : '',
            this.isDisabled ? 'disabled' : '',
            this.isInline ? 'input-inline' : '',
            this.hasLeftAddon ? 'input-has-left-addon' : '',
            this.hasRightAddon ? 'input-has-right-addon' : '',
            this.isInvalid ? 'input-error' : '',
            this.isUnderlinedWithBackground ? 'input-underlined-bg' : '',
            this.css ? `${this.css}` : '',
            this.size ? `input-${this.size}` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
    handleChange(ev) {
        console.log('handleChange not yet implemented...');
    }
    handleFocus(ev) {
        console.log('handleFocus not yet implemented...');
    }
    handleBlur(ev) {
        console.log('handleBlur not yet implemented...');
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: InputComponent, selector: "ag-input", inputs: { id: "id", helpText: "helpText", invalidText: "invalidText", isInvalid: "isInvalid", isSkinned: "isSkinned", isRounded: "isRounded", isUnderlined: "isUnderlined", isInline: "isInline", isDisabled: "isDisabled", hasLeftAddon: "hasLeftAddon", hasRightAddon: "hasRightAddon", isUnderlinedWithBackground: "isUnderlinedWithBackground", name: "name", label: "label", labelCss: "labelCss", css: "css", placeholder: "placeholder", defaultValue: "defaultValue", size: "size", type: "type", rows: "rows", cols: "cols" }, host: { properties: { "attr.id": "this.externalId" } }, ngImport: i0, template: `<div className="w-100">
    <label [class]="labelClasses()" [for]="id">
      {{ label }}
    </label>
    <ng-container *ngIf="type === 'textarea'; else noTextarea">
      <textarea
        *ngIf="type === 'textarea'"
        [id]="id"
        [attr.name]="name ? name : null"
        [value]="defaultValue || ''"
        [disabled]="isDisabled"
        [class]="inputClasses()"
        [placeholder]="placeholder ? placeholder : ''"
        [attr.rows]="rows"
        [attr.cols]="cols"
        (change)="(handleChange)"
        (focus)="(handleFocus)"
        (blur)="(handleBlur)"
      ></textarea>
    </ng-container>
    <ng-template #noTextarea>
      <div
        class="input-addon-container"
        *ngIf="hasLeftAddon || hasRightAddon; else inputOnly"
      >
        <ng-content select="[addOnLeft]"></ng-content>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
        <ng-content select="[addOnRight]"></ng-content>
      </div>
      <ng-template #inputOnly>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
      </ng-template>
    </ng-template>
    <span
      *ngIf="isInvalid; else helpHint"
      [class]="invalidClasses()"
      role="status"
      aria-live="polite"
    >
      {{ invalidText }}
    </span>
    <ng-template #helpHint>
      <span [class]="helpClasses()" role="status" aria-live="polite">
        {{ helpText }}
      </span>
    </ng-template>
  </div>`, isInline: true, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error,.label,.label-skin{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:50%;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large,.label-large{font-size:var(--agnostic-font-size, 1rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%;--addon-padding: calc(var(--agnostic-input-side-padding, .75rem) * 1.5)}.input-has-left-addon,.input-has-right-addon{flex:1}.input-has-left-addon{padding-inline-start:calc(var(--addon-padding) * 2.25)}.input-has-right-addon{padding-inline-end:calc(var(--addon-padding) * 2.25)}@media (prefers-reduced-motion){.input-skin,.input,.input::placeholder,.input::-webkit-input-placeholder,.input::-ms-placeholder,.input:-ms-placeholder,.input:focus{transition-duration:.001ms!important}}.input-addon-right,.input-addon-left{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}.input-addon-left{left:var(--addon-padding)}.input-addon-right{right:var(--addon-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{--addon-padding: calc(var(--agnostic-input-side-padding) * 1.5);position:absolute;top:50%;transform:translateY(-50%)}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-input',
                    template: `<div className="w-100">
    <label [class]="labelClasses()" [for]="id">
      {{ label }}
    </label>
    <ng-container *ngIf="type === 'textarea'; else noTextarea">
      <textarea
        *ngIf="type === 'textarea'"
        [id]="id"
        [attr.name]="name ? name : null"
        [value]="defaultValue || ''"
        [disabled]="isDisabled"
        [class]="inputClasses()"
        [placeholder]="placeholder ? placeholder : ''"
        [attr.rows]="rows"
        [attr.cols]="cols"
        (change)="(handleChange)"
        (focus)="(handleFocus)"
        (blur)="(handleBlur)"
      ></textarea>
    </ng-container>
    <ng-template #noTextarea>
      <div
        class="input-addon-container"
        *ngIf="hasLeftAddon || hasRightAddon; else inputOnly"
      >
        <ng-content select="[addOnLeft]"></ng-content>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
        <ng-content select="[addOnRight]"></ng-content>
      </div>
      <ng-template #inputOnly>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
      </ng-template>
    </ng-template>
    <span
      *ngIf="isInvalid; else helpHint"
      [class]="invalidClasses()"
      role="status"
      aria-live="polite"
    >
      {{ invalidText }}
    </span>
    <ng-template #helpHint>
      <span [class]="helpClasses()" role="status" aria-live="polite">
        {{ helpText }}
      </span>
    </ng-template>
  </div>`,
                    styleUrls: ['./input.css', './inputaddon-hack.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { externalId: [{
                type: HostBinding,
                args: ['attr.id']
            }], id: [{
                type: Input
            }], helpText: [{
                type: Input
            }], invalidText: [{
                type: Input
            }], isInvalid: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], isUnderlined: [{
                type: Input
            }], isInline: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], hasLeftAddon: [{
                type: Input
            }], hasRightAddon: [{
                type: Input
            }], isUnderlinedWithBackground: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], labelCss: [{
                type: Input
            }], css: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }] } });
//# sourceMappingURL=input.component.js.map