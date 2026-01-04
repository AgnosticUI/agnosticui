import{A as M}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as K,a as Y,E as y,x as u}from"./chunks/lit-element.B0TUrqGF.js";import{z as p}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{n as v}from"./chunks/state-CovhUvdr.BllWkzJh.js";import{d as z,p as d,c as B,o as A,r as f,K as G,j as s,G as h,a as c,k,w as b,ae as H}from"./chunks/framework.DvJW1jwp.js";import{u as J}from"./chunks/VueIcon.vue_vue_type_script_setup_true_lang-kC-nzMyu.BaJEj4PP.js";import{T as Q}from"./chunks/triangle-alert.DzYwMnwq.js";import"./chunks/Icon.B28p3PBb.js";var X=Object.defineProperty,l=(t,a,e,m)=>{for(var r=void 0,g=t.length-1,o;g>=0;g--)(o=t[g])&&(r=o(a,e,r)||r);return r&&X(a,e,r),r};const _=class extends Y{constructor(){super(),this._handleLoad=()=>{this._loaded=!0,this._errored=!1,this.dispatchEvent(new CustomEvent("ag-load",{bubbles:!0,composed:!0}))},this._handleError=()=>{if(this._loaded=!1,this._errored=!0,this.fallbackSrc&&this._currentSrc!==this.fallbackSrc){this._currentSrc=this.fallbackSrc;return}this.dispatchEvent(new CustomEvent("ag-error",{bubbles:!0,composed:!0}))},this.src="",this.alt="",this.sources=[],this.fit="cover",this.position="center",this.loading="lazy",this.fade=!1,this.duration=200,this._loaded=!1,this._errored=!1,this._currentSrc=""}willUpdate(a){super.willUpdate(a),a.has("fit")&&this.style.setProperty("--ag-image-fit",this.fit),a.has("position")&&this.style.setProperty("--ag-image-position",this.position),a.has("width")&&(this.style.width=this.width!=null?`${this.width}px`:""),a.has("height")&&(this.style.height=this.height!=null?`${this.height}px`:""),(a.has("aspectRatio")||a.has("width")||a.has("height"))&&(this.aspectRatio?this.style.aspectRatio=this.aspectRatio:this.width!=null&&this.height!=null?this.style.aspectRatio=`${this.width} / ${this.height}`:this.style.aspectRatio=""),a.has("src")&&a.get("src")!==this.src&&(this._loaded=!1,this._errored=!1,this._currentSrc=this.src)}_renderImage(){const a=this._errored&&this.fallbackSrc?this.fallbackSrc:this._currentSrc;return u`
      <img
        part="ag-img"
        class=${this._loaded?"loaded":""}
        src=${a}
        alt=${this.alt}
        loading=${this.loading}
        decoding="async"
        width=${this.width??y}
        height=${this.height??y}
        @load=${this._handleLoad}
        @error=${this._handleError}
      />
    `}_renderPicture(){return!this.sources||this.sources.length===0?this._renderImage():u`
      <picture>
        ${this.sources.map(a=>u`
            <source
              srcset=${a.srcset}
              type=${a.type??y}
              media=${a.media??y}
              sizes=${a.sizes??y}
            />
          `)}
        ${this._renderImage()}
      </picture>
    `}_renderOverlay(){return this._loaded?y:this._errored?u`
        <div class="overlay error" part="ag-error" role="alert" aria-label="Image failed to load">
          <slot name="error">Failed to load image</slot>
        </div>
      `:u`
      <div class="overlay" part="ag-placeholder" aria-label="Image loading">
        <slot name="placeholder">Loading…</slot>
      </div>
    `}render(){return u`
      <div class="wrapper">
        ${this._renderPicture()}
        ${this._renderOverlay()}
      </div>
      <slot></slot>
    `}};_.styles=K`
    :host {
      display: inline-block;
      position: relative;
      overflow: hidden;
      /* Remove inline spacing around image element - images are inline by default and can create unwanted gaps. This doesn't affect slotted content. */
      line-height: 0;
      background: var(--ag-image-bg-color, var(--ag-background-secondary));
    }

    .wrapper {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: var(--ag-image-fit, cover);
      object-position: var(--ag-image-position, center);
    }

    /* Fade transition when enabled */
    :host([fade]) img {
      opacity: 0;
      transition: opacity var(--ag-image-transition-duration, var(--ag-motion-medium, 200ms)) ease;
    }

    :host([fade]) img.loaded {
      opacity: 1;
    }

    /* Non-fade components are always visible */
    :host(:not([fade])) img {
      opacity: 1;
    }

    /* Overlay styles for placeholder and error states */
    .overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ag-font-size-sm);
      background: var(--ag-image-bg-color, var(--ag-background-secondary));
      color: var(--ag-text-muted);
      z-index: 1;
      /* Reset line-height for slotted content so text displays properly. The line-height: 0 on :host would otherwise be inherited here. */line-height: normal;
    }

    .overlay.error {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    /* Hide overlay when image is loaded */
    .overlay.hidden {
      display: none;
    }
  `;let n=_;l([p({type:String})],n.prototype,"src");l([p({type:String})],n.prototype,"alt");l([p({type:Array})],n.prototype,"sources");l([p({type:Number})],n.prototype,"width");l([p({type:Number})],n.prototype,"height");l([p({type:String,attribute:"aspect-ratio"})],n.prototype,"aspectRatio");l([p({type:String})],n.prototype,"fit");l([p({type:String})],n.prototype,"position");l([p({type:String})],n.prototype,"loading");l([p({type:Boolean,reflect:!0})],n.prototype,"fade");l([p({type:Number})],n.prototype,"duration");l([p({type:String,attribute:"fallback-src"})],n.prototype,"fallbackSrc");l([v()],n.prototype,"_loaded");l([v()],n.prototype,"_errored");l([v()],n.prototype,"_currentSrc");customElements.get("ag-image")||customElements.define("ag-image",n);const Z=["src","alt","width","height","aspect-ratio","fit","position","loading",".fade","duration","fallback-src"],F=z({__name:"VueImage",props:{sources:{},src:{default:""},alt:{default:""},width:{},height:{},aspectRatio:{},fit:{default:"cover"},position:{default:"center"},loading:{default:"lazy"},fade:{type:Boolean,default:!1},duration:{default:200},fallbackSrc:{}},emits:["ag-load","ag-error"],setup(t,{emit:a}){const e=a,m=d(),r=o=>{e("ag-load")},g=o=>{e("ag-error")};return(o,C)=>(A(),B("ag-image",G({ref_key:"imageRef",ref:m,src:t.src,alt:t.alt,width:t.width,height:t.height,"aspect-ratio":t.aspectRatio,fit:t.fit,position:t.position,loading:t.loading,".fade":t.fade,duration:t.duration,"fallback-src":t.fallbackSrc,onAgLoad:r,onAgError:g},o.$attrs),[f(o.$slots,"placeholder",{slot:"placeholder"}),f(o.$slots,"error",{slot:"error"}),f(o.$slots,"default")],48,Z))}}),ss={class:"image-examples-container"},is={class:"responsive-image-container"},as={class:"contain-fit-container"},ts={class:"responsive-image-container"},es={class:"responsive-image-container"},ns={slot:"error",class:"custom-error"},ls={class:"error-icon"},hs={class:"responsive-image-container"},S="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=650&h=487&fit=crop&q=80",I="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80",x="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=650&h=487&fit=crop&q=80",R="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=650&h=487&fit=crop&q=80",T="https://thissourcedoesnotexist.com/image.jpg",P="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=650&h=487&fit=crop&q=80&auto=format&ps=50",$="https://thissourcedoesnotexist.com/another-broken-image.jpg",j="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=650&h=487&fit=crop&q=80",ps=z({__name:"ImageExamples",setup(t){const a=d(S),e=()=>{a.value=`${S}&t=${new Date().getTime()}`},m=d(I),r=()=>{m.value=`${I}&t=${new Date().getTime()}`},g=d(x),o=()=>{g.value=`${x}&t=${new Date().getTime()}`},C=d(R),U=()=>{C.value=`${R}&t=${new Date().getTime()}`},L=[{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",media:"(min-width: 1024px)"},{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",media:"(min-width: 768px)"}],q=d(T),N=()=>{q.value=`${T}?t=${new Date().getTime()}`},D=d(P),V=()=>{D.value=`${P}&t=${new Date().getTime()}`},E=d($),O=()=>{E.value=`${$}?t=${new Date().getTime()}`},w=d(j),W=()=>{w.value=`${j}&t=${new Date().getTime()}`};return(rs,i)=>(A(),B("div",ss,[i[2]||(i[2]=s("h2",null,"Basic Image",-1)),i[3]||(i[3]=s("p",null,[c("A standard image with a `src` and `alt` tag. This example also has the "),s("code",null,"fade"),c(" prop enabled. Click the button to reload the image and see the effect.")],-1)),h(k(F),{src:a.value,alt:"A beautiful landscape with a river and mountains.",width:650,height:487,fade:!0},null,8,["src"]),s("button",{onClick:e,class:"reload-button"},"Reload Image"),i[4]||(i[4]=s("hr",null,null,-1)),i[5]||(i[5]=s("h2",null,"Responsive Image (No Layout Shift)",-1)),i[6]||(i[6]=s("p",null," By omitting `width` and `height` props and providing `aspectRatio`, the image becomes responsive while preventing content layout shift. Fade is also enabled here. ",-1)),s("div",is,[h(k(F),{src:m.value,alt:"A forest path leading to a mountain.",aspectRatio:"16/9",fade:!0},null,8,["src"])]),s("button",{onClick:r,class:"reload-button"},"Reload Image"),i[7]||(i[7]=s("hr",null,null,-1)),i[8]||(i[8]=s("h2",null,"Object Fit: Contain",-1)),i[9]||(i[9]=s("p",null,'Use `fit="contain"` to ensure the entire image is visible within its container without being cropped.',-1)),s("div",as,[h(k(F),{src:g.value,alt:"A dense forest with sunlight filtering through.",aspectRatio:"4/3",fit:"contain",fade:!0},null,8,["src"])]),s("button",{onClick:o,class:"reload-button"},"Reload Image"),i[10]||(i[10]=s("hr",null,null,-1)),i[11]||(i[11]=s("h2",null,"Responsive Sources with <picture>",-1)),i[12]||(i[12]=s("p",null,"Provide different images for different screen sizes using the `sources` prop. Resize your browser to see the image change.",-1)),s("div",ts,[h(k(F),{src:C.value,alt:"A responsive landscape that changes with screen size.",aspectRatio:"16/9",sources:L,fade:!0},null,8,["src"])]),s("button",{onClick:U,class:"reload-button"},"Reload Image"),i[13]||(i[13]=s("hr",null,null,-1)),i[14]||(i[14]=s("h2",null,"Fallback Source",-1)),i[15]||(i[15]=s("p",null,"If the primary `src` is broken, the `fallbackSrc` will be loaded instead. The fallback will also fade in.",-1)),h(k(F),{src:q.value,fallbackSrc:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=650&h=487&fit=crop&q=80",alt:"An image with a fallback source.",width:650,height:487,fade:!0},null,8,["src"]),s("button",{onClick:N,class:"reload-button"},"Reload Image"),i[16]||(i[16]=s("hr",null,null,-1)),i[17]||(i[17]=s("h2",null,"Custom Placeholder Slot",-1)),i[18]||(i[18]=s("p",null,"Provide custom content to be displayed while the image is loading.",-1)),h(k(F),{src:D.value,alt:"A nature scene with a custom placeholder.",width:650,height:487},{default:b(()=>[...i[0]||(i[0]=[s("div",{slot:"placeholder",class:"custom-placeholder"},[s("div",{class:"placeholder-icon"},"📷"),s("div",null,"Loading beautiful scenery...")],-1)])]),_:1},8,["src"]),s("button",{onClick:V,class:"reload-button"},"Reload Image"),i[19]||(i[19]=s("hr",null,null,-1)),i[20]||(i[20]=s("h2",null,"Custom Error Slot",-1)),i[21]||(i[21]=s("p",null,"Display a custom message or UI when an image fails to load.",-1)),s("div",es,[h(k(F),{src:E.value,alt:"An image with a custom error message.",aspectRatio:"4/3",style:{width:"100%"}},{default:b(()=>[s("div",ns,[s("div",ls,[h(k(J),{size:"64",type:"error",noFill:!0},{default:b(()=>[h(k(Q))]),_:1})]),i[1]||(i[1]=s("h2",{style:{"margin-top":"0"}},"Oops! The image could not be loaded.",-1))])]),_:1},8,["src"])]),s("button",{onClick:O,class:"reload-button"},"Reload Image"),i[22]||(i[22]=s("hr",null,null,-1)),i[23]||(i[23]=s("h2",null,"Styled with CSS Class and Parts",-1)),i[24]||(i[24]=s("p",null,"Use a CSS class to apply custom styles to the component, including its internal parts like `::part(ag-img)`.",-1)),s("div",hs,[h(k(F),{class:"custom-styled-image",src:w.value,alt:"A landscape with a custom border style.",aspectRatio:"4/3",fade:!0},null,8,["src"])]),s("button",{onClick:W,class:"reload-button"},"Reload Image")]))}}),fs=JSON.parse('{"title":"Image","description":"","frontmatter":{"title":"Image"},"headers":[],"relativePath":"components/image.md","filePath":"components/image.md"}'),os={name:"components/image.md"},bs=Object.assign(os,{setup(t){return(a,e)=>(A(),B("div",null,[e[0]||(e[0]=s("h1",{id:"image",tabindex:"-1"},[c("Image "),s("a",{class:"header-anchor",href:"#image","aria-label":'Permalink to "Image"'},"​")],-1)),h(M),e[1]||(e[1]=s("p",null,[c("The AgnosticUI Image component is a powerful, performant replacement for the native "),s("code",null,"<img>"),c(" tag. It intelligently adapts to your needs: provide a simple "),s("code",null,"src"),c(" to render an "),s("code",null,"<img>"),c(", or add a "),s("code",null,"sources"),c(" prop to automatically generate a responsive "),s("code",null,"<picture>"),c(" element.")],-1)),e[2]||(e[2]=s("p",null,"Beyond its flexibility, it provides built-in solutions for common image-handling challenges, including responsive sizing, preventing layout shift, lazy loading, and graceful error handling.",-1)),h(ps),e[3]||(e[3]=H("",48))]))}});export{fs as __pageData,bs as default};
