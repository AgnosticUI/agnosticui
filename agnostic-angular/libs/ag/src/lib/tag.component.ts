import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ag-tag',
  template: `<span [class]="tagClasses"><ng-content></ng-content></span>`,
  styleUrls: ['./tag.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() type: 'warning' | 'error' | 'info' | 'success' | '' = '';
  @Input() shape: 'pill' | 'round' | 'circle' | '' = '';
  @Input() isUppercase?: boolean = false;

  get tagClasses() {
    return [
      'tag',
      this.type ? `tag-${this.type}` : '',
      this.shape ? `tag-${this.shape}` : '',
      this.isUppercase ? 'tag-upper' : '',
    ]
      .filter((c) => c)
      .join(' ');
  }
}
