import { Input, ChangeDetectionStrategy, HostBinding, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DividerComponent {
    constructor() {
        this.hasContent = false;
        this.isVertical = false;
    }
    get dividerClasses() {
        return [
            'divider',
            this.isVertical ? 'divider-vertical' : '',
            this.type ? `divider-${this.type}` : '',
            this.size ? `divider-${this.size}` : '',
            this.justify ? `divider-justify-${this.justify}` : '',
        ]
            .filter((c) => c)
            .join(' ');
    }
}
DividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: DividerComponent, selector: "ag-divider", inputs: { hasContent: "hasContent", isVertical: "isVertical", justify: "justify", type: "type", size: "size" }, host: { properties: { "class.flex": "this.isVertical" } }, ngImport: i0, template: `<div [class]="dividerClasses">
    <div *ngIf="hasContent" class="divider-content">
      <ng-content></ng-content>
    </div>
  </div>`, isInline: true, styles: [".divider{display:flex;justify-content:center;align-items:center;white-space:nowrap;width:100%}.divider:before,.divider:after{content:\"\";background-color:var(--agnostic-gray-mid);height:var(--fluid-2);flex-grow:1}.divider-small:before,.divider-small:after{height:1px}.divider-large:before,.divider-large:after{height:var(--fluid-4)}.divider-xlarge:before,.divider-xlarge:after{height:var(--fluid-6)}.divider-justify-end:after,.divider-justify-start:before{flex-grow:0;flex-basis:3%}.divider-content{padding-inline-start:var(--fluid-16);padding-inline-end:var(--fluid-16)}.divider-vertical{height:auto;margin:0 var(--fluid-16);width:var(--fluid-16);flex-direction:column;align-self:stretch}.divider-vertical:before,.divider-vertical:after{width:var(--fluid-2)}.divider-vertical.divider-small:before,.divider-vertical.divider-small:after{width:1px}.divider-vertical.divider-large:before,.divider-vertical.divider-large:after{width:var(--fluid-4)}.divider-vertical.divider-xlarge:before,.divider-vertical.divider-xlarge:after{width:var(--fluid-6)}.divider-vertical .divider-content{padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6)}.divider-warning:before,.divider-warning:after{background-color:var(--agnostic-warning-dark)}.divider-warning .divider-content{color:var(--agnostic-warning-dark)}.divider-error:before,.divider-error:after{background-color:var(--agnostic-error)}.divider-error .divider-content{color:var(--agnostic-error)}.divider-success:before,.divider-success:after{background-color:var(--agnostic-action-from)}.divider-success .divider-content{color:var(--agnostic-action-from)}.divider-info:before,.divider-info:after{background-color:var(--agnostic-primary)}.divider-info .divider-content{color:var(--agnostic-primary)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-divider',
                    template: `<div [class]="dividerClasses">
    <div *ngIf="hasContent" class="divider-content">
      <ng-content></ng-content>
    </div>
  </div>`,
                    styleUrls: ['./divider.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { hasContent: [{
                type: Input
            }], isVertical: [{
                type: HostBinding,
                args: ['class.flex']
            }, {
                type: Input
            }], justify: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=divider.component.js.map