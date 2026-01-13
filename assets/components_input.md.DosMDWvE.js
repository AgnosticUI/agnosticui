var D=Object.defineProperty;var f=(l,s,p)=>s in l?D(l,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[s]=p;var g=(l,s,p)=>f(l,typeof s!="symbol"?s+"":s,p);import{A}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{C as x}from"./chunks/VueInput.vue_vue_type_script_setup_true_lang-Dsxo7DuX.BU_KeN0p.js";import{_ as q,C as o,c as v,o as b,j as n,G as e,w as r,a as h,t as d,N as S,ae as w,k as u}from"./chunks/framework.NAAYCHZu.js";import{S as I}from"./chunks/search.D3iDyvB5.js";import{c as y}from"./chunks/createLucideIcon.B61Wqv9x.js";import{G as T}from"./chunks/globe.CauuzbNH.js";import{F as R}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{a as U,i as z,x as L}from"./chunks/Button.Bujdzq23.js";import"./chunks/Icon.odq14qpJ.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/form-control-utils.LZkauYsx.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=y("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=y("percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=y("user-round",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]),N={name:"InputExamples",components:{VueInput:x,Globe:T,DollarSign:V,Percent:P,User2:$,Search:I},data(){return{basicValue:"",password:"",search:"",sizeSmall:"",sizeDefault:"",sizeLarge:"",shapeDefault:"",shapeRounded:"",shapeCapsule:"",shapeUnderlined:"",shapeUnderlinedBg:"",stateDefault:"",stateRequired:"",stateDisabled:"Disabled value",stateReadonly:"Read-only value",stateInvalid:"",textareaValue:"",textareaLarge:"",addonLeft:"",addonRight:"",addonBoth:"",addonPercent:"",addonRounded:"",addonCapsule:"",addonUnderlined:"",addonUnderlinedBg:"",customGradient:"",customMaterial:"",customError:"",customTextarea:"",labelTop:"",labelStart:"",labelEnd:"",labelBottom:"",interactiveEmail:"",lastInputTime:"(none)",interactiveUsername:"",confirmedUsername:"",interactiveFocus:"",isFocused:!1,focusCount:0,interactiveReactive:"",interactiveTextarea:"",textareaStatus:"Ready"}},computed:{wordCount(){return this.interactiveTextarea.trim()?this.interactiveTextarea.trim().split(/\s+/).length:0}},methods:{handleInputEvent(l){const s=new Date;this.lastInputTime=s.toLocaleTimeString(),console.log("Input event:",l)},handleChangeEvent(l){this.confirmedUsername=this.interactiveUsername,console.log("Change event:",l)},handleFocus(l){this.isFocused=!0,this.focusCount++,console.log("Focus event:",l)},handleBlur(l){this.isFocused=!1,console.log("Blur event:",l)},handleTextareaInput(l){this.textareaStatus="Typing...",console.log("Textarea input event:",l)},handleTextareaChange(l){this.textareaStatus="Changes saved",console.log("Textarea change event:",l)},handleTextareaFocus(l){this.textareaStatus="Focused",console.log("Textarea focus event:",l)},handleTextareaBlur(l){this.textareaStatus="Ready",console.log("Textarea blur event:",l)}}},M={class:"stacked mbe4"},H={class:"stacked mbe4"},G={class:"stacked mbe4"},W={class:"stacked mbe4"},j={class:"stacked mbe4"},O={class:"stacked mbe4"},Y={class:"stacked mbe4"},J={class:"stacked mbe4"},K={style:{"margin-top":"0.5rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},X={style:{"margin-top":"0.5rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},Q={style:{"margin-top":"0.5rem","font-size":"0.875rem"}},Z={style:{"margin-top":"0.5rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},_={style:{"margin-top":"0.5rem","font-size":"0.875rem",padding:"0.5rem",background:"var(--ag-background-secondary)","border-radius":"4px"}},ss={class:"stacked mbe4"},is={class:"stacked mbe4"};function as(l,s,p,ps,i,k){const t=o("VueInput"),C=o("Globe"),F=o("DollarSign"),m=o("Percent"),B=o("Search"),E=o("User2");return b(),v("section",null,[s[49]||(s[49]=n("div",{class:"mbe4"},[n("h2",null,"Basic Input")],-1)),n("div",M,[e(t,{value:i.basicValue,"onUpdate:value":s[0]||(s[0]=a=>i.basicValue=a),label:"Email",type:"email",placeholder:"you@example.com",class:"mbe2"},null,8,["value"]),e(t,{value:i.password,"onUpdate:value":s[1]||(s[1]=a=>i.password=a),label:"Password",type:"password",placeholder:"Enter password",class:"mbe2"},null,8,["value"]),e(t,{value:i.search,"onUpdate:value":s[2]||(s[2]=a=>i.search=a),label:"Search",type:"search",placeholder:"Search...",class:"mbe2"},null,8,["value"])]),s[50]||(s[50]=n("div",{class:"mbe4"},[n("h2",null,"Sizes")],-1)),n("div",H,[e(t,{value:i.sizeSmall,"onUpdate:value":s[3]||(s[3]=a=>i.sizeSmall=a),label:"Small Input",size:"small",placeholder:"Small size",class:"mbe2"},null,8,["value"]),e(t,{value:i.sizeDefault,"onUpdate:value":s[4]||(s[4]=a=>i.sizeDefault=a),label:"Default Input",size:"default",placeholder:"Default size",class:"mbe2"},null,8,["value"]),e(t,{value:i.sizeLarge,"onUpdate:value":s[5]||(s[5]=a=>i.sizeLarge=a),label:"Large Input",size:"large",placeholder:"Large size",class:"mbe2"},null,8,["value"])]),s[51]||(s[51]=n("div",{class:"mbe4"},[n("h2",null,"Shape Variants")],-1)),n("div",G,[e(t,{value:i.shapeDefault,"onUpdate:value":s[6]||(s[6]=a=>i.shapeDefault=a),label:"Default (rectangular)",placeholder:"Default rectangular",class:"mbe2"},null,8,["value"]),e(t,{value:i.shapeRounded,"onUpdate:value":s[7]||(s[7]=a=>i.shapeRounded=a),label:"Rounded",rounded:!0,placeholder:"Rounded corners",class:"mbe2"},null,8,["value"]),e(t,{value:i.shapeCapsule,"onUpdate:value":s[8]||(s[8]=a=>i.shapeCapsule=a),label:"Capsule",capsule:!0,placeholder:"Capsule shape",class:"mbe2"},null,8,["value"]),e(t,{value:i.shapeUnderlined,"onUpdate:value":s[9]||(s[9]=a=>i.shapeUnderlined=a),label:"Underlined",underlined:!0,placeholder:"Underlined only",class:"mbe2"},null,8,["value"]),e(t,{value:i.shapeUnderlinedBg,"onUpdate:value":s[10]||(s[10]=a=>i.shapeUnderlinedBg=a),label:"Underlined with Background","underlined-with-background":!0,placeholder:"Underlined with background",class:"mbe2"},null,8,["value"])]),s[52]||(s[52]=n("div",{class:"mbe4"},[n("h2",null,"States")],-1)),n("div",W,[e(t,{value:i.stateDefault,"onUpdate:value":s[11]||(s[11]=a=>i.stateDefault=a),label:"Normal",placeholder:"Normal state",class:"mbe2"},null,8,["value"]),e(t,{value:i.stateRequired,"onUpdate:value":s[12]||(s[12]=a=>i.stateRequired=a),label:"Required",required:!0,placeholder:"Required field","help-text":"This field is required",class:"mbe2"},null,8,["value"]),e(t,{value:i.stateDisabled,"onUpdate:value":s[13]||(s[13]=a=>i.stateDisabled=a),label:"Disabled",disabled:!0,placeholder:"Disabled input",class:"mbe2"},null,8,["value"]),e(t,{value:i.stateReadonly,"onUpdate:value":s[14]||(s[14]=a=>i.stateReadonly=a),label:"Readonly",readonly:!0,class:"mbe2"},null,8,["value"]),e(t,{value:i.stateInvalid,"onUpdate:value":s[15]||(s[15]=a=>i.stateInvalid=a),label:"Invalid",invalid:!0,placeholder:"Invalid input","error-message":"This field has an error",class:"mbe2"},null,8,["value"])]),s[53]||(s[53]=n("div",{class:"mbe4"},[n("h2",null,"Textarea")],-1)),n("div",j,[e(t,{value:i.textareaValue,"onUpdate:value":s[16]||(s[16]=a=>i.textareaValue=a),label:"Comments",type:"textarea",placeholder:"Enter your comments...",rows:4,class:"mbe2"},null,8,["value"]),e(t,{value:i.textareaLarge,"onUpdate:value":s[17]||(s[17]=a=>i.textareaLarge=a),label:"Description",type:"textarea",placeholder:"Enter description...",rows:6,size:"large","help-text":"Provide a detailed description",class:"mbe2"},null,8,["value"])]),s[54]||(s[54]=n("div",{class:"mbe4"},[n("h2",null,"With Addons (Automatic Detection)"),n("p",{style:{"margin-top":"0.5rem",color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Addons are automatically detected when you provide slot content - no props needed! ")],-1)),n("div",O,[e(t,{value:i.addonLeft,"onUpdate:value":s[18]||(s[18]=a=>i.addonLeft=a),label:"Website URL",placeholder:"example.com",class:"mbe2"},{"addon-left":r(()=>[e(C,{size:18,color:"var(--ag-primary)"})]),_:1},8,["value"]),e(t,{value:i.addonRight,"onUpdate:value":s[19]||(s[19]=a=>i.addonRight=a),label:"Price",placeholder:"0.00",class:"mbe2"},{"addon-right":r(()=>[e(F,{size:18,color:"var(--ag-success)"})]),_:1},8,["value"]),e(t,{value:i.addonBoth,"onUpdate:value":s[20]||(s[20]=a=>i.addonBoth=a),label:"Amount",placeholder:"100",class:"mbe2"},{"addon-left":r(()=>[e(F,{size:18,color:"var(--ag-success)"})]),"addon-right":r(()=>[...s[39]||(s[39]=[n("span",null,".00",-1)])]),_:1},8,["value"]),e(t,{value:i.addonPercent,"onUpdate:value":s[21]||(s[21]=a=>i.addonPercent=a),label:"Discount",type:"number",placeholder:"10",class:"mbe2"},{"addon-right":r(()=>[e(m,{size:18})]),_:1},8,["value"])]),s[55]||(s[55]=n("div",{class:"mbe4"},[n("h2",null,"Addons with Style Variants"),n("p",{style:{"margin-top":"0.5rem",color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Addons work seamlessly with all input styling variants ")],-1)),n("div",Y,[e(t,{value:i.addonRounded,"onUpdate:value":s[22]||(s[22]=a=>i.addonRounded=a),label:"Rounded with Addons",type:"number",placeholder:"0.00",rounded:!0,class:"mbe2"},{"addon-left":r(()=>[e(F,{size:18,color:"var(--ag-primary)"})]),"addon-right":r(()=>[...s[40]||(s[40]=[n("span",{style:{"font-weight":"600"}},"USD",-1)])]),_:1},8,["value"]),e(t,{value:i.addonCapsule,"onUpdate:value":s[23]||(s[23]=a=>i.addonCapsule=a),label:"Capsule with Addon",type:"search",placeholder:"Find products...",capsule:!0,class:"mbe2"},{"addon-left":r(()=>[e(B,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),e(t,{value:i.addonUnderlined,"onUpdate:value":s[24]||(s[24]=a=>i.addonUnderlined=a),label:"Underlined with Addon",type:"number",placeholder:"10",underlined:!0,class:"mbe2"},{"addon-right":r(()=>[e(m,{size:18})]),_:1},8,["value"]),e(t,{value:i.addonUnderlinedBg,"onUpdate:value":s[25]||(s[25]=a=>i.addonUnderlinedBg=a),label:"Underlined with Background",type:"text",placeholder:"Enter username","underlined-with-background":!0,class:"mbe2"},{"addon-left":r(()=>[e(E,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"])]),s[56]||(s[56]=n("div",{class:"mbe4"},[n("h2",null,"Interactive Event Handling"),n("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Demonstrates event handling with @input, @change, @focus, @blur, and v-model:value ")],-1)),n("div",J,[n("div",null,[e(t,{value:i.interactiveEmail,"onUpdate:value":s[26]||(s[26]=a=>i.interactiveEmail=a),label:"Email (@input event)",type:"email",placeholder:"you@example.com",onInput:k.handleInputEvent,class:"mbe2"},null,8,["value","onInput"]),n("p",K,[s[41]||(s[41]=h(" Character count: ",-1)),n("strong",null,d(i.interactiveEmail.length),1),s[42]||(s[42]=h(" | Last input: ",-1)),n("strong",null,d(i.lastInputTime),1)])]),n("div",null,[e(t,{value:i.interactiveUsername,"onUpdate:value":s[27]||(s[27]=a=>i.interactiveUsername=a),label:"Username (@change event)",placeholder:"Enter username",onChange:k.handleChangeEvent,class:"mbe2"},null,8,["value","onChange"]),n("p",X,[s[43]||(s[43]=h(" Last confirmed value: ",-1)),n("strong",null,d(i.confirmedUsername||"(none)"),1)])]),n("div",null,[e(t,{value:i.interactiveFocus,"onUpdate:value":s[28]||(s[28]=a=>i.interactiveFocus=a),label:"Focus Tracking (@focus/@blur)",placeholder:"Click to focus",onFocus:k.handleFocus,onBlur:k.handleBlur,class:"mbe2"},null,8,["value","onFocus","onBlur"]),n("p",Q,[s[44]||(s[44]=h(" Status: ",-1)),n("strong",{style:S({color:i.isFocused?"var(--ag-success)":"var(--ag-text-secondary)"})},d(i.isFocused?"Focused":"Not focused"),5),h(" "+d(i.focusCount>0?`(focused ${i.focusCount} time${i.focusCount>1?"s":""})`:""),1)])]),n("div",null,[e(t,{value:i.interactiveReactive,"onUpdate:value":s[29]||(s[29]=a=>i.interactiveReactive=a),label:"Two-way Binding (v-model:value)",placeholder:"Type here...",class:"mbe2"},null,8,["value"]),n("p",Z,[s[45]||(s[45]=h(" Current value: ",-1)),n("strong",null,d(i.interactiveReactive||"(empty)"),1)]),n("button",{onClick:s[30]||(s[30]=a=>i.interactiveReactive="Programmatically set!"),style:{"margin-top":"0.5rem",padding:"0.25rem 0.75rem",border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-sm)",cursor:"pointer"}}," Set value programmatically ")]),n("div",null,[e(t,{value:i.interactiveTextarea,"onUpdate:value":s[31]||(s[31]=a=>i.interactiveTextarea=a),label:"Textarea with Events",type:"textarea",rows:3,placeholder:"Try typing, then click outside...",onInput:k.handleTextareaInput,onChange:k.handleTextareaChange,onFocus:k.handleTextareaFocus,onBlur:k.handleTextareaBlur,class:"mbe2"},null,8,["value","onInput","onChange","onFocus","onBlur"]),n("div",_,[n("div",null,[s[46]||(s[46]=h("Words: ",-1)),n("strong",null,d(k.wordCount),1)]),n("div",null,[s[47]||(s[47]=h("Characters: ",-1)),n("strong",null,d(i.interactiveTextarea.length),1)]),n("div",null,[s[48]||(s[48]=h("Status: ",-1)),n("strong",null,d(i.textareaStatus),1)])])])]),s[57]||(s[57]=n("div",{class:"mbe4"},[n("h2",null,"Label Positioning"),n("p",{style:{"margin-top":"0.5rem",color:"var(--ag-text-secondary)","font-size":"0.875rem"}},[h(" Control label placement with the "),n("code",null,"labelPosition"),h(" prop: "),n("code",null,"top"),h(" (default), "),n("code",null,"start"),h(", "),n("code",null,"end"),h(", or "),n("code",null,"bottom")])],-1)),n("div",ss,[e(t,{value:i.labelTop,"onUpdate:value":s[32]||(s[32]=a=>i.labelTop=a),label:"Top Position (Default)","label-position":"top",placeholder:"Label above input","help-text":"Default vertical layout - best for mobile",class:"mbe2"},null,8,["value"]),e(t,{value:i.labelStart,"onUpdate:value":s[33]||(s[33]=a=>i.labelStart=a),label:"Name:","label-position":"start",placeholder:"Enter name","help-text":"Horizontal layout - label before input",class:"mbe2"},null,8,["value"]),e(t,{value:i.labelEnd,"onUpdate:value":s[34]||(s[34]=a=>i.labelEnd=a),label:"Email:","label-position":"end",placeholder:"you@example.com","help-text":"Horizontal layout - label after input",class:"mbe2"},null,8,["value"]),e(t,{value:i.labelBottom,"onUpdate:value":s[35]||(s[35]=a=>i.labelBottom=a),label:"Bottom Position","label-position":"bottom",placeholder:"Enter value","help-text":"Vertical layout - label below input",class:"mbe2"},null,8,["value"])]),s[58]||(s[58]=n("div",{class:"mbe4"},[n("h2",null,"CSS Shadow Parts Customization"),n("p",{style:{"margin-top":"0.5rem","margin-bottom":"1rem",color:"var(--vp-c-text-2)"}},[h(" Input can be customized using CSS Shadow Parts: "),n("code",null,"::part(ag-input)"),h(", "),n("code",null,"::part(ag-textarea)"),h(", "),n("code",null,"::part(ag-input-label)"),h(", "),n("code",null,"::part(ag-input-error)"),h(", "),n("code",null,"::part(ag-input-help)")])],-1)),n("div",is,[e(t,{value:i.customGradient,"onUpdate:value":s[36]||(s[36]=a=>i.customGradient=a),class:"custom-gradient-input mbe2",label:"Modern Gradient Border",placeholder:"you@example.com",type:"email"},null,8,["value"]),e(t,{value:i.customMaterial,"onUpdate:value":s[37]||(s[37]=a=>i.customMaterial=a),class:"custom-material-input mbe2",label:"Material Design Style",placeholder:"John Doe"},null,8,["value"]),e(t,{value:i.customTextarea,"onUpdate:value":s[38]||(s[38]=a=>i.customTextarea=a),class:"custom-textarea mbe2",label:"Styled Textarea",type:"textarea",rows:4,placeholder:"Paste your code here...","help-text":"Monospace font with dashed border"},null,8,["value"])])])}const ns=q(N,[["render",as],["__scopeId","data-v-a1336f15"]]);class c extends U{constructor(){super(),this.basicValue="",this.password="",this.search="",this.sizeSmall="",this.sizeDefault="",this.sizeLarge="",this.shapeDefault="",this.shapeRounded="",this.shapeCapsule="",this.shapeUnderlined="",this.shapeUnderlinedBg="",this.stateDefault="",this.stateRequired="",this.stateDisabled="Disabled value",this.stateReadonly="Read-only value",this.stateInvalid="",this.textareaValue="",this.textareaLarge="",this.addonLeft="",this.addonRight="",this.addonBoth="",this.addonPercent="",this.addonRounded="",this.addonCapsule="",this.addonUnderlined="",this.addonUnderlinedBg="",this.customGradient="",this.customMaterial="",this.customTextarea="",this.labelTop="",this.labelStart="",this.labelEnd="",this.labelBottom="",this.interactiveEmail="",this.lastInputTime="(none)",this.interactiveUsername="",this.confirmedUsername="",this.interactiveFocus="",this.isFocused=!1,this.focusCount=0,this.interactiveReactive="",this.interactiveTextarea="",this.textareaStatus="Ready"}get wordCount(){return this.interactiveTextarea.trim()?this.interactiveTextarea.trim().split(/\s+/).length:0}handleInputEvent(s){this.interactiveEmail=s.target.value;const p=new Date;this.lastInputTime=p.toLocaleTimeString()}handleChangeEvent(s){this.interactiveUsername=s.target.value,this.confirmedUsername=s.target.value}handleFocus(){this.isFocused=!0,this.focusCount++}handleBlur(){this.isFocused=!1}handleTextareaInput(s){this.interactiveTextarea=s.target.value,this.textareaStatus="Typing..."}handleTextareaChange(){this.textareaStatus="Changes saved"}handleTextareaFocus(){this.textareaStatus="Focused"}handleTextareaBlur(){this.textareaStatus="Ready"}setProgrammatically(){this.interactiveReactive="Programmatically set!"}createRenderRoot(){return this}render(){return L`
      <section>
        <div class="mbe4">
          <h2>Basic Input</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.basicValue}
            @input=${s=>this.basicValue=s.target.value}
            label="Email"
            type="email"
            placeholder="you@example.com"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.password}
            @input=${s=>this.password=s.target.value}
            label="Password"
            type="password"
            placeholder="Enter password"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.search}
            @input=${s=>this.search=s.target.value}
            label="Search"
            type="search"
            placeholder="Search..."
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.sizeSmall}
            @input=${s=>this.sizeSmall=s.target.value}
            label="Small Input"
            size="small"
            placeholder="Small size"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.sizeDefault}
            @input=${s=>this.sizeDefault=s.target.value}
            label="Default Input"
            size="default"
            placeholder="Default size"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.sizeLarge}
            @input=${s=>this.sizeLarge=s.target.value}
            label="Large Input"
            size="large"
            placeholder="Large size"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Shape Variants</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.shapeDefault}
            @input=${s=>this.shapeDefault=s.target.value}
            label="Default (rectangular)"
            placeholder="Default rectangular"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeRounded}
            @input=${s=>this.shapeRounded=s.target.value}
            label="Rounded"
            rounded
            placeholder="Rounded corners"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeCapsule}
            @input=${s=>this.shapeCapsule=s.target.value}
            label="Capsule"
            capsule
            placeholder="Capsule shape"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeUnderlined}
            @input=${s=>this.shapeUnderlined=s.target.value}
            label="Underlined"
            underlined
            placeholder="Underlined only"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeUnderlinedBg}
            @input=${s=>this.shapeUnderlinedBg=s.target.value}
            label="Underlined with Background"
            underlined-with-background
            placeholder="Underlined with background"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>States</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.stateDefault}
            @input=${s=>this.stateDefault=s.target.value}
            label="Normal"
            placeholder="Normal state"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateRequired}
            @input=${s=>this.stateRequired=s.target.value}
            label="Required"
            required
            placeholder="Required field"
            help-text="This field is required"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateDisabled}
            label="Disabled"
            disabled
            placeholder="Disabled input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateReadonly}
            label="Readonly"
            readonly
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateInvalid}
            @input=${s=>this.stateInvalid=s.target.value}
            label="Invalid"
            invalid
            placeholder="Invalid input"
            error-message="This field has an error"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Textarea</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.textareaValue}
            @input=${s=>this.textareaValue=s.target.value}
            label="Comments"
            type="textarea"
            placeholder="Enter your comments..."
            .rows=${4}
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.textareaLarge}
            @input=${s=>this.textareaLarge=s.target.value}
            label="Description"
            type="textarea"
            placeholder="Enter description..."
            .rows=${6}
            size="large"
            help-text="Provide a detailed description"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>With Addons (Automatic Detection)</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Addons are automatically detected when you provide slot content - no props needed!
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.addonLeft}
            @input=${s=>this.addonLeft=s.target.value}
            label="Website URL"
            placeholder="example.com"
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonRight}
            @input=${s=>this.addonRight=s.target.value}
            label="Price"
            placeholder="0.00"
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonBoth}
            @input=${s=>this.addonBoth=s.target.value}
            label="Amount"
            placeholder="100"
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span slot="addon-right">.00</span>
          </ag-input>

          <ag-input
            .value=${this.addonPercent}
            @input=${s=>this.addonPercent=s.target.value}
            label="Discount"
            type="number"
            placeholder="10"
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="5" x2="5" y2="19"></line>
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
            </svg>
          </ag-input>
        </div>

        <div class="mbe4">
          <h2>Addons with Style Variants</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Addons work seamlessly with all input styling variants
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.addonRounded}
            @input=${s=>this.addonRounded=s.target.value}
            label="Rounded with Addons"
            type="number"
            placeholder="0.00"
            rounded
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span slot="addon-right" style="font-weight: 600;">USD</span>
          </ag-input>

          <ag-input
            .value=${this.addonCapsule}
            @input=${s=>this.addonCapsule=s.target.value}
            label="Capsule with Addon"
            type="search"
            placeholder="Find products..."
            capsule
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonUnderlined}
            @input=${s=>this.addonUnderlined=s.target.value}
            label="Underlined with Addon"
            type="number"
            placeholder="10"
            underlined
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="5" x2="5" y2="19"></line>
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonUnderlinedBg}
            @input=${s=>this.addonUnderlinedBg=s.target.value}
            label="Underlined with Background"
            type="text"
            placeholder="Enter username"
            underlined-with-background
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </ag-input>
        </div>

        <div class="mbe4">
          <h2>Interactive Event Handling</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Demonstrates event handling with @input, @change, @focus, @blur
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <ag-input
              .value=${this.interactiveEmail}
              @input=${this.handleInputEvent}
              label="Email (@input event)"
              type="email"
              placeholder="you@example.com"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Character count: <strong>${this.interactiveEmail.length}</strong> | Last input: <strong>${this.lastInputTime}</strong>
            </p>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveUsername}
              @change=${this.handleChangeEvent}
              label="Username (@change event)"
              placeholder="Enter username"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Last confirmed value: <strong>${this.confirmedUsername||"(none)"}</strong>
            </p>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveFocus}
              @input=${s=>this.interactiveFocus=s.target.value}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              label="Focus Tracking (@focus/@blur)"
              placeholder="Click to focus"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">
              Status: <strong style="color: ${this.isFocused?"var(--ag-success)":"var(--ag-text-secondary)"}">
                ${this.isFocused?"Focused":"Not focused"}
              </strong>
              ${this.focusCount>0?`(focused ${this.focusCount} time${this.focusCount>1?"s":""})`:""}
            </p>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveReactive}
              @input=${s=>this.interactiveReactive=s.target.value}
              label="Two-way Binding"
              placeholder="Type here..."
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Current value: <strong>${this.interactiveReactive||"(empty)"}</strong>
            </p>
            <button
              @click=${this.setProgrammatically}
              style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); cursor: pointer;"
            >
              Set value programmatically
            </button>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveTextarea}
              @input=${this.handleTextareaInput}
              @change=${this.handleTextareaChange}
              @focus=${this.handleTextareaFocus}
              @blur=${this.handleTextareaBlur}
              label="Textarea with Events"
              type="textarea"
              .rows=${3}
              placeholder="Try typing, then click outside..."
              class="mbe2"
            ></ag-input>
            <div style="margin-top: 0.5rem; font-size: 0.875rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
              <div>Words: <strong>${this.wordCount}</strong></div>
              <div>Characters: <strong>${this.interactiveTextarea.length}</strong></div>
              <div>Status: <strong>${this.textareaStatus}</strong></div>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Control label placement with the <code>labelPosition</code> attribute: <code>top</code> (default), <code>start</code>, <code>end</code>, or <code>bottom</code>
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.labelTop}
            @input=${s=>this.labelTop=s.target.value}
            label="Top Position (Default)"
            label-position="top"
            placeholder="Label above input"
            help-text="Default vertical layout - best for mobile"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.labelStart}
            @input=${s=>this.labelStart=s.target.value}
            label="Name:"
            label-position="start"
            placeholder="Enter name"
            help-text="Horizontal layout - label before input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.labelEnd}
            @input=${s=>this.labelEnd=s.target.value}
            label="Email:"
            label-position="end"
            placeholder="you@example.com"
            help-text="Horizontal layout - label after input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.labelBottom}
            @input=${s=>this.labelBottom=s.target.value}
            label="Bottom Position"
            label-position="bottom"
            placeholder="Enter value"
            help-text="Vertical layout - label below input"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
            Input can be customized using CSS Shadow Parts:
            <code>::part(ag-input)</code>,
            <code>::part(ag-textarea)</code>,
            <code>::part(ag-input-label)</code>,
            <code>::part(ag-input-error)</code>,
            <code>::part(ag-input-help)</code>
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.customGradient}
            @input=${s=>this.customGradient=s.target.value}
            class="custom-gradient-input mbe2"
            label="Modern Gradient Border"
            placeholder="you@example.com"
            type="email"
          ></ag-input>

          <ag-input
            .value=${this.customMaterial}
            @input=${s=>this.customMaterial=s.target.value}
            class="custom-material-input mbe2"
            label="Material Design Style"
            placeholder="John Doe"
          ></ag-input>

          <ag-input
            .value=${this.customTextarea}
            @input=${s=>this.customTextarea=s.target.value}
            class="custom-textarea mbe2"
            label="Styled Textarea"
            type="textarea"
            .rows=${4}
            placeholder="Paste your code here..."
            help-text="Monospace font with dashed border"
          ></ag-input>
        </div>
      </section>
    `}}g(c,"properties",{basicValue:{type:String},password:{type:String},search:{type:String},sizeSmall:{type:String},sizeDefault:{type:String},sizeLarge:{type:String},shapeDefault:{type:String},shapeRounded:{type:String},shapeCapsule:{type:String},shapeUnderlined:{type:String},shapeUnderlinedBg:{type:String},stateDefault:{type:String},stateRequired:{type:String},stateDisabled:{type:String},stateReadonly:{type:String},stateInvalid:{type:String},textareaValue:{type:String},textareaLarge:{type:String},addonLeft:{type:String},addonRight:{type:String},addonBoth:{type:String},addonPercent:{type:String},addonRounded:{type:String},addonCapsule:{type:String},addonUnderlined:{type:String},addonUnderlinedBg:{type:String},customGradient:{type:String},customMaterial:{type:String},customTextarea:{type:String},labelTop:{type:String},labelStart:{type:String},labelEnd:{type:String},labelBottom:{type:String},interactiveEmail:{type:String},lastInputTime:{type:String},interactiveUsername:{type:String},confirmedUsername:{type:String},interactiveFocus:{type:String},isFocused:{type:Boolean},focusCount:{type:Number},interactiveReactive:{type:String},interactiveTextarea:{type:String},textareaStatus:{type:String}}),g(c,"styles",z`
    /* Modern gradient input style */
    .custom-gradient-input::part(ag-input) {
      border: 2px solid transparent;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
      border-radius: 12px;
      padding: 0.75rem 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .custom-gradient-input::part(ag-input):focus {
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      transform: translateY(-1px);
    }

    .custom-gradient-input::part(ag-input-label) {
      font-weight: 700;
      color: var(--ag-text-secondary);
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    /* Material Design-inspired */
    .custom-material-input::part(ag-input) {
      border: none;
      border-bottom: 2px solid #e5e7eb;
      border-radius: 0;
      padding: 0.5rem 0;
      background: transparent;
      transition: border-color 0.2s ease;
    }

    .custom-material-input::part(ag-input):focus {
      border-bottom-color: #667eea;
      outline: none;
    }

    .custom-material-input::part(ag-input-label) {
      font-size: 0.875rem;
      color: var(--ag-text-secondary);
      margin-bottom: 0.25rem;
    }

    /* Textarea customization */
    .custom-textarea::part(ag-textarea) {
      border: 2px dashed #9ca3af;
      border-radius: 12px;
      background: #f9fafb;
      padding: 1rem;
      font-family: "Monaco", "Courier New", monospace;
      font-size: 0.875rem;
      line-height: 1.6;
      transition: all 0.3s ease;
    }

    .custom-textarea::part(ag-textarea):focus {
      border-style: solid;
      border-color: #667eea;
      background: white;
    }

    .custom-textarea::part(ag-input-label) {
      font-weight: 700;
      color: var(--ag-text-secondary);
    }
  `);customElements.define("input-lit-examples",c);const es=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Input</h2>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="basicValue"
        label="Email"
        type="email"
        placeholder="you@example.com"
        class="mbe2"
      />
      <VueInput
        v-model:value="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        class="mbe2"
      />
      <VueInput
        v-model:value="search"
        label="Search"
        type="search"
        placeholder="Search..."
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Sizes</h2>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="sizeSmall"
        label="Small Input"
        size="small"
        placeholder="Small size"
        class="mbe2"
      />
      <VueInput
        v-model:value="sizeDefault"
        label="Default Input"
        size="default"
        placeholder="Default size"
        class="mbe2"
      />
      <VueInput
        v-model:value="sizeLarge"
        label="Large Input"
        size="large"
        placeholder="Large size"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Shape Variants</h2>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="shapeDefault"
        label="Default (rectangular)"
        placeholder="Default rectangular"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeRounded"
        label="Rounded"
        :rounded="true"
        placeholder="Rounded corners"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeCapsule"
        label="Capsule"
        :capsule="true"
        placeholder="Capsule shape"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeUnderlined"
        label="Underlined"
        :underlined="true"
        placeholder="Underlined only"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeUnderlinedBg"
        label="Underlined with Background"
        :underlined-with-background="true"
        placeholder="Underlined with background"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>States</h2>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="stateDefault"
        label="Normal"
        placeholder="Normal state"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateRequired"
        label="Required"
        :required="true"
        placeholder="Required field"
        help-text="This field is required"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateDisabled"
        label="Disabled"
        :disabled="true"
        placeholder="Disabled input"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateReadonly"
        label="Readonly"
        :readonly="true"
        value="Read-only value"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateInvalid"
        label="Invalid"
        :invalid="true"
        placeholder="Invalid input"
        error-message="This field has an error"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Textarea</h2>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="textareaValue"
        label="Comments"
        type="textarea"
        placeholder="Enter your comments..."
        :rows="4"
        class="mbe2"
      />
      <VueInput
        v-model:value="textareaLarge"
        label="Description"
        type="textarea"
        placeholder="Enter description..."
        :rows="6"
        size="large"
        help-text="Provide a detailed description"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>With Addons (Automatic Detection)</h2>
      <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
        Addons are automatically detected when you provide slot content - no props needed!
      </p>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="addonLeft"
        label="Website URL"
        placeholder="example.com"
        class="mbe2"
      >
        <template #addon-left>
          <Globe
            :size="18"
            color="var(--ag-primary)"
          />
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonRight"
        label="Price"
        placeholder="0.00"
        class="mbe2"
      >
        <template #addon-right>
          <DollarSign
            :size="18"
            color="var(--ag-success)"
          />
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonBoth"
        label="Amount"
        placeholder="100"
        class="mbe2"
      >
        <template #addon-left>
          <DollarSign
            :size="18"
            color="var(--ag-success)"
          />
        </template>
        <template #addon-right>
          <span>.00</span>
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonPercent"
        label="Discount"
        type="number"
        placeholder="10"
        class="mbe2"
      >
        <template #addon-right>
          <Percent :size="18" />
        </template>
      </VueInput>
    </div>

    <div class="mbe4">
      <h2>Addons with Style Variants</h2>
      <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
        Addons work seamlessly with all input styling variants
      </p>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="addonRounded"
        label="Rounded with Addons"
        type="number"
        placeholder="0.00"
        :rounded="true"
        class="mbe2"
      >
        <template #addon-left>
          <DollarSign
            :size="18"
            color="var(--ag-primary)"
          />
        </template>
        <template #addon-right>
          <span style="font-weight: 600;">USD</span>
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonCapsule"
        label="Capsule with Addon"
        type="search"
        placeholder="Find products..."
        :capsule="true"
        class="mbe2"
      >
        <template #addon-left>
          <Search
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonUnderlined"
        label="Underlined with Addon"
        type="number"
        placeholder="10"
        :underlined="true"
        class="mbe2"
      >
        <template #addon-right>
          <Percent :size="18" />
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonUnderlinedBg"
        label="Underlined with Background"
        type="text"
        placeholder="Enter username"
        :underlined-with-background="true"
        class="mbe2"
      >
        <template #addon-left>
          <User2
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
    </div>

    <div class="mbe4">
      <h2>Interactive Event Handling</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Demonstrates event handling with @input, @change, @focus, @blur, and v-model:value
      </p>
    </div>
    <div class="stacked mbe4">
      <!-- Pattern 1: @input event for real-time tracking -->
      <div>
        <VueInput
          v-model:value="interactiveEmail"
          label="Email (@input event)"
          type="email"
          placeholder="you@example.com"
          @input="handleInputEvent"
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Character count: <strong>{{ interactiveEmail.length }}</strong> | Last input: <strong>{{ lastInputTime }}</strong>
        </p>
      </div>

      <!-- Pattern 2: @change event for completed changes -->
      <div>
        <VueInput
          v-model:value="interactiveUsername"
          label="Username (@change event)"
          placeholder="Enter username"
          @change="handleChangeEvent"
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Last confirmed value: <strong>{{ confirmedUsername || '(none)' }}</strong>
        </p>
      </div>

      <!-- Pattern 3: Focus and Blur events -->
      <div>
        <VueInput
          v-model:value="interactiveFocus"
          label="Focus Tracking (@focus/@blur)"
          placeholder="Click to focus"
          @focus="handleFocus"
          @blur="handleBlur"
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">
          Status: <strong :style="{ color: isFocused ? 'var(--ag-success)' : 'var(--ag-text-secondary)' }">
            {{ isFocused ? 'Focused' : 'Not focused' }}
          </strong>
          {{ focusCount > 0 ? \`(focused \${focusCount} time\${focusCount > 1 ? 's' : ''})\` : '' }}
        </p>
      </div>

      <!-- Pattern 4: v-model:value with reactive updates -->
      <div>
        <VueInput
          v-model:value="interactiveReactive"
          label="Two-way Binding (v-model:value)"
          placeholder="Type here..."
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Current value: <strong>{{ interactiveReactive || '(empty)' }}</strong>
        </p>
        <button
          @click="interactiveReactive = 'Programmatically set!'"
          style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); cursor: pointer;"
        >
          Set value programmatically
        </button>
      </div>

      <!-- Pattern 5: Textarea with all events -->
      <div>
        <VueInput
          v-model:value="interactiveTextarea"
          label="Textarea with Events"
          type="textarea"
          :rows="3"
          placeholder="Try typing, then click outside..."
          @input="handleTextareaInput"
          @change="handleTextareaChange"
          @focus="handleTextareaFocus"
          @blur="handleTextareaBlur"
          class="mbe2"
        />
        <div style="margin-top: 0.5rem; font-size: 0.875rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
          <div>Words: <strong>{{ wordCount }}</strong></div>
          <div>Characters: <strong>{{ interactiveTextarea.length }}</strong></div>
          <div>Status: <strong>{{ textareaStatus }}</strong></div>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Label Positioning</h2>
      <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
        Control label placement with the <code>labelPosition</code> prop: <code>top</code> (default), <code>start</code>, <code>end</code>, or <code>bottom</code>
      </p>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="labelTop"
        label="Top Position (Default)"
        label-position="top"
        placeholder="Label above input"
        help-text="Default vertical layout - best for mobile"
        class="mbe2"
      />
      <VueInput
        v-model:value="labelStart"
        label="Name:"
        label-position="start"
        placeholder="Enter name"
        help-text="Horizontal layout - label before input"
        class="mbe2"
      />
      <VueInput
        v-model:value="labelEnd"
        label="Email:"
        label-position="end"
        placeholder="you@example.com"
        help-text="Horizontal layout - label after input"
        class="mbe2"
      />
      <VueInput
        v-model:value="labelBottom"
        label="Bottom Position"
        label-position="bottom"
        placeholder="Enter value"
        help-text="Vertical layout - label below input"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
        Input can be customized using CSS Shadow Parts:
        <code>::part(ag-input)</code>,
        <code>::part(ag-textarea)</code>,
        <code>::part(ag-input-label)</code>,
        <code>::part(ag-input-error)</code>,
        <code>::part(ag-input-help)</code>
      </p>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="customGradient"
        class="custom-gradient-input mbe2"
        label="Modern Gradient Border"
        placeholder="you@example.com"
        type="email"
      />

      <VueInput
        v-model:value="customMaterial"
        class="custom-material-input mbe2"
        label="Material Design Style"
        placeholder="John Doe"
      />

      <VueInput
        v-model:value="customTextarea"
        class="custom-textarea mbe2"
        label="Styled Textarea"
        type="textarea"
        :rows="4"
        placeholder="Paste your code here..."
        help-text="Monospace font with dashed border"
      />
    </div>
  </section>
</template>

<script>
import VueInput from "agnosticui-core/input/vue";
import { Globe, DollarSign, Percent, Search, User2 } from "lucide-vue-next";

export default {
  name: "InputExamples",
  components: {
    VueInput,
    Globe,
    DollarSign,
    Percent,
    User2,
    Search,
  },
  data() {
    return {
      // Basic
      basicValue: "",
      password: "",
      search: "",

      // Sizes
      sizeSmall: "",
      sizeDefault: "",
      sizeLarge: "",

      // Shapes
      shapeDefault: "",
      shapeRounded: "",
      shapeCapsule: "",
      shapeUnderlined: "",
      shapeUnderlinedBg: "",

      // States
      stateDefault: "",
      stateRequired: "",
      stateDisabled: "Disabled value",
      stateReadonly: "Read-only value",
      stateInvalid: "",

      // Textarea
      textareaValue: "",
      textareaLarge: "",

      // Addons
      addonLeft: "",
      addonRight: "",
      addonBoth: "",
      addonPercent: "",

      // Addons with style variants
      addonRounded: "",
      addonCapsule: "",
      addonUnderlined: "",
      addonUnderlinedBg: "",

      // Custom styles
      customGradient: "",
      customMaterial: "",
      customError: "",
      customTextarea: "",

      // Label positioning
      labelTop: "",
      labelStart: "",
      labelEnd: "",
      labelBottom: "",

      // Interactive event handling
      interactiveEmail: "",
      lastInputTime: "(none)",
      interactiveUsername: "",
      confirmedUsername: "",
      interactiveFocus: "",
      isFocused: false,
      focusCount: 0,
      interactiveReactive: "",
      interactiveTextarea: "",
      textareaStatus: "Ready",
    };
  },
  computed: {
    wordCount() {
      if (!this.interactiveTextarea.trim()) return 0;
      return this.interactiveTextarea.trim().split(/\\s+/).length;
    },
  },
  methods: {
    handleInputEvent(event) {
      const now = new Date();
      this.lastInputTime = now.toLocaleTimeString();
      console.log("Input event:", event);
    },
    handleChangeEvent(event) {
      this.confirmedUsername = this.interactiveUsername;
      console.log("Change event:", event);
    },
    handleFocus(event) {
      this.isFocused = true;
      this.focusCount++;
      console.log("Focus event:", event);
    },
    handleBlur(event) {
      this.isFocused = false;
      console.log("Blur event:", event);
    },
    handleTextareaInput(event) {
      this.textareaStatus = "Typing...";
      console.log("Textarea input event:", event);
    },
    handleTextareaChange(event) {
      this.textareaStatus = "Changes saved";
      console.log("Textarea change event:", event);
    },
    handleTextareaFocus(event) {
      this.textareaStatus = "Focused";
      console.log("Textarea focus event:", event);
    },
    handleTextareaBlur(event) {
      this.textareaStatus = "Ready";
      console.log("Textarea blur event:", event);
    },
  },
};
<\/script>

<style scoped>
/* Modern gradient input style */
.custom-gradient-input::part(ag-input) {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.custom-gradient-input::part(ag-input):focus {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transform: translateY(-1px);
}

.custom-gradient-input::part(ag-input-label) {
  font-weight: 700;
  color: var(--ag-text-secondary);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

/* Material Design-inspired */
.custom-material-input::part(ag-input) {
  border: none;
  border-bottom: 2px solid #e5e7eb;
  border-radius: 0;
  padding: 0.5rem 0;
  background: transparent;
  transition: border-color 0.2s ease;
}

.custom-material-input::part(ag-input):focus {
  border-bottom-color: #667eea;
  outline: none;
}

.custom-material-input::part(ag-input-label) {
  font-size: 0.875rem;
  color: var(--ag-text-secondary);
  margin-bottom: 0.25rem;
}
/* Textarea customization */
.custom-textarea::part(ag-textarea) {
  border: 2px dashed #9ca3af;
  border-radius: 12px;
  background: #f9fafb;
  padding: 1rem;
  font-family: "Monaco", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.custom-textarea::part(ag-textarea):focus {
  border-style: solid;
  border-color: #667eea;
  background: white;
}

.custom-textarea::part(ag-input-label) {
  font-weight: 700;
  color: var(--ag-text-secondary);
}
</style>
`,ts=`import { LitElement, html, css } from 'lit';
import 'agnosticui-core/input';

export class InputLitExamples extends LitElement {
  static properties = {
    // Basic
    basicValue: { type: String },
    password: { type: String },
    search: { type: String },
    // Sizes
    sizeSmall: { type: String },
    sizeDefault: { type: String },
    sizeLarge: { type: String },
    // Shapes
    shapeDefault: { type: String },
    shapeRounded: { type: String },
    shapeCapsule: { type: String },
    shapeUnderlined: { type: String },
    shapeUnderlinedBg: { type: String },
    // States
    stateDefault: { type: String },
    stateRequired: { type: String },
    stateDisabled: { type: String },
    stateReadonly: { type: String },
    stateInvalid: { type: String },
    // Textarea
    textareaValue: { type: String },
    textareaLarge: { type: String },
    // Addons
    addonLeft: { type: String },
    addonRight: { type: String },
    addonBoth: { type: String },
    addonPercent: { type: String },
    // Addons with style variants
    addonRounded: { type: String },
    addonCapsule: { type: String },
    addonUnderlined: { type: String },
    addonUnderlinedBg: { type: String },
    // Custom styles
    customGradient: { type: String },
    customMaterial: { type: String },
    customTextarea: { type: String },
    // Label positioning
    labelTop: { type: String },
    labelStart: { type: String },
    labelEnd: { type: String },
    labelBottom: { type: String },
    // Interactive event handling
    interactiveEmail: { type: String },
    lastInputTime: { type: String },
    interactiveUsername: { type: String },
    confirmedUsername: { type: String },
    interactiveFocus: { type: String },
    isFocused: { type: Boolean },
    focusCount: { type: Number },
    interactiveReactive: { type: String },
    interactiveTextarea: { type: String },
    textareaStatus: { type: String },
  };

  static styles = css\`
    /* Modern gradient input style */
    .custom-gradient-input::part(ag-input) {
      border: 2px solid transparent;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
      border-radius: 12px;
      padding: 0.75rem 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .custom-gradient-input::part(ag-input):focus {
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      transform: translateY(-1px);
    }

    .custom-gradient-input::part(ag-input-label) {
      font-weight: 700;
      color: var(--ag-text-secondary);
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    /* Material Design-inspired */
    .custom-material-input::part(ag-input) {
      border: none;
      border-bottom: 2px solid #e5e7eb;
      border-radius: 0;
      padding: 0.5rem 0;
      background: transparent;
      transition: border-color 0.2s ease;
    }

    .custom-material-input::part(ag-input):focus {
      border-bottom-color: #667eea;
      outline: none;
    }

    .custom-material-input::part(ag-input-label) {
      font-size: 0.875rem;
      color: var(--ag-text-secondary);
      margin-bottom: 0.25rem;
    }

    /* Textarea customization */
    .custom-textarea::part(ag-textarea) {
      border: 2px dashed #9ca3af;
      border-radius: 12px;
      background: #f9fafb;
      padding: 1rem;
      font-family: "Monaco", "Courier New", monospace;
      font-size: 0.875rem;
      line-height: 1.6;
      transition: all 0.3s ease;
    }

    .custom-textarea::part(ag-textarea):focus {
      border-style: solid;
      border-color: #667eea;
      background: white;
    }

    .custom-textarea::part(ag-input-label) {
      font-weight: 700;
      color: var(--ag-text-secondary);
    }
  \`;

  constructor() {
    super();
    this.basicValue = '';
    this.password = '';
    this.search = '';
    this.sizeSmall = '';
    this.sizeDefault = '';
    this.sizeLarge = '';
    this.shapeDefault = '';
    this.shapeRounded = '';
    this.shapeCapsule = '';
    this.shapeUnderlined = '';
    this.shapeUnderlinedBg = '';
    this.stateDefault = '';
    this.stateRequired = '';
    this.stateDisabled = 'Disabled value';
    this.stateReadonly = 'Read-only value';
    this.stateInvalid = '';
    this.textareaValue = '';
    this.textareaLarge = '';
    this.addonLeft = '';
    this.addonRight = '';
    this.addonBoth = '';
    this.addonPercent = '';
    this.addonRounded = '';
    this.addonCapsule = '';
    this.addonUnderlined = '';
    this.addonUnderlinedBg = '';
    this.customGradient = '';
    this.customMaterial = '';
    this.customTextarea = '';
    this.labelTop = '';
    this.labelStart = '';
    this.labelEnd = '';
    this.labelBottom = '';
    this.interactiveEmail = '';
    this.lastInputTime = '(none)';
    this.interactiveUsername = '';
    this.confirmedUsername = '';
    this.interactiveFocus = '';
    this.isFocused = false;
    this.focusCount = 0;
    this.interactiveReactive = '';
    this.interactiveTextarea = '';
    this.textareaStatus = 'Ready';
  }

  get wordCount() {
    if (!this.interactiveTextarea.trim()) return 0;
    return this.interactiveTextarea.trim().split(/\\s+/).length;
  }

  handleInputEvent(e) {
    this.interactiveEmail = e.target.value;
    const now = new Date();
    this.lastInputTime = now.toLocaleTimeString();
  }

  handleChangeEvent(e) {
    this.interactiveUsername = e.target.value;
    this.confirmedUsername = e.target.value;
  }

  handleFocus() {
    this.isFocused = true;
    this.focusCount++;
  }

  handleBlur() {
    this.isFocused = false;
  }

  handleTextareaInput(e) {
    this.interactiveTextarea = e.target.value;
    this.textareaStatus = 'Typing...';
  }

  handleTextareaChange() {
    this.textareaStatus = 'Changes saved';
  }

  handleTextareaFocus() {
    this.textareaStatus = 'Focused';
  }

  handleTextareaBlur() {
    this.textareaStatus = 'Ready';
  }

  setProgrammatically() {
    this.interactiveReactive = 'Programmatically set!';
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Input</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.basicValue}
            @input=\${(e) => this.basicValue = e.target.value}
            label="Email"
            type="email"
            placeholder="you@example.com"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.password}
            @input=\${(e) => this.password = e.target.value}
            label="Password"
            type="password"
            placeholder="Enter password"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.search}
            @input=\${(e) => this.search = e.target.value}
            label="Search"
            type="search"
            placeholder="Search..."
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.sizeSmall}
            @input=\${(e) => this.sizeSmall = e.target.value}
            label="Small Input"
            size="small"
            placeholder="Small size"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.sizeDefault}
            @input=\${(e) => this.sizeDefault = e.target.value}
            label="Default Input"
            size="default"
            placeholder="Default size"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.sizeLarge}
            @input=\${(e) => this.sizeLarge = e.target.value}
            label="Large Input"
            size="large"
            placeholder="Large size"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Shape Variants</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.shapeDefault}
            @input=\${(e) => this.shapeDefault = e.target.value}
            label="Default (rectangular)"
            placeholder="Default rectangular"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.shapeRounded}
            @input=\${(e) => this.shapeRounded = e.target.value}
            label="Rounded"
            rounded
            placeholder="Rounded corners"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.shapeCapsule}
            @input=\${(e) => this.shapeCapsule = e.target.value}
            label="Capsule"
            capsule
            placeholder="Capsule shape"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.shapeUnderlined}
            @input=\${(e) => this.shapeUnderlined = e.target.value}
            label="Underlined"
            underlined
            placeholder="Underlined only"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.shapeUnderlinedBg}
            @input=\${(e) => this.shapeUnderlinedBg = e.target.value}
            label="Underlined with Background"
            underlined-with-background
            placeholder="Underlined with background"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>States</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.stateDefault}
            @input=\${(e) => this.stateDefault = e.target.value}
            label="Normal"
            placeholder="Normal state"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.stateRequired}
            @input=\${(e) => this.stateRequired = e.target.value}
            label="Required"
            required
            placeholder="Required field"
            help-text="This field is required"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.stateDisabled}
            label="Disabled"
            disabled
            placeholder="Disabled input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.stateReadonly}
            label="Readonly"
            readonly
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.stateInvalid}
            @input=\${(e) => this.stateInvalid = e.target.value}
            label="Invalid"
            invalid
            placeholder="Invalid input"
            error-message="This field has an error"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Textarea</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.textareaValue}
            @input=\${(e) => this.textareaValue = e.target.value}
            label="Comments"
            type="textarea"
            placeholder="Enter your comments..."
            .rows=\${4}
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.textareaLarge}
            @input=\${(e) => this.textareaLarge = e.target.value}
            label="Description"
            type="textarea"
            placeholder="Enter description..."
            .rows=\${6}
            size="large"
            help-text="Provide a detailed description"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>With Addons (Automatic Detection)</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Addons are automatically detected when you provide slot content - no props needed!
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.addonLeft}
            @input=\${(e) => this.addonLeft = e.target.value}
            label="Website URL"
            placeholder="example.com"
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=\${this.addonRight}
            @input=\${(e) => this.addonRight = e.target.value}
            label="Price"
            placeholder="0.00"
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=\${this.addonBoth}
            @input=\${(e) => this.addonBoth = e.target.value}
            label="Amount"
            placeholder="100"
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span slot="addon-right">.00</span>
          </ag-input>

          <ag-input
            .value=\${this.addonPercent}
            @input=\${(e) => this.addonPercent = e.target.value}
            label="Discount"
            type="number"
            placeholder="10"
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="5" x2="5" y2="19"></line>
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
            </svg>
          </ag-input>
        </div>

        <div class="mbe4">
          <h2>Addons with Style Variants</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Addons work seamlessly with all input styling variants
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.addonRounded}
            @input=\${(e) => this.addonRounded = e.target.value}
            label="Rounded with Addons"
            type="number"
            placeholder="0.00"
            rounded
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span slot="addon-right" style="font-weight: 600;">USD</span>
          </ag-input>

          <ag-input
            .value=\${this.addonCapsule}
            @input=\${(e) => this.addonCapsule = e.target.value}
            label="Capsule with Addon"
            type="search"
            placeholder="Find products..."
            capsule
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=\${this.addonUnderlined}
            @input=\${(e) => this.addonUnderlined = e.target.value}
            label="Underlined with Addon"
            type="number"
            placeholder="10"
            underlined
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="5" x2="5" y2="19"></line>
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
            </svg>
          </ag-input>

          <ag-input
            .value=\${this.addonUnderlinedBg}
            @input=\${(e) => this.addonUnderlinedBg = e.target.value}
            label="Underlined with Background"
            type="text"
            placeholder="Enter username"
            underlined-with-background
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </ag-input>
        </div>

        <div class="mbe4">
          <h2>Interactive Event Handling</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Demonstrates event handling with @input, @change, @focus, @blur
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <ag-input
              .value=\${this.interactiveEmail}
              @input=\${this.handleInputEvent}
              label="Email (@input event)"
              type="email"
              placeholder="you@example.com"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Character count: <strong>\${this.interactiveEmail.length}</strong> | Last input: <strong>\${this.lastInputTime}</strong>
            </p>
          </div>

          <div>
            <ag-input
              .value=\${this.interactiveUsername}
              @change=\${this.handleChangeEvent}
              label="Username (@change event)"
              placeholder="Enter username"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Last confirmed value: <strong>\${this.confirmedUsername || '(none)'}</strong>
            </p>
          </div>

          <div>
            <ag-input
              .value=\${this.interactiveFocus}
              @input=\${(e) => this.interactiveFocus = e.target.value}
              @focus=\${this.handleFocus}
              @blur=\${this.handleBlur}
              label="Focus Tracking (@focus/@blur)"
              placeholder="Click to focus"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">
              Status: <strong style="color: \${this.isFocused ? 'var(--ag-success)' : 'var(--ag-text-secondary)'}">
                \${this.isFocused ? 'Focused' : 'Not focused'}
              </strong>
              \${this.focusCount > 0 ? \`(focused \${this.focusCount} time\${this.focusCount > 1 ? 's' : ''})\` : ''}
            </p>
          </div>

          <div>
            <ag-input
              .value=\${this.interactiveReactive}
              @input=\${(e) => this.interactiveReactive = e.target.value}
              label="Two-way Binding"
              placeholder="Type here..."
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Current value: <strong>\${this.interactiveReactive || '(empty)'}</strong>
            </p>
            <button
              @click=\${this.setProgrammatically}
              style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); cursor: pointer;"
            >
              Set value programmatically
            </button>
          </div>

          <div>
            <ag-input
              .value=\${this.interactiveTextarea}
              @input=\${this.handleTextareaInput}
              @change=\${this.handleTextareaChange}
              @focus=\${this.handleTextareaFocus}
              @blur=\${this.handleTextareaBlur}
              label="Textarea with Events"
              type="textarea"
              .rows=\${3}
              placeholder="Try typing, then click outside..."
              class="mbe2"
            ></ag-input>
            <div style="margin-top: 0.5rem; font-size: 0.875rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
              <div>Words: <strong>\${this.wordCount}</strong></div>
              <div>Characters: <strong>\${this.interactiveTextarea.length}</strong></div>
              <div>Status: <strong>\${this.textareaStatus}</strong></div>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Control label placement with the <code>labelPosition</code> attribute: <code>top</code> (default), <code>start</code>, <code>end</code>, or <code>bottom</code>
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.labelTop}
            @input=\${(e) => this.labelTop = e.target.value}
            label="Top Position (Default)"
            label-position="top"
            placeholder="Label above input"
            help-text="Default vertical layout - best for mobile"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.labelStart}
            @input=\${(e) => this.labelStart = e.target.value}
            label="Name:"
            label-position="start"
            placeholder="Enter name"
            help-text="Horizontal layout - label before input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.labelEnd}
            @input=\${(e) => this.labelEnd = e.target.value}
            label="Email:"
            label-position="end"
            placeholder="you@example.com"
            help-text="Horizontal layout - label after input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=\${this.labelBottom}
            @input=\${(e) => this.labelBottom = e.target.value}
            label="Bottom Position"
            label-position="bottom"
            placeholder="Enter value"
            help-text="Vertical layout - label below input"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
            Input can be customized using CSS Shadow Parts:
            <code>::part(ag-input)</code>,
            <code>::part(ag-textarea)</code>,
            <code>::part(ag-input-label)</code>,
            <code>::part(ag-input-error)</code>,
            <code>::part(ag-input-help)</code>
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=\${this.customGradient}
            @input=\${(e) => this.customGradient = e.target.value}
            class="custom-gradient-input mbe2"
            label="Modern Gradient Border"
            placeholder="you@example.com"
            type="email"
          ></ag-input>

          <ag-input
            .value=\${this.customMaterial}
            @input=\${(e) => this.customMaterial = e.target.value}
            class="custom-material-input mbe2"
            label="Material Design Style"
            placeholder="John Doe"
          ></ag-input>

          <ag-input
            .value=\${this.customTextarea}
            @input=\${(e) => this.customTextarea = e.target.value}
            class="custom-textarea mbe2"
            label="Styled Textarea"
            type="textarea"
            .rows=\${4}
            placeholder="Paste your code here..."
            help-text="Monospace font with dashed border"
          ></ag-input>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('input-lit-examples', InputLitExamples);
`,ls=`import { useState, useMemo } from "react";
import { ReactInput } from "agnosticui-core/input/react";
import { Globe, DollarSign, Percent, Search, User2 } from "lucide-react";

export default function InputReactExamples() {
  // Basic
  const [basicValue, setBasicValue] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  // Sizes
  const [sizeSmall, setSizeSmall] = useState("");
  const [sizeDefault, setSizeDefault] = useState("");
  const [sizeLarge, setSizeLarge] = useState("");

  // Shapes
  const [shapeDefault, setShapeDefault] = useState("");
  const [shapeRounded, setShapeRounded] = useState("");
  const [shapeCapsule, setShapeCapsule] = useState("");
  const [shapeUnderlined, setShapeUnderlined] = useState("");
  const [shapeUnderlinedBg, setShapeUnderlinedBg] = useState("");

  // States
  const [stateDefault, setStateDefault] = useState("");
  const [stateRequired, setStateRequired] = useState("");
  const [stateDisabled] = useState("Disabled value");
  const [stateReadonly] = useState("Read-only value");
  const [stateInvalid, setStateInvalid] = useState("");

  // Textarea
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaLarge, setTextareaLarge] = useState("");

  // Addons
  const [addonLeft, setAddonLeft] = useState("");
  const [addonRight, setAddonRight] = useState("");
  const [addonBoth, setAddonBoth] = useState("");
  const [addonPercent, setAddonPercent] = useState("");

  // Addons with style variants
  const [addonRounded, setAddonRounded] = useState("");
  const [addonCapsule, setAddonCapsule] = useState("");
  const [addonUnderlined, setAddonUnderlined] = useState("");
  const [addonUnderlinedBg, setAddonUnderlinedBg] = useState("");

  // Custom styles
  const [customGradient, setCustomGradient] = useState("");
  const [customMaterial, setCustomMaterial] = useState("");
  const [customTextarea, setCustomTextarea] = useState("");

  // Label positioning
  const [labelTop, setLabelTop] = useState("");
  const [labelStart, setLabelStart] = useState("");
  const [labelEnd, setLabelEnd] = useState("");
  const [labelBottom, setLabelBottom] = useState("");

  // Interactive event handling
  const [interactiveEmail, setInteractiveEmail] = useState("");
  const [lastInputTime, setLastInputTime] = useState("(none)");
  const [interactiveUsername, setInteractiveUsername] = useState("");
  const [confirmedUsername, setConfirmedUsername] = useState("");
  const [interactiveFocus, setInteractiveFocus] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [focusCount, setFocusCount] = useState(0);
  const [interactiveReactive, setInteractiveReactive] = useState("");
  const [interactiveTextarea, setInteractiveTextarea] = useState("");
  const [textareaStatus, setTextareaStatus] = useState("Ready");

  // Computed word count
  const wordCount = useMemo(() => {
    if (!interactiveTextarea.trim()) return 0;
    return interactiveTextarea.trim().split(/\\s+/).length;
  }, [interactiveTextarea]);

  // Event handlers
  const handleInputEvent = (event) => {
    const now = new Date();
    setLastInputTime(now.toLocaleTimeString());
    console.log("Input event:", event);
  };

  const handleChangeEvent = (event) => {
    setConfirmedUsername(interactiveUsername);
    console.log("Change event:", event);
  };

  const handleFocus = (event) => {
    setIsFocused(true);
    setFocusCount((prev) => prev + 1);
    console.log("Focus event:", event);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    console.log("Blur event:", event);
  };

  const handleTextareaInput = (event) => {
    setTextareaStatus("Typing...");
    console.log("Textarea input event:", event);
  };

  const handleTextareaChange = (event) => {
    setTextareaStatus("Changes saved");
    console.log("Textarea change event:", event);
  };

  const handleTextareaFocus = (event) => {
    setTextareaStatus("Focused");
    console.log("Textarea focus event:", event);
  };

  const handleTextareaBlur = (event) => {
    setTextareaStatus("Ready");
    console.log("Textarea blur event:", event);
  };

  return (
    <section>
      <style>{\`
        /* Modern gradient input style */
        .custom-gradient-input::part(ag-input) {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .custom-gradient-input::part(ag-input):focus {
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          transform: translateY(-1px);
        }

        .custom-gradient-input::part(ag-input-label) {
          font-weight: 700;
          color: var(--ag-text-secondary);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        /* Material Design-inspired */
        .custom-material-input::part(ag-input) {
          border: none;
          border-bottom: 2px solid #e5e7eb;
          border-radius: 0;
          padding: 0.5rem 0;
          background: transparent;
          transition: border-color 0.2s ease;
        }

        .custom-material-input::part(ag-input):focus {
          border-bottom-color: #667eea;
          outline: none;
        }

        .custom-material-input::part(ag-input-label) {
          font-size: 0.875rem;
          color: var(--ag-text-secondary);
          margin-bottom: 0.25rem;
        }

        /* Textarea customization */
        .custom-textarea::part(ag-textarea) {
          border: 2px dashed #9ca3af;
          border-radius: 12px;
          background: #f9fafb;
          padding: 1rem;
          font-family: "Monaco", "Courier New", monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          transition: all 0.3s ease;
        }

        .custom-textarea::part(ag-textarea):focus {
          border-style: solid;
          border-color: #667eea;
          background: white;
        }

        .custom-textarea::part(ag-input-label) {
          font-weight: 700;
          color: var(--ag-text-secondary);
        }
      \`}</style>

      <div className="mbe4">
        <h2>Basic Input</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={basicValue}
          onChange={(e) => setBasicValue(e.target.value)}
          label="Email"
          type="email"
          placeholder="you@example.com"
          className="mbe2"
        />
        <ReactInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          placeholder="Enter password"
          className="mbe2"
        />
        <ReactInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search"
          type="search"
          placeholder="Search..."
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={sizeSmall}
          onChange={(e) => setSizeSmall(e.target.value)}
          label="Small Input"
          size="small"
          placeholder="Small size"
          className="mbe2"
        />
        <ReactInput
          value={sizeDefault}
          onChange={(e) => setSizeDefault(e.target.value)}
          label="Default Input"
          size="default"
          placeholder="Default size"
          className="mbe2"
        />
        <ReactInput
          value={sizeLarge}
          onChange={(e) => setSizeLarge(e.target.value)}
          label="Large Input"
          size="large"
          placeholder="Large size"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>Shape Variants</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={shapeDefault}
          onChange={(e) => setShapeDefault(e.target.value)}
          label="Default (rectangular)"
          placeholder="Default rectangular"
          className="mbe2"
        />
        <ReactInput
          value={shapeRounded}
          onChange={(e) => setShapeRounded(e.target.value)}
          label="Rounded"
          rounded={true}
          placeholder="Rounded corners"
          className="mbe2"
        />
        <ReactInput
          value={shapeCapsule}
          onChange={(e) => setShapeCapsule(e.target.value)}
          label="Capsule"
          capsule={true}
          placeholder="Capsule shape"
          className="mbe2"
        />
        <ReactInput
          value={shapeUnderlined}
          onChange={(e) => setShapeUnderlined(e.target.value)}
          label="Underlined"
          underlined={true}
          placeholder="Underlined only"
          className="mbe2"
        />
        <ReactInput
          value={shapeUnderlinedBg}
          onChange={(e) => setShapeUnderlinedBg(e.target.value)}
          label="Underlined with Background"
          underlinedWithBackground={true}
          placeholder="Underlined with background"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>States</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={stateDefault}
          onChange={(e) => setStateDefault(e.target.value)}
          label="Normal"
          placeholder="Normal state"
          className="mbe2"
        />
        <ReactInput
          value={stateRequired}
          onChange={(e) => setStateRequired(e.target.value)}
          label="Required"
          required={true}
          placeholder="Required field"
          helpText="This field is required"
          className="mbe2"
        />
        <ReactInput
          value={stateDisabled}
          label="Disabled"
          disabled={true}
          placeholder="Disabled input"
          className="mbe2"
        />
        <ReactInput
          value={stateReadonly}
          label="Readonly"
          readonly={true}
          className="mbe2"
        />
        <ReactInput
          value={stateInvalid}
          onChange={(e) => setStateInvalid(e.target.value)}
          label="Invalid"
          invalid={true}
          placeholder="Invalid input"
          errorMessage="This field has an error"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>Textarea</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          label="Comments"
          type="textarea"
          placeholder="Enter your comments..."
          rows={4}
          className="mbe2"
        />
        <ReactInput
          value={textareaLarge}
          onChange={(e) => setTextareaLarge(e.target.value)}
          label="Description"
          type="textarea"
          placeholder="Enter description..."
          rows={6}
          size="large"
          helpText="Provide a detailed description"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>With Addons (Automatic Detection)</h2>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Addons are automatically detected when you provide slot content - no
          props needed!
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={addonLeft}
          onChange={(e) => setAddonLeft(e.target.value)}
          label="Website URL"
          placeholder="example.com"
          className="mbe2"
        >
          <div slot="addon-left">
            <Globe size={18} color="var(--ag-primary)" />
          </div>
        </ReactInput>

        <ReactInput
          value={addonRight}
          onChange={(e) => setAddonRight(e.target.value)}
          label="Price"
          placeholder="0.00"
          className="mbe2"
        >
          <div slot="addon-right">
            <DollarSign size={18} color="var(--ag-success)" />
          </div>
        </ReactInput>

        <ReactInput
          value={addonBoth}
          onChange={(e) => setAddonBoth(e.target.value)}
          label="Amount"
          placeholder="100"
          className="mbe2"
        >
          <div slot="addon-left">
            <DollarSign size={18} color="var(--ag-success)" />
          </div>
          <div slot="addon-right">
            <span>.00</span>
          </div>
        </ReactInput>

        <ReactInput
          value={addonPercent}
          onChange={(e) => setAddonPercent(e.target.value)}
          label="Discount"
          type="number"
          placeholder="10"
          className="mbe2"
        >
          <div slot="addon-right">
            <Percent size={18} />
          </div>
        </ReactInput>
      </div>

      <div className="mbe4">
        <h2>Addons with Style Variants</h2>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Addons work seamlessly with all input styling variants
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={addonRounded}
          onChange={(e) => setAddonRounded(e.target.value)}
          label="Rounded with Addons"
          type="number"
          placeholder="0.00"
          rounded={true}
          className="mbe2"
        >
          <div slot="addon-left">
            <DollarSign size={18} color="var(--ag-primary)" />
          </div>
          <div slot="addon-right">
            <span style={{ fontWeight: 600 }}>USD</span>
          </div>
        </ReactInput>

        <ReactInput
          value={addonCapsule}
          onChange={(e) => setAddonCapsule(e.target.value)}
          label="Capsule with Addon"
          type="search"
          placeholder="Find products..."
          capsule={true}
          className="mbe2"
        >
          <div slot="addon-left">
            <Search size={18} color="var(--ag-secondary)" />
          </div>
        </ReactInput>

        <ReactInput
          value={addonUnderlined}
          onChange={(e) => setAddonUnderlined(e.target.value)}
          label="Underlined with Addon"
          type="number"
          placeholder="10"
          underlined={true}
          className="mbe2"
        >
          <div slot="addon-right">
            <Percent size={18} />
          </div>
        </ReactInput>

        <ReactInput
          value={addonUnderlinedBg}
          onChange={(e) => setAddonUnderlinedBg(e.target.value)}
          label="Underlined with Background"
          type="text"
          placeholder="Enter username"
          underlinedWithBackground={true}
          className="mbe2"
        >
          <div slot="addon-left">
            <User2 size={18} color="var(--ag-secondary)" />
          </div>
        </ReactInput>
      </div>

      <div className="mbe4">
        <h2>Interactive Event Handling</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Demonstrates event handling with onInput, onChange, onFocus, onBlur,
          and controlled value
        </p>
      </div>
      <div className="stacked mbe4">
        {/* Pattern 1: onInput event for real-time tracking */}
        <div>
          <ReactInput
            value={interactiveEmail}
            onChange={(e) => setInteractiveEmail(e.target.value)}
            onInput={handleInputEvent}
            label="Email (onInput event)"
            type="email"
            placeholder="you@example.com"
            className="mbe2"
          />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--ag-text-secondary)",
            }}
          >
            Character count: <strong>{interactiveEmail.length}</strong> | Last
            input: <strong>{lastInputTime}</strong>
          </p>
        </div>

        {/* Pattern 2: onChange event for completed changes */}
        <div>
          <ReactInput
            value={interactiveUsername}
            onChange={(e) => {
              setInteractiveUsername(e.target.value);
              handleChangeEvent(e);
            }}
            label="Username (onChange event)"
            placeholder="Enter username"
            className="mbe2"
          />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--ag-text-secondary)",
            }}
          >
            Last confirmed value:{" "}
            <strong>{confirmedUsername || "(none)"}</strong>
          </p>
        </div>

        {/* Pattern 3: Focus and Blur events */}
        <div>
          <ReactInput
            value={interactiveFocus}
            onChange={(e) => setInteractiveFocus(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            label="Focus Tracking (onFocus/onBlur)"
            placeholder="Click to focus"
            className="mbe2"
          />
          <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
            Status:{" "}
            <strong
              style={{
                color: isFocused
                  ? "var(--ag-success)"
                  : "var(--ag-text-secondary)",
              }}
            >
              {isFocused ? "Focused" : "Not focused"}
            </strong>
            {focusCount > 0
              ? \` (focused \${focusCount} time\${focusCount > 1 ? "s" : ""})\`
              : ""}
          </p>
        </div>

        {/* Pattern 4: Controlled value with reactive updates */}
        <div>
          <ReactInput
            value={interactiveReactive}
            onChange={(e) => setInteractiveReactive(e.target.value)}
            label="Two-way Binding (controlled value)"
            placeholder="Type here..."
            className="mbe2"
          />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--ag-text-secondary)",
            }}
          >
            Current value: <strong>{interactiveReactive || "(empty)"}</strong>
          </p>
          <button
            onClick={() => setInteractiveReactive("Programmatically set!")}
            style={{
              marginTop: "0.5rem",
              padding: "0.25rem 0.75rem",
              border: "1px solid var(--ag-border)",
              borderRadius: "var(--ag-radius-sm)",
              cursor: "pointer",
            }}
          >
            Set value programmatically
          </button>
        </div>

        {/* Pattern 5: Textarea with all events */}
        <div>
          <ReactInput
            value={interactiveTextarea}
            onChange={(e) => setInteractiveTextarea(e.target.value)}
            onInput={handleTextareaInput}
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            label="Textarea with Events"
            type="textarea"
            rows={3}
            placeholder="Try typing, then click outside..."
            className="mbe2"
          />
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              padding: "0.5rem",
              background: "var(--ag-background-secondary)",
              borderRadius: "4px",
            }}
          >
            <div>
              Words: <strong>{wordCount}</strong>
            </div>
            <div>
              Characters: <strong>{interactiveTextarea.length}</strong>
            </div>
            <div>
              Status: <strong>{textareaStatus}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Control label placement with the <code>labelPosition</code> prop:{" "}
          <code>top</code> (default), <code>start</code>, <code>end</code>, or{" "}
          <code>bottom</code>
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={labelTop}
          onChange={(e) => setLabelTop(e.target.value)}
          label="Top Position (Default)"
          labelPosition="top"
          placeholder="Label above input"
          helpText="Default vertical layout - best for mobile"
          className="mbe2"
        />
        <ReactInput
          value={labelStart}
          onChange={(e) => setLabelStart(e.target.value)}
          label="Name:"
          labelPosition="start"
          placeholder="Enter name"
          helpText="Horizontal layout - label before input"
          className="mbe2"
        />
        <ReactInput
          value={labelEnd}
          onChange={(e) => setLabelEnd(e.target.value)}
          label="Email:"
          labelPosition="end"
          placeholder="you@example.com"
          helpText="Horizontal layout - label after input"
          className="mbe2"
        />
        <ReactInput
          value={labelBottom}
          onChange={(e) => setLabelBottom(e.target.value)}
          label="Bottom Position"
          labelPosition="bottom"
          placeholder="Enter value"
          helpText="Vertical layout - label below input"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p
          style={{
            marginTop: "0.5rem",
            marginBottom: "1rem",
            color: "var(--vp-c-text-2)",
          }}
        >
          Input can be customized using CSS Shadow Parts:{" "}
          <code>::part(ag-input)</code>, <code>::part(ag-textarea)</code>,{" "}
          <code>::part(ag-input-label)</code>,{" "}
          <code>::part(ag-input-error)</code>,{" "}
          <code>::part(ag-input-help)</code>
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={customGradient}
          onChange={(e) => setCustomGradient(e.target.value)}
          className="custom-gradient-input mbe2"
          label="Modern Gradient Border"
          placeholder="you@example.com"
          type="email"
        />

        <ReactInput
          value={customMaterial}
          onChange={(e) => setCustomMaterial(e.target.value)}
          className="custom-material-input mbe2"
          label="Material Design Style"
          placeholder="John Doe"
        />

        <ReactInput
          value={customTextarea}
          onChange={(e) => setCustomTextarea(e.target.value)}
          className="custom-textarea mbe2"
          label="Styled Textarea"
          type="textarea"
          rows={4}
          placeholder="Paste your code here..."
          helpText="Monospace font with dashed border"
        />
      </div>
    </section>
  );
}
`,Bs=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),hs={name:"components/input.md"},Es=Object.assign(hs,{setup(l){return(s,p)=>(b(),v("div",null,[p[1]||(p[1]=n("h1",{id:"input",tabindex:"-1"},[h("Input "),n("a",{class:"header-anchor",href:"#input","aria-label":'Permalink to "Input"'},"​")],-1)),e(A),p[2]||(p[2]=n("p",null,"A flexible, accessible form input component that supports text inputs, textareas, various styling variants, validation states, and input addons.",-1)),p[3]||(p[3]=n("h2",{id:"examples",tabindex:"-1"},[h("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(R,{component:"input","vue-code":u(es),"lit-code":u(ts),"react-code":u(ls)},{vue:r(()=>[e(ns)]),lit:r(()=>[...p[0]||(p[0]=[n("input-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),p[4]||(p[4]=w(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Input</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;you@example.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;username&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Username&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :required</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :invalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isInvalid&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Username is required&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose a unique username&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;message&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Message&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;textarea&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :rows</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enter your message...&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;price&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">addon-left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DollarSign</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;18&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small Input&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small size&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;rounded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Rounded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :rounded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Rounded corners&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;disabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Disabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :disabled</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Cannot edit&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueInput </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/input/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { DollarSign } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-vue-next&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueInput,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    DollarSign,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      email: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      username: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isInvalid: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      message: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      price: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      small: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      rounded: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      disabled: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Cannot edit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactInput } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/input/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactButton } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/button/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> InputExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">email</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setEmail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">username</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setUsername</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isInvalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsInvalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setMessage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">price</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setPrice</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">small</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setSmall</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rounded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setRounded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">email</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setEmail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;you@example.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">username</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setUsername</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Username&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        rounded</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        required</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        invalid</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isInvalid</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        errorMessage</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Username is required&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        helpText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose a unique username&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactButton</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xl&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        shape</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;rounded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;monochrome&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsInvalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isInvalid)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Toggle Invalid</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">message</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setMessage</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Message&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;textarea&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        rows</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enter your message...&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">price</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setPrice</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;addon-left&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;$&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">small</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setSmall</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small Input&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small size&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">rounded</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setRounded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Rounded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        rounded</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Rounded corners&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Cannot edit&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Disabled&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> disabled</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html, css } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lit/decorators.js&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/input&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;input-example&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> InputExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  static</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> styles</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> css</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    :host {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: block;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    section {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: flex;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      flex-direction: column;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      gap: 1rem;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  firstUpdated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Set up event listeners for inputs in the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> emailInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#email-input&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> usernameInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &quot;#username-input&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    ) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> any</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    emailInput?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;input&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> target</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, target.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    usernameInput?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;blur&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> target</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">target.value) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        usernameInput.invalid </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">else</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        usernameInput.invalid </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-input</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          id=&quot;email-input&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          label=&quot;Email&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          type=&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          placeholder=&quot;you@example.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-input</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          id=&quot;username-input&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          label=&quot;Username&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          required</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          error-message=&quot;Username is required&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          help-text=&quot;Choose a unique username&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-input</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          id=&quot;message-input&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          label=&quot;Message&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          type=&quot;textarea&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          rows=&quot;4&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          placeholder=&quot;Enter your message...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-input id=&quot;price-input&quot; label=&quot;Price&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;span slot=&quot;addon-left&quot;&gt;$&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/ag-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-input</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          label=&quot;Small Input&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          size=&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          placeholder=&quot;Small size&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-input</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          label=&quot;Rounded&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          rounded</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          placeholder=&quot;Rounded corners&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &gt;&lt;/ag-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-input label=&quot;Disabled&quot; disabled value=&quot;Cannot edit&quot;&gt;&lt;/ag-input&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;/section&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Note:</strong> When using input components within a custom element&#39;s shadow DOM, set up event listeners in the component&#39;s lifecycle (e.g., <code>firstUpdated()</code>) rather than using <code>DOMContentLoaded</code>, as <code>document.querySelector()</code> cannot access elements inside shadow DOM. Use <code>this.shadowRoot.querySelector()</code> instead.</p></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>The input value (use with v-model for two-way binding)</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Label text for the input. Best practice is to always provide a visible label.</td></tr><tr><td><code>type</code></td><td><code>string</code></td><td><code>&#39;text&#39;</code></td><td>Input type (text, email, password, search, tel, url, number, date, time, color, or &#39;textarea&#39; for textarea element)</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Placeholder text shown when input is empty</td></tr><tr><td><code>size</code></td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td><td>Size variant of the input</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Name attribute for form submission</td></tr><tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Marks the field as required. Displays an asterisk (*) after the label</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables the input, preventing interaction</td></tr><tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Makes the input read-only but still focusable</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Marks the input as invalid. Changes border color to red and sets aria-invalid</td></tr><tr><td><code>helpText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Helper text displayed below the input</td></tr><tr><td><code>errorMessage</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Error message displayed when invalid. Linked via aria-describedby</td></tr><tr><td><code>rounded</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Applies rounded corners (border-radius: md)</td></tr><tr><td><code>capsule</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Applies capsule shape (fully rounded ends)</td></tr><tr><td><code>underlined</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows only bottom border (underlined style)</td></tr><tr><td><code>underlinedWithBackground</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Underlined style with subtle background color</td></tr><tr><td><code>inline</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Changes display to inline-block for inline layouts</td></tr><tr><td><code>labelPosition</code></td><td><code>&#39;top&#39; | &#39;start&#39; | &#39;end&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>Controls label placement. <code>top</code>/<code>bottom</code> for vertical layout, <code>start</code>/<code>end</code> for horizontal (respects RTL)</td></tr><tr><td><code>labelHidden</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Visually hides the label while keeping it accessible to screen readers</td></tr><tr><td><code>noLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Completely removes the label element. Use with ariaLabel for accessibility</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>ARIA label for accessibility when label is not visible</td></tr><tr><td><s><code>hasLeftAddon</code></s></td><td><code>boolean</code></td><td><code>false</code></td><td><strong>Deprecated:</strong> Addons are now automatically detected. Simply use the <code>addon-left</code> slot.</td></tr><tr><td><s><code>hasRightAddon</code></s></td><td><code>boolean</code></td><td><code>false</code></td><td><strong>Deprecated:</strong> Addons are now automatically detected. Simply use the <code>addon-right</code> slot.</td></tr><tr><td><code>rows</code></td><td><code>number</code></td><td><code>4</code></td><td>Number of rows for textarea (only applies when type=&quot;textarea&quot;)</td></tr><tr><td><code>cols</code></td><td><code>number</code></td><td><code>50</code></td><td>Number of columns for textarea (only applies when type=&quot;textarea&quot;)</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>The Input component follows AgnosticUI v2 event conventions for native events. All events work consistently across Lit, React, and Vue:</p><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Payload</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td><code>MouseEvent</code></td><td>Native click event on the input</td></tr><tr><td><code>input</code></td><td><code>InputEvent</code></td><td>Native input event, fired on every keystroke</td></tr><tr><td><code>change</code></td><td><code>Event</code></td><td>Native change event, fired when input loses focus after value changed</td></tr><tr><td><code>focus</code></td><td><code>FocusEvent</code></td><td>Fired when input receives focus (re-dispatched from host for cross-shadow-DOM access)</td></tr><tr><td><code>blur</code></td><td><code>FocusEvent</code></td><td>Fired when input loses focus (re-dispatched from host for cross-shadow-DOM access)</td></tr></tbody></table><h3 id="framework-specific-event-usage" tabindex="-1">Framework-Specific Event Usage <a class="header-anchor" href="#framework-specific-event-usage" aria-label="Permalink to &quot;Framework-Specific Event Usage&quot;">​</a></h3><p><strong>Vue:</strong></p><ul><li>Use <code>v-model:value</code> for two-way binding</li><li>Listen to events with <code>@event-name</code> syntax (e.g., <code>@input</code>, <code>@change</code>, <code>@focus</code>, <code>@blur</code>)</li><li>The <code>update:value</code> emit is automatically fired on input for v-model support</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">email</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleInput</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleChange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">focus</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleFocus</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">blur</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleBlur</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><p><strong>React:</strong></p><ul><li>All native events work automatically through callback props</li><li>Use <code>onInput</code>, <code>onChange</code>, <code>onFocus</code>, <code>onBlur</code>, <code>onClick</code></li></ul><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;input:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.target.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;change:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.target.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onFocus</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;focused&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onBlur</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;blurred&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><p><strong>Lit/Web Components:</strong></p><ul><li>Use both <code>addEventListener</code> and callback properties</li><li>Focus and blur events bubble through shadow DOM</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> input</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-input&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">input.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;input&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.target.value));</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">input.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;focus&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;focused&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">input.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.target.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">input.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onFocus</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;focused&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span></code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td><code>addon-left</code></td><td>Content to display on the left side of the input (automatically detected when provided)</td></tr><tr><td><code>addon-right</code></td><td>Content to display on the right side of the input (automatically detected when provided)</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Input component follows <a href="https://www.bbc.co.uk/gel/guidelines/how-to-design-forms" target="_blank" rel="noreferrer">BBC GEL Form Guidelines</a> and <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noreferrer">WCAG 2.1 Level AA</a>:</p><ul><li><strong>Label Above Input</strong>: Labels are positioned above inputs by default (BBC GEL best practice) for better mobile usability and internationalization</li><li><strong>Semantic HTML</strong>: Uses native <code>&lt;input&gt;</code> and <code>&lt;label&gt;</code> elements with proper <code>for</code> attribute association</li><li><strong>ARIA Support</strong>: Implements <code>aria-invalid</code>, <code>aria-required</code>, <code>aria-describedby</code> for validation states</li><li><strong>Error Messaging</strong>: Error messages are properly linked via <code>aria-describedby</code> for screen reader announcement</li><li><strong>Focus Management</strong>: Clear focus indicators using design system tokens</li><li><strong>Required Fields</strong>: Visual asterisk (*) indicator with proper ARIA markup</li><li><strong>Help Text</strong>: Associated with input via <code>aria-describedby</code> for context</li></ul><h3 id="label-requirements" tabindex="-1">Label Requirements <a class="header-anchor" href="#label-requirements" aria-label="Permalink to &quot;Label Requirements&quot;">​</a></h3><p>Always provide a label for accessibility. The component supports multiple label patterns:</p><p><strong>Visible label (recommended):</strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">email</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email Address&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div><p><strong>Visually hidden label (when design requires it):</strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">search</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Search&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">label-hidden</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Search...&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h2 id="form-integration" tabindex="-1">Form Integration <a class="header-anchor" href="#form-integration" aria-label="Permalink to &quot;Form Integration&quot;">​</a></h2><p>Use v-model for two-way data binding with form data:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @submit.prevent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleSubmit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;form.firstName&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;First Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;firstName&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :required</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :invalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;errors.firstName&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;errors.firstName&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;form.email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :required</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :invalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;errors.email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;errors.email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @blur</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;validateEmail&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;form.message&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Message&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;message&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;textarea&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :rows</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;6&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Optional: Tell us more&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;submit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Submit&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      form: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        firstName: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        email: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        message: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      errors: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        firstName: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        email: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    validateEmail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> emailRegex</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> /</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">[</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">\\s@]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">+</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">@</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">[</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">\\s@]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">+</span><span style="--shiki-light:#024C1A;--shiki-light-font-weight:bold;--shiki-dark:#72F088;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">[</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">\\s@]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">+$</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">/</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">emailRegex.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">test</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.form.email) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">&amp;&amp;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.form.email </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!==</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.errors.email </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;Please enter a valid email address&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">else</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.errors.email </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleSubmit</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      // Validate all fields</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.errors.firstName </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.form.firstName</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        ?</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        :</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;First name is required&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">validateEmail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.errors.firstName </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">&amp;&amp;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> !</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.errors.email) {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">        // Submit form</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Form submitted:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.form);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="input-addons" tabindex="-1">Input Addons <a class="header-anchor" href="#input-addons" aria-label="Permalink to &quot;Input Addons&quot;">​</a></h2><p>Add icons or text before or after the input using slots. Addons are <strong>automatically detected</strong> when you provide slot content - no props needed!</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;url&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Website URL&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example.com&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">addon-left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Globe</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;18&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#12623e&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;price&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.00&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">addon-right</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DollarSign</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;18&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#14854f&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;amount&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Amount&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">addon-left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DollarSign</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;18&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#14854f&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">addon-right</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;.00&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;discount&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Discount&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;10&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> #</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">addon-right</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;font-weight: bold;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;%&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueInput </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/input/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Globe, DollarSign } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-vue-next&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueInput, Globe, DollarSign }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { url: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, price: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, amount: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, discount: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="input-types" tabindex="-1">Input Types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input Types&quot;">​</a></h2><p>The component supports all HTML5 input types:</p><ul><li><strong>Text-based</strong>: <code>text</code> (default), <code>email</code>, <code>password</code>, <code>search</code>, <code>tel</code>, <code>url</code></li><li><strong>Numeric</strong>: <code>number</code></li><li><strong>Date/Time</strong>: <code>date</code>, <code>time</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code></li><li><strong>Other</strong>: <code>color</code>, <code>file</code>, <code>range</code></li><li><strong>Textarea</strong>: Use <code>type=&quot;textarea&quot;</code> for multi-line text input</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">email</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">password</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Password&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;password&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">date</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Date&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;date&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Message&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;textarea&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rows</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div><h2 id="shape-variants" tabindex="-1">Shape Variants <a class="header-anchor" href="#shape-variants" aria-label="Permalink to &quot;Shape Variants&quot;">​</a></h2><p>Customize the input appearance with shape variants:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Default: Rectangular --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Default&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Rounded corners --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Rounded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rounded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Capsule (fully rounded) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Capsule&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">capsule</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Underlined only --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Underlined&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">underlined</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Underlined with background --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Underlined + BG&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">underlined-with-background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h2 id="label-positioning" tabindex="-1">Label Positioning <a class="header-anchor" href="#label-positioning" aria-label="Permalink to &quot;Label Positioning&quot;">​</a></h2><p>Control label placement with the <code>labelPosition</code> prop. Supports four directional values that work across all form controls:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Top (default) - Label above input --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Full Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enter your name&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;!-- Start - Label before input (horizontal, respects RTL) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;VueInput</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  v-model:value=&quot;age&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label=&quot;Age:&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label-position=&quot;start&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  placeholder=&quot;25&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;!-- End - Label after input (horizontal, respects RTL) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;VueInput</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  v-model:value=&quot;amount&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label=&quot;USD&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label-position=&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  placeholder=&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;!-- Bottom - Label below input --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;VueInput</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  v-model:value=&quot;code&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label=&quot;Verification Code&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label-position=&quot;bottom&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  placeholder=&quot;Enter code&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><p><strong>Use Cases:</strong></p><ul><li><strong><code>top</code> (default)</strong>: Best for most forms - follows BBC GEL guidelines for mobile usability</li><li><strong><code>start</code></strong>: Compact horizontal layouts, admin panels, settings forms</li><li><strong><code>end</code></strong>: Less common, useful when label is a unit or suffix (e.g., &quot;USD&quot;, &quot;kg&quot;)</li><li><strong><code>bottom</code></strong>: Rare, use sparingly for special design requirements</li></ul><p><strong>Progressive Enhancement:</strong> Horizontal layouts (<code>start</code>/<code>end</code>) use modern CSS <code>field-sizing: content</code> in Chrome 123+ and Safari TP for responsive input widths, with graceful fallback to fixed width in other browsers.</p><h2 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-label="Permalink to &quot;Validation&quot;">​</a></h2><p>Show validation states and error messages:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :required</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :invalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;emailError&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    :error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;emailError ? &#39;Please enter a valid email&#39; : &#39;&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;We&#39;ll never share your email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    @blur</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;validateEmail&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      email: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      emailError: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    validateEmail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> regex</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> /</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">[</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">\\s@]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">+</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">@</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">[</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">\\s@]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">+</span><span style="--shiki-light:#024C1A;--shiki-light-font-weight:bold;--shiki-dark:#72F088;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">[</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">^</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">\\s@]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">+$</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">/</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.emailError </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> !</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">regex.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">test</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.email) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">&amp;&amp;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.email </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!==</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><ol><li><strong>Always provide a label</strong> - Essential for accessibility and usability</li><li><strong>Use appropriate input types</strong> - Triggers correct mobile keyboards and built-in validation</li><li><strong>Provide helpful error messages</strong> - Tell users what went wrong and how to fix it</li><li><strong>Use help text for context</strong> - Explain format requirements or provide examples</li><li><strong>Mark required fields</strong> - Use the <code>required</code> prop to show the asterisk indicator</li><li><strong>Validate on blur</strong> - Check input validity when user leaves the field</li><li><strong>Keep labels above inputs</strong> - Follows BBC GEL guidelines for better mobile UX</li><li><strong>Consider placeholder text carefully</strong> - Don&#39;t rely on placeholders alone for instructions</li></ol><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>The Input component exposes the following CSS Shadow Parts for custom styling:</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-input</code></td><td>The input element itself</td></tr><tr><td><code>ag-textarea</code></td><td>The textarea element (when type=&quot;textarea&quot;)</td></tr><tr><td><code>ag-input-wrapper</code></td><td>Main wrapper div around all elements</td></tr><tr><td><code>ag-input-label</code></td><td>The label element</td></tr><tr><td><code>ag-input-required</code></td><td>Required indicator asterisk (*)</td></tr><tr><td><code>ag-input-help</code></td><td>Help text div below the input</td></tr><tr><td><code>ag-input-error</code></td><td>Error message div</td></tr><tr><td><code>ag-input-field-wrapper</code></td><td>Wrapper div for input with addons</td></tr><tr><td><code>ag-input-addon-left</code></td><td>Left addon container</td></tr><tr><td><code>ag-input-addon-right</code></td><td>Right addon container</td></tr></tbody></table><h3 id="customization-examples" tabindex="-1">Customization Examples <a class="header-anchor" href="#customization-examples" aria-label="Permalink to &quot;Customization Examples&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> transparent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">padding-box</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        #667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        #764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      ) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">border-box</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">12</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.75</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:focus</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 12</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">102</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">126</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">234</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">700</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  text-transform</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">uppercase</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.75</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input-error</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#dc2626</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#fee2e2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #dc2626</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-bottom</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #e5e7eb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">transparent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: border-color </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:focus</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-bottom-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p>See the <strong>CSS Shadow Parts Customization</strong> section in the examples above for more styling demonstrations.</p><h2 id="when-to-use" tabindex="-1">When to Use <a class="header-anchor" href="#when-to-use" aria-label="Permalink to &quot;When to Use&quot;">​</a></h2><p><strong>Use Input when:</strong></p><ul><li>Collecting short, single-line text data (name, email, etc.)</li><li>Building forms for data entry</li><li>You need validation and error messaging</li><li>You need different input types (email, password, date, etc.)</li></ul><p><strong>Use Textarea (type=&quot;textarea&quot;) when:</strong></p><ul><li>Collecting longer, multi-line text (comments, descriptions, etc.)</li><li>User needs to see multiple lines of their input at once</li></ul><p><strong>Consider alternatives when:</strong></p><ul><li>You have a fixed set of options - use Select or Radio buttons instead</li><li>You need yes/no or on/off - use Toggle or Checkbox instead</li><li>You need date/time selection with a calendar - consider a DatePicker component</li></ul>`,68))]))}});export{Bs as __pageData,Es as default};
