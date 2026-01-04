import{A as b}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as y}from"./chunks/lit-element.B0TUrqGF.js";import{z as g}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{e as m}from"./chunks/Badge.CxvHeCO4.js";import{r as v}from"./chunks/motion.styles.BWS49nks.js";import{d as C,p as E,c as f,o as u,r as A,K as w,G as i,w as r,a as n,k as d,j as o,ae as B}from"./chunks/framework.DvJW1jwp.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";var D=Object.defineProperty,k=(a,s,e,p)=>{for(var t=void 0,c=a.length-1,F;c>=0;c--)(F=a[c])&&(t=F(s,e,t)||t);return t&&D(s,e,t),t};const x=class extends m{constructor(){super(),this._observer=null,this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}connectedCallback(){super.connectedCallback(),this._updateTheme(),this._observer=new MutationObserver(s=>{s.forEach(e=>{e.type==="attributes"&&e.attributeName==="data-theme"&&this._updateTheme()})}),this._observer.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}disconnectedCallback(){super.disconnectedCallback(),this._observer&&(this._observer.disconnect(),this._observer=null)}_updateTheme(){var p;const s=document.documentElement.getAttribute("data-theme")==="dark",e=(p=this.shadowRoot)==null?void 0:p.querySelector(".badge");e instanceof HTMLElement&&(e.style.setProperty("--ag-fx-shadow-opacity",s?"0.8":"0.4"),s&&this.variant==="monochrome"?e.style.setProperty("--ag-fx-sweep-color","rgba(0, 0, 0, 0.6)"):e.style.setProperty("--ag-fx-sweep-color","rgba(255, 255, 255, 0.5)"))}firstUpdated(s){super.firstUpdated(s),this._applyFxClasses(),this._applyFxCustomProperties(),this._updateTheme()}updated(s){super.updated(s),(s.has("fx")||s.has("fxDisabled"))&&this._applyFxClasses(),s.has("variant")&&this._updateTheme(),(s.has("fxSpeed")||s.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var e;const s=(e=this.shadowRoot)==null?void 0:e.querySelector(".badge");if(s){const p=[];s.classList.forEach(t=>{t.startsWith("ag-fx-")&&p.push(t)}),p.forEach(t=>s.classList.remove(t)),this.fx&&!this.fxDisabled&&s.classList.add(`ag-fx-${this.fx}`),this.fxDisabled?s.classList.add("ag-fx-disabled"):s.classList.remove("ag-fx-disabled")}}_applyFxCustomProperties(){var e;const s=(e=this.shadowRoot)==null?void 0:e.querySelector(".badge");s instanceof HTMLElement&&(s.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),s.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};x.styles=[v,m.styles,y`
      /* ========================================
         OVERRIDE PARENT HOVER STATES
         Neutralize competing hover effects from core
         ======================================== */

      /* Badge has a brightness filter on hover when interactive */
      :host([interactive]) .badge:hover {
        filter: none;
      }

      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .badge.ag-fx-shimmer {
        overflow: hidden;
        -webkit-mask-image: linear-gradient(
          to right,
        rgba(0, 0, 0, 0) 0%,      /* transparent left edge */
        rgba(0, 0, 0, 0.9) 40%,     /* fade in complete at 40% */
        rgba(0, 0, 0, 0.9) 60%,     /* fade out starts at 60% */
        rgba(0, 0, 0, 0) 100%     /* transparent right edge */
        );
        mask-image: linear-gradient(
          to right,
        rgba(0, 0, 0, 0) 0%,      /* transparent left edge */
        rgba(0, 0, 0, 1) 40%,     /* fade in complete at 40% */
        rgba(0, 0, 0, 1) 60%,     /* fade out starts at 60% */
        rgba(0, 0, 0, 0) 100%     /* transparent right edge */
        );
        /* 40-60% above creates a 20% wide "visible window" with soft 40% fade zones on each side. */
        -webkit-mask-size: 250% 100%;
        mask-size: 250% 100%;
        -webkit-mask-position: 215% 0;
        mask-position: 215% 0;
      }

      /* Ripple needs overflow visible to show expanding ring */
      .badge.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .badge.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .badge.ag-fx-highlight-sweep::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          transparent 30%,
          var(--ag-fx-sweep-color, rgba(255, 255, 255, 0.5)) 50%,
          transparent 70%,
          transparent 100%
        );
        transform: translateX(-100%);
        pointer-events: none;
      }

      /* ========================================
         FX EFFECT CLASSES
         Applied to target element (.badge)
         ======================================== */

      /* 
        Prevent hover flicker: 
        - Use @host for hover detection (doesn't move with animation)
        - Or add animation-play-state to prevent retriggering
      */
      :host([fx="bounce"]) .badge,
      :host([fx="flip"]) .badge,
      :host([fx="jelly"]) .badge {
        /* Animation only plays once per hover */
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects - now triggered by :host instead of .badge */
      :host([fx="bounce"]:hover) .badge {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .badge {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .badge {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .badge {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .badge {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .badge {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .badge {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .badge::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects - require interactive or explicit cursor */
      .badge.ag-fx-press-pop {
        cursor: pointer;
      }

      .badge.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .badge.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .badge.ag-fx-disabled {
        animation: none !important;
      }

      .badge.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .badge.ag-fx-bounce,
        .badge.ag-fx-pulse,
        .badge.ag-fx-jelly,
        .badge.ag-fx-shimmer,
        .badge.ag-fx-glow,
        .badge.ag-fx-flip,
        .badge.ag-fx-ripple,
        .badge.ag-fx-highlight-sweep,
        .badge.ag-fx-press-pop,
        .badge.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let h=x;k([g({type:String,reflect:!0})],h.prototype,"fx");k([g({type:String,attribute:"fx-speed",reflect:!0})],h.prototype,"fxSpeed");k([g({type:String,attribute:"fx-ease",reflect:!0})],h.prototype,"fxEase");k([g({type:Boolean,attribute:"fx-disabled",reflect:!0})],h.prototype,"fxDisabled");customElements.get("ag-badge-fx")||customElements.define("ag-badge-fx",h);const S=["variant","size",".dot",".interactive",".hiddenFromAT","value","max","status-label","live","fx","fx-speed","fx-ease",".fxDisabled"],l=C({__name:"VueBadgeFx",props:{variant:{default:"default"},size:{default:"md"},dot:{type:Boolean,default:!1},value:{default:null},max:{default:99},interactive:{type:Boolean,default:!1},statusLabel:{default:null},live:{default:"off"},hiddenFromAT:{type:Boolean,default:!1},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},setup(a){const s=E(null);return(e,p)=>(u(),f("ag-badge-fx",w({ref_key:"agComponent",ref:s,variant:a.variant,size:a.size,".dot":a.dot,".interactive":a.interactive,".hiddenFromAT":a.hiddenFromAT,value:a.value,max:a.max,"status-label":a.statusLabel,live:a.live,fx:a.fx,"fx-speed":a.fxSpeed,"fx-ease":a.fxEase,".fxDisabled":a.fxDisabled},e.$attrs),[A(e.$slots,"default")],48,S))}}),_={class:"stacked-mobile mbe4"},T={__name:"BadgeFxExamples",setup(a){return(s,e)=>(u(),f("div",_,[i(d(l),{fx:"bounce",variant:"success"},{default:r(()=>[...e[0]||(e[0]=[n("Bounce",-1)])]),_:1}),i(d(l),{fx:"pulse",variant:"info"},{default:r(()=>[...e[1]||(e[1]=[n("Pulse",-1)])]),_:1}),i(d(l),{fx:"jelly","fx-speed":"lg","fx-ease":"spring-sm",variant:"monochrome"},{default:r(()=>[...e[2]||(e[2]=[n("Jelly",-1)])]),_:1}),i(d(l),{fx:"shimmer","fx-speed":"xl",variant:"danger"},{default:r(()=>[...e[3]||(e[3]=[n("Shimmer",-1)])]),_:1}),i(d(l),{fx:"glow",variant:"primary"},{default:r(()=>[...e[4]||(e[4]=[n("Glow",-1)])]),_:1}),i(d(l),{fx:"flip","fx-speed":"lg","fx-ease":"ease-in",variant:"success"},{default:r(()=>[...e[5]||(e[5]=[n("Flip",-1)])]),_:1}),i(d(l),{fx:"ripple",variant:"info"},{default:r(()=>[...e[6]||(e[6]=[n("Ripple",-1)])]),_:1}),i(d(l),{fx:"highlight-sweep","fx-speed":"lg","fx-ease":"ease-out",variant:"monochrome"},{default:r(()=>[...e[7]||(e[7]=[n("Sweep",-1)])]),_:1}),i(d(l),{fx:"press-pop",variant:"default",interactive:""},{default:r(()=>[...e[8]||(e[8]=[n("Press Pop",-1)])]),_:1})]))}},O=JSON.parse('{"title":"BadgeFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge-fx.md","filePath":"components/badge-fx.md"}'),q={name:"components/badge-fx.md"},$=Object.assign(q,{setup(a){return(s,e)=>(u(),f("div",null,[e[0]||(e[0]=o("h1",{id:"badgefx",tabindex:"-1"},[n("BadgeFx "),o("a",{class:"header-anchor",href:"#badgefx","aria-label":'Permalink to "BadgeFx"'},"​")],-1)),i(b),e[1]||(e[1]=o("p",null,"BadgeFx extends the core Badge component with a handful of CSS-only micro-interaction effects.",-1)),e[2]||(e[2]=o("div",{class:"info custom-block"},[o("p",{class:"custom-block-title"},"Opt-in Component"),o("p",null,"BadgeFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),e[3]||(e[3]=o("h2",{id:"examples",tabindex:"-1"},[n("Examples "),o("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(T),e[4]||(e[4]=B("",10))]))}});export{O as __pageData,$ as default};
