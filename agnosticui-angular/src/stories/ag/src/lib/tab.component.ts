import { Component, Input} from '@angular/core';
@Component({
  selector: 'ag-tab',
  styleUrls: ['./tabs.css'],
  template: `<div [hidden]="!isActive" role="tabpanel" [attr.aria-label]="title" class="pane"><ng-content></ng-content></div>`,
})

export default class TabComponent {
  private _title: string = '';
  @Input()
  set title(t: string) {
    this._title = t;
  };
  get title() {
    return this._title;
  }
  @Input() isActive = false;
}
