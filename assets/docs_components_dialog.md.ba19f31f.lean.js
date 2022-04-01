import{_ as m,a as q,b as v,c as b}from"./Angular-icon.63775078.js";import{_ as h,h as y,D as f,I as w,r as c,o as k,c as r,e as s,w as t,a as n,b as a,u as _,A as x,d as l}from"./app.eae8984b.js";import"./index.56618267.js";const B={name:"DialogExamples",components:{Button:y,Dialog:f,Input:w},setup(){let p=null;return{openDialog:()=>{p&&p.show()},assignDialogRef:o=>{p=o}}}},D=n("h3",null,"Dialog",-1),A=n("p",{class:"mbe24"},[a(" The following button opens the dialog because we've obtained a dialog "),n("code",null,"instance"),a(" handle via the "),n("code",null,'@instance="assignDialogRef"'),a(" event hook. This is Vue syntax but the other framework implementations emit the "),n("code",null,"instance"),a(" event similarly: ")],-1),I=a(" Open dialog via dialogRef "),R=n("p",{class:"mbs24 mbe16"},[a(" The following also opens because a11y-dialog will bind to element with "),n("code",null,"data-a11y-dialog-show"),a(" attribute: ")],-1),T=n("button",null,null,-1),C=a(" Open the dialog via data attribute "),S=a(" My Dialog "),U=n("p",{class:"mbs16 mbe16"}," Fill in the form below to receive our newsletter! ",-1),N={class:"dialog-form-demo"},E=n("div",{class:"mbe16"},null,-1),M=a(" Sign Up ");function P(p,u,i,o,$,G){const e=c("Button"),g=c("Input"),d=c("Dialog");return k(),r("section",null,[D,A,s(e,{mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0,type:"button",onClick:o.openDialog},{default:t(()=>[I]),_:1},8,["onClick"]),R,T,s(e,{type:"button","data-a11y-dialog-show":"a11y-dialog",mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0},{default:t(()=>[C]),_:1}),s(d,{id:"a11y-dialog","dialog-root":"body","is-animation-fade-in":!0,"is-animation-slide-up":!0,role:"dialog","class-names":{title:"h4 mbe18 flex justify-center"},onInstance:o.assignDialogRef},{title:t(()=>[S]),default:t(()=>[U,n("form",N,[s(g,{"is-rounded":!0,label:"Email (required)",type:"email",name:"EMAIL",id:"email",placeholder:"email@example.com",required:""}),E,s(e,{type:"submit",mode:"primary","is-rounded":!0,"is-block":!0},{default:t(()=>[M]),_:1})])]),_:1},8,["onInstance"])])}var j=h(B,[["render",P]]);const L=l("",5),V=l("",10),O=a("Note: Vue 2 is not supported"),F=l("",26),J='{"title":"Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/dialog.md","lastUpdated":1648766934340}',Y={},Q=Object.assign(Y,{setup(p){return(u,i)=>(k(),r("div",null,[L,s(j),V,s(_(x),{type:"warning"},{default:t(()=>[O]),_:1}),F]))}});export{J as __pageData,Q as default};
