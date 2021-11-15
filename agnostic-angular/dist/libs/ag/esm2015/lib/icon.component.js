import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class IconComponent {
    constructor() {
        this.size = 18;
        this.type = '';
        this.isSkinned = true;
    }
    get iconClasses() {
        return [
            'icon',
            this.isSkinned ? 'icon' : 'icon-base',
            this.size ? `icon-${this.size}` : '',
            this.type ? `icon-${this.type}` : '',
        ]
            .filter((c) => c)
            .join(' ');
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: IconComponent, selector: "ag-icon", inputs: { size: "size", type: "type", isSkinned: "isSkinned" }, ngImport: i0, template: `<span [class]="iconClasses"><ng-content></ng-content></span>`, isInline: true, styles: [".icon-base,.icon{display:inline-flex;text-align:center;max-width:100%;pointer-events:none;-webkit-user-select:none;user-select:none}.icon-skin,.icon{fill:currentColor;width:var(--fluid-16);height:var(--fluid-16)}.icon-14{width:var(--fluid-14);height:var(--fluid-14)}.icon-16{width:var(--fluid-16);height:var(--fluid-16)}.icon-18{width:var(--fluid-18);height:var(--fluid-18)}.icon-20{width:var(--fluid-20);height:var(--fluid-20)}.icon-24{width:var(--fluid-24);height:var(--fluid-24)}.icon-32{width:var(--fluid-32);height:var(--fluid-32)}.icon-36{width:var(--fluid-36);height:var(--fluid-36)}.icon-40{width:var(--fluid-40);height:var(--fluid-40)}.icon-48{width:var(--fluid-48);height:var(--fluid-48)}.icon-56{width:var(--fluid-56);height:var(--fluid-56)}.icon-64{width:var(--fluid-64);height:var(--fluid-64)}.icon-info{color:var(--agnostic-primary)}.icon-success{color:var(--agnostic-action)}.icon-warning{color:var(--agnostic-warning-border-accent)}.icon-error{color:var(--agnostic-error)}\n", ":host{display:inline-flex}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-icon',
                    template: `<span [class]="iconClasses"><ng-content></ng-content></span>`,
                    styleUrls: ['./icon.css', './icon.host.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], type: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }] } });
//# sourceMappingURL=icon.component.js.map