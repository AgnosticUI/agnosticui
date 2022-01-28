import { TemplateRef, ContentChild, EventEmitter, Output, Input, ChangeDetectionStrategy, Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClassNamesShape, closeButtonPositionType, roleType } from 'angular-a11y-dialog';

@Component({
  selector: 'ag-dialog',
  template: `<angular-a11y-dialog
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
  </angular-a11y-dialog>`,
  styleUrls: ['./dialog.css', './close.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {
  mounted = new BehaviorSubject<boolean>(false)

  @Input() titleTemplate!: TemplateRef<HTMLElement>;
  @ContentChild('title')
  public titleContent: any;

  @ContentChild('mainContent', { read: TemplateRef }) public main: any;
  @Input() mainTemplate!: TemplateRef<HTMLElement>;

  @Input() closeButtonFirstTemplate!: TemplateRef<HTMLElement>;
  @ContentChild('closeButtonContentFirst')
  public closeButtonFirst: any;

  @Input() closeButtonLastTemplate!: TemplateRef<HTMLElement>;
  @ContentChild('closeButtonContentLast')
  public closeButtonLast: any;

  @Input() id!: string;
  @Input() dialogRoot?: string;
  @Input() role: roleType = 'dialog';
  @Input() titleId?: string;
  @Input() closeButtonLabel = 'Close button';
  @Input() closeButtonPosition: closeButtonPositionType = 'first';
  /**
   * Default dialog global css classes to apply. Note this currently requires
   * ViewEncapsulation.none as a11y-dialog is outside of Angular once classes
   * are applied to the component.
   * 
   * Otherwise, these are fully overridable by the consumer; just be aware that
   * since a11y-dialog applies these classes they'll need to be in global scope.
   */
  @Input() classNames: ClassNamesShape = {
    container: 'dialog',
    document: 'dialog-content',
    overlay: 'dialog-overlay',
    title: 'h3 mbe16',
    // Borrows .close-button (from close.css) as it gives us the transparent
    // style plus the a11y focus ring we want applied to dialog's close button
    closeButton: 'dialog-close close-button',
  };

  /**
   * Animates the dialog content by fading in. Set to false to disable.
   */
  @Input() isAnimationFadeIn?: boolean;

  /**
  * Animates the dialog content by sliding up. Set to false to disable.
  */
  @Input() isAnimationSlideUp?: boolean;

  @Output() instance = new EventEmitter<any>();

  assignDialogInstance(instance: any) {
    this.instance.emit(instance);
  };

  ngOnInit() {
    let dialogDocumentClasses = this.classNames.document ? [this.classNames.document] : [];
    if (this.isAnimationFadeIn && this.isAnimationSlideUp) {
      // Cannot use two separate CSS classes with animation: foo, bar
      // as the later class will overwrite the first one (so here we've combined)
      dialogDocumentClasses.push('dialog-slide-up-fade-in');
    } else if (this.isAnimationFadeIn) {
      dialogDocumentClasses.push('dialog-fade-in');
    } else if (this.isAnimationSlideUp) {
      dialogDocumentClasses.push('dialog-slide-up');
    }
    this.classNames.document = dialogDocumentClasses.filter((cls) => cls).join(' ');
    this.mounted.next(true);
  }
}
