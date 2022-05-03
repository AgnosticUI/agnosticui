import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

export interface ChoiceInputOption {
  name: string;
  value: string;
  label: string;
}
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
        />
        <span [ngClass]="labelSpanClasses()" aria-hidden="true"></span>
        <span [ngClass]="labelSpanCopyClasses()">{{ option.label }}</span>
      </label>
    </ng-container>
  </fieldset>`,
  styleUrls: ['./choice-input.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceInputComponent {
  @Input() isInline?: boolean = false;
  @Input() isFieldset?: boolean = true;
  @Input() isSkinned?: boolean = true;
  @Input() isDisabled?: boolean = false;
  @Input() isInvalid?: boolean = false;
  @Input() options?: ChoiceInputOption[] = [];
  @Input() disabledOptions?: string[];

  private _checkedOptions: string[] = [];
  get checkedOptions(): string[] {
    return this._checkedOptions;
  }
  @Input()
  set checkedOptions(val: string[]) {
    this._checkedOptions = val;
  }

  @Input() css?: string;
  @Input() legendLabel = '';
  @Input() type: 'radio' | 'checkbox' = 'checkbox';
  // Medium is default so we just use empty string
  @Input() size: 'small' | 'large' | '' = '';
  // TODO type this
  @Output() selected = new EventEmitter<string[]>();

  labelSpanClasses() {
    return [
      this.type ? `${this.type}-label` : '',
      this.size ? `${this.type}-label-${this.size}` : '',
      this.isInvalid ? 'choice-input-error' : '',
    ].filter(c => c.length).join(' ');
  }

  labelSpanCopyClasses() {
    return [
      this.type ? `${this.type}-label-copy` : '',
      this.size ? `${this.type}-label-copy-${this.size}` : '',
      this.isInvalid ? 'choice-input-error' : '',
    ].filter(c => c.length).join(' ');
  }

  handleChange(ev: Event) {
    const el = ev.target as HTMLInputElement;
    const value = el.value;
    if (this.type === 'checkbox') {
      let checkedItemsUpdated: string[];
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
    return [
      `${this.type}`,
      this.size ? `${this.size}` : '',
      this.isDisabled ? 'disabled' : '',
    ].filter(c => c.length).join(' ');
  }

  fieldsetClass() {
    // If consumer sets is skinned to false we don't style the fieldset
    const skin = this.isSkinned ? `${this.type}-group` : '';

    // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
    const sizeSkin =
      this.isSkinned && this.size === 'large'
        ? `${this.type}-group-${this.size}`
        : '';

    const overrides = this.css ? `${this.css}` : '';
    return [
      overrides ? overrides : '',
      skin,
      sizeSkin,
      this.isFieldset === false ? `${this.type}-group-hidden` : '',
    ].filter(c => c.length).join(' ');
  }

  legendClasses() {
    const skin = this.isSkinned ? `${this.type}-legend` : '';
    return [
      skin,
      // .screenreader-only is expected to be globally available via common.min.css
      this.isFieldset === false ? 'screenreader-only' : null,
    ].filter(c => c).join(' ');
  }

  labelClasses() {
    return [
      this.type ? `${this.type}-label-wrap` : '',
      this.isInline ? `${this.type}-label-wrap-inline` : '',
    ].filter(c => c.length).join(' ');
  }
}
