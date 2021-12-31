import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ag-empty-state-header',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateHeaderComponent { }

@Component({
  selector: 'ag-empty-state-body',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateBodyComponent { }

@Component({
  selector: 'ag-empty-state-footer',
  template: `<div class="empty-action">
    <ng-content></ng-content>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateFooterComponent { }

@Component({
  selector: 'ag-empty-state',
  template: `<div [class]="emptyClasses">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./empty-state.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  @Input() isBordered?: boolean;
  @Input() isRounded?: boolean;
  get emptyClasses() {
    return [
      'empty',
      this.isRounded ? 'empty-rounded' : '',
      this.isBordered ? 'empty-bordered' : '',
    ]
      .filter((c) => c)
      .join(' ');
  }
}
