import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-header-nav',
  template: `<nav>
    <ul [ngClass]="classes">
      <ng-content></ng-content>
    </ul>
  </nav>`,
  styleUrls: ['./headernav.css'],
})

export class HeaderNav {
  @Input() css?: string;
  public get classes(): string {
    let klasses = ['header-nav', this.css ? `${this.css}` : ''];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ')
  }
}

@Component({
  selector: 'ag-header-nav-item',
  template: `<li [ngClass]="classes"><ng-content></ng-content></li>`,
  styleUrls: ['./headernavitem.css'],
})

export class HeaderNavItem {
  @Input() css?: string;
  public get classes(): string {
    let klasses = ['header-nav', this.css ? `${this.css}` : ''];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
}

@Component({
  selector: 'ag-header',
  template: `<header [ngClass]="classes">
    <div class="header-content"><ng-content></ng-content></div>
  </header>
  `,
  styleUrls: ['./header.css'],
})

export default class Header {
  @Input() css?: string;
  @Input() isSkinned?: boolean = true;
  @Input() isSticky?: boolean;
  
  public get classes(): string {
    const baseClass = this.isSkinned ? 'header' : 'header-base';
    const isStickyClass = this.isSticky ? 'header-sticky' : '';
    const overrides = this.css ? `${this.css}` : '';
    let klasses = [
      baseClass,
      isStickyClass,
      overrides,
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
}
