import{_ as h,W as m,U as y,X as i,u as e,o,c as a,a as c,Y as F,Z as r,V as l,G as g,$ as x,F as I,a0 as L,r as A,e as d,a1 as k}from"./app.37e62773.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],V={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},b=m({setup(v){const{site:s,frontmatter:t}=y(),_=i(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),p=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(_)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):r("",!0),e(p)?(o(),a("h1",V,l(e(p)),1)):r("",!0),e(f)?(o(),a("p",w,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var D=h(b,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},E={class:"wrapper"},G={class:"container"},U={class:"features"},W={key:0,class:"title"},X={key:1,class:"details"},Y=m({setup(v){const{frontmatter:s}=y(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(p,f)=>e(t)?(o(),a("div",S,[c("div",E,[c("div",G,[c("div",U,[(o(!0),a(I,null,L(e(_),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",W,l(n.title),1)):r("",!0),n.details?(o(),a("p",X,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var Z=h(Y,[["__scopeId","data-v-e39c13e0"]]);const j={key:0,class:"footer"},q={class:"container"},z={class:"text"},J=m({setup(v){const{frontmatter:s}=y();return(t,_)=>e(s).footer?(o(),a("footer",j,[c("div",q,[c("p",z,l(e(s).footer),1)])])):r("",!0)}});var K=h(J,[["__scopeId","data-v-30918238"]]);const M={class:"home","aria-labelledby":"main-title"},O={class:"home-content"},P=m({setup(v){return(s,t)=>{const _=A("Content");return o(),a("main",M,[d(D),k(s.$slots,"hero",{},void 0,!0),d(Z),c("div",O,[d(_)]),k(s.$slots,"features",{},void 0,!0),d(K),k(s.$slots,"footer",{},void 0,!0)])}}});var R=h(P,[["__scopeId","data-v-10122c92"]]);export{R as default};
