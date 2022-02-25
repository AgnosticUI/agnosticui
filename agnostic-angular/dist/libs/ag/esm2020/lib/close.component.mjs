import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CloseComponent {
    constructor() {
        this.size = '';
        this.isFaux = false;
        this.color = 'inherit';
    }
}
CloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: CloseComponent, selector: "ag-close", inputs: { size: "size", isFaux: "isFaux", color: "color" }, ngImport: i0, template: `
    <div
      class="close-button"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
    <svg *ngIf="isFaux; else withButton" class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </div>
  <ng-template #withButton> 
    <button
      class="close-button"
      aria-label="Close"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
      <svg class="close" [style.color]="color" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
        />
      </svg>
    </button>
  </ng-template>`, isInline: true, styles: [".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CloseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-close', template: `
    <div
      class="close-button"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
    <svg *ngIf="isFaux; else withButton" class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </div>
  <ng-template #withButton> 
    <button
      class="close-button"
      aria-label="Close"
      [class.close-button-small]="size === 'small'"
      [class.close-button-large]="size === 'large'"
      [class.close-button-xlarge]="size === 'xlarge'"
    >
      <svg class="close" [style.color]="color" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
        />
      </svg>
    </button>
  </ng-template>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".close-button{display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], isFaux: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2Nsb3NlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBcUMxRSxNQUFNLE9BQU8sY0FBYztJQW5DM0I7UUFvQ1csU0FBSSxHQUFzQyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxTQUFTLENBQUM7S0FDNUI7OzJHQUpZLGNBQWM7K0ZBQWQsY0FBYyw0R0FqQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQTZCSzsyRkFJSixjQUFjO2tCQW5DMUIsU0FBUzsrQkFDRSxVQUFVLFlBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQTZCSyxtQkFFRSx1QkFBdUIsQ0FBQyxNQUFNOzhCQUd0QyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLWNsb3NlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImNsb3NlLWJ1dHRvblwiXG4gICAgICBbY2xhc3MuY2xvc2UtYnV0dG9uLXNtYWxsXT1cInNpemUgPT09ICdzbWFsbCdcIlxuICAgICAgW2NsYXNzLmNsb3NlLWJ1dHRvbi1sYXJnZV09XCJzaXplID09PSAnbGFyZ2UnXCJcbiAgICAgIFtjbGFzcy5jbG9zZS1idXR0b24teGxhcmdlXT1cInNpemUgPT09ICd4bGFyZ2UnXCJcbiAgICA+XG4gICAgPHN2ZyAqbmdJZj1cImlzRmF1eDsgZWxzZSB3aXRoQnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBkPVwiTS40MzkgMjEuNDRhMS41IDEuNSAwIDAgMCAyLjEyMiAyLjEyMWw5LjI2Mi05LjI2MWEuMjUuMjUgMCAwIDEgLjM1NCAwbDkuMjYyIDkuMjYzYTEuNSAxLjUgMCAxIDAgMi4xMjItMi4xMjFMMTQuMyAxMi4xNzdhLjI1LjI1IDAgMCAxIDAtLjM1NGw5LjI2My05LjI2MkExLjUgMS41IDAgMCAwIDIxLjQzOS40NEwxMi4xNzcgOS43YS4yNS4yNSAwIDAgMS0uMzU0IDBMMi41NjEuNDRBMS41IDEuNSAwIDAgMCAuNDM5IDIuNTYxTDkuNyAxMS44MjNhLjI1LjI1IDAgMCAxIDAgLjM1NFpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjd2l0aEJ1dHRvbj4gXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJjbG9zZS1idXR0b25cIlxuICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgIFtjbGFzcy5jbG9zZS1idXR0b24tc21hbGxdPVwic2l6ZSA9PT0gJ3NtYWxsJ1wiXG4gICAgICBbY2xhc3MuY2xvc2UtYnV0dG9uLWxhcmdlXT1cInNpemUgPT09ICdsYXJnZSdcIlxuICAgICAgW2NsYXNzLmNsb3NlLWJ1dHRvbi14bGFyZ2VdPVwic2l6ZSA9PT0gJ3hsYXJnZSdcIlxuICAgID5cbiAgICAgIDxzdmcgY2xhc3M9XCJjbG9zZVwiIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBkPVwiTS40MzkgMjEuNDRhMS41IDEuNSAwIDAgMCAyLjEyMiAyLjEyMWw5LjI2Mi05LjI2MWEuMjUuMjUgMCAwIDEgLjM1NCAwbDkuMjYyIDkuMjYzYTEuNSAxLjUgMCAxIDAgMi4xMjItMi4xMjFMMTQuMyAxMi4xNzdhLjI1LjI1IDAgMCAxIDAtLjM1NGw5LjI2My05LjI2MkExLjUgMS41IDAgMCAwIDIxLjQzOS40NEwxMi4xNzcgOS43YS4yNS4yNSAwIDAgMS0uMzU0IDBMMi41NjEuNDRBMS41IDEuNSAwIDAgMCAuNDM5IDIuNTYxTDkuNyAxMS44MjNhLjI1LjI1IDAgMCAxIDAgLjM1NFpcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gIDwvbmctdGVtcGxhdGU+YCxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvc2UuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ3hsYXJnZScgfCAnJyA9ICcnO1xuICBASW5wdXQoKSBpc0ZhdXggPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3IgPSAnaW5oZXJpdCc7XG59XG4iXX0=