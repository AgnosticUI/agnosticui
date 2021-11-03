import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-tab-panel',
  styleUrls: ['./tabs.css'],
  template: `<div [id]="panelId" [hidden]="!isActive" role="tabpanel">
    <ng-content></ng-content>
  </div>`,
})
export class TabPanelComponent {
  private _tabButtonTitle = '';
  @Input()
  set tabButtonTitle(t: string) {
    this._tabButtonTitle = t;
  }
  get tabButtonTitle() {
    return this._tabButtonTitle;
  }
  @Input() isActive = false;
  @Input() panelId!: string;
}
