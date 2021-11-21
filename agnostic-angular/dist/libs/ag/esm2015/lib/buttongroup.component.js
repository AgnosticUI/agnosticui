import { Component, Input, ChangeDetectionStrategy, ContentChildren, QueryList, ViewEncapsulation, } from '@angular/core';
import { ButtonComponent } from './button.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ButtonGroupComponent {
    get getAriaLabel() {
        const label = this.ariaLabel ? this.ariaLabel : 'button group element';
        return label;
    }
    get classes() {
        const cssClass = this.css ? this.css : '';
        return ['btn-group', cssClass].join(' ');
    }
}
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ButtonGroupComponent, selector: "ag-button-group", inputs: { css: "css", ariaLabel: "ariaLabel" }, queries: [{ propertyName: "buttons", predicate: ButtonComponent }], ngImport: i0, template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnostic-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnostic-btn-radius, var(--fluid-4))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ButtonGroupComponent, decorators: [{
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
//# sourceMappingURL=buttongroup.component.js.map