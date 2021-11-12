import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ag-disclose',
  template: `<details class="disclose" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`,
  styleUrls: ['./disclose.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscloseComponent {

  @Input() title = "";
  // The <details> open attribute indicates whether the details content will be
  // displayed on page load or not.
  @Input() isOpen = false;
  @Input() isBackground = false;
}
