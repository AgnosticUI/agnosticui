import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class TagComponent {
    constructor() {
        this.type = '';
        this.shape = '';
        this.isUppercase = false;
    }
    get tagClasses() {
        return [
            'tag',
            this.type ? `tag-${this.type}` : '',
            this.shape ? `tag-${this.shape}` : '',
            this.isUppercase ? 'tag-upper' : '',
        ]
            .filter((c) => c)
            .join(' ');
    }
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: TagComponent, selector: "ag-tag", inputs: { type: "type", shape: "shape", isUppercase: "isUppercase" }, ngImport: i0, template: `<span [class]="tagClasses"><ng-content></ng-content></span>`, isInline: true, styles: [".tag-base,.tag{display:inline-flex;justify-content:center;white-space:nowrap}.tag-skin,.tag{background-color:var(--agnostic-gray-light);color:var(--agnostic-dark);font-size:var(--fluid-12);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2);padding-inline-start:var(--fluid-8);padding-inline-end:var(--fluid-8)}.tag-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.tag-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.tag-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.tag-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.tag-upper{font-size:var(--fluid-10);text-transform:uppercase}.tag-circle{border-radius:50%}.tag-round{border-radius:var(--agnostic-radius)}.tag-pill{border-radius:200px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-tag',
                    template: `<span [class]="tagClasses"><ng-content></ng-content></span>`,
                    styleUrls: ['./tag.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { type: [{
                type: Input
            }], shape: [{
                type: Input
            }], isUppercase: [{
                type: Input
            }] } });
//# sourceMappingURL=tag.component.js.map