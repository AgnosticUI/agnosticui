import { Input, Output, EventEmitter, ChangeDetectionStrategy, Component, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PaginationComponent {
    constructor() {
        this.justify = '';
        this.ariaLabel = 'Pagination';
        this.current = 1;
        this.pages = [];
        this.isBordered = false;
        this.isFirstLast = true;
        this.navigationLabels = {
            first: 'First',
            last: 'Last',
            previous: 'Previous',
            next: 'Next',
        };
        this.onPageChange = new EventEmitter();
    }
    onFirst() {
        this.onPageChange.emit(1);
    }
    onPrevious() {
        this.onPageChange.emit(this.current - 1);
    }
    onNext() {
        this.onPageChange.emit(this.current + 1);
    }
    onLast() {
        this.onPageChange.emit(this.getLastPageNumber());
    }
    handleClick(page) {
        this.onPageChange.emit(page);
    }
    isOnFirst() {
        return this.current === 1;
    }
    getLastPageNumber() {
        return this.pages[this.pages.length - 1];
    }
    isOnLast() {
        return this.current === this.getLastPageNumber();
    }
    get paginationContainerClasses() {
        return [
            'pagination-container',
            !!this.justify ? `pagination-${this.justify}` : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationClasses() {
        return ['pagination', !!this.isBordered ? 'pagination-bordered' : '']
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationItemFirstClasses() {
        return [
            'pagination-item',
            this.isOnFirst() ? 'pagination-item-disabled' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationItemLastClasses() {
        return [
            'pagination-item',
            this.isOnLast() ? 'pagination-item-disabled' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get paginationButtonClass() {
        return 'pagination-button';
    }
    paginationItemClassesForPage(page) {
        return [
            'pagination-item',
            page === this.current ? 'pagination-item-active' : '',
            page === '...' ? 'pagination-item-gap' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    ariaForCurrentPage(page) {
        return `Page ${page},  current page`;
    }
    firstLabel() {
        return `${String.fromCharCode(171)} ${this.navigationLabels?.first}`;
    }
    previousLabel() {
        return `${String.fromCharCode(8249)} ${this.navigationLabels?.previous}`;
    }
    nextLabel() {
        return `${this.navigationLabels?.next} ${String.fromCharCode(8250)}`;
    }
    lastLabel() {
        return `${this.navigationLabels?.last} ${String.fromCharCode(187)}`;
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PaginationComponent, selector: "ag-pagination", inputs: { justify: "justify", ariaLabel: "ariaLabel", current: "current", pages: "pages", isBordered: "isBordered", isFirstLast: "isFirstLast", navigationLabels: "navigationLabels" }, outputs: { onPageChange: "onPageChange" }, ngImport: i0, template: `<nav
    [class]="paginationContainerClasses"
    [attr.aria-label]="ariaLabel"
  >
    <ul [class]="paginationClasses">
      <li *ngIf="isFirstLast" [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onFirst()"
          [disabled]="isOnFirst()"
          [attr.aria-disabled]="isOnFirst()"
          aria-label="Goto page 1"
        >
          {{ firstLabel() }}
        </button>
      </li>
      <li [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onPrevious()"
          aria-label="Goto previous page"
          [attr.aria-disabled]="isOnFirst()"
          [disabled]="isOnFirst()"
        >
          {{ previousLabel() }}
        </button>
      </li>
      <li
        *ngFor="let page of pages; index as i"
        [class]="paginationItemClassesForPage(page)"
      >
        <button
          *ngIf="page === current"
          type="button"
          [class]="paginationButtonClass"
          (click)="handleClick(page)"
          aria-current="page"
          [attr.aria-label]="ariaForCurrentPage(page)"
        >
          {{ page }}
        </button>
        <span *ngIf="page === '...'; else notGap">{{ page }}</span>
        <ng-template #notGap>
          <button
            *ngIf="page !== current"
            type="button"
            [class]="paginationButtonClass"
            (click)="handleClick(page)"
            [attr.aria-label]="'Goto page ' + page"
          >
            {{ page }}
          </button>
        </ng-template>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          aria-label="Goto next page"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          (click)="onNext()"
        >
          {{ nextLabel() }}
        </button>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onLast()"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          aria-label="Goto last page"
        >
          {{ lastLabel() }}
        </button>
      </li>
    </ul>
  </nav> `, isInline: true, styles: [".pagination-container{display:flex}.pagination{display:flex;list-style:none}.pagination-item{padding-inline-start:var(--fluid-2);padding-inline-end:var(--fluid-2)}.pagination-button{--agnostic-pagination-button-color: var(--agnostic-primary);color:var(--agnostic-pagination-button-color);display:inline-block;line-height:var(--fluid-20);padding-inline-start:var(--fluid-12);padding-inline-end:var(--fluid-12);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6);border-radius:var(--agnostic-radius);border:1px solid transparent;background-color:transparent}.pagination-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.pagination-button:focus{transition-duration:.001ms!important}}.pagination-item-disabled{cursor:not-allowed}.pagination-button:disabled,.pagination-item-disabled .pagination-button{color:var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));opacity:80%;pointer-events:none}.pagination-item-active .pagination-button{background-color:var(--agnostic-primary);color:var(--agnostic-light)}.pagination-bordered .pagination-item-active .pagination-button{background-color:unset;border:1px solid var(--agnostic-primary);color:var(--agnostic-primary)}.pagination-item:hover .pagination-button{text-decoration:none}.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button{background-color:var(--agnostic-gray-extra-light)}.pagination-item-gap{transform:translateY(var(--fluid-6))}.pagination-center{justify-content:center}.pagination-start{justify-content:flex-start}.pagination-end{justify-content:flex-end}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-pagination', template: `<nav
    [class]="paginationContainerClasses"
    [attr.aria-label]="ariaLabel"
  >
    <ul [class]="paginationClasses">
      <li *ngIf="isFirstLast" [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onFirst()"
          [disabled]="isOnFirst()"
          [attr.aria-disabled]="isOnFirst()"
          aria-label="Goto page 1"
        >
          {{ firstLabel() }}
        </button>
      </li>
      <li [class]="paginationItemFirstClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onPrevious()"
          aria-label="Goto previous page"
          [attr.aria-disabled]="isOnFirst()"
          [disabled]="isOnFirst()"
        >
          {{ previousLabel() }}
        </button>
      </li>
      <li
        *ngFor="let page of pages; index as i"
        [class]="paginationItemClassesForPage(page)"
      >
        <button
          *ngIf="page === current"
          type="button"
          [class]="paginationButtonClass"
          (click)="handleClick(page)"
          aria-current="page"
          [attr.aria-label]="ariaForCurrentPage(page)"
        >
          {{ page }}
        </button>
        <span *ngIf="page === '...'; else notGap">{{ page }}</span>
        <ng-template #notGap>
          <button
            *ngIf="page !== current"
            type="button"
            [class]="paginationButtonClass"
            (click)="handleClick(page)"
            [attr.aria-label]="'Goto page ' + page"
          >
            {{ page }}
          </button>
        </ng-template>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          aria-label="Goto next page"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          (click)="onNext()"
        >
          {{ nextLabel() }}
        </button>
      </li>
      <li [class]="paginationItemLastClasses">
        <button
          type="button"
          [class]="paginationButtonClass"
          (click)="onLast()"
          [disabled]="isOnLast()"
          [attr.aria-disabled]="isOnLast()"
          aria-label="Goto last page"
        >
          {{ lastLabel() }}
        </button>
      </li>
    </ul>
  </nav> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".pagination-container{display:flex}.pagination{display:flex;list-style:none}.pagination-item{padding-inline-start:var(--fluid-2);padding-inline-end:var(--fluid-2)}.pagination-button{--agnostic-pagination-button-color: var(--agnostic-primary);color:var(--agnostic-pagination-button-color);display:inline-block;line-height:var(--fluid-20);padding-inline-start:var(--fluid-12);padding-inline-end:var(--fluid-12);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6);border-radius:var(--agnostic-radius);border:1px solid transparent;background-color:transparent}.pagination-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.pagination-button:focus{transition-duration:.001ms!important}}.pagination-item-disabled{cursor:not-allowed}.pagination-button:disabled,.pagination-item-disabled .pagination-button{color:var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));opacity:80%;pointer-events:none}.pagination-item-active .pagination-button{background-color:var(--agnostic-primary);color:var(--agnostic-light)}.pagination-bordered .pagination-item-active .pagination-button{background-color:unset;border:1px solid var(--agnostic-primary);color:var(--agnostic-primary)}.pagination-item:hover .pagination-button{text-decoration:none}.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button{background-color:var(--agnostic-gray-extra-light)}.pagination-item-gap{transform:translateY(var(--fluid-6))}.pagination-center{justify-content:center}.pagination-start{justify-content:flex-start}.pagination-end{justify-content:flex-end}\n"] }]
        }], propDecorators: { justify: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], current: [{
                type: Input
            }], pages: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isFirstLast: [{
                type: Input
            }], navigationLabels: [{
                type: Input
            }], onPageChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2FnL3NyYy9saWIvcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7OztBQWdHdkIsTUFBTSxPQUFPLG1CQUFtQjtJQXZGaEM7UUF3RlcsWUFBTyxHQUFxQyxFQUFFLENBQUM7UUFDL0MsY0FBUyxHQUFZLFlBQVksQ0FBQztRQUNsQyxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixnQkFBVyxHQUFhLElBQUksQ0FBQztRQUM3QixxQkFBZ0IsR0FBc0I7WUFDN0MsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQztRQUVRLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7S0F5RjNFO0lBdkZRLE9BQU87UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixF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O0lBQ0QsU0FBUztRQUNQLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsU0FBUztRQUNQLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQUFDOztnSEF0R1UsbUJBQW1CO29HQUFuQixtQkFBbUIsd1JBckZwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBaUZGOzJGQUlHLG1CQUFtQjtrQkF2Ri9CLFNBQVM7K0JBQ0UsZUFBZSxZQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFpRkYsbUJBRVMsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQU9JLFlBQVk7c0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25MYWJlbHMge1xuICBmaXJzdDogc3RyaW5nO1xuICBwcmV2aW91czogc3RyaW5nO1xuICBuZXh0OiBzdHJpbmc7XG4gIGxhc3Q6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPG5hdlxuICAgIFtjbGFzc109XCJwYWdpbmF0aW9uQ29udGFpbmVyQ2xhc3Nlc1wiXG4gICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICA+XG4gICAgPHVsIFtjbGFzc109XCJwYWdpbmF0aW9uQ2xhc3Nlc1wiPlxuICAgICAgPGxpICpuZ0lmPVwiaXNGaXJzdExhc3RcIiBbY2xhc3NdPVwicGFnaW5hdGlvbkl0ZW1GaXJzdENsYXNzZXNcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIFtjbGFzc109XCJwYWdpbmF0aW9uQnV0dG9uQ2xhc3NcIlxuICAgICAgICAgIChjbGljayk9XCJvbkZpcnN0KClcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpc09uRmlyc3QoKVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJpc09uRmlyc3QoKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkdvdG8gcGFnZSAxXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGZpcnN0TGFiZWwoKSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgW2NsYXNzXT1cInBhZ2luYXRpb25JdGVtRmlyc3RDbGFzc2VzXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBbY2xhc3NdPVwicGFnaW5hdGlvbkJ1dHRvbkNsYXNzXCJcbiAgICAgICAgICAoY2xpY2spPVwib25QcmV2aW91cygpXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiR290byBwcmV2aW91cyBwYWdlXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImlzT25GaXJzdCgpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNPbkZpcnN0KClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgcHJldmlvdXNMYWJlbCgpIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlczsgaW5kZXggYXMgaVwiXG4gICAgICAgIFtjbGFzc109XCJwYWdpbmF0aW9uSXRlbUNsYXNzZXNGb3JQYWdlKHBhZ2UpXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICpuZ0lmPVwicGFnZSA9PT0gY3VycmVudFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgW2NsYXNzXT1cInBhZ2luYXRpb25CdXR0b25DbGFzc1wiXG4gICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKHBhZ2UpXCJcbiAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFGb3JDdXJyZW50UGFnZShwYWdlKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBwYWdlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInBhZ2UgPT09ICcuLi4nOyBlbHNlIG5vdEdhcFwiPnt7IHBhZ2UgfX08L3NwYW4+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90R2FwPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwicGFnZSAhPT0gY3VycmVudFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIFtjbGFzc109XCJwYWdpbmF0aW9uQnV0dG9uQ2xhc3NcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKHBhZ2UpXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ0dvdG8gcGFnZSAnICsgcGFnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgcGFnZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBbY2xhc3NdPVwicGFnaW5hdGlvbkl0ZW1MYXN0Q2xhc3Nlc1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgW2NsYXNzXT1cInBhZ2luYXRpb25CdXR0b25DbGFzc1wiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkdvdG8gbmV4dCBwYWdlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNPbkxhc3QoKVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJpc09uTGFzdCgpXCJcbiAgICAgICAgICAoY2xpY2spPVwib25OZXh0KClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgbmV4dExhYmVsKCkgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIFtjbGFzc109XCJwYWdpbmF0aW9uSXRlbUxhc3RDbGFzc2VzXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBbY2xhc3NdPVwicGFnaW5hdGlvbkJ1dHRvbkNsYXNzXCJcbiAgICAgICAgICAoY2xpY2spPVwib25MYXN0KClcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpc09uTGFzdCgpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImlzT25MYXN0KClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJHb3RvIGxhc3QgcGFnZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBsYXN0TGFiZWwoKSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9uYXY+IGAsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkganVzdGlmeT86ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJycgPSAnJztcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogc3RyaW5nID0gJ1BhZ2luYXRpb24nO1xuICBASW5wdXQoKSBjdXJyZW50OiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBwYWdlczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgaXNCb3JkZXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNGaXJzdExhc3Q/OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbmF2aWdhdGlvbkxhYmVscz86IE5hdmlnYXRpb25MYWJlbHMgPSB7XG4gICAgZmlyc3Q6ICdGaXJzdCcsXG4gICAgbGFzdDogJ0xhc3QnLFxuICAgIHByZXZpb3VzOiAnUHJldmlvdXMnLFxuICAgIG5leHQ6ICdOZXh0JyxcbiAgfTtcblxuICBAT3V0cHV0KCkgb25QYWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHB1YmxpYyBvbkZpcnN0KCk6IHZvaWQge1xuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoMSk7XG4gIH1cbiAgcHVibGljIG9uUHJldmlvdXMoKTogdm9pZCB7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnQgLSAxKTtcbiAgfVxuICBwdWJsaWMgb25OZXh0KCk6IHZvaWQge1xuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQodGhpcy5jdXJyZW50ICsgMSk7XG4gIH1cbiAgcHVibGljIG9uTGFzdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHRoaXMuZ2V0TGFzdFBhZ2VOdW1iZXIoKSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xuICB9XG5cbiAgaXNPbkZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPT09IDE7XG4gIH1cblxuICBnZXRMYXN0UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlc1t0aGlzLnBhZ2VzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgaXNPbkxhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudCA9PT0gdGhpcy5nZXRMYXN0UGFnZU51bWJlcigpO1xuICB9XG5cbiAgZ2V0IHBhZ2luYXRpb25Db250YWluZXJDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAncGFnaW5hdGlvbi1jb250YWluZXInLFxuICAgICAgISF0aGlzLmp1c3RpZnkgPyBgcGFnaW5hdGlvbi0ke3RoaXMuanVzdGlmeX1gIDogJycsXG4gICAgXVxuICAgICAgLmZpbHRlcigoY2wpID0+IGNsKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuICBnZXQgcGFnaW5hdGlvbkNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIFsncGFnaW5hdGlvbicsICEhdGhpcy5pc0JvcmRlcmVkID8gJ3BhZ2luYXRpb24tYm9yZGVyZWQnIDogJyddXG4gICAgICAuZmlsdGVyKChjbCkgPT4gY2wpXG4gICAgICAuam9pbignICcpO1xuICB9XG4gIGdldCBwYWdpbmF0aW9uSXRlbUZpcnN0Q2xhc3NlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3BhZ2luYXRpb24taXRlbScsXG4gICAgICB0aGlzLmlzT25GaXJzdCgpID8gJ3BhZ2luYXRpb24taXRlbS1kaXNhYmxlZCcgOiAnJyxcbiAgICBdXG4gICAgICAuZmlsdGVyKChjbCkgPT4gY2wpXG4gICAgICAuam9pbignICcpO1xuICB9XG4gIGdldCBwYWdpbmF0aW9uSXRlbUxhc3RDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAncGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgIHRoaXMuaXNPbkxhc3QoKSA/ICdwYWdpbmF0aW9uLWl0ZW0tZGlzYWJsZWQnIDogJycsXG4gICAgXVxuICAgICAgLmZpbHRlcigoY2wpID0+IGNsKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuICBnZXQgcGFnaW5hdGlvbkJ1dHRvbkNsYXNzKCkge1xuICAgIHJldHVybiAncGFnaW5hdGlvbi1idXR0b24nO1xuICB9XG5cbiAgcGFnaW5hdGlvbkl0ZW1DbGFzc2VzRm9yUGFnZShwYWdlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3BhZ2luYXRpb24taXRlbScsXG4gICAgICBwYWdlID09PSB0aGlzLmN1cnJlbnQgPyAncGFnaW5hdGlvbi1pdGVtLWFjdGl2ZScgOiAnJyxcbiAgICAgIHBhZ2UgPT09ICcuLi4nID8gJ3BhZ2luYXRpb24taXRlbS1nYXAnIDogJycsXG4gICAgXVxuICAgICAgLmZpbHRlcigoY2wpID0+IGNsKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGFyaWFGb3JDdXJyZW50UGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYFBhZ2UgJHtwYWdlfSwgIGN1cnJlbnQgcGFnZWA7XG4gIH1cbiAgZmlyc3RMYWJlbCgpIHtcbiAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzEpfSAke3RoaXMubmF2aWdhdGlvbkxhYmVscz8uZmlyc3R9YDtcbiAgfVxuICBwcmV2aW91c0xhYmVsKCkge1xuICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDgyNDkpfSAke3RoaXMubmF2aWdhdGlvbkxhYmVscz8ucHJldmlvdXN9YDtcbiAgfVxuICBuZXh0TGFiZWwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMubmF2aWdhdGlvbkxhYmVscz8ubmV4dH0gJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDgyNTApfWA7XG4gIH1cbiAgbGFzdExhYmVsKCkge1xuICAgIHJldHVybiBgJHt0aGlzLm5hdmlnYXRpb25MYWJlbHM/Lmxhc3R9ICR7U3RyaW5nLmZyb21DaGFyQ29kZSgxODcpfWA7XG4gIH1cbn1cbiJdfQ==