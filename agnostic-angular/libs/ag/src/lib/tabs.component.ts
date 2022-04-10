import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  TemplateRef,
  ViewChildren
} from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
@Component({
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
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabPanelComponent) tabPanels!: QueryList<TabPanelComponent>;

  // See https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/#configurablecomponentswithtemplatepartialinputs
  @Input()
  tabButtonTemplate?: TemplateRef<any>;

  @Input() size?: string = '';
  @Input() disabledOptions?: string[];
  @Input() isDisabled?: boolean = false;
  @Input() isSkinned?: boolean = true;
  @Input() isBorderless?: boolean = false;
  @Input() isVerticalOrientation?: boolean = false;

  /**
   * This is used to allow consumer to provide their own custom tab buttons like:
   * <ng-template #tabButtonTemplate let-panel let-idx="index">
      <div style="{{idx > 0 ? 'margin-left: -1px' : undefined}}">
        <ag-button
          type="faux"
          [isBordered]="true"
          mode="primary"
          role="tab"
          [attr.aria-selected]="panel.isActive"
          [attr.disabled]="
            isDisabled || disabledOptions?.includes(panel.tabButtonTitle)
              ? true
              : null
          "
          [class.active]="panel.isActive"
          [attr.aria-controls]="panel.panelId"
          [attr.aria-selected]="panel.isActive"
          [attr.tab-index]="panel.isActive ? 0 : -1"
        >
          {{ panel.tabButtonTitle }}
        </ag-button>
      </div>
    </ng-template>
  */
  @ContentChildren('tabButton', { read: ElementRef }) tabButtonRefs!: QueryList<ElementRef>;

  @Output()
  selectionChanged = new EventEmitter();

  ngAfterContentInit() {
    const activeTabs = this.tabPanels.filter((tab) => tab.isActive);
    if (activeTabs.length === 0) {
      this.selectPanel(this.tabPanels.first);
    }
  }

  selectPanel(tabPanel: TabPanelComponent) {
    // First deactivate all tabs, then select passed in tab
    this.tabPanels.toArray().forEach((tab) => {
      tab.isActive = false;
    });
    tabPanel.isActive = true;
    this.selectionChanged.emit(tabPanel);
  }

  focusTab(index: number, direction?: string) {
    console.log('focusTab called with index: ', index, ' and direction: ', direction);
    let i = index;
    if (direction === "asc") {
      i += 1;
    } else if (direction === "desc") {
      i -= 1;
    }
    const tabPanelsArray = this.tabPanels.toArray();
    // Circular navigation
    //
    // If we've went beyond "start" circle around to last
    if (i < 0) {
      i = tabPanelsArray.length - 1;
    } else if (i >= tabPanelsArray.length) {
      // We've went beyond "last" so circle around to first
      i = 0;
    }

    const buttons = this.tabButtonRefs.toArray();
    const nextTabRef = buttons[i];
    const nextTab = nextTabRef ? nextTabRef.nativeElement : null;
    if (nextTab) {
      // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
      // only if we've been supplied a `direction`. Otherwise, nothing left to do.
      if (nextTab.disabled && direction) {
        // Retry with new `i` index going in same direction
        this.focusTab(i, direction);
      } else {
        // Nominal case is to just focs next tab :)
        nextTab.focus();
      }
    }
  }

  handleKeyDown(ev: KeyboardEvent, index: number): void {
    switch (ev.key) {
      case "Up": // These first cases are IEEdge :(
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
