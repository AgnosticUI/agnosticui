import{A as z}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as x,z as p,a as b,E as A,x as m}from"./chunks/Button.CFkPNK98.js";import{n as V}from"./chunks/state-CovhUvdr.DWhhlYib.js";import{d as C,c as v,o as y,r as E,K as B,_,C as f,j as i,G as t,w as s,ae as q,a as S,k as F}from"./chunks/framework.NAAYCHZu.js";import{F as R}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";var P=Object.defineProperty,g=(d,e,a,o)=>{for(var l=void 0,r=d.length-1,n;r>=0;r--)(n=d[r])&&(l=n(e,a,l)||l);return l&&P(e,a,l),l};const D=class extends b{constructor(){super(),this._handleCardChange=e=>{e.stopPropagation();const{value:a,checked:o}=e.detail;let l;if(this.type==="radio")l=o?[a]:[];else{const n=[...this._getSelectedValues()];if(o)n.includes(a)||n.push(a);else{const c=n.indexOf(a);c>-1&&n.splice(c,1)}l=n}this._internalSelectedValues=l;const r=new CustomEvent("selection-change",{detail:{value:a,checked:o,selectedValues:l},bubbles:!0,composed:!0});this.dispatchEvent(r),this.onSelectionChange&&this.onSelectionChange(r)},this._handleKeyDown=e=>{const a=this._getCards().filter(n=>!n.disabled);if(a.length===0)return;const o=a.find(n=>{var c;try{return((c=n.shadowRoot)==null?void 0:c.activeElement)||n===document.activeElement}catch{return n===document.activeElement}}),l=o?a.indexOf(o):-1;let r=null;switch(e.key){case"ArrowDown":case"ArrowRight":e.preventDefault(),r=l===-1?0:(l+1)%a.length;break;case"ArrowUp":case"ArrowLeft":e.preventDefault(),r=l===-1?a.length-1:(l-1+a.length)%a.length;break;case"Home":e.preventDefault(),r=0;break;case"End":e.preventDefault(),r=a.length-1;break}if(r!==null){const n=a[r];n.focus(),this.type==="radio"&&this._handleCardChange(new CustomEvent("selection-card-change",{detail:{value:n.value,checked:!0}}))}},this.type="radio",this.name="",this.legend="",this.legendHidden=!1,this.theme="",this.value="",this.values=[],this.disabled=!1,this._internalSelectedValues=[]}_getSelectedValues(){return this.type==="radio"?this.value?[this.value]:this._internalSelectedValues:this.values&&this.values.length>0?this.values:this._internalSelectedValues}connectedCallback(){super.connectedCallback(),this.addEventListener("selection-card-change",this._handleCardChange),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("selection-card-change",this._handleCardChange),this.removeEventListener("keydown",this._handleKeyDown)}updated(e){super.updated(e),(e.has("type")||e.has("name")||e.has("theme")||e.has("disabled")||e.has("value")||e.has("values")||e.has("_internalSelectedValues"))&&this._syncChildCards()}firstUpdated(){this._syncChildCards()}_getCards(){var a;const e=(a=this.shadowRoot)==null?void 0:a.querySelector("slot");return e?e.assignedElements({flatten:!0}).filter(o=>o.tagName.toLowerCase()==="ag-selection-card"):[]}_syncChildCards(){const e=this._getCards(),a=this._getSelectedValues();e.forEach(o=>{o._type=this.type,o._name=this.name,o._theme=this.theme,o.checked=a.includes(o.value),this.disabled&&(o.disabled=!0)})}_handleSlotChange(){this._syncChildCards()}render(){const e=["selection-card-group__legend",this.legendHidden?"selection-card-group__legend--hidden":""].filter(Boolean).join(" ");return m`
      <fieldset
        class="selection-card-group"
        part="ag-selection-card-group-fieldset"
        role="${this.type==="radio"?"radiogroup":"group"}"
        aria-disabled="${this.disabled?"true":"false"}"
      >
        ${this.legend?m`<legend class="${e}" part="ag-selection-card-group-legend">${this.legend}</legend>`:A}
        <div class="selection-card-group__content" part="ag-selection-card-group-content">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </fieldset>
    `}};D.styles=x`
    :host {
      display: block;
    }

    .selection-card-group {
      border: 0;
      padding: 0;
      margin: 0;
      min-inline-size: auto;
    }

    .selection-card-group__legend {
      font-weight: 600;
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
      padding: 0;
      margin-block-end: var(--ag-space-4);
    }

    .selection-card-group__legend--hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    .selection-card-group__content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--ag-selection-card-group-gap, var(--ag-space-4));
    }
  `;let h=D;g([p({type:String,reflect:!0})],h.prototype,"type");g([p({type:String,reflect:!0})],h.prototype,"name");g([p({type:String})],h.prototype,"legend");g([p({type:Boolean,attribute:"legend-hidden"})],h.prototype,"legendHidden");g([p({type:String,reflect:!0})],h.prototype,"theme");g([p({type:String})],h.prototype,"value");g([p({type:Array})],h.prototype,"values");g([p({type:Boolean,reflect:!0})],h.prototype,"disabled");g([p({attribute:!1})],h.prototype,"onSelectionChange");g([V()],h.prototype,"_internalSelectedValues");customElements.get("ag-selection-card-group")||customElements.define("ag-selection-card-group",h);const T=["type","name","legend","legend-hidden","value","values",".disabled"],G=C({__name:"VueSelectionCardGroup",props:{type:{default:"radio"},name:{default:""},legend:{default:""},legendHidden:{type:Boolean,default:!1},value:{default:""},values:{default:()=>[]},disabled:{type:Boolean,default:!1}},emits:["selection-change","update:value","update:values"],setup(d,{emit:e}){const a=e,o=l=>{const r=l.detail;a("selection-change",r),r.selectedValues.length<=1&&a("update:value",r.selectedValues[0]||""),a("update:values",r.selectedValues)};return(l,r)=>(y(),v("ag-selection-card-group",B({type:d.type,name:d.name,legend:d.legend,"legend-hidden":d.legendHidden,value:d.value,values:d.values,".disabled":d.disabled,onSelectionChange:o},l.$attrs),[E(l.$slots,"default")],48,T))}});var $=Object.defineProperty,u=(d,e,a,o)=>{for(var l=void 0,r=d.length-1,n;r>=0;r--)(n=d[r])&&(l=n(e,a,l)||l);return l&&$(e,a,l),l};const O=class extends b{constructor(){super(),this.value="",this.label="",this.checked=!1,this.disabled=!1,this._type="radio",this._name="",this._theme=""}focus(){var e,a;(a=(e=this.shadowRoot)==null?void 0:e.querySelector(".selection-card"))==null||a.focus()}_handleClick(e){if(e.preventDefault(),this.disabled)return;const a=this._type==="radio"?!0:!this.checked;this.dispatchEvent(new CustomEvent("selection-card-change",{detail:{value:this.value,checked:a},bubbles:!0,composed:!0}))}_handleKeyDown(e){this.disabled||(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this._handleClick(e))}_renderIndicator(){return this._type==="checkbox"?m`
        <svg class="selection-card__checkmark" viewBox="0 0 24 24">
          <polyline points="4 12 10 18 20 6"></polyline>
        </svg>
      `:m`<div class="selection-card__radio-dot"></div>`}render(){const e=["selection-card",`selection-card--${this._theme||"default"}`,this.checked?"selection-card--checked":"",this.disabled?"selection-card--disabled":""].filter(Boolean).join(" ");return m`
      <label
        class="${e}"
        part="ag-selection-card-container"
        tabindex="${this.disabled?-1:0}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
      >
        <input
          type="${this._type}"
          class="selection-card__input"
          part="ag-selection-card-control"
          name="${this._name||A}"
          value="${this.value}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          aria-checked="${this.checked?"true":"false"}"
          tabindex="-1"
        />
        <span class="selection-card__label-sr">${this.label}</span>
        <div class="selection-card__indicator" part="ag-selection-card-indicator" aria-hidden="true">
          ${this._renderIndicator()}
        </div>
        <div class="selection-card__content" part="ag-selection-card-content">
          <slot></slot>
        </div>
      </label>
    `}};O.styles=x`
    :host {
      display: block;
      --_selection-card-padding: var(--ag-selection-card-padding, var(--ag-space-4));
      --_selection-card-gap: var(--ag-selection-card-gap, var(--ag-space-3));
      --_selection-card-border-radius: var(--ag-selection-card-border-radius, var(--ag-radius-md));
      --_selection-card-indicator-size: var(--ag-selection-card-indicator-size, var(--ag-space-5));
      --_selection-card-background: var(--ag-selection-card-background, var(--ag-background-primary));
      --_selection-card-border-color: var(--ag-selection-card-border-color, var(--ag-border));
    }

    .selection-card {
      position: relative;
      display: block;
      padding: var(--_selection-card-padding);
      background: var(--_selection-card-background);
      /* Always use border-width-2 to prevent CLS when selected */
      border: var(--ag-border-width-2) solid var(--_selection-card-border-color);
      border-radius: var(--_selection-card-border-radius);
      cursor: pointer;
      transition:
        border-color var(--ag-motion-fast) var(--ag-fx-ease-ease-out),
        background-color var(--ag-motion-fast) var(--ag-fx-ease-ease-out),
        box-shadow var(--ag-motion-fast) var(--ag-fx-ease-ease-out),
        transform var(--ag-motion-fast) var(--ag-fx-ease-ease-out);
    }

    /* Subtle hover effect for all cards */
    .selection-card:hover:not(.selection-card--disabled) {
      transform: scale(1.02);
      box-shadow: var(--ag-shadow-sm);
    }

    /* Theme: default/empty (primary blue) */
    .selection-card--default:hover:not(.selection-card--disabled) {
      border-color: var(--ag-primary);
    }
    .selection-card--default.selection-card--checked {
      background: var(--ag-primary-background);
      border-color: var(--ag-primary);
    }
    .selection-card--default .selection-card__indicator {
      background: var(--ag-primary);
    }

    /* Theme: success (green) */
    .selection-card--success:hover:not(.selection-card--disabled) {
      border-color: var(--ag-success);
    }
    .selection-card--success.selection-card--checked {
      background: var(--ag-success-background);
      border-color: var(--ag-success);
      color: var(--ag-success-text);
    }
    .selection-card--success .selection-card__indicator {
      background: var(--ag-success);
    }

    /* Theme: info (blue/cyan) */
    .selection-card--info:hover:not(.selection-card--disabled) {
      border-color: var(--ag-info);
    }
    .selection-card--info.selection-card--checked {
      background: var(--ag-info-background);
      border-color: var(--ag-info);
      color: var(--ag-info-text);
    }
    .selection-card--info .selection-card__indicator {
      background: var(--ag-info);
    }

    /* Theme: warning (yellow/orange) */
    .selection-card--warning:hover:not(.selection-card--disabled) {
      border-color: var(--ag-warning);
    }
    .selection-card--warning.selection-card--checked {
      background: var(--ag-warning-background);
      border-color: var(--ag-warning);
      color: var(--ag-warning-text);
    }
    .selection-card--warning .selection-card__indicator {
      background: var(--ag-warning);
    }

    /* Theme: error (red) */
    .selection-card--error:hover:not(.selection-card--disabled) {
      border-color: var(--ag-danger);
    }
    .selection-card--error.selection-card--checked {
      background: var(--ag-danger-background);
      border-color: var(--ag-danger);
      color: var(--ag-danger-text);
    }
    .selection-card--error .selection-card__indicator {
      background: var(--ag-danger);
    }

    /* Theme: monochrome (black/white) */
    .selection-card--monochrome:hover:not(.selection-card--disabled) {
      border-color: var(--ag-black);
    }
    .selection-card--monochrome.selection-card--checked {
      background: var(--ag-background-primary-inverted);
      border-color: var(--ag-black);
      color: var(--ag-text-primary-inverted);
    }
    .selection-card--monochrome .selection-card__indicator {
      background: var(--ag-black);
    }

    /* Focus state */
    .selection-card:focus-within:not(.selection-card--disabled) {
      outline: var(--ag-focus-width) solid var(--ag-focus-ring-color, rgba(var(--ag-focus), 0.5));
      outline-offset: var(--ag-focus-offset);
    }

    /* Disabled state */
    .selection-card--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* Hidden input */
    .selection-card__input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Indicator (badge in top-right corner) */
    .selection-card__indicator {
      position: absolute;
      top: var(--ag-space-2);
      right: var(--ag-space-2);
      width: var(--_selection-card-indicator-size);
      height: var(--_selection-card-indicator-size);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ag-radius-full);
      opacity: 0;
      transform: scale(0.8);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) ease-in-out;
    }

    .selection-card--checked .selection-card__indicator {
      opacity: 1;
      transform: scale(1);
    }

    /* Radio indicator - filled circle */
    .selection-card__radio-dot {
      width: 40%;
      height: 40%;
      background: var(--ag-white);
      border-radius: var(--ag-radius-full);
    }

    /* Checkbox indicator - checkmark */
    .selection-card__checkmark {
      width: 60%;
      height: 60%;
      fill: none;
      stroke: var(--ag-white);
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Content wrapper */
    .selection-card__content {
      display: block;
    }

    /* Visually hidden label for screen readers */
    .selection-card__label-sr {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
      .selection-card,
      .selection-card__indicator {
        transition: none;
      }
    }

    /* High contrast mode support */
    @media (forced-colors: active) {
      .selection-card--checked {
        outline: 2px solid CanvasText;
      }
      .selection-card__indicator {
        background: CanvasText;
      }
      .selection-card__checkmark {
        stroke: Canvas;
      }
      .selection-card__radio-dot {
        background: Canvas;
      }
    }
  `;let k=O;u([p({type:String,reflect:!0})],k.prototype,"value");u([p({type:String})],k.prototype,"label");u([p({type:Boolean,reflect:!0})],k.prototype,"checked");u([p({type:Boolean,reflect:!0})],k.prototype,"disabled");u([p({type:String,attribute:!1})],k.prototype,"_type");u([p({type:String,attribute:!1})],k.prototype,"_name");u([p({type:String,attribute:!1})],k.prototype,"_theme");customElements.get("ag-selection-card")||customElements.define("ag-selection-card",k);const N=["value","label",".checked",".disabled"],M=C({__name:"VueSelectionCard",props:{value:{default:""},label:{default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(d){return(e,a)=>(y(),v("ag-selection-card",B({value:d.value,label:d.label,".checked":d.checked,".disabled":d.disabled},e.$attrs),[E(e.$slots,"default")],48,N))}}),I=C({name:"SelectionCardGroupExamples",components:{VueSelectionCardGroup:G,VueSelectionCard:M},methods:{handleChange(d){console.log("Selection changed:",d)}}}),W={style:{display:"flex","flex-direction":"column",gap:"1.5rem"},class:"mbe4"};function L(d,e,a,o,l,r){const n=f("VueSelectionCard"),c=f("VueSelectionCardGroup");return y(),v("section",null,[e[31]||(e[31]=i("div",{class:"mbe4"},[i("h2",null,"Radio Selection (Single)"),i("p",{class:"mbs2 mbe3"},"Select one option from a group of cards")],-1)),t(c,{type:"radio",name:"interests",legend:"Select your primary interest",class:"mbe4",onSelectionChange:d.handleChange},{default:s(()=>[t(n,{value:"tech",label:"Technology"},{default:s(()=>[...e[0]||(e[0]=[i("div",{style:{"text-align":"center",padding:"1rem"}},[i("div",{style:{"font-size":"2rem"}},"💻"),i("div",{style:{"font-weight":"600"}},"Technology")],-1)])]),_:1}),t(n,{value:"art",label:"Art & Design"},{default:s(()=>[...e[1]||(e[1]=[i("div",{style:{"text-align":"center",padding:"1rem"}},[i("div",{style:{"font-size":"2rem"}},"🎨"),i("div",{style:{"font-weight":"600"}},"Art & Design")],-1)])]),_:1}),t(n,{value:"music",label:"Music"},{default:s(()=>[...e[2]||(e[2]=[i("div",{style:{"text-align":"center",padding:"1rem"}},[i("div",{style:{"font-size":"2rem"}},"🎵"),i("div",{style:{"font-weight":"600"}},"Music")],-1)])]),_:1})]),_:1},8,["onSelectionChange"]),e[32]||(e[32]=i("div",{class:"mbe4"},[i("h2",null,"Checkbox Selection (Multiple)"),i("p",{class:"mbs2 mbe3"},"Select multiple options from a group of cards")],-1)),t(c,{type:"checkbox",name:"features",legend:"Select features to enable",class:"mbe4",onSelectionChange:d.handleChange},{default:s(()=>[t(n,{value:"analytics",label:"Analytics"},{default:s(()=>[...e[3]||(e[3]=[i("div",{style:{"text-align":"center",padding:"1rem"}},[i("div",{style:{"font-size":"2rem"}},"📊"),i("div",{style:{"font-weight":"600"}},"Analytics"),i("div",{style:{"font-size":"0.875rem",color:"#666"}},"Track user behavior")],-1)])]),_:1}),t(n,{value:"notifications",label:"Notifications"},{default:s(()=>[...e[4]||(e[4]=[i("div",{style:{"text-align":"center",padding:"1rem"}},[i("div",{style:{"font-size":"2rem"}},"🔔"),i("div",{style:{"font-weight":"600"}},"Notifications"),i("div",{style:{"font-size":"0.875rem",color:"#666"}},"Push & email alerts")],-1)])]),_:1}),t(n,{value:"export",label:"Export"},{default:s(()=>[...e[5]||(e[5]=[i("div",{style:{"text-align":"center",padding:"1rem"}},[i("div",{style:{"font-size":"2rem"}},"📤"),i("div",{style:{"font-weight":"600"}},"Export"),i("div",{style:{"font-size":"0.875rem",color:"#666"}},"Download your data")],-1)])]),_:1})]),_:1},8,["onSelectionChange"]),e[33]||(e[33]=i("div",{class:"mbe4"},[i("h2",null,"Theme Variants"),i("p",{class:"mbs2 mbe3"},"Different color themes for various contexts")],-1)),i("div",W,[i("div",null,[e[8]||(e[8]=i("h3",{style:{"margin-bottom":"0.5rem","font-size":"0.875rem"}},"Default (Primary/Blue)",-1)),t(c,{type:"radio",name:"theme-default",legend:"Default theme","legend-hidden":""},{default:s(()=>[t(n,{value:"a",label:"Option A"},{default:s(()=>[...e[6]||(e[6]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option A",-1)])]),_:1}),t(n,{value:"b",label:"Option B"},{default:s(()=>[...e[7]||(e[7]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option B",-1)])]),_:1})]),_:1})]),i("div",null,[e[11]||(e[11]=i("h3",{style:{"margin-bottom":"0.5rem","font-size":"0.875rem"}},"Success",-1)),t(c,{type:"radio",name:"theme-success",legend:"Success theme","legend-hidden":"",theme:"success"},{default:s(()=>[t(n,{value:"a",label:"Option A"},{default:s(()=>[...e[9]||(e[9]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option A",-1)])]),_:1}),t(n,{value:"b",label:"Option B"},{default:s(()=>[...e[10]||(e[10]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option B",-1)])]),_:1})]),_:1})]),i("div",null,[e[14]||(e[14]=i("h3",{style:{"margin-bottom":"0.5rem","font-size":"0.875rem"}},"Warning",-1)),t(c,{type:"radio",name:"theme-warning",legend:"Warning theme","legend-hidden":"",theme:"warning"},{default:s(()=>[t(n,{value:"a",label:"Option A"},{default:s(()=>[...e[12]||(e[12]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option A",-1)])]),_:1}),t(n,{value:"b",label:"Option B"},{default:s(()=>[...e[13]||(e[13]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option B",-1)])]),_:1})]),_:1})]),i("div",null,[e[17]||(e[17]=i("h3",{style:{"margin-bottom":"0.5rem","font-size":"0.875rem"}},"Error",-1)),t(c,{type:"radio",name:"theme-error",legend:"Error theme","legend-hidden":"",theme:"error"},{default:s(()=>[t(n,{value:"a",label:"Option A"},{default:s(()=>[...e[15]||(e[15]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option A",-1)])]),_:1}),t(n,{value:"b",label:"Option B"},{default:s(()=>[...e[16]||(e[16]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option B",-1)])]),_:1})]),_:1})]),i("div",null,[e[20]||(e[20]=i("h3",{style:{"margin-bottom":"0.5rem","font-size":"0.875rem"}},"Monochrome",-1)),t(c,{type:"radio",name:"theme-mono",legend:"Monochrome theme","legend-hidden":"",theme:"monochrome"},{default:s(()=>[t(n,{value:"a",label:"Option A"},{default:s(()=>[...e[18]||(e[18]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option A",-1)])]),_:1}),t(n,{value:"b",label:"Option B"},{default:s(()=>[...e[19]||(e[19]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option B",-1)])]),_:1})]),_:1})])]),e[34]||(e[34]=i("div",{class:"mbe4"},[i("h2",null,"Disabled State"),i("p",{class:"mbs2 mbe3"},"Entire group can be disabled")],-1)),t(c,{type:"radio",name:"disabled-example",legend:"Disabled group",disabled:!0,class:"mbe4"},{default:s(()=>[t(n,{value:"a",label:"Option A"},{default:s(()=>[...e[21]||(e[21]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option A",-1)])]),_:1}),t(n,{value:"b",label:"Option B"},{default:s(()=>[...e[22]||(e[22]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option B",-1)])]),_:1})]),_:1}),e[35]||(e[35]=i("div",{class:"mbe4"},[i("h2",null,"Disabled Individual Card State"),i("p",{class:"mbs2 mbe3"},"Individual cards can be disabled while others remain interactive")],-1)),t(c,{type:"radio",name:"disabled-individual-example",legend:"Disabled individual cards",class:"mbe4"},{default:s(()=>[t(n,{value:"a",label:"Option A"},{default:s(()=>[...e[23]||(e[23]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option A",-1)])]),_:1}),t(n,{disabled:"",value:"b",label:"Option B"},{default:s(()=>[...e[24]||(e[24]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option B",-1)])]),_:1}),t(n,{value:"c",label:"Option C"},{default:s(()=>[...e[25]||(e[25]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option C",-1)])]),_:1}),t(n,{disabled:"",value:"d",label:"Option D"},{default:s(()=>[...e[26]||(e[26]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option D",-1)])]),_:1}),t(n,{value:"e",label:"Option E"},{default:s(()=>[...e[27]||(e[27]=[i("div",{style:{padding:"1rem","text-align":"center"}},"Option E",-1)])]),_:1})]),_:1}),e[36]||(e[36]=i("div",{class:"mbe4"},[i("h2",null,"Pricing Tiers Example"),i("p",{class:"mbs2 mbe3"},"Common use case for plan selection")],-1)),t(c,{type:"radio",name:"pricing",legend:"Choose your plan",class:"mbe4",onSelectionChange:d.handleChange},{default:s(()=>[t(n,{value:"free",label:"Free Plan"},{default:s(()=>[...e[28]||(e[28]=[i("div",{style:{padding:"1rem","text-align":"center"}},[i("div",{style:{"font-size":"1.5rem","font-weight":"700"}},"Free"),i("div",{style:{"font-size":"2rem","font-weight":"700",margin:"0.5rem 0"}},"$0"),i("div",{style:{color:"#666","font-size":"0.875rem"}},"Perfect for getting started")],-1)])]),_:1}),t(n,{value:"pro",label:"Pro Plan"},{default:s(()=>[...e[29]||(e[29]=[i("div",{style:{padding:"1rem","text-align":"center"}},[i("div",{style:{"font-size":"1.5rem","font-weight":"700"}},"Pro"),i("div",{style:{"font-size":"2rem","font-weight":"700",margin:"0.5rem 0"}},"$29"),i("div",{style:{color:"#666","font-size":"0.875rem"}},"For growing teams")],-1)])]),_:1}),t(n,{value:"premium",label:"Premium Plan"},{default:s(()=>[...e[30]||(e[30]=[i("div",{style:{padding:"1rem","text-align":"center"}},[i("div",{style:{"font-size":"1.5rem","font-weight":"700"}},"Premium"),i("div",{style:{"font-size":"1.5rem","font-weight":"700",margin:"0.5rem 0"}},"Custom"),i("div",{style:{color:"#666","font-size":"0.875rem"}},"For large organizations")],-1)])]),_:1})]),_:1},8,["onSelectionChange"])])}const H=_(I,[["render",L]]);class j extends b{createRenderRoot(){return this}handleChange(e){console.log("Selection changed:",e.detail)}render(){return m`
      <section>
        <!-- Radio Selection -->
        <div class="mbe4">
          <h2>Radio Selection (Single)</h2>
          <p class="mbs2 mbe3">Select one option from a group of cards</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="interests"
          legend="Select your primary interest"
          class="mbe4"
          @selection-change=${this.handleChange}
        >
          <ag-selection-card value="tech" label="Technology">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">💻</div>
              <div style="font-weight: 600;">Technology</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="art" label="Art & Design">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🎨</div>
              <div style="font-weight: 600;">Art & Design</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="music" label="Music">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🎵</div>
              <div style="font-weight: 600;">Music</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Checkbox Selection -->
        <div class="mbe4">
          <h2>Checkbox Selection (Multiple)</h2>
          <p class="mbs2 mbe3">Select multiple options from a group of cards</p>
        </div>
        <ag-selection-card-group
          type="checkbox"
          name="features"
          legend="Select features to enable"
          class="mbe4"
          @selection-change=${this.handleChange}
        >
          <ag-selection-card value="analytics" label="Analytics">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">📊</div>
              <div style="font-weight: 600;">Analytics</div>
              <div style="font-size: 0.875rem; color: #666;">Track user behavior</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="notifications" label="Notifications">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🔔</div>
              <div style="font-weight: 600;">Notifications</div>
              <div style="font-size: 0.875rem; color: #666;">Push & email alerts</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="export" label="Export">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">📤</div>
              <div style="font-weight: 600;">Export</div>
              <div style="font-size: 0.875rem; color: #666;">Download your data</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Theme Variants -->
        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Different color themes for various contexts</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;" class="mbe4">
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Default (Primary/Blue)</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-default"
              legend="Default theme"
              legend-hidden
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Success</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-success"
              legend="Success theme"
              legend-hidden
              theme="success"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Warning</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-warning"
              legend="Warning theme"
              legend-hidden
              theme="warning"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Error</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-error"
              legend="Error theme"
              legend-hidden
              theme="error"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Monochrome</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-mono"
              legend="Monochrome theme"
              legend-hidden
              theme="monochrome"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Entire group can be disabled</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="disabled-example"
          legend="Disabled group"
          disabled
          class="mbe4"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Disabled Individual Card State -->
        <div class="mbe4">
          <h2>Disabled Individual Card State</h2>
          <p class="mbs2 mbe3">Individual cards can be disabled while others remain interactive</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="disabled-individual-example"
          legend="Disabled individual cards"
          class="mbe4"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card disabled value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
          <ag-selection-card value="c" label="Option C">
            <div style="padding: 1rem; text-align: center;">Option C</div>
          </ag-selection-card>
          <ag-selection-card disabled value="d" label="Option D">
            <div style="padding: 1rem; text-align: center;">Option D</div>
          </ag-selection-card>
          <ag-selection-card value="e" label="Option E">
            <div style="padding: 1rem; text-align: center;">Option E</div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Pricing Tiers Example -->
        <div class="mbe4">
          <h2>Pricing Tiers Example</h2>
          <p class="mbs2 mbe3">Common use case for plan selection</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="pricing"
          legend="Choose your plan"
          class="mbe4"
          @selection-change=${this.handleChange}
        >
          <ag-selection-card value="free" label="Free Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Free</div>
              <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$0</div>
              <div style="color: #666; font-size: 0.875rem;">Perfect for getting started</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="pro" label="Pro Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Pro</div>
              <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$29</div>
              <div style="color: #666; font-size: 0.875rem;">For growing teams</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="premium" label="Premium Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Premium</div>
              <div style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">Custom</div>
              <div style="color: #666; font-size: 0.875rem;">For large organizations</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>
      </section>
    `}}customElements.define("selection-card-group-lit-examples",j);const w=document.createElement("style");w.textContent=`
  @media (max-width: 640px) {
    ag-selection-card-group::part(ag-selection-card-group-content) {
      grid-template-columns: 1fr;
    }
  }
`;document.head.appendChild(w);const K=`<template>
  <section>
    <div class="mbe4">
      <h2>Radio Selection (Single)</h2>
      <p class="mbs2 mbe3">Select one option from a group of cards</p>
    </div>
    <VueSelectionCardGroup
      type="radio"
      name="interests"
      legend="Select your primary interest"
      class="mbe4"
      @selection-change="handleChange"
    >
      <VueSelectionCard value="tech" label="Technology">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">💻</div>
          <div style="font-weight: 600;">Technology</div>
        </div>
      </VueSelectionCard>
      <VueSelectionCard value="art" label="Art & Design">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">🎨</div>
          <div style="font-weight: 600;">Art & Design</div>
        </div>
      </VueSelectionCard>
      <VueSelectionCard value="music" label="Music">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">🎵</div>
          <div style="font-weight: 600;">Music</div>
        </div>
      </VueSelectionCard>
    </VueSelectionCardGroup>

    <div class="mbe4">
      <h2>Checkbox Selection (Multiple)</h2>
      <p class="mbs2 mbe3">Select multiple options from a group of cards</p>
    </div>
    <VueSelectionCardGroup
      type="checkbox"
      name="features"
      legend="Select features to enable"
      class="mbe4"
      @selection-change="handleChange"
    >
      <VueSelectionCard value="analytics" label="Analytics">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">📊</div>
          <div style="font-weight: 600;">Analytics</div>
          <div style="font-size: 0.875rem; color: #666;">Track user behavior</div>
        </div>
      </VueSelectionCard>
      <VueSelectionCard value="notifications" label="Notifications">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">🔔</div>
          <div style="font-weight: 600;">Notifications</div>
          <div style="font-size: 0.875rem; color: #666;">Push & email alerts</div>
        </div>
      </VueSelectionCard>
      <VueSelectionCard value="export" label="Export">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">📤</div>
          <div style="font-weight: 600;">Export</div>
          <div style="font-size: 0.875rem; color: #666;">Download your data</div>
        </div>
      </VueSelectionCard>
    </VueSelectionCardGroup>

    <div class="mbe4">
      <h2>Theme Variants</h2>
      <p class="mbs2 mbe3">Different color themes for various contexts</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 1.5rem;" class="mbe4">
      <div>
        <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Default (Primary/Blue)</h3>
        <VueSelectionCardGroup
          type="radio"
          name="theme-default"
          legend="Default theme"
          legend-hidden
        >
          <VueSelectionCard value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </VueSelectionCard>
          <VueSelectionCard value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </VueSelectionCard>
        </VueSelectionCardGroup>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Success</h3>
        <VueSelectionCardGroup
          type="radio"
          name="theme-success"
          legend="Success theme"
          legend-hidden
          theme="success"
        >
          <VueSelectionCard value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </VueSelectionCard>
          <VueSelectionCard value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </VueSelectionCard>
        </VueSelectionCardGroup>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Warning</h3>
        <VueSelectionCardGroup
          type="radio"
          name="theme-warning"
          legend="Warning theme"
          legend-hidden
          theme="warning"
        >
          <VueSelectionCard value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </VueSelectionCard>
          <VueSelectionCard value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </VueSelectionCard>
        </VueSelectionCardGroup>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Error</h3>
        <VueSelectionCardGroup
          type="radio"
          name="theme-error"
          legend="Error theme"
          legend-hidden
          theme="error"
        >
          <VueSelectionCard value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </VueSelectionCard>
          <VueSelectionCard value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </VueSelectionCard>
        </VueSelectionCardGroup>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Monochrome</h3>
        <VueSelectionCardGroup
          type="radio"
          name="theme-mono"
          legend="Monochrome theme"
          legend-hidden
          theme="monochrome"
        >
          <VueSelectionCard value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </VueSelectionCard>
          <VueSelectionCard value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </VueSelectionCard>
        </VueSelectionCardGroup>
      </div>
    </div>

    <div class="mbe4">
      <h2>Disabled State</h2>
      <p class="mbs2 mbe3">Entire group can be disabled</p>
    </div>
    <VueSelectionCardGroup
      type="radio"
      name="disabled-example"
      legend="Disabled group"
      :disabled="true"
      class="mbe4"
    >
      <VueSelectionCard value="a" label="Option A">
        <div style="padding: 1rem; text-align: center;">Option A</div>
      </VueSelectionCard>
      <VueSelectionCard value="b" label="Option B">
        <div style="padding: 1rem; text-align: center;">Option B</div>
      </VueSelectionCard>
    </VueSelectionCardGroup>

    <div class="mbe4">
      <h2>Disabled Individual Card State</h2>
      <p class="mbs2 mbe3">Individual cards can be disabled while others remain interactive</p>
    </div>
    <VueSelectionCardGroup
      type="radio"
      name="disabled-individual-example"
      legend="Disabled individual cards"
      class="mbe4"
    >
      <VueSelectionCard value="a" label="Option A">
        <div style="padding: 1rem; text-align: center;">Option A</div>
      </VueSelectionCard>
      <VueSelectionCard disabled value="b" label="Option B">
        <div style="padding: 1rem; text-align: center;">Option B</div>
      </VueSelectionCard>
      <VueSelectionCard value="c" label="Option C">
        <div style="padding: 1rem; text-align: center;">Option C</div>
      </VueSelectionCard>
      <VueSelectionCard disabled value="d" label="Option D">
        <div style="padding: 1rem; text-align: center;">Option D</div>
      </VueSelectionCard>
      <VueSelectionCard value="e" label="Option E">
        <div style="padding: 1rem; text-align: center;">Option E</div>
      </VueSelectionCard>
    </VueSelectionCardGroup>

    <div class="mbe4">
      <h2>Pricing Tiers Example</h2>
      <p class="mbs2 mbe3">Common use case for plan selection</p>
    </div>
    <VueSelectionCardGroup
      type="radio"
      name="pricing"
      legend="Choose your plan"
      class="mbe4"
      @selection-change="handleChange"
    >
      <VueSelectionCard value="free" label="Free Plan">
        <div style="padding: 1rem; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 700;">Free</div>
          <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$0</div>
          <div style="color: #666; font-size: 0.875rem;">Perfect for getting started</div>
        </div>
      </VueSelectionCard>
      <VueSelectionCard value="pro" label="Pro Plan">
        <div style="padding: 1rem; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 700;">Pro</div>
          <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$29</div>
          <div style="color: #666; font-size: 0.875rem;">For growing teams</div>
        </div>
      </VueSelectionCard>
      <VueSelectionCard value="premium" label="Premium Plan">
        <div style="padding: 1rem; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 700;">Premium</div>
          <div style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">Custom</div>
          <div style="color: #666; font-size: 0.875rem;">For large organizations</div>
        </div>
      </VueSelectionCard>
    </VueSelectionCardGroup>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueSelectionCardGroup } from "agnosticui-core/selection-card-group/vue";
