import{_ as m}from"./astro-logo-light.3adaa5e5.js";import{d as b,r as d,_ as h,a as q}from"./agnostic-vue.esm.5530bcea.js";import{_ as v,a as T,b as y,c as _}from"./Angular-icon.86c96dc8.js";import"./common.min.821ee339.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import{z as e,o as c,c as l,f as a,l as t,B as s,F as f,b as n,Y as u}from"./framework.3f76b01e.js";import"./framework.79deab6d.js";const x={name:"TabExamples",components:{Button:b,Tabs:d},data(){return{disabledOptions:["tab-18","tab-20"]}}},B=a("h2",null,"Tabs",-1),P={class:"mbs24 mbe16"},A=n(" Tab 1 "),j=a("p",null,"Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),I=a("p",null,[n(" Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the next tab you use the arrow key and enter|space to select. This is consistent with wai-aria practices "),a("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html"}," aria manual activation example"),n(". ")],-1),V=a("p",null,[n("Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),C=n(" Tab 2 "),N=a("p",null,[n("Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),S=n(" Tab Foo "),U=n(" Panel Foo content (no padding or margins so consumer can control desired gutters) "),R=n(" Tab Bar "),D=n(" Panel Bar "),O={class:"mbs32 mbe16"},$=n(" Tab 1 "),Y=n(" Panel 1 "),E=n(" Tab 2 "),z=n(" Panel 2 "),M=a("h2",null,"Vertical Tabs",-1),J={class:"mbs48 mbe16"},F=n(" Tab 1 "),H=a("p",null,"Vertical tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),G=a("p",null,[n("Now you'll use the up and down arrows. Home and end still work the same. Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),K=n(" Tab 2 "),L=n(" Vertical tab 2 content (no padding or margins so consumer can control desired gutters) "),X=a("h2",null,"Disabled Tabs",-1),Q={class:"mbs48 mbe16"},W=n(" Tab 1 "),Z=n(" Panel 1 "),nn=n(" Tab 1 "),an=n(" Panel 2 "),sn=a("h2",null,"Disabled Options",-1),tn={class:"mbs12 mbe16"},pn=n(" Tab 1 "),on=n(" Disabled options only make sense if you do NOT supply isDisabled (as that disabled all the tab buttons), and you wish to selectively disable certain buttons. Here we've disabled the second and fourth tabs. Keyboard navigation skips the disabled tabs. "),en=n(" Tab 2 "),cn=n(" Panel 2 "),ln=n(" Tab 3 "),un=n(" Panel 3 "),kn=n(" Tab 4 "),rn=n(" Panel 4 "),gn=n(" Tab 5 "),mn=n(" Panel 5 "),bn=a("h2",null,"Custom",-1),dn={class:"mbs12 mbe16"},hn=a("p",{class:"mbe12"}," Custom tabs using an AgnosticUI button requires two things: ",-1),qn=a("ul",{class:"mbe24"},[a("li",null,[n("You need to use the "),a("code",null,'tabType="custom"'),n(" prop on the tab")]),a("li",null,[n("You need to use the "),a("code",null,'type="faux"'),n(" prop on the button. This is required because the tabs are already buttons so you'd have a nested button a11y violation otherwise.")])],-1),vn=n(" Tab One "),Tn=a("p",null,"Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),yn=a("p",null,[n(" Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the next tab you use the arrow key and enter|space to select. This is consistent with wai-aria practices "),a("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html"}," aria manual activation example"),n(". ")],-1),_n=a("p",null,[n("Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),wn=n(" Tab Two "),fn=n(" Tab 2 content (no padding or margins so consumer can control desired gutters) ");function xn(i,k,r,In,g,Vn){const p=e("Tabs"),o=e("Button");return c(),l(f,null,[B,a("div",P,[t(p,null,{"tab-1":s(()=>[A]),"panel-1":s(()=>[j,I,V]),"tab-2":s(()=>[C]),"panel-2":s(()=>[N]),"tab-foo":s(()=>[S]),"panel-foo":s(()=>[U]),"tab-bar":s(()=>[R]),"panel-bar":s(()=>[D]),_:1})]),a("div",O,[t(p,{size:"large"},{"tab-11":s(()=>[$]),"panel-11":s(()=>[Y]),"tab-12":s(()=>[E]),"panel-12":s(()=>[z]),_:1})]),M,a("div",J,[t(p,{"is-vertical":""},{"tab-13":s(()=>[F]),"panel-13":s(()=>[H,G]),"tab-14":s(()=>[K]),"panel-14":s(()=>[L]),_:1})]),X,a("div",Q,[t(p,{"is-disabled":""},{"tab-15":s(()=>[W]),"panel-15":s(()=>[Z]),"tab-16":s(()=>[nn]),"panel-16":s(()=>[an]),_:1})]),sn,a("div",tn,[t(p,{"disabled-options":g.disabledOptions},{"tab-17":s(()=>[pn]),"panel-17":s(()=>[on]),"tab-18":s(()=>[en]),"panel-18":s(()=>[cn]),"tab-19":s(()=>[ln]),"panel-19":s(()=>[un]),"tab-20":s(()=>[kn]),"panel-20":s(()=>[rn]),"tab-21":s(()=>[gn]),"panel-21":s(()=>[mn]),_:1},8,["disabled-options"])]),bn,a("div",dn,[a("div",null,[hn,qn,t(p,{"tab-type":"custom"},{"tab-22":s(()=>[t(o,{type:"faux",mode:"primary","is-bordered":""},{default:s(()=>[vn]),_:1})]),"panel-22":s(()=>[Tn,yn,_n]),"tab-23":s(()=>[t(o,{type:"faux",mode:"primary","is-bordered":""},{default:s(()=>[wn]),_:1})]),"panel-23":s(()=>[fn]),_:1})])])],64)}var Bn=w(x,[["render",xn]]);const Pn=u("",5),An=u("",29),$n='{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/tabs.md","lastUpdated":1649643282613}',jn={},Yn=Object.assign(jn,{setup(i){return(k,r)=>(c(),l("div",null,[Pn,t(Bn),An]))}});export{$n as __pageData,Yn as default};
