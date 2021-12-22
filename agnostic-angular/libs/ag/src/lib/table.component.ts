import {
  Input,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

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
/*
  template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>*/
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
        <tr *ngFor="let row of rows; index as i">
          <td *ngFor="let col of row | keyvalue; index as cIndex">
            <ng-template #defaultRow>
              {{ row[col.key] }}
            </ng-template>
            <ng-container
              [ngTemplateOutlet]="rowRenderTemplate ? rowRenderTemplate : defaultRow"
              [ngTemplateOutletContext]="{ $implicit: row[col.key], index: cIndex }"
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
export class TableComponent {
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

  private sortingKey = '';
  private direction: 'none' | 'ascending' | 'descending' = 'none';

  handleSortClicked(headerKey: string) {
    if (this.sortingKey !== headerKey) {
      this.direction = 'none';
      this.sortingKey = headerKey
    }

    switch (this.direction) {
      case 'ascending':
        this.direction = 'descending';
        break;
      case 'descending':
        this.direction = 'none';
        break;
      case 'none':
        this.direction = 'ascending';
        break;
      default:
        /* eslint-disable-next-line no-console */
        console.warn('Table sorting only supports directions: ascending | descending | none');
    }
  };

  getSortingClassesFor(headerKey: string) {
    // If it's the header currently being sorting on, add direction-based classes
    if (this.sortingKey === headerKey) {
      return [
        'icon-sort',
        this.direction && this.direction !== 'none' ? `icon-sort-${this.direction}` : '',
      ].filter((c) => c.length).join(' ');
    }
    return 'icon-sort';
  }

  getSortDirectionFor(headerKey: string) {
    if (this.sortingKey !== headerKey) {
      return "none";
    } else {
      return this.direction;
    }
  }
  get captionClasses() {
    console.log('asdf');
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
