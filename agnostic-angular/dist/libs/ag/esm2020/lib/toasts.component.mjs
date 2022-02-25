import { Component, Input } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./portal-host.component";
import * as i2 from "@angular/common";
export class ToastsComponent {
    constructor() {
        this.mounted = new BehaviorSubject(false);
    }
    get toastClasses() {
        return [
            'alert-toast',
            this.horizontalPosition,
            this.verticalPosition,
        ].join(" ");
    }
    ngOnInit() {
        this.portalTarget = this.portalRootSelector || 'body';
        this.mounted.next(true);
    }
}
ToastsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToastsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ToastsComponent, selector: "ag-toasts", inputs: { portalRootSelector: "portalRootSelector", horizontalPosition: "horizontalPosition", verticalPosition: "verticalPosition" }, ngImport: i0, template: `<ag-portal-host *ngIf="mounted | async" [teleportTo]="portalTarget">
    <div [class]="toastClasses">
      <ng-content></ng-content>
    </div>
  </ag-portal-host>`, isInline: true, styles: [".alert-toast{min-width:19rem;max-width:100%;position:fixed;z-index:1100;font-size:var(--agnostic-small);line-height:var(--fluid-24);padding:0;margin:var(--fluid-16)}\n"], components: [{ type: i1.PortalHostComponent, selector: "ag-portal-host", inputs: ["teleportTo"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ToastsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-toasts', template: `<ag-portal-host *ngIf="mounted | async" [teleportTo]="portalTarget">
    <div [class]="toastClasses">
      <ng-content></ng-content>
    </div>
  </ag-portal-host>`, styles: [".alert-toast{min-width:19rem;max-width:100%;position:fixed;z-index:1100;font-size:var(--agnostic-small);line-height:var(--fluid-24);padding:0;margin:var(--fluid-16)}\n"] }]
        }], propDecorators: { portalRootSelector: [{
                type: Input
            }], horizontalPosition: [{
                type: Input
            }], verticalPosition: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi90b2FzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFVdkMsTUFBTSxPQUFPLGVBQWU7SUFUNUI7UUFVRSxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUE7S0FtQjlDO0lBWkMsSUFBVyxZQUFZO1FBQ3JCLE9BQU87WUFDTCxhQUFhO1lBQ2IsSUFBSSxDQUFDLGtCQUFrQjtZQUN2QixJQUFJLENBQUMsZ0JBQWdCO1NBQ3RCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxNQUFNLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7NEdBbkJVLGVBQWU7Z0dBQWYsZUFBZSx1TEFQaEI7Ozs7b0JBSVE7MkZBR1AsZUFBZTtrQkFUM0IsU0FBUzsrQkFDRSxXQUFXLFlBQ1g7Ozs7b0JBSVE7OEJBT1Qsa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy10b2FzdHMnLFxuICB0ZW1wbGF0ZTogYDxhZy1wb3J0YWwtaG9zdCAqbmdJZj1cIm1vdW50ZWQgfCBhc3luY1wiIFt0ZWxlcG9ydFRvXT1cInBvcnRhbFRhcmdldFwiPlxuICAgIDxkaXYgW2NsYXNzXT1cInRvYXN0Q2xhc3Nlc1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2FnLXBvcnRhbC1ob3N0PmAsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0cy5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW91bnRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpXG4gIHB1YmxpYyBwb3J0YWxUYXJnZXQhOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgcG9ydGFsUm9vdFNlbGVjdG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBob3Jpem9udGFsUG9zaXRpb24hOiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJztcbiAgQElucHV0KCkgdmVydGljYWxQb3NpdGlvbiE6ICd0b3AnIHwgJ2JvdHRvbSc7XG5cbiAgcHVibGljIGdldCB0b2FzdENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdhbGVydC10b2FzdCcsXG4gICAgICB0aGlzLmhvcml6b250YWxQb3NpdGlvbixcbiAgICAgIHRoaXMudmVydGljYWxQb3NpdGlvbixcbiAgICBdLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wb3J0YWxUYXJnZXQgPSB0aGlzLnBvcnRhbFJvb3RTZWxlY3RvciB8fCAnYm9keSc7XG4gICAgdGhpcy5tb3VudGVkLm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==