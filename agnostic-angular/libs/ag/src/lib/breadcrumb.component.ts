import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface BreadcrumbRoute {
  label: string;
  url?: string;
}

@Component({
  selector: 'ag-breadcrumb-item',
  template: `<li class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
    <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
    <ng-template #linklessLabel>
      {{route.label}}
    </ng-template>
  </li>`,
  styleUrls: ['./breadcrumb.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbItemComponent {
  @Input() route!: BreadcrumbRoute;
  @Input() isLast?: boolean = false;
}
// <ag-breadcrumb-item *ngFor="let route of routes; last as isLast" [isLast]="isLast" [route]="route"></ag-breadcrumb-item>
@Component({
  selector: 'ag-breadcrumb',
  template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>
    </li>
  </ol>
</nav>`,
  styleUrls: ['./breadcrumb.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() type: 'arrow' | 'slash' | 'bullet' = 'slash';
  @Input() routes!: BreadcrumbRoute[];

  public get breadcrumbClasses(): string {
    return [
      'breadcrumb',
      this.type ? `breadcrumb-${this.type}` : '',
    ]
      .filter((c) => c.length)
      .join(' ');
  }
}
