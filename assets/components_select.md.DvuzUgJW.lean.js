var R=Object.defineProperty;var A=(o,t,n)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var x=(o,t,n)=>A(o,typeof t!="symbol"?t+"":t,n);import{A as L}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as N,z as c,a as O,x as h}from"./chunks/Button.DkmThuAs.js";import{f as z}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{a as T,t as w,i as $,u as D}from"./chunks/form-control-utils.oxcP5Ntc.js";import{s as V}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as E,c as m,o as g,r as q,K as M,p as S,_ as U,C as G,j as e,G as s,w as r,a as l,e as f,t as k,F as I,B as _,ae as W,k as F}from"./chunks/framework.NAAYCHZu.js";import{F as H}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var j=Object.defineProperty,d=(o,t,n,v)=>{for(var i=void 0,u=o.length-1,a;u>=0;u--)(a=o[u])&&(i=a(t,n,i)||i);return i&&j(t,n,i),i};const B=class extends O{constructor(){super(...arguments),this.size="",this.multiple=!1,this.disabled=!1,this.name="",this.label="",this.labelPosition="top",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}firstUpdated(){var n;this.handleSlotChange();const t=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");t&&t.addEventListener("slotchange",()=>this.handleSlotChange())}handleSlotChange(){var n;if(!this.selectElement)return;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");t&&t.assignedNodes().forEach(v=>{if(v.nodeType===Node.ELEMENT_NODE){const i=v;(i.tagName==="OPTION"||i.tagName==="OPTGROUP")&&this.selectElement.appendChild(v)}})}handleClick(t){this.onClick&&this.onClick(t)}handleFocus(t){this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0})),this.onFocus&&this.onFocus(t)}handleBlur(t){this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0})),this.onBlur&&this.onBlur(t)}handleChange(t){const n=t.target;let v;this.multiple?v=Array.from(n.selectedOptions).map(u=>u.value):v=n.value;const i=new CustomEvent("change",{detail:{value:v},bubbles:!0,composed:!0});this.dispatchEvent(i),this.onChange&&this.onChange(i)}renderLabel(t){if(!this.label||this.noLabel)return"";const n=[];return w(this.labelPosition)?(n.push("ag-form-control__label--horizontal"),n.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&n.push(`ag-form-control__label--${this.labelPosition}`),h`
      <label
        for=${t.inputId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${n.join(" ")}"
      >
        ${this.label}
      </label>
    `}render(){const t=$("select"),n=D({helperId:t.helperId,errorId:t.errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),v=w(this.labelPosition),i=h`
      <select
        id=${t.inputId}
        class="select"
        part="ag-select"
        ?multiple=${this.multiple}
        ?disabled=${this.disabled}
        ?required=${this.required}
        .name=${this.name}
        .size=${this.multipleSize??(this.multiple?4:1)}
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @change=${this.handleChange}
        aria-disabled=${this.disabled?"true":"false"}
        aria-invalid=${this.invalid?"true":"false"}
        aria-describedby=${n||void 0}
      ></select>
      <slot></slot>
    `,u=this.helpText&&!this.invalid?h`<div id=${t.helperId} class="ag-form-control__helper">
          ${this.helpText}
        </div>`:"",a=this.invalid&&this.errorMessage?h`<div id=${t.errorId} class="ag-form-control__error">
          ${this.errorMessage}
        </div>`:"";return v?h`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel(t)}
          ${i}
        </div>
        ${u}
        ${a}
      `:this.labelPosition==="bottom"?h`
        ${i}
        ${u}
        ${a}
        ${this.renderLabel(t)}
      `:h`
      ${this.renderLabel(t)}
      ${i}
      ${u}
      ${a}
    `}};B.styles=[T,N`
      :host {
        display: block;
        width: 100%;
      }

      /* Hide the slot since options are moved into select */
      slot {
        display: none;
      }

      .select {
      display: block;
      width: 100%;
      /* Remove default browser styling */
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      /* Base styling */
      padding: var(--ag-space-2) var(--ag-space-8) var(--ag-space-2) var(--ag-space-3);
      -moz-padding-start: calc(var(--ag-space-3) - 3px);
      font-size: var(--ag-font-size-base);
      font-weight: 400;
      line-height: 1.5;
      font-family: inherit;
      color: var(--ag-text-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      background-color: var(--ag-background-primary);
      transition:
        border-color var(--ag-transition-fast) ease-in-out,
        box-shadow var(--ag-transition-fast) ease-in-out;
    }

    /* Custom dropdown arrow for single select */
    .select:not([multiple]) {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right var(--ag-space-3) center;
      background-size: var(--ag-font-size-base) var(--ag-space-3);
    }

    /* Focus state */
    .select:focus {
      border-color: var(--ag-focus-ring-color);
      box-shadow: 0 0 0 var(--ag-focus-ring-outline-width) var(--ag-focus-ring-color);
      /* Needed for High Contrast mode */
      outline:
        var(--ag-focus-ring-outline-width) var(--ag-focus-ring-outline-style)
        var(--ag-focus-ring-outline-color);
      transition: box-shadow var(--ag-transition-fast) ease-out;
    }

    /* Disabled state */
    .select:disabled {
      background-color: var(--ag-disabled-bg);
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* Firefox focusring fix */
    .select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 var(--ag-text-primary);
    }

    /* Small size variant */
    :host([size="small"]) .select {
      padding-block-start: var(--ag-space-1);
      padding-block-end: var(--ag-space-1);
      padding-inline-start: var(--ag-space-2);
      font-size: var(--ag-font-size-small);
    }

    /* Large size variant */
    :host([size="large"]) .select {
      padding-block-start: var(--ag-space-2);
      padding-block-end: var(--ag-space-2);
      padding-inline-start: var(--ag-space-4);
      font-size: var(--ag-font-size-large);
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion), (update: slow) {
      .select,
      .select:focus {
        transition: none;
      }
    }
  `];let p=B;d([c({type:String,reflect:!0})],p.prototype,"size");d([c({type:Boolean,reflect:!0})],p.prototype,"multiple");d([c({type:Boolean,reflect:!0})],p.prototype,"disabled");d([c({type:String})],p.prototype,"name");d([c({type:Number,attribute:"multiple-size"})],p.prototype,"multipleSize");d([c({type:String})],p.prototype,"label");d([c({type:String,attribute:"label-position"})],p.prototype,"labelPosition");d([c({type:Boolean,attribute:"label-hidden"})],p.prototype,"labelHidden");d([c({type:Boolean,attribute:"no-label"})],p.prototype,"noLabel");d([c({type:Boolean})],p.prototype,"required");d([c({type:Boolean})],p.prototype,"invalid");d([c({type:String,attribute:"error-message"})],p.prototype,"errorMessage");d([c({type:String,attribute:"help-text"})],p.prototype,"helpText");d([c({attribute:!1})],p.prototype,"onClick");d([c({attribute:!1})],p.prototype,"onFocus");d([c({attribute:!1})],p.prototype,"onBlur");d([c({attribute:!1})],p.prototype,"onChange");d([z("select")],p.prototype,"selectElement");customElements.get("ag-select")||customElements.define("ag-select",p);customElements.get("ag-select")||customElements.define("ag-select",p);const K=E({name:"VueSelect",props:{size:{type:String,default:""},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:""},multipleSize:{type:Number,default:void 0},value:{type:[String,Array],default:void 0},label:{type:String,default:""},labelPosition:{type:String,default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{type:String,default:""},helpText:{type:String,default:""}},emits:{change:o=>!0,"update:value":o=>!0,focus:o=>!0,blur:o=>!0,click:o=>!0,keydown:o=>!0,keyup:o=>!0},setup(o,{emit:t}){return{agComponent:S(null),handleChange:n=>{t("change",n.detail),t("update:value",n.detail.value)},handleFocus:n=>{t("focus",n)},handleBlur:n=>{t("blur",n)},handleClick:n=>{t("click",n)},handleKeydown:n=>{t("keydown",n)},handleKeyup:n=>{t("keyup",n)}}}}),Y=[".size",".multiple",".disabled",".name",".multipleSize",".label",".labelPosition",".labelHidden",".noLabel",".required",".invalid",".errorMessage",".helpText"];function J(o,t,n,v,i,u){return g(),m("ag-select",M({ref:"agComponent",".size":o.size,".multiple":o.multiple,".disabled":o.disabled,".name":o.name,".multipleSize":o.multipleSize,".label":o.label,".labelPosition":o.labelPosition,".labelHidden":o.labelHidden,".noLabel":o.noLabel,".required":o.required,".invalid":o.invalid,".errorMessage":o.errorMessage,".helpText":o.helpText,onChange:t[0]||(t[0]=(...a)=>o.handleChange&&o.handleChange(...a)),onFocus:t[1]||(t[1]=(...a)=>o.handleFocus&&o.handleFocus(...a)),onBlur:t[2]||(t[2]=(...a)=>o.handleBlur&&o.handleBlur(...a)),onClick:t[3]||(t[3]=(...a)=>o.handleClick&&o.handleClick(...a)),onKeydown:t[4]||(t[4]=(...a)=>o.handleKeydown&&o.handleKeydown(...a)),onKeyup:t[5]||(t[5]=(...a)=>o.handleKeyup&&o.handleKeyup(...a))},o.$attrs),[q(o.$slots,"default")],48,Y)}const X=V(K,[["render",J]]),Q=E({name:"SelectExamples",components:{VueSelect:X},setup(){const o=S(""),t=y=>{o.value=y.value},n=S(""),v=S([]),i=S([]),u=y=>{i.value.unshift(y),i.value.length>8&&i.value.pop()};return{selectedFruit:o,handleChange:t,selectedColor:n,selectedSports:v,eventLog:i,handleEventChange:y=>{u(`@change - value: ${y.value}`)},handleFocus:()=>{u("@focus")},handleBlur:()=>{u("@blur")},handleClick:()=>{u("@click")}}}}),Z={class:"mbe4",style:{"max-width":"400px"}},ee={class:"mbe4",style:{"max-width":"400px"}},te={class:"mbe3"},oe={class:"mbe3"},ne={class:"mbe3"},ae={class:"mbe4",style:{"max-width":"400px"}},ie={class:"mbe4",style:{"max-width":"400px"}},le={class:"mbe4",style:{"max-width":"400px"}},se={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},re={class:"mbe4",style:{"max-width":"400px"}},pe={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},de={class:"mbe4",style:{"max-width":"400px"}},ce={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},ue={class:"mbe4",style:{"max-width":"600px"}},ve={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},he={style:{"margin-top":"0.5rem","font-family":"monospace","font-size":"0.875rem","line-height":"1.6"}},me={class:"mbe4",style:{"max-width":"400px"}},ge={class:"mbe3"},be={class:"mbe3"},ye={class:"mbe3"},ke={class:"mbe3"},Se={class:"mbe4",style:{"max-width":"600px"}},fe={class:"mbe3"},Fe={class:"mbe3"},Ce={class:"mbe3"},xe={class:"mbe3"},we={class:"mbe4",style:{"max-width":"400px"}};function Oe(o,t,n,v,i,u){const a=G("VueSelect");return g(),m("section",null,[t[25]||(t[25]=e("div",{class:"mbe4"},[e("h2",null,"Basic Select"),e("p",{class:"mbs2 mbe3"}," A standard select dropdown with custom styling. ")],-1)),e("div",Z,[s(a,{label:"Greatest Tennis Player",name:"tennis"},{default:r(()=>[...t[2]||(t[2]=[e("option",{value:""},"- Select a player -",-1),e("option",{value:"andre"},"Andre Agassi",-1),e("option",{value:"serena"},"Serena Williams",-1),e("option",{value:"roger"},"Roger Federer",-1),e("option",{value:"mac"},"John McEnroe",-1),e("option",{value:"martina"},"Martina Navratilova",-1),e("option",{value:"rafa"},"Rafael Nadal",-1),e("option",{value:"borg"},"Bjorn Borg",-1),e("option",{value:"althea"},"Althea Gibson",-1)])]),_:1})]),t[26]||(t[26]=e("div",{class:"mbe4"},[e("h2",null,"Size Variants"),e("p",{class:"mbs2 mbe3"}," The Select component comes in three sizes: small, default, and large. ")],-1)),e("div",ee,[e("div",te,[s(a,{label:"Small Select",size:"small",name:"small"},{default:r(()=>[...t[3]||(t[3]=[e("option",{value:""},"Select an option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})]),e("div",oe,[s(a,{label:"Default Select",name:"default"},{default:r(()=>[...t[4]||(t[4]=[e("option",{value:""},"Select an option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})]),e("div",ne,[s(a,{label:"Large Select",size:"large",name:"large"},{default:r(()=>[...t[5]||(t[5]=[e("option",{value:""},"Select an option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})])]),t[27]||(t[27]=e("div",{class:"mbe4"},[e("h2",null,"Disabled State"),e("p",{class:"mbs2 mbe3"}," Selects can be disabled to prevent user interaction. ")],-1)),e("div",ae,[s(a,{label:"Disabled Select",disabled:!0,name:"disabled"},{default:r(()=>[...t[6]||(t[6]=[e("option",{value:""},"Cannot select",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})]),t[28]||(t[28]=e("div",{class:"mbe4"},[e("h2",null,"Multiple Selection"),e("p",{class:"mbs2 mbe3"},[l(" Enable multiple selection mode with the "),e("code",null,"multiple"),l(" prop. Use Ctrl/Cmd + Click to select multiple options. ")])],-1)),e("div",ie,[s(a,{label:"Favorite Tennis Players (Select Multiple)",multiple:!0,"multiple-size":6,name:"multiple"},{default:r(()=>[...t[7]||(t[7]=[e("option",{value:"andre"},"Andre Agassi",-1),e("option",{value:"serena"},"Serena Williams",-1),e("option",{value:"roger"},"Roger Federer",-1),e("option",{value:"mac"},"John McEnroe",-1),e("option",{value:"martina"},"Martina Navratilova",-1),e("option",{value:"rafa"},"Rafael Nadal",-1),e("option",{value:"borg"},"Bjorn Borg",-1),e("option",{value:"althea"},"Althea Gibson",-1)])]),_:1})]),t[29]||(t[29]=e("div",{class:"mbe4"},[e("h2",null,"With Change Handler"),e("p",{class:"mbs2 mbe3"},[l(" Listen to selection changes with the "),e("code",null,"@change"),l(" event. ")])],-1)),e("div",le,[s(a,{label:"Select a Fruit",name:"fruit",onChange:o.handleChange},{default:r(()=>[...t[8]||(t[8]=[e("option",{value:""},"Choose a fruit",-1),e("option",{value:"apple"},"Apple",-1),e("option",{value:"banana"},"Banana",-1),e("option",{value:"orange"},"Orange",-1),e("option",{value:"grape"},"Grape",-1)])]),_:1},8,["onChange"]),o.selectedFruit?(g(),m("p",se,[t[9]||(t[9]=l(" You selected: ",-1)),e("strong",null,k(o.selectedFruit),1)])):f("",!0)]),t[30]||(t[30]=e("div",{class:"mbe4"},[e("h2",null,"With v-model"),e("p",{class:"mbs2 mbe3"},[l(" Use "),e("code",null,"v-model:value"),l(" for two-way data binding. ")])],-1)),e("div",re,[s(a,{label:"Choose Your Favorite Color",name:"color",value:o.selectedColor,"onUpdate:value":t[0]||(t[0]=b=>o.selectedColor=b)},{default:r(()=>[...t[10]||(t[10]=[e("option",{value:""},"Choose a color",-1),e("option",{value:"red"},"Red",-1),e("option",{value:"blue"},"Blue",-1),e("option",{value:"green"},"Green",-1),e("option",{value:"purple"},"Purple",-1)])]),_:1},8,["value"]),o.selectedColor?(g(),m("p",pe,[t[11]||(t[11]=l(" Your favorite color is: ",-1)),e("strong",null,k(o.selectedColor),1)])):f("",!0)]),t[31]||(t[31]=e("div",{class:"mbe4"},[e("h2",null,"Multiple Selection with v-model"),e("p",{class:"mbs2 mbe3"},[l(" Use "),e("code",null,"v-model:value"),l(" with "),e("code",null,"multiple"),l(" to manage an array of selected values. ")])],-1)),e("div",de,[s(a,{label:"Select Your Favorite Sports (Ctrl/Cmd + Click)",name:"sports",value:o.selectedSports,"onUpdate:value":t[1]||(t[1]=b=>o.selectedSports=b),multiple:!0,"multiple-size":5},{default:r(()=>[...t[12]||(t[12]=[e("option",{value:"tennis"},"Tennis",-1),e("option",{value:"football"},"Football",-1),e("option",{value:"basketball"},"Basketball",-1),e("option",{value:"baseball"},"Baseball",-1),e("option",{value:"soccer"},"Soccer",-1)])]),_:1},8,["value"]),o.selectedSports.length>0?(g(),m("p",ce,[t[13]||(t[13]=l(" You selected ",-1)),e("strong",null,k(o.selectedSports.length),1),l(" sport(s): "+k(o.selectedSports.join(", ")),1)])):f("",!0)]),t[32]||(t[32]=e("div",{class:"mbe4"},[e("h2",null,"Event Handling"),e("p",{class:"mbs2 mbe3"},[l(" The Select component fires multiple events: "),e("code",null,"@change"),l(", "),e("code",null,"@focus"),l(", "),e("code",null,"@blur"),l(", and "),e("code",null,"@click"),l(". ")])],-1)),e("div",ue,[s(a,{label:"Interact with this select to see events",name:"events",onChange:o.handleEventChange,onFocus:o.handleFocus,onBlur:o.handleBlur,onClick:o.handleClick},{default:r(()=>[...t[14]||(t[14]=[e("option",{value:""},"Select an option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1},8,["onChange","onFocus","onBlur","onClick"]),o.eventLog.length>0?(g(),m("div",ve,[t[15]||(t[15]=e("strong",null,"Event Log (most recent first):",-1)),e("div",he,[(g(!0),m(I,null,_(o.eventLog,(b,C)=>(g(),m("div",{key:C},k(b),1))),128))])])):f("",!0)]),t[33]||(t[33]=e("div",{class:"mbe4"},[e("h2",null,"External Label Support"),e("p",{class:"mbs2 mbe3"}," The Select component supports external labels with helper text, required fields, and validation states. ")],-1)),e("div",me,[e("div",ge,[s(a,{label:"Favorite Framework",name:"framework"},{default:r(()=>[...t[16]||(t[16]=[e("option",{value:""},"Choose a framework",-1),e("option",{value:"react"},"React",-1),e("option",{value:"vue"},"Vue",-1),e("option",{value:"angular"},"Angular",-1),e("option",{value:"svelte"},"Svelte",-1)])]),_:1})]),e("div",be,[s(a,{label:"Country","help-text":"Select your country of residence",name:"country"},{default:r(()=>[...t[17]||(t[17]=[e("option",{value:""},"Select a country",-1),e("option",{value:"us"},"United States",-1),e("option",{value:"uk"},"United Kingdom",-1),e("option",{value:"ca"},"Canada",-1),e("option",{value:"au"},"Australia",-1)])]),_:1})]),e("div",ye,[s(a,{label:"Preferred Language",required:!0,"help-text":"This field is required",name:"language"},{default:r(()=>[...t[18]||(t[18]=[e("option",{value:""},"Select a language",-1),e("option",{value:"en"},"English",-1),e("option",{value:"es"},"Spanish",-1),e("option",{value:"fr"},"French",-1),e("option",{value:"de"},"German",-1)])]),_:1})]),e("div",ke,[s(a,{label:"Payment Method",required:!0,invalid:!0,"error-message":"Please select a payment method to continue",name:"payment"},{default:r(()=>[...t[19]||(t[19]=[e("option",{value:""},"Select payment method",-1),e("option",{value:"credit"},"Credit Card",-1),e("option",{value:"debit"},"Debit Card",-1),e("option",{value:"paypal"},"PayPal",-1)])]),_:1})])]),t[34]||(t[34]=e("div",{class:"mbe4"},[e("h2",null,"Label Positioning"),e("p",{class:"mbs2 mbe3"},[l(" Control label position with "),e("code",null,"label-position"),l(": 'top' (default), 'start', 'end', or 'bottom'. "),e("strong",null,"Note:"),l(" 'bottom' is not recommended as the dropdown will cover the label. ")])],-1)),e("div",Se,[e("div",fe,[s(a,{label:"Top Label (Default)","label-position":"top",name:"pos-top"},{default:r(()=>[...t[20]||(t[20]=[e("option",{value:""},"Select option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})]),e("div",Fe,[s(a,{label:"Start Position","label-position":"start",name:"pos-start"},{default:r(()=>[...t[21]||(t[21]=[e("option",{value:""},"Select option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})]),e("div",Ce,[s(a,{label:"End Position","label-position":"end",name:"pos-end"},{default:r(()=>[...t[22]||(t[22]=[e("option",{value:""},"Select option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})]),e("div",xe,[s(a,{label:"Bottom Position (Not Recommended)","label-position":"bottom",name:"pos-bottom","help-text":"The dropdown will cover this label when opened"},{default:r(()=>[...t[23]||(t[23]=[e("option",{value:""},"Select option",-1),e("option",{value:"1"},"Option 1",-1),e("option",{value:"2"},"Option 2",-1),e("option",{value:"3"},"Option 3",-1)])]),_:1})])]),t[35]||(t[35]=e("div",{class:"mbe4"},[e("h2",null,"CSS Shadow Parts Customization"),e("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the select's appearance. ")],-1)),e("div",we,[s(a,{label:"Custom Styled Select",name:"custom",class:"custom-select"},{default:r(()=>[...t[24]||(t[24]=[e("option",{value:""},"Select a color",-1),e("option",{value:"red"},"Red",-1),e("option",{value:"blue"},"Blue",-1),e("option",{value:"green"},"Green",-1),e("option",{value:"purple"},"Purple",-1)])]),_:1})])])}const Ee=U(Q,[["render",Oe],["__scopeId","data-v-4b32018a"]]);class P extends O{constructor(){super(),this.selectedFruit="",this.selectedColor="",this.selectedSports=[],this.eventLog=[]}createRenderRoot(){return this}handleChange(t){this.selectedFruit=t.detail.value}handleColorChange(t){this.selectedColor=t.detail.value}handleSportsChange(t){this.selectedSports=Array.from(t.target.shadowRoot.querySelector("select").selectedOptions,n=>n.value)}logEvent(t){this.eventLog=[t,...this.eventLog].slice(0,8),this.requestUpdate()}handleEventChange(t){this.logEvent(`@change - value: ${t.detail.value}`)}render(){return h`
      <section>
        <div class="mbe4">
          <h2>Basic Select</h2>
          <p class="mbs2 mbe3">
            A standard select dropdown with custom styling.
          </p>
        </div>
        <div class="mbe4" style="max-width: 400px;">
          <ag-select
            label="Greatest Tennis Player"
            name="tennis"
          >
            <option value="">- Select a player -</option>
            <option value="andre">Andre Agassi</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="mac">John McEnroe</option>
            <option value="martina">Martina Navratilova</option>
            <option value="rafa">Rafael Nadal</option>
            <option value="borg">Bjorn Borg</option>
            <option value="althea">Althea Gibson</option>
          </ag-select>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">
            The Select component comes in three sizes: small, default, and large.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <div class="mbe3">
            <ag-select
              label="Small Select"
              size="small"
              name="small"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Default Select"
              name="default"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Large Select"
              size="large"
              name="large"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">
            Selects can be disabled to prevent user interaction.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Disabled Select"
            disabled
            name="disabled"
          >
            <option value="">Cannot select</option>
            <option value="1">Option 1</option>
          </ag-select>
        </div>

        <div class="mbe4">
          <h2>Multiple Selection</h2>
          <p class="mbs2 mbe3">
            Enable multiple selection mode with the <code>multiple</code> prop. Use Ctrl/Cmd + Click to select multiple options.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Favorite Tennis Players (Select Multiple)"
            multiple
            multiple-size="6"
            name="multiple"
            @change="${this.handleSportsChange}"
          >
            <option value="andre">Andre Agassi</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="mac">John McEnroe</option>
            <option value="martina">Martina Navratilova</option>
            <option value="rafa">Rafael Nadal</option>
            <option value="borg">Bjorn Borg</option>
            <option value="althea">Althea Gibson</option>
          </ag-select>
          ${this.selectedSports.length>0?h`
            <p
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              You selected <strong>${this.selectedSports.length}</strong> sport(s): ${this.selectedSports.join(", ")}
            </p>
          `:""}
        </div>

        <div class="mbe4">
          <h2>With Change Handler</h2>
          <p class="mbs2 mbe3">
            Listen to selection changes with the <code>@change</code> event.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Select a Fruit"
            name="fruit"
            @change="${this.handleChange}"
          >
            <option value="">Choose a fruit</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </ag-select>
          ${this.selectedFruit?h`
            <p
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              You selected: <strong>${this.selectedFruit}</strong>
            </p>
          `:""}
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">
            The Select component fires multiple events: <code>@change</code>, <code>@focus</code>, <code>@blur</code>, and <code>@click</code>.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <ag-select
            label="Interact with this select to see events"
            name="events"
            @change="${this.handleEventChange}"
            @focus="${()=>this.logEvent("@focus")}"
            @blur="${()=>this.logEvent("@blur")}"
            @click="${()=>this.logEvent("@click")}"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ag-select>
          ${this.eventLog.length>0?h`
            <div
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              <strong>Event Log (most recent first):</strong>
              <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
                ${this.eventLog.map(t=>h`<div>${t}</div>`)}
              </div>
            </div>
          `:""}
        </div>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Select component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <div class="mbe3">
            <ag-select
              label="Favorite Framework"
              name="framework"
            >
              <option value="">Choose a framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Country"
              help-text="Select your country of residence"
              name="country"
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Preferred Language"
              required
              help-text="This field is required"
              name="language"
            >
              <option value="">Select a language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Payment Method"
              required
              invalid
              error-message="Please select a payment method to continue"
              name="payment"
            >
              <option value="">Select payment method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="paypal">PayPal</option>
            </ag-select>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
            <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-select
              label="Top Label (Default)"
              label-position="top"
              name="pos-top"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Start Position"
              label-position="start"
              name="pos-start"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="End Position"
              label-position="end"
              name="pos-end"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Bottom Position (Not Recommended)"
              label-position="bottom"
              name="pos-bottom"
              help-text="The dropdown will cover this label when opened"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>
        </div>
      </section>
    `}}x(P,"properties",{selectedFruit:{type:String},selectedColor:{type:String},selectedSports:{type:Array},eventLog:{type:Array}});customElements.define("select-lit-examples",P);const Be=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Select</h2>
      <p class="mbs2 mbe3">
        A standard select dropdown with custom styling.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <VueSelect
        label="Greatest Tennis Player"
        name="tennis"
      >
        <option value="">- Select a player -</option>
        <option value="andre">Andre Agassi</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="mac">John McEnroe</option>
        <option value="martina">Martina Navratilova</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="borg">Bjorn Borg</option>
        <option value="althea">Althea Gibson</option>
      </VueSelect>
    </div>

    <div class="mbe4">
      <h2>Size Variants</h2>
      <p class="mbs2 mbe3">
        The Select component comes in three sizes: small, default, and large.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <div class="mbe3">
        <VueSelect
          label="Small Select"
          size="small"
          name="small"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Default Select"
          name="default"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Large Select"
          size="large"
          name="large"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    </div>

    <div class="mbe4">
      <h2>Disabled State</h2>
      <p class="mbs2 mbe3">
        Selects can be disabled to prevent user interaction.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <VueSelect
        label="Disabled Select"
        :disabled="true"
        name="disabled"
      >
        <option value="">Cannot select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </VueSelect>
    </div>

    <div class="mbe4">
      <h2>Multiple Selection</h2>
      <p class="mbs2 mbe3">
        Enable multiple selection mode with the <code>multiple</code> prop. Use Ctrl/Cmd + Click to select multiple options.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <VueSelect
        label="Favorite Tennis Players (Select Multiple)"
        :multiple="true"
        :multiple-size="6"
        name="multiple"
      >
        <option value="andre">Andre Agassi</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="mac">John McEnroe</option>
        <option value="martina">Martina Navratilova</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="borg">Bjorn Borg</option>
        <option value="althea">Althea Gibson</option>
      </VueSelect>
    </div>

    <div class="mbe4">
      <h2>With Change Handler</h2>
      <p class="mbs2 mbe3">
        Listen to selection changes with the <code>@change</code> event.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <VueSelect
        label="Select a Fruit"
        name="fruit"
        @change="handleChange"
      >
        <option value="">Choose a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
      </VueSelect>
      <p
        v-if="selectedFruit"
        style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
      >
        You selected: <strong>{{ selectedFruit }}</strong>
      </p>
    </div>

    <div class="mbe4">
      <h2>With v-model</h2>
      <p class="mbs2 mbe3">
        Use <code>v-model:value</code> for two-way data binding.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <VueSelect
        label="Choose Your Favorite Color"
        name="color"
        v-model:value="selectedColor"
      >
        <option value="">Choose a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </VueSelect>
      <p
        v-if="selectedColor"
        style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
      >
        Your favorite color is: <strong>{{ selectedColor }}</strong>
      </p>
    </div>

    <div class="mbe4">
      <h2>Multiple Selection with v-model</h2>
      <p class="mbs2 mbe3">
        Use <code>v-model:value</code> with <code>multiple</code> to manage an array of selected values.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <VueSelect
        label="Select Your Favorite Sports (Ctrl/Cmd + Click)"
        name="sports"
        v-model:value="selectedSports"
        :multiple="true"
        :multiple-size="5"
      >
        <option value="tennis">Tennis</option>
        <option value="football">Football</option>
        <option value="basketball">Basketball</option>
        <option value="baseball">Baseball</option>
        <option value="soccer">Soccer</option>
      </VueSelect>
      <p
        v-if="selectedSports.length > 0"
        style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
      >
        You selected <strong>{{ selectedSports.length }}</strong> sport(s): {{ selectedSports.join(', ') }}
      </p>
    </div>

    <div class="mbe4">
      <h2>Event Handling</h2>
      <p class="mbs2 mbe3">
        The Select component fires multiple events: <code>@change</code>, <code>@focus</code>, <code>@blur</code>, and <code>@click</code>.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <VueSelect
        label="Interact with this select to see events"
        name="events"
        @change="handleEventChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @click="handleClick"
      >
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </VueSelect>
      <div
        v-if="eventLog.length > 0"
        style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
      >
        <strong>Event Log (most recent first):</strong>
        <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
          <div
            v-for="(event, index) in eventLog"
            :key="index"
          >{{ event }}</div>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>External Label Support</h2>
      <p class="mbs2 mbe3">
        The Select component supports external labels with helper text, required fields, and validation states.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <div class="mbe3">
        <VueSelect
          label="Favorite Framework"
          name="framework"
        >
          <option value="">Choose a framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Country"
          help-text="Select your country of residence"
          name="country"
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Preferred Language"
          :required="true"
          help-text="This field is required"
          name="language"
        >
          <option value="">Select a language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Payment Method"
          :required="true"
          :invalid="true"
          error-message="Please select a payment method to continue"
          name="payment"
        >
          <option value="">Select payment method</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="paypal">PayPal</option>
        </VueSelect>
      </div>
    </div>

    <div class="mbe4">
      <h2>Label Positioning</h2>
      <p class="mbs2 mbe3">
        Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
        <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <div class="mbe3">
        <VueSelect
          label="Top Label (Default)"
          label-position="top"
          name="pos-top"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Start Position"
          label-position="start"
          name="pos-start"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="End Position"
          label-position="end"
          name="pos-end"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Bottom Position (Not Recommended)"
          label-position="bottom"
          name="pos-bottom"
          help-text="The dropdown will cover this label when opened"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the select's appearance.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 400px;"
    >
      <VueSelect
        label="Custom Styled Select"
        name="custom"
        class="custom-select"
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </VueSelect>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueSelect } from "agnosticui-core/select/vue";

export default defineComponent({
  name: "SelectExamples",
  components: {
    VueSelect,
  },
  setup() {
    // Basic @change example
    const selectedFruit = ref("");

    // Vue wrapper emits detail payload directly, not full CustomEvent
    const handleChange = (detail: { value: string | string[] }) => {
      selectedFruit.value = detail.value as string;
    };

    // v-model examples
    const selectedColor = ref("");
    const selectedSports = ref<string[]>([]);

    // Event logging example
    const eventLog = ref<string[]>([]);

    const logEvent = (message: string) => {
      eventLog.value.unshift(message);
      if (eventLog.value.length > 8) eventLog.value.pop();
    };

    const handleEventChange = (detail: { value: string | string[] }) => {
      logEvent(\`@change - value: \${detail.value}\`);
    };

    const handleFocus = () => {
      logEvent("@focus");
    };

    const handleBlur = () => {
      logEvent("@blur");
    };

    const handleClick = () => {
      logEvent("@click");
    };

    return {
      selectedFruit,
      handleChange,
      selectedColor,
      selectedSports,
      eventLog,
      handleEventChange,
      handleFocus,
      handleBlur,
      handleClick,
    };
  },
});
<\/script>

<style scoped>
.custom-select::part(ag-select) {
  border: 2px solid var(--ag-primary);
  border-radius: var(--ag-radius-lg);
  font-weight: 500;
  background-color: var(--ag-background-secondary);
}

.custom-select::part(ag-select):focus {
  border-color: var(--ag-primary-dark);
  box-shadow: 0 0 0 3px var(--ag-blue-100);
}
</style>
`,Pe=`
import { LitElement, html, css } from 'lit';
import 'agnosticui-core/select';

export class SelectLitExamples extends LitElement {
  static properties = {
    selectedFruit: { type: String },
    selectedColor: { type: String },
    selectedSports: { type: Array },
    eventLog: { type: Array }
  };

  constructor() {
    super();
    this.selectedFruit = '';
    this.selectedColor = '';
    this.selectedSports = [];
    this.eventLog = [];
  }

  createRenderRoot() {
    return this;
  }

  handleChange(e) {
    this.selectedFruit = e.detail.value;
  }

  handleColorChange(e) {
    this.selectedColor = e.detail.value;
  }

  handleSportsChange(e) {
    this.selectedSports = Array.from(e.target.shadowRoot.querySelector('select').selectedOptions, option => option.value);
  }

  logEvent(message) {
    this.eventLog = [message, ...this.eventLog].slice(0, 8);
    this.requestUpdate();
  }

  handleEventChange(e) {
    this.logEvent(\`@change - value: \${e.detail.value}\`);
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Select</h2>
          <p class="mbs2 mbe3">
            A standard select dropdown with custom styling.
          </p>
        </div>
        <div class="mbe4" style="max-width: 400px;">
          <ag-select
            label="Greatest Tennis Player"
            name="tennis"
          >
            <option value="">- Select a player -</option>
            <option value="andre">Andre Agassi</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="mac">John McEnroe</option>
            <option value="martina">Martina Navratilova</option>
            <option value="rafa">Rafael Nadal</option>
            <option value="borg">Bjorn Borg</option>
            <option value="althea">Althea Gibson</option>
          </ag-select>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">
            The Select component comes in three sizes: small, default, and large.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <div class="mbe3">
            <ag-select
              label="Small Select"
              size="small"
              name="small"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Default Select"
              name="default"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Large Select"
              size="large"
              name="large"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">
            Selects can be disabled to prevent user interaction.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Disabled Select"
            disabled
            name="disabled"
          >
            <option value="">Cannot select</option>
            <option value="1">Option 1</option>
          </ag-select>
        </div>

        <div class="mbe4">
          <h2>Multiple Selection</h2>
          <p class="mbs2 mbe3">
            Enable multiple selection mode with the <code>multiple</code> prop. Use Ctrl/Cmd + Click to select multiple options.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Favorite Tennis Players (Select Multiple)"
            multiple
            multiple-size="6"
            name="multiple"
            @change="\${this.handleSportsChange}"
          >
            <option value="andre">Andre Agassi</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="mac">John McEnroe</option>
            <option value="martina">Martina Navratilova</option>
            <option value="rafa">Rafael Nadal</option>
            <option value="borg">Bjorn Borg</option>
            <option value="althea">Althea Gibson</option>
          </ag-select>
          \${this.selectedSports.length > 0 ? html\`
            <p
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              You selected <strong>\${this.selectedSports.length}</strong> sport(s): \${this.selectedSports.join(', ')}
            </p>
          \` : ''}
        </div>

        <div class="mbe4">
          <h2>With Change Handler</h2>
          <p class="mbs2 mbe3">
            Listen to selection changes with the <code>@change</code> event.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Select a Fruit"
            name="fruit"
            @change="\${this.handleChange}"
          >
            <option value="">Choose a fruit</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </ag-select>
          \${this.selectedFruit ? html\`
            <p
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              You selected: <strong>\${this.selectedFruit}</strong>
            </p>
          \` : ''}
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">
            The Select component fires multiple events: <code>@change</code>, <code>@focus</code>, <code>@blur</code>, and <code>@click</code>.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <ag-select
            label="Interact with this select to see events"
            name="events"
            @change="\${this.handleEventChange}"
            @focus="\${() => this.logEvent('@focus')}"
            @blur="\${() => this.logEvent('@blur')}"
            @click="\${() => this.logEvent('@click')}"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ag-select>
          \${this.eventLog.length > 0 ? html\`
            <div
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              <strong>Event Log (most recent first):</strong>
              <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
                \${this.eventLog.map(event => html\`<div>\${event}</div>\`)}
              </div>
            </div>
          \` : ''}
        </div>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Select component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <div class="mbe3">
            <ag-select
              label="Favorite Framework"
              name="framework"
            >
              <option value="">Choose a framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Country"
              help-text="Select your country of residence"
              name="country"
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Preferred Language"
              required
              help-text="This field is required"
              name="language"
            >
              <option value="">Select a language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Payment Method"
              required
              invalid
              error-message="Please select a payment method to continue"
              name="payment"
            >
              <option value="">Select payment method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="paypal">PayPal</option>
            </ag-select>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
            <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-select
              label="Top Label (Default)"
              label-position="top"
              name="pos-top"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Start Position"
              label-position="start"
              name="pos-start"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="End Position"
              label-position="end"
              name="pos-end"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Bottom Position (Not Recommended)"
              label-position="bottom"
              name="pos-bottom"
              help-text="The dropdown will cover this label when opened"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>
        </div>
      </section>
    \`;
  }
}

customElements.define('select-lit-examples', SelectLitExamples);
`,Re=`
import { ReactSelect } from "agnosticui-core/select/react";
import { useState } from "react";

export default function SelectReactExamples() {
  // Basic example
  const [selectedFruit, setSelectedFruit] = useState("");

  // Multiple example
  const [selectedSports, setSelectedSports] = useState([]);

  // Event logging
  const [eventLog, setEventLog] = useState([]);

  const logEvent = (message) => {
    setEventLog((prev) => [message, ...prev].slice(0, 8));
  };

  const handleEventChange = (e) => {
    logEvent(\`onChange - value: \${e.detail.value}\`);
  };

  const handleMultipleChange = (e) => {
    setSelectedSports(e.detail.value);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Select</h2>
        <p className="mbs2 mbe3">
          A standard select dropdown with custom styling.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Greatest Tennis Player"
          name="tennis"
        >
          <option value="">- Select a player -</option>
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </ReactSelect>
      </div>

      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">
          The Select component comes in three sizes: small, default, and large.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <div className="mbe3">
          <ReactSelect
            label="Small Select"
            size="small"
            name="small"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Default Select"
            name="default"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Large Select"
            size="large"
            name="large"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>
      </div>

      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">
          Selects can be disabled to prevent user interaction.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Disabled Select"
          disabled
          name="disabled"
        >
          <option value="">Cannot select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ReactSelect>
      </div>

      <div className="mbe4">
        <h2>Multiple Selection</h2>
        <p className="mbs2 mbe3">
          Enable multiple selection mode with the <code>multiple</code> prop. Use Ctrl/Cmd + Click to select multiple options.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Favorite Tennis Players (Select Multiple)"
          multiple
          multipleSize={6}
          name="multiple"
          onChange={handleMultipleChange}
        >
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </ReactSelect>
        {selectedSports.length > 0 && (
          <p style={{ marginTop: "0.75rem", padding: "0.75rem", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)" }}>
            You selected <strong>{selectedSports.length}</strong> sport(s): {selectedSports.join(', ')}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>With Change Handler</h2>
        <p className="mbs2 mbe3">
          Listen to selection changes with the <code>onChange</code> event.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Select a Fruit"
          name="fruit"
          onChange={(e) => setSelectedFruit(e.detail.value)}
        >
          <option value="">Choose a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </ReactSelect>
        {selectedFruit && (
          <p style={{ marginTop: "0.75rem", padding: "0.75rem", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)" }}>
            You selected: <strong>{selectedFruit}</strong>
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Event Handling</h2>
        <p className="mbs2 mbe3">
          The Select component fires multiple events: <code>onChange</code>, <code>onFocus</code>, <code>onBlur</code>, and <code>onClick</code>.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <ReactSelect
          label="Interact with this select to see events"
          name="events"
          onChange={handleEventChange}
          onFocus={() => logEvent("onFocus")}
          onBlur={() => logEvent("onBlur")}
          onClick={() => logEvent("onClick")}
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ReactSelect>
        {eventLog.length > 0 && (
          <div style={{ marginTop: "0.75rem", padding: "0.75rem", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)" }}>
            <strong>Event Log (most recent first):</strong>
            <div style={{ marginTop: "0.5rem", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "1.6" }}>
              {eventLog.map((event, index) => (
                <div key={index}>{event}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          The Select component supports external labels with helper text, required fields, and validation states.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <div className="mbe3">
          <ReactSelect
            label="Favorite Framework"
            name="framework"
          >
            <option value="">Choose a framework</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Country"
            helpText="Select your country of residence"
            name="country"
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Preferred Language"
            required
            helpText="This field is required"
            name="language"
          >
            <option value="">Select a language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Payment Method"
            required
            invalid
            errorMessage="Please select a payment method to continue"
            name="payment"
          >
            <option value="">Select payment method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </ReactSelect>
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>labelPosition</code>: 'top' (default), 'start', 'end', or 'bottom'.
          <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <div className="mbe3">
          <ReactSelect
            label="Top Label (Default)"
            labelPosition="top"
            name="pos-top"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Start Position"
            labelPosition="start"
            name="pos-start"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="End Position"
            labelPosition="end"
            name="pos-end"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Bottom Position (Not Recommended)"
            labelPosition="bottom"
            name="pos-bottom"
            helpText="The dropdown will cover this label when opened"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the select's appearance.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <style dangerouslySetInnerHTML={{__html: \`
          .custom-select::part(ag-select) {
            border: 2px solid var(--ag-primary);
            border-radius: var(--ag-radius-lg);
            font-weight: 500;
            background-color: var(--ag-background-secondary);
          }
          .custom-select::part(ag-select):focus {
            border-color: var(--ag-primary-dark);
            box-shadow: 0 0 0 3px var(--ag-blue-100);
          }
        \`}} />
        <ReactSelect
          label="Custom Styled Select"
          name="custom"
          className="custom-select"
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </ReactSelect>
      </div>
    </section>
  );
}
`,He=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md"}'),Ae={name:"components/select.md"},je=Object.assign(Ae,{setup(o){return(t,n)=>(g(),m("div",null,[n[1]||(n[1]=e("h1",{id:"select",tabindex:"-1"},[l("Select "),e("a",{class:"header-anchor",href:"#select","aria-label":'Permalink to "Select"'},"​")],-1)),s(L),n[2]||(n[2]=e("p",null,"The Select component is a lightly styled native HTML select element that provides consistent styling across browsers while maintaining native functionality and accessibility.",-1)),n[3]||(n[3]=e("h2",{id:"examples",tabindex:"-1"},[l("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s(H,{component:"select","vue-code":F(Be),"lit-code":F(Pe),"react-code":F(Re)},{vue:r(()=>[s(Ee)]),lit:r(()=>[...n[0]||(n[0]=[e("select-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=W("",29))]))}});export{He as __pageData,je as default};
