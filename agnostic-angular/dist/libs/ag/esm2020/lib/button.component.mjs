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
        const isLinkClass = this.isLink === true ? 'btn-link' : '';
        const isBorderedClass = this.isBordered === true ? 'btn-bordered' : '';
        const isCapsuleClass = this.isCapsule === true ? 'btn-capsule' : '';
        const isCircleClass = this.isCircle === true ? 'btn-circle' : '';
        const isBlockClass = this.isBlock === true ? 'btn-block' : '';
        const isRoundedClass = this.isRounded === true ? 'btn-rounded' : '';
        const overrides = this.css ? `${this.css}` : '';
        const sizeClass = this.size ? `btn-${this.size}` : 'btn-medium';
        return [
            baseClass,
            modeClass,
            sizeClass,
            isBorderedClass,
            isCapsuleClass,
            isCircleClass,
            isRoundedClass,
            isBlockClass,
            isBlankClass,
            isLinkClass,
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
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ButtonComponent, selector: "ag-button", inputs: { mode: "mode", type: "type", size: "size", css: "css", isDisabled: "isDisabled", isSkinned: "isSkinned", isBlank: "isBlank", isLink: "isLink", isCircle: "isCircle", isBlock: "isBlock", isBordered: "isBordered", isCapsule: "isCapsule", isRounded: "isRounded" }, outputs: { handleClick: "handleClick" }, ngImport: i0, template: ` <button
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
    </ng-template>`, isInline: true, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin,.btn{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn:hover{opacity:85%;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgb(255 255 255 / 30%);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark))!important;text-shadow:0 1px 1px rgb(255 255 255 / 100%)!important;border-color:transparent;color:var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:80%!important}.btn-primary{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-link,.btn-blank{font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-size:var(--agnostic-btn-font-size, 1rem);background-color:transparent;border:0;border-radius:0;box-shadow:none;transition:none}.btn-blank{--agnostic-btn-blank-side-padding: var(--btn-blank-side-padding, .25rem);padding-inline-start:var(--agnostic-btn-blank-side-padding);padding-inline-end:var(--agnostic-btn-blank-side-padding)}.btn-link{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-link:hover{cursor:pointer}.btn-grouped{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-grouped:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;margin-inline-end:-1px}.btn-grouped:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-capsule{--padding-side: calc(var(--agnostic-side-padding, .75rem) * 1.5);border-radius:var(--agnostic-radius-capsule);padding-inline-start:var(--padding-side);padding-inline-end:var(--padding-side)}@media (prefers-reduced-motion),(update: slow){.btn,.btn-blank,.btn:focus{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-button', template: ` <button
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
    </ng-template>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin,.btn{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn:hover{opacity:85%;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgb(255 255 255 / 30%);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark))!important;text-shadow:0 1px 1px rgb(255 255 255 / 100%)!important;border-color:transparent;color:var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:80%!important}.btn-primary{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-link,.btn-blank{font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-size:var(--agnostic-btn-font-size, 1rem);background-color:transparent;border:0;border-radius:0;box-shadow:none;transition:none}.btn-blank{--agnostic-btn-blank-side-padding: var(--btn-blank-side-padding, .25rem);padding-inline-start:var(--agnostic-btn-blank-side-padding);padding-inline-end:var(--agnostic-btn-blank-side-padding)}.btn-link{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-link:hover{cursor:pointer}.btn-grouped{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-grouped:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;margin-inline-end:-1px}.btn-grouped:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-capsule{--padding-side: calc(var(--agnostic-side-padding, .75rem) * 1.5);border-radius:var(--agnostic-radius-capsule);padding-inline-start:var(--padding-side);padding-inline-end:var(--padding-side)}@media (prefers-reduced-motion),(update: slow){.btn,.btn-blank,.btn:focus{transition-duration:.001ms!important}}\n"] }]
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
            }], isLink: [{
                type: Input
            }], isCircle: [{
                type: Input
            }], isBlock: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isCapsule: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], handleClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDOzs7QUEyQnZCLE1BQU0sT0FBTyxlQUFlO0lBekI1QjtRQTBCVyxTQUFJLEdBQXdDLFNBQVMsQ0FBQztRQUl0RCxTQUFJLEdBQTRDLFFBQVEsQ0FBQztRQUN6RCxTQUFJLEdBQWtDLFFBQVEsQ0FBQztRQUUvQyxlQUFVLEdBQWtCLEtBQUssQ0FBQztRQVNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7S0FxQ3hEO0lBbkNDLElBQVcsT0FBTztRQUNoQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDaEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2RSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRWhFLE9BQU87WUFDTCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsU0FBUztTQUNWLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7NEdBckRVLGVBQWU7Z0dBQWYsZUFBZSx3V0F2QmhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQW1CTzsyRkFJTixlQUFlO2tCQXpCM0IsU0FBUzsrQkFDRSxXQUFXLFlBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBbUJPLG1CQUVBLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLElBQUk7c0JBQVosS0FBSztnQkFJRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGAgPGJ1dHRvblxuICAgICAgZGl2XG4gICAgICAqbmdJZj1cImdldFR5cGUgIT09ICdmYXV4JzsgZWxzZSB1c2VGYXV4RGl2XCJcbiAgICAgIFt0eXBlXT1cImdldFR5cGVcIlxuICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgICBbZGlzYWJsZWRdPVwiZ2V0RGlzYWJsZWRcIlxuICAgICAgW2NsYXNzXT1cImNsYXNzZXNcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VHBsXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9idXR0b24+XG4gICAgPG5nLXRlbXBsYXRlICN1c2VGYXV4RGl2PlxuICAgICAgPGRpdiBbY2xhc3NdPVwiY2xhc3Nlc1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRwbFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8IS0tIFdlIGhhdmUgdG8gZ3JhYiBwcm9qZWN0ZWQgbmctY29udGVudCBhbmQgcHV0IGluIHRoaXMgdGVtcGxhdGUuXG4gICAgICBUaGVuLCB3ZSBjYW4gcmVmZXJlbmNlIGl0IGZyb20gdGhlIHRlbXBsYXRlIG91dGxldHMgYWJvdmUgLS0+XG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VHBsPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbW9kZTogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIC8vIFR5cGUgYGZhdXhgIHdpbGwgcmVzdWx0IGluIGEgZGl2IHRoYXQgXCJsb29rcyBsaWtlXCIgYSBidXR0b24uIFVzZWZ1bCBmb3IgdGFiIGJ1dHRvbnNcbiAgLy8gb3Igc2ltaWxhciB0aGF0IG1heSBiZSBkZXNjZW5kZW50cyBvZiBhIGZvY3VzYWJsZSA8bGkgcm9sZT1cImJ1dHRvblwiLi4uIHdoZXJlIGl0IHdvdWxkXG4gIC8vIHRocm93IGFuIGExMXkgZXJyb3IgbGlrZTogRW5zdXJlIGludGVyYWN0aXZlIGNvbnRyb2xzIGFyZSBub3QgbmVzdGVkXG4gIEBJbnB1dCgpIHR5cGU/OiAnYnV0dG9uJyB8ICdyZXNldCcgfCAnc3VibWl0JyB8ICdmYXV4JyA9ICdidXR0b24nO1xuICBASW5wdXQoKSBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyA9ICdtZWRpdW0nO1xuICBASW5wdXQoKSBjc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ/OiB0cnVlIHwgZmFsc2UgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNTa2lubmVkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNCbGFuaz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzTGluaz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzQ2lyY2xlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNCbG9jaz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzQm9yZGVyZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc0NhcHN1bGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc1JvdW5kZWQ/OiBib29sZWFuO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgcHVibGljIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZUNsYXNzID0gdGhpcy5pc1NraW5uZWQgIT09IGZhbHNlID8gYGJ0bmAgOiBgYnRuLWJhc2VgO1xuICAgIGNvbnN0IG1vZGVDbGFzcyA9IHRoaXMubW9kZSA/IGBidG4tJHt0aGlzLm1vZGV9YCA6ICcnO1xuICAgIGNvbnN0IGlzQmxhbmtDbGFzcyA9IHRoaXMuaXNCbGFuayA9PT0gdHJ1ZSA/ICdidG4tYmxhbmsnIDogJyc7XG4gICAgY29uc3QgaXNMaW5rQ2xhc3MgPSB0aGlzLmlzTGluayA9PT0gdHJ1ZSA/ICdidG4tbGluaycgOiAnJztcbiAgICBjb25zdCBpc0JvcmRlcmVkQ2xhc3MgPSB0aGlzLmlzQm9yZGVyZWQgPT09IHRydWUgPyAnYnRuLWJvcmRlcmVkJyA6ICcnO1xuICAgIGNvbnN0IGlzQ2Fwc3VsZUNsYXNzID0gdGhpcy5pc0NhcHN1bGUgPT09IHRydWUgPyAnYnRuLWNhcHN1bGUnIDogJyc7XG4gICAgY29uc3QgaXNDaXJjbGVDbGFzcyA9IHRoaXMuaXNDaXJjbGUgPT09IHRydWUgPyAnYnRuLWNpcmNsZScgOiAnJztcbiAgICBjb25zdCBpc0Jsb2NrQ2xhc3MgPSB0aGlzLmlzQmxvY2sgPT09IHRydWUgPyAnYnRuLWJsb2NrJyA6ICcnO1xuICAgIGNvbnN0IGlzUm91bmRlZENsYXNzID0gdGhpcy5pc1JvdW5kZWQgPT09IHRydWUgPyAnYnRuLXJvdW5kZWQnIDogJyc7XG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhpcy5jc3MgPyBgJHt0aGlzLmNzc31gIDogJyc7XG4gICAgY29uc3Qgc2l6ZUNsYXNzID0gdGhpcy5zaXplID8gYGJ0bi0ke3RoaXMuc2l6ZX1gIDogJ2J0bi1tZWRpdW0nO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGJhc2VDbGFzcyxcbiAgICAgIG1vZGVDbGFzcyxcbiAgICAgIHNpemVDbGFzcyxcbiAgICAgIGlzQm9yZGVyZWRDbGFzcyxcbiAgICAgIGlzQ2Fwc3VsZUNsYXNzLFxuICAgICAgaXNDaXJjbGVDbGFzcyxcbiAgICAgIGlzUm91bmRlZENsYXNzLFxuICAgICAgaXNCbG9ja0NsYXNzLFxuICAgICAgaXNCbGFua0NsYXNzLFxuICAgICAgaXNMaW5rQ2xhc3MsXG4gICAgICBvdmVycmlkZXMsXG4gICAgXS5qb2luKCcgJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdldERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgfHwgZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID8gdGhpcy50eXBlIDogJ2J1dHRvbic7XG4gIH1cbn1cbiJdfQ==