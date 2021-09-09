import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import './switch.css';

@Component({
  selector: 'ag-switch',
  template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition == 'left'" class="switch-label">{{label}}</span>
    <input type="checkbox" [checked]="isChecked" class="switch-input" [disabled]="disabled"  role="switch" (change)="toggleChecked($event)" />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition == 'right'" class="switch-label">{{label}}</span>
  </label>`,
  styleUrls: ['./switch.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  @Input() label!: string;
  @Input() labelPosition: string = 'left';
  @Input() disabled?: boolean = false;
  @Input() isAction?: boolean = false;
  @Input() isBordered?: boolean = false;
  @Input() size: string = '';

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
    if (el.getAttribute('aria-pressed') == 'true') {
      el.setAttribute('aria-pressed', 'false');
      this.switchChecked = false;
    } else {
      el.setAttribute('aria-pressed', 'true');
      this.switchChecked = true;
    }
    this.selected.emit(this.switchChecked)
  }
  switchContainer () {
    let klasses = [
      'switch-container',
      this.labelPosition === 'right' ? 'switch-right' : '',
      this.disabled ? 'disabled' : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
  switchSpan() {
    let klasses = [
      'switch',
      this.isBordered ? 'switch-border' : '',
      this.isAction ? 'switch-action' : '',
      this.size ? `switch-${this.size}` : ''
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  };
}
