import {
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

export interface NavigationLabels {
  first: string;
  previous: string;
  next: string;
  last: string;
}

@Component({
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
})
export class PaginationComponent {
  @Input() justify?: 'start' | 'center' | 'end' | '' = '';
  @Input() ariaLabel?: string = 'Pagination';
  @Input() current: number = 1;
  @Input() pages: any[] = [];
  @Input() isBordered?: boolean = false;
  @Input() isFirstLast?: boolean = true;
  @Input() navigationLabels?: NavigationLabels = {
    first: 'First',
    last: 'Last',
    previous: 'Previous',
    next: 'Next',
  };

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  public onFirst(): void {
    this.onPageChange.emit(1);
  }
  public onPrevious(): void {
    this.onPageChange.emit(this.current - 1);
  }
  public onNext(): void {
    this.onPageChange.emit(this.current + 1);
  }
  public onLast(): void {
    this.onPageChange.emit(this.getLastPageNumber());
  }

  handleClick(page: number): void {
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

  paginationItemClassesForPage(page: number | string) {
    return [
      'pagination-item',
      page === this.current ? 'pagination-item-active' : '',
      page === '...' ? 'pagination-item-gap' : '',
    ]
      .filter((cl) => cl)
      .join(' ');
  }

  ariaForCurrentPage(page: number) {
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
