import{i as v,z as o,a as h,Q as d,x as c}from"./Button.DkmThuAs.js";import{s as p}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as b,c as f,o as B,r as m,p as y,v as k,s as x}from"./framework.NAAYCHZu.js";var w=Object.defineProperty,n=(r,t,a,i)=>{for(var s=void 0,u=r.length-1,l;u>=0;u--)(l=r[u])&&(s=l(t,a,s)||s);return s&&w(t,a,s),s};const g=class extends h{constructor(){super(),this.href="",this.variant="",this.isButton=!1,this.buttonSize="md",this.buttonShape="",this.buttonBordered=!1,this.external=!1,this.disabled=!1,this.ariaLabel=""}willUpdate(t){super.willUpdate(t),this.isButton||(t.has("buttonSize")&&this.buttonSize,t.has("buttonShape")&&this.buttonShape,t.has("buttonBordered")&&this.buttonBordered)}_handleClick(t){if(this.disabled){t.preventDefault();return}this.onClick&&this.onClick(t)}_handleFocus(t){this.onFocus&&this.onFocus(t);const a=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(a)}_handleBlur(t){this.onBlur&&this.onBlur(t);const a=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(a)}focus(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("a");t&&t.focus()}blur(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("a");t&&t.blur()}render(){return this.disabled?c`
        <span
          part="ag-link"
          role="link"
          aria-disabled="true"
          aria-label=${d(this.ariaLabel||void 0)}
        >
          <slot></slot>
        </span>
      `:c`
      <a
        href=${this.href}
        part="ag-link"
        rel=${d(this.external?"noopener noreferrer":void 0)}
        target=${d(this.external?"_blank":void 0)}
        aria-label=${d(this.ariaLabel||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </a>
    `}};g.styles=v`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      display: inline;
    }

    a {
      /* Base link styles */
      font-size: var(--ag-font-size-sm);
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
  `;let e=g;n([o({type:String})],e.prototype,"href");n([o({type:String,reflect:!0})],e.prototype,"variant");n([o({type:Boolean,reflect:!0})],e.prototype,"isButton");n([o({type:String,reflect:!0})],e.prototype,"buttonSize");n([o({type:String,reflect:!0})],e.prototype,"buttonShape");n([o({type:Boolean,reflect:!0})],e.prototype,"buttonBordered");n([o({type:Boolean,reflect:!0})],e.prototype,"external");n([o({type:Boolean,reflect:!0})],e.prototype,"disabled");n([o({type:String,reflect:!0,attribute:"aria-label"})],e.prototype,"ariaLabel");n([o({attribute:!1})],e.prototype,"onClick");n([o({attribute:!1})],e.prototype,"onFocus");n([o({attribute:!1})],e.prototype,"onBlur");customElements.get("ag-link")||customElements.define("ag-link",e);const S=b({name:"VueLink",props:{href:{type:String,default:""},variant:{type:String,default:""},isButton:{type:Boolean,default:!1},buttonSize:{type:String,default:"md"},buttonShape:{type:String,default:""},buttonBordered:{type:Boolean,default:!1},external:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{type:String,default:""}},emits:["click","focus","blur"],setup(r,{emit:t}){const a=y(null);return k(()=>{a.value&&(a.value.addEventListener("click",i=>t("click",i)),a.value.addEventListener("focus",i=>t("focus",i)),a.value.addEventListener("blur",i=>t("blur",i)))}),x(()=>{a.value&&(a.value.href=r.href,a.value.variant=r.variant,a.value.isButton=r.isButton,a.value.buttonSize=r.buttonSize,a.value.buttonShape=r.buttonShape,a.value.buttonBordered=r.buttonBordered,a.value.external=r.external,a.value.disabled=r.disabled,a.value.ariaLabel=r.ariaLabel)}),{agComponent:a}}}),z={ref:"agComponent"};function E(r,t,a,i,s,u){return B(),f("ag-link",z,[m(r.$slots,"default")],512)}const _=p(S,[["render",E]]);export{_ as h};
