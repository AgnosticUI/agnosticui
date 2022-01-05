import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ag-loader',
  template: `<div [class]="loaderClasses" role="status" attr.aria-live="polite" [attr.aria-busy]="true">
    <span class="screenreader-only">{{ariaLabel}}</span>
  </div>`,
  styleUrls: ['./loader.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() size: 'small' | 'large' | '' = '';
  @Input() ariaLabel: string = 'Loading…';

  public get loaderClasses() {
    return [
      'loader',
      `loader-${this.size}`,
    ].filter((cl) => cl).join(' ');
  }
}
