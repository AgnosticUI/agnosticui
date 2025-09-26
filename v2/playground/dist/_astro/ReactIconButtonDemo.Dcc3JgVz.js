import{a as $,j as e}from"./jsx-runtime-OVHDjVDe.CE5iDyPX.js";import{r as h}from"./index.RH_Wq4ov.js";import"./_IconButton.ITUY3W3l.js";import"./lit-element.DMCH56eX.js";import"./lit-html-Bm_EwbrZ.BUqNPNwy.js";const A=()=>Promise.all([customElements.whenDefined("ag-icon-button")]),s=({label:t,icon:r,unicode:a,size:i="md",variant:c="ghost",type:l="button",disabled:o=!1,pressed:d=!1,loading:g=!1,ariaLabel:y,ariaDescribedby:v,onClick:f,onActivate:k,children:m,className:p,id:L,...M})=>{const j=h.useRef(null);return h.useEffect(()=>{const N=async()=>{if(await A(),!j.current)return;const x=j.current,w=b=>{console.log("ReactIconButton click:",{label:y||t,pressed:d,timestamp:new Date().toISOString(),event:b.type}),f?.(b)},C=b=>{const z=b;console.log("ReactIconButton keyboard activate:",{label:y||t,key:z.detail.originalEvent?.key,timestamp:new Date().toISOString(),detail:z.detail}),k?.(z.detail)};return x.addEventListener("icon-button-click",w),x.addEventListener("icon-button-activate",C),()=>{x.removeEventListener("icon-button-click",w),x.removeEventListener("icon-button-activate",C)}};let S;return N().then(x=>{S=x}),()=>S?.()},[f,k,t,y,d]),$.jsx("ag-icon-button",{ref:j,label:y||t,icon:r,unicode:a,size:i,variant:c,type:l,disabled:o||void 0,pressed:d||void 0,loading:g||void 0,"aria-describedby":v,className:p,id:L,...M,children:m})};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,a,i)=>i?i.toUpperCase():a.toLowerCase()),_=t=>{const r=E(t);return r.charAt(0).toUpperCase()+r.slice(1)},I=(...t)=>t.filter((r,a,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===a).join(" ").trim(),R=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=h.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:c="",children:l,iconNode:o,...d},g)=>h.createElement("svg",{ref:g,...B,width:r,height:r,stroke:t,strokeWidth:i?Number(a)*24/Number(r):a,className:I("lucide",c),...!l&&!R(d)&&{"aria-hidden":"true"},...d},[...o.map(([y,v])=>h.createElement(y,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=(t,r)=>{const a=h.forwardRef(({className:i,...c},l)=>h.createElement(T,{ref:l,iconNode:r,className:I(`lucide-${D(_(t))}`,`lucide-${t}`,i),...c}));return a.displayName=_(t),a};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],H=n("ban",F);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],W=n("bookmark",V);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],U=n("chevron-down",P);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],X=n("download",O);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Z=n("heart",q);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],K=n("info",G);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],J=n("pen-line",Y);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ee=n("save",Q);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ae=n("settings",te);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],oe=n("star",re);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ne=n("trash-2",se);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],le=n("upload",ie);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],u=n("x",ce);function xe(){const[t,r]=h.useState([]),[a,i]=h.useState({heart:!1,star:!1,bookmark:!1}),[c,l]=h.useState(!1);function o(m){r(p=>[`${new Date().toLocaleTimeString()}: ${m}`,...p.slice(0,9)])}function d(m){i(p=>({...p,[m]:!p[m]})),o(`${m} ${a[m]?"removed from":"added to"} favorites`)}async function g(){c||(l(!0),o("Save operation started..."),setTimeout(()=>{l(!1),o("Save completed successfully!")},2e3))}function y(){o("Edit mode activated")}function v(){confirm("Are you sure you want to delete this item?")?o("Item deleted"):o("Delete cancelled")}function f(){o("Info dialog opened")}function k(){r([])}return e.jsxs("div",{style:{fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",color:"var(--ag-text-primary)"},children:"Interactive React IconButton Demo"}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.9rem",color:"var(--ag-text-secondary)"},children:"Basic Actions"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{label:"Edit item",variant:"primary",onClick:y,children:e.jsx(J,{size:24})}),e.jsx(s,{label:"Information",variant:"secondary",onClick:f,children:e.jsx(K,{size:24})}),e.jsx(s,{label:"Delete item",variant:"danger",onClick:v,children:e.jsx(ne,{size:24})}),e.jsx(s,{label:c?"Saving...":"Save",variant:"primary",loading:c,disabled:c,onClick:g,children:e.jsx(ee,{size:24})})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.9rem",color:"var(--ag-text-secondary)"},children:"Toggle Favorites"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("span",{className:"favorite-item favorite-heart",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(s,{label:a.heart?"Remove from favorites":"Add to favorites",variant:a.heart?"primary":"ghost",onClick:()=>d("heart"),pressed:a.heart,children:e.jsx(Z,{size:24})}),e.jsx("small",{style:{color:"var(--ag-text-secondary)",fontSize:"0.75rem"},children:a.heart?"Favorited":"Not favorited"})]}),e.jsxs("span",{className:"favorite-item favorite-star",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(s,{label:a.star?"Remove star":"Add star",variant:a.star?"secondary":"ghost",onClick:()=>d("star"),pressed:a.star,children:e.jsx(oe,{size:24})}),e.jsx("small",{style:{color:"var(--ag-text-secondary)",fontSize:"0.75rem"},children:a.star?"Starred":"Not starred"})]}),e.jsxs("span",{className:"favorite-item favorite-bookmark",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(s,{label:a.bookmark?"Remove bookmark":"Add bookmark",variant:"ghost",onClick:()=>d("bookmark"),pressed:a.bookmark,children:e.jsx(W,{size:24})}),e.jsx("small",{style:{color:"var(--ag-text-secondary)",fontSize:"0.75rem"},children:a.bookmark?"Bookmarked":"Not bookmarked"})]})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.9rem",color:"var(--ag-text-secondary)"},children:"Different Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(s,{label:"Extra small close",size:"xs",onClick:()=>o("XS button clicked"),children:e.jsx(u,{size:16})}),e.jsx(s,{label:"Small close",size:"sm",onClick:()=>o("Small button clicked"),children:e.jsx(u,{size:18})}),e.jsx(s,{label:"Medium close",size:"md",onClick:()=>o("Medium button clicked"),children:e.jsx(u,{size:24})}),e.jsx(s,{label:"Large close",size:"lg",onClick:()=>o("Large button clicked"),children:e.jsx(u,{size:32})}),e.jsx(s,{label:"Extra large close",size:"xl",onClick:()=>o("XL button clicked"),children:e.jsx(u,{size:36})})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.9rem",color:"var(--ag-text-secondary)"},children:"Custom SVG Icons"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{label:"Settings",variant:"secondary",onClick:()=>o("Settings opened"),children:e.jsx(ae,{size:24})}),e.jsx(s,{label:"Download",variant:"primary",onClick:()=>o("Download started"),children:e.jsx(X,{size:24})}),e.jsx(s,{label:"Upload",variant:"secondary",onClick:()=>o("Upload dialog opened"),children:e.jsx(le,{size:24})})]})]}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.9rem",color:"var(--ag-text-secondary)"},children:"States Demo"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{label:"Disabled button",disabled:!0,onClick:()=>o("This should not fire"),children:e.jsx(H,{size:24})}),e.jsx(s,{label:"Pressed state",pressed:!0,variant:"secondary",onClick:()=>o("Pressed button clicked"),children:e.jsx(U,{size:24})})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.9rem",color:"var(--ag-text-secondary)"},children:["Action Log",e.jsx("button",{onClick:k,disabled:t.length===0,style:{marginLeft:"1rem",padding:"0.25rem 0.5rem",fontSize:"0.75rem",background:"var(--ag-background-secondary)",border:"1px solid var(--c-border)",borderRadius:"4px",cursor:t.length===0?"not-allowed":"pointer",opacity:t.length===0?.5:1},children:"Clear"})]}),e.jsx("div",{style:{border:"1px solid var(--c-border)",borderRadius:"4px",padding:"1rem",background:"var(--c-card-bg)",maxHeight:"200px",overflowY:"auto"},children:t.length===0?e.jsx("p",{style:{margin:0,color:"var(--ag-text-secondary)",fontStyle:"italic"},children:"No actions yet. Click some buttons above!"}):e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:t.map((m,p)=>e.jsx("li",{style:{padding:"0.25rem 0",borderBottom:p<t.length-1?"1px solid var(--c-border)":"none",fontFamily:"monospace",fontSize:"0.8rem",color:"var(--ag-text-primary)"},children:m},p))})})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--ag-background-secondary)",borderRadius:"4px",fontSize:"0.8rem",color:"var(--ag-text-secondary)"},children:[e.jsx("strong",{children:"React Integration Features:"})," Type-safe props, React event handlers, state management, and seamless integration with React's component lifecycle while maintaining the accessibility and performance of the underlying web component."]})]})}export{xe as default};
