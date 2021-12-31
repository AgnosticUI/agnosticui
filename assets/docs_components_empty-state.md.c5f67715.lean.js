import{_ as p,E as m,h,r as t,o as l,l as v,w as a,e as c,a as n,b as s,A as y,c as _}from"./app.cbbcd177.js";import"./index.56618267.js";import{_ as b,a as f,b as w,c as x}from"./Svelte-icon.d67041f2.js";const S={name:"EmptyStateExamples",components:{EmptyState:m,Button:h}},E=n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#999",width:"40",height:"40",viewBox:"0 0 24 24"},[n("path",{"fill-rule":"evenodd",d:"M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"})],-1),q=n("div",{class:"h4"}," No connections yet ",-1),A=n("p",{class:"mbe16",style:{color:"var(--agnostic-gray-dark)"}}," Click below to add some friends ",-1),B=s("Invite friend");function I(u,i,k,r,g,d){const o=t("Button"),e=t("EmptyState");return l(),v(e,{isRounded:"",isBordered:""},{header:a(()=>[E]),body:a(()=>[q,A]),footer:a(()=>[c(o,{isRounded:"",mode:"primary"},{default:a(()=>[B]),_:1})]),_:1})}var M=p(S,[["render",I]]);const C={components:{Alert:y,EmptyStateExamples:M}},yn='{"title":"Close","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/empty-state.md","lastUpdated":1640954004961}',N=n("h1",{id:"close",tabindex:"-1"},[s("Close "),n("a",{class:"header-anchor",href:"#close","aria-hidden":"true"},"#")],-1),U=n("p",null,[s("The "),n("code",null,"EmptyState"),s(" component is...")],-1),R=n("div",{class:"mbs24"},null,-1),$=n("h2",{id:"examples",tabindex:"-1"},[s("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#")],-1),j=n("div",{class:"mbe24"},null,-1),z=n("div",{class:"mbe32"},null,-1),V=n("h2",{id:"usage",tabindex:"-1"},[s("Usage "),n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),T=n("div",{class:"flex"},[n("h3",{id:"react",tabindex:"-1"},[n("img",{src:b,alt:"react logo"}),s("React ")])],-1),Y=n("div",{class:"language-jsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/esm/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  EmptyState`),n("span",{class:"token punctuation"},","),s(`
  EmptyStateHeader`),n("span",{class:"token punctuation"},","),s(`
  EmptyStateBody`),n("span",{class:"token punctuation"},","),s(`
  EmptyStateFooter`),n("span",{class:"token punctuation"},","),s(`
  Button
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"YourComponent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"EmptyState")]),s(),n("span",{class:"token attr-name"},"isBordered"),s(),n("span",{class:"token attr-name"},"isRounded"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"EmptyStateHeader")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("svg")]),s(),n("span",{class:"token attr-name"},"xmlns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("http://www.w3.org/2000/svg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#999"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("40"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("40"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("0 0 24 24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("path")]),s(),n("span",{class:"token attr-name"},"fillRule"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("evenodd"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("svg")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"EmptyStateHeader")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"EmptyStateBody")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("h4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"No connections yet"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbe16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"Click below to add some friends"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"EmptyStateBody")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"EmptyStateFooter")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Button")]),s(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"isRounded"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"Invite friends"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Button")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"EmptyStateFooter")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"EmptyState")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),F=n("p",null,[s("React: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/EmptyState.tsx",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/EmptyState.stories.tsx",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),H=n("div",{class:"mbe32"},null,-1),D=n("div",{class:"flex"},[n("h3",{id:"vue-3",tabindex:"-1"},[n("img",{src:f,alt:"Vue 3 logo"}),s("Vue 3 ")])],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("EmptyState")]),s(`
    `),n("span",{class:"token attr-name"},"isRounded"),s(`
    `),n("span",{class:"token attr-name"},"isBordered"),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("svg")]),s(`
        `),n("span",{class:"token attr-name"},"xmlns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("http://www.w3.org/2000/svg"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#999"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("40"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("40"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("0 0 24 24"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("path")]),s(`
          `),n("span",{class:"token attr-name"},"fill-rule"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("evenodd"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("svg")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#body"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("h4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        No connections yet
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbe16"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--agnostic-gray-dark"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        Click below to add some friends
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Button")]),s(`
        `),n("span",{class:"token attr-name"},"isRounded"),s(`
        `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s("Invite friend"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("EmptyState")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Button"),n("span",{class:"token punctuation"},","),s(" EmptyState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"EmptyStateExamples"'),n("span",{class:"token punctuation"},","),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    EmptyState`),n("span",{class:"token punctuation"},","),s(`
    Button`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),O=n("p",null,[s("Vue 3: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/EmptyState.vue",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/EmptyState.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),P=n("div",{class:"mbe24"},null,-1),J=s("Note: Vue 2 is not supported"),K=n("div",{class:"mbe32"},null,-1),L=n("div",{class:"flex"},[n("h3",{id:"angular",tabindex:"-1"},[n("img",{src:w,alt:"Angular logo"}),s("Angular ")])],-1),Q=n("p",null,[s("In your Angular configuration (likely "),n("code",null,"angular.json"),s(") ensure you're including the common AgnosticUI styles:")],-1),W=n("div",{class:"mbe16"},null,-1),X=n("p",null,[n("code",null,' "styles": ["agnostic/dist/common.min.css"],')],-1),Z=n("div",{class:"mbe24"},null,-1),nn=n("p",null,[s("Add AgnosticUI's "),n("code",null,"AgModule"),s(" module:")],-1),sn=n("div",{class:"language-js"},[n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" NgModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`
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
`)])])],-1),an=n("p",null,"Now you can use in your components:",-1),tn=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Component "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`

@`),n("span",{class:"token function"},"Component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  selector`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'your-component'"),n("span",{class:"token punctuation"},","),s(`
  template`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`<div>
    <ag-empty-state [isRounded]="true"
                    [isBordered]="true">
      <ag-empty-state-header>
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="#999"
             width="40"
             height="40"
             viewBox="0 0 24 24">
          <path fillRule="evenodd"
                d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
        </svg>
      </ag-empty-state-header>
      <ag-empty-state-body>
        <div class="h4">No connections yet</div>
        <p class="mbe16">Click below to add some friends</p>
      </ag-empty-state-body>
      <ag-empty-state-footer>
        <ag-button [isRounded]="true"
                   mode="primary">Invite friends</ag-button>
      </ag-empty-state-footer>
    </ag-empty-state> 
  </div>`),n("span",{class:"token template-punctuation string"},"`")]),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"YourComponent"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),on=n("p",null,[s("Angular: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/empty-state.component.ts",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/empty-state.component.stories.ts",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),en=n("div",{class:"mbe32"},null,-1),cn=n("div",{class:"flex"},[n("h3",{id:"svelte",tabindex:"-1"},[n("img",{src:x,alt:"Svelte logo"}),s("Svelte ")])],-1),pn=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'agnostic-svelte/dist/common.min.css'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Button"),n("span",{class:"token punctuation"},","),s(" EmptyState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-svelte"'),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("EmptyState")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("svg")]),s(`
          `),n("span",{class:"token attr-name"},"xmlns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("http://www.w3.org/2000/svg"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#999"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("40"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("40"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("0 0 24 24"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("path")]),s(`
            `),n("span",{class:"token attr-name"},"fill-rule"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("evenodd"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("svg")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("body"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("h4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          No connections yet
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbe16"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--agnostic-gray-dark"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
          Click below to add some friends
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("footer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Button")]),s(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          Invite friend
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("EmptyState")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),ln=n("p",null,[s("Svelte: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/EmptyState.svelte",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/EmptyState.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),un=n("h2",{id:"storybook",tabindex:"-1"},[s("Storybook "),n("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#")],-1),kn=n("p",null,"You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:",-1),rn=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"git"),s(` clone git@github.com:AgnosticUI/agnosticui.git
`),n("span",{class:"token builtin class-name"},"cd"),s(" agnosticui "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"yarn"),s(`
`),n("span",{class:"token comment"},"# You can then run any of the top-level scripts:"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:react "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:vue "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:angular "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(` start:svelte
`)])])],-1),gn=n("p",null,[s("See "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo",target:"_blank",rel:"noopener noreferrer"},"Running monorepo"),s(".")],-1);function dn(u,i,k,r,g,d){const o=t("EmptyStateExamples"),e=t("Alert");return l(),_("div",null,[N,U,R,$,j,c(o),z,V,T,Y,F,H,D,G,O,P,c(e,{type:"warning"},{default:a(()=>[J]),_:1}),K,L,Q,W,X,Z,nn,sn,an,tn,on,en,cn,pn,ln,un,kn,rn,gn])}var _n=p(C,[["render",dn]]);export{yn as __pageData,_n as default};
