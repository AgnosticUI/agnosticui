import{c as q,A as I}from"./chunks/AlphaWarning.D199zhtu.js";import{i as P,z as F,a as x,x as r}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{d as w,p as L,c as o,o as d,r as b,K as N,al as V,h as z,e as u,_ as S,C as B,j as i,G as h,t as f,w as E,ae as A,a as D}from"./chunks/framework.CdHt8f9T.js";import{C as R}from"./chunks/chevron-right.CVd3lvVB.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=q("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=q("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);var j=Object.defineProperty,c=(n,s,t,p)=>{for(var a=void 0,l=n.length-1,e;l>=0;l--)(e=n[l])&&(a=e(s,t,a)||a);return a&&j(s,t,a),a};const _=class extends x{constructor(){super(),this.current=1,this.totalPages=1,this.offset=2,this.justify="",this.ariaLabel="pagination",this.bordered=!1,this.firstLastNavigation=!1,this.navigationLabels={first:"First",previous:"Previous",next:"Next",last:"Last"}}get _pages(){return this._generatePages()}updated(s){(s.has("current")||s.has("totalPages")||s.has("offset"))&&this.updateComplete.then(()=>{var p;const t=(p=this.shadowRoot)==null?void 0:p.querySelector(`button[data-page="${this.current}"]`);t&&t.focus()})}_generatePages(){return this.totalPages<=1?[1]:this.offset===1?this._generatePagingPaddedByOne(this.current,this.totalPages):this._generatePagingPaddedByTwo(this.current,this.totalPages)}_getPaddedArray(s,t,p,a){return t&&s.unshift("..."),p&&s.push("..."),a<=1?[1]:[1,...s,a]}_generatePagingPaddedByOne(s,t){const p=[s-1,s,s+1].filter(e=>e>1&&e<t),a=s>3,l=s<t-2;return this._getPaddedArray(p,a,l,t)}_generatePagingPaddedByTwo(s,t){const p=[s-2,s-1,s,s+1,s+2].filter(k=>k>1&&k<t),a=s===5,l=s===t-4,e=s>5,m=s<t-4;return a&&p.unshift(2),l&&p.push(t-1),this._getPaddedArray(p,e,m,t)}_handlePageChange(s){if(s<1||s>this.totalPages||s===this.current)return;const t=this._pages;this.current=s;const p=new CustomEvent("page-change",{detail:{page:s,pages:t},bubbles:!0,composed:!0});this.dispatchEvent(p),this.onPageChange&&this.onPageChange(p)}_getJustifyClass(){switch(this.justify){case"start":return"pagination-start";case"center":return"pagination-center";case"end":return"pagination-end";default:return""}}render(){const s=this._getJustifyClass(),t=this._pages.length>0?this._pages:[1],p=this.navigationLabels||{first:"First",previous:"Previous",next:"Next",last:"Last"};return r`
      <nav
        class="pagination-container ${s}"
        part="ag-pagination-container"
        aria-label=${this.ariaLabel}
      >
        <ul class="pagination" part="ag-pagination">
          ${this.firstLastNavigation?r`
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
          ${t.map(a=>a!=="..."?r`
                  <li
                    class="pagination-item ${this.current===a?"pagination-item-active":""}"
                    part="ag-pagination-item"
                  >
                    <button
                      data-page="${a}"
                      @click=${()=>this._handlePageChange(a)}
                      type="button"
                      class="pagination-button"
                      part="ag-pagination-button"
                      aria-current=${this.current===a?"page":"false"}
                      aria-label=${this.current===a?`Page ${a}, current page`:`Goto page ${a}`}
                    >
                      ${a}
                    </button>
                  </li>
                `:r`
                  <li
                    class="pagination-item pagination-item-gap"
                    part="ag-pagination-item"
                  >
                    <span>${a}</span>
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
          ${this.firstLastNavigation?r`
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
    `}};_.styles=P`
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
  `;let g=_;c([F({type:Number})],g.prototype,"current");c([F({type:Number,attribute:"total-pages"})],g.prototype,"totalPages");c([F({type:Number})],g.prototype,"offset");c([F({type:String,reflect:!0})],g.prototype,"justify");c([F({type:String,attribute:"aria-label"})],g.prototype,"ariaLabel");c([F({type:Boolean,reflect:!0})],g.prototype,"bordered");c([F({type:Boolean,reflect:!0,attribute:"first-last-navigation"})],g.prototype,"firstLastNavigation");c([F({type:Object,attribute:!1})],g.prototype,"navigationLabels");c([F({attribute:!1})],g.prototype,"onPageChange");customElements.get("ag-pagination")||customElements.define("ag-pagination",g);const M=[".bordered",".firstLastNavigation",".navigationLabels","current","total-pages","offset","justify","aria-label"],U=w({__name:"VuePagination",props:{current:{default:1},totalPages:{default:1},offset:{default:2},justify:{default:""},ariaLabel:{default:"pagination"},bordered:{type:Boolean,default:!1},firstLastNavigation:{type:Boolean,default:!1},navigationLabels:{default:()=>({first:"First",previous:"Previous",next:"Next",last:"Last"})}},emits:["page-change","update:current"],setup(n,{emit:s}){const t=s,p=L(),a=l=>{const e=l.detail;t("page-change",e),t("update:current",e.page)};return(l,e)=>(d(),o("ag-pagination",N({ref_key:"paginationRef",ref:p,".bordered":n.bordered,".firstLastNavigation":n.firstLastNavigation,".navigationLabels":n.navigationLabels,current:n.current,"total-pages":n.totalPages,offset:n.offset,justify:n.justify,"aria-label":n.ariaLabel,onPageChange:a},l.$attrs),[b(l.$slots,"default")],48,M))}});var G=Object.defineProperty,C=(n,s,t,p)=>{for(var a=void 0,l=n.length-1,e;l>=0;l--)(e=n[l])&&(a=e(s,t,a)||a);return a&&G(s,t,a),a};const $=class extends x{constructor(){super(),this._hasParentAndChild=!1,this.ariaLabel="content navigation",this.bordered=!1}willUpdate(s){(s.has("parent")||s.has("previous")||s.has("next"))&&(this._hasParentAndChild=!!this.parent&&(!!this.previous||!!this.next))}_renderChevronIcon(s=""){return r`<svg aria-hidden="true" fill="none" focusable="false" height="20" role="presentation" viewBox="0 0 24 24" width="20" class="${s} text-primary"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>`}_handleNavigate(s,t,p){if(!t||t.href&&!this.onNavigate)return;this.onNavigate&&p.preventDefault();const a=new CustomEvent("navigate",{detail:{direction:s,title:t.title,href:t.href},bubbles:!0,composed:!0});this.dispatchEvent(a),this.onNavigate&&this.onNavigate(a)}render(){return r`
      <nav
        class="content-pagination-container"
        part="ag-content-pagination-container"
        aria-label=${this.ariaLabel}
      >
        ${this.parent?r`
              <div
                class="content-pagination-parent"
                part="ag-content-pagination-parent"
              >
                ${this.parent.href?r`
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
                    `:r`
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
          ${this.previous?r`
                <div class="content-pagination-item content-pagination-item-previous">
                  ${this.previous.href?r`
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
                      `:r`
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
              `:r`<div class="content-pagination-item"></div>`}

          ${this.next?r`
                <div class="content-pagination-item content-pagination-item-next">
                  ${this.next.href?r`
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
                      `:r`
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
              `:r`<div class="content-pagination-item"></div>`}
        </div>
      </nav>
    `}};$.styles=P`
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
  `;let y=$;C([F({type:Object,attribute:!1})],y.prototype,"previous");C([F({type:Object,attribute:!1})],y.prototype,"next");C([F({type:Object,attribute:!1})],y.prototype,"parent");C([F({type:String,attribute:"aria-label"})],y.prototype,"ariaLabel");C([F({type:Boolean,reflect:!0})],y.prototype,"bordered");C([F({attribute:!1})],y.prototype,"onNavigate");C([F({type:Boolean,reflect:!0,attribute:"has-parent"})],y.prototype,"_hasParentAndChild");customElements.get("ag-content-pagination")||customElements.define("ag-content-pagination",y);const H=["aria-label",".bordered"],W={key:0,slot:"previous-icon"},Y={key:1,slot:"next-icon"},K={key:2,slot:"parent-icon"},J=w({__name:"VueContentPagination",props:{previous:{},next:{},parent:{},bordered:{type:Boolean,default:!1},ariaLabel:{default:"content navigation"}},emits:["navigate"],setup(n,{emit:s}){const t=V(),p=z(()=>{const k={...t};return a.previous&&(k.previous=a.previous),a.next&&(k.next=a.next),a.parent&&(k.parent=a.parent),k}),a=n,l=s,e=L(),m=k=>{const v=k.detail;l("navigate",v)};return(k,v)=>(d(),o("ag-content-pagination",N({ref_key:"contentPaginationRef",ref:e,"aria-label":n.ariaLabel,".bordered":n.bordered,onNavigate:m},p.value),[k.$slots["previous-icon"]?(d(),o("span",W,[b(k.$slots,"previous-icon")])):u("",!0),k.$slots["next-icon"]?(d(),o("span",Y,[b(k.$slots,"next-icon")])):u("",!0),k.$slots["parent-icon"]?(d(),o("span",K,[b(k.$slots,"parent-icon")])):u("",!0)],48,H))}}),Q={name:"PaginationExamples",components:{VuePagination:U},data(){return{basicPageFirstLast:5,basicPage:5,basicPageMessage:null,basicPageMessageFirstLast:null,borderedPage:3,noFirstLastPage:5,offset2Page:25,offset1Page:25,spanishPage:1,smallPage:3,largePage:50,customPage:5,monochromeCustomPage:5,monochromeCustomPaginationStyles:`
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
      `}},methods:{handleBasicPageChangeFirstLast(n){this.basicPageFirstLast=n.page,this.basicPageMessageFirstLast=`Current page: ${n.page} of 20`},handleBasicPageChange(n){this.basicPage=n.page,this.basicPageMessage=`Current page: ${n.page} of 20`},handleBorderedPageChange(n){this.borderedPage=n.page},handleNoFirstLastPageChange(n){this.noFirstLastPage=n.page},handleOffset2PageChange(n){this.offset2Page=n.page},handleOffset1PageChange(n){this.offset1Page=n.page},handleSpanishPageChange(n){this.spanishPage=n.page},handleSmallPageChange(n){this.smallPage=n.page},handleLargePageChange(n){this.largePage=n.page},handleCustomPageChange(n){this.customPage=n.page},handleMonochromeCustomPageChange(n){this.monochromeCustomPage=n.page}}},X={class:"stacked-mobile mbe4"},Z={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},ss={class:"stacked-mobile mbe4"},is={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},as={class:"stacked-mobile mbe4"},ns={class:"stacked-mobile mbe4"},ts={class:"stacked-mobile mbe4"},es={class:"stacked-mobile mbe4"},ls={class:"stacked-mobile mbe4"},hs={class:"stacked-mobile mbe4"},ps={class:"stacked-mobile mbe4"},ks={class:"stacked-mobile mbe4"},rs={class:"stacked-mobile mbe4"},Fs={class:"stacked-mobile mbe4"},os=["innerHTML"];function ds(n,s,t,p,a,l){const e=B("VuePagination");return d(),o("section",null,[s[0]||(s[0]=i("div",{class:"mbe4"},[i("h2",null,"Basic Pagination")],-1)),i("div",X,[h(e,{current:a.basicPage,"total-pages":20,onPageChange:l.handleBasicPageChange},null,8,["current","onPageChange"]),a.basicPageMessage?(d(),o("p",Z,f(a.basicPageMessage),1)):u("",!0)]),s[1]||(s[1]=i("div",{class:"mbe4"},[i("h2",null,"First Last Navigation Opt-In")],-1)),i("div",ss,[h(e,{current:a.basicPageFirstLast,"total-pages":20,"first-last-navigation":!0,onPageChange:l.handleBasicPageChangeFirstLast},null,8,["current","onPageChange"]),a.basicPageMessageFirstLast?(d(),o("p",is,f(a.basicPageMessageFirstLast),1)):u("",!0)]),s[2]||(s[2]=i("div",{class:"mbe4"},[i("h2",null,"Bordered Style")],-1)),i("div",as,[h(e,{current:a.borderedPage,"total-pages":15,bordered:"",onPageChange:l.handleBorderedPageChange},null,8,["current","onPageChange"])]),s[3]||(s[3]=i("div",{class:"mbe4"},[i("h2",null,"Offset Comparison")],-1)),s[4]||(s[4]=i("p",null," Offset 2 (default) - shows 2 buttons on each side: ",-1)),i("div",ns,[h(e,{current:a.offset2Page,"total-pages":50,offset:2,onPageChange:l.handleOffset2PageChange},null,8,["current","onPageChange"])]),s[5]||(s[5]=i("p",{style:{margin:"1rem 0 0.5rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," Offset 1 - shows 1 button on each side: ",-1)),i("div",ts,[h(e,{current:a.offset1Page,"total-pages":50,offset:1,onPageChange:l.handleOffset1PageChange},null,8,["current","onPageChange"])]),s[6]||(s[6]=i("div",{class:"mbe4"},[i("h2",null,"Alignment Options")],-1)),s[7]||(s[7]=i("p",null," Justify 'start', 'center', and 'end' respectively: ",-1)),i("div",es,[h(e,{current:1,"total-pages":10,justify:"start"})]),i("div",ls,[h(e,{current:1,"total-pages":10,justify:"center"})]),i("div",hs,[h(e,{current:1,"total-pages":10,justify:"end"})]),s[8]||(s[8]=i("div",{class:"mbe4"},[i("h2",null,"Custom Navigation Labels (Spanish)")],-1)),i("div",ps,[h(e,{current:a.spanishPage,"total-pages":10,"first-last-navigation":!0,"navigation-labels":{first:"Primera",previous:"Anterior",next:"Siguiente",last:"Última"},onPageChange:l.handleSpanishPageChange},null,8,["current","onPageChange"])]),s[9]||(s[9]=i("div",{class:"mbe4"},[i("h2",null,"Small Page Count")],-1)),s[10]||(s[10]=i("p",null," When there are few pages, all page numbers are shown: ",-1)),i("div",ks,[h(e,{current:a.smallPage,"total-pages":5,onPageChange:l.handleSmallPageChange},null,8,["current","onPageChange"])]),s[11]||(s[11]=i("div",{class:"mbe4"},[i("h2",null,"Large Page Count")],-1)),s[12]||(s[12]=i("p",null," With many pages, ellipsis (...) indicates skipped pages: ",-1)),i("div",rs,[h(e,{current:a.largePage,"total-pages":100,onPageChange:l.handleLargePageChange},null,8,["current","onPageChange"])]),s[13]||(s[13]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization (Monochrome)")],-1)),i("div",Fs,[i("div",{innerHTML:a.monochromeCustomPaginationStyles},null,8,os),h(e,{class:"monochrome-custom-pagination",current:a.monochromeCustomPage,"total-pages":10,onPageChange:l.handleMonochromeCustomPageChange},null,8,["current","onPageChange"])])])}const gs=S(Q,[["render",ds]]),cs={name:"ContentPaginationExamples",components:{VueContentPagination:J,ChevronLeft:T,ChevronRight:R,ChevronUp:O},data(){return{navigationMessage:null,navigationMessageNoHref:null,monochromeCustomContentPaginationStyles:`
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
      `}},methods:{handleNavigate(n){this.navigationMessage=`Clicked ${n.type}: "${n.item.title}"${n.item.href?` → ${n.item.href}`:" (no href)"}`,console.log("Navigate:",n)},handleNavigateNoHref(n){this.navigationMessageNoHref=`Clicked ${n.type}: "${n.item.title}" (no href provided)`,console.log("Navigate (no href):",n)}}},ys={class:"stacked-mobile mbe4"},us={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},Cs={class:"stacked-mobile mbe4"},ms={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},Es={class:"stacked-mobile mbe4"},vs={class:"stacked-mobile mbe4"},Bs={class:"stacked-mobile mbe4"},bs={class:"stacked-mobile mbe4"},fs={class:"stacked-mobile mbe4"},As={class:"stacked-mobile mbe4"},Ds={class:"stacked-mobile mbe4"},qs=["innerHTML"];function Ps(n,s,t,p,a,l){const e=B("VueContentPagination"),m=B("ChevronLeft"),k=B("ChevronRight"),v=B("ChevronUp");return d(),o("section",null,[s[0]||(s[0]=i("div",{class:"mbe4"},[i("h2",null,"Basic Content Pagination")],-1)),i("div",ys,[h(e,{previous:{title:"Introduction",href:"#examples-1"},next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"},onNavigate:l.handleNavigate},null,8,["onNavigate"]),a.navigationMessage?(d(),o("p",us,f(a.navigationMessage),1)):u("",!0)]),s[1]||(s[1]=i("div",{class:"mbe4"},[i("h2",null,"Without hrefs (navigate event only)")],-1)),s[2]||(s[2]=i("p",null," Links without href still fire navigate events: ",-1)),i("div",Cs,[h(e,{previous:{title:"Introduction"},next:{title:"Getting Started"},parent:{title:"Documentation"},onNavigate:l.handleNavigateNoHref},null,8,["onNavigate"]),a.navigationMessageNoHref?(d(),o("p",ms,f(a.navigationMessageNoHref),1)):u("",!0)]),s[3]||(s[3]=i("div",{class:"mbe4"},[i("h2",null,"Previous and Next Only")],-1)),s[4]||(s[4]=i("p",null," Omit parent link for simpler sequential navigation: ",-1)),i("div",Es,[h(e,{previous:{title:"Chapter 1: Basics",href:"#examples-1"},next:{title:"Chapter 3: Advanced",href:"#examples-1"}})]),s[5]||(s[5]=i("div",{class:"mbe4"},[i("h2",null,"Parent Only")],-1)),s[6]||(s[6]=i("p",null," Show only the parent/overview link: ",-1)),i("div",vs,[h(e,{parent:{title:"Back to Documentation",href:"#examples-1"}})]),s[7]||(s[7]=i("div",{class:"mbe4"},[i("h2",null,"Bordered Style")],-1)),i("div",Bs,[h(e,{previous:{title:"Installation",href:"#examples-1"},next:{title:"Configuration",href:"#examples-1"},parent:{title:"Guides",href:"#examples-1"},bordered:""})]),s[8]||(s[8]=i("div",{class:"mbe4"},[i("h2",null,"Custom Icons")],-1)),s[9]||(s[9]=i("p",null," Override default icons using slots: ",-1)),i("div",bs,[h(e,{previous:{title:"Prev Page",href:"#examples-1"},next:{title:"Next Page",href:"#examples-1"},parent:{title:"Overview",href:"#examples-1"}},{"previous-icon":E(()=>[h(m,{size:20})]),"next-icon":E(()=>[h(k,{size:20})]),"parent-icon":E(()=>[h(v,{size:20})]),_:1})]),s[10]||(s[10]=i("div",{class:"mbe4"},[i("h2",null,"Only Next")],-1)),s[11]||(s[11]=i("p",null," First page scenario - only show next link: ",-1)),i("div",fs,[h(e,{next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}})]),s[12]||(s[12]=i("div",{class:"mbe4"},[i("h2",null,"Only Previous")],-1)),s[13]||(s[13]=i("p",null," Last page scenario - only show previous link: ",-1)),i("div",As,[h(e,{previous:{title:"Deployment",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}})]),s[14]||(s[14]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization (Monochrome)")],-1)),i("div",Ds,[i("div",{innerHTML:a.monochromeCustomContentPaginationStyles},null,8,qs),h(e,{class:"monochrome-custom-content-pagination",previous:{title:"Introduction",href:"#examples-1"},next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}},{"previous-icon":E(()=>[h(m,{size:20})]),"next-icon":E(()=>[h(k,{size:20})]),"parent-icon":E(()=>[h(v,{size:20})]),_:1})])])}const xs=S(cs,[["render",Ps]]),Vs=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md"}'),ws={name:"components/pagination.md"},zs=Object.assign(ws,{setup(n){return(s,t)=>(d(),o("div",null,[t[0]||(t[0]=i("h1",{id:"pagination",tabindex:"-1"},[D("Pagination "),i("a",{class:"header-anchor",href:"#pagination","aria-label":'Permalink to "Pagination"'},"​")],-1)),h(I),t[1]||(t[1]=i("p",null,"Pagination allows users to navigate through pages of content. It displays page numbers and navigation controls, making it easy to move between large sets of data.",-1)),t[2]||(t[2]=i("h2",{id:"examples",tabindex:"-1"},[D("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),h(gs),t[3]||(t[3]=A("",51)),h(xs),t[4]||(t[4]=A("",32))]))}});export{Vs as __pageData,zs as default};
