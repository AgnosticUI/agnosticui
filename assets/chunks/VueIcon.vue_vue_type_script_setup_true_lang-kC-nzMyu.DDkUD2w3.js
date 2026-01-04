import{i as h,a as g,x as f}from"./lit-element.B0TUrqGF.js";import{z as n}from"./property-CemaeiRl.BAjarvIB.js";import{d,p as v,c as u,o as y,r as m,K as b}from"./framework.DvJW1jwp.js";var z=Object.defineProperty,r=(e,s,o,p)=>{for(var t=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(t=l(s,o,t)||t);return t&&z(s,o,t),t};const c=class extends g{constructor(){super(),this.size="16",this.type="",this.noFill=!1}render(){return f`
      <span class="icon-base icon-${this.size}" part="icon-base">
        <slot></slot>
      </span>
    `}};c.styles=h`
    :host {
      /* Ensure the custom element itself doesn't add extra space */
      display: inline-flex;
    }

    .icon-base {
      display: inline-flex;
      text-align: center;
      /* Ensures no "stretching" of icons to reach 100% of container's width */
      max-inline-size: 100%;
      /* Ensure SVGs don't have click events -- typically we want enclosing button to handle */
      pointer-events: none;
      user-select: none;
    }

    /* Wrapper sizing classes (applied to .icon-base) */
    .icon-base.icon-14 {
      width: var(--ag-font-size-xs);
      height: var(--ag-font-size-xs);
    }

    .icon-base.icon-16 {
      width: var(--ag-font-size-base);
      height: var(--ag-font-size-base);
    }

    .icon-base.icon-18 {
      width: var(--ag-font-size-md);
      height: var(--ag-font-size-md);
    }

    .icon-base.icon-20 {
      width: var(--ag-font-size-lg);
      height: var(--ag-font-size-lg);
    }

    .icon-base.icon-24 {
      width: var(--ag-space-6);
      height: var(--ag-space-6);
    }

    .icon-base.icon-32 {
      width: var(--ag-space-8);
      height: var(--ag-space-8);
    }

    .icon-base.icon-36 {
      width: var(--ag-space-9);
      height: var(--ag-space-9);
    }

    .icon-base.icon-40 {
      width: var(--ag-space-10);
      height: var(--ag-space-10);
    }

    .icon-base.icon-48 {
      width: var(--ag-space-12);
      height: var(--ag-space-12);
    }

    .icon-base.icon-56 {
      width: var(--ag-space-14);
      height: var(--ag-space-14);
    }

    .icon-base.icon-64 {
      width: 4rem;
      height: 4rem;
    }

    /* Apply fill by default, but not when no-fill is set */
    :host(:not([no-fill])) ::slotted(svg) {
      width: 100%;
      height: 100%;
      fill: currentColor;
      max-inline-size: 100%; /* Prevent overflow */
      max-block-size: 100%;
    }

    /* Ensure slotted SVG still respects size when no-fill is set */
    :host([no-fill]) ::slotted(svg) {
      width: 100%;
      height: 100%;
      max-inline-size: 100%;
      max-block-size: 100%;
      /* Outline SVG so we need to remove the fill and apply currentColor to stroke */
      fill: none;
      stroke: currentColor;
    }

    /* Type theming via host attribute (inherits to slotted svg via currentColor for stroke or fill) */
    :host([type="info"]) {
      color: var(--ag-info);
    }

    :host([type="primary"]) {
      color: var(--ag-primary);
    }


    :host([type="action"]),
    :host([type="success"]) {
      color: var(--ag-success);
    }

    :host([type="warning"]) {
      color: var(--ag-warning);
    }

    :host([type="error"]) {
      color: var(--ag-danger);
    }

    :host([type="monochrome"]) {
      color: var(--ag-text-primary);
    }
  `;let i=c;r([n({type:String,reflect:!0})],i.prototype,"size");r([n({type:String,reflect:!0})],i.prototype,"type");r([n({type:Boolean,reflect:!0,attribute:"no-fill"})],i.prototype,"noFill");customElements.get("ag-icon")||customElements.define("ag-icon",i);const w=[".size",".type",".noFill"],F=d({__name:"VueIcon",props:{size:{default:"16"},type:{default:""},noFill:{type:Boolean}},setup(e){const s=v(null);return(o,p)=>(y(),u("ag-icon",b({ref_key:"agComponent",ref:s,".size":e.size,".type":e.type,".noFill":e.noFill},o.$attrs),[m(o.$slots,"default")],48,w))}});export{F as u};
