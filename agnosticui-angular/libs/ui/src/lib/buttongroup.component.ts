import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonComponent } from './button.component';

// .screenreader-only is expected to be globally available via common.min.css
@Component({
  selector: 'ag-button-group',
  template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./button-group.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonGroupComponent {
  @ContentChildren(ButtonComponent) buttons!: QueryList<ButtonComponent>;
  @Input() css?: string;
  @Input() ariaLabel: string | undefined;

  public get getAriaLabel(): string {
    const label = this.ariaLabel ? this.ariaLabel : 'button group element';
    return label;
  }

  public get classes(): string {
    const cssClass = this.css ? this.css : '';
    return ['btn-group', cssClass].join(' ');
  }
}
