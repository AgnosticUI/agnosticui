import{A as v}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as f,z as F,a as m,x as u}from"./chunks/Button.Bujdzq23.js";import{d as C,c as d,o,r as A,af as x,ag as B,_ as w,j as a,ae as E,G as k,a as e,w as y,k as r}from"./chunks/framework.NAAYCHZu.js";import{F as D}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";var R=Object.defineProperty,g=(n,t,s,p)=>{for(var i=void 0,h=n.length-1,c;h>=0;h--)(c=n[h])&&(i=c(t,s,i)||i);return i&&R(t,s,i),i};const b=class extends m{constructor(){super(),this.width=1,this.height=1,this.maxWidth=void 0}get _aspectStyle(){const t=this.width||1,s=this.height||1,p=`${t} / ${s}`,i=[];return i.push(`aspect-ratio: ${p};`),this.maxWidth!==void 0&&this.maxWidth!==null&&(i.push(`max-inline-size: ${this.maxWidth}px;`),i.push("margin-inline-start: auto; margin-inline-end: auto;")),i.join(" ")}render(){return u`
      <div part="ag-aspect-ratio" class="ratio" style=${this._aspectStyle}>
        <slot></slot>
      </div>
    `}};b.styles=f`
    :host {
      display: block;
      width: 100%;
    }

    /* wrapper that enforces aspect ratio */
    .ratio {
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;
      display: block;
    }

    /* Make slotted child fill the container */
    ::slotted(*) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 0;
    }
  `;let l=b;g([F({type:Number})],l.prototype,"width");g([F({type:Number})],l.prototype,"height");g([F({type:Number,attribute:"max-width"})],l.prototype,"maxWidth");customElements.get("ag-aspect-ratio")||customElements.define("ag-aspect-ratio",l);const q=C({__name:"VueAspectRatio",setup(n){return(t,s)=>(o(),d("ag-aspect-ratio",x(B(t.$attrs)),[A(t.$slots,"default")],16))}}),S=C({name:"VueAspectRatio",components:{VueAspectRatio:q}});function _(n,t,s,p,i,h){return o(),d("div",null,[...t[0]||(t[0]=[a("h2",null,"Constrained max-width",-1),a("ag-aspect-ratio",{class:"mbs4",width:4,height:3,"max-width":400},[a("div",{style:{background:"var(--ag-background-tertiary)",color:"var(--vp-c-text-1)",width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},"4:3 box")],-1),E('<h2>Square (1:1)</h2><div class="full-width"><ag-aspect-ratio class="mbs4" width="1" height="1" style="width:200px;margin:0 auto;"><div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);width:100%;height:100%;display:flex;align-items:center;justify-content:center;">1:1 box</div></ag-aspect-ratio></div><div class="mbe32"></div><div class="mbe4"><h2>CSS Shadow Parts Customization</h2></div><p class="mbe16">The aspect ratio component exposes the <code>::part(ag-aspect-ratio)</code> selector, allowing you to style the internal container with custom CSS:</p><div class="custom-example"><ag-aspect-ratio class="mbs4" width="16" height="9" style="max-width:600px;" aria-label="Styled aspect ratio"><img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="Mountain landscape" style="width:100%;height:100%;object-fit:cover;"></ag-aspect-ratio></div><h2>Responsive 16:9 iframe</h2>',7),a("ag-aspect-ratio",{class:"mbs4",width:16,height:9,style:{"max-width":"600px"},"aria-label":"16:9 iframe"},[a("iframe",{title:"16:9 iframe","aria-label":"16:9 iframe",style:{width:"100%",height:"100%",border:"0"},srcdoc:"<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>",frameborder:"0"})],-1)])])}const j=w(S,[["render",_]]);class $ extends m{createRenderRoot(){return this}render(){return u`
      <div>
        <h2>Constrained max-width</h2>
        <ag-aspect-ratio
          class="mbs4"
          .width=${4}
          .height=${3}
          .maxWidth=${400}
        >
          <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);width:100%;height:100%;display:flex;align-items:center;justify-content:center">
            4:3 box
          </div>
        </ag-aspect-ratio>

        <h2>Square (1:1)</h2>
        <div class="full-width">
          <ag-aspect-ratio
            class="mbs4"
            .width=${1}
            .height=${1}
            style="width:200px; margin: 0 auto;"
          >
            <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);width:100%;height:100%;display:flex;align-items:center;justify-content:center">
              1:1 box
            </div>
          </ag-aspect-ratio>
        </div>

        <div class="mbe32"></div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <p class="mbe16">
          The aspect ratio component exposes the <code>::part(ag-aspect-ratio)</code> selector, allowing you to style the internal container with custom CSS:
        </p>

        <div class="custom-example">
          <ag-aspect-ratio
            class="mbs4"
            .width=${16}
            .height=${9}
            style="max-width: 600px;"
            aria-label="Styled aspect ratio"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
              alt="Mountain landscape"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
          </ag-aspect-ratio>
        </div>

        <h2>Responsive 16:9 iframe</h2>
        <ag-aspect-ratio
          class="mbs4"
          .width=${16}
          .height=${9}
          style="max-width: 600px;"
          aria-label="16:9 iframe"
        >
          <iframe
            title="16:9 iframe"
            aria-label="16:9 iframe"
            style="width:100%;height:100%;border:0;"
            srcdoc="<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>"
            frameborder="0"
          ></iframe>
        </ag-aspect-ratio>

        <style>
          .custom-example ag-aspect-ratio::part(ag-aspect-ratio) {
            border: 3px solid var(--agnostic-primary);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            overflow: hidden;
          }
        </style>
      </div>
    `}}customElements.define("aspect-ratio-lit-examples",$);const P=`<template>
  <div>
    <h2>Constrained max-width</h2>
    <ag-aspect-ratio
      class="mbs4"
      :width="4"
      :height="3"
      :max-width="400"
    >
      <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);;width:100%;height:100%;display:flex;align-items:center;justify-content:center">4:3 box</div>
    </ag-aspect-ratio>

    <h2>Square (1:1)</h2>
    <div class="full-width">
      <ag-aspect-ratio
        class="mbs4"
        :width="1"
        :height="1"
        style="width:200px; margin: 0 auto;"
      >
        <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);;width:100%;height:100%;display:flex;align-items:center;justify-content:center">1:1 box</div>
      </ag-aspect-ratio>
    </div>

    <div class="mbe32"></div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
    </div>
    <p class="mbe16">The aspect ratio component exposes the <code>::part(ag-aspect-ratio)</code> selector, allowing you to style the internal container with custom CSS:</p>

    <div class="custom-example">
      <ag-aspect-ratio
        class="mbs4"
        :width="16"
        :height="9"
        style="max-width: 600px;"
        aria-label="Styled aspect ratio"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
          alt="Mountain landscape"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </ag-aspect-ratio>
    </div>

    <h2>Responsive 16:9 iframe</h2>
    <ag-aspect-ratio
      class="mbs4"
      :width="16"
      :height="9"
      style="max-width: 600px;"
      aria-label="16:9 iframe"
    >
      <iframe
        title="16:9 iframe"
        aria-label="16:9 iframe"
        style="width:100%;height:100%;border:0;"
        srcdoc="<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>"
        frameborder="0"
      ></iframe>
    </ag-aspect-ratio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueAspectRatio } from "agnosticui-core/aspect-ratio/vue";
export default defineComponent({
  name: "VueAspectRatio",
  components: {
    VueAspectRatio,
  },
});
<\/script>

<style>
.custom-example ag-aspect-ratio::part(ag-aspect-ratio) {
  border: 3px solid var(--agnostic-primary);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
</style>
`,T=`import { LitElement, html } from 'lit';
import 'agnosticui-core/aspect-ratio';

export class AspectRatioLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <div>
        <h2>Constrained max-width</h2>
        <ag-aspect-ratio
          class="mbs4"
          .width=\${4}
          .height=\${3}
          .maxWidth=\${400}
        >
          <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);width:100%;height:100%;display:flex;align-items:center;justify-content:center">
            4:3 box
          </div>
        </ag-aspect-ratio>

        <h2>Square (1:1)</h2>
        <div class="full-width">
          <ag-aspect-ratio
            class="mbs4"
            .width=\${1}
            .height=\${1}
            style="width:200px; margin: 0 auto;"
          >
            <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);width:100%;height:100%;display:flex;align-items:center;justify-content:center">
              1:1 box
            </div>
          </ag-aspect-ratio>
        </div>

        <div class="mbe32"></div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <p class="mbe16">
          The aspect ratio component exposes the <code>::part(ag-aspect-ratio)</code> selector, allowing you to style the internal container with custom CSS:
        </p>

        <div class="custom-example">
          <ag-aspect-ratio
            class="mbs4"
            .width=\${16}
            .height=\${9}
            style="max-width: 600px;"
            aria-label="Styled aspect ratio"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
              alt="Mountain landscape"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
          </ag-aspect-ratio>
        </div>

        <h2>Responsive 16:9 iframe</h2>
        <ag-aspect-ratio
          class="mbs4"
          .width=\${16}
          .height=\${9}
          style="max-width: 600px;"
          aria-label="16:9 iframe"
        >
          <iframe
            title="16:9 iframe"
            aria-label="16:9 iframe"
            style="width:100%;height:100%;border:0;"
            srcdoc="<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>"
            frameborder="0"
          ></iframe>
        </ag-aspect-ratio>

        <style>
          .custom-example ag-aspect-ratio::part(ag-aspect-ratio) {
            border: 3px solid var(--agnostic-primary);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            overflow: hidden;
          }
        </style>
      </div>
    \`;
  }
}

customElements.define('aspect-ratio-lit-examples', AspectRatioLitExamples);
`,V=`import { ReactAspectRatio } from "agnosticui-core/aspect-ratio/react";

export default function AspectRatioReactExamples() {
  return (
    <div>
      <h2>Constrained max-width</h2>
      <ReactAspectRatio
        className="mbs4"
        width={4}
        height={3}
        maxWidth={400}
      >
        <div style={{ background: 'var(--ag-background-tertiary)', color: 'var(--vp-c-text-1)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          4:3 box
        </div>
      </ReactAspectRatio>

      <h2>Square (1:1)</h2>
      <div className="full-width">
        <ReactAspectRatio
          className="mbs4"
          width={1}
          height={1}
          style={{ width: '200px', margin: '0 auto' }}
        >
          <div style={{ background: 'var(--ag-background-tertiary)', color: 'var(--vp-c-text-1)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            1:1 box
          </div>
        </ReactAspectRatio>
      </div>

      <div className="mbe32"></div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
      </div>
      <p className="mbe16">
        The aspect ratio component exposes the <code>::part(ag-aspect-ratio)</code> selector, allowing you to style the internal container with custom CSS:
      </p>

      <div className="custom-example">
        <ReactAspectRatio
          className="mbs4"
          width={16}
          height={9}
          style={{ maxWidth: '600px' }}
          aria-label="Styled aspect ratio"
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
            alt="Mountain landscape"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ReactAspectRatio>
      </div>

      <h2>Responsive 16:9 iframe</h2>
      <ReactAspectRatio
        className="mbs4"
        width={16}
        height={9}
        style={{ maxWidth: '600px' }}
        aria-label="16:9 iframe"
      >
        <iframe
          title="16:9 iframe"
          aria-label="16:9 iframe"
          style={{ width: '100%', height: '100%', border: '0' }}
          srcDoc="<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>"
          frameBorder="0"
        />
      </ReactAspectRatio>

      {/* CSS Parts customization styles */}
      <style>{\`
        .custom-example ag-aspect-ratio::part(ag-aspect-ratio) {
          border: 3px solid var(--agnostic-primary);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }
      \`}</style>
    </div>
  );
}
`,U=JSON.parse('{"title":"Aspect Ratio","description":"","frontmatter":{"title":"Aspect Ratio"},"headers":[],"relativePath":"components/aspect-ratio.md","filePath":"components/aspect-ratio.md"}'),N={name:"components/aspect-ratio.md"},X=Object.assign(N,{setup(n){return(t,s)=>(o(),d("div",null,[s[1]||(s[1]=a("h1",{id:"aspect-ratio",tabindex:"-1"},[e("Aspect Ratio "),a("a",{class:"header-anchor",href:"#aspect-ratio","aria-label":'Permalink to "Aspect Ratio"'},"​")],-1)),k(v),s[2]||(s[2]=a("p",null,[e("The AgnosticUI AspectRatio component provides an easy, modern way to reserve space for embedded content (videos, iframes, third-party widgets) while preserving a given aspect ratio. It leverages the native CSS "),a("code",null,"aspect-ratio"),e(" property and exposes a simple API.")],-1)),s[3]||(s[3]=a("h2",{id:"examples",tabindex:"-1"},[e("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),k(D,{component:"aspect-ratio","vue-code":r(P),"lit-code":r(T),"react-code":r(V)},{vue:y(()=>[k(j)]),lit:y(()=>[...s[0]||(s[0]=[a("aspect-ratio-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),s[4]||(s[4]=E(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> AspectRatio</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">16</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">9</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">iframe</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://www.youtube.com/embed/dQw4w9WgXcQ&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> frameborder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">iframe</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">16</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">9</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">max-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#ccc</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">flex</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">align-items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">center</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">justify-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">center</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        16:9 with max-width</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">flex</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">align-items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">center</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">justify-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">center</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        1:1 Square</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueAspectRatio } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/aspect-ratio/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueAspectRatio }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactAspectRatio } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/aspect-ratio/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAspectRatio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> width</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">16</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> height</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">9</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">iframe</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> src</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://www.youtube.com/embed/dQw4w9WgXcQ&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> frameborder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">iframe</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAspectRatio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> width</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">16</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> height</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">9</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> maxWidth</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ background: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#ccc&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, width: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;100%&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, height: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;100%&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;flex&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, alignItems: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;center&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, justifyContent: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;center&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          16:9 with max-width</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAspectRatio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> width</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> height</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ background: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#667eea&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, width: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;100%&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, height: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;100%&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;flex&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, alignItems: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;center&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, justifyContent: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;center&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, color: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;white&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          1:1 Square</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactAspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/aspect-ratio&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-aspect-ratio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;9&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">iframe</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://www.youtube.com/embed/dQw4w9WgXcQ&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> frameborder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">iframe</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-aspect-ratio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-aspect-ratio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;9&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .max-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;600&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;background: #ccc; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      16:9 with max-width</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-aspect-ratio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-aspect-ratio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;background: #667eea; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      1:1 Square</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-aspect-ratio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="why-use-aspect-ratio" tabindex="-1">Why use <code>aspect-ratio</code>? <a class="header-anchor" href="#why-use-aspect-ratio" aria-label="Permalink to &quot;Why use \`aspect-ratio\`?&quot;">​</a></h3><ul><li>Cleaner code than padding-top hacks</li><li>Prevents layout shift by reserving correct space</li><li>Native browser support across modern browsers</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>width</code></td><td><code>number</code></td><td><code>1</code></td><td>Aspect ratio width (e.g., 16)</td></tr><tr><td><code>height</code></td><td><code>number</code></td><td><code>1</code></td><td>Aspect ratio height (e.g., 9)</td></tr><tr><td><code>max-width</code></td><td><code>number</code></td><td><code>undefined</code></td><td>Optional maximum width in pixels</td></tr></tbody></table><h2 id="css-parts" tabindex="-1">CSS Parts <a class="header-anchor" href="#css-parts" aria-label="Permalink to &quot;CSS Parts&quot;">​</a></h2><ul><li><code>::part(ag-aspect-ratio)</code> - The ratio enforcement wrapper</li></ul>`,11))]))}});export{U as __pageData,X as default};
