import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ag-card',
  template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() css?: string;
  @Input() type?: "success" | "info" | "warning" | "error";
  @Input() isAnimated?: boolean;
  @Input() isSkinned?: boolean = true;
  @Input() isStacked?: boolean;
  @Input() isShadow?: boolean;
  @Input() isRounded?: boolean;
  @Input() isBorder?: boolean;

  public get classes(): string {
    // classes() {
    const baseClass = this.isSkinned ? 'card' : 'card-base';
    const isAnimatedClass = this.isAnimated ? 'card-animated' : '';
    const isStackedClass = this.isStacked ? 'card-stacked' : '';
    const isShadowClass = this.isShadow ? 'card-shadow' : '';
    const isRoundedClass = this.isRounded ? 'card-rounded' : '';
    const isBorderClass = this.isBorder ? 'card-border' : '';
    const typeClass = this.type ? `card-${this.type}` : '';

    const overrides = this.css ? `${this.css}` : '';
    return [
      baseClass,
      typeClass,
      isAnimatedClass,
      isStackedClass,
      isShadowClass,
      isRoundedClass,
      isBorderClass,
      overrides,
    ].join(' ');
  }
}
