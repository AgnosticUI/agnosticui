import{A as E}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as x,z as y,a as m,x as u}from"./chunks/Button.CFkPNK98.js";import{s as A}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as f,c as r,o as p,j as s,r as c,K as w,p as B,v as D,_ as S,C as q,G as l,w as n,a as d,ae as v,k}from"./chunks/framework.NAAYCHZu.js";import{F as H}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";var z=Object.defineProperty,b=(t,i,a,F)=>{for(var h=void 0,o=t.length-1,e;o>=0;o--)(e=t[o])&&(h=e(i,a,h)||h);return h&&z(i,a,h),h};const C=class extends m{constructor(){super(...arguments),this.sticky=!1,this.contentJustify="between"}render(){return u`
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
  `;let g=C;b([y({type:Boolean,reflect:!0})],g.prototype,"sticky");b([y({type:String,reflect:!0})],g.prototype,"contentJustify");customElements.get("ag-header")||customElements.define("ag-header",g);const J=f({name:"VueHeader",props:{sticky:{type:Boolean,default:!1},contentJustify:{type:String,default:"between"}},setup(t,{emit:i}){const a=B(null);return D(async()=>{await customElements.whenDefined("ag-header")}),{agComponent:a,sticky:t.sticky,contentJustify:t.contentJustify}}}),N=[".sticky",".contentJustify"],L={slot:"logo"};function P(t,i,a,F,h,o){return p(),r("ag-header",w({ref:"agComponent",".sticky":t.sticky,".contentJustify":t.contentJustify},t.$attrs),[s("span",L,[c(t.$slots,"logo")]),c(t.$slots,"default")],48,N)}const V=A(J,[["render",P]]),R=f({name:"HeaderExamples",components:{VueHeader:V}}),T={class:"ag-header-examples"},I={class:"mbe4"},M={class:"mbe4"},W={href:"#",style:{display:"flex","align-items":"center",gap:"0.5rem","text-decoration":"none",color:"inherit"}},O={width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",style:{color:"var(--vp-c-brand-1)"}},U={class:"mbe4"},_={class:"mbe3"},j={class:"mbe3"},G={class:"mbe3"},$={class:"mbe3"},K={class:"mbe3"},Y={class:"mbe4",style:{border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-md)",overflow:"hidden"}},Q={style:{height:"300px","overflow-y":"scroll"}},X={class:"mbe4"},Z={class:"mbe3"},ss={class:"mbe3"};function is(t,i,a,F,h,o){const e=q("VueHeader");return p(),r("section",T,[i[29]||(i[29]=s("div",{class:"mbe4"},[s("h2",null,"Basic Header"),s("p",{class:"mbs2 mbe3"}," A simple header with logo and navigation. On mobile, content stacks vertically. On desktop (≥960px), it displays horizontally. ")],-1)),s("div",I,[l(e,null,{logo:n(()=>[...i[0]||(i[0]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," AgnosticUI ",-1)])]),default:n(()=>[i[1]||(i[1]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"inherit"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"inherit"}},"About")]),s("li",null,[s("a",{href:"#contact",style:{"text-decoration":"none",color:"inherit"}},"Contact")])])],-1))]),_:1})]),i[30]||(i[30]=s("div",{class:"mbe4"},[s("h2",null,"Header with Logo Image")],-1)),s("div",M,[l(e,null,{logo:n(()=>[s("a",W,[(p(),r("svg",O,[...i[2]||(i[2]=[s("circle",{cx:"16",cy:"16",r:"14",fill:"var(--ag-primary)"},null,-1),s("text",{x:"16",y:"22","text-anchor":"middle",fill:"white","font-size":"16","font-weight":"bold"},"A",-1)])])),i[3]||(i[3]=s("span",{style:{"font-weight":"700","font-size":"1.25rem"}},"MyApp",-1))])]),default:n(()=>[i[4]||(i[4]=s("nav",null,[s("ul",{style:{display:"flex",gap:"2rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#dashboard",style:{"text-decoration":"none",color:"inherit"}},"Dashboard")]),s("li",null,[s("a",{href:"#settings",style:{"text-decoration":"none",color:"inherit"}},"Settings")]),s("li",null,[s("a",{href:"#profile",style:{"text-decoration":"none",color:"inherit"}},"Profile")])])],-1))]),_:1})]),i[31]||(i[31]=s("div",{class:"mbe4"},[s("h2",null,"Content Justification"),s("p",{class:"mbs2 mbe3"},[d(" Control how content is aligned within the header using the "),s("code",null,"contentJustify"),d(" prop. ")])],-1)),s("div",U,[s("div",_,[i[7]||(i[7]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Between (Default)",-1)),l(e,{contentJustify:"between"},{logo:n(()=>[...i[5]||(i[5]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[6]||(i[6]=s("nav",null,[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",j,[i[10]||(i[10]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Start",-1)),l(e,{contentJustify:"start"},{logo:n(()=>[...i[8]||(i[8]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[9]||(i[9]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",G,[i[13]||(i[13]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: End",-1)),l(e,{contentJustify:"end"},{logo:n(()=>[...i[11]||(i[11]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[12]||(i[12]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",$,[i[16]||(i[16]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Center",-1)),l(e,{contentJustify:"center"},{logo:n(()=>[...i[14]||(i[14]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[15]||(i[15]=s("nav",{style:{"margin-left":"2rem"}},[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})]),s("div",K,[i[19]||(i[19]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Justify: Around",-1)),l(e,{contentJustify:"around"},{logo:n(()=>[...i[17]||(i[17]=[s("a",{href:"#",style:{"text-decoration":"none",color:"inherit","font-weight":"600"}},"Logo",-1)])]),default:n(()=>[i[18]||(i[18]=s("nav",null,[s("a",{href:"#nav",style:{"text-decoration":"none",color:"inherit"}},"Navigation")],-1))]),_:1})])]),i[32]||(i[32]=s("div",{class:"mbe4"},[s("h2",null,"Sticky Header"),s("p",{class:"mbs2 mbe3"}," Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in the demo below to see it in action. ")],-1)),s("div",Y,[s("div",Q,[l(e,{sticky:!0},{logo:n(()=>[...i[20]||(i[20]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," Sticky Header ",-1)])]),default:n(()=>[i[21]||(i[21]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#section1",style:{"text-decoration":"none",color:"inherit"}},"Section 1")]),s("li",null,[s("a",{href:"#section2",style:{"text-decoration":"none",color:"inherit"}},"Section 2")])])],-1))]),_:1}),i[22]||(i[22]=v("",1))])]),i[33]||(i[33]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the header's appearance without affecting its internal structure. ")],-1)),s("div",X,[s("div",Z,[i[25]||(i[25]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Gradient Background",-1)),l(e,{class:"custom-header-gradient"},{logo:n(()=>[...i[23]||(i[23]=[s("a",{href:"#",style:{"text-decoration":"none",color:"white","font-weight":"700","font-size":"1.25rem"}}," Gradient Header ",-1)])]),default:n(()=>[i[24]||(i[24]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"white"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"white"}},"About")])])],-1))]),_:1})]),s("div",ss,[i[28]||(i[28]=s("h3",{class:"mbe2",style:{"font-size":"1rem","font-weight":"600"}},"Custom Border",-1)),l(e,{class:"custom-header-border"},{logo:n(()=>[...i[26]||(i[26]=[s("a",{href:"#",style:{"text-decoration":"none",color:"var(--vp-c-brand-1)","font-weight":"700","font-size":"1.25rem"}}," Bordered Header ",-1)])]),default:n(()=>[i[27]||(i[27]=s("nav",null,[s("ul",{style:{display:"flex",gap:"1.5rem","list-style":"none",margin:"0",padding:"0"}},[s("li",null,[s("a",{href:"#home",style:{"text-decoration":"none",color:"inherit"}},"Home")]),s("li",null,[s("a",{href:"#about",style:{"text-decoration":"none",color:"inherit"}},"About")])])],-1))]),_:1})])])])}const ns=S(R,[["render",is]]);class as extends m{createRenderRoot(){return this}render(){return u`
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
`,us=JSON.parse('{"title":"Header","description":"","frontmatter":{},"headers":[],"relativePath":"components/header.md","filePath":"components/header.md"}'),hs={name:"components/header.md"},fs=Object.assign(hs,{setup(t){return(i,a)=>(p(),r("div",null,[a[1]||(a[1]=s("h1",{id:"header",tabindex:"-1"},[d("Header "),s("a",{class:"header-anchor",href:"#header","aria-label":'Permalink to "Header"'},"​")],-1)),l(E),a[2]||(a[2]=s("p",null,"The Header component provides a semantic, accessible, and responsive page header with support for branding/logo and navigation content. It features sticky positioning, flexible content alignment, and responsive behavior.",-1)),a[3]||(a[3]=s("h2",{id:"examples",tabindex:"-1"},[d("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),l(H,{component:"header","vue-code":k(ts),"lit-code":k(es),"react-code":k(ls)},{vue:n(()=>[l(ns)]),lit:n(()=>[...a[0]||(a[0]=[s("header-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=v("",32))]))}});export{us as __pageData,fs as default};
