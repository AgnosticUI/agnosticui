import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewEncapsulation, ContentChildren, HostBinding, ContentChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ButtonComponent {
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

class ButtonGroupComponent {
    get getAriaLabel() {
        const label = this.ariaLabel ? this.ariaLabel : 'button group element';
        return label;
    }
    get classes() {
        const cssClass = this.css ? this.css : '';
        return ['btn-group', cssClass].join(' ');
    }
}
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ButtonGroupComponent, selector: "ag-button-group", inputs: { css: "css", ariaLabel: "ariaLabel" }, queries: [{ propertyName: "buttons", predicate: ButtonComponent }], ngImport: i0, template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnosticui-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnosticui-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnosticui-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnosticui-btn-radius, var(--fluid-4))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-button-group',
                    template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`,
                    styleUrls: ['./button-group.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { buttons: [{
                type: ContentChildren,
                args: [ButtonComponent]
            }], css: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class CardComponent {
    constructor() {
        this.isSkinned = true;
    }
    get classes() {
        const baseClass = this.isSkinned ? 'card' : 'card-base';
        const isAnimatedClass = this.isAnimated ? 'card-animated' : '';
        const isStackedClass = this.isStacked ? 'card-stacked' : '';
        const overrides = this.css ? `${this.css}` : '';
        return [baseClass, isAnimatedClass, isStackedClass, overrides].join(' ');
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: CardComponent, selector: "ag-card", inputs: { css: "css", isAnimated: "isAnimated", isSkinned: "isSkinned", isStacked: "isStacked" }, ngImport: i0, template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card,.card-skin{box-shadow:var(--agnosticui-card-boxshadow1-offset-x, 0) var(--agnosticui-card-boxshadow1-offset-y, .375rem) var(--agnosticui-card-boxshadow1-blur, .5625rem) var(--agnosticui-card-boxshadow1-color, rgba(6, 6, 6, .075)),var(--agnosticui-card-boxshadow2-offset-x, 0) var(--agnosticui-card-boxshadow2-offset-y, 0) var(--agnosticui-card-boxshadow2-blur, 1px) var(--agnosticui-card-boxshadow2-color, rgba(5, 5, 5, .1));border-radius:var(--agnosticui-card-border-radius, 4px);overflow:hidden}.card:hover,.card-skin:hover{box-shadow:var(--agnosticui-card-boxshadow1-offset-x, 0) var(--agnosticui-card-boxshadow1-offset-y, .375rem) var(--agnosticui-card-boxshadow1-blur, .875rem) var(--agnosticui-card-boxshadow1-color, rgba(4, 4, 4, .1)),var(--agnosticui-card-boxshadow2-offset-x, 0) var(--agnosticui-card-boxshadow2-offset-y, 0) var(--agnosticui-card-boxshadow2-blur, 2px) var(--agnosticui-card-boxshadow2-color, rgba(3, 3, 3, .1))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnosticui-timing-fast) cubic-bezier(var(--agnosticui-card-cubic-1, .39),var(--agnosticui-card-cubic-2, .575),var(--agnosticui-card-cubic-3, .565),var(--agnosticui-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnosticui-card-translateY-hover, -3px));transition:box-shadow ease-out var(--agnosticui-timing-fast),transform var(--agnosticui-timing-slow) cubic-bezier(var(--agnosticui-card-cubic-1, .39),var(--agnosticui-card-cubic-2, .575),var(--agnosticui-card-cubic-3, .565),var(--agnosticui-card-cubic-4, 1))}.card-stacked{flex-direction:column}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-card',
                    template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`,
                    styleUrls: ['./card.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { css: [{
                type: Input
            }], isAnimated: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isStacked: [{
                type: Input
            }] } });

