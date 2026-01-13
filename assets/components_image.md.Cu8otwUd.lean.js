var H=Object.defineProperty;var J=(i,a,t)=>a in i?H(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var v=(i,a,t)=>J(i,typeof a!="symbol"?a+"":a,t);import{A as Q}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as L,z as d,a as V,E as F,x as u}from"./chunks/Button.Bujdzq23.js";import{n as S}from"./chunks/Icon.odq14qpJ.js";import{d as O,p as g,c as B,o as A,r as I,K as X,j as e,G as h,a as w,k as p,w as b,ae as R}from"./chunks/framework.NAAYCHZu.js";import{u as ss}from"./chunks/VueIcon.vue_vue_type_script_setup_true_lang-kC-nzMyu.4MVkE5wk.js";import{T as es}from"./chunks/triangle-alert.DhPqtk12.js";import{F as as}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/createLucideIcon.B61Wqv9x.js";var is=Object.defineProperty,o=(i,a,t,k)=>{for(var r=void 0,c=i.length-1,l;c>=0;c--)(l=i[c])&&(r=l(a,t,r)||r);return r&&is(a,t,r),r};const W=class extends V{constructor(){super(),this._handleLoad=()=>{this._loaded=!0,this._errored=!1,this.dispatchEvent(new CustomEvent("ag-load",{bubbles:!0,composed:!0}))},this._handleError=()=>{if(this._loaded=!1,this._errored=!0,this.fallbackSrc&&this._currentSrc!==this.fallbackSrc){this._currentSrc=this.fallbackSrc;return}this.dispatchEvent(new CustomEvent("ag-error",{bubbles:!0,composed:!0}))},this.src="",this.alt="",this.sources=[],this.fit="cover",this.position="center",this.loading="lazy",this.fade=!1,this.duration=200,this._loaded=!1,this._errored=!1,this._currentSrc=""}willUpdate(a){super.willUpdate(a),a.has("fit")&&this.style.setProperty("--ag-image-fit",this.fit),a.has("position")&&this.style.setProperty("--ag-image-position",this.position),a.has("width")&&(this.style.width=this.width!=null?`${this.width}px`:""),a.has("height")&&(this.style.height=this.height!=null?`${this.height}px`:""),(a.has("aspectRatio")||a.has("width")||a.has("height"))&&(this.aspectRatio?this.style.aspectRatio=this.aspectRatio:this.width!=null&&this.height!=null?this.style.aspectRatio=`${this.width} / ${this.height}`:this.style.aspectRatio=""),a.has("src")&&a.get("src")!==this.src&&(this._loaded=!1,this._errored=!1,this._currentSrc=this.src)}_renderImage(){const a=this._errored&&this.fallbackSrc?this.fallbackSrc:this._currentSrc;return u`
      <img
        part="ag-img"
        class=${this._loaded?"loaded":""}
        src=${a}
        alt=${this.alt}
        loading=${this.loading}
        decoding="async"
        width=${this.width??F}
        height=${this.height??F}
        @load=${this._handleLoad}
        @error=${this._handleError}
      />
    `}_renderPicture(){return!this.sources||this.sources.length===0?this._renderImage():u`
      <picture>
        ${this.sources.map(a=>u`
            <source
              srcset=${a.srcset}
              type=${a.type??F}
              media=${a.media??F}
              sizes=${a.sizes??F}
            />
          `)}
        ${this._renderImage()}
      </picture>
    `}_renderOverlay(){return this._loaded?F:this._errored?u`
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
  `;let n=W;o([d({type:String})],n.prototype,"src");o([d({type:String})],n.prototype,"alt");o([d({type:Array})],n.prototype,"sources");o([d({type:Number})],n.prototype,"width");o([d({type:Number})],n.prototype,"height");o([d({type:String,attribute:"aspect-ratio"})],n.prototype,"aspectRatio");o([d({type:String})],n.prototype,"fit");o([d({type:String})],n.prototype,"position");o([d({type:String})],n.prototype,"loading");o([d({type:Boolean,reflect:!0})],n.prototype,"fade");o([d({type:Number})],n.prototype,"duration");o([d({type:String,attribute:"fallback-src"})],n.prototype,"fallbackSrc");o([S()],n.prototype,"_loaded");o([S()],n.prototype,"_errored");o([S()],n.prototype,"_currentSrc");customElements.get("ag-image")||customElements.define("ag-image",n);const ts=["src","alt","width","height","aspect-ratio","fit","position","loading",".fade","duration","fallback-src"],m=O({__name:"VueImage",props:{sources:{},src:{default:""},alt:{default:""},width:{},height:{},aspectRatio:{},fit:{default:"cover"},position:{default:"center"},loading:{default:"lazy"},fade:{type:Boolean,default:!1},duration:{default:200},fallbackSrc:{}},emits:["ag-load","ag-error"],setup(i,{emit:a}){const t=a,k=g(),r=l=>{t("ag-load")},c=l=>{t("ag-error")};return(l,y)=>(A(),B("ag-image",X({ref_key:"imageRef",ref:k,src:i.src,alt:i.alt,width:i.width,height:i.height,"aspect-ratio":i.aspectRatio,fit:i.fit,position:i.position,loading:i.loading,".fade":i.fade,duration:i.duration,"fallback-src":i.fallbackSrc,onAgLoad:r,onAgError:c},l.$attrs),[I(l.$slots,"placeholder",{slot:"placeholder"}),I(l.$slots,"error",{slot:"error"}),I(l.$slots,"default")],48,ts))}}),ns={class:"image-examples-container"},os={class:"responsive-image-container"},ls={class:"contain-fit-container"},rs={class:"responsive-image-container"},hs={class:"responsive-image-container"},ps={slot:"error",class:"custom-error"},ds={class:"error-icon"},cs={class:"responsive-image-container"},$="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",U="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80",T="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80",j="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",P="https://thissourcedoesnotexist.com/image.jpg",z="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50",_="https://thissourcedoesnotexist.com/another-broken-image.jpg",N="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80",gs=O({__name:"ImageExamples",setup(i){const a=g($),t=()=>{a.value=`${$}&t=${new Date().getTime()}`},k=g(U),r=()=>{k.value=`${U}&t=${new Date().getTime()}`},c=g(T),l=()=>{c.value=`${T}&t=${new Date().getTime()}`},y=g(j),f=()=>{y.value=`${j}&t=${new Date().getTime()}`},M=[{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",media:"(min-width: 1024px)"},{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",media:"(min-width: 768px)"}],x=g(P),Z=()=>{x.value=`${P}?t=${new Date().getTime()}`},q=g(z),K=()=>{q.value=`${z}&t=${new Date().getTime()}`},D=g(_),Y=()=>{D.value=`${_}?t=${new Date().getTime()}`},E=g(N),G=()=>{E.value=`${N}&t=${new Date().getTime()}`};return(ys,s)=>(A(),B("div",ns,[s[2]||(s[2]=e("h2",null,"Basic Image",-1)),s[3]||(s[3]=e("p",null,[w("A standard image with a `src` and `alt` tag. This example also has the "),e("code",null,"fade"),w(" prop enabled. Click the button to reload the image and see the effect.")],-1)),h(p(m),{src:a.value,alt:"A beautiful landscape with a river and mountains.",width:545,height:487,fade:!0,style:{"max-width":"100%",height:"auto"}},null,8,["src"]),e("button",{onClick:t,class:"reload-button"},"Reload Image"),s[4]||(s[4]=e("hr",null,null,-1)),s[5]||(s[5]=e("h2",null,"Responsive Image (No Layout Shift)",-1)),s[6]||(s[6]=e("p",null," By omitting `width` and `height` props and providing `aspectRatio`, the image becomes responsive while preventing content layout shift. Fade is also enabled here. ",-1)),e("div",os,[h(p(m),{src:k.value,alt:"A forest path leading to a mountain.",aspectRatio:"16/9",fade:!0},null,8,["src"])]),e("button",{onClick:r,class:"reload-button"},"Reload Image"),s[7]||(s[7]=e("hr",null,null,-1)),s[8]||(s[8]=e("h2",null,"Object Fit: Contain",-1)),s[9]||(s[9]=e("p",null,'Use `fit="contain"` to ensure the entire image is visible within its container without being cropped.',-1)),e("div",ls,[h(p(m),{src:c.value,alt:"A dense forest with sunlight filtering through.",aspectRatio:"4/3",fit:"contain",fade:!0},null,8,["src"])]),e("button",{onClick:l,class:"reload-button"},"Reload Image"),s[10]||(s[10]=e("hr",null,null,-1)),s[11]||(s[11]=e("h2",null,"Responsive Sources with <picture>",-1)),s[12]||(s[12]=e("p",null,"Provide different images for different screen sizes using the `sources` prop. Resize your browser to see the image change.",-1)),e("div",rs,[h(p(m),{src:y.value,alt:"A responsive landscape that changes with screen size.",aspectRatio:"16/9",sources:M,fade:!0},null,8,["src"])]),e("button",{onClick:f,class:"reload-button"},"Reload Image"),s[13]||(s[13]=e("hr",null,null,-1)),s[14]||(s[14]=e("h2",null,"Fallback Source",-1)),s[15]||(s[15]=e("p",null,"If the primary `src` is broken, the `fallbackSrc` will be loaded instead. The fallback will also fade in.",-1)),h(p(m),{src:x.value,fallbackSrc:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80",alt:"An image with a fallback source.",width:545,height:487,fade:!0,style:{"max-width":"100%",height:"auto"}},null,8,["src"]),e("button",{onClick:Z,class:"reload-button"},"Reload Image"),s[16]||(s[16]=e("hr",null,null,-1)),s[17]||(s[17]=e("h2",null,"Custom Placeholder Slot",-1)),s[18]||(s[18]=e("p",null,"Provide custom content to be displayed while the image is loading.",-1)),h(p(m),{src:q.value,alt:"A nature scene with a custom placeholder.",width:545,height:487,style:{"max-width":"100%",height:"auto"}},{default:b(()=>[...s[0]||(s[0]=[e("div",{slot:"placeholder",class:"custom-placeholder"},[e("div",{class:"placeholder-icon"},"📷"),e("div",null,"Loading beautiful scenery...")],-1)])]),_:1},8,["src"]),e("button",{onClick:K,class:"reload-button"},"Reload Image"),s[19]||(s[19]=e("hr",null,null,-1)),s[20]||(s[20]=e("h2",null,"Custom Error Slot",-1)),s[21]||(s[21]=e("p",null,"Display a custom message or UI when an image fails to load.",-1)),e("div",hs,[h(p(m),{src:D.value,alt:"An image with a custom error message.",aspectRatio:"4/3",style:{width:"100%"}},{default:b(()=>[e("div",ps,[e("div",ds,[h(p(ss),{size:"64",type:"error",noFill:!0},{default:b(()=>[h(p(es))]),_:1})]),s[1]||(s[1]=e("h2",{style:{"margin-top":"0"}},"Oops! The image could not be loaded.",-1))])]),_:1},8,["src"])]),e("button",{onClick:Y,class:"reload-button"},"Reload Image"),s[22]||(s[22]=e("hr",null,null,-1)),s[23]||(s[23]=e("h2",null,"Styled with CSS Class and Parts",-1)),s[24]||(s[24]=e("p",null,"Use a CSS class to apply custom styles to the component, including its internal parts like `::part(ag-img)`.",-1)),e("div",cs,[h(p(m),{class:"custom-styled-image",src:E.value,alt:"A landscape with a custom border style.",aspectRatio:"4/3",fade:!0},null,8,["src"])]),e("button",{onClick:G,class:"reload-button"},"Reload Image")]))}});class C extends V{createRenderRoot(){return this}constructor(){super();const a="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",t="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80",k="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80",r="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80",c="https://thissourcedoesnotexist.com/image.jpg",l="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50",y="https://thissourcedoesnotexist.com/another-broken-image.jpg",f="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80";this.basicImageSrc=a,this.responsiveImageSrc=t,this.objectFitImageSrc=k,this.responsiveSourcesImageSrc=r,this.fallbackImageSrc=c,this.placeholderImageSrc=l,this.errorImageSrc=y,this.styledImageSrc=f,this.basicImageUrl=a,this.responsiveImageUrl=t,this.objectFitImageUrl=k,this.responsiveSourcesImageUrl=r,this.placeholderImageUrl=l,this.styledImageUrl=f}reloadBasicImage(){this.basicImageSrc=`${this.basicImageUrl}&t=${new Date().getTime()}`}reloadResponsiveImage(){this.responsiveImageSrc=`${this.responsiveImageUrl}&t=${new Date().getTime()}`}reloadObjectFitImage(){this.objectFitImageSrc=`${this.objectFitImageUrl}&t=${new Date().getTime()}`}reloadResponsiveSourcesImage(){this.responsiveSourcesImageSrc=`${this.responsiveSourcesImageUrl}&t=${new Date().getTime()}`}reloadFallbackImage(){this.fallbackImageSrc=`https://thissourcedoesnotexist.com/image.jpg?t=${new Date().getTime()}`}reloadPlaceholderImage(){this.placeholderImageSrc=`${this.placeholderImageUrl}&t=${new Date().getTime()}`}reloadErrorImage(){this.errorImageSrc=`https://thissourcedoesnotexist.com/another-broken-image.jpg?t=${new Date().getTime()}`}reloadStyledImage(){this.styledImageSrc=`${this.styledImageUrl}&t=${new Date().getTime()}`}render(){const a=[{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",media:"(min-width: 1024px)"},{srcset:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",media:"(min-width: 768px)"}];return u`
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
  `);customElements.define("image-lit-examples",C);const ks=`<script setup lang="ts">
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
`,ms=`import { LitElement, html, css } from 'lit';
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
`,us=`import { useState } from "react";
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
`,qs=JSON.parse('{"title":"Image","description":"","frontmatter":{"title":"Image"},"headers":[],"relativePath":"components/image.md","filePath":"components/image.md"}'),Fs={name:"components/image.md"},Ds=Object.assign(Fs,{setup(i){return(a,t)=>(A(),B("div",null,[t[1]||(t[1]=e("h1",{id:"image",tabindex:"-1"},[w("Image "),e("a",{class:"header-anchor",href:"#image","aria-label":'Permalink to "Image"'},"​")],-1)),h(Q),t[2]||(t[2]=R("",3)),h(as,{component:"image","vue-code":p(ks),"lit-code":p(ms),"react-code":p(us)},{vue:b(()=>[h(gs)]),lit:b(()=>[...t[0]||(t[0]=[e("image-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[3]||(t[3]=R("",48))]))}});export{qs as __pageData,Ds as default};
