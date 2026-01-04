import{A as m}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as b,a as C,x as F}from"./chunks/lit-element.B0TUrqGF.js";import{z as d}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{d as E,p as B,c as y,q as D,v as A,o,K as v,_ as f,C as q,j as a,G as k,a as e,ae as x}from"./chunks/framework.DvJW1jwp.js";var _=Object.defineProperty,g=(t,s,n,p)=>{for(var i=void 0,l=t.length-1,h;l>=0;l--)(h=t[l])&&(i=h(s,n,i)||i);return i&&_(s,n,i),i};const u=class extends C{constructor(){super(),this._handleItemClick=(s,n,p)=>{const i=new CustomEvent("breadcrumb-click",{detail:{item:n,index:p,event:s},bubbles:!0,composed:!0});this.dispatchEvent(i),this.onBreadcrumbClick&&this.onBreadcrumbClick(i)},this.items=[],this.type="default",this.primary=!1,this.ariaLabel="Breadcrumb"}_renderBreadcrumbItem(s,n){const p=n===this.items.length-1,i=s.current||p;return F`
      <li class="ag-breadcrumb__item" part="ag-breadcrumb-item">
        ${s.href&&!i?F`
              <a
                href="${s.href}"
                class="ag-breadcrumb__link"
                part="ag-breadcrumb-item-link"
                @click="${l=>this._handleItemClick(l,s,n)}"
              >
                ${s.label}
              </a>
            `:i?F`
                <span class="ag-breadcrumb__text" aria-current="page" part="ag-breadcrumb-item-current">
                  ${s.label}
                </span>
              `:F`
                <span class="ag-breadcrumb__text" part="ag-breadcrumb-item-text">
                  ${s.label}
                </span>
              `}
      </li>
    `}render(){return!this.items||this.items.length===0?F``:F`
      <nav class="ag-breadcrumb" part="ag-breadrumb" aria-label="${this.ariaLabel}">
        <ol class="ag-breadcrumb__list">
          ${this.items.map((s,n)=>this._renderBreadcrumbItem(s,n))}
        </ol>
      </nav>
    `}};u.styles=b`
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
  `;let r=u;g([d({type:Array})],r.prototype,"items");g([d({type:String,reflect:!0})],r.prototype,"type");g([d({type:Boolean,reflect:!0})],r.prototype,"primary");g([d({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");g([d({attribute:!1})],r.prototype,"onBreadcrumbClick");customElements.get("ag-breadcrumb")||customElements.define("ag-breadcrumb",r);const w=["type",".primary",".ariaLabel"],S=E({__name:"VueBreadcrumb",props:{items:{},type:{default:"default"},primary:{type:Boolean,default:!1},ariaLabel:{default:"Breadcrumb"}},emits:["breadcrumb-click"],setup(t,{emit:s}){const n=t,p=s,i=B(),l=c=>{p("breadcrumb-click",c.detail)},h=()=>{i.value&&(i.value.items=n.items)};return D(()=>n.items,h,{deep:!0}),A(async()=>{await customElements.whenDefined("ag-breadcrumb"),i.value&&h()}),(c,$)=>(o(),y("ag-breadcrumb",v({ref_key:"breadcrumbRef",ref:i,type:t.type,".primary":t.primary,".ariaLabel":t.ariaLabel,onBreadcrumbClick:l},c.$attrs),null,48,w))}}),P={name:"BreadcrumbExamples",components:{VueBreadcrumb:S},data(){return{items:[{label:"Home",href:"#"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Products",href:"#products"}]}},methods:{handleClick(t){console.log(`VueBreadcrumb -> handleClick -- label: ${t.item.label}, href: ${t.item.href}`)}}},I={class:"mbe4"},T={class:"mbe4"},V={class:"mbe4"},L={style:{display:"flex","flex-direction":"column",gap:"2rem"}};function N(t,s,n,p,i,l){const h=q("VueBreadcrumb");return o(),y("section",null,[a("div",I,[s[0]||(s[0]=a("div",{class:"mbe2"},[a("h2",null,"Default")],-1)),k(h,{items:i.items,onBreadcrumbClick:l.handleClick},null,8,["items","onBreadcrumbClick"])]),a("div",T,[s[1]||(s[1]=a("div",{class:"mbe2"},[a("h2",null,"Types")],-1)),k(h,{class:"mbe4",type:"slash",items:i.items,onBreadcrumbClick:l.handleClick},null,8,["items","onBreadcrumbClick"]),k(h,{class:"mbe4",type:"bullet",items:i.items,onBreadcrumbClick:l.handleClick},null,8,["items","onBreadcrumbClick"]),k(h,{class:"mbe4",type:"arrow",items:i.items,onBreadcrumbClick:l.handleClick},null,8,["items","onBreadcrumbClick"]),k(h,{primary:"",type:"arrow",items:i.items,onBreadcrumbClick:l.handleClick},null,8,["items","onBreadcrumbClick"])]),a("div",V,[s[4]||(s[4]=a("div",{class:"mbe2"},[a("h2",null,"CSS Shadow Parts Customization"),a("p",{style:{"margin-top":"0.5rem","margin-bottom":"1rem",color:"var(--vp-c-text-2)"}},[e(" Breadcrumb can be customized using CSS Shadow Parts: "),a("code",null,"::part(ag-breadcrumb-item)"),e(", "),a("code",null,"::part(ag-breadcrumb-item-link)"),e(", "),a("code",null,"::part(ag-breadcrumb-item-current)"),e(". The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design! ")])],-1)),a("div",L,[a("div",null,[s[2]||(s[2]=a("h3",null,"Minimal with Underline",-1)),s[3]||(s[3]=a("div",{class:"mbe3"},null,-1)),k(h,{class:"custom-minimal-breadcrumb",items:i.items},null,8,["items"])])])])])}const R=f(P,[["render",N],["__scopeId","data-v-a207b872"]]),W=JSON.parse('{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"components/breadcrumb.md","filePath":"components/breadcrumb.md"}'),M={name:"components/breadcrumb.md"},J=Object.assign(M,{setup(t){return(s,n)=>(o(),y("div",null,[n[0]||(n[0]=a("h1",{id:"breadcrumb",tabindex:"-1"},[e("Breadcrumb "),a("a",{class:"header-anchor",href:"#breadcrumb","aria-label":'Permalink to "Breadcrumb"'},"​")],-1)),k(m),n[1]||(n[1]=a("p",null,[e("The "),a("code",null,"Breadcrumb"),e(" component is a "),a("span",{class:"quoted"},"wayfinding"),e(" element that helps make users aware of their current location within an application or website.")],-1)),n[2]||(n[2]=a("h2",{id:"examples",tabindex:"-1"},[e("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),k(R),n[3]||(n[3]=x("",30))]))}});export{W as __pageData,J as default};
