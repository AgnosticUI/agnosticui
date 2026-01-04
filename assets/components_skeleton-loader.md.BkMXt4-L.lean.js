import{A as y}from"./chunks/AlphaWarning.D199zhtu.js";import{i as m,z as p,a as f,x as b}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{s as v}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as F,c as k,o as g,r as x,K as C,p as q,v as w,P as A,s as D,_ as E,C as B,j as i,G as a,F as S,B as P,ae as L,a as V}from"./chunks/framework.CdHt8f9T.js";var T=Object.defineProperty,o=(e,s,n,l)=>{for(var h=void 0,d=e.length-1,t;d>=0;d--)(t=e[d])&&(h=t(s,n,h)||h);return h&&T(s,n,h),h};const c=class extends f{constructor(){super(),this.variant="text",this.effect="pulse",this.intensity="light"}connectedCallback(){super.connectedCallback(),this.hasAttribute("aria-hidden")||this.setAttribute("aria-hidden","true")}updated(s){super.updated(s),(s.has("width")||s.has("height")||s.has("variant"))&&this._updateDimensions()}_updateDimensions(){this.variant==="circular"?this.width&&!this.height?(this.style.height=this.width,this.style.width=this.width):this.height&&!this.width?(this.style.width=this.height,this.style.height=this.height):this.width&&this.height&&(this.style.width=this.width,this.style.height=this.height):(this.width&&(this.style.width=this.width),this.height&&(this.style.height=this.height))}render(){return b`<div class="skeleton-wrapper" part="ag-skeleton-wrapper"></div>`}};c.styles=m`
    :host {
      display: block;
      background-color: var(--ag-background-secondary);
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 1em;
    }

    /* Intensity variants */
    :host([intensity='light']) {
      background-color: var(--ag-background-secondary);
    }

    :host([intensity='medium']) {
      background-color: var(--ag-background-tertiary);
    }

    /* Variants */
    :host([variant='text']) {
      border-radius: var(--ag-radius-sm);
    }

    :host([variant='circular']) {
      border-radius: 50%;
    }

    :host([variant='rectangular']) {
      border-radius: 0;
    }

    :host([variant='rounded']) {
      border-radius: var(--ag-radius-md);
    }

    /* Effects */
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    :host([effect='pulse']) {
      animation: pulse 1.5s infinite ease-in-out;
    }

    :host([effect='sheen'])::after {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        transparent 0%,
        var(--ag-background-primary) 20%,
        var(--ag-background-primary) 60%,
        transparent 100%
      );
      opacity: 0.3;
      animation: sheen 1.5s infinite;
    }

    @keyframes sheen {
      100% {
        transform: translateX(100%);
      }
    }

    :host([effect='none']) {
      animation: none;
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      :host([effect='pulse']),
      :host([effect='sheen'])::after {
        animation: none;
      }
    }
  `;let r=c;o([p({type:String,reflect:!0})],r.prototype,"variant");o([p({type:String,reflect:!0})],r.prototype,"effect");o([p({type:String,reflect:!0})],r.prototype,"intensity");o([p({type:String,reflect:!0})],r.prototype,"width");o([p({type:String,reflect:!0})],r.prototype,"height");customElements.get("ag-skeleton-loader")||customElements.define("ag-skeleton-loader",r);const _=F({name:"VueSkeletonLoader",props:{variant:{type:String,default:"text"},effect:{type:String,default:"pulse"},intensity:{type:String,default:"light"},width:{type:String,default:void 0},height:{type:String,default:void 0}},setup(e){const s=q(null),n=()=>{const l=s.value;l&&(l.variant=e.variant,l.effect=e.effect,l.intensity=e.intensity,l.width=e.width,l.height=e.height)};return w(async()=>{await customElements.whenDefined("ag-skeleton-loader"),await A(),n()}),D(()=>{s.value&&n()}),{agComponent:s}}}),R=["variant","effect","intensity","width","height"];function I(e,s,n,l,h,d){return g(),k("ag-skeleton-loader",C({ref:"agComponent",variant:e.variant,effect:e.effect,intensity:e.intensity,width:e.width,height:e.height},e.$attrs),[x(e.$slots,"default")],16,R)}const N=v(_,[["render",I]]),$=F({name:"SkeletonLoaderExamples",components:{VueSkeletonLoader:N}}),M={class:"mbe4"},U={style:{width:"300px"}},W={class:"mbe4"},z={class:"flex items-center",style:{gap:"16px"}},O={class:"mbe4"},j={class:"mbe4"},G={class:"mbe4"},K={class:"flex",style:{gap:"24px","flex-wrap":"wrap"}},X={class:"mbe4"},J={class:"flex",style:{gap:"24px","flex-wrap":"wrap"}},H={class:"mbe4"},Q={class:"flex",style:{gap:"16px",padding:"20px",border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-md)","max-width":"400px"}},Y={style:{flex:"1"}},Z={class:"mbe4"},ss={style:{border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-md)",overflow:"hidden","max-width":"350px"}},is={style:{padding:"16px"}},ts={class:"mbe4"},as={style:{"max-width":"500px"}},es={style:{flex:"1"}},ns={class:"mbe4"};function ls(e,s,n,l,h,d){const t=B("VueSkeletonLoader");return g(),k("section",null,[i("div",M,[s[0]||(s[0]=i("h2",null,"Text Skeleton",-1)),s[1]||(s[1]=i("p",{class:"mbs2 mbe3"}," Default text skeleton with subtle border radius, perfect for text placeholders. ",-1)),i("div",U,[a(t),a(t,{style:{"margin-top":"8px"}}),a(t,{style:{"margin-top":"8px",width:"60%"}})])]),i("div",W,[s[2]||(s[2]=i("h2",null,"Circular Skeleton",-1)),s[3]||(s[3]=i("p",{class:"mbs2 mbe3"}," Circular variant, ideal for avatar placeholders. ",-1)),i("div",z,[a(t,{variant:"circular",width:"40px",height:"40px"}),a(t,{variant:"circular",width:"60px",height:"60px"}),a(t,{variant:"circular",width:"80px",height:"80px"})])]),i("div",O,[s[4]||(s[4]=i("h2",null,"Rectangular Skeleton",-1)),s[5]||(s[5]=i("p",{class:"mbs2 mbe3"}," Rectangular variant with no border radius, perfect for images. ",-1)),a(t,{variant:"rectangular",width:"300px",height:"200px"})]),i("div",j,[s[6]||(s[6]=i("h2",null,"Rounded Skeleton",-1)),s[7]||(s[7]=i("p",{class:"mbs2 mbe3"}," Rounded variant with medium border radius, ideal for cards. ",-1)),a(t,{variant:"rounded",width:"300px",height:"200px"})]),i("div",G,[s[11]||(s[11]=i("h2",null,"Effects",-1)),s[12]||(s[12]=i("p",{class:"mbs2 mbe3"}," Different animation effects: pulse (default), sheen, and none. ",-1)),i("div",K,[i("div",null,[s[8]||(s[8]=i("h3",{class:"mbe2"},"Pulse",-1)),a(t,{effect:"pulse",width:"200px",height:"100px",variant:"rounded"})]),i("div",null,[s[9]||(s[9]=i("h3",{class:"mbe2"},"Sheen",-1)),a(t,{effect:"sheen",width:"200px",height:"100px",variant:"rounded"})]),i("div",null,[s[10]||(s[10]=i("h3",{class:"mbe2"},"None",-1)),a(t,{effect:"none",width:"200px",height:"100px",variant:"rounded"})])])]),i("div",X,[s[15]||(s[15]=i("h2",null,"Intensity",-1)),s[16]||(s[16]=i("p",{class:"mbs2 mbe3"}," Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary. ",-1)),i("div",J,[i("div",null,[s[13]||(s[13]=i("h3",{class:"mbe2"},"Light",-1)),a(t,{intensity:"light",width:"200px",height:"100px",variant:"rounded"})]),i("div",null,[s[14]||(s[14]=i("h3",{class:"mbe2"},"Medium",-1)),a(t,{intensity:"medium",width:"200px",height:"100px",variant:"rounded"})])])]),i("div",H,[s[17]||(s[17]=i("h2",null,"User Profile Card Loading",-1)),s[18]||(s[18]=i("p",{class:"mbs2 mbe3"}," Real-world example showing a loading profile card. ",-1)),i("div",Q,[a(t,{variant:"circular",width:"60px",height:"60px"}),i("div",Y,[a(t,{width:"40%",height:"16px"}),a(t,{width:"60%",height:"14px",style:{"margin-top":"8px"}}),a(t,{width:"80%",height:"14px",style:{"margin-top":"8px"}})])])]),i("div",Z,[s[19]||(s[19]=i("h2",null,"Article Card Loading",-1)),s[20]||(s[20]=i("p",{class:"mbs2 mbe3"}," Real-world example showing a loading article card. ",-1)),i("div",ss,[a(t,{variant:"rectangular",width:"100%",height:"200px"}),i("div",is,[a(t,{width:"60%",height:"20px"}),a(t,{width:"100%",height:"14px",style:{"margin-top":"12px"}}),a(t,{width:"100%",height:"14px",style:{"margin-top":"8px"}}),a(t,{width:"40%",height:"14px",style:{"margin-top":"8px"}})])])]),i("div",ts,[s[21]||(s[21]=i("h2",null,"List Loading",-1)),s[22]||(s[22]=i("p",{class:"mbs2 mbe3"}," Real-world example showing a loading list. ",-1)),i("div",as,[(g(),k(S,null,P(3,u=>i("div",{key:u,class:"flex items-center",style:{gap:"12px","margin-bottom":"16px"}},[a(t,{variant:"circular",width:"40px",height:"40px"}),i("div",es,[a(t,{width:"60%",height:"16px"}),a(t,{width:"40%",height:"14px",style:{"margin-top":"8px"}})])])),64))])]),i("div",ns,[s[23]||(s[23]=i("h2",null,"CSS Shadow Parts Customization",-1)),s[24]||(s[24]=i("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the skeleton's appearance. ",-1)),a(t,{class:"custom-skeleton",width:"300px",height:"100px",variant:"rounded"})])])}const hs=E($,[["render",ls]]),Fs=JSON.parse('{"title":"Skeleton Loader","description":"","frontmatter":{},"headers":[],"relativePath":"components/skeleton-loader.md","filePath":"components/skeleton-loader.md"}'),rs={name:"components/skeleton-loader.md"},cs=Object.assign(rs,{setup(e){return(s,n)=>(g(),k("div",null,[n[0]||(n[0]=i("h1",{id:"skeleton-loader",tabindex:"-1"},[V("Skeleton Loader "),i("a",{class:"header-anchor",href:"#skeleton-loader","aria-label":'Permalink to "Skeleton Loader"'},"​")],-1)),a(y),n[1]||(n[1]=i("p",null,"Skeleton loader provides a visual placeholders while content is loading, improving perceived performance and user experience. It represents the approximate shape and size of the content that will appear.",-1)),a(hs),n[2]||(n[2]=L("",26))]))}});export{Fs as __pageData,cs as default};
