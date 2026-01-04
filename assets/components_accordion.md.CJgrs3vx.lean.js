import{c as b,A as H}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as m,a as f,x as r}from"./chunks/lit-element.B0TUrqGF.js";import{t as P}from"./chunks/unique-id.CpwMFgRD.js";import{d as C,p as v,c as y,v as B,x as D,o as u,r as A,K as I,_ as S,C as g,j as n,G as i,w as a,a as e,ae as M}from"./chunks/framework.DvJW1jwp.js";import{I as $}from"./chunks/info.BD4eTUo8.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=b("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=b("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),R=class extends f{render(){return r`
      <slot></slot>
    `}};R.styles=[m`
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
  `];const E=class extends f{constructor(){super(),this._id=P("accordion-item"),this.open=!1,this.headingLevel=3,this.disabled=!1,this.bordered=!1,this.background=!1,this.useChevron=!0,this.useX=!1,this.useMinus=!1,this.noIndicator=!1,this.addEventListener("keydown",this._handleKeydown.bind(this))}connectedCallback(){super.connectedCallback(),this.setAttribute("data-enhanced","")}render(){return r`
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
    `}_renderChevronIndicator(){return r`
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
    `}_renderPlusIndicator(){return r`
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
    `}_renderMinusIndicator(){return r`
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
    `}_renderIndicator(){return this.noIndicator?null:this.useX?this._renderPlusIndicator():this.useMinus?this.open?this._renderMinusIndicator():this._renderPlusIndicator():this._renderChevronIndicator()}_renderHeading(){const s=r`
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
    `;switch(Math.max(1,Math.min(6,this.headingLevel||3))){case 1:return r`<h1 class="heading" part="ag-accordion-heading">${s}</h1>`;case 2:return r`<h2 class="heading" part="ag-accordion-heading">${s}</h2>`;case 3:return r`<h3 class="heading" part="ag-accordion-heading">${s}</h3>`;case 4:return r`<h4 class="heading" part="ag-accordion-heading">${s}</h4>`;case 5:return r`<h5 class="heading" part="ag-accordion-heading">${s}</h5>`;case 6:return r`<h6 class="heading" part="ag-accordion-heading">${s}</h6>`}}toggle(){if(this.disabled)return;this.open=!this.open;const s=new CustomEvent("toggle",{detail:{open:this.open},bubbles:!0,composed:!0});this.dispatchEvent(s),this.onToggle&&this.onToggle(s)}focus(){var s,h;(h=(s=this.shadowRoot)==null?void 0:s.querySelector("button"))==null||h.focus()}get buttonElement(){var s;return((s=this.shadowRoot)==null?void 0:s.querySelector("button"))||null}_handleKeydown(s){if(this.disabled)return;const{key:h}=s;(h==="Enter"||h===" ")&&s.target===this.buttonElement&&(s.preventDefault(),this.toggle()),(h==="ArrowDown"||h==="ArrowUp"||h==="Home"||h==="End")&&(s.preventDefault(),this.dispatchEvent(new CustomEvent("accordion-keydown",{detail:{key:h,accordionItem:this},bubbles:!0})))}};E.properties={open:{type:Boolean,reflect:!0},headingLevel:{type:Number,reflect:!0,attribute:"heading-level"},disabled:{type:Boolean,reflect:!0},bordered:{type:Boolean,reflect:!0},background:{type:Boolean,reflect:!0},useChevron:{type:Boolean,reflect:!0,attribute:"use-chevron"},useX:{type:Boolean,reflect:!0,attribute:"use-x"},useMinus:{type:Boolean,reflect:!0,attribute:"use-minus"},noIndicator:{type:Boolean,reflect:!0,attribute:"no-indicator"},onToggle:{attribute:!1}},E.styles=[m`
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
  `];let w=E;customElements.get("ag-accordion-item")||customElements.define("ag-accordion-item",w);const x=class extends f{constructor(){super(),this.handleAccordionKeydown=s=>{const h=s,d=this.accordions;if(d.length===0)return;const{key:c,accordionItem:o}=h.detail,t=d.indexOf(o);if(t===-1)return;let l=t;switch(c){case"ArrowDown":l=(t+1)%d.length;break;case"ArrowUp":l=(t-1+d.length)%d.length;break;case"Home":l=0;break;case"End":l=d.length-1;break;default:return}l!==t&&d[l].focus()},this.addEventListener("accordion-keydown",this.handleAccordionKeydown)}get accordions(){return Array.from(this.children).filter(s=>"disabled"in s&&"focus"in s&&typeof s.focus=="function"&&!s.disabled)}render(){return r`<slot></slot>`}};x.styles=[m`
    :host {
      display: block;
      width: 100%;
    }
  `];let q=x;customElements.get("ag-accordion")||customElements.define("ag-accordion",q);customElements.get("ag-accordion")||customElements.define("ag-accordion",q);customElements.get("ag-accordion-item")||customElements.define("ag-accordion-item",w);const O=C({__name:"VueAccordion",setup(k,{emit:s}){const h=v();return B(async()=>{await customElements.whenDefined("ag-accordion"),h.value}),D(()=>{}),(d,c)=>(u(),y("ag-accordion",I({ref_key:"accordionRef",ref:h},d.$attrs),[A(d.$slots,"default")],16))}}),U=[".open",".disabled",".useChevron",".useX",".useMinus",".noIndicator",".background",".bordered","headingLevel"],z=C({__name:"VueAccordionItem",props:{open:{type:Boolean,default:!1},headingLevel:{default:3},disabled:{type:Boolean,default:!1},background:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},useChevron:{type:Boolean,default:!0},useX:{type:Boolean,default:!1},useMinus:{type:Boolean,default:!1},noIndicator:{type:Boolean,default:!1}},emits:["toggle","update:open"],setup(k,{emit:s}){const h=s,d=v(),c=o=>{const t=o.detail;h("toggle",t),h("update:open",t.open)};return B(async()=>{await customElements.whenDefined("ag-accordion-item"),d.value&&d.value.addEventListener("toggle",c)}),D(()=>{d.value&&d.value.removeEventListener("toggle",c)}),(o,t)=>(u(),y("ag-accordion-item",I({ref_key:"accordionItemRef",ref:d,".open":k.open,".disabled":k.disabled,".useChevron":k.useChevron,".useX":k.useX,".useMinus":k.useMinus,".noIndicator":k.noIndicator,".background":k.background,".bordered":k.bordered,headingLevel:k.headingLevel},o.$attrs),[A(o.$slots,"default")],48,U))}}),N={slot:"header"},K=C({__name:"VueAccordionHeader",setup(k){return(s,h)=>(u(),y("span",N,[A(s.$slots,"default")]))}}),W={slot:"content"},j=C({__name:"VueAccordionContent",setup(k){return(s,h)=>(u(),y("div",W,[A(s.$slots,"default")]))}}),J={name:"AccordionExamples",components:{VueAccordion:O,VueAccordionItem:z,VueAccordionHeader:K,VueAccordionContent:j,Info:$,Code:X,HelpCircle:L}},Q={class:"stacked mbe4"},G={class:"stacked mbe4"},Y={class:"stacked mbe4"},Z={class:"stacked mbe4"},ss={class:"stacked mbe4"},is={class:"stacked mbe4"},as={class:"stacked mbe4"},ns={class:"stacked mbe4"},ts={class:"stacked mbe4"},ls={class:"flex-inline items-center"},es={class:"flex-inline items-center"},hs={class:"flex-inline items-center"},ps={class:"stacked mbe4"};function ks(k,s,h,d,c,o){const t=g("VueAccordionHeader"),l=g("VueAccordionContent"),p=g("VueAccordionItem"),F=g("VueAccordion"),V=g("Info"),T=g("Code"),_=g("HelpCircle");return u(),y("section",null,[s[58]||(s[58]=n("div",{class:"mbe4"},[n("h2",null,"Basic Accordion (Default)"),n("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," By default, the Accordion provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators. ")],-1)),n("div",Q,[i(F,null,{default:a(()=>[i(p,{"use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[0]||(s[0]=[e("Chevron Section 1",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[1]||(s[1]=[n("p",null,"Default chevron indicator with smooth rotation",-1)])]),_:1})]),_:1}),i(p,{"use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[2]||(s[2]=[e("Chevron Section 2",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[3]||(s[3]=[n("p",null,"Click to see the 180° rotation animation",-1)])]),_:1})]),_:1}),i(p,{"use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[4]||(s[4]=[e("Chevron Section 3",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[5]||(s[5]=[n("p",null,"Classic accordion indicator style",-1)])]),_:1})]),_:1})]),_:1})]),s[59]||(s[59]=n("div",{class:"mbe4"},[n("h2",null,"X Indicator"),n("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open. ")],-1)),n("div",G,[i(F,null,{default:a(()=>[i(p,{"use-x":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[6]||(s[6]=[e("X Indicator Section 1",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[7]||(s[7]=[n("p",null,"Plus transforms into X when opened",-1)])]),_:1})]),_:1}),i(p,{"use-x":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[8]||(s[8]=[e("X Indicator Section 2",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[9]||(s[9]=[n("p",null,"Smooth transition from plus to X",-1)])]),_:1})]),_:1}),i(p,{"use-x":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[10]||(s[10]=[e("X Indicator Section 3",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[11]||(s[11]=[n("p",null,"Modern accordion indicator style",-1)])]),_:1})]),_:1})]),_:1})]),s[60]||(s[60]=n("div",{class:"mbe4"},[n("h2",null,"Plus/Minus Indicator"),n("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus transitions to minus when open with smooth animation. ")],-1)),n("div",Y,[i(F,null,{default:a(()=>[i(p,{"use-minus":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[12]||(s[12]=[e("Plus/Minus Section 1",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[13]||(s[13]=[n("p",null,"Plus changes to minus when opened",-1)])]),_:1})]),_:1}),i(p,{"use-minus":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[14]||(s[14]=[e("Plus/Minus Section 2",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[15]||(s[15]=[n("p",null,"Classic expand/collapse indicator",-1)])]),_:1})]),_:1}),i(p,{"use-minus":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[16]||(s[16]=[e("Plus/Minus Section 3",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[17]||(s[17]=[n("p",null,"Clear visual indication of state",-1)])]),_:1})]),_:1})]),_:1})]),s[61]||(s[61]=n("div",{class:"mbe4"},[n("h2",null,"No Indicator"),n("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Accordion items without any visual indicator. ")],-1)),n("div",Z,[i(F,null,{default:a(()=>[i(p,{"no-indicator":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[18]||(s[18]=[e("No Indicator Section 1",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[19]||(s[19]=[n("p",null,"Clean header without indicator icon",-1)])]),_:1})]),_:1}),i(p,{"no-indicator":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[20]||(s[20]=[e("No Indicator Section 2",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[21]||(s[21]=[n("p",null,"Minimal design focused on content",-1)])]),_:1})]),_:1}),i(p,{"no-indicator":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[22]||(s[22]=[e("No Indicator Section 3",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[23]||(s[23]=[n("p",null,"Simple accordion without visual clutter",-1)])]),_:1})]),_:1})]),_:1})]),s[62]||(s[62]=n("div",{class:"mbe4"},[n("h2",null,"Bordered")],-1)),n("div",ss,[i(F,null,{default:a(()=>[i(p,{bordered:"","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[24]||(s[24]=[e("Bordered Item 1",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[25]||(s[25]=[n("p",null,"This accordion has borders on the headers",-1)])]),_:1})]),_:1}),i(p,{bordered:"","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[26]||(s[26]=[e("Bordered Item 2",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[27]||(s[27]=[n("p",null,"Another bordered item",-1)])]),_:1})]),_:1}),i(p,{bordered:"","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[28]||(s[28]=[e("Bordered Item 3",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[29]||(s[29]=[n("p",null,"Third bordered item",-1)])]),_:1})]),_:1})]),_:1})]),s[63]||(s[63]=n("div",{class:"mbe4"},[n("h2",null,"With Background")],-1)),n("div",is,[i(F,null,{default:a(()=>[i(p,{background:"","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[30]||(s[30]=[e("Background Item 1",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[31]||(s[31]=[n("p",null,"This accordion has background color on headers",-1)])]),_:1})]),_:1}),i(p,{background:"","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[32]||(s[32]=[e("Background Item 2",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[33]||(s[33]=[n("p",null,"Another item with background",-1)])]),_:1})]),_:1}),i(p,{background:"","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[34]||(s[34]=[e("Background Item 3",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[35]||(s[35]=[n("p",null,"Third item with background",-1)])]),_:1})]),_:1})]),_:1})]),s[64]||(s[64]=n("div",{class:"mbe4"},[n("h2",null,"One Item Open")],-1)),n("div",as,[i(F,null,{default:a(()=>[i(p,{"use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[36]||(s[36]=[e("Closed Item",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[37]||(s[37]=[n("p",null,"This item starts closed",-1)])]),_:1})]),_:1}),i(p,{"use-chevron":"",open:""},{default:a(()=>[i(t,null,{default:a(()=>[...s[38]||(s[38]=[e("Open Item",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[39]||(s[39]=[n("p",null,"This item starts open",-1)])]),_:1})]),_:1}),i(p,{"use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[40]||(s[40]=[e("Another Closed Item",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[41]||(s[41]=[n("p",null,"This item also starts closed",-1)])]),_:1})]),_:1})]),_:1})]),s[65]||(s[65]=n("div",{class:"mbe4"},[n("h2",null,"Disabled State")],-1)),n("div",ns,[i(F,null,{default:a(()=>[i(p,{"use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[42]||(s[42]=[e("Enabled Item",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[43]||(s[43]=[n("p",null,"This item can be toggled",-1)])]),_:1})]),_:1}),i(p,{"use-chevron":"",disabled:""},{default:a(()=>[i(t,null,{default:a(()=>[...s[44]||(s[44]=[e("Disabled Item",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[45]||(s[45]=[n("p",null,"This item cannot be toggled",-1)])]),_:1})]),_:1}),i(p,{"use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[46]||(s[46]=[e("Another Enabled Item",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[47]||(s[47]=[n("p",null,"This item can also be toggled",-1)])]),_:1})]),_:1})]),_:1})]),s[66]||(s[66]=n("div",{class:"mbe4"},[n("h2",null,"Rich Content")],-1)),n("div",ts,[i(F,null,{default:a(()=>[i(p,{"use-chevron":"",bordered:""},{default:a(()=>[i(t,null,{default:a(()=>[n("div",ls,[i(V,{color:"var(--ag-primary)",size:18,class:"mie2"}),s[48]||(s[48]=e(" Features ",-1))])]),_:1}),i(l,null,{default:a(()=>[...s[49]||(s[49]=[n("ul",null,[n("li",null,"Accessible by default with ARIA attributes"),n("li",null,"Keyboard navigation support"),n("li",null,"Customizable heading levels"),n("li",null,"Multiple styling options")],-1)])]),_:1})]),_:1}),i(p,{"use-chevron":"",bordered:""},{default:a(()=>[i(t,null,{default:a(()=>[n("div",es,[i(T,{color:"var(--ag-secondary)",size:18,class:"mie2"}),s[50]||(s[50]=e(" Code Example ",-1))])]),_:1}),i(l,null,{default:a(()=>[...s[51]||(s[51]=[n("pre",{style:{background:"var(--ag-background-secondary)",padding:"1rem","border-radius":"4px","overflow-x":"auto"}},`<VueAccordionItem use-chevron>
  <VueAccordionHeader>Title</VueAccordionHeader>
  <VueAccordionContent>Content</VueAccordionContent>
</VueAccordionItem>`,-1)])]),_:1})]),_:1}),i(p,{"use-chevron":"",bordered:""},{default:a(()=>[i(t,null,{default:a(()=>[n("div",hs,[i(_,{color:"var(--ag-success)",size:18,class:"mie2"}),s[52]||(s[52]=e(" More Information ",-1))])]),_:1}),i(l,null,{default:a(()=>[...s[53]||(s[53]=[n("p",null,"Accordions are great for:",-1),n("ul",null,[n("li",null,"FAQ sections"),n("li",null,"Feature lists"),n("li",null,"Documentation"),n("li",null,"Progressive disclosure")],-1)])]),_:1})]),_:1})]),_:1})]),s[67]||(s[67]=n("div",{class:"mbe4"},[n("h2",null,"CSS Parts Customization"),n("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize accordion appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),n("div",ps,[i(F,null,{default:a(()=>[i(p,{class:"custom-minimal-accordion","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[54]||(s[54]=[e("Minimal Border Style",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[55]||(s[55]=[n("p",null,"This variant uses a minimal border-left design with subtle styling.",-1)])]),_:1})]),_:1}),i(p,{class:"custom-minimal-accordion","use-chevron":""},{default:a(()=>[i(t,null,{default:a(()=>[...s[56]||(s[56]=[e("Another Minimal Item",-1)])]),_:1}),i(l,null,{default:a(()=>[...s[57]||(s[57]=[n("p",null,"Clean and simple styling focused on content hierarchy.",-1)])]),_:1})]),_:1})]),_:1})])])}const ds=S(J,[["render",ks],["__scopeId","data-v-6938cedb"]]),Es=JSON.parse('{"title":"Accordion","description":"","frontmatter":{},"headers":[],"relativePath":"components/accordion.md","filePath":"components/accordion.md"}'),rs={name:"components/accordion.md"},ms=Object.assign(rs,{setup(k){return(s,h)=>(u(),y("div",null,[h[0]||(h[0]=n("h1",{id:"accordion",tabindex:"-1"},[e("Accordion "),n("a",{class:"header-anchor",href:"#accordion","aria-label":'Permalink to "Accordion"'},"​")],-1)),i(H),h[1]||(h[1]=n("p",null,"An accordion is a vertically stacked set of interactive headings that each reveal a section of content. Accordions are ideal for presenting FAQs, feature lists, and other content that benefits from progressive disclosure.",-1)),h[2]||(h[2]=n("h2",{id:"examples",tabindex:"-1"},[e("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(ds),h[3]||(h[3]=M("",29))]))}});export{Es as __pageData,ms as default};
