import{a as g,i as p,x as c,z as a}from"./Button.DkmThuAs.js";import"./Progress.9UVPl7VG.js";import"./ProgressRing.Dc5tIlrn.js";import"./Badge.Dojlzcbg.js";import{s as h}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as u,c as m,o as b,r as f,K as y,p as _,v as S,P as v,s as z}from"./framework.NAAYCHZu.js";var w=Object.defineProperty,l=(r,e,i,t)=>{for(var s=void 0,o=r.length-1,d;o>=0;o--)(d=r[o])&&(s=d(e,i,s)||s);return s&&w(e,i,s),s};class n extends g{constructor(){super(),this._scrollPercent=0,this._scrollHandler=this._handleScroll.bind(this),this._resizeHandler=this._handleScroll.bind(this),this.mode="bar",this.target=null,this.orientation="top",this.dots=5,this.badgeVariant="info",this.ringSize=32,this.ringStrokeWidth=3,this.ringVariant="info",this.precision=0}static get styles(){return p`
      :host {
        display: block;
      }

      /* Bar mode positioning */
      :host([mode="bar"]) {
        position: fixed;
        inset-inline: 0;
        z-index: var(--ag-z-index-sticky, 100);
      }

      :host([mode="bar"][orientation="top"]) {
        top: 0;
      }

      :host([mode="bar"][orientation="bottom"]) {
        bottom: 0;
      }

      /* Dot trail mode */
      .dot-trail {
        display: flex;
        gap: var(--ag-space-2);
        align-items: center;
        justify-content: center;
      }

      /* Badge mode */
      .badge-wrapper {
        display: inline-flex;
      }

      /* Ring mode */
      .ring-wrapper {
        display: inline-flex;
      }
    `}connectedCallback(){super.connectedCallback(),this._attachScrollListener(),this._handleScroll()}disconnectedCallback(){super.disconnectedCallback(),this._detachScrollListener()}_attachScrollListener(){this._getScrollTarget().addEventListener("scroll",this._scrollHandler,{passive:!0}),window.addEventListener("resize",this._resizeHandler,{passive:!0})}_detachScrollListener(){this._getScrollTarget().removeEventListener("scroll",this._scrollHandler),window.removeEventListener("resize",this._resizeHandler)}_getScrollTarget(){return this.target?this.target:window}_handleScroll(){let e,i,t;if(this.target)e=this.target.scrollTop,i=this.target.scrollHeight,t=this.target.clientHeight;else{const o=document.scrollingElement||document.documentElement;e=o.scrollTop,i=o.scrollHeight,t=o.clientHeight}const s=i-t;if(s<=0)this._scrollPercent=0;else{const o=e/s*100,d=Math.pow(10,this.precision);this._scrollPercent=Math.round(o*d)/d,this._scrollPercent=Math.min(100,Math.max(0,this._scrollPercent))}}_renderBarMode(){return c`
      <ag-progress
        part="scroll-progress-bar"
        .value=${this._scrollPercent}
        size="small"
        label="Scroll progress"
      ></ag-progress>
    `}_renderDotTrailMode(){const e=Math.floor(this._scrollPercent/100*this.dots),i=Array.from({length:this.dots},(t,s)=>{const o=s<e;return c`
        <ag-badge
          dot
          size="sm"
          variant=${o?this.badgeVariant:"neutral"}
          hidden-from-at
        ></ag-badge>
      `});return c`
      <div class="dot-trail" part="scroll-progress-dots">
        ${i}
      </div>
    `}_renderBadgeMode(){const e=this._scrollPercent.toFixed(this.precision);return c`
      <div class="badge-wrapper">
        <ag-badge
          part="scroll-progress-badge"
          variant=${this.badgeVariant}
          status-label="Scroll progress ${e}%"
        >
          ${e}%
        </ag-badge>
      </div>
    `}_renderRingMode(){const e=this._scrollPercent.toFixed(this.precision);return c`
      <div class="ring-wrapper">
        <ag-progress-ring
          part="scroll-progress-ring"
          .value=${this._scrollPercent}
          size="custom"
          variant=${this.ringVariant}
          label="Scroll progress"
          style="--ag-progress-ring-size: ${this.ringSize}px"
        >
          ${e}%
        </ag-progress-ring>
      </div>
    `}render(){switch(this.mode){case"bar":return this._renderBarMode();case"dot-trail":return this._renderDotTrailMode();case"badge":return this._renderBadgeMode();case"ring":return this._renderRingMode();default:return this._renderBarMode()}}}l([a({type:String,reflect:!0})],n.prototype,"mode");l([a({attribute:!1})],n.prototype,"target");l([a({type:String,reflect:!0})],n.prototype,"orientation");l([a({type:Number})],n.prototype,"dots");l([a({type:String,attribute:"badge-variant"})],n.prototype,"badgeVariant");l([a({type:Number,attribute:"ring-size"})],n.prototype,"ringSize");l([a({type:Number,attribute:"ring-stroke-width"})],n.prototype,"ringStrokeWidth");l([a({type:String,attribute:"ring-variant"})],n.prototype,"ringVariant");l([a({type:Number})],n.prototype,"precision");l([a({type:Number,state:!0})],n.prototype,"_scrollPercent");customElements.get("ag-scroll-progress")||customElements.define("ag-scroll-progress",n);const k=u({name:"VueScrollProgress",props:{mode:{type:String,default:"bar"},target:{type:Object,default:null},orientation:{type:String,default:"top"},dots:{type:Number,default:5},badgeVariant:{type:String,default:"info"},ringSize:{type:Number,default:32},ringStrokeWidth:{type:Number,default:3},ringVariant:{type:String,default:"info"},precision:{type:Number,default:0}},setup(r){const e=_(null),i=()=>{const t=e.value;t&&(t.mode=r.mode,t.target=r.target,t.orientation=r.orientation,t.dots=r.dots,t.badgeVariant=r.badgeVariant,t.ringSize=r.ringSize,t.ringStrokeWidth=r.ringStrokeWidth,t.ringVariant=r.ringVariant,t.precision=r.precision)};return S(async()=>{await customElements.whenDefined("ag-scroll-progress"),await v(),i()}),z(()=>{e.value&&i()}),{agComponent:e}}});function M(r,e,i,t,s,o){return b(),m("ag-scroll-progress",y({ref:"agComponent"},r.$attrs),[f(r.$slots,"default")],16)}const B=h(k,[["render",M]]);export{B as h};
