import { Component, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import './switch.css';

@Component({
  selector: 'ag-switch',
  template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition == 'left'" class="switch-label">{{label}}</span>
    <input type="checkbox" [checked]="isChecked" class="switch-input" [disabled]="disabled"  role="switch" (change)="changed($event)" />
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
  @Input() isChecked?: boolean = false;
  @Input() isAction?: boolean = false;
  @Input() isBordered?: boolean = false;
  @Input() size: string = '';
  // @Output() onChange: 
  changed(ev: Event) {
    const el = ev.target as HTMLInputElement;
    console.log('handleClick el: ', el)

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
    console.log(this)
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
