import{A as E}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as C,a as m,x as B}from"./chunks/lit-element.B0TUrqGF.js";import{z as e}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{d as o,c as F,o as r,r as A,af as b,ag as v,_ as f,j as t,ae as c,G as y,a as p}from"./chunks/framework.BoyT2Jkt.js";var D=Object.defineProperty,d=(h,a,s,k)=>{for(var i=void 0,n=h.length-1,g;n>=0;n--)(g=h[n])&&(i=g(a,s,i)||i);return i&&D(a,s,i),i};const u=class extends m{constructor(){super(),this.width=1,this.height=1,this.maxWidth=void 0}get _aspectStyle(){const a=this.width||1,s=this.height||1,k=`${a} / ${s}`,i=[];return i.push(`aspect-ratio: ${k};`),this.maxWidth!==void 0&&this.maxWidth!==null&&(i.push(`max-inline-size: ${this.maxWidth}px;`),i.push("margin-inline-start: auto; margin-inline-end: auto;")),i.join(" ")}render(){return B`
      <div part="ag-aspect-ratio" class="ratio" style=${this._aspectStyle}>
        <slot></slot>
      </div>
    `}};u.styles=C`
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
  `;let l=u;d([e({type:Number})],l.prototype,"width");d([e({type:Number})],l.prototype,"height");d([e({type:Number,attribute:"max-width"})],l.prototype,"maxWidth");customElements.get("ag-aspect-ratio")||customElements.define("ag-aspect-ratio",l);const w=o({__name:"VueAspectRatio",setup(h){return(a,s)=>(r(),F("ag-aspect-ratio",b(v(a.$attrs)),[A(a.$slots,"default")],16))}}),x=o({name:"VueAspectRatio",components:{VueAspectRatio:w}});function q(h,a,s,k,i,n){return r(),F("div",null,[...a[0]||(a[0]=[t("h2",null,"Constrained max-width",-1),t("ag-aspect-ratio",{class:"mbs4",width:4,height:3,"max-width":400},[t("div",{style:{background:"var(--ag-background-tertiary)",color:"var(--vp-c-text-1)",width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},"4:3 box")],-1),c("",7),t("ag-aspect-ratio",{class:"mbs4",width:16,height:9,style:{"max-width":"600px"},"aria-label":"16:9 iframe"},[t("iframe",{title:"16:9 iframe","aria-label":"16:9 iframe",style:{width:"100%",height:"100%",border:"0"},srcdoc:"<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>",frameborder:"0"})],-1)])])}const _=f(x,[["render",q]]),I=JSON.parse('{"title":"Aspect Ratio","description":"","frontmatter":{"title":"Aspect Ratio"},"headers":[],"relativePath":"components/aspect-ratio.md","filePath":"components/aspect-ratio.md"}'),R={name:"components/aspect-ratio.md"},W=Object.assign(R,{setup(h){return(a,s)=>(r(),F("div",null,[s[0]||(s[0]=t("h1",{id:"aspect-ratio",tabindex:"-1"},[p("Aspect Ratio "),t("a",{class:"header-anchor",href:"#aspect-ratio","aria-label":'Permalink to "Aspect Ratio"'},"​")],-1)),y(E),s[1]||(s[1]=t("p",null,[p("The AgnosticUI AspectRatio component provides an easy, modern way to reserve space for embedded content (videos, iframes, third-party widgets) while preserving a given aspect ratio. It leverages the native CSS "),t("code",null,"aspect-ratio"),p(" property and exposes a simple API.")],-1)),y(_),s[2]||(s[2]=c("",11))]))}});export{I as __pageData,W as default};