class ChoiceInputComponent {
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
        var _a, _b, _c;
        const el = ev.target;
        const value = el.value;
        if (this.type === 'checkbox') {
            let checkedItemsUpdated;
            if ((_a = this.checkedOptions) === null || _a === void 0 ? void 0 : _a.includes(value)) {
                checkedItemsUpdated = (_b = this.checkedOptions) === null || _b === void 0 ? void 0 : _b.filter((item) => item !== value);
                this.checkedOptions = checkedItemsUpdated;
            }
            else {
                checkedItemsUpdated = [...this.checkedOptions, value];
                this.checkedOptions = checkedItemsUpdated;
            }
            this.selected.emit(checkedItemsUpdated);
        }
        else {
            if ((_c = this.checkedOptions) === null || _c === void 0 ? void 0 : _c.includes(value)) {
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
ChoiceInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ChoiceInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChoiceInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ChoiceInputComponent, selector: "ag-choice-input", inputs: { isInline: "isInline", isFieldset: "isFieldset", isSkinned: "isSkinned", isDisabled: "isDisabled", options: "options", disabledOptions: "disabledOptions", checkedOptions: "checkedOptions", css: "css", legendLabel: "legendLabel", type: "type", size: "size" }, outputs: { selected: "selected" }, ngImport: i0, template: `<fieldset [ngClass]="fieldsetClass()">
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
  </fieldset>`, isInline: true, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:.5rem}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:block;cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label,.radio-label{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnosticui-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnosticui-checkbox-spacing-end, .75rem);transition:var(--agnosticui-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnosticui-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnosticui-checkbox-light, var(--agnosticui-light));box-shadow:0 0 0 var(--fluid-2) var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));transition:box-shadow var(--agnosticui-timing-fast) ease-out}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnosticui-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnosticui-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 3px var(--agnosticui-focus-ring-color);outline:3px solid transparent}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnosticui-checkbox-fill-color, #08a880);border:2px solid var(--agnosticui-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]+.checkbox-label,.radio[disabled]+.radio-label,.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{color:var(--agnosticui-input-disabled-color, var(--agnosticui-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:.8!important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ChoiceInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-choice-input',
                    template: `<fieldset [ngClass]="fieldsetClass()">
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
  </fieldset>`,
                    styleUrls: ['./choice-input.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
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

class HeaderNavComponent {
    get classes() {
        let klasses = ['header-nav', this.css ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderNavComponent, selector: "ag-header-nav", inputs: { css: "css" }, ngImport: i0, template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`, isInline: true, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header-nav',
                    template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`,
                    styleUrls: ['./headernav.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { css: [{
                type: Input
            }] } });
class HeaderNavItemComponent {
    get classes() {
        let klasses = ['header-nav-item', this.css ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderNavItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderNavItemComponent, selector: "ag-header-nav-item", inputs: { css: "css" }, ngImport: i0, template: `<div [ngClass]="classes"><ng-content></ng-content></div>`, isInline: true, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnosticui-header-color, var(--agnosticui-font-color));text-decoration:none}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnosticui-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header-nav-item',
                    template: `<div [ngClass]="classes"><ng-content></ng-content></div>`,
                    styleUrls: ['./headernavitem.css'],
                }]
        }], propDecorators: { css: [{
                type: Input
            }] } });
class HeaderComponent {
    constructor() {
        this.isSkinned = true;
    }
    get classes() {
        const baseClass = this.isSkinned ? 'header' : 'header-base';
        const isStickyClass = this.isSticky ? 'header-sticky' : '';
        const overrides = this.css ? `${this.css}` : '';
        let klasses = [
            baseClass,
            isStickyClass,
            overrides,
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderComponent, selector: "ag-header", inputs: { css: "css", isSkinned: "isSkinned", isSticky: "isSticky" }, ngImport: i0, template: `<header [ngClass]="classes">
    <div class="header-content"><ng-content></ng-content></div>
  </header>
  `, isInline: true, styles: [".header,.header-base{display:flex;flex-direction:row;align-items:center}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnosticui-header-background-color, var(--agnosticui-light));box-shadow:var(--agnosticui-header-box-shadow-hor, 0) var(--agnosticui-header-box-shadow-ver, 1px) var(--agnosticui-header-box-shadow-blur, 5px) var(--agnosticui-header-box-shadow-spread, 2px) var(--agnosticui-header-box-shadow-color, rgba(0, 0, 0, .1));font-family:var(--agnosticui-header-font-family, var(--agnosticui-font-family));border-bottom:1px solid var(--agnosticui-header-border-color, var(--agnosticui-gray-light));padding-block-start:var(--agnosticui-vertical-pad, .5rem);padding-block-end:var(--agnosticui-vertical-pad, .5rem)}.header-content{width:var(--agnosticui-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:space-around;align-items:center;flex-wrap:wrap}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header',
                    template: `<header [ngClass]="classes">
    <div class="header-content"><ng-content></ng-content></div>
  </header>
  `,
                    styleUrls: ['./header.css'],
                }]
        }], propDecorators: { css: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isSticky: [{
                type: Input
            }] } });

