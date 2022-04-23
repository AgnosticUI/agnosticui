import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, EventEmitter, Output, ContentChildren, TemplateRef, ContentChild, HostBinding, Directive, InjectionToken, Inject, HostListener, ElementRef, Optional, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i1$1 from 'angular-a11y-dialog';
import { AngularA11yDialogModule } from 'angular-a11y-dialog';
import { BehaviorSubject, Subject, fromEvent, combineLatest } from 'rxjs';
import { __classPrivateFieldGet } from 'tslib';
import { takeUntil, take } from 'rxjs/operators';

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
        this.isAnimationFadeIn = true;
        this.isAnimationSlideUp = false;
        this.isToast = false;
    }
    get ariaLiveValue() {
        let ariaLiveValue;
        if (this.isToast && this.type === "error") {
            ariaLiveValue = "assertive";
        }
        else if (this.isToast) {
            ariaLiveValue = "polite";
        }
        else {
            ariaLiveValue = undefined;
        }
        return ariaLiveValue;
    }
    ;
    get ariaAtomicValue() {
        return this.isToast ? true : undefined;
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
            this.isAnimationFadeIn && !this.isAnimationSlideUp ? 'fade-in' : '',
            !this.isAnimationFadeIn && this.isAnimationSlideUp ? 'slide-up' : '',
            this.isAnimationFadeIn && this.isAnimationSlideUp ? 'slide-up-fade-in' : '',
        ].filter(c => c.length).join(' ');
        return classes;
    }
    get svgModifierClass() {
        return this.type ? `alert-${this.type}-icon` : '';
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: AlertComponent, selector: "ag-alert", inputs: { isRounded: "isRounded", isBorderAll: "isBorderAll", isBorderLeft: "isBorderLeft", isBorderRight: "isBorderRight", isBorderTop: "isBorderTop", isBorderBottom: "isBorderBottom", isBlockEnd: "isBlockEnd", type: "type", isAnimationFadeIn: "isAnimationFadeIn", isAnimationSlideUp: "isAnimationSlideUp", isToast: "isToast" }, ngImport: i0, template: `<div [ngClass]="alertClasses" role="alert" [attr.aria-atomic]="ariaAtomicValue ? ariaAtomicValue : null" [attr.aria-live]="ariaLiveValue ? ariaLiveValue : null">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".alert-base,.alert{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;max-width:100%}.alert-end{justify-content:flex-end}.alert-skin,.alert{padding:var(--agnostic-side-padding);background:var(--agnostic-gray-light)}.alert-icon{color:var(--agnostic-gray-mid-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-border-top{border-top:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-left{border-left:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-bottom{border-bottom:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-right{border-right:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-all{border:var(--fluid-2) solid var(--agnostic-gray-mid-dark)}.alert-rounded{border-radius:var(--agnostic-alert-radius, var(--agnostic-radius, .25rem))}.alert-dark{color:var(--agnostic-light);background:rgb(48 48 48)}.alert-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.alert-warning-icon{color:var(--agnostic-warning-border-accent);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-warning.alert-border-top{border-top-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-left{border-left-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-bottom{border-bottom-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-right{border-right-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-all{border:var(--fluid-2) solid var(--agnostic-warning-border)}.alert-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.alert-info-icon{color:var(--agnostic-primary-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-info.alert-border-top{border-top-color:var(--agnostic-primary-dark)}.alert-info.alert-border-left{border-left-color:var(--agnostic-primary-dark)}.alert-info.alert-border-bottom{border-bottom-color:var(--agnostic-primary-dark)}.alert-info.alert-border-right{border-right-color:var(--agnostic-primary-dark)}.alert-info.alert-border-all{border:var(--fluid-2) solid var(--agnostic-primary-border)}.alert-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.alert-error-icon{color:var(--agnostic-error-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-error.alert-border-top{border-top-color:var(--agnostic-error-dark)}.alert-error.alert-border-left{border-left-color:var(--agnostic-error-dark)}.alert-error.alert-border-bottom{border-bottom-color:var(--agnostic-error-dark)}.alert-error.alert-border-right{border-right-color:var(--agnostic-error-dark)}.alert-error.alert-border-all{border:var(--fluid-2) solid var(--agnostic-error-border)}.alert-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.alert-success-icon{color:var(--agnostic-action-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-success.alert-border-top{border-top-color:var(--agnostic-action-dark)}.alert-success.alert-border-left{border-left-color:var(--agnostic-action-dark)}.alert-success.alert-border-bottom{border-bottom-color:var(--agnostic-action-dark)}.alert-success.alert-border-right{border-right-color:var(--agnostic-action-dark)}.alert-success.alert-border-all{border:var(--fluid-2) solid var(--agnostic-action-border)}.alert-toast-shadow{box-shadow:0 4px 8px #0000000f,0 3px 8px #00000012,0 6px 18px #0000000f}.fade-in{animation:fade-in var(--agnostic-timing-fast) both}.slide-up{animation:slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}.slide-up-fade-in{animation:fade-in var(--agnostic-timing-fast) both,slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}@keyframes fade-in{0%{opacity:0%}}@keyframes slide-up{0%{transform:translateY(10%)}}@media (prefers-reduced-motion),(update: slow){.slide-up-fade-in,.fade-in,.slide-up{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-alert', template: `<div [ngClass]="alertClasses" role="alert" [attr.aria-atomic]="ariaAtomicValue ? ariaAtomicValue : null" [attr.aria-live]="ariaLiveValue ? ariaLiveValue : null">
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".alert-base,.alert{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;max-width:100%}.alert-end{justify-content:flex-end}.alert-skin,.alert{padding:var(--agnostic-side-padding);background:var(--agnostic-gray-light)}.alert-icon{color:var(--agnostic-gray-mid-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-border-top{border-top:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-left{border-left:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-bottom{border-bottom:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-right{border-right:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-all{border:var(--fluid-2) solid var(--agnostic-gray-mid-dark)}.alert-rounded{border-radius:var(--agnostic-alert-radius, var(--agnostic-radius, .25rem))}.alert-dark{color:var(--agnostic-light);background:rgb(48 48 48)}.alert-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.alert-warning-icon{color:var(--agnostic-warning-border-accent);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-warning.alert-border-top{border-top-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-left{border-left-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-bottom{border-bottom-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-right{border-right-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-all{border:var(--fluid-2) solid var(--agnostic-warning-border)}.alert-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.alert-info-icon{color:var(--agnostic-primary-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-info.alert-border-top{border-top-color:var(--agnostic-primary-dark)}.alert-info.alert-border-left{border-left-color:var(--agnostic-primary-dark)}.alert-info.alert-border-bottom{border-bottom-color:var(--agnostic-primary-dark)}.alert-info.alert-border-right{border-right-color:var(--agnostic-primary-dark)}.alert-info.alert-border-all{border:var(--fluid-2) solid var(--agnostic-primary-border)}.alert-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.alert-error-icon{color:var(--agnostic-error-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-error.alert-border-top{border-top-color:var(--agnostic-error-dark)}.alert-error.alert-border-left{border-left-color:var(--agnostic-error-dark)}.alert-error.alert-border-bottom{border-bottom-color:var(--agnostic-error-dark)}.alert-error.alert-border-right{border-right-color:var(--agnostic-error-dark)}.alert-error.alert-border-all{border:var(--fluid-2) solid var(--agnostic-error-border)}.alert-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.alert-success-icon{color:var(--agnostic-action-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-success.alert-border-top{border-top-color:var(--agnostic-action-dark)}.alert-success.alert-border-left{border-left-color:var(--agnostic-action-dark)}.alert-success.alert-border-bottom{border-bottom-color:var(--agnostic-action-dark)}.alert-success.alert-border-right{border-right-color:var(--agnostic-action-dark)}.alert-success.alert-border-all{border:var(--fluid-2) solid var(--agnostic-action-border)}.alert-toast-shadow{box-shadow:0 4px 8px #0000000f,0 3px 8px #00000012,0 6px 18px #0000000f}.fade-in{animation:fade-in var(--agnostic-timing-fast) both}.slide-up{animation:slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}.slide-up-fade-in{animation:fade-in var(--agnostic-timing-fast) both,slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}@keyframes fade-in{0%{opacity:0%}}@keyframes slide-up{0%{transform:translateY(10%)}}@media (prefers-reduced-motion),(update: slow){.slide-up-fade-in,.fade-in,.slide-up{transition-duration:.001ms!important}}\n"] }]
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
            }], isAnimationFadeIn: [{
                type: Input
            }], isAnimationSlideUp: [{
                type: Input
            }], isToast: [{
                type: Input
            }] } });

class AvatarGroupComponent {
}
AvatarGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AvatarGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: AvatarGroupComponent, selector: "ag-avatar-group", ngImport: i0, template: `<div class="avatar-group"><ng-content></ng-content></div>`, isInline: true, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AvatarGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-avatar-group', template: `<div class="avatar-group"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n"] }]
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
AvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: AvatarComponent, selector: "ag-avatar", inputs: { isRounded: "isRounded", isSquare: "isSquare", isTransparent: "isTransparent", type: "type", size: "size", text: "text" }, ngImport: i0, template: `<span [ngClass]="avatarClasses" [attr.data-text]="text"
    ><ng-content></ng-content
  ></span>`, isInline: true, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n", ":host:not(.first){margin-inline-start:calc(-1 * var(--fluid-10))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-avatar', template: `<span [ngClass]="avatarClasses" [attr.data-text]="text"
    ><ng-content></ng-content
  ></span>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n", ":host:not(.first){margin-inline-start:calc(-1 * var(--fluid-10))}\n"] }]
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
BreadcrumbItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BreadcrumbItemComponent, selector: "ag-breadcrumb-item", inputs: { route: "route", isLast: "isLast" }, ngImport: i0, template: `<li class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
    <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
    <ng-template #linklessLabel>
      {{route.label}}
    </ng-template>
  </li>`, isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-breadcrumb-item', template: `<li class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
    <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
    <ng-template #linklessLabel>
      {{route.label}}
    </ng-template>
  </li>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"] }]
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
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BreadcrumbComponent, selector: "ag-breadcrumb", inputs: { type: "type", routes: "routes" }, ngImport: i0, template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>
    </li>
  </ol>
</nav>`, isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-breadcrumb', template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>
    </li>
  </ol>
</nav>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"] }]
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
        const isCapsuleClass = this.isCapsule === true ? 'btn-capsule' : '';
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
            isCapsuleClass,
            isCircleClass,
            isRoundedClass,
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
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ButtonComponent, selector: "ag-button", inputs: { mode: "mode", type: "type", size: "size", css: "css", isDisabled: "isDisabled", isSkinned: "isSkinned", isBlank: "isBlank", isLink: "isLink", isCircle: "isCircle", isBlock: "isBlock", isBordered: "isBordered", isCapsule: "isCapsule", isRounded: "isRounded" }, outputs: { handleClick: "handleClick" }, ngImport: i0, template: ` <button
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
    </ng-template>`, isInline: true, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin,.btn{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn:hover{opacity:85%;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgb(255 255 255 / 30%);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark))!important;text-shadow:0 1px 1px rgb(255 255 255 / 100%)!important;border-color:transparent;color:var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:80%!important}.btn-primary{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-grouped{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-grouped:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;margin-inline-end:-1px}.btn-grouped:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-capsule{--padding-side: calc(var(--agnostic-side-padding, .75rem) * 1.5);border-radius:var(--agnostic-radius-capsule);padding-inline-start:var(--padding-side);padding-inline-end:var(--padding-side)}@media (prefers-reduced-motion),(update: slow){.btn,.btn:focus{transition-duration:.001ms!important}}:is(.btn-link,.btn-blank){font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-size:var(--agnostic-btn-font-size, 1rem);background-color:transparent;border:0;border-radius:0;box-shadow:none;transition:none}.btn-blank{--agnostic-btn-blank-side-padding: var(--btn-blank-side-padding, .25rem);padding-inline-start:var(--agnostic-btn-blank-side-padding);padding-inline-end:var(--agnostic-btn-blank-side-padding)}.btn-link{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-link:hover{cursor:pointer}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-button', template: ` <button
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
    </ng-template>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin,.btn{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn:hover{opacity:85%;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgb(255 255 255 / 30%);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark))!important;text-shadow:0 1px 1px rgb(255 255 255 / 100%)!important;border-color:transparent;color:var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:80%!important}.btn-primary{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-grouped{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-grouped:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;margin-inline-end:-1px}.btn-grouped:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-capsule{--padding-side: calc(var(--agnostic-side-padding, .75rem) * 1.5);border-radius:var(--agnostic-radius-capsule);padding-inline-start:var(--padding-side);padding-inline-end:var(--padding-side)}@media (prefers-reduced-motion),(update: slow){.btn,.btn:focus{transition-duration:.001ms!important}}:is(.btn-link,.btn-blank){font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-size:var(--agnostic-btn-font-size, 1rem);background-color:transparent;border:0;border-radius:0;box-shadow:none;transition:none}.btn-blank{--agnostic-btn-blank-side-padding: var(--btn-blank-side-padding, .25rem);padding-inline-start:var(--agnostic-btn-blank-side-padding);padding-inline-end:var(--agnostic-btn-blank-side-padding)}.btn-link{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-link:hover{cursor:pointer}\n"] }]
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
            }], isCircle: [{
                type: Input
            }], isBlock: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isCapsule: [{
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
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ButtonGroupComponent, selector: "ag-button-group", inputs: { css: "css", ariaLabel: "ariaLabel" }, queries: [{ propertyName: "buttons", predicate: ButtonComponent }], ngImport: i0, template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnostic-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnostic-btn-radius, var(--fluid-4))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-button-group', template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnostic-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnostic-btn-radius, var(--fluid-4))}\n"] }]
        }], propDecorators: { buttons: [{
                type: ContentChildren,
                args: [ButtonComponent]
            }], css: [{
                type: Input
            }], ariaLabel: [{
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
        const isShadowClass = this.isShadow ? 'card-shadow' : '';
        const isRoundedClass = this.isRounded ? 'card-rounded' : '';
        const isBorderClass = this.isBorder ? 'card-border' : '';
        const typeClass = this.type ? `card-${this.type}` : '';
        const overrides = this.css ? `${this.css}` : '';
        return [
            baseClass,
            typeClass,
            isAnimatedClass,
            isStackedClass,
            isShadowClass,
            isRoundedClass,
            isBorderClass,
            overrides,
        ].join(' ');
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: CardComponent, selector: "ag-card", inputs: { css: "css", type: "type", isAnimated: "isAnimated", isSkinned: "isSkinned", isStacked: "isStacked", isShadow: "isShadow", isRounded: "isRounded", isBorder: "isBorder" }, ngImport: i0, template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card-border{border:1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light))}.card-rounded{border-radius:var(--agnostic-radius, .25rem)}.card-shadow{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));border-radius:var(--agnostic-card-border-radius, var(--agnostic-radius, .25rem));overflow:hidden}.card-shadow:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translate-y-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}@media (prefers-reduced-motion),(update: slow){.card-animated,.card-animated:hover{transition-duration:.001ms!important}}.card-stacked{flex-direction:column}.card-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.card-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.card-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.card-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-card', template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card-border{border:1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light))}.card-rounded{border-radius:var(--agnostic-radius, .25rem)}.card-shadow{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));border-radius:var(--agnostic-card-border-radius, var(--agnostic-radius, .25rem));overflow:hidden}.card-shadow:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translate-y-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}@media (prefers-reduced-motion),(update: slow){.card-animated,.card-animated:hover{transition-duration:.001ms!important}}.card-stacked{flex-direction:column}.card-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.card-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.card-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.card-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}\n"] }]
        }], propDecorators: { css: [{
                type: Input
            }], type: [{
                type: Input
            }], isAnimated: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isStacked: [{
                type: Input
            }], isShadow: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], isBorder: [{
                type: Input
            }] } });

