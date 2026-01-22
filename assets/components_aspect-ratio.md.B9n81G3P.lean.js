import{A as v}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as f,z as F,a as m,x as u}from"./chunks/Button.DkmThuAs.js";import{d as C,c as d,o,r as A,af as x,ag as B,_ as w,j as a,ae as E,G as k,a as e,w as y,k as r}from"./chunks/framework.NAAYCHZu.js";import{F as D}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var R=Object.defineProperty,g=(n,t,s,p)=>{for(var i=void 0,h=n.length-1,c;h>=0;h--)(c=n[h])&&(i=c(t,s,i)||i);return i&&R(t,s,i),i};const b=class extends m{constructor(){super(),this.width=1,this.height=1,this.maxWidth=void 0}get _aspectStyle(){const t=this.width||1,s=this.height||1,p=`${t} / ${s}`,i=[];return i.push(`aspect-ratio: ${p};`),this.maxWidth!==void 0&&this.maxWidth!==null&&(i.push(`max-inline-size: ${this.maxWidth}px;`),i.push("margin-inline-start: auto; margin-inline-end: auto;")),i.join(" ")}render(){return u`
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
  `;let l=b;g([F({type:Number})],l.prototype,"width");g([F({type:Number})],l.prototype,"height");g([F({type:Number,attribute:"max-width"})],l.prototype,"maxWidth");customElements.get("ag-aspect-ratio")||customElements.define("ag-aspect-ratio",l);const q=C({__name:"VueAspectRatio",setup(n){return(t,s)=>(o(),d("ag-aspect-ratio",x(B(t.$attrs)),[A(t.$slots,"default")],16))}}),S=C({name:"VueAspectRatio",components:{VueAspectRatio:q}});function _(n,t,s,p,i,h){return o(),d("div",null,[...t[0]||(t[0]=[a("h2",null,"Constrained max-width",-1),a("ag-aspect-ratio",{class:"mbs4",width:4,height:3,"max-width":400},[a("div",{style:{background:"var(--ag-background-tertiary)",color:"var(--vp-c-text-1)",width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},"4:3 box")],-1),E("",7),a("ag-aspect-ratio",{class:"mbs4",width:16,height:9,style:{"max-width":"600px"},"aria-label":"16:9 iframe"},[a("iframe",{title:"16:9 iframe","aria-label":"16:9 iframe",style:{width:"100%",height:"100%",border:"0"},srcdoc:"<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>",frameborder:"0"})],-1)])])}const j=w(S,[["render",_]]);class $ extends m{createRenderRoot(){return this}render(){return u`
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
`,G=JSON.parse('{"title":"Aspect Ratio","description":"","frontmatter":{"title":"Aspect Ratio"},"headers":[],"relativePath":"components/aspect-ratio.md","filePath":"components/aspect-ratio.md"}'),N={name:"components/aspect-ratio.md"},J=Object.assign(N,{setup(n){return(t,s)=>(o(),d("div",null,[s[1]||(s[1]=a("h1",{id:"aspect-ratio",tabindex:"-1"},[e("Aspect Ratio "),a("a",{class:"header-anchor",href:"#aspect-ratio","aria-label":'Permalink to "Aspect Ratio"'},"​")],-1)),k(v),s[2]||(s[2]=a("p",null,[e("The AgnosticUI AspectRatio component provides an easy, modern way to reserve space for embedded content (videos, iframes, third-party widgets) while preserving a given aspect ratio. It leverages the native CSS "),a("code",null,"aspect-ratio"),e(" property and exposes a simple API.")],-1)),s[3]||(s[3]=a("h2",{id:"examples",tabindex:"-1"},[e("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),k(D,{component:"aspect-ratio","vue-code":r(P),"lit-code":r(T),"react-code":r(V)},{vue:y(()=>[k(j)]),lit:y(()=>[...s[0]||(s[0]=[a("aspect-ratio-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),s[4]||(s[4]=E("",11))]))}});export{G as __pageData,J as default};
