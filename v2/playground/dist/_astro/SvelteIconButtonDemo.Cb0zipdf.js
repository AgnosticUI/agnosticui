const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.usWJXZHU.js","_astro/_Accordion.B-PO82ap.js","_astro/lit-element.DMCH56eX.js","_astro/MinimalAccordion.Dz3P1kUl.js","_astro/_Breadcrumb.BHQVzzo7.js","_astro/_IconButton.ITUY3W3l.js","_astro/lit-html-Bm_EwbrZ.BUqNPNwy.js","_astro/_Tooltip.BRWHCaJW.js"])))=>i.map(i=>d[i]);
import{_ as mt}from"./preload-helper.BlTxHScW.js";import{c as Ae,o as ht,s as l}from"./attributes.BOdHT8Y4.js";import{k as L,l as he,B as ge,aL as pt,j as $t,E as xt,w as yt,aM as kt,a0 as St,aN as zt,X as Nt,v as Pt,u as Ie,q as De,W as ie,A as wt,z as qt,Q as Mt,af as Et,aO as At,ax as Le,aP as Te,a5 as se,aQ as It,g as u,aR as G,aS as Ce,J as Dt,aT as pe,aU as Lt,aV as Ve,a2 as Tt,i as ae,aW as Ot,C as Rt,aX as Oe,aa as Re,aY as Bt,aw as Ct,aZ as Vt,a_ as Wt,a$ as ee,a6 as We,b0 as Ue,b1 as Ut,b2 as jt,b3 as Ft,b4 as Ht,a as m,p as je,b as Fe,s as v,c as d,r as c,b5 as S,b6 as z,b7 as Xt,b8 as Yt,f as re,t as w,e as h,I as me,n as Gt,b9 as Kt}from"./utils.CAkYZwvQ.js";import{s as ne}from"./render.dxZWhwbY.js";import{e as He,a as Xe,i as Qt}from"./each.BwlF53p4.js";function N(t,e,a,n,o){L&&he();var i=e.$$slots?.[a],s=!1;i===!0&&(i=e.children,s=!0),i===void 0||i(t,s?()=>n:n)}function Zt(t,e,a,n,o,i){let s=L;L&&he();var r,p,_=null;L&&ge.nodeType===pt&&(_=ge,he());var E=L?ge:t,x;$t(()=>{const b=e()||null;var I=kt;b!==r&&(x&&(b===null?wt(x,()=>{x=null,p=null}):b===p?qt(x):Mt(x)),b&&b!==p&&(x=yt(()=>{if(_=L?_:document.createElementNS(I,b),St(_,_),n){L&&zt(b)&&_.append(document.createComment(""));var g=L?Nt(_):_.appendChild(Pt());L&&(g===null?Ie(!1):De(g)),n(_,g)}ie.nodes_end=_,E.before(_)})),r=b,r&&(p=r))},xt),s&&(Ie(!0),De(E))}function Ye(t=!1){const e=Et,a=e.l.u;if(!a)return;let n=()=>G(e.s);if(t){let o=0,i={};const s=Ce(()=>{let r=!1;const p=e.s;for(const _ in p)p[_]!==i[_]&&(i[_]=p[_],r=!0);return r&&o++,o});n=()=>u(s)}a.b.length&&At(()=>{Be(e,n),Te(a.b)}),Le(()=>{const o=se(()=>a.m.map(It));return()=>{for(const i of o)typeof i=="function"&&i()}}),a.a.length&&Le(()=>{Be(e,n),Te(a.a)})}function Be(t,e){if(t.l.s)for(const a of t.l.s)u(a);e()}let oe=!1;function Jt(t){var e=oe;try{return oe=!1,[t(),oe]}finally{oe=e}}const ea={get(t,e){if(!t.exclude.includes(e))return u(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,a){if(!(e in t.special)){var n=ie;try{Re(t.parent_effect),t.special[e]=C({get[e](){return t.props[e]}},e,Ve)}finally{Re(n)}}return t.special[e](a),Oe(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),Oe(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function k(t,e){return new Proxy({props:t,exclude:e,special:{},version:Dt(0),parent_effect:ie},ea)}const ta={get(t,e){let a=t.props.length;for(;a--;){let n=t.props[a];if(ee(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,a){let n=t.props.length;for(;n--;){let o=t.props[n];ee(o)&&(o=o());const i=pe(o,e);if(i&&i.set)return i.set(a),!0}return!1},getOwnPropertyDescriptor(t,e){let a=t.props.length;for(;a--;){let n=t.props[a];if(ee(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const o=pe(n,e);return o&&!o.configurable&&(o.configurable=!0),o}}},has(t,e){if(e===We||e===Ue)return!1;for(let a of t.props)if(ee(a)&&(a=a()),a!=null&&e in a)return!0;return!1},ownKeys(t){const e=[];for(let a of t.props)if(ee(a)&&(a=a()),!!a){for(const n in a)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(a))e.includes(n)||e.push(n)}return e}};function q(...t){return new Proxy({props:t},ta)}function C(t,e,a,n){var o=!Ct||(a&Vt)!==0,i=(a&Bt)!==0,s=(a&Ut)!==0,r=n,p=!0,_=()=>(p&&(p=!1,r=s?se(n):n),r),E;if(i){var x=We in t||Ue in t;E=pe(t,e)?.set??(x&&e in t?f=>t[e]=f:void 0)}var b,I=!1;i?[b,I]=Jt(()=>t[e]):b=t[e],b===void 0&&n!==void 0&&(b=_(),E&&(o&&Lt(),E(b)));var g;if(o?g=()=>{var f=t[e];return f===void 0?_():(p=!0,f)}:g=()=>{var f=t[e];return f!==void 0&&(r=void 0),f===void 0?r:f},o&&(a&Ve)===0)return g;if(E){var y=t.$$legacy;return(function(f,T){return arguments.length>0?((!o||!T||y||I)&&E(T?g():f),f):g()})}var D=!1,$=((a&Wt)!==0?Ce:Rt)(()=>(D=!1,g()));i&&u($);var K=ie;return(function(f,T){if(arguments.length>0){const A=T?u($):o&&i?Tt(f):f;return ae($,A),D=!0,r!==void 0&&(r=A),f}return jt&&D||(K.f&Ot)!==0?$.v:u($)})}Ft();/**
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
 */const aa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var na=Ht("<svg><!><!></svg>");function M(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]),n=k(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Fe(e,!1);let o=C(e,"name",8,void 0),i=C(e,"color",8,"currentColor"),s=C(e,"size",8,24),r=C(e,"strokeWidth",8,2),p=C(e,"absoluteStrokeWidth",8,!1),_=C(e,"iconNode",24,()=>[]);const E=(...g)=>g.filter((y,D,$)=>!!y&&$.indexOf(y)===D).join(" ");Ye();var x=na();Ae(x,(g,y)=>({...aa,...n,width:s(),height:s(),stroke:i(),"stroke-width":g,class:y}),[()=>(G(p()),G(r()),G(s()),se(()=>p()?Number(r())*24/Number(s()):r())),()=>(G(o()),G(a),se(()=>E("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var b=d(x);He(b,1,_,Xe,(g,y)=>{var D=Xt(()=>Yt(u(y),2));let $=()=>u(D)[0],K=()=>u(D)[1];var f=S(),T=z(f);Zt(T,$,!0,(A,$e)=>{Ae(A,()=>({...K()}))}),m(g,f)});var I=v(b);N(I,e,"default",{}),c(x),m(t,x),je()}function oa(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]);/**
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
    the accessibility and performance of the underlying web component.</div></div>`,2);function za(t,e){Fe(e,!1),ht(async()=>{typeof window<"u"&&await mt(()=>import("./index.usWJXZHU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))});let a=me([]),n=me(!1),o=me({heart:!1,star:!1,bookmark:!1});function i(P){ae(a,[`${new Date().toLocaleTimeString()}: ${P}`,...u(a).slice(0,9)])}function s(P){Kt(o,u(o)[P]=!u(o)[P]),i(`${P} ${u(o)[P]?"added to":"removed from"} favorites`)}async function r(){u(n)||(ae(n,!0),i("Save operation started..."),setTimeout(()=>{ae(n,!1),i("Save completed successfully!")},2e3))}function p(){i("Edit mode activated")}function _(){confirm("Are you sure you want to delete this item?")?i("Item deleted"):i("Delete cancelled")}function E(){i("Info dialog opened")}function x(){ae(a,[])}Ye();var b=pa(),I=v(d(b),2),g=v(d(I),2),y=d(g);l(y,"label","Edit item"),l(y,"variant","primary");var D=d(y);da(D,{size:24}),c(y);var $=v(y,2);l($,"label","Information"),l($,"variant","secondary");var K=d($);ca(K,{size:24}),c($);var f=v($,2);l(f,"label","Delete item"),l(f,"variant","danger");var T=d(f);_a(T,{size:24}),c(f);var A=v(f,2);w(()=>l(A,"label",u(n)?"Saving...":"Save")),l(A,"variant","primary"),w(()=>l(A,"loading",u(n))),w(()=>l(A,"disabled",u(n)));var $e=d(A);ua($e,{size:24}),c(A),c(g),c(I);var le=v(I,2),xe=v(d(le),2),ce=d(xe),O=d(ce);w(()=>l(O,"label",u(o).heart?"Remove from favorites":"Add to favorites")),w(()=>l(O,"variant",u(o).heart?"primary":"ghost")),w(()=>l(O,"pressed",u(o).heart));var Ge=d(O);la(Ge,{size:24}),c(O);var ye=v(O,2),Ke=d(ye,!0);c(ye),c(ce);var de=v(ce,2),R=d(de);w(()=>l(R,"label",u(o).star?"Remove star":"Add star")),w(()=>l(R,"variant",u(o).star?"secondary":"ghost")),w(()=>l(R,"pressed",u(o).star));var Qe=d(R);fa(Qe,{size:24}),c(R);var ke=v(R,2),Ze=d(ke,!0);c(ke),c(de);var Se=v(de,2),B=d(Se);w(()=>l(B,"label",u(o).bookmark?"Remove bookmark":"Add bookmark")),l(B,"variant","ghost"),w(()=>l(B,"pressed",u(o).bookmark));var Je=d(B);sa(Je,{size:24}),c(B);var ze=v(B,2),et=d(ze,!0);c(ze),c(Se),c(xe),c(le);var ue=v(le,2),Ne=v(d(ue),2),V=d(Ne);l(V,"label","Extra small close"),l(V,"size","xs");var tt=d(V);te(tt,{size:16}),c(V);var W=v(V,2);l(W,"label","Small close"),l(W,"size","sm");var at=d(W);te(at,{size:18}),c(W);var U=v(W,2);l(U,"label","Medium close"),l(U,"size","md");var nt=d(U);te(nt,{size:24}),c(U);var j=v(U,2);l(j,"label","Large close"),l(j,"size","lg");var ot=d(j);te(ot,{size:32}),c(j);var Q=v(j,2);l(Q,"label","Extra large close"),l(Q,"size","xl");var st=d(Q);te(st,{size:36}),c(Q),c(Ne),c(ue);var ve=v(ue,2),Pe=v(d(ve),2),F=d(Pe);l(F,"label","Settings"),l(F,"variant","secondary");var it=d(F);va(it,{size:24}),c(F);var H=v(F,2);l(H,"label","Download"),l(H,"variant","primary");var rt=d(H);ra(rt,{size:24}),c(H);var Z=v(H,2);l(Z,"label","Upload"),l(Z,"variant","secondary");var lt=d(Z);ba(lt,{size:24}),c(Z),c(Pe),c(ve);var fe=v(ve,2),we=v(d(fe),2),X=d(we);l(X,"label","Disabled button"),l(X,"disabled",!0);var ct=d(X);oa(ct,{size:24}),c(X);var Y=v(X,2);l(Y,"label","Pressed state"),l(Y,"pressed",!0),l(Y,"variant","secondary");var dt=d(Y);ia(dt,{size:24}),c(Y),c(we),c(fe);var qe=v(fe,2),_e=d(qe),Me=v(d(_e));c(_e);var Ee=v(_e,2),ut=d(Ee);{var vt=P=>{var J=ga();m(P,J)},ft=P=>{var J=ha();He(J,5,()=>u(a),Xe,(_t,bt)=>{var be=ma(),gt=d(be,!0);c(be),w(()=>ne(gt,u(bt))),m(_t,be)}),c(J),m(P,J)};Qt(ut,P=>{u(a).length===0?P(vt):P(ft,!1)})}c(Ee),c(qe),Gt(2),c(b),w(()=>{ne(Ke,u(o).heart?"Favorited":"Not favorited"),ne(Ze,u(o).star?"Starred":"Not starred"),ne(et,u(o).bookmark?"Bookmarked":"Not bookmarked"),Me.disabled=u(a).length===0}),h("icon-button-click",y,p),h("icon-button-click",$,E),h("icon-button-click",f,_),h("icon-button-click",A,r),h("icon-button-click",O,()=>s("heart")),h("icon-button-click",R,()=>s("star")),h("icon-button-click",B,()=>s("bookmark")),h("icon-button-click",V,()=>i("XS button clicked")),h("icon-button-click",W,()=>i("Small button clicked")),h("icon-button-click",U,()=>i("Medium button clicked")),h("icon-button-click",j,()=>i("Large button clicked")),h("icon-button-click",Q,()=>i("XL button clicked")),h("icon-button-click",F,()=>i("Settings opened")),h("icon-button-click",H,()=>i("Download started")),h("icon-button-click",Z,()=>i("Upload dialog opened")),h("icon-button-click",X,()=>i("This should not fire")),h("icon-button-click",Y,()=>i("Pressed button clicked")),h("click",Me,x),m(t,b),je()}export{za as default};