class CloseComponent {
    constructor() {
        this.size = '';
        this.isFaux = false;
        this.color = 'inherit';
    }
}
CloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: CloseComponent, selector: "ag-close", inputs: { size: "size", isFaux: "isFaux", color: "color" }, ngImport: i0, template: `
    <div
      class="close-button"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
    <svg *ngIf="isFaux; else withButton" class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </div>
  <ng-template #withButton> 
    <button
      class="close-button"
      aria-label="Close"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
      <svg class="close" [style.color]="color" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
        />
      </svg>
    </button>
  </ng-template>`, isInline: true, styles: [".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CloseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-close', template: `
    <div
      class="close-button"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
    <svg *ngIf="isFaux; else withButton" class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </div>
  <ng-template #withButton> 
    <button
      class="close-button"
      aria-label="Close"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
      <svg class="close" [style.color]="color" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
        />
      </svg>
    </button>
  </ng-template>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], isFaux: [{
                type: Input
            }], color: [{
                type: Input
            }] } });

class ChoiceInputComponent {
    constructor() {
        this.isInline = false;
        this.isFieldset = true;
        this.isSkinned = true;
        this.isDisabled = false;
        this.isInvalid = false;
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
        return [
            this.type ? `${this.type}-label` : '',
            this.size ? `${this.type}-label-${this.size}` : '',
            this.isInvalid ? 'choice-input-error' : '',
        ].filter(c => c.length).join(' ');
    }
    labelSpanCopyClasses() {
        return [
            this.type ? `${this.type}-label-copy` : '',
            this.size ? `${this.type}-label-copy-${this.size}` : '',
            this.isInvalid ? 'choice-input-error' : '',
        ].filter(c => c.length).join(' ');
    }
    handleChange(ev) {
        const el = ev.target;
        const value = el.value;
        if (this.type === 'checkbox') {
            let checkedItemsUpdated;
            if (this.checkedOptions?.includes(value)) {
                checkedItemsUpdated = this.checkedOptions?.filter((item) => item !== value);
                this.checkedOptions = checkedItemsUpdated;
            }
            else {
                checkedItemsUpdated = [...this.checkedOptions, value];
                this.checkedOptions = checkedItemsUpdated;
            }
            this.selected.emit(checkedItemsUpdated);
        }
        else {
            if (this.checkedOptions?.includes(value)) {
                this.checkedOptions = [value];
                this.selected.emit(this.checkedOptions);
            }
        }
    }
    inputClasses() {
        return [
            `${this.type}`,
            this.size ? `${this.size}` : '',
            this.isDisabled ? 'disabled' : '',
        ].filter(c => c.length).join(' ');
    }
    fieldsetClass() {
        const skin = this.isSkinned ? `${this.type}-group` : '';
        const sizeSkin = this.isSkinned && this.size === 'large'
            ? `${this.type}-group-${this.size}`
            : '';
        const overrides = this.css ? `${this.css}` : '';
        return [
            overrides ? overrides : '',
            skin,
            sizeSkin,
            this.isFieldset === false ? `${this.type}-group-hidden` : '',
        ].filter(c => c.length).join(' ');
    }
    legendClasses() {
        const skin = this.isSkinned ? `${this.type}-legend` : '';
        return [
            skin,
            this.isFieldset === false ? 'screenreader-only' : null,
        ].filter(c => c).join(' ');
    }
    labelClasses() {
        return [
            this.type ? `${this.type}-label-wrap` : '',
            this.isInline ? `${this.type}-label-wrap-inline` : '',
        ].filter(c => c.length).join(' ');
    }
}
ChoiceInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ChoiceInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChoiceInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ChoiceInputComponent, selector: "ag-choice-input", inputs: { isInline: "isInline", isFieldset: "isFieldset", isSkinned: "isSkinned", isDisabled: "isDisabled", isInvalid: "isInvalid", options: "options", disabledOptions: "disabledOptions", checkedOptions: "checkedOptions", css: "css", legendLabel: "legendLabel", type: "type", size: "size" }, outputs: { selected: "selected" }, ngImport: i0, template: `<fieldset [ngClass]="fieldsetClass()">
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
        <span [ngClass]="labelSpanClasses()"></span>
        <span [ngClass]="labelSpanCopyClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`, isInline: true, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label-copy,.radio-label-copy,.checkbox-label,.radio-label{display:inline-flex;position:relative;align-items:center;flex-wrap:wrap}.checkbox-label-copy-small,.radio-label-copy-small{font-size:var(--agnostic-small)}.checkbox-label-copy-large,.radio-label-copy-large{font-size:calc(var(--agnostic-body) + 2px)}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:1px;width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4));top:0}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]~.checkbox-label-copy,.radio[disabled]~.radio-label-copy,.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}.choice-input-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ChoiceInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-choice-input', template: `<fieldset [ngClass]="fieldsetClass()">
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
        <span [ngClass]="labelSpanClasses()"></span>
        <span [ngClass]="labelSpanCopyClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label-copy,.radio-label-copy,.checkbox-label,.radio-label{display:inline-flex;position:relative;align-items:center;flex-wrap:wrap}.checkbox-label-copy-small,.radio-label-copy-small{font-size:var(--agnostic-small)}.checkbox-label-copy-large,.radio-label-copy-large{font-size:calc(var(--agnostic-body) + 2px)}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:1px;width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4));top:0}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]~.checkbox-label-copy,.radio[disabled]~.radio-label-copy,.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}.choice-input-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap[class=disabled],.radio-label-wrap[class=disabled],.checkbox-label-wrap-inline[class=disabled],.radio-label-wrap-inline[class=disabled]{outline:2px solid transparent;outline-offset:-2px}}\n"] }]
        }], propDecorators: { isInline: [{
                type: Input
            }], isFieldset: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isInvalid: [{
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

class DialogComponent {
    constructor() {
        this.mounted = new BehaviorSubject(false);
        this.role = 'dialog';
        this.closeButtonLabel = 'Close button';
        this.closeButtonPosition = 'first';
        this.classNames = {
            container: 'dialog',
            document: 'dialog-content',
            overlay: 'dialog-overlay',
            title: 'h3 mbe16',
            closeButton: 'dialog-close close-button',
        };
        this.instance = new EventEmitter();
    }
    assignDialogInstance(instance) {
        this.instance.emit(instance);
    }
    ;
    ngOnInit() {
        let dialogDocumentClasses = this.classNames.document ? [this.classNames.document] : [];
        if (this.isAnimationFadeIn && this.isAnimationSlideUp) {
            dialogDocumentClasses.push('dialog-slide-up-fade-in');
        }
        else if (this.isAnimationFadeIn) {
            dialogDocumentClasses.push('dialog-fade-in');
        }
        else if (this.isAnimationSlideUp) {
            dialogDocumentClasses.push('dialog-slide-up');
        }
        this.classNames.document = dialogDocumentClasses.filter((cls) => cls).join(' ');
        this.mounted.next(true);
    }
}
DialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DialogComponent, selector: "ag-dialog", inputs: { titleTemplate: "titleTemplate", mainTemplate: "mainTemplate", closeButtonFirstTemplate: "closeButtonFirstTemplate", closeButtonLastTemplate: "closeButtonLastTemplate", id: "id", dialogRoot: "dialogRoot", role: "role", titleId: "titleId", closeButtonLabel: "closeButtonLabel", closeButtonPosition: "closeButtonPosition", classNames: "classNames", isAnimationFadeIn: "isAnimationFadeIn", isAnimationSlideUp: "isAnimationSlideUp" }, outputs: { instance: "instance" }, queries: [{ propertyName: "titleContent", first: true, predicate: ["title"], descendants: true }, { propertyName: "main", first: true, predicate: ["mainContent"], descendants: true, read: TemplateRef }, { propertyName: "closeButtonFirst", first: true, predicate: ["closeButtonContentFirst"], descendants: true }, { propertyName: "closeButtonLast", first: true, predicate: ["closeButtonContentLast"], descendants: true }], ngImport: i0, template: `<angular-a11y-dialog
    *ngIf="mounted | async"
    [id]="id"
    [dialogRoot]="dialogRoot"
    [classNames]="classNames"
    [role]="role"
    [titleId]="titleId"
    [closeButtonLabel]="closeButtonLabel"
    [closeButtonPosition]="closeButtonPosition"
    (instance)="assignDialogInstance($event)"
  >
    <ng-template #closeButtonContentFirst>
      <ng-container *ngTemplateOutlet="closeButtonFirstTemplate"></ng-container>
    </ng-template>
    <ng-template #title>
      <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
    </ng-template>
    <ng-template #mainContent>
      <ng-container *ngTemplateOutlet="mainTemplate"></ng-container>
    </ng-template>
    <ng-template #closeButtonContentLast>
      <ng-container *ngTemplateOutlet="closeButtonLastTemplate"></ng-container>
    </ng-template>
  </angular-a11y-dialog>`, isInline: true, styles: [".dialog,.dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}.dialog{z-index:1001;display:flex}.dialog[aria-hidden=true]{display:none}.dialog-overlay{background-color:#32323299;animation:fade-in var(--agnostic-timing-fast) both}.dialog-content{background-color:#fff;margin:auto;z-index:1001;position:relative;padding:var(--fluid-16);max-width:90%;width:600px;border-radius:var(--agnostic-radius)}.dialog-fade-in{animation:fade-in var(--agnostic-timing-fast) both}.dialog-slide-up{animation:slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}.dialog-slide-up-fade-in{animation:fade-in var(--agnostic-timing-fast) both,slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}@media screen and (min-width: 700px){.dialog-content{padding:var(--fluid-32)}}@keyframes fade-in{0%{opacity:0%}}@keyframes slide-up{0%{transform:translateY(10%)}}.dialog-close{position:absolute;top:var(--fluid-8);right:var(--fluid-8)}@media (prefers-reduced-motion),(update: slow){.dialog-slide-up-fade-in,.dialog-fade-in,.dialog-slide-up,.dialog-content{transition-duration:.001ms!important}}@media only screen and (min-width: 576px){.dialog-close{top:var(--fluid-12);right:var(--fluid-12)}}@media screen and (min-width: 768px){.dialog-close{top:var(--fluid-16);right:var(--fluid-16)}}\n", ".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], components: [{ type: i1$1.AngularA11yDialogComponent, selector: "angular-a11y-dialog", inputs: ["id", "dialogRoot", "classNames", "role", "titleId", "closeButtonLabel", "closeButtonPosition"], outputs: ["instance"] }], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-dialog', template: `<angular-a11y-dialog
    *ngIf="mounted | async"
    [id]="id"
    [dialogRoot]="dialogRoot"
    [classNames]="classNames"
    [role]="role"
    [titleId]="titleId"
    [closeButtonLabel]="closeButtonLabel"
    [closeButtonPosition]="closeButtonPosition"
    (instance)="assignDialogInstance($event)"
  >
    <ng-template #closeButtonContentFirst>
      <ng-container *ngTemplateOutlet="closeButtonFirstTemplate"></ng-container>
    </ng-template>
    <ng-template #title>
      <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
    </ng-template>
    <ng-template #mainContent>
      <ng-container *ngTemplateOutlet="mainTemplate"></ng-container>
    </ng-template>
    <ng-template #closeButtonContentLast>
      <ng-container *ngTemplateOutlet="closeButtonLastTemplate"></ng-container>
    </ng-template>
  </angular-a11y-dialog>`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".dialog,.dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}.dialog{z-index:1001;display:flex}.dialog[aria-hidden=true]{display:none}.dialog-overlay{background-color:#32323299;animation:fade-in var(--agnostic-timing-fast) both}.dialog-content{background-color:#fff;margin:auto;z-index:1001;position:relative;padding:var(--fluid-16);max-width:90%;width:600px;border-radius:var(--agnostic-radius)}.dialog-fade-in{animation:fade-in var(--agnostic-timing-fast) both}.dialog-slide-up{animation:slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}.dialog-slide-up-fade-in{animation:fade-in var(--agnostic-timing-fast) both,slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}@media screen and (min-width: 700px){.dialog-content{padding:var(--fluid-32)}}@keyframes fade-in{0%{opacity:0%}}@keyframes slide-up{0%{transform:translateY(10%)}}.dialog-close{position:absolute;top:var(--fluid-8);right:var(--fluid-8)}@media (prefers-reduced-motion),(update: slow){.dialog-slide-up-fade-in,.dialog-fade-in,.dialog-slide-up,.dialog-content{transition-duration:.001ms!important}}@media only screen and (min-width: 576px){.dialog-close{top:var(--fluid-12);right:var(--fluid-12)}}@media screen and (min-width: 768px){.dialog-close{top:var(--fluid-16);right:var(--fluid-16)}}\n", ".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"] }]
        }], propDecorators: { titleTemplate: [{
                type: Input
            }], titleContent: [{
                type: ContentChild,
                args: ['title']
            }], main: [{
                type: ContentChild,
                args: ['mainContent', { read: TemplateRef }]
            }], mainTemplate: [{
                type: Input
            }], closeButtonFirstTemplate: [{
                type: Input
            }], closeButtonFirst: [{
                type: ContentChild,
                args: ['closeButtonContentFirst']
            }], closeButtonLastTemplate: [{
                type: Input
            }], closeButtonLast: [{
                type: ContentChild,
                args: ['closeButtonContentLast']
            }], id: [{
                type: Input
            }], dialogRoot: [{
                type: Input
            }], role: [{
                type: Input
            }], titleId: [{
                type: Input
            }], closeButtonLabel: [{
                type: Input
            }], closeButtonPosition: [{
                type: Input
            }], classNames: [{
                type: Input
            }], isAnimationFadeIn: [{
                type: Input
            }], isAnimationSlideUp: [{
                type: Input
            }], instance: [{
                type: Output
            }] } });

class DiscloseComponent {
    constructor() {
        this.title = "";
        this.isOpen = false;
        this.isBackground = false;
        this.isBordered = false;
    }
}
DiscloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DiscloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DiscloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DiscloseComponent, selector: "ag-disclose", inputs: { title: "title", isOpen: "isOpen", isBackground: "isBackground", isBordered: "isBordered" }, ngImport: i0, template: `<details class="disclose" [class.disclose-bordered]="isBordered" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`, isInline: true, styles: [".disclose{margin-block-end:var(--fluid-4);width:100%}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bordered .disclose-title{border:1px solid var(--agnostic-gray-light)}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion),(update: slow){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DiscloseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-disclose', template: `<details class="disclose" [class.disclose-bordered]="isBordered" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".disclose{margin-block-end:var(--fluid-4);width:100%}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bordered .disclose-title{border:1px solid var(--agnostic-gray-light)}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion),(update: slow){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], isBackground: [{
                type: Input
            }], isBordered: [{
                type: Input
            }] } });

