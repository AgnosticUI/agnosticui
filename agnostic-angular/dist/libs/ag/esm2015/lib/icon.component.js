import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
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
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: IconComponent, selector: "ag-icon", inputs: { size: "size", type: "type", isSkinned: "isSkinned" }, ngImport: i0, template: `<span [class]="iconClasses"><ng-content></ng-content></span>`, isInline: true, styles: [".icon-base>svg,.icon>svg{display:inline-flex;text-align:center;max-width:100%;pointer-events:none;-webkit-user-select:none;user-select:none}.icon-skin,.icon,.icon>svg{width:var(--fluid-16);height:var(--fluid-16)}.icon>svg{fill:currentColor}.icon-14,.icon-14>svg{width:var(--fluid-14);height:var(--fluid-14)}.icon-16,.icon-16>svg{width:var(--fluid-16);height:var(--fluid-16)}.icon-18,.icon-18>svg{width:var(--fluid-18);height:var(--fluid-18)}.icon-20,.icon-20>svg{width:var(--fluid-20);height:var(--fluid-20)}.icon-24,.icon-24>svg{width:var(--fluid-24);height:var(--fluid-24)}.icon-32,.icon-32>svg{width:var(--fluid-32);height:var(--fluid-32)}.icon-36,.icon-36>svg{width:var(--fluid-36);height:var(--fluid-36)}.icon-40,.icon-40>svg{width:var(--fluid-40);height:var(--fluid-40)}.icon-48,.icon-48>svg{width:var(--fluid-48);height:var(--fluid-48)}.icon-56,.icon-56>svg{width:var(--fluid-56);height:var(--fluid-56)}.icon-64,.icon-64>svg{width:var(--fluid-64);height:var(--fluid-64)}.icon-info>svg{color:var(--agnostic-primary)}.icon-success>svg{color:var(--agnostic-action)}.icon-warning>svg{color:var(--agnostic-warning-border-accent)}.icon-error>svg{color:var(--agnostic-error)}\n", "ag-icon{display:inline-flex}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-icon',
                    template: `<span [class]="iconClasses"><ng-content></ng-content></span>`,
                    styleUrls: ['./icon.css', './icon.host.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], type: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }] } });
//# sourceMappingURL=icon.component.js.map