import { VueSelectionCard } from "agnosticui-core/selection-card/vue";

export default defineComponent({
  name: "SelectionCardGroupExamples",
  components: {
    VueSelectionCardGroup,
    VueSelectionCard,
  },
  methods: {
    handleChange(detail: { value: string; checked: boolean; selectedValues: string[] }) {
      console.log("Selection changed:", detail);
    },
  },
});
<\/script>

<style>
/* Responsive: stack cards on mobile */
@media (max-width: 640px) {
  ag-selection-card-group::part(ag-selection-card-group-content) {
    grid-template-columns: 1fr;
  }
}
</style>
`,U=`import { LitElement, html } from 'lit';
import 'agnosticui-core/selection-card-group';
import 'agnosticui-core/selection-card';

export class SelectionCardGroupLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleChange(e) {
    console.log('Selection changed:', e.detail);
  }

  render() {
    return html\`
      <section>
        <!-- Radio Selection -->
        <div class="mbe4">
          <h2>Radio Selection (Single)</h2>
          <p class="mbs2 mbe3">Select one option from a group of cards</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="interests"
          legend="Select your primary interest"
          class="mbe4"
          @selection-change=\${this.handleChange}
        >
          <ag-selection-card value="tech" label="Technology">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">💻</div>
              <div style="font-weight: 600;">Technology</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="art" label="Art & Design">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🎨</div>
              <div style="font-weight: 600;">Art & Design</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="music" label="Music">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🎵</div>
              <div style="font-weight: 600;">Music</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Checkbox Selection -->
        <div class="mbe4">
          <h2>Checkbox Selection (Multiple)</h2>
          <p class="mbs2 mbe3">Select multiple options from a group of cards</p>
        </div>
        <ag-selection-card-group
          type="checkbox"
          name="features"
          legend="Select features to enable"
          class="mbe4"
          @selection-change=\${this.handleChange}
        >
          <ag-selection-card value="analytics" label="Analytics">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">📊</div>
              <div style="font-weight: 600;">Analytics</div>
              <div style="font-size: 0.875rem; color: #666;">Track user behavior</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="notifications" label="Notifications">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🔔</div>
              <div style="font-weight: 600;">Notifications</div>
              <div style="font-size: 0.875rem; color: #666;">Push & email alerts</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="export" label="Export">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">📤</div>
              <div style="font-weight: 600;">Export</div>
              <div style="font-size: 0.875rem; color: #666;">Download your data</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Theme Variants -->
        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Different color themes for various contexts</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;" class="mbe4">
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Default (Primary/Blue)</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-default"
              legend="Default theme"
              legend-hidden
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Success</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-success"
              legend="Success theme"
              legend-hidden
              theme="success"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Warning</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-warning"
              legend="Warning theme"
              legend-hidden
              theme="warning"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Error</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-error"
              legend="Error theme"
              legend-hidden
              theme="error"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Monochrome</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-mono"
              legend="Monochrome theme"
              legend-hidden
              theme="monochrome"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Entire group can be disabled</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="disabled-example"
          legend="Disabled group"
          disabled
          class="mbe4"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Disabled Individual Card State -->
        <div class="mbe4">
          <h2>Disabled Individual Card State</h2>
          <p class="mbs2 mbe3">Individual cards can be disabled while others remain interactive</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="disabled-individual-example"
          legend="Disabled individual cards"
          class="mbe4"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card disabled value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
          <ag-selection-card value="c" label="Option C">
            <div style="padding: 1rem; text-align: center;">Option C</div>
          </ag-selection-card>
          <ag-selection-card disabled value="d" label="Option D">
            <div style="padding: 1rem; text-align: center;">Option D</div>
          </ag-selection-card>
          <ag-selection-card value="e" label="Option E">
            <div style="padding: 1rem; text-align: center;">Option E</div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Pricing Tiers Example -->
        <div class="mbe4">
          <h2>Pricing Tiers Example</h2>
          <p class="mbs2 mbe3">Common use case for plan selection</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="pricing"
          legend="Choose your plan"
          class="mbe4"
          @selection-change=\${this.handleChange}
        >
          <ag-selection-card value="free" label="Free Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Free</div>
              <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$0</div>
              <div style="color: #666; font-size: 0.875rem;">Perfect for getting started</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="pro" label="Pro Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Pro</div>
              <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$29</div>
              <div style="color: #666; font-size: 0.875rem;">For growing teams</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="premium" label="Premium Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Premium</div>
              <div style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">Custom</div>
              <div style="color: #666; font-size: 0.875rem;">For large organizations</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('selection-card-group-lit-examples', SelectionCardGroupLitExamples);

// Add responsive styles
const style = document.createElement('style');
style.textContent = \`
  @media (max-width: 640px) {
    ag-selection-card-group::part(ag-selection-card-group-content) {
      grid-template-columns: 1fr;
    }
  }
\`;
document.head.appendChild(style);
`,J=`import { ReactSelectionCardGroup } from "agnosticui-core/selection-card-group/react";
import { ReactSelectionCard } from "agnosticui-core/selection-card/react";

export default function SelectionCardGroupExamples() {
  const handleChange = (e) => {
    console.log("Selection changed:", e.detail);
  };

  return (
    <section>
      {/* Radio Selection */}
      <div className="mbe4">
        <h2>Radio Selection (Single)</h2>
        <p className="mbs2 mbe3">Select one option from a group of cards</p>
      </div>
      <ReactSelectionCardGroup
        type="radio"
        name="interests"
        legend="Select your primary interest"
        className="mbe4"
        onSelectionChange={handleChange}
      >
        <ReactSelectionCard value="tech" label="Technology">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>💻</div>
            <div style={{ fontWeight: 600 }}>Technology</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="art" label="Art & Design">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>🎨</div>
            <div style={{ fontWeight: 600 }}>Art & Design</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="music" label="Music">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>🎵</div>
            <div style={{ fontWeight: 600 }}>Music</div>
          </div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>

      {/* Checkbox Selection */}
      <div className="mbe4">
        <h2>Checkbox Selection (Multiple)</h2>
        <p className="mbs2 mbe3">Select multiple options from a group of cards</p>
      </div>
      <ReactSelectionCardGroup
        type="checkbox"
        name="features"
        legend="Select features to enable"
        className="mbe4"
        onSelectionChange={handleChange}
      >
        <ReactSelectionCard value="analytics" label="Analytics">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>📊</div>
            <div style={{ fontWeight: 600 }}>Analytics</div>
            <div style={{ fontSize: "0.875rem", color: "#666" }}>Track user behavior</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="notifications" label="Notifications">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>🔔</div>
            <div style={{ fontWeight: 600 }}>Notifications</div>
            <div style={{ fontSize: "0.875rem", color: "#666" }}>Push & email alerts</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="export" label="Export">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>📤</div>
            <div style={{ fontWeight: 600 }}>Export</div>
            <div style={{ fontSize: "0.875rem", color: "#666" }}>Download your data</div>
          </div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>

      {/* Theme Variants */}
      <div className="mbe4">
        <h2>Theme Variants</h2>
        <p className="mbs2 mbe3">Different color themes for various contexts</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="mbe4">
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Default (Primary/Blue)</h3>
          <ReactSelectionCardGroup
            type="radio"
            name="theme-default"
            legend="Default theme"
            legendHidden
          >
            <ReactSelectionCard value="a" label="Option A">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
            </ReactSelectionCard>
            <ReactSelectionCard value="b" label="Option B">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
            </ReactSelectionCard>
          </ReactSelectionCardGroup>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Success</h3>
          <ReactSelectionCardGroup
            type="radio"
            name="theme-success"
            legend="Success theme"
            legendHidden
            theme="success"
          >
            <ReactSelectionCard value="a" label="Option A">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
            </ReactSelectionCard>
            <ReactSelectionCard value="b" label="Option B">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
            </ReactSelectionCard>
          </ReactSelectionCardGroup>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Monochrome</h3>
          <ReactSelectionCardGroup
            type="radio"
            name="theme-mono"
            legend="Monochrome theme"
            legendHidden
            theme="monochrome"
          >
            <ReactSelectionCard value="a" label="Option A">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
            </ReactSelectionCard>
            <ReactSelectionCard value="b" label="Option B">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
            </ReactSelectionCard>
          </ReactSelectionCardGroup>
        </div>
      </div>

      {/* Disabled State */}
      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">Entire group can be disabled</p>
      </div>
      <ReactSelectionCardGroup
        type="radio"
        name="disabled-example"
        legend="Disabled group"
        disabled
        className="mbe4"
      >
        <ReactSelectionCard value="a" label="Option A">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
        </ReactSelectionCard>
        <ReactSelectionCard value="b" label="Option B">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>

      {/* Disabled Individual Card State */}
      <div className="mbe4">
        <h2>Disabled Individual Card State</h2>
        <p className="mbs2 mbe3">Individual cards can be disabled while others remain interactive</p>
      </div>
      <ReactSelectionCardGroup
        type="radio"
        name="disabled-individual-example"
        legend="Disabled individual cards"
        className="mbe4"
      >
        <ReactSelectionCard value="a" label="Option A">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
        </ReactSelectionCard>
        <ReactSelectionCard disabled value="b" label="Option B">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
        </ReactSelectionCard>
        <ReactSelectionCard value="c" label="Option C">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option C</div>
        </ReactSelectionCard>
        <ReactSelectionCard disabled value="d" label="Option D">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option D</div>
        </ReactSelectionCard>
        <ReactSelectionCard value="e" label="Option E">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option E</div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>

      {/* Pricing Tiers Example */}
      <div className="mbe4">
        <h2>Pricing Tiers Example</h2>
        <p className="mbs2 mbe3">Common use case for plan selection</p>
      </div>
      <ReactSelectionCardGroup
        type="radio"
        name="pricing"
        legend="Choose your plan"
        className="mbe4"
        onSelectionChange={handleChange}
      >
        <ReactSelectionCard value="free" label="Free Plan">
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Free</div>
            <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>$0</div>
            <div style={{ color: "#666", fontSize: "0.875rem" }}>Perfect for getting started</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="pro" label="Pro Plan">
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Pro</div>
            <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>$29</div>
            <div style={{ color: "#666", fontSize: "0.875rem" }}>For growing teams</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="premium" label="Premium Plan">
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Premium</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0.5rem 0" }}>Custom</div>
            <div style={{ color: "#666", fontSize: "0.875rem" }}>For large organizations</div>
          </div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>
    </section>
  );
}
`,de=JSON.parse('{"title":"SelectionCardGroup","description":"","frontmatter":{},"headers":[],"relativePath":"components/selection-card-group.md","filePath":"components/selection-card-group.md"}'),Y={name:"components/selection-card-group.md"},re=Object.assign(Y,{setup(d){return(e,a)=>(y(),v("div",null,[a[1]||(a[1]=i("h1",{id:"selectioncardgroup",tabindex:"-1"},[S("SelectionCardGroup "),i("a",{class:"header-anchor",href:"#selectioncardgroup","aria-label":'Permalink to "SelectionCardGroup"'},"​")],-1)),t(z),a[2]||(a[2]=i("p",null,"A card-based selection UI for single (radio) or multiple (checkbox) selection. Ideal for onboarding flows, preferences, pricing tiers, and feature opt-ins.",-1)),a[3]||(a[3]=i("h2",{id:"examples",tabindex:"-1"},[S("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(R,{component:"selection-card-group","vue-code":F(K),"lit-code":F(U),"react-code":F(J)},{vue:s(()=>[t(H)]),lit:s(()=>[...a[0]||(a[0]=[i("selection-card-group-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=q("",30))]))}});export{de as __pageData,re as default};
