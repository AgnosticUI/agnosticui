/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,pt=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),yt=new WeakMap;let Dt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(pt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&yt.set(e,t))}return t}toString(){return this.cssText}};const ee=r=>new Dt(typeof r=="string"?r:r+"",void 0,gt),se=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new Dt(e,r,gt)},ie=(r,t)=>{if(pt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=Z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},mt=pt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ee(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:re,defineProperty:oe,getOwnPropertyDescriptor:ne,getOwnPropertyNames:ae,getOwnPropertySymbols:he,getPrototypeOf:le}=Object,A=globalThis,At=A.trustedTypes,ce=At?At.emptyScript:"",rt=A.reactiveElementPolyfillSupport,B=(r,t)=>r,ut={toAttribute(r,t){switch(t){case Boolean:r=r?ce:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},It=(r,t)=>!re(r,t),Et={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:It};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&oe(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=ne(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const h=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const t=le(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const e=this.properties,s=[...ae(e),...he(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(mt(i))}else t!==void 0&&e.push(mt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:ut).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n,o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const h=s.getPropertyOptions(i),a=typeof h.converter=="function"?{fromAttribute:h.converter}:((n=h.converter)==null?void 0:n.fromAttribute)!==void 0?h.converter:ut;this._$Em=i;const c=a.fromAttribute(e,h.type);this[i]=c??((o=this._$Ej)==null?void 0:o.get(i))??c,this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){const n=this.constructor,o=this[t];if(s??(s=n.getPropertyOptions(t)),!((s.hasChanged??It)(o,e)||s.useDefault&&s.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:h}=o,a=this[n];h!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[B("elementProperties")]=new Map,O[B("finalized")]=new Map,rt==null||rt({ReactiveElement:O}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,Q=L.trustedTypes,St=Q?Q.createPolicy("lit-html",{createHTML:r=>r}):void 0,qt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Wt="?"+y,de=`<${Wt}>`,P=document,q=()=>P.createComment(""),W=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,ue=r=>$t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,xt=/>/g,S=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Ct=/"/g,Vt=/^(?:script|style|textarea|title)$/i,Ft=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),pe=Ft(1),We=Ft(2),M=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Pt=new WeakMap,x=P.createTreeWalker(P,129);function Gt(r,t){if(!$t(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}const ge=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=N;for(let h=0;h<e;h++){const a=r[h];let c,d,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,d=o.exec(a),d!==null);)u=o.lastIndex,o===N?d[1]==="!--"?o=wt:d[1]!==void 0?o=xt:d[2]!==void 0?(Vt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=S):d[3]!==void 0&&(o=S):o===S?d[0]===">"?(o=i??N,l=-1):d[1]===void 0?l=-2:(l=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?S:d[3]==='"'?Ct:kt):o===Ct||o===kt?o=S:o===wt||o===xt?o=N:(o=S,i=void 0);const b=o===S&&r[h+1].startsWith("/>")?" ":"";n+=o===N?a+de:l>=0?(s.push(c),a.slice(0,l)+qt+a.slice(l)+y+b):a+y+(l===-2?h:b)}return[Gt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class V{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[c,d]=ge(t,e);if(this.el=V.createElement(c,s),x.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=x.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(qt)){const u=d[o++],b=i.getAttribute(l).split(y),_=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:_[2],strings:b,ctor:_[1]==="."?ve:_[1]==="?"?fe:_[1]==="@"?be:et}),i.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(Vt.test(i.tagName)){const l=i.textContent.split(y),u=l.length-1;if(u>0){i.textContent=Q?Q.emptyScript:"";for(let b=0;b<u;b++)i.append(l[b],q()),x.nextNode(),a.push({type:2,index:++n});i.append(l[u],q())}}}else if(i.nodeType===8)if(i.data===Wt)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:n}),l+=y.length-1}n++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function T(r,t,e=r,s){var o,h;if(t===M)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=W(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=T(r,i._$AS(r,t.values),i,s)),t}let $e=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??P).importNode(e,!0);x.currentNode=i;let n=x.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new vt(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new _e(n,this,t)),this._$AV.push(c),a=s[++h]}o!==(a==null?void 0:a.index)&&(n=x.nextNode(),o++)}return x.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},vt=class Jt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),W(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ue(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=V.createElement(Gt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new $e(i,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=Pt.get(t.strings);return e===void 0&&Pt.set(t.strings,e=new V(t)),e}k(t){$t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Jt(this.O(q()),this.O(q()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=T(this,t,e,0),o=!W(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const h=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=T(this,h[s+a],e,a),c===M&&(c=this._$AH[a]),o||(o=!W(c)||c!==this._$AH[a]),c===$?t=$:t!==$&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ve=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},fe=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},be=class extends et{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??$)===M)return;const s=this._$AH,i=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==$&&(s===$||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},_e=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};const nt=L.litHtmlPolyfillSupport;nt==null||nt(V,vt),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.3.1");const ye=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new vt(t.insertBefore(q(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;class j extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ye(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return M}}var jt;j._$litElement$=!0,j.finalized=!0,(jt=C.litElementHydrateSupport)==null||jt.call(C,{LitElement:j});const at=C.litElementPolyfillSupport;at==null||at({LitElement:j});(C.litElementVersions??(C.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,ft=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zt=Symbol(),Ut=new WeakMap;let me=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ft&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ut.set(e,t))}return t}toString(){return this.cssText}};const Ae=r=>new me(typeof r=="string"?r:r+"",void 0,Zt),Ee=(r,t)=>{if(ft)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=K.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Ot=ft?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ae(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Se,defineProperty:we,getOwnPropertyDescriptor:xe,getOwnPropertyNames:ke,getOwnPropertySymbols:Ce,getPrototypeOf:Pe}=Object,E=globalThis,Mt=E.trustedTypes,Ue=Mt?Mt.emptyScript:"",ht=E.reactiveElementPolyfillSupport,D=(r,t)=>r,X={toAttribute(r,t){switch(t){case Boolean:r=r?Ue:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},bt=(r,t)=>!Se(r,t),Tt={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:bt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);class R extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&we(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=xe(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const h=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Tt}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const t=Pe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,s=[...ke(e),...Ce(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Ot(i))}else t!==void 0&&e.push(Ot(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:X).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n,o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const h=s.getPropertyOptions(i),a=typeof h.converter=="function"?{fromAttribute:h.converter}:((n=h.converter)==null?void 0:n.fromAttribute)!==void 0?h.converter:X;this._$Em=i;const c=a.fromAttribute(e,h.type);this[i]=c??((o=this._$Ej)==null?void 0:o.get(i))??c,this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){const n=this.constructor,o=this[t];if(s??(s=n.getPropertyOptions(t)),!((s.hasChanged??bt)(o,e)||s.useDefault&&s.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:h}=o,a=this[n];h!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[D("elementProperties")]=new Map,R[D("finalized")]=new Map,ht==null||ht({ReactiveElement:R}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:bt},Me=(r=Oe,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,a,r)},init(h){return h!==void 0&&this.C(o,void 0,r,h),h}}}if(s==="setter"){const{name:o}=e;return function(h){const a=this[o];t.call(this,h),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function v(r){return(t,e)=>typeof e=="object"?Me(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Y=I.trustedTypes,Ht=Y?Y.createPolicy("lit-html",{createHTML:r=>r}):void 0,Kt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,Qt="?"+m,Te=`<${Qt}>`,U=document,tt=()=>U.createComment(""),F=r=>r===null||typeof r!="object"&&typeof r!="function",_t=Array.isArray,He=r=>_t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",lt=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,Rt=/>/g,w=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Bt=/"/g,Xt=/^(?:script|style|textarea|title)$/i,G=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Lt=new WeakMap,k=U.createTreeWalker(U,129);function Yt(r,t){if(!_t(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(t):t}const Ne=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=z;for(let h=0;h<e;h++){const a=r[h];let c,d,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,d=o.exec(a),d!==null);)u=o.lastIndex,o===z?d[1]==="!--"?o=Nt:d[1]!==void 0?o=Rt:d[2]!==void 0?(Xt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=w):d[3]!==void 0&&(o=w):o===w?d[0]===">"?(o=i??z,l=-1):d[1]===void 0?l=-2:(l=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?w:d[3]==='"'?Bt:zt):o===Bt||o===zt?o=w:o===Nt||o===Rt?o=z:(o=w,i=void 0);const b=o===w&&r[h+1].startsWith("/>")?" ":"";n+=o===z?a+Te:l>=0?(s.push(c),a.slice(0,l)+Kt+a.slice(l)+m+b):a+m+(l===-2?h:b)}return[Yt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[c,d]=Ne(t,e);if(this.el=J.createElement(c,s),k.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=k.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(Kt)){const u=d[o++],b=i.getAttribute(l).split(m),_=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:_[2],strings:b,ctor:_[1]==="."?ze:_[1]==="?"?Be:_[1]==="@"?Le:it}),i.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(Xt.test(i.tagName)){const l=i.textContent.split(m),u=l.length-1;if(u>0){i.textContent=Y?Y.emptyScript:"";for(let b=0;b<u;b++)i.append(l[b],tt()),k.nextNode(),a.push({type:2,index:++n});i.append(l[u],tt())}}}else if(i.nodeType===8)if(i.data===Qt)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:n}),l+=m.length-1}n++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function H(r,t,e=r,s){var o,h;if(t===G)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=F(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=H(r,i._$AS(r,t.values),i,s)),t}class Re{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??U).importNode(e,!0);k.currentNode=i;let n=k.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new st(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new je(n,this,t)),this._$AV.push(c),a=s[++h]}o!==(a==null?void 0:a.index)&&(n=k.nextNode(),o++)}return k.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class st{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),F(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):He(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=J.createElement(Yt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new Re(i,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=Lt.get(t.strings);return e===void 0&&Lt.set(t.strings,e=new J(t)),e}k(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new st(this.O(tt()),this.O(tt()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=H(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==G,o&&(this._$AH=t);else{const h=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=H(this,h[s+a],e,a),c===G&&(c=this._$AH[a]),o||(o=!F(c)||c!==this._$AH[a]),c===p?t=p:t!==p&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ze extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Be extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Le extends it{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??p)===G)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class je{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const ct=I.litHtmlPolyfillSupport;ct==null||ct(J,st),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.3.1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=r=>r??p;var De=Object.defineProperty,f=(r,t,e,s)=>{for(var i=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(t,e,i)||i);return i&&De(t,e,i),i};const te=class extends j{constructor(){super(),this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.bordered=!1,this.ghost=!1,this.link=!1,this.grouped=!1,this.fullWidth=!1,this.type="button",this.ariaLabel="",this.variant="",this.size="md",this.shape=""}_handleClick(t){if(this.onClick&&this.onClick(t),this.toggle&&!this.disabled&&!this.loading&&!t.defaultPrevented){this.pressed=!this.pressed;const e=new CustomEvent("toggle",{detail:{pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onToggle&&this.onToggle(e)}}_handleFocus(t){this.onFocus&&this.onFocus(t);const e=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleBlur(t){this.onBlur&&this.onBlur(t);const e=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(e)}focus(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("button");t&&t.focus()}blur(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("button");t&&t.blur()}render(){const t=this.disabled||this.loading;return pe`
      <button
        type=${this.type}
        part="ag-button"
        ?disabled=${t}
        aria-disabled=${t?"true":"false"}
        aria-busy=${dt(this.loading?"true":void 0)}
        aria-pressed=${dt(this.toggle?String(this.pressed):void 0)}
        aria-label=${dt(this.ariaLabel||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `}};te.styles=se`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Full-width variant */
    :host([full-width]) {
      display: block;
      width: 100%;
    }

    :host([full-width]) button {
      width: 100%;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      border: 1px solid transparent;
      background: var(--ag-background-tertiary);

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Explicit line-height to prevent extra vertical spacing */
      line-height: 1;

      /* Basic interaction styling */
      cursor: pointer;

      /* Flex layout for perfect content alignment */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-1); /* Small gap for icon + text scenarios */

      /* Smooth transitions */
      transition-property: all;
      transition-duration: var(--ag-motion-medium);
    }
    
    /* Secondary inherits font color */
    :host([variant="secondary"]) button {
      background: var(--ag-neutral-400);
      /* We lock the text color at neutral-900 for both light/dark modes */
      color: var(--ag-neutral-900);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
    }

    /* Primary, success, warning, and danger all have white text and get
      darker on hover */
    :host([variant="primary"]) button {
      background: var(--ag-primary);
      color: var(--ag-white);
    }
    :host([variant="primary"]) button:hover {
      background: var(--ag-primary-dark);
    }
    :host([variant="success"]) button {
      background: var(--ag-success);
      color: var(--ag-white);
    }
    :host([variant="success"]) button:hover {
      background: var(--ag-success-dark);
    }
    :host([variant="warning"]) button {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }
    :host([variant="warning"]) button:hover {
      background: var(--ag-warning-dark);
    }
    :host([variant="danger"]) button {
      background: var(--ag-danger);
      color: var(--ag-white);
    }
    :host([variant="danger"]) button:hover {
      background: var(--ag-danger-dark);
    }

    /* Monochrome variant - adapts to light/dark themes */
    :host([variant="monochrome"]) button {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
    :host([variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary-inverted);
    }

    /* Size variants */
    :host([size="x-sm"]) button {
      height: var(--ag-space-8);
      min-height: var(--ag-space-8);
      font-size: calc(var(--ag-font-size-base) - 0.375rem);
      padding-inline: var(--ag-space-2);
      padding-block: 0;
    }

    :host([size="sm"]) button {
      height: var(--ag-space-9);
      min-height: var(--ag-space-9);
      font-size: var(--ag-font-size-xs);
      padding-inline: var(--ag-space-3);
      padding-block: 0;
    }

    /* Default size (md) - applies when no size attribute or size="md" */
    button,
    :host([size="md"]) button {
      height: var(--ag-space-10);
      min-height: var(--ag-space-10);
      font-size: var(--ag-font-size-sm);
      padding-inline: var(--ag-space-4);
      padding-block: 0;
    }

    :host([size="lg"]) button {
      height: var(--ag-space-12);
      min-height: var(--ag-space-12);
      font-size: var(--ag-font-size-base);
      padding-inline: var(--ag-space-5);
      padding-block: 0;
    }

    :host([size="xl"]) button {
      height: var(--ag-space-14);
      min-height: var(--ag-space-14);
      font-size: var(--ag-font-size-md);
      padding-inline: var(--ag-space-6);
      padding-block: 0;
    }

    /* Shape variants */
    :host([shape="capsule"]) button {
      border-radius: var(--ag-radius-full);
      padding-inline-start: var(--ag-space-5);
      padding-inline-end: var(--ag-space-5);
    }

    :host([shape="rounded"]) button {
      border-radius: var(--ag-radius-md);
    }

    /* Circle and Square shapes are only intended for single character or icon */
    :host([shape="circle"]) button {
      border-radius: 50%;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="square"]) button {
      border-radius: 0;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="rounded-square"]) button {
      border-radius: var(--ag-radius-md);
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    /* Ghost and Link - minimal/invisible button styles */
    :host([ghost]) button,
    :host([link]) button {
      background: transparent;
      border-color: transparent;
      box-shadow: none;
    }

    /* Ghost-specific - minimal padding, respects variant colors */
    :host([ghost]) button {
      padding-inline-start: var(--ag-space-2);
      padding-inline-end: var(--ag-space-2);
    }

    :host([ghost][variant="primary"]) button {
      color: var(--ag-primary);
    }

    :host([ghost][variant="success"]) button {
      color: var(--ag-success);
    }

    :host([ghost][variant="warning"]) button {
      color: var(--ag-warning);
    }

    :host([ghost][variant="danger"]) button {
      color: var(--ag-danger);
    }


    :host([link][variant="danger"]) button:hover,
    :host([link][variant="warning"]) button:hover,
    :host([link][variant="success"]) button:hover,
    :host([link][variant="primary"]) button:hover {
      background: transparent;
    }

    /* Only for ghosted buttons with text that of:
          - "red" danger
          - "yellow" warning
          - "green" success
          - "blue" primary
      do we use an almost white nuetral 100 on hover.
      The default and secondary are not changed here!
    */
    :host([ghost][variant="danger"]) button:hover,
    :host([ghost][variant="warning"]) button:hover,
    :host([ghost][variant="success"]) button:hover,
    :host([ghost][variant="primary"]) button:hover {
      background: var(--ag-neutral-100);
    }

    /* Link-specific - inline style with smooth underline transition */
    :host([link]) button {
      color: var(--ag-primary-text);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      padding: 0;
      min-height: unset;
    }

    :host([link]) button:hover {
      border-bottom-color: var(--ag-primary);
    }

    /* Grouped buttons - for use in button groups */
    :host([grouped]) button {
      border-radius: var(--ag-radius-md);
    }

    :host([grouped]:not(:last-child)) button {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      margin-inline-end: -1px;
    }

    :host([grouped]:not(:first-child)) button {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }

    /* Bordered variant - outline style */
    :host([bordered]) button {
      background: transparent;
      border-color: var(--ag-neutral-500);
    }

    :host([bordered][variant="primary"]) button {
      color: var(--ag-primary-text);
      border-color: var(--ag-primary-text);
    }

    /* Bordered Buttons on Hover have a filled background with white text.  The
      Default Bordered is an exception to this rule. */
    :host([bordered][variant="primary"]) button:hover {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    :host([bordered][variant="secondary"]) button,
    :host([bordered][variant="secondary"]) button:hover {
      color: var(--ag-text-secondary);
      border-color: var(--ag-text-secondary);
    }

    :host([bordered][variant="success"]) button {
      color: var(--ag-success-text);
      border-color: var(--ag-success-text);
    }

    :host([bordered][variant="success"]) button:hover {
      color: var(--ag-white);
      background: var(--ag-success);
    }

    :host([bordered][variant="warning"]) button {
      color: var(--ag-warning-text);
      border-color: var(--ag-warning-text);
    }

    :host([bordered][variant="warning"]) button:hover {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    :host([bordered][variant="danger"]) button {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger-text);
    }

    :host([bordered][variant="danger"]) button:hover {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    :host([bordered][variant="monochrome"]) button {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }

    :host([bordered][variant="monochrome"]) button:hover {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    :host([ghost][variant="monochrome"]) button {
      color: var(--ag-text-primary);
    }

    :host([ghost][variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary);
    }

    /* Disabled states - per-variant to maintain tonal identity */

    /* Filled buttons - use lighter background tokens */
    :host([variant="primary"]) button:disabled {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }

    :host([variant="success"]) button:disabled {
      background: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="warning"]) button:disabled {
      background: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    :host([variant="danger"]) button:disabled {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="secondary"]) button:disabled,
    button:disabled {
      background: var(--ag-background-disabled);
    }

    :host([variant="monochrome"]) button:disabled {
      background: var(--ag-background-tertiary);
    }

    /* Bordered buttons - dim the border and text with opacity */
    :host([bordered]) button:disabled {
      opacity: 60%;
      background: transparent;
    }

    /* Ghost and link buttons - dim with opacity */
    :host([ghost]) button:disabled,
    :host([link]) button:disabled {
      opacity: 60%;
      background: transparent;
    }

    /* All disabled buttons get not-allowed cursor */
    button:disabled {
      cursor: not-allowed;
    }

    button:focus-visible,
    button:focus:not(:hover) {
      /* Softer focus ring using alpha channel */
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }
  `;let g=te;f([v({type:String,reflect:!0})],g.prototype,"variant");f([v({type:String,reflect:!0})],g.prototype,"size");f([v({type:String,reflect:!0})],g.prototype,"shape");f([v({type:Boolean,reflect:!0})],g.prototype,"bordered");f([v({type:Boolean,reflect:!0})],g.prototype,"ghost");f([v({type:Boolean,reflect:!0})],g.prototype,"link");f([v({type:Boolean,reflect:!0})],g.prototype,"grouped");f([v({type:Boolean,reflect:!0,attribute:"full-width"})],g.prototype,"fullWidth");f([v({type:String})],g.prototype,"type");f([v({type:Boolean})],g.prototype,"disabled");f([v({type:Boolean})],g.prototype,"loading");f([v({type:Boolean})],g.prototype,"toggle");f([v({type:Boolean})],g.prototype,"pressed");f([v({type:String,reflect:!0,attribute:"aria-label"})],g.prototype,"ariaLabel");f([v({attribute:!1})],g.prototype,"onClick");f([v({attribute:!1})],g.prototype,"onFocus");f([v({attribute:!1})],g.prototype,"onBlur");f([v({attribute:!1})],g.prototype,"onToggle");customElements.get("ag-button")||customElements.define("ag-button",g);export{$ as E,dt as Q,j as a,We as b,se as i,g as t,pe as x,v as z};
