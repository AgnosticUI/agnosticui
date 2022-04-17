import { EventEmitter, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuContentDirective } from './menu-content.directive';
import { MenuItemDirective } from './menu-item.directive';

// Based on: https://github.com/storybookjs/storybook/issues/15732

/** An Injection Token that can be used to inject a reference to the `MenuComponent` from child elements */
export const AG_MENU = new InjectionToken<MenuBase>('AG_MENU');

/**
 * An interface used to represent the Agnostic UI `MenuComponent` in the Angular Dependency Injection system.
 * By using a type in lieu of the component, we avoid circular dependencies.
 *
 * Example usage:
 * ```ts
 * // Parent Component:
 * @Component({
 *   providers: [{ provide: AG_MENU, useExisting: MenuComponent }],
 * })
 * export class MenuComponent {}
 *
 * // Child Component:
 * @Directive({
 *   selector: "button[ag-menu-item]",
 * })
 * export class MenuItemDirective {
 *   constructor(@Inject(AG_MENU) private menu: MenuBase) {}
 * }
 * ```
 */
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
  content: MenuContentDirective;
  _isExpanded$: BehaviorSubject<boolean>;
  readonly isExpanded: boolean;
  onTriggerClick(event: MouseEvent): void;
  handleItemClick(): void;
  toggle(): void;
  close(): void;
  open(): void;
  findChildHandleFocus(ev: KeyboardEvent, menuItem: MenuItemDirective): void;
  onTriggerKeyUp(ev: KeyboardEvent): void;
}
