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
TabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TabsComponent, selector: "ag-tabs", inputs: { tabButtonTemplate: "tabButtonTemplate", size: "size", disabledOptions: "disabledOptions", isDisabled: "isDisabled", isSkinned: "isSkinned", isBorderless: "isBorderless", isVerticalOrientation: "isVerticalOrientation" }, outputs: { selectionChanged: "selectionChanged" }, queries: [{ propertyName: "tabPanels", predicate: TabPanelComponent }], viewQueries: [{ propertyName: "tabButtonRefs", predicate: ["tabButton"], descendants: true }], ngImport: i0, template: `
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
                type: ViewChildren,
                args: ['tabButton']
            }], selectionChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2FnL3NyYy9saWIvdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWixXQUFXLEVBQ1gsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFpRDFELE1BQU0sT0FBTyxhQUFhO0lBaEQxQjtRQXVEVyxTQUFJLEdBQVksRUFBRSxDQUFDO1FBRW5CLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFhLElBQUksQ0FBQztRQUMzQixpQkFBWSxHQUFhLEtBQUssQ0FBQztRQUMvQiwwQkFBcUIsR0FBYSxLQUFLLENBQUM7UUE4QmpELHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FpR3ZDO0lBL0ZDLGtCQUFrQjtRQUNoQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUEyQjtRQUVyQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFD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LE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDUjtnQkFDRSxPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7MEdBMUlVLGFBQWE7OEZBQWIsYUFBYSxrV0FDUCxpQkFBaUIsNEhBL0N4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUOzJGQUlVLGFBQWE7a0JBaER6QixTQUFTOytCQUNFLFNBQVMsWUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENULG1CQUVnQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUdYLFNBQVM7c0JBQTVDLGVBQWU7dUJBQUMsaUJBQWlCO2dCQUkzQixpQkFBaUI7c0JBRHZCLEtBQUs7Z0JBR0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQTJCcUIsYUFBYTtzQkFBdkMsWUFBWTt1QkFBQyxXQUFXO2dCQUd6QixnQkFBZ0I7c0JBRGYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vdGFiLXBhbmVsLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy10YWJzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFic1wiIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cImlzVmVydGljYWxPcmllbnRhdGlvbiA9PT0gdHJ1ZVwiPlxuICAgICAgPGRpdlxuICAgICAgICBbY2xhc3MudGFiLWxpc3RdPVwiaXNTa2lubmVkID09PSB0cnVlXCJcbiAgICAgICAgW2NsYXNzLnRhYi1saXN0LWJhc2VdPVwiaXNTa2lubmVkID09PSBmYWxzZVwiXG4gICAgICAgIFtjbGFzcy50YWItYm9yZGVybGVzc109XCJpc0JvcmRlcmxlc3MgPT09IHRydWVcIlxuICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUYWJzXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcGFuZWwgb2YgdGFiUGFuZWxzOyBpbmRleCBhcyBpXCJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0UGFuZWwocGFuZWwpXCJcbiAgICAgICAgICAoa2V5ZG93bik9XCJoYW5kbGVLZXlEb3duKCRldmVudCwgaSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGFiQnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAjdGFiQnV0dG9uXG4gICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRhYi1pdGVtIHRhYi1idXR0b25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInBhbmVsLmlzQWN0aXZlXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiXG4gICAgICAgICAgICAgICAgaXNEaXNhYmxlZCB8fCBkaXNhYmxlZE9wdGlvbnM/LmluY2x1ZGVzKHBhbmVsLnRhYkJ1dHRvblRpdGxlKVxuICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgW2NsYXNzLnRhYi1idXR0b24tbGFyZ2VdPVwic2l6ZSA9PT0gJ2xhcmdlJ1wiXG4gICAgICAgICAgICAgIFtjbGFzcy50YWItYnV0dG9uLXhsYXJnZV09XCJzaXplID09PSAneGxhcmdlJ1wiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwicGFuZWwucGFuZWxJZFwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwicGFuZWwuaXNBY3RpdmVcIlxuICAgICAgICAgICAgICBbYXR0ci50YWItaW5kZXhdPVwicGFuZWwuaXNBY3RpdmUgPyAwIDogLTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBwYW5lbC50YWJCdXR0b25UaXRsZSB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWJCdXR0b25UZW1wbGF0ZSA/IHRhYkJ1dHRvblRlbXBsYXRlIDogZGVmYXVsdFRhYkJ1dHRvblwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHBhbmVsLCBpbmRleDogaSB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RhYnMuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiUGFuZWxDb21wb25lbnQpIHRhYlBhbmVscyE6IFF1ZXJ5TGlzdDxUYWJQYW5lbENvbXBvbmVudD47XG5cbiAgLy8gU2VlIGh0dHBzOi8vYmxvZy5hbmd1bGFyLXVuaXZlcnNpdHkuaW8vYW5ndWxhci1uZy10ZW1wbGF0ZS1uZy1jb250YWluZXItbmd0ZW1wbGF0ZW91dGxldC8jY29uZmlndXJhYmxlY29tcG9uZW50c3dpdGh0ZW1wbGF0ZXBhcnRpYWxpbnB1dHNcbiAgQElucHV0KClcbiAgcHVibGljIHRhYkJ1dHRvblRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBzaXplPzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkT3B0aW9ucz86IHN0cmluZ1tdO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1NraW5uZWQ/OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNCb3JkZXJsZXNzPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1ZlcnRpY2FsT3JpZW50YXRpb24/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCB0byBhbGxvdyBjb25zdW1lciB0byBwcm92aWRlIHRoZWlyIG93biBjdXN0b20gdGFiIGJ1dHRvbnMgbGlrZTpcbiAgICogPG5nLXRlbXBsYXRlICN0YWJCdXR0b25UZW1wbGF0ZSBsZXQtcGFuZWwgbGV0LWlkeD1cImluZGV4XCI+XG4gICAgICA8ZGl2IHN0eWxlPVwie3tpZHggPiAwID8gJ21hcmdpbi1sZWZ0OiAtMXB4JyA6IHVuZGVmaW5lZH19XCI+XG4gICAgICAgIDxhZy1idXR0b25cbiAgICAgICAgICB0eXBlPVwiZmF1eFwiXG4gICAgICAgICAgW2lzQm9yZGVyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgbW9kZT1cInByaW1hcnlcIlxuICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwicGFuZWwuaXNBY3RpdmVcIlxuICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cIlxuICAgICAgICAgICAgaXNEaXNhYmxlZCB8fCBkaXNhYmxlZE9wdGlvbnM/LmluY2x1ZGVzKHBhbmVsLnRhYkJ1dHRvblRpdGxlKVxuICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInBhbmVsLmlzQWN0aXZlXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cInBhbmVsLnBhbmVsSWRcIlxuICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwicGFuZWwuaXNBY3RpdmVcIlxuICAgICAgICAgIFthdHRyLnRhYi1pbmRleF09XCJwYW5lbC5pc0FjdGl2ZSA/IDAgOiAtMVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBwYW5lbC50YWJCdXR0b25UaXRsZSB9fVxuICAgICAgICA8L2FnLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICovXG4gIEBWaWV3Q2hpbGRyZW4oJ3RhYkJ1dHRvbicpIHRhYkJ1dHRvblJlZnMhOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0aGlzLnRhYlBhbmVscy5maWx0ZXIoKHRhYikgPT4gdGFiLmlzQWN0aXZlKTtcbiAgICBpZiAoYWN0aXZlVGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0UGFuZWwodGhpcy50YWJQYW5lbHMuZmlyc3QpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFBhbmVsKHRhYlBhbmVsOiBUYWJQYW5lbENvbXBvbmVudCkge1xuICAgIC8vIEZpcnN0IGRlYWN0aXZhdGUgYWxsIHRhYnMsIHRoZW4gc2VsZWN0IHBhc3NlZCBpbiB0YWJcbiAgICB0aGlzLnRhYlBhbmVscy50b0FycmF5KCkuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICB0YWIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0YWJQYW5lbC5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkLmVtaXQodGFiUGFuZWwpO1xuICB9XG5cbiAgZm9jdXNUYWIoaW5kZXg6IG51bWJlciwgZGlyZWN0aW9uPzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ2ZvY3VzVGFiIGNhbGxlZCB3aXRoIGluZGV4OiAnLCBpbmRleCwgJyBhbmQgZGlyZWN0aW9uOiAnLCBkaXJlY3Rpb24pO1xuICAgIGxldCBpID0gaW5kZXg7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJhc2NcIikge1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRlc2NcIikge1xuICAgICAgaSAtPSAxO1xuICAgIH1cbiAgICBjb25zdCB0YWJQYW5lbHNBcnJheSA9IHRoaXMudGFiUGFuZWxzLnRvQXJyYXkoKTtcbiAgICAvLyBDaXJjdWxhciBuYXZpZ2F0aW9uXG4gICAgLy9cbiAgICAvLyBJZiB3ZSd2ZSB3ZW50IGJleW9uZCBcInN0YXJ0XCIgY2lyY2xlIGFyb3VuZCB0byBsYXN0XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBpID0gdGFiUGFuZWxzQXJyYXkubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gdGFiUGFuZWxzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAvLyBXZSd2ZSB3ZW50IGJleW9uZCBcImxhc3RcIiBzbyBjaXJjbGUgYXJvdW5kIHRvIGZpcnN0XG4gICAgICBpID0gMDtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy50YWJCdXR0b25SZWZzLnRvQXJyYXkoKTtcbiAgICBjb25zdCBuZXh0VGFiUmVmID0gYnV0dG9uc1tpXTtcbiAgICBjb25zdCBuZXh0VGFiID0gbmV4dFRhYlJlZiA/IG5leHRUYWJSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKG5leHRUYWIpIHtcbiAgICAgIC8vIEVkZ2UgY2FzZTogV2UgaGl0IGEgdGFiIGJ1dHRvbiB0aGF0J3MgYmVlbiBkaXNhYmxlZC4gSWYgc28sIHdlIHJlY3Vyc2UsIGJ1dFxuICAgICAgLy8gb25seSBpZiB3ZSd2ZSBiZWVuIHN1cHBsaWVkIGEgYGRpcmVjdGlvbmAuIE90aGVyd2lzZSwgbm90aGluZyBsZWZ0IHRvIGRvLlxuICAgICAgaWYgKG5leHRUYWIuZGlzYWJsZWQgJiYgZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIFJldHJ5IHdpdGggbmV3IGBpYCBpbmRleCBnb2luZyBpbiBzYW1lIGRpcmVjdGlvblxuICAgICAgICB0aGlzLmZvY3VzVGFiKGksIGRpcmVjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb21pbmFsIGNhc2UgaXMgdG8ganVzdCBmb2NzIG5leHQgdGFiIDopXG4gICAgICAgIG5leHRUYWIuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGV2OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldi5rZXkpIHtcbiAgICAgIGNhc2UgXCJVcFwiOiAvLyBUaGVzZSBmaXJzdCBjYXNlcyBhcmUgSUVFZGdlIDooXG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsT3JpZW50YXRpb24pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzVGFiKGluZGV4LCBcImRlc2NcIik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRG93blwiOlxuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsT3JpZW50YXRpb24pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzVGFiKGluZGV4LCBcImFzY1wiKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJMZWZ0XCI6XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsT3JpZW50YXRpb24pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzVGFiKGluZGV4LCBcImRlc2NcIik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiUmlnaHRcIjpcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsT3JpZW50YXRpb24pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzVGFiKGluZGV4LCBcImFzY1wiKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICBjYXNlIFwiQXJyb3dIb21lXCI6XG4gICAgICAgIHRoaXMuZm9jdXNUYWIoMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgY2FzZSBcIkFycm93RW5kXCI6XG4gICAgICAgIHRoaXMuZm9jdXNUYWIodGhpcy50YWJQYW5lbHMudG9BcnJheSgpLmxlbmd0aCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgIHRoaXMuZm9jdXNUYWIoaW5kZXgpO1xuICAgICAgICB0aGlzLnNlbGVjdFBhbmVsKHRoaXMudGFiUGFuZWxzLnRvQXJyYXkoKVtpbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIl19