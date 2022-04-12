import{_ as f}from"./astro-logo-light.3adaa5e5.js";import{g as b,t as h,v as x,A as w,_,a as I}from"./agnostic-vue.esm.5530bcea.js";import{_ as O,a as C,b as A,c as S}from"./Angular-icon.86c96dc8.js";import"./common.min.821ee339.js";import{T as E}from"./ToastIconExample.165f09a4.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import{r,z as l,o as d,c as v,l as a,B as s,a0 as q,F as P,b as u,f as p,u as z,Y as g}from"./framework.3f76b01e.js";import"./framework.79deab6d.js";const N={name:"CloseExamples",components:{Close:b,Toasts:h,Toast:x,ToastIconExample:E},setup(){const c=r(!0);setTimeout(()=>{c.value=!1},1e4);const t=r(!0),k=()=>{t.value=!1},n=r(!0);return{timedToast:c,toast1IsOpen:t,toast2IsOpen:n,close1Toast:k,close2Toast:()=>{n.value=!1}}}},V=u(" Self timed toast that will close in 10 seconds. "),U=p("div",{className:"mbe14"},null,-1),B=p("div",{class:"flex-fill"}," Self timed toast that will close in 10 seconds. ",-1),M=u(" Error toast with \xA0"),R=p("code",null,"aria-live",-1),D=u("\xA0 \u201Cassertive\u201D (10 seconds) "),Y=p("div",{class:"flex-fill"}," This is a closable toast message ",-1),$=p("div",{className:"mbe14"},null,-1),G=p("div",{class:"flex-fill"}," This is a closable toast message ",-1);function L(c,t,k,n,y,X){const o=l("ToastIconExample"),e=l("Toast"),i=l("Toasts"),m=l("Close");return d(),v(P,null,[a(i,{"vertical-position":"top","horizontal-position":"end"},{default:s(()=>[a(e,{"is-open":n.timedToast,type:"info"},{default:s(()=>[a(o,{"icon-type":"info","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),V]),_:1},8,["is-open"]),U,a(e,{"is-open":n.timedToast,type:"success"},{default:s(()=>[a(o,{"icon-type":"success","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),B]),_:1},8,["is-open"])]),_:1}),a(i,{"vertical-position":"top","horizontal-position":"center"},{default:s(()=>[a(e,{"is-open":n.timedToast,type:"error"},{default:s(()=>[a(o,{"icon-type":"error","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),M,R,D]),_:1},8,["is-open"])]),_:1}),a(i,{"vertical-position":"bottom","horizontal-position":"end"},{default:s(()=>[a(e,{"is-open":n.toast1IsOpen,type:"dark"},{default:s(()=>[a(o,{"icon-type":"dark","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),Y,a(m,{onClick:t[0]||(t[0]=T=>n.close1Toast()),style:q({color:"var(--agnostic-light)"})},null,8,["style"])]),_:1},8,["is-open"]),$,a(e,{"is-open":n.toast2IsOpen,type:"warning"},{default:s(()=>[a(o,{"icon-type":"warning","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),G,a(m,{onClick:t[1]||(t[1]=T=>n.close2Toast()),style:q({color:"var(--agnostic-warning-dark)"})},null,8,["style"])]),_:1},8,["is-open"])]),_:1})],64)}var F=j(N,[["render",L]]);const W=g("",5),H=g("",17),K=u("The Angular Toast component is still in development"),J=g("",6),ca='{"title":"Toast","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/toasts.md","lastUpdated":1649280117184}',Q={},la=Object.assign(Q,{setup(c){return(t,k)=>(d(),v("div",null,[W,a(F),H,a(z(w),{type:"error"},{default:s(()=>[K]),_:1}),J]))}});export{ca as __pageData,la as default};