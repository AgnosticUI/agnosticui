import{i as ye,z as S,a as we,E as Y,x as _}from"./Button.DkmThuAs.js";import"./CloseButton.otVweCM4.js";function ke(e,t,o){if(!t)return!1;const a=t.querySelector(o);return a?!e.composedPath().includes(a):!1}function Ee(e,t,o){return!e||!t?!1:!!(t.contains(e)||o&&o.contains(e))}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ce=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],G=ce.join(","),ue=typeof Element>"u",T=ue?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,j=!ue&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},z=function e(t,o){var a;o===void 0&&(o=!0);var s=t==null||(a=t.getAttribute)===null||a===void 0?void 0:a.call(t,"inert"),n=s===""||s==="true",c=n||o&&t&&e(t.parentNode);return c},Se=function(e){var t,o=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return o===""||o==="true"},de=function(e,t,o){if(z(e))return[];var a=Array.prototype.slice.apply(e.querySelectorAll(G));return t&&T.call(e,G)&&a.unshift(e),a=a.filter(o),a},fe=function e(t,o,a){for(var s=[],n=Array.from(t);n.length;){var c=n.shift();if(!z(c,!1))if(c.tagName==="SLOT"){var d=c.assignedElements(),h=d.length?d:c.children,m=e(h,!0,a);a.flatten?s.push.apply(s,m):s.push({scopeParent:c,candidates:m})}else{var y=T.call(c,G);y&&a.filter(c)&&(o||!t.includes(c))&&s.push(c);var k=c.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(c),x=!z(k,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(c));if(k&&x){var E=e(k===!0?c.children:k.children,!0,a);a.flatten?s.push.apply(s,E):s.push({scopeParent:c,candidates:E})}else n.unshift.apply(n,c.children)}}return s},pe=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},C=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Se(e))&&!pe(e)?0:e.tabIndex},Ne=function(e,t){var o=C(e);return o<0&&t&&!pe(e)?0:o},Oe=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},be=function(e){return e.tagName==="INPUT"},Ce=function(e){return be(e)&&e.type==="hidden"},Te=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(o){return o.tagName==="SUMMARY"});return t},Pe=function(e,t){for(var o=0;o<e.length;o++)if(e[o].checked&&e[o].form===t)return e[o]},De=function(e){if(!e.name)return!0;var t=e.form||j(e),o=function(n){return t.querySelectorAll('input[type="radio"][name="'+n+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=o(window.CSS.escape(e.name));else try{a=o(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var s=Pe(a,e.form);return!s||s===e},xe=function(e){return be(e)&&e.type==="radio"},Ae=function(e){return xe(e)&&!De(e)},Fe=function(e){var t,o=e&&j(e),a=(t=o)===null||t===void 0?void 0:t.host,s=!1;if(o&&o!==e){var n,c,d;for(s=!!((n=a)!==null&&n!==void 0&&(c=n.ownerDocument)!==null&&c!==void 0&&c.contains(a)||e!=null&&(d=e.ownerDocument)!==null&&d!==void 0&&d.contains(e));!s&&a;){var h,m,y;o=j(a),a=(h=o)===null||h===void 0?void 0:h.host,s=!!((m=a)!==null&&m!==void 0&&(y=m.ownerDocument)!==null&&y!==void 0&&y.contains(a))}}return s},ae=function(e){var t=e.getBoundingClientRect(),o=t.width,a=t.height;return o===0&&a===0},Re=function(e,t){var o=t.displayCheck,a=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=T.call(e,"details>summary:first-of-type"),n=s?e.parentElement:e;if(T.call(n,"details:not([open]) *"))return!0;if(!o||o==="full"||o==="legacy-full"){if(typeof a=="function"){for(var c=e;e;){var d=e.parentElement,h=j(e);if(d&&!d.shadowRoot&&a(d)===!0)return ae(e);e.assignedSlot?e=e.assignedSlot:!d&&h!==e.ownerDocument?e=h.host:e=d}e=c}if(Fe(e))return!e.getClientRects().length;if(o!=="legacy-full")return!0}else if(o==="non-zero-area")return ae(e);return!1},Ie=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var o=0;o<t.children.length;o++){var a=t.children.item(o);if(a.tagName==="LEGEND")return T.call(t,"fieldset[disabled] *")?!0:!a.contains(e)}return!0}t=t.parentElement}return!1},$=function(e,t){return!(t.disabled||z(t)||Ce(t)||Re(t,e)||Te(t)||Ie(t))},X=function(e,t){return!(Ae(t)||C(t)<0||!$(e,t))},Be=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},_e=function e(t){var o=[],a=[];return t.forEach(function(s,n){var c=!!s.scopeParent,d=c?s.scopeParent:s,h=Ne(d,c),m=c?e(s.candidates):d;h===0?c?o.push.apply(o,m):o.push(d):a.push({documentOrder:n,tabIndex:h,item:s,isScope:c,content:m})}),a.sort(Oe).reduce(function(s,n){return n.isScope?s.push.apply(s,n.content):s.push(n.content),s},[]).concat(o)},Le=function(e,t){t=t||{};var o;return t.getShadowRoot?o=fe([e],t.includeContainer,{filter:X.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Be}):o=de(e,t.includeContainer,X.bind(null,t)),_e(o)},Ge=function(e,t){t=t||{};var o;return t.getShadowRoot?o=fe([e],t.includeContainer,{filter:$.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):o=de(e,t.includeContainer,$.bind(null,t)),o},D=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return T.call(e,G)===!1?!1:X(t,e)},je=ce.concat("iframe").join(","),q=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return T.call(e,je)===!1?!1:$(t,e)};/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function V(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,a=Array(t);o<t;o++)a[o]=e[o];return a}function ze(e){if(Array.isArray(e))return V(e)}function $e(e,t,o){return(t=qe(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Ke(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,a)}return o}function ie(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?re(Object(o),!0).forEach(function(a){$e(e,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):re(Object(o)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))})}return e}function Ue(e){return ze(e)||Ke(e)||Xe(e)||Me()}function Ye(e,t){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var a=o.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qe(e){var t=Ye(e,"string");return typeof t=="symbol"?t:t+""}function Xe(e,t){if(e){if(typeof e=="string")return V(e,t);var o={}.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?V(e,t):void 0}}var se={activateTrap:function(e,t){if(e.length>0){var o=e[e.length-1];o!==t&&o._setPausedState(!0)}var a=e.indexOf(t);a===-1||e.splice(a,1),e.push(t)},deactivateTrap:function(e,t){var o=e.indexOf(t);o!==-1&&e.splice(o,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)}},Ve=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},He=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},I=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},Je=function(e){return I(e)&&!e.shiftKey},Qe=function(e){return I(e)&&e.shiftKey},le=function(e){return setTimeout(e,0)},R=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return typeof e=="function"?e.apply(void 0,o):e},L=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},We=[],Ze=function(e,t){var o=(t==null?void 0:t.document)||document,a=(t==null?void 0:t.trapStack)||We,s=ie({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Je,isKeyBackward:Qe},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},c,d=function(r,i,l){return r&&r[i]!==void 0?r[i]:s[l||i]},h=function(r,i){var l=typeof(i==null?void 0:i.composedPath)=="function"?i.composedPath():void 0;return n.containerGroups.findIndex(function(f){var p=f.container,b=f.tabbableNodes;return p.contains(r)||(l==null?void 0:l.includes(p))||b.find(function(u){return u===r})})},m=function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=i.hasFallback,f=l===void 0?!1:l,p=i.params,b=p===void 0?[]:p,u=s[r];if(typeof u=="function"&&(u=u.apply(void 0,Ue(b))),u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(r,"` was specified but was not a node, or did not return a node"))}var g=u;if(typeof u=="string"){try{g=o.querySelector(u)}catch(v){throw new Error("`".concat(r,'` appears to be an invalid selector; error="').concat(v.message,'"'))}if(!g&&!f)throw new Error("`".concat(r,"` as selector refers to no known node"))}return g},y=function(){var r=m("initialFocus",{hasFallback:!0});if(r===!1)return!1;if(r===void 0||r&&!q(r,s.tabbableOptions))if(h(o.activeElement)>=0)r=o.activeElement;else{var i=n.tabbableGroups[0],l=i&&i.firstTabbableNode;r=l||m("fallbackFocus")}else r===null&&(r=m("fallbackFocus"));if(!r)throw new Error("Your focus-trap needs to have at least one focusable element");return r},k=function(){if(n.containerGroups=n.containers.map(function(r){var i=Le(r,s.tabbableOptions),l=Ge(r,s.tabbableOptions),f=i.length>0?i[0]:void 0,p=i.length>0?i[i.length-1]:void 0,b=l.find(function(v){return D(v)}),u=l.slice().reverse().find(function(v){return D(v)}),g=!!i.find(function(v){return C(v)>0});return{container:r,tabbableNodes:i,focusableNodes:l,posTabIndexesFound:g,firstTabbableNode:f,lastTabbableNode:p,firstDomTabbableNode:b,lastDomTabbableNode:u,nextTabbableNode:function(v){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,F=i.indexOf(v);return F<0?P?l.slice(l.indexOf(v)+1).find(function(O){return D(O)}):l.slice(0,l.indexOf(v)).reverse().find(function(O){return D(O)}):i[F+(P?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(r){return r.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!m("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(r){return r.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},x=function(r){var i=r.activeElement;if(i)return i.shadowRoot&&i.shadowRoot.activeElement!==null?x(i.shadowRoot):i},E=function(r){if(r!==!1&&r!==x(document)){if(!r||!r.focus){E(y());return}r.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=r,Ve(r)&&r.select()}},H=function(r){var i=m("setReturnFocus",{params:[r]});return i||(i===!1?!1:r)},J=function(r){var i=r.target,l=r.event,f=r.isBackward,p=f===void 0?!1:f;i=i||L(l),k();var b=null;if(n.tabbableGroups.length>0){var u=h(i,l),g=u>=0?n.containerGroups[u]:void 0;if(u<0)p?b=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:b=n.tabbableGroups[0].firstTabbableNode;else if(p){var v=n.tabbableGroups.findIndex(function(M){var U=M.firstTabbableNode;return i===U});if(v<0&&(g.container===i||q(i,s.tabbableOptions)&&!D(i,s.tabbableOptions)&&!g.nextTabbableNode(i,!1))&&(v=u),v>=0){var P=v===0?n.tabbableGroups.length-1:v-1,F=n.tabbableGroups[P];b=C(i)>=0?F.lastTabbableNode:F.lastDomTabbableNode}else I(l)||(b=g.nextTabbableNode(i,!1))}else{var O=n.tabbableGroups.findIndex(function(M){var U=M.lastTabbableNode;return i===U});if(O<0&&(g.container===i||q(i,s.tabbableOptions)&&!D(i,s.tabbableOptions)&&!g.nextTabbableNode(i))&&(O=u),O>=0){var me=O===n.tabbableGroups.length-1?0:O+1,ne=n.tabbableGroups[me];b=C(i)>=0?ne.firstTabbableNode:ne.firstDomTabbableNode}else I(l)||(b=g.nextTabbableNode(i))}}else b=m("fallbackFocus");return b},B=function(r){var i=L(r);if(!(h(i,r)>=0)){if(R(s.clickOutsideDeactivates,r)){c.deactivate({returnFocus:s.returnFocusOnDeactivate});return}R(s.allowOutsideClick,r)||r.preventDefault()}},Q=function(r){var i=L(r),l=h(i,r)>=0;if(l||i instanceof Document)l&&(n.mostRecentlyFocusedNode=i);else{r.stopImmediatePropagation();var f,p=!0;if(n.mostRecentlyFocusedNode)if(C(n.mostRecentlyFocusedNode)>0){var b=h(n.mostRecentlyFocusedNode),u=n.containerGroups[b].tabbableNodes;if(u.length>0){var g=u.findIndex(function(v){return v===n.mostRecentlyFocusedNode});g>=0&&(s.isKeyForward(n.recentNavEvent)?g+1<u.length&&(f=u[g+1],p=!1):g-1>=0&&(f=u[g-1],p=!1))}}else n.containerGroups.some(function(v){return v.tabbableNodes.some(function(P){return C(P)>0})})||(p=!1);else p=!1;p&&(f=J({target:n.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(n.recentNavEvent)})),E(f||n.mostRecentlyFocusedNode||y())}n.recentNavEvent=void 0},he=function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=r;var l=J({event:r,isBackward:i});l&&(I(r)&&r.preventDefault(),E(l))},W=function(r){(s.isKeyForward(r)||s.isKeyBackward(r))&&he(r,s.isKeyBackward(r))},Z=function(r){He(r)&&R(s.escapeDeactivates,r)!==!1&&(r.preventDefault(),c.deactivate())},ee=function(r){var i=L(r);h(i,r)>=0||R(s.clickOutsideDeactivates,r)||R(s.allowOutsideClick,r)||(r.preventDefault(),r.stopImmediatePropagation())},te=function(){if(n.active)return se.activateTrap(a,c),n.delayInitialFocusTimer=s.delayInitialFocus?le(function(){E(y())}):E(y()),o.addEventListener("focusin",Q,!0),o.addEventListener("mousedown",B,{capture:!0,passive:!1}),o.addEventListener("touchstart",B,{capture:!0,passive:!1}),o.addEventListener("click",ee,{capture:!0,passive:!1}),o.addEventListener("keydown",W,{capture:!0,passive:!1}),o.addEventListener("keydown",Z),c},oe=function(){if(n.active)return o.removeEventListener("focusin",Q,!0),o.removeEventListener("mousedown",B,!0),o.removeEventListener("touchstart",B,!0),o.removeEventListener("click",ee,!0),o.removeEventListener("keydown",W,!0),o.removeEventListener("keydown",Z),c},ge=function(r){var i=r.some(function(l){var f=Array.from(l.removedNodes);return f.some(function(p){return p===n.mostRecentlyFocusedNode})});i&&E(y())},K=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(ge):void 0,A=function(){K&&(K.disconnect(),n.active&&!n.paused&&n.containers.map(function(r){K.observe(r,{subtree:!0,childList:!0})}))};return c={get active(){return n.active},get paused(){return n.paused},activate:function(r){if(n.active)return this;var i=d(r,"onActivate"),l=d(r,"onPostActivate"),f=d(r,"checkCanFocusTrap");f||k(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=x(o),i==null||i();var p=function(){f&&k(),te(),A(),l==null||l()};return f?(f(n.containers.concat()).then(p,p),this):(p(),this)},deactivate:function(r){if(!n.active)return this;var i=ie({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},r);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,oe(),n.active=!1,n.paused=!1,A(),se.deactivateTrap(a,c);var l=d(i,"onDeactivate"),f=d(i,"onPostDeactivate"),p=d(i,"checkCanReturnFocus"),b=d(i,"returnFocus","returnFocusOnDeactivate");l==null||l();var u=function(){le(function(){b&&E(H(n.nodeFocusedBeforeActivation)),f==null||f()})};return b&&p?(p(H(n.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(r){return n.active?(n.manuallyPaused=!0,this._setPausedState(!0,r)):this},unpause:function(r){return n.active?(n.manuallyPaused=!1,a[a.length-1]!==this?this:this._setPausedState(!1,r)):this},updateContainerElements:function(r){var i=[].concat(r).filter(Boolean);return n.containers=i.map(function(l){return typeof l=="string"?o.querySelector(l):l}),n.active&&k(),A(),this}},Object.defineProperties(c,{_isManuallyPaused:{value:function(){return n.manuallyPaused}},_setPausedState:{value:function(r,i){if(n.paused===r)return this;if(n.paused=r,r){var l=d(i,"onPause"),f=d(i,"onPostPause");l==null||l(),oe(),A(),f==null||f()}else{var p=d(i,"onUnpause"),b=d(i,"onPostUnpause");p==null||p(),k(),te(),A(),b==null||b()}return this}}}),c.updateContainerElements(e),c},et=Object.defineProperty,N=(e,t,o,a)=>{for(var s=void 0,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=c(t,o,s)||s);return s&&et(t,o,s),s};const ve=class extends we{constructor(){super(),this._focusTrap=null,this._handleKeydown=t=>{var o;if(t.key==="Escape"&&!this.noCloseOnEscape){t.preventDefault();const a=new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0});this.dispatchEvent(a),(o=this.onDialogCancel)==null||o.call(this,a),this.open=!1;return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.key)){const a=document.activeElement;if(a&&Ee(a,this.shadowRoot,this)){if(a.tagName==="INPUT"&&a.type==="radio")return;t.stopPropagation()}}},this._handleBackdropClick=t=>{var o;if(!(this.noCloseOnBackdrop||!this.open)&&ke(t,this.shadowRoot,".dialog-container")){const a=new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0});this.dispatchEvent(a),(o=this.onDialogCancel)==null||o.call(this,a),this.open=!1}},this._handleCloseButtonClick=t=>{var a;t.stopPropagation();const o=new CustomEvent("dialog-close",{bubbles:!0,composed:!0});this.dispatchEvent(o),(a=this.onDialogClose)==null||a.call(this,o),this.open=!1},this.open=!1,this.heading="",this.description="",this.noCloseOnEscape=!1,this.noCloseOnBackdrop=!1,this.showCloseButton=!1,this.drawerPosition=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.open&&(document.removeEventListener("keydown",this._handleKeydown),this._restoreBackgroundScroll()),this._focusTrap&&(this._focusTrap.deactivate(),this._focusTrap=null)}willUpdate(t){var o,a;if(t.has("open")){const s=t.get("open");if(this.open&&!s){document.addEventListener("keydown",this._handleKeydown),this._preventBackgroundScroll();const n=new CustomEvent("dialog-open",{bubbles:!0,composed:!0});this.dispatchEvent(n),(o=this.onDialogOpen)==null||o.call(this,n)}else if(!this.open&&s){document.removeEventListener("keydown",this._handleKeydown);const n=new CustomEvent("dialog-close",{bubbles:!0,composed:!0});this.dispatchEvent(n),(a=this.onDialogClose)==null||a.call(this,n),this._restoreBackgroundScroll(),this._focusTrap&&(this._focusTrap.deactivate(),this._focusTrap=null)}}}_preventBackgroundScroll(){const t=parseInt(document.body.getAttribute("data-dialog-count")||"0",10);t===0&&(document.body.setAttribute("data-dialog-original-overflow",document.body.style.overflow||""),document.body.style.overflow="hidden",document.body.setAttribute("data-dialog-scroll-locked","")),document.body.setAttribute("data-dialog-count",(t+1).toString())}_restoreBackgroundScroll(){const t=parseInt(document.body.getAttribute("data-dialog-count")||"0",10),o=Math.max(0,t-1);if(document.body.setAttribute("data-dialog-count",o.toString()),o===0){const a=document.body.getAttribute("data-dialog-original-overflow");document.body.style.overflow=a||"",document.body.removeAttribute("data-dialog-original-overflow"),document.body.removeAttribute("data-dialog-scroll-locked"),document.body.removeAttribute("data-dialog-count")}}updated(t){var o;if(t.has("open")&&this.open){const a=(o=this.shadowRoot)==null?void 0:o.querySelector(".dialog-container"),s=()=>{if(!a)return;const n=this.getRootNode().host||this;this._focusTrap=Ze([a,n],{escapeDeactivates:!1,clickOutsideDeactivates:!1,returnFocusOnDeactivate:!0,allowOutsideClick:!0,fallbackFocus:a,tabbableOptions:{getShadowRoot:!0}}),this._focusTrap.activate()};if(a){const n=getComputedStyle(a),c=parseFloat(n.transitionDuration),d=n.transitionProperty;c>0&&d!=="none"?a.addEventListener("transitionend",s,{once:!0}):setTimeout(s,0)}else setTimeout(s,0)}}render(){return _`
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
              ${this.heading?_`<h2 id="dialog-heading" part="ag-dialog-heading">${this.heading}</h2>`:""}
            </slot>
            ${this.showCloseButton?_`
              <ag-close-button
                position="top-end"
                label="Close dialog"
                @close-button-click=${this._handleCloseButtonClick}
              ></ag-close-button>
            `:""}
          </div>
          <div class="dialog-content" part="ag-dialog-content">
            ${this.description?_`<p id="dialog-description">${this.description}</p>`:""}
            <slot></slot>
          </div>
          <div class="dialog-footer" part="ag-dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};ve.styles=ye`
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
  `;let w=ve;N([S({type:Boolean,reflect:!0})],w.prototype,"open");N([S({type:String})],w.prototype,"heading");N([S({type:String})],w.prototype,"description");N([S({type:Boolean})],w.prototype,"noCloseOnEscape");N([S({type:Boolean})],w.prototype,"noCloseOnBackdrop");N([S({type:Boolean})],w.prototype,"showCloseButton");N([S({type:String,reflect:!0,attribute:"drawer-position"})],w.prototype,"drawerPosition");N([S({attribute:!1})],w.prototype,"onDialogOpen");N([S({attribute:!1})],w.prototype,"onDialogClose");N([S({attribute:!1})],w.prototype,"onDialogCancel");customElements.get("ag-dialog")||customElements.define("ag-dialog",w);
