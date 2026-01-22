import{i as b,z as n,a as y,x as p,Q as g,b as c}from"./Button.DkmThuAs.js";import{n as u}from"./state-CovhUvdr.CfYrM0Q-.js";import{a as w,i as $,t as m,u as P}from"./form-control-utils.oxcP5Ntc.js";import{d as x,p as _,c as C,o as H,r as L,K as I}from"./framework.NAAYCHZu.js";var V=Object.defineProperty,s=(l,e,a,t)=>{for(var i=void 0,h=l.length-1,o;h>=0;h--)(o=l[h])&&(i=o(e,a,i)||i);return i&&V(e,a,i),i};let k=0;const f=class extends y{constructor(){super(),this.uniqueId=++k,this._ratingId="",this._labelId="",this._helperId="",this._errorId="",this.labelPosition="top",this.hoverValue=0,this.isHovering=!1,this.isPointerDown=!1;const e=$("rating");this._ratingId=e.inputId,this._labelId=e.labelId,this._helperId=e.helperId,this._errorId=e.errorId,this.value=0,this.max=5,this.precision="whole",this.readonly=!1,this.allowClear=!1,this.variant="",this.size="md",this.name="",this.label="",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeGlobalPointerListeners()}renderLabel(){if(!this.label||this.noLabel)return"";const e=[];return m(this.labelPosition)?(e.push("ag-form-control__label--horizontal"),e.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&e.push(`ag-form-control__label--${this.labelPosition}`),p`
      <label
        id=${this._labelId}
        for=${this._ratingId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${e.join(" ")}"
        part="ag-rating-label"
      >
        ${this.label}
      </label>
    `}render(){const e=this.isHovering?this.hoverValue:this.value,a=Array.from({length:this.max},(d,v)=>v+1),t=P({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),i=this.helpText&&!this.invalid?p`<div class="ag-form-control__helper" id="${this._helperId}">
          ${this.helpText}
        </div>`:"",h=this.invalid&&this.errorMessage?p`<div class="ag-form-control__error" id="${this._errorId}">
          ${this.errorMessage}
        </div>`:"",o=p`
      <div
        id="${this._ratingId}"
        class="rating"
        part="base"
        role="slider"
        aria-label="${this.label||"Rating"}"
        aria-labelledby="${g(this.label&&!this.noLabel?this._labelId:void 0)}"
        aria-describedby="${g(t)}"
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
        ${a.map(d=>this.renderStar(d,e))}
      </div>
      <span class="visually-hidden" aria-live="polite">
        ${e} of ${this.max}
      </span>
    `;return m(this.labelPosition)?p`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel()}
          ${o}
        </div>
        ${i}
        ${h}
      `:this.labelPosition==="bottom"?p`
        ${o}
        ${i}
        ${h}
        ${this.renderLabel()}
      `:p`
      ${this.renderLabel()}
      ${o}
      ${i}
      ${h}
    `}renderStar(e,a){const t=a>=e,i=!t&&a>=e-.5&&this.precision==="half",h=t||i?"filled":"",o=this.isHovering&&this.hoverValue>=e?"hover":"",d=`ag-rating-half-${this.uniqueId}-${e}`;return p`
      <span
        class="star-button"
        part="star-button"
        @click="${v=>this.handleClickStar(v,e)}"
        aria-label="${e} star"
        title="${e} star"
      >
        <span class="star ${h} ${o}" part="star" data-star="${e}">
          ${this.renderStarSvg(t,i,d)}
        </span>
      </span>
    `}renderStarSvg(e,a,t){return a?c`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="${t}">
              <rect x="0" y="0" width="12" height="24"></rect>
            </clipPath>
          </defs>
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
          <path clip-path="url(#${t})" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
        </svg>
      `:c`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
      </svg>
    `}roundToPrecision(e){return this.precision==="half"?Math.round(e*2)/2:Math.round(e)}getValueFromClientX(e){var o;const a=(o=this.shadowRoot)==null?void 0:o.querySelector(".rating");if(!a)return 0;const t=a.getBoundingClientRect(),i=Math.max(0,Math.min(e-t.left,t.width)),h=(t.width>0?i/t.width:0)*this.max;return this.roundToPrecision(h)}handleClickStar(e,a){if(e.stopPropagation(),this.readonly)return;const t=this.value;let i=(this.precision,a);this.allowClear&&i===t&&(i=0),this.commitValue(i,t)}handlePointerEnter(e){}handlePointerLeave(e){this.isPointerDown||(this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",this.hoverValue))}handlePointerDown(e){if(this.readonly)return;this.isPointerDown=!0,this.setPointerCapture(e.pointerId);const a=e.clientX,t=this.getValueFromClientX(a);this.hoverValue=t,this.isHovering=!0,this.emitHoverEvent("start",t),window.addEventListener("pointermove",this.handlePointerMove),window.addEventListener("pointerup",this.handlePointerUp)}handlePointerMoveHost(e){if(!this.isPointerDown&&!this.isHovering)return;const a=e.clientX,t=this.getValueFromClientX(a);this.hoverValue=t,this.isHovering?this.emitHoverEvent("move",t):(this.isHovering=!0,this.emitHoverEvent("start",t))}handlePointerMove(e){if(this.readonly)return;const a=e.clientX,t=this.getValueFromClientX(a);t!==this.hoverValue&&(this.hoverValue=t,this.emitHoverEvent("move",t))}handlePointerUp(e){if(this.readonly)return;const a=e.clientX,t=this.getValueFromClientX(a),i=this.value;let h=t;this.allowClear&&h===i&&(h=0),this.commitValue(h,i),this.isPointerDown=!1,this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",t),this.removeGlobalPointerListeners()}removeGlobalPointerListeners(){window.removeEventListener("pointermove",this.handlePointerMove),window.removeEventListener("pointerup",this.handlePointerUp)}handleKeyDown(e){if(this.readonly)return;const a=this.value,t=this.precision==="half"?.5:1;e.key==="ArrowRight"||e.key==="ArrowUp"?(e.preventDefault(),this.value=Math.min(this.max,this.value+t),this.commitValue(this.value,a)):e.key==="ArrowLeft"||e.key==="ArrowDown"?(e.preventDefault(),this.value=Math.max(0,this.value-t),this.commitValue(this.value,a)):e.key==="Home"?(e.preventDefault(),this.value=0,this.commitValue(this.value,a)):e.key==="End"&&(e.preventDefault(),this.value=this.max,this.commitValue(this.value,a))}commitValue(e,a){const t=this.roundToPrecision(e);this.value=t;const i=new CustomEvent("rating-change",{detail:{oldValue:a,newValue:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.onRatingChange&&this.onRatingChange(i)}emitHoverEvent(e,a){const t=new CustomEvent("rating-hover",{detail:{phase:e,value:a},bubbles:!0,composed:!0});this.dispatchEvent(t),this.onRatingHover&&this.onRatingHover(t)}};f.styles=[w,b`
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
  `];let r=f;s([n({type:Number})],r.prototype,"value");s([n({type:Number})],r.prototype,"max");s([n({type:String})],r.prototype,"precision");s([n({type:Boolean,reflect:!0})],r.prototype,"readonly");s([n({type:Boolean})],r.prototype,"allowClear");s([n({type:String,reflect:!0})],r.prototype,"variant");s([n({type:String,reflect:!0})],r.prototype,"size");s([n({type:String})],r.prototype,"name");s([n({type:String})],r.prototype,"label");s([n({type:String,attribute:"label-position"})],r.prototype,"labelPosition");s([n({type:Boolean,attribute:"label-hidden"})],r.prototype,"labelHidden");s([n({type:Boolean,attribute:"no-label"})],r.prototype,"noLabel");s([n({type:Boolean,reflect:!0})],r.prototype,"required");s([n({type:Boolean,reflect:!0})],r.prototype,"invalid");s([n({type:String,attribute:"error-message"})],r.prototype,"errorMessage");s([n({type:String,attribute:"help-text"})],r.prototype,"helpText");s([n({attribute:!1})],r.prototype,"onRatingChange");s([n({attribute:!1})],r.prototype,"onRatingHover");s([u()],r.prototype,"hoverValue");s([u()],r.prototype,"isHovering");s([u()],r.prototype,"isPointerDown");customElements.get("ag-rating")||customElements.define("ag-rating",r);const E=[".value",".readonly",".allowClear",".required",".invalid","max","precision","variant","size","name","label","labelPosition","labelHidden","noLabel","errorMessage","helpText"],R=x({__name:"VueRating",props:{value:{default:0},max:{default:5},precision:{default:"whole"},readonly:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},variant:{default:""},size:{default:"md"},name:{default:""},label:{default:""},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""}},emits:["update:value","change","hover"],setup(l,{emit:e}){const a=e,t=_(),i=o=>{const d=o;a("change",d.detail),a("update:value",d.detail.newValue)},h=o=>{a("hover",o.detail)};return(o,d)=>(H(),C("ag-rating",I({ref_key:"ratingRef",ref:t,".value":l.value,".readonly":l.readonly,".allowClear":l.allowClear,".required":l.required,".invalid":l.invalid,max:l.max,precision:l.precision,variant:l.variant,size:l.size,name:l.name,label:l.label,labelPosition:l.labelPosition,labelHidden:l.labelHidden,noLabel:l.noLabel,errorMessage:l.errorMessage,helpText:l.helpText,onRatingChange:i,onRatingHover:h},o.$attrs),[L(o.$slots,"default")],48,E))}});export{R as h};
