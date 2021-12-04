import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, EventEmitter, Output, ContentChildren, HostBinding, ViewChildren, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class AlertComponent {
    constructor() {
        this.isRounded = false;
        this.isBorderAll = false;
        this.isBorderLeft = false;
        this.isBorderRight = false;
        this.isBorderTop = false;
        this.isBorderBottom = false;
        this.isBlockEnd = false;
        this.type = '';
    }
    get alertClasses() {
        const classes = [
            'alert',
            this.type ? `alert-${this.type}` : '',
            this.isBorderAll ? 'alert-border-all' : '',
            this.isBorderLeft ? 'alert-border-left' : '',
            this.isBorderRight ? 'alert-border-right' : '',
            this.isBorderTop ? 'alert-border-top' : '',
            this.isBorderBottom ? 'alert-border-bottom' : '',
            this.isBlockEnd ? 'alert-end' : '',
            this.isRounded ? 'alert-rounded' : '',
        ].filter(c => c.length).join(' ');
        return classes;
    }
    get svgModifierClass() {
        return this.type ? `alert-${this.type}-icon` : '';
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: AlertComponent, selector: "ag-alert", inputs: { isRounded: "isRounded", isBorderAll: "isBorderAll", isBorderLeft: "isBorderLeft", isBorderRight: "isBorderRight", isBorderTop: "isBorderTop", isBorderBottom: "isBorderBottom", isBlockEnd: "isBlockEnd", type: "type" }, ngImport: i0, template: `<div [ngClass]="alertClasses" role="alert">
    <svg
      class="alert-icon"
      [ngClass]="svgModifierClass"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        fill="currentColor"
        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      ></path>
    </svg>
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".alert-base,.alert{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.alert-end{justify-content:flex-end}.alert-skin,.alert{padding:var(--agnostic-side-padding);background:var(--agnostic-gray-light)}.alert-icon{color:var(--agnostic-gray-mid-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-border-top{border-top:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-left{border-left:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-bottom{border-bottom:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-right{border-right:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-all{border:var(--fluid-2) solid var(--agnostic-gray-mid-dark)}.alert-rounded{border-radius:var(--agnostic-alert-radius, var(--agnostic-radius, .25rem))}.alert-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.alert-warning-icon{color:var(--agnostic-warning-border-accent);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-warning.alert-border-top{border-top-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-left{border-left-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-bottom{border-bottom-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-right{border-right-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-all{border:var(--fluid-2) solid var(--agnostic-warning-border)}.alert-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.alert-info-icon{color:var(--agnostic-primary-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-info.alert-border-top{border-top-color:var(--agnostic-primary-dark)}.alert-info.alert-border-left{border-left-color:var(--agnostic-primary-dark)}.alert-info.alert-border-bottom{border-bottom-color:var(--agnostic-primary-dark)}.alert-info.alert-border-right{border-right-color:var(--agnostic-primary-dark)}.alert-info.alert-border-all{border:var(--fluid-2) solid var(--agnostic-primary-border)}.alert-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.alert-error-icon{color:var(--agnostic-error-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-error.alert-border-top{border-top-color:var(--agnostic-error-dark)}.alert-error.alert-border-left{border-left-color:var(--agnostic-error-dark)}.alert-error.alert-border-bottom{border-bottom-color:var(--agnostic-error-dark)}.alert-error.alert-border-right{border-right-color:var(--agnostic-error-dark)}.alert-error.alert-border-all{border:var(--fluid-2) solid var(--agnostic-error-border)}.alert-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.alert-success-icon{color:var(--agnostic-ation-from);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-success.alert-border-top{border-top-color:var(--agnostic-action-from)}.alert-success.alert-border-left{border-left-color:var(--agnostic-action-from)}.alert-success.alert-border-bottom{border-bottom-color:var(--agnostic-action-from)}.alert-success.alert-border-right{border-right-color:var(--agnostic-action-from)}.alert-success.alert-border-all{border:var(--fluid-2) solid var(--agnostic-action-border)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-alert',
                    template: `<div [ngClass]="alertClasses" role="alert">
    <svg
      class="alert-icon"
      [ngClass]="svgModifierClass"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        fill="currentColor"
        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      ></path>
    </svg>
    <ng-content></ng-content>
  </div>`,
                    styleUrls: ['./alert.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { isRounded: [{
                type: Input
            }], isBorderAll: [{
                type: Input
            }], isBorderLeft: [{
                type: Input
            }], isBorderRight: [{
                type: Input
            }], isBorderTop: [{
                type: Input
            }], isBorderBottom: [{
                type: Input
            }], isBlockEnd: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class AvatarGroupComponent {
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
class AvatarComponent {
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

class BreadcrumbItemComponent {
    constructor() {
        this.isLast = false;
    }
}
BreadcrumbItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: BreadcrumbItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: BreadcrumbItemComponent, selector: "ag-breadcrumb-item", inputs: { route: "route", isLast: "isLast" }, ngImport: i0, template: `<li class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
    <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
    <ng-template #linklessLabel>
      {{route.label}}
    </ng-template>
  </li>`, isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: BreadcrumbItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-breadcrumb-item',
                    template: `<li class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
    <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
    <ng-template #linklessLabel>
      {{route.label}}
    </ng-template>
  </li>`,
                    styleUrls: ['./breadcrumb.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { route: [{
                type: Input
            }], isLast: [{
                type: Input
            }] } });
class BreadcrumbComponent {
    constructor() {
        this.type = 'slash';
    }
    get breadcrumbClasses() {
        return [
            'breadcrumb',
            this.type ? `breadcrumb-${this.type}` : '',
        ]
            .filter((c) => c.length)
            .join(' ');
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: BreadcrumbComponent, selector: "ag-breadcrumb", inputs: { type: "type", routes: "routes" }, ngImport: i0, template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>
    </li>
  </ol>
</nav>`, isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-breadcrumb',
                    template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>
    </li>
  </ol>
</nav>`,
                    styleUrls: ['./breadcrumb.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { type: [{
                type: Input
            }], routes: [{
                type: Input
            }] } });

class ButtonComponent {
    constructor() {
        this.mode = undefined;
        this.type = 'button';
        this.size = 'medium';
        this.isDisabled = false;
        this.handleClick = new EventEmitter();
    }
    get classes() {
        const baseClass = this.isSkinned !== false ? `btn` : `btn-base`;
        const modeClass = this.mode ? `btn-${this.mode}` : '';
        const isBlankClass = this.isBlank === true ? 'btn-blank' : '';
        const isLinkClass = this.isLink === true ? 'btn-link' : '';
        const isBorderedClass = this.isBordered === true ? 'btn-bordered' : '';
        const isRaisedClass = this.isRaised === true ? 'btn-raised' : '';
        const isCircleClass = this.isCircle === true ? 'btn-circle' : '';
        const isBlockClass = this.isBlock === true ? 'btn-block' : '';
        const isRoundedClass = this.isRounded === true ? 'btn-rounded' : '';
        const overrides = this.css ? `${this.css}` : '';
        const sizeClass = this.size ? `btn-${this.size}` : 'btn-medium';
        return [
            baseClass,
            modeClass,
            sizeClass,
            isBorderedClass,
            isCircleClass,
            isRoundedClass,
            isRaisedClass,
            isBlockClass,
            isBlankClass,
            isLinkClass,
            overrides,
        ].join(' ');
    }
    get getDisabled() {
        return this.isDisabled || false;
    }
    get getType() {
        return this.type ? this.type : 'button';
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ButtonComponent, selector: "ag-button", inputs: { mode: "mode", type: "type", size: "size", css: "css", isDisabled: "isDisabled", isSkinned: "isSkinned", isBlank: "isBlank", isLink: "isLink", isRaised: "isRaised", isCircle: "isCircle", isBlock: "isBlock", isBordered: "isBordered", isRounded: "isRounded" }, outputs: { handleClick: "handleClick" }, ngImport: i0, template: ` <button
      div
      *ngIf="getType !== 'faux'; else useFauxDiv"
      [type]="getType"
      (click)="handleClick.emit($event)"
      [disabled]="getDisabled"
      [class]="classes"
    >
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </button>
    <ng-template #useFauxDiv>
      <div [class]="classes">
        <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
      </div>
    </ng-template>
    <!-- We have to grab projected ng-content and put in this template.
      Then, we can reference it from the template outlets above -->
    <ng-template #contentTpl>
      <ng-content></ng-content>
    </ng-template>`, isInline: true, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin,.btn{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn:hover{opacity:85%;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgb(255 255 255 / 30%);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark))!important;text-shadow:0 1px 1px rgb(255 255 255 / 100%)!important;border-color:transparent;color:var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:80%!important}.btn-primary{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-raised{border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;background:linear-gradient(var(--agnostic-btn-raised-from, var(--agnostic-gray-mid)),var(--agnostic-btn-raised-to, var(--agnostic-gray-extra-light)));box-shadow:inset 0 1px #ffffff4d,0 1px 2px #00000026}.btn-raised:hover,.btn-raised:focus{background:linear-gradient(to bottom,white,gainsboro)}.btn-raised.active{background:#eee;box-shadow:inset 0 1px 3px #0003,0 1px #fff}.btn-raised.btn-primary{border-color:var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from));background:linear-gradient(var(--agnostic-btn-primary-raised-from, var(--agnostic-primary-from)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-to)))}.btn-raised.btn-primary:hover,.btn-raised.btn-primary:focus{background:linear-gradient(to bottom,var(--agnostic-btn-primary-raised-hover-from, var(--agnostic-primary-hover)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)));background:linear-gradient(var(--agnostic-btn-primary-raised-hover-from, var(--agnostic-primary-hover)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)))}.btn-raised.btn-primary:active,.btn-raised.btn-primary.active{opacity:90%;box-shadow:0 0 0 1px #0000004d}.btn-raised.btn-secondary{border-color:var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to));background:linear-gradient(var(--agnostic-btn-secondary-raised-from, var(--agnostic-secondary-from)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))}.btn-raised.btn-secondary:hover,.btn-raised.btn-secondary:focus{background:linear-gradient(to bottom,var(--agnostic-btn-secondary-raised-hover-from, var(--agnostic-secondary-hover)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)));background:linear-gradient(var(--agnostic-btn-secondary-raised-hover-from, var(--agnostic-secondary-hover)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))}.btn-raised.btn-secondary:active,.btn-raised.btn-secondary.active{opacity:90%;box-shadow:0 0 0 1px #0000004d}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-link,.btn-blank{font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-size:var(--agnostic-btn-font-size, 1rem);background-color:transparent;border:0;border-radius:0;box-shadow:none;transition:none}.btn-link{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-link:hover{cursor:pointer}@media (prefers-reduced-motion){.btn,.btn-blank,.btn:focus{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-button',
                    template: ` <button
      div
      *ngIf="getType !== 'faux'; else useFauxDiv"
      [type]="getType"
      (click)="handleClick.emit($event)"
      [disabled]="getDisabled"
      [class]="classes"
    >
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </button>
    <ng-template #useFauxDiv>
      <div [class]="classes">
        <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
      </div>
    </ng-template>
    <!-- We have to grab projected ng-content and put in this template.
      Then, we can reference it from the template outlets above -->
    <ng-template #contentTpl>
      <ng-content></ng-content>
    </ng-template>`,
                    styleUrls: ['./button.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { mode: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], css: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isBlank: [{
                type: Input
            }], isLink: [{
                type: Input
            }], isRaised: [{
                type: Input
            }], isCircle: [{
                type: Input
            }], isBlock: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], handleClick: [{
                type: Output
            }] } });

class ButtonGroupComponent {
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

class DiscloseComponent {
    constructor() {
        this.title = "";
        this.isOpen = false;
        this.isBackground = false;
    }
}
DiscloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: DiscloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DiscloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: DiscloseComponent, selector: "ag-disclose", inputs: { title: "title", isOpen: "isOpen", isBackground: "isBackground" }, ngImport: i0, template: `<details class="disclose" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`, isInline: true, styles: [".disclose{margin-block-end:var(--fluid-4)}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion: reduce){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: DiscloseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-disclose',
                    template: `<details class="disclose" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`,
                    styleUrls: ['./disclose.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { title: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], isBackground: [{
                type: Input
            }] } });

class CardComponent {
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
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: CardComponent, selector: "ag-card", inputs: { css: "css", isAnimated: "isAnimated", isSkinned: "isSkinned", isStacked: "isStacked" }, ngImport: i0, template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card,.card-skin{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));border-radius:var(--agnostic-card-border-radius, var(--agnostic-radius, .25rem));overflow:hidden}.card:hover,.card-skin:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translateY-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}@media (prefers-reduced-motion){.card-animated,.card-animated:hover{transition-duration:.001ms!important}}.card-stacked{flex-direction:column}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: CardComponent, decorators: [{
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

class CloseComponent {
    constructor() {
        this.size = '';
    }
}
CloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: CloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: CloseComponent, selector: "ag-close", inputs: { size: "size" }, ngImport: i0, template: `<button
    class="close-button"
    aria-label="Close"
    [class.close-button-small]="size === 'small'"
    [class.close-button-large]="size === 'large'"
  >
    <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </button>`, isInline: true, styles: [".close-button{background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: CloseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-close',
                    template: `<button
    class="close-button"
    aria-label="Close"
    [class.close-button-small]="size === 'small'"
    [class.close-button-large]="size === 'large'"
  >
    <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </button>`,
                    styleUrls: ['./close.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { size: [{
                type: Input
            }] } });

class ChoiceInputComponent {
    constructor() {
        this.isInline = false;
        this.isFieldset = true;
        this.isSkinned = true;
        this.isDisabled = false;
        this.options = [];
        this._checkedOptions = [];
        this.legendLabel = '';
        this.type = 'checkbox';
        this.size = '';
        this.selected = new EventEmitter();
    }
    get checkedOptions() {
        return this._checkedOptions;
    }
    set checkedOptions(val) {
        this._checkedOptions = val;
    }
    labelSpanClasses() {
        let klasses = [
            this.type ? `${this.type}-label` : '',
            this.size ? `${this.type}-label-${this.size}` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
    handleChange(ev) {
        var _a, _b, _c;
        const el = ev.target;
        const value = el.value;
        if (this.type === 'checkbox') {
            let checkedItemsUpdated;
            if ((_a = this.checkedOptions) === null || _a === void 0 ? void 0 : _a.includes(value)) {
                checkedItemsUpdated = (_b = this.checkedOptions) === null || _b === void 0 ? void 0 : _b.filter((item) => item !== value);
                this.checkedOptions = checkedItemsUpdated;
            }
            else {
                checkedItemsUpdated = [...this.checkedOptions, value];
                this.checkedOptions = checkedItemsUpdated;
            }
            this.selected.emit(checkedItemsUpdated);
        }
        else {
            if ((_c = this.checkedOptions) === null || _c === void 0 ? void 0 : _c.includes(value)) {
                this.checkedOptions = [value];
                this.selected.emit(this.checkedOptions);
            }
        }
    }
    inputClasses() {
        let inputKlasses = [
            `${this.type}`,
            this.size ? `${this.size}` : '',
            this.isDisabled ? 'disabled' : '',
        ];
        inputKlasses = inputKlasses.filter((klass) => klass.length);
        return inputKlasses.join(' ');
    }
    fieldsetClass() {
        const skin = this.isSkinned ? `${this.type}-group` : '';
        const sizeSkin = this.isSkinned && this.size === 'large'
            ? `${this.type}-group-${this.size}`
            : '';
        const overrides = this.css ? `${this.css}` : '';
        const klasses = [
            overrides ? overrides : '',
            skin,
            sizeSkin,
            this.isFieldset === false ? `${this.type}-group-hidden` : '',
        ];
        return klasses.filter((klass) => klass.length);
    }
    legendClasses() {
        const skin = this.isSkinned ? `${this.type}-legend` : '';
        const klasses = [
            skin,
            this.isFieldset === false ? 'screenreader-only' : null,
        ];
        return klasses.join(' ');
    }
    labelClasses() {
        let klasses = [
            this.type ? `${this.type}-label-wrap` : '',
            this.isInline ? `${this.type}-label-wrap-inline` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
ChoiceInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ChoiceInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChoiceInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ChoiceInputComponent, selector: "ag-choice-input", inputs: { isInline: "isInline", isFieldset: "isFieldset", isSkinned: "isSkinned", isDisabled: "isDisabled", options: "options", disabledOptions: "disabledOptions", checkedOptions: "checkedOptions", css: "css", legendLabel: "legendLabel", type: "type", size: "size" }, outputs: { selected: "selected" }, ngImport: i0, template: `<fieldset [ngClass]="fieldsetClass()">
    <legend [ngClass]="legendClasses()">{{ legendLabel }}</legend>
    <ng-container *ngFor="let option of options">
      <label
        [attr.disabled]="isDisabled || disabledOptions?.includes(option.value)"
        [ngClass]="labelClasses()"
      >
        <input
          [ngClass]="inputClasses()"
          [type]="type"
          [name]="option.name"
          [value]="option.value"
          [disabled]="isDisabled || disabledOptions?.includes(option.value)"
          [checked]="checkedOptions?.includes(option.value) || false"
          (change)="this.handleChange($event)"
        />
        <span [ngClass]="labelSpanClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`, isInline: true, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:block;cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label,.radio-label{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]+.checkbox-label,.radio[disabled]+.radio-label,.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ChoiceInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-choice-input',
                    template: `<fieldset [ngClass]="fieldsetClass()">
    <legend [ngClass]="legendClasses()">{{ legendLabel }}</legend>
    <ng-container *ngFor="let option of options">
      <label
        [attr.disabled]="isDisabled || disabledOptions?.includes(option.value)"
        [ngClass]="labelClasses()"
      >
        <input
          [ngClass]="inputClasses()"
          [type]="type"
          [name]="option.name"
          [value]="option.value"
          [disabled]="isDisabled || disabledOptions?.includes(option.value)"
          [checked]="checkedOptions?.includes(option.value) || false"
          (change)="this.handleChange($event)"
        />
        <span [ngClass]="labelSpanClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`,
                    styleUrls: ['./choice-input.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { isInline: [{
                type: Input
            }], isFieldset: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], options: [{
                type: Input
            }], disabledOptions: [{
                type: Input
            }], checkedOptions: [{
                type: Input
            }], css: [{
                type: Input
            }], legendLabel: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], selected: [{
                type: Output
            }] } });

