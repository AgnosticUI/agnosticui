import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ag-choice-input',
  template: `<fieldset [ngClass]="fieldsetClass()">
    <legend [ngClass]="legendClasses()">{{ legendLabel }}</legend>
    <ng-container *ngFor="let option of options">
      <label
        [attr.disabled]="isDisabled || disabledOptions?.includes(option.value)"
        [ngClass]="labelClasses()"
      >
        <input
          [ngClass]="inputClasses()"
          [type]="type"
          [name]="option.name"
          [value]="option.value"
          [disabled]="isDisabled || disabledOptions?.includes(option.value)"
          [checked]="checkedOptions?.includes(option.value) || false"
          (change)="this.handleChange($event)"
          aria-hidden="true"
        />
        <span [ngClass]="labelSpanClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`,
  styleUrls: ['./choice-input.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceInputComponent {
  @Input() isInline?: boolean = false;
  @Input() isFieldset?: boolean = true;
  @Input() isDisabled?: boolean = false;
  @Input() options?: any[] = [];
  @Input() disabledOptions?: string[];

  private _checkedOptions: any[] = [];
  get checkedOptions(): any[] {
    return this._checkedOptions;
  }
  @Input()
  set checkedOptions(val: any[]) {
    this._checkedOptions = val;
  }

  @Input() css?: string;
  @Input() legendLabel = '';
  @Input() type!: 'radio' | 'checkbox';
  // Medium is default so we just use empty string
  @Input() size: 'small' | 'large' | '' = '';
  // TODO type this
  @Output() selected = new EventEmitter<any>();

  labelSpanClasses() {
    let klasses = [
      this.type ? `${this.type}-label` : '',
      this.size ? `${this.type}-label-${this.size}` : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
  handleChange(ev: Event) {
    const el = ev.target as HTMLInputElement;
    const value = el.value;
    if (this.type === 'checkbox') {
      let checkedItemsUpdated;
      if (this.checkedOptions?.includes(value)) {
        checkedItemsUpdated = this.checkedOptions?.filter(
          (item) => item !== value
        );
        this.checkedOptions = checkedItemsUpdated;
      } else {
        checkedItemsUpdated = [...this.checkedOptions, value];
        this.checkedOptions = checkedItemsUpdated;
      }
      this.selected.emit(checkedItemsUpdated);
    } else {
      // Type is radio. We ignore if they're trying to check the currently checked
      if (this.checkedOptions?.includes(value)) {
        // Since you can only have one checked radio at a time, we simply
        // set to the new radio to be checked
        this.checkedOptions = [value];
        this.selected.emit(this.checkedOptions);
      }
    }
  }
  inputClasses() {
    let inputKlasses = [
      `${this.type}`,
      this.size ? `${this.size}` : '',
      this.isDisabled ? 'disabled' : '',
    ];
    inputKlasses = inputKlasses.filter((klass) => klass.length);
    return inputKlasses.join(' ');
  }
  fieldsetClass() {
    const overrides = this.css ? `${this.css}` : '';
    const klasses = [
      overrides ? overrides : '',
      `${this.type}-group`,
      this.size === 'large' ? `${this.type}-group-${this.size}` : '',
      this.isFieldset === false ? `${this.type}-group-hidden` : '',
    ];
    return klasses.filter((klass) => klass.length);
  }
  legendClasses() {
    const klasses = [
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
}
