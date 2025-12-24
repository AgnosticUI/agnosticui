import{i as h,a as c,x as l}from"./lit-element.B0TUrqGF.js";import{z as a}from"./property-CemaeiRl.BAjarvIB.js";import{Q as d}from"./if-defined-C8i28hSj.CfeO1FY9.js";var b=Object.defineProperty,o=(s,t,e,v)=>{for(var n=void 0,i=s.length-1,g;i>=0;i--)(g=s[i])&&(n=g(t,e,n)||n);return n&&b(t,e,n),n};const u=class extends c{constructor(){super(),this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.bordered=!1,this.ghost=!1,this.link=!1,this.grouped=!1,this.type="button",this.ariaLabel="",this.variant="",this.size="md",this.shape=""}_handleClick(t){if(this.onClick&&this.onClick(t),this.toggle&&!this.disabled&&!this.loading&&!t.defaultPrevented){this.pressed=!this.pressed;const e=new CustomEvent("toggle",{detail:{pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onToggle&&this.onToggle(e)}}_handleFocus(t){this.onFocus&&this.onFocus(t);const e=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleBlur(t){this.onBlur&&this.onBlur(t);const e=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(e)}focus(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("button");t&&t.focus()}blur(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("button");t&&t.blur()}render(){const t=this.disabled||this.loading;return l`
      <button
        type=${this.type}
        part="ag-button"
        ?disabled=${t}
        aria-disabled=${t?"true":"false"}
        aria-busy=${d(this.loading?"true":void 0)}
        aria-pressed=${d(this.toggle?String(this.pressed):void 0)}
        aria-label=${d(this.ariaLabel||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `}};u.styles=h`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      border: none;
      background: var(--ag-background-tertiary);

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Explicit line-height to prevent extra vertical spacing */
      line-height: 1;

      /* Basic interaction styling */
      cursor: pointer;

      /* Flex layout for perfect content alignment */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-1); /* Small gap for icon + text scenarios */

      /* Smooth transitions */
      transition-property: all;
      transition-duration: var(--ag-motion-medium);
    }
    
    /* Secondary inherits font color */
    :host([variant="secondary"]) button {
      background: var(--ag-neutral-400);
      /* We lock the text color at neutral-900 for both light/dark modes */
      color: var(--ag-neutral-900);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
    }

    /* Primary, success, warning, and danger all have white text and get
      darker on hover */
    :host([variant="primary"]) button {
      background: var(--ag-primary);
      color: var(--ag-white);
    }
    :host([variant="primary"]) button:hover {
      background: var(--ag-primary-dark);
    }
    :host([variant="success"]) button {
      background: var(--ag-success);
      color: var(--ag-white);
    }
    :host([variant="success"]) button:hover {
      background: var(--ag-success-dark);
    }
    :host([variant="warning"]) button {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }
    :host([variant="warning"]) button:hover {
      background: var(--ag-warning-dark);
    }
    :host([variant="danger"]) button {
      background: var(--ag-danger);
      color: var(--ag-white);
    }
    :host([variant="danger"]) button:hover {
      background: var(--ag-danger-dark);
    }

    /* Monochrome variant - adapts to light/dark themes */
    :host([variant="monochrome"]) button {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
    :host([variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary-inverted);
    }

    /* Size variants */
    :host([size="x-sm"]) button {
      font-size: calc(var(--ag-font-size-base) - 0.375rem);
      padding: var(--ag-space-1) var(--ag-space-2);
    }

    :host([size="sm"]) button {
      font-size: var(--ag-font-size-xs);
      padding: var(--ag-space-2) var(--ag-space-3);
    }

    /* Default size (md) - applies when no size attribute or size="md" */
    button,
    :host([size="md"]) button {
      font-size: var(--ag-font-size-sm);
      padding: var(--ag-space-3) var(--ag-space-4);
    }

    :host([size="lg"]) button {
      font-size: var(--ag-font-size-base);
      padding: var(--ag-space-3) var(--ag-space-5);
    }

    :host([size="xl"]) button {
      font-size: var(--ag-font-size-md);
      padding: var(--ag-space-3) var(--ag-space-6);
    }

    /* Shape variants */
    :host([shape="capsule"]) button {
      border-radius: var(--ag-radius-full);
      padding-inline-start: var(--ag-space-5);
      padding-inline-end: var(--ag-space-5);
    }

    :host([shape="rounded"]) button {
      border-radius: var(--ag-radius-md);
    }

    /* Circle and Square shapes are only intended for single character or icon */
    :host([shape="circle"]) button {
      border-radius: 50%;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="square"]) button {
      border-radius: 0;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="rounded-square"]) button {
      border-radius: var(--ag-radius-md);
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    /* Ghost and Link - minimal/invisible button styles */
    :host([ghost]) button,
    :host([link]) button {
      background: transparent;
      border: none;
      box-shadow: none;
    }

    /* Ghost-specific - minimal padding, respects variant colors */
    :host([ghost]) button {
      padding-inline-start: var(--ag-space-2);
      padding-inline-end: var(--ag-space-2);
    }

    :host([ghost][variant="primary"]) button {
      color: var(--ag-primary);
    }

    :host([ghost][variant="success"]) button {
      color: var(--ag-success);
    }

    :host([ghost][variant="warning"]) button {
      color: var(--ag-warning);
    }

    :host([ghost][variant="danger"]) button {
      color: var(--ag-danger);
    }


    :host([link][variant="danger"]) button:hover,
    :host([link][variant="warning"]) button:hover,
    :host([link][variant="success"]) button:hover,
    :host([link][variant="primary"]) button:hover {
      background: transparent;
    }

    /* Only for ghosted buttons with text that of:
          - "red" danger
          - "yellow" warning
          - "green" success
          - "blue" primary
      do we use an almost white nuetral 100 on hover.
      The default and secondary are not changed here!
    */
    :host([ghost][variant="danger"]) button:hover,
    :host([ghost][variant="warning"]) button:hover,
    :host([ghost][variant="success"]) button:hover,
    :host([ghost][variant="primary"]) button:hover {
      background: var(--ag-neutral-100);
    }

    /* Link-specific - inline style with smooth underline transition */
    :host([link]) button {
      color: var(--ag-primary-text);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      padding: 0;
      min-height: unset;
    }

    :host([link]) button:hover {
      border-bottom-color: var(--ag-primary);
    }

    /* Grouped buttons - for use in button groups */
    :host([grouped]) button {
      border-radius: var(--ag-radius-md);
    }

    :host([grouped]:not(:last-child)) button {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      margin-inline-end: -1px;
    }

    :host([grouped]:not(:first-child)) button {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }

    /* Bordered variant - outline style */
    :host([bordered]) button {
      background: transparent;
      border: 1px solid var(--ag-neutral-500);
    }

    :host([bordered][variant="primary"]) button {
      color: var(--ag-primary-text);
      border-color: var(--ag-primary-text);
    }

    /* Bordered Buttons on Hover have a filled background with white text.  The
      Default Bordered is an exception to this rule. */
    :host([bordered][variant="primary"]) button:hover {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    :host([bordered][variant="secondary"]) button,
    :host([bordered][variant="secondary"]) button:hover {
      color: var(--ag-text-secondary);
      border-color: var(--ag-text-secondary);
    }

    :host([bordered][variant="success"]) button {
      color: var(--ag-success-text);
      border-color: var(--ag-success-text);
    }

    :host([bordered][variant="success"]) button:hover {
      color: var(--ag-white);
      background: var(--ag-success);
    }

    :host([bordered][variant="warning"]) button {
      color: var(--ag-warning-text);
      border-color: var(--ag-warning-text);
    }

    :host([bordered][variant="warning"]) button:hover {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    :host([bordered][variant="danger"]) button {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger-text);
    }

    :host([bordered][variant="danger"]) button:hover {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    :host([bordered][variant="monochrome"]) button {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }

    :host([bordered][variant="monochrome"]) button:hover {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    :host([ghost][variant="monochrome"]) button {
      color: var(--ag-text-primary);
    }

    :host([ghost][variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary);
    }

    button:disabled {
      cursor: not-allowed;
      background: var(--ag-background-disabled);
    }

    button:focus-visible,
    button:focus:not(:hover) {
      /* Softer focus ring using alpha channel */
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }
  `;let r=u;o([a({type:String,reflect:!0})],r.prototype,"variant");o([a({type:String,reflect:!0})],r.prototype,"size");o([a({type:String,reflect:!0})],r.prototype,"shape");o([a({type:Boolean,reflect:!0})],r.prototype,"bordered");o([a({type:Boolean,reflect:!0})],r.prototype,"ghost");o([a({type:Boolean,reflect:!0})],r.prototype,"link");o([a({type:Boolean,reflect:!0})],r.prototype,"grouped");o([a({type:String})],r.prototype,"type");o([a({type:Boolean})],r.prototype,"disabled");o([a({type:Boolean})],r.prototype,"loading");o([a({type:Boolean})],r.prototype,"toggle");o([a({type:Boolean})],r.prototype,"pressed");o([a({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");o([a({attribute:!1})],r.prototype,"onClick");o([a({attribute:!1})],r.prototype,"onFocus");o([a({attribute:!1})],r.prototype,"onBlur");o([a({attribute:!1})],r.prototype,"onToggle");customElements.get("ag-button")||customElements.define("ag-button",r);export{r as t};
