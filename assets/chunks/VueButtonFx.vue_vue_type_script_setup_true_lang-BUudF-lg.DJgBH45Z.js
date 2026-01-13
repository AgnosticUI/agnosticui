import{t as p,i as h,z as f}from"./Button.Bujdzq23.js";import{r as v}from"./motion.styles.VEVGekNg.js";import{d as c,p as m,c as w,q as y,o as k,r as S,K as E}from"./framework.NAAYCHZu.js";var B=Object.defineProperty,g=(a,e,s,r)=>{for(var o=void 0,n=a.length-1,d;n>=0;n--)(d=a[n])&&(o=d(e,s,o)||o);return o&&B(e,s,o),o};const u=class extends p{constructor(){super(),this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}firstUpdated(){this._applyFxClasses(),this._applyFxCustomProperties()}updated(e){super.updated(e),(e.has("fx")||e.has("fxDisabled"))&&this._applyFxClasses(),(e.has("fxSpeed")||e.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("button");e&&(e.classList.forEach(r=>{r.startsWith("ag-fx-")&&e.classList.remove(r)}),this.fx&&e.classList.add(`ag-fx-${this.fx}`),this.fxDisabled&&e.classList.add("ag-fx-disabled"))}_applyFxCustomProperties(){var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("button");e instanceof HTMLElement&&(e.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),e.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};u.styles=[v,p.styles,h`
      /* ========================================
         OVERRIDE PARENT HOVER BACKGROUNDS
         These compete with FX effects like highlight-sweep, slide-in, etc.
         We need to keep these using :host() for variant attribute selectors
         ======================================== */

      :host([variant="primary"]) button:hover {
        background: var(--ag-primary-dark);
      }

      :host([variant="secondary"]) button:hover {
        background: var(--ag-neutral-500);
      }

      :host([variant="success"]) button:hover {
        background: var(--ag-success-dark);
      }

      :host([variant="warning"]) button:hover {
         background: var(--ag-warning-dark);
      }

      :host([variant="danger"]) button:hover {
        background: var(--ag-danger);
      }

      :host([variant="monochrome"]) button:hover {
        background: var(--ag-background-secondary-inverted);
      }

      /* ========================================
         FX EFFECT CLASSES
         Classes are applied directly to button element
         Note: Keyframes are imported from motionStyles
         ======================================== */

      /* Hover-triggered effects */
      button.ag-fx-bounce:hover {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-pulse:hover {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-jelly:hover {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press-triggered effects */
      button.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effect - plays once on mount */
      button.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* ========================================
         ADDITIONAL EFFECT CLASSES
         ======================================== */

      /* Grow */
      button.ag-fx-grow:hover {
        animation: ag-fx-grow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Shrink */
      button.ag-fx-shrink:hover {
        animation: ag-fx-shrink var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Push */
      button.ag-fx-push:hover {
        animation: ag-fx-push var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Background slide */
      button.ag-fx-bg-slide {
        position: relative;
        overflow: hidden;
      }

      /* Background (bottom to top) and Side (left to right) slides share */
      button.ag-fx-side-slide::before,
      button.ag-fx-bg-slide::before {
        content: '';
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.25);
        /* Use ease-out for slides to prevent spring overshoot which causes visual glitches */
        transition: transform var(--ag-fx-duration, 200ms) ease-out;
      }

      button.ag-fx-bg-slide::before {
        transform: translateY(100%);
      }

      button.ag-fx-bg-slide:hover::before {
        transform: translateY(0);
      }

      /* Side slide */
      button.ag-fx-side-slide {
        position: relative;
        overflow: hidden;
      }

      button.ag-fx-side-slide::before {
        transform: translateX(-100%);
      }

      button.ag-fx-side-slide:hover::before {
        transform: translateX(0);
      }

      /* RTL Support - flip side-slide direction */
      :host-context([dir="rtl"]) button.ag-fx-side-slide::before {
        transform: translateX(100%);
      }

      /* Press shadow - animates shadow on active/press with variant colors */
      :host([variant="primary"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(5, 80, 174, 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="primary"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(5, 80, 174, 0.5);
      }

      :host([variant="success"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-success-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="success"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-success-rgb), 0.5);
      }

      :host([variant="warning"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-warning-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="warning"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-warning-rgb), 0.5);
      }

      :host([variant="danger"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-danger-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="danger"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-danger-rgb), 0.5);
      }

      /* Fallback for other variants without RGB tokens */
      :host([variant="secondary"]) button.ag-fx-press-shadow,
      :host([variant="monochrome"]) button.ag-fx-press-shadow,
      :host(:not([variant])) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="secondary"]) button.ag-fx-press-shadow:active,
      :host([variant="monochrome"]) button.ag-fx-press-shadow:active,
      :host(:not([variant])) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(0, 0, 0, 0.2);
      }

      /* Shake */
      button.ag-fx-shake:hover {
        animation: ag-fx-shake var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Wobble */
      button.ag-fx-wobble:hover {
        animation: ag-fx-wobble var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Pulse-Wobble Sequential */
      button.ag-fx-pulse-wobble:hover {
        animation: ag-fx-pulse-wobble var(--ag-fx-duration, 400ms) var(--ag-fx-ease-spring-md);
      }

      /* Disabled FX */
      button.ag-fx-disabled {
        animation: none !important;
      }

      button.ag-fx-disabled::after {
        animation: none !important;
      }

      /* Automatic reduced-motion support */
      @media (prefers-reduced-motion: reduce) {
        button.ag-fx-bounce,
        button.ag-fx-pulse,
        button.ag-fx-jelly,
        button.ag-fx-press-pop,
        button.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let i=u;g([f({type:String,reflect:!0})],i.prototype,"fx");g([f({type:String,attribute:"fx-speed"})],i.prototype,"fxSpeed");g([f({type:String,attribute:"fx-ease"})],i.prototype,"fxEase");g([f({type:Boolean,reflect:!0,attribute:"fx-disabled"})],i.prototype,"fxDisabled");customElements.get("ag-button-fx")||customElements.define("ag-button-fx",i);const F=[".disabled",".loading",".toggle",".pressed",".bordered",".ghost",".link",".grouped",".ariaLabel",".fx",".fxDisabled","type","variant","size","shape","fx-speed","fx-ease"],R=c({__name:"VueButtonFx",props:{variant:{default:""},size:{default:"md"},shape:{default:""},bordered:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},link:{type:Boolean,default:!1},grouped:{type:Boolean,default:!1},type:{default:"button"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},toggle:{type:Boolean,default:!1},pressed:{type:Boolean,default:!1},ariaLabel:{default:""},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},emits:["click","focus","blur","toggle","update:pressed"],setup(a,{emit:e}){const s=a,r=e,o=m(),n=t=>{r("click",t)},d=t=>{r("focus",t)},x=t=>{r("blur",t)},b=t=>{const l=t;r("toggle",l.detail),r("update:pressed",l.detail.pressed)};return y(()=>s.pressed,t=>{o.value&&s.toggle&&(o.value.pressed=t)}),(t,l)=>(k(),w("ag-button-fx",E({ref_key:"buttonFxRef",ref:o,".disabled":a.disabled,".loading":a.loading,".toggle":a.toggle,".pressed":a.pressed,".bordered":a.bordered,".ghost":a.ghost,".link":a.link,".grouped":a.grouped,".ariaLabel":a.ariaLabel,".fx":a.fx,".fxDisabled":a.fxDisabled,type:a.type,variant:a.variant,size:a.size,shape:a.shape,"fx-speed":a.fxSpeed,"fx-ease":a.fxEase,onClick:n,onFocus:d,onBlur:x,onToggle:b},t.$attrs),[S(t.$slots,"default")],48,F))}});export{R as k};
