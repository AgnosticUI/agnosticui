import{i as m,z as l,a as y,x as h}from"./Button.CFkPNK98.js";import{n as f}from"./state-CovhUvdr.DWhhlYib.js";import{f as p}from"./query-BykXNUlT.Pm7lu9c1.js";import{S as E,D as v,L as T,E as k,T as L,P as S,F as x}from"./floating-ui.dom-muqvZJIo.ByzMQtLc.js";import"./CloseButton.BYeeZuwt.js";import{s as C}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as B,c as H,o as P,r as $,K as O,p as A,v as z,P as F,s as W}from"./framework.NAAYCHZu.js";const M=m`
  ::slotted(.nav-button) {
    width: 100%;
    padding: var(--ag-space-2);
    border: none;
    background: transparent;
    color: var(--ag-text-primary);
    font-size: var(--ag-font-size-sm);
    display: flex;
    align-items: center;
    gap: var(--ag-space-2);
    text-align: start;
    cursor: pointer;
    border-radius: var(--ag-border-radius-sm);
    transition: background 0.15s;
  }

  ::slotted(.nav-button:hover) {
    background: var(--ag-background-secondary);
  }

  ::slotted(.nav-button[aria-current="page"]),
  ::slotted(.nav-button.active) {
    background: var(--ag-primary-background);
    color: var(--ag-primary-text);
    font-weight: 600;
  }
`;var D=Object.defineProperty,a=(r,e,t,n)=>{for(var i=void 0,d=r.length-1,o;d>=0;d--)(o=r[d])&&(i=o(e,t,i)||i);return i&&D(e,t,i),i};const b=class extends y{constructor(){super(),this._open=!1,this._handleTriggerClick=()=>{!this.disabled&&this.triggerElement&&this.triggerType==="click"&&this.toggle()},this._handleTriggerMouseEnter=()=>{!this.disabled&&this.triggerType==="hover"&&(this._clearHoverTimeout(),this.show())},this._handleTriggerMouseLeave=()=>{this.triggerType==="hover"&&(this._clearHoverTimeout(),this._hoverTimeout=window.setTimeout(()=>{this.hide()},150))},this._handleTriggerFocus=()=>{!this.disabled&&this.triggerType==="focus"&&this.show()},this._handleTriggerBlur=()=>{this.triggerType==="focus"&&(this._clearHoverTimeout(),this._hoverTimeout=window.setTimeout(()=>{this.hide()},100))},this._handleCloseButtonClick=e=>{e.stopPropagation(),this.hide()},this._handleKeyDown=e=>{e.key==="Escape"&&this._open&&(this.hide(),e.stopPropagation())},this._handleClickOutside=e=>{if(!this._open||this.disabled)return;const t=e.composedPath(),n=this.popoverElement&&t.includes(this.popoverElement),i=this.triggerElement&&t.includes(this.triggerElement);!n&&!i&&this.hide()},this.placement="bottom",this.distance=8,this.skidding=0,this.arrow=!0,this.disabled=!1,this.triggerType="click",this.matchTriggerWidth=!1,this.showCloseButton=!0,this.showHeader=!0,this.closeLabel="Close popover",this.trapFocus=!1}connectedCallback(){super.connectedCallback(),this._updateSlotStates(),this._setupContentObservation()}firstUpdated(){this._setupARIA(),this._addTriggerListeners()}disconnectedCallback(){super.disconnectedCallback(),this._cleanupPositioning(),this._removeTriggerListeners(),this._removePopoverListeners(),this._cleanupContentObservation(),this._clearHoverTimeout()}_setupARIA(){const e=this.triggerElement;e&&(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","dialog"))}get triggerElement(){return this._triggerSlot&&this._triggerSlot.assignedElements({flatten:!0})[0]||null}get _hasTitleSlot(){return!!this.querySelector('[slot="title"]')}get _hasContentSlot(){return!!this.querySelector('[slot="content"]')}get _hasHeader(){return this.showHeader&&(this._hasTitleSlot||this.showCloseButton)}_updateSlotStates(){this.toggleAttribute("has-header",this._hasHeader),this.toggleAttribute("has-content",this._hasContentSlot)}_setupContentObservation(){this._contentObserver=new MutationObserver(()=>{this._updateSlotStates()}),this.querySelectorAll('[slot="title"], [slot="content"]').forEach(e=>{var t;(t=this._contentObserver)==null||t.observe(e,{childList:!0,subtree:!1,characterData:!0})})}_cleanupContentObservation(){var e;(e=this._contentObserver)==null||e.disconnect(),this._contentObserver=void 0}_clearHoverTimeout(){this._hoverTimeout&&(clearTimeout(this._hoverTimeout),this._hoverTimeout=void 0)}updated(e){if(super.updated(e),e.has("disabled")&&this.disabled&&this._open&&this.hide(),e.has("triggerType")&&(this._removeTriggerListeners(),this._addTriggerListeners()),(e.has("showCloseButton")||e.has("showHeader"))&&this._updateSlotStates(),e.has("_open"))if(this._updateARIA(),this._open){if(!this.triggerElement){this._open=!1;return}this._addPopoverListeners(),this.updateComplete.then(()=>{this._startPositioning()});const t=new CustomEvent("show",{detail:{visible:!0},bubbles:!0,composed:!0});this.dispatchEvent(t),this.onShow&&this.onShow(t)}else{this._cleanupPositioning(),this._removePopoverListeners(),this._clearHoverTimeout();const t=new CustomEvent("hide",{detail:{visible:!1},bubbles:!0,composed:!0});this.dispatchEvent(t),this.onHide&&this.onHide(t)}e.has("matchTriggerWidth")&&this._updatePopoverStyles()}_updatePopoverStyles(){const e=this.popoverElement;e&&(this.matchTriggerWidth||(e.style.width=""))}_updateARIA(){const e=this.triggerElement;e&&e.setAttribute("aria-expanded",this._open?"true":"false")}_addTriggerListeners(){const e=this.triggerElement;if(e&&!this.disabled)switch(this.triggerType){case"click":e.addEventListener("click",this._handleTriggerClick);break;case"hover":e.addEventListener("mouseenter",this._handleTriggerMouseEnter),e.addEventListener("mouseleave",this._handleTriggerMouseLeave);break;case"focus":e.addEventListener("focus",this._handleTriggerFocus),e.addEventListener("blur",this._handleTriggerBlur);break}}_removeTriggerListeners(){const e=this.triggerElement;e&&(e.removeEventListener("click",this._handleTriggerClick),e.removeEventListener("mouseenter",this._handleTriggerMouseEnter),e.removeEventListener("mouseleave",this._handleTriggerMouseLeave),e.removeEventListener("focus",this._handleTriggerFocus),e.removeEventListener("blur",this._handleTriggerBlur))}_addPopoverListeners(){this.triggerType==="hover"&&this.popoverElement&&(this.popoverElement.addEventListener("mouseenter",this._handleTriggerMouseEnter),this.popoverElement.addEventListener("mouseleave",this._handleTriggerMouseLeave)),this.addEventListener("keydown",this._handleKeyDown),this._clickOutsideHandler=this._handleClickOutside.bind(this),document.addEventListener("click",this._clickOutsideHandler,!0)}_removePopoverListeners(){this.popoverElement&&(this.popoverElement.removeEventListener("mouseenter",this._handleTriggerMouseEnter),this.popoverElement.removeEventListener("mouseleave",this._handleTriggerMouseLeave)),this.removeEventListener("keydown",this._handleKeyDown),this._clickOutsideHandler&&document.removeEventListener("click",this._clickOutsideHandler,!0)}_startPositioning(){const e=this.popoverElement;if(!e)return;const t=this.triggerElement;t&&(this._updatePosition(),this._cleanup=E(t,e,()=>{this._updatePosition()}))}_cleanupPositioning(){var e;(e=this._cleanup)==null||e.call(this),this._cleanup=void 0}async _updatePosition(){const e=this.popoverElement;if(!e)return;const t=this.triggerElement;if(!t)return;const n=[];this.matchTriggerWidth&&n.push(v({apply:({rects:i})=>{this.popoverElement&&(this.popoverElement.style.width=`${i.reference.width}px`)}})),n.push(T({mainAxis:this.distance,crossAxis:this.skidding}),k(),L({padding:8}),v({apply:({availableWidth:i,availableHeight:d,elements:o})=>{Object.assign(o.floating.style,{maxWidth:`${i}px`,maxHeight:`${d}px`})}})),this.arrow&&this.arrowElement&&n.push(S({element:this.arrowElement,padding:5}));try{const{x:i,y:d,placement:o,middlewareData:g}=await x(t,e,{placement:this.placement,middleware:n});if(Object.assign(e.style,{left:`${i}px`,top:`${d}px`}),e.dataset.placement=o,this.arrow&&this.arrowElement&&g.arrow){const{x:c,y:u}=g.arrow,_=o.split("-")[0],w={top:"bottom",right:"left",bottom:"top",left:"right"}[_];Object.assign(this.arrowElement.style,{left:c!=null?`${c}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:"",[w]:`-${this.arrowElement.offsetWidth/2}px`})}}catch{}}show(){this._open||this.disabled||!this.triggerElement||(this._open=!0)}_getActiveElement(){let e=document.activeElement;for(;e!=null&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}hide(){var o;if(!this._open)return;this._open=!1;const e=this._getActiveElement(),t=(o=this.shadowRoot)==null?void 0:o.getElementById("popover"),n=e===document.body,i=(t==null?void 0:t.contains(e))||e===t,d=this.triggerElement===e;this.triggerElement&&(n||i||d)&&this.triggerElement.focus()}toggle(){this._open?this.hide():this.show()}get isOpen(){return this._open}get hasContentSlot(){return this._hasContentSlot}get hasTitleSlot(){return this._hasTitleSlot}get hasHeader(){return this._hasHeader}render(){return h`
      <slot name="trigger" @slotchange=${this._updateSlotStates}></slot>

      <div
        id="popover"
        part="ag-popover"
        role="dialog"
        aria-modal="false"
        aria-labelledby=${this._hasTitleSlot?"popover-title":void 0}
        aria-label=${this._hasTitleSlot?void 0:"Popover"}
        ?data-show=${this._open}
      >
        ${this._hasHeader?h`
          <header part="ag-popover-header" class="popover-header">
            ${this._hasTitleSlot?h`
              <h3 id="popover-title" class="popover-title">
                <slot name="title" @slotchange=${this._updateSlotStates}></slot>
              </h3>
            `:h`<div class="popover-title"></div>`}

            ${this.showCloseButton?h`
              <div class="popover-close-wrapper">
                <ag-close-button
                  part="ag-popover-close"
                  label=${this.closeLabel}
                  @close-button-click=${this._handleCloseButtonClick}
                ></ag-close-button>
              </div>
            `:""}
          </header>
        `:""}

        ${this._hasContentSlot?h`
          <div part="ag-popover-body" class="popover-body">
            <slot name="content" @slotchange=${this._updateSlotStates}></slot>
          </div>
        `:""}
        
        ${this.arrow?h`<div id="arrow" part="ag-popover-arrow"></div>`:""}
      </div>
    `}};b.styles=m`
    :host {
      display: inline-block;
      position: relative;

      /* Define with fallback only — never hard-code the value */
      --ag-popover-min-width: var(--ag-popover-min-width, 200px);
      --ag-popover-max-width: var(--ag-popover-max-width, 400px);
      --ag-popover-arrow-size: var(--ag-popover-arrow-size, var(--ag-space-2, 8px));
    }

    #popover {
      position: absolute;
      z-index: var(--ag-z-index-modal);
      background: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      box-shadow: var(--ag-shadow-lg);
      min-inline-size: var(--ag-popover-min-width);
      max-inline-size: var(--ag-popover-max-width);
      opacity: 0;
      transform: scale(0.95);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) ease-in-out;
      pointer-events: none;
    }

    #popover[data-show] {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    /* Hide header when no title content and no close button */
    :host(:not([has-header])) .popover-header {
      display: none;
    }

    /* Hide body when no content */
    :host(:not([has-content])) .popover-body {
      display: none;
    }

    #arrow {
      /* Base styles for the arrow: a rotated square with borders for the visible edges. */
      position: absolute;
      background: var(--ag-background-primary);
      width: var(--ag-popover-arrow-size);
      height: var(--ag-popover-arrow-size);
      border: var(--ag-border-width-1) solid transparent;
      transform: rotate(45deg);
      z-index: -1;
    }

    /* Placement-specific border colors for the arrow to match the popover border on the visible sides. */
    #popover[data-placement^="top"] #arrow {
      border-bottom-color: var(--ag-border);
      border-inline-end-color: var(--ag-border);
    }

    #popover[data-placement^="right"] #arrow {
      border-bottom-color: var(--ag-border);
      border-inline-start-color: var(--ag-border);
    }

    #popover[data-placement^="bottom"] #arrow {
      border-inline-start-color: var(--ag-border);
      border-top-color: var(--ag-border);
    }

    #popover[data-placement^="left"] #arrow {
      border-top-color: var(--ag-border);
      border-inline-end-color: var(--ag-border);
    }

    .popover-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: var(--ag-space-4) var(--ag-space-4) var(--ag-space-3);
      gap: var(--ag-space-3);
    }

    .popover-title {
      font-weight: var(--ag-font-weight-semibold);
      font-size: var(--ag-font-size-lg);
      margin: 0;
      color: var(--ag-text-primary);
      flex: 1;
    }

    /* Hide placeholder title when empty and no actual title content */
    .popover-title:empty:not(:has(*)) {
      visibility: hidden;
      min-width: 0;
      flex: 0 1 0px;
    }

    .popover-close-wrapper {
      flex-shrink: 0;
      line-height: 1;
      margin: calc(var(--ag-space-2) * -1) calc(var(--ag-space-2) * -1) 0 0;
    }

    .popover-body {
      font-size: var(--ag-font-size-sm);
      line-height: var(--ag-line-height-normal);
      color: var(--ag-text-secondary);
      padding: 0 var(--ag-space-4) var(--ag-space-4);
    }

    .popover-body ::slotted(*) {
      margin: 0 0 var(--ag-space-2) 0;
    }

    .popover-body ::slotted(*:last-child) {
      margin-block-end: 0;
    }

    /* Ensure popover is hidden when not active */
    #popover:not([data-show]) {
      display: none;
    }

    /* For when Popover is used on Sidebar sub-menues */
    ${M}

    /* Popover-specific additions (flat) */
    ::slotted([slot="trigger"]) {
      justify-content: center; /* Collapsed rail mode */
      padding: var(--ag-space-1); /* Tighter fit */
    }

    /* Trigger-specific hover (flat) */
    ::slotted([slot="trigger"]:hover) {
      background: var(--ag-background-secondary);
    }
  `;let s=b;a([l({type:String,reflect:!0})],s.prototype,"placement");a([l({type:Number})],s.prototype,"distance");a([l({type:Number})],s.prototype,"skidding");a([l({type:Boolean})],s.prototype,"arrow");a([l({type:Boolean,reflect:!0})],s.prototype,"disabled");a([l({type:String,attribute:"trigger-type"})],s.prototype,"triggerType");a([l({type:Boolean,attribute:"match-trigger-width"})],s.prototype,"matchTriggerWidth");a([l({type:Boolean,attribute:"show-close-button"})],s.prototype,"showCloseButton");a([l({type:Boolean,attribute:"show-header"})],s.prototype,"showHeader");a([l({type:String,attribute:"close-label"})],s.prototype,"closeLabel");a([l({type:Boolean,attribute:"trap-focus"})],s.prototype,"trapFocus");a([l({attribute:!1})],s.prototype,"onShow");a([l({attribute:!1})],s.prototype,"onHide");a([f()],s.prototype,"_open");a([p("#popover")],s.prototype,"popoverElement");a([p("#arrow")],s.prototype,"arrowElement");a([p('slot[name="trigger"]')],s.prototype,"_triggerSlot");customElements.get("ag-popover")||customElements.define("ag-popover",s);const R=B({name:"VuePopover",props:{placement:{type:String,default:"bottom"},distance:{type:Number,default:8},skidding:{type:Number,default:0},arrow:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},triggerType:{type:String,default:"click"},matchTriggerWidth:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!0},closeLabel:{type:String,default:"Close popover"},trapFocus:{type:Boolean,default:!1}},emits:["show","hide"],setup(r,{emit:e}){const t=A(null),n=()=>{const o=t.value;o&&(o.placement=r.placement,o.distance=r.distance,o.skidding=r.skidding,o.arrow=r.arrow,o.disabled=r.disabled,o.triggerType=r.triggerType,o.matchTriggerWidth=r.matchTriggerWidth,o.showCloseButton=r.showCloseButton,o.closeLabel=r.closeLabel,o.trapFocus=r.trapFocus)},i=o=>{e("show",o)},d=o=>{e("hide",o)};return z(async()=>{await customElements.whenDefined("ag-popover"),await F(),n();const o=t.value;o&&(o.addEventListener("show",i),o.addEventListener("hide",d))}),W(()=>{t.value&&n()}),{agComponent:t}}}),j=[".arrow",".disabled",".matchTriggerWidth",".showCloseButton",".trapFocus","placement","distance","skidding","triggerType","closeLabel"];function I(r,e,t,n,i,d){return P(),H("ag-popover",O({ref:"agComponent",".arrow":r.arrow,".disabled":r.disabled,".matchTriggerWidth":r.matchTriggerWidth,".showCloseButton":r.showCloseButton,".trapFocus":r.trapFocus,placement:r.placement,distance:r.distance,skidding:r.skidding,triggerType:r.triggerType,closeLabel:r.closeLabel},r.$attrs),[$(r.$slots,"default")],48,j)}const X=C(R,[["render",I]]);export{X as k,M as t};
