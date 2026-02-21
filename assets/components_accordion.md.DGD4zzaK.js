import{A as P}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as b,a as y,x as p}from"./chunks/Button.CFkPNK98.js";import{t as M}from"./chunks/state-CovhUvdr.DWhhlYib.js";import{d as A,p as I,c as u,v as f,x as B,o as m,r as v,K as V,_ as N,C as F,j as a,G as i,w as n,a as o,ae as R,k as C}from"./chunks/framework.NAAYCHZu.js";import{c as D}from"./chunks/createLucideIcon.B61Wqv9x.js";import{I as X}from"./chunks/info.CjSjj6Py.js";import{F as _}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=D("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=D("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),$=class extends y{render(){return p`
      <slot></slot>
    `}};$.styles=[b`
    :host {
      display: block;
    }
    /* Progressive enhancement: Hide only after web component is defined */
    :host(:not(:defined)) {
      visibility: visible; /* Content visible without JS */
    }
    :host(:defined) {
      visibility: visible; /* Explicit visibility once defined */
    }
  `];const E=class extends y{constructor(){super(),this._id=M("accordion-item"),this.open=!1,this.headingLevel=3,this.disabled=!1,this.bordered=!1,this.background=!1,this.useChevron=!0,this.useX=!1,this.useMinus=!1,this.noIndicator=!1,this.addEventListener("keydown",this._handleKeydown.bind(this))}connectedCallback(){super.connectedCallback(),this.setAttribute("data-enhanced","")}render(){return p`
      <div class="header" part="ag-accordion-header-wrapper" @click="${this.toggle}">
        ${this._renderHeading()}
      </div>
      <div
        class="content"
        part="ag-accordion-content"
        role="region"
        aria-labelledby="${this._id}-button"
        id="${this._id}-panel"
        ?hidden="${this.hasAttribute("data-enhanced")&&!this.open}"
      >
        <slot name="content"></slot>
      </div>
    `}_renderChevronIndicator(){return p`
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    `}_renderPlusIndicator(){return p`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14"></path>
        <path d="M5 12h14"></path>
      </svg>
    `}_renderMinusIndicator(){return p`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
      </svg>
    `}_renderIndicator(){return this.noIndicator?null:this.useX?this._renderPlusIndicator():this.useMinus?this.open?this._renderMinusIndicator():this._renderPlusIndicator():this._renderChevronIndicator()}_renderHeading(){const s=p`
      <button
        part="ag-accordion-header"
        aria-expanded="${this.open}"
        aria-controls="${this._id}-panel"
        id="${this._id}-button"
        ?disabled="${this.disabled}"
        aria-disabled="${this.disabled}"
        @keydown="${this._handleKeydown}"
      >
        <slot name="header"></slot>
        <span class="indicator" part="ag-accordion-indicator">
          <slot name="indicator">
            ${this._renderIndicator()}
          </slot>
        </span>
      </button>
    `;switch(Math.max(1,Math.min(6,this.headingLevel||3))){case 1:return p`<h1 class="heading" part="ag-accordion-heading">${s}</h1>`;case 2:return p`<h2 class="heading" part="ag-accordion-heading">${s}</h2>`;case 3:return p`<h3 class="heading" part="ag-accordion-heading">${s}</h3>`;case 4:return p`<h4 class="heading" part="ag-accordion-heading">${s}</h4>`;case 5:return p`<h5 class="heading" part="ag-accordion-heading">${s}</h5>`;case 6:return p`<h6 class="heading" part="ag-accordion-heading">${s}</h6>`}}toggle(){if(this.disabled)return;this.open=!this.open;const s=new CustomEvent("toggle",{detail:{open:this.open},bubbles:!0,composed:!0});this.dispatchEvent(s),this.onToggle&&this.onToggle(s)}focus(){var s,l;(l=(s=this.shadowRoot)==null?void 0:s.querySelector("button"))==null||l.focus()}get buttonElement(){var s;return((s=this.shadowRoot)==null?void 0:s.querySelector("button"))||null}_handleKeydown(s){if(this.disabled)return;const{key:l}=s;(l==="Enter"||l===" ")&&s.target===this.buttonElement&&(s.preventDefault(),this.toggle()),(l==="ArrowDown"||l==="ArrowUp"||l==="Home"||l==="End")&&(s.preventDefault(),this.dispatchEvent(new CustomEvent("accordion-keydown",{detail:{key:l,accordionItem:this},bubbles:!0})))}};E.properties={open:{type:Boolean,reflect:!0},headingLevel:{type:Number,reflect:!0,attribute:"heading-level"},disabled:{type:Boolean,reflect:!0},bordered:{type:Boolean,reflect:!0},background:{type:Boolean,reflect:!0},useChevron:{type:Boolean,reflect:!0,attribute:"use-chevron"},useX:{type:Boolean,reflect:!0,attribute:"use-x"},useMinus:{type:Boolean,reflect:!0,attribute:"use-minus"},noIndicator:{type:Boolean,reflect:!0,attribute:"no-indicator"},onToggle:{attribute:!1}},E.styles=[b`
    :host {
      display: block;
    }
    .header {
      cursor: pointer;
    }
    :host([disabled]) .header {
      cursor: not-allowed;
      opacity: 0.6;
    }
    :host([background]) .header {
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }
    .heading {
      margin: 0;
      padding: 0;
    }

    :host([background]) .heading {
      margin-inline: var(--ag-space-3);
    }
      
    :host([bordered]) .header button {
      border-bottom: 1px solid var(--ag-border);
    }

    .header button {
      background: none;
      border: none;
      padding-block: var(--ag-space-4);
      margin-block-end: var(--ag-space-2);
      font: inherit;
      /* Ensure button inherits color as we've seen in dark mode issues with useragent keeping it color: buttontext black */
      color: inherit;
      cursor: pointer;
      width: 100%;
      text-align: start;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header button:focus-visible {
      /* Softer focus ring using alpha channel */
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }
    :host([disabled]) .header button {
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Indicator wrapper - visible by default unless noIndicator is set */
    .indicator {
      display: block;
      flex-shrink: 0;
      transition: transform var(--ag-motion-slow) ease;
    }
    :host([no-indicator]) .indicator {
      display: none;
    }

    /* Chevron indicator (default): starts pointing down, rotates 180deg to point up when open */
    :host([use-chevron][open]) .indicator {
      transform: rotate(180deg);
    }

    /* X indicator: starts rotated 180deg (upside-down plus), rotates to 45deg (X) when open */
    :host([use-x]) .indicator {
      transform: rotate(180deg);
    }
    :host([use-x][open]) .indicator {
      transform: rotate(45deg);
    }

    /* Minus indicator: Plus swaps to minus icon when open - no rotation needed */
    :host([use-minus]) .indicator {
      /* No rotation - the icon swap from plus to minus provides the visual feedback */
      transform: none;
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      .header button:focus-visible,
      .indicator {
        transition: none;
      }
    }

    /* Progressive enhancement: Content visible until JS enhanced */
    .content {
      display: block;
    }
    /* After JS enhancement, respect open/closed state */
    :host([data-enhanced]) .content {
      display: none;
    }
    :host([data-enhanced][open]) .content {
      display: block;
      margin-block-end: var(--ag-space-2);
    }
    /* Ensure hidden attribute works in all environments */
    .content[hidden] {
      display: none !important;
    }
  `];let w=E;customElements.get("ag-accordion-item")||customElements.define("ag-accordion-item",w);const x=class extends y{constructor(){super(),this.handleAccordionKeydown=s=>{const l=s,r=this.accordions;if(r.length===0)return;const{key:g,accordionItem:k}=l.detail,t=r.indexOf(k);if(t===-1)return;let e=t;switch(g){case"ArrowDown":e=(t+1)%r.length;break;case"ArrowUp":e=(t-1+r.length)%r.length;break;case"Home":e=0;break;case"End":e=r.length-1;break;default:return}e!==t&&r[e].focus()},this.addEventListener("accordion-keydown",this.handleAccordionKeydown)}get accordions(){return Array.from(this.children).filter(s=>"disabled"in s&&"focus"in s&&typeof s.focus=="function"&&!s.disabled)}render(){return p`<slot></slot>`}};x.styles=[b`
    :host {
      display: block;
      width: 100%;
    }
  `];let H=x;customElements.get("ag-accordion")||customElements.define("ag-accordion",H);customElements.get("ag-accordion")||customElements.define("ag-accordion",H);customElements.get("ag-accordion-item")||customElements.define("ag-accordion-item",w);const O=A({__name:"VueAccordion",setup(h,{emit:s}){const l=I();return f(async()=>{await customElements.whenDefined("ag-accordion"),l.value}),B(()=>{}),(r,g)=>(m(),u("ag-accordion",V({ref_key:"accordionRef",ref:l},r.$attrs),[v(r.$slots,"default")],16))}}),W=[".open",".disabled",".useChevron",".useX",".useMinus",".noIndicator",".background",".bordered","headingLevel"],j=A({__name:"VueAccordionItem",props:{open:{type:Boolean,default:!1},headingLevel:{default:3},disabled:{type:Boolean,default:!1},background:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},useChevron:{type:Boolean,default:!0},useX:{type:Boolean,default:!1},useMinus:{type:Boolean,default:!1},noIndicator:{type:Boolean,default:!1}},emits:["toggle","update:open"],setup(h,{emit:s}){const l=s,r=I(),g=k=>{const t=k.detail;l("toggle",t),l("update:open",t.open)};return f(async()=>{await customElements.whenDefined("ag-accordion-item"),r.value&&r.value.addEventListener("toggle",g)}),B(()=>{r.value&&r.value.removeEventListener("toggle",g)}),(k,t)=>(m(),u("ag-accordion-item",V({ref_key:"accordionItemRef",ref:r,".open":h.open,".disabled":h.disabled,".useChevron":h.useChevron,".useX":h.useX,".useMinus":h.useMinus,".noIndicator":h.noIndicator,".background":h.background,".bordered":h.bordered,headingLevel:h.headingLevel},k.$attrs),[v(k.$slots,"default")],48,W))}}),U={slot:"header"},K=A({__name:"VueAccordionHeader",setup(h){return(s,l)=>(m(),u("span",U,[v(s.$slots,"default")]))}}),J={slot:"content"},Q=A({__name:"VueAccordionContent",setup(h){return(s,l)=>(m(),u("div",J,[v(s.$slots,"default")]))}}),G={name:"AccordionExamples",components:{VueAccordion:O,VueAccordionItem:j,VueAccordionHeader:K,VueAccordionContent:Q,Info:X,Code:L,HelpCircle:z}},Y={class:"stacked mbe4"},Z={class:"stacked mbe4"},ss={class:"stacked mbe4"},is={class:"stacked mbe4"},ns={class:"stacked mbe4"},as={class:"stacked mbe4"},ts={class:"stacked mbe4"},es={class:"stacked mbe4"},ls={class:"stacked mbe4"},os={class:"flex-inline items-center"},ds={class:"flex-inline items-center"},hs={class:"flex-inline items-center"},rs={class:"stacked mbe4"};function ps(h,s,l,r,g,k){const t=F("VueAccordionHeader"),e=F("VueAccordionContent"),d=F("VueAccordionItem"),c=F("VueAccordion"),S=F("Info"),T=F("Code"),q=F("HelpCircle");return m(),u("section",null,[s[58]||(s[58]=a("div",{class:"mbe4"},[a("h2",null,"Basic Accordion (Default)"),a("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," By default, the Accordion provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators. ")],-1)),a("div",Y,[i(c,null,{default:n(()=>[i(d,{"use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[0]||(s[0]=[o("Chevron Section 1",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[1]||(s[1]=[a("p",null,"Default chevron indicator with smooth rotation",-1)])]),_:1})]),_:1}),i(d,{"use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[2]||(s[2]=[o("Chevron Section 2",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[3]||(s[3]=[a("p",null,"Click to see the 180° rotation animation",-1)])]),_:1})]),_:1}),i(d,{"use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[4]||(s[4]=[o("Chevron Section 3",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[5]||(s[5]=[a("p",null,"Classic accordion indicator style",-1)])]),_:1})]),_:1})]),_:1})]),s[59]||(s[59]=a("div",{class:"mbe4"},[a("h2",null,"X Indicator"),a("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open. ")],-1)),a("div",Z,[i(c,null,{default:n(()=>[i(d,{"use-x":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[6]||(s[6]=[o("X Indicator Section 1",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[7]||(s[7]=[a("p",null,"Plus transforms into X when opened",-1)])]),_:1})]),_:1}),i(d,{"use-x":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[8]||(s[8]=[o("X Indicator Section 2",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[9]||(s[9]=[a("p",null,"Smooth transition from plus to X",-1)])]),_:1})]),_:1}),i(d,{"use-x":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[10]||(s[10]=[o("X Indicator Section 3",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[11]||(s[11]=[a("p",null,"Modern accordion indicator style",-1)])]),_:1})]),_:1})]),_:1})]),s[60]||(s[60]=a("div",{class:"mbe4"},[a("h2",null,"Plus/Minus Indicator"),a("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus transitions to minus when open with smooth animation. ")],-1)),a("div",ss,[i(c,null,{default:n(()=>[i(d,{"use-minus":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[12]||(s[12]=[o("Plus/Minus Section 1",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[13]||(s[13]=[a("p",null,"Plus changes to minus when opened",-1)])]),_:1})]),_:1}),i(d,{"use-minus":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[14]||(s[14]=[o("Plus/Minus Section 2",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[15]||(s[15]=[a("p",null,"Classic expand/collapse indicator",-1)])]),_:1})]),_:1}),i(d,{"use-minus":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[16]||(s[16]=[o("Plus/Minus Section 3",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[17]||(s[17]=[a("p",null,"Clear visual indication of state",-1)])]),_:1})]),_:1})]),_:1})]),s[61]||(s[61]=a("div",{class:"mbe4"},[a("h2",null,"No Indicator"),a("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Accordion items without any visual indicator. ")],-1)),a("div",is,[i(c,null,{default:n(()=>[i(d,{"no-indicator":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[18]||(s[18]=[o("No Indicator Section 1",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[19]||(s[19]=[a("p",null,"Clean header without indicator icon",-1)])]),_:1})]),_:1}),i(d,{"no-indicator":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[20]||(s[20]=[o("No Indicator Section 2",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[21]||(s[21]=[a("p",null,"Minimal design focused on content",-1)])]),_:1})]),_:1}),i(d,{"no-indicator":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[22]||(s[22]=[o("No Indicator Section 3",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[23]||(s[23]=[a("p",null,"Simple accordion without visual clutter",-1)])]),_:1})]),_:1})]),_:1})]),s[62]||(s[62]=a("div",{class:"mbe4"},[a("h2",null,"Bordered")],-1)),a("div",ns,[i(c,null,{default:n(()=>[i(d,{bordered:"","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[24]||(s[24]=[o("Bordered Item 1",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[25]||(s[25]=[a("p",null,"This accordion has borders on the headers",-1)])]),_:1})]),_:1}),i(d,{bordered:"","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[26]||(s[26]=[o("Bordered Item 2",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[27]||(s[27]=[a("p",null,"Another bordered item",-1)])]),_:1})]),_:1}),i(d,{bordered:"","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[28]||(s[28]=[o("Bordered Item 3",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[29]||(s[29]=[a("p",null,"Third bordered item",-1)])]),_:1})]),_:1})]),_:1})]),s[63]||(s[63]=a("div",{class:"mbe4"},[a("h2",null,"With Background")],-1)),a("div",as,[i(c,null,{default:n(()=>[i(d,{background:"","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[30]||(s[30]=[o("Background Item 1",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[31]||(s[31]=[a("p",null,"This accordion has background color on headers",-1)])]),_:1})]),_:1}),i(d,{background:"","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[32]||(s[32]=[o("Background Item 2",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[33]||(s[33]=[a("p",null,"Another item with background",-1)])]),_:1})]),_:1}),i(d,{background:"","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[34]||(s[34]=[o("Background Item 3",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[35]||(s[35]=[a("p",null,"Third item with background",-1)])]),_:1})]),_:1})]),_:1})]),s[64]||(s[64]=a("div",{class:"mbe4"},[a("h2",null,"One Item Open")],-1)),a("div",ts,[i(c,null,{default:n(()=>[i(d,{"use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[36]||(s[36]=[o("Closed Item",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[37]||(s[37]=[a("p",null,"This item starts closed",-1)])]),_:1})]),_:1}),i(d,{"use-chevron":"",open:""},{default:n(()=>[i(t,null,{default:n(()=>[...s[38]||(s[38]=[o("Open Item",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[39]||(s[39]=[a("p",null,"This item starts open",-1)])]),_:1})]),_:1}),i(d,{"use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[40]||(s[40]=[o("Another Closed Item",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[41]||(s[41]=[a("p",null,"This item also starts closed",-1)])]),_:1})]),_:1})]),_:1})]),s[65]||(s[65]=a("div",{class:"mbe4"},[a("h2",null,"Disabled State")],-1)),a("div",es,[i(c,null,{default:n(()=>[i(d,{"use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[42]||(s[42]=[o("Enabled Item",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[43]||(s[43]=[a("p",null,"This item can be toggled",-1)])]),_:1})]),_:1}),i(d,{"use-chevron":"",disabled:""},{default:n(()=>[i(t,null,{default:n(()=>[...s[44]||(s[44]=[o("Disabled Item",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[45]||(s[45]=[a("p",null,"This item cannot be toggled",-1)])]),_:1})]),_:1}),i(d,{"use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[46]||(s[46]=[o("Another Enabled Item",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[47]||(s[47]=[a("p",null,"This item can also be toggled",-1)])]),_:1})]),_:1})]),_:1})]),s[66]||(s[66]=a("div",{class:"mbe4"},[a("h2",null,"Rich Content")],-1)),a("div",ls,[i(c,null,{default:n(()=>[i(d,{"use-chevron":"",bordered:""},{default:n(()=>[i(t,null,{default:n(()=>[a("div",os,[i(S,{color:"var(--ag-primary)",size:18,class:"mie2"}),s[48]||(s[48]=o(" Features ",-1))])]),_:1}),i(e,null,{default:n(()=>[...s[49]||(s[49]=[a("ul",null,[a("li",null,"Accessible by default with ARIA attributes"),a("li",null,"Keyboard navigation support"),a("li",null,"Customizable heading levels"),a("li",null,"Multiple styling options")],-1)])]),_:1})]),_:1}),i(d,{"use-chevron":"",bordered:""},{default:n(()=>[i(t,null,{default:n(()=>[a("div",ds,[i(T,{color:"var(--ag-secondary)",size:18,class:"mie2"}),s[50]||(s[50]=o(" Code Example ",-1))])]),_:1}),i(e,null,{default:n(()=>[...s[51]||(s[51]=[a("pre",{style:{background:"var(--ag-background-secondary)",padding:"1rem","border-radius":"4px","overflow-x":"auto"}},`<VueAccordionItem use-chevron>
  <VueAccordionHeader>Title</VueAccordionHeader>
  <VueAccordionContent>Content</VueAccordionContent>
</VueAccordionItem>`,-1)])]),_:1})]),_:1}),i(d,{"use-chevron":"",bordered:""},{default:n(()=>[i(t,null,{default:n(()=>[a("div",hs,[i(q,{color:"var(--ag-success)",size:18,class:"mie2"}),s[52]||(s[52]=o(" More Information ",-1))])]),_:1}),i(e,null,{default:n(()=>[...s[53]||(s[53]=[a("p",null,"Accordions are great for:",-1),a("ul",null,[a("li",null,"FAQ sections"),a("li",null,"Feature lists"),a("li",null,"Documentation"),a("li",null,"Progressive disclosure")],-1)])]),_:1})]),_:1})]),_:1})]),s[67]||(s[67]=a("div",{class:"mbe4"},[a("h2",null,"CSS Parts Customization"),a("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize accordion appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),a("div",rs,[i(c,null,{default:n(()=>[i(d,{class:"custom-minimal-accordion","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[54]||(s[54]=[o("Minimal Border Style",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[55]||(s[55]=[a("p",null,"This variant uses a minimal border-left design with subtle styling.",-1)])]),_:1})]),_:1}),i(d,{class:"custom-minimal-accordion","use-chevron":""},{default:n(()=>[i(t,null,{default:n(()=>[...s[56]||(s[56]=[o("Another Minimal Item",-1)])]),_:1}),i(e,null,{default:n(()=>[...s[57]||(s[57]=[a("p",null,"Clean and simple styling focused on content hierarchy.",-1)])]),_:1})]),_:1})]),_:1})])])}const cs=N(G,[["render",ps],["__scopeId","data-v-6938cedb"]]);class ks extends y{createRenderRoot(){return this}render(){return p`
      <section>
        <div class="mbe4">
          <h2>Basic Accordion (Default)</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            By default, the Accordion provides a chevron which points down when
            closed, then rotates 180° to point up when open. See below for how to
            opt out or use different indicators.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 1</span>
              <div slot="content">
                <p>Default chevron indicator with smooth rotation</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 2</span>
              <div slot="content">
                <p>Click to see the 180° rotation animation</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 3</span>
              <div slot="content">
                <p>Classic accordion indicator style</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>X Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus rotated 180° (upside down) when closed, rotates to 45° forming
            an X when open.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 1</span>
              <div slot="content">
                <p>Plus transforms into X when opened</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 2</span>
              <div slot="content">
                <p>Smooth transition from plus to X</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 3</span>
              <div slot="content">
                <p>Modern accordion indicator style</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Plus/Minus Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus transitions to minus when open with smooth animation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 1</span>
              <div slot="content">
                <p>Plus changes to minus when opened</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 2</span>
              <div slot="content">
                <p>Classic expand/collapse indicator</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 3</span>
              <div slot="content">
                <p>Clear visual indication of state</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>No Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Accordion items without any visual indicator.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 1</span>
              <div slot="content">
                <p>Clean header without indicator icon</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 2</span>
              <div slot="content">
                <p>Minimal design focused on content</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 3</span>
              <div slot="content">
                <p>Simple accordion without visual clutter</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 1</span>
              <div slot="content">
                <p>This accordion has borders on the headers</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 2</span>
              <div slot="content">
                <p>Another bordered item</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 3</span>
              <div slot="content">
                <p>Third bordered item</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>With Background</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 1</span>
              <div slot="content">
                <p>This accordion has background color on headers</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 2</span>
              <div slot="content">
                <p>Another item with background</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 3</span>
              <div slot="content">
                <p>Third item with background</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>One Item Open</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Closed Item</span>
              <div slot="content">
                <p>This item starts closed</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron open>
              <span slot="header">Open Item</span>
              <div slot="content">
                <p>This item starts open</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Another Closed Item</span>
              <div slot="content">
                <p>This item also starts closed</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Enabled Item</span>
              <div slot="content">
                <p>This item can be toggled</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron disabled>
              <span slot="header">Disabled Item</span>
              <div slot="content">
                <p>This item cannot be toggled</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Another Enabled Item</span>
              <div slot="content">
                <p>This item can also be toggled</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  Features
                </div>
              </span>
              <div slot="content">
                <ul>
                  <li>Accessible by default with ARIA attributes</li>
                  <li>Keyboard navigation support</li>
                  <li>Customizable heading levels</li>
                  <li>Multiple styling options</li>
                </ul>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-secondary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Code Example
                </div>
              </span>
              <div slot="content">
                <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">
&lt;ag-accordion-item use-chevron&gt;
  &lt;span slot="header"&gt;Title&lt;/span&gt;
  &lt;div slot="content"&gt;Content&lt;/div&gt;
&lt;/ag-accordion-item&gt;</pre>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-success)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  More Information
                </div>
              </span>
              <div slot="content">
                <p>Accordions are great for:</p>
                <ul>
                  <li>FAQ sections</li>
                  <li>Feature lists</li>
                  <li>Documentation</li>
                  <li>Progressive disclosure</li>
                </ul>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize accordion appearance using CSS Shadow Parts without
            breaking encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item class="custom-minimal-accordion" use-chevron>
              <span slot="header">Minimal Border Style</span>
              <div slot="content">
                <p>
                  This variant uses a minimal border-left design with subtle
                  styling.
                </p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item class="custom-minimal-accordion" use-chevron>
              <span slot="header">Another Minimal Item</span>
              <div slot="content">
                <p>Clean and simple styling focused on content hierarchy.</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <style>
          /* CSS Parts customization examples */
          .custom-minimal-accordion::part(ag-accordion-header-wrapper) {
            border-left: 4px solid var(--ag-primary);
            padding-left: 12px;
          }

          .custom-minimal-accordion::part(ag-accordion-header) {
            font-weight: 500;
            color: var(--ag-text-primary);
          }

          .custom-minimal-accordion::part(ag-accordion-content) {
            padding-left: 16px;
            border-left: 2px solid #e5e7eb;
            margin-left: 2px;
          }

          .custom-minimal-accordion::part(ag-accordion-indicator) {
            color: var(--ag-primary);
          }
        </style>
      </section>
    `}}customElements.define("accordion-lit-examples",ks);const Fs=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Accordion (Default)</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        By default, the Accordion provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Chevron Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Default chevron indicator with smooth rotation</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Chevron Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Click to see the 180° rotation animation</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Chevron Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Classic accordion indicator style</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>X Indicator</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-x>
          <VueAccordionHeader>X Indicator Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Plus transforms into X when opened</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-x>
          <VueAccordionHeader>X Indicator Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Smooth transition from plus to X</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-x>
          <VueAccordionHeader>X Indicator Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Modern accordion indicator style</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>Plus/Minus Indicator</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Plus transitions to minus when open with smooth animation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-minus>
          <VueAccordionHeader>Plus/Minus Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Plus changes to minus when opened</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-minus>
          <VueAccordionHeader>Plus/Minus Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Classic expand/collapse indicator</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-minus>
          <VueAccordionHeader>Plus/Minus Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Clear visual indication of state</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>No Indicator</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Accordion items without any visual indicator.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem no-indicator>
          <VueAccordionHeader>No Indicator Section 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>Clean header without indicator icon</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem no-indicator>
          <VueAccordionHeader>No Indicator Section 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Minimal design focused on content</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem no-indicator>
          <VueAccordionHeader>No Indicator Section 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Simple accordion without visual clutter</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>Bordered</h2>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          bordered
          use-chevron
        >
          <VueAccordionHeader>Bordered Item 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion has borders on the headers</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          bordered
          use-chevron
        >
          <VueAccordionHeader>Bordered Item 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Another bordered item</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          bordered
          use-chevron
        >
          <VueAccordionHeader>Bordered Item 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Third bordered item</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>With Background</h2>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          background
          use-chevron
        >
          <VueAccordionHeader>Background Item 1</VueAccordionHeader>
          <VueAccordionContent>
            <p>This accordion has background color on headers</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          background
          use-chevron
        >
          <VueAccordionHeader>Background Item 2</VueAccordionHeader>
          <VueAccordionContent>
            <p>Another item with background</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          background
          use-chevron
        >
          <VueAccordionHeader>Background Item 3</VueAccordionHeader>
          <VueAccordionContent>
            <p>Third item with background</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>One Item Open</h2>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Closed Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item starts closed</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          open
        >
          <VueAccordionHeader>Open Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item starts open</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Another Closed Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item also starts closed</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>Disabled State</h2>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Enabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item can be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          disabled
        >
          <VueAccordionHeader>Disabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item cannot be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem use-chevron>
          <VueAccordionHeader>Another Enabled Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>This item can also be toggled</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>Rich Content</h2>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          use-chevron
          bordered
        >
          <VueAccordionHeader>
            <div class="flex-inline items-center">
              <Info
                color="var(--ag-primary)"
                :size="18"
                class="mie2"
              />
              Features
            </div>
          </VueAccordionHeader>
          <VueAccordionContent>
            <ul>
              <li>Accessible by default with ARIA attributes</li>
              <li>Keyboard navigation support</li>
              <li>Customizable heading levels</li>
              <li>Multiple styling options</li>
            </ul>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          bordered
        >
          <VueAccordionHeader>
            <div class="flex-inline items-center">
              <Code
                color="var(--ag-secondary)"
                :size="18"
                class="mie2"
              />
              Code Example
            </div>
          </VueAccordionHeader>
          <VueAccordionContent>
            <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">
