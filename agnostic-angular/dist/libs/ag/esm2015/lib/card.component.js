import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CardComponent {
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
  </div>`, isInline: true, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card,.card-skin{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgba(6, 6, 6, .075)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgba(5, 5, 5, .1));border-radius:var(--agnostic-card-border-radius, 4px);overflow:hidden}.card:hover,.card-skin:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgba(4, 4, 4, .1)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgba(3, 3, 3, .1))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translateY-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-stacked{flex-direction:column}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
//# sourceMappingURL=card.component.js.map
