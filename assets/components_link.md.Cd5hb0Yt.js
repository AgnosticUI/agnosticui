import{A as B}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as m,a as f,x as y}from"./chunks/lit-element.B0TUrqGF.js";import{z as h}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{Q as F}from"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import{s as C}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as b,c as g,o as c,r as E,p as A,v as q,s as D,_ as x,C as S,j as e,G as a,w as n,a as t,ae as L}from"./chunks/framework.DvJW1jwp.js";var w=Object.defineProperty,d=(r,s,l,k)=>{for(var p=void 0,u=r.length-1,i;u>=0;u--)(i=r[u])&&(p=i(s,l,p)||p);return p&&w(s,l,p),p};const v=class extends f{constructor(){super(),this.href="",this.variant="",this.isButton=!1,this.buttonSize="md",this.buttonShape="",this.buttonBordered=!1,this.external=!1,this.disabled=!1,this.ariaLabel=""}willUpdate(s){super.willUpdate(s),this.isButton||(s.has("buttonSize")&&this.buttonSize,s.has("buttonShape")&&this.buttonShape,s.has("buttonBordered")&&this.buttonBordered)}_handleClick(s){if(this.disabled){s.preventDefault();return}this.onClick&&this.onClick(s)}_handleFocus(s){this.onFocus&&this.onFocus(s);const l=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(l)}_handleBlur(s){this.onBlur&&this.onBlur(s);const l=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(l)}focus(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("a");s&&s.focus()}blur(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("a");s&&s.blur()}render(){return this.disabled?y`
        <span
          part="ag-link"
          role="link"
          aria-disabled="true"
          aria-label=${F(this.ariaLabel||void 0)}
        >
          <slot></slot>
        </span>
      `:y`
      <a
        href=${this.href}
        part="ag-link"
        rel=${F(this.external?"noopener noreferrer":void 0)}
        target=${F(this.external?"_blank":void 0)}
        aria-label=${F(this.ariaLabel||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </a>
    `}};v.styles=m`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      display: inline;
    }

    a {
      /* Base link styles */
      color: var(--ag-primary-text);
      text-decoration: underline;
      cursor: pointer;
      transition-property: color, background-color, border-color, text-decoration-color;
      transition-duration: var(--ag-motion-medium);
    }

    a:hover {
      color: var(--ag-primary-text);
      opacity: 0.85;
    }

    a:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }

    /* Variant styles for standard links */
    :host([variant="primary"]) a {
      color: var(--ag-primary-text);
      font-weight: 600;
    }

    :host([variant="primary"]) a:hover {
      color: var(--ag-primary-text);
      opacity: 0.85;
    }

    :host([variant="success"]) a {
      color: var(--ag-success-text);
      font-weight: 600;
    }

    :host([variant="success"]) a:hover {
      color: var(--ag-success-text);
      opacity: 0.85;
    }

    :host([variant="warning"]) a {
      font-weight: 600;
      color: var(--ag-warning-text);
    }

    :host([variant="warning"]) a:hover {
      color: var(--ag-warning-text);
      opacity: 0.85;
    }

    :host([variant="danger"]) a {
      font-weight: 600;
      color: var(--ag-danger-text);
    }

    :host([variant="danger"]) a:hover {
      color: var(--ag-danger-text);
      opacity: 0.85;
    }

    :host([variant="monochrome"]) a {
      color: var(--ag-text-primary);
      font-weight: 600;
    }

    :host([variant="monochrome"]) a:hover {
      color: var(--ag-text-primary);
      opacity: 0.85;
    }

    /* Button-style link base */
    :host([isButton]) a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: calc(2px + var(--ag-space-2)) var(--ag-space-4);
      background: var(--ag-primary);
      color: var(--ag-white);
      text-decoration: none;
      border: var(--ag-border-width-1) solid transparent;
      font-size: var(--ag-font-size-sm);
      line-height: 1;
      gap: var(--ag-space-1);
    }

    :host([isButton]) a:hover {
      background: var(--ag-primary-dark);
      color: var(--ag-white);
    }

    /* Button variant styles */
    :host([isButton][variant="primary"]) a {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    :host([isButton][variant="primary"]) a:hover {
      background: var(--ag-primary-dark);
    }

    :host([isButton][variant="success"]) a {
      background: var(--ag-success);
      color: var(--ag-white);
    }

    :host([isButton][variant="success"]) a:hover {
      background: var(--ag-success-dark);
    }

    :host([isButton][variant="warning"]) a {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    :host([isButton][variant="warning"]) a:hover {
      background: var(--ag-warning-dark);
    }

    :host([isButton][variant="danger"]) a {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    :host([isButton][variant="danger"]) a:hover {
      background: var(--ag-danger-dark);
    }

    :host([isButton][variant="monochrome"]) a {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
      font-weight: 400;
    }

    :host([isButton][variant="monochrome"]) a:hover {
      background: var(--ag-background-secondary-inverted);
    }

    /* Button size variants */
    :host([isButton][buttonSize="x-sm"]) a {
      font-size: calc(var(--ag-font-size-base) - 0.375rem);
      padding: var(--ag-space-1) var(--ag-space-2);
    }

    :host([isButton][buttonSize="sm"]) a {
      font-size: var(--ag-font-size-xs);
      padding: var(--ag-space-2) var(--ag-space-3);
    }

    :host([isButton][buttonSize="md"]) a {
      font-size: var(--ag-font-size-sm);
      padding: calc(2px + var(--ag-space-2)) var(--ag-space-4);
    }

    :host([isButton][buttonSize="lg"]) a {
      font-size: var(--ag-font-size-base);
      padding: var(--ag-space-3) var(--ag-space-5);
    }

    :host([isButton][buttonSize="xl"]) a {
      font-size: var(--ag-font-size-md);
      padding: var(--ag-space-3) var(--ag-space-6);
    }

    /* Button shape variants */
    :host([isButton][buttonShape="capsule"]) a {
      border-radius: var(--ag-radius-full);
      padding-inline-start: var(--ag-space-5);
      padding-inline-end: var(--ag-space-5);
    }

    :host([isButton][buttonShape="rounded"]) a {
      border-radius: var(--ag-radius-md);
    }

    :host([isButton][buttonShape="circle"]) a {
      border-radius: 50%;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
    }

    :host([isButton][buttonShape="square"]) a {
      border-radius: 0;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
    }

    :host([isButton][buttonShape="rounded-square"]) a {
      border-radius: var(--ag-radius-md);
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
    }

    /* Button bordered variant */
    :host([isButton][buttonBordered]) a {
      background: transparent;
      border: 1px solid var(--ag-neutral-500);
      color: inherit;
    }

    :host([isButton][buttonBordered][variant="primary"]) a {
      color: var(--ag-primary-text);
      border-color: var(--ag-primary-text);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="primary"]) a:hover {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    :host([isButton][buttonBordered][variant="success"]) a {
      color: var(--ag-success-text);
      border-color: var(--ag-success-text);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="success"]) a:hover {
      background: var(--ag-success);
      color: var(--ag-white);
    }

    :host([isButton][buttonBordered][variant="warning"]) a {
      color: var(--ag-warning-text);
      border-color: var(--ag-warning-text);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="warning"]) a:hover {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    :host([isButton][buttonBordered][variant="danger"]) a {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger-text);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="danger"]) a:hover {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    :host([isButton][buttonBordered][variant="monochrome"]) a {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="monochrome"]) a:hover {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* Disabled state */
    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([disabled]) a,
    :host([disabled]) span {
      color: var(--ag-text-muted);
      cursor: not-allowed;
      opacity: 0.6;
      text-decoration: none;
      pointer-events: none;
    }

    :host([disabled][isButton]) a,
    :host([disabled][isButton]) span {
      background: var(--ag-background-disabled);
      color: var(--ag-text-muted);
    }
  `;let o=v;d([h({type:String})],o.prototype,"href");d([h({type:String,reflect:!0})],o.prototype,"variant");d([h({type:Boolean,reflect:!0})],o.prototype,"isButton");d([h({type:String,reflect:!0})],o.prototype,"buttonSize");d([h({type:String,reflect:!0})],o.prototype,"buttonShape");d([h({type:Boolean,reflect:!0})],o.prototype,"buttonBordered");d([h({type:Boolean,reflect:!0})],o.prototype,"external");d([h({type:Boolean,reflect:!0})],o.prototype,"disabled");d([h({type:String,reflect:!0,attribute:"aria-label"})],o.prototype,"ariaLabel");d([h({attribute:!1})],o.prototype,"onClick");d([h({attribute:!1})],o.prototype,"onFocus");d([h({attribute:!1})],o.prototype,"onBlur");customElements.get("ag-link")||customElements.define("ag-link",o);const z=b({name:"VueLink",props:{href:{type:String,default:""},variant:{type:String,default:""},isButton:{type:Boolean,default:!1},buttonSize:{type:String,default:"md"},buttonShape:{type:String,default:""},buttonBordered:{type:Boolean,default:!1},external:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{type:String,default:""}},emits:["click","focus","blur"],setup(r,{emit:s}){const l=A(null);return q(()=>{l.value&&(l.value.addEventListener("click",k=>s("click",k)),l.value.addEventListener("focus",k=>s("focus",k)),l.value.addEventListener("blur",k=>s("blur",k)))}),D(()=>{l.value&&(l.value.href=r.href,l.value.variant=r.variant,l.value.isButton=r.isButton,l.value.buttonSize=r.buttonSize,l.value.buttonShape=r.buttonShape,l.value.buttonBordered=r.buttonBordered,l.value.external=r.external,l.value.disabled=r.disabled,l.value.ariaLabel=r.ariaLabel)}),{agComponent:l}}}),P={ref:"agComponent"};function V(r,s,l,k,p,u){return c(),g("ag-link",P,[E(r.$slots,"default")],512)}const R=C(z,[["render",V]]),T=b({name:"LinkExamples",components:{VueLink:R}}),M={class:"mbe4"},_={class:"stacked-mobile"},$={class:"mbe4"},I={class:"stacked-mobile"},N={class:"mbe4"},O={class:"stacked-mobile"},W={class:"mbe4"},U={class:"stacked-mobile"},H={class:"mbe4"},j={class:"stacked-mobile"},G={class:"mbe4"},K={class:"stacked-mobile"},J={class:"mbe4"},Q={class:"stacked-mobile"},X={class:"mbe4"},Y={class:"stacked-mobile"},Z={class:"mbe4"},ss={class:"stacked-mobile"},is={class:"mbe4"},ts={class:"stacked-mobile"},as={class:"mbe4"},ns={class:"stacked-mobile"},es={class:"mbe4"},ls={class:"stacked-mobile"};function rs(r,s,l,k,p,u){const i=S("VueLink");return c(),g("section",null,[e("div",M,[s[3]||(s[3]=e("h2",null,"Basic Links",-1)),e("div",_,[a(i,{href:"#link"},{default:n(()=>[...s[0]||(s[0]=[t("Home",-1)])]),_:1}),a(i,{href:"#link"},{default:n(()=>[...s[1]||(s[1]=[t("About",-1)])]),_:1}),a(i,{href:"#link"},{default:n(()=>[...s[2]||(s[2]=[t("Contact",-1)])]),_:1})])]),e("div",$,[s[9]||(s[9]=e("h2",null,"Variant Links",-1)),e("div",I,[a(i,{href:"#link",variant:"primary"},{default:n(()=>[...s[4]||(s[4]=[t("Primary Link",-1)])]),_:1}),a(i,{href:"#link",variant:"success"},{default:n(()=>[...s[5]||(s[5]=[t("Success Link",-1)])]),_:1}),a(i,{href:"#link",variant:"warning"},{default:n(()=>[...s[6]||(s[6]=[t("Warning Link",-1)])]),_:1}),a(i,{href:"#link",variant:"danger"},{default:n(()=>[...s[7]||(s[7]=[t("Danger Link",-1)])]),_:1}),a(i,{href:"#link",variant:"monochrome"},{default:n(()=>[...s[8]||(s[8]=[t("Monochrome Link",-1)])]),_:1})])]),e("div",N,[s[16]||(s[16]=e("h2",null,"Button-Style Links",-1)),e("div",O,[a(i,{href:"#link",isButton:!0},{default:n(()=>[...s[10]||(s[10]=[t("Default Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"primary"},{default:n(()=>[...s[11]||(s[11]=[t("Primary Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"success"},{default:n(()=>[...s[12]||(s[12]=[t("Success Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"warning"},{default:n(()=>[...s[13]||(s[13]=[t("Warning Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"danger"},{default:n(()=>[...s[14]||(s[14]=[t("Danger Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"monochrome"},{default:n(()=>[...s[15]||(s[15]=[t("Monochrome Button",-1)])]),_:1})])]),e("div",W,[s[22]||(s[22]=e("h2",null,"Button Sizes",-1)),e("div",U,[a(i,{href:"#link",isButton:!0,buttonSize:"x-sm",variant:"primary"},{default:n(()=>[...s[17]||(s[17]=[t(" Extra Small ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"sm",variant:"primary"},{default:n(()=>[...s[18]||(s[18]=[t(" Small ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"md",variant:"primary"},{default:n(()=>[...s[19]||(s[19]=[t(" Medium ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"lg",variant:"primary"},{default:n(()=>[...s[20]||(s[20]=[t(" Large ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"xl",variant:"primary"},{default:n(()=>[...s[21]||(s[21]=[t(" Extra Large ",-1)])]),_:1})])]),e("div",H,[s[29]||(s[29]=e("h2",null,"Button Shapes",-1)),e("div",j,[a(i,{href:"#link",isButton:!0,variant:"primary"},{default:n(()=>[...s[23]||(s[23]=[t(" Default ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"rounded",variant:"primary"},{default:n(()=>[...s[24]||(s[24]=[t(" Rounded ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"capsule",variant:"primary"},{default:n(()=>[...s[25]||(s[25]=[t(" Capsule ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"circle",variant:"primary",ariaLabel:"Add"},{default:n(()=>[...s[26]||(s[26]=[t(" + ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"square",variant:"primary",ariaLabel:"Menu"},{default:n(()=>[...s[27]||(s[27]=[t(" ■ ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"rounded-square",variant:"primary",ariaLabel:"Settings"},{default:n(()=>[...s[28]||(s[28]=[t(" ▢ ",-1)])]),_:1})])]),e("div",G,[s[35]||(s[35]=e("h2",null,"Bordered Buttons",-1)),e("div",K,[a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"primary"},{default:n(()=>[...s[30]||(s[30]=[t(" Primary Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"success"},{default:n(()=>[...s[31]||(s[31]=[t(" Success Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"warning"},{default:n(()=>[...s[32]||(s[32]=[t(" Warning Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"danger"},{default:n(()=>[...s[33]||(s[33]=[t(" Danger Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"monochrome"},{default:n(()=>[...s[34]||(s[34]=[t(" Monochrome Outlined ",-1)])]),_:1})])]),e("div",J,[s[39]||(s[39]=e("h2",null,"Complex Button Combinations",-1)),e("div",Q,[a(i,{href:"#link",isButton:!0,buttonSize:"lg",buttonShape:"capsule",variant:"primary"},{default:n(()=>[...s[36]||(s[36]=[t(" Large Capsule Button ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"lg",buttonShape:"capsule",buttonBordered:!0,variant:"success"},{default:n(()=>[...s[37]||(s[37]=[t(" Large Capsule Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"sm",buttonShape:"rounded",buttonBordered:!0,variant:"warning"},{default:n(()=>[...s[38]||(s[38]=[t(" Small Rounded Outlined ",-1)])]),_:1})])]),e("div",X,[s[42]||(s[42]=e("h2",null,"External Link",-1)),e("div",Y,[a(i,{href:"https://github.com",external:!0},{default:n(()=>[...s[40]||(s[40]=[t(" External Link → ",-1)])]),_:1}),a(i,{href:"https://github.com",external:!0,isButton:!0,variant:"primary"},{default:n(()=>[...s[41]||(s[41]=[t(" External Button → ",-1)])]),_:1})])]),e("div",Z,[s[46]||(s[46]=e("h2",null,"Disabled Links",-1)),e("div",ss,[a(i,{href:"#link",disabled:!0},{default:n(()=>[...s[43]||(s[43]=[t(" Disabled Link ",-1)])]),_:1}),a(i,{href:"#link",disabled:!0,isButton:!0},{default:n(()=>[...s[44]||(s[44]=[t(" Disabled Button ",-1)])]),_:1}),a(i,{href:"#link",disabled:!0,isButton:!0,variant:"success"},{default:n(()=>[...s[45]||(s[45]=[t(" Disabled Success Button ",-1)])]),_:1})])]),e("div",is,[s[51]||(s[51]=e("h2",null,"Accessible Icon Links",-1)),e("div",ts,[a(i,{href:"#download",ariaLabel:"Download PDF report"},{default:n(()=>[...s[47]||(s[47]=[t(" 📄 ",-1)])]),_:1}),a(i,{href:"#settings",isButton:!0,buttonShape:"circle",variant:"primary",ariaLabel:"Settings"},{default:n(()=>[...s[48]||(s[48]=[t(" ⚙️ ",-1)])]),_:1}),a(i,{href:"#add",isButton:!0,buttonShape:"circle",variant:"success",ariaLabel:"Add new item"},{default:n(()=>[...s[49]||(s[49]=[t(" + ",-1)])]),_:1}),a(i,{href:"#delete",isButton:!0,buttonShape:"circle",variant:"danger",ariaLabel:"Delete"},{default:n(()=>[...s[50]||(s[50]=[t(" × ",-1)])]),_:1})])]),e("div",as,[s[54]||(s[54]=e("h2",null,"Call-to-Action Pattern",-1)),e("div",ns,[a(i,{href:"#signup",isButton:!0,buttonSize:"lg",buttonShape:"capsule",variant:"primary"},{default:n(()=>[...s[52]||(s[52]=[t(" Get Started Free ",-1)])]),_:1}),a(i,{href:"#learn-more",isButton:!0,buttonSize:"lg",buttonShape:"capsule",buttonBordered:!0,variant:"primary"},{default:n(()=>[...s[53]||(s[53]=[t(" Learn More ",-1)])]),_:1})])]),e("div",es,[s[58]||(s[58]=e("h2",null,"Action Bar Pattern",-1)),e("div",ls,[a(i,{href:"#edit",isButton:!0,buttonSize:"sm",variant:"primary"},{default:n(()=>[...s[55]||(s[55]=[t(" Edit ",-1)])]),_:1}),a(i,{href:"#duplicate",isButton:!0,buttonSize:"sm",buttonBordered:!0},{default:n(()=>[...s[56]||(s[56]=[t(" Duplicate ",-1)])]),_:1}),a(i,{href:"#delete",isButton:!0,buttonSize:"sm",variant:"danger"},{default:n(()=>[...s[57]||(s[57]=[t(" Delete ",-1)])]),_:1})])])])}const os=x(T,[["render",rs],["__scopeId","data-v-d611d7e1"]]),ys=JSON.parse('{"title":"Link","description":"","frontmatter":{},"headers":[],"relativePath":"components/link.md","filePath":"components/link.md"}'),hs={name:"components/link.md"},bs=Object.assign(hs,{setup(r){return(s,l)=>(c(),g("div",null,[l[0]||(l[0]=e("h1",{id:"link",tabindex:"-1"},[t("Link "),e("a",{class:"header-anchor",href:"#link","aria-label":'Permalink to "Link"'},"​")],-1)),a(B),l[1]||(l[1]=e("p",null,[t("The Link component is a semantic, accessible wrapper around the native HTML "),e("code",null,"<a>"),t(" element that provides consistent styling, variants, and states while preserving native browser accessibility features.")],-1)),a(os),l[2]||(l[2]=L(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Link</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Go to Home&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Success Link&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://example.com&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> external</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;External Link&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :isButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;Button Link&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :isButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    buttonSize</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;lg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    buttonShape</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;capsule&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Large Capsule Button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :isButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :buttonBordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Bordered Button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueLink } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/link/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueLink }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactLink } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/link/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Go to Home&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Success Link</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://example.com&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> external</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        External Link</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Button Link</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> buttonSize</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;lg&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> buttonShape</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;capsule&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Large Capsule Button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> buttonBordered</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Bordered Button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/link&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Go to Home&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Success Link&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://example.com&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> external</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;External Link&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Button Link&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> buttonSize</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;lg&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> buttonShape</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;capsule&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Large Capsule Button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/action&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> buttonBordered</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Bordered Button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>href</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>URL the link points to</td></tr><tr><td><code>variant</code></td><td><code>&#39;primary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39; | &#39;monochrome&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td><td>Visual style variant</td></tr><tr><td><code>isButton</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Styles the link to look like a button</td></tr><tr><td><code>buttonSize</code></td><td><code>&#39;x-sm&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Size variant for button-style links (only applies when <code>isButton</code> is <code>true</code>)</td></tr><tr><td><code>buttonShape</code></td><td><code>&#39;capsule&#39; | &#39;rounded&#39; | &#39;circle&#39; | &#39;square&#39; | &#39;rounded-square&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td><td>Shape variant for button-style links (only applies when <code>isButton</code> is <code>true</code>)</td></tr><tr><td><code>buttonBordered</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Bordered style for button-style links (only applies when <code>isButton</code> is <code>true</code>)</td></tr><tr><td><code>external</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Indicates external link (adds <code>rel=&quot;noopener noreferrer&quot;</code> and <code>target=&quot;_blank&quot;</code>)</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables the link (renders as span, adds <code>aria-disabled=&quot;true&quot;</code>)</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>ARIA label for accessibility</td></tr><tr><td><code>onClick</code></td><td><code>(event: MouseEvent) =&gt; void</code></td><td><code>undefined</code></td><td>Click event handler</td></tr><tr><td><code>onFocus</code></td><td><code>(event: FocusEvent) =&gt; void</code></td><td><code>undefined</code></td><td>Focus event handler</td></tr><tr><td><code>onBlur</code></td><td><code>(event: FocusEvent) =&gt; void</code></td><td><code>undefined</code></td><td>Blur event handler</td></tr></tbody></table><h3 id="variant-details" tabindex="-1">Variant Details <a class="header-anchor" href="#variant-details" aria-label="Permalink to &quot;Variant Details&quot;">​</a></h3><p>The <code>variant</code> prop controls the color scheme of the link:</p><ul><li><strong><code>primary</code></strong> - Primary brand color (default blue)</li><li><strong><code>success</code></strong> - Success/positive actions (green)</li><li><strong><code>warning</code></strong> - Warning/caution actions (orange/yellow)</li><li><strong><code>danger</code></strong> - Destructive/dangerous actions (red)</li><li><strong><code>monochrome</code></strong> - Neutral grayscale appearance</li><li><strong><code>&#39;&#39;</code> (empty)</strong> - Default styling without variant</li></ul><h3 id="button-specific-props" tabindex="-1">Button-Specific Props <a class="header-anchor" href="#button-specific-props" aria-label="Permalink to &quot;Button-Specific Props&quot;">​</a></h3><p>When <code>isButton</code> is <code>true</code>, you can customize the button appearance:</p><h4 id="button-sizes" tabindex="-1">Button Sizes <a class="header-anchor" href="#button-sizes" aria-label="Permalink to &quot;Button Sizes&quot;">​</a></h4><ul><li><strong><code>x-sm</code></strong> - Extra small button</li><li><strong><code>sm</code></strong> - Small button</li><li><strong><code>md</code></strong> - Medium button (default)</li><li><strong><code>lg</code></strong> - Large button</li><li><strong><code>xl</code></strong> - Extra large button</li></ul><h4 id="button-shapes" tabindex="-1">Button Shapes <a class="header-anchor" href="#button-shapes" aria-label="Permalink to &quot;Button Shapes&quot;">​</a></h4><ul><li><strong><code>&#39;&#39;</code> (default)</strong> - Standard</li><li><strong><code>rounded</code></strong> - Medium rounded corners</li><li><strong><code>capsule</code></strong> - Fully rounded pill shape</li><li><strong><code>circle</code></strong> - Perfect circle (best for icon-only buttons)</li><li><strong><code>square</code></strong> - Sharp corners, square shape</li><li><strong><code>rounded-square</code></strong> - Square with rounded corners</li></ul><h4 id="button-bordered" tabindex="-1">Button Bordered <a class="header-anchor" href="#button-bordered" aria-label="Permalink to &quot;Button Bordered&quot;">​</a></h4><p>When <code>buttonBordered</code> is <code>true</code>, the button has a transparent background with a colored border that matches the variant. On hover, the background fills with the variant color.</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Link text or content</td></tr></tbody></table><h2 id="css-parts" tabindex="-1">CSS Parts <a class="header-anchor" href="#css-parts" aria-label="Permalink to &quot;CSS Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-link</code></td><td>The internal <code>&lt;a&gt;</code> or <code>&lt;span&gt;</code> element</td></tr></tbody></table><p>Use CSS parts to customize the link appearance:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  text-decoration</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-bottom</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> currentColor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Custom gradient link */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  -webkit-background-clip</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  -webkit-text-fill-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">transparent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-clip</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">700</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>The Link component relies on native browser events which bubble automatically:</p><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td><code>MouseEvent</code></td><td>Fires when the link is clicked</td></tr><tr><td><code>focus</code></td><td><code>FocusEvent</code></td><td>Fires when the link receives focus</td></tr><tr><td><code>blur</code></td><td><code>FocusEvent</code></td><td>Fires when the link loses focus</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><h3 id="native-semantics" tabindex="-1">Native Semantics <a class="header-anchor" href="#native-semantics" aria-label="Permalink to &quot;Native Semantics&quot;">​</a></h3><ul><li>Renders a native <code>&lt;a&gt;</code> element for proper semantics</li><li>Automatic keyboard navigation (Tab key)</li><li>Screen reader announcements</li><li>Native focus management</li><li>Browser right-click context menu support</li></ul><h3 id="keyboard-navigation" tabindex="-1">Keyboard Navigation <a class="header-anchor" href="#keyboard-navigation" aria-label="Permalink to &quot;Keyboard Navigation&quot;">​</a></h3><ul><li>Links with <code>href</code> are automatically keyboard-focusable</li><li>Clear, visible focus indicator using design token <code>--ag-focus</code></li><li>Enter key activates the link (browser default)</li></ul><h3 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h3><ul><li>When disabled, renders a <code>&lt;span&gt;</code> instead of <code>&lt;a&gt;</code> to remove interactivity</li><li>Adds <code>aria-disabled=&quot;true&quot;</code> and <code>role=&quot;link&quot;</code> for assistive technologies</li><li>Visual styling indicates disabled state</li></ul><h3 id="external-links" tabindex="-1">External Links <a class="header-anchor" href="#external-links" aria-label="Permalink to &quot;External Links&quot;">​</a></h3><ul><li>Automatically adds <code>rel=&quot;noopener noreferrer&quot;</code> and <code>target=&quot;_blank&quot;</code> when <code>external</code> prop is true</li><li>Consider adding visual indicator (e.g., arrow icon) to inform users</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Use descriptive link text that clearly indicates the link&#39;s purpose</li><li>Avoid generic text like &quot;Click Here&quot; or &quot;Learn More&quot; without context</li><li>For icon-only links, provide an <code>aria-label</code></li><li>Do not wrap links around other interactive elements</li><li>Links should be visually distinguishable from non-link text (underlined by default)</li></ul>`,38))]))}});export{ys as __pageData,bs as default};
