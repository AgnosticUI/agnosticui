/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ag-menu-item]',
  host: {
    class: 'menu-item',
    '[attr.role]': 'menuitem',
    '[attr.tabindex]': 'isSelected === true ? 0 : -1',
  },
})
export class MenuItemDirective {
  @HostBinding('class.menu-item-rounded') @Input() isRounded = false;
  @HostBinding('class.menu-item-selected') @Input() isSelected = false;
  @HostBinding('class.menu-item-small') @Input() isSmall = false;
  @HostBinding('class.menu-item-large') @Input() isLarge = false;

  get disabled() {
    // This directive is probably used on a button, but just incase, we'll handle  cases where
    // the `disabled` property does not exist on the native el with a default of `false`
    return (this.el.nativeElement as HTMLButtonElement)?.disabled ?? false;
  }

  constructor(private el: ElementRef<HTMLElement>) {}

  focus() {
    this.el.nativeElement.focus();
  }
}
