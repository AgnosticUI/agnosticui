var C=Object.defineProperty;var S=(e,s,t)=>s in e?C(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var v=(e,s,t)=>S(e,typeof s!="symbol"?s+"":s,t);import{A as E}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{a as b,x as F,z as p,i as B}from"./chunks/Button.Bujdzq23.js";import{d as x,p as q,c as m,o as u,K as A,_ as U,C as I,j as n,G as a,a as r,ae as w,w as f,k}from"./chunks/framework.NAAYCHZu.js";import{F as P,Z as N}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{G as R}from"./chunks/globe.CauuzbNH.js";import{c as y}from"./chunks/createLucideIcon.B61Wqv9x.js";import{P as T,A as z}from"./chunks/palette.Dy0bFg6z.js";import{B as $}from"./chunks/bell.DIj7aJxI.js";import"./chunks/Icon.odq14qpJ.js";/**
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
`,xn=JSON.parse('{"title":"IntlFormatter","description":"","frontmatter":{},"headers":[],"relativePath":"components/intl-formatter.md","filePath":"components/intl-formatter.md"}'),mn={name:"components/intl-formatter.md"},qn=Object.assign(mn,{setup(e){return(s,t)=>(u(),m("div",null,[t[25]||(t[25]=n("h1",{id:"intlformatter",tabindex:"-1"},[r("IntlFormatter "),n("a",{class:"header-anchor",href:"#intlformatter","aria-label":'Permalink to "IntlFormatter"'},"​")],-1)),a(E),t[26]||(t[26]=n("p",null,[r("A comprehensive, framework-agnostic web component that wraps the browser's native "),n("code",null,"Intl.DateTimeFormat"),r(" and "),n("code",null,"Intl.NumberFormat"),r(" APIs for formatting dates, numbers, currencies, and percentages with full localization support.")],-1)),t[27]||(t[27]=n("h2",{id:"examples",tabindex:"-1"},[r("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(P,{component:"intl-formatter","vue-code":k(kn),"lit-code":k(Fn),"react-code":k(cn)},{vue:f(()=>[a(gn)]),lit:f(()=>[...t[0]||(t[0]=[n("intl-formatter-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[28]||(t[28]=n("h2",{id:"features",tabindex:"-1"},[r("Features "),n("a",{class:"header-anchor",href:"#features","aria-label":'Permalink to "Features"'},"​")],-1)),n("ul",null,[n("li",null,[a(k(R),{size:16,class:"flex-inline"}),t[1]||(t[1]=r()),t[2]||(t[2]=n("strong",null,"Full Internationalization",-1)),t[3]||(t[3]=r(" - Uses browser's native Intl API",-1))]),n("li",null,[a(k(N),{size:16,class:"flex-inline"}),t[4]||(t[4]=r()),t[5]||(t[5]=n("strong",null,"Performance Optimized",-1)),t[6]||(t[6]=r(" - Built-in formatter caching",-1))]),n("li",null,[a(k(L),{size:16,class:"flex-inline"}),t[7]||(t[7]=r()),t[8]||(t[8]=n("strong",null,"Type Safe",-1)),t[9]||(t[9]=r(" - Complete TypeScript definitions",-1))]),n("li",null,[a(k(T),{size:16,class:"flex-inline"}),t[10]||(t[10]=r()),t[11]||(t[11]=n("strong",null,"Styleable",-1)),t[12]||(t[12]=r(" - CSS parts for custom styling",-1))]),n("li",null,[a(k($),{size:16,class:"flex-inline"}),t[13]||(t[13]=r()),t[14]||(t[14]=n("strong",null,"Error Handling",-1)),t[15]||(t[15]=r(" - Custom events for validation errors",-1))]),n("li",null,[a(k(V),{size:16,class:"flex-inline"}),t[16]||(t[16]=r()),t[17]||(t[17]=n("strong",null,"Framework Support",-1)),t[18]||(t[18]=r(" - React and Vue wrappers included",-1))]),n("li",null,[a(k(z),{size:16,class:"flex-inline"}),t[19]||(t[19]=r()),t[20]||(t[20]=n("strong",null,"Accessible",-1)),t[21]||(t[21]=r(" - Semantic HTML with proper attributes",-1))]),n("li",null,[a(k(G),{size:16,class:"flex-inline"}),t[22]||(t[22]=r()),t[23]||(t[23]=n("strong",null,"Zero Dependencies",-1)),t[24]||(t[24]=r(" - Built on Lit Element",-1))])]),t[29]||(t[29]=w(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> IntlFormatter</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      date</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2024-01-15&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      dateStyle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currency&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234.56&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      currency</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;USD&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234567.89&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :minimumFractionDigits</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;percent&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.75&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueIntlFormatter } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/intl-formatter/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactIntlFormatter } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/intl-formatter/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> App</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleError</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">error</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Formatting error:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        date</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2024-01-15&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        dateStyle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;full&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        timeStyle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;short&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currency&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1234.56</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        currency</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;EUR&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        lang</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;de-DE&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onFormatError</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleError</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1234567.89</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        minimumFractionDigits</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        maximumFractionDigits</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        noGrouping</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIntlFormatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;percent&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.8532</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        minimumFractionDigits</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Vanilla HTML/JavaScript</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/intl-formatter&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2024-01-15&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date-style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currency&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234.56&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  currency</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;USD&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234567.89&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  minimum-fraction-digits</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;percent&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.75&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="common-properties" tabindex="-1">Common Properties <a class="header-anchor" href="#common-properties" aria-label="Permalink to &quot;Common Properties&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>&#39;date&#39; | &#39;number&#39; | &#39;percent&#39; | &#39;currency&#39;</code></td><td><code>&#39;date&#39;</code></td><td>The type of formatting to apply</td></tr><tr><td><code>value</code></td><td><code>number | string | Date</code></td><td>-</td><td>The value to format (for numbers/currency/percent)</td></tr><tr><td><code>lang</code></td><td><code>string</code></td><td>Browser locale</td><td>The locale to use (e.g., &#39;en-US&#39;, &#39;fr-FR&#39;)</td></tr></tbody></table><h3 id="date-properties" tabindex="-1">Date Properties <a class="header-anchor" href="#date-properties" aria-label="Permalink to &quot;Date Properties&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>date</code></td><td><code>Date | string</code></td><td>-</td><td>The date value to format</td></tr><tr><td><code>dateStyle</code></td><td><code>&#39;full&#39; | &#39;long&#39; | &#39;medium&#39; | &#39;short&#39;</code></td><td>-</td><td>Shortcut for date formatting style</td></tr><tr><td><code>timeStyle</code></td><td><code>&#39;full&#39; | &#39;long&#39; | &#39;medium&#39; | &#39;short&#39;</code></td><td>-</td><td>Shortcut for time formatting style</td></tr><tr><td><code>weekday</code></td><td><code>&#39;narrow&#39; | &#39;short&#39; | &#39;long&#39;</code></td><td>-</td><td>Weekday representation</td></tr><tr><td><code>era</code></td><td><code>&#39;narrow&#39; | &#39;short&#39; | &#39;long&#39;</code></td><td>-</td><td>Era representation (e.g., &#39;AD&#39;)</td></tr><tr><td><code>year</code></td><td><code>&#39;numeric&#39; | &#39;2-digit&#39;</code></td><td>-</td><td>Year representation</td></tr><tr><td><code>month</code></td><td><code>&#39;numeric&#39; | &#39;2-digit&#39; | &#39;narrow&#39; | &#39;short&#39; | &#39;long&#39;</code></td><td>-</td><td>Month representation</td></tr><tr><td><code>day</code></td><td><code>&#39;numeric&#39; | &#39;2-digit&#39;</code></td><td>-</td><td>Day representation</td></tr><tr><td><code>hour</code></td><td><code>&#39;numeric&#39; | &#39;2-digit&#39;</code></td><td>-</td><td>Hour representation</td></tr><tr><td><code>minute</code></td><td><code>&#39;numeric&#39; | &#39;2-digit&#39;</code></td><td>-</td><td>Minute representation</td></tr><tr><td><code>second</code></td><td><code>&#39;numeric&#39; | &#39;2-digit&#39;</code></td><td>-</td><td>Second representation</td></tr><tr><td><code>timeZoneName</code></td><td><code>&#39;short&#39; | &#39;long&#39;</code></td><td>-</td><td>Time zone name representation</td></tr><tr><td><code>timeZone</code></td><td><code>string</code></td><td>-</td><td>IANA time zone identifier</td></tr><tr><td><code>hourFormat</code></td><td><code>&#39;auto&#39; | &#39;12&#39; | &#39;24&#39;</code></td><td><code>&#39;auto&#39;</code></td><td>Hour format preference</td></tr></tbody></table><h3 id="number-properties" tabindex="-1">Number Properties <a class="header-anchor" href="#number-properties" aria-label="Permalink to &quot;Number Properties&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>noGrouping</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable grouping separators (e.g., 1000 vs 1,000)</td></tr><tr><td><code>minimumIntegerDigits</code></td><td><code>number</code></td><td>-</td><td>Minimum number of integer digits</td></tr><tr><td><code>minimumFractionDigits</code></td><td><code>number</code></td><td>-</td><td>Minimum number of fraction digits</td></tr><tr><td><code>maximumFractionDigits</code></td><td><code>number</code></td><td>-</td><td>Maximum number of fraction digits</td></tr><tr><td><code>minimumSignificantDigits</code></td><td><code>number</code></td><td>-</td><td>Minimum number of significant digits</td></tr><tr><td><code>maximumSignificantDigits</code></td><td><code>number</code></td><td>-</td><td>Maximum number of significant digits</td></tr></tbody></table><h3 id="currency-properties" tabindex="-1">Currency Properties <a class="header-anchor" href="#currency-properties" aria-label="Permalink to &quot;Currency Properties&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>currency</code></td><td><code>string</code></td><td><code>&#39;USD&#39;</code></td><td>ISO 4217 currency code (e.g., &#39;USD&#39;, &#39;EUR&#39;)</td></tr><tr><td><code>currencyDisplay</code></td><td><code>&#39;symbol&#39; | &#39;narrowSymbol&#39; | &#39;code&#39; | &#39;name&#39;</code></td><td><code>&#39;symbol&#39;</code></td><td>How to display the currency</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h3 id="format-error" tabindex="-1"><code>format-error</code> <a class="header-anchor" href="#format-error" aria-label="Permalink to &quot;\`format-error\`&quot;">​</a></h3><p>Dispatched when formatting fails due to validation or runtime errors.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> FormatErrorDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;date&#39;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;number&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  error</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Example:</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">element.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;format-error&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">error</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`\${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">event</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">detail</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">type</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">} formatting error:\`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.error);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">});</span></span></code></pre></div><h2 id="css-parts" tabindex="-1">CSS Parts <a class="header-anchor" href="#css-parts" aria-label="Permalink to &quot;CSS Parts&quot;">​</a></h2><p>Style the component using CSS <code>::part()</code> selectors:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">date-time</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">blue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">bold</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(number) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-family</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">monospace</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(currency) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">green</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(percent) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">bold</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(error) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">red</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="date-formatting" tabindex="-1">Date Formatting <a class="header-anchor" href="#date-formatting" aria-label="Permalink to &quot;Date Formatting&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2024-01-15T14:30:00&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date-style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;full&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  time-style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;short&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2024-01-15&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  weekday</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  year</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;numeric&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  month</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  day</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;numeric&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2024-01-15T14:30:00&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  hour</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2-digit&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  minute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2-digit&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  hour-format</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;24&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h3 id="number-formatting" tabindex="-1">Number Formatting <a class="header-anchor" href="#number-formatting" aria-label="Permalink to &quot;Number Formatting&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234567.89&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234567.89&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  no-grouping</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  minimum-fraction-digits</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  maximum-fraction-digits</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h3 id="currency-formatting" tabindex="-1">Currency Formatting <a class="header-anchor" href="#currency-formatting" aria-label="Permalink to &quot;Currency Formatting&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currency&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234.56&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  currency</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;USD&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currency&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234.56&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  currency</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;EUR&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  currency-display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;code&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currency&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  currency</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;JPY&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ja-JP&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h3 id="percentage-formatting" tabindex="-1">Percentage Formatting <a class="header-anchor" href="#percentage-formatting" aria-label="Permalink to &quot;Percentage Formatting&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;percent&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.75&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;percent&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.8532&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  minimum-fraction-digits</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  maximum-fraction-digits</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;en-US&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="localization-examples" tabindex="-1">Localization Examples <a class="header-anchor" href="#localization-examples" aria-label="Permalink to &quot;Localization Examples&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234.56&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;fr-FR&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currency&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1234.56&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  currency</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;EUR&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;de-DE&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2024-01-15&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  date-style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ja-JP&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-intl-formatter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h2><p>The component uses intelligent formatter caching to improve performance:</p><ul><li>Formatters are cached based on type and options</li><li>Cache is automatically cleared when the component is removed</li><li>Repeated renders with the same options reuse cached formatters</li></ul><p>This makes the component suitable for rendering large lists or frequently updating values.</p><h2 id="browser-support" tabindex="-1">Browser Support <a class="header-anchor" href="#browser-support" aria-label="Permalink to &quot;Browser Support&quot;">​</a></h2><p>Works in all modern browsers that support:</p><ul><li>Web Components (Custom Elements v1)</li><li>Shadow DOM v1</li><li>Intl.DateTimeFormat</li><li>Intl.NumberFormat</li></ul><p>For older browsers, consider using polyfills:</p><ul><li><a href="https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs" target="_blank" rel="noreferrer">@webcomponents/webcomponentsjs</a></li><li><a href="https://formatjs.io/docs/polyfills/intl-datetimeformat" target="_blank" rel="noreferrer">intl polyfill</a></li></ul><h2 id="typescript-support" tabindex="-1">TypeScript Support <a class="header-anchor" href="#typescript-support" aria-label="Permalink to &quot;TypeScript Support&quot;">​</a></h2><p>Full TypeScript definitions are included. Import types as needed:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { IntlFormatterProps } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/intl-formatter&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span></code></pre></div><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h2><p>The component includes a comprehensive test suite with 50+ tests covering:</p><ul><li>All formatting types</li><li>Validation and error handling</li><li>Localization</li><li>Edge cases</li><li>Performance</li><li>Accessibility</li></ul><p>Run tests with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npm</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> test</span></span></code></pre></div><h2 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-label="Permalink to &quot;Contributing&quot;">​</a></h2><p>Contributions are welcome! Please ensure:</p><ul><li>All tests pass</li><li>New features include tests</li><li>Code follows the existing style</li><li>TypeScript types are updated</li></ul><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p>MIT</p><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to &quot;Related Resources&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat" target="_blank" rel="noreferrer">Intl.DateTimeFormat - MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat" target="_blank" rel="noreferrer">Intl.NumberFormat - MDN</a></li><li><a href="https://lit.dev/" target="_blank" rel="noreferrer">Lit Element Documentation</a></li></ul>`,58))]))}});export{xn as __pageData,qn as default};
