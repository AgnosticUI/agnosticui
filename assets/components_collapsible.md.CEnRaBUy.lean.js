import{A as E}from"./chunks/AlphaWarning.D199zhtu.js";import{i as B,z as r,a as A,x as g}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{d as v,p as f,c as y,o as c,j as i,r as u,K as w,_ as D,C as m,G as l,w as a,a as d,t as x,ae as T}from"./chunks/framework.CdHt8f9T.js";import{I}from"./chunks/info.zRtTREFZ.js";var q=Object.defineProperty,F=(e,s,t,o)=>{for(var h=void 0,p=e.length-1,n;p>=0;p--)(n=e[p])&&(h=n(s,t,h)||h);return h&&q(s,t,h),h};const C=class extends A{constructor(){super(),this.open=!1,this.bordered=!1,this.shadow=!1,this.useChevron=!0,this.useX=!1,this.useMinus=!1,this.noIndicator=!1}_renderChevronIndicator(){return g`
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
    `}_renderPlusIndicator(){return g`
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
    `}_renderMinusIndicator(){return g`
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
    `}_renderIndicator(){return this.noIndicator?null:this.useX?this._renderPlusIndicator():this.useMinus?this.open?this._renderMinusIndicator():this._renderPlusIndicator():this._renderChevronIndicator()}_onToggle(s){const t=s.target;this.open=t.open;const o=new CustomEvent("toggle",{detail:{open:this.open},bubbles:!0,composed:!0});this.dispatchEvent(o),this.onToggle&&this.onToggle(o)}render(){return g`
      <details
        part="ag-collapsible-details"
        ?open=${this.open}
        @toggle=${this._onToggle}
      >
        <summary part="ag-collapsible-summary">
          <slot name="summary"></slot>
          <span class="indicator" part="ag-collapsible-indicator">
            <slot name="indicator">
              ${this._renderIndicator()}
            </slot>
          </span>
        </summary>
        <div class="collapsible-content" part="ag-collapsible-content">
          <slot></slot>
        </div>
      </details>
    `}};C.styles=B`
    :host {
      display: block;
    }

    /* Base details element */
    details {
      border: none;
      border-radius: var(--ag-radius-md);
    }

    :host([bordered]) details {
      border: var(--ag-border-width-1) solid var(--ag-border);
    }

    :host([shadow]) details {
      box-shadow: var(--ag-shadow-md);
    }

    summary {
      cursor: pointer;
      padding: var(--ag-space-4);
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none; /* Remove default marker */
      background: none;
      color: var(--ag-text-primary);
    }

    summary::-webkit-details-marker {
      display: none; /* Chrome */
    }

    summary:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }

    .collapsible-content {
      padding: var(--ag-space-4);
      margin-block-end: var(--ag-space-2);
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
    :host([use-chevron]) details[open] > summary .indicator {
      transform: rotate(180deg);
    }

    /* X indicator: starts rotated 180deg (upside-down plus), rotates to 45deg (X) when open */
    :host([use-x]) .indicator {
      transform: rotate(180deg);
    }
    :host([use-x]) details[open] > summary .indicator {
      transform: rotate(45deg);
    }

    /* Minus indicator: Plus swaps to minus icon when open - no rotation needed */
    :host([use-minus]) .indicator {
      /* No rotation - the icon swap from plus to minus provides the visual feedback */
      transform: none;
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      summary:focus-visible,
      .indicator {
        transition: none;
      }
    }
  `;let k=C;F([r({type:Boolean,reflect:!0})],k.prototype,"open");F([r({type:Boolean,reflect:!0})],k.prototype,"bordered");F([r({type:Boolean,reflect:!0})],k.prototype,"shadow");F([r({type:Boolean,reflect:!0,attribute:"use-chevron"})],k.prototype,"useChevron");F([r({type:Boolean,reflect:!0,attribute:"use-x"})],k.prototype,"useX");F([r({type:Boolean,reflect:!0,attribute:"use-minus"})],k.prototype,"useMinus");F([r({type:Boolean,reflect:!0,attribute:"no-indicator"})],k.prototype,"noIndicator");F([r({attribute:!1})],k.prototype,"onToggle");customElements.get("ag-collapsible")||customElements.define("ag-collapsible",k);const P=[".open",".bordered",".shadow",".useChevron",".useX",".useMinus",".noIndicator"],S={slot:"summary"},M=v({__name:"VueCollapsible",props:{open:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},useChevron:{type:Boolean,default:!0},useX:{type:Boolean,default:!1},useMinus:{type:Boolean,default:!1},noIndicator:{type:Boolean,default:!1}},emits:["toggle","update:open"],setup(e,{emit:s}){const t=s,o=f(),h=p=>{t("toggle",p),t("update:open",p.detail.open)};return(p,n)=>(c(),y("ag-collapsible",w({ref_key:"collapsibleRef",ref:o,".open":e.open,".bordered":e.bordered,".shadow":e.shadow,".useChevron":e.useChevron,".useX":e.useX,".useMinus":e.useMinus,".noIndicator":e.noIndicator,".onToggle":h},p.$attrs),[i("span",S,[u(p.$slots,"summary")]),u(p.$slots,"default")],48,P))}}),R={name:"CollapsibleExamples",components:{VueCollapsible:M,Info:I},data(){return{isExpanded:!1}},methods:{handleToggle(e){this.isExpanded=e.target.open,console.log("Collapsible toggled. New state:",this.isExpanded)}}},V={class:"stacked mbe4"},X={class:"stacked mbe4"},N={class:"stacked mbe4"},U={class:"stacked mbe4"},L={class:"stacked mbe4"},z={class:"stacked mbe4"},O={class:"stacked mbe4"},W={class:"stacked mbe4"},$={class:"stacked mbe4"},j={class:"stacked mbe4"},H={class:"flex-inline items-center"},G={class:"stacked mbe4"},J={class:"stacked mbe4"},Y={class:"stacked mbe4"},K={style:{"margin-top":"1rem"}},Q={class:"stacked mbe4"};function Z(e,s,t,o,h,p){const n=m("VueCollapsible"),b=m("Info");return c(),y("section",null,[s[46]||(s[46]=i("div",{class:"mbe4"},[i("h2",null,"Basic Collapsible (Default)"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators. ")],-1)),i("div",V,[l(n,{"use-chevron":""},{summary:a(()=>[...s[0]||(s[0]=[i("span",null,"Click to expand",-1)])]),default:a(()=>[s[1]||(s[1]=i("p",null,"This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.",-1))]),_:1})]),s[47]||(s[47]=i("div",{class:"mbe4"},[i("h2",null,"X Indicator"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open. ")],-1)),i("div",X,[l(n,{"use-x":""},{summary:a(()=>[...s[2]||(s[2]=[i("span",null,"X Indicator",-1)])]),default:a(()=>[s[3]||(s[3]=i("p",null,"Plus transforms into X when opened. This provides a modern, dynamic visual indicator.",-1))]),_:1})]),s[48]||(s[48]=i("div",{class:"mbe4"},[i("h2",null,"Plus/Minus Indicator"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus transitions to minus when open with smooth animation. ")],-1)),i("div",N,[l(n,{"use-minus":""},{summary:a(()=>[...s[4]||(s[4]=[i("span",null,"Plus/Minus Indicator",-1)])]),default:a(()=>[s[5]||(s[5]=i("p",null,"Plus changes to minus when opened. Classic expand/collapse indicator style.",-1))]),_:1})]),s[49]||(s[49]=i("div",{class:"mbe4"},[i("h2",null,"No Indicator"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Collapsible without any visual indicator. ")],-1)),i("div",U,[l(n,{"no-indicator":""},{summary:a(()=>[...s[6]||(s[6]=[i("span",null,"No Indicator",-1)])]),default:a(()=>[s[7]||(s[7]=i("p",null,"Clean header without indicator icon. Minimal design focused on content.",-1))]),_:1})]),s[50]||(s[50]=i("div",{class:"mbe4"},[i("h2",null,"Indicator Comparison"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Toggle each collapsible to see how the different indicators behave. ")],-1)),i("div",L,[l(n,{bordered:"","use-chevron":""},{summary:a(()=>[...s[8]||(s[8]=[i("span",null,"Chevron (default) - Rotates 180°",-1)])]),default:a(()=>[s[9]||(s[9]=i("p",null,"The chevron points down when closed and up when open via rotation.",-1))]),_:1}),l(n,{bordered:"","use-x":""},{summary:a(()=>[...s[10]||(s[10]=[i("span",null,"X Indicator - Rotates from upside-down plus to X",-1)])]),default:a(()=>[s[11]||(s[11]=i("p",null,"Starts as an upside-down plus sign and rotates 45° to form an X when open.",-1))]),_:1}),l(n,{bordered:"","use-minus":""},{summary:a(()=>[...s[12]||(s[12]=[i("span",null,"Plus/Minus - Swaps icons",-1)])]),default:a(()=>[s[13]||(s[13]=i("p",null,"Shows a plus icon when closed and swaps to a minus icon when open.",-1))]),_:1}),l(n,{bordered:"","no-indicator":""},{summary:a(()=>[...s[14]||(s[14]=[i("span",null,"No Indicator - Completely hidden",-1)])]),default:a(()=>[s[15]||(s[15]=i("p",null,"No indicator is shown at all.",-1))]),_:1})]),s[51]||(s[51]=i("div",{class:"mbe4"},[i("h2",null,"Bordered")],-1)),i("div",z,[l(n,{bordered:""},{summary:a(()=>[...s[16]||(s[16]=[i("span",null,"Bordered collapsible",-1)])]),default:a(()=>[s[17]||(s[17]=i("p",null,"This collapsible has a border around it for visual separation.",-1))]),_:1})]),s[52]||(s[52]=i("div",{class:"mbe4"},[i("h2",null,"With Shadow")],-1)),i("div",O,[l(n,{shadow:""},{summary:a(()=>[...s[18]||(s[18]=[i("span",null,"Collapsible with shadow",-1)])]),default:a(()=>[s[19]||(s[19]=i("p",null,"This collapsible has a box-shadow applied for depth.",-1))]),_:1})]),s[53]||(s[53]=i("div",{class:"mbe4"},[i("h2",null,"Combined Features")],-1)),i("div",W,[l(n,{bordered:"",shadow:""},{summary:a(()=>[...s[20]||(s[20]=[i("span",null,"Bordered with shadow",-1)])]),default:a(()=>[s[21]||(s[21]=i("p",null,"This collapsible combines both border and shadow styling for maximum visual impact.",-1))]),_:1})]),s[54]||(s[54]=i("div",{class:"mbe4"},[i("h2",null,"Open by Default")],-1)),i("div",$,[l(n,{bordered:"",open:""},{summary:a(()=>[...s[22]||(s[22]=[i("span",null,"Already expanded",-1)])]),default:a(()=>[s[23]||(s[23]=i("p",null,[d("This collapsible starts in an open state using the "),i("code",null,"open"),d(" prop.")],-1))]),_:1})]),s[55]||(s[55]=i("div",{class:"mbe4"},[i("h2",null,"Rich Content")],-1)),i("div",j,[l(n,{bordered:"",shadow:""},{summary:a(()=>[i("div",H,[l(b,{color:"var(--ag-primary)",size:18,class:"mie2"}),s[24]||(s[24]=i("strong",null,"Product Details",-1))])]),default:a(()=>[s[25]||(s[25]=i("div",null,[i("h4",{style:{"margin-top":"0"}},"Technical Specifications"),i("ul",null,[i("li",null,"Processor: Octa-core 2.8 GHz"),i("li",null,"Memory: 8GB RAM"),i("li",null,"Storage: 256GB SSD"),i("li",null,'Display: 15.6" Full HD')]),i("p",null,[i("strong",null,"Warranty:"),d(" 2 years manufacturer warranty with optional extended coverage available. ")])],-1))]),_:1})]),s[56]||(s[56]=i("div",{class:"mbe4"},[i("h2",null,"FAQ Example")],-1)),i("div",G,[l(n,{bordered:""},{summary:a(()=>[...s[26]||(s[26]=[i("span",null,"What is AgnosticUI?",-1)])]),default:a(()=>[s[27]||(s[27]=i("p",null," AgnosticUI is a framework-agnostic component library built with web components. It works seamlessly with React, Vue, Svelte, Angular, and vanilla JavaScript. ",-1))]),_:1}),l(n,{bordered:""},{summary:a(()=>[...s[28]||(s[28]=[i("span",null,"How do I install it?",-1)])]),default:a(()=>[s[29]||(s[29]=i("p",null,"You can install AgnosticUI via npm:",-1)),s[30]||(s[30]=i("pre",{style:{background:"var(--ag-background-secondary)",padding:"1rem","border-radius":"4px","overflow-x":"auto"}},"npm install agnosticui-core",-1))]),_:1}),l(n,{bordered:""},{summary:a(()=>[...s[31]||(s[31]=[i("span",null,"Is it accessible?",-1)])]),default:a(()=>[s[32]||(s[32]=i("p",null," Yes! All AgnosticUI components are built with accessibility in mind, following WAI-ARIA best practices and ensuring keyboard navigation and screen reader support. ",-1))]),_:1}),l(n,{bordered:""},{summary:a(()=>[...s[33]||(s[33]=[i("span",null,"Can I customize the styling?",-1)])]),default:a(()=>[s[34]||(s[34]=i("p",null," Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization of component internals while maintaining encapsulation. You can also use design tokens for consistent theming across your application. ",-1))]),_:1})]),s[57]||(s[57]=i("div",{class:"mbe4"},[i("h2",null,"Nested Collapsibles")],-1)),i("div",J,[l(n,{bordered:""},{summary:a(()=>[...s[35]||(s[35]=[i("span",null,"Level 1 - Main Topic",-1)])]),default:a(()=>[i("div",null,[s[40]||(s[40]=i("p",null,"This is the main content area.",-1)),l(n,{bordered:!0,"use-minus":!0,style:{"margin-top":"1rem"}},{summary:a(()=>[...s[36]||(s[36]=[i("span",null,"Level 2 - Subtopic A",-1)])]),default:a(()=>[s[37]||(s[37]=i("p",null,"Nested collapsible content for subtopic A. Note the different indicator style.",-1))]),_:1}),l(n,{bordered:!0,"use-minus":!0,style:{"margin-top":"0.5rem"}},{summary:a(()=>[...s[38]||(s[38]=[i("span",null,"Level 2 - Subtopic B",-1)])]),default:a(()=>[s[39]||(s[39]=i("p",null,"Nested collapsible content for subtopic B.",-1))]),_:1})])]),_:1})]),s[58]||(s[58]=i("div",{class:"mbe4"},[i("h2",null,"Interactive with Event Handling")],-1)),i("div",Y,[l(n,{bordered:"",shadow:"",onToggle:p.handleToggle},{summary:a(()=>[...s[41]||(s[41]=[i("span",null,"Click to toggle (watch console)",-1)])]),default:a(()=>[s[42]||(s[42]=i("div",null,[i("p",null,[d("The collapsible dispatches a "),i("code",null,"toggle"),d(" event when opened or closed.")])],-1))]),_:1},8,["onToggle"]),i("p",K,[s[43]||(s[43]=d(" Current state: ",-1)),i("strong",null,x(h.isExpanded?"Expanded":"Collapsed"),1)])]),s[59]||(s[59]=i("div",{class:"mbe4"},[i("h2",null,"CSS Parts Customization"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),i("div",Q,[l(n,{class:"custom-gradient"},{summary:a(()=>[...s[44]||(s[44]=[i("span",null,"Gaudy Gradient",-1)])]),default:a(()=>[s[45]||(s[45]=i("p",null,"This collapsible uses a gradient background with white text and custom styling.",-1))]),_:1})])])}const _=D(R,[["render",Z],["__scopeId","data-v-271432b0"]]),es=JSON.parse('{"title":"Collapsible","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapsible.md","filePath":"components/collapsible.md"}'),ss={name:"components/collapsible.md"},ps=Object.assign(ss,{setup(e){return(s,t)=>(c(),y("div",null,[t[0]||(t[0]=i("h1",{id:"collapsible",tabindex:"-1"},[d("Collapsible "),i("a",{class:"header-anchor",href:"#collapsible","aria-label":'Permalink to "Collapsible"'},"​")],-1)),l(E),t[1]||(t[1]=i("p",null,"A collapsible is a standalone component that allows users to show and hide a single section of content. Unlike accordions which manage multiple items, collapsibles work independently and are ideal for revealing optional information, FAQs, or additional details on demand.",-1)),t[2]||(t[2]=i("h2",{id:"examples",tabindex:"-1"},[d("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),l(_),t[3]||(t[3]=T("",22))]))}});export{es as __pageData,ps as default};
