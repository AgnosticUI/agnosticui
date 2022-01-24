import { TemplateRef, ContentChild, EventEmitter, Output, Input, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "angular-a11y-dialog";
import * as i2 from "@angular/common";
export class DialogComponent {
    constructor() {
        this.mounted = new BehaviorSubject(false);
        this.role = 'dialog';
        this.closeButtonLabel = 'Close button';
        this.closeButtonPosition = 'first';
        this.classNames = {
            container: 'dialog',
            document: 'dialog-content',
            overlay: 'dialog-overlay',
            title: 'h3 mbe16',
            closeButton: 'dialog-close close-button',
        };
        this.instance = new EventEmitter();
    }
    assignDialogInstance(instance) {
        this.instance.emit(instance);
    }
    ;
    ngOnInit() {
        let dialogDocumentClasses = this.classNames.document ? [this.classNames.document] : [];
        if (this.isAnimationFadeIn && this.isAnimationSlideUp) {
            dialogDocumentClasses.push('dialog-slide-up-fade-in');
        }
        else if (this.isAnimationFadeIn) {
            dialogDocumentClasses.push('dialog-fade-in');
        }
        else if (this.isAnimationSlideUp) {
            dialogDocumentClasses.push('dialog-slide-up');
        }
        this.classNames.document = dialogDocumentClasses.filter((cls) => cls).join(' ');
        this.mounted.next(true);
    }
}
DialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DialogComponent, selector: "ag-dialog", inputs: { titleTemplate: "titleTemplate", mainTemplate: "mainTemplate", closeButtonFirstTemplate: "closeButtonFirstTemplate", closeButtonLastTemplate: "closeButtonLastTemplate", id: "id", appRoot: "appRoot", dialogRoot: "dialogRoot", role: "role", titleId: "titleId", closeButtonLabel: "closeButtonLabel", closeButtonPosition: "closeButtonPosition", classNames: "classNames", isAnimationFadeIn: "isAnimationFadeIn", isAnimationSlideUp: "isAnimationSlideUp" }, outputs: { instance: "instance" }, queries: [{ propertyName: "titleContent", first: true, predicate: ["title"], descendants: true }, { propertyName: "main", first: true, predicate: ["mainContent"], descendants: true, read: TemplateRef }, { propertyName: "closeButtonFirst", first: true, predicate: ["closeButtonContentFirst"], descendants: true }, { propertyName: "closeButtonLast", first: true, predicate: ["closeButtonContentLast"], descendants: true }], ngImport: i0, template: `<angular-a11y-dialog
    *ngIf="mounted | async"
    [id]="id"
    [appRoot]="appRoot"
    [dialogRoot]="dialogRoot"
    [classNames]="classNames"
    [role]="role"
    [titleId]="titleId"
    [closeButtonLabel]="closeButtonLabel"
    [closeButtonPosition]="closeButtonPosition"
    (instance)="assignDialogInstance"
  >
    <ng-template #closeButtonContentFirst>
      <ng-container *ngTemplateOutlet="closeButtonFirstTemplate"></ng-container>
    </ng-template>
    <ng-template #title>
      <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
    </ng-template>
    <ng-template #mainContent>
      <ng-container *ngTemplateOutlet="mainTemplate"></ng-container>
    </ng-template>
    <ng-template #closeButtonContentLast>
      <ng-container *ngTemplateOutlet="closeButtonLastTemplate"></ng-container>
    </ng-template>
  </angular-a11y-dialog>`, isInline: true, styles: [".dialog,.dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}.dialog{z-index:1001;display:flex}.dialog[aria-hidden=true]{display:none}.dialog-overlay{background-color:#32323299;animation:fade-in var(--agnostic-timing-fast) both}.dialog-content{background-color:#fff;margin:auto;z-index:1001;position:relative;padding:var(--fluid-16);max-width:90%;width:600px;border-radius:var(--agnostic-radius)}.dialog-fade-in{animation:fade-in var(--agnostic-timing-fast) both}.dialog-slide-up{animation:slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}.dialog-slide-up-fade-in{animation:fade-in var(--agnostic-timing-fast) both,slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}@media screen and (min-width: 700px){.dialog-content{padding:var(--fluid-32)}}@keyframes fade-in{0%{opacity:0%}}@keyframes slide-up{0%{transform:translateY(10%)}}.dialog-close{position:absolute;top:var(--fluid-8);right:var(--fluid-8)}@media (prefers-reduced-motion),(update: slow){.dialog-slide-up-fade-in,.dialog-fade-in,.dialog-slide-up,.dialog-content{transition-duration:.001ms!important}}@media only screen and (min-width: 576px){.dialog-close{top:var(--fluid-12);right:var(--fluid-12)}}@media screen and (min-width: 768px){.dialog-close{top:var(--fluid-16);right:var(--fluid-16)}}\n", ".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], components: [{ type: i1.AngularA11yDialogComponent, selector: "angular-a11y-dialog", inputs: ["id", "appRoot", "dialogRoot", "classNames", "role", "titleId", "closeButtonLabel", "closeButtonPosition"], outputs: ["instance"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i2.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-dialog', template: `<angular-a11y-dialog
    *ngIf="mounted | async"
    [id]="id"
    [appRoot]="appRoot"
    [dialogRoot]="dialogRoot"
    [classNames]="classNames"
    [role]="role"
    [titleId]="titleId"
    [closeButtonLabel]="closeButtonLabel"
    [closeButtonPosition]="closeButtonPosition"
    (instance)="assignDialogInstance"
  >
    <ng-template #closeButtonContentFirst>
      <ng-container *ngTemplateOutlet="closeButtonFirstTemplate"></ng-container>
    </ng-template>
    <ng-template #title>
      <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
    </ng-template>
    <ng-template #mainContent>
      <ng-container *ngTemplateOutlet="mainTemplate"></ng-container>
    </ng-template>
    <ng-template #closeButtonContentLast>
      <ng-container *ngTemplateOutlet="closeButtonLastTemplate"></ng-container>
    </ng-template>
  </angular-a11y-dialog>`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".dialog,.dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}.dialog{z-index:1001;display:flex}.dialog[aria-hidden=true]{display:none}.dialog-overlay{background-color:#32323299;animation:fade-in var(--agnostic-timing-fast) both}.dialog-content{background-color:#fff;margin:auto;z-index:1001;position:relative;padding:var(--fluid-16);max-width:90%;width:600px;border-radius:var(--agnostic-radius)}.dialog-fade-in{animation:fade-in var(--agnostic-timing-fast) both}.dialog-slide-up{animation:slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}.dialog-slide-up-fade-in{animation:fade-in var(--agnostic-timing-fast) both,slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}@media screen and (min-width: 700px){.dialog-content{padding:var(--fluid-32)}}@keyframes fade-in{0%{opacity:0%}}@keyframes slide-up{0%{transform:translateY(10%)}}.dialog-close{position:absolute;top:var(--fluid-8);right:var(--fluid-8)}@media (prefers-reduced-motion),(update: slow){.dialog-slide-up-fade-in,.dialog-fade-in,.dialog-slide-up,.dialog-content{transition-duration:.001ms!important}}@media only screen and (min-width: 576px){.dialog-close{top:var(--fluid-12);right:var(--fluid-12)}}@media screen and (min-width: 768px){.dialog-close{top:var(--fluid-16);right:var(--fluid-16)}}\n", ".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"] }]
        }], propDecorators: { titleTemplate: [{
                type: Input
            }], titleContent: [{
                type: ContentChild,
                args: ['title']
            }], main: [{
                type: ContentChild,
                args: ['mainContent', { read: TemplateRef }]
            }], mainTemplate: [{
                type: Input
            }], closeButtonFirstTemplate: [{
                type: Input
            }], closeButtonFirst: [{
                type: ContentChild,
                args: ['closeButtonContentFirst']
            }], closeButtonLastTemplate: [{
                type: Input
            }], closeButtonLast: [{
                type: ContentChild,
                args: ['closeButtonContentLast']
            }], id: [{
                type: Input
            }], appRoot: [{
                type: Input
            }], dialogRoot: [{
                type: Input
            }], role: [{
                type: Input
            }], titleId: [{
                type: Input
            }], closeButtonLabel: [{
                type: Input
            }], closeButtonPosition: [{
                type: Input
            }], classNames: [{
                type: Input
            }], isAnimationFadeIn: [{
                type: Input
            }], isAnimationSlideUp: [{
                type: Input
            }], instance: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN0SixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBa0N2QyxNQUFNLE9BQU8sZUFBZTtJQS9CNUI7UUFnQ0UsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFBO1FBb0JwQyxTQUFJLEdBQWEsUUFBUSxDQUFDO1FBRTFCLHFCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUNsQyx3QkFBbUIsR0FBNEIsT0FBTyxDQUFDO1FBU3ZELGVBQVUsR0FBb0I7WUFDckMsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1lBR2pCLFdBQVcsRUFBRSwyQkFBMkI7U0FDekMsQ0FBQztRQVlRLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBb0I5QztJQWxCQyxvQkFBb0IsQ0FBQyxRQUFhO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBRUYsUUFBUTtRQUNOLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZGLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUdyRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbEMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs0R0F4RVUsZUFBZTtnR0FBZixlQUFlLG9zQkFPVyxXQUFXLHVQQXBDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkF3QmE7MkZBS1osZUFBZTtrQkEvQjNCLFNBQVM7K0JBQ0UsV0FBVyxZQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBd0JhLG1CQUVOLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OEJBSzVCLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUMsWUFBWTtzQkFEbEIsWUFBWTt1QkFBQyxPQUFPO2dCQUdzQyxJQUFJO3NCQUE5RCxZQUFZO3VCQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQ3pDLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUcsd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUVDLGdCQUFnQjtzQkFEdEIsWUFBWTt1QkFBQyx5QkFBeUI7Z0JBRzlCLHVCQUF1QjtzQkFBL0IsS0FBSztnQkFFQyxlQUFlO3NCQURyQixZQUFZO3VCQUFDLHdCQUF3QjtnQkFHN0IsRUFBRTtzQkFBVixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFTRyxVQUFVO3NCQUFsQixLQUFLO2dCQWFHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFLRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBRUksUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbGFzc05hbWVzU2hhcGUsIGNsb3NlQnV0dG9uUG9zaXRpb25UeXBlLCByb2xlVHlwZSB9IGZyb20gJ2FuZ3VsYXItYTExeS1kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYDxhbmd1bGFyLWExMXktZGlhbG9nXG4gICAgKm5nSWY9XCJtb3VudGVkIHwgYXN5bmNcIlxuICAgIFtpZF09XCJpZFwiXG4gICAgW2FwcFJvb3RdPVwiYXBwUm9vdFwiXG4gICAgW2RpYWxvZ1Jvb3RdPVwiZGlhbG9nUm9vdFwiXG4gICAgW2NsYXNzTmFtZXNdPVwiY2xhc3NOYW1lc1wiXG4gICAgW3JvbGVdPVwicm9sZVwiXG4gICAgW3RpdGxlSWRdPVwidGl0bGVJZFwiXG4gICAgW2Nsb3NlQnV0dG9uTGFiZWxdPVwiY2xvc2VCdXR0b25MYWJlbFwiXG4gICAgW2Nsb3NlQnV0dG9uUG9zaXRpb25dPVwiY2xvc2VCdXR0b25Qb3NpdGlvblwiXG4gICAgKGluc3RhbmNlKT1cImFzc2lnbkRpYWxvZ0luc3RhbmNlXCJcbiAgPlxuICAgIDxuZy10ZW1wbGF0ZSAjY2xvc2VCdXR0b25Db250ZW50Rmlyc3Q+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2xvc2VCdXR0b25GaXJzdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI3RpdGxlPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjbWFpbkNvbnRlbnQ+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWFpblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2Nsb3NlQnV0dG9uQ29udGVudExhc3Q+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2xvc2VCdXR0b25MYXN0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2FuZ3VsYXItYTExeS1kaWFsb2c+YCxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLmNzcycsICcuL2Nsb3NlLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW91bnRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpXG5cbiAgQElucHV0KCkgdGl0bGVUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZCgndGl0bGUnKVxuICBwdWJsaWMgdGl0bGVDb250ZW50OiBhbnk7XG5cbiAgQENvbnRlbnRDaGlsZCgnbWFpbkNvbnRlbnQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHB1YmxpYyBtYWluOiBhbnk7XG4gIEBJbnB1dCgpIG1haW5UZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcblxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkZpcnN0VGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxIVE1MRWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGQoJ2Nsb3NlQnV0dG9uQ29udGVudEZpcnN0JylcbiAgcHVibGljIGNsb3NlQnV0dG9uRmlyc3Q6IGFueTtcblxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkxhc3RUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnY2xvc2VCdXR0b25Db250ZW50TGFzdCcpXG4gIHB1YmxpYyBjbG9zZUJ1dHRvbkxhc3Q6IGFueTtcblxuICBASW5wdXQoKSBpZCE6IHN0cmluZztcbiAgQElucHV0KCkgYXBwUm9vdD86IHN0cmluZztcbiAgQElucHV0KCkgZGlhbG9nUm9vdD86IHN0cmluZztcbiAgQElucHV0KCkgcm9sZTogcm9sZVR5cGUgPSAnZGlhbG9nJztcbiAgQElucHV0KCkgdGl0bGVJZD86IHN0cmluZztcbiAgQElucHV0KCkgY2xvc2VCdXR0b25MYWJlbCA9ICdDbG9zZSBidXR0b24nO1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvblBvc2l0aW9uOiBjbG9zZUJ1dHRvblBvc2l0aW9uVHlwZSA9ICdmaXJzdCc7XG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpYWxvZyBnbG9iYWwgY3NzIGNsYXNzZXMgdG8gYXBwbHkuIE5vdGUgdGhpcyBjdXJyZW50bHkgcmVxdWlyZXNcbiAgICogVmlld0VuY2Fwc3VsYXRpb24ubm9uZSBhcyBhMTF5LWRpYWxvZyBpcyBvdXRzaWRlIG9mIEFuZ3VsYXIgb25jZSBjbGFzc2VzXG4gICAqIGFyZSBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFxuICAgKiBPdGhlcndpc2UsIHRoZXNlIGFyZSBmdWxseSBvdmVycmlkYWJsZSBieSB0aGUgY29uc3VtZXI7IGp1c3QgYmUgYXdhcmUgdGhhdFxuICAgKiBzaW5jZSBhMTF5LWRpYWxvZyBhcHBsaWVzIHRoZXNlIGNsYXNzZXMgdGhleSdsbCBuZWVkIHRvIGJlIGluIGdsb2JhbCBzY29wZS5cbiAgICovXG4gIEBJbnB1dCgpIGNsYXNzTmFtZXM6IENsYXNzTmFtZXNTaGFwZSA9IHtcbiAgICBjb250YWluZXI6ICdkaWFsb2cnLFxuICAgIGRvY3VtZW50OiAnZGlhbG9nLWNvbnRlbnQnLFxuICAgIG92ZXJsYXk6ICdkaWFsb2ctb3ZlcmxheScsXG4gICAgdGl0bGU6ICdoMyBtYmUxNicsXG4gICAgLy8gQm9ycm93cyAuY2xvc2UtYnV0dG9uIChmcm9tIGNsb3NlLmNzcykgYXMgaXQgZ2l2ZXMgdXMgdGhlIHRyYW5zcGFyZW50XG4gICAgLy8gc3R5bGUgcGx1cyB0aGUgYTExeSBmb2N1cyByaW5nIHdlIHdhbnQgYXBwbGllZCB0byBkaWFsb2cncyBjbG9zZSBidXR0b25cbiAgICBjbG9zZUJ1dHRvbjogJ2RpYWxvZy1jbG9zZSBjbG9zZS1idXR0b24nLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBbmltYXRlcyB0aGUgZGlhbG9nIGNvbnRlbnQgYnkgZmFkaW5nIGluLiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZS5cbiAgICovXG4gIEBJbnB1dCgpIGlzQW5pbWF0aW9uRmFkZUluPzogYm9vbGVhbjtcblxuICAvKipcbiAgKiBBbmltYXRlcyB0aGUgZGlhbG9nIGNvbnRlbnQgYnkgc2xpZGluZyB1cC4gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUuXG4gICovXG4gIEBJbnB1dCgpIGlzQW5pbWF0aW9uU2xpZGVVcD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGluc3RhbmNlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgYXNzaWduRGlhbG9nSW5zdGFuY2UoaW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMuaW5zdGFuY2UuZW1pdChpbnN0YW5jZSk7XG4gIH07XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGRpYWxvZ0RvY3VtZW50Q2xhc3NlcyA9IHRoaXMuY2xhc3NOYW1lcy5kb2N1bWVudCA/IFt0aGlzLmNsYXNzTmFtZXMuZG9jdW1lbnRdIDogW107XG4gICAgaWYgKHRoaXMuaXNBbmltYXRpb25GYWRlSW4gJiYgdGhpcy5pc0FuaW1hdGlvblNsaWRlVXApIHtcbiAgICAgIC8vIENhbm5vdCB1c2UgdHdvIHNlcGFyYXRlIENTUyBjbGFzc2VzIHdpdGggYW5pbWF0aW9uOiBmb28sIGJhclxuICAgICAgLy8gYXMgdGhlIGxhdGVyIGNsYXNzIHdpbGwgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmUgKHNvIGhlcmUgd2UndmUgY29tYmluZWQpXG4gICAgICBkaWFsb2dEb2N1bWVudENsYXNzZXMucHVzaCgnZGlhbG9nLXNsaWRlLXVwLWZhZGUtaW4nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNBbmltYXRpb25GYWRlSW4pIHtcbiAgICAgIGRpYWxvZ0RvY3VtZW50Q2xhc3Nlcy5wdXNoKCdkaWFsb2ctZmFkZS1pbicpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0FuaW1hdGlvblNsaWRlVXApIHtcbiAgICAgIGRpYWxvZ0RvY3VtZW50Q2xhc3Nlcy5wdXNoKCdkaWFsb2ctc2xpZGUtdXAnKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc05hbWVzLmRvY3VtZW50ID0gZGlhbG9nRG9jdW1lbnRDbGFzc2VzLmZpbHRlcigoY2xzKSA9PiBjbHMpLmpvaW4oJyAnKTtcbiAgICB0aGlzLm1vdW50ZWQubmV4dCh0cnVlKTtcbiAgfVxufVxuIl19