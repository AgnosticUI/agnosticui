import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'ag-button',
  template: ` <button
      div
      *ngIf="getType !== 'faux'; else useFauxDiv"
      [type]="getType"
      (click)="handleClick.emit($event)"
      [disabled]="getDisabled"
      [class]="classes"
    >
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </button>
    <ng-template #useFauxDiv>
      <div [class]="classes">
        <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
      </div>
    </ng-template>
    <!-- We have to grab projected ng-content and put in this template.
      Then, we can reference it from the template outlets above -->
    <ng-template #contentTpl>
      <ng-content></ng-content>
    </ng-template>`,
  styleUrls: ['./button.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() mode: 'primary' | 'secondary' | undefined = undefined;
  // Type `faux` will result in a div that "looks like" a button. Useful for tab buttons
  // or similar that may be descendents of a focusable <li role="button"... where it would
  // throw an a11y error like: Ensure interactive controls are not nested
  @Input() type?: 'button' | 'reset' | 'submit' | 'faux' = 'button';
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Input() css?: string;
  @Input() isDisabled?: true | false = false;
  @Input() isSkinned?: boolean;
  @Input() isBlank?: boolean;
  @Input() isLink?: boolean;
  @Input() isCircle?: boolean;
  @Input() isBlock?: boolean;
  @Input() isBordered?: boolean;
  @Input() isCapsule?: boolean;
  @Input() isRounded?: boolean;
  @Output() handleClick = new EventEmitter<MouseEvent>();

  public get classes(): string {
    const baseClass = this.isSkinned !== false ? `btn` : `btn-base`;
    const modeClass = this.mode ? `btn-${this.mode}` : '';
    const isBlankClass = this.isBlank === true ? 'btn-blank' : '';
    const isLinkClass = this.isLink === true ? 'btn-link' : '';
    const isBorderedClass = this.isBordered === true ? 'btn-bordered' : '';
    const isCapsuleClass = this.isCapsule === true ? 'btn-capsule' : '';
    const isCircleClass = this.isCircle === true ? 'btn-circle' : '';
    const isBlockClass = this.isBlock === true ? 'btn-block' : '';
    const isRoundedClass = this.isRounded === true ? 'btn-rounded' : '';
    const overrides = this.css ? `${this.css}` : '';
    const sizeClass = this.size ? `btn-${this.size}` : 'btn-medium';

    return [
      baseClass,
      modeClass,
      sizeClass,
      isBorderedClass,
      isCapsuleClass,
      isCircleClass,
      isRoundedClass,
      isBlockClass,
      isBlankClass,
      isLinkClass,
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
