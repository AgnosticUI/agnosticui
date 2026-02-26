import{i as p,z as s,a as v,E as u,x as h}from"./Button.CFkPNK98.js";import{o as l}from"./slot.B17U6J5C.js";import{s as f}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as b,c as y,o as w,r as c,K as k,p as x,v as S}from"./framework.NAAYCHZu.js";var C=Object.defineProperty,i=(a,t,e,d)=>{for(var o=void 0,n=a.length-1,m;n>=0;n--)(m=a[n])&&(o=m(t,e,o)||o);return o&&C(t,e,o),o};const $={fromAttribute(a){return a===""||a==="true"?"md":a==="false"||a===null?"":a||""},toAttribute(a){return typeof a=="boolean"?a?"md":null:a||null}},g=class extends v{constructor(){super(),this._hasHeaderSlotContent=!1,this._hasFooterSlotContent=!1,this.stacked=!1,this.shadow=!1,this.animated=!1,this.rounded="",this.variant="",this.hasMedia=!1,this.mediaPosition="top"}_handleSlotChange(t){const e=t.target,d=e.name;d==="header"?this._hasHeaderSlotContent=l(e):d==="footer"&&(this._hasFooterSlotContent=l(e)),this.requestUpdate()}firstUpdated(){var d,o;const t=(d=this.shadowRoot)==null?void 0:d.querySelector('slot[name="header"]'),e=(o=this.shadowRoot)==null?void 0:o.querySelector('slot[name="footer"]');this._hasHeaderSlotContent=l(t),this._hasFooterSlotContent=l(e),this.requestUpdate()}render(){const t=this._hasHeaderSlotContent?"card-header":"card-header empty",e=this._hasFooterSlotContent?"card-footer":"card-footer empty";return h`
      <div class="card-wrapper" part="ag-card-wrapper">
        ${this.hasMedia&&this.mediaPosition==="top"?h`
          <div class="card-media card-media--top" part="ag-card-media">
            <slot name="media"></slot>
          </div>`:u}

        <div class="${t}" part="ag-card-header">
          <slot name="header" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="card-content" part="ag-card-content">
          <slot></slot>
        </div>
        <div class="${e}" part="ag-card-footer">
          <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
        </div>

        ${this.hasMedia&&this.mediaPosition==="bottom"?h`
          <div class="card-media card-media--bottom" part="ag-card-media">
            <slot name="media"></slot>
          </div>`:u}
      </div>
    `}};g.styles=p`
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      /* Use the global token directly for padding */
      --card-padding: var(--ag-space-6, --ag-card-padding);
      background-color: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
    }

    /* Rounded variants - no rounding by default */
    :host([rounded="sm"]) {
      border-radius: var(--ag-radius-sm);
    }

    :host([rounded="md"]) {
      border-radius: var(--ag-radius-md);
    }

    :host([rounded="lg"]) {
      border-radius: var(--ag-radius-lg);
    }

    :host([shadow]) {
      box-shadow: var(--ag-shadow-lg);
      overflow: hidden;
    }

    /* Enhanced hover effect for shadow cards */
    :host([shadow]:hover) {
      box-shadow: var(--ag-shadow-xl);
    }

    /* Animated cards - smooth transitions */
    :host([animated]) {
      transition:
        box-shadow var(--ag-timing-fast, 150ms) ease-out,
        transform var(--ag-timing-fast, 150ms) cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    :host([animated]:hover) {
      transform: translateY(-3px);
      transition:
        box-shadow var(--ag-timing-fast, 150ms) ease-out,
        transform var(--ag-timing-slow, 300ms) cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion), (update: slow) {
      :host([animated]),
      :host([animated]:hover) {
        transition-duration: 0.001ms !important;
        transform: none !important;
      }
    }

    /* Variant colors */
    :host([variant="success"]) {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="info"]) {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }

    :host([variant="error"]) {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="warning"]) {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    :host([variant="monochrome"]) {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    .card-header,
    .card-footer {
      color: var(--ag-text-primary);
    }

    .card-header {
      padding: var(--ag-space-4) var(--card-padding);
      border-bottom: var(--ag-border-width-1) solid var(--ag-border);
    }

    .card-footer {
      padding: var(--ag-space-4) var(--card-padding);
      border-top: var(--ag-border-width-1) solid var(--ag-border);
    }

    /* Hide header/footer when empty class is applied */
    .card-header.empty,
    .card-footer.empty {
      display: none;
    }

    .card-content {
      padding: var(--card-padding);
    }

    :host([stacked]) .card-content > ::slotted(*:not(:last-child)) {
      margin-block-end: var(--ag-space-8);
    }

    /* The accessible clickable card trick */
    ::slotted(a.card-primary-action)::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      cursor: pointer;
    }

    /* Ensure content and other actions are selectable/clickable */
    .card-content,
    ::slotted(h1), ::slotted(h2), ::slotted(h3), ::slotted(h4), ::slotted(h5), ::slotted(h6),
    ::slotted(p), ::slotted(div) {
      position: relative;
      z-index: 2;
    }

    ::slotted(.card-secondary-action) {
      position: relative;
      z-index: 2;
    }

    /* ── Media slot ─────────────────────────────────────────────────── */

    /* Clip image corners to the card's border-radius for non-shadow cards */
    :host([has-media]) {
      overflow: hidden;
    }

    .card-media {
      overflow: hidden; /* belt-and-suspenders for non-rounded cards */
      line-height: 0;   /* collapses inline whitespace below slotted img */
    }

    /* Top media: clip only the card's top two corners */
    :host([rounded="sm"]) .card-media--top  { border-radius: var(--ag-radius-sm) var(--ag-radius-sm) 0 0; }
    :host([rounded="md"]) .card-media--top  { border-radius: var(--ag-radius-md) var(--ag-radius-md) 0 0; }
    :host([rounded="lg"]) .card-media--top  { border-radius: var(--ag-radius-lg) var(--ag-radius-lg) 0 0; }

    /* Bottom media: clip only the card's bottom two corners */
    :host([rounded="sm"]) .card-media--bottom { border-radius: 0 0 var(--ag-radius-sm) var(--ag-radius-sm); }
    :host([rounded="md"]) .card-media--bottom { border-radius: 0 0 var(--ag-radius-md) var(--ag-radius-md); }
    :host([rounded="lg"]) .card-media--bottom { border-radius: 0 0 var(--ag-radius-lg) var(--ag-radius-lg); }

    /* Sensible defaults for slotted media elements */
    .card-media ::slotted(img),
    .card-media ::slotted(video) {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  `;let r=g;i([s({type:Boolean,reflect:!0})],r.prototype,"stacked");i([s({type:Boolean,reflect:!0})],r.prototype,"shadow");i([s({type:Boolean,reflect:!0})],r.prototype,"animated");i([s({converter:$,reflect:!0})],r.prototype,"rounded");i([s({type:String,reflect:!0})],r.prototype,"variant");i([s({type:Boolean,reflect:!0,attribute:"has-media"})],r.prototype,"hasMedia");i([s({type:String,reflect:!0,attribute:"media-position"})],r.prototype,"mediaPosition");customElements.get("ag-card")||customElements.define("ag-card",r);const B=b({name:"VueCard",props:{stacked:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},rounded:{type:[String,Boolean],default:""},variant:{type:String,default:""},hasMedia:{type:Boolean,default:!1},mediaPosition:{type:String,default:"top"}},setup(a){const t=x(null);return S(async()=>{await customElements.whenDefined("ag-card")}),{agComponent:t,stacked:a.stacked,shadow:a.shadow,animated:a.animated,rounded:a.rounded,variant:a.variant,hasMedia:a.hasMedia,mediaPosition:a.mediaPosition}}}),M=[".stacked",".shadow",".animated","rounded","variant",".hasMedia",".mediaPosition"];function P(a,t,e,d,o,n){return w(),y("ag-card",k({ref:"agComponent",".stacked":a.stacked,".shadow":a.shadow,".animated":a.animated,rounded:a.rounded,variant:a.variant,".hasMedia":a.hasMedia,".mediaPosition":a.mediaPosition},a.$attrs),[c(a.$slots,"media",{slot:"media"}),c(a.$slots,"header",{slot:"header"}),c(a.$slots,"default"),c(a.$slots,"footer",{slot:"footer"})],48,M)}const F=f(B,[["render",P]]);export{F as y};
