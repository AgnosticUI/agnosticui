import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ag-button',
  template: ` <button
    [type]="getType"
    (click)="onClick.emit($event)"
    [disabled]="getDisabled"
    [ngClass]="classes"
  >
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  @Input()
  mode?: 'primary' | 'secondary' = undefined;
  
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  type: 'button' | 'reset' | 'submit' = 'button';
  
  @Input() css?: string;

  @Input()
  isDisabled?: true | false = false;

  @Input()
  isBlank?: true | false = false;

  @Input()
  isRaised?: true | false = false;

  @Input()
  isCircle?: true | false = false;

  @Input()
  isBlock?: true | false = false;

  @Input()
  isBordered?: true | false = false;

  @Input()
  isSkinned?: true | false = true;
  
  @Input()
  isRounded?: true | false = true;

  /**
   * Optional click handler
   */
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const baseClass = this.isSkinned ? `btn` : `btn-base`;
    const modeClass = this.mode ? `btn-${this.mode}` : '';
    const isBorderedClass = this.isBordered ? 'btn-bordered' : '';
    const isBlankClass = this.isBlank ? 'btn-blank' : '';
    const isRaisedClass = this.isRaised ? 'btn-raised' : '';
    const isCircleClass = this.isCircle? 'btn-circle' : '';
    const isBlockClass = this.isBlock ? 'btn-block' : '';
    const isRoundedClass = this.isRounded ? 'btn-rounded' : '';
    const overrides = this.css ? `${this.css}` : '';

    return [
      baseClass, 
      `btn-${this.size}`,
      modeClass,
      isBorderedClass,
      isCircleClass,
      isRoundedClass,
      isBlankClass,
      isRaisedClass,
      isBlockClass,
      overrides,
    ];
  }
  
  public get getDisabled(): boolean {
    return this.isDisabled || false;
  }

  public get getType(): string {
    return this.type;
  }
}
