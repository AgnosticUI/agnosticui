import{A as B}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as E,z as d,a as b,x as r}from"./chunks/Button.Bujdzq23.js";import{d as v,p as D,c as y,q as A,v as f,o as m,K as q,_ as x,C as w,j as a,G as p,a as k,ae as S,w as u,k as o}from"./chunks/framework.NAAYCHZu.js";import{F as _}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";var P=Object.defineProperty,c=(t,s,i,h)=>{for(var n=void 0,e=t.length-1,l;e>=0;e--)(l=t[e])&&(n=l(s,i,n)||n);return n&&P(s,i,n),n};const C=class extends b{constructor(){super(),this._handleItemClick=(s,i,h)=>{const n=new CustomEvent("breadcrumb-click",{detail:{item:i,index:h,event:s},bubbles:!0,composed:!0});this.dispatchEvent(n),this.onBreadcrumbClick&&this.onBreadcrumbClick(n)},this.items=[],this.type="default",this.primary=!1,this.ariaLabel="Breadcrumb"}_renderBreadcrumbItem(s,i){const h=i===this.items.length-1,n=s.current||h;return r`
      <li class="ag-breadcrumb__item" part="ag-breadcrumb-item">
        ${s.href&&!n?r`
              <a
                href="${s.href}"
                class="ag-breadcrumb__link"
                part="ag-breadcrumb-item-link"
                @click="${e=>this._handleItemClick(e,s,i)}"
              >
                ${s.label}
              </a>
            `:n?r`
                <span class="ag-breadcrumb__text" aria-current="page" part="ag-breadcrumb-item-current">
                  ${s.label}
                </span>
              `:r`
                <span class="ag-breadcrumb__text" part="ag-breadcrumb-item-text">
                  ${s.label}
                </span>
              `}
      </li>
    `}render(){return!this.items||this.items.length===0?r``:r`
      <nav class="ag-breadcrumb" part="ag-breadrumb" aria-label="${this.ariaLabel}">
        <ol class="ag-breadcrumb__list">
          ${this.items.map((s,i)=>this._renderBreadcrumbItem(s,i))}
        </ol>
      </nav>
    `}};C.styles=E`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      display: block;
    }

    .ag-breadcrumb__list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      white-space: nowrap;
    }

    .ag-breadcrumb__item {
      display: inline-flex;
      align-items: center;
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item {
      padding-inline-start: var(--ag-space-2);
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "›";
      padding-inline-end: var(--ag-space-2);
      color: var(--ag-text-secondary);
      speak: none;
      user-select: none;
    }

    /* Separator variants */
    :host([type="slash"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "/";
    }

    :host([type="arrow"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "→";
    }

    :host([type="bullet"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "•";
    }

    /* Default link styling - uses text color */
    .ag-breadcrumb__link {
      text-decoration: none;
      color: var(--ag-text-primary);
      padding: var(--ag-space-1);
      margin: calc(var(--ag-space-1) * -1);
      border-radius: var(--ag-border-radius);
      transition: all var(--ag-transition-duration) ease;
      cursor: pointer;
    }

    .ag-breadcrumb__link:hover {
      text-decoration: underline;
    }

    /* Primary variant - blue link styling (opt-in) */
    :host([primary]) .ag-breadcrumb__link {
      color: var(--ag-primary-text);
    }

    :host([primary]) .ag-breadcrumb__link:hover {
      color: var(--ag-primary-text);
      text-decoration: underline;
    }

    .ag-breadcrumb__link:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    /* Current page styling - de-emphasized */
    .ag-breadcrumb__link[aria-current="page"] {
      color: var(--ag-text-secondary);
      text-decoration: none;
      cursor: default;
    }

    .ag-breadcrumb__link[aria-current="page"]:hover {
      text-decoration: none;
    }

    /* Non-linked current page */
    .ag-breadcrumb__text {
      color: var(--ag-text-primary);
      padding: var(--ag-space-1);
      margin: calc(var(--ag-space-1) * -1);
    }
  `;let F=C;c([d({type:Array})],F.prototype,"items");c([d({type:String,reflect:!0})],F.prototype,"type");c([d({type:Boolean,reflect:!0})],F.prototype,"primary");c([d({type:String,reflect:!0,attribute:"aria-label"})],F.prototype,"ariaLabel");c([d({attribute:!1})],F.prototype,"onBreadcrumbClick");customElements.get("ag-breadcrumb")||customElements.define("ag-breadcrumb",F);const T=["type",".primary",".ariaLabel"],V=v({__name:"VueBreadcrumb",props:{items:{},type:{default:"default"},primary:{type:Boolean,default:!1},ariaLabel:{default:"Breadcrumb"}},emits:["breadcrumb-click"],setup(t,{emit:s}){const i=t,h=s,n=D(),e=g=>{h("breadcrumb-click",g.detail)},l=()=>{n.value&&(n.value.items=i.items)};return A(()=>i.items,l,{deep:!0}),f(async()=>{await customElements.whenDefined("ag-breadcrumb"),n.value&&l()}),(g,J)=>(m(),y("ag-breadcrumb",q({ref_key:"breadcrumbRef",ref:n,type:t.type,".primary":t.primary,".ariaLabel":t.ariaLabel,onBreadcrumbClick:e},g.$attrs),null,48,T))}}),N={name:"BreadcrumbExamples",components:{VueBreadcrumb:V},data(){return{items:[{label:"Home",href:"#"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Products",href:"#products"}]}},methods:{handleClick(t){console.log(`VueBreadcrumb -> handleClick -- label: ${t.item.label}, href: ${t.item.href}`)}}},R={class:"mbe4"},L={class:"mbe4"},I={class:"mbe4"},z={style:{display:"flex","flex-direction":"column",gap:"2rem"}};function $(t,s,i,h,n,e){const l=w("VueBreadcrumb");return m(),y("section",null,[a("div",R,[s[0]||(s[0]=a("div",{class:"mbe2"},[a("h2",null,"Default")],-1)),p(l,{items:n.items,onBreadcrumbClick:e.handleClick},null,8,["items","onBreadcrumbClick"])]),a("div",L,[s[1]||(s[1]=a("div",{class:"mbe2"},[a("h2",null,"Types")],-1)),p(l,{class:"mbe4",type:"slash",items:n.items,onBreadcrumbClick:e.handleClick},null,8,["items","onBreadcrumbClick"]),p(l,{class:"mbe4",type:"bullet",items:n.items,onBreadcrumbClick:e.handleClick},null,8,["items","onBreadcrumbClick"]),p(l,{class:"mbe4",type:"arrow",items:n.items,onBreadcrumbClick:e.handleClick},null,8,["items","onBreadcrumbClick"]),p(l,{primary:"",type:"arrow",items:n.items,onBreadcrumbClick:e.handleClick},null,8,["items","onBreadcrumbClick"])]),a("div",I,[s[4]||(s[4]=a("div",{class:"mbe2"},[a("h2",null,"CSS Shadow Parts Customization"),a("p",{style:{"margin-top":"0.5rem","margin-bottom":"1rem",color:"var(--vp-c-text-2)"}},[k(" Breadcrumb can be customized using CSS Shadow Parts: "),a("code",null,"::part(ag-breadcrumb-item)"),k(", "),a("code",null,"::part(ag-breadcrumb-item-link)"),k(", "),a("code",null,"::part(ag-breadcrumb-item-current)"),k(". The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design! ")])],-1)),a("div",z,[a("div",null,[s[2]||(s[2]=a("h3",null,"Minimal with Underline",-1)),s[3]||(s[3]=a("div",{class:"mbe3"},null,-1)),p(l,{class:"custom-minimal-breadcrumb",items:n.items},null,8,["items"])])])])])}const M=x(N,[["render",$],["__scopeId","data-v-a207b872"]]);class U extends b{createRenderRoot(){return this}constructor(){super(),this.items=[{label:"Home",href:"#"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Products",href:"#products"}]}firstUpdated(){this.querySelectorAll("ag-breadcrumb").forEach(i=>{i.items=this.items,i.addEventListener("breadcrumb-click",h=>{console.log(`ag-breadcrumb -> breadcrumb-click -- label: ${h.detail.item.label}, href: ${h.detail.item.href}`)})})}render(){return r`
      <section>
        <!-- Default -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>Default</h2>
          </div>
          <ag-breadcrumb></ag-breadcrumb>
        </div>

        <!-- Types -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>Types</h2>
          </div>
          <ag-breadcrumb class="mbe4" type="slash"></ag-breadcrumb>
          <ag-breadcrumb class="mbe4" type="bullet"></ag-breadcrumb>
          <ag-breadcrumb class="mbe4" type="arrow"></ag-breadcrumb>
          <ag-breadcrumb primary type="arrow"></ag-breadcrumb>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>CSS Shadow Parts Customization</h2>
            <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
              Breadcrumb can be customized using CSS Shadow Parts:
              <code>::part(ag-breadcrumb-item)</code>,
              <code>::part(ag-breadcrumb-item-link)</code>,
              <code>::part(ag-breadcrumb-item-current)</code>. The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design!
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <h3>Minimal with Underline</h3>
              <div class="mbe3"></div>
              <ag-breadcrumb class="custom-minimal-breadcrumb"></ag-breadcrumb>
            </div>
          </div>
        </div>
      </section>
    `}}customElements.define("breadcrumb-lit-examples",U);const O=`<template>
  <section>
    <div class="mbe4">
      <div class="mbe2">
        <h2>Default</h2>
      </div>
      <VueBreadcrumb
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>
    <div class="mbe4">
      <div class="mbe2">
        <h2>Types</h2>
      </div>
      <VueBreadcrumb
        class="mbe4"
        type="slash"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        class="mbe4"
        type="bullet"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        class="mbe4"
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        primary
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>

    <div class="mbe4">
      <div class="mbe2">
        <h2>CSS Shadow Parts Customization</h2>
        <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
          Breadcrumb can be customized using CSS Shadow Parts:
          <code>::part(ag-breadcrumb-item)</code>,
          <code>::part(ag-breadcrumb-item-link)</code>,
          <code>::part(ag-breadcrumb-item-current)</code>. The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design!
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3>Minimal with Underline</h3>
          <div class="mbe3"></div>
          <VueBreadcrumb
            class="custom-minimal-breadcrumb"
            :items="items"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueBreadcrumb from "agnosticui-core/breadcrumb/vue";
export default {
  name: "BreadcrumbExamples",
  components: { VueBreadcrumb },
  data() {
    return {
      items: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Products", href: "#products" },
      ],
    };
  },
  methods: {
    handleClick(event) {
      console.log(
        \`VueBreadcrumb -> handleClick -- label: \${event.item.label}, href: \${event.item.href}\`
      );
    },
  },
};
<\/script>

<style scoped>
/* Minimalist breadcrumb */
.custom-minimal-breadcrumb::part(ag-breadcrumb-item-link) {
  color: var(--vp-c-text-1);
  font-weight: 500;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.custom-minimal-breadcrumb::part(ag-breadcrumb-item-link):hover {
  border-bottom-color: var(--vp-c-brand-1);
}

.custom-minimal-breadcrumb::part(ag-breadcrumb-item-current) {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
}

/* Pill-style breadcrumb */
.custom-pill-breadcrumb::part(ag-breadcrumb-item-link) {
  color: #333;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  background: #e5e7eb;
  transition: all 0.2s ease;
}

.custom-pill-breadcrumb::part(ag-breadcrumb-item-link):hover {
  background: #d1d5db;
  transform: scale(1.05);
}

.custom-pill-breadcrumb::part(ag-breadcrumb-item-current) {
  color: white;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}
</style>
`,j=`import { LitElement, html } from 'lit';
import 'agnosticui-core/breadcrumb';

export class BreadcrumbLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.items = [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Products', href: '#products' },
    ];
  }

  firstUpdated() {
    // Set up event listeners for breadcrumb items
    const breadcrumbs = this.querySelectorAll('ag-breadcrumb');
    breadcrumbs.forEach((breadcrumb) => {
      breadcrumb.items = this.items;

      breadcrumb.addEventListener('breadcrumb-click', (event) => {
        console.log(
          \`ag-breadcrumb -> breadcrumb-click -- label: \${event.detail.item.label}, href: \${event.detail.item.href}\`
        );
      });
    });
  }

  render() {
    return html\`
      <section>
        <!-- Default -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>Default</h2>
          </div>
          <ag-breadcrumb></ag-breadcrumb>
        </div>

        <!-- Types -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>Types</h2>
          </div>
          <ag-breadcrumb class="mbe4" type="slash"></ag-breadcrumb>
          <ag-breadcrumb class="mbe4" type="bullet"></ag-breadcrumb>
          <ag-breadcrumb class="mbe4" type="arrow"></ag-breadcrumb>
          <ag-breadcrumb primary type="arrow"></ag-breadcrumb>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>CSS Shadow Parts Customization</h2>
            <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
              Breadcrumb can be customized using CSS Shadow Parts:
              <code>::part(ag-breadcrumb-item)</code>,
              <code>::part(ag-breadcrumb-item-link)</code>,
              <code>::part(ag-breadcrumb-item-current)</code>. The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design!
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <h3>Minimal with Underline</h3>
              <div class="mbe3"></div>
              <ag-breadcrumb class="custom-minimal-breadcrumb"></ag-breadcrumb>
            </div>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('breadcrumb-lit-examples', BreadcrumbLitExamples);
`,H=`import { ReactBreadcrumb } from "agnosticui-core/breadcrumb/react";

export default function BreadcrumbReactExamples() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
  ];

  const handleClick = (event) => {
    console.log(
      \`ReactBreadcrumb -> handleClick -- label: \${event.item.label}, href: \${event.item.href}\`
    );
  };

  return (
    <section>
      {/* Default */}
      <div className="mbe4">
        <div className="mbe2">
          <h2>Default</h2>
        </div>
        <ReactBreadcrumb items={items} onBreadcrumbClick={handleClick} />
      </div>

      {/* Types */}
      <div className="mbe4">
        <div className="mbe2">
          <h2>Types</h2>
        </div>
        <ReactBreadcrumb
          className="mbe4"
          type="slash"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          className="mbe4"
          type="bullet"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          className="mbe4"
          type="arrow"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          primary
          type="arrow"
          items={items}
          onBreadcrumbClick={handleClick}
        />
      </div>

      {/* CSS Shadow Parts Customization */}
      <div className="mbe4">
        <div className="mbe2">
          <h2>CSS Shadow Parts Customization</h2>
          <p style={{ marginTop: "0.5rem", marginBottom: "1rem", color: "var(--vp-c-text-2)" }}>
            Breadcrumb can be customized using CSS Shadow Parts:
            <code>::part(ag-breadcrumb-item)</code>,
            <code>::part(ag-breadcrumb-item-link)</code>,
            <code>::part(ag-breadcrumb-item-current)</code>. The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design!
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h3>Minimal with Underline</h3>
            <div className="mbe3"></div>
            <ReactBreadcrumb className="custom-minimal-breadcrumb" items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
`,is=JSON.parse('{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"components/breadcrumb.md","filePath":"components/breadcrumb.md"}'),W={name:"components/breadcrumb.md"},as=Object.assign(W,{setup(t){return(s,i)=>(m(),y("div",null,[i[1]||(i[1]=a("h1",{id:"breadcrumb",tabindex:"-1"},[k("Breadcrumb "),a("a",{class:"header-anchor",href:"#breadcrumb","aria-label":'Permalink to "Breadcrumb"'},"​")],-1)),p(B),i[2]||(i[2]=a("p",null,[k("The "),a("code",null,"Breadcrumb"),k(" component is a "),a("span",{class:"quoted"},"wayfinding"),k(" element that helps make users aware of their current location within an application or website.")],-1)),i[3]||(i[3]=a("h2",{id:"examples",tabindex:"-1"},[k("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),p(_,{component:"breadcrumb","vue-code":o(O),"lit-code":o(j),"react-code":o(H)},{vue:u(()=>[p(M)]),lit:u(()=>[...i[0]||(i[0]=[a("breadcrumb-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=S(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Breadcrumb</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe4&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe2&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Default&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;items&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        @breadcrumb-click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClick&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe4&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe2&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Types&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;slash&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;items&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        @breadcrumb-click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClick&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bullet&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;items&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        @breadcrumb-click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClick&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;arrow&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;items&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        @breadcrumb-click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClick&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        primary</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;arrow&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;items&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        @breadcrumb-click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClick&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueBreadcrumb </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/breadcrumb/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  name: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;BreadcrumbExamples&quot;</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueBreadcrumb }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      items: [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;About&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#about&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Services&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#services&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Products&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#products&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      ],</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleClick</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        \`VueBreadcrumb -&gt; handleClick -- label: \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">event</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">item</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">label</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}, href: \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">event</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">item</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">href</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactBreadcrumb, </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> BreadcrumbItem } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/breadcrumb/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> BreadcrumbExamples</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> BreadcrumbItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Home&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;About&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#about&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Services&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#services&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Products&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#products&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      \`ReactBreadcrumb -&gt; handleClick -- label: \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">event</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">item</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">label</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}, href: \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">event</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">item</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">href</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe4&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe2&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Default&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onBreadcrumbClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe4&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe2&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Types&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;slash&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onBreadcrumbClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bullet&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onBreadcrumbClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;arrow&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onBreadcrumbClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          primary</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;arrow&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onBreadcrumbClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html, css } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit/decorators.js&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/breadcrumb&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;breadcrumb-example&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> BreadcrumbExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Home&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;About&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#about&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Services&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#services&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Products&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#products&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  static</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> styles</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> css</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    :host {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: block;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    section {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: flex;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      flex-direction: column;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      gap: 1rem;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  firstUpdated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Set up event listeners for breadcrumb items in the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> breadcrumbs</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelectorAll</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ag-breadcrumb&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    breadcrumbs?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">forEach</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">breadcrumb</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> any</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      breadcrumb.items </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.items;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      breadcrumb.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;breadcrumb-click&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> customEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> event </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          \`ag-breadcrumb -&gt; breadcrumb-click -- label: \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">customEvent</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">item</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">label</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}, href: \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">customEvent</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">item</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">href</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;div class=&quot;mbe4&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;div class=&quot;mbe2&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;h3&gt;Default&lt;/h3&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-breadcrumb&gt;&lt;/ag-breadcrumb&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;div class=&quot;mbe4&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;div class=&quot;mbe2&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;h3&gt;Types&lt;/h3&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-breadcrumb type=&quot;slash&quot;&gt;&lt;/ag-breadcrumb&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-breadcrumb type=&quot;bullet&quot;&gt;&lt;/ag-breadcrumb&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-breadcrumb type=&quot;arrow&quot;&gt;&lt;/ag-breadcrumb&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-breadcrumb primary type=&quot;arrow&quot;&gt;&lt;/ag-breadcrumb&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;/section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Note:</strong> When using breadcrumb components within a custom element&#39;s shadow DOM, set up event listeners in the component&#39;s lifecycle (e.g., <code>firstUpdated()</code>) rather than using <code>DOMContentLoaded</code>, as <code>document.querySelector()</code> cannot access elements inside shadow DOM. Use <code>this.shadowRoot.querySelector()</code> instead.</p></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>items</code></td><td><code>BreadcrumbItem[]</code></td><td><code>[]</code></td><td>Array of breadcrumb items to display</td></tr><tr><td><code>type</code></td><td><code>&#39;default&#39; | &#39;slash&#39; | &#39;bullet&#39; | &#39;arrow&#39;</code></td><td><code>&#39;default&#39;</code></td><td>Separator style between breadcrumb items</td></tr><tr><td><code>primary</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses primary (blue) color styling for links</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>&#39;Breadcrumb&#39;</code></td><td>Custom aria-label for the navigation landmark</td></tr></tbody></table><h3 id="breadcrumbitem-interface" tabindex="-1">BreadcrumbItem Interface <a class="header-anchor" href="#breadcrumbitem-interface" aria-label="Permalink to &quot;BreadcrumbItem Interface&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> BreadcrumbItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>breadcrumb-click</code></td><td>Vue: <code>@breadcrumb-click</code><br>React: <code>onBreadcrumbClick</code><br>Lit: <code>@breadcrumb-click</code> or <code>.onBreadcrumbClick</code></td><td><code>{ item: BreadcrumbItem, index: number, event: MouseEvent }</code></td><td>Fired when a breadcrumb link is clicked. Provides the clicked item, its index, and the original mouse event.</td></tr></tbody></table><h3 id="event-patterns" tabindex="-1">Event Patterns <a class="header-anchor" href="#event-patterns" aria-label="Permalink to &quot;Event Patterns&quot;">​</a></h3><p>AgnosticUI Breadcrumb supports <strong>three event handling patterns</strong>:</p><ol><li><strong>addEventListener</strong> (Lit/Vanilla JS):</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> breadcrumb</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-breadcrumb&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">breadcrumb.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;breadcrumb-click&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Breadcrumb clicked:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.item.label);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Item index:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.index);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  e.detail.event.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">preventDefault</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">});</span></span></code></pre></div><ol start="2"><li><strong>Callback props</strong> (Lit/Vanilla JS):</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> breadcrumb</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-breadcrumb&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">breadcrumb.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onBreadcrumbClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Breadcrumb clicked:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.item.label);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span></code></pre></div><ol start="3"><li><strong>Framework event handlers</strong> (Vue/React):</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">breadcrumb-click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClick</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBreadcrumb</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onBreadcrumbClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><p>All three patterns work identically thanks to the <strong>dual-dispatch</strong> system.</p><p><strong>Note</strong>: The component does NOT prevent default navigation by default. To implement client-side routing, call <code>event.detail.event.preventDefault()</code> in your event handler.</p><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>The Breadcrumb component exposes the following CSS Shadow Parts for custom styling:</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-breadcrumb-item</code></td><td>Individual breadcrumb list item wrapper</td></tr><tr><td><code>ag-breadcrumb-item-link</code></td><td>Clickable breadcrumb link element</td></tr><tr><td><code>ag-breadcrumb-item-current</code></td><td>Current/active breadcrumb item (non-clickable)</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-breadcrumb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-breadcrumb-item-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">all</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0.3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-breadcrumb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-breadcrumb-item-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-breadcrumb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-breadcrumb-item-current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">700</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p>See the <strong>CSS Shadow Parts Customization</strong> section in the examples above for more styling demonstrations.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li>The last item or any item with <code>current: true</code> is automatically styled as the current page (not clickable)</li><li>Items without an <code>href</code> are rendered as plain text</li><li>The <code>primary</code> prop changes link colors to use the primary theme color (typically blue)</li><li>All three implementations share the same underlying styles and behavior</li><li>Use CSS Shadow Parts for advanced customization while maintaining component encapsulation</li></ul>`,30))]))}});export{is as __pageData,as as default};
