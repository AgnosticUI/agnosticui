import { TemplateRef, ContentChild, Input, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
    }
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
DialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DialogComponent, selector: "ag-dialog", inputs: { titleTemplate: "titleTemplate", mainTemplate: "mainTemplate", closeButtonFirstTemplate: "closeButtonFirstTemplate", closeButtonLastTemplate: "closeButtonLastTemplate", id: "id", appRoot: "appRoot", dialogRoot: "dialogRoot", role: "role", titleId: "titleId", closeButtonLabel: "closeButtonLabel", closeButtonPosition: "closeButtonPosition", classNames: "classNames", isAnimationFadeIn: "isAnimationFadeIn", isAnimationSlideUp: "isAnimationSlideUp" }, queries: [{ propertyName: "titleContent", first: true, predicate: ["title"], descendants: true }, { propertyName: "main", first: true, predicate: ["mainContent"], descendants: true, read: TemplateRef }, { propertyName: "closeButtonFirst", first: true, predicate: ["closeButtonContentFirst"], descendants: true }, { propertyName: "closeButtonLast", first: true, predicate: ["closeButtonContentLast"], descendants: true }], ngImport: i0, template: `<angular-a11y-dialog
    *ngIf="mounted | async"
    [id]="id"
    [appRoot]="appRoot"
    [dialogRoot]="dialogRoot"
    [classNames]="classNames"
    [role]="role"
    [titleId]="titleId"
    [closeButtonLabel]="closeButtonLabel"
    [closeButtonPosition]="closeButtonPosition"
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQW1DdkMsTUFBTSxPQUFPLGVBQWU7SUFoQzVCO1FBaUNFLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQTtRQW9CcEMsU0FBSSxHQUFhLFFBQVEsQ0FBQztRQUUxQixxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFDbEMsd0JBQW1CLEdBQTRCLE9BQU8sQ0FBQztRQVN2RCxlQUFVLEdBQW9CO1lBQ3JDLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixLQUFLLEVBQUUsVUFBVTtZQUdqQixXQUFXLEVBQUUsMkJBQTJCO1NBQ3pDLENBQUM7S0EwQkg7SUFkQyxRQUFRO1FBQ04sSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkYsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBR3JELHFCQUFxQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDakMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7OzRHQWxFVSxlQUFlO2dHQUFmLGVBQWUsaXFCQU9XLFdBQVcsdVBBckN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBdUJhOzJGQU9aLGVBQWU7a0JBaEMzQixTQUFTOytCQUNFLFdBQVcsWUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBdUJhLG1CQUVOLHVCQUF1QixDQUFDLE1BQU0saUJBR2hDLGlCQUFpQixDQUFDLElBQUk7OEJBSzVCLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUMsWUFBWTtzQkFEbEIsWUFBWTt1QkFBQyxPQUFPO2dCQUdzQyxJQUFJO3NCQUE5RCxZQUFZO3VCQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQ3pDLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUcsd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUVDLGdCQUFnQjtzQkFEdEIsWUFBWTt1QkFBQyx5QkFBeUI7Z0JBRzlCLHVCQUF1QjtzQkFBL0IsS0FBSztnQkFFQyxlQUFlO3NCQURyQixZQUFZO3VCQUFDLHdCQUF3QjtnQkFHN0IsRUFBRTtzQkFBVixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFTRyxVQUFVO3NCQUFsQixLQUFLO2dCQWFHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFLRyxrQkFBa0I7c0JBQTFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbGFzc05hbWVzU2hhcGUsIGNsb3NlQnV0dG9uUG9zaXRpb25UeXBlLCByb2xlVHlwZSB9IGZyb20gJ2FuZ3VsYXItYTExeS1kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYDxhbmd1bGFyLWExMXktZGlhbG9nXG4gICAgKm5nSWY9XCJtb3VudGVkIHwgYXN5bmNcIlxuICAgIFtpZF09XCJpZFwiXG4gICAgW2FwcFJvb3RdPVwiYXBwUm9vdFwiXG4gICAgW2RpYWxvZ1Jvb3RdPVwiZGlhbG9nUm9vdFwiXG4gICAgW2NsYXNzTmFtZXNdPVwiY2xhc3NOYW1lc1wiXG4gICAgW3JvbGVdPVwicm9sZVwiXG4gICAgW3RpdGxlSWRdPVwidGl0bGVJZFwiXG4gICAgW2Nsb3NlQnV0dG9uTGFiZWxdPVwiY2xvc2VCdXR0b25MYWJlbFwiXG4gICAgW2Nsb3NlQnV0dG9uUG9zaXRpb25dPVwiY2xvc2VCdXR0b25Qb3NpdGlvblwiXG4gID5cbiAgICA8bmctdGVtcGxhdGUgI2Nsb3NlQnV0dG9uQ29udGVudEZpcnN0PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNsb3NlQnV0dG9uRmlyc3RUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICN0aXRsZT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI21haW5Db250ZW50PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1haW5UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNjbG9zZUJ1dHRvbkNvbnRlbnRMYXN0PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNsb3NlQnV0dG9uTGFzdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9hbmd1bGFyLWExMXktZGlhbG9nPmAsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jc3MnLCAnLi9jbG9zZS5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cbiAgLy8gVE9ETyAtLSBzZWUgaWYgd2UgY2FuIGRvIHRoaXMgd2l0aG91dCBoYXZpbmcgdG8gdXNlIGdsb2JhbCBjc3NcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW91bnRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpXG5cbiAgQElucHV0KCkgdGl0bGVUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZCgndGl0bGUnKVxuICBwdWJsaWMgdGl0bGVDb250ZW50OiBhbnk7XG5cbiAgQENvbnRlbnRDaGlsZCgnbWFpbkNvbnRlbnQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHB1YmxpYyBtYWluOiBhbnk7XG4gIEBJbnB1dCgpIG1haW5UZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcblxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkZpcnN0VGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxIVE1MRWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGQoJ2Nsb3NlQnV0dG9uQ29udGVudEZpcnN0JylcbiAgcHVibGljIGNsb3NlQnV0dG9uRmlyc3Q6IGFueTtcblxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkxhc3RUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnY2xvc2VCdXR0b25Db250ZW50TGFzdCcpXG4gIHB1YmxpYyBjbG9zZUJ1dHRvbkxhc3Q6IGFueTtcblxuICBASW5wdXQoKSBpZCE6IHN0cmluZztcbiAgQElucHV0KCkgYXBwUm9vdD86IHN0cmluZztcbiAgQElucHV0KCkgZGlhbG9nUm9vdD86IHN0cmluZztcbiAgQElucHV0KCkgcm9sZTogcm9sZVR5cGUgPSAnZGlhbG9nJztcbiAgQElucHV0KCkgdGl0bGVJZD86IHN0cmluZztcbiAgQElucHV0KCkgY2xvc2VCdXR0b25MYWJlbCA9ICdDbG9zZSBidXR0b24nO1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvblBvc2l0aW9uOiBjbG9zZUJ1dHRvblBvc2l0aW9uVHlwZSA9ICdmaXJzdCc7XG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpYWxvZyBnbG9iYWwgY3NzIGNsYXNzZXMgdG8gYXBwbHkuIE5vdGUgdGhpcyBjdXJyZW50bHkgcmVxdWlyZXNyXG4gICAqIFZpZXdFbmNhcHN1bGF0aW9uLm5vbmUgYXMgYTExeS1kaWFsb2cgaXMgb3V0c2lkZSBvZiBBbmd1bGFyIG9uY2UgY2xhc3Nlc1xuICAgKiBhcmUgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBcbiAgICogT3RoZXJ3aXNlLCB0aGVzZSBhcmUgZnVsbHkgb3ZlcnJpZGFibGUgYnkgdGhlIGNvbnN1bWVyOyBqdXN0IGJlIGF3YXJlIHRoYXRcbiAgICogc2luY2UgYTExeS1kaWFsb2cgYXBwbGllcyB0aGVzZSBjbGFzc2VzIHRoZXknbGwgbmVlZCB0byBiZSBpbiBnbG9iYWwgc2NvcGUuXG4gICAqL1xuICBASW5wdXQoKSBjbGFzc05hbWVzOiBDbGFzc05hbWVzU2hhcGUgPSB7XG4gICAgY29udGFpbmVyOiAnZGlhbG9nJyxcbiAgICBkb2N1bWVudDogJ2RpYWxvZy1jb250ZW50JyxcbiAgICBvdmVybGF5OiAnZGlhbG9nLW92ZXJsYXknLFxuICAgIHRpdGxlOiAnaDMgbWJlMTYnLFxuICAgIC8vIEJvcnJvd3MgLmNsb3NlLWJ1dHRvbiAoZnJvbSBjbG9zZS5jc3MpIGFzIGl0IGdpdmVzIHVzIHRoZSB0cmFuc3BhcmVudFxuICAgIC8vIHN0eWxlIHBsdXMgdGhlIGExMXkgZm9jdXMgcmluZyB3ZSB3YW50IGFwcGxpZWQgdG8gZGlhbG9nJ3MgY2xvc2UgYnV0dG9uXG4gICAgY2xvc2VCdXR0b246ICdkaWFsb2ctY2xvc2UgY2xvc2UtYnV0dG9uJyxcbiAgfTtcblxuICAvKipcbiAgICogQW5pbWF0ZXMgdGhlIGRpYWxvZyBjb250ZW50IGJ5IGZhZGluZyBpbi4gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUuXG4gICAqL1xuICBASW5wdXQoKSBpc0FuaW1hdGlvbkZhZGVJbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICogQW5pbWF0ZXMgdGhlIGRpYWxvZyBjb250ZW50IGJ5IHNsaWRpbmcgdXAuIFNldCB0byBmYWxzZSB0byBkaXNhYmxlLlxuICAqL1xuICBASW5wdXQoKSBpc0FuaW1hdGlvblNsaWRlVXA/OiBib29sZWFuO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBkaWFsb2dEb2N1bWVudENsYXNzZXMgPSB0aGlzLmNsYXNzTmFtZXMuZG9jdW1lbnQgPyBbdGhpcy5jbGFzc05hbWVzLmRvY3VtZW50XSA6IFtdO1xuICAgIGlmICh0aGlzLmlzQW5pbWF0aW9uRmFkZUluICYmIHRoaXMuaXNBbmltYXRpb25TbGlkZVVwKSB7XG4gICAgICAvLyBDYW5ub3QgdXNlIHR3byBzZXBhcmF0ZSBDU1MgY2xhc3NlcyB3aXRoIGFuaW1hdGlvbjogZm9vLCBiYXJcbiAgICAgIC8vIGFzIHRoZSBsYXRlciBjbGFzcyB3aWxsIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lIChzbyBoZXJlIHdlJ3ZlIGNvbWJpbmVkKVxuICAgICAgZGlhbG9nRG9jdW1lbnRDbGFzc2VzLnB1c2goJ2RpYWxvZy1zbGlkZS11cC1mYWRlLWluJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzQW5pbWF0aW9uRmFkZUluKSB7XG4gICAgICBkaWFsb2dEb2N1bWVudENsYXNzZXMucHVzaCgnZGlhbG9nLWZhZGUtaW4nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNBbmltYXRpb25TbGlkZVVwKSB7XG4gICAgICBkaWFsb2dEb2N1bWVudENsYXNzZXMucHVzaCgnZGlhbG9nLXNsaWRlLXVwJyk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NOYW1lcy5kb2N1bWVudCA9IGRpYWxvZ0RvY3VtZW50Q2xhc3Nlcy5maWx0ZXIoKGNscykgPT4gY2xzKS5qb2luKCcgJyk7XG4gICAgdGhpcy5tb3VudGVkLm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==