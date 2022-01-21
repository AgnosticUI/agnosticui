import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class TagComponent {
    constructor() {
        this.type = '';
        this.shape = '';
        this.isUppercase = false;
    }
    get tagClasses() {
        return [
            'tag',
            this.type ? `tag-${this.type}` : '',
            this.shape ? `tag-${this.shape}` : '',
            this.isUppercase ? 'tag-upper' : '',
        ]
            .filter((c) => c)
            .join(' ');
    }
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TagComponent, selector: "ag-tag", inputs: { type: "type", shape: "shape", isUppercase: "isUppercase" }, ngImport: i0, template: `<span [class]="tagClasses"><ng-content></ng-content></span>`, isInline: true, styles: [".tag-base,.tag{display:inline-flex;justify-content:center;white-space:nowrap}.tag-skin,.tag{background-color:var(--agnostic-gray-light);color:var(--agnostic-dark);font-size:var(--fluid-12);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2);padding-inline-start:var(--fluid-8);padding-inline-end:var(--fluid-8)}.tag-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.tag-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.tag-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.tag-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.tag-upper{font-size:var(--fluid-10);text-transform:uppercase}.tag-circle{border-radius:50%}.tag-round{border-radius:var(--agnostic-radius)}.tag-pill{border-radius:200px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-tag', template: `<span [class]="tagClasses"><ng-content></ng-content></span>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".tag-base,.tag{display:inline-flex;justify-content:center;white-space:nowrap}.tag-skin,.tag{background-color:var(--agnostic-gray-light);color:var(--agnostic-dark);font-size:var(--fluid-12);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2);padding-inline-start:var(--fluid-8);padding-inline-end:var(--fluid-8)}.tag-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.tag-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.tag-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.tag-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.tag-upper{font-size:var(--fluid-10);text-transform:uppercase}.tag-circle{border-radius:50%}.tag-round{border-radius:var(--agnostic-radius)}.tag-pill{border-radius:200px}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], shape: [{
                type: Input
            }], isUppercase: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi90YWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVExRSxNQUFNLE9BQU8sWUFBWTtJQU56QjtRQU9XLFNBQUksR0FBa0QsRUFBRSxDQUFDO1FBQ3pELFVBQUssR0FBcUMsRUFBRSxDQUFDO1FBQzdDLGdCQUFXLEdBQWEsS0FBSyxDQUFDO0tBWXhDO0lBVkMsSUFBSSxVQUFVO1FBQ1osT0FBTztZQUNMLEtBQUs7WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDcEM7YUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDOzt5R0FkVSxZQUFZOzZGQUFaLFlBQVksb0hBSmIsNkRBQTZEOzJGQUk1RCxZQUFZO2tCQU54QixTQUFTOytCQUNFLFFBQVEsWUFDUiw2REFBNkQsbUJBRXRELHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLXRhZycsXG4gIHRlbXBsYXRlOiBgPHNwYW4gW2NsYXNzXT1cInRhZ0NsYXNzZXNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPmAsXG4gIHN0eWxlVXJsczogWycuL3RhZy5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHR5cGU6ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnaW5mbycgfCAnc3VjY2VzcycgfCAnJyA9ICcnO1xuICBASW5wdXQoKSBzaGFwZTogJ3BpbGwnIHwgJ3JvdW5kJyB8ICdjaXJjbGUnIHwgJycgPSAnJztcbiAgQElucHV0KCkgaXNVcHBlcmNhc2U/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IHRhZ0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICd0YWcnLFxuICAgICAgdGhpcy50eXBlID8gYHRhZy0ke3RoaXMudHlwZX1gIDogJycsXG4gICAgICB0aGlzLnNoYXBlID8gYHRhZy0ke3RoaXMuc2hhcGV9YCA6ICcnLFxuICAgICAgdGhpcy5pc1VwcGVyY2FzZSA/ICd0YWctdXBwZXInIDogJycsXG4gICAgXVxuICAgICAgLmZpbHRlcigoYykgPT4gYylcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==