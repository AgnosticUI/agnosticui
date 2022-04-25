import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ag-alert',
  template: `<div [ngClass]="alertClasses" role="alert" [attr.aria-atomic]="ariaAtomicValue ? ariaAtomicValue : null" [attr.aria-live]="ariaLiveValue ? ariaLiveValue : null">
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
  @Input() type: 'dark' | 'warning' | 'error' | 'info' | 'success' | '' = '';
  @Input() isAnimationFadeIn = true;
  @Input() isAnimationSlideUp = false;
  @Input() isToast = false;

  public get ariaLiveValue() {
    let ariaLiveValue;
    if (this.isToast && this.type === "error") {
      ariaLiveValue = "assertive";
    } else if (this.isToast) {
      ariaLiveValue = "polite";
    } else {
      ariaLiveValue = undefined;
    }
    return ariaLiveValue;
  };

  public get ariaAtomicValue(): boolean | undefined {
    return this.isToast ? true : undefined;
  }

  public get alertClasses(): string {
    const classes = [
      'alert',
      this.type ? `alert-${this.type}` : '',
      this.isBorderAll ? 'alert-border-all' : '',
      this.isBorderLeft ? 'alert-border-left' : '',
      this.isBorderRight ? 'alert-border-right' : '',
      this.isBorderTop ? 'alert-border-top' : '',
      this.isBorderBottom ? 'alert-border-bottom' : '',
      this.isBlockEnd ? 'alert-end' : '',
      this.isToast ? 'alert-toast-shadow' : '',
      this.isRounded ? 'alert-rounded' : '',
      this.isAnimationFadeIn && !this.isAnimationSlideUp ? 'fade-in' : '',
      !this.isAnimationFadeIn && this.isAnimationSlideUp ? 'slide-up' : '',
      this.isAnimationFadeIn && this.isAnimationSlideUp ? 'slide-up-fade-in' : '',
    ].filter(c => c.length).join(' ');
    return classes;
  }

  public get svgModifierClass(): string {
    return this.type ? `alert-${this.type}-icon` : '';
  }
}
