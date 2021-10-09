import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'ag-progress',
  template: `<progress [ngClass]="classes" [attr.value]="value" [attr.max]="max"></progress>`,
  styleUrls: ['./progress.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProgressComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() css?: string;
  public get classes(): string {
    console.log(this)
    let klasses = ['progress', this.css?.length ? `${this.css}` : '']
    klasses = klasses.filter((klass) => klass.length)
    return klasses.join(' ')
  }
}
