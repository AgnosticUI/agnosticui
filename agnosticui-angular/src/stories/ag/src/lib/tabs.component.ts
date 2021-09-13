import { AfterContentInit, Component, ContentChildren, QueryList, ChangeDetectionStrategy, Input } from '@angular/core';
import Tab from './tab.component';
@Component({
  selector: 'ag-tabs',
  template: `
    <div class="tab-list" role="tablist" aria-label="Tabs">
      <button
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        class="tab-item tab-button"
        [class.active]="tab.isActive"
        [class.tab-button-large]="size === 'large'"
        [class.tab-button-jumbo]="size === 'jumbo'"
        role="tab"
        [attr.aria-selected]="tab.isActive">
        {{tab.title}}
      </button>
    </div>
    <ng-content></ng-content>
  `,
  styleUrls: ['./tabs.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class TabsComponent implements AfterContentInit {
  @ContentChildren(Tab) tabs!: QueryList<Tab>;
  @Input() size?: string = '';

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.isActive);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab) {
    // First deactivate all tabs, then select passed in tab
    this.tabs.toArray().forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }
}
