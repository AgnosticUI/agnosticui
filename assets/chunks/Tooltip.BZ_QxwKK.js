import{i as y,z as r,a as f,x as w}from"./property-CemaeiRl.Cea_q1B7.js";import{n as b}from"./state-CovhUvdr.C-u8O0Fo.js";import{f as v}from"./query-BykXNUlT.Pm7lu9c1.js";import{S as E,F as L,L as k,E as x,T as S,P as C}from"./floating-ui.dom-muqvZJIo.ByzMQtLc.js";var $=Object.defineProperty,o=(t,e,n,a)=>{for(var s=void 0,h=t.length-1,d;h>=0;h--)(d=t[h])&&(s=d(e,n,s)||s);return s&&$(e,n,s),s},l;let i=(l=class extends f{constructor(){super(),this._handleMouseEnter=()=>{this.disabled||(clearTimeout(this._hideTimeout),this.show())},this._handleMouseLeave=()=>{this.disabled||(this._hideTimeout=window.setTimeout(()=>{this.hide()},100))},this._handleFocus=()=>{this.disabled||this.show()},this._handleBlur=()=>{this.disabled||this.hide()},this._handleClick=()=>{this.disabled||(this._open?this.hide():this.show())},this._handleDocumentKeyDown=t=>{t.key==="Escape"&&this._open&&this.hide()},this.show=()=>{this._open||this.disabled||(this._open=!0)},this.hide=()=>{this._open&&(this._open=!1)},this.toggle=()=>{this._open?this.hide():this.show()},this.content="",this.placement="top",this.distance=8,this.skidding=0,this.trigger="hover focus",this.disabled=!1,this._open=!1}firstUpdated(){this._setupEventListeners(),this._setupARIA()}_setupEventListeners(){const t=this.firstElementChild;t&&(this.trigger.includes("hover")&&(this.addEventListener("mouseenter",this._handleMouseEnter),this.addEventListener("mouseleave",this._handleMouseLeave)),this.trigger.includes("focus")&&(t.addEventListener("focus",this._handleFocus),t.addEventListener("blur",this._handleBlur)),this.trigger.includes("click")&&t.addEventListener("click",this._handleClick))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._cleanup)==null||t.call(this),this._removeEventListeners(),document.removeEventListener("keydown",this._handleDocumentKeyDown)}_setupARIA(){}_removeEventListeners(){const t=this.firstElementChild;t&&(this.removeEventListener("mouseenter",this._handleMouseEnter),this.removeEventListener("mouseleave",this._handleMouseLeave),t.removeEventListener("focus",this._handleFocus),t.removeEventListener("blur",this._handleBlur),t.removeEventListener("click",this._handleClick))}updated(t){if(super.updated(t),t.has("_open"))if(this._open){document.addEventListener("keydown",this._handleDocumentKeyDown),this.updateComplete.then(()=>{this._startPositioning()});const e=new CustomEvent("show",{detail:{visible:!0},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onShow&&this.onShow(e)}else{this._stopPositioning(),document.removeEventListener("keydown",this._handleDocumentKeyDown);const e=new CustomEvent("hide",{detail:{visible:!1},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onHide&&this.onHide(e)}}_startPositioning(){var a,s;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("#tooltip"),e=(s=this.shadowRoot)==null?void 0:s.querySelector("#arrow");if(!t||!e)return;const n=this.firstElementChild;n&&(this._updatePosition(),this._cleanup=E(n,t,()=>{this._updatePosition()}))}_stopPositioning(){var t;(t=this._cleanup)==null||t.call(this),this._cleanup=void 0}async _updatePosition(){var c,m;const t=(c=this.shadowRoot)==null?void 0:c.querySelector("#tooltip"),e=(m=this.shadowRoot)==null?void 0:m.querySelector("#arrow");if(!t||!e)return;const n=this.firstElementChild;if(!n)return;const{x:a,y:s,placement:h,middlewareData:d}=await L(n,t,{placement:this.placement,middleware:[k({mainAxis:this.distance,crossAxis:this.skidding}),x(),S({padding:8}),C({element:e})]});Object.assign(t.style,{left:`${a}px`,top:`${s}px`});const{x:p,y:u}=d.arrow??{},_={top:"bottom",right:"left",bottom:"top",left:"right"}[h.split("-")[0]],g=`-${8/2}px`;Object.assign(e.style,{left:p!=null?`${p}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:"",[_]:g})}render(){return w`
      <slot></slot>
      <div
        id="tooltip"
        part="ag-tooltip"
        role="tooltip"
        class="tooltip"
        ?data-show=${this._open}
        @mouseenter="${()=>clearTimeout(this._hideTimeout)}"
        @mouseleave="${this.hide}"
      >
        <slot name="content">${this.content}</slot>
        <div id="arrow" part="ag-tooltip-arrow"></div>
      </div>
    `}},l.styles=y`
    :host {
      display: inline-block;
    }

    #tooltip {
      display: none;
      position: absolute;
      z-index: var(--ag-z-index-modal);
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--ag-motion-fast) ease-in-out;
      background: var(--ag-neutral-900);
      color: var(--ag-white);
      padding: var(--ag-space-2) var(--ag-space-3);
      border-radius: var(--ag-radius-md);
      font-size: var(--ag-font-size-sm);
      max-inline-size: 300px;
    }

    #tooltip[data-show] {
      display: block;
      opacity: 1;
      pointer-events: auto;
    }

    #arrow {
      position: absolute;
      background: inherit;
      width: var(--ag-space-2);
      height: var(--ag-space-2);
      transform: rotate(45deg);
    }
  `,l);o([r({type:String})],i.prototype,"content");o([r({type:String,reflect:!0})],i.prototype,"placement");o([r({type:Number})],i.prototype,"distance");o([r({type:Number})],i.prototype,"skidding");o([r({type:String})],i.prototype,"trigger");o([r({type:Boolean,reflect:!0})],i.prototype,"disabled");o([r({attribute:!1})],i.prototype,"onShow");o([r({attribute:!1})],i.prototype,"onHide");o([b()],i.prototype,"_open");o([v("#tooltip")],i.prototype,"tooltipElement");o([v("#arrow")],i.prototype,"arrowElement");customElements.get("ag-tooltip")||customElements.define("ag-tooltip",i);export{i};
