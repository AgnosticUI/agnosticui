import{A as u}from"./chunks/AlphaWarning.D199zhtu.js";import{i as y,z as k,a as m,x as b}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{s as f}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as c,c as d,o as h,r as v,K as C,p as A,v as x,P as E,s as L,_ as D,C as z,j as e,G as l,ae as _,a as S}from"./chunks/framework.CdHt8f9T.js";var w=Object.defineProperty,g=(i,s,a,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(s,a,t)||t);return t&&w(s,a,t),t};const F=class extends m{constructor(){super(...arguments),this.size="default",this.ariaLabel="Loading..."}render(){return b`
      <div
        class="loader"
        part="ag-loader"
        aria-busy="true"
      >
        <span class="loader-label" role="progressbar" aria-label="Loading" part="ag-loader-label">
          <slot>${this.ariaLabel}</slot>
        </span>
      </div>
    `}};F.styles=y`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    .loader {
      --loading-size: var(--ag-space-4); /* 1rem = 16px */

      position: relative;
      box-sizing: border-box;
      animation: blink 1s infinite;
      animation-delay: 250ms;

      /* Make up for negative positioning */
      margin-inline-start: var(--loading-size);

      /* Initially set zero until aria-busy becomes true */
      opacity: 0%;
    }

    .loader,
    .loader::before,
    .loader::after {
      width: calc(var(--loading-size) / 2);
      height: calc(var(--loading-size) / 2);
      border-radius: var(--ag-radius-md);
      background-color: var(--loading-color, var(--ag-text-primary));
    }

    /* SMALL */
    :host([size="small"]) .loader {
      --loading-size: var(--ag-space-3); /* 0.75rem = 12px */
    }

    /* LARGE */
    :host([size="large"]) .loader {
      --loading-size: var(--ag-space-5); /* 1.25rem = 20px */
    }

    :host([size="large"]) .loader,
    :host([size="large"]) .loader::before,
    :host([size="large"]) .loader::after {
      border-radius: var(--ag-radius-lg);
    }

    .loader::before,
    .loader::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      animation: blink 1s infinite;
    }

    .loader::before {
      inset-inline-start: calc(-1 * var(--loading-size));
      animation-delay: 0s;
    }

    .loader::after {
      inset-inline-start: var(--loading-size);
      animation-delay: 500ms;
    }

    /**
     * Setting aria-busy to true results in corresponding opacity change to visually show loader.
     */
    .loader[aria-busy="true"] {
      opacity: 100%;
    }

    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }

    @media (prefers-reduced-motion), (update: slow) {
      .loader,
      .loader::before,
      .loader::after {
        animation-duration: 0.001ms !important;
      }
    }

    /* Screen reader only text */
    .loader-label {
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
  `;let p=F;g([k({type:String,reflect:!0})],p.prototype,"size");g([k({type:String,reflect:!0,attribute:"aria-label"})],p.prototype,"ariaLabel");customElements.get("ag-loader")||customElements.define("ag-loader",p);const P=c({name:"VueLoader",props:{size:{type:String,default:"default"},ariaLabel:{type:String,default:"Loading..."}},setup(i){const s=A(null),a=()=>{const r=s.value;r&&(r.size=i.size,r.ariaLabel=i.ariaLabel)};return x(async()=>{await customElements.whenDefined("ag-loader"),await E(),a()}),L(()=>{s.value&&a()}),{agComponent:s}}});function B(i,s,a,r,t,o){return h(),d("ag-loader",C({ref:"agComponent"},i.$attrs),[v(i.$slots,"default")],16)}const T=f(P,[["render",B]]),q=c({name:"LoaderExamples",components:{VueLoader:T}}),V={class:"mbe4"},$={class:"mbe4"},I={class:"flex flex-col items-center",style:{gap:"24px"}},R={class:"mbe4"};function M(i,s,a,r,t,o){const n=z("VueLoader");return h(),d("section",null,[e("div",V,[s[0]||(s[0]=e("h2",null,"Default",-1)),l(n)]),e("div",$,[s[1]||(s[1]=e("h2",null,"Sizes",-1)),e("div",I,[l(n,{size:"small"}),l(n),l(n,{size:"large"})])]),e("div",R,[s[2]||(s[2]=e("h2",null,"CSS Shadow Parts Customization",-1)),s[3]||(s[3]=e("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the loader's appearance. ",-1)),l(n,{class:"custom-loader"})])])}const N=D(q,[["render",M]]),J=JSON.parse('{"title":"Loader","description":"","frontmatter":{},"headers":[],"relativePath":"components/loader.md","filePath":"components/loader.md"}'),j={name:"components/loader.md"},H=Object.assign(j,{setup(i){return(s,a)=>(h(),d("div",null,[a[0]||(a[0]=e("h1",{id:"loader",tabindex:"-1"},[S("Loader "),e("a",{class:"header-anchor",href:"#loader","aria-label":'Permalink to "Loader"'},"​")],-1)),l(u),a[1]||(a[1]=e("p",null,"Brief description of what the component does and when to use it.",-1)),l(N),a[2]||(a[2]=_("",15))]))}});export{J as __pageData,H as default};
