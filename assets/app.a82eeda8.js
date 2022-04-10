var Ce=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var te=(e,t,n)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&te(e,n,t[n]);if(ee)for(var n of ee(t))Be.call(t,n)&&te(e,n,t[n]);return e};import{c as Ie}from"./framework.79deab6d.js";import{u as x,w as R,a as C,E as Te,i as P,p as ue,c as Ne,R as He,b as Re,d as De,C as Ue,s as Me}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.8212d7e2.js";import{w as Fe,d as b,o as l,c as p,u as r,a as m,b as G,t as S,e as v,f as _,g as de,h as L,m as _e,p as pe,i as ve,r as F,j as O,n as D,F as q,k as X,l as f,q as g,s as T,v as Oe,x as he,y as I,z as V,A as qe,B as E}from"./framework.3f76b01e.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";function ze(e,t){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const i=[],u=Math.min(n.length,a.length);for(let d=0;d<u;d++){let c=n[d];const[$,y,A=""]=a[d];if(c.tagName.toLocaleLowerCase()===$){for(const w in y)c.getAttribute(w)!==y[w]&&c.setAttribute(w,y[w]);for(let w=0;w<c.attributes.length;w++){const B=c.attributes[w].name;B in y||c.removeAttribute(B)}c.innerHTML!==A&&(c.innerHTML=A)}else document.head.removeChild(c),c=se(a[d]),document.head.append(c);i.push(c)}n.slice(u).forEach(d=>document.head.removeChild(d)),a.slice(u).forEach(d=>{const c=se(d);document.head.appendChild(c),i.push(c)}),n=i};Fe(()=>{const a=e.data,i=t.value,u=a&&a.title,d=a&&a.description,c=a&&a.frontmatter.head;document.title=(u?u+" | ":"")+i.title,document.querySelector("meta[name=description]").setAttribute("content",d||i.description),o([...c?Ve(c):[]])})}function se([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function je(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Ve(e){return e.filter(t=>!je(t))}const We=/#.*$/,Ge=/(index)?\.(md|html)$/,U=/\/$/,Xe=/^[a-z]+:/i;function Y(e){return Array.isArray(e)}function J(e){return Xe.test(e)}function Ye(e,t){if(t===void 0)return!1;const n=oe(`/${e.data.relativePath}`),s=oe(t);return n===s}function oe(e){return decodeURI(e).replace(We,"").replace(Ge,"")}function Je(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function W(e){return/^\//.test(e)?e:`/${e}`}function fe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function Ke(e){return e===!1||e==="auto"||Y(e)}function Qe(e){return e.children!==void 0}function Ze(e){return Y(e)?e.length===0:!e}function K(e,t){if(Ke(e))return e;t=W(t);for(const n in e)if(t.startsWith(W(n)))return e[n];return"auto"}function me(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:fe(n.link)}),Qe(n)&&(t=[...t,...me(n.children)]),t),[])}const et=["href","aria-label"],tt=["src"],nt=b({setup(e){const{site:t,theme:n,localePath:s}=x();return(o,a)=>(l(),p("a",{class:"nav-bar-title",href:r(s),"aria-label":`${r(t).title}, back to home`},[r(n).logo?(l(),p("img",{key:0,class:"logo",src:r(R)(r(n).logo),alt:"Logo"},null,8,tt)):m("",!0),G(" "+S(r(t).title),1)],8,et))}});var st=k(nt,[["__scopeId","data-v-4a583abe"]]);function ot(){const{site:e,localePath:t,theme:n}=x();return v(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const i=C().path.replace(t.value,""),u=o.map(c=>({text:s[c].label,link:`${c}${i}`}));return{text:n.value.selectText||"Languages",items:u}})}const at=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function rt(){const{site:e}=x();return v(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=it(n);return{text:ct(s,t.repoLabel),link:s}})}function it(e){return Te.test(e)?e:`https://github.com/${e}`}function ct(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=at.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function ge(e){const t=C(),n=J(e.value.link);return{props:v(()=>{const o=ae(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(o);else{const i=ae(e.value.link);a=i==="/"?i===o:o.startsWith(i)}return{class:{active:a,isExternal:n},href:n?e.value.link:R(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function ae(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const lt={},ut={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},dt=_("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),_t=_("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),pt=[dt,_t];function vt(e,t){return l(),p("svg",ut,pt)}var Q=k(lt,[["render",vt]]);const ht={class:"nav-link"},ft=b({props:{item:null},setup(e){const n=de(e),{props:s,isExternal:o}=ge(n.item);return(a,i)=>(l(),p("div",ht,[_("a",_e({class:"item"},r(s)),[G(S(e.item.text)+" ",1),r(o)?(l(),L(Q,{key:0})):m("",!0)],16)]))}});var re=k(ft,[["__scopeId","data-v-b8818f8c"]]);const mt=e=>(pe("data-v-bbc27490"),e=e(),ve(),e),gt={class:"nav-dropdown-link-item"},bt=mt(()=>_("span",{class:"arrow"},null,-1)),kt={class:"text"},$t={class:"icon"},yt=b({props:{item:null},setup(e){const n=de(e),{props:s,isExternal:o}=ge(n.item);return(a,i)=>(l(),p("div",gt,[_("a",_e({class:"item"},r(s)),[bt,_("span",kt,S(e.item.text),1),_("span",$t,[r(o)?(l(),L(Q,{key:0})):m("",!0)])],16)]))}});var xt=k(yt,[["__scopeId","data-v-bbc27490"]]);const Lt=["aria-label"],wt={class:"button-text"},St={class:"dialog"},At=b({props:{item:null},setup(e){const t=C(),n=F(!1);O(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(l(),p("div",{class:D(["nav-dropdown-link",{open:n.value}])},[_("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[_("span",wt,S(e.item.text),1),_("span",{class:D(["button-arrow",n.value?"down":"right"])},null,2)],8,Lt),_("ul",St,[(l(!0),p(q,null,X(e.item.items,i=>(l(),p("li",{key:i.text,class:"dialog-item"},[f(xt,{item:i},null,8,["item"])]))),128))])],2))}});var ie=k(At,[["__scopeId","data-v-56bf3a3f"]]);const Et={key:0,class:"nav-links"},Ct={key:1,class:"item"},Pt={key:2,class:"item"},Bt=b({setup(e){const{theme:t}=x(),n=ot(),s=rt(),o=v(()=>t.value.nav||s.value||n.value);return(a,i)=>r(o)?(l(),p("nav",Et,[r(t).nav?(l(!0),p(q,{key:0},X(r(t).nav,u=>(l(),p("div",{key:u.text,class:"item"},[u.items?(l(),L(ie,{key:0,item:u},null,8,["item"])):(l(),L(re,{key:1,item:u},null,8,["item"]))]))),128)):m("",!0),r(n)?(l(),p("div",Ct,[f(ie,{item:r(n)},null,8,["item"])])):m("",!0),r(s)?(l(),p("div",Pt,[f(re,{item:r(s)},null,8,["item"])])):m("",!0)])):m("",!0)}});var be=k(Bt,[["__scopeId","data-v-eab3edfe"]]);const It={emits:["toggle"]},Tt=_("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[_("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Nt=[Tt];function Ht(e,t,n,s,o,a){return l(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},Nt)}var Rt=k(It,[["render",Ht]]);const Dt=e=>(pe("data-v-675d8756"),e=e(),ve(),e),Ut={class:"nav-bar"},Mt=Dt(()=>_("div",{class:"flex-grow"},null,-1)),Ft={class:"nav"},Ot=b({emits:["toggle"],setup(e){return(t,n)=>(l(),p("header",Ut,[f(Rt,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),f(st),Mt,_("div",Ft,[f(be)]),g(t.$slots,"search",{},void 0,!0)]))}});var qt=k(Ot,[["__scopeId","data-v-675d8756"]]);function zt(){let e=null,t=null;const n=Xt(s,300);function s(){const i=jt(),u=Vt(i);for(let d=0;d<u.length;d++){const c=u[d],$=u[d+1],[y,A]=Gt(d,c,$);if(y){history.replaceState(null,document.title,A||" "),o(A);return}}}function o(i){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${i}"]`),!t)return;t.classList.add("active");const u=t.closest(".sidebar-links > ul > li");u&&u!==t.parentElement?(e=u.querySelector("a"),e&&e.classList.add("active")):e=null}function a(i){i&&i.classList.remove("active")}T(()=>{s(),window.addEventListener("scroll",n)}),Oe(()=>{o(decodeURIComponent(location.hash))}),he(()=>{window.removeEventListener("scroll",n)})}function jt(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Vt(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Wt(){return document.querySelector(".nav-bar").offsetHeight}function ce(e){const t=Wt();return e.parentElement.offsetTop-t-15}function Gt(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<ce(t)?[!1,null]:!n||s<ce(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Xt(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function Yt(){const e=C(),{site:t}=x();return zt(),v(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return le(n,o);const a=K(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?le(n,o):a})}function le(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:a,slug:i})=>{if(o-1>t)return;const u={text:a,link:`#${i}`};o===2?(s=u,n.push(u)):s&&(s.children||(s.children=[])).push(u)}),n}const ke=e=>{const t=C(),{site:n,frontmatter:s}=x(),o=e.depth||1,a=s.value.sidebarDepth||1/0,i=t.data.headers,u=e.item.text,d=Jt(n.value.base,e.item.link),c=e.item.children,$=Ye(t,e.item.link),y=o<a?$e($,c,i,o+1):null;return I("li",{class:"sidebar-link"},[I(d?"a":"p",{class:{"sidebar-link-item":!0,active:$},href:d},u),y])};function Jt(e,t){return t===void 0||t.startsWith("#")?t:Je(e,t)}function $e(e,t,n,s=1){return t&&t.length>0?I("ul",{class:"sidebar-links"},t.map(o=>I(ke,{item:o,depth:s}))):e&&n?$e(!1,Kt(n),void 0,s):null}function Kt(e){return ye(Qt(e))}function Qt(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function ye(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?ye(t.children):void 0}))}const Zt={key:0,class:"sidebar-links"},en=b({setup(e){const t=Yt();return(n,s)=>r(t).length>0?(l(),p("ul",Zt,[(l(!0),p(q,null,X(r(t),o=>(l(),L(r(ke),{item:o},null,8,["item"]))),256))])):m("",!0)}});const tn=b({props:{open:{type:Boolean}},setup(e){return(t,n)=>(l(),p("aside",{class:D(["sidebar",{open:e.open}])},[f(be,{class:"nav"}),g(t.$slots,"sidebar-top",{},void 0,!0),f(en),g(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var nn=k(tn,[["__scopeId","data-v-83e92a68"]]);const sn=/bitbucket.org/;function on(){const{page:e,theme:t,frontmatter:n}=x(),s=v(()=>{const{repo:a,docsDir:i="",docsBranch:u="master",docsRepo:d=a,editLinks:c}=t.value,$=n.value.editLink!=null?n.value.editLink:c,{relativePath:y}=e.value;return!$||!y||!a?null:an(a,d,i,u,y)}),o=v(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function an(e,t,n,s,o){return sn.test(e)?cn(e,t,n,s,o):rn(e,t,n,s,o)}function rn(e,t,n,s,o){return(J(t)?t:`https://github.com/${t}`).replace(U,"")+`/edit/${s}/`+(n?n.replace(U,"")+"/":"")+o}function cn(e,t,n,s,o){return(J(t)?t:e).replace(U,"")+`/src/${s}/`+(n?n.replace(U,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const ln={class:"edit-link"},un=["href"],dn=b({setup(e){const{url:t,text:n}=on();return(s,o)=>(l(),p("div",ln,[r(t)?(l(),p("a",{key:0,class:"link",href:r(t),target:"_blank",rel:"noopener noreferrer"},[G(S(r(n))+" ",1),f(Q,{class:"icon"})],8,un)):m("",!0)]))}});var _n=k(dn,[["__scopeId","data-v-1ed99556"]]);const pn={key:0,class:"last-updated"},vn={class:"prefix"},hn={class:"datetime"},fn=b({setup(e){const{theme:t,page:n}=x(),s=v(()=>{const i=t.value.lastUpdated;return i!==void 0&&i!==!1}),o=v(()=>{const i=t.value.lastUpdated;return i===!0?"Last Updated":i}),a=F("");return T(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(i,u)=>r(s)?(l(),p("p",pn,[_("span",vn,S(r(o))+":",1),_("span",hn,S(a.value),1)])):m("",!0)}});var mn=k(fn,[["__scopeId","data-v-5797b537"]]);const gn={class:"page-footer"},bn={class:"edit"},kn={class:"updated"},$n=b({setup(e){return(t,n)=>(l(),p("footer",gn,[_("div",bn,[f(_n)]),_("div",kn,[f(mn)])]))}});var yn=k($n,[["__scopeId","data-v-fb8d84c6"]]);function xn(){const{page:e,theme:t}=x(),n=v(()=>fe(W(e.value.relativePath))),s=v(()=>{const d=K(t.value.sidebar,n.value);return Y(d)?me(d):[]}),o=v(()=>s.value.findIndex(d=>d.link===n.value)),a=v(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),i=v(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),u=v(()=>!!a.value||!!i.value);return{next:a,prev:i,hasLinks:u}}const Ln={},wn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Sn=_("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),An=[Sn];function En(e,t){return l(),p("svg",wn,An)}var Cn=k(Ln,[["render",En]]);const Pn={},Bn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},In=_("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Tn=[In];function Nn(e,t){return l(),p("svg",Bn,Tn)}var Hn=k(Pn,[["render",Nn]]);const Rn={key:0,class:"next-and-prev-link"},Dn={class:"container"},Un={class:"prev"},Mn=["href"],Fn={class:"text"},On={class:"next"},qn=["href"],zn={class:"text"},jn=b({setup(e){const{hasLinks:t,prev:n,next:s}=xn();return(o,a)=>r(t)?(l(),p("div",Rn,[_("div",Dn,[_("div",Un,[r(n)?(l(),p("a",{key:0,class:"link",href:r(R)(r(n).link)},[f(Cn,{class:"icon icon-prev"}),_("span",Fn,S(r(n).text),1)],8,Mn)):m("",!0)]),_("div",On,[r(s)?(l(),p("a",{key:0,class:"link",href:r(R)(r(s).link)},[_("span",zn,S(r(s).text),1),f(Hn,{class:"icon icon-next"})],8,qn)):m("",!0)])])])):m("",!0)}});var Vn=k(jn,[["__scopeId","data-v-38ede35f"]]);const Wn={class:"page"},Gn={class:"container"},Xn=b({setup(e){return(t,n)=>{const s=V("Content");return l(),p("main",Wn,[_("div",Gn,[g(t.$slots,"top",{},void 0,!0),f(s,{class:"content"}),f(yn),f(Vn),g(t.$slots,"bottom",{},void 0,!0)])])}}});var Yn=k(Xn,[["__scopeId","data-v-7eddb2c4"]]);const Jn={key:0,id:"ads-container"},Kn=b({setup(e){const t=qe(()=>import("./Home.ef30177b.js")),n=()=>null,s=n,o=n,a=n,i=C(),{site:u,page:d,theme:c,frontmatter:$}=x(),y=v(()=>!!$.value.customLayout),A=v(()=>!!$.value.home),w=v(()=>Object.keys(u.value.langs).length>1),B=v(()=>{const h=c.value;return $.value.navbar===!1||h.navbar===!1?!1:u.value.title||h.logo||h.repo||h.nav}),N=F(!1),Le=v(()=>$.value.home||$.value.sidebar===!1?!1:!Ze(K(c.value.sidebar,i.data.relativePath))),z=h=>{N.value=typeof h=="boolean"?h:!N.value},we=z.bind(null,!1);O(i,we);const Se=v(()=>[{"no-navbar":!B.value,"sidebar-open":N.value,"no-sidebar":!Le.value}]);return(h,Z)=>{const Ae=V("Content"),Ee=V("Debug");return l(),p(q,null,[_("div",{class:D(["theme",r(Se)])},[r(B)?(l(),L(qt,{key:0,onToggle:z},{search:E(()=>[g(h.$slots,"navbar-search",{},()=>[r(c).algolia?(l(),L(r(a),{key:0,options:r(c).algolia,multilang:r(w)},null,8,["options","multilang"])):m("",!0)])]),_:3})):m("",!0),f(nn,{open:N.value},{"sidebar-top":E(()=>[g(h.$slots,"sidebar-top")]),"sidebar-bottom":E(()=>[g(h.$slots,"sidebar-bottom")]),_:3},8,["open"]),_("div",{class:"sidebar-mask",onClick:Z[0]||(Z[0]=ps=>z(!1))}),r(y)?(l(),L(Ae,{key:1})):r(A)?g(h.$slots,"home",{key:2},()=>[f(r(t),null,{hero:E(()=>[g(h.$slots,"home-hero")]),features:E(()=>[g(h.$slots,"home-features")]),footer:E(()=>[g(h.$slots,"home-footer")]),_:3})]):(l(),L(Yn,{key:3},{top:E(()=>[g(h.$slots,"page-top-ads",{},()=>[r(c).carbonAds&&r(c).carbonAds.carbon?(l(),p("div",Jn,[(l(),L(r(s),{key:"carbon"+r(d).relativePath,code:r(c).carbonAds.carbon,placement:r(c).carbonAds.placement},null,8,["code","placement"]))])):m("",!0)]),g(h.$slots,"page-top")]),bottom:E(()=>[g(h.$slots,"page-bottom"),g(h.$slots,"page-bottom-ads",{},()=>[r(c).carbonAds&&r(c).carbonAds.custom?(l(),L(r(o),{key:"custom"+r(d).relativePath,code:r(c).carbonAds.custom,placement:r(c).carbonAds.placement},null,8,["code","placement"])):m("",!0)])]),_:3}))],2),f(Ee)],64)}}}),Qn={class:"theme"},Zn=_("h1",null,"404",-1),es=["href"],ts=b({setup(e){const{site:t}=x(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,a)=>(l(),p("div",Qn,[Zn,_("blockquote",null,S(s()),1),_("a",{href:r(t).base,"aria-label":"go to home"},"Take me home.",8,es)]))}}),ns={Layout:Kn,NotFound:ts};var M=ne({},ns);const j=new Set,xe=()=>document.createElement("link"),ss=e=>{const t=xe();t.rel="prefetch",t.href=e,document.head.appendChild(t)},os=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let H;const as=P&&(H=xe())&&H.relList&&H.relList.supports&&H.relList.supports("prefetch")?ss:os;function rs(){if(!P||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const u=i.target;n.unobserve(u);const{pathname:d}=u;if(!j.has(d)){j.add(d);const c=ue(d);as(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:i,hostname:u,pathname:d}=a,c=d.match(/\.\w+$/);c&&c[0]!==".html"||i!=="_blank"&&u===location.hostname&&(d!==location.pathname?n.observe(a):j.add(d))})})};T(s);const o=C();O(()=>o.path,s),he(()=>{n&&n.disconnect()})}const is=b({setup(e,{slots:t}){const n=F(!1);return T(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),cs=M.NotFound||(()=>"404 Not Found"),ls={name:"VitePressApp",setup(){const{site:e}=x();return T(()=>{O(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),rs(),()=>I(M.Layout)}};function us(){const e=_s(),t=ds();t.provide(He,e);const n=Re(e.route);return t.provide(De,n),P&&ze(e.route,n.site),t.component("Content",Ue),t.component("ClientOnly",is),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),M.enhanceApp&&M.enhanceApp({app:t,router:e,siteData:Me}),{app:t,router:e}}function ds(){return Ie(ls)}function _s(){let e=P,t;return Ne(n=>{let s=ue(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),P?(e=!1,import(s)):require(s)},cs)}if(P){const{app:e,router:t}=us();t.go().then(()=>{e.mount("#app")})}export{re as N,us as createApp};
