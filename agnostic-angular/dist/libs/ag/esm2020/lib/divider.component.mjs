import { Input, ChangeDetectionStrategy, HostBinding, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DividerComponent {
    constructor() {
        this.hasContent = false;
        this.isVertical = false;
    }
    get dividerClasses() {
        return [
            'divider',
            this.isVertical ? 'divider-vertical' : '',
            this.type ? `divider-${this.type}` : '',
            this.size ? `divider-${this.size}` : '',
            this.justify ? `divider-justify-${this.justify}` : '',
        ]
            .filter((c) => c)
            .join(' ');
    }
}
DividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DividerComponent, selector: "ag-divider", inputs: { hasContent: "hasContent", isVertical: "isVertical", justify: "justify", type: "type", size: "size" }, host: { properties: { "class.flex": "this.isVertical" } }, ngImport: i0, template: `<div [class]="dividerClasses">
    <div *ngIf="hasContent" class="divider-content">
      <ng-content></ng-content>
    </div>
  </div>`, isInline: true, styles: [".divider{display:flex;justify-content:center;align-items:center;white-space:nowrap;width:100%}.divider:before,.divider:after{content:\"\";background-color:var(--agnostic-gray-mid);height:var(--fluid-2);flex-grow:1}.divider-small:before,.divider-small:after{height:1px}.divider-large:before,.divider-large:after{height:var(--fluid-4)}.divider-xlarge:before,.divider-xlarge:after{height:var(--fluid-6)}.divider-justify-end:after,.divider-justify-start:before{flex-grow:0;flex-basis:3%}.divider-content{padding-inline-start:var(--fluid-16);padding-inline-end:var(--fluid-16)}.divider-vertical{height:auto;margin:0 var(--fluid-16);width:var(--fluid-16);flex-direction:column;align-self:stretch}.divider-vertical:before,.divider-vertical:after{width:var(--fluid-2)}.divider-vertical.divider-small:before,.divider-vertical.divider-small:after{width:1px}.divider-vertical.divider-large:before,.divider-vertical.divider-large:after{width:var(--fluid-4)}.divider-vertical.divider-xlarge:before,.divider-vertical.divider-xlarge:after{width:var(--fluid-6)}.divider-vertical .divider-content{padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6)}.divider-warning:before,.divider-warning:after{background-color:var(--agnostic-warning-dark)}.divider-warning .divider-content{color:var(--agnostic-warning-dark)}.divider-error:before,.divider-error:after{background-color:var(--agnostic-error)}.divider-error .divider-content{color:var(--agnostic-error)}.divider-success:before,.divider-success:after{background-color:var(--agnostic-action-dark)}.divider-success .divider-content{color:var(--agnostic-action-dark)}.divider-info:before,.divider-info:after{background-color:var(--agnostic-primary)}.divider-info .divider-content{color:var(--agnostic-primary)}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-divider', template: `<div [class]="dividerClasses">
    <div *ngIf="hasContent" class="divider-content">
      <ng-content></ng-content>
    </div>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".divider{display:flex;justify-content:center;align-items:center;white-space:nowrap;width:100%}.divider:before,.divider:after{content:\"\";background-color:var(--agnostic-gray-mid);height:var(--fluid-2);flex-grow:1}.divider-small:before,.divider-small:after{height:1px}.divider-large:before,.divider-large:after{height:var(--fluid-4)}.divider-xlarge:before,.divider-xlarge:after{height:var(--fluid-6)}.divider-justify-end:after,.divider-justify-start:before{flex-grow:0;flex-basis:3%}.divider-content{padding-inline-start:var(--fluid-16);padding-inline-end:var(--fluid-16)}.divider-vertical{height:auto;margin:0 var(--fluid-16);width:var(--fluid-16);flex-direction:column;align-self:stretch}.divider-vertical:before,.divider-vertical:after{width:var(--fluid-2)}.divider-vertical.divider-small:before,.divider-vertical.divider-small:after{width:1px}.divider-vertical.divider-large:before,.divider-vertical.divider-large:after{width:var(--fluid-4)}.divider-vertical.divider-xlarge:before,.divider-vertical.divider-xlarge:after{width:var(--fluid-6)}.divider-vertical .divider-content{padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6)}.divider-warning:before,.divider-warning:after{background-color:var(--agnostic-warning-dark)}.divider-warning .divider-content{color:var(--agnostic-warning-dark)}.divider-error:before,.divider-error:after{background-color:var(--agnostic-error)}.divider-error .divider-content{color:var(--agnostic-error)}.divider-success:before,.divider-success:after{background-color:var(--agnostic-action-dark)}.divider-success .divider-content{color:var(--agnostic-action-dark)}.divider-info:before,.divider-info:after{background-color:var(--agnostic-primary)}.divider-info .divider-content{color:var(--agnostic-primary)}\n"] }]
        }], propDecorators: { hasContent: [{
                type: Input
            }], isVertical: [{
                type: HostBinding,
                args: ['class.flex']
            }, {
                type: Input
            }], justify: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2FnL3NyYy9saWIvZGl2aWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZdkYsTUFBTSxPQUFPLGdCQUFnQjtJQVY3QjtRQVdXLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFRRixlQUFVLEdBQWEsS0FBSyxDQUFDO0tBZWxFO0lBWEMsSUFBSSxjQUFjO1FBQ2hCLE9BQU87WUFDTCxTQUFTO1lBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0RDthQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7OzZHQXZCVSxnQkFBZ0I7aUdBQWhCLGdCQUFnQiw2TkFSakI7Ozs7U0FJSDsyRkFJSSxnQkFBZ0I7a0JBVjVCLFNBQVM7K0JBQ0UsWUFBWSxZQUNaOzs7O1NBSUgsbUJBRVUsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsVUFBVTtzQkFBbEIsS0FBSztnQkFROEIsVUFBVTtzQkFBN0MsV0FBVzt1QkFBQyxZQUFZOztzQkFBRyxLQUFLO2dCQUN4QixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1kaXZpZGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJkaXZpZGVyQ2xhc3Nlc1wiPlxuICAgIDxkaXYgKm5nSWY9XCJoYXNDb250ZW50XCIgY2xhc3M9XCJkaXZpZGVyLWNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vZGl2aWRlci5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBoYXNDb250ZW50PzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogRm9yIEFuZ3VsYXIsIHdlIG5lZWQgdG8gY29uZGl0aW9uYWxseSBhZGQgdGhlIC5mbGV4IGNsYXNzIHRvIHRoZSBob3N0XG4gICAqIGlmIHdlJ3JlIGluIHZlcnRpY2FsIG9yaWVudGF0aW9uIHNvIHRoYXQgb3VyIC5kaXZpZGVyLXZlcnRpY2FsIGNsYXNzZXNcbiAgICogYXJlIGRpcmVjdCBjaGlsZHJlbiBvZiBhIGZsZXggY29udGFpbmVyIHNpbmNlIC5kaXJlY3QtdmVydGljYWwgaGFzOlxuICAgKiBoZWlnaHQ6IGF1dG87IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTE2MTcwNVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbGV4JykgQElucHV0KCkgaXNWZXJ0aWNhbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkganVzdGlmeT86ICdzdGFydCcgfCAnZW5kJyB8ICcnO1xuICBASW5wdXQoKSB0eXBlPzogJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICcnO1xuICBASW5wdXQoKSBzaXplPzogJ3NtYWxsJyB8ICdsYXJnZScgfCAneGxhcmdlJyB8ICcnO1xuICBnZXQgZGl2aWRlckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdkaXZpZGVyJyxcbiAgICAgIHRoaXMuaXNWZXJ0aWNhbCA/ICdkaXZpZGVyLXZlcnRpY2FsJyA6ICcnLFxuICAgICAgdGhpcy50eXBlID8gYGRpdmlkZXItJHt0aGlzLnR5cGV9YCA6ICcnLFxuICAgICAgdGhpcy5zaXplID8gYGRpdmlkZXItJHt0aGlzLnNpemV9YCA6ICcnLFxuICAgICAgdGhpcy5qdXN0aWZ5ID8gYGRpdmlkZXItanVzdGlmeS0ke3RoaXMuanVzdGlmeX1gIDogJycsXG4gICAgXVxuICAgICAgLmZpbHRlcigoYykgPT4gYylcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==