&lt;VueAccordionItem use-chevron&gt;
  &lt;VueAccordionHeader&gt;Title&lt;/VueAccordionHeader&gt;
  &lt;VueAccordionContent&gt;Content&lt;/VueAccordionContent&gt;
&lt;/VueAccordionItem&gt;</pre>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          use-chevron
          bordered
        >
          <VueAccordionHeader>
            <div class="flex-inline items-center">
              <HelpCircle
                color="var(--ag-success)"
                :size="18"
                class="mie2"
              />
              More Information
            </div>
          </VueAccordionHeader>
          <VueAccordionContent>
            <p>Accordions are great for:</p>
            <ul>
              <li>FAQ sections</li>
              <li>Feature lists</li>
              <li>Documentation</li>
              <li>Progressive disclosure</li>
            </ul>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>

    <div class="mbe4">
      <h2>CSS Parts Customization</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize accordion appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAccordion>
        <VueAccordionItem
          class="custom-minimal-accordion"
          use-chevron
        >
          <VueAccordionHeader>Minimal Border Style</VueAccordionHeader>
          <VueAccordionContent>
            <p>This variant uses a minimal border-left design with subtle styling.</p>
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem
          class="custom-minimal-accordion"
          use-chevron
        >
          <VueAccordionHeader>Another Minimal Item</VueAccordionHeader>
          <VueAccordionContent>
            <p>Clean and simple styling focused on content hierarchy.</p>
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    </div>
  </section>
