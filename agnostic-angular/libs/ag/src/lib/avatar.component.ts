import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'ag-avatar-group',
  template: `<div class="avatar-group"><ng-content></ng-content></div>`,
  styleUrls: ['./avatar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupComponent {}

@Component({
  selector: 'ag-avatar',
  template: `<span [ngClass]="avatarClasses" [attr.data-text]="text"
    ><ng-content></ng-content
  ></span>`,
  styleUrls: ['./avatar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() isRounded = false;
  @Input() isSquare = false;
  @Input() isTransparent = false;
  @Input() type: 'warning' | 'error' | 'info' | 'success' | '' = '';
  @Input() size: 'small' | 'large' | 'xlarge' | '' = '';
  @Input() text: string = '';

  public get avatarClasses(): string {
    return [
      'avatar',
      this.size ? `avatar-${this.size}` : '',
      this.type ? `avatar-${this.type}` : '',
      this.isRounded ? 'avatar-rounded' : '',
      this.isTransparent ? 'avatar-transparent' : '',
      this.isSquare ? 'avatar-square' : '',
    ]
      .filter((c) => c.length)
      .join(' ');
  }
}
