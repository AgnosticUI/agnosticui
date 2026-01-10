import{ad as n}from"./framework.NAAYCHZu.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase()),p=t=>{const e=g(t);return e.charAt(0).toUpperCase()+e.slice(1)},C=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim(),w=t=>t==="";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=({name:t,iconNode:e,absoluteStrokeWidth:o,"absolute-stroke-width":r,strokeWidth:c,"stroke-width":a,size:i=s.width,color:h=s.stroke,...l},{slots:u})=>n("svg",{...s,...l,width:i,height:i,stroke:h,"stroke-width":w(o)||w(r)||o===!0||r===!0?Number(c||a||s["stroke-width"])*24/Number(i):c||a||s["stroke-width"],class:C("lucide",l.class,...t?[`lucide-${d(p(t))}-icon`,`lucide-${d(t)}`]:["lucide-icon"])},[...e.map(m=>n(...m)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(t,e)=>(o,{slots:r,attrs:c})=>n(f,{...c,...o,iconNode:e,name:t},r);export{v as c};
