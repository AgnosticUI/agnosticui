import{_ as c,D as h,r as o,o as l,c as i,a as s,d as t,w as e,F as f,b as n,A as w}from"./app.dec57e8f.js";import"./index.56618267.js";import{_,a as y,b,c as v}from"./Svelte-icon.d67041f2.js";const A={name:"DiscloseExamples",components:{Disclose:h}},S=s("h3",null,"Disclose default",-1),D=n(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),x=n(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),G=n(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),W=n(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). "),N={class:"mbe48"},q=s("h3",null,"Disclose with background",-1),M=s("p",{class:"mbs16 mbe24"},[n("The earlier example favors using a \u201Cclean\u201D if minimalist style. However, there may be use cases that that require a stronger visual affordance for the disclose elements themeselves. If that's the case, you can utilize the "),s("code",null,"isBackground"),n(" prop which achieves the following:")],-1),O=n(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),R=n(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),B=n(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),E=n(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). ");function T(p,r,u,k,d,g){const a=o("Disclose");return l(),i(f,null,[s("section",null,[S,t(a,{"is-open":"",title:"Roger Federer"},{default:e(()=>[D]),_:1}),t(a,{title:"Serena Williams"},{default:e(()=>[x]),_:1}),t(a,{title:"Stefi Graf"},{default:e(()=>[G]),_:1}),t(a,{title:"Andre Agassi"},{default:e(()=>[W]),_:1})]),s("section",N,[q,M,t(a,{isBackground:"",title:"Roger Federer"},{default:e(()=>[O]),_:1}),t(a,{isBackground:"",title:"Serena Williams"},{default:e(()=>[R]),_:1}),t(a,{isBackground:"",title:"Stefi Graf"},{default:e(()=>[B]),_:1}),t(a,{isBackground:"",title:"Andre Agassi"},{default:e(()=>[E]),_:1})])],64)}var $=c(A,[["render",T]]);const j={components:{Alert:w,DiscloseExamples:$}},Ss='{"title":"Disclose","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/disclose.md","lastUpdated":1637791219712}',F=s("h1",{id:"disclose",tabindex:"-1"},[n("Disclose "),s("a",{class:"header-anchor",href:"#disclose","aria-hidden":"true"},"#")],-1),C=s("p",null,[n("The "),s("code",null,"Disclose"),n(" component is often used as a supplemental button to Disclose things.")],-1),H=s("div",{class:"mbs24"},null,-1),I=s("h2",{id:"examples",tabindex:"-1"},[n("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#")],-1),U=s("div",{class:"mbe24"},null,-1),J=s("div",{class:"mbe32"},null,-1),K=s("h2",{id:"usage",tabindex:"-1"},[n("Usage "),s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),V=s("div",{class:"flex"},[s("h3",{id:"react",tabindex:"-1"},[s("img",{src:_,alt:"react logo"}),n("React ")])],-1),P=s("div",{class:"language-jsx"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},'"agnostic-react/dist/common.min.css"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},'"agnostic-react/dist/esm/index.css"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Disclose "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"agnostic-react"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"const"),n(),s("span",{class:"token function-variable function"},"YourComponent"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"=>"),n(),s("span",{class:"token punctuation"},"("),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("section")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"is-open"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Roger Federer"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Roger Federer is a Swiss professional tennis player. 
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Serena Williams"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Stefi Graf"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Andre Agassi"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("section")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("section")]),n(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mbe48"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Roger Federer"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Roger Federer is a Swiss professional tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Serena Williams"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Serena Jameka Williams is an American professional tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Stefi Graf"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Stefanie Maria Graf is a German former professional tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),s("span",{class:"token class-name"},"Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Andre Agassi"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),s("span",{class:"token class-name"},"Disclose")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token plain-text"},`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("section")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token punctuation"},")"),n(`
`)])])],-1),Y=s("p",null,[n("React: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Disclose.tsx",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Disclose.stories.tsx",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),z=s("div",{class:"mbe32"},null,-1),L=s("div",{class:"flex"},[s("h3",{id:"vue-3",tabindex:"-1"},[s("img",{src:y,alt:"Vue 3 logo"}),n("Vue 3 ")])],-1),Q=s("div",{class:"language-vue"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},'"agnostic-vue/dist/common.min.css"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},'"agnostic-vue/dist/index.css"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Disclose "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"agnostic-vue"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  name`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"DiscloseExamples"'),s("span",{class:"token punctuation"},","),n(`
  components`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    Disclose`),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("script")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("section")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("h3")]),s("span",{class:"token punctuation"},">")]),n("Disclose default"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("h3")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"is-open"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Roger Federer"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),n(`
      Roger Federer is a Swiss professional tennis player. 
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Serena Williams"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Stefi Graf"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Andre Agassi"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("section")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("section")]),n(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mbe48"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("h3")]),s("span",{class:"token punctuation"},">")]),n("Disclose with background"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("h3")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("p")]),n(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mbs16 mbe24"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`The earlier example favors using
      a `),s("span",{class:"token entity named-entity",title:"\u201C"},"&ldquo;"),n("clean"),s("span",{class:"token entity named-entity",title:"\u201D"},"&rdquo;"),n(` if minimalist style. However, there
      may be use cases that that require a stronger visual affordance
      for the disclose elements themeselves. If that's the case, you
      can utilize the `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("code")]),s("span",{class:"token punctuation"},">")]),n("isBackground"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("code")]),s("span",{class:"token punctuation"},">")]),n(` prop which achieves
      the following:
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("p")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Roger Federer"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),n(`
      Roger Federer is a Swiss professional tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Serena Williams"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),n(`
      Serena Jameka Williams is an American professional tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Stefi Graf"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),n(`
      Stefanie Maria Graf is a German former professional tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(`
      `),s("span",{class:"token attr-name"},"isBackground"),n(`
      `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Andre Agassi"),s("span",{class:"token punctuation"},'"')]),n(`
    `),s("span",{class:"token punctuation"},">")]),n(`
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("section")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),X=s("p",null,[n("Vue 3: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Disclose.vue",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Disclose.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),Z=s("div",{class:"mbe24"},null,-1),ss=n("Note: Vue 2 is not supported"),ns=s("div",{class:"mbe32"},null,-1),as=s("div",{class:"flex"},[s("h3",{id:"angular",tabindex:"-1"},[s("img",{src:b,alt:"Angular logo"}),n("Angular ")])],-1),ts=s("p",null,[n("In your Angular configuration (likely "),s("code",null,"angular.json"),n(") ensure you're including the common AgnosticUI styles:")],-1),es=s("div",{class:"mbe16"},null,-1),os=s("p",null,[s("code",null,' "styles": ["dist/common.min.css"],')],-1),cs=s("div",{class:"mbe24"},null,-1),ls=s("p",null,[n("Add AgnosticUI's "),s("code",null,"AgModule"),n(" module:")],-1),is=s("div",{class:"language-js"},[s("div",{class:"highlight-lines"},[s("br"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" NgModule "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'@angular/core'"),s("span",{class:"token punctuation"},";"),n(`
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
`)])])],-1),ps=s("p",null,"Now you can use in your components:",-1),rs=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Component "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'@angular/core'"),s("span",{class:"token punctuation"},";"),n(`

@`),s("span",{class:"token function"},"Component"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  selector`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'your-component'"),s("span",{class:"token punctuation"},","),n(`
  template`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},`
  <div class="mbe48">
    <h3>Multiple Disclose</h3>
    <p class="mbs16 mbe24">Multiple disclose elements can be stacked to achieve a
      progressively disclosed pattern that resembles an Accordion pattern. Further,
      individual disclosed elements may be open by default if we supply the
      <code>isOpen</code> prop as we do in the first disclose element below:
    </p>
    <ag-disclose isOpen
                  title="Roger Federer">
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of
      Tennis
      Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and
      Novak
      Djokovic (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the
      most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis
      Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    </ag-disclose>
    <ag-disclose title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377
      weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968
      and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to
      win
      four Australian Open singles titles in the Open Era (Wikipedia).
    </ag-disclose>
  </div>
`),s("span",{class:"token template-punctuation string"},"`")]),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"YourComponent"),n(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),n(`
`)])])],-1),us=s("p",null,[n("Angular: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.ts",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.stories.ts",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),ks=s("div",{class:"mbe32"},null,-1),ds=s("div",{class:"flex"},[s("h3",{id:"svelte",tabindex:"-1"},[s("img",{src:v,alt:"Svelte logo"}),n("Svelte ")])],-1),gs=s("div",{class:"language-html"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[n(`
  `),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token string"},'"../node_modules/agnostic-svelte/dist/common.min.css"'),s("span",{class:"token punctuation"},";"),n(`
  `),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" Disclose "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"agnostic-svelte"'),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("script")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("section")]),n(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mbs16 mbe24"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("h2")]),s("span",{class:"token punctuation"},">")]),n("Disclose default"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("h2")]),s("span",{class:"token punctuation"},">")]),n(` 
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(`
    `),s("span",{class:"token attr-name"},"is-open"),n(`
    `),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Roger Federer"),s("span",{class:"token punctuation"},'"')]),n(`
  `),s("span",{class:"token punctuation"},">")]),n(`
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men`),s("span",{class:"token entity named-entity",title:"'"},"&apos;"),n(`s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Serena Williams"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women`),s("span",{class:"token entity named-entity",title:"'"},"&apos;"),n(`s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Stefi Graf"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Andre Agassi"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("section")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("section")]),n(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mbs24"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("h2")]),n(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("mbe24"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Disclose with background"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("h2")]),s("span",{class:"token punctuation"},">")]),n(` 
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"isBackground"),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Roger Federer"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men`),s("span",{class:"token entity named-entity",title:"'"},"&apos;"),n(`s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"isBackground"),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Serena Williams"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women`),s("span",{class:"token entity named-entity",title:"'"},"&apos;"),n(`s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"isBackground"),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Stefi Graf"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("Disclose")]),n(),s("span",{class:"token attr-name"},"isBackground"),n(),s("span",{class:"token attr-name"},"title"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("Andre Agassi"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("Disclose")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("section")]),s("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ms=s("p",null,[n("Svelte: "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Disclose.svelte",target:"_blank",rel:"noopener noreferrer"},"component source"),n(", "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Disclose.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),hs=s("h2",{id:"storybook",tabindex:"-1"},[n("Storybook "),s("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#")],-1),fs=s("p",null,"You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:",-1),ws=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token function"},"git"),n(` clone git@github.com:AgnosticUI/agnosticui.git
`),s("span",{class:"token builtin class-name"},"cd"),n(" agnosticui "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"yarn"),n(`
`),s("span",{class:"token comment"},"# You can then run any of the top-level scripts:"),n(`
`),s("span",{class:"token function"},"yarn"),n(" start:react "),s("span",{class:"token comment"},"# or"),n(`
`),s("span",{class:"token function"},"yarn"),n(" start:vue "),s("span",{class:"token comment"},"# or"),n(`
`),s("span",{class:"token function"},"yarn"),n(" start:angular "),s("span",{class:"token comment"},"# or"),n(`
`),s("span",{class:"token function"},"yarn"),n(` start:svelte
`)])])],-1),_s=s("p",null,[n("See "),s("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo",target:"_blank",rel:"noopener noreferrer"},"Running monorepo"),n(".")],-1);function ys(p,r,u,k,d,g){const a=o("DiscloseExamples"),m=o("Alert");return l(),i("div",null,[F,C,H,I,U,t(a),J,K,V,P,Y,z,L,Q,X,Z,t(m,{type:"warning"},{default:e(()=>[ss]),_:1}),ns,as,ts,es,os,cs,ls,is,ps,rs,us,ks,ds,gs,ms,hs,fs,ws,_s])}var Ds=c(j,[["render",ys]]);export{Ss as __pageData,Ds as default};
