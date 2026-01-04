import{A}from"./chunks/AlphaWarning.D199zhtu.js";import{i as x,z as d,a as D,x as g,b}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{n as y}from"./chunks/state-CovhUvdr.DnzyR2fh.js";import{Q as f}from"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import{a as P,i as $,t as C,u as q}from"./chunks/form-control-utils.B793yZMR.js";import{d as B,p as F,c as v,o as m,r as R,K as V,_,C as H,j as e,G as h,t as u,ae as S,a as E}from"./chunks/framework.CdHt8f9T.js";import"./chunks/unique-id.CpwMFgRD.js";var I=Object.defineProperty,p=(n,s,i,a)=>{for(var l=void 0,r=n.length-1,t;r>=0;r--)(t=n[r])&&(l=t(s,i,l)||l);return l&&I(s,i,l),l};let L=0;const w=class extends D{constructor(){super(),this.uniqueId=++L,this._ratingId="",this._labelId="",this._helperId="",this._errorId="",this.labelPosition="top",this.hoverValue=0,this.isHovering=!1,this.isPointerDown=!1;const s=$("rating");this._ratingId=s.inputId,this._labelId=s.labelId,this._helperId=s.helperId,this._errorId=s.errorId,this.value=0,this.max=5,this.precision="whole",this.readonly=!1,this.allowClear=!1,this.variant="",this.size="md",this.name="",this.label="",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeGlobalPointerListeners()}renderLabel(){if(!this.label||this.noLabel)return"";const s=[];return C(this.labelPosition)?(s.push("ag-form-control__label--horizontal"),s.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&s.push(`ag-form-control__label--${this.labelPosition}`),g`
      <label
        id=${this._labelId}
        for=${this._ratingId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${s.join(" ")}"
        part="ag-rating-label"
      >
        ${this.label}
      </label>
    `}render(){const s=this.isHovering?this.hoverValue:this.value,i=Array.from({length:this.max},(k,c)=>c+1),a=q({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),l=this.helpText&&!this.invalid?g`<div class="ag-form-control__helper" id="${this._helperId}">
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
        aria-labelledby="${f(this.label&&!this.noLabel?this._labelId:void 0)}"
        aria-describedby="${f(a)}"
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
        ${i.map(k=>this.renderStar(k,s))}
      </div>
      <span class="visually-hidden" aria-live="polite">
        ${s} of ${this.max}
      </span>
    `;return C(this.labelPosition)?g`
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
    `}renderStar(s,i){const a=i>=s,l=!a&&i>=s-.5&&this.precision==="half",r=a||l?"filled":"",t=this.isHovering&&this.hoverValue>=s?"hover":"",k=`ag-rating-half-${this.uniqueId}-${s}`;return g`
      <span
        class="star-button"
        part="star-button"
        @click="${c=>this.handleClickStar(c,s)}"
        aria-label="${s} star"
        title="${s} star"
      >
        <span class="star ${r} ${t}" part="star" data-star="${s}">
          ${this.renderStarSvg(a,l,k)}
        </span>
      </span>
    `}renderStarSvg(s,i,a){return i?b`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="${a}">
              <rect x="0" y="0" width="12" height="24"></rect>
            </clipPath>
          </defs>
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
          <path clip-path="url(#${a})" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
        </svg>
      `:b`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
      </svg>
    `}roundToPrecision(s){return this.precision==="half"?Math.round(s*2)/2:Math.round(s)}getValueFromClientX(s){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".rating");if(!i)return 0;const a=i.getBoundingClientRect(),l=Math.max(0,Math.min(s-a.left,a.width)),r=(a.width>0?l/a.width:0)*this.max;return this.roundToPrecision(r)}handleClickStar(s,i){if(s.stopPropagation(),this.readonly)return;const a=this.value;let l=(this.precision,i);this.allowClear&&l===a&&(l=0),this.commitValue(l,a)}handlePointerEnter(s){}handlePointerLeave(s){this.isPointerDown||(this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",this.hoverValue))}handlePointerDown(s){if(this.readonly)return;this.isPointerDown=!0,this.setPointerCapture(s.pointerId);const i=s.clientX,a=this.getValueFromClientX(i);this.hoverValue=a,this.isHovering=!0,this.emitHoverEvent("start",a),window.addEventListener("pointermove",this.handlePointerMove),window.addEventListener("pointerup",this.handlePointerUp)}handlePointerMoveHost(s){if(!this.isPointerDown&&!this.isHovering)return;const i=s.clientX,a=this.getValueFromClientX(i);this.hoverValue=a,this.isHovering?this.emitHoverEvent("move",a):(this.isHovering=!0,this.emitHoverEvent("start",a))}handlePointerMove(s){if(this.readonly)return;const i=s.clientX,a=this.getValueFromClientX(i);a!==this.hoverValue&&(this.hoverValue=a,this.emitHoverEvent("move",a))}handlePointerUp(s){if(this.readonly)return;const i=s.clientX,a=this.getValueFromClientX(i),l=this.value;let r=a;this.allowClear&&r===l&&(r=0),this.commitValue(r,l),this.isPointerDown=!1,this.isHovering=!1,this.hoverValue=0,this.emitHoverEvent("end",a),this.removeGlobalPointerListeners()}removeGlobalPointerListeners(){window.removeEventListener("pointermove",this.handlePointerMove),window.removeEventListener("pointerup",this.handlePointerUp)}handleKeyDown(s){if(this.readonly)return;const i=this.value,a=this.precision==="half"?.5:1;s.key==="ArrowRight"||s.key==="ArrowUp"?(s.preventDefault(),this.value=Math.min(this.max,this.value+a),this.commitValue(this.value,i)):s.key==="ArrowLeft"||s.key==="ArrowDown"?(s.preventDefault(),this.value=Math.max(0,this.value-a),this.commitValue(this.value,i)):s.key==="Home"?(s.preventDefault(),this.value=0,this.commitValue(this.value,i)):s.key==="End"&&(s.preventDefault(),this.value=this.max,this.commitValue(this.value,i))}commitValue(s,i){const a=this.roundToPrecision(s);this.value=a;const l=new CustomEvent("rating-change",{detail:{oldValue:i,newValue:a},bubbles:!0,composed:!0});this.dispatchEvent(l),this.onRatingChange&&this.onRatingChange(l)}emitHoverEvent(s,i){const a=new CustomEvent("rating-hover",{detail:{phase:s,value:i},bubbles:!0,composed:!0});this.dispatchEvent(a),this.onRatingHover&&this.onRatingHover(a)}};w.styles=[P,x`
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
  `];let o=w;p([d({type:Number})],o.prototype,"value");p([d({type:Number})],o.prototype,"max");p([d({type:String})],o.prototype,"precision");p([d({type:Boolean,reflect:!0})],o.prototype,"readonly");p([d({type:Boolean})],o.prototype,"allowClear");p([d({type:String,reflect:!0})],o.prototype,"variant");p([d({type:String,reflect:!0})],o.prototype,"size");p([d({type:String})],o.prototype,"name");p([d({type:String})],o.prototype,"label");p([d({type:String,attribute:"label-position"})],o.prototype,"labelPosition");p([d({type:Boolean,attribute:"label-hidden"})],o.prototype,"labelHidden");p([d({type:Boolean,attribute:"no-label"})],o.prototype,"noLabel");p([d({type:Boolean,reflect:!0})],o.prototype,"required");p([d({type:Boolean,reflect:!0})],o.prototype,"invalid");p([d({type:String,attribute:"error-message"})],o.prototype,"errorMessage");p([d({type:String,attribute:"help-text"})],o.prototype,"helpText");p([d({attribute:!1})],o.prototype,"onRatingChange");p([d({attribute:!1})],o.prototype,"onRatingHover");p([y()],o.prototype,"hoverValue");p([y()],o.prototype,"isHovering");p([y()],o.prototype,"isPointerDown");customElements.get("ag-rating")||customElements.define("ag-rating",o);const T=[".value",".readonly",".allowClear",".required",".invalid","max","precision","variant","size","name","label","labelPosition","labelHidden","noLabel","errorMessage","helpText"],z=B({__name:"VueRating",props:{value:{default:0},max:{default:5},precision:{default:"whole"},readonly:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},variant:{default:""},size:{default:"md"},name:{default:""},label:{default:""},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""}},emits:["update:value","change","hover"],setup(n,{emit:s}){const i=s,a=F(),l=t=>{const k=t;i("change",k.detail),i("update:value",k.detail.newValue)},r=t=>{i("hover",t.detail)};return(t,k)=>(m(),v("ag-rating",V({ref_key:"ratingRef",ref:a,".value":n.value,".readonly":n.readonly,".allowClear":n.allowClear,".required":n.required,".invalid":n.invalid,max:n.max,precision:n.precision,variant:n.variant,size:n.size,name:n.name,label:n.label,labelPosition:n.labelPosition,labelHidden:n.labelHidden,noLabel:n.noLabel,errorMessage:n.errorMessage,helpText:n.helpText,onRatingChange:l,onRatingHover:r},t.$attrs),[R(t.$slots,"default")],48,T))}}),M=B({name:"RatingExamples",components:{VueRating:z},setup(){const n=F(3),s=F(0),i=F("");return{eventValue:n,hoverValue:s,lastEvent:i,handleRatingChange:r=>{n.value=r.detail.newValue,i.value=`rating-change: oldValue=${r.detail.oldValue}, newValue=${r.detail.newValue}`},handleRatingHover:r=>{s.value=r.detail.value,i.value=`rating-hover: phase=${r.detail.phase}, value=${r.detail.value}`}}}}),U={class:"mbe4"},N={class:"mbe4"},X={class:"mbe4"},K={class:"mbe4"},j={class:"mbe4"},G={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},O={class:"mbe4"},W={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},Q={class:"mbe4"},J={style:{"margin-top":"1rem","font-family":"monospace","font-size":"0.875rem"}},Y={class:"mbe4"},Z={style:{"max-width":"600px",display:"flex","flex-direction":"column",gap:"1.5rem"}},ss={class:"mbe4"};function is(n,s,i,a,l,r){const t=H("VueRating");return m(),v("section",null,[e("div",U,[s[0]||(s[0]=e("h2",null,"Default Rating",-1)),s[1]||(s[1]=e("p",{class:"mbs2 mbe3"},"A basic rating component.",-1)),h(t,{value:3})]),e("div",N,[s[2]||(s[2]=e("h2",null,"Half Precision",-1)),s[3]||(s[3]=e("p",{class:"mbs2 mbe3"},"Allows for half-star ratings.",-1)),h(t,{value:2.5,precision:"half"})]),e("div",X,[s[4]||(s[4]=e("h2",null,"Readonly",-1)),s[5]||(s[5]=e("p",{class:"mbs2 mbe3"},"A non-interactive rating display.",-1)),h(t,{value:4,readonly:!0})]),e("div",K,[s[6]||(s[6]=e("h2",null,"Allow Clear",-1)),s[7]||(s[7]=e("p",{class:"mbs2 mbe3"},"Clicking the current rating will clear it to 0.",-1)),h(t,{value:3,"allow-clear":!0})]),e("div",j,[s[8]||(s[8]=e("h2",null,"Sizes",-1)),s[9]||(s[9]=e("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large.",-1)),e("div",G,[h(t,{size:"sm",value:3}),h(t,{size:"md",value:3}),h(t,{size:"lg",value:3})])]),e("div",O,[s[10]||(s[10]=e("h2",null,"Variants",-1)),s[11]||(s[11]=e("p",{class:"mbs2 mbe3"},"Color variants for different contexts.",-1)),e("div",W,[h(t,{variant:"primary",value:3}),h(t,{variant:"secondary",value:3}),h(t,{variant:"success",value:3}),h(t,{variant:"warning",value:3}),h(t,{variant:"danger",value:3}),h(t,{variant:"monochrome",value:3})])]),e("div",Q,[s[12]||(s[12]=e("h2",null,"Event Handling",-1)),s[13]||(s[13]=e("p",{class:"mbs2 mbe3"},"Listen for `rating-change` and `rating-hover` events.",-1)),e("div",null,[h(t,{value:n.eventValue,onRatingChange:n.handleRatingChange,onRatingHover:n.handleRatingHover},null,8,["value","onRatingChange","onRatingHover"]),e("div",J,[e("p",null,"Current Value: "+u(n.eventValue),1),e("p",null,"Hover Value: "+u(n.hoverValue),1),e("p",null,"Last Event: "+u(n.lastEvent),1)])])]),e("div",Y,[s[14]||(s[14]=e("h2",null,"Form Control Features",-1)),s[15]||(s[15]=e("p",{class:"mbs2 mbe3"}," Rating supports labels, helper text, validation, and label positioning for form integration. ",-1)),e("div",Z,[h(t,{label:"Product Rating",value:3}),h(t,{label:"Service Quality","help-text":"Rate the quality of service you received",value:4}),h(t,{label:"Overall Experience",required:!0,"help-text":"This rating is required to submit your feedback",value:0}),h(t,{label:"Customer Support",required:!0,invalid:!0,"error-message":"Please provide a rating before submitting",value:0}),h(t,{label:"Start Position","label-position":"start",value:3}),h(t,{label:"End Position","label-position":"end",value:3})])]),e("div",ss,[s[16]||(s[16]=e("h2",null,"CSS Shadow Parts Customization",-1)),s[17]||(s[17]=e("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ",-1)),h(t,{value:4,class:"custom-rating"})])])}const as=_(M,[["render",is]]),ks=JSON.parse('{"title":"Rating","description":"","frontmatter":{},"headers":[],"relativePath":"components/rating.md","filePath":"components/rating.md"}'),ts={name:"components/rating.md"},gs=Object.assign(ts,{setup(n){return(s,i)=>(m(),v("div",null,[i[0]||(i[0]=e("h1",{id:"rating",tabindex:"-1"},[E("Rating "),e("a",{class:"header-anchor",href:"#rating","aria-label":'Permalink to "Rating"'},"​")],-1)),h(A),i[1]||(i[1]=e("p",null,"The Rating component provides a way for users to view and set a rating, typically represented by stars. It's highly customizable, supporting different sizes, colors, and precision.",-1)),i[2]||(i[2]=e("h2",{id:"examples",tabindex:"-1"},[E("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),h(as),i[3]||(i[3]=S(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Rating</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2.5&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> precision</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;half&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueRating } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/rating/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueRating }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactRating } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/rating/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> precision</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;half&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/rating&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2.5&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> precision</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;half&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>number</code></td><td><code>0</code></td><td>The current rating value. Can be a float if <code>precision</code> is <code>half</code>.</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td><code>5</code></td><td>The maximum rating value (total number of stars).</td></tr><tr><td><code>precision</code></td><td><code>&#39;whole&#39; | &#39;half&#39;</code></td><td><code>&#39;whole&#39;</code></td><td>The precision of the rating, allowing for whole or half-star increments.</td></tr><tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, the rating is display-only and cannot be changed by the user.</td></tr><tr><td><code>allowClear</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, clicking on the currently selected rating value will set the rating to 0.</td></tr><tr><td><code>size</code></td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td><td>The size of the rating stars.</td></tr><tr><td><code>variant</code></td><td><code>&#39;&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td><code>&#39;&#39;</code></td><td>The color variant of the rating. Defaults to yellow if empty.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>rating-change</code></td><td>Vue: <code>@rating-change</code><br>React: <code>onRatingChange</code><br>Lit: <code>@rating-change</code></td><td><code>{ oldValue: number, newValue: number }</code></td><td>Fired when the user selects a new rating value.</td></tr><tr><td><code>rating-hover</code></td><td>Vue: <code>@rating-hover</code><br>React: <code>onRatingHover</code><br>Lit: <code>@rating-hover</code></td><td><code>{ phase: &#39;start&#39; | &#39;move&#39; | &#39;end&#39;, value: number }</code></td><td>Fired as the user&#39;s pointer moves over the component. <code>phase</code> indicates the state of the hover interaction.</td></tr></tbody></table><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>base</code></td><td>The main container <code>div</code> element wrapping the stars.</td></tr><tr><td><code>star-button</code></td><td>The <code>&lt;span&gt;</code> element that acts as the clickable area for each star.</td></tr><tr><td><code>star</code></td><td>The <code>&lt;span&gt;</code> element that contains the star&#39;s SVG icon.</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">star-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.25</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: background-color </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">star-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(star) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  opacity</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.8</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: opacity </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(star)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  opacity</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>The component is implemented as a <code>role=&quot;slider&quot;</code> for screen reader compatibility.</li><li><code>aria-valuenow</code>, <code>aria-valuemin</code>, and <code>aria-valuemax</code> are used to convey the current, minimum, and maximum values.</li><li>The component is keyboard navigable using arrow keys, Home, and End.</li><li>A visually hidden <code>&lt;span&gt;</code> with <code>aria-live=&quot;polite&quot;</code> announces the rating to screen readers.</li><li>The component is focusable and has a visible focus ring.</li></ul><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><ul><li>For ratings that are not interactive, always use the <code>readonly</code> prop.</li><li>Ensure sufficient color contrast for the star colors, especially when using <code>variant</code>.</li><li>When used in a form, consider associating it with a label for better context.</li></ul>`,17))]))}});export{ks as __pageData,gs as default};
