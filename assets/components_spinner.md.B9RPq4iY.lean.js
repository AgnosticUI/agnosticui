import{A as u}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as C,a as m,x as E}from"./chunks/lit-element.B0TUrqGF.js";import{z as o}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{s as b}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as g,c as k,o as r,r as A,p as v,v as f,P as B,s as x,_ as D,C as q,j as a,G as l,ae as S,a as d}from"./chunks/framework.BoyT2Jkt.js";var w=Object.defineProperty,c=(n,s,i,h)=>{for(var e=void 0,p=n.length-1,t;p>=0;p--)(t=n[p])&&(e=t(s,i,e)||e);return e&&w(s,i,e),e};const y=class extends m{constructor(){super(),this.size="default",this.ariaLabel="Loading..."}render(){return E`
      <div
        class="spinner"
        part="ag-spinner"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span class="spinner-label" part="ag-spinner-label">
          <slot>${this.ariaLabel}</slot>
        </span>
      </div>
    `}};y.styles=C`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    .spinner {
      /**
       * Inspiration to utilize grid for this from
       * https://dockyard.com/blog/2020/03/02/accessible-loading-indicatorswith-no-extra-elements
       */
      display: grid;
      grid-template: "content" 100% / auto;
      place-items: center;
      box-sizing: border-box;
    }

    .spinner::before,
    .spinner::after {
      grid-area: content;
      width: var(--ag-space-8); /* 2rem = 32px */
      height: var(--ag-space-8);
      content: "";
      display: block;
      border-radius: 50%;
      border-width: var(--ag-border-width-3);
      border-style: solid;
    }

    /* Size variants */
    :host([size="small"]) .spinner::before,
    :host([size="small"]) .spinner::after {
      width: var(--ag-space-6); /* 1.5rem = 24px */
      height: var(--ag-space-6);
      border-width: var(--ag-border-width-2);
    }

    :host([size="large"]) .spinner::before,
    :host([size="large"]) .spinner::after {
      width: var(--ag-space-10); /* 2.5rem = 40px */
      height: var(--ag-space-10);
      border-width: 4px;
    }

    :host([size="xlarge"]) .spinner::before,
    :host([size="xlarge"]) .spinner::after {
      width: var(--ag-space-14); /* 3.5rem = 56px */
      height: var(--ag-space-14);
      border-width: 6px;
    }

    /**
     * Before is the muted background
     */
    .spinner::before {
      opacity: 0%;
      border-color: var(--spinner-color, var(--ag-text-primary));
    }

    /**
     * After is the inner "snake"
     */
    .spinner::after {
      opacity: 0%;
      border-color: transparent var(--spinner-color, var(--ag-text-primary)) transparent transparent;
      transition: opacity 0.1s;
      pointer-events: none;
      animation: loading-circle 1s ease-in-out infinite;
    }

    /**
     * Setting aria-busy to true results in corresponding opacity change to visually show spinner.
     */
    .spinner[aria-busy="true"]::before {
      opacity: 12%;
    }

    .spinner[aria-busy="true"]::after {
      opacity: 100%;
    }

    @keyframes loading-circle {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion), (update: slow) {
      .spinner::after {
        transition-duration: 0.001ms !important;
      }
    }

    /* Screen reader only text */
    .spinner-label {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `;let F=y;c([o({type:String,reflect:!0})],F.prototype,"size");c([o({type:String,attribute:"aria-label"})],F.prototype,"ariaLabel");customElements.get("ag-spinner")||customElements.define("ag-spinner",F);const z=g({name:"VueSpinner",props:{size:{type:String,default:"default"},ariaLabel:{type:String,default:"Loading..."}},setup(n){const s=v(null),i=()=>{const h=s.value;h&&(h.size=n.size,h.ariaLabel=n.ariaLabel)};return f(async()=>{await customElements.whenDefined("ag-spinner"),await B(),i()}),x(()=>{s.value&&i()}),{agComponent:s}}}),P={ref:"agComponent"};function _(n,s,i,h,e,p){return r(),k("ag-spinner",P,[A(n.$slots,"default")],512)}const L=b(z,[["render",_]]),T=g({name:"SpinnerExamples",components:{VueSpinner:L}}),V={class:"mbe4"},R={class:"mbe4"},N={class:"flex flex-col items-center",style:{gap:"24px"}},I={class:"mbe4"};function $(n,s,i,h,e,p){const t=q("VueSpinner");return r(),k("section",null,[a("div",V,[s[0]||(s[0]=a("h2",null,"Default",-1)),l(t)]),a("div",R,[s[1]||(s[1]=a("h2",null,"Sizes",-1)),a("div",N,[l(t,{size:"small"}),l(t),l(t,{size:"large"}),l(t,{size:"xlarge"})])]),a("div",I,[s[2]||(s[2]=a("h2",null,"CSS Shadow Parts Customization",-1)),s[3]||(s[3]=a("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the spinner's appearance. ",-1)),l(t,{class:"custom-spinner"})])])}const O=D(T,[["render",$]]),H=JSON.parse('{"title":"Spinner","description":"","frontmatter":{},"headers":[],"relativePath":"components/spinner.md","filePath":"components/spinner.md"}'),U={name:"components/spinner.md"},J=Object.assign(U,{setup(n){return(s,i)=>(r(),k("div",null,[i[0]||(i[0]=a("h1",{id:"spinner",tabindex:"-1"},[d("Spinner "),a("a",{class:"header-anchor",href:"#spinner","aria-label":'Permalink to "Spinner"'},"​")],-1)),l(u),i[1]||(i[1]=a("p",null,"A spinner component displays a circular rotating animation to indicate loading state or ongoing activity. Use spinners to provide visual feedback when content is loading, processing, or waiting for a response.",-1)),i[2]||(i[2]=a("h2",{id:"examples",tabindex:"-1"},[d("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),l(O),i[3]||(i[3]=S("",35))]))}});export{H as __pageData,J as default};
