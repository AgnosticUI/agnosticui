import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ag-button',
  template: ` <button
    [type]="getType"
    (click)="onClick.emit($event)"
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
    const isRoundedClass = this.isRounded ? 'btn-rounded' : '';

    return [baseClass, `btn-${this.size}`, modeClass, isBorderedClass, isRoundedClass];
  }
  
  public get getType(): string {
    return this.type;
  }
}
