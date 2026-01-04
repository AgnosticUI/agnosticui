import{A as C}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as m,a as A,x as E}from"./chunks/lit-element.B0TUrqGF.js";import{z as k}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{d as y,c as F,o as r,r as D,af as b,ag as B,_ as v,j as t,ae as c,G as o,a as p}from"./chunks/framework.DvJW1jwp.js";var f=Object.defineProperty,d=(h,a,s,e)=>{for(var i=void 0,n=h.length-1,g;n>=0;n--)(g=h[n])&&(i=g(a,s,i)||i);return i&&f(a,s,i),i};const u=class extends A{constructor(){super(),this.width=1,this.height=1,this.maxWidth=void 0}get _aspectStyle(){const a=this.width||1,s=this.height||1,e=`${a} / ${s}`,i=[];return i.push(`aspect-ratio: ${e};`),this.maxWidth!==void 0&&this.maxWidth!==null&&(i.push(`max-inline-size: ${this.maxWidth}px;`),i.push("margin-inline-start: auto; margin-inline-end: auto;")),i.join(" ")}render(){return E`
      <div part="ag-aspect-ratio" class="ratio" style=${this._aspectStyle}>
        <slot></slot>
      </div>
    `}};u.styles=m`
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
  `;let l=u;d([k({type:Number})],l.prototype,"width");d([k({type:Number})],l.prototype,"height");d([k({type:Number,attribute:"max-width"})],l.prototype,"maxWidth");customElements.get("ag-aspect-ratio")||customElements.define("ag-aspect-ratio",l);const w=y({__name:"VueAspectRatio",setup(h){return(a,s)=>(r(),F("ag-aspect-ratio",b(B(a.$attrs)),[D(a.$slots,"default")],16))}}),x=y({name:"VueAspectRatio",components:{VueAspectRatio:w}});function q(h,a,s,e,i,n){return r(),F("div",null,[...a[0]||(a[0]=[t("h2",null,"Constrained max-width",-1),t("ag-aspect-ratio",{class:"mbs4",width:4,height:3,"max-width":400},[t("div",{style:{background:"var(--ag-background-tertiary)",color:"var(--vp-c-text-1)",width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},"4:3 box")],-1),c("",7),t("ag-aspect-ratio",{class:"mbs4",width:16,height:9,style:{"max-width":"600px"},"aria-label":"16:9 iframe"},[t("iframe",{title:"16:9 iframe","aria-label":"16:9 iframe",style:{width:"100%",height:"100%",border:"0"},srcdoc:"<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>",frameborder:"0"})],-1)])])}const _=v(x,[["render",q]]),I=JSON.parse('{"title":"Aspect Ratio","description":"","frontmatter":{"title":"Aspect Ratio"},"headers":[],"relativePath":"components/aspect-ratio.md","filePath":"components/aspect-ratio.md"}'),R={name:"components/aspect-ratio.md"},W=Object.assign(R,{setup(h){return(a,s)=>(r(),F("div",null,[s[0]||(s[0]=t("h1",{id:"aspect-ratio",tabindex:"-1"},[p("Aspect Ratio "),t("a",{class:"header-anchor",href:"#aspect-ratio","aria-label":'Permalink to "Aspect Ratio"'},"​")],-1)),o(C),s[1]||(s[1]=t("p",null,[p("The AgnosticUI AspectRatio component provides an easy, modern way to reserve space for embedded content (videos, iframes, third-party widgets) while preserving a given aspect ratio. It leverages the native CSS "),t("code",null,"aspect-ratio"),p(" property and exposes a simple API.")],-1)),o(_),s[2]||(s[2]=c("",11))]))}});export{I as __pageData,W as default};
