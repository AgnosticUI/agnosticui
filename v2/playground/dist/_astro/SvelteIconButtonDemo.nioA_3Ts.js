const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.C0D8tGUV.js","_astro/_Accordion.B-PO82ap.js","_astro/lit-element.DMCH56eX.js","_astro/MinimalAccordion.Dz3P1kUl.js","_astro/_Input.CqJBE9gH.js","_astro/_IconButton.ITUY3W3l.js","_astro/lit-html-Bm_EwbrZ.BUqNPNwy.js","_astro/_Tooltip.BRWHCaJW.js"])))=>i.map(i=>d[i]);
import{_ as mt}from"./preload-helper.BlTxHScW.js";import{c as Ae,o as ht,s as l}from"./attributes.DCyMIrjB.js";import{l as L,m as he,C as ge,aL as pt,k as $t,E as xt,x as yt,aM as kt,a1 as St,aN as zt,Y as Nt,w as Pt,v as De,u as Ie,X as ie,B as wt,A as qt,R as Mt,af as Et,aO as At,ax as Le,aP as Te,a5 as se,aQ as Dt,h as u,aR as K,aS as Ce,K as It,aT as pe,aU as Lt,aV as Ve,p as Tt,i as ae,aW as Rt,D as Ot,aX as Re,aa as Oe,aY as Bt,aw as Ct,aZ as Vt,a_ as Ut,a$ as ee,a6 as Ue,b0 as We,b1 as Wt,b2 as Ft,b3 as Ht,b4 as Yt,a as m,b as Fe,c as He,d as v,g as d,r as c,b5 as S,b6 as z,b7 as jt,b8 as Xt,f as re,t as w,e as h,J as me,n as Kt,b9 as Gt}from"./utils.DkxgpEgo.js";import{s as ne}from"./render.BCvDx4He.js";import{e as Ye,a as je,i as Zt}from"./each.BIhMuz01.js";function N(t,e,a,n,o){L&&he();var i=e.$$slots?.[a],s=!1;i===!0&&(i=e.children,s=!0),i===void 0||i(t,s?()=>n:n)}function Jt(t,e,a,n,o,i){let s=L;L&&he();var r,p,_=null;L&&ge.nodeType===pt&&(_=ge,he());var E=L?ge:t,x;$t(()=>{const b=e()||null;var D=kt;b!==r&&(x&&(b===null?wt(x,()=>{x=null,p=null}):b===p?qt(x):Mt(x)),b&&b!==p&&(x=yt(()=>{if(_=L?_:document.createElementNS(D,b),St(_,_),n){L&&zt(b)&&_.append(document.createComment(""));var g=L?Nt(_):_.appendChild(Pt());L&&(g===null?De(!1):Ie(g)),n(_,g)}ie.nodes_end=_,E.before(_)})),r=b,r&&(p=r))},xt),s&&(De(!0),Ie(E))}function Xe(t=!1){const e=Et,a=e.l.u;if(!a)return;let n=()=>K(e.s);if(t){let o=0,i={};const s=Ce(()=>{let r=!1;const p=e.s;for(const _ in p)p[_]!==i[_]&&(i[_]=p[_],r=!0);return r&&o++,o});n=()=>u(s)}a.b.length&&At(()=>{Be(e,n),Te(a.b)}),Le(()=>{const o=se(()=>a.m.map(Dt));return()=>{for(const i of o)typeof i=="function"&&i()}}),a.a.length&&Le(()=>{Be(e,n),Te(a.a)})}function Be(t,e){if(t.l.s)for(const a of t.l.s)u(a);e()}let oe=!1;function Qt(t){var e=oe;try{return oe=!1,[t(),oe]}finally{oe=e}}const ea={get(t,e){if(!t.exclude.includes(e))return u(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,a){if(!(e in t.special)){var n=ie;try{Oe(t.parent_effect),t.special[e]=C({get[e](){return t.props[e]}},e,Ve)}finally{Oe(n)}}return t.special[e](a),Re(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),Re(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function k(t,e){return new Proxy({props:t,exclude:e,special:{},version:It(0),parent_effect:ie},ea)}const ta={get(t,e){let a=t.props.length;for(;a--;){let n=t.props[a];if(ee(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,a){let n=t.props.length;for(;n--;){let o=t.props[n];ee(o)&&(o=o());const i=pe(o,e);if(i&&i.set)return i.set(a),!0}return!1},getOwnPropertyDescriptor(t,e){let a=t.props.length;for(;a--;){let n=t.props[a];if(ee(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const o=pe(n,e);return o&&!o.configurable&&(o.configurable=!0),o}}},has(t,e){if(e===Ue||e===We)return!1;for(let a of t.props)if(ee(a)&&(a=a()),a!=null&&e in a)return!0;return!1},ownKeys(t){const e=[];for(let a of t.props)if(ee(a)&&(a=a()),!!a){for(const n in a)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(a))e.includes(n)||e.push(n)}return e}};function q(...t){return new Proxy({props:t},ta)}function C(t,e,a,n){var o=!Ct||(a&Vt)!==0,i=(a&Bt)!==0,s=(a&Wt)!==0,r=n,p=!0,_=()=>(p&&(p=!1,r=s?se(n):n),r),E;if(i){var x=Ue in t||We in t;E=pe(t,e)?.set??(x&&e in t?f=>t[e]=f:void 0)}var b,D=!1;i?[b,D]=Qt(()=>t[e]):b=t[e],b===void 0&&n!==void 0&&(b=_(),E&&(o&&Lt(),E(b)));var g;if(o?g=()=>{var f=t[e];return f===void 0?_():(p=!0,f)}:g=()=>{var f=t[e];return f!==void 0&&(r=void 0),f===void 0?r:f},o&&(a&Ve)===0)return g;if(E){var y=t.$$legacy;return(function(f,T){return arguments.length>0?((!o||!T||y||D)&&E(T?g():f),f):g()})}var I=!1,$=((a&Ut)!==0?Ce:Ot)(()=>(I=!1,g()));i&&u($);var G=ie;return(function(f,T){if(arguments.length>0){const A=T?u($):o&&i?Tt(f):f;return ae($,A),I=!0,r!==void 0&&(r=A),f}return Ft&&I||(G.f&Rt)!==0?$.v:u($)})}Ht();/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const aa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var na=Yt("<svg><!><!></svg>");function M(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]),n=k(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);He(e,!1);let o=C(e,"name",8,void 0),i=C(e,"color",8,"currentColor"),s=C(e,"size",8,24),r=C(e,"strokeWidth",8,2),p=C(e,"absoluteStrokeWidth",8,!1),_=C(e,"iconNode",24,()=>[]);const E=(...g)=>g.filter((y,I,$)=>!!y&&$.indexOf(y)===I).join(" ");Xe();var x=na();Ae(x,(g,y)=>({...aa,...n,width:s(),height:s(),stroke:i(),"stroke-width":g,class:y}),[()=>(K(p()),K(r()),K(s()),se(()=>p()?Number(r())*24/Number(s()):r())),()=>(K(o()),K(a),se(()=>E("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var b=d(x);Ye(b,1,_,je,(g,y)=>{var I=jt(()=>Xt(u(y),2));let $=()=>u(I)[0],G=()=>u(I)[1];var f=S(),T=z(f);Jt(T,$,!0,(A,$e)=>{Ae(A,()=>({...G()}))}),m(g,f)});var D=v(b);N(D,e,"default",{}),c(x),m(t,x),Fe()}function oa(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4.929 4.929 19.07 19.071"}],["circle",{cx:"12",cy:"12",r:"10"}]];M(t,q({name:"ban"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function sa(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]];M(t,q({name:"bookmark"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function ia(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];M(t,q({name:"chevron-down"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function ra(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];M(t,q({name:"download"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function la(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];M(t,q({name:"heart"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function ca(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];M(t,q({name:"info"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function da(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];M(t,q({name:"pen-line"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function ua(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];M(t,q({name:"save"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function va(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];M(t,q({name:"settings"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function fa(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];M(t,q({name:"star"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function _a(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];M(t,q({name:"trash-2"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function ba(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];M(t,q({name:"upload"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}function te(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];M(t,q({name:"x"},()=>a,{get iconNode(){return n},children:(o,i)=>{var s=S(),r=z(s);N(r,e,"default",{}),m(o,s)},$$slots:{default:!0}}))}var ga=re('<p class="empty-state svelte-d9vqxb">No actions yet. Click some buttons above!</p>'),ma=re('<li class="action-item svelte-d9vqxb"> </li>'),ha=re('<ul class="action-list svelte-d9vqxb"></ul>'),pa=re(`<div class="svelte-icon-button-demo svelte-d9vqxb"><h3 class="demo-title svelte-d9vqxb">Interactive Svelte IconButton Demo</h3> <div class="demo-section svelte-d9vqxb"><h4 class="section-title svelte-d9vqxb">Basic Actions</h4> <div class="button-group svelte-d9vqxb"><ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button></div></div> <div class="demo-section svelte-d9vqxb"><h4 class="section-title svelte-d9vqxb">Toggle Favorites</h4> <div class="favorites-grid svelte-d9vqxb"><span class="favorite-item favorite-heart svelte-d9vqxb"><ag-icon-button><!></ag-icon-button> <small class="favorite-status svelte-d9vqxb"> </small></span> <span class="favorite-item favorite-star svelte-d9vqxb"><ag-icon-button><!></ag-icon-button> <small class="favorite-status svelte-d9vqxb"> </small></span> <span class="favorite-item favorite-bookmark svelte-d9vqxb"><ag-icon-button><!></ag-icon-button> <small class="favorite-status svelte-d9vqxb"> </small></span></div></div> <div class="demo-section svelte-d9vqxb"><h4 class="section-title svelte-d9vqxb">Different Sizes</h4> <div class="button-group svelte-d9vqxb"><ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button></div></div> <div class="demo-section svelte-d9vqxb"><h4 class="section-title svelte-d9vqxb">Custom SVG Icons</h4> <div class="button-group svelte-d9vqxb"><ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button></div></div> <div class="demo-section svelte-d9vqxb"><h4 class="section-title svelte-d9vqxb">States Demo</h4> <div class="button-group svelte-d9vqxb"><ag-icon-button><!></ag-icon-button> <ag-icon-button><!></ag-icon-button></div></div> <div class="demo-section svelte-d9vqxb"><h4 class="section-title svelte-d9vqxb">Action Log <button class="clear-button svelte-d9vqxb">Clear</button></h4> <div class="action-log svelte-d9vqxb"><!></div></div> <div class="demo-info svelte-d9vqxb"><strong>Svelte Integration Features:</strong> Direct web component usage, Svelte reactivity,
    custom event handling, and seamless integration with Svelte's component system while maintaining
    the accessibility and performance of the underlying web component.</div></div>`,2);function za(t,e){He(e,!1),ht(async()=>{typeof window<"u"&&await mt(()=>import("./index.C0D8tGUV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))});let a=me([]),n=me(!1),o=me({heart:!1,star:!1,bookmark:!1});function i(P){ae(a,[`${new Date().toLocaleTimeString()}: ${P}`,...u(a).slice(0,9)])}function s(P){Gt(o,u(o)[P]=!u(o)[P]),i(`${P} ${u(o)[P]?"added to":"removed from"} favorites`)}async function r(){u(n)||(ae(n,!0),i("Save operation started..."),setTimeout(()=>{ae(n,!1),i("Save completed successfully!")},2e3))}function p(){i("Edit mode activated")}function _(){confirm("Are you sure you want to delete this item?")?i("Item deleted"):i("Delete cancelled")}function E(){i("Info dialog opened")}function x(){ae(a,[])}Xe();var b=pa(),D=v(d(b),2),g=v(d(D),2),y=d(g);l(y,"label","Edit item"),l(y,"variant","primary");var I=d(y);da(I,{size:24}),c(y);var $=v(y,2);l($,"label","Information"),l($,"variant","secondary");var G=d($);ca(G,{size:24}),c($);var f=v($,2);l(f,"label","Delete item"),l(f,"variant","danger");var T=d(f);_a(T,{size:24}),c(f);var A=v(f,2);w(()=>l(A,"label",u(n)?"Saving...":"Save")),l(A,"variant","primary"),w(()=>l(A,"loading",u(n))),w(()=>l(A,"disabled",u(n)));var $e=d(A);ua($e,{size:24}),c(A),c(g),c(D);var le=v(D,2),xe=v(d(le),2),ce=d(xe),R=d(ce);w(()=>l(R,"label",u(o).heart?"Remove from favorites":"Add to favorites")),w(()=>l(R,"variant",u(o).heart?"primary":"ghost")),w(()=>l(R,"pressed",u(o).heart));var Ke=d(R);la(Ke,{size:24}),c(R);var ye=v(R,2),Ge=d(ye,!0);c(ye),c(ce);var de=v(ce,2),O=d(de);w(()=>l(O,"label",u(o).star?"Remove star":"Add star")),w(()=>l(O,"variant",u(o).star?"secondary":"ghost")),w(()=>l(O,"pressed",u(o).star));var Ze=d(O);fa(Ze,{size:24}),c(O);var ke=v(O,2),Je=d(ke,!0);c(ke),c(de);var Se=v(de,2),B=d(Se);w(()=>l(B,"label",u(o).bookmark?"Remove bookmark":"Add bookmark")),l(B,"variant","ghost"),w(()=>l(B,"pressed",u(o).bookmark));var Qe=d(B);sa(Qe,{size:24}),c(B);var ze=v(B,2),et=d(ze,!0);c(ze),c(Se),c(xe),c(le);var ue=v(le,2),Ne=v(d(ue),2),V=d(Ne);l(V,"label","Extra small close"),l(V,"size","xs");var tt=d(V);te(tt,{size:16}),c(V);var U=v(V,2);l(U,"label","Small close"),l(U,"size","sm");var at=d(U);te(at,{size:18}),c(U);var W=v(U,2);l(W,"label","Medium close"),l(W,"size","md");var nt=d(W);te(nt,{size:24}),c(W);var F=v(W,2);l(F,"label","Large close"),l(F,"size","lg");var ot=d(F);te(ot,{size:32}),c(F);var Z=v(F,2);l(Z,"label","Extra large close"),l(Z,"size","xl");var st=d(Z);te(st,{size:36}),c(Z),c(Ne),c(ue);var ve=v(ue,2),Pe=v(d(ve),2),H=d(Pe);l(H,"label","Settings"),l(H,"variant","secondary");var it=d(H);va(it,{size:24}),c(H);var Y=v(H,2);l(Y,"label","Download"),l(Y,"variant","primary");var rt=d(Y);ra(rt,{size:24}),c(Y);var J=v(Y,2);l(J,"label","Upload"),l(J,"variant","secondary");var lt=d(J);ba(lt,{size:24}),c(J),c(Pe),c(ve);var fe=v(ve,2),we=v(d(fe),2),j=d(we);l(j,"label","Disabled button"),l(j,"disabled",!0);var ct=d(j);oa(ct,{size:24}),c(j);var X=v(j,2);l(X,"label","Pressed state"),l(X,"pressed",!0),l(X,"variant","secondary");var dt=d(X);ia(dt,{size:24}),c(X),c(we),c(fe);var qe=v(fe,2),_e=d(qe),Me=v(d(_e));c(_e);var Ee=v(_e,2),ut=d(Ee);{var vt=P=>{var Q=ga();m(P,Q)},ft=P=>{var Q=ha();Ye(Q,5,()=>u(a),je,(_t,bt)=>{var be=ma(),gt=d(be,!0);c(be),w(()=>ne(gt,u(bt))),m(_t,be)}),c(Q),m(P,Q)};Zt(ut,P=>{u(a).length===0?P(vt):P(ft,!1)})}c(Ee),c(qe),Kt(2),c(b),w(()=>{ne(Ge,u(o).heart?"Favorited":"Not favorited"),ne(Je,u(o).star?"Starred":"Not starred"),ne(et,u(o).bookmark?"Bookmarked":"Not bookmarked"),Me.disabled=u(a).length===0}),h("icon-button-click",y,p),h("icon-button-click",$,E),h("icon-button-click",f,_),h("icon-button-click",A,r),h("icon-button-click",R,()=>s("heart")),h("icon-button-click",O,()=>s("star")),h("icon-button-click",B,()=>s("bookmark")),h("icon-button-click",V,()=>i("XS button clicked")),h("icon-button-click",U,()=>i("Small button clicked")),h("icon-button-click",W,()=>i("Medium button clicked")),h("icon-button-click",F,()=>i("Large button clicked")),h("icon-button-click",Z,()=>i("XL button clicked")),h("icon-button-click",H,()=>i("Settings opened")),h("icon-button-click",Y,()=>i("Download started")),h("icon-button-click",J,()=>i("Upload dialog opened")),h("icon-button-click",j,()=>i("This should not fire")),h("icon-button-click",X,()=>i("Pressed button clicked")),h("click",Me,x),m(t,b),Fe()}export{za as default};
