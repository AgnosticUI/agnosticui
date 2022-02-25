import { Component, Input } from "@angular/core";

@Component({
  selector: 'ag-toast',
  template: `<ag-alert
    *ngIf="isOpen"
    [isToast]="true"
    [isRounded]="isRounded"
    [isBorderAll]="isBorderAll"
    [isBorderLeft]="isBorderLeft"
    [isBorderRight]="isBorderRight"
    [isBorderTop]="isBorderTop"
    [isBorderBottom]="isBorderBottom"
    [isBlockEnd]="isBlockEnd"
    [type]="type"
    [isAnimationFadeIn]="isAnimationFadeIn"
    [isAnimationSlideUp]="isAnimationSlideUp"
    [type]="type"
  >
      <ng-content></ng-content>
    </ag-alert>`,
})
export class ToastComponent {
  @Input() isOpen?: boolean = true;

  // Alert props. Is way to remove duplicate alert Input() props?
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
}