class HeaderNavComponent {
    get classes() {
        return ['header-nav', this.css ? `${this.css}` : '']
            .filter((cl) => cl.length)
            .join(' ');
    }
}
HeaderNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: HeaderNavComponent, selector: "ag-header-nav", inputs: { css: "css" }, ngImport: i0, template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`, isInline: true, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: HeaderNavComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header-nav',
                    template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`,
                    styleUrls: ['./headernav.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { css: [{
                type: Input
            }] } });
class HeaderNavItemComponent {
    get classes() {
        let klasses = ['header-nav-item', this.css ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderNavItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: HeaderNavItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: HeaderNavItemComponent, selector: "ag-header-nav-item", inputs: { css: "css" }, ngImport: i0, template: `<div [ngClass]="classes"><ng-content></ng-content></div>`, isInline: true, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnostic-header-color, var(--agnostic-font-color))}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: HeaderNavItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header-nav-item',
                    template: `<div [ngClass]="classes"><ng-content></ng-content></div>`,
                    styleUrls: ['./headernavitem.css'],
                }]
        }], propDecorators: { css: [{
                type: Input
            }] } });
class HeaderComponent {
    constructor() {
        this.isSkinned = true;
        this.isHeaderContentStart = false;
        this.isHeaderContentEnd = false;
    }
    get classes() {
        const baseClass = this.isSkinned ? 'header' : 'header-base';
        const isStickyClass = this.isSticky ? 'header-sticky' : '';
        const overrides = this.css ? `${this.css}` : '';
        return [baseClass, isStickyClass, overrides]
            .filter((c) => c.length)
            .join(' ');
    }
    get headerContentClasses() {
        const baseClass = 'header-content';
        const headerContentStart = this.isHeaderContentStart
            ? 'header-content-start'
            : '';
        const headerContentEnd = this.isHeaderContentEnd
            ? 'header-content-end'
            : '';
        return [baseClass, headerContentStart, headerContentEnd]
            .filter((c) => c.length)
            .join(' ');
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: HeaderComponent, selector: "ag-header", inputs: { css: "css", isSkinned: "isSkinned", isHeaderContentStart: "isHeaderContentStart", isHeaderContentEnd: "isHeaderContentEnd", isSticky: "isSticky" }, ngImport: i0, template: `<header [ngClass]="classes">
    <div [ngClass]="headerContentClasses"><ng-content></ng-content></div>
  </header> `, isInline: true, styles: [".header,.header-base{display:block}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family-body));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}.header-content-start{justify-content:flex-start}.header-content-end{justify-content:flex-end}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header',
                    template: `<header [ngClass]="classes">
    <div [ngClass]="headerContentClasses"><ng-content></ng-content></div>
  </header> `,
                    styleUrls: ['./header.css'],
                }]
        }], propDecorators: { css: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isHeaderContentStart: [{
                type: Input
            }], isHeaderContentEnd: [{
                type: Input
            }], isSticky: [{
                type: Input
            }] } });

