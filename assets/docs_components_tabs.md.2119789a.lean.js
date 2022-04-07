import{_ as m,a as d,b}from"./stackblitz.47d6b85c.js";import{_ as h,a as q,b as v,c as T}from"./Angular-icon.86c96dc8.js";import"./common.min.821ee339.js";import"./index.56618267.js";import{_,h as y,N as w,r as e,o as c,c as l,a,e as t,w as s,F as f,b as n,d as u}from"./app.061b21d2.js";const x={name:"TabExamples",components:{Button:y,Tabs:w},data(){return{disabledOptions:["tab-18","tab-20"]}}},P=a("h2",null,"Tabs",-1),B={class:"mbs24 mbe16"},j=n(" Tab 1 "),A=a("p",null,"Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),I=a("p",null,[n(" Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the next tab you use the arrow key and enter|space to select. This is consistent with wai-aria practices "),a("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html"}," aria manual activation example"),n(". ")],-1),V=a("p",null,[n("Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),C=n(" Tab 2 "),N=a("p",null,[n("Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),S=n(" Tab Foo "),R=n(" Panel Foo content (no padding or margins so consumer can control desired gutters) "),U=n(" Tab Bar "),D=n(" Panel Bar "),O={class:"mbs32 mbe16"},$=n(" Tab 1 "),E=n(" Panel 1 "),Y=n(" Tab 2 "),M=n(" Panel 2 "),z=a("h2",null,"Vertical Tabs",-1),J={class:"mbs48 mbe16"},F=n(" Tab 1 "),H=a("p",null,"Vertical tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),K=a("p",null,[n("Now you'll use the up and down arrows. Home and end still work the same. Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),L=n(" Tab 2 "),G=n(" Vertical tab 2 content (no padding or margins so consumer can control desired gutters) "),X=a("h2",null,"Disabled Tabs",-1),Q={class:"mbs48 mbe16"},W=n(" Tab 1 "),Z=n(" Panel 1 "),nn=n(" Tab 1 "),an=n(" Panel 2 "),sn=a("h2",null,"Disabled Options",-1),tn={class:"mbs12 mbe16"},pn=n(" Tab 1 "),on=n(" Disabled options only make sense if you do NOT supply isDisabled (as that disabled all the tab buttons), and you wish to selectively disable certain buttons. Here we've disabled the second and fourth tabs. Keyboard navigation skips the disabled tabs. "),en=n(" Tab 2 "),cn=n(" Panel 2 "),ln=n(" Tab 3 "),un=n(" Panel 3 "),kn=n(" Tab 4 "),rn=n(" Panel 4 "),gn=n(" Tab 5 "),mn=n(" Panel 5 "),dn=a("h2",null,"Custom",-1),bn={class:"mbs12 mbe16"},hn=a("p",{class:"mbe12"}," Custom tabs using an AgnosticUI button requires two things: ",-1),qn=a("ul",{class:"mbe24"},[a("li",null,[n("You need to use the "),a("code",null,'tabType="custom"'),n(" prop on the tab")]),a("li",null,[n("You need to use the "),a("code",null,'type="faux"'),n(" prop on the button. This is required because the tabs are already buttons so you'd have a nested button a11y violation otherwise.")])],-1),vn=n(" Tab One "),Tn=a("p",null,"Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),_n=a("p",null,[n(" Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the next tab you use the arrow key and enter|space to select. This is consistent with wai-aria practices "),a("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html"}," aria manual activation example"),n(". ")],-1),yn=a("p",null,[n("Random "),a("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),a("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),wn=n(" Tab Two "),fn=n(" Tab 2 content (no padding or margins so consumer can control desired gutters) ");function xn(i,k,r,In,g,Vn){const p=e("Tabs"),o=e("Button");return c(),l(f,null,[P,a("div",B,[t(p,null,{"tab-1":s(()=>[j]),"panel-1":s(()=>[A,I,V]),"tab-2":s(()=>[C]),"panel-2":s(()=>[N]),"tab-foo":s(()=>[S]),"panel-foo":s(()=>[R]),"tab-bar":s(()=>[U]),"panel-bar":s(()=>[D]),_:1})]),a("div",O,[t(p,{size:"large"},{"tab-11":s(()=>[$]),"panel-11":s(()=>[E]),"tab-12":s(()=>[Y]),"panel-12":s(()=>[M]),_:1})]),z,a("div",J,[t(p,{"is-vertical":""},{"tab-13":s(()=>[F]),"panel-13":s(()=>[H,K]),"tab-14":s(()=>[L]),"panel-14":s(()=>[G]),_:1})]),X,a("div",Q,[t(p,{"is-disabled":""},{"tab-15":s(()=>[W]),"panel-15":s(()=>[Z]),"tab-16":s(()=>[nn]),"panel-16":s(()=>[an]),_:1})]),sn,a("div",tn,[t(p,{"disabled-options":g.disabledOptions},{"tab-17":s(()=>[pn]),"panel-17":s(()=>[on]),"tab-18":s(()=>[en]),"panel-18":s(()=>[cn]),"tab-19":s(()=>[ln]),"panel-19":s(()=>[un]),"tab-20":s(()=>[kn]),"panel-20":s(()=>[rn]),"tab-21":s(()=>[gn]),"panel-21":s(()=>[mn]),_:1},8,["disabled-options"])]),dn,a("div",bn,[a("div",null,[hn,qn,t(p,{"tab-type":"custom"},{"tab-22":s(()=>[t(o,{type:"faux",mode:"primary","is-bordered":""},{default:s(()=>[vn]),_:1})]),"panel-22":s(()=>[Tn,_n,yn]),"tab-23":s(()=>[t(o,{type:"faux",mode:"primary","is-bordered":""},{default:s(()=>[wn]),_:1})]),"panel-23":s(()=>[fn]),_:1})])])],64)}var Pn=_(x,[["render",xn]]);const Bn=u("",5),jn=u("",29),Dn='{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/tabs.md","lastUpdated":1649328916161}',An={},On=Object.assign(An,{setup(i){return(k,r)=>(c(),l("div",null,[Bn,t(Pn),jn]))}});export{Dn as __pageData,On as default};