class InputComponent {
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
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: InputComponent, selector: "ag-input", inputs: { id: "id", helpText: "helpText", invalidText: "invalidText", isInvalid: "isInvalid", isSkinned: "isSkinned", isRounded: "isRounded", isUnderlined: "isUnderlined", isInline: "isInline", isDisabled: "isDisabled", hasLeftAddon: "hasLeftAddon", hasRightAddon: "hasRightAddon", isUnderlinedWithBackground: "isUnderlinedWithBackground", name: "name", label: "label", labelCss: "labelCss", css: "css", placeholder: "placeholder", defaultValue: "defaultValue", size: "size", type: "type", rows: "rows", cols: "cols" }, host: { properties: { "attr.id": "this.externalId" } }, ngImport: i0, template: `<div className="width-full">
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
  </div>`, isInline: true, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnosticui-font-color, var(--agnosticui-dark));font-family:var( --agnosticui-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Open Sans\", \"Ubuntu\", \"Fira Sans\", Helvetica, \"Droid Sans\", \"Helvetica Neue\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\" );font-weight:var(--agnosticui-font-weight, 300);font-size:var(--agnosticui-font-size, 1rem);line-height:var(--agnosticui-line-height, 1.25rem);width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnosticui-input-border-size, 1px);border-color:var(--agnosticui-input-border-color, var(--agnosticui-gray-light));padding-block-start:var(--agnosticui-input-vertical-pad, .5rem);padding-block-end:var(--agnosticui-input-vertical-pad, .5rem);padding-inline-start:var(--agnosticui-input-side-padding, .75rem);padding-inline-end:var(--agnosticui-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnosticui-input-timing, var(--agnosticui-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnosticui-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error,.label,.label-skin{font-size:calc(var(--agnosticui-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnosticui-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:.5;-webkit-transition:opacity var(--agnosticui-timing-fast) ease-out;transition:opacity var(--agnosticui-timing-fast) ease-out}.input::-moz-placeholder{color:currentColor;opacity:.5;-moz-transition:opacity var(--agnosticui-timing-fast) ease-out;transition:opacity var(--agnosticui-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:.5;-ms-transition:opacity var(--agnosticui-timing-fast) ease-out;transition:opacity var(--agnosticui-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:.5;-ms-transition:opacity var(--agnosticui-timing-fast) ease-out;transition:opacity var(--agnosticui-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnosticui-input-underlined-color, var(--agnosticui-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnosticui-input-underlined-bg-color, var(--agnosticui-gray-extra-light))}.input-rounded{border-radius:var(--agnosticui-border-radius, .25rem)}.label-error{color:var(--agnosticui-input-error-color, var(--agnosticui-error-color))}.input-error{border-color:var(--agnosticui-input-error-color, var(--agnosticui-error-color))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnosticui-input-error-color, var(--agnosticui-error-color))}.field-help,.field-help-small,.field-help-large{color:var(--agnosticui-input-help-color, var(--agnosticui-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnosticui-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnosticui-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large,.label-large{font-size:var(--agnosticui-font-size, 1rem)}.input-small{font-size:calc(var(--agnosticui-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnosticui-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 3px var(--agnosticui-focus-ring-color);outline:3px solid transparent;transition:box-shadow var(--agnosticui-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnosticui-input-disabled-bg, var(--agnosticui-disabled-bg))!important;color:var(--agnosticui-input-disabled-color, var(--agnosticui-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:.8!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%;--addon-padding: calc(var(--agnosticui-input-side-padding, .75rem) * 1.5)}.input-has-left-addon,.input-has-right-addon{flex:1}.input-has-left-addon{padding-inline-start:calc(var(--addon-padding) * 2.25)}.input-has-right-addon{padding-inline-end:calc(var(--addon-padding) * 2.25)}.input-addon-right,.input-addon-left{--addon-padding: calc(var(--agnosticui-input-side-padding) * 1.5);position:absolute;top:50%;transform:translateY(-50%)}.input-addon-left{left:var(--addon-padding)}.input-addon-right{right:var(--addon-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{--addon-padding: calc(var(--agnosticui-input-side-padding) * 1.5);position:absolute;top:50%;transform:translateY(-50%)}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-input',
                    template: `<div className="width-full">
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

class ProgressComponent {
    constructor() {
        this.value = 0;
        this.max = 100;
    }
    get classes() {
        var _a;
        console.log(this);
        let klasses = ['progress', ((_a = this.css) === null || _a === void 0 ? void 0 : _a.length) ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
ProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ProgressComponent, selector: "ag-progress", inputs: { value: "value", max: "max", css: "css" }, ngImport: i0, template: `<progress [ngClass]="classes" [attr.value]="value" [attr.max]="max"></progress>`, isInline: true, styles: [".progress{-webkit-appearance:none;height:var(--agnosticui-progress-height, 10px);width:100%;border:none;background-color:var(--agnosticui-progress-background, #ededed);border-radius:var(--agnosticui-progress-radius, 10px)}.progress[value]::-webkit-progress-bar{background-color:var(--agnosticui-progress-background, #ededed);border-radius:var(--agnosticui-progress-radius, 10px)}.progress[value]::-webkit-progress-value{background-color:var(--agnosticui-progress-fill-color, #077acb);border-radius:var(--agnosticui-progress-radius, 10px)}.progress[value]::-moz-progress-bar{background-color:var(--agnosticui-progress-fill-color, #077acb);border-radius:var(--agnosticui-progress-radius, 10px)}.progress[value]::-ms-fill{background-color:var(--agnosticui-progress-fill-color, #077acb);border-radius:var(--agnosticui-progress-radius, 10px)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-progress',
                    template: `<progress [ngClass]="classes" [attr.value]="value" [attr.max]="max"></progress>`,
                    styleUrls: ['./progress.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { value: [{
                type: Input
            }], max: [{
                type: Input
            }], css: [{
                type: Input
            }] } });

class SwitchComponent {
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
SwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: SwitchComponent, selector: "ag-switch", inputs: { label: "label", css: "css", labelPosition: "labelPosition", isDisabled: "isDisabled", isAction: "isAction", isBordered: "isBordered", size: "size", isChecked: "isChecked" }, outputs: { selected: "selected" }, ngImport: i0, template: `<label [ngClass]="switchContainer()">
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
  </label>`, isInline: true, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnosticui-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnosticui-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnosticui-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnosticui-primary)}.switch-action.switch-border:before{border:1px solid var(--agnosticui-action)}.switch-input{margin:0;opacity:.0001;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 3px var(--agnosticui-focus-ring-color)}.switch-input:checked+.switch:after{right:.5em}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnosticui-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnosticui-action)}.switch-input:checked+.switch-border:after{background:var(--agnosticui-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnosticui-action)}.switch-right .switch:after{transition:left var(--agnosticui-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-label{position:absolute;top:0;right:0}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnosticui-input-disabled-color, var(--agnosticui-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:.8!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SwitchComponent, decorators: [{
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

class TabPanelComponent {
    constructor() {
        this._title = '';
        this.isActive = false;
    }
    set title(t) {
        this._title = t;
    }
    get title() {
        return this._title;
    }
}
TabPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: TabPanelComponent, selector: "ag-tab-panel", inputs: { title: "title", isActive: "isActive" }, ngImport: i0, template: `<div
    [hidden]="!isActive"
    role="tabpanel"
    [attr.aria-label]="title"
    class="pane"
  >
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".tab-list,.tab-list-base{display:flex}.tab-list,.tab-skinned{flex-wrap:wrap;flex-direction:row;padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnosticui-tabs-border-size, 1px) solid var(--agnosticui-tabs-bgcolor, var(--agnosticui-gray-light));transition-property:all;transition-duration:var(--agnosticui-timing-medium)}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnosticui-vertical-pad, .5rem);padding-block-end:var(--agnosticui-vertical-pad, .5rem);padding-inline-start:var(--agnosticui-side-padding, .75rem);padding-inline-end:var(--agnosticui-side-padding, .75rem);font-family:var(--agnosticui-btn-font-family, var(--agnosticui-font-family));font-weight:var(--agnosticui-btn-font-weight, 400);font-size:var(--agnosticui-btn-font-size, 1rem);line-height:var(--agnosticui-line-height, 1.25rem);color:var(--agnosticui-tabs-primary, var(--agnosticui-primary));text-decoration:none;transition:color var(--agnosticui-timing-fast) ease-in-out,background-color var(--agnosticui-timing-fast) ease-in-out,border-color var(--agnosticui-timing-fast) ease-in-out}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnosticui-input-side-padding) * 1.25);padding-block-end:calc(var(--agnosticui-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnosticui-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnosticui-input-side-padding) * 1.75)}.tab-button-jumbo{padding-block-start:calc(var(--agnosticui-input-side-padding) * 2);padding-block-end:calc(var(--agnosticui-input-side-padding) * 2);padding-inline-start:calc(var(--agnosticui-input-side-padding) * 3);padding-inline-end:calc(var(--agnosticui-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnosticui-tabs-radius, .25rem);border-top-right-radius:var(--agnosticui-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnosticui-gray-dark);background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.tab-item:hover,.tab-button:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate;cursor:pointer}.tab-button:disabled{color:var(--agnosticui-tabas-disabled-bg, var(--agnosticui-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:.8}.pane{padding:1em}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-tab-panel',
                    styleUrls: ['./tabs.css'],
                    template: `<div
    [hidden]="!isActive"
    role="tabpanel"
    [attr.aria-label]="title"
    class="pane"
  >
    <ng-content></ng-content>
  </div>`,
                }]
        }], propDecorators: { title: [{
                type: Input
            }], isActive: [{
                type: Input
            }] } });

