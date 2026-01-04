import{A as B}from"./chunks/AlphaWarning.D199zhtu.js";import{i as m,z as h,a as f,x as y}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{Q as F}from"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import{s as C}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as b,c as g,o as c,r as E,p as A,v as q,s as D,_ as x,C as S,j as e,G as a,w as n,a as t,ae as L}from"./chunks/framework.CdHt8f9T.js";var w=Object.defineProperty,d=(r,s,l,k)=>{for(var p=void 0,u=r.length-1,i;u>=0;u--)(i=r[u])&&(p=i(s,l,p)||p);return p&&w(s,l,p),p};const v=class extends f{constructor(){super(),this.href="",this.variant="",this.isButton=!1,this.buttonSize="md",this.buttonShape="",this.buttonBordered=!1,this.external=!1,this.disabled=!1,this.ariaLabel=""}willUpdate(s){super.willUpdate(s),this.isButton||(s.has("buttonSize")&&this.buttonSize,s.has("buttonShape")&&this.buttonShape,s.has("buttonBordered")&&this.buttonBordered)}_handleClick(s){if(this.disabled){s.preventDefault();return}this.onClick&&this.onClick(s)}_handleFocus(s){this.onFocus&&this.onFocus(s);const l=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(l)}_handleBlur(s){this.onBlur&&this.onBlur(s);const l=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(l)}focus(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("a");s&&s.focus()}blur(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("a");s&&s.blur()}render(){return this.disabled?y`
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
  `;let o=v;d([h({type:String})],o.prototype,"href");d([h({type:String,reflect:!0})],o.prototype,"variant");d([h({type:Boolean,reflect:!0})],o.prototype,"isButton");d([h({type:String,reflect:!0})],o.prototype,"buttonSize");d([h({type:String,reflect:!0})],o.prototype,"buttonShape");d([h({type:Boolean,reflect:!0})],o.prototype,"buttonBordered");d([h({type:Boolean,reflect:!0})],o.prototype,"external");d([h({type:Boolean,reflect:!0})],o.prototype,"disabled");d([h({type:String,reflect:!0,attribute:"aria-label"})],o.prototype,"ariaLabel");d([h({attribute:!1})],o.prototype,"onClick");d([h({attribute:!1})],o.prototype,"onFocus");d([h({attribute:!1})],o.prototype,"onBlur");customElements.get("ag-link")||customElements.define("ag-link",o);const z=b({name:"VueLink",props:{href:{type:String,default:""},variant:{type:String,default:""},isButton:{type:Boolean,default:!1},buttonSize:{type:String,default:"md"},buttonShape:{type:String,default:""},buttonBordered:{type:Boolean,default:!1},external:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{type:String,default:""}},emits:["click","focus","blur"],setup(r,{emit:s}){const l=A(null);return q(()=>{l.value&&(l.value.addEventListener("click",k=>s("click",k)),l.value.addEventListener("focus",k=>s("focus",k)),l.value.addEventListener("blur",k=>s("blur",k)))}),D(()=>{l.value&&(l.value.href=r.href,l.value.variant=r.variant,l.value.isButton=r.isButton,l.value.buttonSize=r.buttonSize,l.value.buttonShape=r.buttonShape,l.value.buttonBordered=r.buttonBordered,l.value.external=r.external,l.value.disabled=r.disabled,l.value.ariaLabel=r.ariaLabel)}),{agComponent:l}}}),P={ref:"agComponent"};function V(r,s,l,k,p,u){return c(),g("ag-link",P,[E(r.$slots,"default")],512)}const R=C(z,[["render",V]]),T=b({name:"LinkExamples",components:{VueLink:R}}),M={class:"mbe4"},_={class:"stacked-mobile"},$={class:"mbe4"},I={class:"stacked-mobile"},N={class:"mbe4"},O={class:"stacked-mobile"},W={class:"mbe4"},U={class:"stacked-mobile"},H={class:"mbe4"},j={class:"stacked-mobile"},G={class:"mbe4"},K={class:"stacked-mobile"},J={class:"mbe4"},Q={class:"stacked-mobile"},X={class:"mbe4"},Y={class:"stacked-mobile"},Z={class:"mbe4"},ss={class:"stacked-mobile"},is={class:"mbe4"},ts={class:"stacked-mobile"},as={class:"mbe4"},ns={class:"stacked-mobile"},es={class:"mbe4"},ls={class:"stacked-mobile"};function rs(r,s,l,k,p,u){const i=S("VueLink");return c(),g("section",null,[e("div",M,[s[3]||(s[3]=e("h2",null,"Basic Links",-1)),e("div",_,[a(i,{href:"#link"},{default:n(()=>[...s[0]||(s[0]=[t("Home",-1)])]),_:1}),a(i,{href:"#link"},{default:n(()=>[...s[1]||(s[1]=[t("About",-1)])]),_:1}),a(i,{href:"#link"},{default:n(()=>[...s[2]||(s[2]=[t("Contact",-1)])]),_:1})])]),e("div",$,[s[9]||(s[9]=e("h2",null,"Variant Links",-1)),e("div",I,[a(i,{href:"#link",variant:"primary"},{default:n(()=>[...s[4]||(s[4]=[t("Primary Link",-1)])]),_:1}),a(i,{href:"#link",variant:"success"},{default:n(()=>[...s[5]||(s[5]=[t("Success Link",-1)])]),_:1}),a(i,{href:"#link",variant:"warning"},{default:n(()=>[...s[6]||(s[6]=[t("Warning Link",-1)])]),_:1}),a(i,{href:"#link",variant:"danger"},{default:n(()=>[...s[7]||(s[7]=[t("Danger Link",-1)])]),_:1}),a(i,{href:"#link",variant:"monochrome"},{default:n(()=>[...s[8]||(s[8]=[t("Monochrome Link",-1)])]),_:1})])]),e("div",N,[s[16]||(s[16]=e("h2",null,"Button-Style Links",-1)),e("div",O,[a(i,{href:"#link",isButton:!0},{default:n(()=>[...s[10]||(s[10]=[t("Default Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"primary"},{default:n(()=>[...s[11]||(s[11]=[t("Primary Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"success"},{default:n(()=>[...s[12]||(s[12]=[t("Success Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"warning"},{default:n(()=>[...s[13]||(s[13]=[t("Warning Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"danger"},{default:n(()=>[...s[14]||(s[14]=[t("Danger Button",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,variant:"monochrome"},{default:n(()=>[...s[15]||(s[15]=[t("Monochrome Button",-1)])]),_:1})])]),e("div",W,[s[22]||(s[22]=e("h2",null,"Button Sizes",-1)),e("div",U,[a(i,{href:"#link",isButton:!0,buttonSize:"x-sm",variant:"primary"},{default:n(()=>[...s[17]||(s[17]=[t(" Extra Small ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"sm",variant:"primary"},{default:n(()=>[...s[18]||(s[18]=[t(" Small ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"md",variant:"primary"},{default:n(()=>[...s[19]||(s[19]=[t(" Medium ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"lg",variant:"primary"},{default:n(()=>[...s[20]||(s[20]=[t(" Large ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"xl",variant:"primary"},{default:n(()=>[...s[21]||(s[21]=[t(" Extra Large ",-1)])]),_:1})])]),e("div",H,[s[29]||(s[29]=e("h2",null,"Button Shapes",-1)),e("div",j,[a(i,{href:"#link",isButton:!0,variant:"primary"},{default:n(()=>[...s[23]||(s[23]=[t(" Default ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"rounded",variant:"primary"},{default:n(()=>[...s[24]||(s[24]=[t(" Rounded ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"capsule",variant:"primary"},{default:n(()=>[...s[25]||(s[25]=[t(" Capsule ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"circle",variant:"primary",ariaLabel:"Add"},{default:n(()=>[...s[26]||(s[26]=[t(" + ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"square",variant:"primary",ariaLabel:"Menu"},{default:n(()=>[...s[27]||(s[27]=[t(" ■ ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonShape:"rounded-square",variant:"primary",ariaLabel:"Settings"},{default:n(()=>[...s[28]||(s[28]=[t(" ▢ ",-1)])]),_:1})])]),e("div",G,[s[35]||(s[35]=e("h2",null,"Bordered Buttons",-1)),e("div",K,[a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"primary"},{default:n(()=>[...s[30]||(s[30]=[t(" Primary Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"success"},{default:n(()=>[...s[31]||(s[31]=[t(" Success Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"warning"},{default:n(()=>[...s[32]||(s[32]=[t(" Warning Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"danger"},{default:n(()=>[...s[33]||(s[33]=[t(" Danger Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonBordered:!0,variant:"monochrome"},{default:n(()=>[...s[34]||(s[34]=[t(" Monochrome Outlined ",-1)])]),_:1})])]),e("div",J,[s[39]||(s[39]=e("h2",null,"Complex Button Combinations",-1)),e("div",Q,[a(i,{href:"#link",isButton:!0,buttonSize:"lg",buttonShape:"capsule",variant:"primary"},{default:n(()=>[...s[36]||(s[36]=[t(" Large Capsule Button ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"lg",buttonShape:"capsule",buttonBordered:!0,variant:"success"},{default:n(()=>[...s[37]||(s[37]=[t(" Large Capsule Outlined ",-1)])]),_:1}),a(i,{href:"#link",isButton:!0,buttonSize:"sm",buttonShape:"rounded",buttonBordered:!0,variant:"warning"},{default:n(()=>[...s[38]||(s[38]=[t(" Small Rounded Outlined ",-1)])]),_:1})])]),e("div",X,[s[42]||(s[42]=e("h2",null,"External Link",-1)),e("div",Y,[a(i,{href:"https://github.com",external:!0},{default:n(()=>[...s[40]||(s[40]=[t(" External Link → ",-1)])]),_:1}),a(i,{href:"https://github.com",external:!0,isButton:!0,variant:"primary"},{default:n(()=>[...s[41]||(s[41]=[t(" External Button → ",-1)])]),_:1})])]),e("div",Z,[s[46]||(s[46]=e("h2",null,"Disabled Links",-1)),e("div",ss,[a(i,{href:"#link",disabled:!0},{default:n(()=>[...s[43]||(s[43]=[t(" Disabled Link ",-1)])]),_:1}),a(i,{href:"#link",disabled:!0,isButton:!0},{default:n(()=>[...s[44]||(s[44]=[t(" Disabled Button ",-1)])]),_:1}),a(i,{href:"#link",disabled:!0,isButton:!0,variant:"success"},{default:n(()=>[...s[45]||(s[45]=[t(" Disabled Success Button ",-1)])]),_:1})])]),e("div",is,[s[51]||(s[51]=e("h2",null,"Accessible Icon Links",-1)),e("div",ts,[a(i,{href:"#download",ariaLabel:"Download PDF report"},{default:n(()=>[...s[47]||(s[47]=[t(" 📄 ",-1)])]),_:1}),a(i,{href:"#settings",isButton:!0,buttonShape:"circle",variant:"primary",ariaLabel:"Settings"},{default:n(()=>[...s[48]||(s[48]=[t(" ⚙️ ",-1)])]),_:1}),a(i,{href:"#add",isButton:!0,buttonShape:"circle",variant:"success",ariaLabel:"Add new item"},{default:n(()=>[...s[49]||(s[49]=[t(" + ",-1)])]),_:1}),a(i,{href:"#delete",isButton:!0,buttonShape:"circle",variant:"danger",ariaLabel:"Delete"},{default:n(()=>[...s[50]||(s[50]=[t(" × ",-1)])]),_:1})])]),e("div",as,[s[54]||(s[54]=e("h2",null,"Call-to-Action Pattern",-1)),e("div",ns,[a(i,{href:"#signup",isButton:!0,buttonSize:"lg",buttonShape:"capsule",variant:"primary"},{default:n(()=>[...s[52]||(s[52]=[t(" Get Started Free ",-1)])]),_:1}),a(i,{href:"#learn-more",isButton:!0,buttonSize:"lg",buttonShape:"capsule",buttonBordered:!0,variant:"primary"},{default:n(()=>[...s[53]||(s[53]=[t(" Learn More ",-1)])]),_:1})])]),e("div",es,[s[58]||(s[58]=e("h2",null,"Action Bar Pattern",-1)),e("div",ls,[a(i,{href:"#edit",isButton:!0,buttonSize:"sm",variant:"primary"},{default:n(()=>[...s[55]||(s[55]=[t(" Edit ",-1)])]),_:1}),a(i,{href:"#duplicate",isButton:!0,buttonSize:"sm",buttonBordered:!0},{default:n(()=>[...s[56]||(s[56]=[t(" Duplicate ",-1)])]),_:1}),a(i,{href:"#delete",isButton:!0,buttonSize:"sm",variant:"danger"},{default:n(()=>[...s[57]||(s[57]=[t(" Delete ",-1)])]),_:1})])])])}const os=x(T,[["render",rs],["__scopeId","data-v-d611d7e1"]]),cs=JSON.parse('{"title":"Link","description":"","frontmatter":{},"headers":[],"relativePath":"components/link.md","filePath":"components/link.md"}'),hs={name:"components/link.md"},ys=Object.assign(hs,{setup(r){return(s,l)=>(c(),g("div",null,[l[0]||(l[0]=e("h1",{id:"link",tabindex:"-1"},[t("Link "),e("a",{class:"header-anchor",href:"#link","aria-label":'Permalink to "Link"'},"​")],-1)),a(B),l[1]||(l[1]=e("p",null,[t("The Link component is a semantic, accessible wrapper around the native HTML "),e("code",null,"<a>"),t(" element that provides consistent styling, variants, and states while preserving native browser accessibility features.")],-1)),a(os),l[2]||(l[2]=L("",38))]))}});export{cs as __pageData,ys as default};
