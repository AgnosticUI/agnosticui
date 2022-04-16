import {
  ElementRef,
  EventEmitter,
  InjectionToken,
  NgZone,
  QueryList,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuContentDirective } from './menu-content.directive';
import { MenuItemDirective } from './menu-item.directive';

export interface MenuItem {
  label: string;
  isDisabled?: boolean;
}

/** An Injection Token that can be used to inject a reference to the `MenuComponent` from child elements */
export const AG_MENU = new InjectionToken<MenuBase>('AG_MENU');

export interface MenuBase {
  closeOnSelect: boolean;
  closeOnClickOutside: boolean;
  icon: string;
  isBordered: boolean;
  isRounded: boolean;
  id?: string;
  menuTitle: string;
  size: 'small' | 'large' | undefined | null | '';
  triggerClick: EventEmitter<MouseEvent>;
  selectionChange: EventEmitter<MenuItem>;
  triggerEl: ElementRef<HTMLButtonElement>;
  content: MenuContentDirective;
  menuItemEls: QueryList<MenuItemDirective>;
  _isExpanded$: BehaviorSubject<boolean>;
  readonly isExpanded: boolean;
  ngZone: NgZone;
  hostEl: ElementRef;
  onTriggerClick(event: MouseEvent): void;
  handleItemClick(): void;
  toggle(): void;
  close(): void;
  open(): void;
  findChildHandleFocus(ev: KeyboardEvent, menuItem: MenuItemDirective): void;
  onTriggerKeyUp(ev: KeyboardEvent): void;
}
