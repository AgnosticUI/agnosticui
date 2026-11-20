import{A as V}from"./chunks/AlphaWarning.CKFYAqLS.js";import{i as R,z as c,a as F,x as y}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{d as K,p as z,c as p,o as v,r as B,K as C,j as t,G as s,k as n,w as i,a as e,ag as N}from"./chunks/framework.DmF2n0Fc.js";import{v as u}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.B6OQ6-gk.js";import{F as w}from"./chunks/FrameworkExample.CfJFSw78.js";import"./chunks/Button.CraZoLgR.js";import"./chunks/createLucideIcon.U6K_rCrv.js";import"./chunks/state-CovhUvdr.C-u8O0Fo.js";import"./chunks/sdk.m.N_nNl18G.js";import"./chunks/Icon.CxPOY7rJ.js";import"./chunks/zap.tH5O01Gd.js";var E=Object.defineProperty,g=(l,r,a,k)=>{for(var b=void 0,m=l.length-1,h;m>=0;m--)(h=l[m])&&(b=h(r,a,b)||b);return b&&E(r,a,b),b};const f=class extends F{constructor(){super(),this.variant="default",this.bordered=!0,this.background=!1,this.size="md"}updated(r){super.updated(r),this._checkSingleChar()}_checkSingleChar(){var k;let r="";const a=(k=this.shadowRoot)==null?void 0:k.querySelector("slot");a&&(r=a.assignedNodes({flatten:!0}).map(b=>b.textContent||"").join("")),r=r.trim(),r.length===1?this.setAttribute("single-char","true"):this.removeAttribute("single-char")}_onSlotChange(){this._checkSingleChar()}render(){return y`
      <kbd class="kbd-wrapper" part="ag-kbd-wrapper">
        <slot @slotchange=${this._onSlotChange}></slot>
      </kbd>
    `}};f.styles=R`
    :host {
      display: inline-flex;
      font-family: monospace;
      font-size: var(--ag-font-size-sm);
    }
    .kbd-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ag-radius-md);
      white-space: nowrap;
      user-select: none;
    }
    :host([bordered]) .kbd-wrapper {
      border: var(--ag-border-width-1) solid var(--ag-kbd-border-color, var(--ag-border-subtle));
    }
    :host([background]) .kbd-wrapper {
      background-color: var(--ag-background-secondary);
    }
    /* Sizes */
    :host([size='sm']) .kbd-wrapper {
      padding: var(--ag-space-1);
      font-size: var(--ag-font-size-sm);
    }
    :host([size='md']) .kbd-wrapper {
      padding: var(--ag-space-2);
      font-size: var(--ag-font-size-md);
    }
    :host([size='lg']) .kbd-wrapper {
      padding: var(--ag-space-3);
      font-size: var(--ag-font-size-lg);
    }
    /* Square aspect ratio for single characters - note we bump up
    the size for single character */
    :host([size='sm'][single-char]) .kbd-wrapper {
      padding: 2px;
      width: 1.25rem;
      height: 1.25rem;
      font-size: var(--ag-font-size-md);
    }
    :host([size='md'][single-char]) .kbd-wrapper {
      padding: 2px;
      width: 1.5rem;
      height: 1.5rem;
      font-size: var(--ag-font-size-lg);
    }
    :host([size='lg'][single-char]) .kbd-wrapper {
      padding: 3px;
      width: 1.875rem;
      height: 1.875rem;
      font-size: var(--ag-font-size-xl);
    }
    /* Variants */
    :host([variant='default']) .kbd-wrapper {
      color: var(--ag-kbd-color, var(--ag-text-primary));
    }
    :host([variant='inherit']) .kbd-wrapper {
      color: inherit;
      border-color: currentColor;
    }
    :host([variant='primary']) .kbd-wrapper {
      color: var(--ag-primary-text);
      border-color: var(--ag-primary);
    }
    :host([variant='primary'][background]) .kbd-wrapper {
      background-color: var(--ag-primary-background);
    }
    :host([variant='secondary']) .kbd-wrapper {
      color: var(--ag-text-secondary);
      border-color: var(--ag-secondary);
    }
    :host([variant='secondary'][background]) .kbd-wrapper {
      background-color: var(--ag-secondary-background);
    }
    :host([variant='info']) .kbd-wrapper {
      color: var(--ag-info-text);
      border-color: var(--ag-info);
    }
    :host([variant='info'][background]) .kbd-wrapper {
      background-color: var(--ag-info-background);
    }
    :host([variant='warning']) .kbd-wrapper {
      color: var(--ag-warning-text);
      border-color: var(--ag-warning);
    }
    :host([variant='warning'][background]) .kbd-wrapper {
      background-color: var(--ag-warning-background);
    }
    :host([variant='success']) .kbd-wrapper {
      color: var(--ag-success-text);
      border-color: var(--ag-success);
    }
    :host([variant='success'][background]) .kbd-wrapper {
      background-color: var(--ag-success-background);
    }
    :host([variant='danger']) .kbd-wrapper {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger);
    }
    :host([variant='danger'][background]) .kbd-wrapper {
      background-color: var(--ag-danger-background);
    }
    :host([variant='error']) .kbd-wrapper {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger);
    }
    :host([variant='error'][background]) .kbd-wrapper {
      background-color: var(--ag-danger-background);
    }
    :host([variant='monochrome']) .kbd-wrapper {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }
    :host([variant='monochrome'][background]) .kbd-wrapper {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
  `;let o=f;g([c({type:String,reflect:!0})],o.prototype,"variant");g([c({type:Boolean,reflect:!0})],o.prototype,"bordered");g([c({type:Boolean,reflect:!0})],o.prototype,"background");g([c({type:String,reflect:!0})],o.prototype,"size");customElements.get("ag-kbd")||customElements.define("ag-kbd",o);const x=[".bordered",".background","variant","size"],d=K({__name:"VueKbd",props:{variant:{default:"default"},bordered:{type:Boolean,default:!0},background:{type:Boolean,default:!1},size:{default:"md"}},setup(l){const r=z();return(a,k)=>(v(),p("ag-kbd",C({ref_key:"agComponent",ref:r,".bordered":l.bordered,".background":l.background,variant:l.variant,size:l.size},a.$attrs),[B(a.$slots,"default")],48,x))}}),A={class:"mbe4"},D={class:"stacked-mobile"},q={class:"mbs3"},S={class:"mbs3"},T={class:"mbe4"},P={class:"stacked mbe3"},L={class:"mbe2"},W={class:"mbe2"},I={class:"mbe2"},M={class:"mbe2"},$={class:"mbe2"},U={class:"mbe2"},j={class:"mbe2"},G={class:"mbe2"},O={class:"mbe2"},H={class:"mbe4"},J={class:"stacked"},Q={class:"mbe2"},X={class:"mbe2"},Y={class:"mbe2"},Z={class:"mbe4"},_={class:"stacked mbe3"},aa={class:"mbe2"},sa={class:"mbe2"},na={class:"mbe2"},ia={class:"mbe2"},ea={class:"mbe2"},da={class:"mbe2"},ta={class:"mbe2"},ra={class:"mbe2"},la={class:"mbe4"},ba={class:"stacked-mobile mbe3"},oa={class:"mbe2"},ka={class:"mbe2"},ca={class:"mbe4"},ga={class:"stacked-mobile"},ma={style:{display:"inline-flex","align-items":"center",gap:"var(--ag-space-2)"}},ua={style:{display:"inline-flex","align-items":"center",gap:"var(--ag-space-2)"}},pa={style:{display:"inline-flex","align-items":"center",gap:"var(--ag-space-2)"}},va={class:"mbe4"},ha={class:"stacked"},Fa={class:"mbe2"},ya={class:"mbe2"},Ka={class:"mbe2"},fa=K({__name:"KbdExamples",setup(l){return(r,a)=>(v(),p("section",null,[t("div",A,[a[8]||(a[8]=t("h2",null,"Default",-1)),a[9]||(a[9]=t("p",{class:"mbs2 mbe3"},"Basic keyboard key representation with default styling.",-1)),t("div",D,[s(n(d),{class:"mie2"},{default:i(()=>[...a[0]||(a[0]=[e("⌘",-1)])]),_:1}),s(n(d),{class:"mie2"},{default:i(()=>[...a[1]||(a[1]=[e("⌥",-1)])]),_:1}),s(n(d),{class:"mie2"},{default:i(()=>[...a[2]||(a[2]=[e("⇧",-1)])]),_:1}),s(n(d),null,{default:i(()=>[...a[3]||(a[3]=[e("⌃",-1)])]),_:1})]),t("div",q,[s(n(d),{class:"mie5"},{default:i(()=>[...a[4]||(a[4]=[e("cntrl + shift + del",-1)])]),_:1}),s(n(d),null,{default:i(()=>[...a[5]||(a[5]=[e("⌘ + v",-1)])]),_:1})]),t("div",S,[s(n(d),{size:"sm",class:"mie5"},{default:i(()=>[...a[6]||(a[6]=[e("cntrl + shift + del",-1)])]),_:1}),s(n(d),{size:"sm"},{default:i(()=>[...a[7]||(a[7]=[e("⌘ + v",-1)])]),_:1})])]),t("div",T,[a[46]||(a[46]=t("h2",null,"Variants",-1)),a[47]||(a[47]=t("p",{class:"mbs2 mbe3"},"Semantic color variants for different contexts and visual emphasis.",-1)),t("div",P,[t("div",L,[s(n(d),{variant:"default",class:"mie2"},{default:i(()=>[...a[10]||(a[10]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"default",class:"mie2"},{default:i(()=>[...a[11]||(a[11]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"default",class:"mie2"},{default:i(()=>[...a[12]||(a[12]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"default"},{default:i(()=>[...a[13]||(a[13]=[e("⌃",-1)])]),_:1})]),t("div",W,[s(n(d),{variant:"primary",class:"mie2"},{default:i(()=>[...a[14]||(a[14]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"primary",class:"mie2"},{default:i(()=>[...a[15]||(a[15]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"primary",class:"mie2"},{default:i(()=>[...a[16]||(a[16]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"primary"},{default:i(()=>[...a[17]||(a[17]=[e("⌃",-1)])]),_:1})]),t("div",I,[s(n(d),{variant:"secondary",class:"mie2"},{default:i(()=>[...a[18]||(a[18]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"secondary",class:"mie2"},{default:i(()=>[...a[19]||(a[19]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"secondary",class:"mie2"},{default:i(()=>[...a[20]||(a[20]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"secondary"},{default:i(()=>[...a[21]||(a[21]=[e("⌃",-1)])]),_:1})]),t("div",M,[s(n(d),{variant:"info",class:"mie2"},{default:i(()=>[...a[22]||(a[22]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"info",class:"mie2"},{default:i(()=>[...a[23]||(a[23]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"info",class:"mie2"},{default:i(()=>[...a[24]||(a[24]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"info"},{default:i(()=>[...a[25]||(a[25]=[e("⌃",-1)])]),_:1})]),t("div",$,[s(n(d),{variant:"warning",class:"mie2"},{default:i(()=>[...a[26]||(a[26]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"warning",class:"mie2"},{default:i(()=>[...a[27]||(a[27]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"warning",class:"mie2"},{default:i(()=>[...a[28]||(a[28]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"warning"},{default:i(()=>[...a[29]||(a[29]=[e("⌃",-1)])]),_:1})]),t("div",U,[s(n(d),{variant:"success",class:"mie2"},{default:i(()=>[...a[30]||(a[30]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"success",class:"mie2"},{default:i(()=>[...a[31]||(a[31]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"success",class:"mie2"},{default:i(()=>[...a[32]||(a[32]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"success"},{default:i(()=>[...a[33]||(a[33]=[e("⌃",-1)])]),_:1})]),t("div",j,[s(n(d),{variant:"danger",class:"mie2"},{default:i(()=>[...a[34]||(a[34]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"danger",class:"mie2"},{default:i(()=>[...a[35]||(a[35]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"danger",class:"mie2"},{default:i(()=>[...a[36]||(a[36]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"danger"},{default:i(()=>[...a[37]||(a[37]=[e("⌃",-1)])]),_:1})]),t("div",G,[s(n(d),{variant:"error",class:"mie2"},{default:i(()=>[...a[38]||(a[38]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"error",class:"mie2"},{default:i(()=>[...a[39]||(a[39]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"error",class:"mie2"},{default:i(()=>[...a[40]||(a[40]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"error"},{default:i(()=>[...a[41]||(a[41]=[e("⌃",-1)])]),_:1})]),t("div",O,[s(n(d),{variant:"monochrome",class:"mie2"},{default:i(()=>[...a[42]||(a[42]=[e("⌘",-1)])]),_:1}),s(n(d),{variant:"monochrome",class:"mie2"},{default:i(()=>[...a[43]||(a[43]=[e("⌥",-1)])]),_:1}),s(n(d),{variant:"monochrome",class:"mie2"},{default:i(()=>[...a[44]||(a[44]=[e("⇧",-1)])]),_:1}),s(n(d),{variant:"monochrome"},{default:i(()=>[...a[45]||(a[45]=[e("⌃",-1)])]),_:1})])])]),t("div",H,[a[63]||(a[63]=t("h2",null,"Sizes",-1)),a[64]||(a[64]=t("p",{class:"mbs2 mbe3"},"Three size options to match different contexts and typography scales.",-1)),t("div",J,[t("div",Q,[a[52]||(a[52]=t("strong",{class:"mie2"},"Small:",-1)),s(n(d),{size:"sm",class:"mie2"},{default:i(()=>[...a[48]||(a[48]=[e("⌘",-1)])]),_:1}),s(n(d),{size:"sm",class:"mie2"},{default:i(()=>[...a[49]||(a[49]=[e("⌥",-1)])]),_:1}),s(n(d),{size:"sm",class:"mie2"},{default:i(()=>[...a[50]||(a[50]=[e("⇧",-1)])]),_:1}),s(n(d),{size:"sm"},{default:i(()=>[...a[51]||(a[51]=[e("⌃",-1)])]),_:1})]),t("div",X,[a[57]||(a[57]=t("strong",{class:"mie2"},"Medium:",-1)),s(n(d),{size:"md",class:"mie2"},{default:i(()=>[...a[53]||(a[53]=[e("⌘",-1)])]),_:1}),s(n(d),{size:"md",class:"mie2"},{default:i(()=>[...a[54]||(a[54]=[e("⌥",-1)])]),_:1}),s(n(d),{size:"md",class:"mie2"},{default:i(()=>[...a[55]||(a[55]=[e("⇧",-1)])]),_:1}),s(n(d),{size:"md"},{default:i(()=>[...a[56]||(a[56]=[e("⌃",-1)])]),_:1})]),t("div",Y,[a[62]||(a[62]=t("strong",{class:"mie2"},"Large:",-1)),s(n(d),{size:"lg",class:"mie2"},{default:i(()=>[...a[58]||(a[58]=[e("⌘",-1)])]),_:1}),s(n(d),{size:"lg",class:"mie2"},{default:i(()=>[...a[59]||(a[59]=[e("⌥",-1)])]),_:1}),s(n(d),{size:"lg",class:"mie2"},{default:i(()=>[...a[60]||(a[60]=[e("⇧",-1)])]),_:1}),s(n(d),{size:"lg"},{default:i(()=>[...a[61]||(a[61]=[e("⌃",-1)])]),_:1})])])]),t("div",Z,[a[97]||(a[97]=t("h2",null,"With Background",-1)),a[98]||(a[98]=t("p",{class:"mbs2 mbe3"},"Add background colors to variants for increased visual emphasis.",-1)),t("div",_,[t("div",aa,[s(n(d),{background:!0,variant:"primary",class:"mie2"},{default:i(()=>[...a[65]||(a[65]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"primary",class:"mie2"},{default:i(()=>[...a[66]||(a[66]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"primary",class:"mie2"},{default:i(()=>[...a[67]||(a[67]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"primary"},{default:i(()=>[...a[68]||(a[68]=[e("⌃",-1)])]),_:1})]),t("div",sa,[s(n(d),{background:!0,variant:"secondary",class:"mie2"},{default:i(()=>[...a[69]||(a[69]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"secondary",class:"mie2"},{default:i(()=>[...a[70]||(a[70]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"secondary",class:"mie2"},{default:i(()=>[...a[71]||(a[71]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"secondary"},{default:i(()=>[...a[72]||(a[72]=[e("⌃",-1)])]),_:1})]),t("div",na,[s(n(d),{background:!0,variant:"info",class:"mie2"},{default:i(()=>[...a[73]||(a[73]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"info",class:"mie2"},{default:i(()=>[...a[74]||(a[74]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"info",class:"mie2"},{default:i(()=>[...a[75]||(a[75]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"info"},{default:i(()=>[...a[76]||(a[76]=[e("⌃",-1)])]),_:1})]),t("div",ia,[s(n(d),{background:!0,variant:"warning",class:"mie2"},{default:i(()=>[...a[77]||(a[77]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"warning",class:"mie2"},{default:i(()=>[...a[78]||(a[78]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"warning",class:"mie2"},{default:i(()=>[...a[79]||(a[79]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"warning"},{default:i(()=>[...a[80]||(a[80]=[e("⌃",-1)])]),_:1})]),t("div",ea,[s(n(d),{background:!0,variant:"success",class:"mie2"},{default:i(()=>[...a[81]||(a[81]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"success",class:"mie2"},{default:i(()=>[...a[82]||(a[82]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"success",class:"mie2"},{default:i(()=>[...a[83]||(a[83]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"success"},{default:i(()=>[...a[84]||(a[84]=[e("⌃",-1)])]),_:1})]),t("div",da,[s(n(d),{background:!0,variant:"danger",class:"mie2"},{default:i(()=>[...a[85]||(a[85]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"danger",class:"mie2"},{default:i(()=>[...a[86]||(a[86]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"danger",class:"mie2"},{default:i(()=>[...a[87]||(a[87]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"danger"},{default:i(()=>[...a[88]||(a[88]=[e("⌃",-1)])]),_:1})]),t("div",ta,[s(n(d),{background:!0,variant:"error",class:"mie2"},{default:i(()=>[...a[89]||(a[89]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"error",class:"mie2"},{default:i(()=>[...a[90]||(a[90]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"error",class:"mie2"},{default:i(()=>[...a[91]||(a[91]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"error"},{default:i(()=>[...a[92]||(a[92]=[e("⌃",-1)])]),_:1})]),t("div",ra,[s(n(d),{background:!0,variant:"monochrome",class:"mie2"},{default:i(()=>[...a[93]||(a[93]=[e("⌘",-1)])]),_:1}),s(n(d),{background:!0,variant:"monochrome",class:"mie2"},{default:i(()=>[...a[94]||(a[94]=[e("⌥",-1)])]),_:1}),s(n(d),{background:!0,variant:"monochrome",class:"mie2"},{default:i(()=>[...a[95]||(a[95]=[e("⇧",-1)])]),_:1}),s(n(d),{background:!0,variant:"monochrome"},{default:i(()=>[...a[96]||(a[96]=[e("⌃",-1)])]),_:1})])])]),t("div",la,[a[109]||(a[109]=t("h2",null,"Bordered",-1)),a[110]||(a[110]=t("p",{class:"mbs2 mbe3"},"Toggle border styling for different visual treatments.",-1)),t("div",ba,[t("div",oa,[a[103]||(a[103]=t("strong",{class:"mie2"},"With Border:",-1)),s(n(d),{bordered:!0,class:"mie2"},{default:i(()=>[...a[99]||(a[99]=[e("⌘",-1)])]),_:1}),s(n(d),{bordered:!0,class:"mie2"},{default:i(()=>[...a[100]||(a[100]=[e("⌥",-1)])]),_:1}),s(n(d),{bordered:!0,class:"mie2"},{default:i(()=>[...a[101]||(a[101]=[e("⇧",-1)])]),_:1}),s(n(d),{bordered:!0},{default:i(()=>[...a[102]||(a[102]=[e("⌃",-1)])]),_:1})]),t("div",ka,[a[108]||(a[108]=t("strong",{class:"mie2"},"Without Border:",-1)),s(n(d),{bordered:!1,class:"mie2"},{default:i(()=>[...a[104]||(a[104]=[e("⌘",-1)])]),_:1}),s(n(d),{bordered:!1,class:"mie2"},{default:i(()=>[...a[105]||(a[105]=[e("⌥",-1)])]),_:1}),s(n(d),{bordered:!1,class:"mie2"},{default:i(()=>[...a[106]||(a[106]=[e("⇧",-1)])]),_:1}),s(n(d),{bordered:!1},{default:i(()=>[...a[107]||(a[107]=[e("⌃",-1)])]),_:1})])])]),t("div",ca,[a[117]||(a[117]=t("h2",null,"Inside Buttons",-1)),a[118]||(a[118]=t("p",{class:"mbs2 mbe3"},"Keyboard shortcuts nested inside buttons automatically inherit button foreground and border contrast.",-1)),t("div",ga,[s(n(u),{variant:"primary",shape:"rounded",class:"mie3"},{default:i(()=>[t("span",ma,[a[112]||(a[112]=t("span",null,"Generate UI",-1)),s(n(d),{size:"sm"},{default:i(()=>[...a[111]||(a[111]=[e("⌘ Enter",-1)])]),_:1})])]),_:1}),s(n(u),{variant:"primary",shape:"rounded",bordered:!0,class:"mie3"},{default:i(()=>[t("span",ua,[a[114]||(a[114]=t("span",null,"Search",-1)),s(n(d),{size:"sm"},{default:i(()=>[...a[113]||(a[113]=[e("⌘ K",-1)])]),_:1})])]),_:1}),s(n(u),{variant:"secondary",shape:"rounded"},{default:i(()=>[t("span",pa,[a[116]||(a[116]=t("span",null,"Cancel",-1)),s(n(d),{size:"sm"},{default:i(()=>[...a[115]||(a[115]=[e("Esc",-1)])]),_:1})])]),_:1})])]),t("div",va,[a[134]||(a[134]=t("h2",null,"Combined Examples",-1)),a[135]||(a[135]=t("p",{class:"mbs2 mbe3"},"Combining multiple properties for rich presentations.",-1)),t("div",ha,[t("div",Fa,[a[123]||(a[123]=t("strong",{class:"mie2"},"Medium + Primary + Background:",-1)),s(n(d),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:i(()=>[...a[119]||(a[119]=[e("⌘",-1)])]),_:1}),s(n(d),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:i(()=>[...a[120]||(a[120]=[e("⌥",-1)])]),_:1}),s(n(d),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:i(()=>[...a[121]||(a[121]=[e("⇧",-1)])]),_:1}),s(n(d),{size:"md",background:!0,variant:"primary"},{default:i(()=>[...a[122]||(a[122]=[e("⌃",-1)])]),_:1})]),t("div",ya,[a[128]||(a[128]=t("strong",{class:"mie2"},"Large + Success + Background:",-1)),s(n(d),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:i(()=>[...a[124]||(a[124]=[e("⌘",-1)])]),_:1}),s(n(d),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:i(()=>[...a[125]||(a[125]=[e("⌥",-1)])]),_:1}),s(n(d),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:i(()=>[...a[126]||(a[126]=[e("⇧",-1)])]),_:1}),s(n(d),{size:"lg",background:!0,variant:"success"},{default:i(()=>[...a[127]||(a[127]=[e("⌃",-1)])]),_:1})]),t("div",Ka,[a[133]||(a[133]=t("strong",{class:"mie2"},"Large + Warning:",-1)),s(n(d),{size:"lg",variant:"warning",class:"mie2"},{default:i(()=>[...a[129]||(a[129]=[e("⌘",-1)])]),_:1}),s(n(d),{size:"lg",variant:"warning",class:"mie2"},{default:i(()=>[...a[130]||(a[130]=[e("⌥",-1)])]),_:1}),s(n(d),{size:"lg",variant:"warning",class:"mie2"},{default:i(()=>[...a[131]||(a[131]=[e("⇧",-1)])]),_:1}),s(n(d),{size:"lg",variant:"warning"},{default:i(()=>[...a[132]||(a[132]=[e("⌃",-1)])]),_:1})])])])]))}});class Va extends F{createRenderRoot(){return this}render(){return y`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <p class="mbs2 mbe3">Basic keyboard key representation with default styling.</p>
          <div class="stacked-mobile">
            <ag-kbd class="mie2">⌘</ag-kbd>
            <ag-kbd class="mie2">⌥</ag-kbd>
            <ag-kbd class="mie2">⇧</ag-kbd>
            <ag-kbd>⌃</ag-kbd>
          </div>
          <div class="mbs3">
            <ag-kbd class="mie5">cntrl + shift + del</ag-kbd>
            <ag-kbd>⌘ + v</ag-kbd>
          </div>
          <div class="mbs3">
            <ag-kbd size="sm" class="mie5">cntrl + shift + del</ag-kbd>
            <ag-kbd size="sm">⌘ + v</ag-kbd>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Semantic color variants for different contexts and visual emphasis.</p>
          <div class="stacked mbe3">
            <div class="mbe2">
              <ag-kbd variant="default" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="default" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="default" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="default">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="secondary" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="secondary" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="secondary" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="secondary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="info" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="info" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="info" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="info">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="warning">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="danger" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="danger" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="danger" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="danger">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="error" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="error" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="error" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="error">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="monochrome" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="monochrome" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="monochrome" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="monochrome">⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options to match different contexts and typography scales.</p>
          <div class="stacked">
            <div class="mbe2">
              <strong class="mie2">Small:</strong>
              <ag-kbd size="sm" class="mie2">⌘</ag-kbd>
              <ag-kbd size="sm" class="mie2">⌥</ag-kbd>
              <ag-kbd size="sm" class="mie2">⇧</ag-kbd>
              <ag-kbd size="sm">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Medium:</strong>
              <ag-kbd size="md" class="mie2">⌘</ag-kbd>
              <ag-kbd size="md" class="mie2">⌥</ag-kbd>
              <ag-kbd size="md" class="mie2">⇧</ag-kbd>
              <ag-kbd size="md">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large:</strong>
              <ag-kbd size="lg" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg">⌃</ag-kbd>
            </div>
          </div>
        </div>
        <div class="mbe4">
          <h2>With Background</h2>
          <p class="mbs2 mbe3">Add background colors to variants for increased visual emphasis.</p>
          <div class="stacked mbe3">
            <div class="mbe2">
              <ag-kbd background variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="secondary" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="secondary" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="secondary" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="secondary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="info" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="info" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="info" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="info">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="warning">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="danger" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="danger" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="danger" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="danger">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="error" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="error" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="error" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="error">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="monochrome" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="monochrome" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="monochrome" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="monochrome">⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
          <p class="mbs2 mbe3">Toggle border styling for different visual treatments.</p>
          <div class="stacked-mobile mbe3">
            <div class="mbe2">
              <strong class="mie2">With Border:</strong>
              <ag-kbd bordered class="mie2">⌘</ag-kbd>
              <ag-kbd bordered class="mie2">⌥</ag-kbd>
              <ag-kbd bordered class="mie2">⇧</ag-kbd>
              <ag-kbd bordered>⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Without Border:</strong>
              <ag-kbd .bordered=${!1} class="mie2">⌘</ag-kbd>
              <ag-kbd .bordered=${!1} class="mie2">⌥</ag-kbd>
              <ag-kbd .bordered=${!1} class="mie2">⇧</ag-kbd>
              <ag-kbd .bordered=${!1}>⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Inside Buttons</h2>
          <p class="mbs2 mbe3">Keyboard shortcuts nested inside buttons automatically inherit button foreground and border contrast.</p>
          <div class="stacked-mobile">
            <ag-button variant="primary" shape="rounded" class="mie3">
              <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
                <span>Generate UI</span>
                <ag-kbd size="sm">⌘ Enter</ag-kbd>
              </span>
            </ag-button>
            <ag-button variant="primary" shape="rounded" bordered class="mie3">
              <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
                <span>Search</span>
                <ag-kbd size="sm">⌘ K</ag-kbd>
              </span>
            </ag-button>
            <ag-button variant="secondary" shape="rounded">
              <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
                <span>Cancel</span>
                <ag-kbd size="sm">Esc</ag-kbd>
              </span>
            </ag-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Combined Examples</h2>
          <p class="mbs2 mbe3">Combining multiple properties for rich presentations.</p>
          <div class="stacked">
            <div class="mbe2">
              <strong class="mie2">Medium + Primary + Background:</strong>
              <ag-kbd size="md" background variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd size="md" background variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd size="md" background variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd size="md" background variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large + Success + Background:</strong>
              <ag-kbd size="lg" background variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" background variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" background variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg" background variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large + Warning:</strong>
              <ag-kbd size="lg" variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg" variant="warning">⌃</ag-kbd>
            </div>
          </div>
        </div>
      </section>
    `}}customElements.define("kbd-lit-examples",Va);const Ra=`<template>
  <section>
    <div class="mbe4">
      <h2>Default</h2>
      <p class="mbs2 mbe3">Basic keyboard key representation with default styling.</p>
      <div class="stacked-mobile">
        <VueKbd class="mie2">⌘</VueKbd>
        <VueKbd class="mie2">⌥</VueKbd>
        <VueKbd class="mie2">⇧</VueKbd>
        <VueKbd>⌃</VueKbd>
      </div>
      <div class="mbs3">
        <VueKbd class="mie5">cntrl + shift + del</VueKbd>
        <VueKbd>⌘ + v</VueKbd>
      </div>
      <div class="mbs3">
        <VueKbd
          size="sm"
          class="mie5"
        >cntrl + shift + del</VueKbd>
        <VueKbd size="sm">⌘ + v</VueKbd>
      </div>
    </div>

    <div class="mbe4">
      <h2>Variants</h2>
      <p class="mbs2 mbe3">Semantic color variants for different contexts and visual emphasis.</p>
      <div class="stacked mbe3">
        <div class="mbe2">
          <VueKbd
            variant="default"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="default"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="default"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="default">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="primary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="primary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="primary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="primary">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="secondary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="secondary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="secondary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="secondary">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="info"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="info"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="info"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="info">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="warning"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="warning"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="warning"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="warning">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="success"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="success"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="success"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="success">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="danger"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="danger"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="danger"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="danger">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="error"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="error"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="error"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="error">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="monochrome"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="monochrome"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="monochrome"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="monochrome">⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Sizes</h2>
      <p class="mbs2 mbe3">Three size options to match different contexts and typography scales.</p>
      <div class="stacked">
        <div class="mbe2">
          <strong class="mie2">Small:</strong>
          <VueKbd
            size="sm"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="sm"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="sm"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd size="sm">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Medium:</strong>
          <VueKbd
            size="md"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="md"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="md"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd size="md">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Large:</strong>
          <VueKbd
            size="lg"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="lg"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="lg"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd size="lg">⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>With Background</h2>
      <p class="mbs2 mbe3">Add background colors to variants for increased visual emphasis.</p>
      <div class="stacked mbe3">
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="primary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="primary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="primary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="primary"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="secondary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="secondary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="secondary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="secondary"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="info"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="info"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="info"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="info"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="warning"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="warning"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="warning"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="warning"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="success"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="success"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="success"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="success"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="danger"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="danger"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="danger"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="danger"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="error"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="error"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="error"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="error"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="monochrome"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="monochrome"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="monochrome"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="monochrome"
          >⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Bordered</h2>
      <p class="mbs2 mbe3">Toggle border styling for different visual treatments.</p>
      <div class="stacked-mobile mbe3">
        <div class="mbe2">
          <strong class="mie2">With Border:</strong>
          <VueKbd
            :bordered="true"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :bordered="true"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :bordered="true"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd :bordered="true">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Without Border:</strong>
          <VueKbd
            :bordered="false"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :bordered="false"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :bordered="false"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd :bordered="false">⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Inside Buttons</h2>
      <p class="mbs2 mbe3">Keyboard shortcuts nested inside buttons automatically inherit button foreground and border contrast.</p>
      <div class="stacked-mobile">
        <VueButton
          variant="primary"
          shape="rounded"
          class="mie3"
        >
          <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
            <span>Generate UI</span>
            <VueKbd size="sm">⌘ Enter</VueKbd>
          </span>
        </VueButton>
        <VueButton
          variant="primary"
          shape="rounded"
          :bordered="true"
          class="mie3"
        >
          <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
            <span>Search</span>
            <VueKbd size="sm">⌘ K</VueKbd>
          </span>
        </VueButton>
        <VueButton
          variant="secondary"
          shape="rounded"
        >
          <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
            <span>Cancel</span>
            <VueKbd size="sm">Esc</VueKbd>
          </span>
        </VueButton>
      </div>
    </div>

    <div class="mbe4">
      <h2>Combined Examples</h2>
      <p class="mbs2 mbe3">Combining multiple properties for rich presentations.</p>
      <div class="stacked">
        <div class="mbe2">
          <strong class="mie2">Medium + Primary + Background:</strong>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Large + Success + Background:</strong>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Large + Warning:</strong>
          <VueKbd
            size="lg"
            variant="warning"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="lg"
            variant="warning"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="lg"
            variant="warning"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            size="lg"
            variant="warning"
          >⌃</VueKbd>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueKbd } from "agnosticui-core/kbd/vue";
