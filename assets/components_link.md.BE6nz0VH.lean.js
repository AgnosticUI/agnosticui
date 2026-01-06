import{A as f}from"./chunks/AlphaWarning.D199zhtu.js";import{i as L,z as k,a as m,x as F}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{Q as c}from"./chunks/if-defined-C8i28hSj.D90q5KVf.js";import{s as S}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as y,c as b,o as v,r as C,p as E,v as x,s as D,_ as A,C as q,j as e,G as a,w as s,a as n,ae as R,k as g}from"./chunks/framework.CdHt8f9T.js";import{F as V}from"./chunks/FrameworkExample.BEe18gn2.js";var w=Object.defineProperty,d=(l,i,r,h)=>{for(var u=void 0,p=l.length-1,t;p>=0;p--)(t=l[p])&&(u=t(i,r,u)||u);return u&&w(i,r,u),u};const B=class extends m{constructor(){super(),this.href="",this.variant="",this.isButton=!1,this.buttonSize="md",this.buttonShape="",this.buttonBordered=!1,this.external=!1,this.disabled=!1,this.ariaLabel=""}willUpdate(i){super.willUpdate(i),this.isButton||(i.has("buttonSize")&&this.buttonSize,i.has("buttonShape")&&this.buttonShape,i.has("buttonBordered")&&this.buttonBordered)}_handleClick(i){if(this.disabled){i.preventDefault();return}this.onClick&&this.onClick(i)}_handleFocus(i){this.onFocus&&this.onFocus(i);const r=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(r)}_handleBlur(i){this.onBlur&&this.onBlur(i);const r=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(r)}focus(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("a");i&&i.focus()}blur(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("a");i&&i.blur()}render(){return this.disabled?F`
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
`,Li=JSON.parse('{"title":"Link","description":"","frontmatter":{},"headers":[],"relativePath":"components/link.md","filePath":"components/link.md"}'),gi={name:"components/link.md"},Si=Object.assign(gi,{setup(l){return(i,r)=>(v(),b("div",null,[r[1]||(r[1]=e("h1",{id:"link",tabindex:"-1"},[n("Link "),e("a",{class:"header-anchor",href:"#link","aria-label":'Permalink to "Link"'},"​")],-1)),a(f),r[2]||(r[2]=e("p",null,[n("The Link component is a semantic, accessible wrapper around the native HTML "),e("code",null,"<a>"),n(" element that provides consistent styling, variants, and states while preserving native browser accessibility features.")],-1)),r[3]||(r[3]=e("h2",{id:"examples",tabindex:"-1"},[n("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(V,{component:"link","vue-code":g(ui),"lit-code":g(pi),"react-code":g(ci)},{vue:s(()=>[a(di)]),lit:s(()=>[...r[0]||(r[0]=[e("link-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),r[4]||(r[4]=R("",38))]))}});export{Li as __pageData,Si as default};
