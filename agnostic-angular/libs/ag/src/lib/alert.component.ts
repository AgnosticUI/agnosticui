import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ag-alert',
  template: `<div [ngClass]="alertClasses" role="alert">
    <svg
      class="alert-icon"
      [ngClass]="svgModifierClass"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        fill="currentColor"
        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      ></path>
    </svg>
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./alert.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() isRounded = false;
  @Input() isBorderAll = false;
  @Input() isBorderLeft = false;
  @Input() isBorderRight = false;
  @Input() isBorderTop = false;
  @Input() isBorderBottom = false;
  @Input() isBlockEnd = false;
  @Input() type: 'warning' | 'error' | 'info' | 'success' | '' = '';

  public get alertClasses(): string {
    console.log('is rounded: ', this.isRounded)
    const classes = [
      'alert',
      this.type ? `alert-${this.type}` : '',
      this.isBorderAll ? 'alert-border-all' : '',
      this.isBorderLeft ? 'alert-border-left' : '',
      this.isBorderRight ? 'alert-border-right' : '',
      this.isBorderTop ? 'alert-border-top' : '',
      this.isBorderBottom ? 'alert-border-bottom' : '',
      this.isBlockEnd ? 'alert-end' : '',
      this.isRounded ? 'alert-rounded' : '',
    ].filter(c => c.length).join(' ');
    console.log('classes: ', classes)
    return classes;
  }

  public get svgModifierClass(): string {
    return this.type ? `alert-${this.type}-icon` : '';
  }
}
