import{i as h,z as t,a as u,x as i,Q as d}from"./Button.Bujdzq23.js";var p=Object.defineProperty,a=(s,o,n,v)=>{for(var r=void 0,c=s.length-1,l;c>=0;c--)(l=s[c])&&(r=l(o,n,r)||r);return r&&p(o,n,r),r};const g=class extends u{constructor(){super(),this._handleClick=o=>{if(this.disabled||this.loading){o.preventDefault(),o.stopPropagation();return}const n=new CustomEvent("icon-button-click",{detail:{originalEvent:o,label:this.label,pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(n),this.onIconButtonClick&&this.onIconButtonClick(n)},this._handleKeyDown=o=>{if((o.key===" "||o.key==="Enter")&&!this.disabled&&!this.loading){const n=new CustomEvent("icon-button-activate",{detail:{originalEvent:o,label:this.label,pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(n),this.onIconButtonActivate&&this.onIconButtonActivate(n)}},this.label="",this.icon="",this.unicode="",this.size="md",this.variant="ghost",this.disabled=!1,this.pressed=!1,this.loading=!1,this.type="button"}_renderIcon(){return this.children.length>0?i`
        <span class="icon" part="ag-icon-has-slotted" aria-hidden="true">
          <slot></slot>
        </span>
      `:this.unicode?i`
        <span class="icon unicode-icon" part="ag-icon-unicode" aria-hidden="true">${this.unicode}</span>
      `:this.icon?i`
        <span class="icon" part="ag-icon" aria-hidden="true" data-icon="${this.icon}">
          <slot>
            <!-- Icon system would inject SVG here -->
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor">
                ${this.icon.slice(0,3)}
              </text>
            </svg>
          </slot>
        </span>
      `:i`
      <span class="icon" part="ag-icon-empty-slot" aria-hidden="true">
        <slot></slot>
      </span>
    `}render(){return this.label||console.warn("AgIconButton: label property is required for accessibility. Please provide an aria-label value."),i`
      <button
        part="ag-icon-button"
        type=${this.type}
        aria-label=${d(this.label||void 0)}
        aria-pressed=${d(this.pressed!==void 0?this.pressed.toString():void 0)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this._renderIcon()}

        <!-- Loading indicator slot -->
        ${this.loading?i`
          <span class="icon" aria-hidden="true">
            <slot name="loading">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                focusable="false"
                aria-hidden="true"
                style="animation: spin 1s linear infinite;"
              >
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              <style>
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              </style>
            </slot>
          </span>
        `:""}

        <!-- Visually hidden text fallback for additional context -->
        ${this.label&&!this.getAttribute("aria-label")?i`
          <span class="visually-hidden">${this.label}</span>
        `:""}
      </button>
    `}};g.styles=h`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Inline-flex for perfect icon centering */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;

      /* Flexbox for icon centering */
      display: flex;
      align-items: center;
      justify-content: center;

      /* Size variants using CSS custom properties */
      width: var(--ag-icon-button-base, --ag-space-10);
      height: var(--ag-icon-button-base, --ag-space-10);

      /* Default color */
      color: var(--ag-text-primary);
      border-radius: var(--ag-radius-sm);

      /* Touch target accessibility */
      min-width: 32px;
      min-height: 32px;

      /* Transition for smooth state changes */
      transition: all var(--ag-motion-duration-fast) ease-in-out;
    }

    /* Size variants */
    :host([size="xs"]) button {
      width: var(--ag-icon-button-xs, var(--ag-space-6));
      height: var(--ag-icon-button-xs, var(--ag-space-6));
      font-size: var(--ag-space-4);
      font-size: var(--ag-icon-button-font-size-xs, var(--ag-space-4));
    }

    :host([size="sm"]) button {
      width: var(--ag-icon-button-sm, var(--ag-space-8));
      height: var(--ag-icon-button-sm, var(--ag-space-8));
      font-size: var(--ag-icon-button-font-size-sm, var(--ag-space-5));
    }

    :host([size="md"]) button {
      width: var(--ag-icon-button-base, var(--ag-space-10));
      height: var(--ag-icon-button-base, var(--ag-space-10));
      font-size: var(--ag-icon-button-font-size-md, var(--ag-space-6));
    }

    :host([size="lg"]) button {
      width: var(--ag-icon-button-lg, var(--ag-space-12));
      height: var(--ag-icon-button-lg, var(--ag-space-12));
      font-size: var(--ag-icon-button-font-size-lg, var(--ag-space-7));
    }

    :host([size="xl"]) button {
      width: var(--ag-icon-button-xl,var(--ag-space-14));
      height: var(--ag-icon-button-xl, var(--ag-space-14));
      font-size: var(--ag-icon-button-font-size-xl, var(--ag-space-8));
    }

    /* Default hover state (ghost variant) */
    button:hover {
      background: var(--ag-background-secondary);
    }

    /* Focus state - High contrast, color-independent */
    button:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    /* Active state */
    button:active {
      background: var(--ag-background-tertiary);
      transform: scale(0.98);
    }

    /* Disabled state */
    button:disabled {
      opacity: var(--ag-opacity-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Toggle pressed state */
    :host([pressed]) button {
      background: var(--ag-primary-subtle);
      color: var(--ag-primary);
    }

    /* Icon sizing and positioning */
    .icon {
      width: 1em;
      height: 1em;
      flex-shrink: 0;

      /* Flexbox for perfect icon centering */
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }

    /* Make any SVG or direct child fill the icon container so it scales */
    .icon svg,
    .icon > * {
      width: 100%;
      height: 100%;
      display: block;
    }

    /* Visually hidden text for accessibility */
    .visually-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    /* Loading state */
    :host([loading]) button {
      pointer-events: none;
    }

    :host([loading]) .icon {
      opacity: 0.5;
    }

    /* Variant styles - following Button pattern */

    /* Secondary variant */
    :host([variant="secondary"]) button {
      background: var(--ag-neutral-400);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
    }

    /* Primary, success, warning, and danger all have white text and get darker on hover */
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
      color: var(--ag-white);
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
  `;let e=g;a([t({type:String})],e.prototype,"label");a([t({type:String})],e.prototype,"icon");a([t({type:String})],e.prototype,"unicode");a([t({type:String,reflect:!0})],e.prototype,"size");a([t({type:String,reflect:!0})],e.prototype,"variant");a([t({type:Boolean,reflect:!0})],e.prototype,"disabled");a([t({type:Boolean,reflect:!0})],e.prototype,"pressed");a([t({type:Boolean,reflect:!0})],e.prototype,"loading");a([t({type:String})],e.prototype,"type");a([t({attribute:!1})],e.prototype,"onIconButtonClick");a([t({attribute:!1})],e.prototype,"onIconButtonActivate");export{e as t};
