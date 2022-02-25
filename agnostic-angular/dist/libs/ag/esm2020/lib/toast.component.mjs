import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./alert.component";
import * as i2 from "@angular/common";
export class ToastComponent {
    constructor() {
        this.isOpen = true;
        this.isRounded = false;
        this.isBorderAll = false;
        this.isBorderLeft = false;
        this.isBorderRight = false;
        this.isBorderTop = false;
        this.isBorderBottom = false;
        this.isBlockEnd = false;
        this.type = '';
        this.isAnimationFadeIn = true;
        this.isAnimationSlideUp = false;
    }
}
ToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ToastComponent, selector: "ag-toast", inputs: { isOpen: "isOpen", isRounded: "isRounded", isBorderAll: "isBorderAll", isBorderLeft: "isBorderLeft", isBorderRight: "isBorderRight", isBorderTop: "isBorderTop", isBorderBottom: "isBorderBottom", isBlockEnd: "isBlockEnd", type: "type", isAnimationFadeIn: "isAnimationFadeIn", isAnimationSlideUp: "isAnimationSlideUp" }, ngImport: i0, template: `<ag-alert
    *ngIf="isOpen"
    [isToast]="true"
    [isRounded]="isRounded"
    [isBorderAll]="isBorderAll"
    [isBorderLeft]="isBorderLeft"
    [isBorderRight]="isBorderRight"
    [isBorderTop]="isBorderTop"
    [isBorderBottom]="isBorderBottom"
    [isBlockEnd]="isBlockEnd"
    [type]="type"
    [isAnimationFadeIn]="isAnimationFadeIn"
    [isAnimationSlideUp]="isAnimationSlideUp"
    [type]="type"
  >
      <ng-content></ng-content>
    </ag-alert>`, isInline: true, components: [{ type: i1.AlertComponent, selector: "ag-alert", inputs: ["isRounded", "isBorderAll", "isBorderLeft", "isBorderRight", "isBorderTop", "isBorderBottom", "isBlockEnd", "type", "isAnimationFadeIn", "isAnimationSlideUp", "isToast"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-toast',
                    template: `<ag-alert
    *ngIf="isOpen"
    [isToast]="true"
    [isRounded]="isRounded"
    [isBorderAll]="isBorderAll"
    [isBorderLeft]="isBorderLeft"
    [isBorderRight]="isBorderRight"
    [isBorderTop]="isBorderTop"
    [isBorderBottom]="isBorderBottom"
    [isBlockEnd]="isBlockEnd"
    [type]="type"
    [isAnimationFadeIn]="isAnimationFadeIn"
    [isAnimationSlideUp]="isAnimationSlideUp"
    [type]="type"
  >
      <ng-content></ng-content>
    </ag-alert>`,
                }]
        }], propDecorators: { isOpen: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], isBorderAll: [{
                type: Input
            }], isBorderLeft: [{
                type: Input
            }], isBorderRight: [{
                type: Input
            }], isBorderTop: [{
                type: Input
            }], isBorderBottom: [{
                type: Input
            }], isBlockEnd: [{
                type: Input
            }], type: [{
                type: Input
            }], isAnimationFadeIn: [{
                type: Input
            }], isAnimationSlideUp: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQXNCakQsTUFBTSxPQUFPLGNBQWM7SUFwQjNCO1FBcUJXLFdBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFNBQUksR0FBMkQsRUFBRSxDQUFDO1FBQ2xFLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7S0FDckM7OzJHQWRZLGNBQWM7K0ZBQWQsY0FBYyx3WEFsQmY7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZ0JJOzJGQUVILGNBQWM7a0JBcEIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZ0JJO2lCQUNmOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFHRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLXRvYXN0JyxcbiAgdGVtcGxhdGU6IGA8YWctYWxlcnRcbiAgICAqbmdJZj1cImlzT3BlblwiXG4gICAgW2lzVG9hc3RdPVwidHJ1ZVwiXG4gICAgW2lzUm91bmRlZF09XCJpc1JvdW5kZWRcIlxuICAgIFtpc0JvcmRlckFsbF09XCJpc0JvcmRlckFsbFwiXG4gICAgW2lzQm9yZGVyTGVmdF09XCJpc0JvcmRlckxlZnRcIlxuICAgIFtpc0JvcmRlclJpZ2h0XT1cImlzQm9yZGVyUmlnaHRcIlxuICAgIFtpc0JvcmRlclRvcF09XCJpc0JvcmRlclRvcFwiXG4gICAgW2lzQm9yZGVyQm90dG9tXT1cImlzQm9yZGVyQm90dG9tXCJcbiAgICBbaXNCbG9ja0VuZF09XCJpc0Jsb2NrRW5kXCJcbiAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICBbaXNBbmltYXRpb25GYWRlSW5dPVwiaXNBbmltYXRpb25GYWRlSW5cIlxuICAgIFtpc0FuaW1hdGlvblNsaWRlVXBdPVwiaXNBbmltYXRpb25TbGlkZVVwXCJcbiAgICBbdHlwZV09XCJ0eXBlXCJcbiAgPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvYWctYWxlcnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBpc09wZW4/OiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyBBbGVydCBwcm9wcy4gSXMgd2F5IHRvIHJlbW92ZSBkdXBsaWNhdGUgYWxlcnQgSW5wdXQoKSBwcm9wcz9cbiAgQElucHV0KCkgaXNSb3VuZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQm9yZGVyQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQm9yZGVyTGVmdCA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0JvcmRlclJpZ2h0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQm9yZGVyVG9wID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQm9yZGVyQm90dG9tID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQmxvY2tFbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZTogJ2RhcmsnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdpbmZvJyB8ICdzdWNjZXNzJyB8ICcnID0gJyc7XG4gIEBJbnB1dCgpIGlzQW5pbWF0aW9uRmFkZUluID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNBbmltYXRpb25TbGlkZVVwID0gZmFsc2U7XG59XG4iXX0=