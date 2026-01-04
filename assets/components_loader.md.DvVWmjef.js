import{A as u}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as y,a as m,x as b}from"./chunks/lit-element.B0TUrqGF.js";import{z as k}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{s as f}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as c,c as d,o as h,r as v,K as C,p as A,v as x,P as E,s as L,_ as D,C as z,j as e,G as l,ae as _,a as S}from"./chunks/framework.DvJW1jwp.js";var w=Object.defineProperty,g=(i,s,a,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(s,a,t)||t);return t&&w(s,a,t),t};const F=class extends m{constructor(){super(...arguments),this.size="default",this.ariaLabel="Loading..."}render(){return b`
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
  `;let p=F;g([k({type:String,reflect:!0})],p.prototype,"size");g([k({type:String,reflect:!0,attribute:"aria-label"})],p.prototype,"ariaLabel");customElements.get("ag-loader")||customElements.define("ag-loader",p);const P=c({name:"VueLoader",props:{size:{type:String,default:"default"},ariaLabel:{type:String,default:"Loading..."}},setup(i){const s=A(null),a=()=>{const r=s.value;r&&(r.size=i.size,r.ariaLabel=i.ariaLabel)};return x(async()=>{await customElements.whenDefined("ag-loader"),await E(),a()}),L(()=>{s.value&&a()}),{agComponent:s}}});function B(i,s,a,r,t,o){return h(),d("ag-loader",C({ref:"agComponent"},i.$attrs),[v(i.$slots,"default")],16)}const T=f(P,[["render",B]]),q=c({name:"LoaderExamples",components:{VueLoader:T}}),V={class:"mbe4"},$={class:"mbe4"},I={class:"flex flex-col items-center",style:{gap:"24px"}},R={class:"mbe4"};function M(i,s,a,r,t,o){const n=z("VueLoader");return h(),d("section",null,[e("div",V,[s[0]||(s[0]=e("h2",null,"Default",-1)),l(n)]),e("div",$,[s[1]||(s[1]=e("h2",null,"Sizes",-1)),e("div",I,[l(n,{size:"small"}),l(n),l(n,{size:"large"})])]),e("div",R,[s[2]||(s[2]=e("h2",null,"CSS Shadow Parts Customization",-1)),s[3]||(s[3]=e("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the loader's appearance. ",-1)),l(n,{class:"custom-loader"})])])}const N=D(q,[["render",M]]),H=JSON.parse('{"title":"Loader","description":"","frontmatter":{},"headers":[],"relativePath":"components/loader.md","filePath":"components/loader.md"}'),j={name:"components/loader.md"},Q=Object.assign(j,{setup(i){return(s,a)=>(h(),d("div",null,[a[0]||(a[0]=e("h1",{id:"loader",tabindex:"-1"},[S("Loader "),e("a",{class:"header-anchor",href:"#loader","aria-label":'Permalink to "Loader"'},"​")],-1)),l(u),a[1]||(a[1]=e("p",null,"Brief description of what the component does and when to use it.",-1)),l(N),a[2]||(a[2]=_(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Loader</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueLoader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueLoader } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/loader/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueLoader }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactLoader } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/loader/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactLoader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/loader&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-loader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-loader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td><code>small</code> | <code>default</code> | <code>large</code></td><td><code>default</code></td><td>Sets the loader size.</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>Loading...</code></td><td>The ARIA label for accessibility.</td></tr></tbody></table><h2 id="variants" tabindex="-1">Variants <a class="header-anchor" href="#variants" aria-label="Permalink to &quot;Variants&quot;">​</a></h2><p>The <code>loader</code> component has <code>size</code> variants that include: <code>small</code>, <code>default</code>, and <code>large</code>.</p><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-loader</code></td><td>The main loader container element.</td></tr><tr><td><code>ag-loader-label</code></td><td>The screen reader text element.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Payload</th><th>Description</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>This section can be filled out by the LLM agent based on the <code>SpecSheet.md</code>.</p>`,15))]))}});export{H as __pageData,Q as default};
