var C=Object.defineProperty;var S=(e,s,t)=>s in e?C(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var v=(e,s,t)=>S(e,typeof s!="symbol"?s+"":s,t);import{A as E}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{a as b,x as F,z as p,i as B}from"./chunks/Button.CFkPNK98.js";import{d as x,p as q,c as m,o as u,K as A,_ as U,C as I,j as n,G as a,a as r,ae as w,w as f,k}from"./chunks/framework.NAAYCHZu.js";import{F as P}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{G as N}from"./chunks/globe.CauuzbNH.js";import{Z as R}from"./chunks/sdk.m.DhOmSlC9.js";import{c as y}from"./chunks/createLucideIcon.B61Wqv9x.js";import{P as T,A as z}from"./chunks/palette.Dy0bFg6z.js";import{B as $}from"./chunks/bell.DIj7aJxI.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/Icon.DjToxxjJ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=y("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=y("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=y("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);var J=Object.defineProperty,o=(e,s,t,g)=>{for(var h=void 0,d=e.length-1,i;d>=0;d--)(i=e[d])&&(h=i(s,t,h)||h);return h&&J(s,t,h),h};class l extends b{constructor(){super(),this._formatterCache=new Map,this.type="date",this.hourFormat="auto",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}_getLocale(){return this.lang||navigator.language}_getCacheKey(){const s=[this.type,this._getLocale()];return this.type==="date"?s.push(this.dateStyle||"",this.timeStyle||"",this.weekday||"",this.era||"",this.year||"",this.month||"",this.day||"",this.hour||"",this.minute||"",this.second||"",this.timeZoneName||"",this.timeZone||"",this.hourFormat||""):s.push(String(this.noGrouping),this.currency||"",this.currencyDisplay||"",String(this.minimumIntegerDigits||""),String(this.minimumFractionDigits||""),String(this.maximumFractionDigits||""),String(this.minimumSignificantDigits||""),String(this.maximumSignificantDigits||"")),s.join("|")}_dispatchError(s,t){this.dispatchEvent(new CustomEvent("format-error",{detail:{type:s,error:t.message},bubbles:!0,composed:!0}))}_validate(){if(this.type==="currency"&&!this.currency)return{valid:!1,error:"Currency type requires a currency code"};if(this.type==="date"){if(!(this.date||this.value))return{valid:!1,error:"Date type requires a date value"}}else if(this.value===void 0||this.value===null)return{valid:!1,error:`${this.type} type requires a value`};return{valid:!0}}_formatDate(){const s=this._validate();if(!s.valid)return this._dispatchError("date",new Error(s.error)),"";const t=this.date||this.value,g=new Date(t);if(isNaN(g.getTime()))return this._dispatchError("date",new Error("Invalid date")),"";const h=this.hourFormat==="auto"?void 0:this.hourFormat==="12",d={dateStyle:this.dateStyle,timeStyle:this.timeStyle,weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:h};Object.keys(d).forEach(i=>{d[i]===void 0&&delete d[i]});try{const i=this._getCacheKey();let c=this._formatterCache.get(i);return c||(c=new Intl.DateTimeFormat(this._getLocale(),d),this._formatterCache.set(i,c)),c.format(g)}catch(i){return this._dispatchError("date",i),""}}_formatNumber(){const s=this._validate();if(!s.valid)return this._dispatchError("number",new Error(s.error)),"";const t=typeof this.value=="string"?parseFloat(this.value):Number(this.value);if(isNaN(t))return this._dispatchError("number",new Error("Invalid number")),"";const g={style:this.type==="percent"?"percent":this.type==="currency"?"currency":"decimal",currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits};Object.keys(g).forEach(h=>{g[h]===void 0&&delete g[h]});try{const h=this._getCacheKey();let d=this._formatterCache.get(h);return d||(d=new Intl.NumberFormat(this._getLocale(),g),this._formatterCache.set(h,d)),d.format(t)}catch(h){return this._dispatchError("number",h),""}}render(){if(!this._validate().valid)return F`<span part="error"></span>`;let s="";if(this.type==="date"){s=this._formatDate();const t=this.date||this.value,g=new Date(t);if(!isNaN(g.getTime()))return F`<time part="date-time" datetime="${g.toISOString()}">${s}</time>`}else return s=this._formatNumber(),F`<span part="${this.type}">${s}</span>`;return F`${s}`}disconnectedCallback(){super.disconnectedCallback(),this._formatterCache.clear()}}o([p({type:String,reflect:!0})],l.prototype,"type");o([p({type:String,reflect:!0})],l.prototype,"value");o([p({type:String,reflect:!0})],l.prototype,"lang");o([p({type:String,reflect:!0})],l.prototype,"date");o([p({type:String,reflect:!0})],l.prototype,"weekday");o([p({type:String,reflect:!0})],l.prototype,"era");o([p({type:String,reflect:!0})],l.prototype,"year");o([p({type:String,reflect:!0})],l.prototype,"month");o([p({type:String,reflect:!0})],l.prototype,"day");o([p({type:String,reflect:!0})],l.prototype,"hour");o([p({type:String,reflect:!0})],l.prototype,"minute");o([p({type:String,reflect:!0})],l.prototype,"second");o([p({type:String,reflect:!0,attribute:"time-zone-name"})],l.prototype,"timeZoneName");o([p({type:String,reflect:!0,attribute:"time-zone"})],l.prototype,"timeZone");o([p({type:String,reflect:!0,attribute:"hour-format"})],l.prototype,"hourFormat");o([p({type:String,reflect:!0,attribute:"date-style"})],l.prototype,"dateStyle");o([p({type:String,reflect:!0,attribute:"time-style"})],l.prototype,"timeStyle");o([p({type:Boolean,reflect:!0,attribute:"no-grouping"})],l.prototype,"noGrouping");o([p({type:String,reflect:!0})],l.prototype,"currency");o([p({type:String,reflect:!0,attribute:"currency-display"})],l.prototype,"currencyDisplay");o([p({type:Number,reflect:!0,attribute:"minimum-integer-digits"})],l.prototype,"minimumIntegerDigits");o([p({type:Number,reflect:!0,attribute:"minimum-fraction-digits"})],l.prototype,"minimumFractionDigits");o([p({type:Number,reflect:!0,attribute:"maximum-fraction-digits"})],l.prototype,"maximumFractionDigits");o([p({type:Number,reflect:!0,attribute:"minimum-significant-digits"})],l.prototype,"minimumSignificantDigits");o([p({type:Number,reflect:!0,attribute:"maximum-significant-digits"})],l.prototype,"maximumSignificantDigits");customElements.get("ag-intl-formatter")||customElements.define("ag-intl-formatter",l);const j=["type","value","lang","date","weekday","era","year","month","day","hour","minute","second","timeZoneName","timeZone","hourFormat","dateStyle","timeStyle",".noGrouping","currency","currencyDisplay","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"],W=x({__name:"VueIntlFormatter",props:{type:{default:"date"},value:{default:void 0},lang:{default:void 0},date:{default:void 0},weekday:{default:void 0},era:{default:void 0},year:{default:void 0},month:{default:void 0},day:{default:void 0},hour:{default:void 0},minute:{default:void 0},second:{default:void 0},timeZoneName:{default:void 0},timeZone:{default:void 0},hourFormat:{default:"auto"},dateStyle:{default:void 0},timeStyle:{default:void 0},noGrouping:{type:Boolean,default:!1},currency:{default:"USD"},currencyDisplay:{default:"symbol"},minimumIntegerDigits:{default:void 0},minimumFractionDigits:{default:void 0},maximumFractionDigits:{default:void 0},minimumSignificantDigits:{default:void 0},maximumSignificantDigits:{default:void 0}},emits:["format-error"],setup(e,{emit:s}){const t=s,g=q(),h=d=>{t("format-error",d.detail)};return(d,i)=>(u(),m("ag-intl-formatter",A({ref_key:"formatterRef",ref:g,type:e.type,value:e.value,lang:e.lang,date:e.date,weekday:e.weekday,era:e.era,year:e.year,month:e.month,day:e.day,hour:e.hour,minute:e.minute,second:e.second,timeZoneName:e.timeZoneName,timeZone:e.timeZone,hourFormat:e.hourFormat,dateStyle:e.dateStyle,timeStyle:e.timeStyle,".noGrouping":e.noGrouping,currency:e.currency,currencyDisplay:e.currencyDisplay,minimumIntegerDigits:e.minimumIntegerDigits,minimumFractionDigits:e.minimumFractionDigits,maximumFractionDigits:e.maximumFractionDigits,minimumSignificantDigits:e.minimumSignificantDigits,maximumSignificantDigits:e.maximumSignificantDigits,onFormatError:h},d.$attrs),null,48,j))}}),M={name:"IntlFormatterExamples",components:{VueIntlFormatter:W}},Z={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"},O={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"},Y={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"},H={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"},K={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"},Q={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"},X={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"},_={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(240px, 1fr))",gap:"1rem","max-width":"900px"},class:"mbe4"},nn={class:"stat-card"},sn={class:"stat-value"},tn={class:"stat-change positive"},an={class:"stat-card"},en={class:"stat-value"},ln={class:"stat-change positive"},rn={class:"stat-card"},pn={class:"stat-value"},on={class:"stat-change positive"},hn={style:{display:"flex","flex-direction":"column",gap:"1rem"},class:"mbe4"};function dn(e,s,t,g,h,d){const i=I("VueIntlFormatter");return u(),m("section",null,[s[35]||(s[35]=n("div",{class:"mbe2"},[n("h2",null,"Date Formatting")],-1)),n("div",Z,[n("div",null,[s[0]||(s[0]=n("strong",null,"Default: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",lang:"en-US"})]),n("div",null,[s[1]||(s[1]=n("strong",null,"Full Date with Short Time: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",dateStyle:"full",timeStyle:"short",lang:"en-US"})]),n("div",null,[s[2]||(s[2]=n("strong",null,"Custom Format: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",weekday:"long",year:"numeric",month:"long",day:"numeric",lang:"en-US"})]),n("div",null,[s[3]||(s[3]=n("strong",null,"24-Hour Format: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",hour:"2-digit",minute:"2-digit",second:"2-digit",hourFormat:"24",lang:"en-US"})])]),s[36]||(s[36]=n("div",{class:"mbe2"},[n("h2",null,"Date Localization")],-1)),n("div",O,[n("div",null,[s[4]||(s[4]=n("strong",null,"English (US): ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",dateStyle:"full",timeStyle:"short",lang:"en-US"})]),n("div",null,[s[5]||(s[5]=n("strong",null,"French: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",dateStyle:"full",timeStyle:"short",lang:"fr-FR"})]),n("div",null,[s[6]||(s[6]=n("strong",null,"German: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",dateStyle:"full",timeStyle:"short",lang:"de-DE"})]),n("div",null,[s[7]||(s[7]=n("strong",null,"Japanese: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",dateStyle:"full",timeStyle:"short",lang:"ja-JP"})])]),s[37]||(s[37]=n("div",{class:"mbe2"},[n("h2",null,"Number Formatting")],-1)),n("div",Y,[n("div",null,[s[8]||(s[8]=n("strong",null,"Default: ",-1)),a(i,{type:"number",value:123456789e-2,lang:"en-US"})]),n("div",null,[s[9]||(s[9]=n("strong",null,"No Grouping: ",-1)),a(i,{type:"number",value:123456789e-2,noGrouping:!0,lang:"en-US"})]),n("div",null,[s[10]||(s[10]=n("strong",null,"Fixed Decimals (2): ",-1)),a(i,{type:"number",value:100,minimumFractionDigits:2,maximumFractionDigits:2,lang:"en-US"})])]),s[38]||(s[38]=n("div",{class:"mbe2"},[n("h2",null,"Number Localization")],-1)),n("div",H,[n("div",null,[s[11]||(s[11]=n("strong",null,"English (US): ",-1)),a(i,{type:"number",value:123456789e-2,lang:"en-US"})]),n("div",null,[s[12]||(s[12]=n("strong",null,"French (space separator, comma decimal): ",-1)),a(i,{type:"number",value:123456789e-2,lang:"fr-FR"})]),n("div",null,[s[13]||(s[13]=n("strong",null,"German (dot separator, comma decimal): ",-1)),a(i,{type:"number",value:123456789e-2,lang:"de-DE"})]),n("div",null,[s[14]||(s[14]=n("strong",null,"Indian (lakh grouping): ",-1)),a(i,{type:"number",value:123456789e-2,lang:"hi-IN"})])]),s[39]||(s[39]=n("div",{class:"mbe2"},[n("h2",null,"Currency Formatting")],-1)),n("div",K,[n("div",null,[s[15]||(s[15]=n("strong",null,"USD (symbol): ",-1)),a(i,{type:"currency",value:1234.56,currency:"USD",lang:"en-US"})]),n("div",null,[s[16]||(s[16]=n("strong",null,"EUR (symbol): ",-1)),a(i,{type:"currency",value:1234.56,currency:"EUR",lang:"en-US"})]),n("div",null,[s[17]||(s[17]=n("strong",null,"Currency Code Display: ",-1)),a(i,{type:"currency",value:1234.56,currency:"USD",currencyDisplay:"code",lang:"en-US"})]),n("div",null,[s[18]||(s[18]=n("strong",null,"Currency Name Display: ",-1)),a(i,{type:"currency",value:1234.56,currency:"USD",currencyDisplay:"name",lang:"en-US"})])]),s[40]||(s[40]=n("div",{class:"mbe2"},[n("h2",null,"Currency Localization")],-1)),n("div",Q,[n("div",null,[s[19]||(s[19]=n("strong",null,"USD in US: ",-1)),a(i,{type:"currency",value:1234.56,currency:"USD",lang:"en-US"})]),n("div",null,[s[20]||(s[20]=n("strong",null,"EUR in Germany: ",-1)),a(i,{type:"currency",value:1234.56,currency:"EUR",lang:"de-DE"})]),n("div",null,[s[21]||(s[21]=n("strong",null,"GBP in UK: ",-1)),a(i,{type:"currency",value:1234.56,currency:"GBP",lang:"en-GB"})]),n("div",null,[s[22]||(s[22]=n("strong",null,"JPY in Japan (no decimals): ",-1)),a(i,{type:"currency",value:123456,currency:"JPY",lang:"ja-JP"})])]),s[41]||(s[41]=n("div",{class:"mbe2"},[n("h2",null,"Percentage Formatting")],-1)),n("div",X,[n("div",null,[s[23]||(s[23]=n("strong",null,"Basic: ",-1)),a(i,{type:"percent",value:.75,lang:"en-US"})]),n("div",null,[s[24]||(s[24]=n("strong",null,"With Decimals: ",-1)),a(i,{type:"percent",value:.8532,minimumFractionDigits:2,maximumFractionDigits:2,lang:"en-US"})])]),s[42]||(s[42]=n("div",{class:"mbe2"},[n("h2",null,"Real-World Example: Dashboard Stats")],-1)),n("div",_,[n("div",nn,[s[26]||(s[26]=n("div",{class:"stat-label"},"Total Revenue",-1)),n("div",sn,[a(i,{type:"currency",value:123456789e-2,currency:"USD",lang:"en-US"})]),n("div",tn,[s[25]||(s[25]=r(" ↑ ",-1)),a(i,{type:"percent",value:.1234,minimumFractionDigits:2,lang:"en-US"})])]),n("div",an,[s[28]||(s[28]=n("div",{class:"stat-label"},"Total Users",-1)),n("div",en,[a(i,{type:"number",value:45678,lang:"en-US"})]),n("div",ln,[s[27]||(s[27]=r(" ↑ ",-1)),a(i,{type:"percent",value:.0856,minimumFractionDigits:2,lang:"en-US"})])]),n("div",rn,[s[30]||(s[30]=n("div",{class:"stat-label"},"Conversion Rate",-1)),n("div",pn,[a(i,{type:"percent",value:.0342,minimumFractionDigits:2,lang:"en-US"})]),n("div",on,[s[29]||(s[29]=r(" ↑ ",-1)),a(i,{type:"percent",value:.0523,minimumFractionDigits:2,lang:"en-US"})])])]),s[43]||(s[43]=n("div",{class:"mbe2"},[n("h2",null,"CSS Parts Customization"),n("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize formatter appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),n("div",hn,[n("div",null,[s[31]||(s[31]=n("strong",null,"Styled Currency: ",-1)),a(i,{type:"currency",value:1234.56,currency:"USD",lang:"en-US",class:"custom-currency"})]),n("div",null,[s[32]||(s[32]=n("strong",null,"Styled Number: ",-1)),a(i,{type:"number",value:123456789e-2,lang:"en-US",class:"custom-number"})]),n("div",null,[s[33]||(s[33]=n("strong",null,"Styled Date: ",-1)),a(i,{type:"date",date:"2024-01-15T14:30:00",dateStyle:"long",timeStyle:"short",lang:"en-US",class:"custom-date"})]),n("div",null,[s[34]||(s[34]=n("strong",null,"Styled Percent: ",-1)),a(i,{type:"percent",value:.75,lang:"en-US",class:"custom-percent"})])])])}const gn=U(M,[["render",dn],["__scopeId","data-v-d36bbcb7"]]);class D extends b{createRenderRoot(){return this}render(){return F`
      <section>
        <!-- Date Formatting -->
        <div class="mbe2">
          <h2>Date Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Default: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Full Date with Short Time: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Custom Format: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              weekday="long"
              year="numeric"
              month="long"
              day="numeric"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>24-Hour Format: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              hour="2-digit"
              minute="2-digit"
              second="2-digit"
              hour-format="24"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Date Localization -->
        <div class="mbe2">
          <h2>Date Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>English (US): </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>French: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="fr-FR"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>German: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Japanese: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="ja-JP"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Number Formatting -->
        <div class="mbe2">
          <h2>Number Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Default: </strong>
            <ag-intl-formatter
              type="number"
              .value=${123456789e-2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>No Grouping: </strong>
            <ag-intl-formatter
              type="number"
              .value=${123456789e-2}
              no-grouping
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Fixed Decimals (2): </strong>
            <ag-intl-formatter
              type="number"
              .value=${100}
              .minimumFractionDigits=${2}
              .maximumFractionDigits=${2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Number Localization -->
        <div class="mbe2">
          <h2>Number Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>English (US): </strong>
            <ag-intl-formatter
              type="number"
              .value=${123456789e-2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>French (space separator, comma decimal): </strong>
            <ag-intl-formatter
              type="number"
              .value=${123456789e-2}
              lang="fr-FR"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>German (dot separator, comma decimal): </strong>
            <ag-intl-formatter
              type="number"
              .value=${123456789e-2}
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Indian (lakh grouping): </strong>
            <ag-intl-formatter
              type="number"
              .value=${123456789e-2}
              lang="hi-IN"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Currency Formatting -->
        <div class="mbe2">
          <h2>Currency Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>USD (symbol): </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>EUR (symbol): </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="EUR"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Currency Code Display: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              currency-display="code"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Currency Name Display: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              currency-display="name"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Currency Localization -->
        <div class="mbe2">
          <h2>Currency Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>USD in US: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>EUR in Germany: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="EUR"
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>GBP in UK: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="GBP"
              lang="en-GB"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>JPY in Japan (no decimals): </strong>
            <ag-intl-formatter
              type="currency"
              .value=${123456}
              currency="JPY"
              lang="ja-JP"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Percentage Formatting -->
        <div class="mbe2">
          <h2>Percentage Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Basic: </strong>
            <ag-intl-formatter
              type="percent"
              .value=${.75}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>With Decimals: </strong>
            <ag-intl-formatter
              type="percent"
              .value=${.8532}
              .minimumFractionDigits=${2}
              .maximumFractionDigits=${2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Real-World Example: Dashboard Stats -->
        <div class="mbe2">
          <h2>Real-World Example: Dashboard Stats</h2>
        </div>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1rem;
            max-width: 900px;
          "
          class="mbe4"
        >
          <div class="stat-card">
            <div class="stat-label">Total Revenue</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="currency"
                .value=${123456789e-2}
                currency="USD"
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=${.1234}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Total Users</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="number"
                .value=${45678}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=${.0856}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Conversion Rate</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="percent"
                .value=${.0342}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=${.0523}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>
        </div>

        <!-- CSS Parts Customization -->
        <div class="mbe2">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize formatter appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Styled Currency: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              lang="en-US"
              class="custom-currency"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Number: </strong>
            <ag-intl-formatter
              type="number"
              .value=${123456789e-2}
              lang="en-US"
              class="custom-number"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Date: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="long"
              time-style="short"
              lang="en-US"
              class="custom-date"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Percent: </strong>
            <ag-intl-formatter
              type="percent"
              .value=${.75}
              lang="en-US"
              class="custom-percent"
            ></ag-intl-formatter>
          </div>
        </div>
      </section>
    `}}v(D,"styles",B`
    /* Dashboard stats styling */
    .stat-card {
      background: var(--ag-background);
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--ag-text-secondary);
      margin-bottom: 0.5rem;
    }

    .stat-value {
      font-size: clamp(1.25rem, 4vw, 1.875rem);
      font-weight: 700;
      color: var(--ag-text);
      overflow-wrap: break-word;
      word-break: break-word;
      line-height: 1.2;
    }

    .stat-change {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    .stat-change.positive {
      color: var(--ag-success-text);
    }

    /* CSS Parts customization examples */

    /* Custom currency style */
    .custom-currency::part(currency) {
      color: var(--ag-success-text);
      font-weight: bold;
      font-size: 1.25rem;
    }

    /* Custom number style */
    .custom-number::part(number) {
      font-family: "Courier New", monospace;
      background: var(--ag-background-subtle);
      padding: 0.25rem 0.5rem;
      border-radius: var(--ag-radius-sm);
    }

    /* Custom date style */
    .custom-date::part(date-time) {
      color: var(--ag-primary-text);
      font-style: italic;
    }

    /* Custom percent style */
    .custom-percent::part(percent) {
      color: var(--ag-danger-text);
      font-weight: 600;
    }
  `);customElements.define("intl-formatter-lit-examples",D);const kn=`<template>
  <section>
    <!-- Date Formatting -->
    <div class="mbe2">
      <h2>Date Formatting</h2>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Default: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Full Date with Short Time: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Custom Format: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          weekday="long"
          year="numeric"
          month="long"
          day="numeric"
          lang="en-US"
        />
      </div>
      <div>
        <strong>24-Hour Format: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          hour="2-digit"
          minute="2-digit"
          second="2-digit"
          hourFormat="24"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Date Localization -->
    <div class="mbe2">
      <h2>Date Localization</h2>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>English (US): </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="en-US"
        />
      </div>
      <div>
        <strong>French: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="fr-FR"
        />
      </div>
      <div>
        <strong>German: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="de-DE"
        />
      </div>
      <div>
        <strong>Japanese: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="ja-JP"
        />
      </div>
    </div>

    <!-- Number Formatting -->
    <div class="mbe2">
      <h2>Number Formatting</h2>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Default: </strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="en-US"
        />
      </div>
      <div>
        <strong>No Grouping: </strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          :noGrouping="true"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Fixed Decimals (2): </strong>
        <VueIntlFormatter
          type="number"
          :value="100"
          :minimumFractionDigits="2"
          :maximumFractionDigits="2"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Number Localization -->
    <div class="mbe2">
      <h2>Number Localization</h2>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>English (US): </strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="en-US"
        />
      </div>
      <div>
        <strong>French (space separator, comma decimal): </strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="fr-FR"
        />
      </div>
      <div>
        <strong>German (dot separator, comma decimal): </strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="de-DE"
        />
      </div>
      <div>
        <strong>Indian (lakh grouping): </strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="hi-IN"
        />
      </div>
    </div>

    <!-- Currency Formatting -->
    <div class="mbe2">
      <h2>Currency Formatting</h2>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>USD (symbol): </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          lang="en-US"
        />
      </div>
      <div>
        <strong>EUR (symbol): </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="EUR"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Currency Code Display: </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          currencyDisplay="code"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Currency Name Display: </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          currencyDisplay="name"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Currency Localization -->
    <div class="mbe2">
      <h2>Currency Localization</h2>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>USD in US: </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          lang="en-US"
        />
      </div>
      <div>
        <strong>EUR in Germany: </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="EUR"
          lang="de-DE"
        />
      </div>
      <div>
        <strong>GBP in UK: </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="GBP"
          lang="en-GB"
        />
      </div>
      <div>
        <strong>JPY in Japan (no decimals): </strong>
        <VueIntlFormatter
          type="currency"
          :value="123456"
          currency="JPY"
          lang="ja-JP"
        />
      </div>
    </div>

    <!-- Percentage Formatting -->
    <div class="mbe2">
      <h2>Percentage Formatting</h2>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Basic: </strong>
        <VueIntlFormatter
          type="percent"
          :value="0.75"
          lang="en-US"
        />
      </div>
      <div>
        <strong>With Decimals: </strong>
        <VueIntlFormatter
          type="percent"
          :value="0.8532"
          :minimumFractionDigits="2"
          :maximumFractionDigits="2"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Real-World Example: Dashboard Stats -->
    <div class="mbe2">
      <h2>Real-World Example: Dashboard Stats</h2>
    </div>
    <div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1rem;
        max-width: 900px;
      "
      class="mbe4"
    >
      <div class="stat-card">
        <div class="stat-label">Total Revenue</div>
        <div class="stat-value">
          <VueIntlFormatter
            type="currency"
            :value="1234567.89"
            currency="USD"
            lang="en-US"
          />
        </div>
        <div class="stat-change positive">
          ↑
          <VueIntlFormatter
            type="percent"
            :value="0.1234"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Total Users</div>
        <div class="stat-value">
          <VueIntlFormatter
            type="number"
            :value="45678"
            lang="en-US"
          />
        </div>
        <div class="stat-change positive">
          ↑
          <VueIntlFormatter
            type="percent"
            :value="0.0856"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Conversion Rate</div>
        <div class="stat-value">
          <VueIntlFormatter
            type="percent"
            :value="0.0342"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
        <div class="stat-change positive">
          ↑
          <VueIntlFormatter
            type="percent"
            :value="0.0523"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
      </div>
    </div>

    <!-- CSS Parts Customization -->
    <div class="mbe2">
      <h2>CSS Parts Customization</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize formatter appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Styled Currency: </strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          lang="en-US"
          class="custom-currency"
        />
      </div>
      <div>
        <strong>Styled Number: </strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="en-US"
          class="custom-number"
        />
      </div>
      <div>
        <strong>Styled Date: </strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="long"
          timeStyle="short"
          lang="en-US"
          class="custom-date"
        />
      </div>
      <div>
        <strong>Styled Percent: </strong>
        <VueIntlFormatter
          type="percent"
          :value="0.75"
          lang="en-US"
          class="custom-percent"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { VueIntlFormatter } from "agnosticui-core/intl-formatter/vue";

export default {
  name: "IntlFormatterExamples",
  components: {
    VueIntlFormatter,
  },
};
<\/script>

<style scoped>
/* Dashboard stats styling */
.stat-card {
  background: var(--ag-background);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-md);
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--ag-text-secondary);
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: clamp(1.25rem, 4vw, 1.875rem);
  font-weight: 700;
  color: var(--ag-text);
  overflow-wrap: break-word;
  word-break: break-word;
  line-height: 1.2;
}

.stat-change {
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.stat-change.positive {
  color: var(--ag-success-text);
}

/* CSS Parts customization examples */

/* Custom currency style */
.custom-currency::part(currency) {
  color: var(--ag-success-text);
  font-weight: bold;
  font-size: 1.25rem;
}

/* Custom number style */
.custom-number::part(number) {
  font-family: "Courier New", monospace;
  background: var(--ag-background-subtle);
  padding: 0.25rem 0.5rem;
  border-radius: var(--ag-radius-sm);
}

/* Custom date style */
.custom-date::part(date-time) {
  color: var(--ag-primary-text);
  font-style: italic;
}

/* Custom percent style */
.custom-percent::part(percent) {
  color: var(--ag-danger-text);
  font-weight: 600;
}
</style>
`,Fn=`import { LitElement, html, css } from 'lit';
import 'agnosticui-core/intl-formatter';

export class IntlFormatterLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static styles = css\`
    /* Dashboard stats styling */
    .stat-card {
      background: var(--ag-background);
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--ag-text-secondary);
      margin-bottom: 0.5rem;
    }

    .stat-value {
      font-size: clamp(1.25rem, 4vw, 1.875rem);
      font-weight: 700;
      color: var(--ag-text);
      overflow-wrap: break-word;
      word-break: break-word;
      line-height: 1.2;
    }

    .stat-change {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    .stat-change.positive {
      color: var(--ag-success-text);
    }

    /* CSS Parts customization examples */

    /* Custom currency style */
    .custom-currency::part(currency) {
      color: var(--ag-success-text);
      font-weight: bold;
      font-size: 1.25rem;
    }

    /* Custom number style */
    .custom-number::part(number) {
      font-family: "Courier New", monospace;
      background: var(--ag-background-subtle);
      padding: 0.25rem 0.5rem;
      border-radius: var(--ag-radius-sm);
    }

    /* Custom date style */
    .custom-date::part(date-time) {
      color: var(--ag-primary-text);
      font-style: italic;
    }

    /* Custom percent style */
    .custom-percent::part(percent) {
      color: var(--ag-danger-text);
      font-weight: 600;
    }
  \`;

  render() {
    return html\`
      <section>
        <!-- Date Formatting -->
        <div class="mbe2">
          <h2>Date Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Default: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Full Date with Short Time: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Custom Format: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              weekday="long"
              year="numeric"
              month="long"
              day="numeric"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>24-Hour Format: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              hour="2-digit"
              minute="2-digit"
              second="2-digit"
              hour-format="24"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Date Localization -->
        <div class="mbe2">
          <h2>Date Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>English (US): </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>French: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="fr-FR"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>German: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Japanese: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="ja-JP"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Number Formatting -->
        <div class="mbe2">
          <h2>Number Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Default: </strong>
            <ag-intl-formatter
              type="number"
              .value=\${1234567.89}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>No Grouping: </strong>
            <ag-intl-formatter
              type="number"
              .value=\${1234567.89}
              no-grouping
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Fixed Decimals (2): </strong>
            <ag-intl-formatter
              type="number"
              .value=\${100}
              .minimumFractionDigits=\${2}
              .maximumFractionDigits=\${2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Number Localization -->
        <div class="mbe2">
          <h2>Number Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>English (US): </strong>
            <ag-intl-formatter
              type="number"
              .value=\${1234567.89}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>French (space separator, comma decimal): </strong>
            <ag-intl-formatter
              type="number"
              .value=\${1234567.89}
              lang="fr-FR"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>German (dot separator, comma decimal): </strong>
            <ag-intl-formatter
              type="number"
              .value=\${1234567.89}
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Indian (lakh grouping): </strong>
            <ag-intl-formatter
              type="number"
              .value=\${1234567.89}
              lang="hi-IN"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Currency Formatting -->
        <div class="mbe2">
          <h2>Currency Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>USD (symbol): </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>EUR (symbol): </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="EUR"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Currency Code Display: </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="USD"
              currency-display="code"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Currency Name Display: </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="USD"
              currency-display="name"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Currency Localization -->
        <div class="mbe2">
          <h2>Currency Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>USD in US: </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>EUR in Germany: </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="EUR"
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>GBP in UK: </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="GBP"
              lang="en-GB"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>JPY in Japan (no decimals): </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${123456}
              currency="JPY"
              lang="ja-JP"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Percentage Formatting -->
        <div class="mbe2">
          <h2>Percentage Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Basic: </strong>
            <ag-intl-formatter
              type="percent"
              .value=\${0.75}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>With Decimals: </strong>
            <ag-intl-formatter
              type="percent"
              .value=\${0.8532}
              .minimumFractionDigits=\${2}
              .maximumFractionDigits=\${2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Real-World Example: Dashboard Stats -->
        <div class="mbe2">
          <h2>Real-World Example: Dashboard Stats</h2>
        </div>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1rem;
            max-width: 900px;
          "
          class="mbe4"
        >
          <div class="stat-card">
            <div class="stat-label">Total Revenue</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="currency"
                .value=\${1234567.89}
                currency="USD"
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=\${0.1234}
                .minimumFractionDigits=\${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Total Users</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="number"
                .value=\${45678}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=\${0.0856}
                .minimumFractionDigits=\${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Conversion Rate</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="percent"
                .value=\${0.0342}
                .minimumFractionDigits=\${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=\${0.0523}
                .minimumFractionDigits=\${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>
        </div>

        <!-- CSS Parts Customization -->
        <div class="mbe2">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize formatter appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Styled Currency: </strong>
            <ag-intl-formatter
              type="currency"
              .value=\${1234.56}
              currency="USD"
              lang="en-US"
              class="custom-currency"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Number: </strong>
            <ag-intl-formatter
              type="number"
              .value=\${1234567.89}
              lang="en-US"
              class="custom-number"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Date: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="long"
              time-style="short"
              lang="en-US"
              class="custom-date"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Percent: </strong>
            <ag-intl-formatter
              type="percent"
              .value=\${0.75}
              lang="en-US"
              class="custom-percent"
            ></ag-intl-formatter>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('intl-formatter-lit-examples', IntlFormatterLitExamples);
`,cn=`import { ReactIntlFormatter } from "agnosticui-core/intl-formatter/react";

export default function IntlFormatterReactExamples() {
  return (
    <section>
      <style>{\`
        /* Dashboard stats styling */
        .stat-card {
          background: var(--ag-background);
          border: 1px solid var(--ag-border);
          border-radius: var(--ag-radius-md);
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--ag-text-secondary);
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: clamp(1.25rem, 4vw, 1.875rem);
          font-weight: 700;
          color: var(--ag-text);
          overflow-wrap: break-word;
          word-break: break-word;
          line-height: 1.2;
        }

        .stat-change {
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .stat-change.positive {
          color: var(--ag-success-text);
        }

        /* CSS Parts customization examples */

        /* Custom currency style */
        .custom-currency::part(currency) {
          color: var(--ag-success-text);
          font-weight: bold;
          font-size: 1.25rem;
        }

        /* Custom number style */
        .custom-number::part(number) {
          font-family: "Courier New", monospace;
          background: var(--ag-background-subtle);
          padding: 0.25rem 0.5rem;
          border-radius: var(--ag-radius-sm);
        }

        /* Custom date style */
        .custom-date::part(date-time) {
          color: var(--ag-primary-text);
          font-style: italic;
        }

        /* Custom percent style */
        .custom-percent::part(percent) {
          color: var(--ag-danger-text);
          font-weight: 600;
        }
      \`}</style>

      {/* Date Formatting */}
      <div className="mbe2">
        <h2>Date Formatting</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>Default: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Full Date with Short Time: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Custom Format: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            weekday="long"
            year="numeric"
            month="long"
            day="numeric"
            lang="en-US"
          />
        </div>
        <div>
          <strong>24-Hour Format: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            hour="2-digit"
            minute="2-digit"
            second="2-digit"
            hourFormat="24"
            lang="en-US"
          />
        </div>
      </div>

      {/* Date Localization */}
      <div className="mbe2">
        <h2>Date Localization</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>English (US): </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="en-US"
          />
        </div>
        <div>
          <strong>French: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="fr-FR"
          />
        </div>
        <div>
          <strong>German: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="de-DE"
          />
        </div>
        <div>
          <strong>Japanese: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="ja-JP"
          />
        </div>
      </div>

      {/* Number Formatting */}
      <div className="mbe2">
        <h2>Number Formatting</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>Default: </strong>
          <ReactIntlFormatter
            type="number"
            value={1234567.89}
            lang="en-US"
          />
        </div>
        <div>
          <strong>No Grouping: </strong>
          <ReactIntlFormatter
            type="number"
            value={1234567.89}
            noGrouping={true}
            lang="en-US"
          />
        </div>
        <div>
          <strong>Fixed Decimals (2): </strong>
          <ReactIntlFormatter
            type="number"
            value={100}
            minimumFractionDigits={2}
            maximumFractionDigits={2}
            lang="en-US"
          />
        </div>
      </div>

      {/* Number Localization */}
      <div className="mbe2">
        <h2>Number Localization</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>English (US): </strong>
          <ReactIntlFormatter
            type="number"
            value={1234567.89}
            lang="en-US"
          />
        </div>
        <div>
          <strong>French (space separator, comma decimal): </strong>
          <ReactIntlFormatter
            type="number"
            value={1234567.89}
            lang="fr-FR"
          />
        </div>
        <div>
          <strong>German (dot separator, comma decimal): </strong>
          <ReactIntlFormatter
            type="number"
            value={1234567.89}
            lang="de-DE"
          />
        </div>
        <div>
          <strong>Indian (lakh grouping): </strong>
          <ReactIntlFormatter
            type="number"
            value={1234567.89}
            lang="hi-IN"
          />
        </div>
      </div>

      {/* Currency Formatting */}
      <div className="mbe2">
        <h2>Currency Formatting</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>USD (symbol): </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="USD"
            lang="en-US"
          />
        </div>
        <div>
          <strong>EUR (symbol): </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="EUR"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Currency Code Display: </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="USD"
            currencyDisplay="code"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Currency Name Display: </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="USD"
            currencyDisplay="name"
            lang="en-US"
          />
        </div>
      </div>

      {/* Currency Localization */}
      <div className="mbe2">
        <h2>Currency Localization</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>USD in US: </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="USD"
            lang="en-US"
          />
        </div>
        <div>
          <strong>EUR in Germany: </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="EUR"
            lang="de-DE"
          />
        </div>
        <div>
          <strong>GBP in UK: </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="GBP"
            lang="en-GB"
          />
        </div>
        <div>
          <strong>JPY in Japan (no decimals): </strong>
          <ReactIntlFormatter
            type="currency"
            value={123456}
            currency="JPY"
            lang="ja-JP"
          />
        </div>
      </div>

      {/* Percentage Formatting */}
      <div className="mbe2">
        <h2>Percentage Formatting</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>Basic: </strong>
          <ReactIntlFormatter
            type="percent"
            value={0.75}
            lang="en-US"
          />
        </div>
        <div>
          <strong>With Decimals: </strong>
          <ReactIntlFormatter
            type="percent"
            value={0.8532}
            minimumFractionDigits={2}
            maximumFractionDigits={2}
            lang="en-US"
          />
        </div>
      </div>

      {/* Real-World Example: Dashboard Stats */}
      <div className="mbe2">
        <h2>Real-World Example: Dashboard Stats</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          maxWidth: "900px",
        }}
        className="mbe4"
      >
        <div className="stat-card">
          <div className="stat-label">Total Revenue</div>
          <div className="stat-value">
            <ReactIntlFormatter
              type="currency"
              value={1234567.89}
              currency="USD"
              lang="en-US"
            />
          </div>
          <div className="stat-change positive">
            ↑{" "}
            <ReactIntlFormatter
              type="percent"
              value={0.1234}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">
            <ReactIntlFormatter
              type="number"
              value={45678}
              lang="en-US"
            />
          </div>
          <div className="stat-change positive">
            ↑{" "}
            <ReactIntlFormatter
              type="percent"
              value={0.0856}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Conversion Rate</div>
          <div className="stat-value">
            <ReactIntlFormatter
              type="percent"
              value={0.0342}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
          <div className="stat-change positive">
            ↑{" "}
            <ReactIntlFormatter
              type="percent"
              value={0.0523}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
        </div>
      </div>

      {/* CSS Parts Customization */}
      <div className="mbe2">
        <h2>CSS Parts Customization</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Customize formatter appearance using CSS Shadow Parts without breaking encapsulation.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="mbe4">
        <div>
          <strong>Styled Currency: </strong>
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="USD"
            lang="en-US"
            className="custom-currency"
          />
        </div>
        <div>
          <strong>Styled Number: </strong>
          <ReactIntlFormatter
            type="number"
            value={1234567.89}
            lang="en-US"
            className="custom-number"
          />
        </div>
        <div>
          <strong>Styled Date: </strong>
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="long"
            timeStyle="short"
            lang="en-US"
            className="custom-date"
          />
        </div>
        <div>
          <strong>Styled Percent: </strong>
          <ReactIntlFormatter
            type="percent"
            value={0.75}
            lang="en-US"
            className="custom-percent"
          />
        </div>
      </div>
    </section>
  );
}
`,An=JSON.parse('{"title":"IntlFormatter","description":"","frontmatter":{},"headers":[],"relativePath":"components/intl-formatter.md","filePath":"components/intl-formatter.md"}'),mn={name:"components/intl-formatter.md"},Un=Object.assign(mn,{setup(e){return(s,t)=>(u(),m("div",null,[t[25]||(t[25]=n("h1",{id:"intlformatter",tabindex:"-1"},[r("IntlFormatter "),n("a",{class:"header-anchor",href:"#intlformatter","aria-label":'Permalink to "IntlFormatter"'},"​")],-1)),a(E),t[26]||(t[26]=n("p",null,[r("A comprehensive, framework-agnostic web component that wraps the browser's native "),n("code",null,"Intl.DateTimeFormat"),r(" and "),n("code",null,"Intl.NumberFormat"),r(" APIs for formatting dates, numbers, currencies, and percentages with full localization support.")],-1)),t[27]||(t[27]=n("h2",{id:"examples",tabindex:"-1"},[r("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(P,{component:"intl-formatter","vue-code":k(kn),"lit-code":k(Fn),"react-code":k(cn)},{vue:f(()=>[a(gn)]),lit:f(()=>[...t[0]||(t[0]=[n("intl-formatter-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[28]||(t[28]=n("h2",{id:"features",tabindex:"-1"},[r("Features "),n("a",{class:"header-anchor",href:"#features","aria-label":'Permalink to "Features"'},"​")],-1)),n("ul",null,[n("li",null,[a(k(N),{size:16,class:"flex-inline"}),t[1]||(t[1]=r()),t[2]||(t[2]=n("strong",null,"Full Internationalization",-1)),t[3]||(t[3]=r(" - Uses browser's native Intl API",-1))]),n("li",null,[a(k(R),{size:16,class:"flex-inline"}),t[4]||(t[4]=r()),t[5]||(t[5]=n("strong",null,"Performance Optimized",-1)),t[6]||(t[6]=r(" - Built-in formatter caching",-1))]),n("li",null,[a(k(L),{size:16,class:"flex-inline"}),t[7]||(t[7]=r()),t[8]||(t[8]=n("strong",null,"Type Safe",-1)),t[9]||(t[9]=r(" - Complete TypeScript definitions",-1))]),n("li",null,[a(k(T),{size:16,class:"flex-inline"}),t[10]||(t[10]=r()),t[11]||(t[11]=n("strong",null,"Styleable",-1)),t[12]||(t[12]=r(" - CSS parts for custom styling",-1))]),n("li",null,[a(k($),{size:16,class:"flex-inline"}),t[13]||(t[13]=r()),t[14]||(t[14]=n("strong",null,"Error Handling",-1)),t[15]||(t[15]=r(" - Custom events for validation errors",-1))]),n("li",null,[a(k(V),{size:16,class:"flex-inline"}),t[16]||(t[16]=r()),t[17]||(t[17]=n("strong",null,"Framework Support",-1)),t[18]||(t[18]=r(" - React and Vue wrappers included",-1))]),n("li",null,[a(k(z),{size:16,class:"flex-inline"}),t[19]||(t[19]=r()),t[20]||(t[20]=n("strong",null,"Accessible",-1)),t[21]||(t[21]=r(" - Semantic HTML with proper attributes",-1))]),n("li",null,[a(k(G),{size:16,class:"flex-inline"}),t[22]||(t[22]=r()),t[23]||(t[23]=n("strong",null,"Zero Dependencies",-1)),t[24]||(t[24]=r(" - Built on Lit Element",-1))])]),t[29]||(t[29]=w("",58))]))}});export{An as __pageData,Un as default};
