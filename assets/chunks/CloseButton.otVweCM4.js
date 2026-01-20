import{i as u,z as e,a as g,x as p}from"./Button.DkmThuAs.js";var v=Object.defineProperty,r=(s,t,i,b)=>{for(var o=void 0,n=s.length-1,c;n>=0;n--)(c=s[n])&&(o=c(t,i,o)||o);return o&&v(t,i,o),o};const l=class extends g{constructor(){super(),this._handleClick=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("close-button-click",{bubbles:!0,composed:!0}))},this.label="Close",this.size="md",this.position=void 0,this.variant="default"}render(){const t=["close-button",`close-button-${this.size}`].join(" ");return p`
      <button
        type="button"
        class="${t}"
        part="ag-close-button"
        aria-label="${this.label}"
        @click=${this._handleClick}
      >
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    `}};l.styles=u`
    :host {
      display: inline-block;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ag-text-secondary);
      line-height: 1;
      padding: var(--ag-space-1);
      border-radius: var(--ag-radius-sm);
      transition: background-color var(--ag-motion-fast) ease,
                  color var(--ag-motion-fast) ease;
    }

    :host(:not([variant]):hover) .close-button,
    :host([variant="default"]:hover) .close-button {
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }

    .close-button:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    /* Size variants */
    .close-button-sm {
      font-size: var(--ag-font-size-2xl);
      padding: var(--ag-space-1);
    }

    .close-button-md {
      font-size: var(--ag-font-size-3xl);
      padding: var(--ag-space-2);
    }

    .close-button-lg {
      font-size: var(--ag-font-size-4xl);
      padding: var(--ag-space-3);
    }

    /* Color variants */
    :host([variant="primary"]) .close-button {
      color: var(--ag-primary-dark);
    }

    :host([variant="success"]) .close-button {
      color: var(--ag-success-dark);
    }

    :host([variant="info"]) .close-button {
      color: var(--ag-info-dark);
    }

    :host([variant="danger"]) .close-button,
    :host([variant="error"]) .close-button {
      color: var(--ag-error-dark);
    }

    :host([variant="warning"]) .close-button {
      color: var(--ag-warning-dark);
    }

    :host([variant="monochrome"]) .close-button {
      color: var(--ag-text-primary);
    }

    :host([variant="monochrome"]:hover) .close-button {
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }

    /* Position variants - for absolute positioning within parent */
    :host([position]) .close-button {
      position: absolute;
    }

    :host([position="top-start"]) .close-button {
      top: var(--ag-space-4);
      inset-inline-start: var(--ag-space-4);
    }

    :host([position="top-end"]) .close-button {
      top: var(--ag-space-4);
      inset-inline-end: var(--ag-space-4);
    }

    :host([position="bottom-start"]) .close-button {
      bottom: var(--ag-space-4);
      inset-inline-start: var(--ag-space-4);
    }

    :host([position="bottom-end"]) .close-button {
      bottom: var(--ag-space-4);
      inset-inline-end: var(--ag-space-4);
    }
  `;let a=l;r([e({type:String})],a.prototype,"label");r([e({type:String})],a.prototype,"size");r([e({type:String,reflect:!0})],a.prototype,"position");r([e({type:String,reflect:!0})],a.prototype,"variant");customElements.get("ag-close-button")||customElements.define("ag-close-button",a);
