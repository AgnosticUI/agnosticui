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
  EventEmitter
} from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
@Component({
  selector: 'ag-tabs',
  template: `
    <div class="tab-list" role="tablist" aria-label="Tabs">
      <div
        *ngFor="let panel of tabPanels; index as i"
        (click)="selectPanel(panel)"
      >
        <ng-container *ngIf="!tabButtonTemplate">
          <button
            role="tab"
            class="tab-item tab-button"
            [class.active]="panel.isActive"
            [class.tab-button-large]="size === 'large'"
            [class.tab-button-jumbo]="size === 'jumbo'"
            [attr.aria-selected]="panel.isActive"
          >
            {{ panel.title }}
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
  `,
  styleUrls: ['./tabs.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabPanelComponent) tabPanels!: QueryList<TabPanelComponent>;

  @Input() size?: string = '';

  /**
   * This is used to allow consumer to provide their own custom tab buttons like:
   * <ng-template #tabButtonTemplate let-tab let-index>
      <ag-button
        type="faux"
        [isBordered]="true"
        mode="primary"
        role="tab"
        [attr.aria-selected]="tab.isActive"
      >
        {{ tab.title }}
      </ag-button>
    </ng-template>
  */
  @ContentChild('tabButtonTemplate')
  tabButtonTemplate: TemplateRef<any> | undefined;

  @Output()
  selectionChanged = new EventEmitter();

  ngAfterContentInit() {
    let activeTabs = this.tabPanels.filter((tab) => tab.isActive);
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
