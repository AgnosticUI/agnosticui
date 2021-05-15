import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ag-button',
  template: `<button
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
  @Input() mode: 'primary' | 'secondary' | undefined = undefined;
  @Input() type?: 'button' | 'reset' | 'submit' = 'button';
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Input() css?: string;
  @Input() isDisabled?: true | false = false;
  @Input() isSkinned?: boolean;
  @Input() isBlank?: boolean;
  @Input() isRaised?: boolean;
  @Input() isCircle?: boolean;
  @Input() isBlock?: boolean;
  @Input() isBordered?: boolean;
  @Input() isRounded?: boolean;
  @Output() onClick = new EventEmitter<boolean>();
  
  public get classes(): string {
    const baseClass = this.isSkinned !== false ? `btn` : `btn-base`;
    const modeClass = this.mode? `btn-${this.mode}` : '';
    const isBlankClass = this.isBlank === true ? 'btn-blank' : '';
    const isBorderedClass = this.isBordered === true ? 'btn-bordered' : '';
    const isRaisedClass = this.isRaised === true ? 'btn-raised' : '';
    const isCircleClass = this.isCircle === true ? 'btn-circle' : '';
    const isBlockClass = this.isBlock === true ? 'btn-block' : '';
    const isRoundedClass = this.isRounded === true ? 'btn-rounded' : '';
    const overrides = this.css ? `${this.css}` : '';
    const sizeClass = this.size ? `btn-${this.size}` : 'btn-medium';

    return [
      baseClass, 
      modeClass,
      isBlankClass,
      sizeClass,
      isBorderedClass,
      isCircleClass,
      isRoundedClass,
      isRaisedClass,
      isBlockClass,
      overrides,
    ].join(' ');
  }
  
  public get getDisabled(): boolean {
    return this.isDisabled || false;
  }

  public get getType(): string {
    return this.type ? this.type : 'button';
  }
}

