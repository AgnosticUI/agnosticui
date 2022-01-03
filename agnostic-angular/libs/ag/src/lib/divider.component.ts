import { Input, ChangeDetectionStrategy, HostBinding, Component } from '@angular/core';

@Component({
  selector: 'ag-divider',
  template: `<div [class]="dividerClasses">
    <div *ngIf="hasContent" class="divider-content">
      <ng-content></ng-content>
    </div>
  </div>`,
  styleUrls: ['./divider.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  @Input() hasContent?: boolean = false;
  /**
   * For Angular, we need to conditionally add the .flex class to the host
   * if we're in vertical orientation so that our .divider-vertical classes
   * are direct children of a flex container since .direct-vertical has:
   * height: auto; flex-direction: column; align-self: stretch;
   * https://stackoverflow.com/a/39161705
   */
  @HostBinding('class.flex') @Input() isVertical?: boolean = false;
  @Input() justify?: 'start' | 'end' | '';
  @Input() type?: 'info' | 'success' | 'error' | 'warning' | '';
  @Input() size?: 'small' | 'large' | 'xlarge' | '';
  get dividerClasses() {
    return [
      'divider',
      this.isVertical ? 'divider-vertical' : '',
      this.type ? `divider-${this.type}` : '',
      this.size ? `divider-${this.size}` : '',
      this.justify ? `divider-justify-${this.justify}` : '',
    ]
      .filter((c) => c)
      .join(' ');
  }
}
