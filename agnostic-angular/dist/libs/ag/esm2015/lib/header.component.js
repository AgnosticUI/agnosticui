import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HeaderNavComponent {
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
export class HeaderNavItemComponent {
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
export class HeaderComponent {
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
  </header> `, isInline: true, styles: [".header,.header-base{display:block}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}.header-content-start{justify-content:flex-start}.header-content-end{justify-content:flex-end}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
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
//# sourceMappingURL=header.component.js.map