import {
  Input,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { combineLatest, BehaviorSubject } from 'rxjs';

export interface TableHeaderCell {
  label: string;
  key: string;
  sortable?: boolean;
  width?: string;
  /**
   * Custom sorting `compareFunction` which will take the values from the
   * two respective row cells being compared.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
   */
  sortFn?: (cellLeft: any, cellRight: any) => -1 | 0 | 1;
}

@Component({
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
})
export class TableComponent implements OnInit {
  /**
   * If consumer passes rowRenderTemplate, we project into td cell's template outlet.
   */
  @Input()
  public rowRenderTemplate?: TemplateRef<any>;

  @Input() headers!: TableHeaderCell[];
  @Input() rows!: any[];
  @Input() caption!: string;
  @Input() captionPosition?: 'top' | 'bottom' | 'end' | 'hidden' = 'hidden';
  @Input() isUppercasedHeaders?: boolean = false;
  @Input() isBordered?: boolean = false;
  @Input() isBorderless?: boolean = false;
  @Input() isStriped?: boolean = false;
  @Input() isHoverable?: boolean = false;
  @Input() isStacked?: boolean = false;
  @Input() tableSize?: '' | 'small' | 'large' | 'xlarge' = '';
  @Input() responsiveSize?: '' | 'small' | 'medium' | 'large' | 'xlarge';

  /**
   * This keeps our reactively sorted rows; reacts to changes made to
   * sortingKey$ or direction$ below.
   */
  public rows$;
  private sortingKey$ = new BehaviorSubject<string>('');
  private direction$ = new BehaviorSubject<'none' | 'ascending' | 'descending'>(
    'none'
  );

  constructor() {
    this.rows$ = new BehaviorSubject<any[]>(this.rows);
  }

  /**
   * Using keyvalue by default with sort our columns alphabetically and we
   * want to preserve the original ordering of Object.keys(A_ROW_OBJECT)
   * *ngFor="let col of row | keyvalue: preserveOriginalOrder;
   */
  preserveOriginalOrder = (a: any, b: any) => {
    return a;
  };

  getColByName = (row: any, name: any) => {
    return row[name];
  };
  /**
   * This function first checks if there is a corresponding custom sort function
   * that was supplied in a header cell with key" of `sortingKey` named `.sortFn`
   * per the API. If it finds, it will delegate to that for actual sort comparison.
   * Otherwise, the function supplies its own fallback default (naive) sorting logic.
   */
  internalSort(rowLeft: any, rowRight: any) {
    /**
     * Pluck out our columns so we can compare.
     */
    let colLeft =
      rowLeft[this.sortingKey$.value] === null ||
      rowLeft[this.sortingKey$.value] === undefined
        ? -Infinity
        : rowLeft[this.sortingKey$.value];
    let colRight =
      rowRight[this.sortingKey$.value] === null ||
      rowRight[this.sortingKey$.value] === undefined
        ? -Infinity
        : rowRight[this.sortingKey$.value];

    /**
     * Check if corresponding header cell has a custom sort method. If so,
     * we use that. Otherwise, we proceed with our default sort implementation.
     */
    const headerWithCustomSortFunction = this.headers.find(
      (h) => h.key === this.sortingKey$.value && !!h.sortFn
    );
    if (headerWithCustomSortFunction && headerWithCustomSortFunction.sortFn) {
      return headerWithCustomSortFunction.sortFn(colLeft, colRight);
    }

    /**
     * No custom sort method for the header cell, so we continue with our own fallback.
     * Strings converted to lowercase; dollar currency etc. stripped (not yet i18n safe!)
     */
    colLeft =
      typeof colLeft === 'string'
        ? colLeft.toLowerCase().replace(/(^\$|,)/g, '')
        : colLeft;

    colRight =
      typeof colRight === 'string'
        ? colRight.toLowerCase().replace(/(^\$|,)/g, '')
        : colRight;

    /**
     * If the raw value represents a number, explicitly set it to a Number
     */
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

  // Just flips the sign of results of an ascending sort (internalSort)
  descendingSort(row1: any, row2: any) {
    return this.internalSort(row1, row2) * -1;
  }

  ngOnInit() {
    /**
     * Listens for any changes to our sorting key (which table header was last clicked), and
     * the sort direction (asc, desc, none). Then sorts and places results in this.row$.next
     */
    combineLatest([this.sortingKey$, this.direction$]).subscribe((value) => {
      let rows = [...this.rows];
      const [_, direction] = value;
      if (direction === 'ascending') {
        rows.sort((a, b) => this.internalSort(a, b));
      } else if (direction === 'descending') {
        rows.sort((a, b) => this.descendingSort(a, b));
      } else {
        rows = [...this.rows];
      }
      this.rows$.next(rows);
    });
  }

  handleSortClicked(headerKey: string) {
    /**
     * User's clicked a different header cell, so we change the sorting key
     * and set the initial direction to 'none'
     */
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
        /* eslint-disable-next-line no-console */
        console.warn(
          'Table sorting only supports directions: ascending | descending | none'
        );
    }
  }

  getSortingClassesFor(headerKey: string) {
    // If it's the header currently being sorting on, add direction-based classes
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

  getSortDirectionFor(headerKey: string) {
    if (this.sortingKey$.value !== headerKey) {
      return 'none';
    } else {
      return this.direction$.value;
    }
  }

  public get captionClasses() {
    return [
      this.captionPosition === 'hidden' ? 'screenreader-only' : '',
      this.captionPosition !== 'hidden'
        ? `caption-${this.captionPosition}`
        : '',
    ]
      .filter((cl) => cl)
      .join(' ');
  }

  public get tableResponsiveClasses(): string {
    return this.responsiveSize
      ? `table-responsive-${this.responsiveSize}`
      : 'table-responsive';
  }

  public get tableClasses(): string {
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
