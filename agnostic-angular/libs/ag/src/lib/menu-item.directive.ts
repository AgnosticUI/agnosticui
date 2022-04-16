/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-selector */
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
} from '@angular/core';
import { AG_MENU, MenuBase } from './menu.types';

@Directive({
  selector: 'button[ag-menu-item]',
  host: {
    class: 'menu-item',
    '[attr.role]': 'menuitem',
    '[attr.tabindex]': 'isSelected === true ? 0 : -1',
  },
})
export class MenuItemDirective {
  @HostBinding('class.menu-item-selected') @Input() isSelected = false;

  @HostBinding('class.menu-item-rounded') isRounded = this.menu.isRounded;
  @HostBinding('class.menu-item-small') isSmall = this.menu.size === 'small';
  @HostBinding('class.menu-item-large') isLarge = this.menu.size === 'large';

  get disabled() {
    return this.el.nativeElement?.disabled ?? false;
  }

  constructor(
    public el: ElementRef<HTMLButtonElement>,
    @Inject(AG_MENU) private menu: MenuBase
  ) {}

  @HostListener('click', ['$event']) onClick() {
    this.menu.handleItemClick();
  }

  @HostListener('keydown', ['$event']) onKeydown(ev: KeyboardEvent) {
    switch (ev.key) {
      case 'Enter':
        // Essentially, convert Enter into a click event, as clicks already have the spec'd behavior
        ev.preventDefault();
        this.el.nativeElement.click();
        return;
      case 'Escape':
        this.menu.close();
        break;
      case 'Tab':
        // Trap tabs by breaking, and allowing `ev.preventDefault` to be called.
        // The menu is in an open state and focus is trapped.
        ev.preventDefault();
        return;
    }
    // The other keydown events on a menu item require knowledge of the list of ALL menu items (e.g. Home key),
    // so we use the `MenuComponent` reference obtained via Angular DI to call `findChildHandleFocus`, forwarding
    // the event and a reference to this component to the `MenuComponent`
    this.menu.findChildHandleFocus(ev, this);
  }

  focus() {
    this.el.nativeElement.focus();
  }
}