class TabsComponent {
    constructor() {
        this.size = '';
        this.isDisabled = false;
        this.isSkinned = true;
        this.isBorderless = false;
        this.selectionChanged = new EventEmitter();
    }
    ngAfterContentInit() {
        const activeTabs = this.tabPanels.filter((tab) => tab.isActive);
        if (activeTabs.length === 0) {
            this.selectPanel(this.tabPanels.first);
        }
    }
    selectPanel(tabPanel) {
        this.tabPanels.toArray().forEach((tab) => {
            tab.isActive = false;
        });
        tabPanel.isActive = true;
        this.selectionChanged.emit(tabPanel);
    }
}
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: TabsComponent, selector: "ag-tabs", inputs: { size: "size", disabledOptions: "disabledOptions", isDisabled: "isDisabled", isSkinned: "isSkinned", isBorderless: "isBorderless" }, outputs: { selectionChanged: "selectionChanged" }, queries: [{ propertyName: "tabButtonTemplate", first: true, predicate: ["tabButtonTemplate"], descendants: true }, { propertyName: "tabPanels", predicate: TabPanelComponent }], ngImport: i0, template: `
    <div
      [class.tab-list]="isSkinned === true"
      [class.tab-list-base]="isSkinned === false"
      [class.tab-borderless]="isBorderless === true"
      role="tablist"
      aria-label="Tabs"
    >
      <div
        *ngFor="let panel of tabPanels; index as i"
        (click)="selectPanel(panel)"
      >
        <ng-container *ngIf="!tabButtonTemplate">
          <button
            role="tab"
            class="tab-item tab-button"
            [class.active]="panel.isActive"
            [attr.disabled]="
              isDisabled || disabledOptions?.includes(panel.title) ? true : null
            "
            [class.tab-button-large]="size === 'large'"
            [class.tab-button-jumbo]="size === 'jumbo'"
            [attr.aria-selected]="panel.isActive"
          >
            {{ panel.title }}
          </button>
        </ng-container>
        <ng-container
          *ngIf="tabButtonTemplate"
          [ngTemplateOutlet]="tabButtonTemplate"
          [ngTemplateOutletContext]="{ $implicit: panel, index: i }"
        >
        </ng-container>
      </div>
    </div>
    <ng-content></ng-content>
  `, isInline: true, styles: [".tab-list,.tab-list-base{display:flex}.tab-list,.tab-skinned{flex-wrap:wrap;flex-direction:row;padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnosticui-tabs-border-size, 1px) solid var(--agnosticui-tabs-bgcolor, var(--agnosticui-gray-light));transition-property:all;transition-duration:var(--agnosticui-timing-medium)}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnosticui-vertical-pad, .5rem);padding-block-end:var(--agnosticui-vertical-pad, .5rem);padding-inline-start:var(--agnosticui-side-padding, .75rem);padding-inline-end:var(--agnosticui-side-padding, .75rem);font-family:var(--agnosticui-btn-font-family, var(--agnosticui-font-family));font-weight:var(--agnosticui-btn-font-weight, 400);font-size:var(--agnosticui-btn-font-size, 1rem);line-height:var(--agnosticui-line-height, 1.25rem);color:var(--agnosticui-tabs-primary, var(--agnosticui-primary));text-decoration:none;transition:color var(--agnosticui-timing-fast) ease-in-out,background-color var(--agnosticui-timing-fast) ease-in-out,border-color var(--agnosticui-timing-fast) ease-in-out}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnosticui-input-side-padding) * 1.25);padding-block-end:calc(var(--agnosticui-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnosticui-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnosticui-input-side-padding) * 1.75)}.tab-button-jumbo{padding-block-start:calc(var(--agnosticui-input-side-padding) * 2);padding-block-end:calc(var(--agnosticui-input-side-padding) * 2);padding-inline-start:calc(var(--agnosticui-input-side-padding) * 3);padding-inline-end:calc(var(--agnosticui-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnosticui-tabs-radius, .25rem);border-top-right-radius:var(--agnosticui-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnosticui-gray-dark);background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.tab-item:hover,.tab-button:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate;cursor:pointer}.tab-button:disabled{color:var(--agnosticui-tabas-disabled-bg, var(--agnosticui-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:.8}.pane{padding:1em}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-tabs',
                    template: `
    <div
      [class.tab-list]="isSkinned === true"
      [class.tab-list-base]="isSkinned === false"
      [class.tab-borderless]="isBorderless === true"
      role="tablist"
      aria-label="Tabs"
    >
      <div
        *ngFor="let panel of tabPanels; index as i"
        (click)="selectPanel(panel)"
      >
        <ng-container *ngIf="!tabButtonTemplate">
          <button
            role="tab"
            class="tab-item tab-button"
            [class.active]="panel.isActive"
            [attr.disabled]="
              isDisabled || disabledOptions?.includes(panel.title) ? true : null
            "
            [class.tab-button-large]="size === 'large'"
            [class.tab-button-jumbo]="size === 'jumbo'"
            [attr.aria-selected]="panel.isActive"
          >
            {{ panel.title }}
          </button>
        </ng-container>
        <ng-container
          *ngIf="tabButtonTemplate"
          [ngTemplateOutlet]="tabButtonTemplate"
          [ngTemplateOutletContext]="{ $implicit: panel, index: i }"
        >
        </ng-container>
      </div>
    </div>
    <ng-content></ng-content>
  `,
                    styleUrls: ['./tabs.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { tabPanels: [{
                type: ContentChildren,
                args: [TabPanelComponent]
            }], size: [{
                type: Input
            }], disabledOptions: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isBorderless: [{
                type: Input
            }], tabButtonTemplate: [{
                type: ContentChild,
                args: ['tabButtonTemplate']
            }], selectionChanged: [{
                type: Output
            }] } });

