var H=Object.defineProperty;var J=(i,a,t)=>a in i?H(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var v=(i,a,t)=>J(i,typeof a!="symbol"?a+"":a,t);import{A as Q}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as L,z as p,a as V,E as y,x as F}from"./chunks/Button.DkmThuAs.js";import{n as S}from"./chunks/state-CovhUvdr.CfYrM0Q-.js";import{d as O,p as m,v as X,s as ss,c as B,o as A,r as I,K as es,j as e,G as r,a as w,k as h,w as f,ae as R}from"./chunks/framework.NAAYCHZu.js";import{m as as}from"./chunks/VueIcon.vue_vue_type_script_setup_true_lang-C2Sky3bU.S7_3w1vO.js";import{T as is}from"./chunks/triangle-alert.DhPqtk12.js";import{F as ts}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/Icon.BC5ob6Nk.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/sdk.m.DhOmSlC9.js";var ns=Object.defineProperty,o=(i,a,t,c)=>{for(var l=void 0,g=i.length-1,k;g>=0;g--)(k=i[g])&&(l=k(a,t,l)||l);return l&&ns(a,t,l),l};const W=class extends V{constructor(){super(),this._handleLoad=()=>{this._loaded=!0,this._errored=!1,this.dispatchEvent(new CustomEvent("ag-load",{bubbles:!0,composed:!0}))},this._handleError=()=>{if(this._loaded=!1,this._errored=!0,this.fallbackSrc&&this._currentSrc!==this.fallbackSrc){this._currentSrc=this.fallbackSrc;return}this.dispatchEvent(new CustomEvent("ag-error",{bubbles:!0,composed:!0}))},this.src="",this.alt="",this.sources=[],this.fit="cover",this.position="center",this.loading="lazy",this.fade=!1,this.duration=200,this._loaded=!1,this._errored=!1,this._currentSrc=""}willUpdate(a){super.willUpdate(a),a.has("fit")&&this.style.setProperty("--ag-image-fit",this.fit),a.has("position")&&this.style.setProperty("--ag-image-position",this.position),a.has("width")&&(this.style.width=this.width!=null?`${this.width}px`:""),a.has("height")&&(this.style.height=this.height!=null?`${this.height}px`:""),(a.has("aspectRatio")||a.has("width")||a.has("height"))&&(this.aspectRatio?this.style.aspectRatio=this.aspectRatio:this.width!=null&&this.height!=null?this.style.aspectRatio=`${this.width} / ${this.height}`:this.style.aspectRatio=""),a.has("src")&&a.get("src")!==this.src&&(this._loaded=!1,this._errored=!1,this._currentSrc=this.src)}_renderImage(){const a=this._errored&&this.fallbackSrc?this.fallbackSrc:this._currentSrc;return F`
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
    `}_renderPicture(){return!this.sources||this.sources.length===0?this._renderImage():F`
      <picture>
        ${this.sources.map(a=>F`
            <source
              srcset=${a.srcset}
              type=${a.type??y}
              media=${a.media??y}
              sizes=${a.sizes??y}
            />
          `)}
        ${this._renderImage()}
      </picture>
    `}_renderOverlay(){return this._loaded?y:this._errored?F`
        <div class="overlay error" part="ag-error" role="alert" aria-label="Image failed to load">
          <slot name="error">Failed to load image</slot>
        </div>
      `:F`
      <div class="overlay" part="ag-placeholder" aria-label="Image loading">
        <slot name="placeholder">Loading…</slot>
      </div>
    `}render(){return F`
      <div class="wrapper">
        ${this._renderPicture()}
        ${this._renderOverlay()}
      </div>
      <slot></slot>
    `}};W.styles=L`
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
  `;let n=W;o([p({type:String})],n.prototype,"src");o([p({type:String})],n.prototype,"alt");o([p({type:Array})],n.prototype,"sources");o([p({type:Number})],n.prototype,"width");o([p({type:Number})],n.prototype,"height");o([p({type:String,attribute:"aspect-ratio"})],n.prototype,"aspectRatio");o([p({type:String})],n.prototype,"fit");o([p({type:String})],n.prototype,"position");o([p({type:String})],n.prototype,"loading");o([p({type:Boolean,reflect:!0})],n.prototype,"fade");o([p({type:Number})],n.prototype,"duration");o([p({type:String,attribute:"fallback-src"})],n.prototype,"fallbackSrc");o([S()],n.prototype,"_loaded");o([S()],n.prototype,"_errored");o([S()],n.prototype,"_currentSrc");customElements.get("ag-image")||customElements.define("ag-image",n);const os=["src","alt","width","height","aspect-ratio","fit","position","loading",".fade","duration","fallback-src"],u=O({__name:"VueImage",props:{sources:{},src:{default:""},alt:{default:""},width:{},height:{},aspectRatio:{},fit:{default:"cover"},position:{default:"center"},loading:{default:"lazy"},fade:{type:Boolean,default:!1},duration:{default:200},fallbackSrc:{}},emits:["ag-load","ag-error"],setup(i,{emit:a}){const t=i,c=m(null);X(()=>{ss(()=>{c.value&&t.sources&&(c.value.sources=t.sources)})});const l=a,g=d=>{l("ag-load")},k=d=>{l("ag-error")};return(d,b)=>(A(),B("ag-image",es({ref_key:"agImageRef",ref:c,src:i.src,alt:i.alt,width:i.width,height:i.height,"aspect-ratio":i.aspectRatio,fit:i.fit,position:i.position,loading:i.loading,".fade":i.fade,duration:i.duration,"fallback-src":i.fallbackSrc,onAgLoad:g,onAgError:k},d.$attrs),[I(d.$slots,"placeholder",{slot:"placeholder"}),I(d.$slots,"error",{slot:"error"}),I(d.$slots,"default")],48,os))}}),ls={class:"image-examples-container"},rs={class:"responsive-image-container"},hs={class:"contain-fit-container"},ps={class:"responsive-image-container"},ds={class:"responsive-image-container"},cs={slot:"error",class:"custom-error"},gs={class:"error-icon"},ks={class:"responsive-image-container"},$="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",U="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80",T="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80",j="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",P="https://thissourcedoesnotexist.com/image.jpg",z="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50",_="https://thissourcedoesnotexist.com/another-broken-image.jpg",N="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80",ms=O({__name:"ImageExamples",setup(i){const a=m($),t=()=>{a.value=`${$}&t=${new Date().getTime()}`},c=m(U),l=()=>{c.value=`${U}&t=${new Date().getTime()}`},g=m(T),k=()=>{g.value=`${T}&t=${new Date().getTime()}`},d=m(j),b=()=>{d.value=`${j}&t=${new Date().getTime()}`},M=[{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",media:"(min-width: 1024px)"},{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",media:"(min-width: 768px)"}],x=m(P),Z=()=>{x.value=`${P}?t=${new Date().getTime()}`},q=m(z),K=()=>{q.value=`${z}&t=${new Date().getTime()}`},D=m(_),Y=()=>{D.value=`${_}?t=${new Date().getTime()}`},E=m(N),G=()=>{E.value=`${N}&t=${new Date().getTime()}`};return(fs,s)=>(A(),B("div",ls,[s[2]||(s[2]=e("h2",null,"Basic Image",-1)),s[3]||(s[3]=e("p",null,[w("A standard image with a `src` and `alt` tag. This example also has the "),e("code",null,"fade"),w(" prop enabled. Click the button to reload the image and see the effect.")],-1)),r(h(u),{src:a.value,alt:"A beautiful landscape with a river and mountains.",width:545,height:487,fade:!0,style:{"max-width":"100%",height:"auto"}},null,8,["src"]),e("button",{onClick:t,class:"reload-button"},"Reload Image"),s[4]||(s[4]=e("hr",null,null,-1)),s[5]||(s[5]=e("h2",null,"Responsive Image (No Layout Shift)",-1)),s[6]||(s[6]=e("p",null," By omitting `width` and `height` props and providing `aspectRatio`, the image becomes responsive while preventing content layout shift. Fade is also enabled here. ",-1)),e("div",rs,[r(h(u),{src:c.value,alt:"A forest path leading to a mountain.",aspectRatio:"16/9",fade:!0},null,8,["src"])]),e("button",{onClick:l,class:"reload-button"},"Reload Image"),s[7]||(s[7]=e("hr",null,null,-1)),s[8]||(s[8]=e("h2",null,"Object Fit: Contain",-1)),s[9]||(s[9]=e("p",null,'Use `fit="contain"` to ensure the entire image is visible within its container without being cropped.',-1)),e("div",hs,[r(h(u),{src:g.value,alt:"A dense forest with sunlight filtering through.",aspectRatio:"4/3",fit:"contain",fade:!0},null,8,["src"])]),e("button",{onClick:k,class:"reload-button"},"Reload Image"),s[10]||(s[10]=e("hr",null,null,-1)),s[11]||(s[11]=e("h2",null,"Responsive Sources with <picture>",-1)),s[12]||(s[12]=e("p",null,"Provide different images for different screen sizes using the `sources` prop. Resize your browser to see the image change.",-1)),e("div",ps,[r(h(u),{src:d.value,alt:"A responsive landscape that changes with screen size.",aspectRatio:"16/9",sources:M,fade:!0},null,8,["src"])]),e("button",{onClick:b,class:"reload-button"},"Reload Image"),s[13]||(s[13]=e("hr",null,null,-1)),s[14]||(s[14]=e("h2",null,"Fallback Source",-1)),s[15]||(s[15]=e("p",null,"If the primary `src` is broken, the `fallbackSrc` will be loaded instead. The fallback will also fade in.",-1)),r(h(u),{src:x.value,fallbackSrc:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80",alt:"An image with a fallback source.",width:545,height:487,fade:!0,style:{"max-width":"100%",height:"auto"}},null,8,["src"]),e("button",{onClick:Z,class:"reload-button"},"Reload Image"),s[16]||(s[16]=e("hr",null,null,-1)),s[17]||(s[17]=e("h2",null,"Custom Placeholder Slot",-1)),s[18]||(s[18]=e("p",null,"Provide custom content to be displayed while the image is loading.",-1)),r(h(u),{src:q.value,alt:"A nature scene with a custom placeholder.",width:545,height:487,style:{"max-width":"100%",height:"auto"}},{default:f(()=>[...s[0]||(s[0]=[e("div",{slot:"placeholder",class:"custom-placeholder"},[e("div",{class:"placeholder-icon"},"📷"),e("div",null,"Loading beautiful scenery...")],-1)])]),_:1},8,["src"]),e("button",{onClick:K,class:"reload-button"},"Reload Image"),s[19]||(s[19]=e("hr",null,null,-1)),s[20]||(s[20]=e("h2",null,"Custom Error Slot",-1)),s[21]||(s[21]=e("p",null,"Display a custom message or UI when an image fails to load.",-1)),e("div",ds,[r(h(u),{src:D.value,alt:"An image with a custom error message.",aspectRatio:"4/3",style:{width:"100%"}},{default:f(()=>[e("div",cs,[e("div",gs,[r(h(as),{size:"64",type:"error",noFill:!0},{default:f(()=>[r(h(is))]),_:1})]),s[1]||(s[1]=e("h2",{style:{"margin-top":"0"}},"Oops! The image could not be loaded.",-1))])]),_:1},8,["src"])]),e("button",{onClick:Y,class:"reload-button"},"Reload Image"),s[22]||(s[22]=e("hr",null,null,-1)),s[23]||(s[23]=e("h2",null,"Styled with CSS Class and Parts",-1)),s[24]||(s[24]=e("p",null,"Use a CSS class to apply custom styles to the component, including its internal parts like `::part(ag-img)`.",-1)),e("div",ks,[r(h(u),{class:"custom-styled-image",src:E.value,alt:"A landscape with a custom border style.",aspectRatio:"4/3",fade:!0},null,8,["src"])]),e("button",{onClick:G,class:"reload-button"},"Reload Image")]))}});class C extends V{createRenderRoot(){return this}constructor(){super();const a="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",t="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80",c="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80",l="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",g="https://thissourcedoesnotexist.com/image.jpg",k="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50",d="https://thissourcedoesnotexist.com/another-broken-image.jpg",b="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80";this.basicImageSrc=a,this.responsiveImageSrc=t,this.objectFitImageSrc=c,this.responsiveSourcesImageSrc=l,this.fallbackImageSrc=g,this.placeholderImageSrc=k,this.errorImageSrc=d,this.styledImageSrc=b,this.basicImageUrl=a,this.responsiveImageUrl=t,this.objectFitImageUrl=c,this.responsiveSourcesImageUrl=l,this.placeholderImageUrl=k,this.styledImageUrl=b}reloadBasicImage(){this.basicImageSrc=`${this.basicImageUrl}&t=${new Date().getTime()}`}reloadResponsiveImage(){this.responsiveImageSrc=`${this.responsiveImageUrl}&t=${new Date().getTime()}`}reloadObjectFitImage(){this.objectFitImageSrc=`${this.objectFitImageUrl}&t=${new Date().getTime()}`}reloadResponsiveSourcesImage(){this.responsiveSourcesImageSrc=`${this.responsiveSourcesImageUrl}&t=${new Date().getTime()}`}reloadFallbackImage(){this.fallbackImageSrc=`https://thissourcedoesnotexist.com/image.jpg?t=${new Date().getTime()}`}reloadPlaceholderImage(){this.placeholderImageSrc=`${this.placeholderImageUrl}&t=${new Date().getTime()}`}reloadErrorImage(){this.errorImageSrc=`https://thissourcedoesnotexist.com/another-broken-image.jpg?t=${new Date().getTime()}`}reloadStyledImage(){this.styledImageSrc=`${this.styledImageUrl}&t=${new Date().getTime()}`}render(){const a=[{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",media:"(min-width: 1024px)"},{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",media:"(min-width: 768px)"}];return F`
      <div class="image-examples-container">
        <h2>Basic Image</h2>
        <p>A standard image with a <code>src</code> and <code>alt</code> tag. This example also has the <code>fade</code> attribute enabled. Click the button to reload the image and see the effect.</p>
        <ag-image
          .src=${this.basicImageSrc}
          alt="A beautiful landscape with a river and mountains."
          .width=${545}
          .height=${487}
          fade
          style="max-width: 100%; height: auto;"
        ></ag-image>
        <button @click=${this.reloadBasicImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Responsive Image (No Layout Shift)</h2>
        <p>
          By omitting <code>width</code> and <code>height</code> attributes and providing <code>aspectRatio</code>, the image becomes responsive while preventing content layout shift. Fade is also enabled here.
        </p>
        <div class="responsive-image-container">
          <ag-image
            .src=${this.responsiveImageSrc}
            alt="A forest path leading to a mountain."
            aspectRatio="16/9"
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadResponsiveImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Object Fit: Contain</h2>
        <p>Use <code>fit="contain"</code> to ensure the entire image is visible within its container without being cropped.</p>
        <div class="contain-fit-container">
          <ag-image
            .src=${this.objectFitImageSrc}
            alt="A dense forest with sunlight filtering through."
            aspectRatio="4/3"
            fit="contain"
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadObjectFitImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Responsive Sources with &lt;picture&gt;</h2>
        <p>Provide different images for different screen sizes using the <code>sources</code> property. Resize your browser to see the image change.</p>
        <div class="responsive-image-container">
          <ag-image
            .src=${this.responsiveSourcesImageSrc}
            alt="A responsive landscape that changes with screen size."
            aspectRatio="16/9"
            .sources=${a}
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadResponsiveSourcesImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Fallback Source</h2>
        <p>If the primary <code>src</code> is broken, the <code>fallbackSrc</code> will be loaded instead. The fallback will also fade in.</p>
        <ag-image
          .src=${this.fallbackImageSrc}
          fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80"
          alt="An image with a fallback source."
          .width=${545}
          .height=${487}
          fade
          style="max-width: 100%; height: auto;"
        ></ag-image>
        <button @click=${this.reloadFallbackImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Custom Placeholder Slot</h2>
        <p>Provide custom content to be displayed while the image is loading.</p>
        <ag-image
          .src=${this.placeholderImageSrc}
          alt="A nature scene with a custom placeholder."
          .width=${545}
          .height=${487}
          style="max-width: 100%; height: auto;"
        >
          <div slot="placeholder" class="custom-placeholder">
            <div class="placeholder-icon">📷</div>
            <div>Loading beautiful scenery...</div>
          </div>
        </ag-image>
        <button @click=${this.reloadPlaceholderImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Custom Error Slot</h2>
        <p>Display a custom message or UI when an image fails to load.</p>
        <div class="responsive-image-container">
          <ag-image
            .src=${this.errorImageSrc}
            alt="An image with a custom error message."
            aspectRatio="4/3"
            style="width: 100%;"
          >
            <div slot="error" class="custom-error">
              <div class="error-icon">
                <ag-icon size="64" type="error" no-fill>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </ag-icon>
              </div>
              <h2 style="margin-top: 0;">Oops! The image could not be loaded.</h2>
            </div>
          </ag-image>
        </div>
        <button @click=${this.reloadErrorImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Styled with CSS Class and Parts</h2>
        <p>Use a CSS class to apply custom styles to the component, including its internal parts like <code>::part(ag-img)</code>.</p>
        <div class="responsive-image-container">
          <ag-image
            class="custom-styled-image"
            .src=${this.styledImageSrc}
            alt="A landscape with a custom border style."
            aspectRatio="4/3"
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadStyledImage} class="reload-button">Reload Image</button>
      </div>
    `}}v(C,"properties",{basicImageSrc:{type:String},responsiveImageSrc:{type:String},objectFitImageSrc:{type:String},responsiveSourcesImageSrc:{type:String},fallbackImageSrc:{type:String},placeholderImageSrc:{type:String},errorImageSrc:{type:String},styledImageSrc:{type:String}}),v(C,"styles",L`
    .image-examples-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .image-examples-container hr {
      border: 0;
      height: 1px;
      background-color: var(--ag-border-color);
      margin-top: 1rem;
    }

    .reload-button {
      display: block;
      margin-top: 1rem;
      border: 1px solid var(--ag-border-color);
      background-color: var(--ag-background);
      color: var(--ag-text-color);
      padding: 0.5rem 1rem;
      border-radius: var(--ag-radius);
      cursor: pointer;
      width: fit-content;
    }
    .reload-button:hover {
      background-color: var(--ag-background-secondary);
    }

    .responsive-image-container {
      width: 100%;
      max-width: 800px;
    }

    .contain-fit-container {
      width: 100%;
      max-width: 800px;
      background-color: var(--ag-background-secondary);
      padding: 1rem;
      border-radius: var(--ag-radius);
    }

    .custom-placeholder,
    .custom-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100%;
      gap: 0.5rem;
      font-family: var(--ag-font-family-body);
    }

    .placeholder-icon,
    .error-icon {
      font-size: 2.5rem;
      line-height: 1;
    }

    .custom-error {
      background: var(--ag-danger-background);
      color: var(--ag-text-primary);
      padding: 2rem 1rem;
    }

    .custom-styled-image::part(ag-img) {
      border: 4px solid var(--ag-primary-light);
      border-radius: 16px;
      box-shadow: var(--ag-shadow-3);
    }
  `);customElements.define("image-lit-examples",C);const us=`<script setup lang="ts">
import { ref } from "vue";
import VueImage from "agnosticui-core/image/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import { TriangleAlert } from "lucide-vue-next";

// Basic Image
const basicImageUrl =
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80";
const basicImageSrc = ref(basicImageUrl);
const reloadBasicImage = () => {
  basicImageSrc.value = \`\${basicImageUrl}&t=\${new Date().getTime()}\`;
};

// Responsive Image
const responsiveImageUrl =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80";
const responsiveImageSrc = ref(responsiveImageUrl);
const reloadResponsiveImage = () => {
  responsiveImageSrc.value = \`\${responsiveImageUrl}&t=\${new Date().getTime()}\`;
};

// Object Fit Image
const objectFitImageUrl =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80";
const objectFitImageSrc = ref(objectFitImageUrl);
const reloadObjectFitImage = () => {
  objectFitImageSrc.value = \`\${objectFitImageUrl}&t=\${new Date().getTime()}\`;
};

// Responsive Sources Image
const responsiveSourcesImageUrl =
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80";
const responsiveSourcesImageSrc = ref(responsiveSourcesImageUrl);
const reloadResponsiveSourcesImage = () => {
  responsiveSourcesImageSrc.value = \`\${responsiveSourcesImageUrl}&t=\${new Date().getTime()}\`;
};
const responsiveSources = [
  {
    srcset:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",
    media: "(min-width: 1024px)",
  },
  {
    srcset:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",
    media: "(min-width: 768px)",
  },
];

// Fallback Image
const fallbackImageUrl = "https://thissourcedoesnotexist.com/image.jpg";
const fallbackImageSrc = ref(fallbackImageUrl);
const reloadFallbackImage = () => {
  fallbackImageSrc.value = \`\${fallbackImageUrl}?t=\${new Date().getTime()}\`;
};

// Placeholder Image
const placeholderImageUrl =
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50";
const placeholderImageSrc = ref(placeholderImageUrl);
const reloadPlaceholderImage = () => {
  placeholderImageSrc.value = \`\${placeholderImageUrl}&t=\${new Date().getTime()}\`;
};

// Error Image
const errorImageUrl =
  "https://thissourcedoesnotexist.com/another-broken-image.jpg";
const errorImageSrc = ref(errorImageUrl);
const reloadErrorImage = () => {
  errorImageSrc.value = \`\${errorImageUrl}?t=\${new Date().getTime()}\`;
};

// Styled Image
const styledImageUrl =
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80";
const styledImageSrc = ref(styledImageUrl);
const reloadStyledImage = () => {
  styledImageSrc.value = \`\${styledImageUrl}&t=\${new Date().getTime()}\`;
};
<\/script>

<template>
  <div class="image-examples-container">
    <h2>Basic Image</h2>
    <p>A standard image with a \`src\` and \`alt\` tag. This example also has the <code>fade</code> prop enabled. Click the button to reload the image and see the effect.</p>
    <VueImage
      :src="basicImageSrc"
      alt="A beautiful landscape with a river and mountains."
      :width="545"
      :height="487"
      :fade="true"
      style="max-width: 100%; height: auto;"
    />
    <button
      @click="reloadBasicImage"
      class="reload-button"
    >Reload Image</button>
    <hr />

    <h2>Responsive Image (No Layout Shift)</h2>
    <p>
      By omitting \`width\` and \`height\` props and providing \`aspectRatio\`, the image becomes responsive while preventing content layout shift. Fade is also enabled here.
    </p>
    <div class="responsive-image-container">
      <VueImage
        :src="responsiveImageSrc"
        alt="A forest path leading to a mountain."
        aspectRatio="16/9"
        :fade="true"
      ></VueImage>
    </div>
    <button
      @click="reloadResponsiveImage"
      class="reload-button"
    >Reload Image</button>
    <hr />

    <h2>Object Fit: Contain</h2>
    <p>Use \`fit="contain"\` to ensure the entire image is visible within its container without being cropped.</p>
    <div class="contain-fit-container">
      <VueImage
        :src="objectFitImageSrc"
        alt="A dense forest with sunlight filtering through."
        aspectRatio="4/3"
        fit="contain"
        :fade="true"
      ></VueImage>
    </div>
    <button
      @click="reloadObjectFitImage"
      class="reload-button"
    >Reload Image</button>
    <hr />

    <h2>Responsive Sources with &lt;picture&gt;</h2>
    <p>Provide different images for different screen sizes using the \`sources\` prop. Resize your browser to see the image change.</p>
    <div class="responsive-image-container">
      <VueImage
        :src="responsiveSourcesImageSrc"
        alt="A responsive landscape that changes with screen size."
        aspectRatio="16/9"
        :sources="responsiveSources"
        :fade="true"
      ></VueImage>
    </div>
    <button
      @click="reloadResponsiveSourcesImage"
      class="reload-button"
    >Reload Image</button>
    <hr />

    <h2>Fallback Source</h2>
    <p>If the primary \`src\` is broken, the \`fallbackSrc\` will be loaded instead. The fallback will also fade in.</p>
    <VueImage
      :src="fallbackImageSrc"
      fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80"
      alt="An image with a fallback source."
      :width="545"
      :height="487"
      :fade="true"
      style="max-width: 100%; height: auto;"
    />
    <button
      @click="reloadFallbackImage"
      class="reload-button"
    >Reload Image</button>
    <hr />

    <h2>Custom Placeholder Slot</h2>
    <p>Provide custom content to be displayed while the image is loading.</p>
    <VueImage
      :src="placeholderImageSrc"
      alt="A nature scene with a custom placeholder."
      :width="545"
      :height="487"
      style="max-width: 100%; height: auto;"
    >
      <div
        slot="placeholder"
        class="custom-placeholder"
      >
        <div class="placeholder-icon">📷</div>
        <div>Loading beautiful scenery...</div>
      </div>
    </VueImage>
    <button
      @click="reloadPlaceholderImage"
      class="reload-button"
    >Reload Image</button>
    <hr />

    <h2>Custom Error Slot</h2>
    <p>Display a custom message or UI when an image fails to load.</p>
    <div class="responsive-image-container">
      <VueImage
        :src="errorImageSrc"
        alt="An image with a custom error message."
        aspectRatio="4/3"
        style="width: 100%;"
      >
        <div
          slot="error"
          class="custom-error"
        >
          <div class="error-icon">
            <VueIcon
              size="64"
              type="error"
              :noFill="true"
            >
              <TriangleAlert />
            </VueIcon>
          </div>
          <h2 style="margin-top: 0;">Oops! The image could not be loaded.</h2>
        </div>
      </VueImage>
    </div>
    <button
      @click="reloadErrorImage"
      class="reload-button"
    >Reload Image</button>
    <hr />

    <h2>Styled with CSS Class and Parts</h2>
    <p>Use a CSS class to apply custom styles to the component, including its internal parts like \`::part(ag-img)\`.</p>
    <div class="responsive-image-container">
      <VueImage
        class="custom-styled-image"
        :src="styledImageSrc"
        alt="A landscape with a custom border style."
        aspectRatio="4/3"
        :fade="true"
      />
    </div>
    <button
      @click="reloadStyledImage"
      class="reload-button"
    >Reload Image</button>
  </div>
</template>

<style>
.image-examples-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-examples-container hr {
  border: 0;
  height: 1px;
  background-color: var(--ag-border-color);
  margin-top: 1rem;
}

.reload-button {
  display: block;
  margin-top: 1rem;
  border: 1px solid var(--ag-border-color);
  background-color: var(--ag-background);
  color: var(--ag-text-color);
  padding: 0.5rem 1rem;
  border-radius: var(--ag-radius);
  cursor: pointer;
  width: fit-content;
}
.reload-button:hover {
  background-color: var(--ag-background-secondary);
}

.responsive-image-container {
  width: 100%;
  max-width: 800px;
}

.contain-fit-container {
  width: 100%;
  max-width: 800px;
  background-color: var(--ag-background-secondary);
  padding: 1rem;
  border-radius: var(--ag-radius);
}

.custom-placeholder,
.custom-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  gap: 0.5rem;
  font-family: var(--ag-font-family-body);
}

.placeholder-icon,
.error-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.custom-error {
  background: var(--ag-danger-background);
  color: var(--ag-text-primary);
  padding: 2rem 1rem;
}

.custom-styled-image::part(ag-img) {
  border: 4px solid var(--ag-primary-light);
  border-radius: 16px;
  box-shadow: var(--ag-shadow-3);
}
</style>
`,Fs=`import { LitElement, html, css } from 'lit';
import 'agnosticui-core/image';
import 'agnosticui-core/icon';

export class ImageLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    basicImageSrc: { type: String },
    responsiveImageSrc: { type: String },
    objectFitImageSrc: { type: String },
    responsiveSourcesImageSrc: { type: String },
    fallbackImageSrc: { type: String },
    placeholderImageSrc: { type: String },
    errorImageSrc: { type: String },
    styledImageSrc: { type: String },
  };

  static styles = css\`
    .image-examples-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .image-examples-container hr {
      border: 0;
      height: 1px;
      background-color: var(--ag-border-color);
      margin-top: 1rem;
    }

    .reload-button {
      display: block;
      margin-top: 1rem;
      border: 1px solid var(--ag-border-color);
      background-color: var(--ag-background);
      color: var(--ag-text-color);
      padding: 0.5rem 1rem;
      border-radius: var(--ag-radius);
      cursor: pointer;
      width: fit-content;
    }
    .reload-button:hover {
      background-color: var(--ag-background-secondary);
    }

    .responsive-image-container {
      width: 100%;
      max-width: 800px;
    }

    .contain-fit-container {
      width: 100%;
      max-width: 800px;
      background-color: var(--ag-background-secondary);
      padding: 1rem;
      border-radius: var(--ag-radius);
    }

    .custom-placeholder,
    .custom-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100%;
      gap: 0.5rem;
      font-family: var(--ag-font-family-body);
    }

    .placeholder-icon,
    .error-icon {
      font-size: 2.5rem;
      line-height: 1;
    }

    .custom-error {
      background: var(--ag-danger-background);
      color: var(--ag-text-primary);
      padding: 2rem 1rem;
    }

    .custom-styled-image::part(ag-img) {
      border: 4px solid var(--ag-primary-light);
      border-radius: 16px;
      box-shadow: var(--ag-shadow-3);
    }
  \`;

  constructor() {
    super();
    const basicImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80';
    const responsiveImageUrl = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80';
    const objectFitImageUrl = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80';
    const responsiveSourcesImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80';
    const fallbackImageUrl = 'https://thissourcedoesnotexist.com/image.jpg';
    const placeholderImageUrl = 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50';
    const errorImageUrl = 'https://thissourcedoesnotexist.com/another-broken-image.jpg';
    const styledImageUrl = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80';

    this.basicImageSrc = basicImageUrl;
    this.responsiveImageSrc = responsiveImageUrl;
    this.objectFitImageSrc = objectFitImageUrl;
    this.responsiveSourcesImageSrc = responsiveSourcesImageUrl;
    this.fallbackImageSrc = fallbackImageUrl;
    this.placeholderImageSrc = placeholderImageUrl;
    this.errorImageSrc = errorImageUrl;
    this.styledImageSrc = styledImageUrl;

    this.basicImageUrl = basicImageUrl;
    this.responsiveImageUrl = responsiveImageUrl;
    this.objectFitImageUrl = objectFitImageUrl;
    this.responsiveSourcesImageUrl = responsiveSourcesImageUrl;
    this.placeholderImageUrl = placeholderImageUrl;
    this.styledImageUrl = styledImageUrl;
  }

  reloadBasicImage() {
    this.basicImageSrc = \`\${this.basicImageUrl}&t=\${new Date().getTime()}\`;
  }

  reloadResponsiveImage() {
    this.responsiveImageSrc = \`\${this.responsiveImageUrl}&t=\${new Date().getTime()}\`;
  }

  reloadObjectFitImage() {
    this.objectFitImageSrc = \`\${this.objectFitImageUrl}&t=\${new Date().getTime()}\`;
  }

  reloadResponsiveSourcesImage() {
    this.responsiveSourcesImageSrc = \`\${this.responsiveSourcesImageUrl}&t=\${new Date().getTime()}\`;
  }

  reloadFallbackImage() {
    this.fallbackImageSrc = \`https://thissourcedoesnotexist.com/image.jpg?t=\${new Date().getTime()}\`;
  }

  reloadPlaceholderImage() {
    this.placeholderImageSrc = \`\${this.placeholderImageUrl}&t=\${new Date().getTime()}\`;
  }

  reloadErrorImage() {
    this.errorImageSrc = \`https://thissourcedoesnotexist.com/another-broken-image.jpg?t=\${new Date().getTime()}\`;
  }

  reloadStyledImage() {
    this.styledImageSrc = \`\${this.styledImageUrl}&t=\${new Date().getTime()}\`;
  }

  render() {
    const responsiveSources = [
      {
        srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80',
        media: '(min-width: 1024px)',
      },
      {
        srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80',
        media: '(min-width: 768px)',
      },
    ];

    return html\`
      <div class="image-examples-container">
        <h2>Basic Image</h2>
        <p>A standard image with a <code>src</code> and <code>alt</code> tag. This example also has the <code>fade</code> attribute enabled. Click the button to reload the image and see the effect.</p>
        <ag-image
          .src=\${this.basicImageSrc}
          alt="A beautiful landscape with a river and mountains."
          .width=\${545}
          .height=\${487}
          fade
          style="max-width: 100%; height: auto;"
        ></ag-image>
        <button @click=\${this.reloadBasicImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Responsive Image (No Layout Shift)</h2>
        <p>
          By omitting <code>width</code> and <code>height</code> attributes and providing <code>aspectRatio</code>, the image becomes responsive while preventing content layout shift. Fade is also enabled here.
        </p>
        <div class="responsive-image-container">
          <ag-image
            .src=\${this.responsiveImageSrc}
            alt="A forest path leading to a mountain."
            aspectRatio="16/9"
            fade
          ></ag-image>
        </div>
        <button @click=\${this.reloadResponsiveImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Object Fit: Contain</h2>
        <p>Use <code>fit="contain"</code> to ensure the entire image is visible within its container without being cropped.</p>
        <div class="contain-fit-container">
          <ag-image
            .src=\${this.objectFitImageSrc}
            alt="A dense forest with sunlight filtering through."
            aspectRatio="4/3"
            fit="contain"
            fade
          ></ag-image>
        </div>
        <button @click=\${this.reloadObjectFitImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Responsive Sources with &lt;picture&gt;</h2>
        <p>Provide different images for different screen sizes using the <code>sources</code> property. Resize your browser to see the image change.</p>
        <div class="responsive-image-container">
          <ag-image
            .src=\${this.responsiveSourcesImageSrc}
            alt="A responsive landscape that changes with screen size."
            aspectRatio="16/9"
            .sources=\${responsiveSources}
            fade
          ></ag-image>
        </div>
        <button @click=\${this.reloadResponsiveSourcesImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Fallback Source</h2>
        <p>If the primary <code>src</code> is broken, the <code>fallbackSrc</code> will be loaded instead. The fallback will also fade in.</p>
        <ag-image
          .src=\${this.fallbackImageSrc}
          fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80"
          alt="An image with a fallback source."
          .width=\${545}
          .height=\${487}
          fade
          style="max-width: 100%; height: auto;"
        ></ag-image>
        <button @click=\${this.reloadFallbackImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Custom Placeholder Slot</h2>
        <p>Provide custom content to be displayed while the image is loading.</p>
        <ag-image
          .src=\${this.placeholderImageSrc}
          alt="A nature scene with a custom placeholder."
          .width=\${545}
          .height=\${487}
          style="max-width: 100%; height: auto;"
        >
          <div slot="placeholder" class="custom-placeholder">
            <div class="placeholder-icon">📷</div>
            <div>Loading beautiful scenery...</div>
          </div>
        </ag-image>
        <button @click=\${this.reloadPlaceholderImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Custom Error Slot</h2>
        <p>Display a custom message or UI when an image fails to load.</p>
        <div class="responsive-image-container">
          <ag-image
            .src=\${this.errorImageSrc}
            alt="An image with a custom error message."
            aspectRatio="4/3"
            style="width: 100%;"
          >
            <div slot="error" class="custom-error">
              <div class="error-icon">
                <ag-icon size="64" type="error" no-fill>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </ag-icon>
              </div>
              <h2 style="margin-top: 0;">Oops! The image could not be loaded.</h2>
            </div>
          </ag-image>
        </div>
        <button @click=\${this.reloadErrorImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Styled with CSS Class and Parts</h2>
        <p>Use a CSS class to apply custom styles to the component, including its internal parts like <code>::part(ag-img)</code>.</p>
        <div class="responsive-image-container">
          <ag-image
            class="custom-styled-image"
            .src=\${this.styledImageSrc}
            alt="A landscape with a custom border style."
            aspectRatio="4/3"
            fade
          ></ag-image>
        </div>
        <button @click=\${this.reloadStyledImage} class="reload-button">Reload Image</button>
      </div>
    \`;
  }
}

// Register the custom element
customElements.define('image-lit-examples', ImageLitExamples);
`,ys=`import { useState } from "react";
import { ReactImage } from "agnosticui-core/image/react";
import { ReactIcon } from "agnosticui-core/icon/react";

export default function ImageReactExamples() {
  // Basic Image
  const basicImageUrl =
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80";
  const [basicImageSrc, setBasicImageSrc] = useState(basicImageUrl);
  const reloadBasicImage = () => {
    setBasicImageSrc(\`\${basicImageUrl}&t=\${new Date().getTime()}\`);
  };

  // Responsive Image
  const responsiveImageUrl =
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80";
  const [responsiveImageSrc, setResponsiveImageSrc] =
    useState(responsiveImageUrl);
  const reloadResponsiveImage = () => {
    setResponsiveImageSrc(\`\${responsiveImageUrl}&t=\${new Date().getTime()}\`);
  };

  // Object Fit Image
  const objectFitImageUrl =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80";
  const [objectFitImageSrc, setObjectFitImageSrc] = useState(objectFitImageUrl);
  const reloadObjectFitImage = () => {
    setObjectFitImageSrc(\`\${objectFitImageUrl}&t=\${new Date().getTime()}\`);
  };

  // Responsive Sources Image
  const responsiveSourcesImageUrl =
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80";
  const [responsiveSourcesImageSrc, setResponsiveSourcesImageSrc] = useState(
    responsiveSourcesImageUrl
  );
  const reloadResponsiveSourcesImage = () => {
    setResponsiveSourcesImageSrc(
      \`\${responsiveSourcesImageUrl}&t=\${new Date().getTime()}\`
    );
  };
  const responsiveSources = [
    {
      srcset:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",
      media: "(min-width: 1024px)",
    },
    {
      srcset:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",
      media: "(min-width: 768px)",
    },
  ];

  // Fallback Image
  const fallbackImageUrl = "https://thissourcedoesnotexist.com/image.jpg";
  const [fallbackImageSrc, setFallbackImageSrc] = useState(fallbackImageUrl);
  const reloadFallbackImage = () => {
    setFallbackImageSrc(\`\${fallbackImageUrl}?t=\${new Date().getTime()}\`);
  };

  // Placeholder Image
  const placeholderImageUrl =
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50";
  const [placeholderImageSrc, setPlaceholderImageSrc] =
    useState(placeholderImageUrl);
  const reloadPlaceholderImage = () => {
    setPlaceholderImageSrc(\`\${placeholderImageUrl}&t=\${new Date().getTime()}\`);
  };

  // Error Image
  const errorImageUrl =
    "https://thissourcedoesnotexist.com/another-broken-image.jpg";
  const [errorImageSrc, setErrorImageSrc] = useState(errorImageUrl);
  const reloadErrorImage = () => {
    setErrorImageSrc(\`\${errorImageUrl}?t=\${new Date().getTime()}\`);
  };

  // Styled Image
  const styledImageUrl =
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80";
  const [styledImageSrc, setStyledImageSrc] = useState(styledImageUrl);
  const reloadStyledImage = () => {
    setStyledImageSrc(\`\${styledImageUrl}&t=\${new Date().getTime()}\`);
  };

  return (
    <div className="image-examples-container">
      <style>{\`
        .image-examples-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .image-examples-container hr {
          border: 0;
          height: 1px;
          background-color: var(--ag-border-color);
          margin-top: 1rem;
        }

        .reload-button {
          display: block;
          margin-top: 1rem;
          border: 1px solid var(--ag-border-color);
          background-color: var(--ag-background);
          color: var(--ag-text-color);
          padding: 0.5rem 1rem;
          border-radius: var(--ag-radius);
          cursor: pointer;
          width: fit-content;
        }
        .reload-button:hover {
          background-color: var(--ag-background-secondary);
        }

        .responsive-image-container {
          width: 100%;
          max-width: 800px;
        }

        .contain-fit-container {
          width: 100%;
          max-width: 800px;
          background-color: var(--ag-background-secondary);
          padding: 1rem;
          border-radius: var(--ag-radius);
        }

        .custom-placeholder,
        .custom-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          gap: 0.5rem;
          font-family: var(--ag-font-family-body);
        }

        .placeholder-icon,
        .error-icon {
          font-size: 2.5rem;
          line-height: 1;
        }

        .custom-error {
          background: var(--ag-danger-background);
          color: var(--ag-text-primary);
          padding: 2rem 1rem;
        }

        .custom-styled-image::part(ag-img) {
          border: 4px solid var(--ag-primary-light);
          border-radius: 16px;
          box-shadow: var(--ag-shadow-3);
        }
      \`}</style>

      <h2>Basic Image</h2>
      <p>
        A standard image with a <code>src</code> and <code>alt</code> tag. This
        example also has the <code>fade</code> prop enabled. Click the button to
        reload the image and see the effect.
      </p>
      <ReactImage
        src={basicImageSrc}
        alt="A beautiful landscape with a river and mountains."
        width={545}
        height={487}
        fade={true}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <button onClick={reloadBasicImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Responsive Image (No Layout Shift)</h2>
      <p>
        By omitting <code>width</code> and <code>height</code> props and
        providing <code>aspectRatio</code>, the image becomes responsive while
        preventing content layout shift. Fade is also enabled here.
      </p>
      <div className="responsive-image-container">
        <ReactImage
          src={responsiveImageSrc}
          alt="A forest path leading to a mountain."
          aspectRatio="16/9"
          fade={true}
        />
      </div>
      <button onClick={reloadResponsiveImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Object Fit: Contain</h2>
      <p>
        Use <code>fit="contain"</code> to ensure the entire image is visible
        within its container without being cropped.
      </p>
      <div className="contain-fit-container">
        <ReactImage
          src={objectFitImageSrc}
          alt="A dense forest with sunlight filtering through."
          aspectRatio="4/3"
          fit="contain"
          fade={true}
        />
      </div>
      <button onClick={reloadObjectFitImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Responsive Sources with &lt;picture&gt;</h2>
      <p>
        Provide different images for different screen sizes using the{" "}
        <code>sources</code> prop. Resize your browser to see the image change.
      </p>
      <div className="responsive-image-container">
        <ReactImage
          src={responsiveSourcesImageSrc}
          alt="A responsive landscape that changes with screen size."
          aspectRatio="16/9"
          sources={responsiveSources}
          fade={true}
        />
      </div>
      <button onClick={reloadResponsiveSourcesImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Fallback Source</h2>
      <p>
        If the primary <code>src</code> is broken, the <code>fallbackSrc</code>{" "}
        will be loaded instead. The fallback will also fade in.
      </p>
      <ReactImage
        src={fallbackImageSrc}
        fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80"
        alt="An image with a fallback source."
        width={545}
        height={487}
        fade={true}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <button onClick={reloadFallbackImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Custom Placeholder Slot</h2>
      <p>Provide custom content to be displayed while the image is loading.</p>
      <ReactImage
        src={placeholderImageSrc}
        alt="A nature scene with a custom placeholder."
        width={545}
        height={487}
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <div slot="placeholder" className="custom-placeholder">
          <div className="placeholder-icon">📷</div>
          <div>Loading beautiful scenery...</div>
        </div>
      </ReactImage>
      <button onClick={reloadPlaceholderImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Custom Error Slot</h2>
      <p>Display a custom message or UI when an image fails to load.</p>
      <div className="responsive-image-container">
        <ReactImage
          src={errorImageSrc}
          alt="An image with a custom error message."
          aspectRatio="4/3"
          style={{ width: "100%" }}
        >
          <div slot="error" className="custom-error">
            <div className="error-icon">
              <ReactIcon size="64" type="error" noFill>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </ReactIcon>
            </div>
            <h2 style={{ marginTop: 0 }}>
              Oops! The image could not be loaded.
            </h2>
          </div>
        </ReactImage>
      </div>
      <button onClick={reloadErrorImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Styled with CSS Class and Parts</h2>
      <p>
        Use a CSS class to apply custom styles to the component, including its
        internal parts like <code>::part(ag-img)</code>.
      </p>
      <div className="responsive-image-container">
        <ReactImage
          className="custom-styled-image"
          src={styledImageSrc}
          alt="A landscape with a custom border style."
          aspectRatio="4/3"
          fade={true}
        />
      </div>
      <button onClick={reloadStyledImage} className="reload-button">
        Reload Image
      </button>
    </div>
  );
}
`,$s=JSON.parse('{"title":"Image","description":"","frontmatter":{"title":"Image"},"headers":[],"relativePath":"components/image.md","filePath":"components/image.md"}'),bs={name:"components/image.md"},Us=Object.assign(bs,{setup(i){return(a,t)=>(A(),B("div",null,[t[1]||(t[1]=e("h1",{id:"image",tabindex:"-1"},[w("Image "),e("a",{class:"header-anchor",href:"#image","aria-label":'Permalink to "Image"'},"​")],-1)),r(Q),t[2]||(t[2]=R('<p>The AgnosticUI Image component is a powerful, performant replacement for the native <code>&lt;img&gt;</code> tag. It intelligently adapts to your needs: provide a simple <code>src</code> to render an <code>&lt;img&gt;</code>, or add a <code>sources</code> prop to automatically generate a responsive <code>&lt;picture&gt;</code> element.</p><p>Beyond its flexibility, it provides built-in solutions for common image-handling challenges, including responsive sizing, preventing layout shift, lazy loading, and graceful error handling.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2>',3)),r(ts,{component:"image","vue-code":h(us),"lit-code":h(Fs),"react-code":h(ys)},{vue:f(()=>[r(ms)]),lit:f(()=>[...t[0]||(t[0]=[e("image-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[3]||(t[3]=R(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Image</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Basic responsive image --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;responsive-image&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&amp;h=800&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;A beautiful landscape&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16/9&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Image with fallback --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary-image.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      fallbackSrc</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;fallback-image.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Image with fallback&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4/3&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Image with custom fit and position --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;portrait.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Portrait&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3/4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      fit</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;contain&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Fixed size image (non-responsive) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Icon&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueImage } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/image/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">style</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> scoped</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.responsive-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  max-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">800</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactImage } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/image/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Basic responsive image */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;responsive-image&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        src</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&amp;h=800&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        alt</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;A beautiful landscape&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        aspectRatio</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16/9&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Image with fallback */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        src</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary-image.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        fallbackSrc</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;fallback-image.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        alt</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Image with fallback&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        aspectRatio</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4/3&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Image with custom fit and position */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        src</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;portrait.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        alt</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Portrait&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        aspectRatio</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3/4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        fit</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;contain&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        position</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Fixed size image (non-responsive) */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactImage</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        src</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        alt</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Icon&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        width</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        height</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.responsive-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  max-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">800</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/image&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  .responsive-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    max-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">800</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Basic responsive image --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;responsive-image&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&amp;h=800&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;A beautiful landscape&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16/9&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Image with fallback --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary-image.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    fallbackSrc</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;fallback-image.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Image with fallback&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4/3&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Image with custom fit and position --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;portrait.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Portrait&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3/4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    fit</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;contain&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Fixed size image (non-responsive) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Icon&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    .width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    .height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="fixed-vs-responsive-images" tabindex="-1">Fixed vs. Responsive Images <a class="header-anchor" href="#fixed-vs-responsive-images" aria-label="Permalink to &quot;Fixed vs. Responsive Images&quot;">​</a></h3><p>Some examples on this page use the <code>width</code> and <code>height</code> props to set a fixed size for the image. This is intentional to demonstrate how to opt-out of responsive behavior. When you provide these props, the image will always render at that specific size. To make an image responsive, you must omit these props and follow the pattern described in the &quot;Preventing Layout Shift&quot; section below.</p><h2 id="preventing-layout-shift" tabindex="-1">Preventing Layout Shift <a class="header-anchor" href="#preventing-layout-shift" aria-label="Permalink to &quot;Preventing Layout Shift&quot;">​</a></h2><p>Cumulative Layout Shift (CLS) is a common web performance issue where content jumps as images load. The AgnosticUI Image component provides a simple and effective solution by allowing you to specify an image&#39;s aspect ratio.</p><p>The key is to <strong>omit the <code>width</code> and <code>height</code> props</strong> (which set a fixed size) and instead provide the <code>aspectRatio</code> prop while controlling the size with CSS.</p><h3 id="the-recipe-for-responsive-no-shift-images" tabindex="-1">The Recipe for Responsive, No-Shift Images <a class="header-anchor" href="#the-recipe-for-responsive-no-shift-images" aria-label="Permalink to &quot;The Recipe for Responsive, No-Shift Images&quot;">​</a></h3><ol><li><strong>Omit <code>width</code> and <code>height</code> Props</strong>: Do not pass these props, as they are used to opt-into a fixed, non-responsive size.</li><li><strong>Set a Fluid Width</strong>: Use CSS to make the image&#39;s width responsive. This is best done with a <code>className</code>.</li><li><strong>Provide the <code>aspectRatio</code> Prop</strong>: Set this to the image&#39;s natural ratio (e.g., <code>aspectRatio=&quot;16/9&quot;</code>).</li></ol><p>When you follow this pattern, the browser reserves the correct vertical space for the image before it loads, preventing any layout jump.</p><div class="language-css"><pre><code><span class="token comment">/* In your CSS file */</span>
<span class="token selector">.responsive-image-container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;responsive-image-container&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&amp;h=800&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;A beautiful landscape.&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16/9&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="object-fit-and-position" tabindex="-1">Object Fit and Position <a class="header-anchor" href="#object-fit-and-position" aria-label="Permalink to &quot;Object Fit and Position&quot;">​</a></h2><p>You can control how the image fits within its container using the <code>fit</code> and <code>position</code> props, which correspond to the <code>object-fit</code> and <code>object-position</code> CSS properties.</p><ul><li><code>fit</code>: Can be <code>&#39;cover&#39;</code>, <code>&#39;contain&#39;</code>, <code>&#39;fill&#39;</code>, <code>&#39;none&#39;</code>, or <code>&#39;scale-down&#39;</code>. Defaults to <code>&#39;cover&#39;</code>.</li><li><code>position</code>: Any valid CSS position value, like <code>&#39;top&#39;</code>, <code>&#39;center&#39;</code>, <code>&#39;bottom left&#39;</code>. Defaults to <code>&#39;center&#39;</code>.</li></ul><p>The &quot;Contain&quot; example below shows an image with <code>fit=&quot;contain&quot;</code> inside a container with a background color to demonstrate how the image is contained without being cropped.</p><h2 id="responsive-sources" tabindex="-1">Responsive Sources <a class="header-anchor" href="#responsive-sources" aria-label="Permalink to &quot;Responsive Sources&quot;">​</a></h2><p>For more advanced responsive use cases, you can provide different image sources for different screen sizes or formats using the <code>sources</code> prop. This creates a native <code>&lt;picture&gt;</code> element under the hood.</p><p>Each object in the <code>sources</code> array can have <code>srcset</code>, <code>media</code>, <code>type</code>, and <code>sizes</code> properties.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;small-image.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;A responsive image.&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  aspectRatio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16/9&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  :sources</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;[</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    { srcset: &#39;large-image.webp&#39;, type: &#39;image/webp&#39;, media: &#39;(min-width: 1024px)&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    { srcset: &#39;large-image.jpg&#39;, media: &#39;(min-width: 1024px)&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    { srcset: &#39;medium-image.webp&#39;, type: &#39;image/webp&#39;, media: &#39;(min-width: 768px)&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    { srcset: &#39;medium-image.jpg&#39;, media: &#39;(min-width: 768px)&#39; }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  ]&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><blockquote><p><strong>Best Practice: Consistent Aspect Ratios</strong> To prevent layout shifts when the browser switches between different sources, ensure that all images (the default <code>src</code> and all images in the <code>sources</code> array) share the same aspect ratio. Also, consider serving modern, highly-compressed image formats like <strong>AVIF</strong> and <strong>WebP</strong> in your <code>sources</code> list for improved performance.</p></blockquote><h2 id="fallback-source" tabindex="-1">Fallback Source <a class="header-anchor" href="#fallback-source" aria-label="Permalink to &quot;Fallback Source&quot;">​</a></h2><p>If the primary <code>src</code> fails to load, you can provide a <code>fallbackSrc</code>. The component will automatically attempt to load this backup image, preventing a broken image icon from appearing.</p><h2 id="custom-placeholders-and-errors" tabindex="-1">Custom Placeholders and Errors <a class="header-anchor" href="#custom-placeholders-and-errors" aria-label="Permalink to &quot;Custom Placeholders and Errors&quot;">​</a></h2><p>For a more tailored user experience, you can provide custom content to be displayed during loading or on error using named slots.</p><ul><li><strong><code>placeholder</code> slot</strong>: Content in this slot is displayed while the image is loading. This is perfect for implementing custom skeleton loaders or low-quality image placeholders (LQIP) that match your site&#39;s design tokens.</li><li><strong><code>error</code> slot</strong>: Content in this slot is displayed if the image (and any fallback) fails to load.</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;...&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;placeholder&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> src</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;broken-image.jpg&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> alt</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;error&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-label="Permalink to &quot;Styling&quot;">​</a></h2><p>While inline <code>style</code> is supported, the recommended approach for styling is to use standard CSS with the <code>class</code> attribute.</p><h3 id="css-parts" tabindex="-1">CSS Parts <a class="header-anchor" href="#css-parts" aria-label="Permalink to &quot;CSS Parts&quot;">​</a></h3><p>For deeper customization, the Image component exposes several CSS Parts that allow you to style its internal elements from outside:</p><ul><li><code>::part(ag-img)</code>: The <code>&lt;img&gt;</code> element itself.</li><li><code>::part(ag-placeholder)</code>: The container for the placeholder content.</li><li><code>::part(ag-error)</code>: The container for the error content.</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-styled-image</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-img</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">12</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-primary-light</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>src</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td><strong>Required.</strong> The primary image source URL.</td></tr><tr><td><code>alt</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td><strong>Required.</strong> Alternative text for accessibility.</td></tr><tr><td><code>aspectRatio</code></td><td><code>string</code></td><td><code>undefined</code></td><td>The image&#39;s aspect ratio (e.g., &quot;16/9&quot;). Used to prevent layout shift on responsive images.</td></tr><tr><td><code>sources</code></td><td><code>AgImageSource[]</code></td><td><code>[]</code></td><td>An array of source objects to create a <code>&lt;picture&gt;</code> element for responsive images.</td></tr><tr><td><code>width</code></td><td><code>number</code></td><td><code>undefined</code></td><td>Sets a fixed width in pixels, opting out of responsiveness.</td></tr><tr><td><code>height</code></td><td><code>number</code></td><td><code>undefined</code></td><td>Sets a fixed height in pixels.</td></tr><tr><td><code>fit</code></td><td><code>&#39;cover&#39; | &#39;contain&#39; | &#39;fill&#39; | &#39;none&#39; | &#39;scale-down&#39;</code></td><td><code>&#39;cover&#39;</code></td><td>Defines how the image fits its container. Corresponds to <code>object-fit</code>.</td></tr><tr><td><code>position</code></td><td><code>string</code></td><td><code>&#39;center&#39;</code></td><td>Defines the image&#39;s position within its container. Corresponds to <code>object-position</code>.</td></tr><tr><td><code>loading</code></td><td><code>&#39;lazy&#39; | &#39;eager&#39;</code></td><td><code>&#39;lazy&#39;</code></td><td>Sets the native browser loading strategy.</td></tr><tr><td><code>fade</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If <code>true</code>, the image will fade in smoothly on load.</td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td><code>200</code></td><td>The duration of the fade-in transition in milliseconds.</td></tr><tr><td><code>fallbackSrc</code></td><td><code>string</code></td><td><code>undefined</code></td><td>A backup image URL to load if the primary <code>src</code> fails.</td></tr></tbody></table><h2 id="best-practices-implementation-details" tabindex="-1">Best Practices &amp; Implementation Details <a class="header-anchor" href="#best-practices-implementation-details" aria-label="Permalink to &quot;Best Practices &amp; Implementation Details&quot;">​</a></h2><p>For those curious about the web standards at play, this section explains the &quot;why&quot; behind the <code>ag-image</code> component&#39;s design and how it aligns with modern best practices for 2025.</p><h3 id="two-core-methods-for-preventing-cls" tabindex="-1">Two Core Methods for Preventing CLS <a class="header-anchor" href="#two-core-methods-for-preventing-cls" aria-label="Permalink to &quot;Two Core Methods for Preventing CLS&quot;">​</a></h3><p>There are two primary, best-practice methods to prevent layout shifts from images:</p><ol><li><p><strong>Intrinsic Sizing (The Classic Method)</strong>: The simplest approach is to set <code>width</code> and <code>height</code> attributes directly on an <code>&lt;img&gt;</code> tag. The browser uses these to calculate the aspect ratio before the image loads. You then make it responsive with CSS: <code>&lt;img src=&quot;...&quot; width=&quot;1200&quot; height=&quot;800&quot; style=&quot;width: 100%; height: auto;&quot;&gt;</code>. This is a great baseline for simple use cases.</p></li><li><p><strong>CSS <code>aspect-ratio</code> (The Modern Component Method)</strong>: For dynamic or component-based designs, the more powerful method is to apply the <code>aspect-ratio</code> CSS property directly to the image container. This is the primary method used by the <code>ag-image</code> component.</p></li></ol><p>The <code>ag-image</code> component embraces the modern <code>aspect-ratio</code> method because it provides more robust control within a component architecture, especially when dealing with frameworks like React, Vue, or Svelte.</p><h3 id="why-the-component-uses-height-100" tabindex="-1">Why the Component Uses <code>height: 100%</code> <a class="header-anchor" href="#why-the-component-uses-height-100" aria-label="Permalink to &quot;Why the Component Uses \`height: 100%\`&quot;">​</a></h3><p>Internally, the <code>&lt;ag-image&gt;</code> component acts as a container.</p><ol><li>When you provide the <code>aspectRatio</code> prop, the <code>&lt;ag-image&gt;</code> container gets the <code>aspect-ratio</code> style, reserving the correct space on the page.</li><li>The inner <code>&lt;img&gt;</code> element is styled with <code>width: 100%</code> and <code>height: 100%</code>.</li></ol><p>This tells the image to completely fill the pre-sized &quot;box&quot; created by its container. This pattern is crucial for making the <code>fit</code> prop (<code>object-fit</code>) work correctly, giving you precise control over whether the image should <code>cover</code> the box (cropping itself) or be <code>contain</code>ed within it (letterboxing)—a level of flexibility not easily achieved with the older <code>height: auto</code> method.</p>`,48))]))}});export{$s as __pageData,Us as default};
