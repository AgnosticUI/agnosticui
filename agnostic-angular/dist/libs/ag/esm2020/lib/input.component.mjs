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
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: InputComponent, selector: "ag-input", inputs: { id: "id", helpText: "helpText", invalidText: "invalidText", isInvalid: "isInvalid", isSkinned: "isSkinned", isRounded: "isRounded", isUnderlined: "isUnderlined", isInline: "isInline", isDisabled: "isDisabled", hasLeftAddon: "hasLeftAddon", hasRightAddon: "hasRightAddon", isUnderlinedWithBackground: "isUnderlinedWithBackground", name: "name", label: "label", labelCss: "labelCss", css: "css", placeholder: "placeholder", defaultValue: "defaultValue", size: "size", type: "type", rows: "rows", cols: "cols" }, host: { properties: { "attr.id": "this.externalId" } }, ngImport: i0, template: `<div className="w-100">
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
  </div>`, isInline: true, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family-body);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:50%;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large{font-size:var(--agnostic-font-size, 1rem)}.label-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%}.input-has-left-addon{padding-left:calc(var(--agnostic-side-padding) * 3)}.input-has-right-addon{padding-right:calc(var(--agnostic-side-padding) * 3)}@media (prefers-reduced-motion),(update: slow){.input-skin,.input,.input::placeholder,.input::-webkit-input-placeholder,.input::-ms-placeholder,.input:-ms-placeholder,.input:focus{transition-duration:.001ms!important}}.input-addon-right,.input-addon-left{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}.input-addon-left{left:var(--agnostic-input-side-padding)}.input-addon-right{right:var(--agnostic-input-side-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-input', template: `<div className="w-100">
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
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family-body);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:50%;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large{font-size:var(--agnostic-font-size, 1rem)}.label-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%}.input-has-left-addon{padding-left:calc(var(--agnostic-side-padding) * 3)}.input-has-right-addon{padding-right:calc(var(--agnostic-side-padding) * 3)}@media (prefers-reduced-motion),(update: slow){.input-skin,.input,.input::placeholder,.input::-webkit-input-placeholder,.input::-ms-placeholder,.input:-ms-placeholder,.input:focus{transition-duration:.001ms!important}}.input-addon-right,.input-addon-left{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}.input-addon-left{left:var(--agnostic-input-side-padding)}.input-addon-right{right:var(--agnostic-input-side-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDOzs7QUE0RXZCLE1BQU0sT0FBTyxjQUFjO0lBMUUzQjtRQThFMEIsZUFBVSxHQUFrQixFQUFFLENBQUM7UUFTL0MsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUVoQixhQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVksRUFBRSxDQUFDO1FBQzFCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFhLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLGlCQUFZLEdBQWEsS0FBSyxDQUFDO1FBQy9CLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFhLEtBQUssQ0FBQztRQUMvQixrQkFBYSxHQUFhLEtBQUssQ0FBQztRQUNoQywrQkFBMEIsR0FBYSxLQUFLLENBQUM7UUFPN0MsU0FBSSxHQUE0QixFQUFFLENBQUM7S0FrRTdDO0lBN0ZDLElBQ0ksRUFBRSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBb0NELFdBQVc7UUFDVCxNQUFNLE9BQU8sR0FBRztZQUNkLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQzNDLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELGNBQWM7UUFDWixNQUFNLE9BQU8sR0FBRztZQUNkLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQzVDLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELFlBQVk7UUFDVixNQUFNLFlBQVksR0FBRztZQUNuQixPQUFPO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ25DLENBQUM7UUFDRixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMs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QUFYLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBWUcsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgPGxhYmVsIFtjbGFzc109XCJsYWJlbENsYXNzZXMoKVwiIFtmb3JdPVwiaWRcIj5cbiAgICAgIHt7IGxhYmVsIH19XG4gICAgPC9sYWJlbD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ3RleHRhcmVhJzsgZWxzZSBub1RleHRhcmVhXCI+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgKm5nSWY9XCJ0eXBlID09PSAndGV4dGFyZWEnXCJcbiAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgW2F0dHIubmFtZV09XCJuYW1lID8gbmFtZSA6IG51bGxcIlxuICAgICAgICBbdmFsdWVdPVwiZGVmYXVsdFZhbHVlIHx8ICcnXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc2VzKClcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6ICcnXCJcbiAgICAgICAgW2F0dHIucm93c109XCJyb3dzXCJcbiAgICAgICAgW2F0dHIuY29sc109XCJjb2xzXCJcbiAgICAgICAgKGNoYW5nZSk9XCIoaGFuZGxlQ2hhbmdlKVwiXG4gICAgICAgIChmb2N1cyk9XCIoaGFuZGxlRm9jdXMpXCJcbiAgICAgICAgKGJsdXIpPVwiKGhhbmRsZUJsdXIpXCJcbiAgICAgID48L3RleHRhcmVhPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbm9UZXh0YXJlYT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJpbnB1dC1hZGRvbi1jb250YWluZXJcIlxuICAgICAgICAqbmdJZj1cImhhc0xlZnRBZGRvbiB8fCBoYXNSaWdodEFkZG9uOyBlbHNlIGlucHV0T25seVwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthZGRPbkxlZnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgIFthdHRyLm5hbWVdPVwibmFtZSA/IG5hbWUgOiBudWxsXCJcbiAgICAgICAgICBbdmFsdWVdPVwiZGVmYXVsdFZhbHVlIHx8ICcnXCJcbiAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgICAgW2NsYXNzXT1cImlucHV0Q2xhc3NlcygpXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6ICcnXCJcbiAgICAgICAgICAoY2hhbmdlKT1cIihoYW5kbGVDaGFuZ2UpXCJcbiAgICAgICAgICAoZm9jdXMpPVwiKGhhbmRsZUZvY3VzKVwiXG4gICAgICAgICAgKGJsdXIpPVwiKGhhbmRsZUJsdXIpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FkZE9uUmlnaHRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2lucHV0T25seT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWUgPyBuYW1lIDogbnVsbFwiXG4gICAgICAgICAgW3ZhbHVlXT1cImRlZmF1bHRWYWx1ZSB8fCAnJ1wiXG4gICAgICAgICAgW3R5cGVdPVwidHlwZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICAgIFtjbGFzc109XCJpbnB1dENsYXNzZXMoKVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyID8gcGxhY2Vob2xkZXIgOiAnJ1wiXG4gICAgICAgICAgKGNoYW5nZSk9XCIoaGFuZGxlQ2hhbmdlKVwiXG4gICAgICAgICAgKGZvY3VzKT1cIihoYW5kbGVGb2N1cylcIlxuICAgICAgICAgIChibHVyKT1cIihoYW5kbGVCbHVyKVwiXG4gICAgICAgIC8+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiaXNJbnZhbGlkOyBlbHNlIGhlbHBIaW50XCJcbiAgICAgIFtjbGFzc109XCJpbnZhbGlkQ2xhc3NlcygpXCJcbiAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICA+XG4gICAgICB7eyBpbnZhbGlkVGV4dCB9fVxuICAgIDwvc3Bhbj5cbiAgICA8bmctdGVtcGxhdGUgI2hlbHBIaW50PlxuICAgICAgPHNwYW4gW2NsYXNzXT1cImhlbHBDbGFzc2VzKClcIiByb2xlPVwic3RhdHVzXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgIHt7IGhlbHBUZXh0IH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY3NzJywgJy4vaW5wdXRhZGRvbi1oYWNrLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQge1xuICAvLyBhMTF5IGR1cGxpY2F0ZSBJRCB1bmxlc3Mgd2UgYmluZCB0aGUgaG9zdCB0byBleHRlcm5hbElkIGFuZCBkZWxldGVcbiAgLy8gdGhhdCB2YWx1ZSBiZWZvcmUgaXQncyBhZGRlZCB0byB0aGUgRE9NLiBNYXliZSB0aGVyZSdzIGEgYmV0dGVyIHdheT9cbiAgLy8gaHR0cHM6Ly9jb3J5cnlsYW4uY29tL2Jsb2cvcHJldmVudC1hdHRyaWJ1dGUtcmVmbGVjdGlvbi1pbi1hbmd1bGFyXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpIGV4dGVybmFsSWQ6IHN0cmluZyB8IG51bGwgPSAnJztcbiAgQElucHV0KClcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9JRCA9IHZhbHVlO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IG51bGw7XG4gIH1cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9JRDtcbiAgfVxuICBwcml2YXRlIF9JRDogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgaGVscFRleHQ/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaW52YWxpZFRleHQ/OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNJbnZhbGlkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1NraW5uZWQ/OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNSb3VuZGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1VuZGVybGluZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzSW5saW5lPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNMZWZ0QWRkb24/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc1JpZ2h0QWRkb24/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzVW5kZXJsaW5lZFdpdGhCYWNrZ3JvdW5kPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxDc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNzcz86IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZT86ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJycgPSAnJztcbiAgQElucHV0KCkgdHlwZSE6XG4gICAgfCAndGV4dCdcbiAgICB8ICdwYXNzd29yZCdcbiAgICB8ICdlbWFpbCdcbiAgICB8ICdudW1iZXInXG4gICAgfCAndXJsJ1xuICAgIHwgJ3RlbCdcbiAgICB8ICdzZWFyY2gnXG4gICAgfCAndGV4dGFyZWEnO1xuICAvLyBJdCBhcHBlYXJzIHdlIGNhbid0IGhhdmUgYXJiaXRyYXJ5IHByb3BzIGluIEFuZ3VsYXIgYW5kIHRoZXkgYWxsIGhhdmUgdG8gYmUgZGVmaW5lZFxuICAvLyBhcyBhbiBASW5wdXQuIFJlYWN0IGhhcyAuLi5yZXN0LCBWdWUgaGFzIHYtYmluZD1cIiRhdHRyc1wiLCBTdmVsdGUgaGFzICB7Li4uJCRyZXN0UHJvcHN9IMKvXFxfKOODhClfL8KvXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0NTQ1XG4gIEBJbnB1dCgpIHJvd3M/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbHM/OiBudW1iZXI7XG5cbiAgaGVscENsYXNzZXMoKSB7XG4gICAgY29uc3Qga2xhc3NlcyA9IFtcbiAgICAgICF0aGlzLnNpemUgPyAnZmllbGQtaGVscCcgOiAnJyxcbiAgICAgIHRoaXMuc2l6ZSA/IGBmaWVsZC1oZWxwLSR7dGhpcy5zaXplfWAgOiAnJyxcbiAgICBdO1xuICAgIHJldHVybiBrbGFzc2VzLmZpbHRlcigoa2xhc3MpID0+IGtsYXNzLmxlbmd0aCkuam9pbignICcpO1xuICB9XG4gIGludmFsaWRDbGFzc2VzKCkge1xuICAgIGNvbnN0IGtsYXNzZXMgPSBbXG4gICAgICAhdGhpcy5zaXplID8gJ2ZpZWxkLWVycm9yJyA6ICcnLFxuICAgICAgdGhpcy5zaXplID8gYGZpZWxkLWVycm9yLSR7dGhpcy5zaXplfWAgOiAnJyxcbiAgICBdO1xuICAgIHJldHVybiBrbGFzc2VzLmZpbHRlcigoa2xhc3MpID0+IGtsYXNzLmxlbmd0aCkuam9pbignICcpO1xuICB9XG4gIGxhYmVsQ2xhc3NlcygpIHtcbiAgICBjb25zdCBsYWJlbEtsYXNzZXMgPSBbXG4gICAgICAnbGFiZWwnLFxuICAgICAgdGhpcy5pc0ludmFsaWQgPyAnbGFiZWwtZXJyb3InIDogJycsXG4gICAgICB0aGlzLmlzSW5saW5lID8gJ2xhYmVsLWlubGluZScgOiAnJyxcbiAgICAgIHRoaXMuc2l6ZSA/IGBsYWJlbC0ke3RoaXMuc2l6ZX1gIDogJycsXG4gICAgICB0aGlzLmxhYmVsQ3NzID8gdGhpcy5sYWJlbENzcyA6ICcnLFxuICAgIF07XG4gICAgcmV0dXJuIGxhYmVsS2xhc3Nlcy5maWx0ZXIoKGtsYXNzKSA9PiBrbGFzcy5sZW5ndGgpLmpvaW4oJyAnKTtcbiAgfVxuICBpbnB1dENsYXNzZXMoKSB7XG4gICAgbGV0IGtsYXNzZXMgPSBbXG4gICAgICB0aGlzLmlzU2tpbm5lZCA/ICdpbnB1dCcgOiAnaW5wdXQtYmFzZScsXG4gICAgICB0aGlzLmlzUm91bmRlZCA/ICdpbnB1dC1yb3VuZGVkJyA6ICcnLFxuICAgICAgdGhpcy5pc1VuZGVybGluZWQgPyAnaW5wdXQtdW5kZXJsaW5lZCcgOiAnJyxcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcbiAgICAgIHRoaXMuaXNJbmxpbmUgPyAnaW5wdXQtaW5saW5lJyA6ICcnLFxuICAgICAgdGhpcy5oYXNMZWZ0QWRkb24gPyAnaW5wdXQtaGFzLWxlZnQtYWRkb24nIDogJycsXG4gICAgICB0aGlzLmhhc1JpZ2h0QWRkb24gPyAnaW5wdXQtaGFzLXJpZ2h0LWFkZG9uJyA6ICcnLFxuICAgICAgdGhpcy5pc0ludmFsaWQgPyAnaW5wdXQtZXJyb3InIDogJycsXG4gICAgICB0aGlzLmlzVW5kZXJsaW5lZFdpdGhCYWNrZ3JvdW5kID8gJ2lucHV0LXVuZGVybGluZWQtYmcnIDogJycsXG4gICAgICB0aGlzLmNzcyA/IGAke3RoaXMuY3NzfWAgOiAnJyxcbiAgICAgIHRoaXMuc2l6ZSA/IGBpbnB1dC0ke3RoaXMuc2l6ZX1gIDogJycsXG4gICAgXTtcbiAgICBrbGFzc2VzID0ga2xhc3Nlcy5maWx0ZXIoKGtsYXNzKSA9PiBrbGFzcy5sZW5ndGgpO1xuICAgIHJldHVybiBrbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoZXY6IEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUNoYW5nZSBub3QgeWV0IGltcGxlbWVudGVkLi4uJyk7XG4gIH1cbiAgaGFuZGxlRm9jdXMoZXY6IEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUZvY3VzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuLi4nKTtcbiAgfVxuICBoYW5kbGVCbHVyKGV2OiBFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVCbHVyIG5vdCB5ZXQgaW1wbGVtZW50ZWQuLi4nKTtcbiAgfVxufVxuIl19