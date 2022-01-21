import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BreadcrumbItemComponent {
    constructor() {
        this.isLast = false;
    }
}
BreadcrumbItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BreadcrumbItemComponent, selector: "ag-breadcrumb-item", inputs: { route: "route", isLast: "isLast" }, ngImport: i0, template: `<li class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
    <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
    <ng-template #linklessLabel>
      {{route.label}}
    </ng-template>
  </li>`, isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-breadcrumb-item', template: `<li class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
    <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
    <ng-template #linklessLabel>
      {{route.label}}
    </ng-template>
  </li>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"] }]
        }], propDecorators: { route: [{
                type: Input
            }], isLast: [{
                type: Input
            }] } });
export class BreadcrumbComponent {
    constructor() {
        this.type = 'slash';
    }
    get breadcrumbClasses() {
        return [
            'breadcrumb',
            this.type ? `breadcrumb-${this.type}` : '',
        ]
            .filter((c) => c.length)
            .join(' ');
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BreadcrumbComponent, selector: "ag-breadcrumb", inputs: { type: "type", routes: "routes" }, ngImport: i0, template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>
    </li>
  </ol>
</nav>`, isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-breadcrumb', template: `<nav aria-label="breadcrumbs">
  <ol [class]="breadcrumbClasses">
    <li *ngFor="let route of routes; last as isLast" class="breadcrumb-item" [class.active]="isLast" [attr.aria-current]="isLast ? 'page' : null">
      <a *ngIf="!isLast && route.url; else linklessLabel" [href]="route.url">{{route.label}}</a>
      <ng-template #linklessLabel>{{route.label}}</ng-template>
    </li>
  </ol>
</nav>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], routes: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2FnL3NyYy9saWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWtCMUUsTUFBTSxPQUFPLHVCQUF1QjtJQVhwQztRQWFXLFdBQU0sR0FBYSxLQUFLLENBQUM7S0FDbkM7O29IQUhZLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLHdHQVR4Qjs7Ozs7UUFLSjsyRkFJSyx1QkFBdUI7a0JBWG5DLFNBQVM7K0JBQ0Usb0JBQW9CLFlBQ3BCOzs7OztRQUtKLG1CQUVXLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7O0FBZ0JSLE1BQU0sT0FBTyxtQkFBbUI7SUFiaEM7UUFjVyxTQUFJLEdBQWlDLE9BQU8sQ0FBQztLQVd2RDtJQVJDLElBQVcsaUJBQWlCO1FBQzFCLE9BQU87WUFDTCxZQUFZO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDM0M7YUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7Z0hBWFUsbUJBQW1CO29HQUFuQixtQkFBbUIsaUdBWHBCOzs7Ozs7O09BT0w7MkZBSU0sbUJBQW1CO2tCQWIvQixTQUFTOytCQUNFLGVBQWUsWUFDZjs7Ozs7OztPQU9MLG1CQUVZLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJSb3V0ZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctYnJlYWRjcnVtYi1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cImlzTGFzdFwiIFthdHRyLmFyaWEtY3VycmVudF09XCJpc0xhc3QgPyAncGFnZScgOiBudWxsXCI+XG4gICAgPGEgKm5nSWY9XCIhaXNMYXN0ICYmIHJvdXRlLnVybDsgZWxzZSBsaW5rbGVzc0xhYmVsXCIgW2hyZWZdPVwicm91dGUudXJsXCI+e3tyb3V0ZS5sYWJlbH19PC9hPlxuICAgIDxuZy10ZW1wbGF0ZSAjbGlua2xlc3NMYWJlbD5cbiAgICAgIHt7cm91dGUubGFiZWx9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbGk+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcm91dGUhOiBCcmVhZGNydW1iUm91dGU7XG4gIEBJbnB1dCgpIGlzTGFzdD86IGJvb2xlYW4gPSBmYWxzZTtcbn1cbi8vIDxhZy1icmVhZGNydW1iLWl0ZW0gKm5nRm9yPVwibGV0IHJvdXRlIG9mIHJvdXRlczsgbGFzdCBhcyBpc0xhc3RcIiBbaXNMYXN0XT1cImlzTGFzdFwiIFtyb3V0ZV09XCJyb3V0ZVwiPjwvYWctYnJlYWRjcnVtYi1pdGVtPlxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlOiBgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYnNcIj5cbiAgPG9sIFtjbGFzc109XCJicmVhZGNydW1iQ2xhc3Nlc1wiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgcm91dGUgb2Ygcm91dGVzOyBsYXN0IGFzIGlzTGFzdFwiIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgW2NsYXNzLmFjdGl2ZV09XCJpc0xhc3RcIiBbYXR0ci5hcmlhLWN1cnJlbnRdPVwiaXNMYXN0ID8gJ3BhZ2UnIDogbnVsbFwiPlxuICAgICAgPGEgKm5nSWY9XCIhaXNMYXN0ICYmIHJvdXRlLnVybDsgZWxzZSBsaW5rbGVzc0xhYmVsXCIgW2hyZWZdPVwicm91dGUudXJsXCI+e3tyb3V0ZS5sYWJlbH19PC9hPlxuICAgICAgPG5nLXRlbXBsYXRlICNsaW5rbGVzc0xhYmVsPnt7cm91dGUubGFiZWx9fTwvbmctdGVtcGxhdGU+XG4gICAgPC9saT5cbiAgPC9vbD5cbjwvbmF2PmAsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHlwZTogJ2Fycm93JyB8ICdzbGFzaCcgfCAnYnVsbGV0JyA9ICdzbGFzaCc7XG4gIEBJbnB1dCgpIHJvdXRlcyE6IEJyZWFkY3J1bWJSb3V0ZVtdO1xuXG4gIHB1YmxpYyBnZXQgYnJlYWRjcnVtYkNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2JyZWFkY3J1bWInLFxuICAgICAgdGhpcy50eXBlID8gYGJyZWFkY3J1bWItJHt0aGlzLnR5cGV9YCA6ICcnLFxuICAgIF1cbiAgICAgIC5maWx0ZXIoKGMpID0+IGMubGVuZ3RoKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxufVxuIl19