import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ag-choice',
  template: `<h1>Choice Input Test 1234</h1>`,
  styleUrls: ['./choice-input.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChoiceComponent {
  @Input() disabled?: boolean = false;
  @Input() classes?: string = '';
  @Input() type!: 'radio' | 'checkbox';
  @Input() name!: string;
  @Input() value?: string = '';

  private checked!: boolean;
  get isChecked(): boolean {
    return this.checked;
  }
  @Input()
  set isChecked(val: boolean) {
    this.checked = val;
  }
  @Output() selected = new EventEmitter<boolean>();
}

@Component({
  selector: 'ag-choice',
  template: `<fieldset [ngClass]="fieldsetClass()">
    <legend [ngClass]="legendClasses()">{{legendLabel}}</legend>
      <ng-container *ngFor="let option of options">
        <label
          [attr.disabled]="isDisabled || disabledOptions?.includes(option.value)"
          [ngClass]="labelClasses()">
          <!-- TODO -- Choice goes here -->
          <span [ngClass]="labelSpanClasses()">{{option.label}}</span>
        </label>
      </ng-container>
  </fieldset>`,
  styleUrls: ['./choice-input.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChoiceInputComponent {
  @Input() isInline?: boolean = false;
  @Input() isFieldset?: boolean = false;
  @Input() isDisabled?: boolean = false;
  @Input() options?: any[] = [];
  @Input() disabledOptions?: [string];
  @Input() checkedOptions?: [string];
  @Input() legendLabel: string = '';
  @Input() type!: 'radio' | 'checkbox';
  // Medium is default so we just use empty string
  @Input() size: 'small' | 'large' | '' = '';
  // TODO type this
  @Output() selected = new EventEmitter<any>();
  fieldsetClass() {
    let klasses = [
      `${this.type}-group`,
      this.size === 'large' ? `${this.type}-group-${this.size}` : '',
      this.isFieldset === false ? `${this.type}-group-hidden` : '',
    ];
    return klasses.filter((klass) => klass.length)
  }
  legendClasses() {
    let klasses = [
      `${this.type}-legend`,
      // .screenreader-only is expected to be globally available via common.min.css
      this.isFieldset === false ? 'screenreader-only' : null,
    ];
    return klasses.join(' '); 
  }
  labelClasses() {
    let klasses = [
      this.type ? `${this.type}-label-wrap` : '',
      this.isInline ? `${this.type}-label-wrap-inline` : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
  labelSpanClasses() {
    let klasses = [
      this.type ? `${this.type}-label` : '',
      this.size ? `${this.type}-label-${this.size}` : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');   
  }
}
