var V=Object.defineProperty;var j=(a,s,t)=>s in a?V(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;var D=(a,s,t)=>j(a,typeof s!="symbol"?s+"":s,t);import{A as T}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as N,z as k,a as A,x as o}from"./chunks/Button.DkmThuAs.js";import{d as S,p as L,c as g,o as d,r as P,K as $,al as H,h as U,e as m,_ as M,C as B,j as i,G as l,t as E,w as F,ae as x,a as q,k as f}from"./chunks/framework.NAAYCHZu.js";import{c as O}from"./chunks/createLucideIcon.B61Wqv9x.js";import{C as G}from"./chunks/chevron-right.D0fGB8u_.js";import{F as w}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=O("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=O("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);var J=Object.defineProperty,y=(a,s,t,p)=>{for(var n=void 0,h=a.length-1,e;h>=0;h--)(e=a[h])&&(n=e(s,t,n)||n);return n&&J(s,t,n),n};const z=class extends A{constructor(){super(),this.current=1,this.totalPages=1,this.offset=2,this.justify="",this.ariaLabel="pagination",this.bordered=!1,this.firstLastNavigation=!1,this.navigationLabels={first:"First",previous:"Previous",next:"Next",last:"Last"}}get _pages(){return this._generatePages()}updated(s){(s.has("current")||s.has("totalPages")||s.has("offset"))&&this.updateComplete.then(()=>{var p;const t=(p=this.shadowRoot)==null?void 0:p.querySelector(`button[data-page="${this.current}"]`);t&&t.focus()})}_generatePages(){return this.totalPages<=1?[1]:this.offset===1?this._generatePagingPaddedByOne(this.current,this.totalPages):this._generatePagingPaddedByTwo(this.current,this.totalPages)}_getPaddedArray(s,t,p,n){return t&&s.unshift("..."),p&&s.push("..."),n<=1?[1]:[1,...s,n]}_generatePagingPaddedByOne(s,t){const p=[s-1,s,s+1].filter(e=>e>1&&e<t),n=s>3,h=s<t-2;return this._getPaddedArray(p,n,h,t)}_generatePagingPaddedByTwo(s,t){const p=[s-2,s-1,s,s+1,s+2].filter(r=>r>1&&r<t),n=s===5,h=s===t-4,e=s>5,C=s<t-4;return n&&p.unshift(2),h&&p.push(t-1),this._getPaddedArray(p,e,C,t)}_handlePageChange(s){if(s<1||s>this.totalPages||s===this.current)return;const t=this._pages;this.current=s;const p=new CustomEvent("page-change",{detail:{page:s,pages:t},bubbles:!0,composed:!0});this.dispatchEvent(p),this.onPageChange&&this.onPageChange(p)}_getJustifyClass(){switch(this.justify){case"start":return"pagination-start";case"center":return"pagination-center";case"end":return"pagination-end";default:return""}}render(){const s=this._getJustifyClass(),t=this._pages.length>0?this._pages:[1],p=this.navigationLabels||{first:"First",previous:"Previous",next:"Next",last:"Last"};return o`
      <nav
        class="pagination-container ${s}"
        part="ag-pagination-container"
        aria-label=${this.ariaLabel}
      >
        <ul class="pagination" part="ag-pagination">
          ${this.firstLastNavigation?o`
                <li
                  class="pagination-item ${this.current===1?"pagination-item-disabled":""}"
                  part="ag-pagination-item"
                >
                  <button
                    class="pagination-button pagination-button-first"
                    part="ag-pagination-button"
                    type="button"
                    @click=${()=>this._handlePageChange(1)}
                    ?disabled=${this.current===1}
                    aria-disabled=${this.current===1?"true":"false"}
                    aria-label="Goto page 1"
                  >
                    ${"«"} ${p.first}
                  </button>
                </li>
              `:""}
          <li
            class="pagination-item ${this.current===1?"pagination-item-disabled":""}"
            part="ag-pagination-item"
          >
            <button
              class="pagination-button pagination-button-previous"
              part="ag-pagination-button"
              type="button"
              @click=${()=>this._handlePageChange(this.current-1)}
              ?disabled=${this.current===1}
              aria-disabled=${this.current===1?"true":"false"}
              aria-label="Goto previous page"
            >
              ${"‹"} ${p.previous}
            </button>
          </li>
          ${t.map(n=>n!=="..."?o`
                  <li
                    class="pagination-item ${this.current===n?"pagination-item-active":""}"
                    part="ag-pagination-item"
                  >
                    <button
                      data-page="${n}"
                      @click=${()=>this._handlePageChange(n)}
                      type="button"
                      class="pagination-button"
                      part="ag-pagination-button"
                      aria-current=${this.current===n?"page":"false"}
                      aria-label=${this.current===n?`Page ${n}, current page`:`Goto page ${n}`}
                    >
                      ${n}
                    </button>
                  </li>
                `:o`
                  <li
                    class="pagination-item pagination-item-gap"
                    part="ag-pagination-item"
                  >
                    <span>${n}</span>
                  </li>
                `)}
          <li
            class="pagination-item ${this.current===this.totalPages?"pagination-item-disabled":""}"
            part="ag-pagination-item"
          >
            <button
              class="pagination-button pagination-button-next"
              part="ag-pagination-button"
              type="button"
              @click=${()=>this._handlePageChange(this.current+1)}
              ?disabled=${this.current===this.totalPages}
              aria-disabled=${this.current===this.totalPages?"true":"false"}
              aria-label="Goto next page"
            >
              ${p.next} ${"›"}
            </button>
          </li>
          ${this.firstLastNavigation?o`
                <li
                  class="pagination-item pagination-item-last ${this.current===this.totalPages?"pagination-item-disabled":""}"
                  part="ag-pagination-item"
                >
                  <button
                    type="button"
                    class="pagination-button pagination-button-last"
                    part="ag-pagination-button"
                    @click=${()=>this._handlePageChange(this.totalPages)}
                    ?disabled=${this.current===this.totalPages}
                    aria-disabled=${this.current===this.totalPages?"true":"false"}
                    aria-label="Goto last page"
                  >
                    ${p.last} ${"»"}
                  </button>
                </li>
              `:""}
        </ul>
      </nav>
    `}};z.styles=N`
    :host {
      display: block;
    }

    .pagination-container {
      display: flex;
      font-size: var(--ag-font-size-sm);
    }
    
    :host([justify="start"]),
    :host([justify="center"]),
    :host([justify="end"]) {
      width: 100%;
    }

    .pagination-center {
      justify-content: center;
    }

    .pagination-start {
      justify-content: flex-start;
    }

    .pagination-end {
      justify-content: flex-end;
    }

    .pagination {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .pagination-item {
      margin-inline-start: 0.125rem;
      margin-inline-end: 0.125rem;
    }

    /* The first previous next last buttons are slightly tighter */
    .pagination-button-first,
    .pagination-button-previous,
    .pagination-button-next,
    .pagination-button-last {
      padding-inline-start: var(--ag-space-1);
      padding-inline-end: var(--ag-space-1);
    }

    .pagination-button {
      color: var(--ag-primary-text);
      display: inline-block;
      line-height: var(--ag-line-height-4);
      padding-inline-start: var(--ag-space-2);
      padding-inline-end: var(--ag-space-2);
      border-radius: var(--ag-radius-md);
      border: var(--ag-border-width-1) solid transparent;
      background-color: transparent;
      cursor: pointer;
      font: inherit;
    }

    .pagination-button:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    @media (prefers-reduced-motion), (update: slow) {
      .pagination-button:focus-visible {
        transition-duration: 0.001ms !important;
      }
    }

    .pagination-item-disabled {
      cursor: not-allowed;
    }

    .pagination-button:disabled,
    .pagination-item-disabled .pagination-button {
      color: var(--ag-text-disabled);
      opacity: 0.8;
      pointer-events: none;
    }

    .pagination-item-active .pagination-button {
      background-color: var(--ag-background-tertiary);
      color: var(--ag-primary-text);
    }

    :host([bordered]) .pagination-item-active .pagination-button {
      background-color: transparent;
      border: var(--ag-border-width-1) solid var(--ag-primary-text);
      color: var(--ag-primary-text);
    }

    .pagination-item:hover .pagination-button {
      text-decoration: none;
    }

    .pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover
      .pagination-button {
      background-color: var(--ag-background-secondary);
    }

    .pagination-item-gap {
      display: flex;
      align-items: center;
      transform: translateY(var(--ag-space-1));
    }
  `;let c=z;y([k({type:Number})],c.prototype,"current");y([k({type:Number,attribute:"total-pages"})],c.prototype,"totalPages");y([k({type:Number})],c.prototype,"offset");y([k({type:String,reflect:!0})],c.prototype,"justify");y([k({type:String,attribute:"aria-label"})],c.prototype,"ariaLabel");y([k({type:Boolean,reflect:!0})],c.prototype,"bordered");y([k({type:Boolean,reflect:!0,attribute:"first-last-navigation"})],c.prototype,"firstLastNavigation");y([k({type:Object,attribute:!1})],c.prototype,"navigationLabels");y([k({attribute:!1})],c.prototype,"onPageChange");customElements.get("ag-pagination")||customElements.define("ag-pagination",c);const K=[".bordered",".firstLastNavigation",".navigationLabels","current","total-pages","offset","justify","aria-label"],Q=S({__name:"VuePagination",props:{current:{default:1},totalPages:{default:1},offset:{default:2},justify:{default:""},ariaLabel:{default:"pagination"},bordered:{type:Boolean,default:!1},firstLastNavigation:{type:Boolean,default:!1},navigationLabels:{default:()=>({first:"First",previous:"Previous",next:"Next",last:"Last"})}},emits:["page-change","update:current"],setup(a,{emit:s}){const t=s,p=L(),n=h=>{const e=h.detail;t("page-change",e),t("update:current",e.page)};return(h,e)=>(d(),g("ag-pagination",$({ref_key:"paginationRef",ref:p,".bordered":a.bordered,".firstLastNavigation":a.firstLastNavigation,".navigationLabels":a.navigationLabels,current:a.current,"total-pages":a.totalPages,offset:a.offset,justify:a.justify,"aria-label":a.ariaLabel,onPageChange:n},h.$attrs),[P(h.$slots,"default")],48,K))}});var X=Object.defineProperty,v=(a,s,t,p)=>{for(var n=void 0,h=a.length-1,e;h>=0;h--)(e=a[h])&&(n=e(s,t,n)||n);return n&&X(s,t,n),n};const R=class extends A{constructor(){super(),this._hasParentAndChild=!1,this.ariaLabel="content navigation",this.bordered=!1}willUpdate(s){(s.has("parent")||s.has("previous")||s.has("next"))&&(this._hasParentAndChild=!!this.parent&&(!!this.previous||!!this.next))}_renderChevronIcon(s=""){return o`<svg aria-hidden="true" fill="none" focusable="false" height="20" role="presentation" viewBox="0 0 24 24" width="20" class="${s} text-primary"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>`}_handleNavigate(s,t,p){if(!t||t.href&&!this.onNavigate)return;this.onNavigate&&p.preventDefault();const n=new CustomEvent("navigate",{detail:{direction:s,title:t.title,href:t.href},bubbles:!0,composed:!0});this.dispatchEvent(n),this.onNavigate&&this.onNavigate(n)}render(){return o`
      <nav
        class="content-pagination-container"
        part="ag-content-pagination-container"
        aria-label=${this.ariaLabel}
      >
        ${this.parent?o`
              <div
                class="content-pagination-parent"
                part="ag-content-pagination-parent"
              >
                ${this.parent.href?o`
                      <a
                        href=${this.parent.href}
                        class="content-pagination-parent-link"
                        part="ag-content-pagination-link"
                        aria-label="Up to: ${this.parent.title}"
                        @click=${s=>this._handleNavigate("parent",this.parent,s)}
                      >
                        <span class="content-pagination-icon">
                          <slot name="parent-icon">${"↑"}</slot>
                        </span>
                        <span>${this.parent.title}</span>
                      </a>
                    `:o`
                      <button
                        type="button"
                        class="content-pagination-parent-link"
                        part="ag-content-pagination-link"
                        aria-label="Up to: ${this.parent.title}"
                        @click=${s=>this._handleNavigate("parent",this.parent,s)}
                      >
                        <span class="content-pagination-icon">
                          <slot name="parent-icon">${"↑"}</slot>
                        </span>
                        <span>${this.parent.title}</span>
                      </button>
                    `}
              </div>
            `:""}

        <div
          class="content-pagination-nav ${this._hasParentAndChild?"content-pagination-nav-with-parent":""}"
          part="ag-content-pagination-nav"
        >
          ${this.previous?o`
                <div class="content-pagination-item content-pagination-item-previous">
                  ${this.previous.href?o`
                        <a
                          href=${this.previous.href}
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Previous: ${this.previous.title}"
                          @click=${s=>this._handleNavigate("previous",this.previous,s)}
                        >
                          <span class="content-pagination-icon">
                            <slot name="previous-icon">${this._renderChevronIcon()}</slot>
                          </span>
                          <span class="content-pagination-title">${this.previous.title}</span>
                        </a>
                      `:o`
                        <button
                          type="button"
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Previous: ${this.previous.title}"
                          @click=${s=>this._handleNavigate("previous",this.previous,s)}
                        >
                          <span class="content-pagination-icon">
                            <slot name="previous-icon">${this._renderChevronIcon()}</slot>
                          </span>
                          <span class="content-pagination-title">${this.previous.title}</span>
                        </button>
                      `}
                </div>
              `:o`<div class="content-pagination-item"></div>`}

          ${this.next?o`
                <div class="content-pagination-item content-pagination-item-next">
                  ${this.next.href?o`
                        <a
                          href=${this.next.href}
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Next: ${this.next.title}"
                          @click=${s=>this._handleNavigate("next",this.next,s)}
                        >
                          <span class="content-pagination-title">${this.next.title}</span>
                          <span class="content-pagination-icon">
                            <slot name="next-icon">${this._renderChevronIcon("rotate-180")}</slot>
                          </span>
                        </a>
                      `:o`
                        <button
                          type="button"
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Next: ${this.next.title}"
                          @click=${s=>this._handleNavigate("next",this.next,s)}
                        >
                          <span class="content-pagination-title">${this.next.title}</span>
                          <span class="content-pagination-icon">
                            <slot name="next-icon">${this._renderChevronIcon("rotate-180")}</slot>
                          </span>
                        </button>
                      `}
                </div>
              `:o`<div class="content-pagination-item"></div>`}
        </div>
      </nav>
    `}};R.styles=N`
    :host {
      display: block;
      width: 100%;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }

    .content-pagination-container {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-1);
    }

    .content-pagination-parent {
      display: flex;
      align-items: center;
      padding: var(--ag-space-2) var(--ag-space-5);
      border-radius: var(--ag-radius-md);
    }

    .content-pagination-parent-link {
      display: flex;
      align-items: center;
      gap: var(--ag-space-1);
      color: var(--ag-text-primary);
      text-decoration: none;
      font-size: var(--ag-font-size-sm);
      font-weight: 500;
      cursor: pointer;
      background: none;
      border: none;
      font-family: inherit;
    }

    .content-pagination-parent-link:hover {
      color: var(--ag-primary);
    }

    .content-pagination-parent-link:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      border-radius: var(--ag-radius-sm);
    }

    .content-pagination-nav {
      display: flex;
      justify-content: space-between;
      gap: var(--ag-space-4);
      padding-block-start: var(--ag-space-2);
      border-top: 0px solid transparent;
    }

    .content-pagination-nav-with-parent {
      border-top: 1px solid var(--ag-border);
    }

    .content-pagination-item {
      display: flex;
      flex: 0 1 auto;
      min-inline-size: 0;
      max-inline-size: 45%;
    }

    .content-pagination-item-previous {
      justify-content: flex-start;
    }

    .content-pagination-item-next {
      justify-content: flex-end;
      margin-inline-start: auto;
    }

    .content-pagination-link {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2, 0.5rem);
      padding: var(--ag-space-3) var(--ag-space-4);
      border-radius: var(--ag-radius-md);
      background-color: var(--ag-background-primary);
      color: var(--ag-text-primary);
      text-decoration: none;
      font-size: var(--ag-font-size-base);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      font-family: inherit;
      min-width: 0;
    }

    :host([bordered]) .content-pagination-link {
      border: 1px solid var(--ag-border);
    }
    
    .content-pagination-link:hover {
      background-color: var(--ag-background-secondary);
      color: var(--ag-primary);
    }

    .content-pagination-link:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    .content-pagination-link:active {
      transform: translateY(1px);
    }

    button.content-pagination-link {
      background-color: transparent;
      border: 0;
    }

    :host([bordered]) button.content-pagination-link {
      border: 1px solid var(--ag-border);
    }

    .content-pagination-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .content-pagination-icon {
      flex-shrink: 0;
      font-size: 1.25em;
      line-height: 1;
    }

    /* Responsive: stack on very small screens */
    @media (max-width: 640px) {
      .content-pagination-nav {
        flex-direction: column;
        gap: var(--ag-space-3);
      }

      .content-pagination-item {
        max-inline-size: 100%;
      }

      .content-pagination-item-next {
        margin-inline-start: 0;
      }
    }

    @media (prefers-reduced-motion) {
      .content-pagination-link {
        transition: none;
      }

      .content-pagination-link:active {
        transform: none;
      }
    }
  `;let u=R;v([k({type:Object,attribute:!1})],u.prototype,"previous");v([k({type:Object,attribute:!1})],u.prototype,"next");v([k({type:Object,attribute:!1})],u.prototype,"parent");v([k({type:String,attribute:"aria-label"})],u.prototype,"ariaLabel");v([k({type:Boolean,reflect:!0})],u.prototype,"bordered");v([k({attribute:!1})],u.prototype,"onNavigate");v([k({type:Boolean,reflect:!0,attribute:"has-parent"})],u.prototype,"_hasParentAndChild");customElements.get("ag-content-pagination")||customElements.define("ag-content-pagination",u);const Z=["aria-label",".bordered"],ss={key:0,slot:"previous-icon"},is={key:1,slot:"next-icon"},as={key:2,slot:"parent-icon"},ns=S({__name:"VueContentPagination",props:{previous:{},next:{},parent:{},bordered:{type:Boolean,default:!1},ariaLabel:{default:"content navigation"}},emits:["navigate"],setup(a,{emit:s}){const t=H(),p=U(()=>{const r={...t};return n.previous&&(r.previous=n.previous),n.next&&(r.next=n.next),n.parent&&(r.parent=n.parent),r}),n=a,h=s,e=L(),C=r=>{const b=r.detail;h("navigate",b)};return(r,b)=>(d(),g("ag-content-pagination",$({ref_key:"contentPaginationRef",ref:e,"aria-label":a.ariaLabel,".bordered":a.bordered,onNavigate:C},p.value),[r.$slots["previous-icon"]?(d(),g("span",ss,[P(r.$slots,"previous-icon")])):m("",!0),r.$slots["next-icon"]?(d(),g("span",is,[P(r.$slots,"next-icon")])):m("",!0),r.$slots["parent-icon"]?(d(),g("span",as,[P(r.$slots,"parent-icon")])):m("",!0)],48,Z))}}),ts={name:"PaginationExamples",components:{VuePagination:Q},data(){return{basicPageFirstLast:5,basicPage:5,basicPageMessage:null,basicPageMessageFirstLast:null,borderedPage:3,noFirstLastPage:5,offset2Page:25,offset1Page:25,spanishPage:1,smallPage:3,largePage:50,customPage:5,monochromeCustomPage:5,monochromeCustomPaginationStyles:`
        <style>
          .monochrome-custom-pagination::part(ag-pagination-container) {
            padding: 1rem;
            background: #000000;
            border-radius: 12px;
          }
          .monochrome-custom-pagination::part(ag-pagination) {
            gap: 0.25rem;
          }
          .monochrome-custom-pagination::part(ag-pagination-button) {
            min-width: 2.5rem;
            height: 2.5rem;
            background: transparent;
            color: #ffffff;
            border: 1px solid #404040;
            font-weight: 400;
            transition: all 0.2s ease;
          }
          .monochrome-custom-pagination::part(ag-pagination-button):hover:not(:disabled) {
            background: #1a1a1a;
            border-color: #ffffff;
            font-weight: 600;
            transform: translateY(-1px);
          }
          .monochrome-custom-pagination .pagination-item-active .pagination-button {
            background: #ffffff !important;
            color: #000000 !important;
            font-weight: 600;
            border-color: #ffffff;
          }
          .monochrome-custom-pagination::part(ag-pagination-button):disabled {
            background: transparent;
            color: #404040;
            border-color: #262626;
          }
        </style>
      `}},methods:{handleBasicPageChangeFirstLast(a){this.basicPageFirstLast=a.page,this.basicPageMessageFirstLast=`Current page: ${a.page} of 20`},handleBasicPageChange(a){this.basicPage=a.page,this.basicPageMessage=`Current page: ${a.page} of 20`},handleBorderedPageChange(a){this.borderedPage=a.page},handleNoFirstLastPageChange(a){this.noFirstLastPage=a.page},handleOffset2PageChange(a){this.offset2Page=a.page},handleOffset1PageChange(a){this.offset1Page=a.page},handleSpanishPageChange(a){this.spanishPage=a.page},handleSmallPageChange(a){this.smallPage=a.page},handleLargePageChange(a){this.largePage=a.page},handleCustomPageChange(a){this.customPage=a.page},handleMonochromeCustomPageChange(a){this.monochromeCustomPage=a.page}}},es={class:"stacked-mobile mbe4"},ls={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},hs={class:"stacked-mobile mbe4"},ps={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},os={class:"stacked-mobile mbe4"},rs={class:"stacked-mobile mbe4"},ks={class:"stacked-mobile mbe4"},gs={class:"stacked-mobile mbe4"},ds={class:"stacked-mobile mbe4"},Fs={class:"stacked-mobile mbe4"},cs={class:"stacked-mobile mbe4"},ys={class:"stacked-mobile mbe4"},us={class:"stacked-mobile mbe4"},ms={class:"stacked-mobile mbe4"},vs=["innerHTML"];function Cs(a,s,t,p,n,h){const e=B("VuePagination");return d(),g("section",null,[s[0]||(s[0]=i("div",{class:"mbe4"},[i("h2",null,"Basic Pagination")],-1)),i("div",es,[l(e,{current:n.basicPage,"total-pages":20,onPageChange:h.handleBasicPageChange},null,8,["current","onPageChange"]),n.basicPageMessage?(d(),g("p",ls,E(n.basicPageMessage),1)):m("",!0)]),s[1]||(s[1]=i("div",{class:"mbe4"},[i("h2",null,"First Last Navigation Opt-In")],-1)),i("div",hs,[l(e,{current:n.basicPageFirstLast,"total-pages":20,"first-last-navigation":!0,onPageChange:h.handleBasicPageChangeFirstLast},null,8,["current","onPageChange"]),n.basicPageMessageFirstLast?(d(),g("p",ps,E(n.basicPageMessageFirstLast),1)):m("",!0)]),s[2]||(s[2]=i("div",{class:"mbe4"},[i("h2",null,"Bordered Style")],-1)),i("div",os,[l(e,{current:n.borderedPage,"total-pages":15,bordered:"",onPageChange:h.handleBorderedPageChange},null,8,["current","onPageChange"])]),s[3]||(s[3]=i("div",{class:"mbe4"},[i("h2",null,"Offset Comparison")],-1)),s[4]||(s[4]=i("p",null," Offset 2 (default) - shows 2 buttons on each side: ",-1)),i("div",rs,[l(e,{current:n.offset2Page,"total-pages":50,offset:2,onPageChange:h.handleOffset2PageChange},null,8,["current","onPageChange"])]),s[5]||(s[5]=i("p",{style:{margin:"1rem 0 0.5rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," Offset 1 - shows 1 button on each side: ",-1)),i("div",ks,[l(e,{current:n.offset1Page,"total-pages":50,offset:1,onPageChange:h.handleOffset1PageChange},null,8,["current","onPageChange"])]),s[6]||(s[6]=i("div",{class:"mbe4"},[i("h2",null,"Alignment Options")],-1)),s[7]||(s[7]=i("p",null," Justify 'start', 'center', and 'end' respectively: ",-1)),i("div",gs,[l(e,{current:1,"total-pages":10,justify:"start"})]),i("div",ds,[l(e,{current:1,"total-pages":10,justify:"center"})]),i("div",Fs,[l(e,{current:1,"total-pages":10,justify:"end"})]),s[8]||(s[8]=i("div",{class:"mbe4"},[i("h2",null,"Custom Navigation Labels (Spanish)")],-1)),i("div",cs,[l(e,{current:n.spanishPage,"total-pages":10,"first-last-navigation":!0,"navigation-labels":{first:"Primera",previous:"Anterior",next:"Siguiente",last:"Última"},onPageChange:h.handleSpanishPageChange},null,8,["current","onPageChange"])]),s[9]||(s[9]=i("div",{class:"mbe4"},[i("h2",null,"Small Page Count")],-1)),s[10]||(s[10]=i("p",null," When there are few pages, all page numbers are shown: ",-1)),i("div",ys,[l(e,{current:n.smallPage,"total-pages":5,onPageChange:h.handleSmallPageChange},null,8,["current","onPageChange"])]),s[11]||(s[11]=i("div",{class:"mbe4"},[i("h2",null,"Large Page Count")],-1)),s[12]||(s[12]=i("p",null," With many pages, ellipsis (...) indicates skipped pages: ",-1)),i("div",us,[l(e,{current:n.largePage,"total-pages":100,onPageChange:h.handleLargePageChange},null,8,["current","onPageChange"])]),s[13]||(s[13]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization (Monochrome)")],-1)),i("div",ms,[i("div",{innerHTML:n.monochromeCustomPaginationStyles},null,8,vs),l(e,{class:"monochrome-custom-pagination",current:n.monochromeCustomPage,"total-pages":10,onPageChange:h.handleMonochromeCustomPageChange},null,8,["current","onPageChange"])])])}const fs=M(ts,[["render",Cs]]),bs={name:"ContentPaginationExamples",components:{VueContentPagination:ns,ChevronLeft:W,ChevronRight:G,ChevronUp:Y},data(){return{navigationMessage:null,navigationMessageNoHref:null,monochromeCustomContentPaginationStyles:`
        <style>
          .monochrome-custom-content-pagination::part(ag-content-pagination-container) {
            padding: 1.5rem;
            background: #000000;
            border-radius: 12px;
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-parent) {
            border-radius: 8px;
            transition: all 0.2s ease;
            padding: 0;
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-parent):hover {
            font-weight: 700;
            text-decoration: underline;
            text-underline-offset: 3px;
            transform: translateY(-1px);
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-link) {
            padding: var(--ag-space-3) var(--ag-space-4);
            background: transparent;
            color: #ffffff;
            border-radius: 8px;
            transition: all 0.2s ease;
            font-weight: 400;
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-link):hover {
            background: #1a1a1a;
            font-weight: 600;
            text-decoration: underline;
            text-underline-offset: 3px;
            transform: translateY(-2px);
          }
        </style>
      `}},methods:{handleNavigate(a){this.navigationMessage=`Clicked ${a.type}: "${a.item.title}"${a.item.href?` → ${a.item.href}`:" (no href)"}`,console.log("Navigate:",a)},handleNavigateNoHref(a){this.navigationMessageNoHref=`Clicked ${a.type}: "${a.item.title}" (no href provided)`,console.log("Navigate (no href):",a)}}},Bs={class:"stacked-mobile mbe4"},Ps={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},Es={class:"stacked-mobile mbe4"},As={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},Ds={class:"stacked-mobile mbe4"},xs={class:"stacked-mobile mbe4"},qs={class:"stacked-mobile mbe4"},ws={class:"stacked-mobile mbe4"},Ns={class:"stacked-mobile mbe4"},Ss={class:"stacked-mobile mbe4"},Ls={class:"stacked-mobile mbe4"},$s=["innerHTML"];function Ms(a,s,t,p,n,h){const e=B("VueContentPagination"),C=B("ChevronLeft"),r=B("ChevronRight"),b=B("ChevronUp");return d(),g("section",null,[s[0]||(s[0]=i("div",{class:"mbe4"},[i("h2",null,"Basic Content Pagination")],-1)),i("div",Bs,[l(e,{previous:{title:"Introduction",href:"#examples-1"},next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"},onNavigate:h.handleNavigate},null,8,["onNavigate"]),n.navigationMessage?(d(),g("p",Ps,E(n.navigationMessage),1)):m("",!0)]),s[1]||(s[1]=i("div",{class:"mbe4"},[i("h2",null,"Without hrefs (navigate event only)")],-1)),s[2]||(s[2]=i("p",null," Links without href still fire navigate events: ",-1)),i("div",Es,[l(e,{previous:{title:"Introduction"},next:{title:"Getting Started"},parent:{title:"Documentation"},onNavigate:h.handleNavigateNoHref},null,8,["onNavigate"]),n.navigationMessageNoHref?(d(),g("p",As,E(n.navigationMessageNoHref),1)):m("",!0)]),s[3]||(s[3]=i("div",{class:"mbe4"},[i("h2",null,"Previous and Next Only")],-1)),s[4]||(s[4]=i("p",null," Omit parent link for simpler sequential navigation: ",-1)),i("div",Ds,[l(e,{previous:{title:"Chapter 1: Basics",href:"#examples-1"},next:{title:"Chapter 3: Advanced",href:"#examples-1"}})]),s[5]||(s[5]=i("div",{class:"mbe4"},[i("h2",null,"Parent Only")],-1)),s[6]||(s[6]=i("p",null," Show only the parent/overview link: ",-1)),i("div",xs,[l(e,{parent:{title:"Back to Documentation",href:"#examples-1"}})]),s[7]||(s[7]=i("div",{class:"mbe4"},[i("h2",null,"Bordered Style")],-1)),i("div",qs,[l(e,{previous:{title:"Installation",href:"#examples-1"},next:{title:"Configuration",href:"#examples-1"},parent:{title:"Guides",href:"#examples-1"},bordered:""})]),s[8]||(s[8]=i("div",{class:"mbe4"},[i("h2",null,"Custom Icons")],-1)),s[9]||(s[9]=i("p",null," Override default icons using slots: ",-1)),i("div",ws,[l(e,{previous:{title:"Prev Page",href:"#examples-1"},next:{title:"Next Page",href:"#examples-1"},parent:{title:"Overview",href:"#examples-1"}},{"previous-icon":F(()=>[l(C,{size:20})]),"next-icon":F(()=>[l(r,{size:20})]),"parent-icon":F(()=>[l(b,{size:20})]),_:1})]),s[10]||(s[10]=i("div",{class:"mbe4"},[i("h2",null,"Only Next")],-1)),s[11]||(s[11]=i("p",null," First page scenario - only show next link: ",-1)),i("div",Ns,[l(e,{next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}})]),s[12]||(s[12]=i("div",{class:"mbe4"},[i("h2",null,"Only Previous")],-1)),s[13]||(s[13]=i("p",null," Last page scenario - only show previous link: ",-1)),i("div",Ss,[l(e,{previous:{title:"Deployment",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}})]),s[14]||(s[14]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization (Monochrome)")],-1)),i("div",Ls,[i("div",{innerHTML:n.monochromeCustomContentPaginationStyles},null,8,$s),l(e,{class:"monochrome-custom-content-pagination",previous:{title:"Introduction",href:"#examples-1"},next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}},{"previous-icon":F(()=>[l(C,{size:20})]),"next-icon":F(()=>[l(r,{size:20})]),"parent-icon":F(()=>[l(b,{size:20})]),_:1})])])}const Os=M(bs,[["render",Ms]]);class _ extends A{constructor(){super(),this.basicPageFirstLast=5,this.basicPage=5,this.basicPageMessage=null,this.basicPageMessageFirstLast=null,this.borderedPage=3,this.offset2Page=25,this.offset1Page=25,this.spanishPage=1,this.smallPage=3,this.largePage=50,this.monochromeCustomPage=5}createRenderRoot(){return this}handleBasicPageChangeFirstLast(s){this.basicPageFirstLast=s.detail.page,this.basicPageMessageFirstLast=`Current page: ${s.detail.page} of 20`}handleBasicPageChange(s){this.basicPage=s.detail.page,this.basicPageMessage=`Current page: ${s.detail.page} of 20`}handleBorderedPageChange(s){this.borderedPage=s.detail.page}handleOffset2PageChange(s){this.offset2Page=s.detail.page}handleOffset1PageChange(s){this.offset1Page=s.detail.page}handleSpanishPageChange(s){this.spanishPage=s.detail.page}handleSmallPageChange(s){this.smallPage=s.detail.page}handleLargePageChange(s){this.largePage=s.detail.page}handleMonochromeCustomPageChange(s){this.monochromeCustomPage=s.detail.page}render(){return o`
      <section>
        <div class="mbe4">
          <h2>Basic Pagination</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.basicPage}
            total-pages="20"
            @page-change=${this.handleBasicPageChange}
          ></ag-pagination>
          ${this.basicPageMessage?o`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.basicPageMessage}
            </p>
          `:""}
        </div>

        <div class="mbe4">
          <h2>First Last Navigation Opt-In</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.basicPageFirstLast}
            total-pages="20"
            first-last-navigation
            @page-change=${this.handleBasicPageChangeFirstLast}
          ></ag-pagination>
          ${this.basicPageMessageFirstLast?o`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.basicPageMessageFirstLast}
            </p>
          `:""}
        </div>

        <div class="mbe4">
          <h2>Bordered Style</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.borderedPage}
            total-pages="15"
            bordered
            @page-change=${this.handleBorderedPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Offset Comparison</h2>
        </div>
        <p>
          Offset 2 (default) - shows 2 buttons on each side:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.offset2Page}
            total-pages="50"
            offset="2"
            @page-change=${this.handleOffset2PageChange}
          ></ag-pagination>
        </div>
        <p style="margin: 1rem 0 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Offset 1 - shows 1 button on each side:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.offset1Page}
            total-pages="50"
            offset="1"
            @page-change=${this.handleOffset1PageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Alignment Options</h2>
        </div>
        <p>
          Justify 'start', 'center', and 'end' respectively:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="start"
          ></ag-pagination>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="center"
          ></ag-pagination>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="end"
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Custom Navigation Labels (Spanish)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.spanishPage}
            total-pages="10"
            first-last-navigation
            navigation-labels='{"first":"Primera","previous":"Anterior","next":"Siguiente","last":"Última"}'
            @page-change=${this.handleSpanishPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Small Page Count</h2>
        </div>
        <p>
          When there are few pages, all page numbers are shown:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.smallPage}
            total-pages="5"
            @page-change=${this.handleSmallPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Large Page Count</h2>
        </div>
        <p>
          With many pages, ellipsis (...) indicates skipped pages:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.largePage}
            total-pages="100"
            @page-change=${this.handleLargePageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization (Monochrome)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            class="monochrome-custom-pagination"
            current=${this.monochromeCustomPage}
            total-pages="10"
            @page-change=${this.handleMonochromeCustomPageChange}
          ></ag-pagination>
        </div>
      </section>

      <style>
        .monochrome-custom-pagination::part(ag-pagination-container) {
          padding: 1rem;
          background: #000000;
          border-radius: 12px;
        }
        .monochrome-custom-pagination::part(ag-pagination) {
          gap: 0.25rem;
        }
        .monochrome-custom-pagination::part(ag-pagination-button) {
          min-width: 2.5rem;
          height: 2.5rem;
          background: transparent;
          color: #ffffff;
          border: 1px solid #404040;
          font-weight: 400;
          transition: all 0.2s ease;
        }
        .monochrome-custom-pagination::part(ag-pagination-button):hover:not(:disabled) {
          background: #1a1a1a;
          border-color: #ffffff;
          font-weight: 600;
          transform: translateY(-1px);
        }
        .monochrome-custom-pagination .pagination-item-active .pagination-button {
          background: #ffffff !important;
          color: #000000 !important;
          font-weight: 600;
          border-color: #ffffff;
        }
        .monochrome-custom-pagination::part(ag-pagination-button):disabled {
          background: transparent;
          color: #404040;
          border-color: #262626;
        }
      </style>
    `}}D(_,"properties",{basicPageFirstLast:{type:Number},basicPage:{type:Number},basicPageMessage:{type:String},basicPageMessageFirstLast:{type:String},borderedPage:{type:Number},offset2Page:{type:Number},offset1Page:{type:Number},spanishPage:{type:Number},smallPage:{type:Number},largePage:{type:Number},monochromeCustomPage:{type:Number}});customElements.define("pagination-lit-examples",_);class I extends A{constructor(){super(),this.navigationMessage=null,this.navigationMessageNoHref=null}createRenderRoot(){return this}handleNavigate(s){this.navigationMessage=`Clicked ${s.detail.type}: "${s.detail.item.title}"${s.detail.item.href?` → ${s.detail.item.href}`:" (no href)"}`,console.log("Navigate:",s.detail)}handleNavigateNoHref(s){this.navigationMessageNoHref=`Clicked ${s.detail.type}: "${s.detail.item.title}" (no href provided)`,console.log("Navigate (no href):",s.detail)}render(){return o`
      <section>
        <div class="mbe4">
          <h2>Basic Content Pagination</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Introduction","href":"#examples-1"}'
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
            @navigate=${this.handleNavigate}
          ></ag-content-pagination>
          ${this.navigationMessage?o`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.navigationMessage}
            </p>
          `:""}
        </div>

        <div class="mbe4">
          <h2>Without hrefs (navigate event only)</h2>
        </div>
        <p>
          Links without href still fire navigate events:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Introduction"}'
            next='{"title":"Getting Started"}'
            parent='{"title":"Documentation"}'
            @navigate=${this.handleNavigateNoHref}
          ></ag-content-pagination>
          ${this.navigationMessageNoHref?o`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.navigationMessageNoHref}
            </p>
          `:""}
        </div>

        <div class="mbe4">
          <h2>Previous and Next Only</h2>
        </div>
        <p>
          Omit parent link for simpler sequential navigation:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Chapter 1: Basics","href":"#examples-1"}'
            next='{"title":"Chapter 3: Advanced","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Parent Only</h2>
        </div>
        <p>
          Show only the parent/overview link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            parent='{"title":"Back to Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Bordered Style</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Installation","href":"#examples-1"}'
            next='{"title":"Configuration","href":"#examples-1"}'
            parent='{"title":"Guides","href":"#examples-1"}'
            bordered
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Custom Icons</h2>
        </div>
        <p>
          Override default icons using slots:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Prev Page","href":"#examples-1"}'
            next='{"title":"Next Page","href":"#examples-1"}'
            parent='{"title":"Overview","href":"#examples-1"}'
          >
            <span slot="previous-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </span>
            <span slot="next-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
            <span slot="parent-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          </ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Only Next</h2>
        </div>
        <p>
          First page scenario - only show next link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Only Previous</h2>
        </div>
        <p>
          Last page scenario - only show previous link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Deployment","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization (Monochrome)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            class="monochrome-custom-content-pagination"
            previous='{"title":"Introduction","href":"#examples-1"}'
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          >
            <span slot="previous-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </span>
            <span slot="next-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
            <span slot="parent-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          </ag-content-pagination>
        </div>
      </section>

      <style>
        .monochrome-custom-content-pagination::part(ag-content-pagination-container) {
          padding: 1.5rem;
          background: #000000;
          border-radius: 12px;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-parent) {
          border-radius: 8px;
          transition: all 0.2s ease;
          padding: 0;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-parent):hover {
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
          transform: translateY(-1px);
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-link) {
          padding: var(--ag-space-3) var(--ag-space-4);
          background: transparent;
          color: #ffffff;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-weight: 400;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-link):hover {
          background: #1a1a1a;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          transform: translateY(-2px);
        }
      </style>
    `}}D(I,"properties",{navigationMessage:{type:String},navigationMessageNoHref:{type:String}});customElements.define("content-pagination-lit-examples",I);const zs=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Pagination</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="basicPage"
        :total-pages="20"
        @page-change="handleBasicPageChange"
      />
      <p
        v-if="basicPageMessage"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ basicPageMessage }}
      </p>
    </div>

    <div class="mbe4">
      <h2>First Last Navigation Opt-In</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="basicPageFirstLast"
        :total-pages="20"
        :first-last-navigation="true"
        @page-change="handleBasicPageChangeFirstLast"
      />
      <p
        v-if="basicPageMessageFirstLast"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ basicPageMessageFirstLast }}
      </p>
    </div>

    <div class="mbe4">
      <h2>Bordered Style</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="borderedPage"
        :total-pages="15"
        bordered
        @page-change="handleBorderedPageChange"
      />
    </div>
    <div class="mbe4">
      <h2>Offset Comparison</h2>
    </div>
    <p>
      Offset 2 (default) - shows 2 buttons on each side:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="offset2Page"
        :total-pages="50"
        :offset="2"
        @page-change="handleOffset2PageChange"
      />
    </div>
    <p style="margin: 1rem 0 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
      Offset 1 - shows 1 button on each side:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="offset1Page"
        :total-pages="50"
        :offset="1"
        @page-change="handleOffset1PageChange"
      />
    </div>

    <div class="mbe4">
      <h2>Alignment Options</h2>
    </div>
    <p>
      Justify 'start', 'center', and 'end' respectively:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="1"
        :total-pages="10"
        justify="start"
      />
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="1"
        :total-pages="10"
        justify="center"
      />
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="1"
        :total-pages="10"
        justify="end"
      />
    </div>

    <div class="mbe4">
      <h2>Custom Navigation Labels (Spanish)</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="spanishPage"
        :total-pages="10"
        :first-last-navigation="true"
        :navigation-labels="{
          first: 'Primera',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'Última'
        }"
        @page-change="handleSpanishPageChange"
      />
    </div>

    <div class="mbe4">
      <h2>Small Page Count</h2>
    </div>
    <p>
      When there are few pages, all page numbers are shown:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="smallPage"
        :total-pages="5"
        @page-change="handleSmallPageChange"
      />
    </div>

    <div class="mbe4">
      <h2>Large Page Count</h2>
    </div>
    <p>
      With many pages, ellipsis (...) indicates skipped pages:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="largePage"
        :total-pages="100"
        @page-change="handleLargePageChange"
      />
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization (Monochrome)</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <div v-html="monochromeCustomPaginationStyles"></div>
      <VuePagination
        class="monochrome-custom-pagination"
        :current="monochromeCustomPage"
        :total-pages="10"
        @page-change="handleMonochromeCustomPageChange"
      />
    </div>
  </section>
</template>

<script>
import { VuePagination } from "agnosticui-core/pagination/vue";

export default {
  name: "PaginationExamples",
  components: {
    VuePagination,
  },
  data() {
    return {
      basicPageFirstLast: 5,
      basicPage: 5,
      basicPageMessage: null,
      basicPageMessageFirstLast: null,
      borderedPage: 3,
      noFirstLastPage: 5,
      offset2Page: 25,
      offset1Page: 25,
      spanishPage: 1,
      smallPage: 3,
      largePage: 50,
      customPage: 5,
      monochromeCustomPage: 5,
      monochromeCustomPaginationStyles: \`
        <style>
          .monochrome-custom-pagination::part(ag-pagination-container) {
            padding: 1rem;
            background: #000000;
            border-radius: 12px;
          }
          .monochrome-custom-pagination::part(ag-pagination) {
            gap: 0.25rem;
          }
          .monochrome-custom-pagination::part(ag-pagination-button) {
            min-width: 2.5rem;
            height: 2.5rem;
            background: transparent;
            color: #ffffff;
            border: 1px solid #404040;
            font-weight: 400;
            transition: all 0.2s ease;
          }
          .monochrome-custom-pagination::part(ag-pagination-button):hover:not(:disabled) {
            background: #1a1a1a;
            border-color: #ffffff;
            font-weight: 600;
            transform: translateY(-1px);
          }
          .monochrome-custom-pagination .pagination-item-active .pagination-button {
            background: #ffffff !important;
            color: #000000 !important;
            font-weight: 600;
            border-color: #ffffff;
          }
          .monochrome-custom-pagination::part(ag-pagination-button):disabled {
            background: transparent;
            color: #404040;
            border-color: #262626;
          }
        </style>
      \`,
    };
  },
  methods: {
    handleBasicPageChangeFirstLast(detail) {
      this.basicPageFirstLast = detail.page;
      this.basicPageMessageFirstLast = \`Current page: \${detail.page} of 20\`;
    },
    handleBasicPageChange(detail) {
      this.basicPage = detail.page;
      this.basicPageMessage = \`Current page: \${detail.page} of 20\`;
    },
    handleBorderedPageChange(detail) {
      this.borderedPage = detail.page;
    },
    handleNoFirstLastPageChange(detail) {
      this.noFirstLastPage = detail.page;
    },
    handleOffset2PageChange(detail) {
      this.offset2Page = detail.page;
    },
    handleOffset1PageChange(detail) {
      this.offset1Page = detail.page;
    },
    handleSpanishPageChange(detail) {
      this.spanishPage = detail.page;
    },
    handleSmallPageChange(detail) {
      this.smallPage = detail.page;
    },
    handleLargePageChange(detail) {
      this.largePage = detail.page;
    },
    handleCustomPageChange(detail) {
      this.customPage = detail.page;
    },
    handleMonochromeCustomPageChange(detail) {
      this.monochromeCustomPage = detail.page;
    },
  },
};
<\/script>
`,Rs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/pagination';

export class PaginationLitExamples extends LitElement {
  static properties = {
    basicPageFirstLast: { type: Number },
    basicPage: { type: Number },
    basicPageMessage: { type: String },
    basicPageMessageFirstLast: { type: String },
    borderedPage: { type: Number },
    offset2Page: { type: Number },
    offset1Page: { type: Number },
    spanishPage: { type: Number },
    smallPage: { type: Number },
    largePage: { type: Number },
    monochromeCustomPage: { type: Number }
  };

  constructor() {
    super();
    this.basicPageFirstLast = 5;
    this.basicPage = 5;
    this.basicPageMessage = null;
    this.basicPageMessageFirstLast = null;
    this.borderedPage = 3;
    this.offset2Page = 25;
    this.offset1Page = 25;
    this.spanishPage = 1;
    this.smallPage = 3;
    this.largePage = 50;
    this.monochromeCustomPage = 5;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleBasicPageChangeFirstLast(e) {
    this.basicPageFirstLast = e.detail.page;
    this.basicPageMessageFirstLast = \`Current page: \${e.detail.page} of 20\`;
  }

  handleBasicPageChange(e) {
    this.basicPage = e.detail.page;
    this.basicPageMessage = \`Current page: \${e.detail.page} of 20\`;
  }

  handleBorderedPageChange(e) {
    this.borderedPage = e.detail.page;
  }

  handleOffset2PageChange(e) {
    this.offset2Page = e.detail.page;
  }

  handleOffset1PageChange(e) {
    this.offset1Page = e.detail.page;
  }

  handleSpanishPageChange(e) {
    this.spanishPage = e.detail.page;
  }

  handleSmallPageChange(e) {
    this.smallPage = e.detail.page;
  }

  handleLargePageChange(e) {
    this.largePage = e.detail.page;
  }

  handleMonochromeCustomPageChange(e) {
    this.monochromeCustomPage = e.detail.page;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Pagination</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.basicPage}
            total-pages="20"
            @page-change=\${this.handleBasicPageChange}
          ></ag-pagination>
          \${this.basicPageMessage ? html\`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              \${this.basicPageMessage}
            </p>
          \` : ''}
        </div>

        <div class="mbe4">
          <h2>First Last Navigation Opt-In</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.basicPageFirstLast}
            total-pages="20"
            first-last-navigation
            @page-change=\${this.handleBasicPageChangeFirstLast}
          ></ag-pagination>
          \${this.basicPageMessageFirstLast ? html\`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              \${this.basicPageMessageFirstLast}
            </p>
          \` : ''}
        </div>

        <div class="mbe4">
          <h2>Bordered Style</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.borderedPage}
            total-pages="15"
            bordered
            @page-change=\${this.handleBorderedPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Offset Comparison</h2>
        </div>
        <p>
          Offset 2 (default) - shows 2 buttons on each side:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.offset2Page}
            total-pages="50"
            offset="2"
            @page-change=\${this.handleOffset2PageChange}
          ></ag-pagination>
        </div>
        <p style="margin: 1rem 0 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Offset 1 - shows 1 button on each side:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.offset1Page}
            total-pages="50"
            offset="1"
            @page-change=\${this.handleOffset1PageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Alignment Options</h2>
        </div>
        <p>
          Justify 'start', 'center', and 'end' respectively:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="start"
          ></ag-pagination>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="center"
          ></ag-pagination>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="end"
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Custom Navigation Labels (Spanish)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.spanishPage}
            total-pages="10"
            first-last-navigation
            navigation-labels='{"first":"Primera","previous":"Anterior","next":"Siguiente","last":"Última"}'
            @page-change=\${this.handleSpanishPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Small Page Count</h2>
        </div>
        <p>
          When there are few pages, all page numbers are shown:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.smallPage}
            total-pages="5"
            @page-change=\${this.handleSmallPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Large Page Count</h2>
        </div>
        <p>
          With many pages, ellipsis (...) indicates skipped pages:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=\${this.largePage}
            total-pages="100"
            @page-change=\${this.handleLargePageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization (Monochrome)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            class="monochrome-custom-pagination"
            current=\${this.monochromeCustomPage}
            total-pages="10"
            @page-change=\${this.handleMonochromeCustomPageChange}
          ></ag-pagination>
        </div>
      </section>

      <style>
        .monochrome-custom-pagination::part(ag-pagination-container) {
          padding: 1rem;
          background: #000000;
          border-radius: 12px;
        }
        .monochrome-custom-pagination::part(ag-pagination) {
          gap: 0.25rem;
        }
        .monochrome-custom-pagination::part(ag-pagination-button) {
          min-width: 2.5rem;
          height: 2.5rem;
          background: transparent;
          color: #ffffff;
          border: 1px solid #404040;
          font-weight: 400;
          transition: all 0.2s ease;
        }
        .monochrome-custom-pagination::part(ag-pagination-button):hover:not(:disabled) {
          background: #1a1a1a;
          border-color: #ffffff;
          font-weight: 600;
          transform: translateY(-1px);
        }
        .monochrome-custom-pagination .pagination-item-active .pagination-button {
          background: #ffffff !important;
          color: #000000 !important;
          font-weight: 600;
          border-color: #ffffff;
        }
        .monochrome-custom-pagination::part(ag-pagination-button):disabled {
          background: transparent;
          color: #404040;
          border-color: #262626;
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('pagination-lit-examples', PaginationLitExamples);
`,_s=`import { useState } from "react";
import { ReactPagination } from "agnosticui-core/pagination/react";

export default function PaginationReactExamples() {
  const [basicPageFirstLast, setBasicPageFirstLast] = useState(5);
  const [basicPage, setBasicPage] = useState(5);
  const [basicPageMessage, setBasicPageMessage] = useState(null);
  const [basicPageMessageFirstLast, setBasicPageMessageFirstLast] = useState(null);
  const [borderedPage, setBorderedPage] = useState(3);
  const [offset2Page, setOffset2Page] = useState(25);
  const [offset1Page, setOffset1Page] = useState(25);
  const [spanishPage, setSpanishPage] = useState(1);
  const [smallPage, setSmallPage] = useState(3);
  const [largePage, setLargePage] = useState(50);
  const [monochromeCustomPage, setMonochromeCustomPage] = useState(5);

  const handleBasicPageChangeFirstLast = (event) => {
    setBasicPageFirstLast(event.detail.page);
    setBasicPageMessageFirstLast(\`Current page: \${event.detail.page} of 20\`);
  };

  const handleBasicPageChange = (event) => {
    setBasicPage(event.detail.page);
    setBasicPageMessage(\`Current page: \${event.detail.page} of 20\`);
  };

  const handleBorderedPageChange = (event) => {
    setBorderedPage(event.detail.page);
  };

  const handleOffset2PageChange = (event) => {
    setOffset2Page(event.detail.page);
  };

  const handleOffset1PageChange = (event) => {
    setOffset1Page(event.detail.page);
  };

  const handleSpanishPageChange = (event) => {
    setSpanishPage(event.detail.page);
  };

  const handleSmallPageChange = (event) => {
    setSmallPage(event.detail.page);
  };

  const handleLargePageChange = (event) => {
    setLargePage(event.detail.page);
  };

  const handleMonochromeCustomPageChange = (event) => {
    setMonochromeCustomPage(event.detail.page);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Pagination</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={basicPage}
          totalPages={20}
          onPageChange={handleBasicPageChange}
        />
        {basicPageMessage && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {basicPageMessage}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>First Last Navigation Opt-In</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={basicPageFirstLast}
          totalPages={20}
          firstLastNavigation={true}
          onPageChange={handleBasicPageChangeFirstLast}
        />
        {basicPageMessageFirstLast && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {basicPageMessageFirstLast}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Bordered Style</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={borderedPage}
          totalPages={15}
          bordered
          onPageChange={handleBorderedPageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Offset Comparison</h2>
      </div>
      <p>Offset 2 (default) - shows 2 buttons on each side:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={offset2Page}
          totalPages={50}
          offset={2}
          onPageChange={handleOffset2PageChange}
        />
      </div>
      <p style={{ margin: "1rem 0 0.5rem", fontSize: "0.875rem", color: "var(--ag-text-secondary)" }}>
        Offset 1 - shows 1 button on each side:
      </p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={offset1Page}
          totalPages={50}
          offset={1}
          onPageChange={handleOffset1PageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Alignment Options</h2>
      </div>
      <p>Justify 'start', 'center', and 'end' respectively:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination current={1} totalPages={10} justify="start" />
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination current={1} totalPages={10} justify="center" />
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination current={1} totalPages={10} justify="end" />
      </div>

      <div className="mbe4">
        <h2>Custom Navigation Labels (Spanish)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={spanishPage}
          totalPages={10}
          firstLastNavigation={true}
          navigationLabels={{
            first: "Primera",
            previous: "Anterior",
            next: "Siguiente",
            last: "Última",
          }}
          onPageChange={handleSpanishPageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Small Page Count</h2>
      </div>
      <p>When there are few pages, all page numbers are shown:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={smallPage}
          totalPages={5}
          onPageChange={handleSmallPageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Large Page Count</h2>
      </div>
      <p>With many pages, ellipsis (...) indicates skipped pages:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={largePage}
          totalPages={100}
          onPageChange={handleLargePageChange}
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization (Monochrome)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          className="monochrome-custom-pagination"
          current={monochromeCustomPage}
          totalPages={10}
          onPageChange={handleMonochromeCustomPageChange}
        />
      </div>
    </section>
  );
}
`,Is=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Content Pagination</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Introduction', href: '#examples-1' }"
        :next="{ title: 'Getting Started', href: '#examples-1' }"
        :parent="{ title: 'Documentation', href: '#examples-1' }"
        @navigate="handleNavigate"
      />
      <p
        v-if="navigationMessage"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ navigationMessage }}
      </p>
    </div>

    <div class="mbe4">
      <h2>Without hrefs (navigate event only)</h2>
    </div>
    <p>
      Links without href still fire navigate events:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Introduction' }"
        :next="{ title: 'Getting Started' }"
        :parent="{ title: 'Documentation' }"
        @navigate="handleNavigateNoHref"
      />
      <p
        v-if="navigationMessageNoHref"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ navigationMessageNoHref }}
      </p>
    </div>

    <div class="mbe4">
      <h2>Previous and Next Only</h2>
    </div>
    <p>
      Omit parent link for simpler sequential navigation:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Chapter 1: Basics', href: '#examples-1' }"
        :next="{ title: 'Chapter 3: Advanced', href: '#examples-1' }"
      />
    </div>

    <div class="mbe4">
      <h2>Parent Only</h2>
    </div>
    <p>
      Show only the parent/overview link:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination :parent="{ title: 'Back to Documentation', href: '#examples-1' }" />
    </div>

    <div class="mbe4">
      <h2>Bordered Style</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Installation', href: '#examples-1' }"
        :next="{ title: 'Configuration', href: '#examples-1' }"
        :parent="{ title: 'Guides', href: '#examples-1' }"
        bordered
      />
    </div>

    <div class="mbe4">
      <h2>Custom Icons</h2>
    </div>
    <p>
      Override default icons using slots:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Prev Page', href: '#examples-1' }"
        :next="{ title: 'Next Page', href: '#examples-1' }"
        :parent="{ title: 'Overview', href: '#examples-1' }"
      >
        <template #previous-icon>
          <ChevronLeft :size="20" />
        </template>
        <template #next-icon>
          <ChevronRight :size="20" />
        </template>
        <template #parent-icon>
          <ChevronUp :size="20" />
        </template>
      </VueContentPagination>
    </div>

    <div class="mbe4">
      <h2>Only Next</h2>
    </div>
    <p>
      First page scenario - only show next link:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :next="{ title: 'Getting Started', href: '#examples-1' }"
        :parent="{ title: 'Documentation', href: '#examples-1' }"
      />
    </div>

    <div class="mbe4">
      <h2>Only Previous</h2>
    </div>
    <p>
      Last page scenario - only show previous link:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Deployment', href: '#examples-1' }"
        :parent="{ title: 'Documentation', href: '#examples-1' }"
      />
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization (Monochrome)</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <div v-html="monochromeCustomContentPaginationStyles"></div>
      <VueContentPagination
        class="monochrome-custom-content-pagination"
        :previous="{ title: 'Introduction', href: '#examples-1' }"
        :next="{ title: 'Getting Started', href: '#examples-1' }"
        :parent="{ title: 'Documentation', href: '#examples-1' }"
      >
        <template #previous-icon>
          <ChevronLeft :size="20" />
        </template>
        <template #next-icon>
          <ChevronRight :size="20" />
        </template>
        <template #parent-icon>
          <ChevronUp :size="20" />
        </template>
      </VueContentPagination>
    </div>
  </section>
</template>

<script>
import { VueContentPagination } from "agnosticui-core/content-pagination/vue";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-vue-next";

export default {
  name: "ContentPaginationExamples",
  components: {
    VueContentPagination,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
  },
  data() {
    return {
      navigationMessage: null,
      navigationMessageNoHref: null,
      monochromeCustomContentPaginationStyles: \`
        <style>
          .monochrome-custom-content-pagination::part(ag-content-pagination-container) {
            padding: 1.5rem;
            background: #000000;
            border-radius: 12px;
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-parent) {
            border-radius: 8px;
            transition: all 0.2s ease;
            padding: 0;
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-parent):hover {
            font-weight: 700;
            text-decoration: underline;
            text-underline-offset: 3px;
            transform: translateY(-1px);
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-link) {
            padding: var(--ag-space-3) var(--ag-space-4);
            background: transparent;
            color: #ffffff;
            border-radius: 8px;
            transition: all 0.2s ease;
            font-weight: 400;
          }
          .monochrome-custom-content-pagination::part(ag-content-pagination-link):hover {
            background: #1a1a1a;
            font-weight: 600;
            text-decoration: underline;
            text-underline-offset: 3px;
            transform: translateY(-2px);
          }
        </style>
      \`,
    };
  },
  methods: {
    handleNavigate(detail) {
      this.navigationMessage = \`Clicked \${detail.type}: "\${detail.item.title}"\${
        detail.item.href ? \` → \${detail.item.href}\` : " (no href)"
      }\`;
      // In a real app, you might do: this.$router.push(detail.item.href)
      console.log("Navigate:", detail);
    },
    handleNavigateNoHref(detail) {
      this.navigationMessageNoHref = \`Clicked \${detail.type}: "\${detail.item.title}" (no href provided)\`;
      // Custom navigation logic here
      console.log("Navigate (no href):", detail);
    },
  },
};
<\/script>
`,Vs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/content-pagination';

export class ContentPaginationLitExamples extends LitElement {
  static properties = {
    navigationMessage: { type: String },
    navigationMessageNoHref: { type: String }
  };

  constructor() {
    super();
    this.navigationMessage = null;
    this.navigationMessageNoHref = null;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleNavigate(e) {
    this.navigationMessage = \`Clicked \${e.detail.type}: "\${e.detail.item.title}"\${
      e.detail.item.href ? \` → \${e.detail.item.href}\` : " (no href)"
    }\`;
    console.log("Navigate:", e.detail);
  }

  handleNavigateNoHref(e) {
    this.navigationMessageNoHref = \`Clicked \${e.detail.type}: "\${e.detail.item.title}" (no href provided)\`;
    console.log("Navigate (no href):", e.detail);
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Content Pagination</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Introduction","href":"#examples-1"}'
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
            @navigate=\${this.handleNavigate}
          ></ag-content-pagination>
          \${this.navigationMessage ? html\`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              \${this.navigationMessage}
            </p>
          \` : ''}
        </div>

        <div class="mbe4">
          <h2>Without hrefs (navigate event only)</h2>
        </div>
        <p>
          Links without href still fire navigate events:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Introduction"}'
            next='{"title":"Getting Started"}'
            parent='{"title":"Documentation"}'
            @navigate=\${this.handleNavigateNoHref}
          ></ag-content-pagination>
          \${this.navigationMessageNoHref ? html\`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              \${this.navigationMessageNoHref}
            </p>
          \` : ''}
        </div>

        <div class="mbe4">
          <h2>Previous and Next Only</h2>
        </div>
        <p>
          Omit parent link for simpler sequential navigation:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Chapter 1: Basics","href":"#examples-1"}'
            next='{"title":"Chapter 3: Advanced","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Parent Only</h2>
        </div>
        <p>
          Show only the parent/overview link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            parent='{"title":"Back to Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Bordered Style</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Installation","href":"#examples-1"}'
            next='{"title":"Configuration","href":"#examples-1"}'
            parent='{"title":"Guides","href":"#examples-1"}'
            bordered
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Custom Icons</h2>
        </div>
        <p>
          Override default icons using slots:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Prev Page","href":"#examples-1"}'
            next='{"title":"Next Page","href":"#examples-1"}'
            parent='{"title":"Overview","href":"#examples-1"}'
          >
            <span slot="previous-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </span>
            <span slot="next-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
            <span slot="parent-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          </ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Only Next</h2>
        </div>
        <p>
          First page scenario - only show next link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Only Previous</h2>
        </div>
        <p>
          Last page scenario - only show previous link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Deployment","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization (Monochrome)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            class="monochrome-custom-content-pagination"
            previous='{"title":"Introduction","href":"#examples-1"}'
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          >
            <span slot="previous-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </span>
            <span slot="next-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
            <span slot="parent-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          </ag-content-pagination>
        </div>
      </section>

      <style>
        .monochrome-custom-content-pagination::part(ag-content-pagination-container) {
          padding: 1.5rem;
          background: #000000;
          border-radius: 12px;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-parent) {
          border-radius: 8px;
          transition: all 0.2s ease;
          padding: 0;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-parent):hover {
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
          transform: translateY(-1px);
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-link) {
          padding: var(--ag-space-3) var(--ag-space-4);
          background: transparent;
          color: #ffffff;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-weight: 400;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-link):hover {
          background: #1a1a1a;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          transform: translateY(-2px);
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('content-pagination-lit-examples', ContentPaginationLitExamples);
`,js=`import { useState } from "react";
import { ReactContentPagination } from "agnosticui-core/content-pagination/react";

// Simple SVG icon components
const ChevronLeft = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ChevronUp = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export default function ContentPaginationReactExamples() {
  const [navigationMessage, setNavigationMessage] = useState(null);
  const [navigationMessageNoHref, setNavigationMessageNoHref] = useState(null);

  const handleNavigate = (event) => {
    setNavigationMessage(
      \`Clicked \${event.detail.type}: "\${event.detail.item.title}"\${
        event.detail.item.href ? \` → \${event.detail.item.href}\` : " (no href)"
      }\`
    );
    console.log("Navigate:", event.detail);
  };

  const handleNavigateNoHref = (event) => {
    setNavigationMessageNoHref(
      \`Clicked \${event.detail.type}: "\${event.detail.item.title}" (no href provided)\`
    );
    console.log("Navigate (no href):", event.detail);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Content Pagination</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Introduction", href: "#examples-1" }}
          next={{ title: "Getting Started", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
          onNavigate={handleNavigate}
        />
        {navigationMessage && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {navigationMessage}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Without hrefs (navigate event only)</h2>
      </div>
      <p>Links without href still fire navigate events:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Introduction" }}
          next={{ title: "Getting Started" }}
          parent={{ title: "Documentation" }}
          onNavigate={handleNavigateNoHref}
        />
        {navigationMessageNoHref && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {navigationMessageNoHref}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Previous and Next Only</h2>
      </div>
      <p>Omit parent link for simpler sequential navigation:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Chapter 1: Basics", href: "#examples-1" }}
          next={{ title: "Chapter 3: Advanced", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>Parent Only</h2>
      </div>
      <p>Show only the parent/overview link:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          parent={{ title: "Back to Documentation", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>Bordered Style</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Installation", href: "#examples-1" }}
          next={{ title: "Configuration", href: "#examples-1" }}
          parent={{ title: "Guides", href: "#examples-1" }}
          bordered
        />
      </div>

      <div className="mbe4">
        <h2>Custom Icons</h2>
      </div>
      <p>Override default icons using slots:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Prev Page", href: "#examples-1" }}
          next={{ title: "Next Page", href: "#examples-1" }}
          parent={{ title: "Overview", href: "#examples-1" }}
        >
          <ChevronLeft size={20} slot="previous-icon" />
          <ChevronRight size={20} slot="next-icon" />
          <ChevronUp size={20} slot="parent-icon" />
        </ReactContentPagination>
      </div>

      <div className="mbe4">
        <h2>Only Next</h2>
      </div>
      <p>First page scenario - only show next link:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          next={{ title: "Getting Started", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>Only Previous</h2>
      </div>
      <p>Last page scenario - only show previous link:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Deployment", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization (Monochrome)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          className="monochrome-custom-content-pagination"
          previous={{ title: "Introduction", href: "#examples-1" }}
          next={{ title: "Getting Started", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
        >
          <ChevronLeft size={20} slot="previous-icon" />
          <ChevronRight size={20} slot="next-icon" />
          <ChevronUp size={20} slot="parent-icon" />
        </ReactContentPagination>
      </div>
    </section>
  );
}
`,ai=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md"}'),Ts={name:"components/pagination.md"},ni=Object.assign(Ts,{setup(a){return(s,t)=>(d(),g("div",null,[t[2]||(t[2]=i("h1",{id:"pagination",tabindex:"-1"},[q("Pagination "),i("a",{class:"header-anchor",href:"#pagination","aria-label":'Permalink to "Pagination"'},"​")],-1)),l(T),t[3]||(t[3]=i("p",null,"Pagination allows users to navigate through pages of content. It displays page numbers and navigation controls, making it easy to move between large sets of data.",-1)),t[4]||(t[4]=i("h2",{id:"examples",tabindex:"-1"},[q("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),l(w,{component:"pagination","vue-code":f(zs),"lit-code":f(Rs),"react-code":f(_s)},{vue:F(()=>[l(fs)]),lit:F(()=>[...t[0]||(t[0]=[i("pagination-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[5]||(t[5]=x(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Pagination</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currentPage&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @page-change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handlePageChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;15&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;5&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;10&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :first-last-navigation</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;10&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :offset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;10&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> justify</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;center&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;10&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :first-last-navigation</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :navigation-labels</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        first: &#39;Primera&#39;,</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        previous: &#39;Anterior&#39;,</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        next: &#39;Siguiente&#39;,</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        last: &#39;Última&#39;,</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      }&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VuePagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/pagination/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VuePagination,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      currentPage: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">5</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handlePageChange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.currentPage </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> detail.page;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`Page changed to \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">page</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}\`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactPagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/pagination/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> PaginationExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">currentPage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setCurrentPage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">5</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handlePageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setCurrentPage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(event.detail.page);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`Page changed to \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">event</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">page</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}\`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">currentPage</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        totalPages</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onPageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handlePageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> totalPages</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">15</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> totalPages</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">10</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> firstLastNavigation</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">10</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> totalPages</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> offset</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> totalPages</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">10</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> justify</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;center&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        totalPages</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">10</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        firstLastNavigation</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        navigationLabels</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          first: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Primera&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          previous: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Anterior&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          next: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Siguiente&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          last: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Última&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html, css } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit/decorators.js&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/pagination&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;pagination-example&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> PaginationExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Set up event listener for pagination in the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> pagination</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#my-pagination&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    pagination?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;page-change&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> customEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> e </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`Page changed to \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">customEvent</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">page</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}\`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-pagination</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          id=&quot;my-pagination&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          current=&quot;5&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          total-pages=&quot;20&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-pagination&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-pagination current=&quot;1&quot; total-pages=&quot;15&quot; bordered&gt;&lt;/ag-pagination&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-pagination</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          current=&quot;5&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          total-pages=&quot;10&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          first-last-navigation=&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-pagination&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-pagination current=&quot;10&quot; total-pages=&quot;20&quot; offset=&quot;1&quot;&gt;&lt;/ag-pagination&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-pagination current=&quot;1&quot; total-pages=&quot;10&quot; justify=&quot;center&quot;&gt;&lt;/ag-pagination&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;/section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Note:</strong> When using pagination components within a custom element&#39;s shadow DOM, set up event listeners in the component&#39;s lifecycle (e.g., <code>firstUpdated()</code>) rather than using <code>DOMContentLoaded</code>, as <code>document.querySelector()</code> cannot access elements inside shadow DOM. Use <code>this.shadowRoot.querySelector()</code> instead.</p></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>current</code></td><td><code>number</code></td><td><code>1</code></td><td>The currently active page (1-indexed)</td></tr><tr><td><code>totalPages</code></td><td><code>number</code></td><td><code>1</code></td><td>Total number of pages</td></tr><tr><td><code>offset</code></td><td><code>1 | 2</code></td><td><code>2</code></td><td>Number of page buttons to show on each side of the current page</td></tr><tr><td><code>justify</code></td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td><td>Horizontal alignment of pagination controls</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>&#39;pagination&#39;</code></td><td>ARIA label for the navigation element</td></tr><tr><td><code>bordered</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show bordered style (outline instead of solid background for active page)</td></tr><tr><td><code>firstLastNavigation</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show first/last page navigation buttons</td></tr><tr><td><code>navigationLabels</code></td><td><code>NavigationLabels</code></td><td>See below</td><td>Custom labels for navigation buttons</td></tr></tbody></table><h3 id="navigationlabels-interface" tabindex="-1">NavigationLabels Interface <a class="header-anchor" href="#navigationlabels-interface" aria-label="Permalink to &quot;NavigationLabels Interface&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> NavigationLabels</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  first</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  previous</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  next</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  last</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>The Pagination component follows AgnosticUI v2 event conventions with <strong>dual-dispatch</strong> for the <code>page-change</code> custom event - you can use either <code>addEventListener</code> or callback props (e.g., <code>onPageChange</code>).</p><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>page-change</code></td><td>Vue: <code>@page-change</code><br>React: <code>onPageChange</code><br>Lit: <code>@page-change</code> or <code>.onPageChange</code></td><td><code>{ page: number, pages: (number | &#39;...&#39;)[] }</code></td><td>Fired when the active page changes.</td></tr></tbody></table><h3 id="event-handling-examples" tabindex="-1">Event Handling Examples <a class="header-anchor" href="#event-handling-examples" aria-label="Permalink to &quot;Event Handling Examples&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currentPage&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    @page-change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handlePageChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VuePagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/pagination/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> currentPage</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handlePageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Page changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  currentPage.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> detail.page;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactPagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/pagination/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> PaginationEventExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">currentPage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setCurrentPage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handlePageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Page changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setCurrentPage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(event.detail.page);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">currentPage</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      totalPages</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      onPageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handlePageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/pagination&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> pagination</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#my-pagination&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  pagination.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;page-change&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Page changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  pagination.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onPageChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Page changed (callback):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-pagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;my-pagination&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="offset-behavior" tabindex="-1">Offset Behavior <a class="header-anchor" href="#offset-behavior" aria-label="Permalink to &quot;Offset Behavior&quot;">​</a></h2><p>The <code>offset</code> prop controls how many page buttons appear on each side of the current page:</p><h3 id="offset-2-default" tabindex="-1">Offset 2 (default) <a class="header-anchor" href="#offset-2-default" aria-label="Permalink to &quot;Offset 2 (default)&quot;">​</a></h3><p>Shows 2 buttons on each side of current page:</p><ul><li>Current page 10 of 50: <code>[1] ... [8] [9] [10] [11] [12] ... [50]</code></li><li>Shows 5 consecutive page numbers centered around current page</li></ul><h3 id="offset-1" tabindex="-1">Offset 1 <a class="header-anchor" href="#offset-1" aria-label="Permalink to &quot;Offset 1&quot;">​</a></h3><p>Shows 1 button on each side of current page:</p><ul><li>Current page 10 of 50: <code>[1] ... [9] [10] [11] ... [50]</code></li><li>Shows 3 consecutive page numbers centered around current page</li></ul><p>The first and last pages are always visible unless <code>firstLastNavigation</code> is false.</p><h2 id="alignment" tabindex="-1">Alignment <a class="header-anchor" href="#alignment" aria-label="Permalink to &quot;Alignment&quot;">​</a></h2><p>Use the <code>justify</code> prop to control horizontal alignment:</p><ul><li><code>&#39;&#39;</code> (default): Left-aligned</li><li><code>&#39;start&#39;</code>: Explicitly left-aligned</li><li><code>&#39;center&#39;</code>: Centered</li><li><code>&#39;end&#39;</code>: Right-aligned</li></ul><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Pagination component implements accessible navigation:</p><ul><li>Uses <code>&lt;nav&gt;</code> element with <code>aria-label</code> for screen readers</li><li>Page buttons indicate current page with <code>aria-current=&quot;page&quot;</code></li><li>Disabled buttons (first/previous on page 1, next/last on last page) have <code>aria-disabled=&quot;true&quot;</code> and are not focusable</li><li>Each button has descriptive <code>aria-label</code> (e.g., &quot;Goto page 5&quot;, &quot;Page 5, current page&quot;)</li><li>Navigation labels are customizable for internationalization</li><li>Focus management automatically focuses the current page button after page changes</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Always provide a meaningful <code>ariaLabel</code> when multiple pagination components exist on the same page</li><li>Keep the total number of pages reasonable (consider filtering or search for very large datasets)</li><li>Use <code>offset={1}</code> for mobile/narrow viewports to reduce visual clutter</li><li>Update the page content when <code>page-change</code> event fires</li><li>Consider showing a loading state while fetching new page data</li><li>Display the current page range (e.g., &quot;Showing 11-20 of 200 items&quot;) near the pagination</li></ul><h2 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-label="Permalink to &quot;Styling&quot;">​</a></h2><h3 id="bordered-style" tabindex="-1">Bordered Style <a class="header-anchor" href="#bordered-style" aria-label="Permalink to &quot;Bordered Style&quot;">​</a></h3><p>Set <code>bordered={true}</code> to use an outline style for the active page instead of a solid background:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">5</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div><p>This can be useful for lighter UI themes or to reduce visual weight.</p><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-pagination-container</code></td><td>The outer nav container element</td></tr><tr><td><code>ag-pagination</code></td><td>The pagination list (ul) element</td></tr><tr><td><code>ag-pagination-item</code></td><td>Individual pagination item wrapper (li)</td></tr><tr><td><code>ag-pagination-button</code></td><td>Individual pagination button</td></tr></tbody></table><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-pagination-container</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f5f5f5</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  gap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-pagination-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  min-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-pagination-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transform</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">scale</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1.1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: transform </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="internationalization" tabindex="-1">Internationalization <a class="header-anchor" href="#internationalization" aria-label="Permalink to &quot;Internationalization&quot;">​</a></h2><p>Customize navigation labels for different languages:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePagination</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">total-pages</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">10</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">first-last-navigation</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">navigation-labels</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    first: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;最初&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    previous: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;前&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    next: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;次&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    last: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;最後&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">first</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;最初&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;前&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;次&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">last</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;最後&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">first</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Primera&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Anterior&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Siguiente&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">last</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Última&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span></span></code></pre></div><hr><h1 id="content-pagination" tabindex="-1">Content Pagination <a class="header-anchor" href="#content-pagination" aria-label="Permalink to &quot;Content Pagination&quot;">​</a></h1><p>Content Pagination provides navigation between sequential content items (like documentation pages or articles). It displays previous/next links and an optional parent/overview link, making it easy to navigate through structured content hierarchies.</p><h2 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h2>`,51)),l(w,{component:"content-pagination","vue-code":f(Is),"lit-code":f(Vs),"react-code":f(js)},{vue:F(()=>[l(Os)]),lit:F(()=>[...t[1]||(t[1]=[i("content-pagination-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[6]||(t[6]=x(`<h2 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Pagination</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Introduction&#39;, href: &#39;/introduction&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Getting Started&#39;, href: &#39;/getting-started&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :parent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Documentation&#39;, href: &#39;/documentation&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @navigate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleNavigate&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Installation&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Configuration&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Chapter 1&#39;, href: &#39;/chapter-1&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Chapter 3&#39;, href: &#39;/chapter-3&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      bordered</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Prev Page&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;{ title: &#39;Next Page&#39; }&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">previous-icon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronLeft</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">next-icon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronRight</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">parent-icon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronUp</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueContentPagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/content-pagination/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ChevronLeft, ChevronRight, ChevronUp } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-vue-next&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueContentPagination,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    ChevronLeft,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    ChevronRight,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    ChevronUp,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleNavigate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigate to:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactContentPagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/content-pagination/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ContentPaginationExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigate to:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        previous</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Introduction&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/introduction&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        next</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Getting Started&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/getting-started&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        parent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Documentation&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/documentation&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        previous</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Chapter 1&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/chapter-1&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        next</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Chapter 3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/chapter-3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        bordered</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html, css } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit/decorators.js&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/content-pagination&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;content-pagination-example&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ContentPaginationExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Set up event listener for content pagination in the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> contentPagination</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#my-content-pagination&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    contentPagination?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;navigate&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> customEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> e </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Navigate to:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, customEvent.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-content-pagination</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          id=&quot;my-content-pagination&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          previous=&#39;{&quot;title&quot;: &quot;Introduction&quot;, &quot;href&quot;: &quot;/introduction&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          next=&#39;{&quot;title&quot;: &quot;Getting Started&quot;, &quot;href&quot;: &quot;/getting-started&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          parent=&#39;{&quot;title&quot;: &quot;Documentation&quot;, &quot;href&quot;: &quot;/documentation&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-content-pagination&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-content-pagination</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          previous=&#39;{&quot;title&quot;: &quot;Chapter 1&quot;, &quot;href&quot;: &quot;/chapter-1&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          next=&#39;{&quot;title&quot;: &quot;Chapter 3&quot;, &quot;href&quot;: &quot;/chapter-3&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          bordered</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-content-pagination&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-content-pagination</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          previous=&#39;{&quot;title&quot;: &quot;Prev Page&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          next=&#39;{&quot;title&quot;: &quot;Next Page&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;span slot=&quot;previous-icon&quot;&gt;←&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;span slot=&quot;next-icon&quot;&gt;→&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;span slot=&quot;parent-icon&quot;&gt;↑&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/ag-content-pagination&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;/section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Note:</strong> When using content-pagination components within a custom element&#39;s shadow DOM, set up event listeners in the component&#39;s lifecycle (e.g., <code>firstUpdated()</code>) rather than using <code>DOMContentLoaded</code>, as <code>document.querySelector()</code> cannot access elements inside shadow DOM. Use <code>this.shadowRoot.querySelector()</code> instead.</p></details><h2 id="props-1" tabindex="-1">Props <a class="header-anchor" href="#props-1" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>previous</code></td><td><code>ContentItem</code></td><td><code>undefined</code></td><td>Previous content item</td></tr><tr><td><code>next</code></td><td><code>ContentItem</code></td><td><code>undefined</code></td><td>Next content item</td></tr><tr><td><code>parent</code></td><td><code>ContentItem</code></td><td><code>undefined</code></td><td>Parent/overview content item</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>&#39;Content navigation&#39;</code></td><td>ARIA label for the navigation element</td></tr><tr><td><code>bordered</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show bordered style around navigation links</td></tr></tbody></table><h3 id="contentitem-interface" tabindex="-1">ContentItem Interface <a class="header-anchor" href="#contentitem-interface" aria-label="Permalink to &quot;ContentItem Interface&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ContentItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  title</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="events-1" tabindex="-1">Events <a class="header-anchor" href="#events-1" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>The Content Pagination component follows AgnosticUI v2 event conventions with <strong>dual-dispatch</strong> for the <code>navigate</code> custom event.</p><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>navigate</code></td><td>Vue: <code>@navigate</code><br>React: <code>onNavigate</code><br>Lit: <code>@navigate</code> or <code>.onNavigate</code></td><td><code>{ type: &#39;previous&#39; | &#39;next&#39; | &#39;parent&#39;, item: ContentItem }</code></td><td>Fired when user clicks a navigation link</td></tr></tbody></table><h3 id="event-handling-examples-1" tabindex="-1">Event Handling Examples <a class="header-anchor" href="#event-handling-examples-1" aria-label="Permalink to &quot;Event Handling Examples&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;previous&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;next&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :parent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;parent&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    @navigate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleNavigate&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueContentPagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/content-pagination/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useRouter } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue-router&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> router</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useRouter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> previous</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Introduction&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/docs/introduction&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> };</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> next</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Getting Started&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/docs/getting-started&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> };</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> parent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Documentation&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/docs&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigate:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (detail.item.href) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    router.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">push</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(detail.item.href);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactContentPagination } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/content-pagination/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useNavigate } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react-router-dom&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ContentPaginationEventExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> navigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useNavigate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigate:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (event.detail.item.href) {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">      navigate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(event.detail.item.href);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactContentPagination</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      previous</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Introduction&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/docs/introduction&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      next</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Getting Started&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/docs/getting-started&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      parent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ title: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Documentation&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, href: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/docs&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      onNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-lit vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lit</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/content-pagination&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> contentPagination</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#my-content-pagination&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">contentPagination.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;navigate&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigate:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (event.detail.href) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    window.location.href </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> event.detail.href;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">contentPagination.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onNavigate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigate (callback):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span></code></pre></div><h2 id="slots-children" tabindex="-1">Slots/Children <a class="header-anchor" href="#slots-children" aria-label="Permalink to &quot;Slots/Children&quot;">​</a></h2><p>Content Pagination provides slots for customizing navigation icons:</p><table class="ag-table ag-table--striped"><thead><tr><th>Slot/Template</th><th>Description</th></tr></thead><tbody><tr><td><code>previous-icon</code></td><td>Custom icon for the previous link</td></tr><tr><td><code>next-icon</code></td><td>Custom icon for the next link</td></tr><tr><td><code>parent-icon</code></td><td>Custom icon for the parent link</td></tr></tbody></table><h3 id="custom-icons-example" tabindex="-1">Custom Icons Example <a class="header-anchor" href="#custom-icons-example" aria-label="Permalink to &quot;Custom Icons Example&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;previous&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;next&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :parent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;parent&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">previous-icon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronLeft</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">next-icon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronRight</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">parent-icon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronUp</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details></details><h2 id="accessibility-1" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility-1" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Content Pagination component implements accessible navigation:</p><ul><li>Uses <code>&lt;nav&gt;</code> element with <code>aria-label</code> for screen readers</li><li>Each link has descriptive text (title) for clarity</li><li>Links without <code>href</code> are rendered as buttons with appropriate semantics</li><li>Keyboard navigation works seamlessly (Tab, Enter/Space)</li></ul><h3 id="best-practices-1" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices-1" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Provide descriptive titles that clearly indicate the destination</li><li>Include <code>href</code> when possible for standard link behavior and SEO</li><li>Use the <code>navigate</code> event to integrate with client-side routing</li><li>Position content pagination at the end of your content for natural flow</li><li>Consider showing content pagination at both top and bottom for long content</li></ul><h2 id="styling-1" tabindex="-1">Styling <a class="header-anchor" href="#styling-1" aria-label="Permalink to &quot;Styling&quot;">​</a></h2><h3 id="bordered-style-1" tabindex="-1">Bordered Style <a class="header-anchor" href="#bordered-style-1" aria-label="Permalink to &quot;Bordered Style&quot;">​</a></h3><p>Set <code>bordered={true}</code> to display borders around navigation links:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueContentPagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div><h2 id="css-shadow-parts-1" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts-1" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-content-pagination-container</code></td><td>The outer nav container element</td></tr><tr><td><code>ag-content-pagination-parent</code></td><td>The parent/overview link</td></tr><tr><td><code>ag-content-pagination-previous</code></td><td>The previous link container</td></tr><tr><td><code>ag-content-pagination-next</code></td><td>The next link container</td></tr><tr><td><code>ag-content-pagination-link</code></td><td>Individual navigation link/button</td></tr></tbody></table><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-content-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-content-pagination-container</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f9fafb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-content-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-content-pagination-parent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  margin-bottom</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-content-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-content-pagination-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 1.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #e5e7eb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">all</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-content-pagination</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-content-pagination-link</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#dbeafe</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#3b82f6</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transform</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">translateY</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">-2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="use-cases" tabindex="-1">Use Cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use Cases&quot;">​</a></h2><p>Content Pagination is ideal for:</p><ul><li><strong>Documentation sites</strong>: Navigate between guide pages, API references, and tutorials</li><li><strong>Multi-page articles</strong>: Move between chapters or sections of long-form content</li><li><strong>Course materials</strong>: Progress through lessons with easy navigation to course overview</li><li><strong>Blog series</strong>: Link related posts in a series with navigation to the series index</li><li><strong>Wizard flows</strong>: Guide users through multi-step processes with clear navigation</li></ul>`,32))]))}});export{ai as __pageData,ni as default};
