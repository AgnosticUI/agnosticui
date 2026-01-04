import{c as q,A as I}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as P,a as x,x as r}from"./chunks/lit-element.B0TUrqGF.js";import{z as F}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{d as w,p as L,c as o,o as d,r as b,K as N,al as V,h as z,e as u,_ as S,C as B,j as i,G as h,t as f,w as E,ae as A,a as D}from"./chunks/framework.DvJW1jwp.js";import{C as R}from"./chunks/chevron-right.C66wuwA9.js";/**
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
      `}},methods:{handleNavigate(n){this.navigationMessage=`Clicked ${n.type}: "${n.item.title}"${n.item.href?` → ${n.item.href}`:" (no href)"}`,console.log("Navigate:",n)},handleNavigateNoHref(n){this.navigationMessageNoHref=`Clicked ${n.type}: "${n.item.title}" (no href provided)`,console.log("Navigate (no href):",n)}}},ys={class:"stacked-mobile mbe4"},us={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},Cs={class:"stacked-mobile mbe4"},ms={key:0,style:{margin:"0",padding:"0","font-size":"var(--ag-font-size-sm)",color:"var(--ag-text-secondary)"}},Es={class:"stacked-mobile mbe4"},vs={class:"stacked-mobile mbe4"},Bs={class:"stacked-mobile mbe4"},bs={class:"stacked-mobile mbe4"},fs={class:"stacked-mobile mbe4"},As={class:"stacked-mobile mbe4"},Ds={class:"stacked-mobile mbe4"},qs=["innerHTML"];function Ps(n,s,t,p,a,l){const e=B("VueContentPagination"),m=B("ChevronLeft"),k=B("ChevronRight"),v=B("ChevronUp");return d(),o("section",null,[s[0]||(s[0]=i("div",{class:"mbe4"},[i("h2",null,"Basic Content Pagination")],-1)),i("div",ys,[h(e,{previous:{title:"Introduction",href:"#examples-1"},next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"},onNavigate:l.handleNavigate},null,8,["onNavigate"]),a.navigationMessage?(d(),o("p",us,f(a.navigationMessage),1)):u("",!0)]),s[1]||(s[1]=i("div",{class:"mbe4"},[i("h2",null,"Without hrefs (navigate event only)")],-1)),s[2]||(s[2]=i("p",null," Links without href still fire navigate events: ",-1)),i("div",Cs,[h(e,{previous:{title:"Introduction"},next:{title:"Getting Started"},parent:{title:"Documentation"},onNavigate:l.handleNavigateNoHref},null,8,["onNavigate"]),a.navigationMessageNoHref?(d(),o("p",ms,f(a.navigationMessageNoHref),1)):u("",!0)]),s[3]||(s[3]=i("div",{class:"mbe4"},[i("h2",null,"Previous and Next Only")],-1)),s[4]||(s[4]=i("p",null," Omit parent link for simpler sequential navigation: ",-1)),i("div",Es,[h(e,{previous:{title:"Chapter 1: Basics",href:"#examples-1"},next:{title:"Chapter 3: Advanced",href:"#examples-1"}})]),s[5]||(s[5]=i("div",{class:"mbe4"},[i("h2",null,"Parent Only")],-1)),s[6]||(s[6]=i("p",null," Show only the parent/overview link: ",-1)),i("div",vs,[h(e,{parent:{title:"Back to Documentation",href:"#examples-1"}})]),s[7]||(s[7]=i("div",{class:"mbe4"},[i("h2",null,"Bordered Style")],-1)),i("div",Bs,[h(e,{previous:{title:"Installation",href:"#examples-1"},next:{title:"Configuration",href:"#examples-1"},parent:{title:"Guides",href:"#examples-1"},bordered:""})]),s[8]||(s[8]=i("div",{class:"mbe4"},[i("h2",null,"Custom Icons")],-1)),s[9]||(s[9]=i("p",null," Override default icons using slots: ",-1)),i("div",bs,[h(e,{previous:{title:"Prev Page",href:"#examples-1"},next:{title:"Next Page",href:"#examples-1"},parent:{title:"Overview",href:"#examples-1"}},{"previous-icon":E(()=>[h(m,{size:20})]),"next-icon":E(()=>[h(k,{size:20})]),"parent-icon":E(()=>[h(v,{size:20})]),_:1})]),s[10]||(s[10]=i("div",{class:"mbe4"},[i("h2",null,"Only Next")],-1)),s[11]||(s[11]=i("p",null," First page scenario - only show next link: ",-1)),i("div",fs,[h(e,{next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}})]),s[12]||(s[12]=i("div",{class:"mbe4"},[i("h2",null,"Only Previous")],-1)),s[13]||(s[13]=i("p",null," Last page scenario - only show previous link: ",-1)),i("div",As,[h(e,{previous:{title:"Deployment",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}})]),s[14]||(s[14]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization (Monochrome)")],-1)),i("div",Ds,[i("div",{innerHTML:a.monochromeCustomContentPaginationStyles},null,8,qs),h(e,{class:"monochrome-custom-content-pagination",previous:{title:"Introduction",href:"#examples-1"},next:{title:"Getting Started",href:"#examples-1"},parent:{title:"Documentation",href:"#examples-1"}},{"previous-icon":E(()=>[h(m,{size:20})]),"next-icon":E(()=>[h(k,{size:20})]),"parent-icon":E(()=>[h(v,{size:20})]),_:1})])])}const xs=S(cs,[["render",Ps]]),zs=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md"}'),ws={name:"components/pagination.md"},Rs=Object.assign(ws,{setup(n){return(s,t)=>(d(),o("div",null,[t[0]||(t[0]=i("h1",{id:"pagination",tabindex:"-1"},[D("Pagination "),i("a",{class:"header-anchor",href:"#pagination","aria-label":'Permalink to "Pagination"'},"​")],-1)),h(I),t[1]||(t[1]=i("p",null,"Pagination allows users to navigate through pages of content. It displays page numbers and navigation controls, making it easy to move between large sets of data.",-1)),t[2]||(t[2]=i("h2",{id:"examples",tabindex:"-1"},[D("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),h(gs),t[3]||(t[3]=A(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
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
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">first</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;最初&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;前&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;次&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">last</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;最後&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">first</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Primera&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">previous</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Anterior&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">next</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Siguiente&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">last</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Última&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span></span></code></pre></div><hr><h1 id="content-pagination" tabindex="-1">Content Pagination <a class="header-anchor" href="#content-pagination" aria-label="Permalink to &quot;Content Pagination&quot;">​</a></h1><p>Content Pagination provides navigation between sequential content items (like documentation pages or articles). It displays previous/next links and an optional parent/overview link, making it easy to navigate through structured content hierarchies.</p><h2 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h2>`,51)),h(xs),t[4]||(t[4]=A(`<h2 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
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
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="use-cases" tabindex="-1">Use Cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use Cases&quot;">​</a></h2><p>Content Pagination is ideal for:</p><ul><li><strong>Documentation sites</strong>: Navigate between guide pages, API references, and tutorials</li><li><strong>Multi-page articles</strong>: Move between chapters or sections of long-form content</li><li><strong>Course materials</strong>: Progress through lessons with easy navigation to course overview</li><li><strong>Blog series</strong>: Link related posts in a series with navigation to the series index</li><li><strong>Wizard flows</strong>: Guide users through multi-step processes with clear navigation</li></ul>`,32))]))}});export{zs as __pageData,Rs as default};
