var P=Object.defineProperty;var S=(n,a,i)=>a in n?P(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i;var f=(n,a,i)=>S(n,typeof a!="symbol"?a+"":a,i);import{A as D}from"./chunks/AlphaWarning.CKFYAqLS.js";import{a as w,x as g,b as C,i as q,z as p}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{n as F}from"./chunks/state-CovhUvdr.C-u8O0Fo.js";import{Q as E}from"./chunks/Button.BmTmCFep.js";import{i as z,t as R,u as H,a as _}from"./chunks/form-control-utils.BYIX_mid.js";import{c as L}from"./chunks/face-mixin.MgCHLM8W.js";import{d as $,p as u,c as y,o as b,r as T,K as I,_ as M,C as N,j as s,G as o,t as k,ag as U,a as x,w as V,k as m}from"./chunks/framework.DmF2n0Fc.js";import{F as W}from"./chunks/FrameworkExample.Duc6fCJB.js";import"./chunks/createLucideIcon.U6K_rCrv.js";import"./chunks/sdk.m.Dxhqq5iP.js";import"./chunks/Icon.CxPOY7rJ.js";var O=Object.defineProperty,d=(n,a,i,e)=>{for(var l=void 0,r=n.length-1,t;r>=0;r--)(t=n[r])&&(l=t(a,i,l)||l);return l&&O(a,i,l),l};let X=0;const B=class extends L(w){constructor(){super(),this.uniqueId=++X,this._ratingId="",this._labelId="",this._helperId="",this._errorId="",this.labelPosition="top",this.hoverValue=0,this.isHovering=!1,this.isPointerDown=!1;const a=z("rating");this._ratingId=a.inputId,this._labelId=a.labelId,this._helperId=a.helperId,this._errorId=a.errorId,this.value=0,this.max=5,this.precision="whole",this.readonly=!1,this.allowClear=!1,this.variant="",this.size="md",this.label="",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.validationMessages=void 0,this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}_syncFormValue(){this._internals.setFormValue(this.value>0?String(this.value):null)}_syncValidity(){var a;this.required&&this.value===0?this._internals.setValidity({valueMissing:!0},((a=this.validationMessages)==null?void 0:a.valueMissing)??"Please select a rating."):this._internals.setValidity({})}firstUpdated(){this._syncFormValue(),this._syncValidity(),this._syncStates()}updated(a){super.updated(a),a.has("value")&&(this._syncFormValue(),this._syncValidity()),(a.has("value")||a.has("readonly")||a.has("required")||a.has("invalid"))&&this._syncStates()}formResetCallback(){this.value=0,this._internals.setFormValue(null),this._internals.setValidity({}),this._syncStates()}formStateRestoreCallback(a,i){this.value=typeof a=="string"?parseFloat(a):0,this._syncFormValue(),this._syncValidity(),this._syncStates()}_syncStates(){this._setState("readonly",this.readonly),this._setState("required",this.required),this._setState("invalid",!this._internals.validity.valid)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeGlobalPointerListeners()}renderLabel(){if(!this.label||this.noLabel)return"";const a=[];return R(this.labelPosition)?(a.push("ag-form-control__label--horizontal"),a.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&a.push(`ag-form-control__label--${this.labelPosition}`),g`
      <label
        id=${this._labelId}
        for=${this._ratingId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${a.join(" ")}"
        part="ag-rating-label"
      >
        ${this.label}
      </label>
    `}render(){const a=this.isHovering?this.hoverValue:this.value,i=Array.from({length:this.max},(c,v)=>v+1),e=H({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),l=this.helpText&&!this.invalid?g`<div class="ag-form-control__helper" id="${this._helperId}">
          ${this.helpText}
        </div>`:"",r=this.invalid&&this.errorMessage?g`<div class="ag-form-control__error" id="${this._errorId}">
          ${this.errorMessage}
        </div>`:"",t=g`
      <div
        id="${this._ratingId}"
        class="rating"
        part="base"
        role="slider"
        aria-label="${this.label||"Rating"}"
        aria-labelledby="${E(this.label&&!this.noLabel?this._labelId:void 0)}"
        aria-describedby="${E(e)}"
        aria-valuemin="0"
        aria-valuemax="${this.max}"
        aria-valuenow="${Number(this.value).toFixed(this.precision==="half"?1:0)}"
        aria-invalid="${this.invalid?"true":"false"}"
        aria-required="${this.required?"true":"false"}"
        tabindex="${this.readonly?-1:0}"
        @pointerdown="${this.handlePointerDown}"
        @pointermove="${this.handlePointerMoveHost}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
      >
        ${i.map(c=>this.renderStar(c,a))}
      </div>
      <span class="visually-hidden" aria-live="polite">
        ${a} of ${this.max}
      </span>
    `;return R(this.labelPosition)?g`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel()}
          ${t}
        </div>
        ${l}
        ${r}
      `:this.labelPosition==="bottom"?g`
        ${t}
        ${l}
        ${r}
        ${this.renderLabel()}
      `:g`
      ${this.renderLabel()}
      ${t}
      ${l}
      ${r}
    `}renderStar(a,i){const e=i>=a,l=!e&&i>=a-.5&&this.precision==="half",r=e||l?"filled":"",t=this.isHovering&&this.hoverValue>=a?"hover":"",c=`ag-rating-half-${this.uniqueId}-${a}`;return g`
      <span
        class="star-button"
        part="star-button"
        @click="${v=>this.handleClickStar(v,a)}"
        aria-label="${a} star"
        title="${a} star"
      >
        <span class="star ${r} ${t}" part="star" data-star="${a}">
          ${this.renderStarSvg(e,l,c)}
        </span>
      </span>
    `}renderStarSvg(a,i,e){return i?C`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="${e}">
              <rect x="0" y="0" width="12" height="24"></rect>
            </clipPath>
          </defs>
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
          <path clip-path="url(#${e})" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
        </svg>
      `:C`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
      </svg>
    `}roundToPrecision(a){return this.precision==="half"?Math.round(a*2)/2:Math.round(a)}getValueFromClientX(a){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".rating");if(!i)return 0;const e=i.getBoundingClientRect(),l=Math.max(0,Math.min(a-e.left,e.width)),r=(e.width>0?l/e.width:0)*this.max;return this.roundToPrecision(r)}handleClickStar(a,i){if(a.stopPropagation(),this.readonly)return;const e=this.value;let l=(this.precision,i);this.allowClear&&l===e&&(l=0),this.commitValue(l,e)}handlePointerEnter(a){}handlePointerLeave(a){this.isPointerDown||(this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",this.hoverValue))}handlePointerDown(a){if(this.readonly)return;this.isPointerDown=!0,this.setPointerCapture(a.pointerId);const i=a.clientX,e=this.getValueFromClientX(i);this.hoverValue=e,this.isHovering=!0,this.emitHoverEvent("start",e),window.addEventListener("pointermove",this.handlePointerMove),window.addEventListener("pointerup",this.handlePointerUp)}handlePointerMoveHost(a){if(!this.isPointerDown&&!this.isHovering)return;const i=a.clientX,e=this.getValueFromClientX(i);this.hoverValue=e,this.isHovering?this.emitHoverEvent("move",e):(this.isHovering=!0,this.emitHoverEvent("start",e))}handlePointerMove(a){if(this.readonly)return;const i=a.clientX,e=this.getValueFromClientX(i);e!==this.hoverValue&&(this.hoverValue=e,this.emitHoverEvent("move",e))}handlePointerUp(a){if(this.readonly)return;const i=a.clientX,e=this.getValueFromClientX(i),l=this.value;let r=e;this.allowClear&&r===l&&(r=0),this.commitValue(r,l),this.isPointerDown=!1,this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",e),this.removeGlobalPointerListeners()}removeGlobalPointerListeners(){window.removeEventListener("pointermove",this.handlePointerMove),window.removeEventListener("pointerup",this.handlePointerUp)}handleKeyDown(a){if(this.readonly)return;const i=this.value,e=this.precision==="half"?.5:1;a.key==="ArrowRight"||a.key==="ArrowUp"?(a.preventDefault(),this.value=Math.min(this.max,this.value+e),this.commitValue(this.value,i)):a.key==="ArrowLeft"||a.key==="ArrowDown"?(a.preventDefault(),this.value=Math.max(0,this.value-e),this.commitValue(this.value,i)):a.key==="Home"?(a.preventDefault(),this.value=0,this.commitValue(this.value,i)):a.key==="End"&&(a.preventDefault(),this.value=this.max,this.commitValue(this.value,i))}commitValue(a,i){const e=this.roundToPrecision(a);this.value=e,this._syncFormValue(),this._syncValidity();const l=new CustomEvent("rating-change",{detail:{oldValue:i,newValue:e},bubbles:!0,composed:!0});this.dispatchEvent(l),this.onRatingChange&&this.onRatingChange(l)}emitHoverEvent(a,i){const e=new CustomEvent("rating-hover",{detail:{phase:a,value:i},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onRatingHover&&this.onRatingHover(e)}};B.styles=[_,q`
    :host {
      display: block;
      line-height: 1;
    }

    .rating {
      display: inline-flex;
      gap: var(--ag-space-1);
      align-items: center;
      cursor: pointer;
    }

    :host([readonly]) .rating {
      cursor: default;
      pointer-events: none;
    }

    /* Default (≈ Chakra UI “xs”) */
    .star {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition:
        transform var(--ag-motion-medium) ease,
        opacity   var(--ag-motion-medium);
      color: var(--ag-neutral-300);
      width:  var(--ag-space-3);   /* 0.75rem  → xs */
      height: var(--ag-space-3);
    }

    /* size="sm"  → Chakra UI “sm” ≈ 1rem */
    :host([size="sm"]) .star {
      width:  var(--ag-space-4);   /* 1rem */
      height: var(--ag-space-4);
    }

    /* size="md"  → Chakra UI “md” ≈ 1.25rem */
    :host([size="md"]) .star {
      width:  var(--ag-space-5);   /* 1.25rem */
      height: var(--ag-space-5);
    }

    /* size="lg"  → Chakra UI “lg” ≈ 1.5rem */
    :host([size="lg"]) .star {
      width:  var(--ag-space-6);   /* 1.5rem */
      height: var(--ag-space-6);
    }

    .star svg path {
      fill: var(--ag-neutral-300); /* Empty color */
    }
    .star.filled > svg > path:last-of-type,
    .star.hover svg path {
      fill: var(--ag-rating-filled, var(--ag-yellow-400));
    }

    :host([variant="primary"]) .star.filled > svg > path:last-of-type,
    :host([variant="primary"]) .star.hover svg path {
      fill: var(--ag-rating-filled-primary, var(--ag-primary));
    }
    :host([variant="success"]) .star.filled > svg > path:last-of-type,
    :host([variant="success"]) .star.hover svg path {
      fill: var(--ag-rating-filled-success, var(--ag-success));
    }
    :host([variant="warning"]) .star.filled > svg > path:last-of-type,
    :host([variant="warning"]) .star.hover svg path {
      fill: var(--ag-rating-filled-warning, var(--ag-warning));
    }
    :host([variant="danger"]) .star.filled > svg > path:last-of-type,
    :host([variant="danger"]) .star.hover svg path {
      fill: var(--ag-rating-filled-danger, var(--ag-danger));
    }
    :host([variant="secondary"]) .star.filled > svg > path:last-of-type,
    :host([variant="secondary"]) .star.hover svg path {
      fill: var(--ag-rating-filled-secondary, var(--ag-secondary));
    }
    :host([variant="monochrome"]) .star.filled > svg > path:last-of-type,
    :host([variant="monochrome"]) .star.hover svg path {
      fill: var(--ag-text-primary);
    }

    .star-button {
      display: inline-block;
      border: 0;
      background: transparent;
      padding: 0;
      margin: 0;
      line-height: 0;
      cursor: inherit;
    }

    :host(:focus-visible) .rating {
      box-shadow: 0 0 0 var(--ag-focus-offset) rgba(var(--ag-focus), 0.12);
    }

    .visually-hidden {
      position: absolute !important;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
      border: 0;
    }
  `];let h=B;d([p({type:Number})],h.prototype,"value");d([p({type:Number})],h.prototype,"max");d([p({type:String})],h.prototype,"precision");d([p({type:Boolean,reflect:!0})],h.prototype,"readonly");d([p({type:Boolean})],h.prototype,"allowClear");d([p({type:String,reflect:!0})],h.prototype,"variant");d([p({type:String,reflect:!0})],h.prototype,"size");d([p({type:String})],h.prototype,"label");d([p({type:String,attribute:"label-position"})],h.prototype,"labelPosition");d([p({type:Boolean,attribute:"label-hidden"})],h.prototype,"labelHidden");d([p({type:Boolean,attribute:"no-label"})],h.prototype,"noLabel");d([p({type:Boolean,reflect:!0})],h.prototype,"required");d([p({type:Boolean,reflect:!0})],h.prototype,"invalid");d([p({type:String,attribute:"error-message"})],h.prototype,"errorMessage");d([p({type:String,attribute:"help-text"})],h.prototype,"helpText");d([p({attribute:!1})],h.prototype,"validationMessages");d([p({attribute:!1})],h.prototype,"onRatingChange");d([p({attribute:!1})],h.prototype,"onRatingHover");d([F()],h.prototype,"hoverValue");d([F()],h.prototype,"isHovering");d([F()],h.prototype,"isPointerDown");customElements.get("ag-rating")||customElements.define("ag-rating",h);const K=[".value",".readonly",".allowClear",".required",".invalid",".validationMessages","max","precision","variant","size","name","label","labelPosition","labelHidden","noLabel","errorMessage","helpText"],j=$({__name:"VueRating",props:{value:{default:0},max:{default:5},precision:{default:"whole"},readonly:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},variant:{default:""},size:{default:"md"},name:{default:""},label:{default:""},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""},validationMessages:{}},emits:["update:value","change","hover"],setup(n,{emit:a}){const i=a,e=u(),l=t=>{const c=t;i("change",c.detail),i("update:value",c.detail.newValue)},r=t=>{i("hover",t.detail)};return(t,c)=>(b(),y("ag-rating",I({ref_key:"ratingRef",ref:e,".value":n.value,".readonly":n.readonly,".allowClear":n.allowClear,".required":n.required,".invalid":n.invalid,".validationMessages":n.validationMessages,max:n.max,precision:n.precision,variant:n.variant,size:n.size,name:n.name,label:n.label,labelPosition:n.labelPosition,labelHidden:n.labelHidden,noLabel:n.noLabel,errorMessage:n.errorMessage,helpText:n.helpText,onRatingChange:l,onRatingHover:r},t.$attrs),[T(t.$slots,"default")],48,K))}}),Q=$({name:"RatingExamples",components:{VueRating:j},setup(){const n=u(3),a=u(0),i=u("");return{eventValue:n,hoverValue:a,lastEvent:i,handleRatingChange:r=>{n.value=r.detail.newValue,i.value=`rating-change: oldValue=${r.detail.oldValue}, newValue=${r.detail.newValue}`},handleRatingHover:r=>{a.value=r.detail.value,i.value=`rating-hover: phase=${r.detail.phase}, value=${r.detail.value}`}}}}),G={class:"mbe4"},J={class:"mbe4"},Y={class:"mbe4"},Z={class:"mbe4"},aa={class:"mbe4"},ia={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},ea={class:"mbe4"},sa={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},ta={class:"mbe4"},na={style:{"margin-top":"1rem","font-family":"monospace","font-size":"0.875rem"}},la={class:"mbe4"},ra={style:{"max-width":"600px",display:"flex","flex-direction":"column",gap:"1.5rem"}},oa={class:"mbe4"};function ha(n,a,i,e,l,r){const t=N("VueRating");return b(),y("section",null,[s("div",G,[a[0]||(a[0]=s("h2",null,"Default Rating",-1)),a[1]||(a[1]=s("p",{class:"mbs2 mbe3"},"A basic rating component.",-1)),o(t,{value:3})]),s("div",J,[a[2]||(a[2]=s("h2",null,"Half Precision",-1)),a[3]||(a[3]=s("p",{class:"mbs2 mbe3"},"Allows for half-star ratings.",-1)),o(t,{value:2.5,precision:"half"})]),s("div",Y,[a[4]||(a[4]=s("h2",null,"Readonly",-1)),a[5]||(a[5]=s("p",{class:"mbs2 mbe3"},"A non-interactive rating display.",-1)),o(t,{value:4,readonly:!0})]),s("div",Z,[a[6]||(a[6]=s("h2",null,"Allow Clear",-1)),a[7]||(a[7]=s("p",{class:"mbs2 mbe3"},"Clicking the current rating will clear it to 0.",-1)),o(t,{value:3,"allow-clear":!0})]),s("div",aa,[a[8]||(a[8]=s("h2",null,"Sizes",-1)),a[9]||(a[9]=s("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large.",-1)),s("div",ia,[o(t,{size:"sm",value:3}),o(t,{size:"md",value:3}),o(t,{size:"lg",value:3})])]),s("div",ea,[a[10]||(a[10]=s("h2",null,"Variants",-1)),a[11]||(a[11]=s("p",{class:"mbs2 mbe3"},"Color variants for different contexts.",-1)),s("div",sa,[o(t,{variant:"primary",value:3}),o(t,{variant:"secondary",value:3}),o(t,{variant:"success",value:3}),o(t,{variant:"warning",value:3}),o(t,{variant:"danger",value:3}),o(t,{variant:"monochrome",value:3})])]),s("div",ta,[a[12]||(a[12]=s("h2",null,"Event Handling",-1)),a[13]||(a[13]=s("p",{class:"mbs2 mbe3"},"Listen for `rating-change` and `rating-hover` events.",-1)),s("div",null,[o(t,{value:n.eventValue,onRatingChange:n.handleRatingChange,onRatingHover:n.handleRatingHover},null,8,["value","onRatingChange","onRatingHover"]),s("div",na,[s("p",null,"Current Value: "+k(n.eventValue),1),s("p",null,"Hover Value: "+k(n.hoverValue),1),s("p",null,"Last Event: "+k(n.lastEvent),1)])])]),s("div",la,[a[14]||(a[14]=s("h2",null,"Form Control Features",-1)),a[15]||(a[15]=s("p",{class:"mbs2 mbe3"}," Rating supports labels, helper text, validation, and label positioning for form integration. ",-1)),s("div",ra,[o(t,{label:"Product Rating",value:3}),o(t,{label:"Service Quality","help-text":"Rate the quality of service you received",value:4}),o(t,{label:"Overall Experience",required:!0,"help-text":"This rating is required to submit your feedback",value:0}),o(t,{label:"Customer Support",required:!0,invalid:!0,"error-message":"Please provide a rating before submitting",value:0}),o(t,{label:"Start Position","label-position":"start",value:3}),o(t,{label:"End Position","label-position":"end",value:3})])]),s("div",oa,[a[16]||(a[16]=s("h2",null,"CSS Shadow Parts Customization",-1)),a[17]||(a[17]=s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ",-1)),o(t,{value:4,class:"custom-rating"})])])}const da=M(Q,[["render",ha]]);class A extends w{constructor(){super(),this.eventValue=3,this.hoverValue=0,this.lastEvent=""}createRenderRoot(){return this}handleRatingChange(a){this.eventValue=a.detail.newValue,this.lastEvent=`rating-change: oldValue=${a.detail.oldValue}, newValue=${a.detail.newValue}`}handleRatingHover(a){this.hoverValue=a.detail.value,this.lastEvent=`rating-hover: phase=${a.detail.phase}, value=${a.detail.value}`}render(){return g`
      <section>
        <div class="mbe4">
          <h2>Default Rating</h2>
          <p class="mbs2 mbe3">A basic rating component.</p>
          <ag-rating .value=${3}></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Half Precision</h2>
          <p class="mbs2 mbe3">Allows for half-star ratings.</p>
          <ag-rating
            .value=${2.5}
            precision="half"
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Readonly</h2>
          <p class="mbs2 mbe3">A non-interactive rating display.</p>
          <ag-rating
            .value=${4}
            .readonly=${!0}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Allow Clear</h2>
          <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
          <ag-rating
            .value=${3}
            .allowClear=${!0}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              size="sm"
              .value=${3}
            ></ag-rating>
            <ag-rating
              size="md"
              .value=${3}
            ></ag-rating>
            <ag-rating
              size="lg"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              variant="primary"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="secondary"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="success"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="warning"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="danger"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="monochrome"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">Listen for <code>rating-change</code> and <code>rating-hover</code> events.</p>
          <div>
            <ag-rating
              .value=${this.eventValue}
              @rating-change=${this.handleRatingChange}
              @rating-hover=${this.handleRatingHover}
            ></ag-rating>
            <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
              <p>Current Value: ${this.eventValue}</p>
              <p>Hover Value: ${this.hoverValue}</p>
              <p>Last Event: ${this.lastEvent}</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Form Control Features</h2>
          <p class="mbs2 mbe3">
            Rating supports labels, helper text, validation, and label positioning for form integration.
          </p>
          <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
            <!-- Basic label -->
            <ag-rating
              label="Product Rating"
              .value=${3}
            ></ag-rating>

            <!-- With help text -->
            <ag-rating
              label="Service Quality"
              help-text="Rate the quality of service you received"
              .value=${4}
            ></ag-rating>

            <!-- Required field -->
            <ag-rating
              label="Overall Experience"
              .required=${!0}
              help-text="This rating is required to submit your feedback"
              .value=${0}
            ></ag-rating>

            <!-- With error validation -->
            <ag-rating
              label="Customer Support"
              .required=${!0}
              .invalid=${!0}
              error-message="Please provide a rating before submitting"
              .value=${0}
            ></ag-rating>

            <!-- Label positioning -->
            <ag-rating
              label="Start Position"
              label-position="start"
              .value=${3}
            ></ag-rating>

            <ag-rating
              label="End Position"
              label-position="end"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-rating
            .value=${4}
            class="custom-rating"
          ></ag-rating>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-rating::part(star-button) {
          padding: 0.25rem;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .custom-rating::part(star-button):hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .custom-rating::part(star) {
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }
        .custom-rating::part(star):hover {
          opacity: 1;
        }
      </style>
    `}}f(A,"properties",{eventValue:{type:Number},hoverValue:{type:Number},lastEvent:{type:String}});customElements.define("rating-lit-examples",A);const pa=`<template>
  <section>
    <div class="mbe4">
      <h2>Default Rating</h2>
      <p class="mbs2 mbe3">A basic rating component.</p>
      <VueRating :value="3" />
    </div>

    <div class="mbe4">
      <h2>Half Precision</h2>
      <p class="mbs2 mbe3">Allows for half-star ratings.</p>
      <VueRating
        :value="2.5"
        precision="half"
      />
    </div>

    <div class="mbe4">
      <h2>Readonly</h2>
      <p class="mbs2 mbe3">A non-interactive rating display.</p>
      <VueRating
        :value="4"
        :readonly="true"
      />
    </div>

    <div class="mbe4">
      <h2>Allow Clear</h2>
      <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
      <VueRating
        :value="3"
        :allow-clear="true"
      />
    </div>

    <div class="mbe4">
      <h2>Sizes</h2>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
      <div
        class="mbe4"
        style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
      >
        <VueRating
          size="sm"
          :value="3"
        />
        <VueRating
          size="md"
          :value="3"
        />
        <VueRating
          size="lg"
          :value="3"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Variants</h2>
      <p class="mbs2 mbe3">Color variants for different contexts.</p>
      <div
        class="mbe4"
        style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
      >
        <VueRating
          variant="primary"
          :value="3"
        />
        <VueRating
          variant="secondary"
          :value="3"
        />
        <VueRating
          variant="success"
          :value="3"
        />
        <VueRating
          variant="warning"
          :value="3"
        />
        <VueRating
          variant="danger"
          :value="3"
        />
        <VueRating
          variant="monochrome"
          :value="3"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Event Handling</h2>
      <p class="mbs2 mbe3">Listen for \`rating-change\` and \`rating-hover\` events.</p>
      <div>
        <VueRating
          :value="eventValue"
          @rating-change="handleRatingChange"
          @rating-hover="handleRatingHover"
        />
        <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
          <p>Current Value: {{ eventValue }}</p>
          <p>Hover Value: {{ hoverValue }}</p>
          <p>Last Event: {{ lastEvent }}</p>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Form Control Features</h2>
      <p class="mbs2 mbe3">
        Rating supports labels, helper text, validation, and label positioning for form integration.
      </p>
      <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Basic label -->
        <VueRating
          label="Product Rating"
          :value="3"
        />

        <!-- With help text -->
        <VueRating
          label="Service Quality"
          help-text="Rate the quality of service you received"
          :value="4"
        />

        <!-- Required field -->
        <VueRating
          label="Overall Experience"
          :required="true"
          help-text="This rating is required to submit your feedback"
          :value="0"
        />

        <!-- With error validation -->
        <VueRating
          label="Customer Support"
          :required="true"
          :invalid="true"
          error-message="Please provide a rating before submitting"
          :value="0"
        />

        <!-- Label positioning -->
        <VueRating
          label="Start Position"
          label-position="start"
          :value="3"
        />

        <VueRating
          label="End Position"
          label-position="end"
          :value="3"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
      <VueRating
        :value="4"
        class="custom-rating"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueRating } from "agnosticui-core/rating/vue";
import type {
  RatingChangeEvent,
  RatingHoverEvent,
} from "agnosticui-core/rating/vue";

export default defineComponent({
  name: "RatingExamples",
  components: {
    VueRating,
  },
  setup() {
    const eventValue = ref(3);
    const hoverValue = ref(0);
    const lastEvent = ref("");

    const handleRatingChange = (e: RatingChangeEvent) => {
      eventValue.value = e.detail.newValue;
      lastEvent.value = \`rating-change: oldValue=\${e.detail.oldValue}, newValue=\${e.detail.newValue}\`;
    };

    const handleRatingHover = (e: RatingHoverEvent) => {
      hoverValue.value = e.detail.value;
      lastEvent.value = \`rating-hover: phase=\${e.detail.phase}, value=\${e.detail.value}\`;
    };

    return {
      eventValue,
      hoverValue,
      lastEvent,
      handleRatingChange,
      handleRatingHover,
    };
  },
});
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-rating::part(star-button) {
  padding: 0.25rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}
.custom-rating::part(star-button):hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.custom-rating::part(star) {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
.custom-rating::part(star):hover {
  opacity: 1;
}
</style>
`,ga=`import { LitElement, html } from 'lit';
import 'agnosticui-core/rating';

export class RatingLitExamples extends LitElement {
  static properties = {
    eventValue: { type: Number },
    hoverValue: { type: Number },
    lastEvent: { type: String }
  };

  constructor() {
    super();
    this.eventValue = 3;
    this.hoverValue = 0;
    this.lastEvent = '';
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleRatingChange(e) {
    this.eventValue = e.detail.newValue;
    this.lastEvent = \`rating-change: oldValue=\${e.detail.oldValue}, newValue=\${e.detail.newValue}\`;
  }

  handleRatingHover(e) {
    this.hoverValue = e.detail.value;
    this.lastEvent = \`rating-hover: phase=\${e.detail.phase}, value=\${e.detail.value}\`;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default Rating</h2>
          <p class="mbs2 mbe3">A basic rating component.</p>
          <ag-rating .value=\${3}></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Half Precision</h2>
          <p class="mbs2 mbe3">Allows for half-star ratings.</p>
          <ag-rating
            .value=\${2.5}
            precision="half"
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Readonly</h2>
          <p class="mbs2 mbe3">A non-interactive rating display.</p>
          <ag-rating
            .value=\${4}
            .readonly=\${true}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Allow Clear</h2>
          <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
          <ag-rating
            .value=\${3}
            .allowClear=\${true}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              size="sm"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              size="md"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              size="lg"
              .value=\${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              variant="primary"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="secondary"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="success"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="warning"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="danger"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="monochrome"
              .value=\${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">Listen for <code>rating-change</code> and <code>rating-hover</code> events.</p>
          <div>
            <ag-rating
              .value=\${this.eventValue}
              @rating-change=\${this.handleRatingChange}
              @rating-hover=\${this.handleRatingHover}
            ></ag-rating>
            <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
              <p>Current Value: \${this.eventValue}</p>
              <p>Hover Value: \${this.hoverValue}</p>
              <p>Last Event: \${this.lastEvent}</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Form Control Features</h2>
          <p class="mbs2 mbe3">
            Rating supports labels, helper text, validation, and label positioning for form integration.
          </p>
          <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
            <!-- Basic label -->
            <ag-rating
              label="Product Rating"
              .value=\${3}
            ></ag-rating>

            <!-- With help text -->
            <ag-rating
              label="Service Quality"
              help-text="Rate the quality of service you received"
              .value=\${4}
            ></ag-rating>

            <!-- Required field -->
            <ag-rating
              label="Overall Experience"
              .required=\${true}
              help-text="This rating is required to submit your feedback"
              .value=\${0}
            ></ag-rating>

            <!-- With error validation -->
            <ag-rating
              label="Customer Support"
              .required=\${true}
              .invalid=\${true}
              error-message="Please provide a rating before submitting"
              .value=\${0}
            ></ag-rating>

            <!-- Label positioning -->
            <ag-rating
              label="Start Position"
              label-position="start"
              .value=\${3}
            ></ag-rating>

            <ag-rating
              label="End Position"
              label-position="end"
              .value=\${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-rating
            .value=\${4}
            class="custom-rating"
          ></ag-rating>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-rating::part(star-button) {
          padding: 0.25rem;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .custom-rating::part(star-button):hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .custom-rating::part(star) {
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }
        .custom-rating::part(star):hover {
          opacity: 1;
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('rating-lit-examples', RatingLitExamples);
`,ca=`import { useState } from "react";
import { ReactRating } from "agnosticui-core/rating/react";

export default function RatingReactExamples() {
  const [eventValue, setEventValue] = useState(3);
  const [hoverValue, setHoverValue] = useState(0);
  const [lastEvent, setLastEvent] = useState("");

  const handleRatingChange = (e) => {
    setEventValue(e.detail.newValue);
    setLastEvent(\`rating-change: oldValue=\${e.detail.oldValue}, newValue=\${e.detail.newValue}\`);
  };

  const handleRatingHover = (e) => {
    setHoverValue(e.detail.value);
    setLastEvent(\`rating-hover: phase=\${e.detail.phase}, value=\${e.detail.value}\`);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Default Rating</h2>
        <p className="mbs2 mbe3">A basic rating component.</p>
        <ReactRating value={3} />
      </div>

      <div className="mbe4">
        <h2>Half Precision</h2>
        <p className="mbs2 mbe3">Allows for half-star ratings.</p>
        <ReactRating value={2.5} precision="half" />
      </div>

      <div className="mbe4">
        <h2>Readonly</h2>
        <p className="mbs2 mbe3">A non-interactive rating display.</p>
        <ReactRating value={4} readonly={true} />
      </div>

      <div className="mbe4">
        <h2>Allow Clear</h2>
        <p className="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
        <ReactRating value={3} allowClear={true} />
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
        <div
          className="mbe4"
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
        >
          <ReactRating size="sm" value={3} />
          <ReactRating size="md" value={3} />
          <ReactRating size="lg" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Color variants for different contexts.</p>
        <div
          className="mbe4"
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
        >
          <ReactRating variant="primary" value={3} />
          <ReactRating variant="secondary" value={3} />
          <ReactRating variant="success" value={3} />
          <ReactRating variant="warning" value={3} />
          <ReactRating variant="danger" value={3} />
          <ReactRating variant="monochrome" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Event Handling</h2>
        <p className="mbs2 mbe3">
          Listen for <code>rating-change</code> and <code>rating-hover</code> events.
        </p>
        <div>
          <ReactRating
            value={eventValue}
            onRatingChange={handleRatingChange}
            onRatingHover={handleRatingHover}
          />
          <div style={{ marginTop: "1rem", fontFamily: "monospace", fontSize: "0.875rem" }}>
            <p>Current Value: {eventValue}</p>
            <p>Hover Value: {hoverValue}</p>
            <p>Last Event: {lastEvent}</p>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Form Control Features</h2>
        <p className="mbs2 mbe3">
          Rating supports labels, helper text, validation, and label positioning for form
          integration.
        </p>
        <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Basic label */}
          <ReactRating label="Product Rating" value={3} />

          {/* With help text */}
          <ReactRating
            label="Service Quality"
            helpText="Rate the quality of service you received"
            value={4}
          />

          {/* Required field */}
          <ReactRating
            label="Overall Experience"
            required={true}
            helpText="This rating is required to submit your feedback"
            value={0}
          />

          {/* With error validation */}
          <ReactRating
            label="Customer Support"
            required={true}
            invalid={true}
            errorMessage="Please provide a rating before submitting"
            value={0}
          />

          {/* Label positioning */}
          <ReactRating label="Start Position" labelPosition="start" value={3} />

          <ReactRating label="End Position" labelPosition="end" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
        <ReactRating value={4} className="custom-rating" />
      </div>
    </section>
  );
}
`,$a=JSON.parse('{"title":"Rating","description":"","frontmatter":{},"headers":[],"relativePath":"components/rating.md","filePath":"components/rating.md"}'),ua={name:"components/rating.md"},Ba=Object.assign(ua,{setup(n){return(a,i)=>(b(),y("div",null,[i[1]||(i[1]=s("h1",{id:"rating",tabindex:"-1"},[x("Rating "),s("a",{class:"header-anchor",href:"#rating","aria-label":'Permalink to "Rating"'},"​")],-1)),o(D),i[2]||(i[2]=s("p",null,"The Rating component provides a way for users to view and set a rating, typically represented by stars. It's highly customizable, supporting different sizes, colors, and precision.",-1)),i[3]||(i[3]=s("h2",{id:"examples",tabindex:"-1"},[x("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),o(W,{component:"rating","vue-code":m(pa),"lit-code":m(ga),"react-code":m(ca)},{vue:V(()=>[o(da)]),lit:V(()=>[...i[0]||(i[0]=[s("rating-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=U("",17))]))}});export{$a as __pageData,Ba as default};
