import{_ as c,B as d,r as e,o as p,c as l,a as n,d as t,F as b,A as h,w as _,b as s}from"./app.5f350331.js";import"./index.56618267.js";import{_ as v,a as f,b as y,c as w}from"./Svelte-icon.d67041f2.js";const B={name:"BreadcrumbExamples",components:{Breadcrumb:d},data(){return{trailOfTennisRoutes:[{label:"Tennis",url:"#tennis"},{label:"Superstars",url:"#tennis-superstars"},{label:"Serena Williams",url:"#tennis-superstars-serena"}]}}},x=n("h2",null,"Breadcrumbs",-1),A={class:"mbs24 mbe16"};function T(u,r,i,k,o,m){const a=e("Breadcrumb");return p(),l(b,null,[x,n("div",A,[t(a,{routes:o.trailOfTennisRoutes},null,8,["routes"]),t(a,{type:"slash",routes:o.trailOfTennisRoutes},null,8,["routes"]),t(a,{type:"bullet",routes:o.trailOfTennisRoutes},null,8,["routes"]),t(a,{type:"arrow",routes:o.trailOfTennisRoutes},null,8,["routes"]),t(a,{routes:[{label:"A single route will look *linkless*"}]}),t(a,{routes:[{label:"First",url:"#foo"},{label:"Second",url:"#bar"}]})])],64)}var S=c(B,[["render",T]]);const q={components:{Alert:h,BreadcrumbExamples:S}},dn='{"title":"Breadcrumbs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/breadcrumbs.md","lastUpdated":1638293280583}',R=n("h1",{id:"breadcrumbs",tabindex:"-1"},[s("Breadcrumbs "),n("a",{class:"header-anchor",href:"#breadcrumbs","aria-hidden":"true"},"#")],-1),O=n("p",null,[s("The "),n("code",null,"Breadcrumb"),s(" component is a \u201Cwayfinding&rdqou; element that helps make users aware of their current location within an application or website.")],-1),j=n("div",{class:"mbs24"},null,-1),I=n("h2",{id:"examples",tabindex:"-1"},[s("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#")],-1),U=n("div",{class:"mbe24"},null,-1),C=n("div",{class:"mbe32"},null,-1),N=n("h2",{id:"usage",tabindex:"-1"},[s("Usage "),n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),M=n("div",{class:"flex"},[n("h3",{id:"react",tabindex:"-1"},[n("img",{src:v,alt:"react logo"}),s("React ")])],-1),V=n("div",{class:"language-jsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/esm/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Breadcrumb "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-react"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" trailOfTennisRoutes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tennis"'),n("span",{class:"token punctuation"},","),s(`
    url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Superstars"'),n("span",{class:"token punctuation"},","),s(`
    url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis-superstars"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Serena Williams"'),n("span",{class:"token punctuation"},","),s(`
    url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis-superstars-serena"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"YourComponent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs40 mbe24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"Breadcrumbs"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs24 mbe16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Breadcrumb")]),s(),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s(" trailOfTennisRoutes "),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Breadcrumb")]),s(`
        `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slash"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s(" trailOfTennisRoutes "),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Breadcrumb")]),s(`
        `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bullet"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s(" trailOfTennisRoutes "),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Breadcrumb")]),s(`
        `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("arrow"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s(" trailOfTennisRoutes "),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Breadcrumb")]),s(),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`'A single route looks "link-less"'`),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Breadcrumb")]),s(),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s("label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'First'"),n("span",{class:"token punctuation"},","),s(" url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#foo'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Second'"),n("span",{class:"token punctuation"},","),s(" url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#bar'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),$=n("p",null,[s("React: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Breadcrumb.tsx",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Breadcrumb.stories.tsx",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),E=n("div",{class:"mbe32"},null,-1),F=n("div",{class:"flex"},[n("h3",{id:"vue-3",tabindex:"-1"},[n("img",{src:f,alt:"Vue 3 logo"}),s("Vue 3 ")])],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// Import the required AgnosticUI global common and component CSS"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Breadcrumb "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"MyApp"'),n("span",{class:"token punctuation"},","),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Breadcrumb`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      trailOfTennisRoutes`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tennis"'),n("span",{class:"token punctuation"},","),s(`
          url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Superstars"'),n("span",{class:"token punctuation"},","),s(`
          url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis-superstars"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Serena Williams"'),n("span",{class:"token punctuation"},","),s(`
          url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis-superstars-serena"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Breadcrumbs"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs24 mbe16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("trailOfTennisRoutes"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slash"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("trailOfTennisRoutes"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bullet"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("trailOfTennisRoutes"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("arrow"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("trailOfTennisRoutes"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("[{ label: "),n("span",{class:"token punctuation"},"'"),s("A single route will look *linkless*"),n("span",{class:"token punctuation"},"'"),s(" }]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("[{label: "),n("span",{class:"token punctuation"},"'"),s("First"),n("span",{class:"token punctuation"},"'"),s(", url: "),n("span",{class:"token punctuation"},"'"),s("#foo"),n("span",{class:"token punctuation"},"'"),s("}, { label: "),n("span",{class:"token punctuation"},"'"),s("Second"),n("span",{class:"token punctuation"},"'"),s(", url: "),n("span",{class:"token punctuation"},"'"),s("#bar"),n("span",{class:"token punctuation"},"'"),s(" }]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Y=n("p",null,[s("Vue 3: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Breadcrumb.vue",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Breadcrumb.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),D=n("div",{class:"mbe24"},null,-1),G=s("Note: Vue 2 is not supported"),P=n("div",{class:"mbe32"},null,-1),z=n("div",{class:"flex"},[n("h3",{id:"angular",tabindex:"-1"},[n("img",{src:y,alt:"Angular logo"}),s("Angular ")])],-1),H=n("p",null,[s("In your Angular configuration (likely "),n("code",null,"angular.json"),s(") ensure you're including the common AgnosticUI styles:")],-1),J=n("div",{class:"mbe16"},null,-1),K=n("p",null,[n("code",null,' "styles": ["agnostic/dist/common.min.css"],')],-1),L=n("div",{class:"mbe24"},null,-1),Q=n("p",null,[s("Add AgnosticUI's "),n("code",null,"AgModule"),s(" module:")],-1),X=n("div",{class:"language-js"},[n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" NgModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BrowserModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/platform-browser'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" AgModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'agnostic-angular'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" AppComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./app.component'"),n("span",{class:"token punctuation"},";"),s(`

@`),n("span",{class:"token function"},"NgModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  declarations`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("AppComponent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  imports`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("BrowserModule"),n("span",{class:"token punctuation"},","),s(" AgModule"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  providers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  bootstrap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("AppComponent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AppModule"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Z=n("p",null,"Now you can use in your components:",-1),nn=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Component "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`

@`),n("span",{class:"token function"},"Component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  selector`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'your-component'"),n("span",{class:"token punctuation"},","),s(`
  template`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`<section>
    <h2>Breadcrumbs</h2>
    <ag-breadcrumb
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb type="bullet"
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb type="arrow"
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb [routes]="[{ label: 'A single route will look *linkless*' }]"></ag-breadcrumb>
    <ag-breadcrumb [routes]="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]"></ag-breadcrumb>
  </section>`),n("span",{class:"token template-punctuation string"},"`")]),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"YourComponent"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),sn=n("p",null,[s("Angular: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Breadcrumb.component.ts",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Breadcrumb.component.stories.ts",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),an=n("div",{class:"mbe32"},null,-1),tn=n("div",{class:"flex"},[n("h3",{id:"svelte",tabindex:"-1"},[n("img",{src:w,alt:"Svelte logo"}),s("Svelte ")])],-1),on=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"../node_modules/agnostic-svelte/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Breadcrumb "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-svelte"'),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" trailOfTennisRoutes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tennis"'),n("span",{class:"token punctuation"},","),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Superstars"'),n("span",{class:"token punctuation"},","),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis-superstars"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Serena Williams"'),n("span",{class:"token punctuation"},","),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#tennis-superstars-serena"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs40 mbe24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Breadcrumbs"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs24 mbe16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("{")]),s(),n("span",{class:"token attr-name"},"trailOfTennisRoutes"),s(),n("span",{class:"token attr-name"},"}"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slash"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("{")]),s(),n("span",{class:"token attr-name"},"trailOfTennisRoutes"),s(),n("span",{class:"token attr-name"},"}"),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bullet"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("{")]),s(),n("span",{class:"token attr-name"},"trailOfTennisRoutes"),s(),n("span",{class:"token attr-name"},"}"),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("arrow"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("{")]),s(),n("span",{class:"token attr-name"},"trailOfTennisRoutes"),s(),n("span",{class:"token attr-name"},"}"),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("{[{")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"label:")]),s(),n("span",{class:"token attr-name"},"'A"),s(),n("span",{class:"token attr-name"},"single"),s(),n("span",{class:"token attr-name"},"route"),s(),n("span",{class:"token attr-name"},"will"),s(),n("span",{class:"token attr-name"},"look"),s(),n("span",{class:"token attr-name"},"*linkless*'"),s(),n("span",{class:"token attr-name"},"}]}"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Breadcrumb")]),s(),n("span",{class:"token attr-name"},"routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("{[{label:")]),s(),n("span",{class:"token attr-name"},"'First',"),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"url:")]),s(),n("span",{class:"token attr-name"},"'#foo'},"),s(),n("span",{class:"token attr-name"},"{"),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"label:")]),s(),n("span",{class:"token attr-name"},"'Second',"),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"url:")]),s(),n("span",{class:"token attr-name"},"'#bar'"),s(),n("span",{class:"token attr-name"},"}]}"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),en=n("p",null,[s("Svelte: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Breadcrumb.svelte",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Breadcrumb.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),cn=n("h2",{id:"storybook",tabindex:"-1"},[s("Storybook "),n("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#")],-1),pn=n("p",null,"You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:",-1),ln=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"git"),s(` clone git@github.com:AgnosticUI/agnosticui.git
`),n("span",{class:"token builtin class-name"},"cd"),s(" agnosticui "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"yarn"),s(`
`),n("span",{class:"token comment"},"# You can then run any of the top-level scripts:"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:react "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:vue "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:angular "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(` start:svelte
`)])])],-1),un=n("p",null,[s("See "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo",target:"_blank",rel:"noopener noreferrer"},"Running monorepo"),s(".")],-1);function rn(u,r,i,k,o,m){const a=e("BreadcrumbExamples"),g=e("Alert");return p(),l("div",null,[R,O,j,I,U,t(a),C,N,M,V,$,E,F,W,Y,D,t(g,{type:"warning"},{default:_(()=>[G]),_:1}),P,z,H,J,K,L,Q,X,Z,nn,sn,an,tn,on,en,cn,pn,ln,un])}var bn=c(q,[["render",rn]]);export{dn as __pageData,bn as default};
