import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PortalHostComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.teleportTo = 'body';
    }
    ngAfterViewInit() {
        this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.portalTemplateRef);
        this.embeddedViewRef.detectChanges();
        const outletElement = document.querySelector(this.teleportTo);
        this.embeddedViewRef.rootNodes.forEach(rootNode => {
            outletElement.appendChild(rootNode);
        });
    }
    ngOnDestroy() {
        const index = this.viewContainerRef.indexOf(this.embeddedViewRef);
        if (index !== -1) {
            this.viewContainerRef.remove(index);
        }
    }
}
PortalHostComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalHostComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
PortalHostComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PortalHostComponent, selector: "ag-portal-host", inputs: { teleportTo: "teleportTo" }, viewQueries: [{ propertyName: "portalTemplateRef", first: true, predicate: ["portalTemplateReference"], descendants: true }], ngImport: i0, template: `<ng-template #portalTemplateReference>
    <ng-content></ng-content>
  </ng-template>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalHostComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-portal-host',
                    template: `<ng-template #portalTemplateReference>
    <ng-content></ng-content>
  </ng-template>`
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { portalTemplateRef: [{
                type: ViewChild,
                args: ['portalTemplateReference']
            }], teleportTo: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWhvc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL3BvcnRhbC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDOztBQVF2QixNQUFNLE9BQU8sbUJBQW1CO0lBUzlCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRjdDLGVBQVUsR0FBRyxNQUFNLENBQUM7SUFFNkIsQ0FBQztJQUUzRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFnQixDQUFDO1FBRTdFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0hBN0JVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDBOQUpwQjs7aUJBRUs7MkZBRUosbUJBQW1CO2tCQU4vQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRTs7aUJBRUs7aUJBQ2hCO3VHQUV1QyxpQkFBaUI7c0JBQXRELFNBQVM7dUJBQUMseUJBQXlCO2dCQU0zQixVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctcG9ydGFsLWhvc3QnLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjcG9ydGFsVGVtcGxhdGVSZWZlcmVuY2U+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L25nLXRlbXBsYXRlPmBcbn0pXG5leHBvcnQgY2xhc3MgUG9ydGFsSG9zdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3BvcnRhbFRlbXBsYXRlUmVmZXJlbmNlJykgcG9ydGFsVGVtcGxhdGVSZWY6IGFueTtcbiAgcHJpdmF0ZSBlbWJlZGRlZFZpZXdSZWYhOiBFbWJlZGRlZFZpZXdSZWY8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+O1xuXG4gIC8qKlxuICAgKiBUZWxlcG9ydCB0byBzZWxlY3Rvci4gRmFsbHMgYmFjayB0byBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBASW5wdXQoKSB0ZWxlcG9ydFRvID0gJ2JvZHknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZW1iZWRkZWRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgIHRoaXMucG9ydGFsVGVtcGxhdGVSZWZcbiAgICApO1xuICAgIHRoaXMuZW1iZWRkZWRWaWV3UmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGNvbnN0IG91dGxldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudGVsZXBvcnRUbykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0aGlzLmVtYmVkZGVkVmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB7XG4gICAgICBvdXRsZXRFbGVtZW50LmFwcGVuZENoaWxkKHJvb3ROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5lbWJlZGRlZFZpZXdSZWYpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5yZW1vdmUoaW5kZXgpO1xuICAgIH1cbiAgfVxufVxuIl19