class IconComponent {
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

class InputComponent {
    constructor() {
        this.externalId = '';
        this._ID = '';
        this.helpText = '';
        this.invalidText = '';
        this.isInvalid = false;
        this.isSkinned = true;
        this.isRounded = false;
        this.isUnderlined = false;
        this.isInline = false;
        this.isDisabled = false;
        this.hasLeftAddon = false;
        this.hasRightAddon = false;
        this.isUnderlinedWithBackground = false;
        this.size = '';
    }
    set id(value) {
        this._ID = value;
        this.externalId = null;
    }
    get id() {
        return this._ID;
    }
    helpClasses() {
        const klasses = [
            !this.size ? 'field-help' : '',
            this.size ? `field-help-${this.size}` : '',
        ];
        return klasses.filter((klass) => klass.length).join(' ');
    }
    invalidClasses() {
        const klasses = [
            !this.size ? 'field-error' : '',
            this.size ? `field-error-${this.size}` : '',
        ];
        return klasses.filter((klass) => klass.length).join(' ');
    }
    labelClasses() {
        const labelKlasses = [
            'label',
            this.isInvalid ? 'label-error' : '',
            this.isInline ? 'label-inline' : '',
            this.size ? `label-${this.size}` : '',
            this.labelCss ? this.labelCss : '',
        ];
        return labelKlasses.filter((klass) => klass.length).join(' ');
    }
    inputClasses() {
        let klasses = [
            this.isSkinned ? 'input' : 'input-base',
            this.isRounded ? 'input-rounded' : '',
            this.isUnderlined ? 'input-underlined' : '',
            this.isDisabled ? 'disabled' : '',
            this.isInline ? 'input-inline' : '',
            this.hasLeftAddon ? 'input-has-left-addon' : '',
            this.hasRightAddon ? 'input-has-right-addon' : '',
            this.isInvalid ? 'input-error' : '',
            this.isUnderlinedWithBackground ? 'input-underlined-bg' : '',
            this.css ? `${this.css}` : '',
            this.size ? `input-${this.size}` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
    handleChange(ev) {
        console.log('handleChange not yet implemented...');
    }
    handleFocus(ev) {
        console.log('handleFocus not yet implemented...');
    }
    handleBlur(ev) {
        console.log('handleBlur not yet implemented...');
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: InputComponent, selector: "ag-input", inputs: { id: "id", helpText: "helpText", invalidText: "invalidText", isInvalid: "isInvalid", isSkinned: "isSkinned", isRounded: "isRounded", isUnderlined: "isUnderlined", isInline: "isInline", isDisabled: "isDisabled", hasLeftAddon: "hasLeftAddon", hasRightAddon: "hasRightAddon", isUnderlinedWithBackground: "isUnderlinedWithBackground", name: "name", label: "label", labelCss: "labelCss", css: "css", placeholder: "placeholder", defaultValue: "defaultValue", size: "size", type: "type", rows: "rows", cols: "cols" }, host: { properties: { "attr.id": "this.externalId" } }, ngImport: i0, template: `<div className="w-100">
    <label [class]="labelClasses()" [for]="id">
      {{ label }}
    </label>
    <ng-container *ngIf="type === 'textarea'; else noTextarea">
      <textarea
        *ngIf="type === 'textarea'"
        [id]="id"
        [attr.name]="name ? name : null"
        [value]="defaultValue || ''"
        [disabled]="isDisabled"
        [class]="inputClasses()"
        [placeholder]="placeholder ? placeholder : ''"
        [attr.rows]="rows"
        [attr.cols]="cols"
        (change)="(handleChange)"
        (focus)="(handleFocus)"
        (blur)="(handleBlur)"
      ></textarea>
    </ng-container>
    <ng-template #noTextarea>
      <div
        class="input-addon-container"
        *ngIf="hasLeftAddon || hasRightAddon; else inputOnly"
      >
        <ng-content select="[addOnLeft]"></ng-content>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
        <ng-content select="[addOnRight]"></ng-content>
      </div>
      <ng-template #inputOnly>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
      </ng-template>
    </ng-template>
    <span
      *ngIf="isInvalid; else helpHint"
      [class]="invalidClasses()"
      role="status"
      aria-live="polite"
    >
      {{ invalidText }}
    </span>
    <ng-template #helpHint>
      <span [class]="helpClasses()" role="status" aria-live="polite">
        {{ helpText }}
      </span>
    </ng-template>
  </div>`, isInline: true, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family-body);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error,.label,.label-skin{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:50%;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large,.label-large{font-size:var(--agnostic-font-size, 1rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%;--addon-padding: calc(var(--agnostic-input-side-padding, .75rem) * 1.5)}.input-has-left-addon,.input-has-right-addon{flex:1}.input-has-left-addon{padding-inline-start:calc(var(--addon-padding) * 2.25)}.input-has-right-addon{padding-inline-end:calc(var(--addon-padding) * 2.25)}@media (prefers-reduced-motion){.input-skin,.input,.input::placeholder,.input::-webkit-input-placeholder,.input::-ms-placeholder,.input:-ms-placeholder,.input:focus{transition-duration:.001ms!important}}.input-addon-right,.input-addon-left{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}.input-addon-left{left:var(--addon-padding)}.input-addon-right{right:var(--addon-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-input',
                    template: `<div className="w-100">
    <label [class]="labelClasses()" [for]="id">
      {{ label }}
    </label>
    <ng-container *ngIf="type === 'textarea'; else noTextarea">
      <textarea
        *ngIf="type === 'textarea'"
        [id]="id"
        [attr.name]="name ? name : null"
        [value]="defaultValue || ''"
        [disabled]="isDisabled"
        [class]="inputClasses()"
        [placeholder]="placeholder ? placeholder : ''"
        [attr.rows]="rows"
        [attr.cols]="cols"
        (change)="(handleChange)"
        (focus)="(handleFocus)"
        (blur)="(handleBlur)"
      ></textarea>
    </ng-container>
    <ng-template #noTextarea>
      <div
        class="input-addon-container"
        *ngIf="hasLeftAddon || hasRightAddon; else inputOnly"
      >
        <ng-content select="[addOnLeft]"></ng-content>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
        <ng-content select="[addOnRight]"></ng-content>
      </div>
      <ng-template #inputOnly>
        <input
          [id]="id"
          [attr.name]="name ? name : null"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="(handleChange)"
          (focus)="(handleFocus)"
          (blur)="(handleBlur)"
        />
      </ng-template>
    </ng-template>
    <span
      *ngIf="isInvalid; else helpHint"
      [class]="invalidClasses()"
      role="status"
      aria-live="polite"
    >
      {{ invalidText }}
    </span>
    <ng-template #helpHint>
      <span [class]="helpClasses()" role="status" aria-live="polite">
        {{ helpText }}
      </span>
    </ng-template>
  </div>`,
                    styleUrls: ['./input.css', './inputaddon-hack.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { externalId: [{
                type: HostBinding,
                args: ['attr.id']
            }], id: [{
                type: Input
            }], helpText: [{
                type: Input
            }], invalidText: [{
                type: Input
            }], isInvalid: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], isUnderlined: [{
                type: Input
            }], isInline: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], hasLeftAddon: [{
                type: Input
            }], hasRightAddon: [{
                type: Input
            }], isUnderlinedWithBackground: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], labelCss: [{
                type: Input
            }], css: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }] } });

