import{A as C}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as E,a as m,x as f}from"./chunks/lit-element.B0TUrqGF.js";import{z as F}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{o as A}from"./chunks/slot.B17U6J5C.js";import{s as B}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as u,c as o,o as y,r as b,K as D,p as x,v as q,P as c,s as S,_ as w,C as V,j as i,G as t,w as l,a as n,ae as z}from"./chunks/framework.DvJW1jwp.js";var P=Object.defineProperty,g=(h,s,e,k)=>{for(var p=void 0,r=h.length-1,a;r>=0;r--)(a=h[r])&&(p=a(s,e,p)||p);return p&&P(s,e,p),p};const v=class extends m{constructor(){super(),this.vertical=!1,this.justify="center",this.size="default",this.variant="default",this.hasContent=!1}handleSlotChange(s){this.hasContent=A(s.target)}getClasses(){const s=["divider"];return this.vertical&&s.push("divider-vertical"),this.justify!=="center"&&!this.vertical&&s.push(`divider-justify-${this.justify}`),this.size!=="default"&&s.push(`divider-${this.size}`),this.variant!=="default"&&s.push(`divider-${this.variant}`),s.join(" ")}render(){const s=this.vertical?"vertical":"horizontal",e=this.hasContent?"divider-content divider-has-content":"divider-content";return f`
      <div
        class="${this.getClasses()}"
        part="ag-divider"
        role="separator"
        aria-orientation="${s}"
      >
        <span class="${e}" part="ag-divider-content">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
      </div>
    `}};v.styles=E`
    :host {
      display: block;
    }

    :host([is-vertical]) {
      align-self: stretch;
    }

    .divider {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      width: 100%;
    }

    .divider::before,
    .divider::after {
      content: '';
      background-color: var(--ag-border);
      height: var(--ag-border-width-2);
      flex-grow: 1;
    }

    /* Sizes - Horizontal */
    .divider-small::before,
    .divider-small::after {
      height: var(--ag-border-width-1);
    }

    .divider-large::before,
    .divider-large::after {
      height: var(--ag-border-width-3);
    }

    .divider-xlarge::before,
    .divider-xlarge::after {
      height: 4px;
    }

    /* Justify */
    .divider-justify-end::after,
    .divider-justify-start::before {
      flex-grow: 0;
      flex-basis: 3%;
    }

    /* Content */
    .divider-has-content {
      padding-inline-start: var(--ag-space-4);
      padding-inline-end: var(--ag-space-4);
    }

    /* Vertical */
    .divider-vertical {
      height: 100%;
      margin: 0 var(--ag-space-4);
      width: var(--ag-space-4);
      flex-direction: column;
    }

    .divider-vertical::before,
    .divider-vertical::after {
      width: var(--ag-border-width-2);
      height: auto;  /* Override the fixed height for vertical growth */
    }

    /* Sizes - Vertical */
    .divider-vertical.divider-small::before,
    .divider-vertical.divider-small::after {
      width: var(--ag-border-width-1);
    }

    .divider-vertical.divider-large::before,
    .divider-vertical.divider-large::after {
      width: var(--ag-border-width-3);
    }

    .divider-vertical.divider-xlarge::before,
    .divider-vertical.divider-xlarge::after {
      width: 4px;
    }

    .divider-vertical .divider-has-content {
      padding-inline-start: var(--ag-space-6);
      padding-inline-end: var(--ag-space-6);
      padding-block-start: var(--ag-space-3);
      padding-block-end: var(--ag-space-3);
    }

    /* Variants */
    .divider-warning::before,
    .divider-warning::after {
      background-color: var(--ag-warning);
    }

    .divider-warning .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-error::before,
    .divider-error::after {
      background-color: var(--ag-danger);
    }

    .divider-error .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-success::before,
    .divider-success::after {
      background-color: var(--ag-success);
    }

    .divider-success .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-info::before,
    .divider-info::after {
      background-color: var(--ag-info);
    }

    .divider-info .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-monochrome::before,
    .divider-monochrome::after {
      background-color: var(--ag-text-primary);
    }

    .divider-monochrome .divider-content {
      color: var(--ag-text-primary);
    }
  `;let d=v;g([F({type:Boolean,attribute:"is-vertical",reflect:!0})],d.prototype,"vertical");g([F({type:String,reflect:!0})],d.prototype,"justify");g([F({type:String,reflect:!0})],d.prototype,"size");g([F({type:String,reflect:!0})],d.prototype,"variant");g([F({type:Boolean,state:!0})],d.prototype,"hasContent");customElements.get("ag-divider")||customElements.define("ag-divider",d);const j=u({name:"VueDivider",props:{vertical:{type:Boolean,default:!1},justify:{type:String,default:"center"},size:{type:String,default:"default"},variant:{type:String,default:"default"}},setup(h){const s=x(null),e=()=>{const k=s.value;k&&(k.vertical=h.vertical,k.justify=h.justify,k.size=h.size,k.variant=h.variant)};return q(async()=>{var p;await customElements.whenDefined("ag-divider"),await c(),e(),await c();const k=s.value;if(k){const r=(p=k.shadowRoot)==null?void 0:p.querySelector("slot");r&&r.dispatchEvent(new Event("slotchange"))}}),S(()=>{s.value&&e()}),{agComponent:s}}});function R(h,s,e,k,p,r){return y(),o("ag-divider",D({ref:"agComponent"},h.$attrs),[b(h.$slots,"default")],16)}const T=B(j,[["render",R]]),L=u({name:"DividerExamples",components:{VueDivider:T}}),$={class:"mbe4"},I={class:"mbe4"},U={class:"mbe4",style:{display:"flex","min-height":"200px"}},N={class:"mbe4"},O={class:"mbe4",style:{display:"flex",gap:"1rem","min-height":"150px"}},H={class:"mbe4"},J={class:"mbe4"},M={style:{display:"flex","min-height":"150px"}};function W(h,s,e,k,p,r){const a=V("VueDivider");return y(),o("section",null,[s[44]||(s[44]=i("div",{class:"mbe4"},[i("h2",null,"Horizontal Dividers")],-1)),i("div",$,[s[0]||(s[0]=i("p",null,"Content above the divider",-1)),t(a),s[1]||(s[1]=i("p",null,"Content below the divider",-1))]),s[45]||(s[45]=i("div",{class:"mbe4"},[i("h2",null,"Horizontal with Content")],-1)),i("div",I,[t(a,null,{default:l(()=>[...s[2]||(s[2]=[n("Centered (default)",-1)])]),_:1}),s[5]||(s[5]=i("div",{class:"mbe2"},null,-1)),t(a,{justify:"start"},{default:l(()=>[...s[3]||(s[3]=[n("Justify Start",-1)])]),_:1}),s[6]||(s[6]=i("div",{class:"mbe2"},null,-1)),t(a,{justify:"end"},{default:l(()=>[...s[4]||(s[4]=[n("Justify End",-1)])]),_:1})]),s[46]||(s[46]=i("div",{class:"mbe4"},[i("h2",null,"Vertical Dividers")],-1)),i("div",U,[s[9]||(s[9]=i("p",{style:{flex:"1"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1)),t(a,{vertical:""},{default:l(()=>[...s[7]||(s[7]=[n("Yes",-1)])]),_:1}),s[10]||(s[10]=i("p",{style:{flex:"1"}},"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",-1)),t(a,{vertical:""},{default:l(()=>[...s[8]||(s[8]=[n("Sir!",-1)])]),_:1}),s[11]||(s[11]=i("p",{style:{flex:"1"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1))]),s[47]||(s[47]=i("div",{class:"mbe4"},[i("h2",null,"Sizes - Horizontal")],-1)),i("div",N,[t(a,{size:"small"},{default:l(()=>[...s[12]||(s[12]=[n("Small",-1)])]),_:1}),s[16]||(s[16]=i("div",{class:"mbe2"},null,-1)),t(a,{size:"default"},{default:l(()=>[...s[13]||(s[13]=[n("Default",-1)])]),_:1}),s[17]||(s[17]=i("div",{class:"mbe2"},null,-1)),t(a,{size:"large"},{default:l(()=>[...s[14]||(s[14]=[n("Large",-1)])]),_:1}),s[18]||(s[18]=i("div",{class:"mbe2"},null,-1)),t(a,{size:"xlarge"},{default:l(()=>[...s[15]||(s[15]=[n("XLarge",-1)])]),_:1})]),s[48]||(s[48]=i("div",{class:"mbe4"},[i("h2",null,"Sizes - Vertical")],-1)),i("div",O,[s[23]||(s[23]=i("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"small"},{default:l(()=>[...s[19]||(s[19]=[n("Sm",-1)])]),_:1}),s[24]||(s[24]=i("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"default"},{default:l(()=>[...s[20]||(s[20]=[n("Def",-1)])]),_:1}),s[25]||(s[25]=i("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"large"},{default:l(()=>[...s[21]||(s[21]=[n("Lg",-1)])]),_:1}),s[26]||(s[26]=i("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"xlarge"},{default:l(()=>[...s[22]||(s[22]=[n("XL",-1)])]),_:1}),s[27]||(s[27]=i("p",{style:{flex:"1"}},"Content",-1))]),s[49]||(s[49]=i("div",{class:"mbe4"},[i("h2",null,"Variants")],-1)),i("div",H,[t(a,{variant:"default"},{default:l(()=>[...s[28]||(s[28]=[n("Default",-1)])]),_:1}),s[34]||(s[34]=i("div",{class:"mbe2"},null,-1)),t(a,{variant:"success"},{default:l(()=>[...s[29]||(s[29]=[n("Success",-1)])]),_:1}),s[35]||(s[35]=i("div",{class:"mbe2"},null,-1)),t(a,{variant:"info"},{default:l(()=>[...s[30]||(s[30]=[n("Info",-1)])]),_:1}),s[36]||(s[36]=i("div",{class:"mbe2"},null,-1)),t(a,{variant:"warning"},{default:l(()=>[...s[31]||(s[31]=[n("Warning",-1)])]),_:1}),s[37]||(s[37]=i("div",{class:"mbe2"},null,-1)),t(a,{variant:"error"},{default:l(()=>[...s[32]||(s[32]=[n("Error",-1)])]),_:1}),s[38]||(s[38]=i("div",{class:"mbe2"},null,-1)),t(a,{variant:"monochrome"},{default:l(()=>[...s[33]||(s[33]=[n("Monochrome",-1)])]),_:1})]),s[50]||(s[50]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization"),i("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the divider's appearance without affecting the component's internal styling. ")],-1)),i("div",J,[t(a,{class:"custom-divider-dotted"},{default:l(()=>[...s[39]||(s[39]=[n("Dotted Pattern",-1)])]),_:1}),s[43]||(s[43]=i("div",{class:"mbe4"},null,-1)),i("div",M,[s[41]||(s[41]=i("p",{style:{flex:"1"}},"Custom vertical gradient divider on the right",-1)),t(a,{class:"custom-divider-vertical",vertical:""},{default:l(()=>[...s[40]||(s[40]=[n("Custom",-1)])]),_:1}),s[42]||(s[42]=i("p",{style:{flex:"1"}},"Styled with CSS Shadow Parts",-1))])])])}const G=w(L,[["render",W]]),as=JSON.parse('{"title":"Divider","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider.md","filePath":"components/divider.md"}'),K={name:"components/divider.md"},ts=Object.assign(K,{setup(h){return(s,e)=>(y(),o("div",null,[e[0]||(e[0]=i("h1",{id:"divider",tabindex:"-1"},[n("Divider "),i("a",{class:"header-anchor",href:"#divider","aria-label":'Permalink to "Divider"'},"​")],-1)),t(C),e[1]||(e[1]=i("p",null,"Divider components visually separate content in your application. They support both horizontal and vertical orientations, optional text or icon content, and can be customized with different sizes and color variants.",-1)),t(G),e[2]||(e[2]=z("",34))]))}});export{as as __pageData,ts as default};
