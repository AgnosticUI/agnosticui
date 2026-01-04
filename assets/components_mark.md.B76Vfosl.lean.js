import{A as _}from"./chunks/AlphaWarning.D199zhtu.js";import{i as w,z as v,a as q,x as d}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{f as T}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{s as S}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as x,c as A,o as E,r as M,p as C,F as $,j as a,G as e,k,w as o,a as r,ae as f}from"./chunks/framework.CdHt8f9T.js";import{C as R}from"./chunks/VueInput.vue_vue_type_script_setup_true_lang-Dsxo7DuX.0TR12KbM.js";import{v as b}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.BK859DvV.js";import"./chunks/state-CovhUvdr.DnzyR2fh.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/form-control-utils.B793yZMR.js";import"./chunks/unique-id.CpwMFgRD.js";var V=Object.defineProperty,m=(h,i,t,F)=>{for(var l=void 0,s=h.length-1,n;s>=0;s--)(n=h[s])&&(l=n(i,t,l)||l);return l&&V(i,t,l),l};const B=class extends q{get _textContent(){return this._slot?this._slot.assignedNodes({flatten:!0}).map(i=>i.textContent??"").join(""):""}constructor(){super(),this.variant="warning",this.search=void 0,this.caseSensitive=!1,this.matchAll=!1}_onSlotChange(){this.requestUpdate()}_renderStatic(){return d`
      <mark class="mark mark-${this.variant}" part="ag-mark">
        <slot @slotchange=${this._onSlotChange}></slot>
      </mark>
    `}_renderReactive(){const i=this._textContent,t=d`<slot @slotchange=${this._onSlotChange} style="display: none;"></slot>`;if(!i)return t;if(!this.search)return d`${t}${i}`;const F=this.search.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&");if(!F)return d`${t}${i}`;let l=this.matchAll?"g":"";this.caseSensitive||(l+="i");const s=new RegExp(F,l),n=[];if(this.matchAll){const p=[...i.matchAll(s)];if(!p.length)return d`${t}${i}`;let u=0;for(const c of p)n.push(i.substring(u,c.index)),n.push(d`<mark class="mark mark-${this.variant}">${c[0]}</mark>`),u=(c.index??0)+c[0].length;n.push(i.substring(u))}else{const p=i.match(s);if(p&&p.index!==void 0){const u=i.substring(0,p.index),c=d`<mark class="mark mark-${this.variant}">${p[0]}</mark>`,D=i.substring(p.index+p[0].length);n.push(u,c,D)}else n.push(i)}return d`${t}${n}`}render(){return this.search?this._renderReactive():this._renderStatic()}};B.styles=w`
    :host {
      display: inline;
    }
    .mark {
      border-radius: var(--ag-radius-xs);
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .mark::before,
    .mark::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
    .mark::before {
      content: " [highlight start] ";
    }
    .mark::after {
      content: " [highlight end] ";
    }
    .mark-warning {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .mark-info {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }
    .mark-success {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }
    .mark-error {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }
    .mark-primary {
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }
    .mark-secondary {
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }
    .mark-monochrome {
      background-color: var(--ag-background-secondary-inverted);
      color: var(--ag-text-primary-inverted);
    }
  `;let y=B;m([v({type:String})],y.prototype,"variant");m([v({type:String})],y.prototype,"search");m([v({type:Boolean,attribute:"case-sensitive"})],y.prototype,"caseSensitive");m([v({type:Boolean,attribute:"match-all"})],y.prototype,"matchAll");m([T("slot")],y.prototype,"_slot");customElements.get("ag-mark")||customElements.define("ag-mark",y);const I=x({name:"VueMark",props:{variant:{type:String,default:"warning"},search:{type:String,default:void 0},caseSensitive:{type:Boolean,default:!1},matchAll:{type:Boolean,default:!1}}}),P=["variant","search",".caseSensitive",".matchAll"];function j(h,i,t,F,l,s){return E(),A("ag-mark",{variant:h.variant,search:h.search,".caseSensitive":h.caseSensitive,".matchAll":h.matchAll},[M(h.$slots,"default")],40,P)}const g=S(I,[["render",j]]),N={class:"mbe4"},U={class:"flex flex-wrap items-center"},z={class:"mis3 mie3"},H={class:"mis3 mie3"},L={class:"mis3 mie3"},O={class:"mis3 mie3"},W={class:"mis3 mie3"},G={class:"mis3 mie3"},J={class:"mis3 mie3"},K={class:"mbe4"},Y={class:"flex items-center mbe4"},Q={class:"flex items-center mbe3"},X={class:"flex items-center mbe3"},Z={class:"mbe4"},ss=x({__name:"MarkExamples",setup(h){const i=C("fox"),t=C(!1),F=C(!0);return(l,s)=>(E(),A($,null,[a("section",N,[s[10]||(s[10]=a("h2",null,"Mark Variants",-1)),a("div",U,[a("div",z,[e(k(g),{variant:"warning"},{default:o(()=>[...s[3]||(s[3]=[r("warning",-1)])]),_:1})]),a("div",H,[e(k(g),{variant:"info"},{default:o(()=>[...s[4]||(s[4]=[r("info",-1)])]),_:1})]),a("div",L,[e(k(g),{variant:"success"},{default:o(()=>[...s[5]||(s[5]=[r("success",-1)])]),_:1})]),a("div",O,[e(k(g),{variant:"error"},{default:o(()=>[...s[6]||(s[6]=[r("error",-1)])]),_:1})]),a("div",W,[e(k(g),{variant:"primary"},{default:o(()=>[...s[7]||(s[7]=[r("primary",-1)])]),_:1})]),a("div",G,[e(k(g),{variant:"secondary"},{default:o(()=>[...s[8]||(s[8]=[r("secondary",-1)])]),_:1})]),a("div",J,[e(k(g),{variant:"monochrome"},{default:o(()=>[...s[9]||(s[9]=[r("monochrome",-1)])]),_:1})])])]),a("section",K,[s[14]||(s[14]=a("h2",null,"Reactive Highlighting",-1)),a("div",Y,[e(k(R),{class:"full-width",value:i.value,"onUpdate:value":s[0]||(s[0]=n=>i.value=n),label:"Enter text to highlight",type:"text"},null,8,["value"])]),a("div",Q,[e(k(b),{checked:t.value,"onUpdate:checked":s[1]||(s[1]=n=>t.value=n),label:"Case sensitive"},null,8,["checked"]),s[11]||(s[11]=a("span",{class:"mis2"},"Case sensitive",-1))]),a("div",X,[e(k(b),{checked:F.value,"onUpdate:checked":s[2]||(s[2]=n=>F.value=n),label:"Match all"},null,8,["checked"]),s[12]||(s[12]=a("span",{class:"mis2"},"Match all",-1))]),a("div",Z,[a("p",null,[e(k(g),{search:i.value,caseSensitive:t.value,matchAll:F.value,variant:"warning"},{default:o(()=>[...s[13]||(s[13]=[r(" The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox. ",-1)])]),_:1},8,["search","caseSensitive","matchAll"])])])])],64))}}),cs=JSON.parse('{"title":"Mark","description":"","frontmatter":{},"headers":[],"relativePath":"components/mark.md","filePath":"components/mark.md"}'),is={name:"components/mark.md"},ys=Object.assign(is,{setup(h){return(i,t)=>(E(),A("div",null,[t[0]||(t[0]=a("h1",{id:"mark",tabindex:"-1"},[r("Mark "),a("a",{class:"header-anchor",href:"#mark","aria-label":'Permalink to "Mark"'},"​")],-1)),e(_),t[1]||(t[1]=f("",2)),e(ss),t[2]||(t[2]=f("",15))]))}});export{cs as __pageData,ys as default};
