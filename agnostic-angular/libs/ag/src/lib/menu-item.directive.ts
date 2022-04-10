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
import { AG_MENU, MenuComponent } from './menu.component';

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
    @Inject(AG_MENU) private menu: MenuComponent
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
        break;
    }

    this.menu.findChildHandleFocus(ev, this);
  }

  focus() {
    this.el.nativeElement.focus();
  }
}
