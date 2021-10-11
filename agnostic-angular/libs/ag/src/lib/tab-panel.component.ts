import { Component, Input} from '@angular/core';
@Component({
  selector: 'ag-tab-panel',
  styleUrls: ['./tabs.css'],
  template: `<div
    [hidden]="!isActive"
    role="tabpanel"
    [attr.aria-label]="title"
  >
    <ng-content></ng-content>
  </div>`,
})
export class TabPanelComponent {
  private _title = '';
  @Input()
  set title(t: string) {
    this._title = t;
  }
  get title() {
    return this._title;
  }
  @Input() isActive = false;
}
