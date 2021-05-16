import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import Tab from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul class="tab-list" role="tablist">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" class="tab-item" [class.active]="tab.active" role="tab" aria-selected="tab.active">
        <button class="tab-button">{{tab.tabTitle}}</button>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['./tabs.css'],
})

export default class Tabs implements AfterContentInit {
  @ContentChildren(Tab) tabs!: QueryList<Tab>;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab) {
    // First deactivate all tabs, then select passed in tab
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }
}
