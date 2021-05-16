import { Component, Input } from '@angular/core';
@Component({
  selector: 'tab',
  styleUrls: ['./tabs.css'],
  template: `<div [hidden]="!active" role="tabpanel" [attr.aria-labelledby]="title()" class="pane"><ng-content></ng-content></div>`
})

export default class TabComponent {
  @Input() tabTitle!: string;
  @Input() active = false;
  title() {
    return this.tabTitle || '';
  }
}
