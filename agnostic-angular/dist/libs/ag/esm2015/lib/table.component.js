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
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TableComponent, selector: "ag-table", inputs: { rowRenderTemplate: "rowRenderTemplate", headers: "headers", rows: "rows", caption: "caption", captionPosition: "captionPosition", isUppercasedHeaders: "isUppercasedHeaders", isBordered: "isBordered", isBorderless: "isBorderless", isStriped: "isStriped", isHoverable: "isHoverable", isStacked: "isStacked", tableSize: "tableSize", responsiveSize: "responsiveSize" }, ngImport: i0, template: `<div [class]="tableResponsiveClasses">
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-table',
                    template: `<div [class]="tableResponsiveClasses">
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
  </div>`,
                    styleUrls: ['./table.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
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
//# sourceMappingURL=table.component.js.map