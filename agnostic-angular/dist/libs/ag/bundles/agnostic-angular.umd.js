(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('agnostic-angular', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["agnostic-angular"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.mode = undefined;
            this.type = 'button';
            this.size = 'medium';
            this.isDisabled = false;
            this.handleClick = new i0.EventEmitter();
        }
        Object.defineProperty(ButtonComponent.prototype, "classes", {
            get: function () {
                var baseClass = this.isSkinned !== false ? "btn" : "btn-base";
                var modeClass = this.mode ? "btn-" + this.mode : '';
                var isBlankClass = this.isBlank === true ? 'btn-blank' : '';
                var isBorderedClass = this.isBordered === true ? 'btn-bordered' : '';
                var isRaisedClass = this.isRaised === true ? 'btn-raised' : '';
                var isCircleClass = this.isCircle === true ? 'btn-circle' : '';
                var isBlockClass = this.isBlock === true ? 'btn-block' : '';
                var isRoundedClass = this.isRounded === true ? 'btn-rounded' : '';
                var overrides = this.css ? "" + this.css : '';
                var sizeClass = this.size ? "btn-" + this.size : 'btn-medium';
                return [
                    baseClass,
                    modeClass,
                    isBlankClass,
                    sizeClass,
                    isBorderedClass,
                    isCircleClass,
                    isRoundedClass,
                    isRaisedClass,
                    isBlockClass,
                    overrides,
                ].join(' ');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "getDisabled", {
            get: function () {
                return this.isDisabled || false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "getType", {
            get: function () {
                return this.type ? this.type : 'button';
            },
            enumerable: false,
            configurable: true
        });
        return ButtonComponent;
    }());
    ButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ButtonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ButtonComponent, selector: "ag-button", inputs: { mode: "mode", type: "type", size: "size", css: "css", isDisabled: "isDisabled", isSkinned: "isSkinned", isBlank: "isBlank", isRaised: "isRaised", isCircle: "isCircle", isBlock: "isBlock", isBordered: "isBordered", isRounded: "isRounded" }, outputs: { handleClick: "handleClick" }, ngImport: i0__namespace, template: " <button\n      div\n      *ngIf=\"getType !== 'faux'; else useFauxDiv\"\n      [type]=\"getType\"\n      (click)=\"handleClick.emit($event)\"\n      [disabled]=\"getDisabled\"\n      [class]=\"classes\"\n    >\n      <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n    </button>\n    <ng-template #useFauxDiv>\n      <div [class]=\"classes\">\n        <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- We have to grab projected ng-content and put in this template.\n      Then, we can reference it from the template outlets above -->\n    <ng-template #contentTpl>\n      <ng-content></ng-content>\n    </ng-template>", isInline: true, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin,.btn{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, 1.25rem);padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn:hover{opacity:.85;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgba(255,255,255,.3);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);outline:3px solid transparent;transition:box-shadow var(--agnostic-timing-fast) ease-out}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark))!important;text-shadow:0 1px 1px rgba(255,255,255,1)!important;border-color:transparent;color:var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:.8!important}.btn-primary{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-raised{border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;background:linear-gradient(var(--agnostic-btn-raised-from, var(--agnostic-gray-mid)),var(--agnostic-btn-raised-to, var(--agnostic-gray-extra-light)));box-shadow:inset 0 1px #ffffff4d,0 1px 2px #00000026}.btn-raised:hover,.btn-raised:focus{background:linear-gradient(to bottom,white,gainsboro)}.btn-raised.active{background:#eeeeee;box-shadow:inset 0 1px 3px #0003,0 1px #fff}.btn-raised.btn-primary{border-color:var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from));background:linear-gradient(var(--agnostic-btn-primary-raised-from, var(--agnostic-primary-from)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-to)))}.btn-raised.btn-primary:hover,.btn-raised.btn-primary:focus{background:linear-gradient(to bottom,var(--agnostic-btn-primary-raised-hover-from, var(--agnostic-primary-hover)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)));background:linear-gradient(var(--agnostic-btn-primary-raised-hover-from, var(--agnostic-primary-hover)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)))}.btn-raised.btn-primary:active,.btn-raised.btn-primary.active{opacity:.9;box-shadow:0 0 0 1px #0000004d}.btn-raised.btn-secondary{border-color:var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to));background:linear-gradient(var(--agnostic-btn-secondary-raised-from, var(--agnostic-secondary-from)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))}.btn-raised.btn-secondary:hover,.btn-raised.btn-secondary:focus{background:linear-gradient(to bottom,var(--agnostic-btn-secondary-raised-hover-from, var(--agnostic-secondary-hover)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)));background:linear-gradient(var(--agnostic-btn-secondary-raised-hover-from, var(--agnostic-secondary-hover)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))}.btn-raised.btn-secondary:active,.btn-raised.btn-secondary.active{opacity:.9;box-shadow:0 0 0 1px #0000004d}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnostic-btn-radius, .25rem)}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-blank{background-color:transparent;border:0;border-radius:0;box-shadow:none}.btn-blank:hover,.btn-blank:active,.btn-blank:focus{background:none;outline:3px solid transparent}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ButtonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-button',
                        template: " <button\n      div\n      *ngIf=\"getType !== 'faux'; else useFauxDiv\"\n      [type]=\"getType\"\n      (click)=\"handleClick.emit($event)\"\n      [disabled]=\"getDisabled\"\n      [class]=\"classes\"\n    >\n      <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n    </button>\n    <ng-template #useFauxDiv>\n      <div [class]=\"classes\">\n        <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- We have to grab projected ng-content and put in this template.\n      Then, we can reference it from the template outlets above -->\n    <ng-template #contentTpl>\n      <ng-content></ng-content>\n    </ng-template>",
                        styleUrls: ['./button.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { mode: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], css: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], isSkinned: [{
                    type: i0.Input
                }], isBlank: [{
                    type: i0.Input
                }], isRaised: [{
                    type: i0.Input
                }], isCircle: [{
                    type: i0.Input
                }], isBlock: [{
                    type: i0.Input
                }], isBordered: [{
                    type: i0.Input
                }], isRounded: [{
                    type: i0.Input
                }], handleClick: [{
                    type: i0.Output
                }] } });

    var ButtonGroupComponent = /** @class */ (function () {
        function ButtonGroupComponent() {
        }
        Object.defineProperty(ButtonGroupComponent.prototype, "getAriaLabel", {
            get: function () {
                var label = this.ariaLabel ? this.ariaLabel : 'button group element';
                return label;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonGroupComponent.prototype, "classes", {
            get: function () {
                var cssClass = this.css ? this.css : '';
                return ['btn-group', cssClass].join(' ');
            },
            enumerable: false,
            configurable: true
        });
        return ButtonGroupComponent;
    }());
    ButtonGroupComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ButtonGroupComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ButtonGroupComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ButtonGroupComponent, selector: "ag-button-group", inputs: { css: "css", ariaLabel: "ariaLabel" }, queries: [{ propertyName: "buttons", predicate: ButtonComponent }], ngImport: i0__namespace, template: "<div [ngClass]=\"classes\">\n    <span class=\"screenreader-only\">{{ getAriaLabel }}</span>\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnostic-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnostic-btn-radius, var(--fluid-4))}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ButtonGroupComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-button-group',
                        template: "<div [ngClass]=\"classes\">\n    <span class=\"screenreader-only\">{{ getAriaLabel }}</span>\n    <ng-content></ng-content>\n  </div>",
                        styleUrls: ['./button-group.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], propDecorators: { buttons: [{
                    type: i0.ContentChildren,
                    args: [ButtonComponent]
                }], css: [{
                    type: i0.Input
                }], ariaLabel: [{
                    type: i0.Input
                }] } });

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            this.isSkinned = true;
        }
        Object.defineProperty(CardComponent.prototype, "classes", {
            get: function () {
                var baseClass = this.isSkinned ? 'card' : 'card-base';
                var isAnimatedClass = this.isAnimated ? 'card-animated' : '';
                var isStackedClass = this.isStacked ? 'card-stacked' : '';
                var overrides = this.css ? "" + this.css : '';
                return [baseClass, isAnimatedClass, isStackedClass, overrides].join(' ');
            },
            enumerable: false,
            configurable: true
        });
        return CardComponent;
    }());
    CardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: CardComponent, selector: "ag-card", inputs: { css: "css", isAnimated: "isAnimated", isSkinned: "isSkinned", isStacked: "isStacked" }, ngImport: i0__namespace, template: "<div [ngClass]=\"classes\">\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card,.card-skin{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgba(6, 6, 6, .075)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgba(5, 5, 5, .1));border-radius:var(--agnostic-card-border-radius, 4px);overflow:hidden}.card:hover,.card-skin:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgba(4, 4, 4, .1)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgba(3, 3, 3, .1))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translateY-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-stacked{flex-direction:column}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-card',
                        template: "<div [ngClass]=\"classes\">\n    <ng-content></ng-content>\n  </div>",
                        styleUrls: ['./card.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { css: [{
                    type: i0.Input
                }], isAnimated: [{
                    type: i0.Input
                }], isSkinned: [{
                    type: i0.Input
                }], isStacked: [{
                    type: i0.Input
                }] } });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var ChoiceInputComponent = /** @class */ (function () {
        function ChoiceInputComponent() {
            this.isInline = false;
            this.isFieldset = true;
            this.isSkinned = true;
            this.isDisabled = false;
            this.options = [];
            this._checkedOptions = [];
            this.legendLabel = '';
            this.type = 'checkbox';
            this.size = '';
            this.selected = new i0.EventEmitter();
        }
        Object.defineProperty(ChoiceInputComponent.prototype, "checkedOptions", {
            get: function () {
                return this._checkedOptions;
            },
            set: function (val) {
                this._checkedOptions = val;
            },
            enumerable: false,
            configurable: true
        });
        ChoiceInputComponent.prototype.labelSpanClasses = function () {
            var klasses = [
                this.type ? this.type + "-label" : '',
                this.size ? this.type + "-label-" + this.size : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        ChoiceInputComponent.prototype.handleChange = function (ev) {
            var _a, _b, _c;
            var el = ev.target;
            var value = el.value;
            if (this.type === 'checkbox') {
                var checkedItemsUpdated = void 0;
                if ((_a = this.checkedOptions) === null || _a === void 0 ? void 0 : _a.includes(value)) {
                    checkedItemsUpdated = (_b = this.checkedOptions) === null || _b === void 0 ? void 0 : _b.filter(function (item) { return item !== value; });
                    this.checkedOptions = checkedItemsUpdated;
                }
                else {
                    checkedItemsUpdated = __spreadArray(__spreadArray([], __read(this.checkedOptions)), [value]);
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
        };
        ChoiceInputComponent.prototype.inputClasses = function () {
            var inputKlasses = [
                "" + this.type,
                this.size ? "" + this.size : '',
                this.isDisabled ? 'disabled' : '',
            ];
            inputKlasses = inputKlasses.filter(function (klass) { return klass.length; });
            return inputKlasses.join(' ');
        };
        ChoiceInputComponent.prototype.fieldsetClass = function () {
            var skin = this.isSkinned ? this.type + "-group" : '';
            var sizeSkin = this.isSkinned && this.size === 'large'
                ? this.type + "-group-" + this.size
                : '';
            var overrides = this.css ? "" + this.css : '';
            var klasses = [
                overrides ? overrides : '',
                skin,
                sizeSkin,
                this.isFieldset === false ? this.type + "-group-hidden" : '',
            ];
            return klasses.filter(function (klass) { return klass.length; });
        };
        ChoiceInputComponent.prototype.legendClasses = function () {
            var skin = this.isSkinned ? this.type + "-legend" : '';
            var klasses = [
                skin,
                this.isFieldset === false ? 'screenreader-only' : null,
            ];
            return klasses.join(' ');
        };
        ChoiceInputComponent.prototype.labelClasses = function () {
            var klasses = [
                this.type ? this.type + "-label-wrap" : '',
                this.isInline ? this.type + "-label-wrap-inline" : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        return ChoiceInputComponent;
    }());
    ChoiceInputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ChoiceInputComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ChoiceInputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ChoiceInputComponent, selector: "ag-choice-input", inputs: { isInline: "isInline", isFieldset: "isFieldset", isSkinned: "isSkinned", isDisabled: "isDisabled", options: "options", disabledOptions: "disabledOptions", checkedOptions: "checkedOptions", css: "css", legendLabel: "legendLabel", type: "type", size: "size" }, outputs: { selected: "selected" }, ngImport: i0__namespace, template: "<fieldset [ngClass]=\"fieldsetClass()\">\n    <legend [ngClass]=\"legendClasses()\">{{ legendLabel }}</legend>\n    <ng-container *ngFor=\"let option of options\">\n      <label\n        [attr.disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n        [ngClass]=\"labelClasses()\"\n      >\n        <input\n          [ngClass]=\"inputClasses()\"\n          [type]=\"type\"\n          [name]=\"option.name\"\n          [value]=\"option.value\"\n          [disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n          [checked]=\"checkedOptions?.includes(option.value) || false\"\n          (change)=\"this.handleChange($event)\"\n        />\n        <span [ngClass]=\"labelSpanClasses()\">{{ option.label }}</span>\n      </label>\n    </ng-container>\n  </fieldset>", isInline: true, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:.5rem}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:block;cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label,.radio-label{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);outline:3px solid transparent}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]+.checkbox-label,.radio[disabled]+.radio-label,.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:.8!important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ChoiceInputComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-choice-input',
                        template: "<fieldset [ngClass]=\"fieldsetClass()\">\n    <legend [ngClass]=\"legendClasses()\">{{ legendLabel }}</legend>\n    <ng-container *ngFor=\"let option of options\">\n      <label\n        [attr.disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n        [ngClass]=\"labelClasses()\"\n      >\n        <input\n          [ngClass]=\"inputClasses()\"\n          [type]=\"type\"\n          [name]=\"option.name\"\n          [value]=\"option.value\"\n          [disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n          [checked]=\"checkedOptions?.includes(option.value) || false\"\n          (change)=\"this.handleChange($event)\"\n        />\n        <span [ngClass]=\"labelSpanClasses()\">{{ option.label }}</span>\n      </label>\n    </ng-container>\n  </fieldset>",
                        styleUrls: ['./choice-input.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { isInline: [{
                    type: i0.Input
                }], isFieldset: [{
                    type: i0.Input
                }], isSkinned: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], disabledOptions: [{
                    type: i0.Input
                }], checkedOptions: [{
                    type: i0.Input
                }], css: [{
                    type: i0.Input
                }], legendLabel: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Output
                }] } });

    var HeaderNavComponent = /** @class */ (function () {
        function HeaderNavComponent() {
        }
        Object.defineProperty(HeaderNavComponent.prototype, "classes", {
            get: function () {
                var klasses = ['header-nav', this.css ? "" + this.css : ''];
                klasses = klasses.filter(function (klass) { return klass.length; });
                return klasses.join(' ');
            },
            enumerable: false,
            configurable: true
        });
        return HeaderNavComponent;
    }());
    HeaderNavComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: HeaderNavComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    HeaderNavComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderNavComponent, selector: "ag-header-nav", inputs: { css: "css" }, ngImport: i0__namespace, template: "<nav>\n    <div [ngClass]=\"classes\">\n      <ng-content></ng-content>\n    </div>\n  </nav>", isInline: true, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: HeaderNavComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-header-nav',
                        template: "<nav>\n    <div [ngClass]=\"classes\">\n      <ng-content></ng-content>\n    </div>\n  </nav>",
                        styleUrls: ['./headernav.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { css: [{
                    type: i0.Input
                }] } });
    var HeaderNavItemComponent = /** @class */ (function () {
        function HeaderNavItemComponent() {
        }
        Object.defineProperty(HeaderNavItemComponent.prototype, "classes", {
            get: function () {
                var klasses = ['header-nav-item', this.css ? "" + this.css : ''];
                klasses = klasses.filter(function (klass) { return klass.length; });
                return klasses.join(' ');
            },
            enumerable: false,
            configurable: true
        });
        return HeaderNavItemComponent;
    }());
    HeaderNavItemComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: HeaderNavItemComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    HeaderNavItemComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderNavItemComponent, selector: "ag-header-nav-item", inputs: { css: "css" }, ngImport: i0__namespace, template: "<div [ngClass]=\"classes\"><ng-content></ng-content></div>", isInline: true, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnostic-header-color, var(--agnostic-font-color));text-decoration:none}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: HeaderNavItemComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-header-nav-item',
                        template: "<div [ngClass]=\"classes\"><ng-content></ng-content></div>",
                        styleUrls: ['./headernavitem.css'],
                    }]
            }], propDecorators: { css: [{
                    type: i0.Input
                }] } });
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.isSkinned = true;
        }
        Object.defineProperty(HeaderComponent.prototype, "classes", {
            get: function () {
                var baseClass = this.isSkinned ? 'header' : 'header-base';
                var isStickyClass = this.isSticky ? 'header-sticky' : '';
                var overrides = this.css ? "" + this.css : '';
                var klasses = [
                    baseClass,
                    isStickyClass,
                    overrides,
                ];
                klasses = klasses.filter(function (klass) { return klass.length; });
                return klasses.join(' ');
            },
            enumerable: false,
            configurable: true
        });
        return HeaderComponent;
    }());
    HeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: HeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    HeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderComponent, selector: "ag-header", inputs: { css: "css", isSkinned: "isSkinned", isSticky: "isSticky" }, ngImport: i0__namespace, template: "<header [ngClass]=\"classes\">\n    <div class=\"header-content\"><ng-content></ng-content></div>\n  </header>\n  ", isInline: true, styles: [".header,.header-base{display:flex;flex-direction:row;align-items:center}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgba(0, 0, 0, .1));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:space-around;align-items:center;flex-wrap:wrap}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: HeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-header',
                        template: "<header [ngClass]=\"classes\">\n    <div class=\"header-content\"><ng-content></ng-content></div>\n  </header>\n  ",
                        styleUrls: ['./header.css'],
                    }]
            }], propDecorators: { css: [{
                    type: i0.Input
                }], isSkinned: [{
                    type: i0.Input
                }], isSticky: [{
                    type: i0.Input
                }] } });

    var InputComponent = /** @class */ (function () {
        function InputComponent() {
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
        Object.defineProperty(InputComponent.prototype, "id", {
            get: function () {
                return this._ID;
            },
            set: function (value) {
                this._ID = value;
                this.externalId = null;
            },
            enumerable: false,
            configurable: true
        });
        InputComponent.prototype.helpClasses = function () {
            var klasses = [
                !this.size ? 'field-help' : '',
                this.size ? "field-help-" + this.size : '',
            ];
            return klasses.filter(function (klass) { return klass.length; }).join(' ');
        };
        InputComponent.prototype.invalidClasses = function () {
            var klasses = [
                !this.size ? 'field-error' : '',
                this.size ? "field-error-" + this.size : '',
            ];
            return klasses.filter(function (klass) { return klass.length; }).join(' ');
        };
        InputComponent.prototype.labelClasses = function () {
            var labelKlasses = [
                'label',
                this.isInvalid ? 'label-error' : '',
                this.isInline ? 'label-inline' : '',
                this.size ? "label-" + this.size : '',
                this.labelCss ? this.labelCss : '',
            ];
            return labelKlasses.filter(function (klass) { return klass.length; }).join(' ');
        };
        InputComponent.prototype.inputClasses = function () {
            var klasses = [
                this.isSkinned ? 'input' : 'input-base',
                this.isRounded ? 'input-rounded' : '',
                this.isUnderlined ? 'input-underlined' : '',
                this.isDisabled ? 'disabled' : '',
                this.isInline ? 'input-inline' : '',
                this.hasLeftAddon ? 'input-has-left-addon' : '',
                this.hasRightAddon ? 'input-has-right-addon' : '',
                this.isInvalid ? 'input-error' : '',
                this.isUnderlinedWithBackground ? 'input-underlined-bg' : '',
                this.css ? "" + this.css : '',
                this.size ? "input-" + this.size : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        InputComponent.prototype.handleChange = function (ev) {
            console.log('handleChange not yet implemented...');
        };
        InputComponent.prototype.handleFocus = function (ev) {
            console.log('handleFocus not yet implemented...');
        };
        InputComponent.prototype.handleBlur = function (ev) {
            console.log('handleBlur not yet implemented...');
        };
        return InputComponent;
    }());
    InputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: InputComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    InputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: InputComponent, selector: "ag-input", inputs: { id: "id", helpText: "helpText", invalidText: "invalidText", isInvalid: "isInvalid", isSkinned: "isSkinned", isRounded: "isRounded", isUnderlined: "isUnderlined", isInline: "isInline", isDisabled: "isDisabled", hasLeftAddon: "hasLeftAddon", hasRightAddon: "hasRightAddon", isUnderlinedWithBackground: "isUnderlinedWithBackground", name: "name", label: "label", labelCss: "labelCss", css: "css", placeholder: "placeholder", defaultValue: "defaultValue", size: "size", type: "type", rows: "rows", cols: "cols" }, host: { properties: { "attr.id": "this.externalId" } }, ngImport: i0__namespace, template: "<div className=\"width-full\">\n    <label [class]=\"labelClasses()\" [for]=\"id\">\n      {{ label }}\n    </label>\n    <ng-container *ngIf=\"type === 'textarea'; else noTextarea\">\n      <textarea\n        *ngIf=\"type === 'textarea'\"\n        [id]=\"id\"\n        [attr.name]=\"name ? name : null\"\n        [value]=\"defaultValue || ''\"\n        [disabled]=\"isDisabled\"\n        [class]=\"inputClasses()\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [attr.rows]=\"rows\"\n        [attr.cols]=\"cols\"\n        (change)=\"(handleChange)\"\n        (focus)=\"(handleFocus)\"\n        (blur)=\"(handleBlur)\"\n      ></textarea>\n    </ng-container>\n    <ng-template #noTextarea>\n      <div\n        class=\"input-addon-container\"\n        *ngIf=\"hasLeftAddon || hasRightAddon; else inputOnly\"\n      >\n        <ng-content select=\"[addOnLeft]\"></ng-content>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n        <ng-content select=\"[addOnRight]\"></ng-content>\n      </div>\n      <ng-template #inputOnly>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n      </ng-template>\n    </ng-template>\n    <span\n      *ngIf=\"isInvalid; else helpHint\"\n      [class]=\"invalidClasses()\"\n      role=\"status\"\n      aria-live=\"polite\"\n    >\n      {{ invalidText }}\n    </span>\n    <ng-template #helpHint>\n      <span [class]=\"helpClasses()\" role=\"status\" aria-live=\"polite\">\n        {{ helpText }}\n      </span>\n    </ng-template>\n  </div>", isInline: true, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, 1.25rem);width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error,.label,.label-skin{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:.5;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-moz-placeholder{color:currentColor;opacity:.5;-moz-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:.5;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:.5;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-border-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error-color))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error-color))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error-color))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large,.label-large{font-size:var(--agnostic-font-size, 1rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);outline:3px solid transparent;transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:.8!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%;--addon-padding: calc(var(--agnostic-input-side-padding, .75rem) * 1.5)}.input-has-left-addon,.input-has-right-addon{flex:1}.input-has-left-addon{padding-inline-start:calc(var(--addon-padding) * 2.25)}.input-has-right-addon{padding-inline-end:calc(var(--addon-padding) * 2.25)}.input-addon-right,.input-addon-left{--addon-padding: calc(var(--agnostic-input-side-padding) * 1.5);position:absolute;top:50%;transform:translateY(-50%)}.input-addon-left{left:var(--addon-padding)}.input-addon-right{right:var(--addon-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{--addon-padding: calc(var(--agnostic-input-side-padding) * 1.5);position:absolute;top:50%;transform:translateY(-50%)}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: InputComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-input',
                        template: "<div className=\"width-full\">\n    <label [class]=\"labelClasses()\" [for]=\"id\">\n      {{ label }}\n    </label>\n    <ng-container *ngIf=\"type === 'textarea'; else noTextarea\">\n      <textarea\n        *ngIf=\"type === 'textarea'\"\n        [id]=\"id\"\n        [attr.name]=\"name ? name : null\"\n        [value]=\"defaultValue || ''\"\n        [disabled]=\"isDisabled\"\n        [class]=\"inputClasses()\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [attr.rows]=\"rows\"\n        [attr.cols]=\"cols\"\n        (change)=\"(handleChange)\"\n        (focus)=\"(handleFocus)\"\n        (blur)=\"(handleBlur)\"\n      ></textarea>\n    </ng-container>\n    <ng-template #noTextarea>\n      <div\n        class=\"input-addon-container\"\n        *ngIf=\"hasLeftAddon || hasRightAddon; else inputOnly\"\n      >\n        <ng-content select=\"[addOnLeft]\"></ng-content>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n        <ng-content select=\"[addOnRight]\"></ng-content>\n      </div>\n      <ng-template #inputOnly>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n      </ng-template>\n    </ng-template>\n    <span\n      *ngIf=\"isInvalid; else helpHint\"\n      [class]=\"invalidClasses()\"\n      role=\"status\"\n      aria-live=\"polite\"\n    >\n      {{ invalidText }}\n    </span>\n    <ng-template #helpHint>\n      <span [class]=\"helpClasses()\" role=\"status\" aria-live=\"polite\">\n        {{ helpText }}\n      </span>\n    </ng-template>\n  </div>",
                        styleUrls: ['./input.css', './inputaddon-hack.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { externalId: [{
                    type: i0.HostBinding,
                    args: ['attr.id']
                }], id: [{
                    type: i0.Input
                }], helpText: [{
                    type: i0.Input
                }], invalidText: [{
                    type: i0.Input
                }], isInvalid: [{
                    type: i0.Input
                }], isSkinned: [{
                    type: i0.Input
                }], isRounded: [{
                    type: i0.Input
                }], isUnderlined: [{
                    type: i0.Input
                }], isInline: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], hasLeftAddon: [{
                    type: i0.Input
                }], hasRightAddon: [{
                    type: i0.Input
                }], isUnderlinedWithBackground: [{
                    type: i0.Input
                }], name: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], labelCss: [{
                    type: i0.Input
                }], css: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], defaultValue: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], rows: [{
                    type: i0.Input
                }], cols: [{
                    type: i0.Input
                }] } });

    var ProgressComponent = /** @class */ (function () {
        function ProgressComponent() {
            this.value = 0;
            this.max = 100;
        }
        Object.defineProperty(ProgressComponent.prototype, "classes", {
            get: function () {
                var _a;
                console.log(this);
                var klasses = ['progress', ((_a = this.css) === null || _a === void 0 ? void 0 : _a.length) ? "" + this.css : ''];
                klasses = klasses.filter(function (klass) { return klass.length; });
                return klasses.join(' ');
            },
            enumerable: false,
            configurable: true
        });
        return ProgressComponent;
    }());
    ProgressComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ProgressComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ProgressComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ProgressComponent, selector: "ag-progress", inputs: { value: "value", max: "max", css: "css" }, ngImport: i0__namespace, template: "<progress [ngClass]=\"classes\" [attr.value]=\"value\" [attr.max]=\"max\"></progress>", isInline: true, styles: [".progress{-webkit-appearance:none;height:var(--agnostic-progress-height, 10px);width:100%;border:none;background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, 10px)}.progress[value]::-webkit-progress-bar{background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, 10px)}.progress[value]::-webkit-progress-value{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, 10px)}.progress[value]::-moz-progress-bar{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, 10px)}.progress[value]::-ms-fill{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, 10px)}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ProgressComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-progress',
                        template: "<progress [ngClass]=\"classes\" [attr.value]=\"value\" [attr.max]=\"max\"></progress>",
                        styleUrls: ['./progress.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { value: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], css: [{
                    type: i0.Input
                }] } });

    var SwitchComponent = /** @class */ (function () {
        function SwitchComponent() {
            this.labelPosition = 'left';
            this.isDisabled = false;
            this.isAction = false;
            this.isBordered = false;
            this.size = '';
            this.selected = new i0.EventEmitter();
        }
        Object.defineProperty(SwitchComponent.prototype, "isChecked", {
            get: function () {
                return this.switchChecked;
            },
            set: function (val) {
                this.switchChecked = val;
            },
            enumerable: false,
            configurable: true
        });
        SwitchComponent.prototype.toggleChecked = function (ev) {
            var el = ev.target;
            if (el.getAttribute('aria-checked') == 'true') {
                el.setAttribute('aria-checked', 'false');
                this.switchChecked = false;
            }
            else {
                el.setAttribute('aria-checked', 'true');
                this.switchChecked = true;
            }
            this.selected.emit(this.switchChecked);
        };
        SwitchComponent.prototype.switchContainer = function () {
            var klasses = [
                'switch-container',
                this.css ? this.css : '',
                this.labelPosition === 'right' ? 'switch-right' : '',
                this.isDisabled ? 'disabled' : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        SwitchComponent.prototype.switchSpan = function () {
            var klasses = [
                'switch',
                this.isBordered ? 'switch-border' : '',
                this.isAction ? 'switch-action' : '',
                this.size ? "switch-" + this.size : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        return SwitchComponent;
    }());
    SwitchComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SwitchComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SwitchComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: SwitchComponent, selector: "ag-switch", inputs: { label: "label", css: "css", labelPosition: "labelPosition", isDisabled: "isDisabled", isAction: "isAction", isBordered: "isBordered", size: "size", isChecked: "isChecked" }, outputs: { selected: "selected" }, ngImport: i0__namespace, template: "<label [ngClass]=\"switchContainer()\">\n    <span *ngIf=\"labelPosition === 'left'\" class=\"switch-label\">{{\n      label\n    }}</span>\n    <input\n      type=\"checkbox\"\n      [checked]=\"isChecked\"\n      class=\"switch-input\"\n      [disabled]=\"isDisabled\"\n      role=\"switch\"\n      (change)=\"toggleChecked($event)\"\n    />\n    <span [ngClass]=\"switchSpan()\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"labelPosition === 'right'\" class=\"switch-label\">{{\n      label\n    }}</span>\n  </label>", isInline: true, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-input{margin:0;opacity:.0001;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:after{right:.5em}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-right .switch:after{transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-label{position:absolute;top:0;right:0}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:.8!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SwitchComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-switch',
                        template: "<label [ngClass]=\"switchContainer()\">\n    <span *ngIf=\"labelPosition === 'left'\" class=\"switch-label\">{{\n      label\n    }}</span>\n    <input\n      type=\"checkbox\"\n      [checked]=\"isChecked\"\n      class=\"switch-input\"\n      [disabled]=\"isDisabled\"\n      role=\"switch\"\n      (change)=\"toggleChecked($event)\"\n    />\n    <span [ngClass]=\"switchSpan()\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"labelPosition === 'right'\" class=\"switch-label\">{{\n      label\n    }}</span>\n  </label>",
                        styleUrls: ['./switch.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { label: [{
                    type: i0.Input
                }], css: [{
                    type: i0.Input
                }], labelPosition: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], isAction: [{
                    type: i0.Input
                }], isBordered: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], isChecked: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Output
                }] } });

    var TabPanelComponent = /** @class */ (function () {
        function TabPanelComponent() {
            this._title = '';
            this.isActive = false;
        }
        Object.defineProperty(TabPanelComponent.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (t) {
                this._title = t;
            },
            enumerable: false,
            configurable: true
        });
        return TabPanelComponent;
    }());
    TabPanelComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: TabPanelComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TabPanelComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: TabPanelComponent, selector: "ag-tab-panel", inputs: { title: "title", isActive: "isActive" }, ngImport: i0__namespace, template: "<div\n    [hidden]=\"!isActive\"\n    role=\"tabpanel\"\n    [attr.aria-label]=\"title\"\n    class=\"pane\"\n  >\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".tab-list,.tab-list-base{display:flex}.tab-list,.tab-skinned{flex-wrap:wrap;flex-direction:row;padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, 1.25rem);color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-jumbo{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.tab-item:hover,.tab-button:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate;cursor:pointer}.tab-button:disabled{color:var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:.8}.pane{padding:1em}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: TabPanelComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-tab-panel',
                        styleUrls: ['./tabs.css'],
                        template: "<div\n    [hidden]=\"!isActive\"\n    role=\"tabpanel\"\n    [attr.aria-label]=\"title\"\n    class=\"pane\"\n  >\n    <ng-content></ng-content>\n  </div>",
                    }]
            }], propDecorators: { title: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }] } });

    var TabsComponent = /** @class */ (function () {
        function TabsComponent() {
            this.size = '';
            this.isDisabled = false;
            this.isSkinned = true;
            this.isBorderless = false;
            this.selectionChanged = new i0.EventEmitter();
        }
        TabsComponent.prototype.ngAfterContentInit = function () {
            var activeTabs = this.tabPanels.filter(function (tab) { return tab.isActive; });
            if (activeTabs.length === 0) {
                this.selectPanel(this.tabPanels.first);
            }
        };
        TabsComponent.prototype.selectPanel = function (tabPanel) {
            this.tabPanels.toArray().forEach(function (tab) {
                tab.isActive = false;
            });
            tabPanel.isActive = true;
            this.selectionChanged.emit(tabPanel);
        };
        return TabsComponent;
    }());
    TabsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: TabsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TabsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: TabsComponent, selector: "ag-tabs", inputs: { size: "size", disabledOptions: "disabledOptions", isDisabled: "isDisabled", isSkinned: "isSkinned", isBorderless: "isBorderless" }, outputs: { selectionChanged: "selectionChanged" }, queries: [{ propertyName: "tabButtonTemplate", first: true, predicate: ["tabButtonTemplate"], descendants: true }, { propertyName: "tabPanels", predicate: TabPanelComponent }], ngImport: i0__namespace, template: "\n    <div\n      [class.tab-list]=\"isSkinned === true\"\n      [class.tab-list-base]=\"isSkinned === false\"\n      [class.tab-borderless]=\"isBorderless === true\"\n      role=\"tablist\"\n      aria-label=\"Tabs\"\n    >\n      <div\n        *ngFor=\"let panel of tabPanels; index as i\"\n        (click)=\"selectPanel(panel)\"\n      >\n        <ng-container *ngIf=\"!tabButtonTemplate\">\n          <button\n            role=\"tab\"\n            class=\"tab-item tab-button\"\n            [class.active]=\"panel.isActive\"\n            [attr.disabled]=\"\n              isDisabled || disabledOptions?.includes(panel.title) ? true : null\n            \"\n            [class.tab-button-large]=\"size === 'large'\"\n            [class.tab-button-jumbo]=\"size === 'jumbo'\"\n            [attr.aria-selected]=\"panel.isActive\"\n          >\n            {{ panel.title }}\n          </button>\n        </ng-container>\n        <ng-container\n          *ngIf=\"tabButtonTemplate\"\n          [ngTemplateOutlet]=\"tabButtonTemplate\"\n          [ngTemplateOutletContext]=\"{ $implicit: panel, index: i }\"\n        >\n        </ng-container>\n      </div>\n    </div>\n    <ng-content></ng-content>\n  ", isInline: true, styles: [".tab-list,.tab-list-base{display:flex}.tab-list,.tab-skinned{flex-wrap:wrap;flex-direction:row;padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, 1.25rem);color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-jumbo{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.tab-item:hover,.tab-button:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate;cursor:pointer}.tab-button:disabled{color:var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:.8}.pane{padding:1em}\n"], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: TabsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ag-tabs',
                        template: "\n    <div\n      [class.tab-list]=\"isSkinned === true\"\n      [class.tab-list-base]=\"isSkinned === false\"\n      [class.tab-borderless]=\"isBorderless === true\"\n      role=\"tablist\"\n      aria-label=\"Tabs\"\n    >\n      <div\n        *ngFor=\"let panel of tabPanels; index as i\"\n        (click)=\"selectPanel(panel)\"\n      >\n        <ng-container *ngIf=\"!tabButtonTemplate\">\n          <button\n            role=\"tab\"\n            class=\"tab-item tab-button\"\n            [class.active]=\"panel.isActive\"\n            [attr.disabled]=\"\n              isDisabled || disabledOptions?.includes(panel.title) ? true : null\n            \"\n            [class.tab-button-large]=\"size === 'large'\"\n            [class.tab-button-jumbo]=\"size === 'jumbo'\"\n            [attr.aria-selected]=\"panel.isActive\"\n          >\n            {{ panel.title }}\n          </button>\n        </ng-container>\n        <ng-container\n          *ngIf=\"tabButtonTemplate\"\n          [ngTemplateOutlet]=\"tabButtonTemplate\"\n          [ngTemplateOutletContext]=\"{ $implicit: panel, index: i }\"\n        >\n        </ng-container>\n      </div>\n    </div>\n    <ng-content></ng-content>\n  ",
                        styleUrls: ['./tabs.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { tabPanels: [{
                    type: i0.ContentChildren,
                    args: [TabPanelComponent]
                }], size: [{
                    type: i0.Input
                }], disabledOptions: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], isSkinned: [{
                    type: i0.Input
                }], isBorderless: [{
                    type: i0.Input
                }], tabButtonTemplate: [{
                    type: i0.ContentChild,
                    args: ['tabButtonTemplate']
                }], selectionChanged: [{
                    type: i0.Output
                }] } });

    var AgModule = /** @class */ (function () {
        function AgModule() {
        }
        return AgModule;
    }());
    AgModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: AgModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AgModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: AgModule, declarations: [ButtonComponent,
            ButtonGroupComponent,
            CardComponent,
            ChoiceInputComponent,
            HeaderComponent,
            HeaderNavComponent,
            HeaderNavItemComponent,
            InputComponent,
            ProgressComponent,
            SwitchComponent,
            TabsComponent,
            TabPanelComponent], imports: [i1.CommonModule], exports: [ButtonComponent,
            ButtonGroupComponent,
            CardComponent,
            ChoiceInputComponent,
            HeaderComponent,
            HeaderNavComponent,
            HeaderNavItemComponent,
            InputComponent,
            ProgressComponent,
            SwitchComponent,
            TabsComponent,
            TabPanelComponent] });
    AgModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: AgModule, imports: [[i1.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: AgModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule],
                        declarations: [
                            ButtonComponent,
                            ButtonGroupComponent,
                            CardComponent,
                            ChoiceInputComponent,
                            HeaderComponent,
                            HeaderNavComponent,
                            HeaderNavItemComponent,
                            InputComponent,
                            ProgressComponent,
                            SwitchComponent,
                            TabsComponent,
                            TabPanelComponent,
                        ],
                        exports: [
                            ButtonComponent,
                            ButtonGroupComponent,
                            CardComponent,
                            ChoiceInputComponent,
                            HeaderComponent,
                            HeaderNavComponent,
                            HeaderNavItemComponent,
                            InputComponent,
                            ProgressComponent,
                            SwitchComponent,
                            TabsComponent,
                            TabPanelComponent,
                        ],
                    }]
            }] });

    exports.AgModule = AgModule;
    exports.ButtonComponent = ButtonComponent;
    exports.ButtonGroupComponent = ButtonGroupComponent;
    exports.CardComponent = CardComponent;
    exports.ChoiceInputComponent = ChoiceInputComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.HeaderNavComponent = HeaderNavComponent;
    exports.HeaderNavItemComponent = HeaderNavItemComponent;
    exports.InputComponent = InputComponent;
    exports.ProgressComponent = ProgressComponent;
    exports.SwitchComponent = SwitchComponent;
    exports.TabPanelComponent = TabPanelComponent;
    exports.TabsComponent = TabsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=agnostic-angular.umd.js.map
