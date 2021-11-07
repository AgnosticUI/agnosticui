import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ag-icon',
  template: `<span [class]="iconClasses"><ng-content></ng-content></span>`,
  styleUrls: ['./icon.css', './icon.host.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() size: '14' | '16' | '18' | '20' | '24' | '32' | '36' | '40' | '48' | '56' | '64' = '24';
  @Input() type: 'warning' | 'error' | 'success' | 'info' | '' = '';
  get iconClasses() {
    return [
      'icon',
      this.size ? `icon-${this.size}` : '',
      this.type ? `icon-${this.type}` : '',
    ].filter(c => c).join(' ');
  }
}
