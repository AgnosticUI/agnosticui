var P=Object.defineProperty;var S=(n,a,i)=>a in n?P(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i;var f=(n,a,i)=>S(n,typeof a!="symbol"?a+"":a,i);import{A as D}from"./chunks/AlphaWarning.D199zhtu.js";import{i as q,z as d,a as V,x as g,b as C}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{n as F}from"./chunks/state-CovhUvdr.DnzyR2fh.js";import{Q as E}from"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import{a as z,i as H,t as R,u as L}from"./chunks/form-control-utils.B793yZMR.js";import{d as $,p as u,c as y,o as b,r as T,K as _,_ as I,C as N,j as t,G as o,t as v,ae as M,a as x,w,k as m}from"./chunks/framework.CdHt8f9T.js";import{F as U}from"./chunks/FrameworkExample.-SIbubez.js";import"./chunks/unique-id.CpwMFgRD.js";import"./chunks/Button.BOVp_oFI.js";var W=Object.defineProperty,p=(n,a,i,e)=>{for(var l=void 0,r=n.length-1,s;r>=0;r--)(s=n[r])&&(l=s(a,i,l)||l);return l&&W(a,i,l),l};let O=0;const B=class extends V{constructor(){super(),this.uniqueId=++O,this._ratingId="",this._labelId="",this._helperId="",this._errorId="",this.labelPosition="top",this.hoverValue=0,this.isHovering=!1,this.isPointerDown=!1;const a=H("rating");this._ratingId=a.inputId,this._labelId=a.labelId,this._helperId=a.helperId,this._errorId=a.errorId,this.value=0,this.max=5,this.precision="whole",this.readonly=!1,this.allowClear=!1,this.variant="",this.size="md",this.name="",this.label="",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeGlobalPointerListeners()}renderLabel(){if(!this.label||this.noLabel)return"";const a=[];return R(this.labelPosition)?(a.push("ag-form-control__label--horizontal"),a.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&a.push(`ag-form-control__label--${this.labelPosition}`),g`
      <label
        id=${this._labelId}
        for=${this._ratingId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${a.join(" ")}"
        part="ag-rating-label"
      >
        ${this.label}
      </label>
    `}render(){const a=this.isHovering?this.hoverValue:this.value,i=Array.from({length:this.max},(c,k)=>k+1),e=L({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),l=this.helpText&&!this.invalid?g`<div class="ag-form-control__helper" id="${this._helperId}">
          ${this.helpText}
        </div>`:"",r=this.invalid&&this.errorMessage?g`<div class="ag-form-control__error" id="${this._errorId}">
          ${this.errorMessage}
        </div>`:"",s=g`
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
          ${s}
        </div>
        ${l}
        ${r}
      `:this.labelPosition==="bottom"?g`
        ${s}
        ${l}
        ${r}
        ${this.renderLabel()}
      `:g`
      ${this.renderLabel()}
      ${s}
      ${l}
      ${r}
    `}renderStar(a,i){const e=i>=a,l=!e&&i>=a-.5&&this.precision==="half",r=e||l?"filled":"",s=this.isHovering&&this.hoverValue>=a?"hover":"",c=`ag-rating-half-${this.uniqueId}-${a}`;return g`
      <span
        class="star-button"
        part="star-button"
        @click="${k=>this.handleClickStar(k,a)}"
        aria-label="${a} star"
        title="${a} star"
      >
        <span class="star ${r} ${s}" part="star" data-star="${a}">
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
    `}roundToPrecision(a){return this.precision==="half"?Math.round(a*2)/2:Math.round(a)}getValueFromClientX(a){var s;const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".rating");if(!i)return 0;const e=i.getBoundingClientRect(),l=Math.max(0,Math.min(a-e.left,e.width)),r=(e.width>0?l/e.width:0)*this.max;return this.roundToPrecision(r)}handleClickStar(a,i){if(a.stopPropagation(),this.readonly)return;const e=this.value;let l=(this.precision,i);this.allowClear&&l===e&&(l=0),this.commitValue(l,e)}handlePointerEnter(a){}handlePointerLeave(a){this.isPointerDown||(this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",this.hoverValue))}handlePointerDown(a){if(this.readonly)return;this.isPointerDown=!0,this.setPointerCapture(a.pointerId);const i=a.clientX,e=this.getValueFromClientX(i);this.hoverValue=e,this.isHovering=!0,this.emitHoverEvent("start",e),window.addEventListener("pointermove",this.handlePointerMove),window.addEventListener("pointerup",this.handlePointerUp)}handlePointerMoveHost(a){if(!this.isPointerDown&&!this.isHovering)return;const i=a.clientX,e=this.getValueFromClientX(i);this.hoverValue=e,this.isHovering?this.emitHoverEvent("move",e):(this.isHovering=!0,this.emitHoverEvent("start",e))}handlePointerMove(a){if(this.readonly)return;const i=a.clientX,e=this.getValueFromClientX(i);e!==this.hoverValue&&(this.hoverValue=e,this.emitHoverEvent("move",e))}handlePointerUp(a){if(this.readonly)return;const i=a.clientX,e=this.getValueFromClientX(i),l=this.value;let r=e;this.allowClear&&r===l&&(r=0),this.commitValue(r,l),this.isPointerDown=!1,this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",e),this.removeGlobalPointerListeners()}removeGlobalPointerListeners(){window.removeEventListener("pointermove",this.handlePointerMove),window.removeEventListener("pointerup",this.handlePointerUp)}handleKeyDown(a){if(this.readonly)return;const i=this.value,e=this.precision==="half"?.5:1;a.key==="ArrowRight"||a.key==="ArrowUp"?(a.preventDefault(),this.value=Math.min(this.max,this.value+e),this.commitValue(this.value,i)):a.key==="ArrowLeft"||a.key==="ArrowDown"?(a.preventDefault(),this.value=Math.max(0,this.value-e),this.commitValue(this.value,i)):a.key==="Home"?(a.preventDefault(),this.value=0,this.commitValue(this.value,i)):a.key==="End"&&(a.preventDefault(),this.value=this.max,this.commitValue(this.value,i))}commitValue(a,i){const e=this.roundToPrecision(a);this.value=e;const l=new CustomEvent("rating-change",{detail:{oldValue:i,newValue:e},bubbles:!0,composed:!0});this.dispatchEvent(l),this.onRatingChange&&this.onRatingChange(l)}emitHoverEvent(a,i){const e=new CustomEvent("rating-hover",{detail:{phase:a,value:i},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onRatingHover&&this.onRatingHover(e)}};B.styles=[z,q`
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
  `];let h=B;p([d({type:Number})],h.prototype,"value");p([d({type:Number})],h.prototype,"max");p([d({type:String})],h.prototype,"precision");p([d({type:Boolean,reflect:!0})],h.prototype,"readonly");p([d({type:Boolean})],h.prototype,"allowClear");p([d({type:String,reflect:!0})],h.prototype,"variant");p([d({type:String,reflect:!0})],h.prototype,"size");p([d({type:String})],h.prototype,"name");p([d({type:String})],h.prototype,"label");p([d({type:String,attribute:"label-position"})],h.prototype,"labelPosition");p([d({type:Boolean,attribute:"label-hidden"})],h.prototype,"labelHidden");p([d({type:Boolean,attribute:"no-label"})],h.prototype,"noLabel");p([d({type:Boolean,reflect:!0})],h.prototype,"required");p([d({type:Boolean,reflect:!0})],h.prototype,"invalid");p([d({type:String,attribute:"error-message"})],h.prototype,"errorMessage");p([d({type:String,attribute:"help-text"})],h.prototype,"helpText");p([d({attribute:!1})],h.prototype,"onRatingChange");p([d({attribute:!1})],h.prototype,"onRatingHover");p([F()],h.prototype,"hoverValue");p([F()],h.prototype,"isHovering");p([F()],h.prototype,"isPointerDown");customElements.get("ag-rating")||customElements.define("ag-rating",h);const X=[".value",".readonly",".allowClear",".required",".invalid","max","precision","variant","size","name","label","labelPosition","labelHidden","noLabel","errorMessage","helpText"],K=$({__name:"VueRating",props:{value:{default:0},max:{default:5},precision:{default:"whole"},readonly:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},variant:{default:""},size:{default:"md"},name:{default:""},label:{default:""},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""}},emits:["update:value","change","hover"],setup(n,{emit:a}){const i=a,e=u(),l=s=>{const c=s;i("change",c.detail),i("update:value",c.detail.newValue)},r=s=>{i("hover",s.detail)};return(s,c)=>(b(),y("ag-rating",_({ref_key:"ratingRef",ref:e,".value":n.value,".readonly":n.readonly,".allowClear":n.allowClear,".required":n.required,".invalid":n.invalid,max:n.max,precision:n.precision,variant:n.variant,size:n.size,name:n.name,label:n.label,labelPosition:n.labelPosition,labelHidden:n.labelHidden,noLabel:n.noLabel,errorMessage:n.errorMessage,helpText:n.helpText,onRatingChange:l,onRatingHover:r},s.$attrs),[T(s.$slots,"default")],48,X))}}),j=$({name:"RatingExamples",components:{VueRating:K},setup(){const n=u(3),a=u(0),i=u("");return{eventValue:n,hoverValue:a,lastEvent:i,handleRatingChange:r=>{n.value=r.detail.newValue,i.value=`rating-change: oldValue=${r.detail.oldValue}, newValue=${r.detail.newValue}`},handleRatingHover:r=>{a.value=r.detail.value,i.value=`rating-hover: phase=${r.detail.phase}, value=${r.detail.value}`}}}}),Q={class:"mbe4"},G={class:"mbe4"},J={class:"mbe4"},Y={class:"mbe4"},Z={class:"mbe4"},aa={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},ia={class:"mbe4"},ea={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},ta={class:"mbe4"},sa={style:{"margin-top":"1rem","font-family":"monospace","font-size":"0.875rem"}},na={class:"mbe4"},la={style:{"max-width":"600px",display:"flex","flex-direction":"column",gap:"1.5rem"}},ra={class:"mbe4"};function oa(n,a,i,e,l,r){const s=N("VueRating");return b(),y("section",null,[t("div",Q,[a[0]||(a[0]=t("h2",null,"Default Rating",-1)),a[1]||(a[1]=t("p",{class:"mbs2 mbe3"},"A basic rating component.",-1)),o(s,{value:3})]),t("div",G,[a[2]||(a[2]=t("h2",null,"Half Precision",-1)),a[3]||(a[3]=t("p",{class:"mbs2 mbe3"},"Allows for half-star ratings.",-1)),o(s,{value:2.5,precision:"half"})]),t("div",J,[a[4]||(a[4]=t("h2",null,"Readonly",-1)),a[5]||(a[5]=t("p",{class:"mbs2 mbe3"},"A non-interactive rating display.",-1)),o(s,{value:4,readonly:!0})]),t("div",Y,[a[6]||(a[6]=t("h2",null,"Allow Clear",-1)),a[7]||(a[7]=t("p",{class:"mbs2 mbe3"},"Clicking the current rating will clear it to 0.",-1)),o(s,{value:3,"allow-clear":!0})]),t("div",Z,[a[8]||(a[8]=t("h2",null,"Sizes",-1)),a[9]||(a[9]=t("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large.",-1)),t("div",aa,[o(s,{size:"sm",value:3}),o(s,{size:"md",value:3}),o(s,{size:"lg",value:3})])]),t("div",ia,[a[10]||(a[10]=t("h2",null,"Variants",-1)),a[11]||(a[11]=t("p",{class:"mbs2 mbe3"},"Color variants for different contexts.",-1)),t("div",ea,[o(s,{variant:"primary",value:3}),o(s,{variant:"secondary",value:3}),o(s,{variant:"success",value:3}),o(s,{variant:"warning",value:3}),o(s,{variant:"danger",value:3}),o(s,{variant:"monochrome",value:3})])]),t("div",ta,[a[12]||(a[12]=t("h2",null,"Event Handling",-1)),a[13]||(a[13]=t("p",{class:"mbs2 mbe3"},"Listen for `rating-change` and `rating-hover` events.",-1)),t("div",null,[o(s,{value:n.eventValue,onRatingChange:n.handleRatingChange,onRatingHover:n.handleRatingHover},null,8,["value","onRatingChange","onRatingHover"]),t("div",sa,[t("p",null,"Current Value: "+v(n.eventValue),1),t("p",null,"Hover Value: "+v(n.hoverValue),1),t("p",null,"Last Event: "+v(n.lastEvent),1)])])]),t("div",na,[a[14]||(a[14]=t("h2",null,"Form Control Features",-1)),a[15]||(a[15]=t("p",{class:"mbs2 mbe3"}," Rating supports labels, helper text, validation, and label positioning for form integration. ",-1)),t("div",la,[o(s,{label:"Product Rating",value:3}),o(s,{label:"Service Quality","help-text":"Rate the quality of service you received",value:4}),o(s,{label:"Overall Experience",required:!0,"help-text":"This rating is required to submit your feedback",value:0}),o(s,{label:"Customer Support",required:!0,invalid:!0,"error-message":"Please provide a rating before submitting",value:0}),o(s,{label:"Start Position","label-position":"start",value:3}),o(s,{label:"End Position","label-position":"end",value:3})])]),t("div",ra,[a[16]||(a[16]=t("h2",null,"CSS Shadow Parts Customization",-1)),a[17]||(a[17]=t("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ",-1)),o(s,{value:4,class:"custom-rating"})])])}const ha=I(j,[["render",oa]]);class A extends V{constructor(){super(),this.eventValue=3,this.hoverValue=0,this.lastEvent=""}createRenderRoot(){return this}handleRatingChange(a){this.eventValue=a.detail.newValue,this.lastEvent=`rating-change: oldValue=${a.detail.oldValue}, newValue=${a.detail.newValue}`}handleRatingHover(a){this.hoverValue=a.detail.value,this.lastEvent=`rating-hover: phase=${a.detail.phase}, value=${a.detail.value}`}render(){return g`
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
`,da=`import { LitElement, html } from 'lit';
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
`,ga=`import { useState } from "react";
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
`,xa=JSON.parse('{"title":"Rating","description":"","frontmatter":{},"headers":[],"relativePath":"components/rating.md","filePath":"components/rating.md"}'),ca={name:"components/rating.md"},wa=Object.assign(ca,{setup(n){return(a,i)=>(b(),y("div",null,[i[1]||(i[1]=t("h1",{id:"rating",tabindex:"-1"},[x("Rating "),t("a",{class:"header-anchor",href:"#rating","aria-label":'Permalink to "Rating"'},"​")],-1)),o(D),i[2]||(i[2]=t("p",null,"The Rating component provides a way for users to view and set a rating, typically represented by stars. It's highly customizable, supporting different sizes, colors, and precision.",-1)),i[3]||(i[3]=t("h2",{id:"examples",tabindex:"-1"},[x("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),o(U,{component:"rating","vue-code":m(pa),"lit-code":m(da),"react-code":m(ga)},{vue:w(()=>[o(ha)]),lit:w(()=>[...i[0]||(i[0]=[t("rating-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=M("",17))]))}});export{xa as __pageData,wa as default};
