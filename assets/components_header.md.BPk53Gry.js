import{A as E}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as x,z as y,a as m,x as u}from"./chunks/Button.DkmThuAs.js";import{s as A}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as f,c as r,o as p,j as s,r as c,K as w,p as B,v as D,_ as S,C as q,G as l,w as n,a as d,ae as v,k}from"./chunks/framework.NAAYCHZu.js";import{F as H}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var z=Object.defineProperty,b=(t,i,a,F)=>{for(var h=void 0,o=t.length-1,e;o>=0;o--)(e=t[o])&&(h=e(i,a,h)||h);return h&&z(i,a,h),h};const C=class extends m{constructor(){super(...arguments),this.sticky=!1,this.contentJustify="between"}render(){return u`
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
    `}};C.styles=x`
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
  `;let g=C;b([y({type:Boolean,reflect:!0})],g.prototype,"sticky");b([y({type:String,reflect:!0})],g.prototype,"contentJustify");customElements.get("ag-header")||customElements.define("ag-header",g);const J=f({name:"VueHeader",props:{sticky:{type:Boolean,default:!1},contentJustify:{type:String,default:"between"}},setup(t,{emit:i}){const a=B(null);return D(async()=>{await customElements.whenDefined("ag-header")}),{agComponent:a,sticky:t.sticky,contentJustify:t.contentJustify}}}),N=[".sticky",".contentJustify"],L={slot:"logo"};function P(t,i,a,F,h,o){return p(),r("ag-header",w({ref:"agComponent",".sticky":t.sticky,".contentJustify":t.contentJustify},t.$attrs),[s("span",L,[c(t.$slots,"logo")]),c(t.$slots,"default")],48,N)}const V=A(J,[["render",P]]),R=f({name:"HeaderExamples",components:{VueHeader:V}}),T={class:"ag-header-examples"},I={class:"mbe4"},M={class:"mbe4"},W={href:"#",style:{display:"flex","align-items":"center",gap:"0.5rem","text-decoration":"none",color:"inherit"}},O={width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",style:{color:"var(--vp-c-brand-1)"}},U={class:"mbe4"},_={class:"mbe3"},j={class:"mbe3"},G={class:"mbe3"},$={class:"mbe3"},K={class:"mbe3"},Y={class:"mbe4",style:{border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-md)",overflow:"hidden"}},Q={style:{height:"300px","overflow-y":"scroll"}},X={class:"mbe4"},Z={class:"mbe3"},ss={class:"mbe3"};function is(t,i,a,F,h,o){const e=q("VueHeader");return p(),r("section",T,[i[29]||(i[29]=s("div",{class:"mbe4"},[s("h2",null,"Basic Header"),s("p",{class:"mbs2 mbe3"}," A simple header with logo and navigation. On mobile, content stacks vertically. On desktop (≥960px), it displays horizontally. ")],-1)),s("div",I,[l(e,null,{logo:n(()=>[...i[0]||(i[0]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," AgnosticUI ",-1)])]),default:n(()=>[i[1]||(i[1]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"inherit"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"inherit"}},"About")]),s("li",null,[s("a",{href:"#contact",style:{"text-decoration":"none",color:"inherit"}},"Contact")])])],-1))]),_:1})]),i[30]||(i[30]=s("div",{class:"mbe4"},[s("h2",null,"Header with Logo Image")],-1)),s("div",M,[l(e,null,{logo:n(()=>[s("a",W,[(p(),r("svg",O,[...i[2]||(i[2]=[s("circle",{cx:"16",cy:"16",r:"14",fill:"var(--ag-primary)"},null,-1),s("text",{x:"16",y:"22","text-anchor":"middle",fill:"white","font-size":"16","font-weight":"bold"},"A",-1)])])),i[3]||(i[3]=s("span",{style:{"font-weight":"700","font-size":"1.25rem"}},"MyApp",-1))])]),default:n(()=>[i[4]||(i[4]=s("nav",null,[s("ul",{style:{display:"flex",gap:"2rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#dashboard",style:{"text-decoration":"none",color:"inherit"}},"Dashboard")]),s("li",null,[s("a",{href:"#settings",style:{"text-decoration":"none",color:"inherit"}},"Settings")]),s("li",null,[s("a",{href:"#profile",style:{"text-decoration":"none",color:"inherit"}},"Profile")])])],-1))]),_:1})]),i[31]||(i[31]=s("div",{class:"mbe4"},[s("h2",null,"Content Justification"),s("p",{class:"mbs2 mbe3"},[d(" Control how content is aligned within the header using the "),s("code",null,"contentJustify"),d(" prop. ")])],-1)),s("div",U,[s("div",_,[i[7]||(i[7]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Between (Default)",-1)),l(e,{contentJustify:"between"},{logo:n(()=>[...i[5]||(i[5]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[6]||(i[6]=s("nav",null,[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",j,[i[10]||(i[10]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Start",-1)),l(e,{contentJustify:"start"},{logo:n(()=>[...i[8]||(i[8]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[9]||(i[9]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",G,[i[13]||(i[13]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: End",-1)),l(e,{contentJustify:"end"},{logo:n(()=>[...i[11]||(i[11]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[12]||(i[12]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",$,[i[16]||(i[16]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Center",-1)),l(e,{contentJustify:"center"},{logo:n(()=>[...i[14]||(i[14]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[15]||(i[15]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",K,[i[19]||(i[19]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Around",-1)),l(e,{contentJustify:"around"},{logo:n(()=>[...i[17]||(i[17]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[18]||(i[18]=s("nav",null,[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})])]),i[32]||(i[32]=s("div",{class:"mbe4"},[s("h2",null,"Sticky Header"),s("p",{class:"mbs2 mbe3"}," Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in the demo below to see it in action. ")],-1)),s("div",Y,[s("div",Q,[l(e,{sticky:!0},{logo:n(()=>[...i[20]||(i[20]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," Sticky Header ",-1)])]),default:n(()=>[i[21]||(i[21]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#section1",style:{"text-decoration":"none",color:"inherit"}},"Section 1")]),s("li",null,[s("a",{href:"#section2",style:{"text-decoration":"none",color:"inherit"}},"Section 2")])])],-1))]),_:1}),i[22]||(i[22]=v('<div style="padding:2rem;"><h3 id="section1">Section 1</h3><p style="margin-bottom:200px;">Scroll down to see the sticky behavior. The header stays at the top.</p><h3 id="section2">Section 2</h3><p style="margin-bottom:200px;">The header remains visible as you scroll through content.</p><p>End of scrollable content.</p></div>',1))])]),i[33]||(i[33]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the header's appearance without affecting its internal structure. ")],-1)),s("div",X,[s("div",Z,[i[25]||(i[25]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Gradient Background",-1)),l(e,{class:"custom-header-gradient"},{logo:n(()=>[...i[23]||(i[23]=[s("a",{href:"#",style:{"text-decoration":"none",color:"white","font-weight":"700","font-size":"1.25rem"}}," Gradient Header ",-1)])]),default:n(()=>[i[24]||(i[24]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"white"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"white"}},"About")])])],-1))]),_:1})]),s("div",ss,[i[28]||(i[28]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Custom Border",-1)),l(e,{class:"custom-header-border"},{logo:n(()=>[...i[26]||(i[26]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," Bordered Header ",-1)])]),default:n(()=>[i[27]||(i[27]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"inherit"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"inherit"}},"About")])])],-1))]),_:1})])])])}const ns=S(R,[["render",is]]);class as extends m{createRenderRoot(){return this}render(){return u`
      <style>
        /* CSS Shadow Parts customization examples */
        .custom-header-gradient::part(ag-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-header-border::part(ag-header) {
          background: var(--ag-background-secondary);
          border-bottom: 3px solid var(--ag-primary);
          box-shadow: none;
        }
      </style>

      <section class="ag-header-examples">
        <div class="mbe4">
          <h2>Basic Header</h2>
          <p class="mbs2 mbe3">
            A simple header with logo and navigation. On mobile, content stacks vertically. On
            desktop (≥960px), it displays horizontally.
          </p>
        </div>
        <div class="mbe4">
          <ag-header>
            <a
              slot="logo"
              href="#"
              style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
            >
              AgnosticUI
            </a>
            <nav>
              <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                <li>
                  <a href="#home" style="text-decoration: none; color: inherit;">Home</a>
                </li>
                <li>
                  <a href="#about" style="text-decoration: none; color: inherit;">About</a>
                </li>
                <li>
                  <a href="#contact" style="text-decoration: none; color: inherit;">Contact</a>
                </li>
              </ul>
            </nav>
          </ag-header>
        </div>

        <div class="mbe4">
          <h2>Header with Logo Image</h2>
        </div>
        <div class="mbe4">
          <ag-header>
            <a
              slot="logo"
              href="#"
              style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                style="color: var(--vp-c-brand-1);"
              >
                <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
                <text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
                  A
                </text>
              </svg>
              <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
            </a>
            <nav>
              <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
                <li>
                  <a href="#dashboard" style="text-decoration: none; color: inherit;">Dashboard</a>
                </li>
                <li>
                  <a href="#settings" style="text-decoration: none; color: inherit;">Settings</a>
                </li>
                <li>
                  <a href="#profile" style="text-decoration: none; color: inherit;">Profile</a>
                </li>
              </ul>
            </nav>
          </ag-header>
        </div>

        <div class="mbe4">
          <h2>Content Justification</h2>
          <p class="mbs2 mbe3">
            Control how content is aligned within the header using the
            <code>contentJustify</code> prop.
          </p>
        </div>
        <div class="mbe4">
          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">
              Justify: Between (Default)
            </h3>
            <ag-header contentJustify="between">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav>
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Start</h3>
            <ag-header contentJustify="start">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: End</h3>
            <ag-header contentJustify="end">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Center</h3>
            <ag-header contentJustify="center">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Around</h3>
            <ag-header contentJustify="around">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav>
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sticky Header</h2>
          <p class="mbs2 mbe3">
            Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in
            the demo below to see it in action.
          </p>
        </div>
        <div
          class="mbe4"
          style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden;"
        >
          <div style="height: 300px; overflow-y: scroll;">
            <ag-header sticky>
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
              >
                Sticky Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#section1" style="text-decoration: none; color: inherit;">Section 1</a>
                  </li>
                  <li>
                    <a href="#section2" style="text-decoration: none; color: inherit;">Section 2</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
            <div style="padding: 2rem;">
              <h3 id="section1">Section 1</h3>
              <p style="margin-bottom: 200px;">
                Scroll down to see the sticky behavior. The header stays at the top.
              </p>
              <h3 id="section2">Section 2</h3>
              <p style="margin-bottom: 200px;">
                The header remains visible as you scroll through content.
              </p>
              <p>End of scrollable content.</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the header's appearance without affecting its
            internal structure.
          </p>
        </div>
        <div class="mbe4">
          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Gradient Background</h3>
            <ag-header class="custom-header-gradient">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem;"
              >
                Gradient Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#home" style="text-decoration: none; color: white;">Home</a>
                  </li>
                  <li>
                    <a href="#about" style="text-decoration: none; color: white;">About</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Custom Border</h3>
            <ag-header class="custom-header-border">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
              >
                Bordered Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#home" style="text-decoration: none; color: inherit;">Home</a>
                  </li>
                  <li>
                    <a href="#about" style="text-decoration: none; color: inherit;">About</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
          </div>
        </div>
      </section>
    `}}customElements.define("header-lit-examples",as);const ts=`<template>
  <section class="ag-header-examples">
    <div class="mbe4">
      <h2>Basic Header</h2>
      <p class="mbs2 mbe3">
        A simple header with logo and navigation. On mobile, content stacks vertically. On desktop (≥960px), it displays horizontally.
      </p>
    </div>
    <div class="mbe4">
      <VueHeader>
        <template #logo>
          <a
            href="#"
            style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
          >
            AgnosticUI
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
            <li><a
                href="#home"
                style="text-decoration: none; color: inherit;"
              >Home</a></li>
            <li><a
                href="#about"
                style="text-decoration: none; color: inherit;"
              >About</a></li>
            <li><a
                href="#contact"
                style="text-decoration: none; color: inherit;"
              >Contact</a></li>
          </ul>
        </nav>
      </VueHeader>
    </div>

    <div class="mbe4">
      <h2>Header with Logo Image</h2>
    </div>
    <div class="mbe4">
      <VueHeader>
        <template #logo>
          <a
            href="#"
            style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
              style="color: var(--vp-c-brand-1);"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="var(--ag-primary)"
              />
              <text
                x="16"
                y="22"
                text-anchor="middle"
                fill="white"
                font-size="16"
                font-weight="bold"
              >A</text>
            </svg>
            <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a
                href="#dashboard"
                style="text-decoration: none; color: inherit;"
              >Dashboard</a></li>
            <li><a
                href="#settings"
                style="text-decoration: none; color: inherit;"
              >Settings</a></li>
            <li><a
                href="#profile"
                style="text-decoration: none; color: inherit;"
              >Profile</a></li>
          </ul>
        </nav>
      </VueHeader>
    </div>

    <div class="mbe4">
      <h2>Content Justification</h2>
      <p class="mbs2 mbe3">
        Control how content is aligned within the header using the <code>contentJustify</code> prop.
      </p>
    </div>
    <div class="mbe4">
      <div class="mbe3">
        <h3
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Between (Default)</h3>
        <VueHeader contentJustify="between">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav>
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h3
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Start</h3>
        <VueHeader contentJustify="start">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav style="margin-left: 2rem;">
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h3
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: End</h3>
        <VueHeader contentJustify="end">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav style="margin-left: 2rem;">
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h3
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Center</h3>
        <VueHeader contentJustify="center">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav style="margin-left: 2rem;">
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h3
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Around</h3>
        <VueHeader contentJustify="around">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav>
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>
    </div>

    <div class="mbe4">
      <h2>Sticky Header</h2>
      <p class="mbs2 mbe3">
        Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in the demo below to see it in action.
      </p>
    </div>
    <div
      class="mbe4"
      style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden;"
    >
      <div style="height: 300px; overflow-y: scroll;">
        <VueHeader :sticky="true">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
            >
              Sticky Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
              <li><a
                  href="#section1"
                  style="text-decoration: none; color: inherit;"
                >Section 1</a></li>
              <li><a
                  href="#section2"
                  style="text-decoration: none; color: inherit;"
                >Section 2</a></li>
            </ul>
          </nav>
        </VueHeader>
        <div style="padding: 2rem;">
          <h3 id="section1">Section 1</h3>
          <p style="margin-bottom: 200px;">Scroll down to see the sticky behavior. The header stays at the top.</p>
          <h3 id="section2">Section 2</h3>
          <p style="margin-bottom: 200px;">The header remains visible as you scroll through content.</p>
          <p>End of scrollable content.</p>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the header's appearance without affecting its internal structure.
      </p>
    </div>
    <div class="mbe4">
      <div class="mbe3">
        <h3
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Gradient Background</h3>
        <VueHeader class="custom-header-gradient">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem;"
            >
              Gradient Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
              <li><a
                  href="#home"
                  style="text-decoration: none; color: white;"
                >Home</a></li>
              <li><a
                  href="#about"
                  style="text-decoration: none; color: white;"
                >About</a></li>
            </ul>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h3
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Custom Border</h3>
        <VueHeader class="custom-header-border">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
            >
              Bordered Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
              <li><a
                  href="#home"
                  style="text-decoration: none; color: inherit;"
                >Home</a></li>
              <li><a
                  href="#about"
                  style="text-decoration: none; color: inherit;"
                >About</a></li>
            </ul>
          </nav>
        </VueHeader>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueHeader } from "agnosticui-core/header/vue";

export default defineComponent({
  name: "HeaderExamples",
  components: {
    VueHeader,
  },
});
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-header-gradient::part(ag-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.custom-header-border::part(ag-header) {
  background: var(--ag-background-secondary);
  border-bottom: 3px solid var(--ag-primary);
  box-shadow: none;
}
/* Vitepress override */
.vp-doc li + li {
  margin-top: 0;
}
</style>
`,es=`import { LitElement, html } from "lit";
import "agnosticui-core/header";

export class HeaderLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <style>
        /* CSS Shadow Parts customization examples */
        .custom-header-gradient::part(ag-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-header-border::part(ag-header) {
          background: var(--ag-background-secondary);
          border-bottom: 3px solid var(--ag-primary);
          box-shadow: none;
        }
      </style>

      <section class="ag-header-examples">
        <div class="mbe4">
          <h2>Basic Header</h2>
          <p class="mbs2 mbe3">
            A simple header with logo and navigation. On mobile, content stacks vertically. On
            desktop (≥960px), it displays horizontally.
          </p>
        </div>
        <div class="mbe4">
          <ag-header>
            <a
              slot="logo"
              href="#"
              style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
            >
              AgnosticUI
            </a>
            <nav>
              <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                <li>
                  <a href="#home" style="text-decoration: none; color: inherit;">Home</a>
                </li>
                <li>
                  <a href="#about" style="text-decoration: none; color: inherit;">About</a>
                </li>
                <li>
                  <a href="#contact" style="text-decoration: none; color: inherit;">Contact</a>
                </li>
              </ul>
            </nav>
          </ag-header>
        </div>

        <div class="mbe4">
          <h2>Header with Logo Image</h2>
        </div>
        <div class="mbe4">
          <ag-header>
            <a
              slot="logo"
              href="#"
              style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                style="color: var(--vp-c-brand-1);"
              >
                <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
                <text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
                  A
                </text>
              </svg>
              <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
            </a>
            <nav>
              <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
                <li>
                  <a href="#dashboard" style="text-decoration: none; color: inherit;">Dashboard</a>
                </li>
                <li>
                  <a href="#settings" style="text-decoration: none; color: inherit;">Settings</a>
                </li>
                <li>
                  <a href="#profile" style="text-decoration: none; color: inherit;">Profile</a>
                </li>
              </ul>
            </nav>
          </ag-header>
        </div>

        <div class="mbe4">
          <h2>Content Justification</h2>
          <p class="mbs2 mbe3">
            Control how content is aligned within the header using the
            <code>contentJustify</code> prop.
          </p>
        </div>
        <div class="mbe4">
          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">
              Justify: Between (Default)
            </h3>
            <ag-header contentJustify="between">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav>
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Start</h3>
            <ag-header contentJustify="start">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: End</h3>
            <ag-header contentJustify="end">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Center</h3>
            <ag-header contentJustify="center">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Around</h3>
            <ag-header contentJustify="around">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav>
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sticky Header</h2>
          <p class="mbs2 mbe3">
            Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in
            the demo below to see it in action.
          </p>
        </div>
        <div
          class="mbe4"
          style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden;"
        >
          <div style="height: 300px; overflow-y: scroll;">
            <ag-header sticky>
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
              >
                Sticky Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#section1" style="text-decoration: none; color: inherit;">Section 1</a>
                  </li>
                  <li>
                    <a href="#section2" style="text-decoration: none; color: inherit;">Section 2</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
            <div style="padding: 2rem;">
              <h3 id="section1">Section 1</h3>
              <p style="margin-bottom: 200px;">
                Scroll down to see the sticky behavior. The header stays at the top.
              </p>
              <h3 id="section2">Section 2</h3>
              <p style="margin-bottom: 200px;">
                The header remains visible as you scroll through content.
              </p>
              <p>End of scrollable content.</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the header's appearance without affecting its
            internal structure.
          </p>
        </div>
        <div class="mbe4">
          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Gradient Background</h3>
            <ag-header class="custom-header-gradient">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem;"
              >
                Gradient Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#home" style="text-decoration: none; color: white;">Home</a>
                  </li>
                  <li>
                    <a href="#about" style="text-decoration: none; color: white;">About</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Custom Border</h3>
            <ag-header class="custom-header-border">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
              >
                Bordered Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#home" style="text-decoration: none; color: inherit;">Home</a>
                  </li>
                  <li>
                    <a href="#about" style="text-decoration: none; color: inherit;">About</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
          </div>
        </div>
      </section>
    \`;
  }
}

customElements.define("header-lit-examples", HeaderLitExamples);
`,ls=`import { ReactHeader } from "agnosticui-core/header/react";

const HeaderReactExamples = () => {
  return (
    <section className="ag-header-examples">
      <div className="mbe4">
        <h2>Basic Header</h2>
        <p className="mbs2 mbe3">
          A simple header with logo and navigation. On mobile, content stacks vertically. On
          desktop (≥960px), it displays horizontally.
        </p>
      </div>
      <div className="mbe4">
        <ReactHeader>
          <a
            slot="logo"
            href="#"
            style={{
              textDecoration: "none",
              color: "var(--vp-c-brand-1)",
              fontWeight: 700,
              fontSize: "1.25rem",
            }}
          >
            AgnosticUI
          </a>
          <nav>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
              <li>
                <a href="#home" style={{ textDecoration: "none", color: "inherit" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </ReactHeader>
      </div>

      <div className="mbe4">
        <h2>Header with Logo Image</h2>
      </div>
      <div className="mbe4">
        <ReactHeader>
          <a
            slot="logo"
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
              style={{ color: "var(--vp-c-brand-1)" }}
            >
              <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
              <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                A
              </text>
            </svg>
            <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>MyApp</span>
          </a>
          <nav>
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
              <li>
                <a href="#dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#settings" style={{ textDecoration: "none", color: "inherit" }}>
                  Settings
                </a>
              </li>
              <li>
                <a href="#profile" style={{ textDecoration: "none", color: "inherit" }}>
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </ReactHeader>
      </div>

      <div className="mbe4">
        <h2>Content Justification</h2>
        <p className="mbs2 mbe3">
          Control how content is aligned within the header using the <code>contentJustify</code>{" "}
          prop.
        </p>
      </div>
      <div className="mbe4">
        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Between (Default)
          </h3>
          <ReactHeader contentJustify="between">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Start
          </h3>
          <ReactHeader contentJustify="start">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav style={{ marginLeft: "2rem" }}>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: End
          </h3>
          <ReactHeader contentJustify="end">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav style={{ marginLeft: "2rem" }}>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Center
          </h3>
          <ReactHeader contentJustify="center">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav style={{ marginLeft: "2rem" }}>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Around
          </h3>
          <ReactHeader contentJustify="around">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sticky Header</h2>
        <p className="mbs2 mbe3">
          Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in
          the demo below to see it in action.
        </p>
      </div>
      <div
        className="mbe4"
        style={{
          border: "1px solid var(--ag-border)",
          borderRadius: "var(--ag-radius-md)",
          overflow: "hidden",
        }}
      >
        <div style={{ height: "300px", overflowY: "scroll" }}>
          <ReactHeader sticky={true}>
            <a
              slot="logo"
              href="#"
              style={{
                textDecoration: "none",
                color: "var(--vp-c-brand-1)",
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Sticky Header
            </a>
            <nav>
              <ul
                style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}
              >
                <li>
                  <a href="#section1" style={{ textDecoration: "none", color: "inherit" }}>
                    Section 1
                  </a>
                </li>
                <li>
                  <a href="#section2" style={{ textDecoration: "none", color: "inherit" }}>
                    Section 2
                  </a>
                </li>
              </ul>
            </nav>
          </ReactHeader>
          <div style={{ padding: "2rem" }}>
            <h3 id="section1">Section 1</h3>
            <p style={{ marginBottom: "200px" }}>
              Scroll down to see the sticky behavior. The header stays at the top.
            </p>
            <h3 id="section2">Section 2</h3>
            <p style={{ marginBottom: "200px" }}>
              The header remains visible as you scroll through content.
            </p>
            <p>End of scrollable content.</p>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the header's appearance without affecting its internal
          structure.
        </p>
      </div>
      <div className="mbe4">
        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Gradient Background
          </h3>
          <ReactHeader className="custom-header-gradient">
            <a
              slot="logo"
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Gradient Header
            </a>
            <nav>
              <ul
                style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}
              >
                <li>
                  <a href="#home" style={{ textDecoration: "none", color: "white" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" style={{ textDecoration: "none", color: "white" }}>
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Custom Border
          </h3>
          <ReactHeader className="custom-header-border">
            <a
              slot="logo"
              href="#"
              style={{
                textDecoration: "none",
                color: "var(--vp-c-brand-1)",
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Bordered Header
            </a>
            <nav>
              <ul
                style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}
              >
                <li>
                  <a href="#home" style={{ textDecoration: "none", color: "inherit" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </ReactHeader>
        </div>
      </div>

      <style>{\`
        /* CSS Shadow Parts customization examples */
        .custom-header-gradient::part(ag-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-header-border::part(ag-header) {
          background: var(--ag-background-secondary);
          border-bottom: 3px solid var(--ag-primary);
          box-shadow: none;
        }
      \`}</style>
    </section>
  );
};

export default HeaderReactExamples;
`,us=JSON.parse('{"title":"Header","description":"","frontmatter":{},"headers":[],"relativePath":"components/header.md","filePath":"components/header.md"}'),hs={name:"components/header.md"},fs=Object.assign(hs,{setup(t){return(i,a)=>(p(),r("div",null,[a[1]||(a[1]=s("h1",{id:"header",tabindex:"-1"},[d("Header "),s("a",{class:"header-anchor",href:"#header","aria-label":'Permalink to "Header"'},"​")],-1)),l(E),a[2]||(a[2]=s("p",null,"The Header component provides a semantic, accessible, and responsive page header with support for branding/logo and navigation content. It features sticky positioning, flexible content alignment, and responsive behavior.",-1)),a[3]||(a[3]=s("h2",{id:"examples",tabindex:"-1"},[d("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),l(H,{component:"header","vue-code":k(ts),"lit-code":k(es),"react-code":k(ls)},{vue:n(()=>[l(ns)]),lit:n(()=>[...a[0]||(a[0]=[s("header-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=v(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Header</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">logo</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;text-decoration: none; color: inherit; font-weight: 700; font-size: 1.25rem;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          MyBrand</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Home&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#about&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;About&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#contact&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Contact&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :sticky</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">logo</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Brand&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Navigation&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> contentJustify</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;start&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">logo</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Logo&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Menu&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueHeader } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/header/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueHeader }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactHeader } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/header/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;logo&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            textDecoration: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;none&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            color: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;inherit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            fontWeight: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">700</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            fontSize: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1.25rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          MyBrand</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              gap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              listStyle: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;none&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              margin: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              padding: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Home&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#about&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;About&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#contact&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Contact&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactHeader</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> sticky</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;logo&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          Brand</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Navigation&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactHeader</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> contentJustify</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;start&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;logo&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          Logo</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Menu&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/header&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;logo&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;text-decoration: none; color: inherit; font-weight: 700; font-size: 1.25rem;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    MyBrand</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Home&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#about&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;About&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#contact&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Contact&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> sticky</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;logo&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Brand&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Navigation&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> contentJustify</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;start&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;/&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;logo&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Logo&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Menu&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>sticky</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Makes the header sticky at the viewport top. The header will remain visible when scrolling</td></tr><tr><td><code>contentJustify</code></td><td><code>&#39;start&#39; | &#39;end&#39; | &#39;between&#39; | &#39;around&#39; | &#39;center&#39;</code></td><td><code>&#39;between&#39;</code></td><td>Controls flex content alignment. <code>between</code> puts logo and nav at opposite ends, <code>start</code> aligns to the left, <code>end</code> to the right, <code>around</code> distributes space, <code>center</code> centers content</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td><code>logo</code></td><td>Content for the logo/brand area, typically a link with logo image or text</td></tr><tr><td>(default)</td><td>Navigation content, typically a <code>&lt;nav&gt;</code> element containing menu items</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>The Header component does not emit any custom events. It relies on standard DOM events from slotted content.</p><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-header</code></td><td>The outer <code>&lt;header&gt;</code> element</td></tr><tr><td><code>ag-header-content</code></td><td>The inner content wrapper div that controls layout and spacing</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.gradient-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-bottom</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.15</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f3f4f6</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-bottom</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #12623e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.wide-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-header-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  max-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1200</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Header component is designed to be accessible by default:</p><ul><li><strong>Semantic HTML</strong>: Uses the <code>&lt;header&gt;</code> element which provides an implicit landmark role</li><li><strong>Navigation</strong>: Consumers should wrap navigation links in a <code>&lt;nav&gt;</code> element for proper semantic structure</li><li><strong>Keyboard Navigation</strong>: All interactive elements in slotted content remain keyboard accessible</li><li><strong>Screen Readers</strong>: The <code>&lt;header&gt;</code> landmark is automatically announced by screen readers</li><li><strong>ARIA Labels</strong>: Consider adding <code>aria-label</code> to <code>&lt;nav&gt;</code> elements for additional context (e.g., <code>&lt;nav aria-label=&quot;Main navigation&quot;&gt;</code>)</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Use the <code>&lt;header&gt;</code> component once per page for the main site header</li><li>Include semantic <code>&lt;nav&gt;</code> elements for navigation menus</li><li>Ensure logo/brand links have accessible text or <code>aria-label</code></li><li>Maintain adequate color contrast in custom styling</li><li>For sticky headers, consider using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top" target="_blank" rel="noreferrer">scroll-margin-top</a> on jump link targets to prevent content from hiding under the header:</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">],</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">],</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  scroll-margin-top</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--your-headers-height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="responsive-behavior" tabindex="-1">Responsive Behavior <a class="header-anchor" href="#responsive-behavior" aria-label="Permalink to &quot;Responsive Behavior&quot;">​</a></h2><p>The Header component uses a mobile-first responsive approach:</p><ul><li><p><strong>Mobile (&lt;960px)</strong>:</p><ul><li>Stacked column layout</li><li>Logo and navigation centered</li><li>Vertical spacing between logo and navigation</li></ul></li><li><p><strong>Desktop (≥960px)</strong>:</p><ul><li>Horizontal row layout</li><li>Content justification applied (default: space-between)</li><li>Logo and navigation side-by-side</li></ul></li></ul><p>For mobile navigation menus (hamburger menus), you&#39;ll need to implement the toggle logic yourself. The Header component provides the container and layout structure.</p><h2 id="common-patterns" tabindex="-1">Common Patterns <a class="header-anchor" href="#common-patterns" aria-label="Permalink to &quot;Common Patterns&quot;">​</a></h2><h3 id="header-with-logo-image" tabindex="-1">Header with Logo Image <a class="header-anchor" href="#header-with-logo-image" aria-label="Permalink to &quot;Header with Logo Image&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;template #logo&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;a href=&quot;/&quot; style=&quot;display: flex; align-items: center; gap: 0.5rem;&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;img src=&quot;/logo.svg&quot; alt=&quot;Company Name&quot; width=&quot;32&quot; height=&quot;32&quot; /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;span style=&quot;font-weight: 700; font-size: 1.25rem;&quot;&gt;Company&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/a&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;nav&gt;...&lt;/nav&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h3 id="sticky-header-with-shadow" tabindex="-1">Sticky Header with Shadow <a class="header-anchor" href="#sticky-header-with-shadow" aria-label="Permalink to &quot;Sticky Header with Shadow&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">sticky</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;template #logo&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;a href=&quot;/&quot;&gt;Brand&lt;/a&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;nav aria-label=&quot;Main navigation&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;ul style=&quot;display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;li&gt;&lt;a href=&quot;#home&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;li&gt;&lt;a href=&quot;#about&quot;&gt;About&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;li&gt;&lt;a href=&quot;#contact&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/nav&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li>The Header component provides the semantic structure and layout; you&#39;re responsible for styling navigation links and implementing any interactive navigation patterns (mobile menus, dropdowns, etc.)</li><li>When using <code>sticky</code>, the header uses <code>z-index: var(--ag-z-index-dropdown)</code> (100) to stay above page content</li><li>The default content width is 960px with responsive max-width: 100% to prevent horizontal overflow</li><li>Dark mode is automatically supported through design tokens when <code>data-theme=&quot;dark&quot;</code> is set on the HTML element</li></ul>`,32))]))}});export{us as __pageData,fs as default};
