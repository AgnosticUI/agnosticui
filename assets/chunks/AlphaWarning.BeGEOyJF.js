import{ad as c,_ as k,c as m,o as f,j as i,G as _,k as x}from"./framework.DvJW1jwp.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,t,a)=>a?a.toUpperCase():t.toLowerCase()),C=e=>{const r=y(e);return r.charAt(0).toUpperCase()+r.slice(1)},A=(...e)=>e.filter((r,t,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===t).join(" ").trim(),h=e=>e==="";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=({name:e,iconNode:r,absoluteStrokeWidth:t,"absolute-stroke-width":a,strokeWidth:o,"stroke-width":l,size:n=s.width,color:w=s.stroke,...d},{slots:p})=>c("svg",{...s,...d,width:n,height:n,stroke:w,"stroke-width":h(t)||h(a)||t===!0||a===!0?Number(o||l||s["stroke-width"])*24/Number(n):o||l||s["stroke-width"],class:A("lucide",d.class,...e?[`lucide-${u(C(e))}-icon`,`lucide-${u(e)}`]:["lucide-icon"])},[...r.map(g=>c(...g)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,r)=>(t,{slots:a,attrs:o})=>c(v,{...o,...t,iconNode:r,name:e},a);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=B("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),$={class:"alpha-warning"},j={class:"alpha-warning-header"},E={__name:"AlphaWarning",setup(e){return(r,t)=>(f(),m("div",$,[i("div",j,[_(x(b),{size:20}),t[0]||(t[0]=i("span",{class:"alpha-warning-title"},"Experimental Alpha",-1))]),t[1]||(t[1]=i("p",{class:"alpha-warning-text"}," This library is a work-in-progress. We are releasing it early to gather feedback, but it is not ready for production. ",-1))]))}},L=k(E,[["__scopeId","data-v-7d6f0b92"]]);export{L as A,b as C,B as c};
