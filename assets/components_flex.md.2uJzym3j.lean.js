import{A as j}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as P,a as T,x as _}from"./chunks/lit-element.B0TUrqGF.js";import{z as g}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{s as u}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as y,c as F,o as d,r as m,K as C,p as v,v as f,P as E,s as x,j as s,ae as I,G as e,k as l,w as h,a as w,F as D,B as S,t as q}from"./chunks/framework.DvJW1jwp.js";var V=Object.defineProperty,$=Object.getOwnPropertyDescriptor,c=(a,n,i,t)=>{for(var k=t>1?void 0:t?$(n,i):n,o=a.length-1,b;o>=0;o--)(b=a[o])&&(k=(t?b(n,i,k):b(k))||k);return t&&k&&V(n,i,k),k};const R=class extends T{constructor(){super(),this._direction="row",this._wrap="nowrap",this._justify="flex-start",this._align="stretch",this._alignContent="stretch",this.inline=!1,this.reverse=!1,this.stretchChildren=!1}get direction(){return this._direction}set direction(n){const i=["row","row-reverse","column","column-reverse"];this._direction=n&&i.includes(n)?n:"row",this.requestUpdate()}get wrap(){return this._wrap}set wrap(n){const i=["nowrap","wrap","wrap-reverse"];this._wrap=n&&i.includes(n)?n:"nowrap",this.requestUpdate()}get justify(){return this._justify}set justify(n){const i=["flex-start","flex-end","center","space-between","space-around","space-evenly"];this._justify=n&&i.includes(n)?n:"flex-start",this.requestUpdate()}get align(){return this._align}set align(n){const i=["flex-start","flex-end","center","baseline","stretch"];this._align=n&&i.includes(n)?n:"stretch",this.requestUpdate()}get alignContent(){return this._alignContent}set alignContent(n){const i=["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch"];this._alignContent=n&&i.includes(n)?n:"stretch",this.requestUpdate()}updated(n){super.updated(n)}render(){return _`
      <div class="flex-container" part="ag-flex-container">
        <slot></slot>
      </div>
    `}};R.styles=P`
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
  `;let r=R;c([g({type:String,reflect:!0})],r.prototype,"direction",1);c([g({type:String,reflect:!0})],r.prototype,"wrap",1);c([g({type:String,reflect:!0})],r.prototype,"justify",1);c([g({type:String,reflect:!0})],r.prototype,"align",1);c([g({type:String,attribute:"align-content"})],r.prototype,"alignContent",1);c([g({type:Boolean,reflect:!0})],r.prototype,"inline",2);c([g({type:Boolean,reflect:!0})],r.prototype,"reverse",2);c([g({type:Boolean,attribute:"stretch-children",reflect:!0})],r.prototype,"stretchChildren",2);customElements.get("ag-flex-container")||customElements.define("ag-flex-container",r);let G=class extends r{constructor(){super(...arguments),this._direction="row"}};customElements.get("ag-flex-row")||customElements.define("ag-flex-row",G);const U=y({name:"VueFlexRow",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=v(null),i=()=>{const t=n.value;t&&(t.wrap=a.wrap,t.justify=a.justify,t.align=a.align,t.alignContent=a.alignContent,t.reverse=a.reverse,t.stretchChildren=a.stretchChildren)};return f(async()=>{await customElements.whenDefined("ag-flex-row"),await E(),i()}),x(()=>{n.value&&i()}),{agComponent:n}}});function L(a,n,i,t,k,o){return d(),F("ag-flex-row",C({ref:"agComponent"},a.$attrs),[m(a.$slots,"default")],16)}const p=u(U,[["render",L]]);class N extends r{constructor(){super(...arguments),this._direction="column"}}customElements.get("ag-flex-col")||customElements.define("ag-flex-col",N);const M=y({name:"VueFlexCol",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=v(null),i=()=>{const t=n.value;t&&(t.wrap=a.wrap,t.justify=a.justify,t.align=a.align,t.alignContent=a.alignContent,t.reverse=a.reverse,t.stretchChildren=a.stretchChildren)};return f(async()=>{await customElements.whenDefined("ag-flex-col"),await E(),i()}),x(()=>{n.value&&i()}),{agComponent:n}}});function O(a,n,i,t,k,o){return d(),F("ag-flex-col",C({ref:"agComponent"},a.$attrs),[m(a.$slots,"default")],16)}const A=u(M,[["render",O]]);class W extends r{constructor(){super(),this.inline=!0}}customElements.get("ag-flex-inline")||customElements.define("ag-flex-inline",W);const Y=y({name:"VueFlexInline",props:{direction:{type:String,default:"row"},wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=v(null),i=()=>{const t=n.value;t&&(t.direction=a.direction,t.wrap=a.wrap,t.justify=a.justify,t.align=a.align,t.alignContent=a.alignContent,t.reverse=a.reverse,t.stretchChildren=a.stretchChildren)};return f(async()=>{await customElements.whenDefined("ag-flex-inline"),await E(),i()}),x(()=>{n.value&&i()}),{agComponent:n}}});function z(a,n,i,t,k,o){return d(),F("ag-flex-inline",C({ref:"agComponent"},a.$attrs),[m(a.$slots,"default")],16)}const B=u(Y,[["render",z]]),H=y({name:"VueStack",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=v(null),i=()=>{const t=n.value;t&&(t.wrap=a.wrap,t.justify=a.justify,t.align=a.align,t.alignContent=a.alignContent,t.reverse=a.reverse,t.stretchChildren=a.stretchChildren)};return f(async()=>{await customElements.whenDefined("ag-flex-col"),await E(),i()}),x(()=>{n.value&&i()}),{agComponent:n}}});function J(a,n,i,t,k,o){return d(),F("ag-flex-col",C({ref:"agComponent"},a.$attrs),[m(a.$slots,"default")],16)}const K=u(H,[["render",J]]),Q=y({name:"VueGroup",props:{wrap:{type:String,default:"nowrap"},justify:{type:String,default:"flex-start"},align:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},reverse:{type:Boolean,default:!1},stretchChildren:{type:Boolean,default:!1}},setup(a){const n=v(null),i=()=>{const t=n.value;t&&(t.wrap=a.wrap,t.justify=a.justify,t.align=a.align,t.alignContent=a.alignContent,t.reverse=a.reverse,t.stretchChildren=a.stretchChildren)};return f(async()=>{await customElements.whenDefined("ag-flex-row"),await E(),i()}),x(()=>{n.value&&i()}),{agComponent:n}}});function X(a,n,i,t,k,o){return d(),F("ag-flex-row",C({ref:"agComponent"},a.$attrs),[m(a.$slots,"default")],16)}const Z=u(Q,[["render",X]]),ss={class:"mbe4"},is={class:"mbe4"},as={class:"mbe4"},ts={class:"mbe4"},ns={class:"mbe4"},es={class:"mbe4"},ls={class:"mbe4"},hs={class:"mbe4"},ps={class:"mbe4"},ks={class:"mbe4"},rs={style:{display:"flex","flex-direction":"column",gap:"1rem"}},Fs={class:"mbe4"},ds={class:"mbe4"},os={style:{display:"flex",gap:"2rem"}},gs={style:{flex:"1"}},cs={style:{flex:"1"}},ys={class:"mbe4"},us={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},ms={class:"mbe4"},Cs={class:"responsive-cards"},vs=y({__name:"FlexExamples",setup(a){return(n,i)=>(d(),F("section",null,[i[26]||(i[26]=s("div",{class:"mbe4"},[s("h2",null,"Basic Row Layout"),s("p",{class:"mbs2"},"Items arranged horizontally with default flex-start alignment.")],-1)),s("div",ss,[e(l(p),{gap:"1rem"},{default:h(()=>[...i[0]||(i[0]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box"},"Item 2",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),i[27]||(i[27]=s("div",{class:"mbe4"},[s("h2",null,"Centered Content"),s("p",{class:"mbs2"},"Items centered on both axes.")],-1)),s("div",is,[e(l(p),{gap:"1rem",justify:"center",align:"center",style:{"min-height":"150px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:h(()=>[...i[1]||(i[1]=[s("div",{class:"demo-box"},"Centered 1",-1),s("div",{class:"demo-box"},"Centered 2",-1)])]),_:1})]),i[28]||(i[28]=s("div",{class:"mbe4"},[s("h2",null,"Space Between"),s("p",{class:"mbs2"},"Items distributed with space between them.")],-1)),s("div",as,[e(l(p),{justify:"space-between"},{default:h(()=>[...i[2]||(i[2]=[s("div",{class:"demo-box"},"Start",-1),s("div",{class:"demo-box"},"Middle",-1),s("div",{class:"demo-box"},"End",-1)])]),_:1})]),i[29]||(i[29]=s("div",{class:"mbe4"},[s("h2",null,"Space Around"),s("p",{class:"mbs2"},"Items with equal space around them.")],-1)),s("div",ts,[e(l(p),{justify:"space-around"},{default:h(()=>[...i[3]||(i[3]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box"},"Item 2",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),i[30]||(i[30]=s("div",{class:"mbe4"},[s("h2",null,"Space Evenly"),s("p",{class:"mbs2"},"Items with equal space between and around them.")],-1)),s("div",ns,[e(l(p),{justify:"space-evenly"},{default:h(()=>[...i[4]||(i[4]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box"},"Item 2",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),i[31]||(i[31]=s("div",{class:"mbe4"},[s("h2",null,"Equal Width Children"),s("p",{class:"mbs2"},[w("Using "),s("code",null,"stretch-children"),w(" to make all items equal width.")])],-1)),s("div",es,[e(l(p),{gap:"1rem","stretch-children":!0},{default:h(()=>[...i[5]||(i[5]=[s("div",{class:"demo-box"},"Short",-1),s("div",{class:"demo-box"},"Medium length",-1),s("div",{class:"demo-box"},"Longer content here",-1)])]),_:1})]),i[32]||(i[32]=s("div",{class:"mbe4"},[s("h2",null,"Column Layout"),s("p",{class:"mbs2"},"Items stacked vertically using FlexCol.")],-1)),s("div",ls,[e(l(A),{gap:"1rem"},{default:h(()=>[...i[6]||(i[6]=[s("div",{class:"demo-box"},"Row 1",-1),s("div",{class:"demo-box"},"Row 2",-1),s("div",{class:"demo-box"},"Row 3",-1)])]),_:1})]),i[33]||(i[33]=s("div",{class:"mbe4"},[s("h2",null,"Wrapping Layout"),s("p",{class:"mbs2"},"Items wrap to the next line when needed.")],-1)),s("div",hs,[e(l(p),{gap:"1rem",wrap:"wrap",style:{"max-width":"600px"}},{default:h(()=>[(d(),F(D,null,S(8,t=>s("div",{key:t,class:"demo-box",style:{"min-width":"120px"}}," Item "+q(t),1)),64))]),_:1})]),i[34]||(i[34]=s("div",{class:"mbe4"},[s("h2",null,"Reverse Direction"),s("p",{class:"mbs2"},"Reverse the order of items.")],-1)),s("div",ps,[e(l(p),{gap:"1rem",reverse:!0},{default:h(()=>[...i[7]||(i[7]=[s("div",{class:"demo-box"},"First (1)",-1),s("div",{class:"demo-box"},"Second (2)",-1),s("div",{class:"demo-box"},"Third (3)",-1)])]),_:1})]),i[35]||(i[35]=s("div",{class:"mbe4"},[s("h2",null,"Align Items (Cross Axis)"),s("p",{class:"mbs2"},"Different vertical alignments for items of varying heights.")],-1)),s("div",ks,[s("div",rs,[s("div",null,[i[9]||(i[9]=s("p",{class:"mbe2"},[s("strong",null,'align="flex-start"')],-1)),e(l(p),{gap:"1rem",align:"flex-start",style:{"min-height":"120px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:h(()=>[...i[8]||(i[8]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box",style:{padding:"2rem 1rem"}}," Tall Item 2 ",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),s("div",null,[i[11]||(i[11]=s("p",{class:"mbe2"},[s("strong",null,'align="center"')],-1)),e(l(p),{gap:"1rem",align:"center",style:{"min-height":"120px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:h(()=>[...i[10]||(i[10]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box",style:{padding:"2rem 1rem"}}," Tall Item 2 ",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})]),s("div",null,[i[13]||(i[13]=s("p",{class:"mbe2"},[s("strong",null,'align="flex-end"')],-1)),e(l(p),{gap:"1rem",align:"flex-end",style:{"min-height":"120px",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:h(()=>[...i[12]||(i[12]=[s("div",{class:"demo-box"},"Item 1",-1),s("div",{class:"demo-box",style:{padding:"2rem 1rem"}}," Tall Item 2 ",-1),s("div",{class:"demo-box"},"Item 3",-1)])]),_:1})])])]),i[36]||(i[36]=s("div",{class:"mbe4"},[s("h2",null,"Nested Flex Containers"),s("p",{class:"mbs2"},"Combine flex containers to create complex layouts.")],-1)),s("div",Fs,[e(l(A),{gap:"1rem",style:{padding:"1rem",background:"var(--ag-background-secondary)","border-radius":"3px"}},{default:h(()=>[e(l(p),{justify:"space-between"},{default:h(()=>[...i[14]||(i[14]=[s("div",{class:"demo-box demo-box-primary"},"Header Left",-1),s("div",{class:"demo-box demo-box-primary"},"Header Right",-1)])]),_:1}),e(l(p),{gap:"1rem"},{default:h(()=>[e(l(A),{gap:"0.5rem",style:{flex:"1"}},{default:h(()=>[...i[15]||(i[15]=[s("div",{class:"demo-box demo-box-secondary"},"Sidebar Item 1",-1),s("div",{class:"demo-box demo-box-secondary"},"Sidebar Item 2",-1),s("div",{class:"demo-box demo-box-secondary"},"Sidebar Item 3",-1)])]),_:1}),i[16]||(i[16]=s("div",{class:"demo-box",style:{flex:"2",padding:"2rem"}}," Main Content Area ",-1))]),_:1}),e(l(p),{justify:"center"},{default:h(()=>[...i[17]||(i[17]=[s("div",{class:"demo-box demo-box-primary full-width"},"Footer",-1)])]),_:1})]),_:1})]),i[37]||(i[37]=s("div",{class:"mbe4"},[s("h2",null,"Stack and Group (Aliases)"),s("p",{class:"mbs2"},"Convenient aliases familiar to Mantine and Chakra UI users.")],-1)),s("div",ds,[s("div",os,[s("div",gs,[i[19]||(i[19]=s("p",{class:"mbe2"},[s("strong",null,"Stack (FlexCol alias)")],-1)),e(l(K),{gap:"1rem"},{default:h(()=>[...i[18]||(i[18]=[s("div",{class:"demo-box"},"Stacked 1",-1),s("div",{class:"demo-box"},"Stacked 2",-1),s("div",{class:"demo-box"},"Stacked 3",-1)])]),_:1})]),s("div",cs,[i[21]||(i[21]=s("p",{class:"mbe2"},[s("strong",null,"Group (FlexRow alias)")],-1)),e(l(Z),{gap:"0.5rem"},{default:h(()=>[...i[20]||(i[20]=[s("button",{class:"demo-button mie1"},"Action 1",-1),s("button",{class:"demo-button mie1"},"Action 2",-1),s("button",{class:"demo-button"},"Action 3",-1)])]),_:1})])])]),i[38]||(i[38]=s("div",{class:"mbe4"},[s("h2",null,"Inline Flex"),s("p",{class:"mbs2"},"Inline flex containers that only take up as much width as needed.")],-1)),s("div",ys,[i[25]||(i[25]=s("p",{class:"mbe2"},"Multiple inline flex containers on the same line:",-1)),s("div",us,[e(l(B),{gap:"0.5rem",style:{background:"var(--ag-background-secondary)",padding:"0.5rem","border-radius":"3px"}},{default:h(()=>[...i[22]||(i[22]=[s("span",{class:"demo-tag"},"Tag 1",-1),s("span",{class:"demo-tag"},"Tag 2",-1)])]),_:1}),e(l(B),{gap:"0.5rem",style:{background:"var(--ag-background-secondary)",padding:"0.5rem","border-radius":"3px"}},{default:h(()=>[...i[23]||(i[23]=[s("span",{class:"demo-tag"},"Tag 3",-1),s("span",{class:"demo-tag"},"Tag 4",-1)])]),_:1}),e(l(B),{gap:"0.5rem",style:{background:"var(--ag-background-secondary)",padding:"0.5rem","border-radius":"3px"}},{default:h(()=>[...i[24]||(i[24]=[s("span",{class:"demo-tag"},"Tag 5",-1),s("span",{class:"demo-tag"},"Tag 6",-1)])]),_:1})])]),i[39]||(i[39]=I("",7)),s("div",ms,[s("ag-flex-row",Cs,[(d(),F(D,null,S(6,t=>s("div",{key:t,class:"demo-box card-item"}," Card "+q(t),1)),64))])])]))}}),Ss=JSON.parse('{"title":"Flex","description":"","frontmatter":{},"headers":[],"relativePath":"components/flex.md","filePath":"components/flex.md"}'),fs={name:"components/flex.md"},qs=Object.assign(fs,{setup(a){return(n,i)=>(d(),F("div",null,[i[0]||(i[0]=s("h1",{id:"flex",tabindex:"-1"},[w("Flex "),s("a",{class:"header-anchor",href:"#flex","aria-label":'Permalink to "Flex"'},"​")],-1)),e(j),i[1]||(i[1]=s("p",null,"Flex components provide a powerful and intuitive way to create flexible layouts using CSS Flexbox. They offer a declarative API with dedicated components for common patterns.",-1)),e(vs),i[2]||(i[2]=I("",61))]))}});export{Ss as __pageData,qs as default};
