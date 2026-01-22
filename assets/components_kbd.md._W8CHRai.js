import{A as f}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as V,z as g,a as h,x as F}from"./chunks/Button.DkmThuAs.js";import{d as y,p as R,c as u,o as p,r as z,K as B,j as t,G as i,k as n,w as e,a as s,ae as C}from"./chunks/framework.NAAYCHZu.js";import{F as N}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var w=Object.defineProperty,c=(l,r,a,k)=>{for(var b=void 0,m=l.length-1,v;m>=0;m--)(v=l[m])&&(b=v(r,a,b)||b);return b&&w(r,a,b),b};const K=class extends h{constructor(){super(),this.variant="default",this.bordered=!0,this.background=!1,this.size="md"}updated(r){super.updated(r),this._checkSingleChar()}_checkSingleChar(){var k;let r="";const a=(k=this.shadowRoot)==null?void 0:k.querySelector("slot");a&&(r=a.assignedNodes({flatten:!0}).map(b=>b.textContent||"").join("")),r=r.trim(),r.length===1?this.setAttribute("single-char","true"):this.removeAttribute("single-char")}_onSlotChange(){this._checkSingleChar()}render(){return F`
      <kbd class="kbd-wrapper" part="ag-kbd-wrapper">
        <slot @slotchange=${this._onSlotChange}></slot>
      </kbd>
    `}};K.styles=V`
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
      border: var(--ag-border-width-1) solid var(--ag-border-subtle);
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
      color: var(--ag-text-primary);
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
  `;let o=K;c([g({type:String,reflect:!0})],o.prototype,"variant");c([g({type:Boolean,reflect:!0})],o.prototype,"bordered");c([g({type:Boolean,reflect:!0})],o.prototype,"background");c([g({type:String,reflect:!0})],o.prototype,"size");customElements.get("ag-kbd")||customElements.define("ag-kbd",o);const E=[".bordered",".background","variant","size"],d=y({__name:"VueKbd",props:{variant:{default:"default"},bordered:{type:Boolean,default:!0},background:{type:Boolean,default:!1},size:{default:"md"}},setup(l){const r=R();return(a,k)=>(p(),u("ag-kbd",B({ref_key:"agComponent",ref:r,".bordered":l.bordered,".background":l.background,variant:l.variant,size:l.size},a.$attrs),[z(a.$slots,"default")],48,E))}}),x={class:"mbe4"},A={class:"stacked-mobile"},D={class:"mbs3"},q={class:"mbs3"},S={class:"mbe4"},T={class:"stacked mbe3"},P={class:"mbe2"},L={class:"mbe2"},W={class:"mbe2"},M={class:"mbe2"},$={class:"mbe2"},I={class:"mbe2"},j={class:"mbe2"},O={class:"mbe2"},U={class:"mbe2"},G={class:"mbe4"},H={class:"stacked"},J={class:"mbe2"},Q={class:"mbe2"},X={class:"mbe2"},Y={class:"mbe4"},Z={class:"stacked mbe3"},_={class:"mbe2"},aa={class:"mbe2"},sa={class:"mbe2"},ia={class:"mbe2"},na={class:"mbe2"},ea={class:"mbe2"},da={class:"mbe2"},ta={class:"mbe2"},ra={class:"mbe4"},la={class:"stacked-mobile mbe3"},ba={class:"mbe2"},oa={class:"mbe2"},ka={class:"mbe4"},ga={class:"stacked"},ca={class:"mbe2"},ma={class:"mbe2"},ua={class:"mbe2"},pa=y({__name:"KbdExamples",setup(l){return(r,a)=>(p(),u("section",null,[t("div",x,[a[8]||(a[8]=t("h2",null,"Default",-1)),a[9]||(a[9]=t("p",{class:"mbs2 mbe3"},"Basic keyboard key representation with default styling.",-1)),t("div",A,[i(n(d),{class:"mie2"},{default:e(()=>[...a[0]||(a[0]=[s("⌘",-1)])]),_:1}),i(n(d),{class:"mie2"},{default:e(()=>[...a[1]||(a[1]=[s("⌥",-1)])]),_:1}),i(n(d),{class:"mie2"},{default:e(()=>[...a[2]||(a[2]=[s("⇧",-1)])]),_:1}),i(n(d),null,{default:e(()=>[...a[3]||(a[3]=[s("⌃",-1)])]),_:1})]),t("div",D,[i(n(d),{class:"mie5"},{default:e(()=>[...a[4]||(a[4]=[s("cntrl + shift + del",-1)])]),_:1}),i(n(d),null,{default:e(()=>[...a[5]||(a[5]=[s("⌘ + v",-1)])]),_:1})]),t("div",q,[i(n(d),{size:"sm",class:"mie5"},{default:e(()=>[...a[6]||(a[6]=[s("cntrl + shift + del",-1)])]),_:1}),i(n(d),{size:"sm"},{default:e(()=>[...a[7]||(a[7]=[s("⌘ + v",-1)])]),_:1})])]),t("div",S,[a[46]||(a[46]=t("h2",null,"Variants",-1)),a[47]||(a[47]=t("p",{class:"mbs2 mbe3"},"Semantic color variants for different contexts and visual emphasis.",-1)),t("div",T,[t("div",P,[i(n(d),{variant:"default",class:"mie2"},{default:e(()=>[...a[10]||(a[10]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"default",class:"mie2"},{default:e(()=>[...a[11]||(a[11]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"default",class:"mie2"},{default:e(()=>[...a[12]||(a[12]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"default"},{default:e(()=>[...a[13]||(a[13]=[s("⌃",-1)])]),_:1})]),t("div",L,[i(n(d),{variant:"primary",class:"mie2"},{default:e(()=>[...a[14]||(a[14]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"primary",class:"mie2"},{default:e(()=>[...a[15]||(a[15]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"primary",class:"mie2"},{default:e(()=>[...a[16]||(a[16]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"primary"},{default:e(()=>[...a[17]||(a[17]=[s("⌃",-1)])]),_:1})]),t("div",W,[i(n(d),{variant:"secondary",class:"mie2"},{default:e(()=>[...a[18]||(a[18]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"secondary",class:"mie2"},{default:e(()=>[...a[19]||(a[19]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"secondary",class:"mie2"},{default:e(()=>[...a[20]||(a[20]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"secondary"},{default:e(()=>[...a[21]||(a[21]=[s("⌃",-1)])]),_:1})]),t("div",M,[i(n(d),{variant:"info",class:"mie2"},{default:e(()=>[...a[22]||(a[22]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"info",class:"mie2"},{default:e(()=>[...a[23]||(a[23]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"info",class:"mie2"},{default:e(()=>[...a[24]||(a[24]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"info"},{default:e(()=>[...a[25]||(a[25]=[s("⌃",-1)])]),_:1})]),t("div",$,[i(n(d),{variant:"warning",class:"mie2"},{default:e(()=>[...a[26]||(a[26]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"warning",class:"mie2"},{default:e(()=>[...a[27]||(a[27]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"warning",class:"mie2"},{default:e(()=>[...a[28]||(a[28]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"warning"},{default:e(()=>[...a[29]||(a[29]=[s("⌃",-1)])]),_:1})]),t("div",I,[i(n(d),{variant:"success",class:"mie2"},{default:e(()=>[...a[30]||(a[30]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"success",class:"mie2"},{default:e(()=>[...a[31]||(a[31]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"success",class:"mie2"},{default:e(()=>[...a[32]||(a[32]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"success"},{default:e(()=>[...a[33]||(a[33]=[s("⌃",-1)])]),_:1})]),t("div",j,[i(n(d),{variant:"danger",class:"mie2"},{default:e(()=>[...a[34]||(a[34]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"danger",class:"mie2"},{default:e(()=>[...a[35]||(a[35]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"danger",class:"mie2"},{default:e(()=>[...a[36]||(a[36]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"danger"},{default:e(()=>[...a[37]||(a[37]=[s("⌃",-1)])]),_:1})]),t("div",O,[i(n(d),{variant:"error",class:"mie2"},{default:e(()=>[...a[38]||(a[38]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"error",class:"mie2"},{default:e(()=>[...a[39]||(a[39]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"error",class:"mie2"},{default:e(()=>[...a[40]||(a[40]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"error"},{default:e(()=>[...a[41]||(a[41]=[s("⌃",-1)])]),_:1})]),t("div",U,[i(n(d),{variant:"monochrome",class:"mie2"},{default:e(()=>[...a[42]||(a[42]=[s("⌘",-1)])]),_:1}),i(n(d),{variant:"monochrome",class:"mie2"},{default:e(()=>[...a[43]||(a[43]=[s("⌥",-1)])]),_:1}),i(n(d),{variant:"monochrome",class:"mie2"},{default:e(()=>[...a[44]||(a[44]=[s("⇧",-1)])]),_:1}),i(n(d),{variant:"monochrome"},{default:e(()=>[...a[45]||(a[45]=[s("⌃",-1)])]),_:1})])])]),t("div",G,[a[63]||(a[63]=t("h2",null,"Sizes",-1)),a[64]||(a[64]=t("p",{class:"mbs2 mbe3"},"Three size options to match different contexts and typography scales.",-1)),t("div",H,[t("div",J,[a[52]||(a[52]=t("strong",{class:"mie2"},"Small:",-1)),i(n(d),{size:"sm",class:"mie2"},{default:e(()=>[...a[48]||(a[48]=[s("⌘",-1)])]),_:1}),i(n(d),{size:"sm",class:"mie2"},{default:e(()=>[...a[49]||(a[49]=[s("⌥",-1)])]),_:1}),i(n(d),{size:"sm",class:"mie2"},{default:e(()=>[...a[50]||(a[50]=[s("⇧",-1)])]),_:1}),i(n(d),{size:"sm"},{default:e(()=>[...a[51]||(a[51]=[s("⌃",-1)])]),_:1})]),t("div",Q,[a[57]||(a[57]=t("strong",{class:"mie2"},"Medium:",-1)),i(n(d),{size:"md",class:"mie2"},{default:e(()=>[...a[53]||(a[53]=[s("⌘",-1)])]),_:1}),i(n(d),{size:"md",class:"mie2"},{default:e(()=>[...a[54]||(a[54]=[s("⌥",-1)])]),_:1}),i(n(d),{size:"md",class:"mie2"},{default:e(()=>[...a[55]||(a[55]=[s("⇧",-1)])]),_:1}),i(n(d),{size:"md"},{default:e(()=>[...a[56]||(a[56]=[s("⌃",-1)])]),_:1})]),t("div",X,[a[62]||(a[62]=t("strong",{class:"mie2"},"Large:",-1)),i(n(d),{size:"lg",class:"mie2"},{default:e(()=>[...a[58]||(a[58]=[s("⌘",-1)])]),_:1}),i(n(d),{size:"lg",class:"mie2"},{default:e(()=>[...a[59]||(a[59]=[s("⌥",-1)])]),_:1}),i(n(d),{size:"lg",class:"mie2"},{default:e(()=>[...a[60]||(a[60]=[s("⇧",-1)])]),_:1}),i(n(d),{size:"lg"},{default:e(()=>[...a[61]||(a[61]=[s("⌃",-1)])]),_:1})])])]),t("div",Y,[a[97]||(a[97]=t("h2",null,"With Background",-1)),a[98]||(a[98]=t("p",{class:"mbs2 mbe3"},"Add background colors to variants for increased visual emphasis.",-1)),t("div",Z,[t("div",_,[i(n(d),{background:!0,variant:"primary",class:"mie2"},{default:e(()=>[...a[65]||(a[65]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"primary",class:"mie2"},{default:e(()=>[...a[66]||(a[66]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"primary",class:"mie2"},{default:e(()=>[...a[67]||(a[67]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"primary"},{default:e(()=>[...a[68]||(a[68]=[s("⌃",-1)])]),_:1})]),t("div",aa,[i(n(d),{background:!0,variant:"secondary",class:"mie2"},{default:e(()=>[...a[69]||(a[69]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"secondary",class:"mie2"},{default:e(()=>[...a[70]||(a[70]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"secondary",class:"mie2"},{default:e(()=>[...a[71]||(a[71]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"secondary"},{default:e(()=>[...a[72]||(a[72]=[s("⌃",-1)])]),_:1})]),t("div",sa,[i(n(d),{background:!0,variant:"info",class:"mie2"},{default:e(()=>[...a[73]||(a[73]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"info",class:"mie2"},{default:e(()=>[...a[74]||(a[74]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"info",class:"mie2"},{default:e(()=>[...a[75]||(a[75]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"info"},{default:e(()=>[...a[76]||(a[76]=[s("⌃",-1)])]),_:1})]),t("div",ia,[i(n(d),{background:!0,variant:"warning",class:"mie2"},{default:e(()=>[...a[77]||(a[77]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"warning",class:"mie2"},{default:e(()=>[...a[78]||(a[78]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"warning",class:"mie2"},{default:e(()=>[...a[79]||(a[79]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"warning"},{default:e(()=>[...a[80]||(a[80]=[s("⌃",-1)])]),_:1})]),t("div",na,[i(n(d),{background:!0,variant:"success",class:"mie2"},{default:e(()=>[...a[81]||(a[81]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"success",class:"mie2"},{default:e(()=>[...a[82]||(a[82]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"success",class:"mie2"},{default:e(()=>[...a[83]||(a[83]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"success"},{default:e(()=>[...a[84]||(a[84]=[s("⌃",-1)])]),_:1})]),t("div",ea,[i(n(d),{background:!0,variant:"danger",class:"mie2"},{default:e(()=>[...a[85]||(a[85]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"danger",class:"mie2"},{default:e(()=>[...a[86]||(a[86]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"danger",class:"mie2"},{default:e(()=>[...a[87]||(a[87]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"danger"},{default:e(()=>[...a[88]||(a[88]=[s("⌃",-1)])]),_:1})]),t("div",da,[i(n(d),{background:!0,variant:"error",class:"mie2"},{default:e(()=>[...a[89]||(a[89]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"error",class:"mie2"},{default:e(()=>[...a[90]||(a[90]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"error",class:"mie2"},{default:e(()=>[...a[91]||(a[91]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"error"},{default:e(()=>[...a[92]||(a[92]=[s("⌃",-1)])]),_:1})]),t("div",ta,[i(n(d),{background:!0,variant:"monochrome",class:"mie2"},{default:e(()=>[...a[93]||(a[93]=[s("⌘",-1)])]),_:1}),i(n(d),{background:!0,variant:"monochrome",class:"mie2"},{default:e(()=>[...a[94]||(a[94]=[s("⌥",-1)])]),_:1}),i(n(d),{background:!0,variant:"monochrome",class:"mie2"},{default:e(()=>[...a[95]||(a[95]=[s("⇧",-1)])]),_:1}),i(n(d),{background:!0,variant:"monochrome"},{default:e(()=>[...a[96]||(a[96]=[s("⌃",-1)])]),_:1})])])]),t("div",ra,[a[109]||(a[109]=t("h2",null,"Bordered",-1)),a[110]||(a[110]=t("p",{class:"mbs2 mbe3"},"Toggle border styling for different visual treatments.",-1)),t("div",la,[t("div",ba,[a[103]||(a[103]=t("strong",{class:"mie2"},"With Border:",-1)),i(n(d),{bordered:!0,class:"mie2"},{default:e(()=>[...a[99]||(a[99]=[s("⌘",-1)])]),_:1}),i(n(d),{bordered:!0,class:"mie2"},{default:e(()=>[...a[100]||(a[100]=[s("⌥",-1)])]),_:1}),i(n(d),{bordered:!0,class:"mie2"},{default:e(()=>[...a[101]||(a[101]=[s("⇧",-1)])]),_:1}),i(n(d),{bordered:!0},{default:e(()=>[...a[102]||(a[102]=[s("⌃",-1)])]),_:1})]),t("div",oa,[a[108]||(a[108]=t("strong",{class:"mie2"},"Without Border:",-1)),i(n(d),{bordered:!1,class:"mie2"},{default:e(()=>[...a[104]||(a[104]=[s("⌘",-1)])]),_:1}),i(n(d),{bordered:!1,class:"mie2"},{default:e(()=>[...a[105]||(a[105]=[s("⌥",-1)])]),_:1}),i(n(d),{bordered:!1,class:"mie2"},{default:e(()=>[...a[106]||(a[106]=[s("⇧",-1)])]),_:1}),i(n(d),{bordered:!1},{default:e(()=>[...a[107]||(a[107]=[s("⌃",-1)])]),_:1})])])]),t("div",ka,[a[126]||(a[126]=t("h2",null,"Combined Examples",-1)),a[127]||(a[127]=t("p",{class:"mbs2 mbe3"},"Combining multiple properties for rich presentations.",-1)),t("div",ga,[t("div",ca,[a[115]||(a[115]=t("strong",{class:"mie2"},"Medium + Primary + Background:",-1)),i(n(d),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:e(()=>[...a[111]||(a[111]=[s("⌘",-1)])]),_:1}),i(n(d),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:e(()=>[...a[112]||(a[112]=[s("⌥",-1)])]),_:1}),i(n(d),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:e(()=>[...a[113]||(a[113]=[s("⇧",-1)])]),_:1}),i(n(d),{size:"md",background:!0,variant:"primary"},{default:e(()=>[...a[114]||(a[114]=[s("⌃",-1)])]),_:1})]),t("div",ma,[a[120]||(a[120]=t("strong",{class:"mie2"},"Large + Success + Background:",-1)),i(n(d),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:e(()=>[...a[116]||(a[116]=[s("⌘",-1)])]),_:1}),i(n(d),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:e(()=>[...a[117]||(a[117]=[s("⌥",-1)])]),_:1}),i(n(d),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:e(()=>[...a[118]||(a[118]=[s("⇧",-1)])]),_:1}),i(n(d),{size:"lg",background:!0,variant:"success"},{default:e(()=>[...a[119]||(a[119]=[s("⌃",-1)])]),_:1})]),t("div",ua,[a[125]||(a[125]=t("strong",{class:"mie2"},"Large + Warning:",-1)),i(n(d),{size:"lg",variant:"warning",class:"mie2"},{default:e(()=>[...a[121]||(a[121]=[s("⌘",-1)])]),_:1}),i(n(d),{size:"lg",variant:"warning",class:"mie2"},{default:e(()=>[...a[122]||(a[122]=[s("⌥",-1)])]),_:1}),i(n(d),{size:"lg",variant:"warning",class:"mie2"},{default:e(()=>[...a[123]||(a[123]=[s("⇧",-1)])]),_:1}),i(n(d),{size:"lg",variant:"warning"},{default:e(()=>[...a[124]||(a[124]=[s("⌃",-1)])]),_:1})])])])]))}});class va extends h{createRenderRoot(){return this}render(){return F`
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
    `}}customElements.define("kbd-lit-examples",va);const ha=`<template>
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
<\/script>
`,Fa=`import { LitElement, html } from 'lit';
import 'agnosticui-core/kbd';

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
`,ya=`import { ReactKbd } from "agnosticui-core/kbd/react";

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
`,xa=JSON.parse('{"title":"Kbd","description":"","frontmatter":{},"headers":[],"relativePath":"components/kbd.md","filePath":"components/kbd.md"}'),Ka={name:"components/kbd.md"},Aa=Object.assign(Ka,{setup(l){return(r,a)=>(p(),u("div",null,[a[1]||(a[1]=t("h1",{id:"kbd",tabindex:"-1"},[s("Kbd "),t("a",{class:"header-anchor",href:"#kbd","aria-label":'Permalink to "Kbd"'},"​")],-1)),i(f),a[2]||(a[2]=t("p",null,"Keyboard key components are used to represent keyboard shortcuts, hotkeys, or user input instructions in a visually distinct way. They mimic the appearance of physical keyboard keys.",-1)),a[3]||(a[3]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,[s("Note that single character content within an "),t("i",null,"<ag-kbd>"),s(" tag is bumped up by a single font size scale for readability.")])],-1)),a[4]||(a[4]=t("h2",{id:"examples",tabindex:"-1"},[s("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(N,{component:"kbd","vue-code":n(ha),"lit-code":n(Fa),"react-code":n(ya)},{vue:e(()=>[i(pa)]),lit:e(()=>[...a[0]||(a[0]=[t("kbd-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[5]||(a[5]=C(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Kbd</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueKbd</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt; ⌘ &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueKbd</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueKbd } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/kbd/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueKbd }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactKbd } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/kbd/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactKbd</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      ⌘</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactKbd</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/kbd&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-kbd</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bordered</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;⌘&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-kbd</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;success&#39; | &#39;danger&#39; | &#39;error&#39;</code></td><td><code>&#39;default&#39;</code></td><td>The visual variant of the kbd element (e.g., for color theming).</td></tr><tr><td><code>size</code></td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;sm&#39;</code></td><td>The size of the kbd element. Small is suitable for inline text, medium for emphasized shortcuts, and large for prominent displays.</td></tr><tr><td><code>bordered</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If <code>true</code>, displays a border around the kbd element to enhance the key appearance.</td></tr><tr><td><code>background</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If <code>true</code>, adds a background color to the kbd element based on the variant, providing additional visual emphasis.</td></tr></tbody></table><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-kbd-wrapper</code></td><td>The main wrapper element for the kbd&#39;s content.</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-kbd</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-kbd</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-kbd-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">700</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0.75</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #764ba2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">102</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">126</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">234</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-kbd</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.flat-kbd</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-kbd-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f5f5f5</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#333</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #ddd</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.25</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-family</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Monaco&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Courier New&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">monospace</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The kbd component uses the semantic <code>&lt;kbd&gt;</code> HTML element, which is automatically recognized by screen readers as representing keyboard input. The component preserves the natural text content for screen reader announcement. When using special characters or symbols (like ⌘, ⌥, ⇧, ⌃), ensure they are properly announced by including appropriate <code>aria-label</code> attributes if needed for clarity.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Variants</strong>: The &#39;default&#39; variant provides neutral styling suitable for most contexts. Use semantic variants (&#39;info&#39;, &#39;warning&#39;, &#39;error&#39;, &#39;success&#39;) to indicate the nature of the shortcut or action.</li><li><strong>Sizes</strong>: Choose &#39;sm&#39; for inline documentation, &#39;md&#39; for tutorial content, and &#39;lg&#39; for hero sections or prominent feature callouts.</li><li><strong>Common Symbols</strong>: Use standard keyboard symbols for better recognition: <ul><li><code>⌘</code> - Command (Mac)</li><li><code>⌥</code> - Option/Alt (Mac)</li><li><code>⇧</code> - Shift</li><li><code>⌃</code> - Control</li><li>Or use text like &quot;Ctrl&quot;, &quot;Alt&quot;, &quot;Shift&quot;, &quot;Enter&quot;, etc.</li></ul></li><li><strong>Keyboard Combinations</strong>: Display multiple keys together for shortcuts (e.g., &quot;Ctrl + Shift + Del&quot;) either as a single Kbd component or as separate components with visible separators.</li><li><strong>Background Mode</strong>: Enable <code>background</code> with semantic variants to create more visually prominent keyboard indicators, useful for tutorial overlays or highlighting critical shortcuts.</li><li>All implementations (Vue, React, Lit) share the same underlying styles and behavior. Properties can be set via attributes (e.g., <code>&lt;ag-kbd bordered&gt;</code>) or property binding in framework templates.</li></ul>`,15))]))}});export{xa as __pageData,Aa as default};
