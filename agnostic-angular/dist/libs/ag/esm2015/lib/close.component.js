import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
export class CloseComponent {
    constructor() {
        this.size = '';
    }
}
CloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: CloseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: CloseComponent, selector: "ag-close", inputs: { size: "size" }, ngImport: i0, template: `<button
    class="close-button"
    aria-label="Close"
    [class.close-button-small]="size === 'small'"
    [class.close-button-large]="size === 'large'"
  >
    <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </button>`, isInline: true, styles: [".close-button{background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media screen and (prefers-reduced-motion: reduce), (update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: CloseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-close',
                    template: `<button
    class="close-button"
    aria-label="Close"
    [class.close-button-small]="size === 'small'"
    [class.close-button-large]="size === 'large'"
  >
    <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </button>`,
                    styleUrls: ['./close.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { size: [{
                type: Input
            }] } });
//# sourceMappingURL=close.component.js.map
