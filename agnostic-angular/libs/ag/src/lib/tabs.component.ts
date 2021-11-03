import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  Output,
  EventEmitter,
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
        <div
          *ngFor="let panel of tabPanels; index as i"
          (click)="selectPanel(panel)"
        >
          <ng-container *ngIf="!tabButtonTemplate">
            <button
              role="tab"
              class="tab-item tab-button"
              [class.active]="panel.isActive"
              [attr.disabled]="
                isDisabled || disabledOptions?.includes(panel.tabButtonTitle)
                  ? true
                  : null
              "
              [class.tab-button-large]="size === 'large'"
              [class.tab-button-jumbo]="size === 'jumbo'"
              [attr.aria-controls]="panel.panelId"
              [attr.aria-selected]="panel.isActive"
              [attr.tab-index]="panel.isActive ? 0 : -1"
            >
              {{ panel.tabButtonTitle }}
            </button>
          </ng-container>
          <ng-container
            *ngIf="tabButtonTemplate"
            [ngTemplateOutlet]="tabButtonTemplate"
            [ngTemplateOutletContext]="{ $implicit: panel, index: i }"
          >
          </ng-container>
        </div>
      </div>
      <ng-content></ng-content>
      isVerticalOrientation: {{ isVerticalOrientation }}
    </div>
  `,
  styleUrls: ['./tabs.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabPanelComponent) tabPanels!: QueryList<TabPanelComponent>;

  @Input() size?: string = '';
  @Input() disabledOptions?: string[];
  @Input() isDisabled?: boolean = false;
  @Input() isSkinned?: boolean = true;
  @Input() isBorderless?: boolean = false;
  @Input() isVerticalOrientation?: boolean = false;

  /**
   * This is used to allow consumer to provide their own custom tab buttons like:
   * <ng-template #tabButtonTemplate let-panel let-index>
      <ag-button
        type="faux"
        [isBordered]="true"
        mode="primary"
        role="tab"
        [attr.disabled]="
          isDisabled || disabledOptions?.includes(panel.tabButtonTitle) ? true : null
        "
        [attr.aria-selected]="panel.isActive"
        [attr.aria-controls]="panel.panelId"
        [attr.tab-index]="panel.isActive ? 0 : -1"
      >
        {{ panel.tabButtonTitle }}
      </ag-button>
    </ng-template>
  */
  @ContentChild('tabButtonTemplate')
  tabButtonTemplate: TemplateRef<any> | undefined;

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
}
