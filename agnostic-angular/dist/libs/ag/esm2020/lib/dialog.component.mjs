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
DialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DialogComponent, selector: "ag-dialog", inputs: { titleTemplate: "titleTemplate", mainTemplate: "mainTemplate", closeButtonFirstTemplate: "closeButtonFirstTemplate", closeButtonLastTemplate: "closeButtonLastTemplate", id: "id", dialogRoot: "dialogRoot", role: "role", titleId: "titleId", closeButtonLabel: "closeButtonLabel", closeButtonPosition: "closeButtonPosition", classNames: "classNames", isAnimationFadeIn: "isAnimationFadeIn", isAnimationSlideUp: "isAnimationSlideUp" }, outputs: { instance: "instance" }, queries: [{ propertyName: "titleContent", first: true, predicate: ["title"], descendants: true }, { propertyName: "main", first: true, predicate: ["mainContent"], descendants: true, read: TemplateRef }, { propertyName: "closeButtonFirst", first: true, predicate: ["closeButtonContentFirst"], descendants: true }, { propertyName: "closeButtonLast", first: true, predicate: ["closeButtonContentLast"], descendants: true }], ngImport: i0, template: `<angular-a11y-dialog
    *ngIf="mounted | async"
    [id]="id"
    [dialogRoot]="dialogRoot"
    [classNames]="classNames"
    [role]="role"
    [titleId]="titleId"
    [closeButtonLabel]="closeButtonLabel"
    [closeButtonPosition]="closeButtonPosition"
    (instance)="assignDialogInstance($event)"
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
  </angular-a11y-dialog>`, isInline: true, styles: [".dialog,.dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}.dialog{z-index:1001;display:flex}.dialog[aria-hidden=true]{display:none}.dialog-overlay{background-color:#32323299;animation:fade-in var(--agnostic-timing-fast) both}.dialog-content{background-color:#fff;margin:auto;z-index:1001;position:relative;padding:var(--fluid-16);max-width:90%;width:600px;border-radius:var(--agnostic-radius)}.dialog-fade-in{animation:fade-in var(--agnostic-timing-fast) both}.dialog-slide-up{animation:slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}.dialog-slide-up-fade-in{animation:fade-in var(--agnostic-timing-fast) both,slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both}@media screen and (min-width: 700px){.dialog-content{padding:var(--fluid-32)}}@keyframes fade-in{0%{opacity:0%}}@keyframes slide-up{0%{transform:translateY(10%)}}.dialog-close{position:absolute;top:var(--fluid-8);right:var(--fluid-8)}@media (prefers-reduced-motion),(update: slow){.dialog-slide-up-fade-in,.dialog-fade-in,.dialog-slide-up,.dialog-content{transition-duration:.001ms!important}}@media only screen and (min-width: 576px){.dialog-close{top:var(--fluid-12);right:var(--fluid-12)}}@media screen and (min-width: 768px){.dialog-close{top:var(--fluid-16);right:var(--fluid-16)}}\n", ".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], components: [{ type: i1.AngularA11yDialogComponent, selector: "angular-a11y-dialog", inputs: ["id", "dialogRoot", "classNames", "role", "titleId", "closeButtonLabel", "closeButtonPosition"], outputs: ["instance"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i2.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-dialog', template: `<angular-a11y-dialog
    *ngIf="mounted | async"
    [id]="id"
    [dialogRoot]="dialogRoot"
    [classNames]="classNames"
    [role]="role"
    [titleId]="titleId"
    [closeButtonLabel]="closeButtonLabel"
    [closeButtonPosition]="closeButtonPosition"
    (instance)="assignDialogInstance($event)"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN0SixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBaUN2QyxNQUFNLE9BQU8sZUFBZTtJQTlCNUI7UUErQkUsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFBO1FBbUJwQyxTQUFJLEdBQWEsUUFBUSxDQUFDO1FBRTFCLHFCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUNsQyx3QkFBbUIsR0FBNEIsT0FBTyxDQUFDO1FBU3ZELGVBQVUsR0FBb0I7WUFDckMsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1lBR2pCLFdBQVcsRUFBRSwyQkFBMkI7U0FDekMsQ0FBQztRQVlRLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBb0I5QztJQWxCQyxvQkFBb0IsQ0FBQyxRQUFhO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBRUYsUUFBUTtRQUNOLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZGLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUdyRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbEMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs0R0F2RVUsZUFBZTtnR0FBZixlQUFlLGdyQkFPVyxXQUFXLHVQQW5DdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQXVCYTsyRkFLWixlQUFlO2tCQTlCM0IsU0FBUzsrQkFDRSxXQUFXLFlBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQXVCYSxtQkFFTix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzhCQUs1QixhQUFhO3NCQUFyQixLQUFLO2dCQUVDLFlBQVk7c0JBRGxCLFlBQVk7dUJBQUMsT0FBTztnQkFHc0MsSUFBSTtzQkFBOUQsWUFBWTt1QkFBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUN6QyxZQUFZO3NCQUFwQixLQUFLO2dCQUVHLHdCQUF3QjtzQkFBaEMsS0FBSztnQkFFQyxnQkFBZ0I7c0JBRHRCLFlBQVk7dUJBQUMseUJBQXlCO2dCQUc5Qix1QkFBdUI7c0JBQS9CLEtBQUs7Z0JBRUMsZUFBZTtzQkFEckIsWUFBWTt1QkFBQyx3QkFBd0I7Z0JBRzdCLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFTRyxVQUFVO3NCQUFsQixLQUFLO2dCQWFHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFLRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBRUksUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbGFzc05hbWVzU2hhcGUsIGNsb3NlQnV0dG9uUG9zaXRpb25UeXBlLCByb2xlVHlwZSB9IGZyb20gJ2FuZ3VsYXItYTExeS1kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYDxhbmd1bGFyLWExMXktZGlhbG9nXG4gICAgKm5nSWY9XCJtb3VudGVkIHwgYXN5bmNcIlxuICAgIFtpZF09XCJpZFwiXG4gICAgW2RpYWxvZ1Jvb3RdPVwiZGlhbG9nUm9vdFwiXG4gICAgW2NsYXNzTmFtZXNdPVwiY2xhc3NOYW1lc1wiXG4gICAgW3JvbGVdPVwicm9sZVwiXG4gICAgW3RpdGxlSWRdPVwidGl0bGVJZFwiXG4gICAgW2Nsb3NlQnV0dG9uTGFiZWxdPVwiY2xvc2VCdXR0b25MYWJlbFwiXG4gICAgW2Nsb3NlQnV0dG9uUG9zaXRpb25dPVwiY2xvc2VCdXR0b25Qb3NpdGlvblwiXG4gICAgKGluc3RhbmNlKT1cImFzc2lnbkRpYWxvZ0luc3RhbmNlKCRldmVudClcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlICNjbG9zZUJ1dHRvbkNvbnRlbnRGaXJzdD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjbG9zZUJ1dHRvbkZpcnN0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNtYWluQ29udGVudD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYWluVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY2xvc2VCdXR0b25Db250ZW50TGFzdD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjbG9zZUJ1dHRvbkxhc3RUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvYW5ndWxhci1hMTF5LWRpYWxvZz5gLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY3NzJywgJy4vY2xvc2UuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb3VudGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSlcblxuICBASW5wdXQoKSB0aXRsZVRlbXBsYXRlITogVGVtcGxhdGVSZWY8SFRNTEVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKCd0aXRsZScpXG4gIHB1YmxpYyB0aXRsZUNvbnRlbnQ6IGFueTtcblxuICBAQ29udGVudENoaWxkKCdtYWluQ29udGVudCcsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgcHVibGljIG1haW46IGFueTtcbiAgQElucHV0KCkgbWFpblRlbXBsYXRlITogVGVtcGxhdGVSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uRmlyc3RUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZCgnY2xvc2VCdXR0b25Db250ZW50Rmlyc3QnKVxuICBwdWJsaWMgY2xvc2VCdXR0b25GaXJzdDogYW55O1xuXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uTGFzdFRlbXBsYXRlITogVGVtcGxhdGVSZWY8SFRNTEVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKCdjbG9zZUJ1dHRvbkNvbnRlbnRMYXN0JylcbiAgcHVibGljIGNsb3NlQnV0dG9uTGFzdDogYW55O1xuXG4gIEBJbnB1dCgpIGlkITogc3RyaW5nO1xuICBASW5wdXQoKSBkaWFsb2dSb290Pzogc3RyaW5nO1xuICBASW5wdXQoKSByb2xlOiByb2xlVHlwZSA9ICdkaWFsb2cnO1xuICBASW5wdXQoKSB0aXRsZUlkPzogc3RyaW5nO1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkxhYmVsID0gJ0Nsb3NlIGJ1dHRvbic7XG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uUG9zaXRpb246IGNsb3NlQnV0dG9uUG9zaXRpb25UeXBlID0gJ2ZpcnN0JztcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlhbG9nIGdsb2JhbCBjc3MgY2xhc3NlcyB0byBhcHBseS4gTm90ZSB0aGlzIGN1cnJlbnRseSByZXF1aXJlc1xuICAgKiBWaWV3RW5jYXBzdWxhdGlvbi5ub25lIGFzIGExMXktZGlhbG9nIGlzIG91dHNpZGUgb2YgQW5ndWxhciBvbmNlIGNsYXNzZXNcbiAgICogYXJlIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogXG4gICAqIE90aGVyd2lzZSwgdGhlc2UgYXJlIGZ1bGx5IG92ZXJyaWRhYmxlIGJ5IHRoZSBjb25zdW1lcjsganVzdCBiZSBhd2FyZSB0aGF0XG4gICAqIHNpbmNlIGExMXktZGlhbG9nIGFwcGxpZXMgdGhlc2UgY2xhc3NlcyB0aGV5J2xsIG5lZWQgdG8gYmUgaW4gZ2xvYmFsIHNjb3BlLlxuICAgKi9cbiAgQElucHV0KCkgY2xhc3NOYW1lczogQ2xhc3NOYW1lc1NoYXBlID0ge1xuICAgIGNvbnRhaW5lcjogJ2RpYWxvZycsXG4gICAgZG9jdW1lbnQ6ICdkaWFsb2ctY29udGVudCcsXG4gICAgb3ZlcmxheTogJ2RpYWxvZy1vdmVybGF5JyxcbiAgICB0aXRsZTogJ2gzIG1iZTE2JyxcbiAgICAvLyBCb3Jyb3dzIC5jbG9zZS1idXR0b24gKGZyb20gY2xvc2UuY3NzKSBhcyBpdCBnaXZlcyB1cyB0aGUgdHJhbnNwYXJlbnRcbiAgICAvLyBzdHlsZSBwbHVzIHRoZSBhMTF5IGZvY3VzIHJpbmcgd2Ugd2FudCBhcHBsaWVkIHRvIGRpYWxvZydzIGNsb3NlIGJ1dHRvblxuICAgIGNsb3NlQnV0dG9uOiAnZGlhbG9nLWNsb3NlIGNsb3NlLWJ1dHRvbicsXG4gIH07XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSBkaWFsb2cgY29udGVudCBieSBmYWRpbmcgaW4uIFNldCB0byBmYWxzZSB0byBkaXNhYmxlLlxuICAgKi9cbiAgQElucHV0KCkgaXNBbmltYXRpb25GYWRlSW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAqIEFuaW1hdGVzIHRoZSBkaWFsb2cgY29udGVudCBieSBzbGlkaW5nIHVwLiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZS5cbiAgKi9cbiAgQElucHV0KCkgaXNBbmltYXRpb25TbGlkZVVwPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgaW5zdGFuY2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBhc3NpZ25EaWFsb2dJbnN0YW5jZShpbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5lbWl0KGluc3RhbmNlKTtcbiAgfTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZGlhbG9nRG9jdW1lbnRDbGFzc2VzID0gdGhpcy5jbGFzc05hbWVzLmRvY3VtZW50ID8gW3RoaXMuY2xhc3NOYW1lcy5kb2N1bWVudF0gOiBbXTtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGlvbkZhZGVJbiAmJiB0aGlzLmlzQW5pbWF0aW9uU2xpZGVVcCkge1xuICAgICAgLy8gQ2Fubm90IHVzZSB0d28gc2VwYXJhdGUgQ1NTIGNsYXNzZXMgd2l0aCBhbmltYXRpb246IGZvbywgYmFyXG4gICAgICAvLyBhcyB0aGUgbGF0ZXIgY2xhc3Mgd2lsbCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZSAoc28gaGVyZSB3ZSd2ZSBjb21iaW5lZClcbiAgICAgIGRpYWxvZ0RvY3VtZW50Q2xhc3Nlcy5wdXNoKCdkaWFsb2ctc2xpZGUtdXAtZmFkZS1pbicpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0FuaW1hdGlvbkZhZGVJbikge1xuICAgICAgZGlhbG9nRG9jdW1lbnRDbGFzc2VzLnB1c2goJ2RpYWxvZy1mYWRlLWluJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzQW5pbWF0aW9uU2xpZGVVcCkge1xuICAgICAgZGlhbG9nRG9jdW1lbnRDbGFzc2VzLnB1c2goJ2RpYWxvZy1zbGlkZS11cCcpO1xuICAgIH1cbiAgICB0aGlzLmNsYXNzTmFtZXMuZG9jdW1lbnQgPSBkaWFsb2dEb2N1bWVudENsYXNzZXMuZmlsdGVyKChjbHMpID0+IGNscykuam9pbignICcpO1xuICAgIHRoaXMubW91bnRlZC5uZXh0KHRydWUpO1xuICB9XG59XG4iXX0=