</template>

<script>
import VueAccordion, {
  VueAccordionItem,
  VueAccordionHeader,
  VueAccordionContent,
} from "agnosticui-core/accordion/vue";
import { Info, Code, HelpCircle } from "lucide-vue-next";

export default {
  name: "AccordionExamples",
  components: {
    VueAccordion,
    VueAccordionItem,
    VueAccordionHeader,
    VueAccordionContent,
    Info,
    Code,
    HelpCircle,
  },
};
<\/script>

<style scoped>
/* CSS Parts customization examples */
.custom-minimal-accordion::part(ag-accordion-header-wrapper) {
  border-left: 4px solid var(--ag-primary);
  padding-left: 12px;
}

.custom-minimal-accordion::part(ag-accordion-header) {
  font-weight: 500;
  color: var(--ag-text-primary);
}

.custom-minimal-accordion::part(ag-accordion-content) {
  padding-left: 16px;
  border-left: 2px solid #e5e7eb;
  margin-left: 2px;
}

.custom-minimal-accordion::part(ag-accordion-indicator) {
  color: var(--ag-primary);
}
</style>
`,gs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/accordion';

export class AccordionLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Accordion (Default)</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            By default, the Accordion provides a chevron which points down when
            closed, then rotates 180° to point up when open. See below for how to
            opt out or use different indicators.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 1</span>
              <div slot="content">
                <p>Default chevron indicator with smooth rotation</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 2</span>
              <div slot="content">
                <p>Click to see the 180° rotation animation</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 3</span>
              <div slot="content">
                <p>Classic accordion indicator style</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>X Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus rotated 180° (upside down) when closed, rotates to 45° forming
            an X when open.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 1</span>
              <div slot="content">
                <p>Plus transforms into X when opened</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 2</span>
              <div slot="content">
                <p>Smooth transition from plus to X</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 3</span>
              <div slot="content">
                <p>Modern accordion indicator style</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Plus/Minus Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus transitions to minus when open with smooth animation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 1</span>
              <div slot="content">
                <p>Plus changes to minus when opened</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 2</span>
              <div slot="content">
                <p>Classic expand/collapse indicator</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 3</span>
              <div slot="content">
                <p>Clear visual indication of state</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>No Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Accordion items without any visual indicator.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 1</span>
              <div slot="content">
                <p>Clean header without indicator icon</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 2</span>
              <div slot="content">
                <p>Minimal design focused on content</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 3</span>
              <div slot="content">
                <p>Simple accordion without visual clutter</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 1</span>
              <div slot="content">
                <p>This accordion has borders on the headers</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 2</span>
              <div slot="content">
                <p>Another bordered item</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 3</span>
              <div slot="content">
                <p>Third bordered item</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>With Background</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 1</span>
              <div slot="content">
                <p>This accordion has background color on headers</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 2</span>
              <div slot="content">
                <p>Another item with background</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 3</span>
              <div slot="content">
                <p>Third item with background</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>One Item Open</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Closed Item</span>
              <div slot="content">
                <p>This item starts closed</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron open>
              <span slot="header">Open Item</span>
              <div slot="content">
                <p>This item starts open</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Another Closed Item</span>
              <div slot="content">
                <p>This item also starts closed</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Enabled Item</span>
              <div slot="content">
                <p>This item can be toggled</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron disabled>
              <span slot="header">Disabled Item</span>
              <div slot="content">
                <p>This item cannot be toggled</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Another Enabled Item</span>
              <div slot="content">
                <p>This item can also be toggled</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  Features
                </div>
              </span>
              <div slot="content">
                <ul>
                  <li>Accessible by default with ARIA attributes</li>
                  <li>Keyboard navigation support</li>
                  <li>Customizable heading levels</li>
                  <li>Multiple styling options</li>
                </ul>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-secondary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Code Example
                </div>
              </span>
              <div slot="content">
                <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">
&lt;ag-accordion-item use-chevron&gt;
  &lt;span slot="header"&gt;Title&lt;/span&gt;
  &lt;div slot="content"&gt;Content&lt;/div&gt;
&lt;/ag-accordion-item&gt;</pre>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-success)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  More Information
                </div>
              </span>
              <div slot="content">
                <p>Accordions are great for:</p>
                <ul>
                  <li>FAQ sections</li>
                  <li>Feature lists</li>
                  <li>Documentation</li>
                  <li>Progressive disclosure</li>
                </ul>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize accordion appearance using CSS Shadow Parts without
            breaking encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item class="custom-minimal-accordion" use-chevron>
              <span slot="header">Minimal Border Style</span>
              <div slot="content">
                <p>
                  This variant uses a minimal border-left design with subtle
                  styling.
                </p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item class="custom-minimal-accordion" use-chevron>
              <span slot="header">Another Minimal Item</span>
              <div slot="content">
                <p>Clean and simple styling focused on content hierarchy.</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <style>
          /* CSS Parts customization examples */
          .custom-minimal-accordion::part(ag-accordion-header-wrapper) {
            border-left: 4px solid var(--ag-primary);
            padding-left: 12px;
          }

          .custom-minimal-accordion::part(ag-accordion-header) {
            font-weight: 500;
            color: var(--ag-text-primary);
          }

          .custom-minimal-accordion::part(ag-accordion-content) {
            padding-left: 16px;
            border-left: 2px solid #e5e7eb;
            margin-left: 2px;
          }

          .custom-minimal-accordion::part(ag-accordion-indicator) {
            color: var(--ag-primary);
          }
        </style>
      </section>
    \`;
  }
}

customElements.define('accordion-lit-examples', AccordionLitExamples);
`,us=`import {
  ReactAccordion,
  AccordionItem,
  ItemHeader,
  ItemContent,
} from "agnosticui-core/accordion/react";

export default function AccordionReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Basic Accordion (Default)</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          By default, the Accordion provides a chevron which points down when
          closed, then rotates 180° to point up when open. See below for how to
          opt out or use different indicators.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron>
            <ItemHeader>Chevron Section 1</ItemHeader>
            <ItemContent>
              <p>Default chevron indicator with smooth rotation</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Chevron Section 2</ItemHeader>
            <ItemContent>
              <p>Click to see the 180° rotation animation</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Chevron Section 3</ItemHeader>
            <ItemContent>
              <p>Classic accordion indicator style</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>X Indicator</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Plus rotated 180° (upside down) when closed, rotates to 45° forming
          an X when open.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useX>
            <ItemHeader>X Indicator Section 1</ItemHeader>
            <ItemContent>
              <p>Plus transforms into X when opened</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useX>
            <ItemHeader>X Indicator Section 2</ItemHeader>
            <ItemContent>
              <p>Smooth transition from plus to X</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useX>
            <ItemHeader>X Indicator Section 3</ItemHeader>
            <ItemContent>
              <p>Modern accordion indicator style</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Plus/Minus Indicator</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Plus transitions to minus when open with smooth animation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useMinus>
            <ItemHeader>Plus/Minus Section 1</ItemHeader>
            <ItemContent>
              <p>Plus changes to minus when opened</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useMinus>
            <ItemHeader>Plus/Minus Section 2</ItemHeader>
            <ItemContent>
              <p>Classic expand/collapse indicator</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useMinus>
            <ItemHeader>Plus/Minus Section 3</ItemHeader>
            <ItemContent>
              <p>Clear visual indication of state</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>No Indicator</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Accordion items without any visual indicator.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem noIndicator>
            <ItemHeader>No Indicator Section 1</ItemHeader>
            <ItemContent>
              <p>Clean header without indicator icon</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem noIndicator>
            <ItemHeader>No Indicator Section 2</ItemHeader>
            <ItemContent>
              <p>Minimal design focused on content</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem noIndicator>
            <ItemHeader>No Indicator Section 3</ItemHeader>
            <ItemContent>
              <p>Simple accordion without visual clutter</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Bordered</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem bordered useChevron>
            <ItemHeader>Bordered Item 1</ItemHeader>
            <ItemContent>
              <p>This accordion has borders on the headers</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem bordered useChevron>
            <ItemHeader>Bordered Item 2</ItemHeader>
            <ItemContent>
              <p>Another bordered item</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem bordered useChevron>
            <ItemHeader>Bordered Item 3</ItemHeader>
            <ItemContent>
              <p>Third bordered item</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>With Background</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem background useChevron>
            <ItemHeader>Background Item 1</ItemHeader>
            <ItemContent>
              <p>This accordion has background color on headers</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem background useChevron>
            <ItemHeader>Background Item 2</ItemHeader>
            <ItemContent>
              <p>Another item with background</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem background useChevron>
            <ItemHeader>Background Item 3</ItemHeader>
            <ItemContent>
              <p>Third item with background</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>One Item Open</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron>
            <ItemHeader>Closed Item</ItemHeader>
            <ItemContent>
              <p>This item starts closed</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron open>
            <ItemHeader>Open Item</ItemHeader>
            <ItemContent>
              <p>This item starts open</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Another Closed Item</ItemHeader>
            <ItemContent>
              <p>This item also starts closed</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Disabled State</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron>
            <ItemHeader>Enabled Item</ItemHeader>
            <ItemContent>
              <p>This item can be toggled</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron disabled>
            <ItemHeader>Disabled Item</ItemHeader>
            <ItemContent>
              <p>This item cannot be toggled</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Another Enabled Item</ItemHeader>
            <ItemContent>
              <p>This item can also be toggled</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Rich Content</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron bordered>
            <ItemHeader>
              <div className="flex-inline items-center">
                <svg
                  className="mie2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ag-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                Features
              </div>
            </ItemHeader>
            <ItemContent>
              <ul>
                <li>Accessible by default with ARIA attributes</li>
                <li>Keyboard navigation support</li>
                <li>Customizable heading levels</li>
                <li>Multiple styling options</li>
              </ul>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron bordered>
            <ItemHeader>
              <div className="flex-inline items-center">
                <svg
                  className="mie2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ag-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Code Example
              </div>
            </ItemHeader>
            <ItemContent>
              <pre
                style={{
                  background: "var(--ag-background-secondary)",
                  padding: "1rem",
                  borderRadius: "4px",
                  overflowX: "auto",
                }}
              >
                {\`<AccordionItem useChevron>
  <ItemHeader>Title</ItemHeader>
  <ItemContent>Content</ItemContent>
</AccordionItem>\`}
              </pre>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron bordered>
            <ItemHeader>
              <div className="flex-inline items-center">
                <svg
                  className="mie2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ag-success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                More Information
              </div>
            </ItemHeader>
            <ItemContent>
              <p>Accordions are great for:</p>
              <ul>
                <li>FAQ sections</li>
                <li>Feature lists</li>
                <li>Documentation</li>
                <li>Progressive disclosure</li>
              </ul>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Customize accordion appearance using CSS Shadow Parts without
          breaking encapsulation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem className="custom-minimal-accordion" useChevron>
            <ItemHeader>Minimal Border Style</ItemHeader>
            <ItemContent>
              <p>
                This variant uses a minimal border-left design with subtle
                styling.
              </p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem className="custom-minimal-accordion" useChevron>
            <ItemHeader>Another Minimal Item</ItemHeader>
            <ItemContent>
              <p>Clean and simple styling focused on content hierarchy.</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      {/* CSS Parts customization styles */}
      <style>{\`
        .custom-minimal-accordion::part(ag-accordion-header-wrapper) {
          border-left: 4px solid var(--ag-primary);
          padding-left: 12px;
        }

        .custom-minimal-accordion::part(ag-accordion-header) {
          font-weight: 500;
          color: var(--ag-text-primary);
        }

        .custom-minimal-accordion::part(ag-accordion-content) {
          padding-left: 16px;
          border-left: 2px solid #e5e7eb;
          margin-left: 2px;
        }

        .custom-minimal-accordion::part(ag-accordion-indicator) {
          color: var(--ag-primary);
        }
      \`}</style>
    </section>
  );
}
`,xs=JSON.parse('{"title":"Accordion","description":"","frontmatter":{},"headers":[],"relativePath":"components/accordion.md","filePath":"components/accordion.md"}'),ms={name:"components/accordion.md"},Hs=Object.assign(ms,{setup(h){return(s,l)=>(m(),u("div",null,[l[1]||(l[1]=a("h1",{id:"accordion",tabindex:"-1"},[o("Accordion "),a("a",{class:"header-anchor",href:"#accordion","aria-label":'Permalink to "Accordion"'},"​")],-1)),i(P),l[2]||(l[2]=a("p",null,"An accordion is a vertically stacked set of interactive headings that each reveal a section of content. Accordions are ideal for presenting FAQs, feature lists, and other content that benefits from progressive disclosure.",-1)),l[3]||(l[3]=a("h2",{id:"examples",tabindex:"-1"},[o("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(_,{component:"accordion","vue-code":C(Fs),"lit-code":C(gs),"react-code":C(us)},{vue:n(()=>[i(cs)]),lit:n(()=>[...l[0]||(l[0]=[a("accordion-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),l[4]||(l[4]=R(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Accordion</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion Item 1&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the content of the first accordion item.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion Item 2&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the content of the second accordion item.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion Item 3&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the content of the third accordion item.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> use-chevron</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Features&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accessible by default&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Keyboard navigation support&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Customizable heading levels&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> use-chevron</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open by Default&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This item starts in the open state.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> use-x</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleToggle&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;X Indicator&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Plus icon that transforms into an X when opened&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> use-minus</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleToggle&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Plus/Minus Indicator&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Plus icon that changes to minus when opened&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueAccordion, {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueAccordionItem,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueAccordionHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueAccordionContent,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/accordion/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueAccordion,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueAccordionItem,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueAccordionHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueAccordionContent,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleToggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Accordion toggled:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.open);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ReactAccordion,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  AccordionItem,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ItemHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ItemContent,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/accordion/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> AccordionExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Accordion toggled:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.open);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion Item 1&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the content of the first accordion item.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion Item 2&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the content of the second accordion item.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion Item 3&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the content of the third accordion item.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> useChevron</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Features&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accessible by default&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Keyboard navigation support&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Customizable heading levels&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> useChevron</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open by Default&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This item starts in the open state.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> useX</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;X Indicator&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Plus icon that transforms into an X when opened&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> useMinus</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Plus/Minus Indicator&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Plus icon that changes to minus when opened&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAccordion</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html, css } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit/decorators.js&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/accordion&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;accordion-example&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> AccordionExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  static</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> styles</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> css</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    :host {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: block;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    section {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: flex;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      flex-direction: column;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      gap: 2rem;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  firstUpdated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Set up event listeners for accordion items in the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> items</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelectorAll</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ag-accordion-item&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    items?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">forEach</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">item</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      item.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;toggle&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> customEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> event </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Accordion toggled:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, customEvent.detail.open);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-accordion&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;span slot=&quot;header&quot;&gt;Accordion Item 1&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;div slot=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;p&gt;This is the content of the first accordion item.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;span slot=&quot;header&quot;&gt;Accordion Item 2&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;div slot=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;p&gt;This is the content of the second accordion item.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;span slot=&quot;header&quot;&gt;Accordion Item 3&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;div slot=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;p&gt;This is the content of the third accordion item.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/ag-accordion&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-accordion&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-accordion-item use-chevron bordered&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;span slot=&quot;header&quot;&gt;Features&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;div slot=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;li&gt;Accessible by default&lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;li&gt;Keyboard navigation support&lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;li&gt;Customizable heading levels&lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;/ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-accordion-item use-chevron bordered open&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;span slot=&quot;header&quot;&gt;Open by Default&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;div slot=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;p&gt;This item starts in the open state.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/ag-accordion&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-accordion&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-accordion-item id=&quot;x-indicator-item&quot; use-x&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;span slot=&quot;header&quot;&gt;X Indicator&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;div slot=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;p&gt;Plus icon that transforms into an X when opened&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/ag-accordion&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-accordion&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-accordion-item id=&quot;minus-indicator-item&quot; use-minus&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;span slot=&quot;header&quot;&gt;Plus/Minus Indicator&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;div slot=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;p&gt;Plus icon that changes to minus when opened&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-accordion-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/ag-accordion&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;/section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Note:</strong> When using accordion components within a custom element&#39;s shadow DOM, set up event listeners in the component&#39;s lifecycle (e.g., <code>firstUpdated()</code>) using <code>this.shadowRoot.querySelectorAll()</code> instead of <code>document.addEventListener(&#39;DOMContentLoaded&#39;, ...)</code>.</p></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="accordion-container" tabindex="-1">Accordion (Container) <a class="header-anchor" href="#accordion-container" aria-label="Permalink to &quot;Accordion (Container)&quot;">​</a></h3><p>The <code>Accordion</code> component is a simple container with no specific props. It wraps multiple <code>AccordionItem</code> components.</p><h3 id="accordionitem" tabindex="-1">AccordionItem <a class="header-anchor" href="#accordionitem" aria-label="Permalink to &quot;AccordionItem&quot;">​</a></h3><table class="foo ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the accordion item is expanded</td></tr><tr><td><code>headingLevel</code></td><td><code>number</code></td><td><code>3</code></td><td>Heading level for semantic HTML (1-6, renders as h1-h6)</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the accordion item is disabled</td></tr><tr><td><code>useChevron</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Use chevron indicator (default) - rotates 180° when open</td></tr><tr><td><code>useX</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Use X indicator - plus rotated 180° initially, becomes X at 45° when open</td></tr><tr><td><code>useMinus</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Use plus/minus indicator - plus transitions to minus when open</td></tr><tr><td><code>noIndicator</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Hide the indicator completely</td></tr><tr><td><code>bordered</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to apply border styling to the header</td></tr><tr><td><code>background</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to apply background color to the header</td></tr></tbody></table><p><strong>Note:</strong> Indicator props are mutually exclusive with priority: <code>noIndicator</code> &gt; <code>useX</code> &gt; <code>useMinus</code> &gt; <code>useChevron</code> (default)</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>The AccordionItem component follows AgnosticUI v2 event conventions with <strong>dual-dispatch</strong> for the <code>toggle</code> custom event - you can use either <code>addEventListener</code> or callback props (e.g., <code>onToggle</code>).</p><table class="foo ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>toggle</code></td><td>Vue: <code>@toggle</code><br>React: <code>onToggle</code><br>Lit: <code>@toggle</code> or <code>.onToggle</code></td><td><code>{ open: boolean }</code></td><td>Fired when the accordion item is toggled between open and closed states.</td></tr></tbody></table><h3 id="event-handling-examples" tabindex="-1">Event Handling Examples <a class="header-anchor" href="#event-handling-examples" aria-label="Permalink to &quot;Event Handling Examples&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleToggle&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Toggle me&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Content here&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isOpen&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Controlled accordion&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Content here&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isOpen&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleToggle&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Both patterns&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Content here&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueAccordionItem } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/accordion/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Toggle event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  AccordionItem,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ItemHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ItemContent,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/accordion/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> AccordionExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Toggle event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(event.detail.open);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Click to toggle&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion content here&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ItemContent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">AccordionItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/accordion&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> item</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#my-accordion&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  item.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;toggle&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Toggle event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  item.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Toggle event (callback):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-item</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;my-accordion&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;header&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Click to toggle&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;content&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Accordion content here&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-item</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>The Accordion exposes CSS Shadow Parts that allow you to customize internal elements without breaking encapsulation:</p><table class="foo ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th><th>Element</th></tr></thead><tbody><tr><td><code>ag-accordion-wrapper</code></td><td>The main wrapper container</td><td><code>&lt;div&gt;</code></td></tr><tr><td><code>ag-accordion-header-wrapper</code></td><td>The header wrapper containing the heading and button</td><td><code>&lt;div&gt;</code></td></tr><tr><td><code>ag-accordion-heading</code></td><td>The semantic heading element (h1-h6)</td><td><code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code></td></tr><tr><td><code>ag-accordion-header</code></td><td>The interactive button inside the heading</td><td><code>&lt;button&gt;</code></td></tr><tr><td><code>ag-accordion-indicator</code></td><td>The expand/collapse indicator icon wrapper</td><td><code>&lt;span&gt;</code></td></tr><tr><td><code>ag-accordion-content</code></td><td>The collapsible content region</td><td><code>&lt;div&gt;</code></td></tr></tbody></table><h3 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-item</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-header-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-item</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">16</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-item</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f9fafb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #e5e7eb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-item</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-accordion-indicator</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#12623e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Accordion implements the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" target="_blank" rel="noreferrer">WAI-ARIA Accordion Pattern</a>:</p><ul><li>Uses semantic heading elements (h1-h6) with customizable <code>headingLevel</code> prop</li><li>Buttons have <code>aria-expanded</code> to communicate state</li><li>Content panels have <code>role=&quot;region&quot;</code> and are labeled via <code>aria-labelledby</code></li><li>Keyboard accessible: <ul><li><strong>Space/Enter</strong>: Toggle the focused accordion item</li><li><strong>Arrow Down</strong>: Move focus to next accordion item</li><li><strong>Arrow Up</strong>: Move focus to previous accordion item</li><li><strong>Home</strong>: Move focus to first accordion item</li><li><strong>End</strong>: Move focus to last accordion item</li></ul></li><li>Using <strong>TAB</strong> works as well</li><li>Screen readers announce the current state (expanded/collapsed)</li><li>Clear focus indicators for keyboard navigation</li><li>Disabled items cannot be interacted with and are communicated via <code>aria-disabled</code></li></ul><h2 id="progressive-enhancement" tabindex="-1">Progressive Enhancement <a class="header-anchor" href="#progressive-enhancement" aria-label="Permalink to &quot;Progressive Enhancement&quot;">​</a></h2><p>The Accordion is designed with progressive enhancement in mind:</p><ul><li>Content is visible by default before JavaScript loads</li><li>Once the web component is defined, expand/collapse functionality is enhanced</li><li>If JavaScript fails to load, users can still access all content</li><li>Uses the <code>data-enhanced</code> attribute to apply hide/show logic only after JavaScript initialization</li></ul>`,29))]))}});export{xs as __pageData,Hs as default};
