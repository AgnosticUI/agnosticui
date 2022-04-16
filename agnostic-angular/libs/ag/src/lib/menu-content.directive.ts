import { Directive, TemplateRef } from '@angular/core';

/**
 * An attribute directive designed to be used with the Agnostic UI Angular Menu components.
 * This directive should be added to the `ng-template` that surrounds the Menu Item buttons, which
 * are the content of the menu. Under the hood, the Angular library uses it to support conditional rendering
 * of your menu items, so they're only present in the DOM tree when the menu is open.
 *
 * Based on [Angular Content Projection](https://angular.io/guide/content-projection#conditional-content-projection)
 *
 * Example usage:
 *
 * ```html
 * <ag-menu class="my-menu"
 *           menuTitle="Default Menu"
 *           (triggerClick)="log('triggerFromConsumer', $event)">
 *   <!-- Mark the Template for the menu components -->
 *   <ng-template agMenuContent>
 *     <button ag-menu-item
 *             *ngFor="let item of ['Item 1', 'Item 2', 'Item 3']; let idx = index"
 *             [disabled]=" false"
 *             (keydown)="log('keydownFromConsumer', $event)"
 *             (click)="log('clickFromConsumer', $event);">
 *       {{ item }} 😅😅
 *     </button>
 *   </ng-template>
 * </ag-menu>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[agMenuContent]',
})
export class MenuContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
