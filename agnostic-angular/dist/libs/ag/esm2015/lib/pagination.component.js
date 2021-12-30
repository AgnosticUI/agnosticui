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
        var _a;
        return `${String.fromCharCode(171)} ${(_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.first}`;
    }
    previousLabel() {
        var _a;
        return `${String.fromCharCode(8249)} ${(_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.previous}`;
    }
    nextLabel() {
        var _a;
        return `${(_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.next} ${String.fromCharCode(8250)}`;
    }
    lastLabel() {
        var _a;
        return `${(_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.last} ${String.fromCharCode(187)}`;
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: PaginationComponent, selector: "ag-pagination", inputs: { justify: "justify", ariaLabel: "ariaLabel", current: "current", pages: "pages", isBordered: "isBordered", isFirstLast: "isFirstLast", navigationLabels: "navigationLabels" }, outputs: { onPageChange: "onPageChange" }, ngImport: i0, template: `<nav
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-pagination',
                    template: `<nav
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
  </nav> `,
                    styleUrls: ['./pagination.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
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
//# sourceMappingURL=pagination.component.js.map