class DividerComponent {
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
DividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DividerComponent, selector: "ag-divider", inputs: { hasContent: "hasContent", isVertical: "isVertical", justify: "justify", type: "type", size: "size" }, host: { properties: { "class.flex": "this.isVertical" } }, ngImport: i0, template: `<div [class]="dividerClasses">
    <div *ngIf="hasContent" class="divider-content">
      <ng-content></ng-content>
    </div>
  </div>`, isInline: true, styles: [".divider{display:flex;justify-content:center;align-items:center;white-space:nowrap;width:100%}.divider:before,.divider:after{content:\"\";background-color:var(--agnostic-gray-mid);height:var(--fluid-2);flex-grow:1}.divider-small:before,.divider-small:after{height:1px}.divider-large:before,.divider-large:after{height:var(--fluid-4)}.divider-xlarge:before,.divider-xlarge:after{height:var(--fluid-6)}.divider-justify-end:after,.divider-justify-start:before{flex-grow:0;flex-basis:3%}.divider-content{padding-inline-start:var(--fluid-16);padding-inline-end:var(--fluid-16)}.divider-vertical{height:auto;margin:0 var(--fluid-16);width:var(--fluid-16);flex-direction:column;align-self:stretch}.divider-vertical:before,.divider-vertical:after{width:var(--fluid-2)}.divider-vertical.divider-small:before,.divider-vertical.divider-small:after{width:1px}.divider-vertical.divider-large:before,.divider-vertical.divider-large:after{width:var(--fluid-4)}.divider-vertical.divider-xlarge:before,.divider-vertical.divider-xlarge:after{width:var(--fluid-6)}.divider-vertical .divider-content{padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6)}.divider-warning:before,.divider-warning:after{background-color:var(--agnostic-warning-dark)}.divider-warning .divider-content{color:var(--agnostic-warning-dark)}.divider-error:before,.divider-error:after{background-color:var(--agnostic-error)}.divider-error .divider-content{color:var(--agnostic-error)}.divider-success:before,.divider-success:after{background-color:var(--agnostic-action-dark)}.divider-success .divider-content{color:var(--agnostic-action-dark)}.divider-info:before,.divider-info:after{background-color:var(--agnostic-primary)}.divider-info .divider-content{color:var(--agnostic-primary)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-divider', template: `<div [class]="dividerClasses">
    <div *ngIf="hasContent" class="divider-content">
      <ng-content></ng-content>
    </div>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".divider{display:flex;justify-content:center;align-items:center;white-space:nowrap;width:100%}.divider:before,.divider:after{content:\"\";background-color:var(--agnostic-gray-mid);height:var(--fluid-2);flex-grow:1}.divider-small:before,.divider-small:after{height:1px}.divider-large:before,.divider-large:after{height:var(--fluid-4)}.divider-xlarge:before,.divider-xlarge:after{height:var(--fluid-6)}.divider-justify-end:after,.divider-justify-start:before{flex-grow:0;flex-basis:3%}.divider-content{padding-inline-start:var(--fluid-16);padding-inline-end:var(--fluid-16)}.divider-vertical{height:auto;margin:0 var(--fluid-16);width:var(--fluid-16);flex-direction:column;align-self:stretch}.divider-vertical:before,.divider-vertical:after{width:var(--fluid-2)}.divider-vertical.divider-small:before,.divider-vertical.divider-small:after{width:1px}.divider-vertical.divider-large:before,.divider-vertical.divider-large:after{width:var(--fluid-4)}.divider-vertical.divider-xlarge:before,.divider-vertical.divider-xlarge:after{width:var(--fluid-6)}.divider-vertical .divider-content{padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6)}.divider-warning:before,.divider-warning:after{background-color:var(--agnostic-warning-dark)}.divider-warning .divider-content{color:var(--agnostic-warning-dark)}.divider-error:before,.divider-error:after{background-color:var(--agnostic-error)}.divider-error .divider-content{color:var(--agnostic-error)}.divider-success:before,.divider-success:after{background-color:var(--agnostic-action-dark)}.divider-success .divider-content{color:var(--agnostic-action-dark)}.divider-info:before,.divider-info:after{background-color:var(--agnostic-primary)}.divider-info .divider-content{color:var(--agnostic-primary)}\n"] }]
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

class EmptyStateHeaderComponent {
}
EmptyStateHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateHeaderComponent, selector: "ag-empty-state-header", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-header',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
class EmptyStateBodyComponent {
}
EmptyStateBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateBodyComponent, selector: "ag-empty-state-body", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-body',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
class EmptyStateFooterComponent {
}
EmptyStateFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateFooterComponent, selector: "ag-empty-state-footer", ngImport: i0, template: `<div class="empty-action">
    <ng-content></ng-content>
  </div>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-footer',
                    template: `<div class="empty-action">
    <ng-content></ng-content>
  </div>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
class EmptyStateComponent {
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
EmptyStateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateComponent, selector: "ag-empty-state", inputs: { isBordered: "isBordered", isRounded: "isRounded" }, ngImport: i0, template: `<div [class]="emptyClasses">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".empty-base,.empty{display:flex;flex-flow:column wrap;align-items:center;text-align:center;width:100%}.empty{padding:calc(2 * var(--agnostic-side-padding));background:var(--agnostic-gray-extra-light)}.empty-bordered{background:transparent;border:1px solid var(--agnostic-gray-light)}.empty-rounded{border-radius:var(--agnostic-radius)}.empty-actions{margin-block-start:var(--spacing-24)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-empty-state', template: `<div [class]="emptyClasses">
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".empty-base,.empty{display:flex;flex-flow:column wrap;align-items:center;text-align:center;width:100%}.empty{padding:calc(2 * var(--agnostic-side-padding));background:var(--agnostic-gray-extra-light)}.empty-bordered{background:transparent;border:1px solid var(--agnostic-gray-light)}.empty-rounded{border-radius:var(--agnostic-radius)}.empty-actions{margin-block-start:var(--spacing-24)}\n"] }]
        }], propDecorators: { isBordered: [{
                type: Input
            }], isRounded: [{
                type: Input
            }] } });

