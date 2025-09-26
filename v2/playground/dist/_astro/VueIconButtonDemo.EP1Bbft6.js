import"./_IconButton.ITUY3W3l.js";import{p as C,r as _,q as f,s as S,t as A,u as k,v as D,w as L,E as B,x as a,z as o,B as r,A as h,y as I,G as M,H as x,D as E}from"./runtime-core.esm-bundler.KWdZ_M2V.js";import{_ as T}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./lit-element.DMCH56eX.js";import"./lit-html-Bm_EwbrZ.BUqNPNwy.js";const H=["label","icon","unicode","size","variant","type","disabled","pressed","loading","aria-describedby"],X=C({__name:"VueIconButton",props:{label:{},icon:{},unicode:{},size:{default:"md"},variant:{default:"ghost"},type:{default:"button"},disabled:{type:Boolean,default:!1},pressed:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},ariaLabel:{},ariaDescribedby:{}},emits:["click","activate"],setup(s,{emit:t}){const i=s,e=t,l=_(),d=n=>{console.log("VueIconButton click:",{label:i.ariaLabel||i.label,pressed:i.pressed,timestamp:new Date().toISOString(),event:n.type}),e("click",n)},v=n=>{const u=n;console.log("VueIconButton keyboard activate:",{label:i.ariaLabel||i.label,key:u.detail.originalEvent?.key,timestamp:new Date().toISOString(),detail:u.detail}),e("activate",u.detail)};return S(async()=>{await customElements.whenDefined("ag-icon-button"),l.value&&(l.value.addEventListener("icon-button-click",d),l.value.addEventListener("icon-button-activate",v))}),A(()=>{l.value&&(l.value.removeEventListener("icon-button-click",d),l.value.removeEventListener("icon-button-activate",v))}),(n,u)=>(k(),f("ag-icon-button",L({ref_key:"iconButtonRef",ref:l,label:n.ariaLabel||n.label,icon:n.icon,unicode:n.unicode,size:n.size,variant:n.variant,type:n.type,disabled:n.disabled||void 0,pressed:n.pressed||void 0,loading:n.loading||void 0,"aria-describedby":n.ariaDescribedby},n.$attrs),[D(n.$slots,"default")],16,H))}});/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),F=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,e)=>e?e.toUpperCase():i.toLowerCase()),U=s=>{const t=F(s);return t.charAt(0).toUpperCase()+t.slice(1)},j=(...s)=>s.filter((t,i,e)=>!!t&&t.trim()!==""&&e.indexOf(t)===i).join(" ").trim(),V=s=>s==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=({name:s,iconNode:t,absoluteStrokeWidth:i,"absolute-stroke-width":e,strokeWidth:l,"stroke-width":d,size:v=b.width,color:n=b.stroke,...u},{slots:g})=>B("svg",{...b,...u,width:v,height:v,stroke:n,"stroke-width":V(i)||V(e)||i===!0||e===!0?Number(l||d||b["stroke-width"])*24/Number(v):l||d||b["stroke-width"],class:j("lucide",u.class,...s?[`lucide-${w(U(s))}-icon`,`lucide-${w(s)}`]:["lucide-icon"])},[...t.map(y=>B(...y)),...g.default?[g.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(s,t)=>(i,{slots:e,attrs:l})=>B(N,{...l,...i,iconNode:t,name:s},e);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=c("ban",[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=c("bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=c("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=c("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=c("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=c("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=c("pen-line",[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=c("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=c("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=c("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=c("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=c("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=c("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),te=C({__name:"VueIconButtonDemo",setup(s,{expose:t}){t();const i=_([]),e=_(!1),l=E({heart:!1,star:!1,bookmark:!1});function d(m){i.value=[`${new Date().toLocaleTimeString()}: ${m}`,...i.value.slice(0,9)]}function v(m){l[m]=!l[m],d(`${m} ${l[m]?"added to":"removed from"} favorites`)}async function n(){e.value||(e.value=!0,d("Save operation started..."),setTimeout(()=>{e.value=!1,d("Save completed successfully!")},2e3))}function u(){d("Edit mode activated")}function g(){confirm("Are you sure you want to delete this item?")?d("Item deleted"):d("Delete cancelled")}function y(){d("Info dialog opened")}function z(){i.value=[]}const p={actions:i,isLoading:e,favorites:l,addAction:d,handleFavoriteToggle:v,handleSave:n,handleEdit:u,handleDelete:g,handleInfo:y,clearActions:z,get VueIconButton(){return X},get Edit3(){return J},get Info(){return Z},get Trash2(){return W},get Save(){return Q},get X(){return ee},get Ban(){return P},get ChevronDown(){return R},get Settings(){return Y},get Download(){return q},get Upload(){return $},get Heart(){return G},get Star(){return K},get Bookmark(){return O}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),oe={class:"vue-icon-button-demo"},ae={class:"demo-section"},ne={class:"button-group"},ie={class:"demo-section"},se={class:"favorites-grid"},le={class:"favorite-item favorite-heart"},re={class:"favorite-status"},de={class:"favorite-item favorite-star"},ce={class:"favorite-status"},ve={class:"favorite-item favorite-bookmark"},ue={class:"favorite-status"},me={class:"demo-section"},fe={class:"button-group"},ke={class:"demo-section"},be={class:"button-group"},ge={class:"demo-section"},he={class:"button-group"},ye={class:"demo-section"},_e={class:"section-title"},Be=["disabled"],pe={class:"action-log"},Ie={key:0,class:"empty-state"},we={key:1,class:"action-list"};function Ve(s,t,i,e,l,d){return k(),f("div",oe,[t[19]||(t[19]=a("h3",{class:"demo-title"}," Interactive Vue IconButton Demo ",-1)),a("div",ae,[t[13]||(t[13]=a("h4",{class:"section-title"},"Basic Actions",-1)),a("div",ne,[o(e.VueIconButton,{label:"Edit item",variant:"primary",onClick:e.handleEdit},{default:r(()=>[o(e.Edit3,{size:24})]),_:1}),o(e.VueIconButton,{label:"Information",variant:"secondary",onClick:e.handleInfo},{default:r(()=>[o(e.Info,{size:24})]),_:1}),o(e.VueIconButton,{label:"Delete item",variant:"danger",onClick:e.handleDelete},{default:r(()=>[o(e.Trash2,{size:24})]),_:1}),o(e.VueIconButton,{label:e.isLoading?"Saving...":"Save",variant:"primary",loading:e.isLoading,disabled:e.isLoading,onClick:e.handleSave},{default:r(()=>[o(e.Save,{size:24})]),_:1},8,["label","loading","disabled"])])]),a("div",ie,[t[14]||(t[14]=a("h4",{class:"section-title"},"Toggle Favorites",-1)),a("div",se,[a("span",le,[o(e.VueIconButton,{label:e.favorites.heart?"Remove from favorites":"Add to favorites",variant:e.favorites.heart?"primary":"ghost",pressed:e.favorites.heart,onClick:t[0]||(t[0]=()=>e.handleFavoriteToggle("heart"))},{default:r(()=>[o(e.Heart,{size:24})]),_:1},8,["label","variant","pressed"]),a("small",re,h(e.favorites.heart?"Favorited":"Not favorited"),1)]),a("span",de,[o(e.VueIconButton,{label:e.favorites.star?"Remove star":"Add star",variant:e.favorites.star?"secondary":"ghost",pressed:e.favorites.star,onClick:t[1]||(t[1]=()=>e.handleFavoriteToggle("star"))},{default:r(()=>[o(e.Star,{size:24})]),_:1},8,["label","variant","pressed"]),a("small",ce,h(e.favorites.star?"Starred":"Not starred"),1)]),a("span",ve,[o(e.VueIconButton,{label:e.favorites.bookmark?"Remove bookmark":"Add bookmark",variant:"ghost",pressed:e.favorites.bookmark,onClick:t[2]||(t[2]=()=>e.handleFavoriteToggle("bookmark"))},{default:r(()=>[o(e.Bookmark,{size:24})]),_:1},8,["label","pressed"]),a("small",ue,h(e.favorites.bookmark?"Bookmarked":"Not bookmarked"),1)])])]),a("div",me,[t[15]||(t[15]=a("h4",{class:"section-title"},"Different Sizes",-1)),a("div",fe,[o(e.VueIconButton,{label:"Extra small close",size:"xs",onClick:t[3]||(t[3]=()=>e.addAction("XS button clicked"))},{default:r(()=>[o(e.X,{size:16})]),_:1}),o(e.VueIconButton,{label:"Small close",size:"sm",onClick:t[4]||(t[4]=()=>e.addAction("Small button clicked"))},{default:r(()=>[o(e.X,{size:18})]),_:1}),o(e.VueIconButton,{label:"Medium close",size:"md",onClick:t[5]||(t[5]=()=>e.addAction("Medium button clicked"))},{default:r(()=>[o(e.X,{size:24})]),_:1}),o(e.VueIconButton,{label:"Large close",size:"lg",onClick:t[6]||(t[6]=()=>e.addAction("Large button clicked"))},{default:r(()=>[o(e.X,{size:32})]),_:1}),o(e.VueIconButton,{label:"Extra large close",size:"xl",onClick:t[7]||(t[7]=()=>e.addAction("XL button clicked"))},{default:r(()=>[o(e.X,{size:36})]),_:1})])]),a("div",ke,[t[16]||(t[16]=a("h4",{class:"section-title"},"Custom SVG Icons",-1)),a("div",be,[o(e.VueIconButton,{label:"Settings",variant:"secondary",onClick:t[8]||(t[8]=()=>e.addAction("Settings opened"))},{default:r(()=>[o(e.Settings,{size:24})]),_:1}),o(e.VueIconButton,{label:"Download",variant:"primary",onClick:t[9]||(t[9]=()=>e.addAction("Download started"))},{default:r(()=>[o(e.Download,{size:24})]),_:1}),o(e.VueIconButton,{label:"Upload",variant:"secondary",onClick:t[10]||(t[10]=()=>e.addAction("Upload dialog opened"))},{default:r(()=>[o(e.Upload,{size:24})]),_:1})])]),a("div",ge,[t[17]||(t[17]=a("h4",{class:"section-title"},"States Demo",-1)),a("div",he,[o(e.VueIconButton,{label:"Disabled button",disabled:"",onClick:t[11]||(t[11]=()=>e.addAction("This should not fire"))},{default:r(()=>[o(e.Ban,{size:24})]),_:1}),o(e.VueIconButton,{label:"Pressed state",pressed:"",variant:"secondary",onClick:t[12]||(t[12]=()=>e.addAction("Pressed button clicked"))},{default:r(()=>[o(e.ChevronDown,{size:24})]),_:1})])]),a("div",ye,[a("h4",_e,[t[18]||(t[18]=I(" Action Log ",-1)),a("button",{onClick:e.clearActions,disabled:e.actions.length===0,class:"clear-button"}," Clear ",8,Be)]),a("div",pe,[e.actions.length===0?(k(),f("p",Ie," No actions yet. Click some buttons above! ")):(k(),f("ul",we,[(k(!0),f(M,null,x(e.actions,(v,n)=>(k(),f("li",{key:n,class:"action-item"},h(v),1))),128))]))])]),t[20]||(t[20]=a("div",{class:"demo-info"},[a("strong",null,"Vue Integration Features:"),I(" Composition API integration, reactive props and state, Vue event handlers, and seamless integration with Vue's reactivity system while maintaining the accessibility and performance of the underlying web component. ")],-1))])}const Le=T(te,[["render",Ve],["__scopeId","data-v-6709cfa3"]]);export{Le as default};
