import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output } from '@angular/core';

@Component({
  selector: 'ag-switch',
  template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition === 'left'" class="switch-label">{{
      label
    }}</span>
    <input
      type="checkbox"
      [checked]="isChecked"
      class="switch-input"
      [disabled]="isDisabled"
      role="switch"
      (change)="toggleChecked($event)"
    />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition === 'right'" class="switch-label">{{
      label
    }}</span>
  </label>`,
  styleUrls: ['./switch.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  @Input() label!: string;
  @Input() css?: string;
  @Input() labelPosition = 'left';
  @Input() isDisabled?: boolean = false;
  @Input() isAction?: boolean = false;
  @Input() isBordered?: boolean = false;
  @Input() size? = '';

  private switchChecked!: boolean;
  get isChecked(): boolean {
    return this.switchChecked;
  }

  @Input()
  set isChecked(val: boolean) {
    this.switchChecked = val;
  }

  @Output() selected = new EventEmitter<boolean>();

  toggleChecked(ev: Event) {
    const el = ev.target as HTMLInputElement;
    if (el.getAttribute('aria-checked') == 'true') {
      el.setAttribute('aria-checked', 'false');
      this.switchChecked = false;
    } else {
      el.setAttribute('aria-checked', 'true');
      this.switchChecked = true;
    }
    this.selected.emit(this.switchChecked);
  }
  switchContainer() {
    let klasses = [
      'switch-container',
      this.css ? this.css : '',
      this.labelPosition === 'right' ? 'switch-right' : '',
      this.isDisabled ? 'disabled' : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
  switchSpan() {
    let klasses = [
      'switch',
      this.isBordered ? 'switch-border' : '',
      this.isAction ? 'switch-action' : '',
      this.size ? `switch-${this.size}` : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
}
