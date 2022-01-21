import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DiscloseComponent {
    constructor() {
        this.title = "";
        this.isOpen = false;
        this.isBackground = false;
    }
}
DiscloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DiscloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DiscloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DiscloseComponent, selector: "ag-disclose", inputs: { title: "title", isOpen: "isOpen", isBackground: "isBackground" }, ngImport: i0, template: `<details class="disclose" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`, isInline: true, styles: [".disclose{margin-block-end:var(--fluid-4)}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion),(update: slow){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DiscloseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-disclose', template: `<details class="disclose" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".disclose{margin-block-end:var(--fluid-4)}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion),(update: slow){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], isBackground: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2Rpc2Nsb3NlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhMUUsTUFBTSxPQUFPLGlCQUFpQjtJQVg5QjtRQWFXLFVBQUssR0FBRyxFQUFFLENBQUM7UUFHWCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENBQUM7S0FDL0I7OzhHQVBZLGlCQUFpQjtrR0FBakIsaUJBQWlCLCtIQVRsQjs7Ozs7YUFLQzsyRkFJQSxpQkFBaUI7a0JBWDdCLFNBQVM7K0JBQ0UsYUFBYSxZQUNiOzs7OzthQUtDLG1CQUVNLHVCQUF1QixDQUFDLE1BQU07OEJBSXRDLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLWRpc2Nsb3NlJyxcbiAgdGVtcGxhdGU6IGA8ZGV0YWlscyBjbGFzcz1cImRpc2Nsb3NlXCIgW2NsYXNzLmRpc2Nsb3NlLWJnXT1cImlzQmFja2dyb3VuZFwiIFthdHRyLm9wZW5dPVwiaXNPcGVuIHx8IG51bGxcIj5cbiAgICA8c3VtbWFyeSBjbGFzcz1cImRpc2Nsb3NlLXRpdGxlXCI+e3t0aXRsZX19PC9zdW1tYXJ5PlxuICAgIDxkaXYgY2xhc3M9XCJkaXNjbG9zZS1wYW5lbFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2RldGFpbHM+YCxcbiAgc3R5bGVVcmxzOiBbJy4vZGlzY2xvc2UuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEaXNjbG9zZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xuICAvLyBUaGUgPGRldGFpbHM+IG9wZW4gYXR0cmlidXRlIGluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXRhaWxzIGNvbnRlbnQgd2lsbCBiZVxuICAvLyBkaXNwbGF5ZWQgb24gcGFnZSBsb2FkIG9yIG5vdC5cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQmFja2dyb3VuZCA9IGZhbHNlO1xufVxuIl19