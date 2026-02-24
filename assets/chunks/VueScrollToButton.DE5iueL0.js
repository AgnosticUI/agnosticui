import{i as g,z as i,a as m,x as n}from"./Button.CFkPNK98.js";import{s as f}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as b,c as p,o as h,e as y,r as w}from"./framework.NAAYCHZu.js";var v=Object.defineProperty,l=(t,e,r,u)=>{for(var s=void 0,a=t.length-1,c;a>=0;a--)(c=t[a])&&(s=c(e,r,s)||s);return s&&v(e,r,s),s};const d=class extends m{constructor(){super(),this._targetElement=null,this._handleScroll=()=>{this.visible=window.scrollY>this.scrollThreshold},this.label="Back to Top",this.showLabel=!1,this.icon=!0,this.scrollThreshold=400,this.target="top",this.direction="auto",this.smoothScroll=!0,this.visible=!1,this.size="md",this.shape=""}_getScrollBehavior(){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return this.smoothScroll&&!e?"smooth":"auto"}_getScrollTarget(){if(this._targetElement)return this._targetElement.offsetTop;if(typeof this.target=="string")switch(this.target){case"top":return 0;case"bottom":return document.documentElement.scrollHeight-window.innerHeight;default:{const e=document.getElementById(this.target);if(e)return e.offsetTop;const r=document.querySelector(this.target);return r instanceof HTMLElement?r.offsetTop:(console.warn(`ScrollToButton: Target "${this.target}" not found, scrolling to top`),0)}}return 0}_getDirection(){if(this.direction!=="auto")return this.direction;if(this._targetElement)return this._targetElement.offsetTop<window.scrollY?"up":"down";if(typeof this.target=="string")switch(this.target){case"bottom":return"down";case"top":default:return"up"}return"up"}_scrollToTarget(){const e=this._getScrollTarget(),r=this._getScrollBehavior();window.scrollTo({top:e,behavior:r})}setTargetElement(e){this._targetElement=e}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._handleScroll,{passive:!0}),this._handleScroll()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),super.disconnectedCallback()}_renderDefaultIcon(){return this._getDirection()==="down"?n`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </svg>
      `:n`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 24 24"
        width="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    `}render(){const e=this.showLabel||!this.icon,r=this.icon&&!e;return n`
      <ag-button
        mode="primary"
        size="${this.size}"
        shape="${this.shape||(r?"circle":"")}"
        @click="${this._scrollToTarget}"
        aria-label="${this.label}"
        part="ag-scrollto-button"
        exportparts="ag-button"
        role="button"
      >
        <div class="button-content" part="ag-button-content">
          ${this.icon?n`
            <span class="ag-icon-wrapper" part="ag-icon-wrapper">
              <slot name="icon">
                ${this._renderDefaultIcon()}
              </slot>
            </span>
          `:""}
          ${e?n`
            <span class="label" part="ag-label">${this.label}</span>
          `:""}
        </div>
      </ag-button>
    `}};d.styles=g`
    :host {
      display: inline-block;
      position: fixed;
      bottom: var(--ag-space-8, 2rem);
      inset-inline-end: var(--ag-space-8, 2rem);
      z-index: var(--ag-z-index-sticky, 900);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--ag-motion-slow, 0.4s) ease-in-out,
                  visibility var(--ag-motion-slow, 0.4s) ease-in-out;
    }

    :host([visible]) {
      opacity: 1;
      visibility: visible;
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }

    @media print {
      :host {
        display: none !important;
      }
    }

    /* Ensure button is large enough for touch targets */
    ag-button {
      min-width: 44px;
      min-height: 44px;
    }

    /* Default flex layout for icon + label */
    .button-content {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2, 0.5rem);
      flex-direction: row;
    }

    /* Icon wrapper for part targeting */
    .icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Label wrapper for part targeting */
    .label {
      display: inline-block;
    }
  `;let o=d;l([i({type:String})],o.prototype,"label");l([i({type:Boolean})],o.prototype,"showLabel");l([i({type:Boolean})],o.prototype,"icon");l([i({type:Number})],o.prototype,"scrollThreshold");l([i({type:String})],o.prototype,"target");l([i({type:String})],o.prototype,"direction");l([i({type:Boolean})],o.prototype,"smoothScroll");l([i({type:Boolean,reflect:!0})],o.prototype,"visible");l([i({type:String})],o.prototype,"size");l([i({type:String})],o.prototype,"shape");customElements.get("ag-scroll-to-button")||customElements.define("ag-scroll-to-button",o);const S=b({name:"VueScrollToButton",props:{label:{type:String,default:"Back to Top"},showLabel:{type:Boolean,default:!1},icon:{type:Boolean,default:!0},scrollThreshold:{type:Number,default:400},target:{type:String,default:"top"},direction:{type:String,default:"auto"},smoothScroll:{type:Boolean,default:!0},visible:{type:Boolean,default:!1},size:{type:String,default:"md"},shape:{type:String,default:""}}}),T=["label","showLabel","icon","scrollThreshold","target","direction","smoothScroll","visible","size","shape"],_={key:0,slot:"icon"};function B(t,e,r,u,s,a){return h(),p("ag-scroll-to-button",{label:t.label,showLabel:t.showLabel,icon:t.icon,scrollThreshold:t.scrollThreshold,target:t.target,direction:t.direction,smoothScroll:t.smoothScroll,visible:t.visible,size:t.size,shape:t.shape},[t.$slots.icon?(h(),p("span",_,[w(t.$slots,"icon")])):y("",!0)],8,T)}const $=f(S,[["render",B]]);export{$ as g};
