import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class EmptyStateHeaderComponent {
}
EmptyStateHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateHeaderComponent, selector: "ag-empty-state-header", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-header',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
export class EmptyStateBodyComponent {
}
EmptyStateBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateBodyComponent, selector: "ag-empty-state-body", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-body',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
export class EmptyStateFooterComponent {
}
EmptyStateFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateFooterComponent, selector: "ag-empty-state-footer", ngImport: i0, template: `<div class="empty-action">
    <ng-content></ng-content>
  </div>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-empty-state-footer',
                    template: `<div class="empty-action">
    <ng-content></ng-content>
  </div>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
export class EmptyStateComponent {
    get emptyClasses() {
        return [
            'empty',
            this.isRounded ? 'empty-rounded' : '',
            this.isBordered ? 'empty-bordered' : '',
        ]
            .filter((c) => c)
            .join(' ');
    }
}
EmptyStateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: EmptyStateComponent, selector: "ag-empty-state", inputs: { isBordered: "isBordered", isRounded: "isRounded" }, ngImport: i0, template: `<div [class]="emptyClasses">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".empty-base,.empty{display:flex;flex-flow:column wrap;align-items:center;text-align:center;width:100%}.empty{padding:calc(2 * var(--agnostic-side-padding));background:var(--agnostic-gray-extra-light)}.empty-bordered{background:transparent;border:1px solid var(--agnostic-gray-light)}.empty-rounded{border-radius:var(--agnostic-radius)}.empty-actions{margin-block-start:var(--spacing-24)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-empty-state', template: `<div [class]="emptyClasses">
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".empty-base,.empty{display:flex;flex-flow:column wrap;align-items:center;text-align:center;width:100%}.empty{padding:calc(2 * var(--agnostic-side-padding));background:var(--agnostic-gray-extra-light)}.empty-bordered{background:transparent;border:1px solid var(--agnostic-gray-light)}.empty-rounded{border-radius:var(--agnostic-radius)}.empty-actions{margin-block-start:var(--spacing-24)}\n"] }]
        }], propDecorators: { isBordered: [{
                type: Input
            }], isRounded: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2VtcHR5LXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPMUUsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5QjswR0FBekIseUJBQXlCLDZEQUgxQiwyQkFBMkI7MkZBRzFCLHlCQUF5QjtrQkFMckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7O0FBUUQsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLDJEQUh4QiwyQkFBMkI7MkZBRzFCLHVCQUF1QjtrQkFMbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7O0FBVUQsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5QjswR0FBekIseUJBQXlCLDZEQUwxQjs7U0FFSDsyRkFHSSx5QkFBeUI7a0JBUHJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFOztTQUVIO29CQUNQLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7QUFXRCxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLElBQUksWUFBWTtRQUNkLE9BQU87WUFDTCxPQUFPO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3hDO2FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7Z0hBWFUsbUJBQW1CO29HQUFuQixtQkFBbUIsb0hBTnBCOztTQUVIOzJGQUlJLG1CQUFtQjtrQkFSL0IsU0FBUzsrQkFDRSxnQkFBZ0IsWUFDaEI7O1NBRUgsbUJBRVUsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctZW1wdHktc3RhdGUtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U3RhdGVIZWFkZXJDb21wb25lbnQgeyB9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLWVtcHR5LXN0YXRlLWJvZHknLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlTdGF0ZUJvZHlDb21wb25lbnQgeyB9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLWVtcHR5LXN0YXRlLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImVtcHR5LWFjdGlvblwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U3RhdGVGb290ZXJDb21wb25lbnQgeyB9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLWVtcHR5LXN0YXRlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJlbXB0eUNsYXNzZXNcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogWycuL2VtcHR5LXN0YXRlLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlTdGF0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzQm9yZGVyZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc1JvdW5kZWQ/OiBib29sZWFuO1xuICBnZXQgZW1wdHlDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnZW1wdHknLFxuICAgICAgdGhpcy5pc1JvdW5kZWQgPyAnZW1wdHktcm91bmRlZCcgOiAnJyxcbiAgICAgIHRoaXMuaXNCb3JkZXJlZCA/ICdlbXB0eS1ib3JkZXJlZCcgOiAnJyxcbiAgICBdXG4gICAgICAuZmlsdGVyKChjKSA9PiBjKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxufVxuIl19