import{A as v}from"./chunks/AlphaWarning.CKFYAqLS.js";import{i as B}from"./chunks/Tooltip.BZ_QxwKK.js";import{d as f,p as w,c as k,o as g,r as T,K as C,_ as E,C as h,j as n,G as t,w as s,a as l,ag as x,k as c}from"./chunks/framework.DmF2n0Fc.js";import{v as S}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.Cl3S9w1o.js";import{S as V}from"./chunks/share-2.BT-AmNXl.js";import{D as R}from"./chunks/download.B8lB6_ut.js";import{T as A}from"./chunks/trash-2.Dr472jy1.js";import{c as D}from"./chunks/createLucideIcon.U6K_rCrv.js";import{F as P}from"./chunks/FrameworkExample.D4gn8Xfe.js";import{a as _,x as z}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import"./chunks/Button.BmTmCFep.js";import"./chunks/state-CovhUvdr.C-u8O0Fo.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/floating-ui.dom-muqvZJIo.ByzMQtLc.js";import"./chunks/sdk.m.Dxhqq5iP.js";import"./chunks/Icon.CxPOY7rJ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=D("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);customElements.get("ag-tooltip")||customElements.define("ag-tooltip",B);const q=["content","placement","distance","skidding","trigger",".disabled"],O=f({__name:"VueTooltip",props:{content:{default:""},placement:{default:"top"},distance:{default:8},skidding:{default:0},trigger:{default:"hover focus"},disabled:{type:Boolean,default:!1}},emits:["show","hide"],setup(p,{expose:i,emit:o}){const d=o,r=w(),u=a=>{d("show",a.detail)},e=a=>{d("hide",a.detail)};return i({show:()=>{var a;(a=r.value)==null||a.show()},hide:()=>{var a;(a=r.value)==null||a.hide()},toggle:()=>{var a;(a=r.value)==null||a.toggle()}}),(a,F)=>(g(),k("ag-tooltip",C({ref_key:"tooltipRef",ref:r,content:p.content,placement:p.placement,distance:p.distance,skidding:p.skidding,trigger:p.trigger,".disabled":p.disabled,onShow:u,onHide:e},a.$attrs),[T(a.$slots,"default")],48,q))}}),L={name:"TooltipExamples",components:{VueTooltip:O,VueButton:S,Pencil:H,Trash2:A,Download:R,Share2:V}},N={class:"stacked-mobile mbe4"},j={class:"stacked-mobile mbe4"},I={class:"stacked-mobile mbe4"},M={class:"stacked-mobile mbe4"},$={class:"stacked-mobile mbe4"};function U(p,i,o,d,r,u){const e=h("VueButton"),a=h("VueTooltip"),F=h("Pencil"),m=h("Trash2"),b=h("Download"),y=h("Share2");return g(),k("section",null,[i[11]||(i[11]=n("div",{class:"mbe4"},[n("h2",null,"Basic Tooltip")],-1)),n("div",N,[t(a,{content:"This is a tooltip"},{default:s(()=>[t(e,null,{default:s(()=>[...i[0]||(i[0]=[l("Hover me",-1)])]),_:1})]),_:1}),t(a,{content:"Tooltips provide helpful context"},{default:s(()=>[t(e,{variant:"primary"},{default:s(()=>[...i[1]||(i[1]=[l("Primary button",-1)])]),_:1})]),_:1}),t(a,{content:"Additional information here"},{default:s(()=>[t(e,{variant:"success"},{default:s(()=>[...i[2]||(i[2]=[l("Success button",-1)])]),_:1})]),_:1})]),i[12]||(i[12]=n("div",{class:"mbe4"},[n("h2",null,"Placement Options")],-1)),n("div",j,[t(a,{content:"Tooltip on top",placement:"top"},{default:s(()=>[t(e,null,{default:s(()=>[...i[3]||(i[3]=[l("Top",-1)])]),_:1})]),_:1}),t(a,{content:"Tooltip on bottom",placement:"bottom"},{default:s(()=>[t(e,null,{default:s(()=>[...i[4]||(i[4]=[l("Bottom",-1)])]),_:1})]),_:1}),t(a,{content:"Tooltip on left",placement:"left"},{default:s(()=>[t(e,null,{default:s(()=>[...i[5]||(i[5]=[l("Left",-1)])]),_:1})]),_:1}),t(a,{content:"Tooltip on right",placement:"right"},{default:s(()=>[t(e,null,{default:s(()=>[...i[6]||(i[6]=[l("Right",-1)])]),_:1})]),_:1})]),i[13]||(i[13]=n("div",{class:"mbe4"},[n("h2",null,"Trigger Options")],-1)),n("div",I,[t(a,{content:"Hover over me",trigger:"hover"},{default:s(()=>[t(e,null,{default:s(()=>[...i[7]||(i[7]=[l("Hover trigger",-1)])]),_:1})]),_:1}),t(a,{content:"Click to toggle",trigger:"click"},{default:s(()=>[t(e,null,{default:s(()=>[...i[8]||(i[8]=[l("Click trigger",-1)])]),_:1})]),_:1}),t(a,{content:"Hover or focus works",trigger:"hover focus"},{default:s(()=>[t(e,null,{default:s(()=>[...i[9]||(i[9]=[l("Hover + Focus",-1)])]),_:1})]),_:1})]),i[14]||(i[14]=n("div",{class:"mbe4"},[n("h2",null,"Icon-Only Buttons")],-1)),n("div",M,[t(a,{content:"Edit item"},{default:s(()=>[t(e,{"aria-label":"Edit"},{default:s(()=>[t(F,{color:"var(--ag-secondary)",size:18})]),_:1})]),_:1}),t(a,{content:"Delete item"},{default:s(()=>[t(e,{variant:"danger","aria-label":"Delete"},{default:s(()=>[t(m,{color:"var(--ag-white)",size:18})]),_:1})]),_:1}),t(a,{content:"Download file"},{default:s(()=>[t(e,{variant:"success","aria-label":"Download"},{default:s(()=>[t(b,{color:"var(--ag-white)",size:18})]),_:1})]),_:1}),t(a,{content:"Share content"},{default:s(()=>[t(e,{variant:"secondary","aria-label":"Share"},{default:s(()=>[t(y,{color:"var(--ag-neutral-700)",size:18})]),_:1})]),_:1})]),i[15]||(i[15]=n("div",{class:"mbe4"},[n("h2",null,"CSS Shadow Parts Customization"),n("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example. ")],-1)),n("div",$,[t(a,{class:"custom-tooltip-gradient",content:"Customized with CSS Shadow Parts!",placement:"top"},{default:s(()=>[t(e,{variant:"primary"},{default:s(()=>[...i[10]||(i[10]=[l("Gradient Tooltip",-1)])]),_:1})]),_:1})])])}const G=E(L,[["render",U]]);class J extends _{createRenderRoot(){return this}render(){return z`
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
    `}}customElements.define("tooltip-lit-examples",J);const K=`<template>
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
import { VueTooltip } from "agnosticui-core/tooltip/vue";
import { VueButton } from "agnosticui-core/button/vue";
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
`,W=`import { LitElement, html } from 'lit';
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
`,Q=`import { ReactTooltip } from "agnosticui-core/tooltip/react";
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
`,gt=JSON.parse('{"title":"Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md"}'),X={name:"components/tooltip.md"},ut=Object.assign(X,{setup(p){return(i,o)=>(g(),k("div",null,[o[1]||(o[1]=n("h1",{id:"tooltip",tabindex:"-1"},[l("Tooltip "),n("a",{class:"header-anchor",href:"#tooltip","aria-label":'Permalink to "Tooltip"'},"​")],-1)),t(v),o[2]||(o[2]=n("p",null,"A flexible, accessible tooltip component that displays contextual information on hover, focus, or click.",-1)),o[3]||(o[3]=n("h2",{id:"examples",tabindex:"-1"},[l("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(P,{component:"tooltip","vue-code":c(K),"lit-code":c(W),"react-code":c(Q)},{vue:s(()=>[t(G)]),lit:s(()=>[...o[0]||(o[0]=[n("tooltip-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),o[4]||(o[4]=x("",22))]))}});export{gt as __pageData,ut as default};