class AgModule {
}
AgModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: AgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AgModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: AgModule, declarations: [ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        ChoiceInputComponent,
        HeaderComponent,
        HeaderNavComponent,
        HeaderNavItemComponent,
        InputComponent,
        ProgressComponent,
        SwitchComponent,
        TabsComponent,
        TabPanelComponent], imports: [CommonModule], exports: [ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        ChoiceInputComponent,
        HeaderComponent,
        HeaderNavComponent,
        HeaderNavItemComponent,
        InputComponent,
        ProgressComponent,
        SwitchComponent,
        TabsComponent,
        TabPanelComponent] });
AgModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: AgModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: AgModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ButtonComponent,
                        ButtonGroupComponent,
                        CardComponent,
                        ChoiceInputComponent,
                        HeaderComponent,
                        HeaderNavComponent,
                        HeaderNavItemComponent,
                        InputComponent,
                        ProgressComponent,
                        SwitchComponent,
                        TabsComponent,
                        TabPanelComponent,
                    ],
                    exports: [
                        ButtonComponent,
                        ButtonGroupComponent,
                        CardComponent,
                        ChoiceInputComponent,
                        HeaderComponent,
                        HeaderNavComponent,
                        HeaderNavItemComponent,
                        InputComponent,
                        ProgressComponent,
                        SwitchComponent,
                        TabsComponent,
                        TabPanelComponent,
                    ],
                }]
        }] });

export { AgModule, ButtonComponent, ButtonGroupComponent, CardComponent, ChoiceInputComponent, HeaderComponent, HeaderNavComponent, HeaderNavItemComponent, InputComponent, ProgressComponent, SwitchComponent, TabPanelComponent, TabsComponent };
//# sourceMappingURL=agnosticui-angular.js.map
