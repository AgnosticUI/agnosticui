import{A as S}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as _,z as g,a as T,x as C}from"./chunks/Button.DkmThuAs.js";import{n as R}from"./chunks/state-CovhUvdr.CfYrM0Q-.js";import{f as x}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{S as V,F as A,L as D,E as P,T as z,P as L}from"./chunks/floating-ui.dom-muqvZJIo.ByzMQtLc.js";import{d as H,p as q,c as f,o as B,r as O,K as N,_ as M,C as u,j as l,G as s,w as a,a as h,ae as j,k as y}from"./chunks/framework.NAAYCHZu.js";import{v as $}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.DjpUppN5.js";import{S as I}from"./chunks/share-2.C9hlrz3B.js";import{D as U}from"./chunks/download.CKtIbNgn.js";import{T as K}from"./chunks/trash-2.nw5yXCyH.js";import{P as G}from"./chunks/pencil.BO9tY9sk.js";import{F as J}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var W=Object.defineProperty,d=(i,t,n,c)=>{for(var p=void 0,k=i.length-1,o;k>=0;k--)(o=i[k])&&(p=o(t,n,p)||p);return p&&W(t,n,p),p},w;let r=(w=class extends T{constructor(){super(),this._handleMouseEnter=()=>{this.disabled||(clearTimeout(this._hideTimeout),this.show())},this._handleMouseLeave=()=>{this.disabled||(this._hideTimeout=window.setTimeout(()=>{this.hide()},100))},this._handleFocus=()=>{this.disabled||this.show()},this._handleBlur=()=>{this.disabled||this.hide()},this._handleClick=()=>{this.disabled||(this._open?this.hide():this.show())},this._handleDocumentKeyDown=i=>{i.key==="Escape"&&this._open&&this.hide()},this.show=()=>{this._open||this.disabled||(this._open=!0)},this.hide=()=>{this._open&&(this._open=!1)},this.toggle=()=>{this._open?this.hide():this.show()},this.content="",this.placement="top",this.distance=8,this.skidding=0,this.trigger="hover focus",this.disabled=!1,this._open=!1}firstUpdated(){this._setupEventListeners(),this._setupARIA()}_setupEventListeners(){const i=this.firstElementChild;i&&(this.trigger.includes("hover")&&(this.addEventListener("mouseenter",this._handleMouseEnter),this.addEventListener("mouseleave",this._handleMouseLeave)),this.trigger.includes("focus")&&(i.addEventListener("focus",this._handleFocus),i.addEventListener("blur",this._handleBlur)),this.trigger.includes("click")&&i.addEventListener("click",this._handleClick))}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._cleanup)==null||i.call(this),this._removeEventListeners(),document.removeEventListener("keydown",this._handleDocumentKeyDown)}_setupARIA(){}_removeEventListeners(){const i=this.firstElementChild;i&&(this.removeEventListener("mouseenter",this._handleMouseEnter),this.removeEventListener("mouseleave",this._handleMouseLeave),i.removeEventListener("focus",this._handleFocus),i.removeEventListener("blur",this._handleBlur),i.removeEventListener("click",this._handleClick))}updated(i){if(super.updated(i),i.has("_open"))if(this._open){document.addEventListener("keydown",this._handleDocumentKeyDown),this.updateComplete.then(()=>{this._startPositioning()});const t=new CustomEvent("show",{detail:{visible:!0},bubbles:!0,composed:!0});this.dispatchEvent(t),this.onShow&&this.onShow(t)}else{this._stopPositioning(),document.removeEventListener("keydown",this._handleDocumentKeyDown);const t=new CustomEvent("hide",{detail:{visible:!1},bubbles:!0,composed:!0});this.dispatchEvent(t),this.onHide&&this.onHide(t)}}_startPositioning(){var c,p;const i=(c=this.shadowRoot)==null?void 0:c.querySelector("#tooltip"),t=(p=this.shadowRoot)==null?void 0:p.querySelector("#arrow");if(!i||!t)return;const n=this.firstElementChild;n&&(this._updatePosition(),this._cleanup=V(n,i,()=>{this._updatePosition()}))}_stopPositioning(){var i;(i=this._cleanup)==null||i.call(this),this._cleanup=void 0}async _updatePosition(){var m,E;const i=(m=this.shadowRoot)==null?void 0:m.querySelector("#tooltip"),t=(E=this.shadowRoot)==null?void 0:E.querySelector("#arrow");if(!i||!t)return;const n=this.firstElementChild;if(!n)return;const{x:c,y:p,placement:k,middlewareData:o}=await A(n,i,{placement:this.placement,middleware:[D({mainAxis:this.distance,crossAxis:this.skidding}),P(),z({padding:8}),L({element:t})]});Object.assign(i.style,{left:`${c}px`,top:`${p}px`});const{x:e,y:F}=o.arrow??{},v={top:"bottom",right:"left",bottom:"top",left:"right"}[k.split("-")[0]],b=`-${8/2}px`;Object.assign(t.style,{left:e!=null?`${e}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[v]:b})}render(){return C`
      <slot></slot>
      <div
        id="tooltip"
        part="ag-tooltip"
        role="tooltip"
        class="tooltip"
        ?data-show=${this._open}
        @mouseenter="${()=>clearTimeout(this._hideTimeout)}"
        @mouseleave="${this.hide}"
      >
        <slot name="content">${this.content}</slot>
        <div id="arrow" part="ag-tooltip-arrow"></div>
      </div>
    `}},w.styles=_`
    :host {
      display: inline-block;
    }

    #tooltip {
      display: none;
      position: absolute;
      z-index: var(--ag-z-index-modal);
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--ag-motion-fast) ease-in-out;
      background: var(--ag-neutral-900);
      color: var(--ag-white);
      padding: var(--ag-space-2) var(--ag-space-3);
      border-radius: var(--ag-radius-md);
      font-size: var(--ag-font-size-sm);
      max-inline-size: 300px;
    }

    #tooltip[data-show] {
      display: block;
      opacity: 1;
      pointer-events: auto;
    }

    #arrow {
      position: absolute;
      background: inherit;
      width: var(--ag-space-2);
      height: var(--ag-space-2);
      transform: rotate(45deg);
    }
  `,w);d([g({type:String})],r.prototype,"content");d([g({type:String,reflect:!0})],r.prototype,"placement");d([g({type:Number})],r.prototype,"distance");d([g({type:Number})],r.prototype,"skidding");d([g({type:String})],r.prototype,"trigger");d([g({type:Boolean,reflect:!0})],r.prototype,"disabled");d([g({attribute:!1})],r.prototype,"onShow");d([g({attribute:!1})],r.prototype,"onHide");d([R()],r.prototype,"_open");d([x("#tooltip")],r.prototype,"tooltipElement");d([x("#arrow")],r.prototype,"arrowElement");customElements.get("ag-tooltip")||customElements.define("ag-tooltip",r);customElements.get("ag-tooltip")||customElements.define("ag-tooltip",r);const Q=["content","placement","distance","skidding","trigger",".disabled"],X=H({__name:"VueTooltip",props:{content:{default:""},placement:{default:"top"},distance:{default:8},skidding:{default:0},trigger:{default:"hover focus"},disabled:{type:Boolean,default:!1}},emits:["show","hide"],setup(i,{expose:t,emit:n}){const c=n,p=q(),k=e=>{c("show",e.detail)},o=e=>{c("hide",e.detail)};return t({show:()=>{var e;(e=p.value)==null||e.show()},hide:()=>{var e;(e=p.value)==null||e.hide()},toggle:()=>{var e;(e=p.value)==null||e.toggle()}}),(e,F)=>(B(),f("ag-tooltip",N({ref_key:"tooltipRef",ref:p,content:i.content,placement:i.placement,distance:i.distance,skidding:i.skidding,trigger:i.trigger,".disabled":i.disabled,onShow:k,onHide:o},e.$attrs),[O(e.$slots,"default")],48,Q))}}),Y={name:"TooltipExamples",components:{VueTooltip:X,VueButton:$,Pencil:G,Trash2:K,Download:U,Share2:I}},Z={class:"stacked-mobile mbe4"},tt={class:"stacked-mobile mbe4"},it={class:"stacked-mobile mbe4"},st={class:"stacked-mobile mbe4"},et={class:"stacked-mobile mbe4"};function at(i,t,n,c,p,k){const o=u("VueButton"),e=u("VueTooltip"),F=u("Pencil"),v=u("Trash2"),b=u("Download"),m=u("Share2");return B(),f("section",null,[t[11]||(t[11]=l("div",{class:"mbe4"},[l("h2",null,"Basic Tooltip")],-1)),l("div",Z,[s(e,{content:"This is a tooltip"},{default:a(()=>[s(o,null,{default:a(()=>[...t[0]||(t[0]=[h("Hover me",-1)])]),_:1})]),_:1}),s(e,{content:"Tooltips provide helpful context"},{default:a(()=>[s(o,{variant:"primary"},{default:a(()=>[...t[1]||(t[1]=[h("Primary button",-1)])]),_:1})]),_:1}),s(e,{content:"Additional information here"},{default:a(()=>[s(o,{variant:"success"},{default:a(()=>[...t[2]||(t[2]=[h("Success button",-1)])]),_:1})]),_:1})]),t[12]||(t[12]=l("div",{class:"mbe4"},[l("h2",null,"Placement Options")],-1)),l("div",tt,[s(e,{content:"Tooltip on top",placement:"top"},{default:a(()=>[s(o,null,{default:a(()=>[...t[3]||(t[3]=[h("Top",-1)])]),_:1})]),_:1}),s(e,{content:"Tooltip on bottom",placement:"bottom"},{default:a(()=>[s(o,null,{default:a(()=>[...t[4]||(t[4]=[h("Bottom",-1)])]),_:1})]),_:1}),s(e,{content:"Tooltip on left",placement:"left"},{default:a(()=>[s(o,null,{default:a(()=>[...t[5]||(t[5]=[h("Left",-1)])]),_:1})]),_:1}),s(e,{content:"Tooltip on right",placement:"right"},{default:a(()=>[s(o,null,{default:a(()=>[...t[6]||(t[6]=[h("Right",-1)])]),_:1})]),_:1})]),t[13]||(t[13]=l("div",{class:"mbe4"},[l("h2",null,"Trigger Options")],-1)),l("div",it,[s(e,{content:"Hover over me",trigger:"hover"},{default:a(()=>[s(o,null,{default:a(()=>[...t[7]||(t[7]=[h("Hover trigger",-1)])]),_:1})]),_:1}),s(e,{content:"Click to toggle",trigger:"click"},{default:a(()=>[s(o,null,{default:a(()=>[...t[8]||(t[8]=[h("Click trigger",-1)])]),_:1})]),_:1}),s(e,{content:"Hover or focus works",trigger:"hover focus"},{default:a(()=>[s(o,null,{default:a(()=>[...t[9]||(t[9]=[h("Hover + Focus",-1)])]),_:1})]),_:1})]),t[14]||(t[14]=l("div",{class:"mbe4"},[l("h2",null,"Icon-Only Buttons")],-1)),l("div",st,[s(e,{content:"Edit item"},{default:a(()=>[s(o,{"aria-label":"Edit"},{default:a(()=>[s(F,{color:"var(--ag-secondary)",size:18})]),_:1})]),_:1}),s(e,{content:"Delete item"},{default:a(()=>[s(o,{variant:"danger","aria-label":"Delete"},{default:a(()=>[s(v,{color:"var(--ag-white)",size:18})]),_:1})]),_:1}),s(e,{content:"Download file"},{default:a(()=>[s(o,{variant:"success","aria-label":"Download"},{default:a(()=>[s(b,{color:"var(--ag-white)",size:18})]),_:1})]),_:1}),s(e,{content:"Share content"},{default:a(()=>[s(o,{variant:"secondary","aria-label":"Share"},{default:a(()=>[s(m,{color:"var(--ag-neutral-700)",size:18})]),_:1})]),_:1})]),t[15]||(t[15]=l("div",{class:"mbe4"},[l("h2",null,"CSS Shadow Parts Customization"),l("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example. ")],-1)),l("div",et,[s(e,{class:"custom-tooltip-gradient",content:"Customized with CSS Shadow Parts!",placement:"top"},{default:a(()=>[s(o,{variant:"primary"},{default:a(()=>[...t[10]||(t[10]=[h("Gradient Tooltip",-1)])]),_:1})]),_:1})])])}const nt=M(Y,[["render",at]]);class ot extends T{createRenderRoot(){return this}render(){return C`
      <section>
        <div class="mbe4">
          <h2>Basic Tooltip</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip content="This is a tooltip">
            <ag-button>Hover me</ag-button>
          </ag-tooltip>
          <ag-tooltip content="Tooltips provide helpful context">
            <ag-button variant="primary">Primary button</ag-button>
          </ag-tooltip>
          <ag-tooltip content="Additional information here">
            <ag-button variant="success">Success button</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Placement Options</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            content="Tooltip on top"
            placement="top"
          >
            <ag-button>Top</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on bottom"
            placement="bottom"
          >
            <ag-button>Bottom</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on left"
            placement="left"
          >
            <ag-button>Left</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on right"
            placement="right"
          >
            <ag-button>Right</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Trigger Options</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            content="Hover over me"
            trigger="hover"
          >
            <ag-button>Hover trigger</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Click to toggle"
            trigger="click"
          >
            <ag-button>Click trigger</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Hover or focus works"
            trigger="hover focus"
          >
            <ag-button>Hover + Focus</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Icon-Only Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip content="Edit item">
            <ag-button aria-label="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Delete item">
            <ag-button
              variant="danger"
              aria-label="Delete"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Download file">
            <ag-button
              variant="success"
              aria-label="Download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Share content">
            <ag-button
              variant="secondary"
              aria-label="Share"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-neutral-700)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            </ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            class="custom-tooltip-gradient"
            content="Customized with CSS Shadow Parts!"
            placement="top"
          >
            <ag-button variant="primary">Gradient Tooltip</ag-button>
          </ag-tooltip>
        </div>
      </section>
    `}}customElements.define("tooltip-lit-examples",ot);const lt=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Tooltip</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip content="This is a tooltip">
        <VueButton>Hover me</VueButton>
      </VueTooltip>
      <VueTooltip content="Tooltips provide helpful context">
        <VueButton variant="primary">Primary button</VueButton>
      </VueTooltip>
      <VueTooltip content="Additional information here">
        <VueButton variant="success">Success button</VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h2>Placement Options</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="Tooltip on top"
        placement="top"
      >
        <VueButton>Top</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Tooltip on bottom"
        placement="bottom"
      >
        <VueButton>Bottom</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Tooltip on left"
        placement="left"
      >
        <VueButton>Left</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Tooltip on right"
        placement="right"
      >
        <VueButton>Right</VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h2>Trigger Options</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="Hover over me"
        trigger="hover"
      >
        <VueButton>Hover trigger</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Click to toggle"
        trigger="click"
      >
        <VueButton>Click trigger</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Hover or focus works"
        trigger="hover focus"
      >
        <VueButton>Hover + Focus</VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h2>Icon-Only Buttons</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip content="Edit item">
        <VueButton aria-label="Edit">
          <Pencil
            color="var(--ag-secondary)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Delete item">
        <VueButton
          variant="danger"
          aria-label="Delete"
        >
          <Trash2
            color="var(--ag-white)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Download file">
        <VueButton
          variant="success"
          aria-label="Download"
        >
          <Download
            color="var(--ag-white)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Share content">
        <VueButton
          variant="secondary"
          aria-label="Share"
        >
          <Share2
            color="var(--ag-neutral-700)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        class="custom-tooltip-gradient"
        content="Customized with CSS Shadow Parts!"
        placement="top"
      >
        <VueButton variant="primary">Gradient Tooltip</VueButton>
      </VueTooltip>
    </div>
  </section>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import { Pencil, Trash2, Download, Share2 } from "lucide-vue-next";

export default {
  name: "TooltipExamples",
  components: {
    VueTooltip,
    VueButton,
    Pencil,
    Trash2,
    Download,
    Share2,
  },
};
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-tooltip-gradient::part(ag-tooltip) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 250px;
}

/* The border-based arrow, floating-ui's flip, and other complexities makes
the ROI on having an arrow questionable. So, we just hide ¯\\_(ツ)_/¯  */
.custom-tooltip-gradient::part(ag-tooltip-arrow) {
  display: none;
}
</style>
`,pt=`import { LitElement, html } from 'lit';
import 'agnosticui-core/tooltip';
import 'agnosticui-core/button';

export class TooltipLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Tooltip</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip content="This is a tooltip">
            <ag-button>Hover me</ag-button>
          </ag-tooltip>
          <ag-tooltip content="Tooltips provide helpful context">
            <ag-button variant="primary">Primary button</ag-button>
          </ag-tooltip>
          <ag-tooltip content="Additional information here">
            <ag-button variant="success">Success button</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Placement Options</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            content="Tooltip on top"
            placement="top"
          >
            <ag-button>Top</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on bottom"
            placement="bottom"
          >
            <ag-button>Bottom</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on left"
            placement="left"
          >
            <ag-button>Left</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on right"
            placement="right"
          >
            <ag-button>Right</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Trigger Options</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            content="Hover over me"
            trigger="hover"
          >
            <ag-button>Hover trigger</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Click to toggle"
            trigger="click"
          >
            <ag-button>Click trigger</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Hover or focus works"
            trigger="hover focus"
          >
            <ag-button>Hover + Focus</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Icon-Only Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip content="Edit item">
            <ag-button aria-label="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Delete item">
            <ag-button
              variant="danger"
              aria-label="Delete"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Download file">
            <ag-button
              variant="success"
              aria-label="Download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Share content">
            <ag-button
              variant="secondary"
              aria-label="Share"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-neutral-700)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            </ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            class="custom-tooltip-gradient"
            content="Customized with CSS Shadow Parts!"
            placement="top"
          >
            <ag-button variant="primary">Gradient Tooltip</ag-button>
          </ag-tooltip>
        </div>
      </section>
    \`;
  }
}

customElements.define('tooltip-lit-examples', TooltipLitExamples);
`,ht=`import { ReactTooltip } from "agnosticui-core/tooltip/react";
import { ReactButton } from "agnosticui-core/button/react";
import { Pencil, Trash2, Download, Share2 } from "lucide-react";

export default function TooltipReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Basic Tooltip</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip content="This is a tooltip">
          <ReactButton>Hover me</ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Tooltips provide helpful context">
          <ReactButton variant="primary">Primary button</ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Additional information here">
          <ReactButton variant="success">Success button</ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>Placement Options</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip
          content="Tooltip on top"
          placement="top"
        >
          <ReactButton>Top</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Tooltip on bottom"
          placement="bottom"
        >
          <ReactButton>Bottom</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Tooltip on left"
          placement="left"
        >
          <ReactButton>Left</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Tooltip on right"
          placement="right"
        >
          <ReactButton>Right</ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>Trigger Options</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip
          content="Hover over me"
          trigger="hover"
        >
          <ReactButton>Hover trigger</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Click to toggle"
          trigger="click"
        >
          <ReactButton>Click trigger</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Hover or focus works"
          trigger="hover focus"
        >
          <ReactButton>Hover + Focus</ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>Icon-Only Buttons</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip content="Edit item">
          <ReactButton aria-label="Edit">
            <Pencil
              color="var(--ag-secondary)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Delete item">
          <ReactButton
            variant="danger"
            aria-label="Delete"
          >
            <Trash2
              color="var(--ag-white)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Download file">
          <ReactButton
            variant="success"
            aria-label="Download"
          >
            <Download
              color="var(--ag-white)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Share content">
          <ReactButton
            variant="secondary"
            aria-label="Share"
          >
            <Share2
              color="var(--ag-neutral-700)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip
          className="custom-tooltip-gradient"
          content="Customized with CSS Shadow Parts!"
          placement="top"
        >
          <ReactButton variant="primary">Gradient Tooltip</ReactButton>
        </ReactTooltip>
      </div>
    </section>
  );
}
`,Ct=JSON.parse('{"title":"Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md"}'),rt={name:"components/tooltip.md"},xt=Object.assign(rt,{setup(i){return(t,n)=>(B(),f("div",null,[n[1]||(n[1]=l("h1",{id:"tooltip",tabindex:"-1"},[h("Tooltip "),l("a",{class:"header-anchor",href:"#tooltip","aria-label":'Permalink to "Tooltip"'},"​")],-1)),s(S),n[2]||(n[2]=l("p",null,"A flexible, accessible tooltip component that displays contextual information on hover, focus, or click.",-1)),n[3]||(n[3]=l("h2",{id:"examples",tabindex:"-1"},[h("Examples "),l("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s(J,{component:"tooltip","vue-code":y(lt),"lit-code":y(pt),"react-code":y(ht)},{vue:a(()=>[s(nt)]),lit:a(()=>[...n[0]||(n[0]=[l("tooltip-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=j("",22))]))}});export{Ct as __pageData,xt as default};
