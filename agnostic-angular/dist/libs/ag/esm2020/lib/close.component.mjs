import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CloseComponent {
    constructor() {
        this.size = '';
        this.isFaux = false;
    }
}
CloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: CloseComponent, selector: "ag-close", inputs: { size: "size", isFaux: "isFaux" }, ngImport: i0, template: `
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
      <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
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
      <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9hZy9zcmMvbGliL2Nsb3NlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBcUMxRSxNQUFNLE9BQU8sY0FBYztJQW5DM0I7UUFvQ1csU0FBSSxHQUFzQyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFZLEtBQUssQ0FBQztLQUNsQzs7MkdBSFksY0FBYzsrRkFBZCxjQUFjLDRGQWpDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBNkJLOzJGQUlKLGNBQWM7a0JBbkMxQixTQUFTOytCQUNFLFVBQVUsWUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBNkJLLG1CQUVFLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1jbG9zZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjbG9zZS1idXR0b25cIlxuICAgICAgW2NsYXNzLmNsb3NlLWJ1dHRvbi1zbWFsbF09XCJzaXplID09PSAnc21hbGwnXCJcbiAgICAgIFtjbGFzcy5jbG9zZS1idXR0b24tbGFyZ2VdPVwic2l6ZSA9PT0gJ2xhcmdlJ1wiXG4gICAgICBbY2xhc3MuY2xvc2UtYnV0dG9uLXhsYXJnZV09XCJzaXplID09PSAneGxhcmdlJ1wiXG4gICAgPlxuICAgIDxzdmcgKm5nSWY9XCJpc0ZhdXg7IGVsc2Ugd2l0aEJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgZD1cIk0uNDM5IDIxLjQ0YTEuNSAxLjUgMCAwIDAgMi4xMjIgMi4xMjFsOS4yNjItOS4yNjFhLjI1LjI1IDAgMCAxIC4zNTQgMGw5LjI2MiA5LjI2M2ExLjUgMS41IDAgMSAwIDIuMTIyLTIuMTIxTDE0LjMgMTIuMTc3YS4yNS4yNSAwIDAgMSAwLS4zNTRsOS4yNjMtOS4yNjJBMS41IDEuNSAwIDAgMCAyMS40MzkuNDRMMTIuMTc3IDkuN2EuMjUuMjUgMCAwIDEtLjM1NCAwTDIuNTYxLjQ0QTEuNSAxLjUgMCAwIDAgLjQzOSAyLjU2MUw5LjcgMTEuODIzYS4yNS4yNSAwIDAgMSAwIC4zNTRaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuICA8bmctdGVtcGxhdGUgI3dpdGhCdXR0b24+IFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICBbY2xhc3MuY2xvc2UtYnV0dG9uLXNtYWxsXT1cInNpemUgPT09ICdzbWFsbCdcIlxuICAgICAgW2NsYXNzLmNsb3NlLWJ1dHRvbi1sYXJnZV09XCJzaXplID09PSAnbGFyZ2UnXCJcbiAgICAgIFtjbGFzcy5jbG9zZS1idXR0b24teGxhcmdlXT1cInNpemUgPT09ICd4bGFyZ2UnXCJcbiAgICA+XG4gICAgICA8c3ZnIGNsYXNzPVwiY2xvc2VcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgZD1cIk0uNDM5IDIxLjQ0YTEuNSAxLjUgMCAwIDAgMi4xMjIgMi4xMjFsOS4yNjItOS4yNjFhLjI1LjI1IDAgMCAxIC4zNTQgMGw5LjI2MiA5LjI2M2ExLjUgMS41IDAgMSAwIDIuMTIyLTIuMTIxTDE0LjMgMTIuMTc3YS4yNS4yNSAwIDAgMSAwLS4zNTRsOS4yNjMtOS4yNjJBMS41IDEuNSAwIDAgMCAyMS40MzkuNDRMMTIuMTc3IDkuN2EuMjUuMjUgMCAwIDEtLjM1NCAwTDIuNTYxLjQ0QTEuNSAxLjUgMCAwIDAgLjQzOSAyLjU2MUw5LjcgMTEuODIzYS4yNS4yNSAwIDAgMSAwIC4zNTRaXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPmAsXG4gIHN0eWxlVXJsczogWycuL2Nsb3NlLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ2xhcmdlJyB8ICd4bGFyZ2UnIHwgJycgPSAnJztcbiAgQElucHV0KCkgaXNGYXV4OiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=