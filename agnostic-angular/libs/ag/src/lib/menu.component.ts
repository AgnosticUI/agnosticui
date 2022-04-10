/* eslint-disable @angular-eslint/no-host-metadata-property */
import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MenuItemDirective } from './menu-item.directive';
import { MenuContentDirective } from './menu-content.directive';

export interface MenuItem {
  label: string;
  isDisabled?: boolean;
}

/** An Injection Token that can be used to inject a reference to the `MenuComponent` from child elements */
export const AG_MENU = new InjectionToken<MenuComponent>('AG_MENU');

@Component({
  selector: 'ag-menu',
  template: `
    <button
      #menuTrigger
      [attr.id]="id"
      class="menu-trigger"
      [class.menu-trigger-bordered]="isBordered"
      [class.menu-trigger-rounded]="isRounded"
      [class.menu-trigger-large]="size === 'large'"
      [class.menu-trigger-small]="size === 'small'"
      (click)="onTriggerClick($event)"
      (keyup)="onTriggerKeyUp($event)"
    >
      {{ menuTitle }}
      <span class="menu-icon" aria-hidden="true"> {{ icon }} </span>
    </button>
    <div class="menu-items" role="menu" *ngIf="_isExpanded$ | async">
      <!-- <ng-content></ng-content> -->
      <ng-container
        [ngTemplateOutlet]="content?.templateRef ?? null"
      ></ng-container>
    </div>
  `,
  styleUrls: ['./menu.css', './menu-item.css'],
  encapsulation: ViewEncapsulation.None, // Without it, positioning of the menu items is off
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Allow children of this `MenuComponent` in the DOM to inject a reference to it (e.g. `MenuItemDirective` does this.)
  providers: [{ provide: AG_MENU, useExisting: MenuComponent }],
  host: {
    class: 'menu',
  },
})
export class MenuComponent implements AfterContentInit, OnInit, OnDestroy {
  // Emits when `ngOnDestroy` is called. When used with `takeUntil` operator,
  // has the effect of cleaning up event listeners (https://rxjs.dev/api/operators/takeUntil).
  #destroy$ = new Subject<void>();

  @Input() closeOnSelect = true;
  @Input() closeOnClickOutside = true;

  @Input() icon = '▾';
  @Input() isBordered = false;
  @Input() isRounded = false;
  @Input() id?: string;
  @Input() menuTitle = 'Menu Title';
  @Input() size: 'small' | 'large' | undefined | null | '' = null;

  @Output() triggerClick = new EventEmitter<MouseEvent>();
  @Output() selectionChange = new EventEmitter<MenuItem>();

  @ViewChild('menuTrigger', { static: true, read: ElementRef })
  private triggerEl!: ElementRef<HTMLButtonElement>;

  @ContentChild(MenuContentDirective) content!: MenuContentDirective;
  @ContentChildren(MenuItemDirective, { descendants: false })
  private menuItemEls!: QueryList<MenuItemDirective>;

  _isExpanded$ = new BehaviorSubject(false);
  get isExpanded() {
    // Exposing the `BehaviorSubject` value as a class property for consumers
    return this._isExpanded$.getValue();
  }

  constructor(
    private ngZone: NgZone,
    private hostEl: ElementRef,
    @Optional() @Inject(DOCUMENT) private _doc?: Document
  ) {}

  ngOnInit(): void {
    if (this._doc) {
      fromEvent(this._doc, 'click')
        .pipe(takeUntil(this.#destroy$))
        .subscribe({
          next: (e) => this.handleOutsideClicks(e),
          error: console.error,
        });
    }
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
  }

  ngAfterContentInit(): void {
    if (!this.content) {
      console.warn(
        'AgnosticUI Angular `MenuComponent` did not discover the `agMenuContent` attribute in your template. No template to render! ' +
          'A simple MenuItems template may look something like the following: ```html\n<ng-template agMenuContent>\n  <button ag-menu-item>Neat!</button>\n</ng-template>\n```'
      );
    }
  }

  onTriggerClick(event: MouseEvent) {
    this.toggle();
    this.triggerClick.emit(event);
    // To handle the case where _the menu was just expanded by toggling the behavior subject_,
    // hook into Angular's main change detection mechanism. When changes are stable
    // (aka rendering is complete), focus the item
    // See also: https://angular.io/guide/zone
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() =>
        this.focusMenuItem(this.getSelectedMenuItemIndex() ?? 0)
      );
  }

  handleItemClick() {
    if (this.closeOnSelect) {
      this.close();
    }
  }

  toggle() {
    if (this.isExpanded) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this._isExpanded$.next(false);
    this.triggerEl.nativeElement.focus();
  }

  open() {
    this._isExpanded$.next(true);
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.focusMenuItem(0));
  }

