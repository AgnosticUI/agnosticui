import {
  AfterViewInit,
  Component,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'ag-portal-host',
  template: `<ng-template #portalTemplateReference>
    <ng-content></ng-content>
  </ng-template>`
})
export class PortalHostComponent implements AfterViewInit, OnDestroy {
  @ViewChild('portalTemplateReference') portalTemplateRef: any;
  private embeddedViewRef!: EmbeddedViewRef<Record<string, unknown>>;

  /**
   * Teleport to selector. Falls back to document.body
   */
  @Input() teleportTo = 'body';

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
    this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(
      this.portalTemplateRef
    );
    this.embeddedViewRef.detectChanges();

    const outletElement = document.querySelector(this.teleportTo) as HTMLElement;

    this.embeddedViewRef.rootNodes.forEach(rootNode => {
      outletElement.appendChild(rootNode);
    });
  }

  ngOnDestroy(): void {
    const index = this.viewContainerRef.indexOf(this.embeddedViewRef);
    if (index !== -1) {
      this.viewContainerRef.remove(index);
    }
  }
}
