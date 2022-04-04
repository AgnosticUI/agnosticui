import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DiscloseComponent {
    constructor() {
        this.title = "";
        this.isOpen = false;
        this.isBackground = false;
        this.isBordered = false;
    }
}
DiscloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DiscloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DiscloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DiscloseComponent, selector: "ag-disclose", inputs: { title: "title", isOpen: "isOpen", isBackground: "isBackground", isBordered: "isBordered" }, ngImport: i0, template: `<details class="disclose" [class.disclose-bordered]="isBordered" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`, isInline: true, styles: [".disclose{margin-block-end:var(--fluid-4);width:100%}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bordered .disclose-title{border:1px solid var(--agnostic-gray-light)}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion),(update: slow){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DiscloseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-disclose', template: `<details class="disclose" [class.disclose-bordered]="isBordered" [class.disclose-bg]="isBackground" [attr.open]="isOpen || null">
    <summary class="disclose-title">{{title}}</summary>
    <div class="disclose-panel">
      <ng-content></ng-content>
    </div>
  </details>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".disclose{margin-block-end:var(--fluid-4);width:100%}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bordered .disclose-title{border:1px solid var(--agnostic-gray-light)}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion),(update: slow){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], isBackground: [{
                type: Input
            }], isBordered: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2Rpc2Nsb3NlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhMUUsTUFBTSxPQUFPLGlCQUFpQjtJQVg5QjtRQWFXLFVBQUssR0FBRyxFQUFFLENBQUM7UUFHWCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztLQUM3Qjs7OEdBUlksaUJBQWlCO2tHQUFqQixpQkFBaUIseUpBVGxCOzs7OzthQUtDOzJGQUlBLGlCQUFpQjtrQkFYN0IsU0FBUzsrQkFDRSxhQUFhLFlBQ2I7Ozs7O2FBS0MsbUJBRU0sdUJBQXVCLENBQUMsTUFBTTs4QkFJdEMsS0FBSztzQkFBYixLQUFLO2dCQUdHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1kaXNjbG9zZScsXG4gIHRlbXBsYXRlOiBgPGRldGFpbHMgY2xhc3M9XCJkaXNjbG9zZVwiIFtjbGFzcy5kaXNjbG9zZS1ib3JkZXJlZF09XCJpc0JvcmRlcmVkXCIgW2NsYXNzLmRpc2Nsb3NlLWJnXT1cImlzQmFja2dyb3VuZFwiIFthdHRyLm9wZW5dPVwiaXNPcGVuIHx8IG51bGxcIj5cbiAgICA8c3VtbWFyeSBjbGFzcz1cImRpc2Nsb3NlLXRpdGxlXCI+e3t0aXRsZX19PC9zdW1tYXJ5PlxuICAgIDxkaXYgY2xhc3M9XCJkaXNjbG9zZS1wYW5lbFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2RldGFpbHM+YCxcbiAgc3R5bGVVcmxzOiBbJy4vZGlzY2xvc2UuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEaXNjbG9zZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xuICAvLyBUaGUgPGRldGFpbHM+IG9wZW4gYXR0cmlidXRlIGluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXRhaWxzIGNvbnRlbnQgd2lsbCBiZVxuICAvLyBkaXNwbGF5ZWQgb24gcGFnZSBsb2FkIG9yIG5vdC5cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQmFja2dyb3VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0JvcmRlcmVkID0gZmFsc2U7XG59XG4iXX0=