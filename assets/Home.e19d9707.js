import{_ as d,x as v,u as k,y as _,v as e,o,c as a,a as c,z as F,E as n,t as l,n as x,N as g,F as I,G as L,r as A,d as h,J as y}from"./app.9359d870.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],w={key:1,id:"main-title",class:"title"},V={key:2,class:"tagline"},b=v({setup(m){const{site:s,frontmatter:t}=k(),i=_(()=>{const{heroImage:r,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return r||u||$||H&&T}),p=_(()=>t.value.heroText||s.value.title),f=_(()=>t.value.tagline||s.value.description);return(r,u)=>e(i)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):n("v-if",!0),e(p)?(o(),a("h1",w,l(e(p)),1)):n("v-if",!0),e(f)?(o(),a("p",V,l(e(f)),1)):n("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):n("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});var D=d(b,[["__scopeId","data-v-370f18c0"]]);const E={key:0,class:"home-features"},S={class:"wrapper"},j={class:"container"},z={class:"features"},G={key:0,class:"title"},J={key:1,class:"details"},q=v({setup(m){const{frontmatter:s}=k(),t=_(()=>s.value.features&&s.value.features.length>0),i=_(()=>s.value.features?s.value.features:[]);return(p,f)=>e(t)?(o(),a("div",E,[c("div",S,[c("div",j,[c("div",z,[(o(!0),a(I,null,L(e(i),(r,u)=>(o(),a("section",{key:u,class:"feature"},[r.title?(o(),a("h2",G,l(r.title),1)):n("v-if",!0),r.details?(o(),a("p",J,l(r.details),1)):n("v-if",!0)]))),128))])])])])):n("v-if",!0)}});var K=d(q,[["__scopeId","data-v-e39c13e0"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=v({setup(m){const{frontmatter:s}=k();return(t,i)=>e(s).footer?(o(),a("footer",M,[c("div",O,[c("p",P,l(e(s).footer),1)])])):n("v-if",!0)}});var R=d(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=v({setup(m){return(s,t)=>{const i=A("Content");return o(),a("main",U,[h(D),y(s.$slots,"hero",{},void 0,!0),h(K),c("div",W,[h(i)]),y(s.$slots,"features",{},void 0,!0),h(R),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-10122c92"]]);export{Z as default};
