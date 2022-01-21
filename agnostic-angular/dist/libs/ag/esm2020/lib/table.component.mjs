import { Input, ChangeDetectionStrategy, Component, TemplateRef, } from '@angular/core';
import { combineLatest, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TableComponent {
    constructor() {
        this.captionPosition = 'hidden';
        this.isUppercasedHeaders = false;
        this.isBordered = false;
        this.isBorderless = false;
        this.isStriped = false;
        this.isHoverable = false;
        this.isStacked = false;
        this.tableSize = '';
        this.sortingKey$ = new BehaviorSubject('');
        this.direction$ = new BehaviorSubject('none');
        this.preserveOriginalOrder = (a, b) => {
            return a;
        };
        this.getColByName = (row, name) => {
            return row[name];
        };
        this.rows$ = new BehaviorSubject(this.rows);
    }
    internalSort(rowLeft, rowRight) {
        let colLeft = rowLeft[this.sortingKey$.value] === null ||
            rowLeft[this.sortingKey$.value] === undefined
            ? -Infinity
            : rowLeft[this.sortingKey$.value];
        let colRight = rowRight[this.sortingKey$.value] === null ||
            rowRight[this.sortingKey$.value] === undefined
            ? -Infinity
            : rowRight[this.sortingKey$.value];
        const headerWithCustomSortFunction = this.headers.find((h) => h.key === this.sortingKey$.value && !!h.sortFn);
        if (headerWithCustomSortFunction && headerWithCustomSortFunction.sortFn) {
            return headerWithCustomSortFunction.sortFn(colLeft, colRight);
        }
        colLeft =
            typeof colLeft === 'string'
                ? colLeft.toLowerCase().replace(/(^\$|,)/g, '')
                : colLeft;
        colRight =
            typeof colRight === 'string'
                ? colRight.toLowerCase().replace(/(^\$|,)/g, '')
                : colRight;
        colLeft = !Number.isNaN(Number(colLeft)) ? Number(colLeft) : colLeft;
        colRight = !Number.isNaN(Number(colRight)) ? Number(colRight) : colRight;
        if (colLeft > colRight) {
            return 1;
        }
        if (colLeft < colRight) {
            return -1;
        }
        return 0;
    }
    descendingSort(row1, row2) {
        return this.internalSort(row1, row2) * -1;
    }
    ngOnInit() {
        combineLatest([this.sortingKey$, this.direction$]).subscribe((value) => {
            let rows = [...this.rows];
            const [_, direction] = value;
            if (direction === 'ascending') {
                rows.sort((a, b) => this.internalSort(a, b));
            }
            else if (direction === 'descending') {
                rows.sort((a, b) => this.descendingSort(a, b));
            }
            else {
                rows = [...this.rows];
            }
            this.rows$.next(rows);
        });
    }
    handleSortClicked(headerKey) {
        if (this.sortingKey$.value !== headerKey) {
            this.direction$.next('none');
            this.sortingKey$.next(headerKey);
        }
        switch (this.direction$.value) {
            case 'ascending':
                this.direction$.next('descending');
                break;
            case 'descending':
                this.direction$.next('none');
                break;
            case 'none':
                this.direction$.next('ascending');
                break;
            default:
                console.warn('Table sorting only supports directions: ascending | descending | none');
        }
    }
    getSortingClassesFor(headerKey) {
        if (this.sortingKey$.value === headerKey) {
            return [
                'icon-sort',
                this.direction$.value !== 'none'
                    ? `icon-sort-${this.direction$.value}`
                    : '',
            ]
                .filter((c) => c.length)
                .join(' ');
        }
        return 'icon-sort';
    }
    getSortDirectionFor(headerKey) {
        if (this.sortingKey$.value !== headerKey) {
            return 'none';
        }
        else {
            return this.direction$.value;
        }
    }
    get captionClasses() {
        return [
            this.captionPosition === 'hidden' ? 'screenreader-only' : '',
            this.captionPosition !== 'hidden'
                ? `caption-${this.captionPosition}`
                : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
    get tableResponsiveClasses() {
        return this.responsiveSize
            ? `table-responsive-${this.responsiveSize}`
            : 'table-responsive';
    }
    get tableClasses() {
        return [
            'table',
            this.tableSize ? `table-${this.tableSize}` : '',
            this.isUppercasedHeaders ? 'table-caps' : '',
            this.isBordered ? 'table-bordered' : '',
            this.isBorderless ? 'table-borderless' : '',
            this.isStriped ? 'table-striped' : '',
            this.isHoverable ? 'table-hoverable' : '',
            this.isStacked ? 'table-stacked' : '',
        ]
            .filter((cl) => cl)
            .join(' ');
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TableComponent, selector: "ag-table", inputs: { rowRenderTemplate: "rowRenderTemplate", headers: "headers", rows: "rows", caption: "caption", captionPosition: "captionPosition", isUppercasedHeaders: "isUppercasedHeaders", isBordered: "isBordered", isBorderless: "isBorderless", isStriped: "isStriped", isHoverable: "isHoverable", isStacked: "isStacked", tableSize: "tableSize", responsiveSize: "responsiveSize" }, ngImport: i0, template: `<div [class]="tableResponsiveClasses">
    <table [class]="tableClasses">
      <caption [class]="captionClasses">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th
            *ngFor="let headerCol of headers"
            [attr.aria-sort]="getSortDirectionFor(headerCol.key)"
            scope="col"
            [style.width]="headerCol.width ? headerCol.width : 'auto'"
          >
            <div
              class="table-header-container"
              *ngIf="headerCol.sortable; else unsortable"
            >
              <span class="table-sort-label">{{ headerCol.label }}</span>
              <button
                type="button"
                class="table-sort"
                (click)="handleSortClicked(headerCol.key)"
              >
                <span class="screenreader-only">{{ headerCol.label }}</span>
                <span [class]="getSortingClassesFor(headerCol.key)"></span>
              </button>
            </div>
            <ng-template #unsortable>
              {{ headerCol.label }}
            </ng-template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows$ | async; index as i">
          <td
            *ngFor="
              let col of row | keyvalue: preserveOriginalOrder;
              index as cIndex
            "
          >
            <ng-template #defaultRow>
              {{ getColByName(row, col.key) }}
            </ng-template>
            <ng-container
              [ngTemplateOutlet]="
                rowRenderTemplate ? rowRenderTemplate : defaultRow
              "
              [ngTemplateOutletContext]="{
                $implicit: getColByName(row, col.key),
                index: cIndex
              }"
            >
            </ng-container>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`, isInline: true, styles: [".table{--table-bg: transparent;--table-accent-bg: transparent;--table-striped-color: var(--agnostic-dark);--table-striped-bg: rgb(0 0 0 / 2.5%);--table-active-color: var(--agnostic-dark);--table-active-bg: rgb(0 0 0 / 1.5%);--table-hoverable-color: var(--agnostic-dark);--table-hoverable-bg: var(--agnostic-table-hover-bg, #f1faff);width:100%;margin-bottom:var(--fluid-16);color:var(--agnostic-dark);vertical-align:top;border-color:var(--agnostic-table-border-color, var(--agnostic-gray-light))}.table>:not(caption)>*>*{padding:var(--fluid-8) var(--fluid-8);background-color:var(--table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table thead th{font-weight:600}.table-caps thead th{font-size:var(--fluid-12);text-transform:uppercase}.table tbody td,.table tbody th{font-weight:400}.table>:not(thead):not(caption){border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.caption-top{caption-side:top}.caption-bottom{caption-side:bottom}.caption-bottom,.caption-top{padding-block-start:var(--fluid-12);padding-block-end:var(--fluid-12);text-align:start}.caption-end{text-align:end}.table-small>:not(caption)>*>*{padding:var(--fluid-4) var(--fluid-4)}.table-large>:not(caption)>*>*{padding:var(--fluid-12) var(--fluid-12)}.table-xlarge>:not(caption)>*>*{padding:var(--fluid-18) var(--fluid-18)}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--table-accent-bg: var(--table-striped-bg);color:var(--table-striped-color)}.table-active{--table-accent-bg: var(--table-active-bg);color:var(--table-active-color)}.table-hoverable>tbody>tr:hover>*{--table-accent-bg: var(--table-hoverable-bg);color:var(--table-hoverable-color)}.table-stacked thead{display:none}.table-stacked tr,.table-stacked tbody th,.table-stacked tbody td{display:block;width:100%}.table-stacked tbody th,.table-stacked tbody td{border-bottom-width:0}.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-stacked tr{border-bottom:var(--fluid-2) solid var(--agnostic-gray-light);border-top-width:0}.table-stacked th[data-label]:before,.table-stacked td[data-label]:before{content:attr(data-label);display:block;font-weight:600;margin:-.5rem -1rem 0;padding:var(--fluid-12) var(--fluid-16) var(--fluid-6)}.table-stacked tr th:first-child,.table-stacked tr td:first-child{border-top-width:0}.table-stacked tr:nth-child(odd) td,.table-stacked tr:nth-child(odd) th{background-color:inherit}.table-stacked tr:first-child th:first-child,.table-stacked tr:first-child td:first-child{border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.table-stacked th[data-label],.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width: 576px){.table-responsive-small{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 768px){.table-responsive-medium{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 992px){.table-responsive-large{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1200px){.table-responsive-xlarge{overflow-x:auto;-webkit-overflow-scrolling:touch}}.table-header-container{display:flex;align-items:center}.table-sort-label{flex:1;padding-inline-end:.5rem;text-align:left}.table-sort{flex:0 1 var(--fluid-48);background-color:transparent;border-color:transparent;border-width:0;cursor:pointer;display:flex;justify-content:center;padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2)}.icon-sort{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m15 13-5 5-5-5M5 7l5-5 5 5' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\");width:1.125rem;height:1.125rem}.icon-sort-ascending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m9.221 6.365-4.963 5.86c-.586.693-.11 1.775.78 1.775h9.926c.2 0 .394-.059.561-.17.168-.111.3-.27.383-.457a1.102 1.102 0 0 0-.165-1.147l-4.963-5.86a1.04 1.04 0 0 0-.351-.27 1.007 1.007 0 0 0-1.208.27v-.001Z' fill='%23000' /%3E%3C/svg%3E\")}.icon-sort-descending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m10.778 13.635 4.964-5.86c.586-.693.11-1.775-.78-1.775H5.037a1.01 1.01 0 0 0-.561.17c-.168.111-.3.27-.382.457a1.102 1.102 0 0 0 .164 1.147l4.963 5.86a1.006 1.006 0 0 0 1.559 0v.001Z' fill='%23000' /%3E%3C/svg%3E\")}.table-sort:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.table-sort:focus{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i1.AsyncPipe, "keyvalue": i1.KeyValuePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-table', template: `<div [class]="tableResponsiveClasses">
    <table [class]="tableClasses">
      <caption [class]="captionClasses">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th
            *ngFor="let headerCol of headers"
            [attr.aria-sort]="getSortDirectionFor(headerCol.key)"
            scope="col"
            [style.width]="headerCol.width ? headerCol.width : 'auto'"
          >
            <div
              class="table-header-container"
              *ngIf="headerCol.sortable; else unsortable"
            >
              <span class="table-sort-label">{{ headerCol.label }}</span>
              <button
                type="button"
                class="table-sort"
                (click)="handleSortClicked(headerCol.key)"
              >
                <span class="screenreader-only">{{ headerCol.label }}</span>
                <span [class]="getSortingClassesFor(headerCol.key)"></span>
              </button>
            </div>
            <ng-template #unsortable>
              {{ headerCol.label }}
            </ng-template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows$ | async; index as i">
          <td
            *ngFor="
              let col of row | keyvalue: preserveOriginalOrder;
              index as cIndex
            "
          >
            <ng-template #defaultRow>
              {{ getColByName(row, col.key) }}
            </ng-template>
            <ng-container
              [ngTemplateOutlet]="
                rowRenderTemplate ? rowRenderTemplate : defaultRow
              "
              [ngTemplateOutletContext]="{
                $implicit: getColByName(row, col.key),
                index: cIndex
              }"
            >
            </ng-container>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".table{--table-bg: transparent;--table-accent-bg: transparent;--table-striped-color: var(--agnostic-dark);--table-striped-bg: rgb(0 0 0 / 2.5%);--table-active-color: var(--agnostic-dark);--table-active-bg: rgb(0 0 0 / 1.5%);--table-hoverable-color: var(--agnostic-dark);--table-hoverable-bg: var(--agnostic-table-hover-bg, #f1faff);width:100%;margin-bottom:var(--fluid-16);color:var(--agnostic-dark);vertical-align:top;border-color:var(--agnostic-table-border-color, var(--agnostic-gray-light))}.table>:not(caption)>*>*{padding:var(--fluid-8) var(--fluid-8);background-color:var(--table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table thead th{font-weight:600}.table-caps thead th{font-size:var(--fluid-12);text-transform:uppercase}.table tbody td,.table tbody th{font-weight:400}.table>:not(thead):not(caption){border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.caption-top{caption-side:top}.caption-bottom{caption-side:bottom}.caption-bottom,.caption-top{padding-block-start:var(--fluid-12);padding-block-end:var(--fluid-12);text-align:start}.caption-end{text-align:end}.table-small>:not(caption)>*>*{padding:var(--fluid-4) var(--fluid-4)}.table-large>:not(caption)>*>*{padding:var(--fluid-12) var(--fluid-12)}.table-xlarge>:not(caption)>*>*{padding:var(--fluid-18) var(--fluid-18)}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--table-accent-bg: var(--table-striped-bg);color:var(--table-striped-color)}.table-active{--table-accent-bg: var(--table-active-bg);color:var(--table-active-color)}.table-hoverable>tbody>tr:hover>*{--table-accent-bg: var(--table-hoverable-bg);color:var(--table-hoverable-color)}.table-stacked thead{display:none}.table-stacked tr,.table-stacked tbody th,.table-stacked tbody td{display:block;width:100%}.table-stacked tbody th,.table-stacked tbody td{border-bottom-width:0}.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-stacked tr{border-bottom:var(--fluid-2) solid var(--agnostic-gray-light);border-top-width:0}.table-stacked th[data-label]:before,.table-stacked td[data-label]:before{content:attr(data-label);display:block;font-weight:600;margin:-.5rem -1rem 0;padding:var(--fluid-12) var(--fluid-16) var(--fluid-6)}.table-stacked tr th:first-child,.table-stacked tr td:first-child{border-top-width:0}.table-stacked tr:nth-child(odd) td,.table-stacked tr:nth-child(odd) th{background-color:inherit}.table-stacked tr:first-child th:first-child,.table-stacked tr:first-child td:first-child{border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.table-stacked th[data-label],.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width: 576px){.table-responsive-small{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 768px){.table-responsive-medium{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 992px){.table-responsive-large{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1200px){.table-responsive-xlarge{overflow-x:auto;-webkit-overflow-scrolling:touch}}.table-header-container{display:flex;align-items:center}.table-sort-label{flex:1;padding-inline-end:.5rem;text-align:left}.table-sort{flex:0 1 var(--fluid-48);background-color:transparent;border-color:transparent;border-width:0;cursor:pointer;display:flex;justify-content:center;padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2)}.icon-sort{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m15 13-5 5-5-5M5 7l5-5 5 5' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\");width:1.125rem;height:1.125rem}.icon-sort-ascending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m9.221 6.365-4.963 5.86c-.586.693-.11 1.775.78 1.775h9.926c.2 0 .394-.059.561-.17.168-.111.3-.27.383-.457a1.102 1.102 0 0 0-.165-1.147l-4.963-5.86a1.04 1.04 0 0 0-.351-.27 1.007 1.007 0 0 0-1.208.27v-.001Z' fill='%23000' /%3E%3C/svg%3E\")}.icon-sort-descending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m10.778 13.635 4.964-5.86c.586-.693.11-1.775-.78-1.775H5.037a1.01 1.01 0 0 0-.561.17c-.168.111-.3.27-.382.457a1.102 1.102 0 0 0 .164 1.147l4.963 5.86a1.006 1.006 0 0 0 1.559 0v.001Z' fill='%23000' /%3E%3C/svg%3E\")}.table-sort:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.table-sort:focus{transition-duration:.001ms!important}}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { rowRenderTemplate: [{
                type: Input
            }], headers: [{
                type: Input
            }], rows: [{
                type: Input
            }], caption: [{
                type: Input
            }], captionPosition: [{
                type: Input
            }], isUppercasedHeaders: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], isBorderless: [{
                type: Input
            }], isStriped: [{
                type: Input
            }], isHoverable: [{
                type: Input
            }], isStacked: [{
                type: Input
            }], tableSize: [{
                type: Input
            }], responsiveSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxHQUVaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFpRnRELE1BQU0sT0FBTyxjQUFjO0lBOEJ6QjtRQXBCUyxvQkFBZSxHQUF5QyxRQUFRLENBQUM7UUFDakUsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBQ3RDLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsaUJBQVksR0FBYSxLQUFLLENBQUM7UUFDL0IsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUM1QixnQkFBVyxHQUFhLEtBQUssQ0FBQztRQUM5QixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBdUMsRUFBRSxDQUFDO1FBUXBELGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksZUFBZSxDQUN0QyxNQUFNLENBQ1AsQ0FBQztRQVdGLDBCQUFxQixHQUFHLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRyxDQUFDLEdBQVEsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFkQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBZSxDQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBb0JELFlBQVksQ0FBQyxPQUFZLEVBQUUsUUFBYTtRQUl0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Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUhlYWRlckNlbGwge1xuICBsYWJlbDogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgc29ydGFibGU/OiBib29sZWFuO1xuICB3aWR0aD86IHN0cmluZztcbiAgLyoqXG4gICAqIEN1c3RvbSBzb3J0aW5nIGBjb21wYXJlRnVuY3Rpb25gIHdoaWNoIHdpbGwgdGFrZSB0aGUgdmFsdWVzIGZyb20gdGhlXG4gICAqIHR3byByZXNwZWN0aXZlIHJvdyBjZWxscyBiZWluZyBjb21wYXJlZC5cbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnQjZGVzY3JpcHRpb25cbiAgICovXG4gIHNvcnRGbj86IChjZWxsTGVmdDogYW55LCBjZWxsUmlnaHQ6IGFueSkgPT4gLTEgfCAwIHwgMTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cInRhYmxlUmVzcG9uc2l2ZUNsYXNzZXNcIj5cbiAgICA8dGFibGUgW2NsYXNzXT1cInRhYmxlQ2xhc3Nlc1wiPlxuICAgICAgPGNhcHRpb24gW2NsYXNzXT1cImNhcHRpb25DbGFzc2VzXCI+XG4gICAgICAgIHt7XG4gICAgICAgICAgY2FwdGlvblxuICAgICAgICB9fVxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaGVhZGVyQ29sIG9mIGhlYWRlcnNcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zb3J0XT1cImdldFNvcnREaXJlY3Rpb25Gb3IoaGVhZGVyQ29sLmtleSlcIlxuICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImhlYWRlckNvbC53aWR0aCA/IGhlYWRlckNvbC53aWR0aCA6ICdhdXRvJ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInRhYmxlLWhlYWRlci1jb250YWluZXJcIlxuICAgICAgICAgICAgICAqbmdJZj1cImhlYWRlckNvbC5zb3J0YWJsZTsgZWxzZSB1bnNvcnRhYmxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJsZS1zb3J0LWxhYmVsXCI+e3sgaGVhZGVyQ29sLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0YWJsZS1zb3J0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlU29ydENsaWNrZWQoaGVhZGVyQ29sLmtleSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzY3JlZW5yZWFkZXItb25seVwiPnt7IGhlYWRlckNvbC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBbY2xhc3NdPVwiZ2V0U29ydGluZ0NsYXNzZXNGb3IoaGVhZGVyQ29sLmtleSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3Vuc29ydGFibGU+XG4gICAgICAgICAgICAgIHt7IGhlYWRlckNvbC5sYWJlbCB9fVxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93cyQgfCBhc3luYzsgaW5kZXggYXMgaVwiPlxuICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgIGxldCBjb2wgb2Ygcm93IHwga2V5dmFsdWU6IHByZXNlcnZlT3JpZ2luYWxPcmRlcjtcbiAgICAgICAgICAgICAgaW5kZXggYXMgY0luZGV4XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFJvdz5cbiAgICAgICAgICAgICAge3sgZ2V0Q29sQnlOYW1lKHJvdywgY29sLmtleSkgfX1cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIlxuICAgICAgICAgICAgICAgIHJvd1JlbmRlclRlbXBsYXRlID8gcm93UmVuZGVyVGVtcGxhdGUgOiBkZWZhdWx0Um93XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiBnZXRDb2xCeU5hbWUocm93LCBjb2wua2V5KSxcbiAgICAgICAgICAgICAgICBpbmRleDogY0luZGV4XG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBJZiBjb25zdW1lciBwYXNzZXMgcm93UmVuZGVyVGVtcGxhdGUsIHdlIHByb2plY3QgaW50byB0ZCBjZWxsJ3MgdGVtcGxhdGUgb3V0bGV0LlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHJvd1JlbmRlclRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBoZWFkZXJzITogVGFibGVIZWFkZXJDZWxsW107XG4gIEBJbnB1dCgpIHJvd3MhOiBhbnlbXTtcbiAgQElucHV0KCkgY2FwdGlvbiE6IHN0cmluZztcbiAgQElucHV0KCkgY2FwdGlvblBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJyB8ICdlbmQnIHwgJ2hpZGRlbicgPSAnaGlkZGVuJztcbiAgQElucHV0KCkgaXNVcHBlcmNhc2VkSGVhZGVycz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCb3JkZXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCb3JkZXJsZXNzPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1N0cmlwZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzSG92ZXJhYmxlPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1N0YWNrZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhYmxlU2l6ZT86ICcnIHwgJ3NtYWxsJyB8ICdsYXJnZScgfCAneGxhcmdlJyA9ICcnO1xuICBASW5wdXQoKSByZXNwb25zaXZlU2l6ZT86ICcnIHwgJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICd4bGFyZ2UnO1xuXG4gIC8qKlxuICAgKiBUaGlzIGtlZXBzIG91ciByZWFjdGl2ZWx5IHNvcnRlZCByb3dzOyByZWFjdHMgdG8gY2hhbmdlcyBtYWRlIHRvXG4gICAqIHNvcnRpbmdLZXkkIG9yIGRpcmVjdGlvbiQgYmVsb3cuXG4gICAqL1xuICBwdWJsaWMgcm93cyQ7XG4gIHByaXZhdGUgc29ydGluZ0tleSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICBwcml2YXRlIGRpcmVjdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdub25lJyB8ICdhc2NlbmRpbmcnIHwgJ2Rlc2NlbmRpbmcnPihcbiAgICAnbm9uZSdcbiAgKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvd3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnlbXT4odGhpcy5yb3dzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2luZyBrZXl2YWx1ZSBieSBkZWZhdWx0IHdpdGggc29ydCBvdXIgY29sdW1ucyBhbHBoYWJldGljYWxseSBhbmQgd2VcbiAgICogd2FudCB0byBwcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgb3JkZXJpbmcgb2YgT2JqZWN0LmtleXMoQV9ST1dfT0JKRUNUKVxuICAgKiAqbmdGb3I9XCJsZXQgY29sIG9mIHJvdyB8IGtleXZhbHVlOiBwcmVzZXJ2ZU9yaWdpbmFsT3JkZXI7XG4gICAqL1xuICBwcmVzZXJ2ZU9yaWdpbmFsT3JkZXIgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICByZXR1cm4gYTtcbiAgfTtcblxuICBnZXRDb2xCeU5hbWUgPSAocm93OiBhbnksIG5hbWU6IGFueSkgPT4ge1xuICAgIHJldHVybiByb3dbbmFtZV07XG4gIH07XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGZpcnN0IGNoZWNrcyBpZiB0aGVyZSBpcyBhIGNvcnJlc3BvbmRpbmcgY3VzdG9tIHNvcnQgZnVuY3Rpb25cbiAgICogdGhhdCB3YXMgc3VwcGxpZWQgaW4gYSBoZWFkZXIgY2VsbCB3aXRoIGtleVwiIG9mIGBzb3J0aW5nS2V5YCBuYW1lZCBgLnNvcnRGbmBcbiAgICogcGVyIHRoZSBBUEkuIElmIGl0IGZpbmRzLCBpdCB3aWxsIGRlbGVnYXRlIHRvIHRoYXQgZm9yIGFjdHVhbCBzb3J0IGNvbXBhcmlzb24uXG4gICAqIE90aGVyd2lzZSwgdGhlIGZ1bmN0aW9uIHN1cHBsaWVzIGl0cyBvd24gZmFsbGJhY2sgZGVmYXVsdCAobmFpdmUpIHNvcnRpbmcgbG9naWMuXG4gICAqL1xuICBpbnRlcm5hbFNvcnQocm93TGVmdDogYW55LCByb3dSaWdodDogYW55KSB7XG4gICAgLyoqXG4gICAgICogUGx1Y2sgb3V0IG91ciBjb2x1bW5zIHNvIHdlIGNhbiBjb21wYXJlLlxuICAgICAqL1xuICAgIGxldCBjb2xMZWZ0ID1cbiAgICAgIHJvd0xlZnRbdGhpcy5zb3J0aW5nS2V5JC52YWx1ZV0gPT09IG51bGwgfHxcbiAgICAgICAgcm93TGVmdFt0aGlzLnNvcnRpbmdLZXkkLnZhbHVlXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gLUluZmluaXR5XG4gICAgICAgIDogcm93TGVmdFt0aGlzLnNvcnRpbmdLZXkkLnZhbHVlXTtcbiAgICBsZXQgY29sUmlnaHQgPVxuICAgICAgcm93UmlnaHRbdGhpcy5zb3J0aW5nS2V5JC52YWx1ZV0gPT09IG51bGwgfHxcbiAgICAgICAgcm93UmlnaHRbdGhpcy5zb3J0aW5nS2V5JC52YWx1ZV0gPT09IHVuZGVmaW5lZFxuICAgICAgICA/IC1JbmZpbml0eVxuICAgICAgICA6IHJvd1JpZ2h0W3RoaXMuc29ydGluZ0tleSQudmFsdWVdO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgY29ycmVzcG9uZGluZyBoZWFkZXIgY2VsbCBoYXMgYSBjdXN0b20gc29ydCBtZXRob2QuIElmIHNvLFxuICAgICAqIHdlIHVzZSB0aGF0LiBPdGhlcndpc2UsIHdlIHByb2NlZWQgd2l0aCBvdXIgZGVmYXVsdCBzb3J0IGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IGhlYWRlcldpdGhDdXN0b21Tb3J0RnVuY3Rpb24gPSB0aGlzLmhlYWRlcnMuZmluZChcbiAgICAgIChoKSA9PiBoLmtleSA9PT0gdGhpcy5zb3J0aW5nS2V5JC52YWx1ZSAmJiAhIWguc29ydEZuXG4gICAgKTtcbiAgICBpZiAoaGVhZGVyV2l0aEN1c3RvbVNvcnRGdW5jdGlvbiAmJiBoZWFkZXJXaXRoQ3VzdG9tU29ydEZ1bmN0aW9uLnNvcnRGbikge1xuICAgICAgcmV0dXJuIGhlYWRlcldpdGhDdXN0b21Tb3J0RnVuY3Rpb24uc29ydEZuKGNvbExlZnQsIGNvbFJpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBObyBjdXN0b20gc29ydCBtZXRob2QgZm9yIHRoZSBoZWFkZXIgY2VsbCwgc28gd2UgY29udGludWUgd2l0aCBvdXIgb3duIGZhbGxiYWNrLlxuICAgICAqIFN0cmluZ3MgY29udmVydGVkIHRvIGxvd2VyY2FzZTsgZG9sbGFyIGN1cnJlbmN5IGV0Yy4gc3RyaXBwZWQgKG5vdCB5ZXQgaTE4biBzYWZlISlcbiAgICAgKi9cbiAgICBjb2xMZWZ0ID1cbiAgICAgIHR5cGVvZiBjb2xMZWZ0ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNvbExlZnQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oXlxcJHwsKS9nLCAnJylcbiAgICAgICAgOiBjb2xMZWZ0O1xuXG4gICAgY29sUmlnaHQgPVxuICAgICAgdHlwZW9mIGNvbFJpZ2h0ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNvbFJpZ2h0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKF5cXCR8LCkvZywgJycpXG4gICAgICAgIDogY29sUmlnaHQ7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcmF3IHZhbHVlIHJlcHJlc2VudHMgYSBudW1iZXIsIGV4cGxpY2l0bHkgc2V0IGl0IHRvIGEgTnVtYmVyXG4gICAgICovXG4gICAgY29sTGVmdCA9ICFOdW1iZXIuaXNOYU4oTnVtYmVyKGNvbExlZnQpKSA/IE51bWJlcihjb2xMZWZ0KSA6IGNvbExlZnQ7XG4gICAgY29sUmlnaHQgPSAhTnVtYmVyLmlzTmFOKE51bWJlcihjb2xSaWdodCkpID8gTnVtYmVyKGNvbFJpZ2h0KSA6IGNvbFJpZ2h0O1xuXG4gICAgaWYgKGNvbExlZnQgPiBjb2xSaWdodCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChjb2xMZWZ0IDwgY29sUmlnaHQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvLyBKdXN0IGZsaXBzIHRoZSBzaWduIG9mIHJlc3VsdHMgb2YgYW4gYXNjZW5kaW5nIHNvcnQgKGludGVybmFsU29ydClcbiAgZGVzY2VuZGluZ1NvcnQocm93MTogYW55LCByb3cyOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFNvcnQocm93MSwgcm93MikgKiAtMTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKlxuICAgICAqIExpc3RlbnMgZm9yIGFueSBjaGFuZ2VzIHRvIG91ciBzb3J0aW5nIGtleSAod2hpY2ggdGFibGUgaGVhZGVyIHdhcyBsYXN0IGNsaWNrZWQpLCBhbmRcbiAgICAgKiB0aGUgc29ydCBkaXJlY3Rpb24gKGFzYywgZGVzYywgbm9uZSkuIFRoZW4gc29ydHMgYW5kIHBsYWNlcyByZXN1bHRzIGluIHRoaXMucm93JC5uZXh0XG4gICAgICovXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5zb3J0aW5nS2V5JCwgdGhpcy5kaXJlY3Rpb24kXSkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBbLi4udGhpcy5yb3dzXTtcbiAgICAgIGNvbnN0IFtfLCBkaXJlY3Rpb25dID0gdmFsdWU7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJykge1xuICAgICAgICByb3dzLnNvcnQoKGEsIGIpID0+IHRoaXMuaW50ZXJuYWxTb3J0KGEsIGIpKTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiB0aGlzLmRlc2NlbmRpbmdTb3J0KGEsIGIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvd3MgPSBbLi4udGhpcy5yb3dzXTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93cyQubmV4dChyb3dzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnRDbGlja2VkKGhlYWRlcktleTogc3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogVXNlcidzIGNsaWNrZWQgYSBkaWZmZXJlbnQgaGVhZGVyIGNlbGwsIHNvIHdlIGNoYW5nZSB0aGUgc29ydGluZyBrZXlcbiAgICAgKiBhbmQgc2V0IHRoZSBpbml0aWFsIGRpcmVjdGlvbiB0byAnbm9uZSdcbiAgICAgKi9cbiAgICBpZiAodGhpcy5zb3J0aW5nS2V5JC52YWx1ZSAhPT0gaGVhZGVyS2V5KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiQubmV4dCgnbm9uZScpO1xuICAgICAgdGhpcy5zb3J0aW5nS2V5JC5uZXh0KGhlYWRlcktleSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbiQudmFsdWUpIHtcbiAgICAgIGNhc2UgJ2FzY2VuZGluZyc6XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uJC5uZXh0KCdkZXNjZW5kaW5nJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzY2VuZGluZyc6XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uJC5uZXh0KCdub25lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uJC5uZXh0KCdhc2NlbmRpbmcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1RhYmxlIHNvcnRpbmcgb25seSBzdXBwb3J0cyBkaXJlY3Rpb25zOiBhc2NlbmRpbmcgfCBkZXNjZW5kaW5nIHwgbm9uZSdcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRTb3J0aW5nQ2xhc3Nlc0ZvcihoZWFkZXJLZXk6IHN0cmluZykge1xuICAgIC8vIElmIGl0J3MgdGhlIGhlYWRlciBjdXJyZW50bHkgYmVpbmcgc29ydGluZyBvbiwgYWRkIGRpcmVjdGlvbi1iYXNlZCBjbGFzc2VzXG4gICAgaWYgKHRoaXMuc29ydGluZ0tleSQudmFsdWUgPT09IGhlYWRlcktleSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgJ2ljb24tc29ydCcsXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uJC52YWx1ZSAhPT0gJ25vbmUnXG4gICAgICAgICAgPyBgaWNvbi1zb3J0LSR7dGhpcy5kaXJlY3Rpb24kLnZhbHVlfWBcbiAgICAgICAgICA6ICcnLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKChjKSA9PiBjLmxlbmd0aClcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgcmV0dXJuICdpY29uLXNvcnQnO1xuICB9XG5cbiAgZ2V0U29ydERpcmVjdGlvbkZvcihoZWFkZXJLZXk6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNvcnRpbmdLZXkkLnZhbHVlICE9PSBoZWFkZXJLZXkpIHtcbiAgICAgIHJldHVybiAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiQudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjYXB0aW9uQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5jYXB0aW9uUG9zaXRpb24gPT09ICdoaWRkZW4nID8gJ3NjcmVlbnJlYWRlci1vbmx5JyA6ICcnLFxuICAgICAgdGhpcy5jYXB0aW9uUG9zaXRpb24gIT09ICdoaWRkZW4nXG4gICAgICAgID8gYGNhcHRpb24tJHt0aGlzLmNhcHRpb25Qb3NpdGlvbn1gXG4gICAgICAgIDogJycsXG4gICAgXVxuICAgICAgLmZpbHRlcigoY2wpID0+IGNsKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGFibGVSZXNwb25zaXZlQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3BvbnNpdmVTaXplXG4gICAgICA/IGB0YWJsZS1yZXNwb25zaXZlLSR7dGhpcy5yZXNwb25zaXZlU2l6ZX1gXG4gICAgICA6ICd0YWJsZS1yZXNwb25zaXZlJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGFibGVDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFtcbiAgICAgICd0YWJsZScsXG4gICAgICB0aGlzLnRhYmxlU2l6ZSA/IGB0YWJsZS0ke3RoaXMudGFibGVTaXplfWAgOiAnJyxcbiAgICAgIHRoaXMuaXNVcHBlcmNhc2VkSGVhZGVycyA/ICd0YWJsZS1jYXBzJyA6ICcnLFxuICAgICAgdGhpcy5pc0JvcmRlcmVkID8gJ3RhYmxlLWJvcmRlcmVkJyA6ICcnLFxuICAgICAgdGhpcy5pc0JvcmRlcmxlc3MgPyAndGFibGUtYm9yZGVybGVzcycgOiAnJyxcbiAgICAgIHRoaXMuaXNTdHJpcGVkID8gJ3RhYmxlLXN0cmlwZWQnIDogJycsXG4gICAgICB0aGlzLmlzSG92ZXJhYmxlID8gJ3RhYmxlLWhvdmVyYWJsZScgOiAnJyxcbiAgICAgIHRoaXMuaXNTdGFja2VkID8gJ3RhYmxlLXN0YWNrZWQnIDogJycsXG4gICAgXVxuICAgICAgLmZpbHRlcigoY2wpID0+IGNsKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxufVxuIl19