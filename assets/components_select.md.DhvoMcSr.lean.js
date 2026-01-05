import{A as b}from"./chunks/AlphaWarning.D199zhtu.js";import{i as f,z as r,a as S,x as c}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{f as x}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{a as P,t as m,i as w,u as R}from"./chunks/form-control-utils.B793yZMR.js";import{s as L}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as q,c as g,o as y,r as z,K as $,p as E,_ as O,C as V,j as s,G as e,w as k,a as h,e as D,t as A,F as T,B as M,ae as N}from"./chunks/framework.CdHt8f9T.js";import"./chunks/unique-id.CpwMFgRD.js";var U=Object.defineProperty,F=(a,i,t,o)=>{for(var l=void 0,d=a.length-1,n;d>=0;d--)(n=a[d])&&(l=n(i,t,l)||l);return l&&U(i,t,l),l};const v=class extends S{constructor(){super(...arguments),this.size="",this.multiple=!1,this.disabled=!1,this.name="",this.label="",this.labelPosition="top",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}firstUpdated(){var t;this.handleSlotChange();const i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");i&&i.addEventListener("slotchange",()=>this.handleSlotChange())}handleSlotChange(){var t;if(!this.selectElement)return;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");i&&i.assignedNodes().forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){const l=o;(l.tagName==="OPTION"||l.tagName==="OPTGROUP")&&this.selectElement.appendChild(o)}})}handleClick(i){this.onClick&&this.onClick(i)}handleFocus(i){this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0})),this.onFocus&&this.onFocus(i)}handleBlur(i){this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0})),this.onBlur&&this.onBlur(i)}handleChange(i){const t=i.target;let o;this.multiple?o=Array.from(t.selectedOptions).map(d=>d.value):o=t.value;const l=new CustomEvent("change",{detail:{value:o},bubbles:!0,composed:!0});this.dispatchEvent(l),this.onChange&&this.onChange(l)}renderLabel(i){if(!this.label||this.noLabel)return"";const t=[];return m(this.labelPosition)?(t.push("ag-form-control__label--horizontal"),t.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&t.push(`ag-form-control__label--${this.labelPosition}`),c`
      <label
        for=${i.inputId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${t.join(" ")}"
      >
        ${this.label}
      </label>
    `}render(){const i=w("select"),t=R({helperId:i.helperId,errorId:i.errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),o=m(this.labelPosition),l=c`
      <select
        id=${i.inputId}
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
        aria-describedby=${t||void 0}
      ></select>
      <slot></slot>
    `,d=this.helpText&&!this.invalid?c`<div id=${i.helperId} class="ag-form-control__helper">
          ${this.helpText}
        </div>`:"",n=this.invalid&&this.errorMessage?c`<div id=${i.errorId} class="ag-form-control__error">
          ${this.errorMessage}
        </div>`:"";return o?c`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel(i)}
          ${l}
        </div>
        ${d}
        ${n}
      `:this.labelPosition==="bottom"?c`
        ${l}
        ${d}
        ${n}
        ${this.renderLabel(i)}
      `:c`
      ${this.renderLabel(i)}
      ${l}
      ${d}
      ${n}
    `}};v.styles=[P,f`
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
  `];let p=v;F([r({type:String,reflect:!0})],p.prototype,"size");F([r({type:Boolean,reflect:!0})],p.prototype,"multiple");F([r({type:Boolean,reflect:!0})],p.prototype,"disabled");F([r({type:String})],p.prototype,"name");F([r({type:Number,attribute:"multiple-size"})],p.prototype,"multipleSize");F([r({type:String})],p.prototype,"label");F([r({type:String,attribute:"label-position"})],p.prototype,"labelPosition");F([r({type:Boolean,attribute:"label-hidden"})],p.prototype,"labelHidden");F([r({type:Boolean,attribute:"no-label"})],p.prototype,"noLabel");F([r({type:Boolean})],p.prototype,"required");F([r({type:Boolean})],p.prototype,"invalid");F([r({type:String,attribute:"error-message"})],p.prototype,"errorMessage");F([r({type:String,attribute:"help-text"})],p.prototype,"helpText");F([r({attribute:!1})],p.prototype,"onClick");F([r({attribute:!1})],p.prototype,"onFocus");F([r({attribute:!1})],p.prototype,"onBlur");F([r({attribute:!1})],p.prototype,"onChange");F([x("select")],p.prototype,"selectElement");customElements.get("ag-select")||customElements.define("ag-select",p);customElements.get("ag-select")||customElements.define("ag-select",p);const _=q({name:"VueSelect",props:{size:{type:String,default:""},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:""},multipleSize:{type:Number,default:void 0},value:{type:[String,Array],default:void 0},label:{type:String,default:""},labelPosition:{type:String,default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{type:String,default:""},helpText:{type:String,default:""}},emits:{change:a=>!0,"update:value":a=>!0,focus:a=>!0,blur:a=>!0,click:a=>!0,keydown:a=>!0,keyup:a=>!0},setup(a,{emit:i}){return{agComponent:E(null),handleChange:t=>{i("change",t.detail),i("update:value",t.detail.value)},handleFocus:t=>{i("focus",t)},handleBlur:t=>{i("blur",t)},handleClick:t=>{i("click",t)},handleKeydown:t=>{i("keydown",t)},handleKeyup:t=>{i("keyup",t)}}}}),I=[".size",".multiple",".disabled",".name",".multipleSize",".label",".labelPosition",".labelHidden",".noLabel",".required",".invalid",".errorMessage",".helpText"];function j(a,i,t,o,l,d){return y(),g("ag-select",$({ref:"agComponent",".size":a.size,".multiple":a.multiple,".disabled":a.disabled,".name":a.name,".multipleSize":a.multipleSize,".label":a.label,".labelPosition":a.labelPosition,".labelHidden":a.labelHidden,".noLabel":a.noLabel,".required":a.required,".invalid":a.invalid,".errorMessage":a.errorMessage,".helpText":a.helpText,onChange:i[0]||(i[0]=(...n)=>a.handleChange&&a.handleChange(...n)),onFocus:i[1]||(i[1]=(...n)=>a.handleFocus&&a.handleFocus(...n)),onBlur:i[2]||(i[2]=(...n)=>a.handleBlur&&a.handleBlur(...n)),onClick:i[3]||(i[3]=(...n)=>a.handleClick&&a.handleClick(...n)),onKeydown:i[4]||(i[4]=(...n)=>a.handleKeydown&&a.handleKeydown(...n)),onKeyup:i[5]||(i[5]=(...n)=>a.handleKeyup&&a.handleKeyup(...n))},a.$attrs),[z(a.$slots,"default")],48,I)}const H=L(_,[["render",j]]),W=q({name:"SelectExamples",components:{VueSelect:H},setup(){const a=E(""),i=C=>{a.value=C.value},t=E(""),o=E([]),l=E([]),d=C=>{l.value.unshift(C),l.value.length>8&&l.value.pop()};return{selectedFruit:a,handleChange:i,selectedColor:t,selectedSports:o,eventLog:l,handleEventChange:C=>{d(`@change - value: ${C.value}`)},handleFocus:()=>{d("@focus")},handleBlur:()=>{d("@blur")},handleClick:()=>{d("@click")}}}}),K={class:"mbe4",style:{"max-width":"400px"}},G={class:"mbe4",style:{"max-width":"400px"}},J={class:"mbe3"},Y={class:"mbe3"},Q={class:"mbe3"},Z={class:"mbe4",style:{"max-width":"400px"}},X={class:"mbe4",style:{"max-width":"400px"}},ss={class:"mbe4",style:{"max-width":"400px"}},is={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},as={class:"mbe4",style:{"max-width":"400px"}},ts={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},ns={class:"mbe4",style:{"max-width":"400px"}},ls={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},hs={class:"mbe4",style:{"max-width":"600px"}},es={key:0,style:{"margin-top":"0.75rem",padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)"}},ps={style:{"margin-top":"0.5rem","font-family":"monospace","font-size":"0.875rem","line-height":"1.6"}},ks={class:"mbe4",style:{"max-width":"400px"}},Fs={class:"mbe3"},rs={class:"mbe3"},ds={class:"mbe3"},os={class:"mbe3"},gs={class:"mbe4",style:{"max-width":"600px"}},ys={class:"mbe3"},cs={class:"mbe3"},us={class:"mbe3"},Cs={class:"mbe3"},As={class:"mbe4",style:{"max-width":"400px"}};function Es(a,i,t,o,l,d){const n=V("VueSelect");return y(),g("section",null,[i[25]||(i[25]=s("div",{class:"mbe4"},[s("h2",null,"Basic Select"),s("p",{class:"mbs2 mbe3"}," A standard select dropdown with custom styling. ")],-1)),s("div",K,[e(n,{label:"Greatest Tennis Player",name:"tennis"},{default:k(()=>[...i[2]||(i[2]=[s("option",{value:""},"- Select a player -",-1),s("option",{value:"andre"},"Andre Agassi",-1),s("option",{value:"serena"},"Serena Williams",-1),s("option",{value:"roger"},"Roger Federer",-1),s("option",{value:"mac"},"John McEnroe",-1),s("option",{value:"martina"},"Martina Navratilova",-1),s("option",{value:"rafa"},"Rafael Nadal",-1),s("option",{value:"borg"},"Bjorn Borg",-1),s("option",{value:"althea"},"Althea Gibson",-1)])]),_:1})]),i[26]||(i[26]=s("div",{class:"mbe4"},[s("h2",null,"Size Variants"),s("p",{class:"mbs2 mbe3"}," The Select component comes in three sizes: small, default, and large. ")],-1)),s("div",G,[s("div",J,[e(n,{label:"Small Select",size:"small",name:"small"},{default:k(()=>[...i[3]||(i[3]=[s("option",{value:""},"Select an option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})]),s("div",Y,[e(n,{label:"Default Select",name:"default"},{default:k(()=>[...i[4]||(i[4]=[s("option",{value:""},"Select an option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})]),s("div",Q,[e(n,{label:"Large Select",size:"large",name:"large"},{default:k(()=>[...i[5]||(i[5]=[s("option",{value:""},"Select an option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})])]),i[27]||(i[27]=s("div",{class:"mbe4"},[s("h2",null,"Disabled State"),s("p",{class:"mbs2 mbe3"}," Selects can be disabled to prevent user interaction. ")],-1)),s("div",Z,[e(n,{label:"Disabled Select",disabled:!0,name:"disabled"},{default:k(()=>[...i[6]||(i[6]=[s("option",{value:""},"Cannot select",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})]),i[28]||(i[28]=s("div",{class:"mbe4"},[s("h2",null,"Multiple Selection"),s("p",{class:"mbs2 mbe3"},[h(" Enable multiple selection mode with the "),s("code",null,"multiple"),h(" prop. Use Ctrl/Cmd + Click to select multiple options. ")])],-1)),s("div",X,[e(n,{label:"Favorite Tennis Players (Select Multiple)",multiple:!0,"multiple-size":6,name:"multiple"},{default:k(()=>[...i[7]||(i[7]=[s("option",{value:"andre"},"Andre Agassi",-1),s("option",{value:"serena"},"Serena Williams",-1),s("option",{value:"roger"},"Roger Federer",-1),s("option",{value:"mac"},"John McEnroe",-1),s("option",{value:"martina"},"Martina Navratilova",-1),s("option",{value:"rafa"},"Rafael Nadal",-1),s("option",{value:"borg"},"Bjorn Borg",-1),s("option",{value:"althea"},"Althea Gibson",-1)])]),_:1})]),i[29]||(i[29]=s("div",{class:"mbe4"},[s("h2",null,"With Change Handler"),s("p",{class:"mbs2 mbe3"},[h(" Listen to selection changes with the "),s("code",null,"@change"),h(" event. ")])],-1)),s("div",ss,[e(n,{label:"Select a Fruit",name:"fruit",onChange:a.handleChange},{default:k(()=>[...i[8]||(i[8]=[s("option",{value:""},"Choose a fruit",-1),s("option",{value:"apple"},"Apple",-1),s("option",{value:"banana"},"Banana",-1),s("option",{value:"orange"},"Orange",-1),s("option",{value:"grape"},"Grape",-1)])]),_:1},8,["onChange"]),a.selectedFruit?(y(),g("p",is,[i[9]||(i[9]=h(" You selected: ",-1)),s("strong",null,A(a.selectedFruit),1)])):D("",!0)]),i[30]||(i[30]=s("div",{class:"mbe4"},[s("h2",null,"With v-model"),s("p",{class:"mbs2 mbe3"},[h(" Use "),s("code",null,"v-model:value"),h(" for two-way data binding. ")])],-1)),s("div",as,[e(n,{label:"Choose Your Favorite Color",name:"color",value:a.selectedColor,"onUpdate:value":i[0]||(i[0]=u=>a.selectedColor=u)},{default:k(()=>[...i[10]||(i[10]=[s("option",{value:""},"Choose a color",-1),s("option",{value:"red"},"Red",-1),s("option",{value:"blue"},"Blue",-1),s("option",{value:"green"},"Green",-1),s("option",{value:"purple"},"Purple",-1)])]),_:1},8,["value"]),a.selectedColor?(y(),g("p",ts,[i[11]||(i[11]=h(" Your favorite color is: ",-1)),s("strong",null,A(a.selectedColor),1)])):D("",!0)]),i[31]||(i[31]=s("div",{class:"mbe4"},[s("h2",null,"Multiple Selection with v-model"),s("p",{class:"mbs2 mbe3"},[h(" Use "),s("code",null,"v-model:value"),h(" with "),s("code",null,"multiple"),h(" to manage an array of selected values. ")])],-1)),s("div",ns,[e(n,{label:"Select Your Favorite Sports (Ctrl/Cmd + Click)",name:"sports",value:a.selectedSports,"onUpdate:value":i[1]||(i[1]=u=>a.selectedSports=u),multiple:!0,"multiple-size":5},{default:k(()=>[...i[12]||(i[12]=[s("option",{value:"tennis"},"Tennis",-1),s("option",{value:"football"},"Football",-1),s("option",{value:"basketball"},"Basketball",-1),s("option",{value:"baseball"},"Baseball",-1),s("option",{value:"soccer"},"Soccer",-1)])]),_:1},8,["value"]),a.selectedSports.length>0?(y(),g("p",ls,[i[13]||(i[13]=h(" You selected ",-1)),s("strong",null,A(a.selectedSports.length),1),h(" sport(s): "+A(a.selectedSports.join(", ")),1)])):D("",!0)]),i[32]||(i[32]=s("div",{class:"mbe4"},[s("h2",null,"Event Handling"),s("p",{class:"mbs2 mbe3"},[h(" The Select component fires multiple events: "),s("code",null,"@change"),h(", "),s("code",null,"@focus"),h(", "),s("code",null,"@blur"),h(", and "),s("code",null,"@click"),h(". ")])],-1)),s("div",hs,[e(n,{label:"Interact with this select to see events",name:"events",onChange:a.handleEventChange,onFocus:a.handleFocus,onBlur:a.handleBlur,onClick:a.handleClick},{default:k(()=>[...i[14]||(i[14]=[s("option",{value:""},"Select an option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1},8,["onChange","onFocus","onBlur","onClick"]),a.eventLog.length>0?(y(),g("div",es,[i[15]||(i[15]=s("strong",null,"Event Log (most recent first):",-1)),s("div",ps,[(y(!0),g(T,null,M(a.eventLog,(u,B)=>(y(),g("div",{key:B},A(u),1))),128))])])):D("",!0)]),i[33]||(i[33]=s("div",{class:"mbe4"},[s("h2",null,"External Label Support"),s("p",{class:"mbs2 mbe3"}," The Select component supports external labels with helper text, required fields, and validation states. ")],-1)),s("div",ks,[s("div",Fs,[e(n,{label:"Favorite Framework",name:"framework"},{default:k(()=>[...i[16]||(i[16]=[s("option",{value:""},"Choose a framework",-1),s("option",{value:"react"},"React",-1),s("option",{value:"vue"},"Vue",-1),s("option",{value:"angular"},"Angular",-1),s("option",{value:"svelte"},"Svelte",-1)])]),_:1})]),s("div",rs,[e(n,{label:"Country","help-text":"Select your country of residence",name:"country"},{default:k(()=>[...i[17]||(i[17]=[s("option",{value:""},"Select a country",-1),s("option",{value:"us"},"United States",-1),s("option",{value:"uk"},"United Kingdom",-1),s("option",{value:"ca"},"Canada",-1),s("option",{value:"au"},"Australia",-1)])]),_:1})]),s("div",ds,[e(n,{label:"Preferred Language",required:!0,"help-text":"This field is required",name:"language"},{default:k(()=>[...i[18]||(i[18]=[s("option",{value:""},"Select a language",-1),s("option",{value:"en"},"English",-1),s("option",{value:"es"},"Spanish",-1),s("option",{value:"fr"},"French",-1),s("option",{value:"de"},"German",-1)])]),_:1})]),s("div",os,[e(n,{label:"Payment Method",required:!0,invalid:!0,"error-message":"Please select a payment method to continue",name:"payment"},{default:k(()=>[...i[19]||(i[19]=[s("option",{value:""},"Select payment method",-1),s("option",{value:"credit"},"Credit Card",-1),s("option",{value:"debit"},"Debit Card",-1),s("option",{value:"paypal"},"PayPal",-1)])]),_:1})])]),i[34]||(i[34]=s("div",{class:"mbe4"},[s("h2",null,"Label Positioning"),s("p",{class:"mbs2 mbe3"},[h(" Control label position with "),s("code",null,"label-position"),h(": 'top' (default), 'start', 'end', or 'bottom'. "),s("strong",null,"Note:"),h(" 'bottom' is not recommended as the dropdown will cover the label. ")])],-1)),s("div",gs,[s("div",ys,[e(n,{label:"Top Label (Default)","label-position":"top",name:"pos-top"},{default:k(()=>[...i[20]||(i[20]=[s("option",{value:""},"Select option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})]),s("div",cs,[e(n,{label:"Start Position","label-position":"start",name:"pos-start"},{default:k(()=>[...i[21]||(i[21]=[s("option",{value:""},"Select option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})]),s("div",us,[e(n,{label:"End Position","label-position":"end",name:"pos-end"},{default:k(()=>[...i[22]||(i[22]=[s("option",{value:""},"Select option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})]),s("div",Cs,[e(n,{label:"Bottom Position (Not Recommended)","label-position":"bottom",name:"pos-bottom","help-text":"The dropdown will cover this label when opened"},{default:k(()=>[...i[23]||(i[23]=[s("option",{value:""},"Select option",-1),s("option",{value:"1"},"Option 1",-1),s("option",{value:"2"},"Option 2",-1),s("option",{value:"3"},"Option 3",-1)])]),_:1})])]),i[35]||(i[35]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the select's appearance. ")],-1)),s("div",As,[e(n,{label:"Custom Styled Select",name:"custom",class:"custom-select"},{default:k(()=>[...i[24]||(i[24]=[s("option",{value:""},"Select a color",-1),s("option",{value:"red"},"Red",-1),s("option",{value:"blue"},"Blue",-1),s("option",{value:"green"},"Green",-1),s("option",{value:"purple"},"Purple",-1)])]),_:1})])])}const Ds=O(W,[["render",Es],["__scopeId","data-v-4b32018a"]]),Rs=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md"}'),Bs={name:"components/select.md"},Ls=Object.assign(Bs,{setup(a){return(i,t)=>(y(),g("div",null,[t[0]||(t[0]=s("h1",{id:"select",tabindex:"-1"},[h("Select "),s("a",{class:"header-anchor",href:"#select","aria-label":'Permalink to "Select"'},"​")],-1)),e(b),t[1]||(t[1]=s("p",null,"The Select component is a lightly styled native HTML select element that provides consistent styling across browsers while maintaining native functionality and accessibility.",-1)),t[2]||(t[2]=s("h2",{id:"examples",tabindex:"-1"},[h("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(Ds),t[3]||(t[3]=N("",54))]))}});export{Rs as __pageData,Ls as default};
