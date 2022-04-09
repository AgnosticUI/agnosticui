/* eslint-disable @angular-eslint/no-host-metadata-property */
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, fromEvent, of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { MenuItemDirective } from './menu-item.directive';

export interface MenuItem {
  label: string;
  isDisabled?: boolean;
}

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
      (click)="onTriggerClick($event, selectedIndex ?? 0)"
      (keyup)="onKeyup($event, selectedIndex ?? 0)"
    >
      {{ menuTitle }}
      <span class="menu-icon" aria-hidden="true"> {{ icon }} </span>
    </button>
    <div class="menu-items" role="menu" *ngIf="isExpanded$ | async">
      <button
        ag-menu-item
        *ngFor="let item of menuItems; let idx = index"
        [disabled]="item.isDisabled ?? false"
        [isLarge]="size === 'large'"
        [isSmall]="size === 'small'"
        [isSelected]="idx === selectedIndex"
        [isRounded]="isRounded"
        (click)="handleItemClick(item, idx)"
        (keydown)="onMenuItemKeyDown($event, idx)"
      >
        {{ item.label }}
      </button>
    </div>
  `,
  styleUrls: ['./menu.css', './menu-item.css'],
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None, // Without it, positioning of the menu items is off
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'menu',
  },
})
export class MenuComponent implements OnInit, OnDestroy {
  // Emits when `ngOnDestroy` is called. When used with `takeUntil` operator,
  // has the effect of cleaning up event listeners (https://rxjs.dev/api/operators/takeUntil).
  #destroy$ = new Subject<void>();

  @Input() closeOnSelect = true;
  private _closeOnClickOutside$ = new BehaviorSubject(true);
  @Input() set closeOnClickOutside(val: boolean) {
    this._closeOnClickOutside$.next(val);
  }
  get closeOnClickOutside() {
    return this._closeOnClickOutside$.getValue();
  }
  @Input() icon = '▾';
  @Input() isBordered = false;
  @Input() isRounded = false;
  @Input() id?: string;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuTitle = 'Menu Title';
  @Input() size: 'small' | 'large' | undefined | null | '' = null;

  @Output() triggerClick = new EventEmitter<MouseEvent>();
  @Output() selectionChange = new EventEmitter<MenuItem>();

  @ViewChild('menuTrigger', { static: true, read: ElementRef })
  private triggerEl!: ElementRef<HTMLButtonElement>;

  @ViewChildren(MenuItemDirective)
  private menuItemEls!: QueryList<MenuItemDirective>;

  get isExpanded() {
    // Exposing the `BehaviorSubject` value as a class property for consumers
    return this.isExpanded$.getValue();
  }

  isExpanded$ = new BehaviorSubject(false);
  selectedIndex: number | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private hostEl: ElementRef,
    @Optional() @Inject(DOCUMENT) private _doc?: Document
  ) {}

  ngOnInit(): void {
    this._closeOnClickOutside$
      .pipe(
        takeUntil(this.#destroy$),
        switchMap((shouldClose) =>
          this._doc && shouldClose === true
            ? fromEvent(this._doc, 'click')
            : of(null)
        )
      )
      .subscribe({
        next: (e) => this.handleOutsideClicks(e),
        error: console.error,
      });
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
  }

  onTriggerClick(event: MouseEvent, index: number) {
    this.isExpanded$.next(!this.isExpanded$.getValue());
    this.triggerClick.emit(event);
    // To handle the case where _the menu was just expanded by toggling the behavior subject_,
    // force Angular to synchronously run change detection. This will force the runtime
    // to render the menu items, so we're sure the `ViewChildren` will exist.
    // Note this is required since we're lying to the compiler when declaring `ViewChildren` with the `!` symbol.
    // The compiler fib and CDR hack allows us to avoid the complexity of eventing render cycles
    this.cdr.detectChanges();
    this.focusMenuItem(index ?? 0);
  }

  handleItemClick(item: MenuItem, index: number) {
    this.selectedIndex = index;
    this.selectionChange.emit(item);
    if (this.closeOnSelect) {
      this.isExpanded$.next(false);
      this.triggerEl.nativeElement.focus();
    }
  }

  onKeyup(ev: KeyboardEvent, index: number): void {
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
        this.focusMenuItem(this.menuItems.length - 1);
        break;
      case 'Enter':
      case 'Space':
        this.focusMenuItem(index ?? 0);
        break;
      case 'Escape':
        this.isExpanded$.next(false);
        this.triggerEl.nativeElement.focus();
        break;
      default:
        return;
    }
    ev.preventDefault();
  }

  onMenuItemKeyDown(ev: KeyboardEvent, index: number): void {
    const selectedItem = this.menuItems[index] as MenuItem | undefined;
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
        this.focusMenuItem(this.menuItems.length - 1);
        break;
      case 'Enter':
      case 'Space':
        this.focusMenuItem(index);
        if (selectedItem) {
          this.handleItemClick(selectedItem, index);
        }
        break;
      case 'Escape':
        this.isExpanded$.next(false);
        this.triggerEl.nativeElement.focus();
        break;
      case 'Tab':
        // Trap tabs by breaking, and allowing `ev.preventDefault` to be called.
        // The menu is in an open state and focus is trapped.
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
    // Circular navigation
    //
    // If we've went beyond "start" circle around to last
    if (i < 0) {
      i = this.menuItems.length - 1;
    } else if (i >= this.menuItems.length) {
      // We've went beyond "last" so circle around to first
      i = 0;
    }

    const items = this.menuItemEls.toArray();
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
    if (this.isExpanded$.getValue() && this.closeOnClickOutside) {
      if (!this.isInside(e.target as HTMLElement)) {
        this.isExpanded$.next(false);
        this.triggerEl.nativeElement.focus();
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
}
