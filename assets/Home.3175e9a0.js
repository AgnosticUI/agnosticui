import{_ as d,J as v,z as k,K as _,G as e,o,c as a,a as c,L,M as r,E as l,s as g,N as x,F,O as I,r as A,e as h,Q as y}from"./app.219bba2d.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],b={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=v({setup(m){const{site:s,frontmatter:t}=k(),i=_(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),p=_(()=>t.value.heroText||s.value.title),f=_(()=>t.value.tagline||s.value.description);return(n,u)=>e(i)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[c("img",{class:"image",src:e(L)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):r("v-if",!0),e(p)?(o(),a("h1",b,l(e(p)),1)):r("v-if",!0),e(f)?(o(),a("p",w,l(e(f)),1)):r("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var D=d(V,[["__scopeId","data-v-370f18c0"]]);const E={key:0,class:"home-features"},S={class:"wrapper"},j={class:"container"},z={class:"features"},G={key:0,class:"title"},J={key:1,class:"details"},K=v({setup(m){const{frontmatter:s}=k(),t=_(()=>s.value.features&&s.value.features.length>0),i=_(()=>s.value.features?s.value.features:[]);return(p,f)=>e(t)?(o(),a("div",E,[c("div",S,[c("div",j,[c("div",z,[(o(!0),a(F,null,I(e(i),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",G,l(n.title),1)):r("v-if",!0),n.details?(o(),a("p",J,l(n.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var M=d(K,[["__scopeId","data-v-e39c13e0"]]);const O={key:0,class:"footer"},Q={class:"container"},q={class:"text"},P=v({setup(m){const{frontmatter:s}=k();return(t,i)=>e(s).footer?(o(),a("footer",O,[c("div",Q,[c("p",q,l(e(s).footer),1)])])):r("v-if",!0)}});var R=d(P,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=v({setup(m){return(s,t)=>{const i=A("Content");return o(),a("main",U,[h(D),y(s.$slots,"hero",{},void 0,!0),h(M),c("div",W,[h(i)]),y(s.$slots,"features",{},void 0,!0),h(R),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-10122c92"]]);export{Z as default};
