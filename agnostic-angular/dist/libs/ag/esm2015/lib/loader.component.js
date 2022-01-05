import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class LoaderComponent {
    constructor() {
        this.size = '';
        this.ariaLabel = 'Loading…';
    }
    get loaderClasses() {
        return [
            'loader',
            `loader-${this.size}`,
        ].filter((cl) => cl).join(' ');
    }
}
LoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: LoaderComponent, selector: "ag-loader", inputs: { size: "size", ariaLabel: "ariaLabel" }, ngImport: i0, template: `<div [class]="loaderClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`, isInline: true, styles: [".loader{--loading-color: var(--agnostic-loading-color, var(--agnostic-dark));--loading-size: var(--fluid-16);--loading-size-small: var(--fluid-12);--loading-size-large: var(--fluid-18);position:relative;box-sizing:border-box;animation:blink 1s infinite;animation-delay:.25s;margin-left:var(--loading-size);opacity:0%}.loader,.loader:before,.loader:after{width:calc(var(--loading-size) / 2);height:calc(var(--loading-size) / 2);border-radius:var(--fluid-6);background-color:var(--loading-color)}.loader-small,.loader-small:before,.loader-small:after{width:calc(var(--loading-size-small) / 2);height:calc(var(--loading-size-small) / 2)}.loader-large,.loader-large:before,.loader-large:after{width:calc(var(--loading-size-large) / 2);height:calc(var(--loading-size-large) / 2)}.loader:before,.loader:after{content:\"\";display:inline-block;position:absolute;top:0;animation:blink 1s infinite}.loader:before{left:calc(-1 * var(--loading-size));animation-delay:0s}.loader:after{left:var(--loading-size);animation-delay:.5s}.loader-small:before{left:calc(-1 * var(--loading-size-small))}.loader-small:after{left:var(--loading-size-small)}.loader-large:before{left:calc(-1 * var(--loading-size-large));animation-delay:0s}.loader-large:after{left:var(--loading-size-large)}.loader[aria-busy=true]{opacity:100%}@keyframes blink{50%{background-color:transparent}}@media (prefers-reduced-motion),(update: slow){.loader,.loader:before,.loader:after{transition-duration:.001ms!important}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-loader',
                    template: `<div [class]="loaderClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`,
                    styleUrls: ['./loader.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=loader.component.js.map