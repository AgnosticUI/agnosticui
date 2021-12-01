import { Input, Output, ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';

/* template: `<fieldset [ngClass]="fieldsetClass()">
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
*/

export interface SelectOptions {
  value: string,
  label: string,
}

@Component({
  selector: 'ag-select',
  template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
  <select
    [id]="uniqueId"
    [name]="name"
    [ngClass]="selectClasses()"
    [disabled]="isDisabled"
    [multiple]="isMultiple"
    [size]="isMultiple && multipleSize"
    (change)="changeSelection($event)"
  >
    <option *ngIf="showDefaultOption()" [value]="null" disabled selected> {{ defaultOptionLabel }}</option>
    <option *ngFor="let option of options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>`,
  styleUrls: ['./select.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  private selected = '';

  @Input() uniqueId!: string;
  @Input() labelCopy!: string;
  @Input() defaultOptionLabel?: string = "Please select an option";
  @Input() name!: string;
  @Input() options!: SelectOptions[];
  @Input() isDisabled?: boolean = false;
  @Input() isMultiple?: boolean = false;
  @Input() multipleSize?: number = 1;
  @Input() size?: 'small' | 'large' | '' = '';

  @Output()
  changed = new EventEmitter();

  showDefaultOption() {
    return !this.isMultiple;
  }

  changeSelection(ev: Event) {
    const option = ev.target as HTMLOptionElement;
    this.selected = option.value;
    this.changed.emit(this.selected);
  }

  selectClasses() {
    return [
      'select',
      this.size ? `select-${this.size}` : ''
    ].filter(c => c).join(' ');
  }
}
