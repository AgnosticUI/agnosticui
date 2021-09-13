import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'ag-tab',
  styleUrls: ['./tabs.css'],
  template: `<div [hidden]="!active" role="tabpanel" [attr.aria-label]="title" class="pane"><ng-content></ng-content></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() active = false;
}
