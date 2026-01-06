import{A as f}from"./chunks/AlphaWarning.D199zhtu.js";import{i as L,z as k,a as m,x as F}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{Q as c}from"./chunks/if-defined-C8i28hSj.cIUcEGoF.js";import{s as S}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as y,c as b,o as v,r as C,p as E,v as x,s as D,_ as A,C as q,j as e,G as a,w as s,a as n,ae as R,k as g}from"./chunks/framework.CdHt8f9T.js";import{F as V}from"./chunks/FrameworkExample.DHJHO-gg.js";import"./chunks/state-CovhUvdr.DnzyR2fh.js";var w=Object.defineProperty,d=(l,i,r,h)=>{for(var u=void 0,p=l.length-1,t;p>=0;p--)(t=l[p])&&(u=t(i,r,u)||u);return u&&w(i,r,u),u};const B=class extends m{constructor(){super(),this.href="",this.variant="",this.isButton=!1,this.buttonSize="md",this.buttonShape="",this.buttonBordered=!1,this.external=!1,this.disabled=!1,this.ariaLabel=""}willUpdate(i){super.willUpdate(i),this.isButton||(i.has("buttonSize")&&this.buttonSize,i.has("buttonShape")&&this.buttonShape,i.has("buttonBordered")&&this.buttonBordered)}_handleClick(i){if(this.disabled){i.preventDefault();return}this.onClick&&this.onClick(i)}_handleFocus(i){this.onFocus&&this.onFocus(i);const r=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(r)}_handleBlur(i){this.onBlur&&this.onBlur(i);const r=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(r)}focus(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("a");i&&i.focus()}blur(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("a");i&&i.blur()}render(){return this.disabled?F`
        <span
          part="ag-link"
          role="link"
          aria-disabled="true"
          aria-label=${c(this.ariaLabel||void 0)}
        >
          <slot></slot>
        </span>
      `:F`
      <a
        href=${this.href}
        part="ag-link"
        rel=${c(this.external?"noopener noreferrer":void 0)}
        target=${c(this.external?"_blank":void 0)}
        aria-label=${c(this.ariaLabel||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </a>
    `}};B.styles=L`
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
  `;let o=B;d([k({type:String})],o.prototype,"href");d([k({type:String,reflect:!0})],o.prototype,"variant");d([k({type:Boolean,reflect:!0})],o.prototype,"isButton");d([k({type:String,reflect:!0})],o.prototype,"buttonSize");d([k({type:String,reflect:!0})],o.prototype,"buttonShape");d([k({type:Boolean,reflect:!0})],o.prototype,"buttonBordered");d([k({type:Boolean,reflect:!0})],o.prototype,"external");d([k({type:Boolean,reflect:!0})],o.prototype,"disabled");d([k({type:String,reflect:!0,attribute:"aria-label"})],o.prototype,"ariaLabel");d([k({attribute:!1})],o.prototype,"onClick");d([k({attribute:!1})],o.prototype,"onFocus");d([k({attribute:!1})],o.prototype,"onBlur");customElements.get("ag-link")||customElements.define("ag-link",o);const z=y({name:"VueLink",props:{href:{type:String,default:""},variant:{type:String,default:""},isButton:{type:Boolean,default:!1},buttonSize:{type:String,default:"md"},buttonShape:{type:String,default:""},buttonBordered:{type:Boolean,default:!1},external:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{type:String,default:""}},emits:["click","focus","blur"],setup(l,{emit:i}){const r=E(null);return x(()=>{r.value&&(r.value.addEventListener("click",h=>i("click",h)),r.value.addEventListener("focus",h=>i("focus",h)),r.value.addEventListener("blur",h=>i("blur",h)))}),D(()=>{r.value&&(r.value.href=l.href,r.value.variant=l.variant,r.value.isButton=l.isButton,r.value.buttonSize=l.buttonSize,r.value.buttonShape=l.buttonShape,r.value.buttonBordered=l.buttonBordered,r.value.external=l.external,r.value.disabled=l.disabled,r.value.ariaLabel=l.ariaLabel)}),{agComponent:r}}}),P={ref:"agComponent"};function M(l,i,r,h,u,p){return v(),b("ag-link",P,[C(l.$slots,"default")],512)}const O=S(z,[["render",M]]),N=y({name:"LinkExamples",components:{VueLink:O}}),W={class:"mbe4"},T={class:"stacked-mobile"},I={class:"mbe4"},_={class:"stacked-mobile"},$={class:"mbe4"},H={class:"stacked-mobile"},G={class:"mbe4"},U={class:"stacked-mobile"},j={class:"mbe4"},K={class:"stacked-mobile"},J={class:"mbe4"},Q={class:"stacked-mobile"},X={class:"mbe4"},Y={class:"stacked-mobile"},Z={class:"mbe4"},ii={class:"stacked-mobile"},ni={class:"mbe4"},ti={class:"stacked-mobile"},ai={class:"mbe4"},si={class:"stacked-mobile"},ei={class:"mbe4"},ri={class:"stacked-mobile"},li={class:"mbe4"},oi={class:"stacked-mobile"};function ki(l,i,r,h,u,p){const t=q("VueLink");return v(),b("section",null,[e("div",W,[i[3]||(i[3]=e("h2",null,"Basic Links",-1)),e("div",T,[a(t,{href:"#link"},{default:s(()=>[...i[0]||(i[0]=[n("Home",-1)])]),_:1}),a(t,{href:"#link"},{default:s(()=>[...i[1]||(i[1]=[n("About",-1)])]),_:1}),a(t,{href:"#link"},{default:s(()=>[...i[2]||(i[2]=[n("Contact",-1)])]),_:1})])]),e("div",I,[i[9]||(i[9]=e("h2",null,"Variant Links",-1)),e("div",_,[a(t,{href:"#link",variant:"primary"},{default:s(()=>[...i[4]||(i[4]=[n("Primary Link",-1)])]),_:1}),a(t,{href:"#link",variant:"success"},{default:s(()=>[...i[5]||(i[5]=[n("Success Link",-1)])]),_:1}),a(t,{href:"#link",variant:"warning"},{default:s(()=>[...i[6]||(i[6]=[n("Warning Link",-1)])]),_:1}),a(t,{href:"#link",variant:"danger"},{default:s(()=>[...i[7]||(i[7]=[n("Danger Link",-1)])]),_:1}),a(t,{href:"#link",variant:"monochrome"},{default:s(()=>[...i[8]||(i[8]=[n("Monochrome Link",-1)])]),_:1})])]),e("div",$,[i[16]||(i[16]=e("h2",null,"Button-Style Links",-1)),e("div",H,[a(t,{href:"#link",isButton:!0},{default:s(()=>[...i[10]||(i[10]=[n("Default Button",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,variant:"primary"},{default:s(()=>[...i[11]||(i[11]=[n("Primary Button",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,variant:"success"},{default:s(()=>[...i[12]||(i[12]=[n("Success Button",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,variant:"warning"},{default:s(()=>[...i[13]||(i[13]=[n("Warning Button",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,variant:"danger"},{default:s(()=>[...i[14]||(i[14]=[n("Danger Button",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,variant:"monochrome"},{default:s(()=>[...i[15]||(i[15]=[n("Monochrome Button",-1)])]),_:1})])]),e("div",G,[i[22]||(i[22]=e("h2",null,"Button Sizes",-1)),e("div",U,[a(t,{href:"#link",isButton:!0,buttonSize:"x-sm",variant:"primary"},{default:s(()=>[...i[17]||(i[17]=[n(" Extra Small ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonSize:"sm",variant:"primary"},{default:s(()=>[...i[18]||(i[18]=[n(" Small ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonSize:"md",variant:"primary"},{default:s(()=>[...i[19]||(i[19]=[n(" Medium ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonSize:"lg",variant:"primary"},{default:s(()=>[...i[20]||(i[20]=[n(" Large ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonSize:"xl",variant:"primary"},{default:s(()=>[...i[21]||(i[21]=[n(" Extra Large ",-1)])]),_:1})])]),e("div",j,[i[29]||(i[29]=e("h2",null,"Button Shapes",-1)),e("div",K,[a(t,{href:"#link",isButton:!0,variant:"primary"},{default:s(()=>[...i[23]||(i[23]=[n(" Default ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonShape:"rounded",variant:"primary"},{default:s(()=>[...i[24]||(i[24]=[n(" Rounded ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonShape:"capsule",variant:"primary"},{default:s(()=>[...i[25]||(i[25]=[n(" Capsule ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonShape:"circle",variant:"primary",ariaLabel:"Add"},{default:s(()=>[...i[26]||(i[26]=[n(" + ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonShape:"square",variant:"primary",ariaLabel:"Menu"},{default:s(()=>[...i[27]||(i[27]=[n(" ■ ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonShape:"rounded-square",variant:"primary",ariaLabel:"Settings"},{default:s(()=>[...i[28]||(i[28]=[n(" ▢ ",-1)])]),_:1})])]),e("div",J,[i[35]||(i[35]=e("h2",null,"Bordered Buttons",-1)),e("div",Q,[a(t,{href:"#link",isButton:!0,buttonBordered:!0,variant:"primary"},{default:s(()=>[...i[30]||(i[30]=[n(" Primary Outlined ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonBordered:!0,variant:"success"},{default:s(()=>[...i[31]||(i[31]=[n(" Success Outlined ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonBordered:!0,variant:"warning"},{default:s(()=>[...i[32]||(i[32]=[n(" Warning Outlined ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonBordered:!0,variant:"danger"},{default:s(()=>[...i[33]||(i[33]=[n(" Danger Outlined ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonBordered:!0,variant:"monochrome"},{default:s(()=>[...i[34]||(i[34]=[n(" Monochrome Outlined ",-1)])]),_:1})])]),e("div",X,[i[39]||(i[39]=e("h2",null,"Complex Button Combinations",-1)),e("div",Y,[a(t,{href:"#link",isButton:!0,buttonSize:"lg",buttonShape:"capsule",variant:"primary"},{default:s(()=>[...i[36]||(i[36]=[n(" Large Capsule Button ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonSize:"lg",buttonShape:"capsule",buttonBordered:!0,variant:"success"},{default:s(()=>[...i[37]||(i[37]=[n(" Large Capsule Outlined ",-1)])]),_:1}),a(t,{href:"#link",isButton:!0,buttonSize:"sm",buttonShape:"rounded",buttonBordered:!0,variant:"warning"},{default:s(()=>[...i[38]||(i[38]=[n(" Small Rounded Outlined ",-1)])]),_:1})])]),e("div",Z,[i[42]||(i[42]=e("h2",null,"External Link",-1)),e("div",ii,[a(t,{href:"https://github.com",external:!0},{default:s(()=>[...i[40]||(i[40]=[n(" External Link → ",-1)])]),_:1}),a(t,{href:"https://github.com",external:!0,isButton:!0,variant:"primary"},{default:s(()=>[...i[41]||(i[41]=[n(" External Button → ",-1)])]),_:1})])]),e("div",ni,[i[46]||(i[46]=e("h2",null,"Disabled Links",-1)),e("div",ti,[a(t,{href:"#link",disabled:!0},{default:s(()=>[...i[43]||(i[43]=[n(" Disabled Link ",-1)])]),_:1}),a(t,{href:"#link",disabled:!0,isButton:!0},{default:s(()=>[...i[44]||(i[44]=[n(" Disabled Button ",-1)])]),_:1}),a(t,{href:"#link",disabled:!0,isButton:!0,variant:"success"},{default:s(()=>[...i[45]||(i[45]=[n(" Disabled Success Button ",-1)])]),_:1})])]),e("div",ai,[i[51]||(i[51]=e("h2",null,"Accessible Icon Links",-1)),e("div",si,[a(t,{href:"#download",ariaLabel:"Download PDF report"},{default:s(()=>[...i[47]||(i[47]=[n(" 📄 ",-1)])]),_:1}),a(t,{href:"#settings",isButton:!0,buttonShape:"circle",variant:"primary",ariaLabel:"Settings"},{default:s(()=>[...i[48]||(i[48]=[n(" ⚙️ ",-1)])]),_:1}),a(t,{href:"#add",isButton:!0,buttonShape:"circle",variant:"success",ariaLabel:"Add new item"},{default:s(()=>[...i[49]||(i[49]=[n(" + ",-1)])]),_:1}),a(t,{href:"#delete",isButton:!0,buttonShape:"circle",variant:"danger",ariaLabel:"Delete"},{default:s(()=>[...i[50]||(i[50]=[n(" × ",-1)])]),_:1})])]),e("div",ei,[i[54]||(i[54]=e("h2",null,"Call-to-Action Pattern",-1)),e("div",ri,[a(t,{href:"#signup",isButton:!0,buttonSize:"lg",buttonShape:"capsule",variant:"primary"},{default:s(()=>[...i[52]||(i[52]=[n(" Get Started Free ",-1)])]),_:1}),a(t,{href:"#learn-more",isButton:!0,buttonSize:"lg",buttonShape:"capsule",buttonBordered:!0,variant:"primary"},{default:s(()=>[...i[53]||(i[53]=[n(" Learn More ",-1)])]),_:1})])]),e("div",li,[i[58]||(i[58]=e("h2",null,"Action Bar Pattern",-1)),e("div",oi,[a(t,{href:"#edit",isButton:!0,buttonSize:"sm",variant:"primary"},{default:s(()=>[...i[55]||(i[55]=[n(" Edit ",-1)])]),_:1}),a(t,{href:"#duplicate",isButton:!0,buttonSize:"sm",buttonBordered:!0},{default:s(()=>[...i[56]||(i[56]=[n(" Duplicate ",-1)])]),_:1}),a(t,{href:"#delete",isButton:!0,buttonSize:"sm",variant:"danger"},{default:s(()=>[...i[57]||(i[57]=[n(" Delete ",-1)])]),_:1})])])])}const di=A(N,[["render",ki],["__scopeId","data-v-d611d7e1"]]);class hi extends m{createRenderRoot(){return this}render(){return F`
      <section>
        <div class="mbe4">
          <h2>Basic Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link">Home</ag-link>
            <ag-link href="#link">About</ag-link>
            <ag-link href="#link">Contact</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variant Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" variant="primary">Primary Link</ag-link>
            <ag-link href="#link" variant="success">Success Link</ag-link>
            <ag-link href="#link" variant="warning">Warning Link</ag-link>
            <ag-link href="#link" variant="danger">Danger Link</ag-link>
            <ag-link href="#link" variant="monochrome">Monochrome Link</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button-Style Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton>Default Button</ag-link>
            <ag-link href="#link" isButton variant="primary">Primary Button</ag-link>
            <ag-link href="#link" isButton variant="success">Success Button</ag-link>
            <ag-link href="#link" isButton variant="warning">Warning Button</ag-link>
            <ag-link href="#link" isButton variant="danger">Danger Button</ag-link>
            <ag-link href="#link" isButton variant="monochrome">Monochrome Button</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button Sizes</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonSize="x-sm" variant="primary">
              Extra Small
            </ag-link>
            <ag-link href="#link" isButton buttonSize="sm" variant="primary">
              Small
            </ag-link>
            <ag-link href="#link" isButton buttonSize="md" variant="primary">
              Medium
            </ag-link>
            <ag-link href="#link" isButton buttonSize="lg" variant="primary">
              Large
            </ag-link>
            <ag-link href="#link" isButton buttonSize="xl" variant="primary">
              Extra Large
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button Shapes</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton variant="primary">
              Default
            </ag-link>
            <ag-link href="#link" isButton buttonShape="rounded" variant="primary">
              Rounded
            </ag-link>
            <ag-link href="#link" isButton buttonShape="capsule" variant="primary">
              Capsule
            </ag-link>
            <ag-link href="#link" isButton buttonShape="circle" variant="primary" ariaLabel="Add">
              +
            </ag-link>
            <ag-link href="#link" isButton buttonShape="square" variant="primary" ariaLabel="Menu">
              ■
            </ag-link>
            <ag-link href="#link" isButton buttonShape="rounded-square" variant="primary" ariaLabel="Settings">
              ▢
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Bordered Buttons</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonBordered variant="primary">
              Primary Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="success">
              Success Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="warning">
              Warning Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="danger">
              Danger Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="monochrome">
              Monochrome Outlined
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Complex Button Combinations</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonSize="lg" buttonShape="capsule" variant="primary">
              Large Capsule Button
            </ag-link>
            <ag-link href="#link" isButton buttonSize="lg" buttonShape="capsule" buttonBordered variant="success">
              Large Capsule Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonSize="sm" buttonShape="rounded" buttonBordered variant="warning">
              Small Rounded Outlined
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>External Link</h2>
          <div class="stacked-mobile">
            <ag-link href="https://github.com" external>
              External Link →
            </ag-link>
            <ag-link href="https://github.com" external isButton variant="primary">
              External Button →
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disabled Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" disabled>
              Disabled Link
            </ag-link>
            <ag-link href="#link" disabled isButton>
              Disabled Button
            </ag-link>
            <ag-link href="#link" disabled isButton variant="success">
              Disabled Success Button
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Accessible Icon Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#download" ariaLabel="Download PDF report">
              📄
            </ag-link>
            <ag-link href="#settings" isButton buttonShape="circle" variant="primary" ariaLabel="Settings">
              ⚙️
            </ag-link>
            <ag-link href="#add" isButton buttonShape="circle" variant="success" ariaLabel="Add new item">
              +
            </ag-link>
            <ag-link href="#delete" isButton buttonShape="circle" variant="danger" ariaLabel="Delete">
              ×
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Call-to-Action Pattern</h2>
          <div class="stacked-mobile">
            <ag-link href="#signup" isButton buttonSize="lg" buttonShape="capsule" variant="primary">
              Get Started Free
            </ag-link>
            <ag-link href="#learn-more" isButton buttonSize="lg" buttonShape="capsule" buttonBordered variant="primary">
              Learn More
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Action Bar Pattern</h2>
          <div class="stacked-mobile">
            <ag-link href="#edit" isButton buttonSize="sm" variant="primary">
              Edit
            </ag-link>
            <ag-link href="#duplicate" isButton buttonSize="sm" buttonBordered>
              Duplicate
            </ag-link>
            <ag-link href="#delete" isButton buttonSize="sm" variant="danger">
              Delete
            </ag-link>
          </div>
        </div>
      </section>
    `}}customElements.define("link-lit-examples",hi);const ui=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Links</h2>
      <div class="stacked-mobile">
        <VueLink href="#link">Home</VueLink>
        <VueLink href="#link">About</VueLink>
        <VueLink href="#link">Contact</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Variant Links</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          variant="primary"
        >Primary Link</VueLink>
        <VueLink
          href="#link"
          variant="success"
        >Success Link</VueLink>
        <VueLink
          href="#link"
          variant="warning"
        >Warning Link</VueLink>
        <VueLink
          href="#link"
          variant="danger"
        >Danger Link</VueLink>
        <VueLink
          href="#link"
          variant="monochrome"
        >Monochrome Link</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Button-Style Links</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
        >Default Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="primary"
        >Primary Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="success"
        >Success Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="warning"
        >Warning Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="danger"
        >Danger Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="monochrome"
        >Monochrome Button</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Button Sizes</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="x-sm"
          variant="primary"
        >
          Extra Small
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="sm"
          variant="primary"
        >
          Small
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="md"
          variant="primary"
        >
          Medium
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="lg"
          variant="primary"
        >
          Large
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="xl"
          variant="primary"
        >
          Extra Large
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Button Shapes</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          variant="primary"
        >
          Default
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="rounded"
          variant="primary"
        >
          Rounded
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="capsule"
          variant="primary"
        >
          Capsule
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="circle"
          variant="primary"
          ariaLabel="Add"
        >
          +
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="square"
          variant="primary"
          ariaLabel="Menu"
        >
          ■
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="rounded-square"
          variant="primary"
          ariaLabel="Settings"
        >
          ▢
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Bordered Buttons</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="primary"
        >
          Primary Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="success"
        >
          Success Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="warning"
        >
          Warning Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="danger"
        >
          Danger Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="monochrome"
        >
          Monochrome Outlined
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Complex Button Combinations</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          variant="primary"
        >
          Large Capsule Button
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          :buttonBordered="true"
          variant="success"
        >
          Large Capsule Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="sm"
          buttonShape="rounded"
          :buttonBordered="true"
          variant="warning"
        >
          Small Rounded Outlined
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>External Link</h2>
      <div class="stacked-mobile">
        <VueLink
          href="https://github.com"
          :external="true"
        >
          External Link →
        </VueLink>
        <VueLink
          href="https://github.com"
          :external="true"
          :isButton="true"
          variant="primary"
        >
          External Button →
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Disabled Links</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :disabled="true"
        >
          Disabled Link
        </VueLink>
        <VueLink
          href="#link"
          :disabled="true"
          :isButton="true"
        >
          Disabled Button
        </VueLink>
        <VueLink
          href="#link"
          :disabled="true"
          :isButton="true"
          variant="success"
        >
          Disabled Success Button
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Accessible Icon Links</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#download"
          ariaLabel="Download PDF report"
        >
          📄
        </VueLink>
        <VueLink
          href="#settings"
          :isButton="true"
          buttonShape="circle"
          variant="primary"
          ariaLabel="Settings"
        >
          ⚙️
        </VueLink>
        <VueLink
          href="#add"
          :isButton="true"
          buttonShape="circle"
          variant="success"
          ariaLabel="Add new item"
        >
          +
        </VueLink>
        <VueLink
          href="#delete"
          :isButton="true"
          buttonShape="circle"
          variant="danger"
          ariaLabel="Delete"
        >
          ×
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Call-to-Action Pattern</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#signup"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          variant="primary"
        >
          Get Started Free
        </VueLink>
        <VueLink
          href="#learn-more"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          :buttonBordered="true"
          variant="primary"
        >
          Learn More
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h2>Action Bar Pattern</h2>
      <div class="stacked-mobile">
        <VueLink
          href="#edit"
          :isButton="true"
          buttonSize="sm"
          variant="primary"
        >
          Edit
        </VueLink>
        <VueLink
          href="#duplicate"
          :isButton="true"
          buttonSize="sm"
          :buttonBordered="true"
        >
          Duplicate
        </VueLink>
        <VueLink
          href="#delete"
          :isButton="true"
          buttonSize="sm"
          variant="danger"
        >
          Delete
        </VueLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueLink } from "agnosticui-core/link/vue";

export default defineComponent({
  name: "LinkExamples",
  components: {
    VueLink,
  },
});
<\/script>

<style scoped>
.mbe4 {
  margin-bottom: 2rem;
}

.stacked-mobile {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

h3 {
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
`,pi=`import { LitElement, html } from 'lit';
import 'agnosticui-core/link';

export class LinkLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link">Home</ag-link>
            <ag-link href="#link">About</ag-link>
            <ag-link href="#link">Contact</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variant Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" variant="primary">Primary Link</ag-link>
            <ag-link href="#link" variant="success">Success Link</ag-link>
            <ag-link href="#link" variant="warning">Warning Link</ag-link>
            <ag-link href="#link" variant="danger">Danger Link</ag-link>
            <ag-link href="#link" variant="monochrome">Monochrome Link</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button-Style Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton>Default Button</ag-link>
            <ag-link href="#link" isButton variant="primary">Primary Button</ag-link>
            <ag-link href="#link" isButton variant="success">Success Button</ag-link>
            <ag-link href="#link" isButton variant="warning">Warning Button</ag-link>
            <ag-link href="#link" isButton variant="danger">Danger Button</ag-link>
            <ag-link href="#link" isButton variant="monochrome">Monochrome Button</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button Sizes</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonSize="x-sm" variant="primary">
              Extra Small
            </ag-link>
            <ag-link href="#link" isButton buttonSize="sm" variant="primary">
              Small
            </ag-link>
            <ag-link href="#link" isButton buttonSize="md" variant="primary">
              Medium
            </ag-link>
            <ag-link href="#link" isButton buttonSize="lg" variant="primary">
              Large
            </ag-link>
            <ag-link href="#link" isButton buttonSize="xl" variant="primary">
              Extra Large
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button Shapes</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton variant="primary">
              Default
            </ag-link>
            <ag-link href="#link" isButton buttonShape="rounded" variant="primary">
              Rounded
            </ag-link>
            <ag-link href="#link" isButton buttonShape="capsule" variant="primary">
              Capsule
            </ag-link>
            <ag-link href="#link" isButton buttonShape="circle" variant="primary" ariaLabel="Add">
              +
            </ag-link>
            <ag-link href="#link" isButton buttonShape="square" variant="primary" ariaLabel="Menu">
              ■
            </ag-link>
            <ag-link href="#link" isButton buttonShape="rounded-square" variant="primary" ariaLabel="Settings">
              ▢
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Bordered Buttons</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonBordered variant="primary">
              Primary Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="success">
              Success Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="warning">
              Warning Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="danger">
              Danger Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="monochrome">
              Monochrome Outlined
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Complex Button Combinations</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonSize="lg" buttonShape="capsule" variant="primary">
              Large Capsule Button
            </ag-link>
            <ag-link href="#link" isButton buttonSize="lg" buttonShape="capsule" buttonBordered variant="success">
              Large Capsule Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonSize="sm" buttonShape="rounded" buttonBordered variant="warning">
              Small Rounded Outlined
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>External Link</h2>
          <div class="stacked-mobile">
            <ag-link href="https://github.com" external>
              External Link →
            </ag-link>
            <ag-link href="https://github.com" external isButton variant="primary">
              External Button →
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disabled Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" disabled>
              Disabled Link
            </ag-link>
            <ag-link href="#link" disabled isButton>
              Disabled Button
            </ag-link>
            <ag-link href="#link" disabled isButton variant="success">
              Disabled Success Button
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Accessible Icon Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#download" ariaLabel="Download PDF report">
              📄
            </ag-link>
            <ag-link href="#settings" isButton buttonShape="circle" variant="primary" ariaLabel="Settings">
              ⚙️
            </ag-link>
            <ag-link href="#add" isButton buttonShape="circle" variant="success" ariaLabel="Add new item">
              +
            </ag-link>
            <ag-link href="#delete" isButton buttonShape="circle" variant="danger" ariaLabel="Delete">
              ×
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Call-to-Action Pattern</h2>
          <div class="stacked-mobile">
            <ag-link href="#signup" isButton buttonSize="lg" buttonShape="capsule" variant="primary">
              Get Started Free
            </ag-link>
            <ag-link href="#learn-more" isButton buttonSize="lg" buttonShape="capsule" buttonBordered variant="primary">
              Learn More
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Action Bar Pattern</h2>
          <div class="stacked-mobile">
            <ag-link href="#edit" isButton buttonSize="sm" variant="primary">
              Edit
            </ag-link>
            <ag-link href="#duplicate" isButton buttonSize="sm" buttonBordered>
              Duplicate
            </ag-link>
            <ag-link href="#delete" isButton buttonSize="sm" variant="danger">
              Delete
            </ag-link>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('link-lit-examples', LinkLitExamples);
`,ci=`import { ReactLink } from "agnosticui-core/link/react";

export default function LinkReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Basic Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link">Home</ReactLink>
          <ReactLink href="#link">About</ReactLink>
          <ReactLink href="#link">Contact</ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Variant Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" variant="primary">Primary Link</ReactLink>
          <ReactLink href="#link" variant="success">Success Link</ReactLink>
          <ReactLink href="#link" variant="warning">Warning Link</ReactLink>
          <ReactLink href="#link" variant="danger">Danger Link</ReactLink>
          <ReactLink href="#link" variant="monochrome">Monochrome Link</ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Button-Style Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true}>Default Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="primary">Primary Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="success">Success Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="warning">Warning Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="danger">Danger Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="monochrome">Monochrome Button</ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Button Sizes</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} buttonSize="x-sm" variant="primary">
            Extra Small
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="sm" variant="primary">
            Small
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="md" variant="primary">
            Medium
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="lg" variant="primary">
            Large
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="xl" variant="primary">
            Extra Large
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Button Shapes</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} variant="primary">
            Default
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="rounded" variant="primary">
            Rounded
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="capsule" variant="primary">
            Capsule
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="circle" variant="primary" ariaLabel="Add">
            +
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="square" variant="primary" ariaLabel="Menu">
            ■
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="rounded-square" variant="primary" ariaLabel="Settings">
            ▢
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Bordered Buttons</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="primary">
            Primary Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="success">
            Success Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="warning">
            Warning Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="danger">
            Danger Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="monochrome">
            Monochrome Outlined
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Complex Button Combinations</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} buttonSize="lg" buttonShape="capsule" variant="primary">
            Large Capsule Button
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="lg" buttonShape="capsule" buttonBordered={true} variant="success">
            Large Capsule Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="sm" buttonShape="rounded" buttonBordered={true} variant="warning">
            Small Rounded Outlined
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>External Link</h2>
        <div className="stacked-mobile">
          <ReactLink href="https://github.com" external={true}>
            External Link →
          </ReactLink>
          <ReactLink href="https://github.com" external={true} isButton={true} variant="primary">
            External Button →
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Disabled Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" disabled={true}>
            Disabled Link
          </ReactLink>
          <ReactLink href="#link" disabled={true} isButton={true}>
            Disabled Button
          </ReactLink>
          <ReactLink href="#link" disabled={true} isButton={true} variant="success">
            Disabled Success Button
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Accessible Icon Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#download" ariaLabel="Download PDF report">
            📄
          </ReactLink>
          <ReactLink href="#settings" isButton={true} buttonShape="circle" variant="primary" ariaLabel="Settings">
            ⚙️
          </ReactLink>
          <ReactLink href="#add" isButton={true} buttonShape="circle" variant="success" ariaLabel="Add new item">
            +
          </ReactLink>
          <ReactLink href="#delete" isButton={true} buttonShape="circle" variant="danger" ariaLabel="Delete">
            ×
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Call-to-Action Pattern</h2>
        <div className="stacked-mobile">
          <ReactLink href="#signup" isButton={true} buttonSize="lg" buttonShape="capsule" variant="primary">
            Get Started Free
          </ReactLink>
          <ReactLink href="#learn-more" isButton={true} buttonSize="lg" buttonShape="capsule" buttonBordered={true} variant="primary">
            Learn More
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Action Bar Pattern</h2>
        <div className="stacked-mobile">
          <ReactLink href="#edit" isButton={true} buttonSize="sm" variant="primary">
            Edit
          </ReactLink>
          <ReactLink href="#duplicate" isButton={true} buttonSize="sm" buttonBordered={true}>
            Duplicate
          </ReactLink>
          <ReactLink href="#delete" isButton={true} buttonSize="sm" variant="danger">
            Delete
          </ReactLink>
        </div>
      </div>
    </section>
  );
}
`,Si=JSON.parse('{"title":"Link","description":"","frontmatter":{},"headers":[],"relativePath":"components/link.md","filePath":"components/link.md"}'),gi={name:"components/link.md"},Ci=Object.assign(gi,{setup(l){return(i,r)=>(v(),b("div",null,[r[1]||(r[1]=e("h1",{id:"link",tabindex:"-1"},[n("Link "),e("a",{class:"header-anchor",href:"#link","aria-label":'Permalink to "Link"'},"​")],-1)),a(f),r[2]||(r[2]=e("p",null,[n("The Link component is a semantic, accessible wrapper around the native HTML "),e("code",null,"<a>"),n(" element that provides consistent styling, variants, and states while preserving native browser accessibility features.")],-1)),r[3]||(r[3]=e("h2",{id:"examples",tabindex:"-1"},[n("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(V,{component:"link","vue-code":g(ui),"lit-code":g(pi),"react-code":g(ci)},{vue:s(()=>[a(di)]),lit:s(()=>[...r[0]||(r[0]=[e("link-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),r[4]||(r[4]=R(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
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
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>The Link component relies on native browser events which bubble automatically:</p><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td><code>MouseEvent</code></td><td>Fires when the link is clicked</td></tr><tr><td><code>focus</code></td><td><code>FocusEvent</code></td><td>Fires when the link receives focus</td></tr><tr><td><code>blur</code></td><td><code>FocusEvent</code></td><td>Fires when the link loses focus</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><h3 id="native-semantics" tabindex="-1">Native Semantics <a class="header-anchor" href="#native-semantics" aria-label="Permalink to &quot;Native Semantics&quot;">​</a></h3><ul><li>Renders a native <code>&lt;a&gt;</code> element for proper semantics</li><li>Automatic keyboard navigation (Tab key)</li><li>Screen reader announcements</li><li>Native focus management</li><li>Browser right-click context menu support</li></ul><h3 id="keyboard-navigation" tabindex="-1">Keyboard Navigation <a class="header-anchor" href="#keyboard-navigation" aria-label="Permalink to &quot;Keyboard Navigation&quot;">​</a></h3><ul><li>Links with <code>href</code> are automatically keyboard-focusable</li><li>Clear, visible focus indicator using design token <code>--ag-focus</code></li><li>Enter key activates the link (browser default)</li></ul><h3 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h3><ul><li>When disabled, renders a <code>&lt;span&gt;</code> instead of <code>&lt;a&gt;</code> to remove interactivity</li><li>Adds <code>aria-disabled=&quot;true&quot;</code> and <code>role=&quot;link&quot;</code> for assistive technologies</li><li>Visual styling indicates disabled state</li></ul><h3 id="external-links" tabindex="-1">External Links <a class="header-anchor" href="#external-links" aria-label="Permalink to &quot;External Links&quot;">​</a></h3><ul><li>Automatically adds <code>rel=&quot;noopener noreferrer&quot;</code> and <code>target=&quot;_blank&quot;</code> when <code>external</code> prop is true</li><li>Consider adding visual indicator (e.g., arrow icon) to inform users</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Use descriptive link text that clearly indicates the link&#39;s purpose</li><li>Avoid generic text like &quot;Click Here&quot; or &quot;Learn More&quot; without context</li><li>For icon-only links, provide an <code>aria-label</code></li><li>Do not wrap links around other interactive elements</li><li>Links should be visually distinguishable from non-link text (underlined by default)</li></ul>`,38))]))}});export{Si as __pageData,Ci as default};
