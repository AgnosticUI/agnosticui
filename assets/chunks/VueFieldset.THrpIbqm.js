import{i as f,a as c,x as s}from"./lit-element.B0TUrqGF.js";import{z as n}from"./property-CemaeiRl.BAjarvIB.js";import{s as u}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as m,c as h,o as y,r as b,K as v,p as w,v as x}from"./framework.BoyT2Jkt.js";var z=Object.defineProperty,l=(e,t,a,p)=>{for(var d=void 0,r=e.length-1,i;r>=0;r--)(i=e[r])&&(d=i(t,a,d)||d);return d&&z(t,a,d),d};const g=class extends c{constructor(){super(...arguments),this.legend="",this.bordered=!1,this.layout="vertical",this.legendHidden=!1}connectedCallback(){super.connectedCallback(),this.layout!=="vertical"&&this.layout!=="horizontal"&&(this.layout="vertical")}render(){const t=["ag-fieldset",this.bordered?"ag-fieldset--bordered":"",this.layout==="horizontal"?"ag-fieldset--horizontal":""].filter(Boolean).join(" "),a=["ag-fieldset-legend",this.legendHidden?"ag-fieldset-legend--hidden":""].filter(Boolean).join(" ");return s`
      <fieldset
        class="${t}"
        part="ag-fieldset"
      >
        ${this.legend?s`
          <legend class="${a}" part="ag-legend">
            ${this.legend}
          </legend>
        `:""}

        <div class="ag-fieldset-content" part="ag-content">
          <slot></slot>
        </div>
      </fieldset>
    `}};g.styles=f`
    :host {
      display: block;
    }

    .ag-fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      min-inline-size: auto;
    }

    .ag-fieldset--bordered {
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      padding: var(--ag-fieldset-padding, var(--ag-space-4));
    }

    .ag-fieldset--horizontal .ag-fieldset-content {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ag-fieldset-gap, var(--ag-space-4));
      align-items: flex-start;
    }

    .ag-fieldset-legend {
      font-weight: 600;
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
      padding: 0;
    }

    .ag-fieldset-legend--hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    .ag-fieldset-content {
      display: block;
    }
  `;let o=g;l([n({type:String})],o.prototype,"legend");l([n({type:Boolean,reflect:!0})],o.prototype,"bordered");l([n({type:String,reflect:!0})],o.prototype,"layout");l([n({type:Boolean,attribute:"legend-hidden"})],o.prototype,"legendHidden");customElements.get("ag-fieldset")||customElements.define("ag-fieldset",o);const B=m({name:"VueFieldset",props:{legend:{type:String,default:""},bordered:{type:Boolean,default:!1},layout:{type:String,default:"vertical"},legendHidden:{type:Boolean,default:!1}},setup(e){const t=w(null);return x(async()=>{await customElements.whenDefined("ag-fieldset")}),{agComponent:t,legend:e.legend,bordered:e.bordered,layout:e.layout,legendHidden:e.legendHidden}}}),H=["legend","bordered","layout","legend-hidden"];function $(e,t,a,p,d,r){return y(),h("ag-fieldset",v({ref:"agComponent",legend:e.legend,bordered:e.bordered||void 0,layout:e.layout,"legend-hidden":e.legendHidden||void 0},e.$attrs),[b(e.$slots,"default")],16,H)}const P=u(B,[["render",$]]);export{P as _};