class HeaderNavComponent {
    get classes() {
        return ['header-nav', this.css ? `${this.css}` : '']
            .filter((cl) => cl.length)
            .join(' ');
    }
}
HeaderNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: HeaderNavComponent, selector: "ag-header-nav", inputs: { css: "css" }, ngImport: i0, template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`, isInline: true, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-header-nav', template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"] }]
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
HeaderNavItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: HeaderNavItemComponent, selector: "ag-header-nav-item", inputs: { css: "css" }, ngImport: i0, template: `<div [ngClass]="classes"><ng-content></ng-content></div>`, isInline: true, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnostic-header-color, var(--agnostic-font-color))}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-header-nav-item', template: `<div [ngClass]="classes"><ng-content></ng-content></div>`, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnostic-header-color, var(--agnostic-font-color))}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"] }]
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
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: HeaderComponent, selector: "ag-header", inputs: { css: "css", isSkinned: "isSkinned", isHeaderContentStart: "isHeaderContentStart", isHeaderContentEnd: "isHeaderContentEnd", isSticky: "isSticky" }, ngImport: i0, template: `<nav [ngClass]="classes">
    <div [ngClass]="headerContentClasses"><ng-content></ng-content></div>
  </nav> `, isInline: true, styles: [".header,.header-base{display:block}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family-body));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}.header-content-start{justify-content:flex-start}.header-content-end{justify-content:flex-end}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-header', template: `<nav [ngClass]="classes">
    <div [ngClass]="headerContentClasses"><ng-content></ng-content></div>
  </nav> `, styles: [".header,.header-base{display:block}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family-body));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}.header-content-start{justify-content:flex-start}.header-content-end{justify-content:flex-end}}\n"] }]
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
    constructor($element) {
        this.$element = $element;
        this.size = 18;
        this.type = '';
        this.isSkinned = true;
    }
    ngOnInit() {
        const svg = this.$element.nativeElement.querySelector('svg');
        svg?.classList.add('icon-svg');
        if (this.size)
            svg?.classList.add(`icon-svg-${this.size}`);
        if (this.type)
            svg?.classList.add(`icon-svg-${this.type}`);
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
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: IconComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: IconComponent, selector: "ag-icon", inputs: { size: "size", type: "type", isSkinned: "isSkinned" }, ngImport: i0, template: `<span [class]="iconClasses"><ng-content></ng-content></span>`, isInline: true, styles: [".icon-base{display:inline-flex;text-align:center;max-width:100%;pointer-events:none;-webkit-user-select:none;user-select:none}.icon,.icon-skin{width:var(--fluid-16);height:var(--fluid-16)}.icon-14{width:var(--fluid-14);height:var(--fluid-14)}.icon-16{width:var(--fluid-16);height:var(--fluid-16)}.icon-18{width:var(--fluid-18);height:var(--fluid-18)}.icon-20{width:var(--fluid-20);height:var(--fluid-20)}.icon-24,.icon-svg-24{width:var(--fluid-24);height:var(--fluid-24)}.icon-32{width:var(--fluid-32);height:var(--fluid-32)}.icon-36{width:var(--fluid-36);height:var(--fluid-36)}.icon-40{width:var(--fluid-40);height:var(--fluid-40)}.icon-48{width:var(--fluid-48);height:var(--fluid-48)}.icon-56{width:var(--fluid-56);height:var(--fluid-56)}.icon-64{width:var(--fluid-64);height:var(--fluid-64)}\n", ".icon-svg{width:var(--fluid-16);height:var(--fluid-16);fill:currentColor}.icon-svg-14{width:var(--fluid-14);height:var(--fluid-14)}.icon-svg-16{width:var(--fluid-16);height:var(--fluid-16)}.icon-svg-18{width:var(--fluid-18);height:var(--fluid-18)}.icon-svg-20{width:var(--fluid-20);height:var(--fluid-20)}.icon-svg-24{width:var(--fluid-24);height:var(--fluid-24)}.icon-svg-32{width:var(--fluid-32);height:var(--fluid-32)}.icon-svg-36{width:var(--fluid-36);height:var(--fluid-36)}.icon-svg-40{width:var(--fluid-40);height:var(--fluid-40)}.icon-svg-48{width:var(--fluid-48);height:var(--fluid-48)}.icon-svg-56{width:var(--fluid-56);height:var(--fluid-56)}.icon-svg-64{width:var(--fluid-64);height:var(--fluid-64)}.icon-svg-info{color:var(--agnostic-primary)}.icon-svg-action,.icon-svg-success{color:var(--agnostic-action)}.icon-svg-warning{color:var(--agnostic-warning-border-accent)}.icon-svg-error{color:var(--agnostic-error)}\n", "ag-icon,ag-icon-svg{display:inline-flex}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-icon', template: `<span [class]="iconClasses"><ng-content></ng-content></span>`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".icon-base{display:inline-flex;text-align:center;max-width:100%;pointer-events:none;-webkit-user-select:none;user-select:none}.icon,.icon-skin{width:var(--fluid-16);height:var(--fluid-16)}.icon-14{width:var(--fluid-14);height:var(--fluid-14)}.icon-16{width:var(--fluid-16);height:var(--fluid-16)}.icon-18{width:var(--fluid-18);height:var(--fluid-18)}.icon-20{width:var(--fluid-20);height:var(--fluid-20)}.icon-24,.icon-svg-24{width:var(--fluid-24);height:var(--fluid-24)}.icon-32{width:var(--fluid-32);height:var(--fluid-32)}.icon-36{width:var(--fluid-36);height:var(--fluid-36)}.icon-40{width:var(--fluid-40);height:var(--fluid-40)}.icon-48{width:var(--fluid-48);height:var(--fluid-48)}.icon-56{width:var(--fluid-56);height:var(--fluid-56)}.icon-64{width:var(--fluid-64);height:var(--fluid-64)}\n", ".icon-svg{width:var(--fluid-16);height:var(--fluid-16);fill:currentColor}.icon-svg-14{width:var(--fluid-14);height:var(--fluid-14)}.icon-svg-16{width:var(--fluid-16);height:var(--fluid-16)}.icon-svg-18{width:var(--fluid-18);height:var(--fluid-18)}.icon-svg-20{width:var(--fluid-20);height:var(--fluid-20)}.icon-svg-24{width:var(--fluid-24);height:var(--fluid-24)}.icon-svg-32{width:var(--fluid-32);height:var(--fluid-32)}.icon-svg-36{width:var(--fluid-36);height:var(--fluid-36)}.icon-svg-40{width:var(--fluid-40);height:var(--fluid-40)}.icon-svg-48{width:var(--fluid-48);height:var(--fluid-48)}.icon-svg-56{width:var(--fluid-56);height:var(--fluid-56)}.icon-svg-64{width:var(--fluid-64);height:var(--fluid-64)}.icon-svg-info{color:var(--agnostic-primary)}.icon-svg-action,.icon-svg-success{color:var(--agnostic-action)}.icon-svg-warning{color:var(--agnostic-warning-border-accent)}.icon-svg-error{color:var(--agnostic-error)}\n", "ag-icon,ag-icon-svg{display:inline-flex}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { size: [{
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
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: InputComponent, selector: "ag-input", inputs: { id: "id", helpText: "helpText", invalidText: "invalidText", isInvalid: "isInvalid", isSkinned: "isSkinned", isRounded: "isRounded", isUnderlined: "isUnderlined", isInline: "isInline", isDisabled: "isDisabled", hasLeftAddon: "hasLeftAddon", hasRightAddon: "hasRightAddon", isUnderlinedWithBackground: "isUnderlinedWithBackground", name: "name", label: "label", labelCss: "labelCss", css: "css", placeholder: "placeholder", defaultValue: "defaultValue", size: "size", type: "type", rows: "rows", cols: "cols" }, host: { properties: { "attr.id": "this.externalId" } }, ngImport: i0, template: `<div className="w-100">
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
  </div>`, isInline: true, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family-body);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:50%;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large{font-size:var(--agnostic-font-size, 1rem)}.label-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%}.input-has-left-addon{padding-left:calc(var(--agnostic-side-padding) * 3)}.input-has-right-addon{padding-right:calc(var(--agnostic-side-padding) * 3)}@media (prefers-reduced-motion),(update: slow){.input-skin,.input,.input::placeholder,.input::-webkit-input-placeholder,.input::-ms-placeholder,.input:-ms-placeholder,.input:focus{transition-duration:.001ms!important}}.input-addon-right,.input-addon-left{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}.input-addon-left{left:var(--agnostic-input-side-padding)}.input-addon-right{right:var(--agnostic-input-side-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-input', template: `<div className="w-100">
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
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family-body);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:50%;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large{font-size:var(--agnostic-font-size, 1rem)}.label-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%}.input-has-left-addon{padding-left:calc(var(--agnostic-side-padding) * 3)}.input-has-right-addon{padding-right:calc(var(--agnostic-side-padding) * 3)}@media (prefers-reduced-motion),(update: slow){.input-skin,.input,.input::placeholder,.input::-webkit-input-placeholder,.input::-ms-placeholder,.input:-ms-placeholder,.input:focus{transition-duration:.001ms!important}}.input-addon-right,.input-addon-left{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}.input-addon-left{left:var(--agnostic-input-side-padding)}.input-addon-right{right:var(--agnostic-input-side-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"] }]
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

class LoaderComponent {
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
LoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: LoaderComponent, selector: "ag-loader", inputs: { size: "size", ariaLabel: "ariaLabel" }, ngImport: i0, template: `<div [class]="loaderClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`, isInline: true, styles: [".loader{--loading-color: var(--agnostic-loading-color, var(--agnostic-dark));--loading-size: var(--fluid-16);--loading-size-small: var(--fluid-12);--loading-size-large: var(--fluid-18);position:relative;box-sizing:border-box;animation:blink 1s infinite;animation-delay:.25s;margin-left:var(--loading-size);opacity:0%}.loader,.loader:before,.loader:after{width:calc(var(--loading-size) / 2);height:calc(var(--loading-size) / 2);border-radius:var(--fluid-6);background-color:var(--loading-color)}.loader-small,.loader-small:before,.loader-small:after{width:calc(var(--loading-size-small) / 2);height:calc(var(--loading-size-small) / 2)}.loader-large,.loader-large:before,.loader-large:after{width:calc(var(--loading-size-large) / 2);height:calc(var(--loading-size-large) / 2);border-radius:var(--fluid-8)}.loader:before,.loader:after{content:\"\";display:inline-block;position:absolute;top:0;animation:blink 1s infinite}.loader:before{left:calc(-1 * var(--loading-size));animation-delay:0s}.loader:after{left:var(--loading-size);animation-delay:.5s}.loader-small:before{left:calc(-1 * var(--loading-size-small))}.loader-small:after{left:var(--loading-size-small)}.loader-large:before{left:calc(-1 * var(--loading-size-large));animation-delay:0s}.loader-large:after{left:var(--loading-size-large)}.loader[aria-busy=true]{opacity:100%}@keyframes blink{50%{background-color:transparent}}@media (prefers-reduced-motion),(update: slow){.loader,.loader:before,.loader:after{transition-duration:.001ms!important}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-loader', template: `<div [class]="loaderClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".loader{--loading-color: var(--agnostic-loading-color, var(--agnostic-dark));--loading-size: var(--fluid-16);--loading-size-small: var(--fluid-12);--loading-size-large: var(--fluid-18);position:relative;box-sizing:border-box;animation:blink 1s infinite;animation-delay:.25s;margin-left:var(--loading-size);opacity:0%}.loader,.loader:before,.loader:after{width:calc(var(--loading-size) / 2);height:calc(var(--loading-size) / 2);border-radius:var(--fluid-6);background-color:var(--loading-color)}.loader-small,.loader-small:before,.loader-small:after{width:calc(var(--loading-size-small) / 2);height:calc(var(--loading-size-small) / 2)}.loader-large,.loader-large:before,.loader-large:after{width:calc(var(--loading-size-large) / 2);height:calc(var(--loading-size-large) / 2);border-radius:var(--fluid-8)}.loader:before,.loader:after{content:\"\";display:inline-block;position:absolute;top:0;animation:blink 1s infinite}.loader:before{left:calc(-1 * var(--loading-size));animation-delay:0s}.loader:after{left:var(--loading-size);animation-delay:.5s}.loader-small:before{left:calc(-1 * var(--loading-size-small))}.loader-small:after{left:var(--loading-size-small)}.loader-large:before{left:calc(-1 * var(--loading-size-large));animation-delay:0s}.loader-large:after{left:var(--loading-size-large)}.loader[aria-busy=true]{opacity:100%}@keyframes blink{50%{background-color:transparent}}@media (prefers-reduced-motion),(update: slow){.loader,.loader:before,.loader:after{transition-duration:.001ms!important}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class MenuContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
MenuContentDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuContentDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
MenuContentDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.3", type: MenuContentDirective, selector: "[agMenuContent]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuContentDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[agMenuContent]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

const AG_MENU = new InjectionToken('AG_MENU');

class MenuItemDirective {
    constructor(el, menu) {
        this.el = el;
        this.menu = menu;
        this.isSelected = false;
        this.isRounded = this.menu.isRounded;
        this.isSmall = this.menu.size === 'small';
        this.isLarge = this.menu.size === 'large';
    }
    get disabled() {
        return this.el.nativeElement?.disabled ?? false;
    }
    onClick() {
        this.menu.handleItemClick();
    }
    onKeydown(ev) {
        switch (ev.key) {
            case 'Enter':
                ev.preventDefault();
                this.el.nativeElement.click();
                return;
            case 'Escape':
                this.menu.close();
                break;
            case 'Tab':
                ev.preventDefault();
                return;
        }
        this.menu.findChildHandleFocus(ev, this);
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
MenuItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuItemDirective, deps: [{ token: i0.ElementRef }, { token: AG_MENU }], target: i0.ɵɵFactoryTarget.Directive });
MenuItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.3", type: MenuItemDirective, selector: "button[ag-menu-item]", inputs: { isSelected: "isSelected" }, host: { listeners: { "click": "onClick($event)", "keydown": "onKeydown($event)" }, properties: { "attr.role": "menuitem", "attr.tabindex": "isSelected === true ? 0 : -1", "class.menu-item-selected": "this.isSelected", "class.menu-item-rounded": "this.isRounded", "class.menu-item-small": "this.isSmall", "class.menu-item-large": "this.isLarge" }, classAttribute: "menu-item" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[ag-menu-item]',
                    host: {
                        class: 'menu-item',
                        '[attr.role]': 'menuitem',
                        '[attr.tabindex]': 'isSelected === true ? 0 : -1',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [AG_MENU]
                }] }]; }, propDecorators: { isSelected: [{
                type: HostBinding,
                args: ['class.menu-item-selected']
            }, {
                type: Input
            }], isRounded: [{
                type: HostBinding,
                args: ['class.menu-item-rounded']
            }], isSmall: [{
                type: HostBinding,
                args: ['class.menu-item-small']
            }], isLarge: [{
                type: HostBinding,
                args: ['class.menu-item-large']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });

var _MenuComponent_destroy$;
class MenuComponent {
    constructor(ngZone, hostEl, _doc) {
        this.ngZone = ngZone;
        this.hostEl = hostEl;
        this._doc = _doc;
        _MenuComponent_destroy$.set(this, new Subject());
        this.closeOnSelect = true;
        this.closeOnClickOutside = true;
        this.icon = '▾';
        this.isBordered = false;
        this.isRounded = false;
        this.menuTitle = 'Menu Title';
        this.size = null;
        this.triggerClick = new EventEmitter();
        this._isExpanded$ = new BehaviorSubject(false);
    }
    get isExpanded() {
        return this._isExpanded$.getValue();
    }
    ngOnInit() {
        if (this._doc) {
            fromEvent(this._doc, 'click')
                .pipe(takeUntil(__classPrivateFieldGet(this, _MenuComponent_destroy$, "f")))
                .subscribe({
                next: (e) => this.handleOutsideClicks(e),
                error: console.error,
            });
        }
    }
    ngOnDestroy() {
        __classPrivateFieldGet(this, _MenuComponent_destroy$, "f").next();
    }
    ngAfterContentInit() {
        if (!this.content) {
            console.warn('AgnosticUI Angular `MenuComponent` did not discover the `agMenuContent` attribute in your template. No template to render! ' +
                'A simple MenuItems template may look something like the following: ```html\n<ng-template agMenuContent>\n  <button ag-menu-item>Neat!</button>\n</ng-template>\n```');
        }
    }
    onTriggerClick(event) {
        this.toggle();
        this.triggerClick.emit(event);
        this.ngZone.onStable
            .pipe(take(1))
            .subscribe(() => this.focusMenuItem(this.getSelectedMenuItemIndex() ?? 0));
    }
    handleItemClick() {
        if (this.closeOnSelect) {
            this.close();
        }
    }
    toggle() {
        if (this.isExpanded) {
            this.close();
        }
        else {
            this.open();
        }
    }
    close() {
        this._isExpanded$.next(false);
        this.triggerEl.nativeElement.focus();
    }
    open() {
        this._isExpanded$.next(true);
        this.ngZone.onStable.pipe(take(1)).subscribe(() => this.focusMenuItem(0));
    }
    findChildHandleFocus(ev, menuItem) {
        const childIndex = this.menuItemEls
            .toArray()
            .findIndex((ref) => ref === menuItem);
        this.handleMenuItemKeyDown(ev, childIndex);
    }
    onTriggerKeyUp(ev) {
        const index = this.getSelectedMenuItemIndex() ?? 0;
        switch (ev.key) {
            case 'Up':
            case 'ArrowUp':
                this.focusMenuItem(index, 'desc');
                break;
            case 'Down':
            case 'ArrowDown':
                this.focusMenuItem(index, 'asc');
                break;
            case 'Home':
            case 'ArrowHome':
                this.focusMenuItem(0);
                break;
            case 'End':
            case 'ArrowEnd':
                this.focusMenuItem(this.menuItemEls.length - 1);
                break;
            case 'Space':
                this.focusMenuItem(index ?? 0);
                break;
            case 'Escape':
                break;
            default:
                return;
        }
        ev.preventDefault();
    }
    handleMenuItemKeyDown(ev, index) {
        switch (ev.key) {
            case 'Up':
            case 'ArrowUp':
                this.focusMenuItem(index, 'desc');
                break;
            case 'Down':
            case 'ArrowDown':
                this.focusMenuItem(index, 'asc');
                break;
            case 'Home':
            case 'ArrowHome':
                this.focusMenuItem(0);
                break;
            case 'End':
            case 'ArrowEnd':
                this.focusMenuItem(this.menuItemEls.length - 1);
                break;
            case 'Enter':
            case 'Space':
                this.focusMenuItem(index);
                break;
            default:
                return;
        }
        ev.preventDefault();
    }
    focusMenuItem(index, direction) {
        let i = index;
        if (direction === 'asc') {
            i += 1;
        }
        else if (direction === 'desc') {
            i -= 1;
        }
        const items = this.menuItemEls.toArray();
        if (i < 0) {
            i = items.length - 1;
        }
        else if (i >= items.length) {
            i = 0;
        }
        const nextMenuItemRef = items[i];
        const nextMenu = nextMenuItemRef ? nextMenuItemRef : null;
        if (nextMenu) {
            if (nextMenu.disabled && direction) {
                this.focusMenuItem(i, direction);
            }
            else {
                nextMenu.focus();
            }
        }
    }
    handleOutsideClicks(e) {
        if (e == null) {
            return;
        }
        if (this.isExpanded && this.closeOnClickOutside) {
            if (!this.isInside(e.target)) {
                this.close();
            }
            return;
        }
        if (this.isExpanded && this.closeOnClickOutside === false) {
            const targetIsMenuItem = this.menuItemEls
                .map((menu) => menu.el.nativeElement)
                .includes(e.target);
            if (!targetIsMenuItem) {
                this.focusMenuItem(this.getSelectedMenuItemIndex() ?? 0);
            }
            return;
        }
    }
    isInside(el) {
        if (this.hostEl.nativeElement) {
            const children = this.hostEl.nativeElement.querySelectorAll('*');
            for (const child of children) {
                if (el === child) {
                    return true;
                }
            }
        }
        return false;
    }
    getSelectedMenuItemIndex() {
        const idx = this.menuItemEls.toArray().findIndex((ref) => ref.isSelected);
        return idx > -1 ? idx : null;
    }
}
_MenuComponent_destroy$ = new WeakMap();
MenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component });
MenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: MenuComponent, selector: "ag-menu", inputs: { closeOnSelect: "closeOnSelect", closeOnClickOutside: "closeOnClickOutside", icon: "icon", isBordered: "isBordered", isRounded: "isRounded", id: "id", menuTitle: "menuTitle", size: "size" }, outputs: { triggerClick: "triggerClick" }, host: { classAttribute: "menu" }, providers: [{ provide: AG_MENU, useExisting: MenuComponent }], queries: [{ propertyName: "content", first: true, predicate: MenuContentDirective, descendants: true }, { propertyName: "menuItemEls", predicate: MenuItemDirective }], viewQueries: [{ propertyName: "triggerEl", first: true, predicate: ["menuTrigger"], descendants: true, read: ElementRef, static: true }], ngImport: i0, template: `
    <button
      #menuTrigger
      [attr.id]="id"
      class="menu-trigger"
      [class.menu-trigger-bordered]="isBordered"
      [class.menu-trigger-rounded]="isRounded"
      [class.menu-trigger-large]="size === 'large'"
      [class.menu-trigger-small]="size === 'small'"
      (click)="onTriggerClick($event)"
      (keyup)="onTriggerKeyUp($event)"
    >
      {{ menuTitle }}
      <span class="menu-icon" aria-hidden="true"> {{ icon }} </span>
    </button>
    <div class="menu-items" role="menu" *ngIf="_isExpanded$ | async">
      <ng-container
        [ngTemplateOutlet]="content?.templateRef ?? null"
      ></ng-container>
    </div>
  `, isInline: true, styles: [".menu-trigger{display:flex;align-items:center;justify-content:space-between;max-width:100%;background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));cursor:pointer;text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem)}.menu-trigger:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-trigger-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-trigger-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-trigger-bordered{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);background-color:var(--menu-item-background-color)}.menu-trigger-rounded{border-radius:var(--agnostic-radius)}.menu-icon{font-family:sans-serif;font-size:var(--fluid-18);margin-inline-start:var(--fluid-8);line-height:1}.menu{display:inline-block;position:relative}:is(.menu-items,.menu-items-right){position:absolute;margin-block-start:var(--fluid-6);background-color:#fff;z-index:10}.menu-items{right:initial;left:0}.menu-items-right{left:initial;right:0}\n", ".menu-item{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);background-color:var(--menu-item-background-color);display:block;min-width:100%;white-space:nowrap;cursor:default}.menu-item:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-item:not(:first-of-type){border-top:0}.menu-item-selected{color:#fff;background-color:var(--agnostic-primary)}.menu-item:active:not(.menu-item-selected){color:var(--agnostic-primary)}.menu-item [aria-checked=true]:before{content:\"\\2713  \"}.menu-item-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-item-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-item-rounded:first-of-type{border-top-left-radius:var(--agnostic-radius);border-top-right-radius:var(--agnostic-radius)}.menu-item-rounded:last-of-type{border-bottom-left-radius:var(--agnostic-radius);border-bottom-right-radius:var(--agnostic-radius)}.menu-item:hover:not([disabled]):not(.menu-item-selected){background-color:var(--agnostic-gray-extra-light);cursor:pointer}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-menu', template: `
    <button
      #menuTrigger
      [attr.id]="id"
      class="menu-trigger"
      [class.menu-trigger-bordered]="isBordered"
      [class.menu-trigger-rounded]="isRounded"
      [class.menu-trigger-large]="size === 'large'"
      [class.menu-trigger-small]="size === 'small'"
      (click)="onTriggerClick($event)"
      (keyup)="onTriggerKeyUp($event)"
    >
      {{ menuTitle }}
      <span class="menu-icon" aria-hidden="true"> {{ icon }} </span>
    </button>
    <div class="menu-items" role="menu" *ngIf="_isExpanded$ | async">
      <ng-container
        [ngTemplateOutlet]="content?.templateRef ?? null"
      ></ng-container>
    </div>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: AG_MENU, useExisting: MenuComponent }], host: {
                        class: 'menu',
                    }, styles: [".menu-trigger{display:flex;align-items:center;justify-content:space-between;max-width:100%;background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));cursor:pointer;text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem)}.menu-trigger:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-trigger-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-trigger-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-trigger-bordered{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);background-color:var(--menu-item-background-color)}.menu-trigger-rounded{border-radius:var(--agnostic-radius)}.menu-icon{font-family:sans-serif;font-size:var(--fluid-18);margin-inline-start:var(--fluid-8);line-height:1}.menu{display:inline-block;position:relative}:is(.menu-items,.menu-items-right){position:absolute;margin-block-start:var(--fluid-6);background-color:#fff;z-index:10}.menu-items{right:initial;left:0}.menu-items-right{left:initial;right:0}\n", ".menu-item{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);background-color:var(--menu-item-background-color);display:block;min-width:100%;white-space:nowrap;cursor:default}.menu-item:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-item:not(:first-of-type){border-top:0}.menu-item-selected{color:#fff;background-color:var(--agnostic-primary)}.menu-item:active:not(.menu-item-selected){color:var(--agnostic-primary)}.menu-item [aria-checked=true]:before{content:\"\\2713  \"}.menu-item-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-item-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-item-rounded:first-of-type{border-top-left-radius:var(--agnostic-radius);border-top-right-radius:var(--agnostic-radius)}.menu-item-rounded:last-of-type{border-bottom-left-radius:var(--agnostic-radius);border-bottom-right-radius:var(--agnostic-radius)}.menu-item:hover:not([disabled]):not(.menu-item-selected){background-color:var(--agnostic-gray-extra-light);cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: Document, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { closeOnSelect: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }], icon: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], id: [{
                type: Input
            }], menuTitle: [{
                type: Input
            }], size: [{
                type: Input
            }], triggerClick: [{
                type: Output
            }], triggerEl: [{
                type: ViewChild,
                args: ['menuTrigger', { static: true, read: ElementRef }]
            }], content: [{
                type: ContentChild,
                args: [MenuContentDirective]
            }], menuItemEls: [{
                type: ContentChildren,
                args: [MenuItemDirective, { descendants: false }]
            }] } });

