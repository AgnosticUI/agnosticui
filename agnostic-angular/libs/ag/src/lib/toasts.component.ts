import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'ag-toasts',
  template: `<ag-portal-host *ngIf="mounted | async" [teleportTo]="portalTarget">
    <div [class]="toastClasses">
      <ng-content></ng-content>
    </div>
  </ag-portal-host>`,
  styleUrls: ['./toasts.css'],
})
export class ToastsComponent implements OnInit {
  mounted = new BehaviorSubject<boolean>(false)
  public portalTarget!: string;

  @Input() portalRootSelector?: string;
  @Input() horizontalPosition!: 'start' | 'center' | 'end';
  @Input() verticalPosition!: 'top' | 'bottom';

  public get toastClasses() {
    return [
      'alert-toast',
      this.horizontalPosition,
      this.verticalPosition,
    ].join(" ");
  }

  ngOnInit(): void {
    this.portalTarget = this.portalRootSelector || 'body';
    this.mounted.next(true);
  }
}
