var _MenuComponent_destroy$;
import { __classPrivateFieldGet } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MenuContentDirective } from './menu-content.directive';
import { MenuItemDirective } from './menu-item.directive';
import { AG_MENU } from './menu.types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MenuComponent {
    constructor(ngZone, hostEl, _doc) {
        this.ngZone = ngZone;
        this.hostEl = hostEl;
        this._doc = _doc;
        _MenuComponent_destroy$.set(this, new Subject());
        this.closeOnSelect = true;
        this.closeOnClickOutside = true;
        this.icon = '▾';
        this.isBordered = false;
        this.isRounded = false;
        this.menuTitle = 'Menu Title';
        this.size = null;
        this.triggerClick = new EventEmitter();
        this._isExpanded$ = new BehaviorSubject(false);
    }
    get isExpanded() {
        return this._isExpanded$.getValue();
    }
    ngOnInit() {
        if (this._doc) {
            fromEvent(this._doc, 'click')
                .pipe(takeUntil(__classPrivateFieldGet(this, _MenuComponent_destroy$, "f")))
                .subscribe({
                next: (e) => this.handleOutsideClicks(e),
                error: console.error,
            });
        }
    }
    ngOnDestroy() {
        __classPrivateFieldGet(this, _MenuComponent_destroy$, "f").next();
    }
    ngAfterContentInit() {
        if (!this.content) {
            console.warn('AgnosticUI Angular `MenuComponent` did not discover the `agMenuContent` attribute in your template. No template to render! ' +
                'A simple MenuItems template may look something like the following: ```html\n<ng-template agMenuContent>\n  <button ag-menu-item>Neat!</button>\n</ng-template>\n```');
        }
    }
    onTriggerClick(event) {
        this.toggle();
        this.triggerClick.emit(event);
        this.ngZone.onStable
            .pipe(take(1))
            .subscribe(() => this.focusMenuItem(this.getSelectedMenuItemIndex() ?? 0));
    }
    handleItemClick() {
        if (this.closeOnSelect) {
            this.close();
        }
    }
    toggle() {
        if (this.isExpanded) {
            this.close();
        }
        else {
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
    findChildHandleFocus(ev, menuItem) {
        const childIndex = this.menuItemEls
            .toArray()
            .findIndex((ref) => ref === menuItem);
        this.handleMenuItemKeyDown(ev, childIndex);
    }
    onTriggerKeyUp(ev) {
        const index = this.getSelectedMenuItemIndex() ?? 0;
        switch (ev.key) {
            case 'Up':
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
    handleMenuItemKeyDown(ev, index) {
        switch (ev.key) {
            case 'Up':
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
    focusMenuItem(index, direction) {
        let i = index;
        if (direction === 'asc') {
            i += 1;
        }
        else if (direction === 'desc') {
            i -= 1;
        }
        const items = this.menuItemEls.toArray();
        if (i < 0) {
            i = items.length - 1;
        }
        else if (i >= items.length) {
            i = 0;
        }
        const nextMenuItemRef = items[i];
        const nextMenu = nextMenuItemRef ? nextMenuItemRef : null;
        if (nextMenu) {
            if (nextMenu.disabled && direction) {
                this.focusMenuItem(i, direction);
            }
            else {
                nextMenu.focus();
            }
        }
    }
    handleOutsideClicks(e) {
        if (e == null) {
            return;
        }
        if (this.isExpanded && this.closeOnClickOutside) {
            if (!this.isInside(e.target)) {
                this.close();
            }
            return;
        }
        if (this.isExpanded && this.closeOnClickOutside === false) {
            const targetIsMenuItem = this.menuItemEls
                .map((menu) => menu.el.nativeElement)
                .includes(e.target);
            if (!targetIsMenuItem) {
                this.focusMenuItem(this.getSelectedMenuItemIndex() ?? 0);
            }
            return;
        }
    }
    isInside(el) {
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
    getSelectedMenuItemIndex() {
        const idx = this.menuItemEls.toArray().findIndex((ref) => ref.isSelected);
        return idx > -1 ? idx : null;
    }
}
_MenuComponent_destroy$ = new WeakMap();
MenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component });
MenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: MenuComponent, selector: "ag-menu", inputs: { closeOnSelect: "closeOnSelect", closeOnClickOutside: "closeOnClickOutside", icon: "icon", isBordered: "isBordered", isRounded: "isRounded", id: "id", menuTitle: "menuTitle", size: "size" }, outputs: { triggerClick: "triggerClick" }, host: { classAttribute: "menu" }, providers: [{ provide: AG_MENU, useExisting: MenuComponent }], queries: [{ propertyName: "content", first: true, predicate: MenuContentDirective, descendants: true }, { propertyName: "menuItemEls", predicate: MenuItemDirective }], viewQueries: [{ propertyName: "triggerEl", first: true, predicate: ["menuTrigger"], descendants: true, read: ElementRef, static: true }], ngImport: i0, template: `
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
      <ng-container
        [ngTemplateOutlet]="content?.templateRef ?? null"
      ></ng-container>
    </div>
  `, isInline: true, styles: [".menu-trigger{display:flex;align-items:center;justify-content:space-between;max-width:100%;background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));cursor:pointer;text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem)}.menu-trigger:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-trigger-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-trigger-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-trigger-bordered{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);background-color:var(--menu-item-background-color)}.menu-trigger-rounded{border-radius:var(--agnostic-radius)}.menu-icon{font-family:sans-serif;font-size:var(--fluid-18);margin-inline-start:var(--fluid-8);line-height:1}.menu{display:inline-flex;position:relative}:is(.menu-items,.menu-items-right){position:absolute;margin-block-start:var(--fluid-6);background-color:#fff;z-index:10}.menu-items{right:initial;left:0}.menu-items-right{left:initial;right:0}\n", ".menu-item{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);background-color:var(--menu-item-background-color);display:block;min-width:100%;white-space:nowrap;cursor:default}.menu-item:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-item:not(:first-of-type){border-top:0}.menu-item-selected{color:#fff;background-color:var(--agnostic-primary);border-color:var(--agnostic-primary)}.menu-item:active:not(.menu-item-selected){color:var(--agnostic-primary)}.menu-item [aria-checked=true]:before{content:\"\\2713  \"}.menu-item-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-item-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-item-rounded:first-of-type{border-top-left-radius:var(--agnostic-radius);border-top-right-radius:var(--agnostic-radius)}.menu-item-rounded:last-of-type{border-bottom-left-radius:var(--agnostic-radius);border-bottom-right-radius:var(--agnostic-radius)}.menu-item:hover:not([disabled]):not(.menu-item-selected){background-color:var(--agnostic-gray-extra-light);cursor:pointer}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-menu', template: `
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
      <ng-container
        [ngTemplateOutlet]="content?.templateRef ?? null"
      ></ng-container>
    </div>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: AG_MENU, useExisting: MenuComponent }], host: {
                        class: 'menu',
                    }, styles: [".menu-trigger{display:flex;align-items:center;justify-content:space-between;max-width:100%;background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));cursor:pointer;text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem)}.menu-trigger:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-trigger-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-trigger-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-trigger-bordered{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);background-color:var(--menu-item-background-color)}.menu-trigger-rounded{border-radius:var(--agnostic-radius)}.menu-icon{font-family:sans-serif;font-size:var(--fluid-18);margin-inline-start:var(--fluid-8);line-height:1}.menu{display:inline-flex;position:relative}:is(.menu-items,.menu-items-right){position:absolute;margin-block-start:var(--fluid-6);background-color:#fff;z-index:10}.menu-items{right:initial;left:0}.menu-items-right{left:initial;right:0}\n", ".menu-item{--menu-item-background-color: var(--agnostic-menu-item-background-color, white);text-align:left;border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-size:inherit;line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);background-color:var(--menu-item-background-color);display:block;min-width:100%;white-space:nowrap;cursor:default}.menu-item:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out;isolation:isolate}.menu-item:not(:first-of-type){border-top:0}.menu-item-selected{color:#fff;background-color:var(--agnostic-primary);border-color:var(--agnostic-primary)}.menu-item:active:not(.menu-item-selected){color:var(--agnostic-primary)}.menu-item [aria-checked=true]:before{content:\"\\2713  \"}.menu-item-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:2rem}.menu-item-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:1rem}.menu-item-rounded:first-of-type{border-top-left-radius:var(--agnostic-radius);border-top-right-radius:var(--agnostic-radius)}.menu-item-rounded:last-of-type{border-bottom-left-radius:var(--agnostic-radius);border-bottom-right-radius:var(--agnostic-radius)}.menu-item:hover:not([disabled]):not(.menu-item-selected){background-color:var(--agnostic-gray-extra-light);cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: Document, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { closeOnSelect: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }], icon: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], id: [{
                type: Input
            }], menuTitle: [{
                type: Input
            }], size: [{
                type: Input
            }], triggerClick: [{
                type: Output
            }], triggerEl: [{
                type: ViewChild,
                args: ['menuTrigger', { static: true, read: ElementRef }]
            }], content: [{
                type: ContentChild,
                args: [MenuContentDirective]
            }], menuItemEls: [{
                type: ContentChildren,
                args: [MenuItemDirective, { descendants: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2FnL3NyYy9saWIvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBWSxNQUFNLGNBQWMsQ0FBQzs7O0FBa0NqRCxNQUFNLE9BQU8sYUFBYTtJQWdDeEIsWUFDVSxNQUFjLEVBQ2QsTUFBa0IsRUFDWSxJQUFlO1FBRjdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ1ksU0FBSSxHQUFKLElBQUksQ0FBVztRQTlCdkQsa0NBQVksSUFBSSxPQUFPLEVBQVEsRUFBQztRQUV2QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFFM0IsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFH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SztnQkFFSSxZQUFZO3NCQUFyQixNQUFNO2dCQUdDLFNBQVM7c0JBRGhCLFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUd4QixPQUFPO3NCQUExQyxZQUFZO3VCQUFDLG9CQUFvQjtnQkFFMUIsV0FBVztzQkFEbEIsZUFBZTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eSAqL1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZW51Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBR19NRU5VLCBNZW51QmFzZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgICNtZW51VHJpZ2dlclxuICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgY2xhc3M9XCJtZW51LXRyaWdnZXJcIlxuICAgICAgW2NsYXNzLm1lbnUtdHJpZ2dlci1ib3JkZXJlZF09XCJpc0JvcmRlcmVkXCJcbiAgICAgIFtjbGFzcy5tZW51LXRyaWdnZXItcm91bmRlZF09XCJpc1JvdW5kZWRcIlxuICAgICAgW2NsYXNzLm1lbnUtdHJpZ2dlci1sYXJnZV09XCJzaXplID09PSAnbGFyZ2UnXCJcbiAgICAgIFtjbGFzcy5tZW51LXRyaWdnZXItc21hbGxdPVwic2l6ZSA9PT0gJ3NtYWxsJ1wiXG4gICAgICAoY2xpY2spPVwib25UcmlnZ2VyQ2xpY2soJGV2ZW50KVwiXG4gICAgICAoa2V5dXApPVwib25UcmlnZ2VyS2V5VXAoJGV2ZW50KVwiXG4gICAgPlxuICAgICAge3sgbWVudVRpdGxlIH19XG4gICAgICA8c3BhbiBjbGFzcz1cIm1lbnUtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiB7eyBpY29uIH19IDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtc1wiIHJvbGU9XCJtZW51XCIgKm5nSWY9XCJfaXNFeHBhbmRlZCQgfCBhc3luY1wiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50Py50ZW1wbGF0ZVJlZiA/PyBudWxsXCJcbiAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jc3MnLCAnLi9tZW51LWl0ZW0uY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsIC8vIFdpdGhvdXQgaXQsIHBvc2l0aW9uaW5nIG9mIHRoZSBtZW51IGl0ZW1zIGlzIG9mZlxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gQWxsb3cgY2hpbGRyZW4gb2YgdGhpcyBgTWVudUNvbXBvbmVudGAgaW4gdGhlIERPTSB0byBpbmplY3QgYSByZWZlcmVuY2UgdG8gaXQgKGUuZy4gYE1lbnVJdGVtRGlyZWN0aXZlYCBkb2VzIHRoaXMuKVxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFHX01FTlUsIHVzZUV4aXN0aW5nOiBNZW51Q29tcG9uZW50IH1dLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtZW51JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE1lbnVCYXNlLCBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveVxue1xuICAvLyBFbWl0cyB3aGVuIGBuZ09uRGVzdHJveWAgaXMgY2FsbGVkLiBXaGVuIHVzZWQgd2l0aCBgdGFrZVVudGlsYCBvcGVyYXRvcixcbiAgLy8gaGFzIHRoZSBlZmZlY3Qgb2YgY2xlYW5pbmcgdXAgZXZlbnQgbGlzdGVuZXJzIChodHRwczovL3J4anMuZGV2L2FwaS9vcGVyYXRvcnMvdGFrZVVudGlsKS5cbiAgI2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBASW5wdXQoKSBjbG9zZU9uU2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG5cbiAgQElucHV0KCkgaWNvbiA9ICfilr4nO1xuICBASW5wdXQoKSBpc0JvcmRlcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzUm91bmRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpZD86IHN0cmluZztcbiAgQElucHV0KCkgbWVudVRpdGxlID0gJ01lbnUgVGl0bGUnO1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ2xhcmdlJyB8IHVuZGVmaW5lZCB8IG51bGwgfCAnJyA9IG51bGw7XG5cbiAgQE91dHB1dCgpIHRyaWdnZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdtZW51VHJpZ2dlcicsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHByaXZhdGUgdHJpZ2dlckVsITogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD47XG5cbiAgQENvbnRlbnRDaGlsZChNZW51Q29udGVudERpcmVjdGl2ZSkgY29udGVudCE6IE1lbnVDb250ZW50RGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkcmVuKE1lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBwcml2YXRlIG1lbnVJdGVtRWxzITogUXVlcnlMaXN0PE1lbnVJdGVtRGlyZWN0aXZlPjtcblxuICBfaXNFeHBhbmRlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgZ2V0IGlzRXhwYW5kZWQoKSB7XG4gICAgLy8gRXhwb3NpbmcgdGhlIGBCZWhhdmlvclN1YmplY3RgIHZhbHVlIGFzIGEgY2xhc3MgcHJvcGVydHkgZm9yIGNvbnN1bWVyc1xuICAgIHJldHVybiB0aGlzLl9pc0V4cGFuZGVkJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGhvc3RFbDogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M/OiBEb2N1bWVudFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvYykge1xuICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvYywgJ2NsaWNrJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuI2Rlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKGUpID0+IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrcyhlKSxcbiAgICAgICAgICBlcnJvcjogY29uc29sZS5lcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4jZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdBZ25vc3RpY1VJIEFuZ3VsYXIgYE1lbnVDb21wb25lbnRgIGRpZCBub3QgZGlzY292ZXIgdGhlIGBhZ01lbnVDb250ZW50YCBhdHRyaWJ1dGUgaW4geW91ciB0ZW1wbGF0ZS4gTm8gdGVtcGxhdGUgdG8gcmVuZGVyISAnICtcbiAgICAgICAgICAnQSBzaW1wbGUgTWVudUl0ZW1zIHRlbXBsYXRlIG1heSBsb29rIHNvbWV0aGluZyBsaWtlIHRoZSBmb2xsb3dpbmc6IGBgYGh0bWxcXG48bmctdGVtcGxhdGUgYWdNZW51Q29udGVudD5cXG4gIDxidXR0b24gYWctbWVudS1pdGVtPk5lYXQhPC9idXR0b24+XFxuPC9uZy10ZW1wbGF0ZT5cXG5gYGAnXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uVHJpZ2dlckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgICB0aGlzLnRyaWdnZXJDbGljay5lbWl0KGV2ZW50KTtcbiAgICAvLyBUbyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmVcbiAgICAvLyBfdGhlIG1lbnUgd2FzIGp1c3QgZXhwYW5kZWQgYnkgdG9nZ2xpbmcgdGhlIGJlaGF2aW9yIHN1YmplY3RfXG4gICAgLy8gYnV0IHRoZSBfbWVudSBpdGVtcyBoYXZlIG5vdCB5ZXQgcmVuZGVyZWRfLFxuICAgIC8vIGhvb2sgaW50byBBbmd1bGFyJ3MgbWFpbiBjaGFuZ2UgZGV0ZWN0aW9uIG1lY2hhbmlzbS4gV2hlbiBjaGFuZ2VzIGFyZSBzdGFibGVcbiAgICAvLyAoYWthIHJlbmRlcmluZyBpcyBjb21wbGV0ZSksIGZvY3VzIHRoZSBpdGVtXG4gICAgLy8gU2VlIGFsc286IGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS96b25lXG4gICAgdGhpcy5uZ1pvbmUub25TdGFibGVcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgIHRoaXMuZm9jdXNNZW51SXRlbSh0aGlzLmdldFNlbGVjdGVkTWVudUl0ZW1JbmRleCgpID8/IDApXG4gICAgICApO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNsaWNrKCkge1xuICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9pc0V4cGFuZGVkJC5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLnRyaWdnZXJFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX2lzRXhwYW5kZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb2N1c01lbnVJdGVtKDApKTtcbiAgfVxuXG4gIGZpbmRDaGlsZEhhbmRsZUZvY3VzKGV2OiBLZXlib2FyZEV2ZW50LCBtZW51SXRlbTogTWVudUl0ZW1EaXJlY3RpdmUpIHtcbiAgICBjb25zdCBjaGlsZEluZGV4ID0gdGhpcy5tZW51SXRlbUVsc1xuICAgICAgLnRvQXJyYXkoKVxuICAgICAgLmZpbmRJbmRleCgocmVmKSA9PiByZWYgPT09IG1lbnVJdGVtKTtcbiAgICB0aGlzLmhhbmRsZU1lbnVJdGVtS2V5RG93bihldiwgY2hpbGRJbmRleCk7XG4gIH1cblxuICBvblRyaWdnZXJLZXlVcChldjogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3RlZE1lbnVJdGVtSW5kZXgoKSA/PyAwO1xuICAgIHN3aXRjaCAoZXYua2V5KSB7XG4gICAgICBjYXNlICdVcCc6IC8vIFRoZXNlIGZpcnN0IGNhc2VzIGFyZSBJRUVkZ2UgOihcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLmZvY3VzTWVudUl0ZW0oaW5kZXgsICdkZXNjJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRG93bic6XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLmZvY3VzTWVudUl0ZW0oaW5kZXgsICdhc2MnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgIGNhc2UgJ0Fycm93SG9tZSc6XG4gICAgICAgIHRoaXMuZm9jdXNNZW51SXRlbSgwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgY2FzZSAnQXJyb3dFbmQnOlxuICAgICAgICB0aGlzLmZvY3VzTWVudUl0ZW0odGhpcy5tZW51SXRlbUVscy5sZW5ndGggLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgIHRoaXMuZm9jdXNNZW51SXRlbShpbmRleCA/PyAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWVudUl0ZW1LZXlEb3duKGV2OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldi5rZXkpIHtcbiAgICAgIGNhc2UgJ1VwJzogLy8gVGhlc2UgZmlyc3QgY2FzZXMgYXJlIElFRWRnZSA6KFxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuZm9jdXNNZW51SXRlbShpbmRleCwgJ2Rlc2MnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEb3duJzpcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHRoaXMuZm9jdXNNZW51SXRlbShpbmRleCwgJ2FzYycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgY2FzZSAnQXJyb3dIb21lJzpcbiAgICAgICAgdGhpcy5mb2N1c01lbnVJdGVtKDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICBjYXNlICdBcnJvd0VuZCc6XG4gICAgICAgIHRoaXMuZm9jdXNNZW51SXRlbSh0aGlzLm1lbnVJdGVtRWxzLmxlbmd0aCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgdGhpcy5mb2N1c01lbnVJdGVtKGluZGV4KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmb2N1c01lbnVJdGVtKGluZGV4OiBudW1iZXIsIGRpcmVjdGlvbj86IHN0cmluZykge1xuICAgIGxldCBpID0gaW5kZXg7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rlc2MnKSB7XG4gICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLm1lbnVJdGVtRWxzLnRvQXJyYXkoKTtcblxuICAgIC8vIENpcmN1bGFyIG5hdmlnYXRpb25cbiAgICAvL1xuICAgIC8vIElmIHdlJ3ZlIHdlbnQgYmV5b25kIFwic3RhcnRcIiBjaXJjbGUgYXJvdW5kIHRvIGxhc3RcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIGkgPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSBpZiAoaSA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIC8vIFdlJ3ZlIHdlbnQgYmV5b25kIFwibGFzdFwiIHNvIGNpcmNsZSBhcm91bmQgdG8gZmlyc3RcbiAgICAgIGkgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRNZW51SXRlbVJlZiA9IGl0ZW1zW2ldO1xuICAgIGNvbnN0IG5leHRNZW51ID0gbmV4dE1lbnVJdGVtUmVmID8gbmV4dE1lbnVJdGVtUmVmIDogbnVsbDtcblxuICAgIGlmIChuZXh0TWVudSkge1xuICAgICAgLy8gRWRnZSBjYXNlOiBXZSBoaXQgYSB0YWIgYnV0dG9uIHRoYXQncyBiZWVuIGRpc2FibGVkLiBJZiBzbywgd2UgcmVjdXJzZSwgYnV0XG4gICAgICAvLyBvbmx5IGlmIHdlJ3ZlIGJlZW4gc3VwcGxpZWQgYSBgZGlyZWN0aW9uYC4gT3RoZXJ3aXNlLCBub3RoaW5nIGxlZnQgdG8gZG8uXG4gICAgICBpZiAobmV4dE1lbnUuZGlzYWJsZWQgJiYgZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIFJldHJ5IHdpdGggbmV3IGBpYCBpbmRleCBnb2luZyBpbiBzYW1lIGRpcmVjdGlvblxuICAgICAgICB0aGlzLmZvY3VzTWVudUl0ZW0oaSwgZGlyZWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vbWluYWwgY2FzZSBpcyB0byBqdXN0IGZvY3VzIG5leHQgdGFiIDopXG4gICAgICAgIG5leHRNZW51LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVPdXRzaWRlQ2xpY2tzKGU6IEV2ZW50IHwgbnVsbCkge1xuICAgIGlmIChlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiB0aGlzLmNsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgIGlmICghdGhpcy5pc0luc2lkZShlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0V4cGFuZGVkICYmIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHRhcmdldElzTWVudUl0ZW0gPSB0aGlzLm1lbnVJdGVtRWxzXG4gICAgICAgIC5tYXAoKG1lbnUpID0+IG1lbnUuZWwubmF0aXZlRWxlbWVudClcbiAgICAgICAgLmluY2x1ZGVzKGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KTtcbiAgICAgIGlmICghdGFyZ2V0SXNNZW51SXRlbSkge1xuICAgICAgICAvLyBUcmFwIGZvY3VzIHdoZW4gYSBjbGljayBvY2N1cnMgb3V0c2lkZSwgc28gdGhhdCB0aGUgdXNlciBtdXN0IGludGVyYWN0IHdpdGggdGhlIG1lbnVcbiAgICAgICAgdGhpcy5mb2N1c01lbnVJdGVtKHRoaXMuZ2V0U2VsZWN0ZWRNZW51SXRlbUluZGV4KCkgPz8gMCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0luc2lkZShlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5ob3N0RWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmhvc3RFbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGVsID09PSBjaGlsZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0ZWRNZW51SXRlbUluZGV4KCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMubWVudUl0ZW1FbHMudG9BcnJheSgpLmZpbmRJbmRleCgocmVmKSA9PiByZWYuaXNTZWxlY3RlZCk7XG4gICAgcmV0dXJuIGlkeCA+IC0xID8gaWR4IDogbnVsbDtcbiAgfVxufVxuIl19