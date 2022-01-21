import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AlertComponent {
    constructor() {
        this.isRounded = false;
        this.isBorderAll = false;
        this.isBorderLeft = false;
        this.isBorderRight = false;
        this.isBorderTop = false;
        this.isBorderBottom = false;
        this.isBlockEnd = false;
        this.type = '';
    }
    get alertClasses() {
        const classes = [
            'alert',
            this.type ? `alert-${this.type}` : '',
            this.isBorderAll ? 'alert-border-all' : '',
            this.isBorderLeft ? 'alert-border-left' : '',
            this.isBorderRight ? 'alert-border-right' : '',
            this.isBorderTop ? 'alert-border-top' : '',
            this.isBorderBottom ? 'alert-border-bottom' : '',
            this.isBlockEnd ? 'alert-end' : '',
            this.isRounded ? 'alert-rounded' : '',
        ].filter(c => c.length).join(' ');
        return classes;
    }
    get svgModifierClass() {
        return this.type ? `alert-${this.type}-icon` : '';
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: AlertComponent, selector: "ag-alert", inputs: { isRounded: "isRounded", isBorderAll: "isBorderAll", isBorderLeft: "isBorderLeft", isBorderRight: "isBorderRight", isBorderTop: "isBorderTop", isBorderBottom: "isBorderBottom", isBlockEnd: "isBlockEnd", type: "type" }, ngImport: i0, template: `<div [ngClass]="alertClasses" role="alert">
    <svg
      class="alert-icon"
      [ngClass]="svgModifierClass"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        fill="currentColor"
        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      ></path>
    </svg>
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".alert-base,.alert{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.alert-end{justify-content:flex-end}.alert-skin,.alert{padding:var(--agnostic-side-padding);background:var(--agnostic-gray-light)}.alert-icon{color:var(--agnostic-gray-mid-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-border-top{border-top:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-left{border-left:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-bottom{border-bottom:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-right{border-right:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-all{border:var(--fluid-2) solid var(--agnostic-gray-mid-dark)}.alert-rounded{border-radius:var(--agnostic-alert-radius, var(--agnostic-radius, .25rem))}.alert-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.alert-warning-icon{color:var(--agnostic-warning-border-accent);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-warning.alert-border-top{border-top-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-left{border-left-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-bottom{border-bottom-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-right{border-right-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-all{border:var(--fluid-2) solid var(--agnostic-warning-border)}.alert-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.alert-info-icon{color:var(--agnostic-primary-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-info.alert-border-top{border-top-color:var(--agnostic-primary-dark)}.alert-info.alert-border-left{border-left-color:var(--agnostic-primary-dark)}.alert-info.alert-border-bottom{border-bottom-color:var(--agnostic-primary-dark)}.alert-info.alert-border-right{border-right-color:var(--agnostic-primary-dark)}.alert-info.alert-border-all{border:var(--fluid-2) solid var(--agnostic-primary-border)}.alert-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.alert-error-icon{color:var(--agnostic-error-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-error.alert-border-top{border-top-color:var(--agnostic-error-dark)}.alert-error.alert-border-left{border-left-color:var(--agnostic-error-dark)}.alert-error.alert-border-bottom{border-bottom-color:var(--agnostic-error-dark)}.alert-error.alert-border-right{border-right-color:var(--agnostic-error-dark)}.alert-error.alert-border-all{border:var(--fluid-2) solid var(--agnostic-error-border)}.alert-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.alert-success-icon{color:var(--agnostic-action-from);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-success.alert-border-top{border-top-color:var(--agnostic-action-from)}.alert-success.alert-border-left{border-left-color:var(--agnostic-action-from)}.alert-success.alert-border-bottom{border-bottom-color:var(--agnostic-action-from)}.alert-success.alert-border-right{border-right-color:var(--agnostic-action-from)}.alert-success.alert-border-all{border:var(--fluid-2) solid var(--agnostic-action-border)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-alert', template: `<div [ngClass]="alertClasses" role="alert">
    <svg
      class="alert-icon"
      [ngClass]="svgModifierClass"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        fill="currentColor"
        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      ></path>
    </svg>
    <ng-content></ng-content>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".alert-base,.alert{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.alert-end{justify-content:flex-end}.alert-skin,.alert{padding:var(--agnostic-side-padding);background:var(--agnostic-gray-light)}.alert-icon{color:var(--agnostic-gray-mid-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-border-top{border-top:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-left{border-left:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-bottom{border-bottom:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-right{border-right:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-all{border:var(--fluid-2) solid var(--agnostic-gray-mid-dark)}.alert-rounded{border-radius:var(--agnostic-alert-radius, var(--agnostic-radius, .25rem))}.alert-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.alert-warning-icon{color:var(--agnostic-warning-border-accent);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-warning.alert-border-top{border-top-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-left{border-left-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-bottom{border-bottom-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-right{border-right-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-all{border:var(--fluid-2) solid var(--agnostic-warning-border)}.alert-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.alert-info-icon{color:var(--agnostic-primary-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-info.alert-border-top{border-top-color:var(--agnostic-primary-dark)}.alert-info.alert-border-left{border-left-color:var(--agnostic-primary-dark)}.alert-info.alert-border-bottom{border-bottom-color:var(--agnostic-primary-dark)}.alert-info.alert-border-right{border-right-color:var(--agnostic-primary-dark)}.alert-info.alert-border-all{border:var(--fluid-2) solid var(--agnostic-primary-border)}.alert-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.alert-error-icon{color:var(--agnostic-error-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-error.alert-border-top{border-top-color:var(--agnostic-error-dark)}.alert-error.alert-border-left{border-left-color:var(--agnostic-error-dark)}.alert-error.alert-border-bottom{border-bottom-color:var(--agnostic-error-dark)}.alert-error.alert-border-right{border-right-color:var(--agnostic-error-dark)}.alert-error.alert-border-all{border:var(--fluid-2) solid var(--agnostic-error-border)}.alert-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.alert-success-icon{color:var(--agnostic-action-from);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-success.alert-border-top{border-top-color:var(--agnostic-action-from)}.alert-success.alert-border-left{border-left-color:var(--agnostic-action-from)}.alert-success.alert-border-bottom{border-bottom-color:var(--agnostic-action-from)}.alert-success.alert-border-right{border-right-color:var(--agnostic-action-from)}.alert-success.alert-border-all{border:var(--fluid-2) solid var(--agnostic-action-border)}\n"] }]
        }], propDecorators: { isRounded: [{
                type: Input
            }], isBorderAll: [{
                type: Input
            }], isBorderLeft: [{
                type: Input
            }], isBorderRight: [{
                type: Input
            }], isBorderTop: [{
                type: Input
            }], isBorderBottom: [{
                type: Input
            }], isBlockEnd: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBd0IxRSxNQUFNLE9BQU8sY0FBYztJQXRCM0I7UUF1QlcsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFNBQUksR0FBa0QsRUFBRSxDQUFDO0tBb0JuRTtJQWxCQyxJQUFXLFlBQVk7UUFDckIsTUFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0QyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzsyR0EzQlUsY0FBYzsrRkFBZCxjQUFjLG9SQXBCZjs7Ozs7Ozs7Ozs7Ozs7OztTQWdCSDsyRkFJSSxjQUFjO2tCQXRCMUIsU0FBUzsrQkFDRSxVQUFVLFlBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQkgsbUJBRVUsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsU0FBUztzQkFBakIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1hbGVydCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJhbGVydENsYXNzZXNcIiByb2xlPVwiYWxlcnRcIj5cbiAgICA8c3ZnXG4gICAgICBjbGFzcz1cImFsZXJ0LWljb25cIlxuICAgICAgW25nQ2xhc3NdPVwic3ZnTW9kaWZpZXJDbGFzc1wiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBkPVwiTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHpcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xuICBASW5wdXQoKSBpc1JvdW5kZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCb3JkZXJBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCb3JkZXJMZWZ0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQm9yZGVyUmlnaHQgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCb3JkZXJUb3AgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCb3JkZXJCb3R0b20gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCbG9ja0VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlOiAnd2FybmluZycgfCAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJycgPSAnJztcblxuICBwdWJsaWMgZ2V0IGFsZXJ0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAnYWxlcnQnLFxuICAgICAgdGhpcy50eXBlID8gYGFsZXJ0LSR7dGhpcy50eXBlfWAgOiAnJyxcbiAgICAgIHRoaXMuaXNCb3JkZXJBbGwgPyAnYWxlcnQtYm9yZGVyLWFsbCcgOiAnJyxcbiAgICAgIHRoaXMuaXNCb3JkZXJMZWZ0ID8gJ2FsZXJ0LWJvcmRlci1sZWZ0JyA6ICcnLFxuICAgICAgdGhpcy5pc0JvcmRlclJpZ2h0ID8gJ2FsZXJ0LWJvcmRlci1yaWdodCcgOiAnJyxcbiAgICAgIHRoaXMuaXNCb3JkZXJUb3AgPyAnYWxlcnQtYm9yZGVyLXRvcCcgOiAnJyxcbiAgICAgIHRoaXMuaXNCb3JkZXJCb3R0b20gPyAnYWxlcnQtYm9yZGVyLWJvdHRvbScgOiAnJyxcbiAgICAgIHRoaXMuaXNCbG9ja0VuZCA/ICdhbGVydC1lbmQnIDogJycsXG4gICAgICB0aGlzLmlzUm91bmRlZCA/ICdhbGVydC1yb3VuZGVkJyA6ICcnLFxuICAgIF0uZmlsdGVyKGMgPT4gYy5sZW5ndGgpLmpvaW4oJyAnKTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3ZnTW9kaWZpZXJDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPyBgYWxlcnQtJHt0aGlzLnR5cGV9LWljb25gIDogJyc7XG4gIH1cbn1cbiJdfQ==