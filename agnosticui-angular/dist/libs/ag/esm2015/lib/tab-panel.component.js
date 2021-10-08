import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TabPanelComponent {
    constructor() {
        this._title = '';
        this.isActive = false;
    }
    set title(t) {
        this._title = t;
    }
    get title() {
        return this._title;
    }
}
TabPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: TabPanelComponent, selector: "ag-tab-panel", inputs: { title: "title", isActive: "isActive" }, ngImport: i0, template: `<div
    [hidden]="!isActive"
    role="tabpanel"
    [attr.aria-label]="title"
    class="pane"
  >
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".tab-list,.tab-list-base{display:flex}.tab-list,.tab-skinned{flex-wrap:wrap;flex-direction:row;padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnosticui-tabs-border-size, 1px) solid var(--agnosticui-tabs-bgcolor, var(--agnosticui-gray-light));transition-property:all;transition-duration:var(--agnosticui-timing-medium)}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnosticui-vertical-pad, .5rem);padding-block-end:var(--agnosticui-vertical-pad, .5rem);padding-inline-start:var(--agnosticui-side-padding, .75rem);padding-inline-end:var(--agnosticui-side-padding, .75rem);font-family:var(--agnosticui-btn-font-family, var(--agnosticui-font-family));font-weight:var(--agnosticui-btn-font-weight, 400);font-size:var(--agnosticui-btn-font-size, 1rem);line-height:var(--agnosticui-line-height, 1.25rem);color:var(--agnosticui-tabs-primary, var(--agnosticui-primary));text-decoration:none;transition:color var(--agnosticui-timing-fast) ease-in-out,background-color var(--agnosticui-timing-fast) ease-in-out,border-color var(--agnosticui-timing-fast) ease-in-out}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnosticui-input-side-padding) * 1.25);padding-block-end:calc(var(--agnosticui-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnosticui-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnosticui-input-side-padding) * 1.75)}.tab-button-jumbo{padding-block-start:calc(var(--agnosticui-input-side-padding) * 2);padding-block-end:calc(var(--agnosticui-input-side-padding) * 2);padding-inline-start:calc(var(--agnosticui-input-side-padding) * 3);padding-inline-end:calc(var(--agnosticui-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnosticui-tabs-radius, .25rem);border-top-right-radius:var(--agnosticui-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnosticui-gray-dark);background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.tab-item:hover,.tab-button:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate;cursor:pointer}.tab-button:disabled{color:var(--agnosticui-tabas-disabled-bg, var(--agnosticui-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:.8}.pane{padding:1em}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-tab-panel',
                    styleUrls: ['./tabs.css'],
                    template: `<div
    [hidden]="!isActive"
    role="tabpanel"
    [attr.aria-label]="title"
    class="pane"
  >
    <ng-content></ng-content>
  </div>`,
                }]
        }], propDecorators: { title: [{
                type: Input
            }], isActive: [{
                type: Input
            }] } });
//# sourceMappingURL=tab-panel.component.js.map