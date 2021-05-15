import { Component, Input } from '@angular/core';
@Component({
  selector: 'tab',
  // TODO make this use external CSS instead
  styles: [
    `.pane {
      padding: 1em;
    }`
  ],
  template: `<div [hidden]="!active" class="pane"><ng-content></ng-content></div>`
})

export default class TabComponent {
  @Input() tabTitle!: string;
  @Input() active = false;
}
