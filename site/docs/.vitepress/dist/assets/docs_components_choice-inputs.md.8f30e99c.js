import{_ as o,h,r as e,o as c,c as p,d as t,A as m,w as b,a as n,b as a}from"./app.dec57e8f.js";import"./index.56618267.js";import{_ as v,a as y,b as _,c as C}from"./Svelte-icon.d67041f2.js";const f={name:"ChoiceInputExamples",components:{ChoiceInput:h}};function x(l,u,i,k,r,g){const s=e("ChoiceInput");return c(),p("section",null,[t(s,{type:"radio","legend-label":"Radio",options:[{name:"solo",value:"stevie",label:"Stevie Wonder"},{name:"solo",value:"whitney",label:"Whitney Houston"},{name:"solo",value:"charlie",label:"Charlie Wilson"}]}),t(s,{type:"checkbox",options:[{name:"bands",value:"bonjovi",label:"Bon Jovi"},{name:"bands",value:"stones",label:"Rolling Stones"},{name:"bands",value:"isleybros",label:"Isley Brothers"}],"legend-label":"Large",size:"large","is-inline":""}),t(s,{type:"checkbox","legend-label":"Checkbox with specific options disabled",disabledOptions:["stones","isleybros"],options:[{name:"bands",value:"bonjovi",label:"Bon Jovi"},{name:"bands",value:"stones",label:"Rolling Stones"},{name:"bands",value:"isleybros",label:"Isley Brothers"},{name:"bands",value:"parliament",label:"Parliament-Funkadelic"}]})])}var I=o(f,[["render",x]]);const w={components:{Alert:m,ChoiceInputExamples:I}},_n='{"title":"Choice Inputs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Navigation","slug":"navigation"},{"level":3,"title":"Checkboxes","slug":"checkboxes"},{"level":3,"title":"Radios","slug":"radios"},{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/choice-inputs.md","lastUpdated":1637772431471}',q=n("h1",{id:"choice-inputs",tabindex:"-1"},[a("Choice Inputs "),n("a",{class:"header-anchor",href:"#choice-inputs","aria-hidden":"true"},"#")],-1),O=n("p",null,[n("code",null,"ChoiceInput"),a(" component allows you to make choices via the "),n("code",null,"checkbox"),a(" and "),n("code",null,"radio"),a(" elements.")],-1),j=n("div",{class:"mbs24"},null,-1),A=n("h2",{id:"navigation",tabindex:"-1"},[a("Navigation "),n("a",{class:"header-anchor",href:"#navigation","aria-hidden":"true"},"#")],-1),L=n("p",null,[a("As a baseline, let's have a look at some examples from the "),n("a",{href:"https://www.w3.org/WAI/",target:"_blank",rel:"noopener noreferrer"},"Web Accessibility Initiative"),a("\u2026")],-1),S=n("h3",{id:"checkboxes",tabindex:"-1"},[a("Checkboxes "),n("a",{class:"header-anchor",href:"#checkboxes","aria-hidden":"true"},"#")],-1),R=n("p",null,[a("Looking at the "),n("a",{href:"https://www.w3.org/WAI/tutorials/forms/grouping/#checkboxes",target:"_blank",rel:"noopener noreferrer"},"wai-aria practices checkbox example"),a(" we see that the "),n("code",null,"TAB"),a(" key is used to tab into the group of checkbox elements, but, is also used to navigate \u201Cwithin\u201D those checkbox elements.")],-1),B=n("h3",{id:"radios",tabindex:"-1"},[a("Radios "),n("a",{class:"header-anchor",href:"#radios","aria-hidden":"true"},"#")],-1),U=n("p",null,[a("Looking at the "),n("a",{href:"https://www.w3.org/WAI/tutorials/forms/grouping/#radio-buttons",target:"_blank",rel:"noopener noreferrer"},"wai-aria-practices radio example"),a(" we see that the "),n("code",null,"TAB"),a(" key is used to tab into the group of radio elements; but then, the "),n("code",null,"Arrow"),a(" keys are used to navigate \u201Cwithin\u201D those radio elements.")],-1),W=n("div",{class:"mbs24"},null,-1),z=n("p",null,[a("AgnosticUI's "),n("code",null,"ChoiceInput"),a(" uses the same keyboard navigation strategy as above.")],-1),M=n("h2",{id:"examples",tabindex:"-1"},[a("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#")],-1),N=n("div",{class:"mbe24"},null,-1),D=n("div",{class:"mbe32"},null,-1),$=n("h2",{id:"usage",tabindex:"-1"},[a("Usage "),n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),V=n("div",{class:"flex"},[n("h3",{id:"react",tabindex:"-1"},[n("img",{src:v,alt:"react logo"}),a("React ")])],-1),E=n("div",{class:"language-jsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},'"agnostic-react/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},'"agnostic-react/dist/esm/index.css"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ChoiceInput "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"agnostic-react"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" testOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"frequency"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"daily"'),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"Daily"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"frequency"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"weekly"'),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"Weekly"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"frequency"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"monthly"'),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"Monthly"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" disabledOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'weekly'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'monthly'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"YourComponent"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),a(`

  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"checkedItems"),a(),n("span",{class:"token operator"},"=>"),a(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("checkItems"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("section")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox legend"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isDisabled"),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox disabled"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"disabledOptions"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("disabledOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox specific options disabled"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isFieldset"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox fieldset hidden"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("5"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isInline"),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox inline"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("6"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isInline"),a(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox small"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isInline"),a(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox large"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("8"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isInline"),a(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"checkedOptions"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"daily"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"weekly"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox prechecked options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Radio legend"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("11"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isDisabled"),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("testOptions"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Radio disabled"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"disabledOptions"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'two'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'numbers'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'one'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'one'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'numbers'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'two'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'two'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'numbers'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'three'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'three'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Radio specific options disabled"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("14"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isInline"),a(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shape'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'square'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Square'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shape'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'circle'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Circle'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Radio small"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("15"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"isInline"),a(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bands'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bonjovi'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bon Jovi'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bands'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'stones'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Rolling Stones'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bands'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'isleybros'"),n("span",{class:"token punctuation"},","),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Isley Brothers'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token attr-name"},"legendLabel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Radio large"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a(" handleChange "),n("span",{class:"token punctuation"},"}")]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("section")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1),F=n("p",null,[a("React: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/ChoiceInput.tsx",target:"_blank",rel:"noopener noreferrer"},"component source"),a(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/ChoiceInput.stories.tsx",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),J=n("div",{class:"mbe32"},null,-1),T=n("div",{class:"flex"},[n("h3",{id:"vue-3",tabindex:"-1"},[n("img",{src:y,alt:"Vue 3 logo"}),a("Vue 3 ")])],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// Import the required AgnosticUI global common and component CSS"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},'"agnostic-vue/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},'"agnostic-vue/dist/index.css"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ChoiceInput "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"agnostic-vue"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"MyApp"'),n("span",{class:"token punctuation"},","),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    ChoiceInput`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("section")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"legend-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Radio"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
        { name: `),n("span",{class:"token punctuation"},"'"),a("solo"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("stevie"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Stevie Wonder"),n("span",{class:"token punctuation"},"'"),a(` },
        { name: `),n("span",{class:"token punctuation"},"'"),a("solo"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("whitney"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Whitney Houston"),n("span",{class:"token punctuation"},"'"),a(` },
        { name: `),n("span",{class:"token punctuation"},"'"),a("solo"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("charlie"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Charlie Wilson"),n("span",{class:"token punctuation"},"'"),a(` },
      ]`),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
        { name: `),n("span",{class:"token punctuation"},"'"),a("bands"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("bonjovi"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Bon Jovi"),n("span",{class:"token punctuation"},"'"),a(` },
        { name: `),n("span",{class:"token punctuation"},"'"),a("bands"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("stones"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Rolling Stones"),n("span",{class:"token punctuation"},"'"),a(` },
        { name: `),n("span",{class:"token punctuation"},"'"),a("bands"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("isleybros"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Isley Brothers"),n("span",{class:"token punctuation"},"'"),a(` },
      ]`),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"legend-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Large"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"is-inline"),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ChoiceInput")]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"legend-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checkbox with disabled options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabledOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("stones"),n("span",{class:"token punctuation"},"'"),a(", "),n("span",{class:"token punctuation"},"'"),a("isleybros"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},","),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
        { name: `),n("span",{class:"token punctuation"},"'"),a("bands"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("bonjovi"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Bon Jovi"),n("span",{class:"token punctuation"},"'"),a(`},
        { name: `),n("span",{class:"token punctuation"},"'"),a("bands"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("stones"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Rolling Stones"),n("span",{class:"token punctuation"},"'"),a(` },
        { name: `),n("span",{class:"token punctuation"},"'"),a("bands"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("isleybros"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Isley Brothers"),n("span",{class:"token punctuation"},"'"),a(` }
        { name: `),n("span",{class:"token punctuation"},"'"),a("bands"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("parliament"),n("span",{class:"token punctuation"},"'"),a(", label: "),n("span",{class:"token punctuation"},"'"),a("Parliament-Funkadelic"),n("span",{class:"token punctuation"},"'"),a(` }
      ]`),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("section")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("p",null,[a("Vue 3: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/ChoiceInput.vue",target:"_blank",rel:"noopener noreferrer"},"component source"),a(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/ChoiceInput.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),H=n("div",{class:"mbe24"},null,-1),G=a("Note: Vue 2 is not supported"),K=n("div",{class:"mbe32"},null,-1),Q=n("div",{class:"flex"},[n("h3",{id:"angular",tabindex:"-1"},[n("img",{src:_,alt:"Angular logo"}),a("Angular ")])],-1),X=n("p",null,[a("In your Angular configuration (likely "),n("code",null,"angular.json"),a(") ensure you're including the common AgnosticUI styles:")],-1),Z=n("div",{class:"mbe16"},null,-1),nn=n("p",null,[n("code",null,' "styles": ["dist/common.min.css"],')],-1),an=n("div",{class:"mbe24"},null,-1),sn=n("p",null,[a("Add AgnosticUI's "),n("code",null,"AgModule"),a(" module:")],-1),tn=n("div",{class:"language-js"},[n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" NgModule "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" BrowserModule "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@angular/platform-browser'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" AgModule "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'agnostic-angular'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" AppComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'./app.component'"),n("span",{class:"token punctuation"},";"),a(`

@`),n("span",{class:"token function"},"NgModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  declarations`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("AppComponent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  imports`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("BrowserModule"),n("span",{class:"token punctuation"},","),a(" AgModule"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  providers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  bootstrap`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("AppComponent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"AppModule"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),en=n("p",null,"Now you can use in your components:",-1),on=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Component "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),a(`

@`),n("span",{class:"token function"},"Component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  selector`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'your-component'"),n("span",{class:"token punctuation"},","),a(`
  template`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`<section>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      legendLabel="Legend"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [isDisabled]="true"
      [options]="testOptions"
      legendLabel="Disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [disabledOptions]="disabledOptions"
      legendLabel="Specific options disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [disabledOptions]="disabledOptions"
      [isFieldset]="false"
      legendLabel="Fieldset hidden"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [isInline]="true"
      legendLabel="Inline"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [isInline]="true"
      size="small"
      legendLabel="Small"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [isInline]="true"
      size="large"
      legendLabel="Large"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      checkedOptions="['daily', 'weekly']"
      [isInline]="true"
      size="large"
      legendLabel="Prechecked options"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      [options]="testOptions"
      [isSkinned]="false"
      [isInline]="true"
      legendLabel="Checkbox unskinned (fieldset and legend unstyled)"
      (selected)="handleChange"
    ></ag-choice-input>
    <h1 style="margin: 1rem 0;">Radios</h1>
    <ag-choice-input
      type="radio"
      [options]="testOptions"
      legendLabel="Radio legend"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="testOptions"
      [isDisabled]="true"
      legendLabel="Disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'numbers', value: 'one', label: 'one'}, { name: 'numbers', value: 'two', label: 'two' }, { name: 'numbers', value: 'three', label: 'three' }]"
      [disabledOptions]="['two']"
      legendLabel="Specific options disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'es', value: 'uno', label: 'uno'}, { name: 'es', value: 'dos', label: 'dos' }, { name: 'es', value: 'tres', label: 'tres' }]"
      legendLabel="Fieldset hidden"
      [isFieldset]="false"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'colors', value: 'blue', label: 'Blue'}, { name: 'colors', value: 'red', label: 'Red' }, { name: 'colors', value: 'silver', label: 'Silver' }]"
      legendLabel="Inline"
      [isInline]="true"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }]"
      legendLabel="Large"
      size="large"
      [isInline]="true"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]"
      [checkedOptions]="['charlie']"
      legendLabel="Prechecked option"
      size="large"
      [isInline]="true"
      (selected)="handleChange"
    ></ag-choice-input>
  </section>`),n("span",{class:"token template-punctuation string"},"`")]),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"YourComponent"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"private"),a(" disabledOptions"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'weekly'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'monthly'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"private"),a(" testOptions"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'frequency'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'daily'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Daily'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'frequency'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'weekly'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Weekly'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'frequency'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'monthly'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Monthly'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token function"},"handleChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("changedItems"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),cn=n("p",null,[a("Angular: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/choice-input.component.ts",target:"_blank",rel:"noopener noreferrer"},"component source"),a(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/choice-input.component.stories.ts",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),pn=n("div",{class:"mbe32"},null,-1),ln=n("div",{class:"flex"},[n("h3",{id:"svelte",tabindex:"-1"},[n("img",{src:C,alt:"Svelte logo"}),a("Svelte ")])],-1),un=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},'"../node_modules/agnostic-svelte/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ChoiceInput "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"agnostic-svelte"'),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"let"),a(" disabledOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"monthly"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},'"weekly"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"let"),a(" testOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"frequency"'),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"daily"'),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"Daily"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"frequency"'),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"weekly"'),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"Weekly"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"frequency"'),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"monthly"'),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"Monthly"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("section")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ChoiceInput")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"isInline"),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("{testOptions}")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  <ChoiceInput type="checkbox" options={testOptions}
    disabledOptions=["daily"] legendLabel="Checkbox with specific options disabled" />
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ChoiceInput")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"isInline"),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("{testOptions}")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  <ChoiceInput type="radio" size="large" legendLabel="Radio large"
    options={testOptions} checkedOptions=["weekly"] disabledOptions=["daily", "monthly"] />
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("section")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),kn=n("p",null,[a("Svelte: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/ChoiceInput.svelte",target:"_blank",rel:"noopener noreferrer"},"component source"),a(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/ChoiceInput.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),rn=n("h2",{id:"storybook",tabindex:"-1"},[a("Storybook "),n("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#")],-1),gn=n("p",null,"You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:",-1),dn=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"git"),a(` clone git@github.com:AgnosticUI/agnosticui.git
`),n("span",{class:"token builtin class-name"},"cd"),a(" agnosticui "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"yarn"),a(`
`),n("span",{class:"token comment"},"# You can then run any of the top-level scripts:"),a(`
`),n("span",{class:"token function"},"yarn"),a(" start:react "),n("span",{class:"token comment"},"# or"),a(`
`),n("span",{class:"token function"},"yarn"),a(" start:vue "),n("span",{class:"token comment"},"# or"),a(`
`),n("span",{class:"token function"},"yarn"),a(" start:angular "),n("span",{class:"token comment"},"# or"),a(`
`),n("span",{class:"token function"},"yarn"),a(` start:svelte
`)])])],-1),hn=n("p",null,[a("See "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo",target:"_blank",rel:"noopener noreferrer"},"Running monorepo"),a(".")],-1);function mn(l,u,i,k,r,g){const s=e("ChoiceInputExamples"),d=e("Alert");return c(),p("div",null,[q,O,j,A,L,S,R,B,U,W,z,M,N,t(s),D,$,V,E,F,J,T,P,Y,H,t(d,{type:"warning"},{default:b(()=>[G]),_:1}),K,Q,X,Z,nn,an,sn,tn,en,on,cn,pn,ln,un,kn,rn,gn,dn,hn])}var Cn=o(w,[["render",mn]]);export{_n as __pageData,Cn as default};
