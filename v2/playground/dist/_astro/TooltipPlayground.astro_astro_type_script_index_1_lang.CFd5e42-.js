import"./index.DWWgOt-Q.js";import{z as r}from"./_Input.bx2nze_F.js";import{P as f,W as v,D as _,k as g,F as b,M as y,E as w,T as c}from"./_Tooltip.Dtj3g-9G.js";import"./MinimalAccordion.DAwcHJU4.js";import"./lit-html-Bm_EwbrZ.B3KIfP8H.js";import{i as E,a as x,x as k}from"./lit-element.DPA3KJ4y.js";var L=Object.defineProperty,o=(d,t,i,n)=>{for(var s=void 0,a=d.length-1,l;a>=0;a--)(l=d[a])&&(s=l(t,i,s)||s);return s&&L(t,i,s),s};class e extends E{static styles=x`
    :host {
      display: inline-block;
    }

    #tooltip {
      display: none;
      position: absolute;
      z-index: 1000;
      pointer-events: none;
      opacity: 0;
      transition: opacity 150ms ease-in-out;

      /* Minimal styling */
      background: var(--tooltip-bg, #1f2937);
      color: var(--tooltip-color, #ffffff);
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      max-width: 250px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      line-height: 1.4;
      text-align: center;
    }

    #tooltip[data-show] {
      display: block;
      opacity: 1;
      pointer-events: auto;
    }

    #arrow {
      position: absolute;
      background: var(--tooltip-bg, #1f2937);
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      z-index: -1;
    }

    /* Theme support using CSS variables from playground */
    [data-theme="dark"] minimal-tooltip #tooltip,
    :host-context([data-theme="dark"]) #tooltip {
      --tooltip-bg: #374151;
      --tooltip-color: #f9fafb;
      --tooltip-border: #4b5563;
    }

    [data-theme="light"] minimal-tooltip #tooltip,
    :host-context([data-theme="light"]) #tooltip,
    #tooltip {
      --tooltip-bg: #1f2937;
      --tooltip-color: #ffffff;
      --tooltip-border: #374151;
    }

    /* System preference fallback */
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme]) minimal-tooltip #tooltip,
      :host-context(:root:not([data-theme])) #tooltip {
        --tooltip-bg: #374151;
        --tooltip-color: #f9fafb;
        --tooltip-border: #4b5563;
      }
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      #tooltip {
        border: 1px solid var(--tooltip-color, #ffffff);
        font-weight: 600;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      #tooltip {
        transition: none;
      }
    }
  `;tooltipElement;arrowElement;_cleanup;_hideTimeout;constructor(){super(),this.content="",this.placement="top",this.distance=8,this.skidding=0,this.trigger="hover focus",this.disabled=!1,this._open=!1}firstUpdated(){this._setupEventListeners(),this._setupARIA()}_setupEventListeners(){const t=this.firstElementChild;t&&(this.trigger.includes("hover")&&(this.addEventListener("mouseenter",this._handleMouseEnter),this.addEventListener("mouseleave",this._handleMouseLeave)),this.trigger.includes("focus")&&(t.addEventListener("focus",this._handleFocus),t.addEventListener("blur",this._handleBlur)),this.trigger.includes("click")&&t.addEventListener("click",this._handleClick))}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._removeEventListeners(),document.removeEventListener("keydown",this._handleDocumentKeyDown)}_setupARIA(){const t=this.firstElementChild;t&&t.setAttribute("aria-describedby","tooltip")}_removeEventListeners(){const t=this.firstElementChild;t&&(this.removeEventListener("mouseenter",this._handleMouseEnter),this.removeEventListener("mouseleave",this._handleMouseLeave),t.removeEventListener("focus",this._handleFocus),t.removeEventListener("blur",this._handleBlur),t.removeEventListener("click",this._handleClick))}_handleMouseEnter=()=>{this.disabled||(clearTimeout(this._hideTimeout),this.show())};_handleMouseLeave=()=>{this.disabled||(this._hideTimeout=window.setTimeout(()=>{this.hide()},100))};_handleFocus=()=>{this.disabled||this.show()};_handleBlur=()=>{this.disabled||this.hide()};_handleClick=()=>{this.disabled||(this._open?this.hide():this.show())};_handleDocumentKeyDown=t=>{t.key==="Escape"&&this._open&&this.hide()};updated(t){super.updated(t),t.has("_open")&&(this._open?(document.addEventListener("keydown",this._handleDocumentKeyDown),this.updateComplete.then(()=>{this._startPositioning()}),this.dispatchEvent(new CustomEvent("show"))):(this._stopPositioning(),document.removeEventListener("keydown",this._handleDocumentKeyDown),this.dispatchEvent(new CustomEvent("hide"))))}_startPositioning(){const t=this.shadowRoot?.querySelector("#tooltip"),i=this.shadowRoot?.querySelector("#arrow");if(!t||!i)return;const n=this.firstElementChild;n&&(this._updatePosition(),this._cleanup=f(n,t,()=>{this._updatePosition()}))}_stopPositioning(){this._cleanup?.(),this._cleanup=void 0}async _updatePosition(){const t=this.shadowRoot?.querySelector("#tooltip"),i=this.shadowRoot?.querySelector("#arrow");if(!t||!i)return;const n=this.firstElementChild;if(!n)return;const{x:s,y:a,placement:l,middlewareData:m}=await v(n,t,{placement:this.placement,middleware:[_({mainAxis:this.distance,crossAxis:this.skidding}),g(),b({padding:8}),y({element:i})]});Object.assign(t.style,{left:`${s}px`,top:`${a}px`});const{x:h,y:p}=m.arrow??{},u={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];Object.assign(i.style,{left:h!=null?`${h}px`:"",top:p!=null?`${p}px`:"",right:"",bottom:"",[u]:"-4px"})}show=()=>{this._open||this.disabled||(this._open=!0)};hide=()=>{this._open&&(this._open=!1)};toggle=()=>{this._open?this.hide():this.show()};render(){return k`
      <slot></slot>
      <div
        id="tooltip"
        part="base"
        role="tooltip"
        class="tooltip"
        ?data-show=${this._open}
        @mouseenter="${()=>clearTimeout(this._hideTimeout)}"
        @mouseleave="${this.hide}"
      >
        <slot name="content">${this.content}</slot>
        <div id="arrow" part="arrow"></div>
      </div>
    `}}o([r({type:String})],e.prototype,"content");o([r({type:String,reflect:!0})],e.prototype,"placement");o([r({type:Number})],e.prototype,"distance");o([r({type:Number})],e.prototype,"skidding");o([r({type:String})],e.prototype,"trigger");o([r({type:Boolean,reflect:!0})],e.prototype,"disabled");o([w()],e.prototype,"_open");o([c("#tooltip")],e.prototype,"tooltipElement");o([c("#arrow")],e.prototype,"arrowElement");customElements.define("minimal-tooltip",e);
