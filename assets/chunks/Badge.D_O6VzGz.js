import{i as c,z as t,a as v,Q as l,x as u}from"./Button.DkmThuAs.js";var p=Object.defineProperty,a=(n,e,r,d)=>{for(var s=void 0,o=n.length-1,h;o>=0;o--)(h=n[o])&&(s=h(e,r,s)||s);return s&&p(e,r,s),s};const g=class extends v{constructor(){super(),this.variant="default",this.size="md",this.dot=!1,this.value=null,this.max=99,this.interactive=!1,this.statusLabel=null,this.live="off",this.hiddenFromAT=!1}get _displayValue(){return this.value===null||this.value===void 0?"":this.value>this.max?`${this.max}+`:this.value.toString()}_handleClick(){this.interactive&&this.dispatchEvent(new CustomEvent("badge:click",{bubbles:!0,composed:!0}))}_handleKeydown(e){this.interactive&&(e.key==="Enter"||e.key===" ")&&this.dispatchEvent(new CustomEvent("badge:click",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.live!=="off"&&this._updateLiveRegion()}updated(e){super.updated(e),this._checkSingleChar(),e.has("value")&&this.live!=="off"&&this._updateLiveRegion()}_checkSingleChar(){var d;let e=this._displayValue||"";const r=(d=this.shadowRoot)==null?void 0:d.querySelector("slot");if(r){const s=r.assignedNodes({flatten:!0});e+=s.map(o=>o.textContent||"").join("")}e=e.replace(/\s+/g,""),e.length===1&&!this.dot?this.setAttribute("single-char","true"):this.removeAttribute("single-char")}_onSlotChange(){this._checkSingleChar()}_updateLiveRegion(){let e=document.getElementById("ag-badge-live");e||(e=document.createElement("div"),e.id="ag-badge-live",e.className="visually-hidden",e.setAttribute("aria-live",this.live),e.setAttribute("aria-atomic","true"),document.body.appendChild(e)),e.setAttribute("aria-live",this.live),this.value!==null&&this.value!==void 0?e.textContent=this.statusLabel?this.statusLabel:`${this._displayValue} items`:e.textContent=this.statusLabel||""}willUpdate(e){(e.has("dot")||e.has("statusLabel"))&&(this.hiddenFromAT=this.dot&&!this.statusLabel||this.hiddenFromAT)}render(){const e=this.interactive?"0":void 0;return u`
      <span
        part="ag-badge"
        class="badge"
        role=${l(this.interactive?"button":void 0)}
        tabindex=${l(e)}
        aria-label=${l(this.statusLabel||void 0)}
        aria-hidden=${this.hiddenFromAT?"true":"false"}
        @click=${this._handleClick}
        @keydown=${this._handleKeydown}
      >
        ${this.dot?"":this._displayValue}
        <slot @slotchange=${this._onSlotChange}></slot>
      </span>
    `}};g.styles=c`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ag-radius-full);
      padding: var(--ag-space-1) var(--ag-space-2);
      font-size: var(--ag-font-size-xs);
      line-height: 1;
      white-space: nowrap;
      transition: all var(--ag-motion-fast);
    }
    :host([dot]) .badge {
      width: var(--ag-space-2);
      height: var(--ag-space-2);
      padding: 0;
      border-radius: 50%;
    }
    :host([size="xs"]) .badge {
      font-size: calc(var(--ag-font-size-xs) - 1px);
    }
    :host([size="xs"]:not([dot])) .badge {
      padding: var(--ag-space-0) var(--ag-space-1);
    }
    :host([size="xs"][dot]) .badge {
      width: var(--ag-space-1);
      height: var(--ag-space-1);
    }
    :host([size="sm"]) .badge {
      font-size: var(--ag-font-size-xs);
    }
    :host([size="sm"]:not([dot])) .badge {
      padding: var(--ag-space-1) var(--ag-space-2);
    }
    :host([size="sm"][dot]) .badge {
      width: var(--ag-space-2);
      height: var(--ag-space-2);
    }
    :host([size="md"]) .badge {
      font-size: var(--ag-font-size-sm);
    }
    :host([size="md"]:not([dot])) .badge {
      padding: var(--ag-space-1) var(--ag-space-3);
    }
    :host([size="md"][dot]) .badge {
      width: var(--ag-space-3);
      height: var(--ag-space-3);
    }
    :host([variant="default"]) .badge {
      background-color: var(--ag-background-tertiary);
      color: var(--ag-text-primary);
    }
    :host([variant="primary"]) .badge {
      background-color: var(--ag-primary);
      color: var(--ag-white);
    }
    :host([variant="success"]) .badge {
      background-color: var(--ag-success);
      color: var(--ag-white);
    }
    :host([variant="warning"]) .badge {
      background-color: var(--ag-warning);
      color: var(--ag-black);
    }
    :host([variant="danger"]) .badge {
      background-color: var(--ag-danger);
      color: var(--ag-white);
    }
    :host([variant="info"]) .badge {
      background-color: var(--ag-info-dark);
      color: var(--ag-white);
    }
    :host([variant="neutral"]) .badge {
      background-color: var(--ag-neutral-200);
      color: var(--ag-neutral-800);
    }
    :host([variant="monochrome"]) .badge {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
    :host([interactive]) .badge {
      cursor: pointer;
    }
    :host([interactive]) .badge:hover {
      filter: brightness(1.1);
    }
    :host([interactive]) .badge:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }
    :host([single-char]) .badge {
      border-radius: 50%;
    }
    :host([size="xs"][single-char]) .badge {
      padding: 1px;
      width: calc(var(--ag-font-size-xs));
      height: calc(var(--ag-font-size-xs));
    }
    :host([size="sm"][single-char]) .badge {
      padding: 2px;
      width: var(--ag-font-size-sm);
      height: var(--ag-font-size-sm);
    }
    :host([size="md"][single-char]) .badge {
      padding: 2px;
      width: var(--ag-font-size-base);
      height: var(--ag-font-size-base);
    }
  `;let i=g;a([t({type:String,reflect:!0})],i.prototype,"variant");a([t({type:String,reflect:!0})],i.prototype,"size");a([t({type:Boolean,reflect:!0})],i.prototype,"dot");a([t({type:Number})],i.prototype,"value");a([t({type:Number})],i.prototype,"max");a([t({type:Boolean,reflect:!0})],i.prototype,"interactive");a([t({type:String,attribute:"status-label"})],i.prototype,"statusLabel");a([t({type:String})],i.prototype,"live");a([t({type:Boolean,attribute:"hidden-from-at"})],i.prototype,"hiddenFromAT");export{i as e};
