import { Component, Input, ChangeDetectionStrategy, ContentChildren, QueryList, ViewEncapsulation, } from '@angular/core';
import { ButtonComponent } from './button.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ButtonGroupComponent {
    get getAriaLabel() {
        const label = this.ariaLabel ? this.ariaLabel : 'button group element';
        return label;
    }
    get classes() {
        const cssClass = this.css ? this.css : '';
        return ['btn-group', cssClass].join(' ');
    }
}
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ButtonGroupComponent, selector: "ag-button-group", inputs: { css: "css", ariaLabel: "ariaLabel" }, queries: [{ propertyName: "buttons", predicate: ButtonComponent }], ngImport: i0, template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnostic-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnostic-btn-radius, var(--fluid-4))}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-button-group', template: `<div [ngClass]="classes">
    <span class="screenreader-only">{{ getAriaLabel }}</span>
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnostic-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnostic-btn-radius, var(--fluid-4))}\n"] }]
        }], propDecorators: { buttons: [{
                type: ContentChildren,
                args: [ButtonComponent]
            }], css: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2J1dHRvbmdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsZUFBZSxFQUNmLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFhckQsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQixJQUFXLFlBQVk7UUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7UUFDdkUsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOztpSEFiVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiwrSEFDZCxlQUFlLDZCQVR0Qjs7O1NBR0g7MkZBS0ksb0JBQW9CO2tCQVZoQyxTQUFTOytCQUNFLGlCQUFpQixZQUNqQjs7O1NBR0gsbUJBRVUsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs4QkFHSCxPQUFPO3NCQUF4QyxlQUFlO3VCQUFDLGVBQWU7Z0JBQ3ZCLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuXG4vLyAuc2NyZWVucmVhZGVyLW9ubHkgaXMgZXhwZWN0ZWQgdG8gYmUgZ2xvYmFsbHkgYXZhaWxhYmxlIHZpYSBjb21tb24ubWluLmNzc1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctYnV0dG9uLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cImNsYXNzZXNcIj5cbiAgICA8c3BhbiBjbGFzcz1cInNjcmVlbnJlYWRlci1vbmx5XCI+e3sgZ2V0QXJpYUxhYmVsIH19PC9zcGFuPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWdyb3VwLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uR3JvdXBDb21wb25lbnQge1xuICBAQ29udGVudENoaWxkcmVuKEJ1dHRvbkNvbXBvbmVudCkgYnV0dG9ucyE6IFF1ZXJ5TGlzdDxCdXR0b25Db21wb25lbnQ+O1xuICBASW5wdXQoKSBjc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBnZXQgZ2V0QXJpYUxhYmVsKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmFyaWFMYWJlbCA/IHRoaXMuYXJpYUxhYmVsIDogJ2J1dHRvbiBncm91cCBlbGVtZW50JztcbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjc3NDbGFzcyA9IHRoaXMuY3NzID8gdGhpcy5jc3MgOiAnJztcbiAgICByZXR1cm4gWydidG4tZ3JvdXAnLCBjc3NDbGFzc10uam9pbignICcpO1xuICB9XG59XG4iXX0=