import { VueButton } from "agnosticui-core/button/vue";
<\/script>
`,za=`import { LitElement, html } from 'lit';
import 'agnosticui-core/kbd';
import 'agnosticui-core/button';

export class KbdLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <p class="mbs2 mbe3">Basic keyboard key representation with default styling.</p>
          <div class="stacked-mobile">
            <ag-kbd class="mie2">⌘</ag-kbd>
            <ag-kbd class="mie2">⌥</ag-kbd>
            <ag-kbd class="mie2">⇧</ag-kbd>
            <ag-kbd>⌃</ag-kbd>
          </div>
          <div class="mbs3">
            <ag-kbd class="mie5">cntrl + shift + del</ag-kbd>
            <ag-kbd>⌘ + v</ag-kbd>
          </div>
          <div class="mbs3">
            <ag-kbd size="sm" class="mie5">cntrl + shift + del</ag-kbd>
            <ag-kbd size="sm">⌘ + v</ag-kbd>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Semantic color variants for different contexts and visual emphasis.</p>
          <div class="stacked mbe3">
            <div class="mbe2">
              <ag-kbd variant="default" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="default" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="default" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="default">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="secondary" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="secondary" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="secondary" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="secondary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="info" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="info" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="info" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="info">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="warning">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="danger" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="danger" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="danger" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="danger">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="error" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="error" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="error" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="error">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="monochrome" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="monochrome" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="monochrome" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="monochrome">⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options to match different contexts and typography scales.</p>
          <div class="stacked">
            <div class="mbe2">
              <strong class="mie2">Small:</strong>
              <ag-kbd size="sm" class="mie2">⌘</ag-kbd>
              <ag-kbd size="sm" class="mie2">⌥</ag-kbd>
              <ag-kbd size="sm" class="mie2">⇧</ag-kbd>
              <ag-kbd size="sm">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Medium:</strong>
              <ag-kbd size="md" class="mie2">⌘</ag-kbd>
              <ag-kbd size="md" class="mie2">⌥</ag-kbd>
              <ag-kbd size="md" class="mie2">⇧</ag-kbd>
              <ag-kbd size="md">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large:</strong>
              <ag-kbd size="lg" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg">⌃</ag-kbd>
            </div>
          </div>
        </div>
        <div class="mbe4">
          <h2>With Background</h2>
          <p class="mbs2 mbe3">Add background colors to variants for increased visual emphasis.</p>
          <div class="stacked mbe3">
            <div class="mbe2">
              <ag-kbd background variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="secondary" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="secondary" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="secondary" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="secondary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="info" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="info" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="info" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="info">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="warning">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="danger" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="danger" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="danger" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="danger">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="error" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="error" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="error" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="error">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="monochrome" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="monochrome" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="monochrome" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="monochrome">⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
          <p class="mbs2 mbe3">Toggle border styling for different visual treatments.</p>
          <div class="stacked-mobile mbe3">
            <div class="mbe2">
              <strong class="mie2">With Border:</strong>
              <ag-kbd bordered class="mie2">⌘</ag-kbd>
              <ag-kbd bordered class="mie2">⌥</ag-kbd>
              <ag-kbd bordered class="mie2">⇧</ag-kbd>
              <ag-kbd bordered>⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Without Border:</strong>
              <ag-kbd .bordered=\${false} class="mie2">⌘</ag-kbd>
              <ag-kbd .bordered=\${false} class="mie2">⌥</ag-kbd>
              <ag-kbd .bordered=\${false} class="mie2">⇧</ag-kbd>
              <ag-kbd .bordered=\${false}>⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Inside Buttons</h2>
          <p class="mbs2 mbe3">Keyboard shortcuts nested inside buttons automatically inherit button foreground and border contrast.</p>
          <div class="stacked-mobile">
            <ag-button variant="primary" shape="rounded" class="mie3">
              <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
                <span>Generate UI</span>
                <ag-kbd size="sm">⌘ Enter</ag-kbd>
              </span>
            </ag-button>
            <ag-button variant="primary" shape="rounded" bordered class="mie3">
              <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
                <span>Search</span>
                <ag-kbd size="sm">⌘ K</ag-kbd>
              </span>
            </ag-button>
            <ag-button variant="secondary" shape="rounded">
              <span style="display: inline-flex; align-items: center; gap: var(--ag-space-2);">
                <span>Cancel</span>
                <ag-kbd size="sm">Esc</ag-kbd>
              </span>
            </ag-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Combined Examples</h2>
          <p class="mbs2 mbe3">Combining multiple properties for rich presentations.</p>
          <div class="stacked">
            <div class="mbe2">
              <strong class="mie2">Medium + Primary + Background:</strong>
              <ag-kbd size="md" background variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd size="md" background variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd size="md" background variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd size="md" background variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large + Success + Background:</strong>
              <ag-kbd size="lg" background variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" background variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" background variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg" background variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large + Warning:</strong>
              <ag-kbd size="lg" variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg" variant="warning">⌃</ag-kbd>
            </div>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('kbd-lit-examples', KbdLitExamples);
