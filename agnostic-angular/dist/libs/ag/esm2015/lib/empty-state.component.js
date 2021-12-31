import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class EmptyStateHeaderComponent {
}
EmptyStateHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateHeaderComponent, selector: "ag-empty-state-header", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-header',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
export class EmptyStateBodyComponent {
}
EmptyStateBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateBodyComponent, selector: "ag-empty-state-body", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-body',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
export class EmptyStateFooterComponent {
}
EmptyStateFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateFooterComponent, selector: "ag-empty-state-footer", ngImport: i0, template: `<div class="empty-action">
    <ng-content></ng-content>
  </div>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-footer',
                    template: `<div class="empty-action">
    <ng-content></ng-content>
  </div>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
export class EmptyStateComponent {
    get emptyClasses() {
        return [
            'empty',
            this.isRounded ? 'empty-rounded' : '',
            this.isBordered ? 'empty-bordered' : '',
        ]
            .filter((c) => c)
            .join(' ');
    }
}
EmptyStateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateComponent, selector: "ag-empty-state", inputs: { isBordered: "isBordered", isRounded: "isRounded" }, ngImport: i0, template: `<div [class]="emptyClasses">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".empty-base,.empty{display:flex;flex-flow:column wrap;align-items:center;text-align:center;width:100%}.empty{padding:calc(2 * var(--agnostic-side-padding));background:var(--agnostic-gray-extra-light)}.empty-bordered{background:transparent;border:1px solid var(--agnostic-gray-light)}.empty-rounded{border-radius:var(--agnostic-radius)}.empty-actions{margin-block-start:var(--spacing-24)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state',
                    template: `<div [class]="emptyClasses">
    <ng-content></ng-content>
  </div>`,
                    styleUrls: ['./empty-state.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { isBordered: [{
                type: Input
            }], isRounded: [{
                type: Input
            }] } });
//# sourceMappingURL=empty-state.component.js.map