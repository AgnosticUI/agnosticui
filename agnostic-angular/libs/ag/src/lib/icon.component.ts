import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ag-icon',
  template: `<span [class]="iconClasses"><ng-content></ng-content></span>`,
  styleUrls: ['./icon.css', './icon.host.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // We receive SVG as Slot. But, we need width CSS applied to the SVG itself
  // in Safari; so we need to enable global CSS e.g. `.icon-24 > svg { width: 24px }`
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  @Input() size?: 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 64 = 18;
  @Input() type: 'warning' | 'error' | 'success' | 'info' | '' = '';
  @Input() isSkinned?: boolean = true;

  get iconClasses() {
    return [
      'icon',
      this.isSkinned ? 'icon' : 'icon-base',
      this.size ? `icon-${this.size}` : '',
      this.type ? `icon-${this.type}` : '',
    ]
      .filter((c) => c)
      .join(' ');
  }
}