`,Ba=`import { ReactKbd } from "agnosticui-core/kbd/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function KbdReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <p className="mbs2 mbe3">Basic keyboard key representation with default styling.</p>
        <div className="stacked-mobile">
          <ReactKbd className="mie2">⌘</ReactKbd>
          <ReactKbd className="mie2">⌥</ReactKbd>
          <ReactKbd className="mie2">⇧</ReactKbd>
          <ReactKbd>⌃</ReactKbd>
        </div>
        <div className="mbs3">
          <ReactKbd className="mie5">cntrl + shift + del</ReactKbd>
          <ReactKbd>⌘ + v</ReactKbd>
        </div>
        <div className="mbs3">
          <ReactKbd size="sm" className="mie5">cntrl + shift + del</ReactKbd>
          <ReactKbd size="sm">⌘ + v</ReactKbd>
        </div>
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Semantic color variants for different contexts and visual emphasis.</p>
        <div className="stacked mbe3">
          <div className="mbe2">
            <ReactKbd variant="default" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="default" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="default" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="default">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="primary" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="primary" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="primary" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="primary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="secondary" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="secondary" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="secondary" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="secondary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="info" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="info" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="info" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="info">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="warning" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="warning" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="warning" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="warning">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="success" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="success" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="success" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="success">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="danger" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="danger" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="danger" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="danger">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="error" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="error" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="error" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="error">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="monochrome" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="monochrome" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="monochrome" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="monochrome">⌃</ReactKbd>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
        <p className="mbs2 mbe3">Three size options to match different contexts and typography scales.</p>
        <div className="stacked">
          <div className="mbe2">
            <strong className="mie2">Small:</strong>
            <ReactKbd size="sm" className="mie2">⌘</ReactKbd>
            <ReactKbd size="sm" className="mie2">⌥</ReactKbd>
            <ReactKbd size="sm" className="mie2">⇧</ReactKbd>
            <ReactKbd size="sm">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Medium:</strong>
            <ReactKbd size="md" className="mie2">⌘</ReactKbd>
            <ReactKbd size="md" className="mie2">⌥</ReactKbd>
            <ReactKbd size="md" className="mie2">⇧</ReactKbd>
            <ReactKbd size="md">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Large:</strong>
            <ReactKbd size="lg" className="mie2">⌘</ReactKbd>
            <ReactKbd size="lg" className="mie2">⌥</ReactKbd>
            <ReactKbd size="lg" className="mie2">⇧</ReactKbd>
            <ReactKbd size="lg">⌃</ReactKbd>
          </div>
        </div>
      </div>
      <div className="mbe4">
        <h2>With Background</h2>
        <p className="mbs2 mbe3">Add background colors to variants for increased visual emphasis.</p>
        <div className="stacked mbe3">
          <div className="mbe2">
            <ReactKbd background={true} variant="primary" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="primary" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="primary" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="primary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="secondary" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="secondary" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="secondary" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="secondary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="info" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="info" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="info" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="info">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="warning" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="warning" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="warning" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="warning">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="success" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="success" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="success" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="success">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="danger" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="danger" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="danger" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="danger">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="error" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="error" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="error" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="error">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="monochrome" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="monochrome" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="monochrome" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="monochrome">⌃</ReactKbd>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Bordered</h2>
        <p className="mbs2 mbe3">Toggle border styling for different visual treatments.</p>
        <div className="stacked-mobile mbe3">
          <div className="mbe2">
            <strong className="mie2">With Border:</strong>
            <ReactKbd bordered={true} className="mie2">⌘</ReactKbd>
            <ReactKbd bordered={true} className="mie2">⌥</ReactKbd>
            <ReactKbd bordered={true} className="mie2">⇧</ReactKbd>
            <ReactKbd bordered={true}>⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Without Border:</strong>
            <ReactKbd bordered={false} className="mie2">⌘</ReactKbd>
            <ReactKbd bordered={false} className="mie2">⌥</ReactKbd>
            <ReactKbd bordered={false} className="mie2">⇧</ReactKbd>
            <ReactKbd bordered={false}>⌃</ReactKbd>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Inside Buttons</h2>
        <p className="mbs2 mbe3">Keyboard shortcuts nested inside buttons automatically inherit button foreground and border contrast.</p>
        <div className="stacked-mobile">
          <ReactButton variant="primary" shape="rounded" className="mie3">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--ag-space-2)" }}>
              <span>Generate UI</span>
              <ReactKbd size="sm">⌘ Enter</ReactKbd>
            </span>
          </ReactButton>
          <ReactButton variant="primary" shape="rounded" bordered className="mie3">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--ag-space-2)" }}>
              <span>Search</span>
              <ReactKbd size="sm">⌘ K</ReactKbd>
            </span>
          </ReactButton>
          <ReactButton variant="secondary" shape="rounded">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--ag-space-2)" }}>
              <span>Cancel</span>
              <ReactKbd size="sm">Esc</ReactKbd>
            </span>
          </ReactButton>
        </div>
      </div>

      <div className="mbe4">
        <h2>Combined Examples</h2>
        <p className="mbs2 mbe3">Combining multiple properties for rich presentations.</p>
        <div className="stacked">
          <div className="mbe2">
            <strong className="mie2">Medium + Primary + Background:</strong>
            <ReactKbd size="md" background={true} variant="primary" className="mie2">⌘</ReactKbd>
            <ReactKbd size="md" background={true} variant="primary" className="mie2">⌥</ReactKbd>
            <ReactKbd size="md" background={true} variant="primary" className="mie2">⇧</ReactKbd>
            <ReactKbd size="md" background={true} variant="primary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Large + Success + Background:</strong>
            <ReactKbd size="lg" background={true} variant="success" className="mie2">⌘</ReactKbd>
            <ReactKbd size="lg" background={true} variant="success" className="mie2">⌥</ReactKbd>
            <ReactKbd size="lg" background={true} variant="success" className="mie2">⇧</ReactKbd>
            <ReactKbd size="lg" background={true} variant="success">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Large + Warning:</strong>
            <ReactKbd size="lg" variant="warning" className="mie2">⌘</ReactKbd>
            <ReactKbd size="lg" variant="warning" className="mie2">⌥</ReactKbd>
            <ReactKbd size="lg" variant="warning" className="mie2">⇧</ReactKbd>
            <ReactKbd size="lg" variant="warning">⌃</ReactKbd>
          </div>
        </div>
      </div>
    </section>
  );
}
`,Ia=JSON.parse('{"title":"Kbd","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://www.agnosticui.com/components/kbd"}]]},"headers":[],"relativePath":"components/kbd.md","filePath":"components/kbd.md"}'),Ca={name:"components/kbd.md"},Ma=Object.assign(Ca,{setup(l){return(r,a)=>(v(),p("div",null,[a[1]||(a[1]=t("h1",{id:"kbd",tabindex:"-1"},[e("Kbd "),t("a",{class:"header-anchor",href:"#kbd","aria-label":'Permalink to "Kbd"'},"​")],-1)),s(V),a[2]||(a[2]=t("p",null,"Keyboard key components are used to represent keyboard shortcuts, hotkeys, or user input instructions in a visually distinct way. They mimic the appearance of physical keyboard keys.",-1)),a[3]||(a[3]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,[e("Note that single character content within an "),t("i",null,"<ag-kbd>"),e(" tag is bumped up by a single font size scale for readability.")])],-1)),a[4]||(a[4]=t("h2",{id:"examples",tabindex:"-1"},[e("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s(w,{component:"kbd","vue-code":n(Ra),"lit-code":n(za),"react-code":n(Ba)},{vue:i(()=>[s(fa)]),lit:i(()=>[...a[0]||(a[0]=[t("kbd-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[5]||(a[5]=N("",15))]))}});export{Ia as __pageData,Ma as default};
