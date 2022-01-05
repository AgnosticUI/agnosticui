import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class SpinnerComponent {
    constructor() {
        this.size = '';
        this.ariaLabel = 'Loading…';
    }
    get spinnerClasses() {
        return [
            'spinner',
            `spinner-${this.size}`,
        ].filter((cl) => cl).join(' ');
    }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SpinnerComponent, selector: "ag-spinner", inputs: { size: "size", ariaLabel: "ariaLabel" }, ngImport: i0, template: `<div [class]="spinnerClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`, isInline: true, styles: [".spinner{--spinner-color: var(--agnostic-spinner-color, var(--agnostic-dark));display:grid;grid-template:\"content\" 100% / auto;place-items:center;box-sizing:border-box}.spinner:before,.spinner:after{grid-area:content;width:var(--fluid-32);height:var(--fluid-32);content:\"\";display:block;border-radius:50%;border-width:3px;border-style:solid}.spinner-small:before,.spinner-small:after{width:var(--fluid-24);height:var(--fluid-24);border-width:var(--fluid-2)}.spinner-large:before,.spinner-large:after{width:var(--fluid-40);height:var(--fluid-40);border-width:var(--fluid-4)}.spinner-xlarge:before,.spinner-xlarge:after{width:var(--fluid-56);height:var(--fluid-56);border-width:var(--fluid-6)}.spinner:before{opacity:0%;border-color:var(--spinner-color)}.spinner:after{opacity:0%;border-color:transparent var(--spinner-color) transparent transparent;transition:opacity .1s;pointer-events:none;animation:loading-circle 1s ease-in-out infinite}.spinner[aria-busy=true]:before{opacity:12%}.spinner[aria-busy=true]:after{opacity:100%}@keyframes loading-circle{to{transform:rotate(360deg)}}@media (prefers-reduced-motion),(update: slow){.spinner:after{transition-duration:.001ms!important}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-spinner',
                    template: `<div [class]="spinnerClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`,
                    styleUrls: ['./spinner.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=spinner.component.js.map