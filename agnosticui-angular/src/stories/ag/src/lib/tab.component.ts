import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'ag-tab',
  styleUrls: ['./tabs.css'],
  template: `<div [hidden]="!active" role="tabpanel" [attr.aria-label]="title()" class="pane"><ng-content></ng-content></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class TabComponent {
  @Input() tabTitle!: string;
  @Input() active = false;
  title() {
    return this.tabTitle;
  }
}
