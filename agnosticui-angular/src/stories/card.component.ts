import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-card',
  template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./card.css'],
})

export default class Card {
  @Input() css?: string;
  @Input() isAnimated?: boolean;
  @Input() isSkinned?: boolean = true;
  @Input() isStacked?: boolean;
  public get classes(): string {
  // classes() {
    const baseClass = this.isSkinned ? 'card' : 'card-base';
    const isAnimatedClass = this.isAnimated ? 'card-animated' : '';
    const isStackedClass = this.isStacked ? 'card-stacked' : '';
    const overrides = this.css ? `${this.css}` : '';
    return [
      baseClass,
      isAnimatedClass,
      isStackedClass,
      overrides,
    ].join(' ');
  }
}
