const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/_Tooltip.Dtj3g-9G.js","_astro/lit-element.DPA3KJ4y.js","_astro/_Input.bx2nze_F.js","_astro/lit-html-Bm_EwbrZ.B3KIfP8H.js"])))=>i.map(i=>d[i]);
import{_ as k}from"./preload-helper.BlTxHScW.js";import{r as d}from"./index.RH_Wq4ov.js";var c={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function y(){if(x)return a;x=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(u,e,r){var n=null;if(r!==void 0&&(n=""+r),e.key!==void 0&&(n=""+e.key),"key"in e){r={};for(var t in e)t!=="key"&&(r[t]=e[t])}else r=e;return e=r.ref,{$$typeof:i,type:u,key:n,ref:e!==void 0?e:null,props:r}}return a.Fragment=s,a.jsx=o,a.jsxs=o,a}var m;function j(){return m||(m=1,c.exports=y()),c.exports}var P=j(),R={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function T(){if(_)return l;_=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(u,e,r){var n=null;if(r!==void 0&&(n=""+r),e.key!==void 0&&(n=""+e.key),"key"in e){r={};for(var t in e)t!=="key"&&(r[t]=e[t])}else r=e;return e=r.ref,{$$typeof:i,type:u,key:n,ref:e!==void 0?e:null,props:r}}return l.Fragment=s,l.jsx=o,l.jsxs=o,l}var h;function w(){return h||(h=1,R.exports=T()),R.exports}var g=w();const L=d.forwardRef(({children:i,content:s,placement:o,trigger:u,onShow:e,onHide:r},n)=>{const t=d.useRef(null);return d.useImperativeHandle(n,()=>({show:()=>t.current?.show(),hide:()=>t.current?.hide(),toggle:()=>t.current?.toggle()})),d.useEffect(()=>{(async()=>{try{await k(()=>import("./_Tooltip.Dtj3g-9G.js").then(E=>E._),__vite__mapDeps([0,1,2,3]))}catch{}})();const f=()=>e?.(),p=()=>r?.(),v=t.current;return v?.addEventListener("show",f),v?.addEventListener("hide",p),()=>{v?.removeEventListener("show",f),v?.removeEventListener("hide",p)}},[e,r]),g.jsx("ag-tooltip",{ref:t,content:String(s),placement:o,trigger:u,children:i})});L.displayName="Tooltip";export{g as a,P as j,L as v};
