import { ElementRef, ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ag-icon',
  template: `<span [class]="iconClasses"><ng-content></ng-content></span>`,
  styleUrls: ['./icon.css', 'icon-svg.css', './icon.host.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // We receive SVG as Slot. But, we need width CSS applied to the SVG itself
  // in Safari; so we need to enable global CSS e.g. `.icon-24 > svg.icon-svg-24`
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnInit {
  @Input() size?: 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 64 = 18;
  @Input() type: 'warning' | 'error' | 'success' | 'info' | '' = '';
  @Input() isSkinned?: boolean = true;

  constructor(public $element: ElementRef<HTMLSpanElement>) { }

  ngOnInit() {
    const svg = this.$element.nativeElement.querySelector('svg');
    svg?.classList.add('icon-svg');
    if (this.size) svg?.classList.add(`icon-svg-${this.size}`);
    if (this.type) svg?.classList.add(`icon-svg-${this.type}`);
  }
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
