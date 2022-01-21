import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HeaderNavComponent {
    get classes() {
        return ['header-nav', this.css ? `${this.css}` : '']
            .filter((cl) => cl.length)
            .join(' ');
    }
}
HeaderNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: HeaderNavComponent, selector: "ag-header-nav", inputs: { css: "css" }, ngImport: i0, template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`, isInline: true, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-header-nav', template: `<nav>
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  </nav>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"] }]
        }], propDecorators: { css: [{
                type: Input
            }] } });
export class HeaderNavItemComponent {
    get classes() {
        let klasses = ['header-nav-item', this.css ? `${this.css}` : ''];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
HeaderNavItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: HeaderNavItemComponent, selector: "ag-header-nav-item", inputs: { css: "css" }, ngImport: i0, template: `<div [ngClass]="classes"><ng-content></ng-content></div>`, isInline: true, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnostic-header-color, var(--agnostic-font-color))}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderNavItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-header-nav-item', template: `<div [ngClass]="classes"><ng-content></ng-content></div>`, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnostic-header-color, var(--agnostic-font-color))}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"] }]
        }], propDecorators: { css: [{
                type: Input
            }] } });
export class HeaderComponent {
    constructor() {
        this.isSkinned = true;
        this.isHeaderContentStart = false;
        this.isHeaderContentEnd = false;
    }
    get classes() {
        const baseClass = this.isSkinned ? 'header' : 'header-base';
        const isStickyClass = this.isSticky ? 'header-sticky' : '';
        const overrides = this.css ? `${this.css}` : '';
        return [baseClass, isStickyClass, overrides]
            .filter((c) => c.length)
            .join(' ');
    }
    get headerContentClasses() {
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
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: HeaderComponent, selector: "ag-header", inputs: { css: "css", isSkinned: "isSkinned", isHeaderContentStart: "isHeaderContentStart", isHeaderContentEnd: "isHeaderContentEnd", isSticky: "isSticky" }, ngImport: i0, template: `<header [ngClass]="classes">
    <div [ngClass]="headerContentClasses"><ng-content></ng-content></div>
  </header> `, isInline: true, styles: [".header,.header-base{display:block}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family-body));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}.header-content-start{justify-content:flex-start}.header-content-end{justify-content:flex-end}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-header', template: `<header [ngClass]="classes">
    <div [ngClass]="headerContentClasses"><ng-content></ng-content></div>
  </header> `, styles: [".header,.header-base{display:block}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family-body));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}.header-content-start{justify-content:flex-start}.header-content-end{justify-content:flex-end}}\n"] }]
        }], propDecorators: { css: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isHeaderContentStart: [{
                type: Input
            }], isHeaderContentEnd: [{
                type: Input
            }], isSticky: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZMUUsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixJQUFXLE9BQU87UUFDaEIsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ2pELE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDOzsrR0FQVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiw2RUFSbkI7Ozs7U0FJSDsyRkFJSSxrQkFBa0I7a0JBVjlCLFNBQVM7K0JBQ0UsZUFBZSxZQUNmOzs7O1NBSUgsbUJBRVUsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsR0FBRztzQkFBWCxLQUFLOztBQWNSLE1BQU0sT0FBTyxzQkFBc0I7SUFFakMsSUFBVyxPQUFPO1FBQ2hCLElBQUksT0FBTyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O21IQU5VLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGtGQUh2QiwwREFBMEQ7MkZBR3pELHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxvQkFBb0IsWUFDcEIsMERBQTBEOzhCQUkzRCxHQUFHO3NCQUFYLEtBQUs7O0FBZVIsTUFBTSxPQUFPLGVBQWU7SUFQNUI7UUFTVyxjQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLHlCQUFvQixHQUFhLEtBQUssQ0FBQztRQUN2Qyx1QkFBa0IsR0FBYSxLQUFLLENBQUM7S0F3Qi9DO0lBckJDLElBQVcsT0FBTztRQUNoQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQzthQUN6QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQVcsb0JBQW9CO1FBQzdCLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQ25DLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtZQUNsRCxDQUFDLENBQUMsc0JBQXNCO1lBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0I7WUFDOUMsQ0FBQyxDQUFDLG9CQUFvQjtZQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsT0FBTyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQzthQUNyRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7NEdBM0JVLGVBQWU7Z0dBQWYsZUFBZSwrTUFMaEI7O2FBRUM7MkZBR0EsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxXQUFXLFlBQ1g7O2FBRUM7OEJBSUYsR0FBRztzQkFBWCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctaGVhZGVyLW5hdicsXG4gIHRlbXBsYXRlOiBgPG5hdj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImNsYXNzZXNcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVybmF2LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTmF2Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY3NzPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBnZXQgY2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBbJ2hlYWRlci1uYXYnLCB0aGlzLmNzcyA/IGAke3RoaXMuY3NzfWAgOiAnJ11cbiAgICAgIC5maWx0ZXIoKGNsKSA9PiBjbC5sZW5ndGgpXG4gICAgICAuam9pbignICcpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLWhlYWRlci1uYXYtaXRlbScsXG4gIHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJjbGFzc2VzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PmAsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlcm5hdml0ZW0uY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck5hdkl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBjc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGxldCBrbGFzc2VzID0gWydoZWFkZXItbmF2LWl0ZW0nLCB0aGlzLmNzcyA/IGAke3RoaXMuY3NzfWAgOiAnJ107XG4gICAga2xhc3NlcyA9IGtsYXNzZXMuZmlsdGVyKChrbGFzcykgPT4ga2xhc3MubGVuZ3RoKTtcbiAgICByZXR1cm4ga2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWctaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8aGVhZGVyIFtuZ0NsYXNzXT1cImNsYXNzZXNcIj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImhlYWRlckNvbnRlbnRDbGFzc2VzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICA8L2hlYWRlcj4gYCxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBjc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzU2tpbm5lZD86IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0hlYWRlckNvbnRlbnRTdGFydD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNIZWFkZXJDb250ZW50RW5kPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1N0aWNreT86IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZUNsYXNzID0gdGhpcy5pc1NraW5uZWQgPyAnaGVhZGVyJyA6ICdoZWFkZXItYmFzZSc7XG4gICAgY29uc3QgaXNTdGlja3lDbGFzcyA9IHRoaXMuaXNTdGlja3kgPyAnaGVhZGVyLXN0aWNreScgOiAnJztcbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLmNzcyA/IGAke3RoaXMuY3NzfWAgOiAnJztcbiAgICByZXR1cm4gW2Jhc2VDbGFzcywgaXNTdGlja3lDbGFzcywgb3ZlcnJpZGVzXVxuICAgICAgLmZpbHRlcigoYykgPT4gYy5sZW5ndGgpXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgcHVibGljIGdldCBoZWFkZXJDb250ZW50Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VDbGFzcyA9ICdoZWFkZXItY29udGVudCc7XG4gICAgY29uc3QgaGVhZGVyQ29udGVudFN0YXJ0ID0gdGhpcy5pc0hlYWRlckNvbnRlbnRTdGFydFxuICAgICAgPyAnaGVhZGVyLWNvbnRlbnQtc3RhcnQnXG4gICAgICA6ICcnO1xuICAgIGNvbnN0IGhlYWRlckNvbnRlbnRFbmQgPSB0aGlzLmlzSGVhZGVyQ29udGVudEVuZFxuICAgICAgPyAnaGVhZGVyLWNvbnRlbnQtZW5kJ1xuICAgICAgOiAnJztcbiAgICByZXR1cm4gW2Jhc2VDbGFzcywgaGVhZGVyQ29udGVudFN0YXJ0LCBoZWFkZXJDb250ZW50RW5kXVxuICAgICAgLmZpbHRlcigoYykgPT4gYy5sZW5ndGgpXG4gICAgICAuam9pbignICcpO1xuICB9XG59XG4iXX0=