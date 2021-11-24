import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ag-header-nav',
  template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`,
  styleUrls: ['./headernav.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavComponent {
  @Input() css?: string;

  public get classes(): string {
    return ['header-nav', this.css ? `${this.css}` : '']
      .filter((cl) => cl.length)
      .join(' ');
  }
}

@Component({
  selector: 'ag-header-nav-item',
  template: `<div [ngClass]="classes"><ng-content></ng-content></div>`,
  styleUrls: ['./headernavitem.css'],
})
export class HeaderNavItemComponent {
  @Input() css?: string;
  public get classes(): string {
    let klasses = ['header-nav-item', this.css ? `${this.css}` : ''];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
}

@Component({
  selector: 'ag-header',
  template: `<header [ngClass]="classes">
    <div [ngClass]="headerContentClasses"><ng-content></ng-content></div>
  </header> `,
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  @Input() css?: string;
  @Input() isSkinned?: boolean = true;
  @Input() isHeaderContentStart?: boolean = false;
  @Input() isHeaderContentEnd?: boolean = false;
  @Input() isSticky?: boolean;

  public get classes(): string {
    const baseClass = this.isSkinned ? 'header' : 'header-base';
    const isStickyClass = this.isSticky ? 'header-sticky' : '';
    const overrides = this.css ? `${this.css}` : '';
    return [baseClass, isStickyClass, overrides]
      .filter((c) => c.length)
      .join(' ');
  }

  public get headerContentClasses(): string {
    const baseClass = 'header-content';
    const headerContentStart = this.isHeaderContentStart
      ? 'header-content-start'
      : '';
    const headerContentEnd = this.isHeaderContentEnd
      ? 'header-content-end'
      : '';
    return [baseClass, headerContentStart, headerContentEnd]
      .filter((c) => c.length)
      .join(' ');
  }
}
