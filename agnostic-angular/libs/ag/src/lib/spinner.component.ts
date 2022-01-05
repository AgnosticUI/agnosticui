import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ag-spinner',
  template: `<div [class]="spinnerClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`,
  styleUrls: ['./spinner.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() size: 'small' | 'large' | 'xlarge' | '' = '';
  @Input() ariaLabel: string = 'Loading…';

  public get spinnerClasses() {
    return [
      'spinner',
      `spinner-${this.size}`,
    ].filter((cl) => cl).join(' ');
  }
}
