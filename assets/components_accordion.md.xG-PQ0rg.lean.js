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
`,xs=JSON.parse('{"title":"Accordion","description":"","frontmatter":{},"headers":[],"relativePath":"components/accordion.md","filePath":"components/accordion.md"}'),ms={name:"components/accordion.md"},Hs=Object.assign(ms,{setup(h){return(s,l)=>(m(),u("div",null,[l[1]||(l[1]=a("h1",{id:"accordion",tabindex:"-1"},[o("Accordion "),a("a",{class:"header-anchor",href:"#accordion","aria-label":'Permalink to "Accordion"'},"​")],-1)),i(P),l[2]||(l[2]=a("p",null,"An accordion is a vertically stacked set of interactive headings that each reveal a section of content. Accordions are ideal for presenting FAQs, feature lists, and other content that benefits from progressive disclosure.",-1)),l[3]||(l[3]=a("h2",{id:"examples",tabindex:"-1"},[o("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(_,{component:"accordion","vue-code":C(Fs),"lit-code":C(gs),"react-code":C(us)},{vue:n(()=>[i(cs)]),lit:n(()=>[...l[0]||(l[0]=[a("accordion-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),l[4]||(l[4]=R("",29))]))}});export{xs as __pageData,Hs as default};
