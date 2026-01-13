import{i as p,z as t,a as d,x as l}from"./Button.Bujdzq23.js";var v=Object.defineProperty,o=(n,a,s,u)=>{for(var r=void 0,i=n.length-1,g;i>=0;i--)(g=n[i])&&(r=g(a,s,r)||r);return r&&v(a,s,r),r};const c=class extends d{constructor(){super(),this._handleRemove=()=>{const a=new CustomEvent("tag-remove",{detail:{variant:this.variant},bubbles:!0,composed:!0});this.dispatchEvent(a),this.onTagRemove&&this.onTagRemove(a)},this._handleKeyDown=a=>{(a.key==="Backspace"||a.key===" "||a.key==="Enter")&&(a.preventDefault(),this._handleRemove())},this.variant="",this.shape="",this.uppercase=!1,this.removable=!1}render(){return l`
      <div class="tag-wrapper" part="ag-tag-wrapper">
        <slot></slot>
        <slot name="close"></slot>
        ${this.removable?l`
          <button
            class="tag-remove-button"
            type="button"
            aria-label="Remove tag"
            @click=${this._handleRemove}
            @keydown=${this._handleKeyDown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="width: 1em; height: 1em;"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        `:""}
      </div>
    `}};c.styles=p`
    :host {
      display: inline-flex;
      --tag-background-color: var(--ag-background-tertiary);
      /* Default text color - black that properly inverts in dark mode */
      --tag-color: var(--ag-text-primary);
      --tag-border-radius: var(--ag-radius-md);
    }

    .tag-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      padding: var(--ag-space-1) var(--ag-space-2);
      background-color: var(--tag-background-color);
      color: var(--tag-color);
      border-radius: var(--tag-border-radius);
      font-size: var(--ag-font-size-sm);
      line-height: var(--ag-line-height-sm);
    }

    /* Variants */
    :host([variant='info']) {
      --tag-background-color: var(--ag-info-background);
      --tag-color: var(--ag-info-text);
    }

    :host([variant='warning']) {
      --tag-background-color: var(--ag-warning-background);
      --tag-color: var(--ag-warning-text);
    }

    :host([variant='error']) {
      --tag-background-color: var(--ag-danger-background);
      --tag-color: var(--ag-danger-text);
    }

    :host([variant='success']) {
      --tag-background-color: var(--ag-success-background);
      --tag-color: var(--ag-success-text);
    }

    :host([variant='primary']) {
      --tag-background-color: var(--ag-primary-background);
      --tag-color: var(--ag-primary-text);
    }

    :host([variant='monochrome']) {
      --tag-background-color: var(--ag-background-primary-inverted);
      --tag-color: var(--ag-text-primary-inverted);
    }

    /* Shapes */
    :host([shape='circle']) .tag-wrapper {
      --tag-border-radius: var(--ag-radius-full);
    }
    :host([shape='circle']) .tag-wrapper {
      min-width: var(--ag-line-height-sm);
      min-height: var(--ag-line-height-sm);
      /* We need to override padding to make it perfectly circular */
      padding: var(--ag-space-2);
    }

    :host([shape='pill']) {
      --tag-border-radius: var(--ag-radius-full);
    }

    :host([shape='round']) {
      /* Default shape but kept for consistency */
      --tag-border-radius: var(--ag-radius-md);
    }

    /* Uppercase modifier */
    :host([uppercase]) .tag-wrapper {
      text-transform: uppercase;
      font-size: var(--ag-font-size-xs);
      letter-spacing: var(--ag-letter-spacing-wide);
    }

    /* Close slot */
    ::slotted([slot='close']) {
      margin-inline-start: var(--ag-space-1);
      padding: 2px;
      color: var(--tag-color);
      display: inline-flex;
      align-items: center;
      background: transparent;
      border: transparent;
      cursor: pointer;
    }

    /* Remove button */
    .tag-remove-button {
      margin-inline-start: var(--ag-space-1);
      padding: 0;
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      color: var(--tag-color);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      border-radius: var(--ag-radius-sm);
      cursor: pointer;
      font-size: var(--ag-font-size-xs);
      line-height: 1;
      transition: background-color var(--ag-motion-duration-fast) ease;
    }

    .tag-remove-button:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    .tag-remove-button:focus-visible {
      outline: 2px solid var(--tag-color);
      outline-offset: 1px;
    }
  `;let e=c;o([t({type:String,reflect:!0})],e.prototype,"variant");o([t({type:String,reflect:!0})],e.prototype,"shape");o([t({type:Boolean,reflect:!0})],e.prototype,"uppercase");o([t({type:Boolean,reflect:!0})],e.prototype,"removable");o([t({attribute:!1})],e.prototype,"onTagRemove");customElements.get("ag-tag")||customElements.define("ag-tag",e);
