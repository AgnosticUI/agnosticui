import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ag-button-group',
  template: `<div [attr.role]="group" [attr.aria-label]="getAriaLabel" [ngClass]="classes">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./button.css'],
})

export default class ButtonGroupComponent {
  @Input() css?: string;
  @Input() ariaLabel: string | undefined;
  public get getAriaLabel(): string {
    const label = this.ariaLabel ? this.ariaLabel : 'button group element';
    return label;
  }

  public get classes(): string {
    const cssClass = this.css ? this.css : '';
    return [
      'btn-group',
      cssClass, 
    ].join(' ');
  }
}