class PaginationComponent {
    constructor() {
        this.justify = '';
        this.ariaLabel = 'Pagination';
        this.current = 1;
        this.pages = [];
        this.isBordered = false;
        this.isFirstLast = true;
        this.navigationLabels = {
            first: 'First',
            last: 'Last',
            previous: 'Previous',
            next: 'Next',
        };
        this.onPageChange = new EventEmitter();
    }
    onFirst() {
        this.onPageChange.emit(1);
    }
    onPrevious() {
        this.onPageChange.emit(this.current - 1);
    }
    onNext() {
        this.onPageChange.emit(this.current + 1);
    }
    onLast() {
        this.onPageChange.emit(this.getLastPageNumber());
    }
    handleClick(page) {
        this.onPageChange.emit(page);
    }
    isOnFirst() {
        return this.current === 1;
    }
    getLastPageNumber() {
        return this.pages[this.pages.length - 1];
    }
    isOnLast() {
        return this.current === this.getLastPageNumber();
    }
    get paginationContainerClasses() {
        return [
            'pagination-container',
            !!this.justify ? `pagination-${this.justify}` : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationClasses() {
        return ['pagination', !!this.isBordered ? 'pagination-bordered' : '']
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationItemFirstClasses() {
        return [
            'pagination-item',
            this.isOnFirst() ? 'pagination-item-disabled' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationItemLastClasses() {
        return [
            'pagination-item',
            this.isOnLast() ? 'pagination-item-disabled' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationButtonClass() {
        return 'pagination-button';
    }
    paginationItemClassesForPage(page) {
        return [
            'pagination-item',
            page === this.current ? 'pagination-item-active' : '',
            page === '...' ? 'pagination-item-gap' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    ariaForCurrentPage(page) {
        return `Page ${page},  current page`;
    }
    firstLabel() {
        return `${String.fromCharCode(171)} ${this.navigationLabels?.first}`;
    }
    previousLabel() {
        return `${String.fromCharCode(8249)} ${this.navigationLabels?.previous}`;
    }
    nextLabel() {
        return `${this.navigationLabels?.next} ${String.fromCharCode(8250)}`;
    }
    lastLabel() {
        return `${this.navigationLabels?.last} ${String.fromCharCode(187)}`;
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PaginationComponent, selector: "ag-pagination", inputs: { justify: "justify", ariaLabel: "ariaLabel", current: "current", pages: "pages", isBordered: "isBordered", isFirstLast: "isFirstLast", navigationLabels: "navigationLabels" }, outputs: { onPageChange: "onPageChange" }, ngImport: i0, template: `<nav
    [class]="paginationContainerClasses"
    [attr.aria-label]="ariaLabel"
  >
    <ul [class]="paginationClasses">
      <li *ngIf="isFirstLast" [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onFirst()"
          [disabled]="isOnFirst()"
          [attr.aria-disabled]="isOnFirst()"
          aria-label="Goto page 1"
        >
          {{ firstLabel() }}
        </button>
      </li>
      <li [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onPrevious()"
          aria-label="Goto previous page"
          [attr.aria-disabled]="isOnFirst()"
          [disabled]="isOnFirst()"
        >
          {{ previousLabel() }}
        </button>
      </li>
      <li
        *ngFor="let page of pages; index as i"
        [class]="paginationItemClassesForPage(page)"
      >
        <button
          *ngIf="page === current"
          type="button"
          [class]="paginationButtonClass"
          (click)="handleClick(page)"
          aria-current="page"
          [attr.aria-label]="ariaForCurrentPage(page)"
        >
          {{ page }}
        </button>
        <span *ngIf="page === '...'; else notGap">{{ page }}</span>
        <ng-template #notGap>
          <button
            *ngIf="page !== current"
            type="button"
            [class]="paginationButtonClass"
            (click)="handleClick(page)"
            [attr.aria-label]="'Goto page ' + page"
          >
            {{ page }}
          </button>
        </ng-template>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          aria-label="Goto next page"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          (click)="onNext()"
        >
          {{ nextLabel() }}
        </button>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onLast()"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          aria-label="Goto last page"
        >
          {{ lastLabel() }}
        </button>
      </li>
    </ul>
  </nav> `, isInline: true, styles: [".pagination-container{display:flex}.pagination{display:flex;list-style:none}.pagination-item{padding-inline-start:var(--fluid-2);padding-inline-end:var(--fluid-2)}.pagination-button{--agnostic-pagination-button-color: var(--agnostic-primary);color:var(--agnostic-pagination-button-color);display:inline-block;line-height:var(--fluid-20);padding-inline-start:var(--fluid-12);padding-inline-end:var(--fluid-12);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6);border-radius:var(--agnostic-radius);border:1px solid transparent;background-color:transparent}.pagination-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.pagination-button:focus{transition-duration:.001ms!important}}.pagination-item-disabled{cursor:not-allowed}.pagination-button:disabled,.pagination-item-disabled .pagination-button{color:var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));opacity:80%;pointer-events:none}.pagination-item-active .pagination-button{background-color:var(--agnostic-primary);color:var(--agnostic-light)}.pagination-bordered .pagination-item-active .pagination-button{background-color:unset;border:1px solid var(--agnostic-primary);color:var(--agnostic-primary)}.pagination-item:hover .pagination-button{text-decoration:none}.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button{background-color:var(--agnostic-gray-extra-light)}.pagination-item-gap{transform:translateY(var(--fluid-6))}.pagination-center{justify-content:center}.pagination-start{justify-content:flex-start}.pagination-end{justify-content:flex-end}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-pagination', template: `<nav
    [class]="paginationContainerClasses"
    [attr.aria-label]="ariaLabel"
  >
    <ul [class]="paginationClasses">
      <li *ngIf="isFirstLast" [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onFirst()"
          [disabled]="isOnFirst()"
          [attr.aria-disabled]="isOnFirst()"
          aria-label="Goto page 1"
        >
          {{ firstLabel() }}
        </button>
      </li>
      <li [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onPrevious()"
          aria-label="Goto previous page"
          [attr.aria-disabled]="isOnFirst()"
          [disabled]="isOnFirst()"
        >
          {{ previousLabel() }}
        </button>
      </li>
      <li
        *ngFor="let page of pages; index as i"
        [class]="paginationItemClassesForPage(page)"
      >
        <button
          *ngIf="page === current"
          type="button"
          [class]="paginationButtonClass"
          (click)="handleClick(page)"
          aria-current="page"
          [attr.aria-label]="ariaForCurrentPage(page)"
        >
          {{ page }}
        </button>
        <span *ngIf="page === '...'; else notGap">{{ page }}</span>
        <ng-template #notGap>
          <button
            *ngIf="page !== current"
            type="button"
            [class]="paginationButtonClass"
            (click)="handleClick(page)"
            [attr.aria-label]="'Goto page ' + page"
          >
            {{ page }}
          </button>
        </ng-template>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          aria-label="Goto next page"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          (click)="onNext()"
        >
          {{ nextLabel() }}
        </button>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onLast()"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          aria-label="Goto last page"
        >
          {{ lastLabel() }}
        </button>
      </li>
    </ul>
  </nav> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".pagination-container{display:flex}.pagination{display:flex;list-style:none}.pagination-item{padding-inline-start:var(--fluid-2);padding-inline-end:var(--fluid-2)}.pagination-button{--agnostic-pagination-button-color: var(--agnostic-primary);color:var(--agnostic-pagination-button-color);display:inline-block;line-height:var(--fluid-20);padding-inline-start:var(--fluid-12);padding-inline-end:var(--fluid-12);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6);border-radius:var(--agnostic-radius);border:1px solid transparent;background-color:transparent}.pagination-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.pagination-button:focus{transition-duration:.001ms!important}}.pagination-item-disabled{cursor:not-allowed}.pagination-button:disabled,.pagination-item-disabled .pagination-button{color:var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));opacity:80%;pointer-events:none}.pagination-item-active .pagination-button{background-color:var(--agnostic-primary);color:var(--agnostic-light)}.pagination-bordered .pagination-item-active .pagination-button{background-color:unset;border:1px solid var(--agnostic-primary);color:var(--agnostic-primary)}.pagination-item:hover .pagination-button{text-decoration:none}.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button{background-color:var(--agnostic-gray-extra-light)}.pagination-item-gap{transform:translateY(var(--fluid-6))}.pagination-center{justify-content:center}.pagination-start{justify-content:flex-start}.pagination-end{justify-content:flex-end}\n"] }]
        }], propDecorators: { justify: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], current: [{
                type: Input
            }], pages: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isFirstLast: [{
                type: Input
            }], navigationLabels: [{
                type: Input
            }], onPageChange: [{
                type: Output
            }] } });

class PortalHostComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.teleportTo = 'body';
    }
    ngAfterViewInit() {
        this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.portalTemplateRef);
        this.embeddedViewRef.detectChanges();
        const outletElement = document.querySelector(this.teleportTo);
        this.embeddedViewRef.rootNodes.forEach(rootNode => {
            outletElement.appendChild(rootNode);
        });
    }
    ngOnDestroy() {
        const index = this.viewContainerRef.indexOf(this.embeddedViewRef);
        if (index !== -1) {
            this.viewContainerRef.remove(index);
        }
    }
}
PortalHostComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalHostComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
PortalHostComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PortalHostComponent, selector: "ag-portal-host", inputs: { teleportTo: "teleportTo" }, viewQueries: [{ propertyName: "portalTemplateRef", first: true, predicate: ["portalTemplateReference"], descendants: true }], ngImport: i0, template: `<ng-template #portalTemplateReference>
    <ng-content></ng-content>
  </ng-template>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalHostComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-portal-host',
                    template: `<ng-template #portalTemplateReference>
    <ng-content></ng-content>
  </ng-template>`
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { portalTemplateRef: [{
                type: ViewChild,
                args: ['portalTemplateReference']
            }], teleportTo: [{
                type: Input
            }] } });

class ProgressComponent {
    constructor() {
        this.value = 0;
        this.max = 100;
    }
    get classes() {
        console.log(this);
        let klasses = ['progress', this.css?.length ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
ProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ProgressComponent, selector: "ag-progress", inputs: { value: "value", max: "max", css: "css" }, ngImport: i0, template: `<progress [ngClass]="classes" [attr.value]="value" [attr.max]="max"></progress>`, isInline: true, styles: [".progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:var(--agnostic-progress-height, var(--fluid-10, .625rem));width:100%;border:none;background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-bar{background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-value{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-moz-progress-bar{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-ms-fill{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-progress', template: `<progress [ngClass]="classes" [attr.value]="value" [attr.max]="max"></progress>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:var(--agnostic-progress-height, var(--fluid-10, .625rem));width:100%;border:none;background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-bar{background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-value{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-moz-progress-bar{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-ms-fill{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}\n"] }]
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
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SelectComponent, selector: "ag-select", inputs: { uniqueId: "uniqueId", labelCopy: "labelCopy", defaultOptionLabel: "defaultOptionLabel", name: "name", options: "options", isDisabled: "isDisabled", isMultiple: "isMultiple", multipleSize: "multipleSize", size: "size" }, outputs: { changed: "changed" }, ngImport: i0, template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
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
  </select>`, isInline: true, styles: [".select,.select-base{display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select,.select-skin{padding:var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);-moz-padding-start:calc(var(--fluid-12) - 3px);font-size:var(--fluid-16);font-weight:400;line-height:1.5;color:var(--agnostic-dark);border:1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));border-radius:var(--agnostic-radius);transition:border-color var(--agnostic-timing-fast) ease-in-out,box-shadow var(--agnostic-timing-fast) ease-in-out}.select:not([multiple]){background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right var(--fluid-12) center;background-size:var(--fluid-16) var(--fluid-12)}.select:focus{border-color:var(--agnostic-focus-ring-color);box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.select-base,.select:disabled{background-color:var(--agnostic-disabled-bg)}.select-base,.select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--agnostic-dark)}@media (prefers-reduced-motion),(update: slow){.select,.select-base,.select:focus{transition:none}}.select-small{padding-top:var(--fluid-4);padding-bottom:var(--fluid-4);padding-left:var(--fluid-8);font-size:var(--fluid-14)}.select-large{padding-top:var(--fluid-8);padding-bottom:var(--fluid-8);padding-left:var(--fluid-16);font-size:var(--fluid-18)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-select', template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
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
  </select>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".select,.select-base{display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select,.select-skin{padding:var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);-moz-padding-start:calc(var(--fluid-12) - 3px);font-size:var(--fluid-16);font-weight:400;line-height:1.5;color:var(--agnostic-dark);border:1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));border-radius:var(--agnostic-radius);transition:border-color var(--agnostic-timing-fast) ease-in-out,box-shadow var(--agnostic-timing-fast) ease-in-out}.select:not([multiple]){background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right var(--fluid-12) center;background-size:var(--fluid-16) var(--fluid-12)}.select:focus{border-color:var(--agnostic-focus-ring-color);box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.select-base,.select:disabled{background-color:var(--agnostic-disabled-bg)}.select-base,.select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--agnostic-dark)}@media (prefers-reduced-motion),(update: slow){.select,.select-base,.select:focus{transition:none}}.select-small{padding-top:var(--fluid-4);padding-bottom:var(--fluid-4);padding-left:var(--fluid-8);font-size:var(--fluid-14)}.select-large{padding-top:var(--fluid-8);padding-bottom:var(--fluid-8);padding-left:var(--fluid-16);font-size:var(--fluid-18)}\n"] }]
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

class SpinnerComponent {
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
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SpinnerComponent, selector: "ag-spinner", inputs: { size: "size", ariaLabel: "ariaLabel" }, ngImport: i0, template: `<div [class]="spinnerClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`, isInline: true, styles: [".spinner{--spinner-color: var(--agnostic-spinner-color, var(--agnostic-dark));display:grid;grid-template:\"content\" 100% / auto;place-items:center;box-sizing:border-box}.spinner:before,.spinner:after{grid-area:content;width:var(--fluid-32);height:var(--fluid-32);content:\"\";display:block;border-radius:50%;border-width:3px;border-style:solid}.spinner-small:before,.spinner-small:after{width:var(--fluid-24);height:var(--fluid-24);border-width:var(--fluid-2)}.spinner-large:before,.spinner-large:after{width:var(--fluid-40);height:var(--fluid-40);border-width:var(--fluid-4)}.spinner-xlarge:before,.spinner-xlarge:after{width:var(--fluid-56);height:var(--fluid-56);border-width:var(--fluid-6)}.spinner:before{opacity:0%;border-color:var(--spinner-color)}.spinner:after{opacity:0%;border-color:transparent var(--spinner-color) transparent transparent;transition:opacity .1s;pointer-events:none;animation:loading-circle 1s ease-in-out infinite}.spinner[aria-busy=true]:before{opacity:12%}.spinner[aria-busy=true]:after{opacity:100%}@keyframes loading-circle{to{transform:rotate(360deg)}}@media (prefers-reduced-motion),(update: slow){.spinner:after{transition-duration:.001ms!important}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-spinner', template: `<div [class]="spinnerClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".spinner{--spinner-color: var(--agnostic-spinner-color, var(--agnostic-dark));display:grid;grid-template:\"content\" 100% / auto;place-items:center;box-sizing:border-box}.spinner:before,.spinner:after{grid-area:content;width:var(--fluid-32);height:var(--fluid-32);content:\"\";display:block;border-radius:50%;border-width:3px;border-style:solid}.spinner-small:before,.spinner-small:after{width:var(--fluid-24);height:var(--fluid-24);border-width:var(--fluid-2)}.spinner-large:before,.spinner-large:after{width:var(--fluid-40);height:var(--fluid-40);border-width:var(--fluid-4)}.spinner-xlarge:before,.spinner-xlarge:after{width:var(--fluid-56);height:var(--fluid-56);border-width:var(--fluid-6)}.spinner:before{opacity:0%;border-color:var(--spinner-color)}.spinner:after{opacity:0%;border-color:transparent var(--spinner-color) transparent transparent;transition:opacity .1s;pointer-events:none;animation:loading-circle 1s ease-in-out infinite}.spinner[aria-busy=true]:before{opacity:12%}.spinner[aria-busy=true]:after{opacity:100%}@keyframes loading-circle{to{transform:rotate(360deg)}}@media (prefers-reduced-motion),(update: slow){.spinner:after{transition-duration:.001ms!important}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], ariaLabel: [{
                type: Input
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
SwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SwitchComponent, selector: "ag-switch", inputs: { label: "label", css: "css", labelPosition: "labelPosition", isDisabled: "isDisabled", isAction: "isAction", isBordered: "isBordered", size: "size", isChecked: "isChecked" }, outputs: { selected: "selected" }, ngImport: i0, template: `<label [ngClass]="switchContainer()">
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
  </label>`, isInline: true, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:after{right:.5em}.switch-right .switch-label{position:absolute;right:0;transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-input{margin:0;opacity:.01%;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}@media (prefers-reduced-motion),(update: slow){.switch:after,.switch:before{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-switch', template: `<label [ngClass]="switchContainer()">
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
  </label>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:after{right:.5em}.switch-right .switch-label{position:absolute;right:0;transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-input{margin:0;opacity:.01%;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}@media (prefers-reduced-motion),(update: slow){.switch:after,.switch:before{transition-duration:.001ms!important}}\n"] }]
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
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TagComponent, selector: "ag-tag", inputs: { type: "type", shape: "shape", isUppercase: "isUppercase" }, ngImport: i0, template: `<span [class]="tagClasses"><ng-content></ng-content></span>`, isInline: true, styles: [".tag-base,.tag{display:inline-flex;justify-content:center;white-space:nowrap}.tag-skin,.tag{background-color:var(--agnostic-gray-light);color:var(--agnostic-dark);font-size:var(--fluid-12);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2);padding-inline-start:var(--fluid-8);padding-inline-end:var(--fluid-8)}.tag-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.tag-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.tag-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.tag-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.tag-upper{font-size:var(--fluid-10);text-transform:uppercase}.tag-circle{border-radius:50%}.tag-round{border-radius:var(--agnostic-radius)}.tag-pill{border-radius:200px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-tag', template: `<span [class]="tagClasses"><ng-content></ng-content></span>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".tag-base,.tag{display:inline-flex;justify-content:center;white-space:nowrap}.tag-skin,.tag{background-color:var(--agnostic-gray-light);color:var(--agnostic-dark);font-size:var(--fluid-12);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2);padding-inline-start:var(--fluid-8);padding-inline-end:var(--fluid-8)}.tag-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.tag-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.tag-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.tag-success{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.tag-upper{font-size:var(--fluid-10);text-transform:uppercase}.tag-circle{border-radius:50%}.tag-round{border-radius:var(--agnostic-radius)}.tag-pill{border-radius:200px}\n"] }]
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
TabPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TabPanelComponent, selector: "ag-tab-panel", inputs: { tabButtonTitle: "tabButtonTitle", isActive: "isActive", panelId: "panelId" }, ngImport: i0, template: `<div [id]="panelId" [hidden]="!isActive" role="tabpanel">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-tab-panel', template: `<div [id]="panelId" [hidden]="!isActive" role="tabpanel">
    <ng-content></ng-content>
  </div>`, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"] }]
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
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TabsComponent, selector: "ag-tabs", inputs: { tabButtonTemplate: "tabButtonTemplate", size: "size", disabledOptions: "disabledOptions", isDisabled: "isDisabled", isSkinned: "isSkinned", isBorderless: "isBorderless", isVerticalOrientation: "isVerticalOrientation" }, outputs: { selectionChanged: "selectionChanged" }, queries: [{ propertyName: "tabPanels", predicate: TabPanelComponent }, { propertyName: "tabButtonRefs", predicate: ["tabButton"], read: ElementRef }], ngImport: i0, template: `
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
  `, isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-tabs', template: `
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
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"] }]
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
                type: ContentChildren,
                args: ['tabButton', { read: ElementRef }]
            }], selectionChanged: [{
                type: Output
            }] } });

class TableComponent {
    constructor() {
        this.captionPosition = 'hidden';
        this.isUppercasedHeaders = false;
        this.isBordered = false;
        this.isBorderless = false;
        this.isStriped = false;
        this.isHoverable = false;
        this.isStacked = false;
        this.tableSize = '';
        this.sortingKey$ = new BehaviorSubject('');
        this.direction$ = new BehaviorSubject('none');
        this.preserveOriginalOrder = (a, b) => {
            return a;
        };
        this.getColByName = (row, name) => {
            return row[name];
        };
        this.rows$ = new BehaviorSubject(this.rows);
    }
    internalSort(rowLeft, rowRight) {
        let colLeft = rowLeft[this.sortingKey$.value] === null ||
            rowLeft[this.sortingKey$.value] === undefined
            ? -Infinity
            : rowLeft[this.sortingKey$.value];
        let colRight = rowRight[this.sortingKey$.value] === null ||
            rowRight[this.sortingKey$.value] === undefined
            ? -Infinity
            : rowRight[this.sortingKey$.value];
        const headerWithCustomSortFunction = this.headers.find((h) => h.key === this.sortingKey$.value && !!h.sortFn);
        if (headerWithCustomSortFunction && headerWithCustomSortFunction.sortFn) {
            return headerWithCustomSortFunction.sortFn(colLeft, colRight);
        }
        colLeft =
            typeof colLeft === 'string'
                ? colLeft.toLowerCase().replace(/(^\$|,)/g, '')
                : colLeft;
        colRight =
            typeof colRight === 'string'
                ? colRight.toLowerCase().replace(/(^\$|,)/g, '')
                : colRight;
        colLeft = !Number.isNaN(Number(colLeft)) ? Number(colLeft) : colLeft;
        colRight = !Number.isNaN(Number(colRight)) ? Number(colRight) : colRight;
        if (colLeft > colRight) {
            return 1;
        }
        if (colLeft < colRight) {
            return -1;
        }
        return 0;
    }
    descendingSort(row1, row2) {
        return this.internalSort(row1, row2) * -1;
    }
    ngOnInit() {
        combineLatest([this.sortingKey$, this.direction$]).subscribe((value) => {
            let rows = [...this.rows];
            const [_, direction] = value;
            if (direction === 'ascending') {
                rows.sort((a, b) => this.internalSort(a, b));
            }
            else if (direction === 'descending') {
                rows.sort((a, b) => this.descendingSort(a, b));
            }
            else {
                rows = [...this.rows];
            }
            this.rows$.next(rows);
        });
    }
    handleSortClicked(headerKey) {
        if (this.sortingKey$.value !== headerKey) {
            this.direction$.next('none');
            this.sortingKey$.next(headerKey);
        }
        switch (this.direction$.value) {
            case 'ascending':
                this.direction$.next('descending');
                break;
            case 'descending':
                this.direction$.next('none');
                break;
            case 'none':
                this.direction$.next('ascending');
                break;
            default:
                console.warn('Table sorting only supports directions: ascending | descending | none');
        }
    }
    getSortingClassesFor(headerKey) {
        if (this.sortingKey$.value === headerKey) {
            return [
                'icon-sort',
                this.direction$.value !== 'none'
                    ? `icon-sort-${this.direction$.value}`
                    : '',
            ]
                .filter((c) => c.length)
                .join(' ');
        }
        return 'icon-sort';
    }
    getSortDirectionFor(headerKey) {
        if (this.sortingKey$.value !== headerKey) {
            return 'none';
        }
        else {
            return this.direction$.value;
        }
    }
    get captionClasses() {
        return [
            this.captionPosition === 'hidden' ? 'screenreader-only' : '',
            this.captionPosition !== 'hidden'
                ? `caption-${this.captionPosition}`
                : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get tableResponsiveClasses() {
        return this.responsiveSize
            ? `table-responsive-${this.responsiveSize}`
            : 'table-responsive';
    }
    get tableClasses() {
        return [
            'table',
            this.tableSize ? `table-${this.tableSize}` : '',
            this.isUppercasedHeaders ? 'table-caps' : '',
            this.isBordered ? 'table-bordered' : '',
            this.isBorderless ? 'table-borderless' : '',
            this.isStriped ? 'table-striped' : '',
            this.isHoverable ? 'table-hoverable' : '',
            this.isStacked ? 'table-stacked' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TableComponent, selector: "ag-table", inputs: { rowRenderTemplate: "rowRenderTemplate", headers: "headers", rows: "rows", caption: "caption", captionPosition: "captionPosition", isUppercasedHeaders: "isUppercasedHeaders", isBordered: "isBordered", isBorderless: "isBorderless", isStriped: "isStriped", isHoverable: "isHoverable", isStacked: "isStacked", tableSize: "tableSize", responsiveSize: "responsiveSize" }, ngImport: i0, template: `<div [class]="tableResponsiveClasses">
    <table [class]="tableClasses">
      <caption [class]="captionClasses">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th
            *ngFor="let headerCol of headers"
            [attr.aria-sort]="getSortDirectionFor(headerCol.key)"
            scope="col"
            [style.width]="headerCol.width ? headerCol.width : 'auto'"
          >
            <div
              class="table-header-container"
              *ngIf="headerCol.sortable; else unsortable"
            >
              <span class="table-sort-label">{{ headerCol.label }}</span>
              <button
                type="button"
                class="table-sort"
                (click)="handleSortClicked(headerCol.key)"
              >
                <span class="screenreader-only">{{ headerCol.label }}</span>
                <span [class]="getSortingClassesFor(headerCol.key)"></span>
              </button>
            </div>
            <ng-template #unsortable>
              {{ headerCol.label }}
            </ng-template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows$ | async; index as i">
          <td
            *ngFor="
              let col of row | keyvalue: preserveOriginalOrder;
              index as cIndex
            "
          >
            <ng-template #defaultRow>
              {{ getColByName(row, col.key) }}
            </ng-template>
            <ng-container
              [ngTemplateOutlet]="
                rowRenderTemplate ? rowRenderTemplate : defaultRow
              "
              [ngTemplateOutletContext]="{
                $implicit: getColByName(row, col.key),
                index: cIndex
              }"
            >
            </ng-container>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`, isInline: true, styles: [".table{--table-bg: transparent;--table-accent-bg: transparent;--table-striped-color: var(--agnostic-dark);--table-striped-bg: rgb(0 0 0 / 2.5%);--table-active-color: var(--agnostic-dark);--table-active-bg: rgb(0 0 0 / 1.5%);--table-hoverable-color: var(--agnostic-dark);--table-hoverable-bg: var(--agnostic-table-hover-bg, #f1faff);width:100%;margin-bottom:var(--fluid-16);color:var(--agnostic-dark);vertical-align:top;border-color:var(--agnostic-table-border-color, var(--agnostic-gray-light))}.table>:not(caption)>*>*{padding:var(--fluid-8) var(--fluid-8);background-color:var(--table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table thead th{font-weight:600}.table-caps thead th{font-size:var(--fluid-12);text-transform:uppercase}.table tbody td,.table tbody th{font-weight:400}.table>:not(thead):not(caption){border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.caption-top{caption-side:top}.caption-bottom{caption-side:bottom}.caption-bottom,.caption-top{padding-block-start:var(--fluid-12);padding-block-end:var(--fluid-12);text-align:start}.caption-end{text-align:end}.table-small>:not(caption)>*>*{padding:var(--fluid-4) var(--fluid-4)}.table-large>:not(caption)>*>*{padding:var(--fluid-12) var(--fluid-12)}.table-xlarge>:not(caption)>*>*{padding:var(--fluid-18) var(--fluid-18)}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--table-accent-bg: var(--table-striped-bg);color:var(--table-striped-color)}.table-active{--table-accent-bg: var(--table-active-bg);color:var(--table-active-color)}.table-hoverable>tbody>tr:hover>*{--table-accent-bg: var(--table-hoverable-bg);color:var(--table-hoverable-color)}.table-stacked thead{display:none}.table-stacked tr,.table-stacked tbody th,.table-stacked tbody td{display:block;width:100%}.table-stacked tbody th,.table-stacked tbody td{border-bottom-width:0}.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-stacked tr{border-bottom:var(--fluid-2) solid var(--agnostic-gray-light);border-top-width:0}.table-stacked th[data-label]:before,.table-stacked td[data-label]:before{content:attr(data-label);display:block;font-weight:600;margin:-.5rem -1rem 0;padding:var(--fluid-12) var(--fluid-16) var(--fluid-6)}.table-stacked tr th:first-child,.table-stacked tr td:first-child{border-top-width:0}.table-stacked tr:nth-child(odd) td,.table-stacked tr:nth-child(odd) th{background-color:inherit}.table-stacked tr:first-child th:first-child,.table-stacked tr:first-child td:first-child{border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.table-stacked th[data-label],.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width: 576px){.table-responsive-small{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 768px){.table-responsive-medium{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 992px){.table-responsive-large{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1200px){.table-responsive-xlarge{overflow-x:auto;-webkit-overflow-scrolling:touch}}.table-header-container{display:flex;align-items:center}.table-sort-label{flex:1;padding-inline-end:.5rem;text-align:left}.table-sort{flex:0 1 var(--fluid-48);background-color:transparent;border-color:transparent;border-width:0;cursor:pointer;display:flex;justify-content:center;padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2)}.icon-sort{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m15 13-5 5-5-5M5 7l5-5 5 5' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\");width:1.125rem;height:1.125rem}.icon-sort-ascending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m9.221 6.365-4.963 5.86c-.586.693-.11 1.775.78 1.775h9.926c.2 0 .394-.059.561-.17.168-.111.3-.27.383-.457a1.102 1.102 0 0 0-.165-1.147l-4.963-5.86a1.04 1.04 0 0 0-.351-.27 1.007 1.007 0 0 0-1.208.27v-.001Z' fill='%23000' /%3E%3C/svg%3E\")}.icon-sort-descending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m10.778 13.635 4.964-5.86c.586-.693.11-1.775-.78-1.775H5.037a1.01 1.01 0 0 0-.561.17c-.168.111-.3.27-.382.457a1.102 1.102 0 0 0 .164 1.147l4.963 5.86a1.006 1.006 0 0 0 1.559 0v.001Z' fill='%23000' /%3E%3C/svg%3E\")}.table-sort:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.table-sort:focus{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i1.AsyncPipe, "keyvalue": i1.KeyValuePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-table', template: `<div [class]="tableResponsiveClasses">
    <table [class]="tableClasses">
      <caption [class]="captionClasses">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th
            *ngFor="let headerCol of headers"
            [attr.aria-sort]="getSortDirectionFor(headerCol.key)"
            scope="col"
            [style.width]="headerCol.width ? headerCol.width : 'auto'"
          >
            <div
              class="table-header-container"
              *ngIf="headerCol.sortable; else unsortable"
            >
              <span class="table-sort-label">{{ headerCol.label }}</span>
              <button
                type="button"
                class="table-sort"
                (click)="handleSortClicked(headerCol.key)"
              >
                <span class="screenreader-only">{{ headerCol.label }}</span>
                <span [class]="getSortingClassesFor(headerCol.key)"></span>
              </button>
            </div>
            <ng-template #unsortable>
              {{ headerCol.label }}
            </ng-template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows$ | async; index as i">
          <td
            *ngFor="
              let col of row | keyvalue: preserveOriginalOrder;
              index as cIndex
            "
          >
            <ng-template #defaultRow>
              {{ getColByName(row, col.key) }}
            </ng-template>
            <ng-container
              [ngTemplateOutlet]="
                rowRenderTemplate ? rowRenderTemplate : defaultRow
              "
              [ngTemplateOutletContext]="{
                $implicit: getColByName(row, col.key),
                index: cIndex
              }"
            >
            </ng-container>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".table{--table-bg: transparent;--table-accent-bg: transparent;--table-striped-color: var(--agnostic-dark);--table-striped-bg: rgb(0 0 0 / 2.5%);--table-active-color: var(--agnostic-dark);--table-active-bg: rgb(0 0 0 / 1.5%);--table-hoverable-color: var(--agnostic-dark);--table-hoverable-bg: var(--agnostic-table-hover-bg, #f1faff);width:100%;margin-bottom:var(--fluid-16);color:var(--agnostic-dark);vertical-align:top;border-color:var(--agnostic-table-border-color, var(--agnostic-gray-light))}.table>:not(caption)>*>*{padding:var(--fluid-8) var(--fluid-8);background-color:var(--table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table thead th{font-weight:600}.table-caps thead th{font-size:var(--fluid-12);text-transform:uppercase}.table tbody td,.table tbody th{font-weight:400}.table>:not(thead):not(caption){border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.caption-top{caption-side:top}.caption-bottom{caption-side:bottom}.caption-bottom,.caption-top{padding-block-start:var(--fluid-12);padding-block-end:var(--fluid-12);text-align:start}.caption-end{text-align:end}.table-small>:not(caption)>*>*{padding:var(--fluid-4) var(--fluid-4)}.table-large>:not(caption)>*>*{padding:var(--fluid-12) var(--fluid-12)}.table-xlarge>:not(caption)>*>*{padding:var(--fluid-18) var(--fluid-18)}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--table-accent-bg: var(--table-striped-bg);color:var(--table-striped-color)}.table-active{--table-accent-bg: var(--table-active-bg);color:var(--table-active-color)}.table-hoverable>tbody>tr:hover>*{--table-accent-bg: var(--table-hoverable-bg);color:var(--table-hoverable-color)}.table-stacked thead{display:none}.table-stacked tr,.table-stacked tbody th,.table-stacked tbody td{display:block;width:100%}.table-stacked tbody th,.table-stacked tbody td{border-bottom-width:0}.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-stacked tr{border-bottom:var(--fluid-2) solid var(--agnostic-gray-light);border-top-width:0}.table-stacked th[data-label]:before,.table-stacked td[data-label]:before{content:attr(data-label);display:block;font-weight:600;margin:-.5rem -1rem 0;padding:var(--fluid-12) var(--fluid-16) var(--fluid-6)}.table-stacked tr th:first-child,.table-stacked tr td:first-child{border-top-width:0}.table-stacked tr:nth-child(odd) td,.table-stacked tr:nth-child(odd) th{background-color:inherit}.table-stacked tr:first-child th:first-child,.table-stacked tr:first-child td:first-child{border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.table-stacked th[data-label],.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width: 576px){.table-responsive-small{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 768px){.table-responsive-medium{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 992px){.table-responsive-large{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1200px){.table-responsive-xlarge{overflow-x:auto;-webkit-overflow-scrolling:touch}}.table-header-container{display:flex;align-items:center}.table-sort-label{flex:1;padding-inline-end:.5rem;text-align:left}.table-sort{flex:0 1 var(--fluid-48);background-color:transparent;border-color:transparent;border-width:0;cursor:pointer;display:flex;justify-content:center;padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2)}.icon-sort{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m15 13-5 5-5-5M5 7l5-5 5 5' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\");width:1.125rem;height:1.125rem}.icon-sort-ascending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m9.221 6.365-4.963 5.86c-.586.693-.11 1.775.78 1.775h9.926c.2 0 .394-.059.561-.17.168-.111.3-.27.383-.457a1.102 1.102 0 0 0-.165-1.147l-4.963-5.86a1.04 1.04 0 0 0-.351-.27 1.007 1.007 0 0 0-1.208.27v-.001Z' fill='%23000' /%3E%3C/svg%3E\")}.icon-sort-descending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m10.778 13.635 4.964-5.86c.586-.693.11-1.775-.78-1.775H5.037a1.01 1.01 0 0 0-.561.17c-.168.111-.3.27-.382.457a1.102 1.102 0 0 0 .164 1.147l4.963 5.86a1.006 1.006 0 0 0 1.559 0v.001Z' fill='%23000' /%3E%3C/svg%3E\")}.table-sort:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.table-sort:focus{transition-duration:.001ms!important}}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { rowRenderTemplate: [{
                type: Input
            }], headers: [{
                type: Input
            }], rows: [{
                type: Input
            }], caption: [{
                type: Input
            }], captionPosition: [{
                type: Input
            }], isUppercasedHeaders: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isBorderless: [{
                type: Input
            }], isStriped: [{
                type: Input
            }], isHoverable: [{
                type: Input
            }], isStacked: [{
                type: Input
            }], tableSize: [{
                type: Input
            }], responsiveSize: [{
                type: Input
            }] } });

class ToastsComponent {
    constructor() {
        this.mounted = new BehaviorSubject(false);
    }
    get toastClasses() {
        return [
            'alert-toast',
            this.horizontalPosition,
            this.verticalPosition,
        ].join(" ");
    }
    ngOnInit() {
        this.portalTarget = this.portalRootSelector || 'body';
        this.mounted.next(true);
    }
}
ToastsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToastsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ToastsComponent, selector: "ag-toasts", inputs: { portalRootSelector: "portalRootSelector", horizontalPosition: "horizontalPosition", verticalPosition: "verticalPosition" }, ngImport: i0, template: `<ag-portal-host *ngIf="mounted | async" [teleportTo]="portalTarget">
    <div [class]="toastClasses">
      <ng-content></ng-content>
    </div>
  </ag-portal-host>`, isInline: true, styles: [".alert-toast{min-width:19rem;max-width:100%;position:fixed;z-index:1100;font-size:var(--agnostic-small);line-height:var(--fluid-24);padding:0;margin:var(--fluid-16)}\n"], components: [{ type: PortalHostComponent, selector: "ag-portal-host", inputs: ["teleportTo"] }], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-toasts', template: `<ag-portal-host *ngIf="mounted | async" [teleportTo]="portalTarget">
    <div [class]="toastClasses">
      <ng-content></ng-content>
    </div>
  </ag-portal-host>`, styles: [".alert-toast{min-width:19rem;max-width:100%;position:fixed;z-index:1100;font-size:var(--agnostic-small);line-height:var(--fluid-24);padding:0;margin:var(--fluid-16)}\n"] }]
        }], propDecorators: { portalRootSelector: [{
                type: Input
            }], horizontalPosition: [{
                type: Input
            }], verticalPosition: [{
                type: Input
            }] } });

class ToastComponent {
    constructor() {
        this.isOpen = true;
        this.isRounded = false;
        this.isBorderAll = false;
        this.isBorderLeft = false;
        this.isBorderRight = false;
        this.isBorderTop = false;
        this.isBorderBottom = false;
        this.isBlockEnd = false;
        this.type = '';
        this.isAnimationFadeIn = true;
        this.isAnimationSlideUp = false;
    }
}
ToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ToastComponent, selector: "ag-toast", inputs: { isOpen: "isOpen", isRounded: "isRounded", isBorderAll: "isBorderAll", isBorderLeft: "isBorderLeft", isBorderRight: "isBorderRight", isBorderTop: "isBorderTop", isBorderBottom: "isBorderBottom", isBlockEnd: "isBlockEnd", type: "type", isAnimationFadeIn: "isAnimationFadeIn", isAnimationSlideUp: "isAnimationSlideUp" }, ngImport: i0, template: `<ag-alert
    *ngIf="isOpen"
    [isToast]="true"
    [isRounded]="isRounded"
    [isBorderAll]="isBorderAll"
    [isBorderLeft]="isBorderLeft"
    [isBorderRight]="isBorderRight"
    [isBorderTop]="isBorderTop"
    [isBorderBottom]="isBorderBottom"
    [isBlockEnd]="isBlockEnd"
    [type]="type"
    [isAnimationFadeIn]="isAnimationFadeIn"
    [isAnimationSlideUp]="isAnimationSlideUp"
    [type]="type"
  >
      <ng-content></ng-content>
    </ag-alert>`, isInline: true, components: [{ type: AlertComponent, selector: "ag-alert", inputs: ["isRounded", "isBorderAll", "isBorderLeft", "isBorderRight", "isBorderTop", "isBorderBottom", "isBlockEnd", "type", "isAnimationFadeIn", "isAnimationSlideUp", "isToast"] }], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-toast',
                    template: `<ag-alert
    *ngIf="isOpen"
    [isToast]="true"
    [isRounded]="isRounded"
    [isBorderAll]="isBorderAll"
    [isBorderLeft]="isBorderLeft"
    [isBorderRight]="isBorderRight"
    [isBorderTop]="isBorderTop"
    [isBorderBottom]="isBorderBottom"
    [isBlockEnd]="isBlockEnd"
    [type]="type"
    [isAnimationFadeIn]="isAnimationFadeIn"
    [isAnimationSlideUp]="isAnimationSlideUp"
    [type]="type"
  >
      <ng-content></ng-content>
    </ag-alert>`,
                }]
        }], propDecorators: { isOpen: [{
                type: Input
            }], isRounded: [{
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
            }], isAnimationFadeIn: [{
                type: Input
            }], isAnimationSlideUp: [{
                type: Input
            }] } });

class AgModule {
}
AgModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AgModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AgModule, declarations: [AlertComponent,
        AvatarComponent,
        AvatarGroupComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        ChoiceInputComponent,
        CloseComponent,
        DialogComponent,
        DiscloseComponent,
        DividerComponent,
        EmptyStateComponent,
        EmptyStateHeaderComponent,
        EmptyStateBodyComponent,
        EmptyStateFooterComponent,
        HeaderComponent,
        HeaderNavComponent,
        HeaderNavItemComponent,
        InputComponent,
        IconComponent,
        LoaderComponent,
        MenuComponent,
        MenuItemDirective,
        MenuContentDirective,
        PaginationComponent,
        PortalHostComponent,
        ProgressComponent,
        SelectComponent,
        SpinnerComponent,
        SwitchComponent,
        TagComponent,
        TableComponent,
        TabsComponent,
        TabPanelComponent,
        ToastsComponent,
        ToastComponent], imports: [CommonModule, AngularA11yDialogModule], exports: [AlertComponent,
        AvatarComponent,
        AvatarGroupComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        ChoiceInputComponent,
        CloseComponent,
        DialogComponent,
        DiscloseComponent,
        DividerComponent,
        EmptyStateComponent,
        EmptyStateHeaderComponent,
        EmptyStateBodyComponent,
        EmptyStateFooterComponent,
        HeaderComponent,
        HeaderNavComponent,
        HeaderNavItemComponent,
        InputComponent,
        IconComponent,
        LoaderComponent,
        MenuComponent,
        MenuItemDirective,
        MenuContentDirective,
        PaginationComponent,
        PortalHostComponent,
        ProgressComponent,
        SelectComponent,
        SpinnerComponent,
        SwitchComponent,
        TagComponent,
        TableComponent,
        TabsComponent,
        TabPanelComponent,
        ToastsComponent,
        ToastComponent] });
AgModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AgModule, imports: [[CommonModule, AngularA11yDialogModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AgModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AngularA11yDialogModule],
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
                        DialogComponent,
                        DiscloseComponent,
                        DividerComponent,
                        EmptyStateComponent,
                        EmptyStateHeaderComponent,
                        EmptyStateBodyComponent,
                        EmptyStateFooterComponent,
                        HeaderComponent,
                        HeaderNavComponent,
                        HeaderNavItemComponent,
                        InputComponent,
                        IconComponent,
                        LoaderComponent,
                        MenuComponent,
                        MenuItemDirective,
                        MenuContentDirective,
                        PaginationComponent,
                        PortalHostComponent,
                        ProgressComponent,
                        SelectComponent,
                        SpinnerComponent,
                        SwitchComponent,
                        TagComponent,
                        TableComponent,
                        TabsComponent,
                        TabPanelComponent,
                        ToastsComponent,
                        ToastComponent,
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
                        DialogComponent,
                        DiscloseComponent,
                        DividerComponent,
                        EmptyStateComponent,
                        EmptyStateHeaderComponent,
                        EmptyStateBodyComponent,
                        EmptyStateFooterComponent,
                        HeaderComponent,
                        HeaderNavComponent,
                        HeaderNavItemComponent,
                        InputComponent,
                        IconComponent,
                        LoaderComponent,
                        MenuComponent,
                        MenuItemDirective,
                        MenuContentDirective,
                        PaginationComponent,
                        PortalHostComponent,
                        ProgressComponent,
                        SelectComponent,
                        SpinnerComponent,
                        SwitchComponent,
                        TagComponent,
                        TableComponent,
                        TabsComponent,
                        TabPanelComponent,
                        ToastsComponent,
                        ToastComponent,
                    ],
                }]
        }] });

export { AG_MENU, AgModule, AlertComponent, AvatarComponent, AvatarGroupComponent, BreadcrumbComponent, BreadcrumbItemComponent, ButtonComponent, ButtonGroupComponent, CardComponent, ChoiceInputComponent, CloseComponent, DialogComponent, DiscloseComponent, DividerComponent, EmptyStateBodyComponent, EmptyStateComponent, EmptyStateFooterComponent, EmptyStateHeaderComponent, HeaderComponent, HeaderNavComponent, HeaderNavItemComponent, IconComponent, InputComponent, LoaderComponent, MenuComponent, MenuContentDirective, MenuItemDirective, PaginationComponent, PortalHostComponent, ProgressComponent, SelectComponent, SpinnerComponent, SwitchComponent, TabPanelComponent, TableComponent, TabsComponent, TagComponent, ToastComponent, ToastsComponent };
//# sourceMappingURL=agnostic-angular.mjs.map
