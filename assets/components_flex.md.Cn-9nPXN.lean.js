import{A as V}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as T,z as g,a as q,x as w}from"./chunks/Button.DkmThuAs.js";import{s as y}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as m,c as o,o as k,r as v,K as u,p as x,v as b,P as f,s as C,j as s,ae as N,G as t,k as l,w as d,a as E,F as S,B as I,t as D}from"./chunks/framework.NAAYCHZu.js";import{F as L}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var G=Object.defineProperty,P=Object.getOwnPropertyDescriptor,F=(a,n,i,e)=>{for(var r=e>1?void 0:e?P(n,i):n,c=a.length-1,A;c>=0;c--)(A=a[c])&&(r=(e?A(n,i,r):A(r))||r);return e&&r&&G(n,i,r),r};const j=class extends q{constructor(){super(),this._direction="row",this._wrap="nowrap",this._justify="flex-start",this._align="stretch",this._alignContent="stretch",this.inline=!1,this.reverse=!1,this.stretchChildren=!1}get direction(){return this._direction}set direction(n){const i=["row","row-reverse","column","column-reverse"];this._direction=n&&i.includes(n)?n:"row",this.requestUpdate()}get wrap(){return this._wrap}set wrap(n){const i=["nowrap","wrap","wrap-reverse"];this._wrap=n&&i.includes(n)?n:"nowrap",this.requestUpdate()}get justify(){return this._justify}set justify(n){const i=["flex-start","flex-end","center","space-between","space-around","space-evenly"];this._justify=n&&i.includes(n)?n:"flex-start",this.requestUpdate()}get align(){return this._align}set align(n){const i=["flex-start","flex-end","center","baseline","stretch"];this._align=n&&i.includes(n)?n:"stretch",this.requestUpdate()}get alignContent(){return this._alignContent}set alignContent(n){const i=["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch"];this._alignContent=n&&i.includes(n)?n:"stretch",this.requestUpdate()}updated(n){super.updated(n)}render(){return w`
      <div class="flex-container" part="ag-flex-container">
        <slot></slot>
      </div>
    `}};j.styles=T`
    :host {
      display: var(--host-display, contents);
    }

    .flex-container {
      display: flex;
      flex-direction: var(--flex-direction, row);
      flex-wrap: var(--flex-wrap, nowrap);
      justify-content: var(--flex-justify, flex-start);
      align-items: var(--flex-align, stretch);
      align-content: var(--flex-align-content, stretch);
      gap: var(--flex-gap, var(--ag-space-0, 0));
    }

    :host([inline]) .flex-container {
      display: inline-flex;
    }

    :host([stretch-children]) ::slotted(*) {
      flex: 1 1 auto;
    }

    /* Attribute-based CSS custom property defaults */
    /* These set low-specificity defaults that can be easily overridden */

    /* Direction */
    :host([direction="row"]:not([reverse])) {
      --flex-direction: row;
    }
    :host([direction="row"][reverse]) {
      --flex-direction: row-reverse;
    }
    :host([direction="row-reverse"]:not([reverse])) {
      --flex-direction: row-reverse;
    }
    :host([direction="row-reverse"][reverse]) {
      --flex-direction: row;
    }
    :host([direction="column"]:not([reverse])) {
      --flex-direction: column;
    }
    :host([direction="column"][reverse]) {
      --flex-direction: column-reverse;
    }
    :host([direction="column-reverse"]:not([reverse])) {
      --flex-direction: column-reverse;
    }
    :host([direction="column-reverse"][reverse]) {
      --flex-direction: column;
    }

    /* Wrap */
    :host([wrap="nowrap"]) {
      --flex-wrap: nowrap;
    }
    :host([wrap="wrap"]) {
      --flex-wrap: wrap;
    }
    :host([wrap="wrap-reverse"]) {
      --flex-wrap: wrap-reverse;
    }

    /* Justify */
    :host([justify="flex-start"]) {
      --flex-justify: flex-start;
    }
    :host([justify="flex-end"]) {
      --flex-justify: flex-end;
    }
    :host([justify="center"]) {
      --flex-justify: center;
    }
    :host([justify="space-between"]) {
      --flex-justify: space-between;
    }
    :host([justify="space-around"]) {
      --flex-justify: space-around;
    }
    :host([justify="space-evenly"]) {
      --flex-justify: space-evenly;
    }

    /* Align */
    :host([align="flex-start"]) {
      --flex-align: flex-start;
    }
    :host([align="flex-end"]) {
      --flex-align: flex-end;
    }
    :host([align="center"]) {
      --flex-align: center;
    }
    :host([align="baseline"]) {
      --flex-align: baseline;
    }
    :host([align="stretch"]) {
      --flex-align: stretch;
    }

    /* Align Content */
    :host([align-content="flex-start"]) {
      --flex-align-content: flex-start;
    }
    :host([align-content="flex-end"]) {
      --flex-align-content: flex-end;
    }
    :host([align-content="center"]) {
      --flex-align-content: center;
    }
    :host([align-content="space-between"]) {
      --flex-align-content: space-between;
    }
    :host([align-content="space-around"]) {
      --flex-align-content: space-around;
    }
    :host([align-content="space-evenly"]) {
      --flex-align-content: space-evenly;
    }
    :host([align-content="stretch"]) {
      --flex-align-content: stretch;
    }

    /* Gap - Controlled ONLY via --flex-gap CSS custom property (no attribute/prop) */
    /* Gap values are freeform strings, so attribute selectors are not feasible */
    /* (CSS attr() doesn't work in custom properties and we'd need infinite selectors) */
    /* Set --flex-gap via classes, ::part(), or inline styles. Default: var(--ag-space-0, 0) */
  `;let h=j;F([g({type:String,reflect:!0})],h.prototype,"direction",1);F([g({type:String,reflect:!0})],h.prototype,"wrap",1);F([g({type:String,reflect:!0})],h.prototype,"justify",1);F([g({type:String,reflect:!0})],h.prototype,"align",1);F([g({type:String,attribute:"align-content"})],h.prototype,"alignContent",1);F([g({type:Boolean,reflect:!0})],h.prototype,"inline",2);F([g({type:Boolean,reflect:!0})],h.prototype,"reverse",2);F([g({type:Boolean,attribute:"stretch-children",reflect:!0})],h.prototype,"stretchChildren",2);customElements.get("ag-flex-container")||customElements.define("ag-flex-container",h);let _=class extends h{constructor(){super(...arguments),this._direction="row"}};customElements.get("ag-flex-row")||customElements.define("ag-flex-row",_);const M=m({name:"VueFlexRow",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=x(null),i=()=>{const e=n.value;e&&(e.wrap=a.wrap,e.justify=a.justify,e.align=a.align,e.alignContent=a.alignContent,e.reverse=a.reverse,e.stretchChildren=a.stretchChildren)};return b(async()=>{await customElements.whenDefined("ag-flex-row"),await f(),i()}),C(()=>{n.value&&i()}),{agComponent:n}}});function $(a,n,i,e,r,c){return k(),o("ag-flex-row",u({ref:"agComponent"},a.$attrs),[v(a.$slots,"default")],16)}const p=y(M,[["render",$]]);class z extends h{constructor(){super(...arguments),this._direction="column"}}customElements.get("ag-flex-col")||customElements.define("ag-flex-col",z);const U=m({name:"VueFlexCol",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=x(null),i=()=>{const e=n.value;e&&(e.wrap=a.wrap,e.justify=a.justify,e.align=a.align,e.alignContent=a.alignContent,e.reverse=a.reverse,e.stretchChildren=a.stretchChildren)};return b(async()=>{await customElements.whenDefined("ag-flex-col"),await f(),i()}),C(()=>{n.value&&i()}),{agComponent:n}}});function W(a,n,i,e,r,c){return k(),o("ag-flex-col",u({ref:"agComponent"},a.$attrs),[v(a.$slots,"default")],16)}const B=y(U,[["render",W]]);class H extends h{constructor(){super(),this.inline=!0}}customElements.get("ag-flex-inline")||customElements.define("ag-flex-inline",H);const O=m({name:"VueFlexInline",props:{direction:{type:String,default:"row"},wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=x(null),i=()=>{const e=n.value;e&&(e.direction=a.direction,e.wrap=a.wrap,e.justify=a.justify,e.align=a.align,e.alignContent=a.alignContent,e.reverse=a.reverse,e.stretchChildren=a.stretchChildren)};return b(async()=>{await customElements.whenDefined("ag-flex-inline"),await f(),i()}),C(()=>{n.value&&i()}),{agComponent:n}}});function J(a,n,i,e,r,c){return k(),o("ag-flex-inline",u({ref:"agComponent"},a.$attrs),[v(a.$slots,"default")],16)}const R=y(O,[["render",J]]),Y=m({name:"VueStack",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=x(null),i=()=>{const e=n.value;e&&(e.wrap=a.wrap,e.justify=a.justify,e.align=a.align,e.alignContent=a.alignContent,e.reverse=a.reverse,e.stretchChildren=a.stretchChildren)};return b(async()=>{await customElements.whenDefined("ag-flex-col"),await f(),i()}),C(()=>{n.value&&i()}),{agComponent:n}}});function K(a,n,i,e,r,c){return k(),o("ag-flex-col",u({ref:"agComponent"},a.$attrs),[v(a.$slots,"default")],16)}const Q=y(Y,[["render",K]]),X=m({name:"VueGroup",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=x(null),i=()=>{const e=n.value;e&&(e.wrap=a.wrap,e.justify=a.justify,e.align=a.align,e.alignContent=a.alignContent,e.reverse=a.reverse,e.stretchChildren=a.stretchChildren)};return b(async()=>{await customElements.whenDefined("ag-flex-row"),await f(),i()}),C(()=>{n.value&&i()}),{agComponent:n}}});function Z(a,n,i,e,r,c){return k(),o("ag-flex-row",u({ref:"agComponent"},a.$attrs),[v(a.$slots,"default")],16)}const ss=y(X,[["render",Z]]),is={class:"mbe4"},as={class:"mbe4"},es={class:"mbe4"},ns={class:"mbe4"},ts={class:"mbe4"},ls={class:"mbe4"},ds={class:"mbe4"},ps={class:"mbe4"},rs={class:"mbe4"},hs={class:"mbe4"},os={style:{display:"flex","flex-direction":"column",gap:"1rem"}},ks={class:"mbe4"},cs={class:"mbe4"},gs={style:{display:"flex",gap:"2rem"}},Fs={style:{flex:"1"}},ms={style:{flex:"1"}},ys={class:"mbe4"},vs={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},us={class:"mbe4"},xs={class:"responsive-cards"},bs=m({__name:"FlexExamples",setup(a){return(n,i)=>(k(),o("section",null,[i[26]||(i[26]=s("div",{class:"mbe4"},[s("h2",null,"Basic Row Layout"),s("p",{class:"mbs2"},"Items arranged horizontally with default flex-start alignment.")],-1)),s("div",is,[t(l(p),{gap:"1rem"},{default:d(()=>[...i[0]||(i[0]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box"},"Item 2",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),i[27]||(i[27]=s("div",{class:"mbe4"},[s("h2",null,"Centered Content"),s("p",{class:"mbs2"},"Items centered on both axes.")],-1)),s("div",as,[t(l(p),{gap:"1rem",justify:"center",align:"center",style:{"min-height":"150px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:d(()=>[...i[1]||(i[1]=[s("div",{class:"demo-box"},"Centered 1",-1),s("div",{class:"demo-box"},"Centered 2",-1)])]),_:1})]),i[28]||(i[28]=s("div",{class:"mbe4"},[s("h2",null,"Space Between"),s("p",{class:"mbs2"},"Items distributed with space between them.")],-1)),s("div",es,[t(l(p),{justify:"space-between"},{default:d(()=>[...i[2]||(i[2]=[s("div",{class:"demo-box"},"Start",-1),s("div",{class:"demo-box"},"Middle",-1),s("div",{class:"demo-box"},"End",-1)])]),_:1})]),i[29]||(i[29]=s("div",{class:"mbe4"},[s("h2",null,"Space Around"),s("p",{class:"mbs2"},"Items with equal space around them.")],-1)),s("div",ns,[t(l(p),{justify:"space-around"},{default:d(()=>[...i[3]||(i[3]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box"},"Item 2",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),i[30]||(i[30]=s("div",{class:"mbe4"},[s("h2",null,"Space Evenly"),s("p",{class:"mbs2"},"Items with equal space between and around them.")],-1)),s("div",ts,[t(l(p),{justify:"space-evenly"},{default:d(()=>[...i[4]||(i[4]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box"},"Item 2",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),i[31]||(i[31]=s("div",{class:"mbe4"},[s("h2",null,"Equal Width Children"),s("p",{class:"mbs2"},[E("Using "),s("code",null,"stretch-children"),E(" to make all items equal width.")])],-1)),s("div",ls,[t(l(p),{gap:"1rem","stretch-children":!0},{default:d(()=>[...i[5]||(i[5]=[s("div",{class:"demo-box"},"Short",-1),s("div",{class:"demo-box"},"Medium length",-1),s("div",{class:"demo-box"},"Longer content here",-1)])]),_:1})]),i[32]||(i[32]=s("div",{class:"mbe4"},[s("h2",null,"Column Layout"),s("p",{class:"mbs2"},"Items stacked vertically using FlexCol.")],-1)),s("div",ds,[t(l(B),{gap:"1rem"},{default:d(()=>[...i[6]||(i[6]=[s("div",{class:"demo-box"},"Row 1",-1),s("div",{class:"demo-box"},"Row 2",-1),s("div",{class:"demo-box"},"Row 3",-1)])]),_:1})]),i[33]||(i[33]=s("div",{class:"mbe4"},[s("h2",null,"Wrapping Layout"),s("p",{class:"mbs2"},"Items wrap to the next line when needed.")],-1)),s("div",ps,[t(l(p),{gap:"1rem",wrap:"wrap",style:{"max-width":"600px"}},{default:d(()=>[(k(),o(S,null,I(8,e=>s("div",{key:e,class:"demo-box",style:{"min-width":"120px"}}," Item "+D(e),1)),64))]),_:1})]),i[34]||(i[34]=s("div",{class:"mbe4"},[s("h2",null,"Reverse Direction"),s("p",{class:"mbs2"},"Reverse the order of items.")],-1)),s("div",rs,[t(l(p),{gap:"1rem",reverse:!0},{default:d(()=>[...i[7]||(i[7]=[s("div",{class:"demo-box"},"First (1)",-1),s("div",{class:"demo-box"},"Second (2)",-1),s("div",{class:"demo-box"},"Third (3)",-1)])]),_:1})]),i[35]||(i[35]=s("div",{class:"mbe4"},[s("h2",null,"Align Items (Cross Axis)"),s("p",{class:"mbs2"},"Different vertical alignments for items of varying heights.")],-1)),s("div",hs,[s("div",os,[s("div",null,[i[9]||(i[9]=s("p",{class:"mbe2"},[s("strong",null,'align="flex-start"')],-1)),t(l(p),{gap:"1rem",align:"flex-start",style:{"min-height":"120px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:d(()=>[...i[8]||(i[8]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box",style:{padding:"2rem 1rem"}}," Tall Item 2 ",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),s("div",null,[i[11]||(i[11]=s("p",{class:"mbe2"},[s("strong",null,'align="center"')],-1)),t(l(p),{gap:"1rem",align:"center",style:{"min-height":"120px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:d(()=>[...i[10]||(i[10]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box",style:{padding:"2rem 1rem"}}," Tall Item 2 ",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),s("div",null,[i[13]||(i[13]=s("p",{class:"mbe2"},[s("strong",null,'align="flex-end"')],-1)),t(l(p),{gap:"1rem",align:"flex-end",style:{"min-height":"120px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:d(()=>[...i[12]||(i[12]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box",style:{padding:"2rem 1rem"}}," Tall Item 2 ",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})])])]),i[36]||(i[36]=s("div",{class:"mbe4"},[s("h2",null,"Nested Flex Containers"),s("p",{class:"mbs2"},"Combine flex containers to create complex layouts.")],-1)),s("div",ks,[t(l(B),{gap:"1rem",style:{padding:"1rem",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:d(()=>[t(l(p),{justify:"space-between"},{default:d(()=>[...i[14]||(i[14]=[s("div",{class:"demo-box demo-box-primary"},"Header Left",-1),s("div",{class:"demo-box demo-box-primary"},"Header Right",-1)])]),_:1}),t(l(p),{gap:"1rem"},{default:d(()=>[t(l(B),{gap:"0.5rem",style:{flex:"1"}},{default:d(()=>[...i[15]||(i[15]=[s("div",{class:"demo-box demo-box-secondary"},"Sidebar Item 1",-1),s("div",{class:"demo-box demo-box-secondary"},"Sidebar Item 2",-1),s("div",{class:"demo-box demo-box-secondary"},"Sidebar Item 3",-1)])]),_:1}),i[16]||(i[16]=s("div",{class:"demo-box",style:{flex:"2",padding:"2rem"}}," Main Content Area ",-1))]),_:1}),t(l(p),{justify:"center"},{default:d(()=>[...i[17]||(i[17]=[s("div",{class:"demo-box demo-box-primary full-width"},"Footer",-1)])]),_:1})]),_:1})]),i[37]||(i[37]=s("div",{class:"mbe4"},[s("h2",null,"Stack and Group (Aliases)"),s("p",{class:"mbs2"},"Convenient aliases familiar to Mantine and Chakra UI users.")],-1)),s("div",cs,[s("div",gs,[s("div",Fs,[i[19]||(i[19]=s("p",{class:"mbe2"},[s("strong",null,"Stack (FlexCol alias)")],-1)),t(l(Q),{gap:"1rem"},{default:d(()=>[...i[18]||(i[18]=[s("div",{class:"demo-box"},"Stacked 1",-1),s("div",{class:"demo-box"},"Stacked 2",-1),s("div",{class:"demo-box"},"Stacked 3",-1)])]),_:1})]),s("div",ms,[i[21]||(i[21]=s("p",{class:"mbe2"},[s("strong",null,"Group (FlexRow alias)")],-1)),t(l(ss),{gap:"0.5rem"},{default:d(()=>[...i[20]||(i[20]=[s("button",{class:"demo-button mie1"},"Action 1",-1),s("button",{class:"demo-button mie1"},"Action 2",-1),s("button",{class:"demo-button"},"Action 3",-1)])]),_:1})])])]),i[38]||(i[38]=s("div",{class:"mbe4"},[s("h2",null,"Inline Flex"),s("p",{class:"mbs2"},"Inline flex containers that only take up as much width as needed.")],-1)),s("div",ys,[i[25]||(i[25]=s("p",{class:"mbe2"},"Multiple inline flex containers on the same line:",-1)),s("div",vs,[t(l(R),{gap:"0.5rem",style:{background:"var(--ag-background-secondary)",padding:"0.5rem","border-radius":"3px"}},{default:d(()=>[...i[22]||(i[22]=[s("span",{class:"demo-tag"},"Tag 1",-1),s("span",{class:"demo-tag"},"Tag 2",-1)])]),_:1}),t(l(R),{gap:"0.5rem",style:{background:"var(--ag-background-secondary)",padding:"0.5rem","border-radius":"3px"}},{default:d(()=>[...i[23]||(i[23]=[s("span",{class:"demo-tag"},"Tag 3",-1),s("span",{class:"demo-tag"},"Tag 4",-1)])]),_:1}),t(l(R),{gap:"0.5rem",style:{background:"var(--ag-background-secondary)",padding:"0.5rem","border-radius":"3px"}},{default:d(()=>[...i[24]||(i[24]=[s("span",{class:"demo-tag"},"Tag 5",-1),s("span",{class:"demo-tag"},"Tag 6",-1)])]),_:1})])]),i[39]||(i[39]=N("",7)),s("div",us,[s("ag-flex-row",xs,[(k(),o(S,null,I(6,e=>s("div",{key:e,class:"demo-box card-item"}," Card "+D(e),1)),64))])])]))}});class fs extends q{createRenderRoot(){return this}render(){return w`
      <style>
        /* Clean demo boxes inspired by the flexbox patterns site */
        .demo-box {
          padding: 1rem;
          margin-inline-end: var(--ag-space-2);
          margin-block-end: var(--ag-space-2);
          background: var(--ag-blue-100);
          border: 1px solid var(--ag-blue-300);
          border-radius: 3px;
          text-align: center;
          font-size: 0.875rem;
          color: var(--ag-neutral-900);
        }

        .demo-box-primary {
          background: var(--ag-blue-100);
          border-color: var(--ag-blue-300);
          color: var(--ag-neutral-900);
        }

        .demo-box-secondary {
          background: var(--ag-purple-100);
          border-color: var(--ag-purple-300);
          color: var(--ag-neutral-900);
        }

        .demo-tag {
          padding: 0.25rem 0.75rem;
          background: var(--ag-background-primary);
          border: 1px solid var(--ag-border);
          border-radius: 3px;
          font-size: 0.875rem;
          color: var(--ag-text-primary);
        }

        .demo-button {
          padding: 0.5rem 1rem;
          background: var(--ag-primary);
          color: var(--ag-white);
          border: none;
          border-radius: 3px;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .demo-button:hover {
          background: var(--ag-primary-dark);
        }

        .full-width {
          width: 100%;
        }

        /* Responsive layouts using CSS custom properties - no !important needed! */
        .responsive-direction {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        .responsive-direction .demo-box {
          margin-block-end: var(--ag-space-2);
        }

        @media (min-width: 769px) {
          .responsive-direction {
            --flex-direction: row;
          }
          .responsive-direction .demo-box {
            margin-inline-end: var(--ag-space-3);
            padding-inline: var(--ag-space-8);
            white-space: nowrap;
          }
        }

        .responsive-gap {
          --flex-gap: 0.5rem;
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .responsive-gap {
            --flex-gap: 1rem;
          }
        }

        @media (min-width: 769px) {
          .responsive-gap {
            --flex-gap: 2rem;
          }
        }

        .responsive-justify {
          --flex-gap: 1rem;
          --flex-justify: center;
        }

        @media (min-width: 769px) {
          .responsive-justify {
            --flex-justify: space-between;
          }
        }

        .responsive-cards {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        @media (min-width: 769px) {
          .responsive-cards {
            --flex-direction: row;
            --flex-wrap: wrap;
            --flex-gap: 1.5rem;
          }
        }

        .card-item {
          flex: 1 1 calc(33.333% - 1rem);
          min-width: 200px;
        }
      </style>

      <section>
        <!-- Basic Row Layouts -->
        <div class="mbe4">
          <h2>Basic Row Layout</h2>
          <p class="mbs2">Items arranged horizontally with default flex-start alignment.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <!-- Centered -->
        <div class="mbe4">
          <h2>Centered Content</h2>
          <p class="mbs2">Items centered on both axes.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row
            style="--flex-gap: 1rem; min-height: 150px; background: var(--ag-background-secondary); border-radius: 3px;"
            justify="center"
            align="center"
          >
            <div class="demo-box">Centered 1</div>
            <div class="demo-box">Centered 2</div>
          </ag-flex-row>
        </div>

        <!-- Space Between -->
        <div class="mbe4">
          <h2>Space Between</h2>
          <p class="mbs2">Items distributed with space between them.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row justify="space-between">
            <div class="demo-box">Start</div>
            <div class="demo-box">Middle</div>
            <div class="demo-box">End</div>
          </ag-flex-row>
        </div>

        <!-- Space Around -->
        <div class="mbe4">
          <h2>Space Around</h2>
          <p class="mbs2">Items with equal space around them.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row justify="space-around">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <!-- Space Evenly -->
        <div class="mbe4">
          <h2>Space Evenly</h2>
          <p class="mbs2">Items with equal space between and around them.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row justify="space-evenly">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <!-- Stretch Children -->
        <div class="mbe4">
          <h2>Equal Width Children</h2>
          <p class="mbs2">Using <code>stretch-children</code> to make all items equal width.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem" stretch-children>
            <div class="demo-box">Short</div>
            <div class="demo-box">Medium length</div>
            <div class="demo-box">Longer content here</div>
          </ag-flex-row>
        </div>

        <!-- Column Layout -->
        <div class="mbe4">
          <h2>Column Layout</h2>
          <p class="mbs2">Items stacked vertically using FlexCol.</p>
        </div>
        <div class="mbe4">
          <ag-flex-col style="--flex-gap: 1rem">
            <div class="demo-box">Row 1</div>
            <div class="demo-box">Row 2</div>
            <div class="demo-box">Row 3</div>
          </ag-flex-col>
        </div>

        <!-- Wrap -->
        <div class="mbe4">
          <h2>Wrapping Layout</h2>
          <p class="mbs2">Items wrap to the next line when needed.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem; max-width: 600px;" wrap="wrap">
            ${[...Array(8)].map((n,i)=>w`
                <div class="demo-box" style="min-width: 120px;">Item ${i+1}</div>
              `)}
          </ag-flex-row>
        </div>

        <!-- Reverse -->
        <div class="mbe4">
          <h2>Reverse Direction</h2>
          <p class="mbs2">Reverse the order of items.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem" reverse>
            <div class="demo-box">First (1)</div>
            <div class="demo-box">Second (2)</div>
            <div class="demo-box">Third (3)</div>
          </ag-flex-row>
        </div>

        <!-- Align Items -->
        <div class="mbe4">
          <h2>Align Items (Cross Axis)</h2>
          <p class="mbs2">Different vertical alignments for items of varying heights.</p>
        </div>
        <div class="mbe4">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <p class="mbe2"><strong>align="flex-start"</strong></p>
              <ag-flex-row
                style="--flex-gap: 1rem; min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
                align="flex-start"
              >
                <div class="demo-box">Item 1</div>
                <div class="demo-box" style="padding: 2rem 1rem;">Tall Item 2</div>
                <div class="demo-box">Item 3</div>
              </ag-flex-row>
            </div>
            <div>
              <p class="mbe2"><strong>align="center"</strong></p>
              <ag-flex-row
                style="--flex-gap: 1rem; min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
                align="center"
              >
                <div class="demo-box">Item 1</div>
                <div class="demo-box" style="padding: 2rem 1rem;">Tall Item 2</div>
                <div class="demo-box">Item 3</div>
              </ag-flex-row>
            </div>
            <div>
              <p class="mbe2"><strong>align="flex-end"</strong></p>
              <ag-flex-row
                style="--flex-gap: 1rem; min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
                align="flex-end"
              >
                <div class="demo-box">Item 1</div>
                <div class="demo-box" style="padding: 2rem 1rem;">Tall Item 2</div>
                <div class="demo-box">Item 3</div>
              </ag-flex-row>
            </div>
          </div>
        </div>

        <!-- Nested Layouts -->
        <div class="mbe4">
          <h2>Nested Flex Containers</h2>
          <p class="mbs2">Combine flex containers to create complex layouts.</p>
        </div>
        <div class="mbe4">
          <ag-flex-col
            style="--flex-gap: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: 3px;"
          >
            <ag-flex-row justify="space-between">
              <div class="demo-box demo-box-primary">Header Left</div>
              <div class="demo-box demo-box-primary">Header Right</div>
            </ag-flex-row>

            <ag-flex-row style="--flex-gap: 1rem">
              <ag-flex-col style="--flex-gap: 0.5rem; flex: 1;">
                <div class="demo-box demo-box-secondary">Sidebar Item 1</div>
                <div class="demo-box demo-box-secondary">Sidebar Item 2</div>
                <div class="demo-box demo-box-secondary">Sidebar Item 3</div>
              </ag-flex-col>

              <div class="demo-box" style="flex: 2; padding: 2rem;">Main Content Area</div>
            </ag-flex-row>

            <ag-flex-row justify="center">
              <div class="demo-box demo-box-primary full-width">Footer</div>
            </ag-flex-row>
          </ag-flex-col>
        </div>

        <!-- Stack and Group Aliases -->
        <div class="mbe4">
          <h2>Stack and Group (Aliases)</h2>
          <p class="mbs2">Convenient aliases familiar to Mantine and Chakra UI users.</p>
        </div>
        <div class="mbe4">
          <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
              <p class="mbe2"><strong>Stack (FlexCol alias)</strong></p>
              <ag-stack style="--flex-gap: 1rem">
                <div class="demo-box">Stacked 1</div>
                <div class="demo-box">Stacked 2</div>
                <div class="demo-box">Stacked 3</div>
              </ag-stack>
            </div>
            <div style="flex: 1;">
              <p class="mbe2"><strong>Group (FlexRow alias)</strong></p>
              <ag-group style="--flex-gap: 0.5rem">
                <button class="demo-button mie1">Action 1</button>
                <button class="demo-button mie1">Action 2</button>
                <button class="demo-button">Action 3</button>
              </ag-group>
            </div>
          </div>
        </div>

        <!-- Inline Flex -->
        <div class="mbe4">
          <h2>Inline Flex</h2>
          <p class="mbs2">Inline flex containers that only take up as much width as needed.</p>
        </div>
        <div class="mbe4">
          <p class="mbe2">Multiple inline flex containers on the same line:</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <ag-flex-inline
              style="--flex-gap: 0.5rem; background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
            >
              <span class="demo-tag">Tag 1</span>
              <span class="demo-tag">Tag 2</span>
            </ag-flex-inline>
            <ag-flex-inline
              style="--flex-gap: 0.5rem; background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
            >
              <span class="demo-tag">Tag 3</span>
              <span class="demo-tag">Tag 4</span>
            </ag-flex-inline>
            <ag-flex-inline
              style="--flex-gap: 0.5rem; background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
            >
              <span class="demo-tag">Tag 5</span>
              <span class="demo-tag">Tag 6</span>
            </ag-flex-inline>
          </div>
        </div>

        <!-- Responsive Layouts -->
        <div class="mbe4">
          <h2>Responsive Layouts</h2>
          <p class="mbs2">
            Example using <code>.responsive-direction</code> CSS class to control
            <code>--flex-direction</code> via media queries. <strong>Resize your browser to see
            the effect!</strong>
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-direction">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <div class="mbe4">
          <h2>Responsive Gap</h2>
          <p class="mbs2">
            Example using <code>.responsive-gap</code> CSS class to control
            <code>--flex-gap</code> at different viewport widths.
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-gap">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <div class="mbe4">
          <h2>Responsive Justify</h2>
          <p class="mbs2">
            Example using <code>.responsive-justify</code> CSS class to control
            <code>--flex-justify</code> via media queries.
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-justify">
            <div class="demo-box">Start</div>
            <div class="demo-box">Middle</div>
            <div class="demo-box">End</div>
          </ag-flex-row>
        </div>

        <div class="mbe4">
          <h2>Responsive Card Grid</h2>
          <p class="mbs2">
            Example using <code>.responsive-cards</code> CSS class to create a responsive card grid
            with consumer-defined breakpoints.
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-cards">
            ${[...Array(6)].map((n,i)=>w` <div class="demo-box card-item">Card ${i+1}</div> `)}
          </ag-flex-row>
        </div>
      </section>
    `}}customElements.define("flex-lit-examples",fs);const Cs=`<template>
  <section>
    <!-- Basic Row Layouts -->
    <div class="mbe4">
      <h2>Basic Row Layout</h2>
      <p class="mbs2">Items arranged horizontally with default flex-start alignment.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow gap="1rem">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>
    </div>

    <!-- Centered -->
    <div class="mbe4">
      <h2>Centered Content</h2>
      <p class="mbs2">Items centered on both axes.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        justify="center"
        align="center"
        style="min-height: 150px; background: var(--ag-background-secondary); border-radius: 3px;"
      >
        <div class="demo-box">Centered 1</div>
        <div class="demo-box">Centered 2</div>
      </VueFlexRow>
    </div>

    <!-- Space Between -->
    <div class="mbe4">
      <h2>Space Between</h2>
      <p class="mbs2">Items distributed with space between them.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow justify="space-between">
        <div class="demo-box">Start</div>
        <div class="demo-box">Middle</div>
        <div class="demo-box">End</div>
      </VueFlexRow>
    </div>

    <!-- Space Around -->
    <div class="mbe4">
      <h2>Space Around</h2>
      <p class="mbs2">Items with equal space around them.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow justify="space-around">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>
    </div>

    <!-- Space Evenly -->
    <div class="mbe4">
      <h2>Space Evenly</h2>
      <p class="mbs2">Items with equal space between and around them.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow justify="space-evenly">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>
    </div>

    <!-- Stretch Children -->
    <div class="mbe4">
      <h2>Equal Width Children</h2>
      <p class="mbs2">Using <code>stretch-children</code> to make all items equal width.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        :stretch-children="true"
      >
        <div class="demo-box">Short</div>
        <div class="demo-box">Medium length</div>
        <div class="demo-box">Longer content here</div>
      </VueFlexRow>
    </div>

    <!-- Column Layout -->
    <div class="mbe4">
      <h2>Column Layout</h2>
      <p class="mbs2">Items stacked vertically using FlexCol.</p>
    </div>
    <div class="mbe4">
      <VueFlexCol gap="1rem">
        <div class="demo-box">Row 1</div>
        <div class="demo-box">Row 2</div>
        <div class="demo-box">Row 3</div>
      </VueFlexCol>
    </div>

    <!-- Wrap -->
    <div class="mbe4">
      <h2>Wrapping Layout</h2>
      <p class="mbs2">Items wrap to the next line when needed.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        wrap="wrap"
        style="max-width: 600px;"
      >
        <div
          v-for="i in 8"
          :key="i"
          class="demo-box"
          style="min-width: 120px;"
        >
          Item {{ i }}
        </div>
      </VueFlexRow>
    </div>

    <!-- Reverse -->
    <div class="mbe4">
      <h2>Reverse Direction</h2>
      <p class="mbs2">Reverse the order of items.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        :reverse="true"
      >
        <div class="demo-box">First (1)</div>
        <div class="demo-box">Second (2)</div>
        <div class="demo-box">Third (3)</div>
      </VueFlexRow>
    </div>

    <!-- Align Items -->
    <div class="mbe4">
      <h2>Align Items (Cross Axis)</h2>
      <p class="mbs2">Different vertical alignments for items of varying heights.</p>
    </div>
    <div class="mbe4">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p class="mbe2"><strong>align="flex-start"</strong></p>
          <VueFlexRow
            gap="1rem"
            align="flex-start"
            style="min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
          >
            <div class="demo-box">Item 1</div>
            <div
              class="demo-box"
              style="padding: 2rem 1rem;"
            >
              Tall Item 2
            </div>
            <div class="demo-box">Item 3</div>
          </VueFlexRow>
        </div>
        <div>
          <p class="mbe2"><strong>align="center"</strong></p>
          <VueFlexRow
            gap="1rem"
            align="center"
            style="min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
          >
            <div class="demo-box">Item 1</div>
            <div
              class="demo-box"
              style="padding: 2rem 1rem;"
            >
              Tall Item 2
            </div>
            <div class="demo-box">Item 3</div>
          </VueFlexRow>
        </div>
        <div>
          <p class="mbe2"><strong>align="flex-end"</strong></p>
          <VueFlexRow
            gap="1rem"
            align="flex-end"
            style="min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
          >
            <div class="demo-box">Item 1</div>
            <div
              class="demo-box"
              style="padding: 2rem 1rem;"
            >
              Tall Item 2
            </div>
            <div class="demo-box">Item 3</div>
          </VueFlexRow>
        </div>
      </div>
    </div>

    <!-- Nested Layouts -->
    <div class="mbe4">
      <h2>Nested Flex Containers</h2>
      <p class="mbs2">Combine flex containers to create complex layouts.</p>
    </div>
    <div class="mbe4">
      <VueFlexCol
        gap="1rem"
        style="padding: 1rem; background: var(--ag-background-secondary); border-radius: 3px;"
      >
        <VueFlexRow justify="space-between">
          <div class="demo-box demo-box-primary">Header Left</div>
          <div class="demo-box demo-box-primary">Header Right</div>
        </VueFlexRow>

        <VueFlexRow gap="1rem">
          <VueFlexCol
            gap="0.5rem"
            style="flex: 1;"
          >
            <div class="demo-box demo-box-secondary">Sidebar Item 1</div>
            <div class="demo-box demo-box-secondary">Sidebar Item 2</div>
            <div class="demo-box demo-box-secondary">Sidebar Item 3</div>
          </VueFlexCol>

          <div
            class="demo-box"
            style="flex: 2; padding: 2rem;"
          >
            Main Content Area
          </div>
        </VueFlexRow>

        <VueFlexRow justify="center">
          <div class="demo-box demo-box-primary full-width">Footer</div>
        </VueFlexRow>
      </VueFlexCol>
    </div>

    <!-- Stack and Group Aliases -->
    <div class="mbe4">
      <h2>Stack and Group (Aliases)</h2>
      <p class="mbs2">Convenient aliases familiar to Mantine and Chakra UI users.</p>
    </div>
    <div class="mbe4">
      <div style="display: flex; gap: 2rem;">
        <div style="flex: 1;">
          <p class="mbe2"><strong>Stack (FlexCol alias)</strong></p>
          <VueStack gap="1rem">
            <div class="demo-box">Stacked 1</div>
            <div class="demo-box">Stacked 2</div>
            <div class="demo-box">Stacked 3</div>
          </VueStack>
        </div>
        <div style="flex: 1;">
          <p class="mbe2"><strong>Group (FlexRow alias)</strong></p>
          <VueGroup gap="0.5rem">
            <button class="demo-button mie1">Action 1</button>
            <button class="demo-button mie1">Action 2</button>
            <button class="demo-button">Action 3</button>
          </VueGroup>
        </div>
      </div>
    </div>

    <!-- Inline Flex -->
    <div class="mbe4">
      <h2>Inline Flex</h2>
      <p class="mbs2">Inline flex containers that only take up as much width as needed.</p>
    </div>
    <div class="mbe4">
      <p class="mbe2">Multiple inline flex containers on the same line:</p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <VueFlexInline
          gap="0.5rem"
          style="background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
        >
          <span class="demo-tag">Tag 1</span>
          <span class="demo-tag">Tag 2</span>
        </VueFlexInline>
        <VueFlexInline
          gap="0.5rem"
          style="background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
        >
          <span class="demo-tag">Tag 3</span>
          <span class="demo-tag">Tag 4</span>
        </VueFlexInline>
        <VueFlexInline
          gap="0.5rem"
          style="background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
        >
          <span class="demo-tag">Tag 5</span>
          <span class="demo-tag">Tag 6</span>
        </VueFlexInline>
      </div>
    </div>

    <!-- Responsive Layouts -->
    <div class="mbe4">
      <h2>Responsive Layouts</h2>
      <p class="mbs2">Example using <code>.responsive-direction</code> CSS class to control <code>--flex-direction</code> via media queries. <strong>Resize your browser to see the effect!</strong></p>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-direction">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </ag-flex-row>
    </div>

    <div class="mbe4">
      <h2>Responsive Gap</h2>
      <p class="mbs2">Example using <code>.responsive-gap</code> CSS class to control <code>--flex-gap</code> at different viewport widths.</p>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-gap">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </ag-flex-row>
    </div>

    <div class="mbe4">
      <h2>Responsive Justify</h2>
      <p class="mbs2">Example using <code>.responsive-justify</code> CSS class to control <code>--flex-justify</code> via media queries.</p>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-justify">
        <div class="demo-box">Start</div>
        <div class="demo-box">Middle</div>
        <div class="demo-box">End</div>
      </ag-flex-row>
    </div>

    <div class="mbe4">
      <h2>Responsive Card Grid</h2>
      <p class="mbs2">Example using <code>.responsive-cards</code> CSS class to create a responsive card grid with consumer-defined breakpoints.</p>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-cards">
        <div
          v-for="i in 6"
          :key="i"
          class="demo-box card-item"
        >
          Card {{ i }}
        </div>
      </ag-flex-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  VueFlexRow,
  VueFlexCol,
  VueFlexInline,
  VueStack,
  VueGroup,
} from "agnosticui-core/flex/vue";
<\/script>

<style>
/* Clean demo boxes inspired by the flexbox patterns site */
.demo-box {
  padding: 1rem;
  margin-inline-end: var(--ag-space-2);
  margin-block-end: var(--ag-space-2);
  background: var(--ag-blue-100);
  border: 1px solid var(--ag-blue-300);
  border-radius: 3px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--ag-neutral-900);
}

.demo-box-primary {
  background: var(--ag-blue-100);
  border-color: var(--ag-blue-300);
  color: var(--ag-neutral-900);
}

.demo-box-secondary {
  background: var(--ag-purple-100);
  border-color: var(--ag-purple-300);
  color: var(--ag-neutral-900);
}

.demo-tag {
  padding: 0.25rem 0.75rem;
  background: var(--ag-background-primary);
  border: 1px solid var(--ag-border);
  border-radius: 3px;
  font-size: 0.875rem;
  color: var(--ag-text-primary);
}

.demo-button {
  padding: 0.5rem 1rem;
  background: var(--ag-primary);
  color: var(--ag-white);
  border: none;
  border-radius: 3px;
  font-size: 0.875rem;
  cursor: pointer;
}

.demo-button:hover {
  background: var(--ag-primary-dark);
}

/* Responsive layouts using CSS custom properties - no !important needed! */
.responsive-direction {
  --flex-direction: column;
  --flex-gap: 1rem;
}

.responsive-direction .demo-box {
  margin-block-end: var(--ag-space-2);
}

@media (min-width: 769px) {
  .responsive-direction {
    --flex-direction: row;
  }
  .responsive-direction .demo-box {
    margin-inline-end: var(--ag-space-3);
    padding-inline: var(--ag-space-8);
    white-space: nowrap;
  }
}

.responsive-gap {
  --flex-gap: 0.5rem;
}

@media (min-width: 641px) and (max-width: 768px) {
  .responsive-gap {
    --flex-gap: 1rem;
  }
}

@media (min-width: 769px) {
  .responsive-gap {
    --flex-gap: 2rem;
  }
}

.responsive-justify {
  --flex-gap: 1rem;
  --flex-justify: center;
}

@media (min-width: 769px) {
  .responsive-justify {
    --flex-justify: space-between;
  }
}

.responsive-cards {
  --flex-direction: column;
  --flex-gap: 1rem;
}

@media (min-width: 769px) {
  .responsive-cards {
    --flex-direction: row;
    --flex-wrap: wrap;
    --flex-gap: 1.5rem;
  }
}

.card-item {
  flex: 1 1 calc(33.333% - 1rem);
  min-width: 200px;
}
</style>
`,ws=`import { LitElement, html } from "lit";
import "agnosticui-core/flex";

export class FlexLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <style>
        /* Clean demo boxes inspired by the flexbox patterns site */
        .demo-box {
          padding: 1rem;
          margin-inline-end: var(--ag-space-2);
          margin-block-end: var(--ag-space-2);
          background: var(--ag-blue-100);
          border: 1px solid var(--ag-blue-300);
          border-radius: 3px;
          text-align: center;
          font-size: 0.875rem;
          color: var(--ag-neutral-900);
        }

        .demo-box-primary {
          background: var(--ag-blue-100);
          border-color: var(--ag-blue-300);
          color: var(--ag-neutral-900);
        }

        .demo-box-secondary {
          background: var(--ag-purple-100);
          border-color: var(--ag-purple-300);
          color: var(--ag-neutral-900);
        }

        .demo-tag {
          padding: 0.25rem 0.75rem;
          background: var(--ag-background-primary);
          border: 1px solid var(--ag-border);
          border-radius: 3px;
          font-size: 0.875rem;
          color: var(--ag-text-primary);
        }

        .demo-button {
          padding: 0.5rem 1rem;
          background: var(--ag-primary);
          color: var(--ag-white);
          border: none;
          border-radius: 3px;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .demo-button:hover {
          background: var(--ag-primary-dark);
        }

        .full-width {
          width: 100%;
        }

        /* Responsive layouts using CSS custom properties - no !important needed! */
        .responsive-direction {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        .responsive-direction .demo-box {
          margin-block-end: var(--ag-space-2);
        }

        @media (min-width: 769px) {
          .responsive-direction {
            --flex-direction: row;
          }
          .responsive-direction .demo-box {
            margin-inline-end: var(--ag-space-3);
            padding-inline: var(--ag-space-8);
            white-space: nowrap;
          }
        }

        .responsive-gap {
          --flex-gap: 0.5rem;
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .responsive-gap {
            --flex-gap: 1rem;
          }
        }

        @media (min-width: 769px) {
          .responsive-gap {
            --flex-gap: 2rem;
          }
        }

        .responsive-justify {
          --flex-gap: 1rem;
          --flex-justify: center;
        }

        @media (min-width: 769px) {
          .responsive-justify {
            --flex-justify: space-between;
          }
        }

        .responsive-cards {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        @media (min-width: 769px) {
          .responsive-cards {
            --flex-direction: row;
            --flex-wrap: wrap;
            --flex-gap: 1.5rem;
          }
        }

        .card-item {
          flex: 1 1 calc(33.333% - 1rem);
          min-width: 200px;
        }
      </style>

      <section>
        <!-- Basic Row Layouts -->
        <div class="mbe4">
          <h2>Basic Row Layout</h2>
          <p class="mbs2">Items arranged horizontally with default flex-start alignment.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <!-- Centered -->
        <div class="mbe4">
          <h2>Centered Content</h2>
          <p class="mbs2">Items centered on both axes.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row
            style="--flex-gap: 1rem; min-height: 150px; background: var(--ag-background-secondary); border-radius: 3px;"
            justify="center"
            align="center"
          >
            <div class="demo-box">Centered 1</div>
            <div class="demo-box">Centered 2</div>
          </ag-flex-row>
        </div>

        <!-- Space Between -->
        <div class="mbe4">
          <h2>Space Between</h2>
          <p class="mbs2">Items distributed with space between them.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row justify="space-between">
            <div class="demo-box">Start</div>
            <div class="demo-box">Middle</div>
            <div class="demo-box">End</div>
          </ag-flex-row>
        </div>

        <!-- Space Around -->
        <div class="mbe4">
          <h2>Space Around</h2>
          <p class="mbs2">Items with equal space around them.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row justify="space-around">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <!-- Space Evenly -->
        <div class="mbe4">
          <h2>Space Evenly</h2>
          <p class="mbs2">Items with equal space between and around them.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row justify="space-evenly">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <!-- Stretch Children -->
        <div class="mbe4">
          <h2>Equal Width Children</h2>
          <p class="mbs2">Using <code>stretch-children</code> to make all items equal width.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem" stretch-children>
            <div class="demo-box">Short</div>
            <div class="demo-box">Medium length</div>
            <div class="demo-box">Longer content here</div>
          </ag-flex-row>
        </div>

        <!-- Column Layout -->
        <div class="mbe4">
          <h2>Column Layout</h2>
          <p class="mbs2">Items stacked vertically using FlexCol.</p>
        </div>
        <div class="mbe4">
          <ag-flex-col style="--flex-gap: 1rem">
            <div class="demo-box">Row 1</div>
            <div class="demo-box">Row 2</div>
            <div class="demo-box">Row 3</div>
          </ag-flex-col>
        </div>

        <!-- Wrap -->
        <div class="mbe4">
          <h2>Wrapping Layout</h2>
          <p class="mbs2">Items wrap to the next line when needed.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem; max-width: 600px;" wrap="wrap">
            \${[...Array(8)].map(
              (_, i) => html\`
                <div class="demo-box" style="min-width: 120px;">Item \${i + 1}</div>
              \`
            )}
          </ag-flex-row>
        </div>

        <!-- Reverse -->
        <div class="mbe4">
          <h2>Reverse Direction</h2>
          <p class="mbs2">Reverse the order of items.</p>
        </div>
        <div class="mbe4">
          <ag-flex-row style="--flex-gap: 1rem" reverse>
            <div class="demo-box">First (1)</div>
            <div class="demo-box">Second (2)</div>
            <div class="demo-box">Third (3)</div>
          </ag-flex-row>
        </div>

        <!-- Align Items -->
        <div class="mbe4">
          <h2>Align Items (Cross Axis)</h2>
          <p class="mbs2">Different vertical alignments for items of varying heights.</p>
        </div>
        <div class="mbe4">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <p class="mbe2"><strong>align="flex-start"</strong></p>
              <ag-flex-row
                style="--flex-gap: 1rem; min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
                align="flex-start"
              >
                <div class="demo-box">Item 1</div>
                <div class="demo-box" style="padding: 2rem 1rem;">Tall Item 2</div>
                <div class="demo-box">Item 3</div>
              </ag-flex-row>
            </div>
            <div>
              <p class="mbe2"><strong>align="center"</strong></p>
              <ag-flex-row
                style="--flex-gap: 1rem; min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
                align="center"
              >
                <div class="demo-box">Item 1</div>
                <div class="demo-box" style="padding: 2rem 1rem;">Tall Item 2</div>
                <div class="demo-box">Item 3</div>
              </ag-flex-row>
            </div>
            <div>
              <p class="mbe2"><strong>align="flex-end"</strong></p>
              <ag-flex-row
                style="--flex-gap: 1rem; min-height: 120px; background: var(--ag-background-secondary); border-radius: 3px;"
                align="flex-end"
              >
                <div class="demo-box">Item 1</div>
                <div class="demo-box" style="padding: 2rem 1rem;">Tall Item 2</div>
                <div class="demo-box">Item 3</div>
              </ag-flex-row>
            </div>
          </div>
        </div>

        <!-- Nested Layouts -->
        <div class="mbe4">
          <h2>Nested Flex Containers</h2>
          <p class="mbs2">Combine flex containers to create complex layouts.</p>
        </div>
        <div class="mbe4">
          <ag-flex-col
            style="--flex-gap: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: 3px;"
          >
            <ag-flex-row justify="space-between">
              <div class="demo-box demo-box-primary">Header Left</div>
              <div class="demo-box demo-box-primary">Header Right</div>
            </ag-flex-row>

            <ag-flex-row style="--flex-gap: 1rem">
              <ag-flex-col style="--flex-gap: 0.5rem; flex: 1;">
                <div class="demo-box demo-box-secondary">Sidebar Item 1</div>
                <div class="demo-box demo-box-secondary">Sidebar Item 2</div>
                <div class="demo-box demo-box-secondary">Sidebar Item 3</div>
              </ag-flex-col>

              <div class="demo-box" style="flex: 2; padding: 2rem;">Main Content Area</div>
            </ag-flex-row>

            <ag-flex-row justify="center">
              <div class="demo-box demo-box-primary full-width">Footer</div>
            </ag-flex-row>
          </ag-flex-col>
        </div>

        <!-- Stack and Group Aliases -->
        <div class="mbe4">
          <h2>Stack and Group (Aliases)</h2>
          <p class="mbs2">Convenient aliases familiar to Mantine and Chakra UI users.</p>
        </div>
        <div class="mbe4">
          <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
              <p class="mbe2"><strong>Stack (FlexCol alias)</strong></p>
              <ag-stack style="--flex-gap: 1rem">
                <div class="demo-box">Stacked 1</div>
                <div class="demo-box">Stacked 2</div>
                <div class="demo-box">Stacked 3</div>
              </ag-stack>
            </div>
            <div style="flex: 1;">
              <p class="mbe2"><strong>Group (FlexRow alias)</strong></p>
              <ag-group style="--flex-gap: 0.5rem">
                <button class="demo-button mie1">Action 1</button>
                <button class="demo-button mie1">Action 2</button>
                <button class="demo-button">Action 3</button>
              </ag-group>
            </div>
          </div>
        </div>

        <!-- Inline Flex -->
        <div class="mbe4">
          <h2>Inline Flex</h2>
          <p class="mbs2">Inline flex containers that only take up as much width as needed.</p>
        </div>
        <div class="mbe4">
          <p class="mbe2">Multiple inline flex containers on the same line:</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <ag-flex-inline
              style="--flex-gap: 0.5rem; background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
            >
              <span class="demo-tag">Tag 1</span>
              <span class="demo-tag">Tag 2</span>
            </ag-flex-inline>
            <ag-flex-inline
              style="--flex-gap: 0.5rem; background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
            >
              <span class="demo-tag">Tag 3</span>
              <span class="demo-tag">Tag 4</span>
            </ag-flex-inline>
            <ag-flex-inline
              style="--flex-gap: 0.5rem; background: var(--ag-background-secondary); padding: 0.5rem; border-radius: 3px;"
            >
              <span class="demo-tag">Tag 5</span>
              <span class="demo-tag">Tag 6</span>
            </ag-flex-inline>
          </div>
        </div>

        <!-- Responsive Layouts -->
        <div class="mbe4">
          <h2>Responsive Layouts</h2>
          <p class="mbs2">
            Example using <code>.responsive-direction</code> CSS class to control
            <code>--flex-direction</code> via media queries. <strong>Resize your browser to see
            the effect!</strong>
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-direction">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <div class="mbe4">
          <h2>Responsive Gap</h2>
          <p class="mbs2">
            Example using <code>.responsive-gap</code> CSS class to control
            <code>--flex-gap</code> at different viewport widths.
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-gap">
            <div class="demo-box">Item 1</div>
            <div class="demo-box">Item 2</div>
            <div class="demo-box">Item 3</div>
          </ag-flex-row>
        </div>

        <div class="mbe4">
          <h2>Responsive Justify</h2>
          <p class="mbs2">
            Example using <code>.responsive-justify</code> CSS class to control
            <code>--flex-justify</code> via media queries.
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-justify">
            <div class="demo-box">Start</div>
            <div class="demo-box">Middle</div>
            <div class="demo-box">End</div>
          </ag-flex-row>
        </div>

        <div class="mbe4">
          <h2>Responsive Card Grid</h2>
          <p class="mbs2">
            Example using <code>.responsive-cards</code> CSS class to create a responsive card grid
            with consumer-defined breakpoints.
          </p>
        </div>
        <div class="mbe4">
          <ag-flex-row class="responsive-cards">
            \${[...Array(6)].map(
              (_, i) => html\` <div class="demo-box card-item">Card \${i + 1}</div> \`
            )}
          </ag-flex-row>
        </div>
      </section>
    \`;
  }
}

customElements.define("flex-lit-examples", FlexLitExamples);
`,Es=`import {
  ReactFlexRow,
  ReactFlexCol,
  ReactFlexInline,
  ReactStack,
  ReactGroup,
} from "agnosticui-core/flex/react";

const FlexReactExamples = () => {
  return (
    <section>
      {/* Basic Row Layouts */}
      <div className="mbe4">
        <h2>Basic Row Layout</h2>
        <p className="mbs2">Items arranged horizontally with default flex-start alignment.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem" }}>
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      {/* Centered */}
      <div className="mbe4">
        <h2>Centered Content</h2>
        <p className="mbs2">Items centered on both axes.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow
          style={{
            "--flex-gap": "1rem",
            minHeight: "150px",
            background: "var(--ag-background-secondary)",
            borderRadius: "3px",
          }}
          justify="center"
          align="center"
        >
          <div className="demo-box">Centered 1</div>
          <div className="demo-box">Centered 2</div>
        </ReactFlexRow>
      </div>

      {/* Space Between */}
      <div className="mbe4">
        <h2>Space Between</h2>
        <p className="mbs2">Items distributed with space between them.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow justify="space-between">
          <div className="demo-box">Start</div>
          <div className="demo-box">Middle</div>
          <div className="demo-box">End</div>
        </ReactFlexRow>
      </div>

      {/* Space Around */}
      <div className="mbe4">
        <h2>Space Around</h2>
        <p className="mbs2">Items with equal space around them.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow justify="space-around">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      {/* Space Evenly */}
      <div className="mbe4">
        <h2>Space Evenly</h2>
        <p className="mbs2">Items with equal space between and around them.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow justify="space-evenly">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      {/* Stretch Children */}
      <div className="mbe4">
        <h2>Equal Width Children</h2>
        <p className="mbs2">
          Using <code>stretch-children</code> to make all items equal width.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem" }} stretchChildren={true}>
          <div className="demo-box">Short</div>
          <div className="demo-box">Medium length</div>
          <div className="demo-box">Longer content here</div>
        </ReactFlexRow>
      </div>

      {/* Column Layout */}
      <div className="mbe4">
        <h2>Column Layout</h2>
        <p className="mbs2">Items stacked vertically using FlexCol.</p>
      </div>
      <div className="mbe4">
        <ReactFlexCol style={{ "--flex-gap": "1rem" }}>
          <div className="demo-box">Row 1</div>
          <div className="demo-box">Row 2</div>
          <div className="demo-box">Row 3</div>
        </ReactFlexCol>
      </div>

      {/* Wrap */}
      <div className="mbe4">
        <h2>Wrapping Layout</h2>
        <p className="mbs2">Items wrap to the next line when needed.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem", maxWidth: "600px" }} wrap="wrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="demo-box" style={{ minWidth: "120px" }}>
              Item {i + 1}
            </div>
          ))}
        </ReactFlexRow>
      </div>

      {/* Reverse */}
      <div className="mbe4">
        <h2>Reverse Direction</h2>
        <p className="mbs2">Reverse the order of items.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem" }} reverse={true}>
          <div className="demo-box">First (1)</div>
          <div className="demo-box">Second (2)</div>
          <div className="demo-box">Third (3)</div>
        </ReactFlexRow>
      </div>

      {/* Align Items */}
      <div className="mbe4">
        <h2>Align Items (Cross Axis)</h2>
        <p className="mbs2">Different vertical alignments for items of varying heights.</p>
      </div>
      <div className="mbe4">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <p className="mbe2">
              <strong>align="flex-start"</strong>
            </p>
            <ReactFlexRow
              style={{
                "--flex-gap": "1rem",
                minHeight: "120px",
                background: "var(--ag-background-secondary)",
                borderRadius: "3px",
              }}
              align="flex-start"
            >
              <div className="demo-box">Item 1</div>
              <div className="demo-box" style={{ padding: "2rem 1rem" }}>
                Tall Item 2
              </div>
              <div className="demo-box">Item 3</div>
            </ReactFlexRow>
          </div>
          <div>
            <p className="mbe2">
              <strong>align="center"</strong>
            </p>
            <ReactFlexRow
              style={{
                "--flex-gap": "1rem",
                minHeight: "120px",
                background: "var(--ag-background-secondary)",
                borderRadius: "3px",
              }}
              align="center"
            >
              <div className="demo-box">Item 1</div>
              <div className="demo-box" style={{ padding: "2rem 1rem" }}>
                Tall Item 2
              </div>
              <div className="demo-box">Item 3</div>
            </ReactFlexRow>
          </div>
          <div>
            <p className="mbe2">
              <strong>align="flex-end"</strong>
            </p>
            <ReactFlexRow
              style={{
                "--flex-gap": "1rem",
                minHeight: "120px",
                background: "var(--ag-background-secondary)",
                borderRadius: "3px",
              }}
              align="flex-end"
            >
              <div className="demo-box">Item 1</div>
              <div className="demo-box" style={{ padding: "2rem 1rem" }}>
                Tall Item 2
              </div>
              <div className="demo-box">Item 3</div>
            </ReactFlexRow>
          </div>
        </div>
      </div>

      {/* Nested Layouts */}
      <div className="mbe4">
        <h2>Nested Flex Containers</h2>
        <p className="mbs2">Combine flex containers to create complex layouts.</p>
      </div>
      <div className="mbe4">
        <ReactFlexCol
          style={{
            "--flex-gap": "1rem",
            padding: "1rem",
            background: "var(--ag-background-secondary)",
            borderRadius: "3px",
          }}
        >
          <ReactFlexRow justify="space-between">
            <div className="demo-box demo-box-primary">Header Left</div>
            <div className="demo-box demo-box-primary">Header Right</div>
          </ReactFlexRow>

          <ReactFlexRow style={{ "--flex-gap": "1rem" }}>
            <ReactFlexCol style={{ "--flex-gap": "0.5rem", flex: "1" }}>
              <div className="demo-box demo-box-secondary">Sidebar Item 1</div>
              <div className="demo-box demo-box-secondary">Sidebar Item 2</div>
              <div className="demo-box demo-box-secondary">Sidebar Item 3</div>
            </ReactFlexCol>

            <div className="demo-box" style={{ flex: "2", padding: "2rem" }}>
              Main Content Area
            </div>
          </ReactFlexRow>

          <ReactFlexRow justify="center">
            <div className="demo-box demo-box-primary full-width">Footer</div>
          </ReactFlexRow>
        </ReactFlexCol>
      </div>

      {/* Stack and Group Aliases */}
      <div className="mbe4">
        <h2>Stack and Group (Aliases)</h2>
        <p className="mbs2">Convenient aliases familiar to Mantine and Chakra UI users.</p>
      </div>
      <div className="mbe4">
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ flex: "1" }}>
            <p className="mbe2">
              <strong>Stack (FlexCol alias)</strong>
            </p>
            <ReactStack style={{ "--flex-gap": "1rem" }}>
              <div className="demo-box">Stacked 1</div>
              <div className="demo-box">Stacked 2</div>
              <div className="demo-box">Stacked 3</div>
            </ReactStack>
          </div>
          <div style={{ flex: "1" }}>
            <p className="mbe2">
              <strong>Group (FlexRow alias)</strong>
            </p>
            <ReactGroup style={{ "--flex-gap": "0.5rem" }}>
              <button className="demo-button mie1">Action 1</button>
              <button className="demo-button mie1">Action 2</button>
              <button className="demo-button">Action 3</button>
            </ReactGroup>
          </div>
        </div>
      </div>

      {/* Inline Flex */}
      <div className="mbe4">
        <h2>Inline Flex</h2>
        <p className="mbs2">Inline flex containers that only take up as much width as needed.</p>
      </div>
      <div className="mbe4">
        <p className="mbe2">Multiple inline flex containers on the same line:</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <ReactFlexInline
            style={{
              "--flex-gap": "0.5rem",
              background: "var(--ag-background-secondary)",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
          >
            <span className="demo-tag">Tag 1</span>
            <span className="demo-tag">Tag 2</span>
          </ReactFlexInline>
          <ReactFlexInline
            style={{
              "--flex-gap": "0.5rem",
              background: "var(--ag-background-secondary)",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
          >
            <span className="demo-tag">Tag 3</span>
            <span className="demo-tag">Tag 4</span>
          </ReactFlexInline>
          <ReactFlexInline
            style={{
              "--flex-gap": "0.5rem",
              background: "var(--ag-background-secondary)",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
          >
            <span className="demo-tag">Tag 5</span>
            <span className="demo-tag">Tag 6</span>
          </ReactFlexInline>
        </div>
      </div>

      {/* Responsive Layouts */}
      <div className="mbe4">
        <h2>Responsive Layouts</h2>
        <p className="mbs2">
          Example using <code>.responsive-direction</code> CSS class to control{" "}
          <code>--flex-direction</code> via media queries.{" "}
          <strong>Resize your browser to see the effect!</strong>
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-direction">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      <div className="mbe4">
        <h2>Responsive Gap</h2>
        <p className="mbs2">
          Example using <code>.responsive-gap</code> CSS class to control{" "}
          <code>--flex-gap</code> at different viewport widths.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-gap">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      <div className="mbe4">
        <h2>Responsive Justify</h2>
        <p className="mbs2">
          Example using <code>.responsive-justify</code> CSS class to control{" "}
          <code>--flex-justify</code> via media queries.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-justify">
          <div className="demo-box">Start</div>
          <div className="demo-box">Middle</div>
          <div className="demo-box">End</div>
        </ReactFlexRow>
      </div>

      <div className="mbe4">
        <h2>Responsive Card Grid</h2>
        <p className="mbs2">
          Example using <code>.responsive-cards</code> CSS class to create a responsive card grid
          with consumer-defined breakpoints.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-cards">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="demo-box card-item">
              Card {i + 1}
            </div>
          ))}
        </ReactFlexRow>
      </div>

      <style>{\`
        /* Clean demo boxes inspired by the flexbox patterns site */
        .demo-box {
          padding: 1rem;
          margin-inline-end: var(--ag-space-2);
          margin-block-end: var(--ag-space-2);
          background: var(--ag-blue-100);
          border: 1px solid var(--ag-blue-300);
          border-radius: 3px;
          text-align: center;
          font-size: 0.875rem;
          color: var(--ag-neutral-900);
        }

        .demo-box-primary {
          background: var(--ag-blue-100);
          border-color: var(--ag-blue-300);
          color: var(--ag-neutral-900);
        }

        .demo-box-secondary {
          background: var(--ag-purple-100);
          border-color: var(--ag-purple-300);
          color: var(--ag-neutral-900);
        }

        .demo-tag {
          padding: 0.25rem 0.75rem;
          background: var(--ag-background-primary);
          border: 1px solid var(--ag-border);
          border-radius: 3px;
          font-size: 0.875rem;
          color: var(--ag-text-primary);
        }

        .demo-button {
          padding: 0.5rem 1rem;
          background: var(--ag-primary);
          color: var(--ag-white);
          border: none;
          border-radius: 3px;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .demo-button:hover {
          background: var(--ag-primary-dark);
        }

        .full-width {
          width: 100%;
        }

        /* Responsive layouts using CSS custom properties - no !important needed! */
        .responsive-direction {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        .responsive-direction .demo-box {
          margin-block-end: var(--ag-space-2);
        }

        @media (min-width: 769px) {
          .responsive-direction {
            --flex-direction: row;
          }
          .responsive-direction .demo-box {
            margin-inline-end: var(--ag-space-3);
            padding-inline: var(--ag-space-8);
            white-space: nowrap;
          }
        }

        .responsive-gap {
          --flex-gap: 0.5rem;
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .responsive-gap {
            --flex-gap: 1rem;
          }
        }

        @media (min-width: 769px) {
          .responsive-gap {
            --flex-gap: 2rem;
          }
        }

        .responsive-justify {
          --flex-gap: 1rem;
          --flex-justify: center;
        }

        @media (min-width: 769px) {
          .responsive-justify {
            --flex-justify: space-between;
          }
        }

        .responsive-cards {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        @media (min-width: 769px) {
          .responsive-cards {
            --flex-direction: row;
            --flex-wrap: wrap;
            --flex-gap: 1.5rem;
          }
        }

        .card-item {
          flex: 1 1 calc(33.333% - 1rem);
          min-width: 200px;
        }
      \`}</style>
    </section>
  );
};

export default FlexReactExamples;
`,Gs=JSON.parse('{"title":"Flex","description":"","frontmatter":{},"headers":[],"relativePath":"components/flex.md","filePath":"components/flex.md"}'),As={name:"components/flex.md"},Ps=Object.assign(As,{setup(a){return(n,i)=>(k(),o("div",null,[i[1]||(i[1]=s("h1",{id:"flex",tabindex:"-1"},[E("Flex "),s("a",{class:"header-anchor",href:"#flex","aria-label":'Permalink to "Flex"'},"​")],-1)),t(V),i[2]||(i[2]=s("p",null,"Flex components provide a powerful and intuitive way to create flexible layouts using CSS Flexbox. They offer a declarative API with dedicated components for common patterns.",-1)),i[3]||(i[3]=s("h2",{id:"examples",tabindex:"-1"},[E("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(L,{component:"flex","vue-code":l(Cs),"lit-code":l(ws),"react-code":l(Es)},{vue:d(()=>[t(bs)]),lit:d(()=>[...i[0]||(i[0]=[s("flex-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=N("",58))]))}});export{Gs as __pageData,Ps as default};