class ProgressComponent {
    constructor() {
        this.value = 0;
        this.max = 100;
    }
    get classes() {
        var _a;
        console.log(this);
        let klasses = ['progress', ((_a = this.css) === null || _a === void 0 ? void 0 : _a.length) ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
ProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ProgressComponent, selector: "ag-progress", inputs: { value: "value", max: "max", css: "css" }, ngImport: i0, template: `<progress [ngClass]="classes" [attr.value]="value" [attr.max]="max"></progress>`, isInline: true, styles: [".progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:var(--agnostic-progress-height, var(--fluid-10, .625rem));width:100%;border:none;background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-bar{background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-value{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-moz-progress-bar{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-ms-fill{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-progress',
                    template: `<progress [ngClass]="classes" [attr.value]="value" [attr.max]="max"></progress>`,
                    styleUrls: ['./progress.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { value: [{
                type: Input
            }], max: [{
                type: Input
            }], css: [{
                type: Input
            }] } });

class SelectComponent {
    constructor() {
        this.selected = '';
        this.defaultOptionLabel = "Please select an option";
        this.isDisabled = false;
        this.isMultiple = false;
        this.multipleSize = 1;
        this.size = '';
        this.changed = new EventEmitter();
    }
    showDefaultOption() {
        return !this.isMultiple;
    }
    changeSelection(ev) {
        const option = ev.target;
        this.selected = option.value;
        this.changed.emit(this.selected);
    }
    selectClasses() {
        return [
            'select',
            this.size ? `select-${this.size}` : ''
        ].filter(c => c).join(' ');
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SelectComponent, selector: "ag-select", inputs: { uniqueId: "uniqueId", labelCopy: "labelCopy", defaultOptionLabel: "defaultOptionLabel", name: "name", options: "options", isDisabled: "isDisabled", isMultiple: "isMultiple", multipleSize: "multipleSize", size: "size" }, outputs: { changed: "changed" }, ngImport: i0, template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
  <select
    [id]="uniqueId"
    [name]="name"
    [ngClass]="selectClasses()"
    [disabled]="isDisabled"
    [multiple]="isMultiple"
    [size]="isMultiple && multipleSize"
    (change)="changeSelection($event)"
  >
    <option *ngIf="showDefaultOption()" [value]="null" disabled selected> {{ defaultOptionLabel }}</option>
    <option *ngFor="let option of options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>`, isInline: true, styles: [".select,.select-base{display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select,.select-skin{padding:var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);-moz-padding-start:calc(var(--fluid-12) - 3px);font-size:var(--fluid-16);font-weight:400;line-height:1.5;color:var(--agnostic-dark);background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right var(--fluid-12) center;background-size:var(--fluid-16) var(--fluid-12);border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));border-radius:var(--agnostic-radius);transition:border-color var(--agnostic-timing-fast) ease-in-out,box-shadow var(--agnostic-timing-fast) ease-in-out}.select:focus{border-color:var(--agnostic-focus-ring-color);box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.select-base,.select:disabled{background-color:var(--agnostic-disabled-bg)}.select-base,.select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--agnostic-dark)}@media (prefers-reduced-motion: reduce){.select,.select-base,.select:focus{transition:none}}.select-small{padding-top:var(--fluid-4);padding-bottom:var(--fluid-4);padding-left:var(--fluid-8);font-size:var(--fluid-14)}.select-large{padding-top:var(--fluid-8);padding-bottom:var(--fluid-8);padding-left:var(--fluid-16);font-size:var(--fluid-18)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-select',
                    template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
  <select
    [id]="uniqueId"
    [name]="name"
    [ngClass]="selectClasses()"
    [disabled]="isDisabled"
    [multiple]="isMultiple"
    [size]="isMultiple && multipleSize"
    (change)="changeSelection($event)"
  >
    <option *ngIf="showDefaultOption()" [value]="null" disabled selected> {{ defaultOptionLabel }}</option>
    <option *ngFor="let option of options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>`,
                    styleUrls: ['./select.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { uniqueId: [{
                type: Input
            }], labelCopy: [{
                type: Input
            }], defaultOptionLabel: [{
                type: Input
            }], name: [{
                type: Input
            }], options: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isMultiple: [{
                type: Input
            }], multipleSize: [{
                type: Input
            }], size: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class SwitchComponent {
    constructor() {
        this.labelPosition = 'left';
        this.isDisabled = false;
        this.isAction = false;
        this.isBordered = false;
        this.size = '';
        this.selected = new EventEmitter();
    }
    get isChecked() {
        return this.switchChecked;
    }
    set isChecked(val) {
        this.switchChecked = val;
    }
    toggleChecked(ev) {
        const el = ev.target;
        if (el.getAttribute('aria-checked') == 'true') {
            el.setAttribute('aria-checked', 'false');
            this.switchChecked = false;
        }
        else {
            el.setAttribute('aria-checked', 'true');
            this.switchChecked = true;
        }
        this.selected.emit(this.switchChecked);
    }
    switchContainer() {
        let klasses = [
            'switch-container',
            this.css ? this.css : '',
            this.labelPosition === 'right' ? 'switch-right' : '',
            this.isDisabled ? 'disabled' : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
    switchSpan() {
        let klasses = [
            'switch',
            this.isBordered ? 'switch-border' : '',
            this.isAction ? 'switch-action' : '',
            this.size ? `switch-${this.size}` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
SwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SwitchComponent, selector: "ag-switch", inputs: { label: "label", css: "css", labelPosition: "labelPosition", isDisabled: "isDisabled", isAction: "isAction", isBordered: "isBordered", size: "size", isChecked: "isChecked" }, outputs: { selected: "selected" }, ngImport: i0, template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition === 'left'" class="switch-label">{{
      label
    }}</span>
    <input
      type="checkbox"
      [checked]="isChecked"
      class="switch-input"
      [disabled]="isDisabled"
      role="switch"
      (change)="toggleChecked($event)"
    />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition === 'right'" class="switch-label">{{
      label
    }}</span>
  </label>`, isInline: true, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:after{right:.5em}.switch-right .switch-label{position:absolute;right:0;transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-input{margin:0;opacity:.01%;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}@media (prefers-reduced-motion){.switch:after,.switch:before{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-switch',
                    template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition === 'left'" class="switch-label">{{
      label
    }}</span>
    <input
      type="checkbox"
      [checked]="isChecked"
      class="switch-input"
      [disabled]="isDisabled"
      role="switch"
      (change)="toggleChecked($event)"
    />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition === 'right'" class="switch-label">{{
      label
    }}</span>
  </label>`,
                    styleUrls: ['./switch.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { label: [{
                type: Input
            }], css: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isAction: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], size: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], selected: [{
                type: Output
            }] } });

