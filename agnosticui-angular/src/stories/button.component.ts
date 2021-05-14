import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ag-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./buttonstorybook.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Optional click handler
   */
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
