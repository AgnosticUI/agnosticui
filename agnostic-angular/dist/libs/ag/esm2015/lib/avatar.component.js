import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AvatarGroupComponent {
}
AvatarGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AvatarGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: AvatarGroupComponent, selector: "ag-avatar-group", ngImport: i0, template: `<div class="avatar-group"><ng-content></ng-content></div>`, isInline: true, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AvatarGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-avatar-group',
                    template: `<div class="avatar-group"><ng-content></ng-content></div>`,
                    styleUrls: ['./avatar.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                }]
        }] });
export class AvatarComponent {
    constructor() {
        this.isRounded = false;
        this.isSquare = false;
        this.isTransparent = false;
        this.type = '';
        this.size = '';
        this.text = '';
    }
    get avatarClasses() {
        return [
            'avatar',
            this.size ? `avatar-${this.size}` : '',
            this.type ? `avatar-${this.type}` : '',
            this.isRounded ? 'avatar-rounded' : '',
            this.isTransparent ? 'avatar-transparent' : '',
            this.isSquare ? 'avatar-square' : '',
        ]
            .filter((c) => c.length)
            .join(' ');
    }
}
AvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: AvatarComponent, selector: "ag-avatar", inputs: { isRounded: "isRounded", isSquare: "isSquare", isTransparent: "isTransparent", type: "type", size: "size", text: "text" }, ngImport: i0, template: `<span [ngClass]="avatarClasses" [attr.data-text]="text"
    ><ng-content></ng-content
  ></span>`, isInline: true, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n", ":host:not(.first){margin-inline-start:calc(-1 * var(--fluid-10))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-avatar',
                    template: `<span [ngClass]="avatarClasses" [attr.data-text]="text"
    ><ng-content></ng-content
  ></span>`,
                    styleUrls: ['./avatar.css', './avatar.shame.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { isRounded: [{
                type: Input
            }], isSquare: [{
                type: Input
            }], isTransparent: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], text: [{
                type: Input
            }] } });
//# sourceMappingURL=avatar.component.js.map