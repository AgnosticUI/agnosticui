import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HeaderNavComponent {
    get classes() {
        let klasses = ['header-nav', this.css ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderNavComponent, selector: "ag-header-nav", inputs: { css: "css" }, ngImport: i0, template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`, isInline: true, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavComponent, decorators: [{
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
export class HeaderNavItemComponent {
    get classes() {
        let klasses = ['header-nav-item', this.css ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderNavItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderNavItemComponent, selector: "ag-header-nav-item", inputs: { css: "css" }, ngImport: i0, template: `<div [ngClass]="classes"><ng-content></ng-content></div>`, isInline: true, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnosticui-header-color, var(--agnosticui-font-color));text-decoration:none}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnosticui-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderNavItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header-nav-item',
                    template: `<div [ngClass]="classes"><ng-content></ng-content></div>`,
                    styleUrls: ['./headernavitem.css'],
                }]
        }], propDecorators: { css: [{
                type: Input
            }] } });
export class HeaderComponent {
    constructor() {
        this.isSkinned = true;
    }
    get classes() {
        const baseClass = this.isSkinned ? 'header' : 'header-base';
        const isStickyClass = this.isSticky ? 'header-sticky' : '';
        const overrides = this.css ? `${this.css}` : '';
        let klasses = [
            baseClass,
            isStickyClass,
            overrides,
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: HeaderComponent, selector: "ag-header", inputs: { css: "css", isSkinned: "isSkinned", isSticky: "isSticky" }, ngImport: i0, template: `<header [ngClass]="classes">
    <div class="header-content"><ng-content></ng-content></div>
  </header>
  `, isInline: true, styles: [".header,.header-base{display:flex;flex-direction:row;align-items:center}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnosticui-header-background-color, var(--agnosticui-light));box-shadow:var(--agnosticui-header-box-shadow-hor, 0) var(--agnosticui-header-box-shadow-ver, 1px) var(--agnosticui-header-box-shadow-blur, 5px) var(--agnosticui-header-box-shadow-spread, 2px) var(--agnosticui-header-box-shadow-color, rgba(0, 0, 0, .1));font-family:var(--agnosticui-header-font-family, var(--agnosticui-font-family));border-bottom:1px solid var(--agnosticui-header-border-color, var(--agnosticui-gray-light));padding-block-start:var(--agnosticui-vertical-pad, .5rem);padding-block-end:var(--agnosticui-vertical-pad, .5rem)}.header-content{width:var(--agnosticui-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:space-around;align-items:center;flex-wrap:wrap}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-header',
                    template: `<header [ngClass]="classes">
    <div class="header-content"><ng-content></ng-content></div>
  </header>
  `,
                    styleUrls: ['./header.css'],
                }]
        }], propDecorators: { css: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isSticky: [{
                type: Input
            }] } });
//# sourceMappingURL=header.component.js.map