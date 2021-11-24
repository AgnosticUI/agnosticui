import"./index.56618267.js";import{_ as c,A as l,r as e,o as p,c as u,a as s,d as t,w as o,F as h,b as n}from"./app.dec57e8f.js";import{_ as b,a as A,b as f,c as y}from"./Svelte-icon.d67041f2.js";const v={name:"AlertExamples",components:{Alert:l}},w={class:"mbs12 mbe16"},x=n("Default"),B={class:"mbs12 mbe16"},$=n("Rounded"),I={class:"mbs12 mbe16"},U=n("Border all"),S={class:"mbs12 mbe16"},R=n("Border left"),q={class:"mbs12 mbe16"},j=n("Success"),C={class:"mbs12 mbe16"},E=n("Info"),N={class:"mbs12 mbe16"},M=n("Warning"),V={class:"mbs12 mbe16"},L=n("Error");function T(r,i,k,g,d,m){const a=e("Alert");return p(),u(h,null,[s("div",w,[t(a,null,{default:o(()=>[x]),_:1})]),s("div",B,[t(a,{isRounded:""},{default:o(()=>[$]),_:1})]),s("div",I,[t(a,{isBorderAll:""},{default:o(()=>[U]),_:1})]),s("div",S,[t(a,{isBorderLeft:""},{default:o(()=>[R]),_:1})]),s("div",q,[t(a,{type:"success"},{default:o(()=>[j]),_:1})]),s("div",C,[t(a,{type:"info"},{default:o(()=>[E]),_:1})]),s("div",N,[t(a,{type:"warning"},{default:o(()=>[M]),_:1})]),s("div",V,[t(a,{type:"error"},{default:o(()=>[L]),_:1})])],64)}var D=c(v,[["render",T]]);const W={components:{Alert:l,AlertExamples:D}},Bs='{"title":"Alerts","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/alerts.md","lastUpdated":1637683355964}',Y=s("h1",{id:"alerts",tabindex:"-1"},[n("Alerts "),s("a",{class:"header-anchor",href:"#alerts","aria-hidden":"true"},"#")],-1),F=s("p",null,[n("Alerts provide contextual notifications or messages with "),s("a",{href:"https://www.w3.org/TR/wai-aria-practices/#alert",target:"_blank",rel:"noopener noreferrer"},"timely information"),n(".")],-1),G=s("div",{class:"mbe24"},null,-1),O=s("h2",{id:"examples",tabindex:"-1"},[n("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#")],-1),P=s("h2",{id:"usage",tabindex:"-1"},[n("Usage "),s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),z=s("div",{class:"flex"},[s("h3",{id:"react",tabindex:"-1"},[s("img",{src:b,alt:"react logo"}),n("React ")])],-1),H=s("div",{class:"language-jsx"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},"'agnostic-react/dist/common.min.css'"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},"'agnostic-react/dist/esm/index.css'"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Alert "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'agnostic-react'"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" message "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'Alerts should be used for timely information.'"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"const"),n(),s("span",{class:"token function-variable function"},"YourComponent"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"=>"),n(),s("span",{class:"token punctuation"},"("),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token punctuation"},"{"),n("message"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),n(),s("span",{class:"token attr-name"},"isRounded"),s("span",{class:"token punctuation"},">")]),s("span",{class:"token punctuation"},"{"),n("message"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),n(),s("span",{class:"token attr-name"},"isBorderAll"),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},"Border all"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),n(),s("span",{class:"token attr-name"},"isBorderLeft"),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},"Border left"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("success"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token punctuation"},"{"),n("message"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("info"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token punctuation"},"{"),n("message"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("warning"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token punctuation"},"{"),n("message"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("error"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token punctuation"},"{"),n("message"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Alert")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])])],-1),J=s("p",null,[n("React: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Alert.tsx",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Alert.stories.tsx",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),K=s("div",{class:"mbe32"},null,-1),Q=s("div",{class:"flex"},[s("h3",{id:"vue-3",tabindex:"-1"},[s("img",{src:A,alt:"Vue 3 logo"}),n("Vue 3 ")])],-1),X=s("div",{class:"language-vue"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n("Default"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"isRounded"),s("span",{class:"token punctuation"},">")]),n("Rounded"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"isBorderAll"),s("span",{class:"token punctuation"},">")]),n("Border all"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"isBorderLeft"),s("span",{class:"token punctuation"},">")]),n("Border left"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("success"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Success"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("info"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Info"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("warning"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Warning"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("error"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Error"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[n(`
`),s("span",{class:"token comment"},"// Import required AgnosticUI global common CSS"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},'"agnostic-vue/dist/common.min.css"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Alert "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"agnostic-vue"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  name`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"your-component"'),s("span",{class:"token punctuation"},","),n(`
  components`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(" Alert "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("script")]),s("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Z=s("p",null,[n("Vue 3: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Alert.vue",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Alert.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),ss=s("div",{class:"mbe24"},null,-1),ns=n("Note: Vue 2 is not supported"),as=s("div",{class:"mbe32"},null,-1),ts=s("div",{class:"flex"},[s("h3",{id:"angular",tabindex:"-1"},[s("img",{src:f,alt:"Angular logo"}),n("Angular ")])],-1),os=s("p",null,[n("In your Angular configuration (likely "),s("code",null,"angular.json"),n(") ensure you're including the common AgnosticUI styles:")],-1),es=s("div",{class:"mbe16"},null,-1),cs=s("p",null,[s("code",null,' "styles": ["dist/common.min.css"],')],-1),ls=s("div",{class:"mbe24"},null,-1),ps=s("p",null,[n("Add AgnosticUI's "),s("code",null,"AgModule"),n(" module:")],-1),us=s("div",{class:"language-js"},[s("div",{class:"highlight-lines"},[s("br"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" NgModule "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'@angular/core'"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" BrowserModule "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'@angular/platform-browser'"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" AgModule "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'agnostic-angular'"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" AppComponent "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'./app.component'"),s("span",{class:"token punctuation"},";"),n(`

@`),s("span",{class:"token function"},"NgModule"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  declarations`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n("AppComponent"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  imports`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n("BrowserModule"),s("span",{class:"token punctuation"},","),n(" AgModule"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  providers`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  bootstrap`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n("AppComponent"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"AppModule"),n(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),n(`
`)])])],-1),rs=s("p",null,"Now you can use in your components:",-1),is=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Component "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'@angular/core'"),s("span",{class:"token punctuation"},";"),n(`

@`),s("span",{class:"token function"},"Component"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  selector`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'your-component'"),s("span",{class:"token punctuation"},","),n(`
  template`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},`<div>
    <ag-alert>Default</ag-alert>
    <ag-alert isRounded="true">Rounded</ag-alert>
    <ag-alert isBorderAll="true">Border all</ag-alert>
    <ag-alert isBorderLeft="true">Border left</ag-alert>
    <ag-alert type="success">Success</ag-alert>
    <ag-alert type="info">Info</ag-alert>
    <ag-alert type="warning">Warning</ag-alert>
    <ag-alert type="error">Error</ag-alert>
  </div>`),s("span",{class:"token template-punctuation string"},"`")]),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"YourComponent"),n(),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token comment"},"//... }"),n(`
`)])])],-1),ks=s("p",null,[n("Angular: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/alert.component.ts",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/alert.component.stories.ts",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),gs=s("div",{class:"mbe32"},null,-1),ds=s("div",{class:"flex"},[s("h3",{id:"svelte",tabindex:"-1"},[s("img",{src:y,alt:"Svelte logo"}),n("Svelte ")])],-1),ms=s("div",{class:"language-html"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[n(`
  `),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},'"../node_modules/agnostic-svelte/dist/common.min.css"'),s("span",{class:"token punctuation"},";"),n(`
  `),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Alert "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'agnostic-svelte'"),s("span",{class:"token punctuation"},";"),n(`
  `),s("span",{class:"token keyword"},"let"),n(" message "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"Alerts should be used for timely information."'),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("script")]),s("span",{class:"token punctuation"},">")]),n(`

`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("div")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n("{message}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"isRounded"),s("span",{class:"token punctuation"},">")]),n("{message}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"isBorderAll"),s("span",{class:"token punctuation"},">")]),n("Border all"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"isBorderLeft"),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("p")]),s("span",{class:"token punctuation"},">")]),n("Border left"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("p")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("success"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Success"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("info"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Info"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("warning"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Warning"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Alert")]),n(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("error"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Error"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Alert")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("div")]),s("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),_s=s("p",null,[n("Svelte: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Alert.svelte",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Alert.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),hs=s("h2",{id:"storybook",tabindex:"-1"},[n("Storybook "),s("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#")],-1),bs=s("p",null,"You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:",-1),As=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token function"},"git"),n(` clone git@github.com:AgnosticUI/agnosticui.git
`),s("span",{class:"token builtin class-name"},"cd"),n(" agnosticui "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"yarn"),n(`
`),s("span",{class:"token comment"},"# You can then run any of the top-level scripts:"),n(`
`),s("span",{class:"token function"},"yarn"),n(" start:react "),s("span",{class:"token comment"},"# or"),n(`
`),s("span",{class:"token function"},"yarn"),n(" start:vue "),s("span",{class:"token comment"},"# or"),n(`
`),s("span",{class:"token function"},"yarn"),n(" start:angular "),s("span",{class:"token comment"},"# or"),n(`
`),s("span",{class:"token function"},"yarn"),n(` start:svelte
`)])])],-1),fs=s("p",null,[n("See "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo",target:"_blank",rel:"noopener noreferrer"},"Running monorepo"),n(".")],-1);function ys(r,i,k,g,d,m){const a=e("AlertExamples"),_=e("Alert");return p(),u("div",null,[Y,F,G,O,t(a),P,z,H,J,K,Q,X,Z,ss,t(_,{type:"warning"},{default:o(()=>[ns]),_:1}),as,ts,os,es,cs,ls,ps,us,rs,is,ks,gs,ds,ms,_s,hs,bs,As,fs])}var $s=c(W,[["render",ys]]);export{Bs as __pageData,$s as default};
