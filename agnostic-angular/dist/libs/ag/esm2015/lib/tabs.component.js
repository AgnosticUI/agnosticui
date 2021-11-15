import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, Input, Output, EventEmitter, TemplateRef, ViewChildren } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TabsComponent {
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
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: TabsComponent, selector: "ag-tabs", inputs: { tabButtonTemplate: "tabButtonTemplate", size: "size", disabledOptions: "disabledOptions", isDisabled: "isDisabled", isSkinned: "isSkinned", isBorderless: "isBorderless", isVerticalOrientation: "isVerticalOrientation" }, outputs: { selectionChanged: "selectionChanged" }, queries: [{ propertyName: "tabPanels", predicate: TabPanelComponent }], viewQueries: [{ propertyName: "tabButtonRefs", predicate: ["tabButton"], descendants: true }], ngImport: i0, template: `
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
  `, isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media screen and (prefers-reduced-motion: reduce),(update: slow){.tab-button,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: TabsComponent, decorators: [{
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
//# sourceMappingURL=tabs.component.js.map