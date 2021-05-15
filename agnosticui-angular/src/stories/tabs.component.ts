import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import Tab from './tab.component';

@Component({
  selector: 'tabs',
  // TODO -- consider refactoring this to use Buttons so we get free a11y
  template: `
    <ul class="tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" class="tab-item" [class.active]="tab.active">
        <button class="tab-link">{{tab.tabTitle}}</button>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['./tabs.css'],
})

export default class Tabs implements AfterContentInit {
  @ContentChildren(Tab) tabs!: QueryList<Tab>;

  ngAfterContentInit() {
    console.log('tabs: ', this.tabs)
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
