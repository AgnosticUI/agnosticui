import{A as C}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as f,a as b,x as A}from"./chunks/lit-element.B0TUrqGF.js";import{z as y}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{s as v}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as c,c as p,o as F,j as s,r as g,K as B,p as q,v as x,_ as D,C as w,G as e,w as a,a as r,ae as u}from"./chunks/framework.BoyT2Jkt.js";var H=Object.defineProperty,E=(t,i,n,o)=>{for(var h=void 0,k=t.length-1,l;k>=0;k--)(l=t[k])&&(h=l(i,n,h)||h);return h&&H(i,n,h),h};const m=class extends b{constructor(){super(...arguments),this.sticky=!1,this.contentJustify="between"}render(){return A`
      <header class="header" part="ag-header">
        <div class="header-content" part="ag-header-content">
          <div class="header-logo">
            <slot name="logo"></slot>
          </div>
          <div class="header-nav">
            <slot></slot>
          </div>
        </div>
      </header>
    `}};m.styles=f`
    :host {
      display: block;
    }

    /* Sticky positioning - must be on :host to work with light DOM scroll containers */
    :host([sticky]) {
      position: sticky;
      top: 0;
      z-index: var(--ag-z-index-dropdown);
    }

    .header {
      font-family: inherit;
      background-color: var(--ag-background-primary);
      box-shadow: 0 1px 5px 2px rgb(0 0 0 / 10%);
      border-bottom: var(--ag-border-width-1) solid var(--ag-border);
      padding-block-start: var(--ag-space-2);
      padding-block-end: var(--ag-space-2);
      padding-inline-start: var(--ag-space-6);
      padding-inline-end: var(--ag-space-6);
    }

    /* Mobile-first: column layout */
    .header-content {
      max-inline-size: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--ag-space-4);
    }

    .header-logo {
      display: flex;
      align-items: center;
    }

    .header-nav {
      display: flex;
      align-items: center;
    }

    /* Ensure slotted nav elements inherit flex + center alignment */
    .header-nav ::slotted(nav) {
      display: flex;
      align-items: center;
    }

    /* Desktop: row layout with configurable justification */
    @media (min-width: 960px) {
      .header-content {
        flex-direction: row;
        width: 960px;
      }

      :host([contentJustify="between"]) .header-content {
        justify-content: space-between;
      }

      :host([contentJustify="start"]) .header-content {
        justify-content: flex-start;
      }

      :host([contentJustify="end"]) .header-content {
        justify-content: flex-end;
      }

      :host([contentJustify="around"]) .header-content {
        justify-content: space-around;
      }

      :host([contentJustify="center"]) .header-content {
        justify-content: center;
      }
    }
  `;let d=m;E([y({type:Boolean,reflect:!0})],d.prototype,"sticky");E([y({type:String,reflect:!0})],d.prototype,"contentJustify");customElements.get("ag-header")||customElements.define("ag-header",d);const S=c({name:"VueHeader",props:{sticky:{type:Boolean,default:!1},contentJustify:{type:String,default:"between"}},setup(t,{emit:i}){const n=q(null);return x(async()=>{await customElements.whenDefined("ag-header")}),{agComponent:n,sticky:t.sticky,contentJustify:t.contentJustify}}}),P=[".sticky",".contentJustify"],z={slot:"logo"};function T(t,i,n,o,h,k){return F(),p("ag-header",B({ref:"agComponent",".sticky":t.sticky,".contentJustify":t.contentJustify},t.$attrs),[s("span",z,[g(t.$slots,"logo")]),g(t.$slots,"default")],48,P)}const J=v(S,[["render",T]]),V=c({name:"HeaderExamples",components:{VueHeader:J}}),L={class:"ag-header-examples"},N={class:"mbe4"},M={class:"mbe4"},I={href:"#",style:{display:"flex","align-items":"center",gap:"0.5rem","text-decoration":"none",color:"inherit"}},_={width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",style:{color:"var(--vp-c-brand-1)"}},R={class:"mbe4"},j={class:"mbe3"},$={class:"mbe3"},O={class:"mbe3"},U={class:"mbe3"},W={class:"mbe3"},G={class:"mbe4",style:{border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-md)",overflow:"hidden"}},K={style:{height:"300px","overflow-y":"scroll"}},Q={class:"mbe4"},X={class:"mbe3"},Y={class:"mbe3"};function Z(t,i,n,o,h,k){const l=w("VueHeader");return F(),p("section",L,[i[29]||(i[29]=s("div",{class:"mbe4"},[s("h2",null,"Basic Header"),s("p",{class:"mbs2 mbe3"}," A simple header with logo and navigation. On mobile, content stacks vertically. On desktop (≥960px), it displays horizontally. ")],-1)),s("div",N,[e(l,null,{logo:a(()=>[...i[0]||(i[0]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," AgnosticUI ",-1)])]),default:a(()=>[i[1]||(i[1]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"inherit"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"inherit"}},"About")]),s("li",null,[s("a",{href:"#contact",style:{"text-decoration":"none",color:"inherit"}},"Contact")])])],-1))]),_:1})]),i[30]||(i[30]=s("div",{class:"mbe4"},[s("h2",null,"Header with Logo Image")],-1)),s("div",M,[e(l,null,{logo:a(()=>[s("a",I,[(F(),p("svg",_,[...i[2]||(i[2]=[s("circle",{cx:"16",cy:"16",r:"14",fill:"var(--ag-primary)"},null,-1),s("text",{x:"16",y:"22","text-anchor":"middle",fill:"white","font-size":"16","font-weight":"bold"},"A",-1)])])),i[3]||(i[3]=s("span",{style:{"font-weight":"700","font-size":"1.25rem"}},"MyApp",-1))])]),default:a(()=>[i[4]||(i[4]=s("nav",null,[s("ul",{style:{display:"flex",gap:"2rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#dashboard",style:{"text-decoration":"none",color:"inherit"}},"Dashboard")]),s("li",null,[s("a",{href:"#settings",style:{"text-decoration":"none",color:"inherit"}},"Settings")]),s("li",null,[s("a",{href:"#profile",style:{"text-decoration":"none",color:"inherit"}},"Profile")])])],-1))]),_:1})]),i[31]||(i[31]=s("div",{class:"mbe4"},[s("h2",null,"Content Justification"),s("p",{class:"mbs2 mbe3"},[r(" Control how content is aligned within the header using the "),s("code",null,"contentJustify"),r(" prop. ")])],-1)),s("div",R,[s("div",j,[i[7]||(i[7]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Between (Default)",-1)),e(l,{contentJustify:"between"},{logo:a(()=>[...i[5]||(i[5]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:a(()=>[i[6]||(i[6]=s("nav",null,[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",$,[i[10]||(i[10]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Start",-1)),e(l,{contentJustify:"start"},{logo:a(()=>[...i[8]||(i[8]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:a(()=>[i[9]||(i[9]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",O,[i[13]||(i[13]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: End",-1)),e(l,{contentJustify:"end"},{logo:a(()=>[...i[11]||(i[11]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:a(()=>[i[12]||(i[12]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",U,[i[16]||(i[16]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Center",-1)),e(l,{contentJustify:"center"},{logo:a(()=>[...i[14]||(i[14]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:a(()=>[i[15]||(i[15]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",W,[i[19]||(i[19]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Around",-1)),e(l,{contentJustify:"around"},{logo:a(()=>[...i[17]||(i[17]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:a(()=>[i[18]||(i[18]=s("nav",null,[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})])]),i[32]||(i[32]=s("div",{class:"mbe4"},[s("h2",null,"Sticky Header"),s("p",{class:"mbs2 mbe3"}," Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in the demo below to see it in action. ")],-1)),s("div",G,[s("div",K,[e(l,{sticky:!0},{logo:a(()=>[...i[20]||(i[20]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," Sticky Header ",-1)])]),default:a(()=>[i[21]||(i[21]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#section1",style:{"text-decoration":"none",color:"inherit"}},"Section 1")]),s("li",null,[s("a",{href:"#section2",style:{"text-decoration":"none",color:"inherit"}},"Section 2")])])],-1))]),_:1}),i[22]||(i[22]=u("",1))])]),i[33]||(i[33]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the header's appearance without affecting its internal structure. ")],-1)),s("div",Q,[s("div",X,[i[25]||(i[25]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Gradient Background",-1)),e(l,{class:"custom-header-gradient"},{logo:a(()=>[...i[23]||(i[23]=[s("a",{href:"#",style:{"text-decoration":"none",color:"white","font-weight":"700","font-size":"1.25rem"}}," Gradient Header ",-1)])]),default:a(()=>[i[24]||(i[24]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"white"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"white"}},"About")])])],-1))]),_:1})]),s("div",Y,[i[28]||(i[28]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Custom Border",-1)),e(l,{class:"custom-header-border"},{logo:a(()=>[...i[26]||(i[26]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," Bordered Header ",-1)])]),default:a(()=>[i[27]||(i[27]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"inherit"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"inherit"}},"About")])])],-1))]),_:1})])])])}const ss=D(V,[["render",Z]]),ks=JSON.parse('{"title":"Header","description":"","frontmatter":{},"headers":[],"relativePath":"components/header.md","filePath":"components/header.md"}'),is={name:"components/header.md"},ps=Object.assign(is,{setup(t){return(i,n)=>(F(),p("div",null,[n[0]||(n[0]=s("h1",{id:"header",tabindex:"-1"},[r("Header "),s("a",{class:"header-anchor",href:"#header","aria-label":'Permalink to "Header"'},"​")],-1)),e(C),n[1]||(n[1]=s("p",null,"The Header component provides a semantic, accessible, and responsive page header with support for branding/logo and navigation content. It features sticky positioning, flexible content alignment, and responsive behavior.",-1)),e(ss),n[2]||(n[2]=u("",32))]))}});export{ks as __pageData,ps as default};