  findChildHandleFocus(ev: KeyboardEvent, menuItem: MenuItemDirective) {
    const childIndex = this.menuItemEls
      .toArray()
      .findIndex((ref) => ref === menuItem);
    this.handleMenuItemKeyDown(ev, childIndex);
  }

  onTriggerKeyUp(ev: KeyboardEvent): void {
    const index = this.getSelectedMenuItemIndex() ?? 0;
    switch (ev.key) {
      case 'Up': // These first cases are IEEdge :(
      case 'ArrowUp':
        this.focusMenuItem(index, 'desc');
        break;
      case 'Down':
      case 'ArrowDown':
        this.focusMenuItem(index, 'asc');
        break;
      case 'Home':
      case 'ArrowHome':
        this.focusMenuItem(0);
        break;
      case 'End':
      case 'ArrowEnd':
        this.focusMenuItem(this.menuItemEls.length - 1);
        break;
      case 'Space':
        this.focusMenuItem(index ?? 0);
        break;
      case 'Escape':
        break;
      default:
        return;
    }
    ev.preventDefault();
  }

  private handleMenuItemKeyDown(ev: KeyboardEvent, index: number): void {
    switch (ev.key) {
      case 'Up': // These first cases are IEEdge :(
      case 'ArrowUp':
        this.focusMenuItem(index, 'desc');
        break;
      case 'Down':
      case 'ArrowDown':
        this.focusMenuItem(index, 'asc');
        break;
      case 'Home':
      case 'ArrowHome':
        this.focusMenuItem(0);
        break;
      case 'End':
      case 'ArrowEnd':
        this.focusMenuItem(this.menuItemEls.length - 1);
        break;
      case 'Enter':
      case 'Space':
        this.focusMenuItem(index);
        break;
      default:
        return;
    }
    ev.preventDefault();
  }

  focusMenuItem(index: number, direction?: string) {
    let i = index;
    if (direction === 'asc') {
      i += 1;
    } else if (direction === 'desc') {
      i -= 1;
    }

    const items = this.menuItemEls.toArray();

    // Circular navigation
    //
    // If we've went beyond "start" circle around to last
    if (i < 0) {
      i = items.length - 1;
    } else if (i >= items.length) {
      // We've went beyond "last" so circle around to first
      i = 0;
    }

    const nextMenuItemRef = items[i];
    const nextMenu = nextMenuItemRef ? nextMenuItemRef : null;

    if (nextMenu) {
      // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
      // only if we've been supplied a `direction`. Otherwise, nothing left to do.
      if (nextMenu.disabled && direction) {
        // Retry with new `i` index going in same direction
        this.focusMenuItem(i, direction);
      } else {
        // Nominal case is to just focus next tab :)
        nextMenu.focus();
      }
    }
  }

  private handleOutsideClicks(e: Event | null) {
    if (e == null) {
      return;
    }
    if (this._isExpanded$.getValue() && this.closeOnClickOutside) {
      if (!this.isInside(e.target as HTMLElement)) {
        this.close();
      }
    }

    if (this._isExpanded$.getValue() && this.closeOnClickOutside === false) {
      const targetIsMenuItem = this.menuItemEls
        .map((menu) => menu.el.nativeElement)
        .includes(e.target as HTMLButtonElement);
      if (!targetIsMenuItem) {
        // Trap focus when a click occurs outside, so that the user must interact with the menu
        this.focusMenuItem(this.getSelectedMenuItemIndex() ?? 0);
      }
    }
  }

  private isInside(el: HTMLElement) {
    if (this.hostEl.nativeElement) {
      const children = this.hostEl.nativeElement.querySelectorAll('*');
      for (const child of children) {
        if (el === child) {
          return true;
        }
      }
    }
    return false;
  }

  private getSelectedMenuItemIndex(): number | null {
    const idx = this.menuItemEls.toArray().findIndex((ref) => ref.isSelected);
    return idx > -1 ? idx : null;
  }
}
