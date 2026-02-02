import{A as B}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as E,z as d,a as b,x as r}from"./chunks/Button.DkmThuAs.js";import{d as v,p as D,c as y,q as A,v as f,o as m,K as q,_ as x,C as w,j as a,G as p,a as k,ae as S,w as u,k as o}from"./chunks/framework.NAAYCHZu.js";import{F as _}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var P=Object.defineProperty,c=(t,s,i,h)=>{for(var n=void 0,e=t.length-1,l;e>=0;e--)(l=t[e])&&(n=l(s,i,n)||n);return n&&P(s,i,n),n};const C=class extends b{constructor(){super(),this._handleItemClick=(s,i,h)=>{const n=new CustomEvent("breadcrumb-click",{detail:{item:i,index:h,event:s},bubbles:!0,composed:!0});this.dispatchEvent(n),this.onBreadcrumbClick&&this.onBreadcrumbClick(n)},this.items=[],this.type="default",this.primary=!1,this.ariaLabel="Breadcrumb"}_renderBreadcrumbItem(s,i){const h=i===this.items.length-1,n=s.current||h;return r`
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
`,ns=JSON.parse('{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"components/breadcrumb.md","filePath":"components/breadcrumb.md"}'),W={name:"components/breadcrumb.md"},ts=Object.assign(W,{setup(t){return(s,i)=>(m(),y("div",null,[i[1]||(i[1]=a("h1",{id:"breadcrumb",tabindex:"-1"},[k("Breadcrumb "),a("a",{class:"header-anchor",href:"#breadcrumb","aria-label":'Permalink to "Breadcrumb"'},"​")],-1)),p(B),i[2]||(i[2]=a("p",null,[k("The "),a("code",null,"Breadcrumb"),k(" component is a "),a("span",{class:"quoted"},"wayfinding"),k(" element that helps make users aware of their current location within an application or website.")],-1)),i[3]||(i[3]=a("h2",{id:"examples",tabindex:"-1"},[k("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),p(_,{component:"breadcrumb","vue-code":o(O),"lit-code":o(j),"react-code":o(H)},{vue:u(()=>[p(M)]),lit:u(()=>[...i[0]||(i[0]=[a("breadcrumb-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=S("",30))]))}});export{ns as __pageData,ts as default};
