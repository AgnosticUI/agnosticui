import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CardComponent {
    constructor() {
        this.isSkinned = true;
    }
    get classes() {
        const baseClass = this.isSkinned ? 'card' : 'card-base';
        const isAnimatedClass = this.isAnimated ? 'card-animated' : '';
        const isStackedClass = this.isStacked ? 'card-stacked' : '';
        const isShadowClass = this.isShadow ? 'card-shadow' : '';
        const isRoundedClass = this.isRounded ? 'card-rounded' : '';
        const isBorderClass = this.isBorder ? 'card-border' : '';
        const typeClass = this.type ? `card-${this.type}` : '';
        const overrides = this.css ? `${this.css}` : '';
        return [
            baseClass,
            typeClass,
            isAnimatedClass,
            isStackedClass,
            isShadowClass,
            isRoundedClass,
            isBorderClass,
            overrides,
        ].join(' ');
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: CardComponent, selector: "ag-card", inputs: { css: "css", type: "type", isAnimated: "isAnimated", isSkinned: "isSkinned", isStacked: "isStacked", isShadow: "isShadow", isRounded: "isRounded", isBorder: "isBorder" }, ngImport: i0, template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card-border{border:1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light))}.card-rounded{border-radius:var(--agnostic-radius, .25rem)}.card-shadow{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));border-radius:var(--agnostic-card-border-radius, var(--agnostic-radius, .25rem));overflow:hidden}.card-shadow:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translate-y-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}@media (prefers-reduced-motion),(update: slow){.card-animated,.card-animated:hover{transition-duration:.001ms!important}}.card-stacked{flex-direction:column}.card-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.card-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.card-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.card-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-card', template: `<div [ngClass]="classes">
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card-border{border:1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light))}.card-rounded{border-radius:var(--agnostic-radius, .25rem)}.card-shadow{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));border-radius:var(--agnostic-card-border-radius, var(--agnostic-radius, .25rem));overflow:hidden}.card-shadow:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translate-y-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}@media (prefers-reduced-motion),(update: slow){.card-animated,.card-animated:hover{transition-duration:.001ms!important}}.card-stacked{flex-direction:column}.card-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.card-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.card-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.card-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}\n"] }]
        }], propDecorators: { css: [{
                type: Input
            }], type: [{
                type: Input
            }], isAnimated: [{
                type: Input
            }], isSkinned: [{
                type: Input
            }], isStacked: [{
                type: Input
            }], isShadow: [{
                type: Input
            }], isRounded: [{
                type: Input
            }], isBorder: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2FnL3NyYy9saWIvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVUxRSxNQUFNLE9BQU8sYUFBYTtJQVIxQjtRQVlXLGNBQVMsR0FBYSxJQUFJLENBQUM7S0E0QnJDO0lBdEJDLElBQVcsT0FBTztRQUVoQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUN4RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXZELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsT0FBTztZQUNMLFNBQVM7WUFDVCxTQUFTO1lBQ1QsZUFBZTtZQUNmLGNBQWM7WUFDZCxhQUFhO1lBQ2IsY0FBYztZQUNkLGFBQWE7WUFDYixTQUFTO1NBQ1YsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDOzswR0EvQlUsYUFBYTs4RkFBYixhQUFhLG1PQU5kOztTQUVIOzJGQUlJLGFBQWE7a0JBUnpCLFNBQVM7K0JBQ0UsU0FBUyxZQUNUOztTQUVILG1CQUVVLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1jYXJkJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cImNsYXNzZXNcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY3NzPzogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlPzogXCJzdWNjZXNzXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwiO1xuICBASW5wdXQoKSBpc0FuaW1hdGVkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNTa2lubmVkPzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzU3RhY2tlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzU2hhZG93PzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNSb3VuZGVkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNCb3JkZXI/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXQgY2xhc3NlcygpOiBzdHJpbmcge1xuICAgIC8vIGNsYXNzZXMoKSB7XG4gICAgY29uc3QgYmFzZUNsYXNzID0gdGhpcy5pc1NraW5uZWQgPyAnY2FyZCcgOiAnY2FyZC1iYXNlJztcbiAgICBjb25zdCBpc0FuaW1hdGVkQ2xhc3MgPSB0aGlzLmlzQW5pbWF0ZWQgPyAnY2FyZC1hbmltYXRlZCcgOiAnJztcbiAgICBjb25zdCBpc1N0YWNrZWRDbGFzcyA9IHRoaXMuaXNTdGFja2VkID8gJ2NhcmQtc3RhY2tlZCcgOiAnJztcbiAgICBjb25zdCBpc1NoYWRvd0NsYXNzID0gdGhpcy5pc1NoYWRvdyA/ICdjYXJkLXNoYWRvdycgOiAnJztcbiAgICBjb25zdCBpc1JvdW5kZWRDbGFzcyA9IHRoaXMuaXNSb3VuZGVkID8gJ2NhcmQtcm91bmRlZCcgOiAnJztcbiAgICBjb25zdCBpc0JvcmRlckNsYXNzID0gdGhpcy5pc0JvcmRlciA/ICdjYXJkLWJvcmRlcicgOiAnJztcbiAgICBjb25zdCB0eXBlQ2xhc3MgPSB0aGlzLnR5cGUgPyBgY2FyZC0ke3RoaXMudHlwZX1gIDogJyc7XG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLmNzcyA/IGAke3RoaXMuY3NzfWAgOiAnJztcbiAgICByZXR1cm4gW1xuICAgICAgYmFzZUNsYXNzLFxuICAgICAgdHlwZUNsYXNzLFxuICAgICAgaXNBbmltYXRlZENsYXNzLFxuICAgICAgaXNTdGFja2VkQ2xhc3MsXG4gICAgICBpc1NoYWRvd0NsYXNzLFxuICAgICAgaXNSb3VuZGVkQ2xhc3MsXG4gICAgICBpc0JvcmRlckNsYXNzLFxuICAgICAgb3ZlcnJpZGVzLFxuICAgIF0uam9pbignICcpO1xuICB9XG59XG4iXX0=