class TagComponent {
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
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TagComponent, selector: "ag-tag", inputs: { type: "type", shape: "shape", isUppercase: "isUppercase" }, ngImport: i0, template: `<span [class]="tagClasses"><ng-content></ng-content></span>`, isInline: true, styles: [".tag-base,.tag{display:inline-flex;justify-content:center;white-space:nowrap}.tag-skin,.tag{background-color:var(--agnostic-gray-light);color:var(--agnostic-dark);font-size:var(--fluid-12);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2);padding-inline-start:var(--fluid-8);padding-inline-end:var(--fluid-8)}.tag-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.tag-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.tag-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.tag-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.tag-upper{font-size:var(--fluid-10);text-transform:uppercase}.tag-circle{border-radius:50%}.tag-round{border-radius:var(--agnostic-radius)}.tag-pill{border-radius:200px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TagComponent, decorators: [{
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

class TabPanelComponent {
    constructor() {
        this._tabButtonTitle = '';
        this.isActive = false;
    }
    set tabButtonTitle(t) {
        this._tabButtonTitle = t;
    }
    get tabButtonTitle() {
        return this._tabButtonTitle;
    }
}
TabPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TabPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TabPanelComponent, selector: "ag-tab-panel", inputs: { tabButtonTitle: "tabButtonTitle", isActive: "isActive", panelId: "panelId" }, ngImport: i0, template: `<div [id]="panelId" [hidden]="!isActive" role="tabpanel">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media screen and (prefers-reduced-motion: reduce),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TabPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-tab-panel',
                    styleUrls: ['./tabs.css'],
                    template: `<div [id]="panelId" [hidden]="!isActive" role="tabpanel">
    <ng-content></ng-content>
  </div>`,
                }]
        }], propDecorators: { tabButtonTitle: [{
                type: Input
            }], isActive: [{
                type: Input
            }], panelId: [{
                type: Input
            }] } });

class TabsComponent {
    constructor() {
        this.size = '';
        this.isDisabled = false;
        this.isSkinned = true;
        this.isBorderless = false;
        this.isVerticalOrientation = false;
        this.selectionChanged = new EventEmitter();
    }
    ngAfterContentInit() {
        const activeTabs = this.tabPanels.filter((tab) => tab.isActive);
        if (activeTabs.length === 0) {
            this.selectPanel(this.tabPanels.first);
        }
    }
    selectPanel(tabPanel) {
        this.tabPanels.toArray().forEach((tab) => {
            tab.isActive = false;
        });
        tabPanel.isActive = true;
        this.selectionChanged.emit(tabPanel);
    }
    focusTab(index, direction) {
        console.log('focusTab called with index: ', index, ' and direction: ', direction);
        let i = index;
        if (direction === "asc") {
            i += 1;
        }
        else if (direction === "desc") {
            i -= 1;
        }
        const tabPanelsArray = this.tabPanels.toArray();
        if (i < 0) {
            i = tabPanelsArray.length - 1;
        }
        else if (i >= tabPanelsArray.length) {
            i = 0;
        }
        const buttons = this.tabButtonRefs.toArray();
        const nextTabRef = buttons[i];
        const nextTab = nextTabRef ? nextTabRef.nativeElement : null;
        if (nextTab) {
            if (nextTab.disabled && direction) {
                this.focusTab(i, direction);
            }
            else {
                nextTab.focus();
            }
        }
    }
    handleKeyDown(ev, index) {
        switch (ev.key) {
            case "Up":
            case "ArrowUp":
                if (this.isVerticalOrientation) {
                    this.focusTab(index, "desc");
                }
                break;
            case "Down":
            case "ArrowDown":
                if (this.isVerticalOrientation) {
                    this.focusTab(index, "asc");
                }
                break;
            case "Left":
            case "ArrowLeft":
                if (!this.isVerticalOrientation) {
                    this.focusTab(index, "desc");
                }
                break;
            case "Right":
            case "ArrowRight":
                if (!this.isVerticalOrientation) {
                    this.focusTab(index, "asc");
                }
                break;
            case "Home":
            case "ArrowHome":
                this.focusTab(0);
                break;
            case "End":
            case "ArrowEnd":
                this.focusTab(this.tabPanels.toArray().length - 1);
                break;
            case "Enter":
            case "Space":
                this.focusTab(index);
                this.selectPanel(this.tabPanels.toArray()[index]);
                break;
            default:
                return;
        }
        ev.preventDefault();
    }
}
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TabsComponent, selector: "ag-tabs", inputs: { tabButtonTemplate: "tabButtonTemplate", size: "size", disabledOptions: "disabledOptions", isDisabled: "isDisabled", isSkinned: "isSkinned", isBorderless: "isBorderless", isVerticalOrientation: "isVerticalOrientation" }, outputs: { selectionChanged: "selectionChanged" }, queries: [{ propertyName: "tabPanels", predicate: TabPanelComponent }], viewQueries: [{ propertyName: "tabButtonRefs", predicate: ["tabButton"], descendants: true }], ngImport: i0, template: `
    <div class="tabs" [class.tabs-vertical]="isVerticalOrientation === true">
      <div
        [class.tab-list]="isSkinned === true"
        [class.tab-list-base]="isSkinned === false"
        [class.tab-borderless]="isBorderless === true"
        role="tablist"
        aria-label="Tabs"
      >
        <div *ngFor="let panel of tabPanels; index as i"
          (click)="selectPanel(panel)"
          (keydown)="handleKeyDown($event, i)"
        >
          <ng-template #defaultTabButton>
            <button
              #tabButton
              role="tab"
              class="tab-item tab-button"
              [class.active]="panel.isActive"
              [attr.disabled]="
                isDisabled || disabledOptions?.includes(panel.tabButtonTitle)
                  ? true
                  : null
              "
              [class.tab-button-large]="size === 'large'"
              [class.tab-button-xlarge]="size === 'xlarge'"
              [attr.aria-controls]="panel.panelId"
              [attr.aria-selected]="panel.isActive"
              [attr.tab-index]="panel.isActive ? 0 : -1"
            >
              {{ panel.tabButtonTitle }}
            </button>
          </ng-template>
          <ng-container
            [ngTemplateOutlet]="tabButtonTemplate ? tabButtonTemplate : defaultTabButton"
            [ngTemplateOutletContext]="{ $implicit: panel, index: i }"
          >
          </ng-container>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media screen and (prefers-reduced-motion: reduce),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-tabs',
                    template: `
    <div class="tabs" [class.tabs-vertical]="isVerticalOrientation === true">
      <div
        [class.tab-list]="isSkinned === true"
        [class.tab-list-base]="isSkinned === false"
        [class.tab-borderless]="isBorderless === true"
        role="tablist"
        aria-label="Tabs"
      >
        <div *ngFor="let panel of tabPanels; index as i"
          (click)="selectPanel(panel)"
          (keydown)="handleKeyDown($event, i)"
        >
          <ng-template #defaultTabButton>
            <button
              #tabButton
              role="tab"
              class="tab-item tab-button"
              [class.active]="panel.isActive"
              [attr.disabled]="
                isDisabled || disabledOptions?.includes(panel.tabButtonTitle)
                  ? true
                  : null
              "
              [class.tab-button-large]="size === 'large'"
              [class.tab-button-xlarge]="size === 'xlarge'"
              [attr.aria-controls]="panel.panelId"
              [attr.aria-selected]="panel.isActive"
              [attr.tab-index]="panel.isActive ? 0 : -1"
            >
              {{ panel.tabButtonTitle }}
            </button>
          </ng-template>
          <ng-container
            [ngTemplateOutlet]="tabButtonTemplate ? tabButtonTemplate : defaultTabButton"
            [ngTemplateOutletContext]="{ $implicit: panel, index: i }"
          >
          </ng-container>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
                    styleUrls: ['./tabs.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { tabPanels: [{
                type: ContentChildren,
                args: [TabPanelComponent]
            }], tabButtonTemplate: [{
                type: Input
            }], size: [{
                type: Input
            }], disabledOptions: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isBorderless: [{
                type: Input
            }], isVerticalOrientation: [{
                type: Input
            }], tabButtonRefs: [{
                type: ViewChildren,
                args: ['tabButton']
            }], selectionChanged: [{
                type: Output
            }] } });

class AgModule {
}
AgModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AgModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AgModule, declarations: [AlertComponent,
        AvatarComponent,
        AvatarGroupComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        ChoiceInputComponent,
        CloseComponent,
        DiscloseComponent,
        HeaderComponent,
        HeaderNavComponent,
        HeaderNavItemComponent,
        InputComponent,
        IconComponent,
        ProgressComponent,
        SelectComponent,
        SwitchComponent,
        TagComponent,
        TabsComponent,
        TabPanelComponent], imports: [CommonModule], exports: [AlertComponent,
        AvatarComponent,
        AvatarGroupComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        ChoiceInputComponent,
        CloseComponent,
        DiscloseComponent,
        HeaderComponent,
        HeaderNavComponent,
        HeaderNavItemComponent,
        InputComponent,
        IconComponent,
        ProgressComponent,
        SelectComponent,
        SwitchComponent,
        TagComponent,
        TabsComponent,
        TabPanelComponent] });
AgModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AgModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: AgModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        AlertComponent,
                        AvatarComponent,
                        AvatarGroupComponent,
                        BreadcrumbComponent,
                        BreadcrumbItemComponent,
                        ButtonComponent,
                        ButtonGroupComponent,
                        CardComponent,
                        ChoiceInputComponent,
                        CloseComponent,
                        DiscloseComponent,
                        HeaderComponent,
                        HeaderNavComponent,
                        HeaderNavItemComponent,
                        InputComponent,
                        IconComponent,
                        ProgressComponent,
                        SelectComponent,
                        SwitchComponent,
                        TagComponent,
                        TabsComponent,
                        TabPanelComponent,
                    ],
                    exports: [
                        AlertComponent,
                        AvatarComponent,
                        AvatarGroupComponent,
                        BreadcrumbComponent,
                        BreadcrumbItemComponent,
                        ButtonComponent,
                        ButtonGroupComponent,
                        CardComponent,
                        ChoiceInputComponent,
                        CloseComponent,
                        DiscloseComponent,
                        HeaderComponent,
                        HeaderNavComponent,
                        HeaderNavItemComponent,
                        InputComponent,
                        IconComponent,
                        ProgressComponent,
                        SelectComponent,
                        SwitchComponent,
                        TagComponent,
                        TabsComponent,
                        TabPanelComponent,
                    ],
                }]
        }] });

export { AgModule, AlertComponent, AvatarComponent, AvatarGroupComponent, BreadcrumbComponent, BreadcrumbItemComponent, ButtonComponent, ButtonGroupComponent, CardComponent, ChoiceInputComponent, CloseComponent, DiscloseComponent, HeaderComponent, HeaderNavComponent, HeaderNavItemComponent, IconComponent, InputComponent, ProgressComponent, SelectComponent, SwitchComponent, TabPanelComponent, TabsComponent, TagComponent };
//# sourceMappingURL=agnostic-angular.js.map
