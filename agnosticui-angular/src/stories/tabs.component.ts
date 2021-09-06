import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import Tab from './tab.component';

/*
<div class="tabs">
  <div role="tablist" aria-label="Sample Tabs">
    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0">
          First Tab
        </button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
          Second Tab
        </button>
    <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">
          Third Tab
        </button>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>



      <div *ngFor="let tab of tabs" (click)="selectTab(tab)" class="tab-item" [class.active]="tab.active" role="tab" [attr.aria-selected]="tab.active">
        <button class="tab-button">{{tab.tabTitle}}</button>
      </div>
*/

@Component({
  selector: 'ag-tabs',
  template: `
    <div class="tab-list" role="tablist" aria-label="Tabs">
      <button *ngFor="let tab of tabs" (click)="selectTab(tab)" class="tab-item tab-button" [class.active]="tab.active" role="tab" [attr.aria-selected]="tab.active">
        {{tab.tabTitle}}
      </button>
    </div>
    <ng-content></ng-content>
  `,
  styleUrls: ['./tabs.css'],
})

export default class TabsComponent implements AfterContentInit {
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
