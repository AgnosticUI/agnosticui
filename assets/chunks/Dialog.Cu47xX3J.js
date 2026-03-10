import{i as yt,z as N,a as wt,E as Y,x as G}from"./property-CemaeiRl.Cea_q1B7.js";import"./CloseButton.Ddd3q8sQ.js";function kt(t,e,o){if(!e)return!1;const a=e.querySelector(o);return a?!t.composedPath().includes(a):!1}function Et(t,e,o){return!t||!e?!1:!!(e.contains(t)||o&&o.contains(t))}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ct=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],L=ct.join(","),ut=typeof Element>"u",T=ut?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,j=!ut&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t==null?void 0:t.ownerDocument},z=function t(e,o){var a;o===void 0&&(o=!0);var s=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),n=s===""||s==="true",l=n||o&&e&&t(e.parentNode);return l},Nt=function(t){var e,o=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return o===""||o==="true"},dt=function(t,e,o){if(z(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(L));return e&&T.call(t,L)&&a.unshift(t),a=a.filter(o),a},ft=function t(e,o,a){for(var s=[],n=Array.from(e);n.length;){var l=n.shift();if(!z(l,!1))if(l.tagName==="SLOT"){var d=l.assignedElements(),h=d.length?d:l.children,m=t(h,!0,a);a.flatten?s.push.apply(s,m):s.push({scopeParent:l,candidates:m})}else{var y=T.call(l,L);y&&a.filter(l)&&(o||!e.includes(l))&&s.push(l);var k=l.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(l),F=!z(k,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(l));if(k&&F){var E=t(k===!0?l.children:k.children,!0,a);a.flatten?s.push.apply(s,E):s.push({scopeParent:l,candidates:E})}else n.unshift.apply(n,l.children)}}return s},pt=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},C=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Nt(t))&&!pt(t)?0:t.tabIndex},St=function(t,e){var o=C(t);return o<0&&e&&!pt(t)?0:o},Ot=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},bt=function(t){return t.tagName==="INPUT"},Ct=function(t){return bt(t)&&t.type==="hidden"},Tt=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(o){return o.tagName==="SUMMARY"});return e},Dt=function(t,e){for(var o=0;o<t.length;o++)if(t[o].checked&&t[o].form===e)return t[o]},Pt=function(t){if(!t.name)return!0;var e=t.form||j(t),o=function(n){return e.querySelectorAll('input[type="radio"][name="'+n+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=o(window.CSS.escape(t.name));else try{a=o(t.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var s=Dt(a,t.form);return!s||s===t},Ft=function(t){return bt(t)&&t.type==="radio"},At=function(t){return Ft(t)&&!Pt(t)},xt=function(t){var e,o=t&&j(t),a=(e=o)===null||e===void 0?void 0:e.host,s=!1;if(o&&o!==t){var n,l,d;for(s=!!((n=a)!==null&&n!==void 0&&(l=n.ownerDocument)!==null&&l!==void 0&&l.contains(a)||t!=null&&(d=t.ownerDocument)!==null&&d!==void 0&&d.contains(t));!s&&a;){var h,m,y;o=j(a),a=(h=o)===null||h===void 0?void 0:h.host,s=!!((m=a)!==null&&m!==void 0&&(y=m.ownerDocument)!==null&&y!==void 0&&y.contains(a))}}return s},at=function(t){var e=t.getBoundingClientRect(),o=e.width,a=e.height;return o===0&&a===0},Rt=function(t,e){var o=e.displayCheck,a=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var s=T.call(t,"details>summary:first-of-type"),n=s?t.parentElement:t;if(T.call(n,"details:not([open]) *"))return!0;if(!o||o==="full"||o==="legacy-full"){if(typeof a=="function"){for(var l=t;t;){var d=t.parentElement,h=j(t);if(d&&!d.shadowRoot&&a(d)===!0)return at(t);t.assignedSlot?t=t.assignedSlot:!d&&h!==t.ownerDocument?t=h.host:t=d}t=l}if(xt(t))return!t.getClientRects().length;if(o!=="legacy-full")return!0}else if(o==="non-zero-area")return at(t);return!1},It=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var o=0;o<e.children.length;o++){var a=e.children.item(o);if(a.tagName==="LEGEND")return T.call(e,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}e=e.parentElement}return!1},$=function(t,e){return!(e.disabled||z(e)||Ct(e)||Rt(e,t)||Tt(e)||It(e))},X=function(t,e){return!(At(e)||C(e)<0||!$(t,e))},Bt=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},Gt=function t(e){var o=[],a=[];return e.forEach(function(s,n){var l=!!s.scopeParent,d=l?s.scopeParent:s,h=St(d,l),m=l?t(s.candidates):d;h===0?l?o.push.apply(o,m):o.push(d):a.push({documentOrder:n,tabIndex:h,item:s,isScope:l,content:m})}),a.sort(Ot).reduce(function(s,n){return n.isScope?s.push.apply(s,n.content):s.push(n.content),s},[]).concat(o)},_t=function(t,e){e=e||{};var o;return e.getShadowRoot?o=ft([t],e.includeContainer,{filter:X.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:Bt}):o=dt(t,e.includeContainer,X.bind(null,e)),Gt(o)},Lt=function(t,e){e=e||{};var o;return e.getShadowRoot?o=ft([t],e.includeContainer,{filter:$.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):o=dt(t,e.includeContainer,$.bind(null,e)),o},P=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return T.call(t,L)===!1?!1:X(e,t)},jt=ct.concat("iframe").join(","),q=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return T.call(t,jt)===!1?!1:$(e,t)};/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function V(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,a=Array(e);o<e;o++)a[o]=t[o];return a}function zt(t){if(Array.isArray(t))return V(t)}function $t(t,e,o){return(e=qt(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function Kt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),o.push.apply(o,a)}return o}function it(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?rt(Object(o),!0).forEach(function(a){$t(t,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):rt(Object(o)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(o,a))})}return t}function Ut(t){return zt(t)||Kt(t)||Xt(t)||Mt()}function Yt(t,e){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var a=o.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qt(t){var e=Yt(t,"string");return typeof e=="symbol"?e:e+""}function Xt(t,e){if(t){if(typeof t=="string")return V(t,e);var o={}.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?V(t,e):void 0}}var st={activateTrap:function(t,e){if(t.length>0){var o=t[t.length-1];o!==e&&o._setPausedState(!0)}var a=t.indexOf(e);a===-1||t.splice(a,1),t.push(e)},deactivateTrap:function(t,e){var o=t.indexOf(e);o!==-1&&t.splice(o,1),t.length>0&&!t[t.length-1]._isManuallyPaused()&&t[t.length-1]._setPausedState(!1)}},Vt=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},Ht=function(t){return(t==null?void 0:t.key)==="Escape"||(t==null?void 0:t.key)==="Esc"||(t==null?void 0:t.keyCode)===27},I=function(t){return(t==null?void 0:t.key)==="Tab"||(t==null?void 0:t.keyCode)===9},Jt=function(t){return I(t)&&!t.shiftKey},Qt=function(t){return I(t)&&t.shiftKey},lt=function(t){return setTimeout(t,0)},R=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),a=1;a<e;a++)o[a-1]=arguments[a];return typeof t=="function"?t.apply(void 0,o):t},_=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},Wt=[],Zt=function(t,e){var o=(e==null?void 0:e.document)||document,a=(e==null?void 0:e.trapStack)||Wt,s=it({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Jt,isKeyBackward:Qt},e),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},l,d=function(r,i,c){return r&&r[i]!==void 0?r[i]:s[c||i]},h=function(r,i){var c=typeof(i==null?void 0:i.composedPath)=="function"?i.composedPath():void 0;return n.containerGroups.findIndex(function(f){var p=f.container,b=f.tabbableNodes;return p.contains(r)||(c==null?void 0:c.includes(p))||b.find(function(u){return u===r})})},m=function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=i.hasFallback,f=c===void 0?!1:c,p=i.params,b=p===void 0?[]:p,u=s[r];if(typeof u=="function"&&(u=u.apply(void 0,Ut(b))),u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(r,"` was specified but was not a node, or did not return a node"))}var g=u;if(typeof u=="string"){try{g=o.querySelector(u)}catch(v){throw new Error("`".concat(r,'` appears to be an invalid selector; error="').concat(v.message,'"'))}if(!g&&!f)throw new Error("`".concat(r,"` as selector refers to no known node"))}return g},y=function(){var r=m("initialFocus",{hasFallback:!0});if(r===!1)return!1;if(r===void 0||r&&!q(r,s.tabbableOptions))if(h(o.activeElement)>=0)r=o.activeElement;else{var i=n.tabbableGroups[0],c=i&&i.firstTabbableNode;r=c||m("fallbackFocus")}else r===null&&(r=m("fallbackFocus"));if(!r)throw new Error("Your focus-trap needs to have at least one focusable element");return r},k=function(){if(n.containerGroups=n.containers.map(function(r){var i=_t(r,s.tabbableOptions),c=Lt(r,s.tabbableOptions),f=i.length>0?i[0]:void 0,p=i.length>0?i[i.length-1]:void 0,b=c.find(function(v){return P(v)}),u=c.slice().reverse().find(function(v){return P(v)}),g=!!i.find(function(v){return C(v)>0});return{container:r,tabbableNodes:i,focusableNodes:c,posTabIndexesFound:g,firstTabbableNode:f,lastTabbableNode:p,firstDomTabbableNode:b,lastDomTabbableNode:u,nextTabbableNode:function(v){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,x=i.indexOf(v);return x<0?D?c.slice(c.indexOf(v)+1).find(function(O){return P(O)}):c.slice(0,c.indexOf(v)).reverse().find(function(O){return P(O)}):i[x+(D?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(r){return r.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!m("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(r){return r.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},F=function(r){var i=r.activeElement;if(i)return i.shadowRoot&&i.shadowRoot.activeElement!==null?F(i.shadowRoot):i},E=function(r){if(r!==!1&&r!==F(document)){if(!r||!r.focus){E(y());return}r.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=r,Vt(r)&&r.select()}},H=function(r){var i=m("setReturnFocus",{params:[r]});return i||(i===!1?!1:r)},J=function(r){var i=r.target,c=r.event,f=r.isBackward,p=f===void 0?!1:f;i=i||_(c),k();var b=null;if(n.tabbableGroups.length>0){var u=h(i,c),g=u>=0?n.containerGroups[u]:void 0;if(u<0)p?b=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:b=n.tabbableGroups[0].firstTabbableNode;else if(p){var v=n.tabbableGroups.findIndex(function(M){var U=M.firstTabbableNode;return i===U});if(v<0&&(g.container===i||q(i,s.tabbableOptions)&&!P(i,s.tabbableOptions)&&!g.nextTabbableNode(i,!1))&&(v=u),v>=0){var D=v===0?n.tabbableGroups.length-1:v-1,x=n.tabbableGroups[D];b=C(i)>=0?x.lastTabbableNode:x.lastDomTabbableNode}else I(c)||(b=g.nextTabbableNode(i,!1))}else{var O=n.tabbableGroups.findIndex(function(M){var U=M.lastTabbableNode;return i===U});if(O<0&&(g.container===i||q(i,s.tabbableOptions)&&!P(i,s.tabbableOptions)&&!g.nextTabbableNode(i))&&(O=u),O>=0){var mt=O===n.tabbableGroups.length-1?0:O+1,nt=n.tabbableGroups[mt];b=C(i)>=0?nt.firstTabbableNode:nt.firstDomTabbableNode}else I(c)||(b=g.nextTabbableNode(i))}}else b=m("fallbackFocus");return b},B=function(r){var i=_(r);if(!(h(i,r)>=0)){if(R(s.clickOutsideDeactivates,r)){l.deactivate({returnFocus:s.returnFocusOnDeactivate});return}R(s.allowOutsideClick,r)||r.preventDefault()}},Q=function(r){var i=_(r),c=h(i,r)>=0;if(c||i instanceof Document)c&&(n.mostRecentlyFocusedNode=i);else{r.stopImmediatePropagation();var f,p=!0;if(n.mostRecentlyFocusedNode)if(C(n.mostRecentlyFocusedNode)>0){var b=h(n.mostRecentlyFocusedNode),u=n.containerGroups[b].tabbableNodes;if(u.length>0){var g=u.findIndex(function(v){return v===n.mostRecentlyFocusedNode});g>=0&&(s.isKeyForward(n.recentNavEvent)?g+1<u.length&&(f=u[g+1],p=!1):g-1>=0&&(f=u[g-1],p=!1))}}else n.containerGroups.some(function(v){return v.tabbableNodes.some(function(D){return C(D)>0})})||(p=!1);else p=!1;p&&(f=J({target:n.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(n.recentNavEvent)})),E(f||n.mostRecentlyFocusedNode||y())}n.recentNavEvent=void 0},ht=function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=r;var c=J({event:r,isBackward:i});c&&(I(r)&&r.preventDefault(),E(c))},W=function(r){(s.isKeyForward(r)||s.isKeyBackward(r))&&ht(r,s.isKeyBackward(r))},Z=function(r){Ht(r)&&R(s.escapeDeactivates,r)!==!1&&(r.preventDefault(),l.deactivate())},tt=function(r){var i=_(r);h(i,r)>=0||R(s.clickOutsideDeactivates,r)||R(s.allowOutsideClick,r)||(r.preventDefault(),r.stopImmediatePropagation())},et=function(){if(n.active)return st.activateTrap(a,l),n.delayInitialFocusTimer=s.delayInitialFocus?lt(function(){E(y())}):E(y()),o.addEventListener("focusin",Q,!0),o.addEventListener("mousedown",B,{capture:!0,passive:!1}),o.addEventListener("touchstart",B,{capture:!0,passive:!1}),o.addEventListener("click",tt,{capture:!0,passive:!1}),o.addEventListener("keydown",W,{capture:!0,passive:!1}),o.addEventListener("keydown",Z),l},ot=function(){if(n.active)return o.removeEventListener("focusin",Q,!0),o.removeEventListener("mousedown",B,!0),o.removeEventListener("touchstart",B,!0),o.removeEventListener("click",tt,!0),o.removeEventListener("keydown",W,!0),o.removeEventListener("keydown",Z),l},gt=function(r){var i=r.some(function(c){var f=Array.from(c.removedNodes);return f.some(function(p){return p===n.mostRecentlyFocusedNode})});i&&E(y())},K=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(gt):void 0,A=function(){K&&(K.disconnect(),n.active&&!n.paused&&n.containers.map(function(r){K.observe(r,{subtree:!0,childList:!0})}))};return l={get active(){return n.active},get paused(){return n.paused},activate:function(r){if(n.active)return this;var i=d(r,"onActivate"),c=d(r,"onPostActivate"),f=d(r,"checkCanFocusTrap");f||k(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=F(o),i==null||i();var p=function(){f&&k(),et(),A(),c==null||c()};return f?(f(n.containers.concat()).then(p,p),this):(p(),this)},deactivate:function(r){if(!n.active)return this;var i=it({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},r);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,ot(),n.active=!1,n.paused=!1,A(),st.deactivateTrap(a,l);var c=d(i,"onDeactivate"),f=d(i,"onPostDeactivate"),p=d(i,"checkCanReturnFocus"),b=d(i,"returnFocus","returnFocusOnDeactivate");c==null||c();var u=function(){lt(function(){b&&E(H(n.nodeFocusedBeforeActivation)),f==null||f()})};return b&&p?(p(H(n.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(r){return n.active?(n.manuallyPaused=!0,this._setPausedState(!0,r)):this},unpause:function(r){return n.active?(n.manuallyPaused=!1,a[a.length-1]!==this?this:this._setPausedState(!1,r)):this},updateContainerElements:function(r){var i=[].concat(r).filter(Boolean);return n.containers=i.map(function(c){return typeof c=="string"?o.querySelector(c):c}),n.active&&k(),A(),this}},Object.defineProperties(l,{_isManuallyPaused:{value:function(){return n.manuallyPaused}},_setPausedState:{value:function(r,i){if(n.paused===r)return this;if(n.paused=r,r){var c=d(i,"onPause"),f=d(i,"onPostPause");c==null||c(),ot(),A(),f==null||f()}else{var p=d(i,"onUnpause"),b=d(i,"onPostUnpause");p==null||p(),k(),et(),A(),b==null||b()}return this}}}),l.updateContainerElements(t),l},te=Object.defineProperty,S=(t,e,o,a)=>{for(var s=void 0,n=t.length-1,l;n>=0;n--)(l=t[n])&&(s=l(e,o,s)||s);return s&&te(e,o,s),s};const vt=class extends wt{constructor(){super(),this._focusTrap=null,this._handleKeydown=e=>{var o;if(e.key==="Escape"&&!this.noCloseOnEscape){e.preventDefault();const a=new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0});this.dispatchEvent(a),(o=this.onDialogCancel)==null||o.call(this,a),this.open=!1;return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)){const a=document.activeElement;if(a&&Et(a,this.shadowRoot,this)){if(a.tagName==="INPUT"&&a.type==="radio")return;e.stopPropagation()}}},this._handleBackdropClick=e=>{var o;if(!(this.noCloseOnBackdrop||!this.open)&&kt(e,this.shadowRoot,".dialog-container")){const a=new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0});this.dispatchEvent(a),(o=this.onDialogCancel)==null||o.call(this,a),this.open=!1}},this._handleCloseButtonClick=e=>{var a;e.stopPropagation();const o=new CustomEvent("dialog-close",{bubbles:!0,composed:!0});this.dispatchEvent(o),(a=this.onDialogClose)==null||a.call(this,o),this.open=!1},this.open=!1,this.heading="",this.description="",this.noCloseOnEscape=!1,this.noCloseOnBackdrop=!1,this.showCloseButton=!1,this.drawerPosition=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.open&&(document.removeEventListener("keydown",this._handleKeydown),this._restoreBackgroundScroll()),this._focusTrap&&(this._focusTrap.deactivate(),this._focusTrap=null)}willUpdate(e){var o,a;if(e.has("open")){const s=e.get("open");if(this.open&&!s){document.addEventListener("keydown",this._handleKeydown),this._preventBackgroundScroll();const n=new CustomEvent("dialog-open",{bubbles:!0,composed:!0});this.dispatchEvent(n),(o=this.onDialogOpen)==null||o.call(this,n)}else if(!this.open&&s){document.removeEventListener("keydown",this._handleKeydown);const n=new CustomEvent("dialog-close",{bubbles:!0,composed:!0});this.dispatchEvent(n),(a=this.onDialogClose)==null||a.call(this,n),this._restoreBackgroundScroll(),this._focusTrap&&(this._focusTrap.deactivate(),this._focusTrap=null)}}}_preventBackgroundScroll(){const e=parseInt(document.body.getAttribute("data-dialog-count")||"0",10);if(e===0){const o=document.documentElement;document.body.setAttribute("data-dialog-original-overflow",document.body.style.overflow||""),document.body.setAttribute("data-dialog-original-scrollbar-gutter",document.body.style.scrollbarGutter||""),document.body.setAttribute("data-dialog-original-html-scrollbar-gutter",o.style.scrollbarGutter||""),document.body.style.overflow="hidden",document.body.style.scrollbarGutter="stable",o.style.scrollbarGutter="stable",document.body.setAttribute("data-dialog-scroll-locked","")}document.body.setAttribute("data-dialog-count",(e+1).toString())}_restoreBackgroundScroll(){const e=parseInt(document.body.getAttribute("data-dialog-count")||"0",10),o=Math.max(0,e-1);if(document.body.setAttribute("data-dialog-count",o.toString()),o===0){const a=document.documentElement,s=document.body.getAttribute("data-dialog-original-overflow"),n=document.body.getAttribute("data-dialog-original-scrollbar-gutter"),l=document.body.getAttribute("data-dialog-original-html-scrollbar-gutter");document.body.style.overflow=s||"",document.body.style.scrollbarGutter=n||"",a.style.scrollbarGutter=l||"",document.body.removeAttribute("data-dialog-original-overflow"),document.body.removeAttribute("data-dialog-original-scrollbar-gutter"),document.body.removeAttribute("data-dialog-original-html-scrollbar-gutter"),document.body.removeAttribute("data-dialog-scroll-locked"),document.body.removeAttribute("data-dialog-count")}}updated(e){var o;if(e.has("open")&&this.open){const a=(o=this.shadowRoot)==null?void 0:o.querySelector(".dialog-container"),s=()=>{if(!a)return;const n=this.getRootNode().host||this;this._focusTrap=Zt([a,n],{escapeDeactivates:!1,clickOutsideDeactivates:!1,returnFocusOnDeactivate:!0,allowOutsideClick:!0,fallbackFocus:a,tabbableOptions:{getShadowRoot:!0}}),this._focusTrap.activate()};if(a){const n=getComputedStyle(a),l=parseFloat(n.transitionDuration),d=n.transitionProperty;l>0&&d!=="none"?a.addEventListener("transitionend",s,{once:!0}):setTimeout(s,0)}else setTimeout(s,0)}}render(){return G`
      <div
        class="dialog-backdrop"
        part="ag-dialog-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby=${this.heading?"dialog-heading":Y}
        aria-label=${this.heading?Y:"Dialog"}
        aria-describedby=${this.description?"dialog-description":Y}
        @click=${this._handleBackdropClick}
      >
        <div class="dialog-container" part="ag-dialog-container">
          <div class="dialog-header" part="ag-dialog-header">
            <slot name="header">
              ${this.heading?G`<h2 id="dialog-heading" part="ag-dialog-heading">${this.heading}</h2>`:""}
            </slot>
            ${this.showCloseButton?G`
              <ag-close-button
                position="top-end"
                label="Close dialog"
                @close-button-click=${this._handleCloseButtonClick}
              ></ag-close-button>
            `:""}
          </div>
          <div class="dialog-content" part="ag-dialog-content">
            ${this.description?G`<p id="dialog-description">${this.description}</p>`:""}
            <slot></slot>
          </div>
          <div class="dialog-footer" part="ag-dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};vt.styles=yt`
    :host {
      display: block;
      visibility: hidden;
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: var(--ag-z-index-modal);
    }

    :host([open]) {
      visibility: visible;
    }

    .dialog-backdrop {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(50 50 50 / 60%);
      opacity: 0;
      transition: opacity var(--ag-motion-fast) ease;
    }

    :host([open]) .dialog-backdrop {
      opacity: 1;
    }

    .dialog-container {
      overflow-y: auto;
      max-inline-size: 90vw;
      max-block-size: 90vh;
      position: relative;
      background: var(--ag-background-primary);
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-lg);
      padding: var(--ag-space-6);
      margin: var(--ag-space-4);
      opacity: 0;
      transform: translateY(10%);
      transition: opacity var(--ag-motion-fast) ease, transform var(--ag-motion-slow) ease var(--ag-motion-fast);
    }

    :host([open]) .dialog-container {
      opacity: 1;
      transform: translateY(0);
    }

    /* Drawer positioning styles */
    :host([drawer-position]) {
      /* Host sizing for edge positions */
    }

    :host([drawer-position="start"]),
    :host([drawer-position="end"]) {
      height: 100%;
    }

    :host([drawer-position="top"]),
    :host([drawer-position="bottom"]) {
      width: 100%;
    }

    /* Base drawer container setup */
    :host([drawer-position]) .dialog-container {
      box-sizing: border-box;
      position: fixed;
      margin: initial;
      border-radius: 0;
    }

    /* Vertical edge positions (start/end) sizing */
    :host([drawer-position="start"]) .dialog-container,
    :host([drawer-position="end"]) .dialog-container {
      height: 100%;
      width: var(--ag-drawer-width);
      max-block-size: initial;
    }

    /* Horizontal edge positions (top/bottom) sizing */
    :host([drawer-position="top"]) .dialog-container,
    :host([drawer-position="bottom"]) .dialog-container {
      height: var(--ag-sheet-height);
      width: 100%;
      max-inline-size: initial;
    }

    /* Top position - closed state */
    :host([drawer-position="top"]) .dialog-container {
      top: 0;
      transform: translateY(-100%);
    }

    /* Bottom position - closed state */
    :host([drawer-position="bottom"]) .dialog-container {
      bottom: 0;
      transform: translateY(100%);
    }

    /* Start position - closed state */
    :host([drawer-position="start"]) .dialog-container {
      inset-inline-start: 0;
      transform: translateX(-100%);
    }

    /* End position - closed state */
    :host([drawer-position="end"]) .dialog-container {
      inset-inline-end: 0;
      transform: translateX(100%);
    }

    /* RTL Support - flip transform directions for start/end drawers */
    :host-context([dir="rtl"]):host([drawer-position="start"]) .dialog-container {
      transform: translateX(100%);
    }

    :host-context([dir="rtl"]):host([drawer-position="end"]) .dialog-container {
      transform: translateX(-100%);
    }

    /* Open state - remove transforms to slide into view */
    :host([drawer-position="top"][open]) .dialog-container,
    :host([drawer-position="bottom"][open]) .dialog-container,
    :host([drawer-position="start"][open]) .dialog-container,
    :host([drawer-position="end"][open]) .dialog-container {
      transform: none;
    }

    .dialog-header {
      margin-block-end: var(--ag-space-4);
    }

    .dialog-header h2 {
      margin: 0;
      font-size: var(--ag-font-size-lg);
      font-weight: var(--ag-font-weight-semibold);
      color: var(--ag-text-primary);
    }

    .dialog-content {
      margin-block-end: var(--ag-space-4);
    }

    .dialog-content:last-child {
      margin-block-end: 0;
    }

    .dialog-content p {
      margin: 0 0 var(--ag-space-4) 0;
      color: var(--ag-text-secondary);
    }

    .dialog-footer {
      margin-block-start: var(--ag-space-4);
    }

    .dialog-footer:empty {
      margin-block-start: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .dialog-backdrop,
      .dialog-container {
        transition: none;
      }
    }
  `;let w=vt;S([N({type:Boolean,reflect:!0})],w.prototype,"open");S([N({type:String})],w.prototype,"heading");S([N({type:String})],w.prototype,"description");S([N({type:Boolean})],w.prototype,"noCloseOnEscape");S([N({type:Boolean})],w.prototype,"noCloseOnBackdrop");S([N({type:Boolean})],w.prototype,"showCloseButton");S([N({type:String,reflect:!0,attribute:"drawer-position"})],w.prototype,"drawerPosition");S([N({attribute:!1})],w.prototype,"onDialogOpen");S([N({attribute:!1})],w.prototype,"onDialogClose");S([N({attribute:!1})],w.prototype,"onDialogCancel");customElements.get("ag-dialog")||customElements.define("ag-dialog",w);
