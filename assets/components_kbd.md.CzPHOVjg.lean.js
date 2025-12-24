import{A as v}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as c,a as C,x as B}from"./chunks/lit-element.B0TUrqGF.js";import{z as h}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{d as b,p as E,c as u,o as m,r as A,K as w,j as r,G as a,k as t,w as n,a as i,ae as z}from"./chunks/framework.BoyT2Jkt.js";var x=Object.defineProperty,g=(d,l,s,k)=>{for(var o=void 0,F=d.length-1,y;F>=0;F--)(y=d[F])&&(o=y(l,s,o)||o);return o&&x(l,s,o),o};const f=class extends C{constructor(){super(),this.variant="default",this.bordered=!0,this.background=!1,this.size="md"}updated(l){super.updated(l),this._checkSingleChar()}_checkSingleChar(){var k;let l="";const s=(k=this.shadowRoot)==null?void 0:k.querySelector("slot");s&&(l=s.assignedNodes({flatten:!0}).map(o=>o.textContent||"").join("")),l=l.trim(),l.length===1?this.setAttribute("single-char","true"):this.removeAttribute("single-char")}_onSlotChange(){this._checkSingleChar()}render(){return B`
      <kbd class="kbd-wrapper" part="ag-kbd-wrapper">
        <slot @slotchange=${this._onSlotChange}></slot>
      </kbd>
    `}};f.styles=c`
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
  `;let p=f;g([h({type:String,reflect:!0})],p.prototype,"variant");g([h({type:Boolean,reflect:!0})],p.prototype,"bordered");g([h({type:Boolean,reflect:!0})],p.prototype,"background");g([h({type:String,reflect:!0})],p.prototype,"size");customElements.get("ag-kbd")||customElements.define("ag-kbd",p);const q=[".bordered",".background","variant","size"],e=b({__name:"VueKbd",props:{variant:{default:"default"},bordered:{type:Boolean,default:!0},background:{type:Boolean,default:!1},size:{default:"md"}},setup(d){const l=E();return(s,k)=>(m(),u("ag-kbd",w({ref_key:"agComponent",ref:l,".bordered":d.bordered,".background":d.background,variant:d.variant,size:d.size},s.$attrs),[A(s.$slots,"default")],48,q))}}),D={class:"mbe4"},S={class:"stacked-mobile"},P={class:"mbs3"},T={class:"mbs3"},K={class:"mbe4"},V={class:"stacked mbe3"},N={class:"mbe2"},I={class:"mbe2"},L={class:"mbe2"},M={class:"mbe2"},R={class:"mbe2"},W={class:"mbe2"},j={class:"mbe2"},O={class:"mbe2"},U={class:"mbe2"},$={class:"mbe4"},G={class:"stacked"},H={class:"mbe2"},J={class:"mbe2"},Q={class:"mbe2"},X={class:"mbe4"},Y={class:"stacked mbe3"},Z={class:"mbe2"},_={class:"mbe2"},ss={class:"mbe2"},is={class:"mbe2"},as={class:"mbe2"},ts={class:"mbe2"},ns={class:"mbe2"},es={class:"mbe2"},rs={class:"mbe4"},ls={class:"stacked-mobile mbe3"},ds={class:"mbe2"},os={class:"mbe2"},ps={class:"mbe4"},ks={class:"stacked"},hs={class:"mbe2"},gs={class:"mbe2"},Fs={class:"mbe2"},us=b({__name:"KbdExamples",setup(d){return(l,s)=>(m(),u("section",null,[r("div",D,[s[8]||(s[8]=r("h2",null,"Default",-1)),s[9]||(s[9]=r("p",{class:"mbs2 mbe3"},"Basic keyboard key representation with default styling.",-1)),r("div",S,[a(t(e),{class:"mie2"},{default:n(()=>[...s[0]||(s[0]=[i("⌘",-1)])]),_:1}),a(t(e),{class:"mie2"},{default:n(()=>[...s[1]||(s[1]=[i("⌥",-1)])]),_:1}),a(t(e),{class:"mie2"},{default:n(()=>[...s[2]||(s[2]=[i("⇧",-1)])]),_:1}),a(t(e),null,{default:n(()=>[...s[3]||(s[3]=[i("⌃",-1)])]),_:1})]),r("div",P,[a(t(e),{class:"mie5"},{default:n(()=>[...s[4]||(s[4]=[i("cntrl + shift + del",-1)])]),_:1}),a(t(e),null,{default:n(()=>[...s[5]||(s[5]=[i("⌘ + v",-1)])]),_:1})]),r("div",T,[a(t(e),{size:"sm",class:"mie5"},{default:n(()=>[...s[6]||(s[6]=[i("cntrl + shift + del",-1)])]),_:1}),a(t(e),{size:"sm"},{default:n(()=>[...s[7]||(s[7]=[i("⌘ + v",-1)])]),_:1})])]),r("div",K,[s[46]||(s[46]=r("h2",null,"Variants",-1)),s[47]||(s[47]=r("p",{class:"mbs2 mbe3"},"Semantic color variants for different contexts and visual emphasis.",-1)),r("div",V,[r("div",N,[a(t(e),{variant:"default",class:"mie2"},{default:n(()=>[...s[10]||(s[10]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"default",class:"mie2"},{default:n(()=>[...s[11]||(s[11]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"default",class:"mie2"},{default:n(()=>[...s[12]||(s[12]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"default"},{default:n(()=>[...s[13]||(s[13]=[i("⌃",-1)])]),_:1})]),r("div",I,[a(t(e),{variant:"primary",class:"mie2"},{default:n(()=>[...s[14]||(s[14]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"primary",class:"mie2"},{default:n(()=>[...s[15]||(s[15]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"primary",class:"mie2"},{default:n(()=>[...s[16]||(s[16]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"primary"},{default:n(()=>[...s[17]||(s[17]=[i("⌃",-1)])]),_:1})]),r("div",L,[a(t(e),{variant:"secondary",class:"mie2"},{default:n(()=>[...s[18]||(s[18]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"secondary",class:"mie2"},{default:n(()=>[...s[19]||(s[19]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"secondary",class:"mie2"},{default:n(()=>[...s[20]||(s[20]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"secondary"},{default:n(()=>[...s[21]||(s[21]=[i("⌃",-1)])]),_:1})]),r("div",M,[a(t(e),{variant:"info",class:"mie2"},{default:n(()=>[...s[22]||(s[22]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"info",class:"mie2"},{default:n(()=>[...s[23]||(s[23]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"info",class:"mie2"},{default:n(()=>[...s[24]||(s[24]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"info"},{default:n(()=>[...s[25]||(s[25]=[i("⌃",-1)])]),_:1})]),r("div",R,[a(t(e),{variant:"warning",class:"mie2"},{default:n(()=>[...s[26]||(s[26]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"warning",class:"mie2"},{default:n(()=>[...s[27]||(s[27]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"warning",class:"mie2"},{default:n(()=>[...s[28]||(s[28]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"warning"},{default:n(()=>[...s[29]||(s[29]=[i("⌃",-1)])]),_:1})]),r("div",W,[a(t(e),{variant:"success",class:"mie2"},{default:n(()=>[...s[30]||(s[30]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"success",class:"mie2"},{default:n(()=>[...s[31]||(s[31]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"success",class:"mie2"},{default:n(()=>[...s[32]||(s[32]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"success"},{default:n(()=>[...s[33]||(s[33]=[i("⌃",-1)])]),_:1})]),r("div",j,[a(t(e),{variant:"danger",class:"mie2"},{default:n(()=>[...s[34]||(s[34]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"danger",class:"mie2"},{default:n(()=>[...s[35]||(s[35]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"danger",class:"mie2"},{default:n(()=>[...s[36]||(s[36]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"danger"},{default:n(()=>[...s[37]||(s[37]=[i("⌃",-1)])]),_:1})]),r("div",O,[a(t(e),{variant:"error",class:"mie2"},{default:n(()=>[...s[38]||(s[38]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"error",class:"mie2"},{default:n(()=>[...s[39]||(s[39]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"error",class:"mie2"},{default:n(()=>[...s[40]||(s[40]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"error"},{default:n(()=>[...s[41]||(s[41]=[i("⌃",-1)])]),_:1})]),r("div",U,[a(t(e),{variant:"monochrome",class:"mie2"},{default:n(()=>[...s[42]||(s[42]=[i("⌘",-1)])]),_:1}),a(t(e),{variant:"monochrome",class:"mie2"},{default:n(()=>[...s[43]||(s[43]=[i("⌥",-1)])]),_:1}),a(t(e),{variant:"monochrome",class:"mie2"},{default:n(()=>[...s[44]||(s[44]=[i("⇧",-1)])]),_:1}),a(t(e),{variant:"monochrome"},{default:n(()=>[...s[45]||(s[45]=[i("⌃",-1)])]),_:1})])])]),r("div",$,[s[63]||(s[63]=r("h2",null,"Sizes",-1)),s[64]||(s[64]=r("p",{class:"mbs2 mbe3"},"Three size options to match different contexts and typography scales.",-1)),r("div",G,[r("div",H,[s[52]||(s[52]=r("strong",{class:"mie2"},"Small:",-1)),a(t(e),{size:"sm",class:"mie2"},{default:n(()=>[...s[48]||(s[48]=[i("⌘",-1)])]),_:1}),a(t(e),{size:"sm",class:"mie2"},{default:n(()=>[...s[49]||(s[49]=[i("⌥",-1)])]),_:1}),a(t(e),{size:"sm",class:"mie2"},{default:n(()=>[...s[50]||(s[50]=[i("⇧",-1)])]),_:1}),a(t(e),{size:"sm"},{default:n(()=>[...s[51]||(s[51]=[i("⌃",-1)])]),_:1})]),r("div",J,[s[57]||(s[57]=r("strong",{class:"mie2"},"Medium:",-1)),a(t(e),{size:"md",class:"mie2"},{default:n(()=>[...s[53]||(s[53]=[i("⌘",-1)])]),_:1}),a(t(e),{size:"md",class:"mie2"},{default:n(()=>[...s[54]||(s[54]=[i("⌥",-1)])]),_:1}),a(t(e),{size:"md",class:"mie2"},{default:n(()=>[...s[55]||(s[55]=[i("⇧",-1)])]),_:1}),a(t(e),{size:"md"},{default:n(()=>[...s[56]||(s[56]=[i("⌃",-1)])]),_:1})]),r("div",Q,[s[62]||(s[62]=r("strong",{class:"mie2"},"Large:",-1)),a(t(e),{size:"lg",class:"mie2"},{default:n(()=>[...s[58]||(s[58]=[i("⌘",-1)])]),_:1}),a(t(e),{size:"lg",class:"mie2"},{default:n(()=>[...s[59]||(s[59]=[i("⌥",-1)])]),_:1}),a(t(e),{size:"lg",class:"mie2"},{default:n(()=>[...s[60]||(s[60]=[i("⇧",-1)])]),_:1}),a(t(e),{size:"lg"},{default:n(()=>[...s[61]||(s[61]=[i("⌃",-1)])]),_:1})])])]),r("div",X,[s[97]||(s[97]=r("h2",null,"With Background",-1)),s[98]||(s[98]=r("p",{class:"mbs2 mbe3"},"Add background colors to variants for increased visual emphasis.",-1)),r("div",Y,[r("div",Z,[a(t(e),{background:!0,variant:"primary",class:"mie2"},{default:n(()=>[...s[65]||(s[65]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"primary",class:"mie2"},{default:n(()=>[...s[66]||(s[66]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"primary",class:"mie2"},{default:n(()=>[...s[67]||(s[67]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"primary"},{default:n(()=>[...s[68]||(s[68]=[i("⌃",-1)])]),_:1})]),r("div",_,[a(t(e),{background:!0,variant:"secondary",class:"mie2"},{default:n(()=>[...s[69]||(s[69]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"secondary",class:"mie2"},{default:n(()=>[...s[70]||(s[70]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"secondary",class:"mie2"},{default:n(()=>[...s[71]||(s[71]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"secondary"},{default:n(()=>[...s[72]||(s[72]=[i("⌃",-1)])]),_:1})]),r("div",ss,[a(t(e),{background:!0,variant:"info",class:"mie2"},{default:n(()=>[...s[73]||(s[73]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"info",class:"mie2"},{default:n(()=>[...s[74]||(s[74]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"info",class:"mie2"},{default:n(()=>[...s[75]||(s[75]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"info"},{default:n(()=>[...s[76]||(s[76]=[i("⌃",-1)])]),_:1})]),r("div",is,[a(t(e),{background:!0,variant:"warning",class:"mie2"},{default:n(()=>[...s[77]||(s[77]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"warning",class:"mie2"},{default:n(()=>[...s[78]||(s[78]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"warning",class:"mie2"},{default:n(()=>[...s[79]||(s[79]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"warning"},{default:n(()=>[...s[80]||(s[80]=[i("⌃",-1)])]),_:1})]),r("div",as,[a(t(e),{background:!0,variant:"success",class:"mie2"},{default:n(()=>[...s[81]||(s[81]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"success",class:"mie2"},{default:n(()=>[...s[82]||(s[82]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"success",class:"mie2"},{default:n(()=>[...s[83]||(s[83]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"success"},{default:n(()=>[...s[84]||(s[84]=[i("⌃",-1)])]),_:1})]),r("div",ts,[a(t(e),{background:!0,variant:"danger",class:"mie2"},{default:n(()=>[...s[85]||(s[85]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"danger",class:"mie2"},{default:n(()=>[...s[86]||(s[86]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"danger",class:"mie2"},{default:n(()=>[...s[87]||(s[87]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"danger"},{default:n(()=>[...s[88]||(s[88]=[i("⌃",-1)])]),_:1})]),r("div",ns,[a(t(e),{background:!0,variant:"error",class:"mie2"},{default:n(()=>[...s[89]||(s[89]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"error",class:"mie2"},{default:n(()=>[...s[90]||(s[90]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"error",class:"mie2"},{default:n(()=>[...s[91]||(s[91]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"error"},{default:n(()=>[...s[92]||(s[92]=[i("⌃",-1)])]),_:1})]),r("div",es,[a(t(e),{background:!0,variant:"monochrome",class:"mie2"},{default:n(()=>[...s[93]||(s[93]=[i("⌘",-1)])]),_:1}),a(t(e),{background:!0,variant:"monochrome",class:"mie2"},{default:n(()=>[...s[94]||(s[94]=[i("⌥",-1)])]),_:1}),a(t(e),{background:!0,variant:"monochrome",class:"mie2"},{default:n(()=>[...s[95]||(s[95]=[i("⇧",-1)])]),_:1}),a(t(e),{background:!0,variant:"monochrome"},{default:n(()=>[...s[96]||(s[96]=[i("⌃",-1)])]),_:1})])])]),r("div",rs,[s[109]||(s[109]=r("h2",null,"Bordered",-1)),s[110]||(s[110]=r("p",{class:"mbs2 mbe3"},"Toggle border styling for different visual treatments.",-1)),r("div",ls,[r("div",ds,[s[103]||(s[103]=r("strong",{class:"mie2"},"With Border:",-1)),a(t(e),{bordered:!0,class:"mie2"},{default:n(()=>[...s[99]||(s[99]=[i("⌘",-1)])]),_:1}),a(t(e),{bordered:!0,class:"mie2"},{default:n(()=>[...s[100]||(s[100]=[i("⌥",-1)])]),_:1}),a(t(e),{bordered:!0,class:"mie2"},{default:n(()=>[...s[101]||(s[101]=[i("⇧",-1)])]),_:1}),a(t(e),{bordered:!0},{default:n(()=>[...s[102]||(s[102]=[i("⌃",-1)])]),_:1})]),r("div",os,[s[108]||(s[108]=r("strong",{class:"mie2"},"Without Border:",-1)),a(t(e),{bordered:!1,class:"mie2"},{default:n(()=>[...s[104]||(s[104]=[i("⌘",-1)])]),_:1}),a(t(e),{bordered:!1,class:"mie2"},{default:n(()=>[...s[105]||(s[105]=[i("⌥",-1)])]),_:1}),a(t(e),{bordered:!1,class:"mie2"},{default:n(()=>[...s[106]||(s[106]=[i("⇧",-1)])]),_:1}),a(t(e),{bordered:!1},{default:n(()=>[...s[107]||(s[107]=[i("⌃",-1)])]),_:1})])])]),r("div",ps,[s[126]||(s[126]=r("h2",null,"Combined Examples",-1)),s[127]||(s[127]=r("p",{class:"mbs2 mbe3"},"Combining multiple properties for rich presentations.",-1)),r("div",ks,[r("div",hs,[s[115]||(s[115]=r("strong",{class:"mie2"},"Medium + Primary + Background:",-1)),a(t(e),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:n(()=>[...s[111]||(s[111]=[i("⌘",-1)])]),_:1}),a(t(e),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:n(()=>[...s[112]||(s[112]=[i("⌥",-1)])]),_:1}),a(t(e),{size:"md",background:!0,variant:"primary",class:"mie2"},{default:n(()=>[...s[113]||(s[113]=[i("⇧",-1)])]),_:1}),a(t(e),{size:"md",background:!0,variant:"primary"},{default:n(()=>[...s[114]||(s[114]=[i("⌃",-1)])]),_:1})]),r("div",gs,[s[120]||(s[120]=r("strong",{class:"mie2"},"Large + Success + Background:",-1)),a(t(e),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:n(()=>[...s[116]||(s[116]=[i("⌘",-1)])]),_:1}),a(t(e),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:n(()=>[...s[117]||(s[117]=[i("⌥",-1)])]),_:1}),a(t(e),{size:"lg",background:!0,variant:"success",class:"mie2"},{default:n(()=>[...s[118]||(s[118]=[i("⇧",-1)])]),_:1}),a(t(e),{size:"lg",background:!0,variant:"success"},{default:n(()=>[...s[119]||(s[119]=[i("⌃",-1)])]),_:1})]),r("div",Fs,[s[125]||(s[125]=r("strong",{class:"mie2"},"Large + Warning:",-1)),a(t(e),{size:"lg",variant:"warning",class:"mie2"},{default:n(()=>[...s[121]||(s[121]=[i("⌘",-1)])]),_:1}),a(t(e),{size:"lg",variant:"warning",class:"mie2"},{default:n(()=>[...s[122]||(s[122]=[i("⌥",-1)])]),_:1}),a(t(e),{size:"lg",variant:"warning",class:"mie2"},{default:n(()=>[...s[123]||(s[123]=[i("⇧",-1)])]),_:1}),a(t(e),{size:"lg",variant:"warning"},{default:n(()=>[...s[124]||(s[124]=[i("⌃",-1)])]),_:1})])])])]))}}),Cs=JSON.parse('{"title":"Kbd","description":"","frontmatter":{},"headers":[],"relativePath":"components/kbd.md","filePath":"components/kbd.md"}'),ms={name:"components/kbd.md"},Bs=Object.assign(ms,{setup(d){return(l,s)=>(m(),u("div",null,[s[0]||(s[0]=r("h1",{id:"kbd",tabindex:"-1"},[i("Kbd "),r("a",{class:"header-anchor",href:"#kbd","aria-label":'Permalink to "Kbd"'},"​")],-1)),a(v),s[1]||(s[1]=r("p",null,"Keyboard key components are used to represent keyboard shortcuts, hotkeys, or user input instructions in a visually distinct way. They mimic the appearance of physical keyboard keys.",-1)),s[2]||(s[2]=r("div",{class:"tip custom-block"},[r("p",{class:"custom-block-title"},"TIP"),r("p",null,[i("Note that single character content within an "),r("i",null,"<ag-kbd>"),i(" tag is bumped up by a single font size scale for readability.")])],-1)),a(us),s[3]||(s[3]=z("",15))]))}});export{Cs as __pageData,Bs as default};
