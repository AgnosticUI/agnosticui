import { EventEmitter, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuContentDirective } from './menu-content.directive';
import { MenuItemDirective } from './menu-item.directive';
export declare const AG_MENU: InjectionToken<MenuBase>;
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
