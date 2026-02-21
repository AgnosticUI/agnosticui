import{A as f}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as E,z as r,a as C,x as F}from"./chunks/Button.CFkPNK98.js";import{d as A,p as B,c as u,o as m,j as i,r as y,K as x,_ as D,C as b,G as e,w as a,a as d,t as I,ae as S,k as g}from"./chunks/framework.NAAYCHZu.js";import{I as T}from"./chunks/info.CjSjj6Py.js";import{F as R}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";var P=Object.defineProperty,k=(t,s,l,c)=>{for(var o=void 0,p=t.length-1,n;p>=0;p--)(n=t[p])&&(o=n(s,l,o)||o);return o&&P(s,l,o),o};const v=class extends C{constructor(){super(),this.open=!1,this.bordered=!1,this.shadow=!1,this.useChevron=!0,this.useX=!1,this.useMinus=!1,this.noIndicator=!1}_renderChevronIndicator(){return F`
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
    `}_renderPlusIndicator(){return F`
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
    `}_renderMinusIndicator(){return F`
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
    `}_renderIndicator(){return this.noIndicator?null:this.useX?this._renderPlusIndicator():this.useMinus?this.open?this._renderMinusIndicator():this._renderPlusIndicator():this._renderChevronIndicator()}_onToggle(s){const l=s.target;this.open=l.open;const c=new CustomEvent("toggle",{detail:{open:this.open},bubbles:!0,composed:!0});this.dispatchEvent(c),this.onToggle&&this.onToggle(c)}render(){return F`
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
    `}};v.styles=E`
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
  `;let h=v;k([r({type:Boolean,reflect:!0})],h.prototype,"open");k([r({type:Boolean,reflect:!0})],h.prototype,"bordered");k([r({type:Boolean,reflect:!0})],h.prototype,"shadow");k([r({type:Boolean,reflect:!0,attribute:"use-chevron"})],h.prototype,"useChevron");k([r({type:Boolean,reflect:!0,attribute:"use-x"})],h.prototype,"useX");k([r({type:Boolean,reflect:!0,attribute:"use-minus"})],h.prototype,"useMinus");k([r({type:Boolean,reflect:!0,attribute:"no-indicator"})],h.prototype,"noIndicator");k([r({attribute:!1})],h.prototype,"onToggle");customElements.get("ag-collapsible")||customElements.define("ag-collapsible",h);const N=[".open",".bordered",".shadow",".useChevron",".useX",".useMinus",".noIndicator"],V={slot:"summary"},M=A({__name:"VueCollapsible",props:{open:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},useChevron:{type:Boolean,default:!0},useX:{type:Boolean,default:!1},useMinus:{type:Boolean,default:!1},noIndicator:{type:Boolean,default:!1}},emits:["toggle","update:open"],setup(t,{emit:s}){const l=s,c=B(),o=p=>{l("toggle",p),l("update:open",p.detail.open)};return(p,n)=>(m(),u("ag-collapsible",x({ref_key:"collapsibleRef",ref:c,".open":t.open,".bordered":t.bordered,".shadow":t.shadow,".useChevron":t.useChevron,".useX":t.useX,".useMinus":t.useMinus,".noIndicator":t.noIndicator,".onToggle":o},p.$attrs),[i("span",V,[y(p.$slots,"summary")]),y(p.$slots,"default")],48,N))}}),z={name:"CollapsibleExamples",components:{VueCollapsible:M,Info:T},data(){return{isExpanded:!1}},methods:{handleToggle(t){this.isExpanded=t.target.open,console.log("Collapsible toggled. New state:",this.isExpanded)}}},X={class:"stacked mbe4"},q={class:"stacked mbe4"},U={class:"stacked mbe4"},L={class:"stacked mbe4"},W={class:"stacked mbe4"},G={class:"stacked mbe4"},H={class:"stacked mbe4"},O={class:"stacked mbe4"},Y={class:"stacked mbe4"},$={class:"stacked mbe4"},j={class:"flex-inline items-center"},J={class:"stacked mbe4"},Q={class:"stacked mbe4"},K={class:"stacked mbe4"},Z={style:{"margin-top":"1rem"}},_={class:"stacked mbe4"};function ss(t,s,l,c,o,p){const n=b("VueCollapsible"),w=b("Info");return m(),u("section",null,[s[46]||(s[46]=i("div",{class:"mbe4"},[i("h2",null,"Basic Collapsible (Default)"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators. ")],-1)),i("div",X,[e(n,{"use-chevron":""},{summary:a(()=>[...s[0]||(s[0]=[i("span",null,"Click to expand",-1)])]),default:a(()=>[s[1]||(s[1]=i("p",null,"This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.",-1))]),_:1})]),s[47]||(s[47]=i("div",{class:"mbe4"},[i("h2",null,"X Indicator"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open. ")],-1)),i("div",q,[e(n,{"use-x":""},{summary:a(()=>[...s[2]||(s[2]=[i("span",null,"X Indicator",-1)])]),default:a(()=>[s[3]||(s[3]=i("p",null,"Plus transforms into X when opened. This provides a modern, dynamic visual indicator.",-1))]),_:1})]),s[48]||(s[48]=i("div",{class:"mbe4"},[i("h2",null,"Plus/Minus Indicator"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Plus transitions to minus when open with smooth animation. ")],-1)),i("div",U,[e(n,{"use-minus":""},{summary:a(()=>[...s[4]||(s[4]=[i("span",null,"Plus/Minus Indicator",-1)])]),default:a(()=>[s[5]||(s[5]=i("p",null,"Plus changes to minus when opened. Classic expand/collapse indicator style.",-1))]),_:1})]),s[49]||(s[49]=i("div",{class:"mbe4"},[i("h2",null,"No Indicator"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Collapsible without any visual indicator. ")],-1)),i("div",L,[e(n,{"no-indicator":""},{summary:a(()=>[...s[6]||(s[6]=[i("span",null,"No Indicator",-1)])]),default:a(()=>[s[7]||(s[7]=i("p",null,"Clean header without indicator icon. Minimal design focused on content.",-1))]),_:1})]),s[50]||(s[50]=i("div",{class:"mbe4"},[i("h2",null,"Indicator Comparison"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Toggle each collapsible to see how the different indicators behave. ")],-1)),i("div",W,[e(n,{bordered:"","use-chevron":""},{summary:a(()=>[...s[8]||(s[8]=[i("span",null,"Chevron (default) - Rotates 180°",-1)])]),default:a(()=>[s[9]||(s[9]=i("p",null,"The chevron points down when closed and up when open via rotation.",-1))]),_:1}),e(n,{bordered:"","use-x":""},{summary:a(()=>[...s[10]||(s[10]=[i("span",null,"X Indicator - Rotates from upside-down plus to X",-1)])]),default:a(()=>[s[11]||(s[11]=i("p",null,"Starts as an upside-down plus sign and rotates 45° to form an X when open.",-1))]),_:1}),e(n,{bordered:"","use-minus":""},{summary:a(()=>[...s[12]||(s[12]=[i("span",null,"Plus/Minus - Swaps icons",-1)])]),default:a(()=>[s[13]||(s[13]=i("p",null,"Shows a plus icon when closed and swaps to a minus icon when open.",-1))]),_:1}),e(n,{bordered:"","no-indicator":""},{summary:a(()=>[...s[14]||(s[14]=[i("span",null,"No Indicator - Completely hidden",-1)])]),default:a(()=>[s[15]||(s[15]=i("p",null,"No indicator is shown at all.",-1))]),_:1})]),s[51]||(s[51]=i("div",{class:"mbe4"},[i("h2",null,"Bordered")],-1)),i("div",G,[e(n,{bordered:""},{summary:a(()=>[...s[16]||(s[16]=[i("span",null,"Bordered collapsible",-1)])]),default:a(()=>[s[17]||(s[17]=i("p",null,"This collapsible has a border around it for visual separation.",-1))]),_:1})]),s[52]||(s[52]=i("div",{class:"mbe4"},[i("h2",null,"With Shadow")],-1)),i("div",H,[e(n,{shadow:""},{summary:a(()=>[...s[18]||(s[18]=[i("span",null,"Collapsible with shadow",-1)])]),default:a(()=>[s[19]||(s[19]=i("p",null,"This collapsible has a box-shadow applied for depth.",-1))]),_:1})]),s[53]||(s[53]=i("div",{class:"mbe4"},[i("h2",null,"Combined Features")],-1)),i("div",O,[e(n,{bordered:"",shadow:""},{summary:a(()=>[...s[20]||(s[20]=[i("span",null,"Bordered with shadow",-1)])]),default:a(()=>[s[21]||(s[21]=i("p",null,"This collapsible combines both border and shadow styling for maximum visual impact.",-1))]),_:1})]),s[54]||(s[54]=i("div",{class:"mbe4"},[i("h2",null,"Open by Default")],-1)),i("div",Y,[e(n,{bordered:"",open:""},{summary:a(()=>[...s[22]||(s[22]=[i("span",null,"Already expanded",-1)])]),default:a(()=>[s[23]||(s[23]=i("p",null,[d("This collapsible starts in an open state using the "),i("code",null,"open"),d(" prop.")],-1))]),_:1})]),s[55]||(s[55]=i("div",{class:"mbe4"},[i("h2",null,"Rich Content")],-1)),i("div",$,[e(n,{bordered:"",shadow:""},{summary:a(()=>[i("div",j,[e(w,{color:"var(--ag-primary)",size:18,class:"mie2"}),s[24]||(s[24]=i("strong",null,"Product Details",-1))])]),default:a(()=>[s[25]||(s[25]=i("div",null,[i("h4",{style:{"margin-top":"0"}},"Technical Specifications"),i("ul",null,[i("li",null,"Processor: Octa-core 2.8 GHz"),i("li",null,"Memory: 8GB RAM"),i("li",null,"Storage: 256GB SSD"),i("li",null,'Display: 15.6" Full HD')]),i("p",null,[i("strong",null,"Warranty:"),d(" 2 years manufacturer warranty with optional extended coverage available. ")])],-1))]),_:1})]),s[56]||(s[56]=i("div",{class:"mbe4"},[i("h2",null,"FAQ Example")],-1)),i("div",J,[e(n,{bordered:""},{summary:a(()=>[...s[26]||(s[26]=[i("span",null,"What is AgnosticUI?",-1)])]),default:a(()=>[s[27]||(s[27]=i("p",null," AgnosticUI is a framework-agnostic component library built with web components. It works seamlessly with React, Vue, Svelte, Angular, and vanilla JavaScript. ",-1))]),_:1}),e(n,{bordered:""},{summary:a(()=>[...s[28]||(s[28]=[i("span",null,"How do I install it?",-1)])]),default:a(()=>[s[29]||(s[29]=i("p",null,"You can install AgnosticUI via npm:",-1)),s[30]||(s[30]=i("pre",{style:{background:"var(--ag-background-secondary)",padding:"1rem","border-radius":"4px","overflow-x":"auto"}},"npm install agnosticui-core",-1))]),_:1}),e(n,{bordered:""},{summary:a(()=>[...s[31]||(s[31]=[i("span",null,"Is it accessible?",-1)])]),default:a(()=>[s[32]||(s[32]=i("p",null," Yes! All AgnosticUI components are built with accessibility in mind, following WAI-ARIA best practices and ensuring keyboard navigation and screen reader support. ",-1))]),_:1}),e(n,{bordered:""},{summary:a(()=>[...s[33]||(s[33]=[i("span",null,"Can I customize the styling?",-1)])]),default:a(()=>[s[34]||(s[34]=i("p",null," Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization of component internals while maintaining encapsulation. You can also use design tokens for consistent theming across your application. ",-1))]),_:1})]),s[57]||(s[57]=i("div",{class:"mbe4"},[i("h2",null,"Nested Collapsibles")],-1)),i("div",Q,[e(n,{bordered:""},{summary:a(()=>[...s[35]||(s[35]=[i("span",null,"Level 1 - Main Topic",-1)])]),default:a(()=>[i("div",null,[s[40]||(s[40]=i("p",null,"This is the main content area.",-1)),e(n,{bordered:!0,"use-minus":!0,style:{"margin-top":"1rem"}},{summary:a(()=>[...s[36]||(s[36]=[i("span",null,"Level 2 - Subtopic A",-1)])]),default:a(()=>[s[37]||(s[37]=i("p",null,"Nested collapsible content for subtopic A. Note the different indicator style.",-1))]),_:1}),e(n,{bordered:!0,"use-minus":!0,style:{"margin-top":"0.5rem"}},{summary:a(()=>[...s[38]||(s[38]=[i("span",null,"Level 2 - Subtopic B",-1)])]),default:a(()=>[s[39]||(s[39]=i("p",null,"Nested collapsible content for subtopic B.",-1))]),_:1})])]),_:1})]),s[58]||(s[58]=i("div",{class:"mbe4"},[i("h2",null,"Interactive with Event Handling")],-1)),i("div",K,[e(n,{bordered:"",shadow:"",onToggle:p.handleToggle},{summary:a(()=>[...s[41]||(s[41]=[i("span",null,"Click to toggle (watch console)",-1)])]),default:a(()=>[s[42]||(s[42]=i("div",null,[i("p",null,[d("The collapsible dispatches a "),i("code",null,"toggle"),d(" event when opened or closed.")])],-1))]),_:1},8,["onToggle"]),i("p",Z,[s[43]||(s[43]=d(" Current state: ",-1)),i("strong",null,I(o.isExpanded?"Expanded":"Collapsed"),1)])]),s[59]||(s[59]=i("div",{class:"mbe4"},[i("h2",null,"CSS Parts Customization"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),i("div",_,[e(n,{class:"custom-gradient"},{summary:a(()=>[...s[44]||(s[44]=[i("span",null,"Gaudy Gradient",-1)])]),default:a(()=>[s[45]||(s[45]=i("p",null,"This collapsible uses a gradient background with white text and custom styling.",-1))]),_:1})])])}const is=D(z,[["render",ss],["__scopeId","data-v-271432b0"]]);class as extends C{createRenderRoot(){return this}constructor(){super(),this.isExpanded=!1}handleToggle(s){this.isExpanded=s.target.open,console.log("Collapsible toggled. New state:",this.isExpanded),this.requestUpdate()}render(){return F`
      <section>
        <!-- Basic Collapsible (Default) -->
        <div class="mbe4">
          <h2>Basic Collapsible (Default)</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-chevron>
            <span slot="summary">Click to expand</span>
            <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
          </ag-collapsible>
        </div>

        <!-- X Indicator -->
        <div class="mbe4">
          <h2>X Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-x>
            <span slot="summary">X Indicator</span>
            <p>Plus transforms into X when opened. This provides a modern, dynamic visual indicator.</p>
          </ag-collapsible>
        </div>

        <!-- Plus/Minus Indicator -->
        <div class="mbe4">
          <h2>Plus/Minus Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus transitions to minus when open with smooth animation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-minus>
            <span slot="summary">Plus/Minus Indicator</span>
            <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
          </ag-collapsible>
        </div>

        <!-- No Indicator -->
        <div class="mbe4">
          <h2>No Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Collapsible without any visual indicator.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible no-indicator>
            <span slot="summary">No Indicator</span>
            <p>Clean header without indicator icon. Minimal design focused on content.</p>
          </ag-collapsible>
        </div>

        <!-- Indicator Comparison -->
        <div class="mbe4">
          <h2>Indicator Comparison</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Toggle each collapsible to see how the different indicators behave.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered use-chevron>
            <span slot="summary">Chevron (default) - Rotates 180°</span>
            <p>The chevron points down when closed and up when open via rotation.</p>
          </ag-collapsible>

          <ag-collapsible bordered use-x>
            <span slot="summary">X Indicator - Rotates from upside-down plus to X</span>
            <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
          </ag-collapsible>

          <ag-collapsible bordered use-minus>
            <span slot="summary">Plus/Minus - Swaps icons</span>
            <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
          </ag-collapsible>

          <ag-collapsible bordered no-indicator>
            <span slot="summary">No Indicator - Completely hidden</span>
            <p>No indicator is shown at all.</p>
          </ag-collapsible>
        </div>

        <!-- Bordered -->
        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">Bordered collapsible</span>
            <p>This collapsible has a border around it for visual separation.</p>
          </ag-collapsible>
        </div>

        <!-- With Shadow -->
        <div class="mbe4">
          <h2>With Shadow</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible shadow>
            <span slot="summary">Collapsible with shadow</span>
            <p>This collapsible has a box-shadow applied for depth.</p>
          </ag-collapsible>
        </div>

        <!-- Combined Features -->
        <div class="mbe4">
          <h2>Combined Features</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow>
            <span slot="summary">Bordered with shadow</span>
            <p>This collapsible combines both border and shadow styling for maximum visual impact.</p>
          </ag-collapsible>
        </div>

        <!-- Open by Default -->
        <div class="mbe4">
          <h2>Open by Default</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered open>
            <span slot="summary">Already expanded</span>
            <p>This collapsible starts in an open state using the <code>open</code> attribute.</p>
          </ag-collapsible>
        </div>

        <!-- Rich Content -->
        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow>
            <div slot="summary" class="flex-inline items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-primary)" stroke-width="2" width="18" height="18" class="mie2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4m0-4h.01"/>
              </svg>
              <strong>Product Details</strong>
            </div>
            <div>
              <h4 style="margin-top: 0;">Technical Specifications</h4>
              <ul>
                <li>Processor: Octa-core 2.8 GHz</li>
                <li>Memory: 8GB RAM</li>
                <li>Storage: 256GB SSD</li>
                <li>Display: 15.6" Full HD</li>
              </ul>
              <p>
                <strong>Warranty:</strong> 2 years manufacturer warranty with optional
                extended coverage available.
              </p>
            </div>
          </ag-collapsible>
        </div>

        <!-- FAQ Example -->
        <div class="mbe4">
          <h2>FAQ Example</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">What is AgnosticUI?</span>
            <p>
              AgnosticUI is a framework-agnostic component library built with web
              components. It works seamlessly with React, Vue, Svelte, Angular, and
              vanilla JavaScript.
            </p>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">How do I install it?</span>
            <p>You can install AgnosticUI via npm:</p>
            <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">Is it accessible?</span>
            <p>
              Yes! All AgnosticUI components are built with accessibility in mind,
              following WAI-ARIA best practices and ensuring keyboard navigation and
              screen reader support.
            </p>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">Can I customize the styling?</span>
            <p>
              Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
              of component internals while maintaining encapsulation. You can also use
              design tokens for consistent theming across your application.
            </p>
          </ag-collapsible>
        </div>

        <!-- Nested Collapsibles -->
        <div class="mbe4">
          <h2>Nested Collapsibles</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">Level 1 - Main Topic</span>
            <div>
              <p>This is the main content area.</p>

              <ag-collapsible bordered use-minus style="margin-top: 1rem;">
                <span slot="summary">Level 2 - Subtopic A</span>
                <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
              </ag-collapsible>

              <ag-collapsible bordered use-minus style="margin-top: 0.5rem;">
                <span slot="summary">Level 2 - Subtopic B</span>
                <p>Nested collapsible content for subtopic B.</p>
              </ag-collapsible>
            </div>
          </ag-collapsible>
        </div>

        <!-- Interactive with Event Handling -->
        <div class="mbe4">
          <h2>Interactive with Event Handling</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow @toggle=${this.handleToggle}>
            <span slot="summary">Click to toggle (watch console)</span>
            <div>
              <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
            </div>
          </ag-collapsible>
          <p style="margin-top: 1rem;">
            Current state: <strong>${this.isExpanded?"Expanded":"Collapsed"}</strong>
          </p>
        </div>

        <!-- CSS Parts Customization -->
        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible class="custom-gradient">
            <span slot="summary">Gaudy Gradient</span>
            <p>This collapsible uses a gradient background with white text and custom styling.</p>
          </ag-collapsible>
        </div>
      </section>
    `}}customElements.define("collapsible-lit-examples",as);const ns=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Collapsible (Default)</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible use-chevron>
        <template #summary>
          <span>Click to expand</span>
        </template>
        <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
      </VueCollapsible>
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
      <VueCollapsible use-x>
        <template #summary>
          <span>X Indicator</span>
        </template>
        <p>Plus transforms into X when opened. This provides a modern, dynamic visual indicator.</p>
      </VueCollapsible>
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
      <VueCollapsible use-minus>
        <template #summary>
          <span>Plus/Minus Indicator</span>
        </template>
        <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>No Indicator</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Collapsible without any visual indicator.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible no-indicator>
        <template #summary>
          <span>No Indicator</span>
        </template>
        <p>Clean header without indicator icon. Minimal design focused on content.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>Indicator Comparison</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Toggle each collapsible to see how the different indicators behave.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        bordered
        use-chevron
      >
        <template #summary>
          <span>Chevron (default) - Rotates 180°</span>
        </template>
        <p>The chevron points down when closed and up when open via rotation.</p>
      </VueCollapsible>

      <VueCollapsible
        bordered
        use-x
      >
        <template #summary>
          <span>X Indicator - Rotates from upside-down plus to X</span>
        </template>
        <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
      </VueCollapsible>

      <VueCollapsible
        bordered
        use-minus
      >
        <template #summary>
          <span>Plus/Minus - Swaps icons</span>
        </template>
        <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
      </VueCollapsible>

      <VueCollapsible
        bordered
        no-indicator
      >
        <template #summary>
          <span>No Indicator - Completely hidden</span>
        </template>
        <p>No indicator is shown at all.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>Bordered</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible bordered>
        <template #summary>
          <span>Bordered collapsible</span>
        </template>
        <p>This collapsible has a border around it for visual separation.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>With Shadow</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible shadow>
        <template #summary>
          <span>Collapsible with shadow</span>
        </template>
        <p>This collapsible has a box-shadow applied for depth.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>Combined Features</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        bordered
        shadow
      >
        <template #summary>
          <span>Bordered with shadow</span>
        </template>
        <p>This collapsible combines both border and shadow styling for maximum visual impact.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>Open by Default</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        bordered
        open
      >
        <template #summary>
          <span>Already expanded</span>
        </template>
        <p>This collapsible starts in an open state using the <code>open</code> prop.</p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>Rich Content</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        bordered
        shadow
      >
        <template #summary>
          <div class="flex-inline items-center">
            <Info
              color="var(--ag-primary)"
              :size="18"
              class="mie2"
            />
            <strong>Product Details</strong>
          </div>
        </template>
        <div>
          <h4 style="margin-top: 0;">Technical Specifications</h4>
          <ul>
            <li>Processor: Octa-core 2.8 GHz</li>
            <li>Memory: 8GB RAM</li>
            <li>Storage: 256GB SSD</li>
            <li>Display: 15.6" Full HD</li>
          </ul>
          <p>
            <strong>Warranty:</strong> 2 years manufacturer warranty with optional
            extended coverage available.
          </p>
        </div>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>FAQ Example</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible bordered>
        <template #summary>
          <span>What is AgnosticUI?</span>
        </template>
        <p>
          AgnosticUI is a framework-agnostic component library built with web
          components. It works seamlessly with React, Vue, Svelte, Angular, and
          vanilla JavaScript.
        </p>
      </VueCollapsible>

      <VueCollapsible bordered>
        <template #summary>
          <span>How do I install it?</span>
        </template>
        <p>You can install AgnosticUI via npm:</p>
        <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
      </VueCollapsible>

      <VueCollapsible bordered>
        <template #summary>
          <span>Is it accessible?</span>
        </template>
        <p>
          Yes! All AgnosticUI components are built with accessibility in mind,
          following WAI-ARIA best practices and ensuring keyboard navigation and
          screen reader support.
        </p>
      </VueCollapsible>

      <VueCollapsible bordered>
        <template #summary>
          <span>Can I customize the styling?</span>
        </template>
        <p>
          Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
          of component internals while maintaining encapsulation. You can also use
          design tokens for consistent theming across your application.
        </p>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>Nested Collapsibles</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible bordered>
        <template #summary>
          <span>Level 1 - Main Topic</span>
        </template>
        <div>
          <p>This is the main content area.</p>

          <VueCollapsible
            :bordered="true"
            :use-minus="true"
            style="margin-top: 1rem;"
          >
            <template #summary>
              <span>Level 2 - Subtopic A</span>
            </template>
            <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
          </VueCollapsible>

          <VueCollapsible
            :bordered="true"
            :use-minus="true"
            style="margin-top: 0.5rem;"
          >
            <template #summary>
              <span>Level 2 - Subtopic B</span>
            </template>
            <p>Nested collapsible content for subtopic B.</p>
          </VueCollapsible>
        </div>
      </VueCollapsible>
    </div>

    <div class="mbe4">
      <h2>Interactive with Event Handling</h2>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible
        bordered
        shadow
        @toggle="handleToggle"
      >
        <template #summary>
          <span>Click to toggle (watch console)</span>
        </template>
        <div>
          <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
        </div>
      </VueCollapsible>
      <p style="margin-top: 1rem;">
        Current state: <strong>{{ isExpanded ? 'Expanded' : 'Collapsed' }}</strong>
      </p>
    </div>

    <div class="mbe4">
      <h2>CSS Parts Customization</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCollapsible class="custom-gradient">
        <template #summary>
          <span>Gaudy Gradient</span>
        </template>
        <p>This collapsible uses a gradient background with white text and custom styling.</p>
      </VueCollapsible>
    </div>
  </section>
</template>

<script>
import { VueCollapsible } from "agnosticui-core/collapsible/vue";
import { Info } from "lucide-vue-next";

export default {
  name: "CollapsibleExamples",
  components: {
    VueCollapsible,
    Info,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    handleToggle(event) {
      this.isExpanded = event.target.open;
      console.log("Collapsible toggled. New state:", this.isExpanded);
    },
  },
};
<\/script>

<style scoped>
/* CSS Parts customization examples */
.custom-gradient::part(ag-collapsible-details) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  overflow: hidden;
}

.custom-gradient::part(ag-collapsible-summary) {
  color: white;
  font-weight: 600;
  padding: 1.5rem;
}

.custom-gradient::part(ag-collapsible-indicator) {
  filter: brightness(0) invert(1);
}

.custom-gradient::part(ag-collapsible-content) {
  color: white;
  background: rgba(0, 0, 0, 0.1);
}
</style>
`,es=`import { LitElement, html } from 'lit';
import 'agnosticui-core/collapsible';

export class CollapsibleLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.isExpanded = false;
  }

  handleToggle(event) {
    this.isExpanded = event.target.open;
    console.log('Collapsible toggled. New state:', this.isExpanded);
    this.requestUpdate();
  }

  render() {
    return html\`
      <section>
        <!-- Basic Collapsible (Default) -->
        <div class="mbe4">
          <h2>Basic Collapsible (Default)</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-chevron>
            <span slot="summary">Click to expand</span>
            <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
          </ag-collapsible>
        </div>

        <!-- X Indicator -->
        <div class="mbe4">
          <h2>X Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-x>
            <span slot="summary">X Indicator</span>
            <p>Plus transforms into X when opened. This provides a modern, dynamic visual indicator.</p>
          </ag-collapsible>
        </div>

        <!-- Plus/Minus Indicator -->
        <div class="mbe4">
          <h2>Plus/Minus Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus transitions to minus when open with smooth animation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-minus>
            <span slot="summary">Plus/Minus Indicator</span>
            <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
          </ag-collapsible>
        </div>

        <!-- No Indicator -->
        <div class="mbe4">
          <h2>No Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Collapsible without any visual indicator.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible no-indicator>
            <span slot="summary">No Indicator</span>
            <p>Clean header without indicator icon. Minimal design focused on content.</p>
          </ag-collapsible>
        </div>

        <!-- Indicator Comparison -->
        <div class="mbe4">
          <h2>Indicator Comparison</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Toggle each collapsible to see how the different indicators behave.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered use-chevron>
            <span slot="summary">Chevron (default) - Rotates 180°</span>
            <p>The chevron points down when closed and up when open via rotation.</p>
          </ag-collapsible>

          <ag-collapsible bordered use-x>
            <span slot="summary">X Indicator - Rotates from upside-down plus to X</span>
            <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
          </ag-collapsible>

          <ag-collapsible bordered use-minus>
            <span slot="summary">Plus/Minus - Swaps icons</span>
            <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
          </ag-collapsible>

          <ag-collapsible bordered no-indicator>
            <span slot="summary">No Indicator - Completely hidden</span>
            <p>No indicator is shown at all.</p>
          </ag-collapsible>
        </div>

        <!-- Bordered -->
        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">Bordered collapsible</span>
            <p>This collapsible has a border around it for visual separation.</p>
          </ag-collapsible>
        </div>

        <!-- With Shadow -->
        <div class="mbe4">
          <h2>With Shadow</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible shadow>
            <span slot="summary">Collapsible with shadow</span>
            <p>This collapsible has a box-shadow applied for depth.</p>
          </ag-collapsible>
        </div>

        <!-- Combined Features -->
        <div class="mbe4">
          <h2>Combined Features</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow>
            <span slot="summary">Bordered with shadow</span>
            <p>This collapsible combines both border and shadow styling for maximum visual impact.</p>
          </ag-collapsible>
        </div>

        <!-- Open by Default -->
        <div class="mbe4">
          <h2>Open by Default</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered open>
            <span slot="summary">Already expanded</span>
            <p>This collapsible starts in an open state using the <code>open</code> attribute.</p>
          </ag-collapsible>
        </div>

        <!-- Rich Content -->
        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow>
            <div slot="summary" class="flex-inline items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-primary)" stroke-width="2" width="18" height="18" class="mie2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4m0-4h.01"/>
              </svg>
              <strong>Product Details</strong>
            </div>
            <div>
              <h4 style="margin-top: 0;">Technical Specifications</h4>
              <ul>
                <li>Processor: Octa-core 2.8 GHz</li>
                <li>Memory: 8GB RAM</li>
                <li>Storage: 256GB SSD</li>
                <li>Display: 15.6" Full HD</li>
              </ul>
              <p>
                <strong>Warranty:</strong> 2 years manufacturer warranty with optional
                extended coverage available.
              </p>
            </div>
          </ag-collapsible>
        </div>

        <!-- FAQ Example -->
        <div class="mbe4">
          <h2>FAQ Example</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">What is AgnosticUI?</span>
            <p>
              AgnosticUI is a framework-agnostic component library built with web
              components. It works seamlessly with React, Vue, Svelte, Angular, and
              vanilla JavaScript.
            </p>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">How do I install it?</span>
            <p>You can install AgnosticUI via npm:</p>
            <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">Is it accessible?</span>
            <p>
              Yes! All AgnosticUI components are built with accessibility in mind,
              following WAI-ARIA best practices and ensuring keyboard navigation and
              screen reader support.
            </p>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">Can I customize the styling?</span>
            <p>
              Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
              of component internals while maintaining encapsulation. You can also use
              design tokens for consistent theming across your application.
            </p>
          </ag-collapsible>
        </div>

        <!-- Nested Collapsibles -->
        <div class="mbe4">
          <h2>Nested Collapsibles</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">Level 1 - Main Topic</span>
            <div>
              <p>This is the main content area.</p>

              <ag-collapsible bordered use-minus style="margin-top: 1rem;">
                <span slot="summary">Level 2 - Subtopic A</span>
                <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
              </ag-collapsible>

              <ag-collapsible bordered use-minus style="margin-top: 0.5rem;">
                <span slot="summary">Level 2 - Subtopic B</span>
                <p>Nested collapsible content for subtopic B.</p>
              </ag-collapsible>
            </div>
          </ag-collapsible>
        </div>

        <!-- Interactive with Event Handling -->
        <div class="mbe4">
          <h2>Interactive with Event Handling</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow @toggle=\${this.handleToggle}>
            <span slot="summary">Click to toggle (watch console)</span>
            <div>
              <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
            </div>
          </ag-collapsible>
          <p style="margin-top: 1rem;">
            Current state: <strong>\${this.isExpanded ? 'Expanded' : 'Collapsed'}</strong>
          </p>
        </div>

        <!-- CSS Parts Customization -->
        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible class="custom-gradient">
            <span slot="summary">Gaudy Gradient</span>
            <p>This collapsible uses a gradient background with white text and custom styling.</p>
          </ag-collapsible>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('collapsible-lit-examples', CollapsibleLitExamples);
`,ls=`import { useState } from "react";
import { ReactCollapsible } from "agnosticui-core/collapsible/react";
import { Info } from "lucide-react";

export default function CollapsibleReactExamples() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (event) => {
    setIsExpanded(event.target.open);
    console.log("Collapsible toggled. New state:", event.target.open);
  };

  return (
    <section>
      {/* Basic Collapsible (Default) */}
      <div className="mbe4">
        <h2>Basic Collapsible (Default)</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible useChevron>
          <span slot="summary">Click to expand</span>
          <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
        </ReactCollapsible>
      </div>

      {/* X Indicator */}
      <div className="mbe4">
        <h2>X Indicator</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible useX>
          <span slot="summary">X Indicator</span>
          <p>Plus transforms into X when opened. This provides a modern, dynamic visual indicator.</p>
        </ReactCollapsible>
      </div>

      {/* Plus/Minus Indicator */}
      <div className="mbe4">
        <h2>Plus/Minus Indicator</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Plus transitions to minus when open with smooth animation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible useMinus>
          <span slot="summary">Plus/Minus Indicator</span>
          <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
        </ReactCollapsible>
      </div>

      {/* No Indicator */}
      <div className="mbe4">
        <h2>No Indicator</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Collapsible without any visual indicator.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible noIndicator>
          <span slot="summary">No Indicator</span>
          <p>Clean header without indicator icon. Minimal design focused on content.</p>
        </ReactCollapsible>
      </div>

      {/* Indicator Comparison */}
      <div className="mbe4">
        <h2>Indicator Comparison</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Toggle each collapsible to see how the different indicators behave.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered useChevron>
          <span slot="summary">Chevron (default) - Rotates 180°</span>
          <p>The chevron points down when closed and up when open via rotation.</p>
        </ReactCollapsible>

        <ReactCollapsible bordered useX>
          <span slot="summary">X Indicator - Rotates from upside-down plus to X</span>
          <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
        </ReactCollapsible>

        <ReactCollapsible bordered useMinus>
          <span slot="summary">Plus/Minus - Swaps icons</span>
          <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
        </ReactCollapsible>

        <ReactCollapsible bordered noIndicator>
          <span slot="summary">No Indicator - Completely hidden</span>
          <p>No indicator is shown at all.</p>
        </ReactCollapsible>
      </div>

      {/* Bordered */}
      <div className="mbe4">
        <h2>Bordered</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered>
          <span slot="summary">Bordered collapsible</span>
          <p>This collapsible has a border around it for visual separation.</p>
        </ReactCollapsible>
      </div>

      {/* With Shadow */}
      <div className="mbe4">
        <h2>With Shadow</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible shadow>
          <span slot="summary">Collapsible with shadow</span>
          <p>This collapsible has a box-shadow applied for depth.</p>
        </ReactCollapsible>
      </div>

      {/* Combined Features */}
      <div className="mbe4">
        <h2>Combined Features</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered shadow>
          <span slot="summary">Bordered with shadow</span>
          <p>This collapsible combines both border and shadow styling for maximum visual impact.</p>
        </ReactCollapsible>
      </div>

      {/* Open by Default */}
      <div className="mbe4">
        <h2>Open by Default</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered open>
          <span slot="summary">Already expanded</span>
          <p>This collapsible starts in an open state using the <code>open</code> prop.</p>
        </ReactCollapsible>
      </div>

      {/* Rich Content */}
      <div className="mbe4">
        <h2>Rich Content</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered shadow>
          <div slot="summary" className="flex-inline items-center">
            <Info color="var(--ag-primary)" size={18} className="mie2" />
            <strong>Product Details</strong>
          </div>
          <div>
            <h4 style={{ marginTop: 0 }}>Technical Specifications</h4>
            <ul>
              <li>Processor: Octa-core 2.8 GHz</li>
              <li>Memory: 8GB RAM</li>
              <li>Storage: 256GB SSD</li>
              <li>Display: 15.6" Full HD</li>
            </ul>
            <p>
              <strong>Warranty:</strong> 2 years manufacturer warranty with optional
              extended coverage available.
            </p>
          </div>
        </ReactCollapsible>
      </div>

      {/* FAQ Example */}
      <div className="mbe4">
        <h2>FAQ Example</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered>
          <span slot="summary">What is AgnosticUI?</span>
          <p>
            AgnosticUI is a framework-agnostic component library built with web
            components. It works seamlessly with React, Vue, Svelte, Angular, and
            vanilla JavaScript.
          </p>
        </ReactCollapsible>

        <ReactCollapsible bordered>
          <span slot="summary">How do I install it?</span>
          <p>You can install AgnosticUI via npm:</p>
          <pre style={{ background: "var(--ag-background-secondary)", padding: "1rem", borderRadius: "4px", overflowX: "auto" }}>npm install agnosticui-core</pre>
        </ReactCollapsible>

        <ReactCollapsible bordered>
          <span slot="summary">Is it accessible?</span>
          <p>
            Yes! All AgnosticUI components are built with accessibility in mind,
            following WAI-ARIA best practices and ensuring keyboard navigation and
            screen reader support.
          </p>
        </ReactCollapsible>

        <ReactCollapsible bordered>
          <span slot="summary">Can I customize the styling?</span>
          <p>
            Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
            of component internals while maintaining encapsulation. You can also use
            design tokens for consistent theming across your application.
          </p>
        </ReactCollapsible>
      </div>

      {/* Nested Collapsibles */}
      <div className="mbe4">
        <h2>Nested Collapsibles</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered>
          <span slot="summary">Level 1 - Main Topic</span>
          <div>
            <p>This is the main content area.</p>

            <ReactCollapsible bordered useMinus style={{ marginTop: "1rem" }}>
              <span slot="summary">Level 2 - Subtopic A</span>
              <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
            </ReactCollapsible>

            <ReactCollapsible bordered useMinus style={{ marginTop: "0.5rem" }}>
              <span slot="summary">Level 2 - Subtopic B</span>
              <p>Nested collapsible content for subtopic B.</p>
            </ReactCollapsible>
          </div>
        </ReactCollapsible>
      </div>

      {/* Interactive with Event Handling */}
      <div className="mbe4">
        <h2>Interactive with Event Handling</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered shadow onToggle={handleToggle}>
          <span slot="summary">Click to toggle (watch console)</span>
          <div>
            <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
          </div>
        </ReactCollapsible>
        <p style={{ marginTop: "1rem" }}>
          Current state: <strong>{isExpanded ? 'Expanded' : 'Collapsed'}</strong>
        </p>
      </div>

      {/* CSS Parts Customization */}
      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible className="custom-gradient">
          <span slot="summary">Gaudy Gradient</span>
          <p>This collapsible uses a gradient background with white text and custom styling.</p>
        </ReactCollapsible>
      </div>
    </section>
  );
}
`,ms=JSON.parse('{"title":"Collapsible","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapsible.md","filePath":"components/collapsible.md"}'),ts={name:"components/collapsible.md"},ys=Object.assign(ts,{setup(t){return(s,l)=>(m(),u("div",null,[l[1]||(l[1]=i("h1",{id:"collapsible",tabindex:"-1"},[d("Collapsible "),i("a",{class:"header-anchor",href:"#collapsible","aria-label":'Permalink to "Collapsible"'},"​")],-1)),e(f),l[2]||(l[2]=i("p",null,"A collapsible is a standalone component that allows users to show and hide a single section of content. Unlike accordions which manage multiple items, collapsibles work independently and are ideal for revealing optional information, FAQs, or additional details on demand.",-1)),l[3]||(l[3]=i("h2",{id:"examples",tabindex:"-1"},[d("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(R,{component:"collapsible","vue-code":g(ns),"lit-code":g(es),"react-code":g(ls)},{vue:a(()=>[e(is)]),lit:a(()=>[...l[0]||(l[0]=[i("collapsible-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),l[4]||(l[4]=S("",22))]))}});export{ms as __pageData,ys as default};
