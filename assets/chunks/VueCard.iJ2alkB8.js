import{i as p,z as s,a as u,x as m}from"./Button.DkmThuAs.js";import{o as c}from"./slot.B17U6J5C.js";import{s as v}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as f,c as b,o as y,r as l,K as w,p as k,v as x}from"./framework.NAAYCHZu.js";var S=Object.defineProperty,n=(a,t,e,o)=>{for(var r=void 0,i=a.length-1,h;i>=0;i--)(h=a[i])&&(r=h(t,e,r)||r);return r&&S(t,e,r),r};const C={fromAttribute(a){return a===""||a==="true"?"md":a==="false"||a===null?"":a||""},toAttribute(a){return typeof a=="boolean"?a?"md":null:a||null}},g=class extends u{constructor(){super(),this._hasHeaderSlotContent=!1,this._hasFooterSlotContent=!1,this.stacked=!1,this.shadow=!1,this.animated=!1,this.rounded="",this.variant=""}_handleSlotChange(t){const e=t.target,o=e.name;o==="header"?this._hasHeaderSlotContent=c(e):o==="footer"&&(this._hasFooterSlotContent=c(e)),this.requestUpdate()}firstUpdated(){var o,r;const t=(o=this.shadowRoot)==null?void 0:o.querySelector('slot[name="header"]'),e=(r=this.shadowRoot)==null?void 0:r.querySelector('slot[name="footer"]');this._hasHeaderSlotContent=c(t),this._hasFooterSlotContent=c(e),this.requestUpdate()}render(){const t=this._hasHeaderSlotContent?"card-header":"card-header empty",e=this._hasFooterSlotContent?"card-footer":"card-footer empty";return m`
      <div class="card-wrapper" part="ag-card-wrapper">
        <div class="${t}" part="ag-card-header">
          <slot name="header" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="card-content" part="ag-card-content">
          <slot></slot>
        </div>
        <div class="${e}" part="ag-card-footer">
          <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
        </div>
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
  `;let d=g;n([s({type:Boolean,reflect:!0})],d.prototype,"stacked");n([s({type:Boolean,reflect:!0})],d.prototype,"shadow");n([s({type:Boolean,reflect:!0})],d.prototype,"animated");n([s({converter:C,reflect:!0})],d.prototype,"rounded");n([s({type:String,reflect:!0})],d.prototype,"variant");customElements.get("ag-card")||customElements.define("ag-card",d);const $=f({name:"VueCard",props:{stacked:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},rounded:{type:[String,Boolean],default:""},variant:{type:String,default:""}},setup(a){const t=k(null);return x(async()=>{await customElements.whenDefined("ag-card")}),{agComponent:t,stacked:a.stacked,shadow:a.shadow,animated:a.animated,rounded:a.rounded,variant:a.variant}}}),_=[".stacked",".shadow",".animated","rounded","variant"];function B(a,t,e,o,r,i){return y(),b("ag-card",w({ref:"agComponent",".stacked":a.stacked,".shadow":a.shadow,".animated":a.animated,rounded:a.rounded,variant:a.variant},a.$attrs),[l(a.$slots,"header",{slot:"header"}),l(a.$slots,"default"),l(a.$slots,"footer",{slot:"footer"})],48,_)}const R=v($,[["render",B]]);export{R as v};
