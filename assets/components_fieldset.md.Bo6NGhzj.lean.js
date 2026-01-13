import{A as x}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{_ as w}from"./chunks/VueFieldset.CM_BZncW.js";import{C as V}from"./chunks/VueInput.vue_vue_type_script_setup_true_lang-Dsxo7DuX.BU_KeN0p.js";import{g as S}from"./chunks/VueRadio.vue_vue_type_script_setup_true_lang-DxNhH12d.CoE-Bcbf.js";import{x as N}from"./chunks/VueCheckbox.vue_vue_type_script_setup_true_lang-DERDRO2P.DNrQvq23.js";import{v as I}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-Bq8IPXqd.CM5RJxDa.js";import{_ as M,C as k,c as f,o as B,j as e,G as a,w as t,a as p,ae as z,k as v}from"./chunks/framework.NAAYCHZu.js";import{c as y}from"./chunks/createLucideIcon.B61Wqv9x.js";import{U as P}from"./chunks/user.CKdyRrBx.js";import{M as U}from"./chunks/map-pin.BrE5b0KS.js";import{M as R}from"./chunks/mail.DXL_9bBU.js";import{S as O}from"./chunks/search.D3iDyvB5.js";import{F as Y}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{a as L,x as W}from"./chunks/Button.Bujdzq23.js";import"./chunks/Checkbox.CBhJP2Xa.js";import"./chunks/Icon.odq14qpJ.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/form-control-utils.LZkauYsx.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=y("building-2",[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=y("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=y("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=y("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]),H={name:"FieldsetExamples",components:{VueFieldset:w,VueInput:V,VueRadio:S,VueCheckbox:N,VueButton:I,Search:O,CreditCard:G,Mail:R,Phone:$,MapPin:U,User:P,Building2:T,Calendar:j},data(){return{personalInfo:{firstName:"",lastName:"",email:"",phone:""},address:{street:"",city:"",zip:"",country:""},contactMethod:"email",notifications:{productUpdates:!0,newsletter:!1,specialOffers:!0,securityAlerts:!0},dateOfBirth:{month:"",day:"",year:""},search:{query:"",caseSensitive:!1,wholeWords:!1},account:{username:"",displayName:"",privacy:{profilePublic:!0,activityVisible:!0,searchable:!1}},payment:{cardNumber:"",expiry:"",cvv:"",nameOnCard:"",billingZip:""},paymentErrors:{cardNumber:"",expiry:"",cvv:"",nameOnCard:""},sizes:{smallName:"",defaultName:"",largeName:""},custom:{field1:"",field2:"",field3:"",field4:""}}},methods:{validateCardNumber(){const F=this.payment.cardNumber.replace(/\s/g,"");F&&F.length<13?this.paymentErrors.cardNumber="Card number must be at least 13 digits":this.paymentErrors.cardNumber=""},validateExpiry(){const F=/^(0[1-9]|1[0-2])\/\d{2}$/;this.payment.expiry&&!F.test(this.payment.expiry)?this.paymentErrors.expiry="Format must be MM/YY":this.paymentErrors.expiry=""},validateCVV(){this.payment.cvv&&(this.payment.cvv.length<3||this.payment.cvv.length>4)?this.paymentErrors.cvv="CVV must be 3 or 4 digits":this.paymentErrors.cvv=""},validateNameOnCard(){this.payment.nameOnCard&&this.payment.nameOnCard.length<2?this.paymentErrors.nameOnCard="Please enter the name on your card":this.paymentErrors.nameOnCard=""}}},Z={class:"mbe3",style:{display:"grid","grid-template-columns":"2fr 1fr",gap:"var(--ag-space-3)"}},Q={style:{display:"flex","flex-direction":"column",gap:"var(--ag-space-3)"}},J={style:{display:"flex","flex-direction":"column",gap:"var(--ag-space-3)"}},_={style:{display:"flex","flex-direction":"column",gap:"var(--ag-space-2)"}},K={class:"mbe6"},X={style:{display:"flex","flex-direction":"column",gap:"var(--ag-space-3)"}},ss={style:{display:"flex",gap:"var(--ag-space-3)","justify-content":"space-between"}},is={style:{display:"flex",gap:"var(--ag-space-3)"}},as={class:"mbe6"},ns={class:"mbe3",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"var(--ag-space-3)"}},es={style:{display:"flex",gap:"var(--ag-space-3)","justify-content":"flex-end"}},ts={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))",gap:"var(--ag-space-4)"},class:"mbe6"},ls={style:{display:"flex","flex-direction":"column",gap:"var(--ag-space-2)"}},hs={style:{display:"flex",gap:"var(--ag-space-2)","justify-content":"flex-end"}},ps={style:{display:"flex",gap:"var(--ag-space-2)","justify-content":"flex-end"}},rs={class:"mbe6"};function ks(F,s,d,ys,i,g){const c=k("User"),l=k("VueInput"),C=k("Mail"),E=k("Phone"),h=k("VueFieldset"),m=k("MapPin"),A=k("Building2"),u=k("VueRadio"),r=k("VueCheckbox"),b=k("Search"),o=k("VueButton"),D=k("CreditCard"),q=k("Calendar");return B(),f("section",null,[s[51]||(s[51]=e("div",{class:"mbe4"},[e("h2",null,"Basic Fieldset"),e("p",{class:"mbs2 mbe3"},"Group related form controls with a descriptive legend")],-1)),a(h,{legend:"Personal Information",class:"mbe6"},{default:t(()=>[a(l,{value:i.personalInfo.firstName,"onUpdate:value":s[0]||(s[0]=n=>i.personalInfo.firstName=n),label:"First Name",placeholder:"John",class:"mbe3"},{"addon-left":t(()=>[a(c,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),a(l,{value:i.personalInfo.lastName,"onUpdate:value":s[1]||(s[1]=n=>i.personalInfo.lastName=n),label:"Last Name",placeholder:"Doe",class:"mbe3"},{"addon-left":t(()=>[a(c,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),a(l,{value:i.personalInfo.email,"onUpdate:value":s[2]||(s[2]=n=>i.personalInfo.email=n),label:"Email",type:"email",placeholder:"john.doe@example.com",class:"mbe3"},{"addon-left":t(()=>[a(C,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),a(l,{value:i.personalInfo.phone,"onUpdate:value":s[3]||(s[3]=n=>i.personalInfo.phone=n),label:"Phone Number",type:"tel",placeholder:"(555) 123-4567"},{"addon-left":t(()=>[a(E,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"])]),_:1}),s[52]||(s[52]=e("div",{class:"mbe4"},[e("h2",null,"Bordered Fieldset"),e("p",{class:"mbs2 mbe3"},"Add visual borders and padding for better content grouping")],-1)),a(h,{legend:"Shipping Address",bordered:!0,class:"mbe6"},{default:t(()=>[a(l,{value:i.address.street,"onUpdate:value":s[4]||(s[4]=n=>i.address.street=n),label:"Street Address",placeholder:"123 Main St",class:"mbe3"},{"addon-left":t(()=>[a(m,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),e("div",Z,[a(l,{value:i.address.city,"onUpdate:value":s[5]||(s[5]=n=>i.address.city=n),label:"City",placeholder:"San Francisco"},{"addon-left":t(()=>[a(A,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),a(l,{value:i.address.zip,"onUpdate:value":s[6]||(s[6]=n=>i.address.zip=n),label:"ZIP Code",placeholder:"94102"},null,8,["value"])]),a(l,{value:i.address.country,"onUpdate:value":s[7]||(s[7]=n=>i.address.country=n),label:"Country",placeholder:"United States"},{"addon-left":t(()=>[a(m,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"])]),_:1}),s[53]||(s[53]=e("div",{class:"mbe4"},[e("h2",null,"Radio Button Group"),e("p",{class:"mbs2 mbe3"},"Use fieldset to group related radio button choices")],-1)),a(h,{legend:"Preferred Contact Method",bordered:!0,class:"mbe6"},{default:t(()=>[e("div",Q,[a(u,{name:"contact-method",value:"email","label-text":"Email",checked:i.contactMethod==="email",onChange:s[8]||(s[8]=n=>i.contactMethod="email")},null,8,["checked"]),a(u,{name:"contact-method",value:"phone","label-text":"Phone",checked:i.contactMethod==="phone",onChange:s[9]||(s[9]=n=>i.contactMethod="phone")},null,8,["checked"]),a(u,{name:"contact-method",value:"sms","label-text":"Text Message (SMS)",checked:i.contactMethod==="sms",onChange:s[10]||(s[10]=n=>i.contactMethod="sms")},null,8,["checked"]),a(u,{name:"contact-method",value:"mail","label-text":"Postal Mail",checked:i.contactMethod==="mail",onChange:s[11]||(s[11]=n=>i.contactMethod="mail")},null,8,["checked"])])]),_:1}),s[54]||(s[54]=e("div",{class:"mbe4"},[e("h2",null,"Checkbox Group"),e("p",{class:"mbs2 mbe3"},"Group multiple checkboxes for selecting multiple options")],-1)),a(h,{legend:"Notification Preferences",bordered:!0,class:"mbe6"},{default:t(()=>[e("div",J,[a(r,{name:"notifications",value:"product-updates","label-text":"Product Updates",checked:i.notifications.productUpdates,onChange:s[12]||(s[12]=n=>i.notifications.productUpdates=!i.notifications.productUpdates)},null,8,["checked"]),a(r,{name:"notifications",value:"newsletter","label-text":"Weekly Newsletter",checked:i.notifications.newsletter,onChange:s[13]||(s[13]=n=>i.notifications.newsletter=!i.notifications.newsletter)},null,8,["checked"]),a(r,{name:"notifications",value:"special-offers","label-text":"Special Offers & Promotions",checked:i.notifications.specialOffers,onChange:s[14]||(s[14]=n=>i.notifications.specialOffers=!i.notifications.specialOffers)},null,8,["checked"]),a(r,{name:"notifications",value:"security-alerts","label-text":"Security Alerts",checked:i.notifications.securityAlerts,onChange:s[15]||(s[15]=n=>i.notifications.securityAlerts=!i.notifications.securityAlerts)},null,8,["checked"])])]),_:1}),s[55]||(s[55]=e("div",{class:"mbe4"},[e("h2",null,"Horizontal Layout"),e("p",{class:"mbs2 mbe3"},"Arrange form controls horizontally with flexible wrapping")],-1)),a(h,{legend:"Date of Birth",bordered:!0,layout:"horizontal",class:"mbe6"},{default:t(()=>[a(l,{value:i.dateOfBirth.month,"onUpdate:value":s[16]||(s[16]=n=>i.dateOfBirth.month=n),label:"Month",placeholder:"MM",size:"small",style:{width:"80px"}},null,8,["value"]),a(l,{value:i.dateOfBirth.day,"onUpdate:value":s[17]||(s[17]=n=>i.dateOfBirth.day=n),label:"Day",placeholder:"DD",size:"small",style:{width:"80px"}},null,8,["value"]),a(l,{value:i.dateOfBirth.year,"onUpdate:value":s[18]||(s[18]=n=>i.dateOfBirth.year=n),label:"Year",placeholder:"YYYY",size:"small",style:{width:"100px"}},null,8,["value"])]),_:1}),s[56]||(s[56]=e("div",{class:"mbe4"},[e("h2",null,"Visually Hidden Legend"),e("p",{class:"mbs2 mbe3"},"Hide legend visually while keeping it accessible to screen readers")],-1)),a(h,{legend:"Search Options",bordered:!0,"legend-hidden":!0,class:"mbe6"},{default:t(()=>[a(l,{value:i.search.query,"onUpdate:value":s[19]||(s[19]=n=>i.search.query=n),label:"Search Query",placeholder:"Enter search terms...",class:"mbe3"},{"addon-left":t(()=>[a(b,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),e("div",_,[a(r,{name:"search-options",value:"case-sensitive","label-text":"Case Sensitive",size:"small",checked:i.search.caseSensitive,onChange:s[20]||(s[20]=n=>i.search.caseSensitive=!i.search.caseSensitive)},null,8,["checked"]),a(r,{name:"search-options",value:"whole-words","label-text":"Match Whole Words Only",size:"small",checked:i.search.wholeWords,onChange:s[21]||(s[21]=n=>i.search.wholeWords=!i.search.wholeWords)},null,8,["checked"])])]),_:1}),s[57]||(s[57]=e("div",{class:"mbe4"},[e("h2",null,"Nested Fieldsets"),e("p",{class:"mbs2 mbe3"},"Organize complex forms with nested groupings and action buttons")],-1)),e("div",K,[a(h,{legend:"Account Settings",bordered:!0,class:"mbe4"},{default:t(()=>[a(h,{legend:"Profile",class:"mbe4"},{default:t(()=>[a(l,{value:i.account.username,"onUpdate:value":s[22]||(s[22]=n=>i.account.username=n),label:"Username",placeholder:"johndoe",class:"mbe3"},{"addon-left":t(()=>[a(c,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),a(l,{value:i.account.displayName,"onUpdate:value":s[23]||(s[23]=n=>i.account.displayName=n),label:"Display Name",placeholder:"John Doe"},{"addon-left":t(()=>[a(c,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"])]),_:1}),a(h,{legend:"Privacy Settings",class:"mbe4"},{default:t(()=>[e("div",X,[a(r,{name:"privacy",value:"profile-public","label-text":"Make Profile Public",checked:i.account.privacy.profilePublic,onChange:s[24]||(s[24]=n=>i.account.privacy.profilePublic=!i.account.privacy.profilePublic)},null,8,["checked"]),a(r,{name:"privacy",value:"activity-visible","label-text":"Show Activity to Followers",checked:i.account.privacy.activityVisible,onChange:s[25]||(s[25]=n=>i.account.privacy.activityVisible=!i.account.privacy.activityVisible)},null,8,["checked"]),a(r,{name:"privacy",value:"searchable","label-text":"Allow Search Engines to Index Profile",checked:i.account.privacy.searchable,onChange:s[26]||(s[26]=n=>i.account.privacy.searchable=!i.account.privacy.searchable)},null,8,["checked"])])]),_:1}),a(h,{legend:"Danger Zone",class:"mbe4"},{default:t(()=>[s[40]||(s[40]=e("p",{style:{color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-bottom":"var(--ag-space-3)"}}," Permanently delete your account and all associated data. This action cannot be undone. ",-1)),a(o,{bordered:!0,variant:"danger",shape:"rounded",size:"sm"},{default:t(()=>[...s[39]||(s[39]=[p(" Delete Account ",-1)])]),_:1})]),_:1})]),_:1}),e("div",ss,[a(o,{bordered:!0,shape:"rounded"},{default:t(()=>[...s[41]||(s[41]=[p(" Cancel ",-1)])]),_:1}),e("div",is,[a(o,{bordered:!0,shape:"rounded",class:"monochrome-button"},{default:t(()=>[...s[42]||(s[42]=[p(" Reset to Default ",-1)])]),_:1}),a(o,{shape:"rounded",class:"monochrome-button-filled"},{default:t(()=>[...s[43]||(s[43]=[p(" Save Changes ",-1)])]),_:1})])])]),s[58]||(s[58]=e("div",{class:"mbe4"},[e("h2",null,"Complete Checkout Form"),e("p",{class:"mbs2 mbe3"},"Realistic payment form with validation and action buttons")],-1)),e("div",as,[a(h,{legend:"Payment Information",bordered:!0,class:"mbe4"},{default:t(()=>[a(l,{value:i.payment.cardNumber,"onUpdate:value":s[27]||(s[27]=n=>i.payment.cardNumber=n),label:"Card Number",placeholder:"1234 5678 9012 3456",required:!0,invalid:!!i.paymentErrors.cardNumber,"error-message":i.paymentErrors.cardNumber,onBlur:g.validateCardNumber,class:"mbe3"},{"addon-left":t(()=>[a(D,{size:18,color:i.paymentErrors.cardNumber?"var(--ag-error)":"var(--ag-secondary)"},null,8,["color"])]),_:1},8,["value","invalid","error-message","onBlur"]),e("div",ns,[a(l,{value:i.payment.expiry,"onUpdate:value":s[28]||(s[28]=n=>i.payment.expiry=n),label:"Expiry Date",placeholder:"MM/YY",required:!0,invalid:!!i.paymentErrors.expiry,"error-message":i.paymentErrors.expiry,onBlur:g.validateExpiry},{"addon-left":t(()=>[a(q,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value","invalid","error-message","onBlur"]),a(l,{value:i.payment.cvv,"onUpdate:value":s[29]||(s[29]=n=>i.payment.cvv=n),label:"CVV",type:"password",placeholder:"123",required:!0,invalid:!!i.paymentErrors.cvv,"error-message":i.paymentErrors.cvv,onBlur:g.validateCVV},null,8,["value","invalid","error-message","onBlur"])]),a(l,{value:i.payment.nameOnCard,"onUpdate:value":s[30]||(s[30]=n=>i.payment.nameOnCard=n),label:"Name on Card",placeholder:"John Doe",required:!0,invalid:!!i.paymentErrors.nameOnCard,"error-message":i.paymentErrors.nameOnCard,onBlur:g.validateNameOnCard,class:"mbe3"},{"addon-left":t(()=>[a(c,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value","invalid","error-message","onBlur"]),a(l,{value:i.payment.billingZip,"onUpdate:value":s[31]||(s[31]=n=>i.payment.billingZip=n),label:"Billing ZIP Code",placeholder:"94102",required:!0},{"addon-left":t(()=>[a(m,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"])]),_:1}),e("div",es,[a(o,{bordered:!0,shape:"rounded"},{default:t(()=>[...s[44]||(s[44]=[p(" ← Back to Cart ",-1)])]),_:1}),a(o,{variant:"primary",shape:"rounded"},{default:t(()=>[...s[45]||(s[45]=[p(" Complete Purchase ",-1)])]),_:1})])]),s[59]||(s[59]=e("div",{class:"mbe4"},[e("h2",null,"Compact Forms with Small Components"),e("p",{class:"mbs2 mbe3"},"Create compact UIs with small inputs, buttons, and fieldsets")],-1)),e("div",ts,[e("div",null,[a(h,{legend:"Quick Filter",bordered:!0,class:"mbe3"},{default:t(()=>[a(l,{value:i.sizes.smallName,"onUpdate:value":s[32]||(s[32]=n=>i.sizes.smallName=n),label:"Search",size:"small",placeholder:"Type to search...",class:"mbe2"},{"addon-left":t(()=>[a(b,{size:16,color:"var(--ag-secondary)"})]),_:1},8,["value"]),e("div",ls,[a(r,{name:"small-filter",value:"active","label-text":"Active only",size:"small"}),a(r,{name:"small-filter",value:"recent","label-text":"Recent",size:"small",checked:!0})])]),_:1}),e("div",hs,[a(o,{bordered:!0,size:"sm",shape:"rounded"},{default:t(()=>[...s[46]||(s[46]=[p(" Clear ",-1)])]),_:1}),a(o,{size:"sm",shape:"rounded"},{default:t(()=>[...s[47]||(s[47]=[p(" Apply ",-1)])]),_:1})])]),e("div",null,[a(h,{legend:"Email Preferences",bordered:!0,class:"mbe3"},{default:t(()=>[a(l,{value:i.sizes.defaultName,"onUpdate:value":s[33]||(s[33]=n=>i.sizes.defaultName=n),label:"Email Address",placeholder:"you@example.com",class:"mbe3"},{"addon-left":t(()=>[a(C,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),a(r,{name:"default-agree",value:"agree","label-text":"Send me product updates"})]),_:1}),e("div",ps,[a(o,{bordered:!0,shape:"rounded"},{default:t(()=>[...s[48]||(s[48]=[p(" Unsubscribe ",-1)])]),_:1}),a(o,{variant:"success",shape:"rounded"},{default:t(()=>[...s[49]||(s[49]=[p(" Subscribe ",-1)])]),_:1})])]),e("div",null,[a(h,{legend:"Confirmation",bordered:!0,class:"mbe3"},{default:t(()=>[a(l,{value:i.sizes.largeName,"onUpdate:value":s[34]||(s[34]=n=>i.sizes.largeName=n),label:"Full Name",size:"default",placeholder:"Enter your name",class:"mbe3"},{"addon-left":t(()=>[a(c,{size:18,color:"var(--ag-secondary)"})]),_:1},8,["value"]),a(r,{name:"large-agree",value:"agree","label-text":"I understand and agree to the terms",size:"medium"})]),_:1}),a(o,{size:"md",shape:"rounded",class:"monochrome-button-filled"},{default:t(()=>[...s[50]||(s[50]=[p(" Confirm & Continue ",-1)])]),_:1})])]),s[60]||(s[60]=e("div",{class:"mbe4"},[e("h2",null,"CSS Shadow Parts Customization"),e("p",{class:"mbs2 mbe3"},[p(" Use CSS Shadow Parts to customize the component's appearance: "),e("code",null,"::part(ag-fieldset)"),p(", "),e("code",null,"::part(ag-legend)"),p(", "),e("code",null,"::part(ag-content)")])],-1)),e("div",rs,[a(h,{legend:"Minimal Accent Border",bordered:!0,class:"custom-fieldset-1 mbe4"},{default:t(()=>[a(l,{value:i.custom.field1,"onUpdate:value":s[35]||(s[35]=n=>i.custom.field1=n),label:"Email Address",type:"email",placeholder:"you@company.com",class:"mbe3"},null,8,["value"]),a(l,{value:i.custom.field2,"onUpdate:value":s[36]||(s[36]=n=>i.custom.field2=n),label:"Department",placeholder:"Engineering"},null,8,["value"])]),_:1}),a(h,{legend:"Subtle Card Style",bordered:!0,class:"custom-fieldset-2"},{default:t(()=>[a(l,{value:i.custom.field3,"onUpdate:value":s[37]||(s[37]=n=>i.custom.field3=n),label:"Project Name",placeholder:"Q4 Marketing Campaign",class:"mbe3"},null,8,["value"]),a(l,{value:i.custom.field4,"onUpdate:value":s[38]||(s[38]=n=>i.custom.field4=n),label:"Budget",placeholder:"$50,000"},null,8,["value"])]),_:1})])])}const ds=M(H,[["render",ks],["__scopeId","data-v-7f6ccda6"]]);class os extends L{constructor(){super(),this.personalInfo={firstName:"",lastName:"",email:"",phone:""},this.address={street:"",city:"",zip:"",country:""},this.contactMethod="email",this.notifications={productUpdates:!0,newsletter:!1,specialOffers:!0,securityAlerts:!0},this.dateOfBirth={month:"",day:"",year:""},this.search={query:"",caseSensitive:!1,wholeWords:!1},this.account={username:"",displayName:"",privacy:{profilePublic:!0,activityVisible:!0,searchable:!1}},this.payment={cardNumber:"",expiry:"",cvv:"",nameOnCard:"",billingZip:""},this.paymentErrors={cardNumber:"",expiry:"",cvv:"",nameOnCard:""},this.sizes={smallName:"",defaultName:"",largeName:""},this.custom={field1:"",field2:"",field3:"",field4:""}}createRenderRoot(){return this}validateCardNumber(){const s=this.payment.cardNumber.replace(/\s/g,"");s&&s.length<13?this.paymentErrors.cardNumber="Card number must be at least 13 digits":this.paymentErrors.cardNumber="",this.requestUpdate()}validateExpiry(){const s=/^(0[1-9]|1[0-2])\/\d{2}$/;this.payment.expiry&&!s.test(this.payment.expiry)?this.paymentErrors.expiry="Format must be MM/YY":this.paymentErrors.expiry="",this.requestUpdate()}validateCVV(){this.payment.cvv&&(this.payment.cvv.length<3||this.payment.cvv.length>4)?this.paymentErrors.cvv="CVV must be 3 or 4 digits":this.paymentErrors.cvv="",this.requestUpdate()}validateNameOnCard(){this.payment.nameOnCard&&this.payment.nameOnCard.length<2?this.paymentErrors.nameOnCard="Please enter the name on your card":this.paymentErrors.nameOnCard="",this.requestUpdate()}render(){return W`
      <style>
        /* Custom Fieldset 1 - Minimal with accent border */
        .custom-fieldset-1::part(ag-fieldset) {
          border-left: 3px solid var(--ag-primary);
          border-top: var(--ag-border-width-1) solid var(--ag-border);
          border-right: var(--ag-border-width-1) solid var(--ag-border);
          border-bottom: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-md);
          padding: var(--ag-space-5);
        }

        .custom-fieldset-1::part(ag-legend) {
          font-weight: 600;
          color: var(--ag-text-primary);
        }

        /* Custom Fieldset 2 - Subtle card with shadow */
        .custom-fieldset-2::part(ag-fieldset) {
          border: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-lg);
          padding: var(--ag-space-5);
          background: var(--ag-background-secondary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .custom-fieldset-2::part(ag-legend) {
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* Monochrome button styling using CSS parts */
        .monochrome-button::part(ag-button) {
          background: transparent;
          color: var(--ag-text-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button::part(ag-button):hover {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
        }

        .monochrome-button-filled::part(ag-button) {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button-filled::part(ag-button):hover {
          background: var(--ag-text-secondary);
          border-color: var(--ag-text-secondary);
        }
      </style>
      <section>
        <div class="mbe4">
          <h2>Basic Fieldset</h2>
          <p class="mbs2 mbe3">Group related form controls with a descriptive legend</p>
        </div>
        <ag-fieldset
          legend="Personal Information"
          class="mbe6"
        >
          <ag-input
            .value=${this.personalInfo.firstName}
            @input=${s=>{this.personalInfo.firstName=s.target.value,this.requestUpdate()}}
            label="First Name"
            placeholder="John"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=${this.personalInfo.lastName}
            @input=${s=>{this.personalInfo.lastName=s.target.value,this.requestUpdate()}}
            label="Last Name"
            placeholder="Doe"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=${this.personalInfo.email}
            @input=${s=>{this.personalInfo.email=s.target.value,this.requestUpdate()}}
            label="Email"
            type="email"
            placeholder="john.doe@example.com"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=${this.personalInfo.phone}
            @input=${s=>{this.personalInfo.phone=s.target.value,this.requestUpdate()}}
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </ag-icon>
          </ag-input>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Bordered Fieldset</h2>
          <p class="mbs2 mbe3">Add visual borders and padding for better content grouping</p>
        </div>
        <ag-fieldset
          legend="Shipping Address"
          bordered
          class="mbe6"
        >
          <ag-input
            .value=${this.address.street}
            @input=${s=>{this.address.street=s.target.value,this.requestUpdate()}}
            label="Street Address"
            placeholder="123 Main St"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </ag-icon>
          </ag-input>
          <div
            class="mbe3"
            style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--ag-space-3);"
          >
            <ag-input
              .value=${this.address.city}
              @input=${s=>{this.address.city=s.target.value,this.requestUpdate()}}
              label="City"
              placeholder="San Francisco"
            >
              <ag-icon slot="addon-left" size="18">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                  <path d="M9 22v-4h6v4"/>
                  <path d="M8 6h.01"/>
                  <path d="M16 6h.01"/>
                  <path d="M12 6h.01"/>
                  <path d="M12 10h.01"/>
                  <path d="M12 14h.01"/>
                  <path d="M16 10h.01"/>
                  <path d="M16 14h.01"/>
                  <path d="M8 10h.01"/>
                  <path d="M8 14h.01"/>
                </svg>
              </ag-icon>
            </ag-input>
            <ag-input
              .value=${this.address.zip}
              @input=${s=>{this.address.zip=s.target.value,this.requestUpdate()}}
              label="ZIP Code"
              placeholder="94102"
            />
          </div>
          <ag-input
            .value=${this.address.country}
            @input=${s=>{this.address.country=s.target.value,this.requestUpdate()}}
            label="Country"
            placeholder="United States"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </ag-icon>
          </ag-input>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Radio Button Group</h2>
          <p class="mbs2 mbe3">Use fieldset to group related radio button choices</p>
        </div>
        <ag-fieldset
          legend="Preferred Contact Method"
          bordered
          class="mbe6"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <ag-radio
              name="contact-method"
              value="email"
              label-text="Email"
              ?checked=${this.contactMethod==="email"}
              @change=${()=>{this.contactMethod="email",this.requestUpdate()}}
            />
            <ag-radio
              name="contact-method"
              value="phone"
              label-text="Phone"
              ?checked=${this.contactMethod==="phone"}
              @change=${()=>{this.contactMethod="phone",this.requestUpdate()}}
            />
            <ag-radio
              name="contact-method"
              value="sms"
              label-text="Text Message (SMS)"
              ?checked=${this.contactMethod==="sms"}
              @change=${()=>{this.contactMethod="sms",this.requestUpdate()}}
            />
            <ag-radio
              name="contact-method"
              value="mail"
              label-text="Postal Mail"
              ?checked=${this.contactMethod==="mail"}
              @change=${()=>{this.contactMethod="mail",this.requestUpdate()}}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Checkbox Group</h2>
          <p class="mbs2 mbe3">Group multiple checkboxes for selecting multiple options</p>
        </div>
        <ag-fieldset
          legend="Notification Preferences"
          bordered
          class="mbe6"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <ag-checkbox
              name="notifications"
              value="product-updates"
              label-text="Product Updates"
              ?checked=${this.notifications.productUpdates}
              @change=${()=>{this.notifications.productUpdates=!this.notifications.productUpdates,this.requestUpdate()}}
            />
            <ag-checkbox
              name="notifications"
              value="newsletter"
              label-text="Weekly Newsletter"
              ?checked=${this.notifications.newsletter}
              @change=${()=>{this.notifications.newsletter=!this.notifications.newsletter,this.requestUpdate()}}
            />
            <ag-checkbox
              name="notifications"
              value="special-offers"
              label-text="Special Offers & Promotions"
              ?checked=${this.notifications.specialOffers}
              @change=${()=>{this.notifications.specialOffers=!this.notifications.specialOffers,this.requestUpdate()}}
            />
            <ag-checkbox
              name="notifications"
              value="security-alerts"
              label-text="Security Alerts"
              ?checked=${this.notifications.securityAlerts}
              @change=${()=>{this.notifications.securityAlerts=!this.notifications.securityAlerts,this.requestUpdate()}}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Horizontal Layout</h2>
          <p class="mbs2 mbe3">Arrange form controls horizontally with flexible wrapping</p>
        </div>
        <ag-fieldset
          legend="Date of Birth"
          bordered
          layout="horizontal"
          class="mbe6"
        >
          <ag-input
            .value=${this.dateOfBirth.month}
            @input=${s=>{this.dateOfBirth.month=s.target.value,this.requestUpdate()}}
            label="Month"
            placeholder="MM"
            size="small"
            style="width: 80px;"
          />
          <ag-input
            .value=${this.dateOfBirth.day}
            @input=${s=>{this.dateOfBirth.day=s.target.value,this.requestUpdate()}}
            label="Day"
            placeholder="DD"
            size="small"
            style="width: 80px;"
          />
          <ag-input
            .value=${this.dateOfBirth.year}
            @input=${s=>{this.dateOfBirth.year=s.target.value,this.requestUpdate()}}
            label="Year"
            placeholder="YYYY"
            size="small"
            style="width: 100px;"
          />
        </ag-fieldset>

        <div class="mbe4">
          <h2>Visually Hidden Legend</h2>
          <p class="mbs2 mbe3">Hide legend visually while keeping it accessible to screen readers</p>
        </div>
        <ag-fieldset
          legend="Search Options"
          bordered
          legend-hidden
          class="mbe6"
        >
          <ag-input
            .value=${this.search.query}
            @input=${s=>{this.search.query=s.target.value,this.requestUpdate()}}
            label="Search Query"
            placeholder="Enter search terms..."
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
          </ag-input>
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-2);">
            <ag-checkbox
              name="search-options"
              value="case-sensitive"
              label-text="Case Sensitive"
              size="small"
              ?checked=${this.search.caseSensitive}
              @change=${()=>{this.search.caseSensitive=!this.search.caseSensitive,this.requestUpdate()}}
            />
            <ag-checkbox
              name="search-options"
              value="whole-words"
              label-text="Match Whole Words Only"
              size="small"
              ?checked=${this.search.wholeWords}
              @change=${()=>{this.search.wholeWords=!this.search.wholeWords,this.requestUpdate()}}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance:
            <code>::part(ag-fieldset)</code>,
            <code>::part(ag-legend)</code>,
            <code>::part(ag-content)</code>
          </p>
        </div>
        <div class="mbe6">
          <ag-fieldset
            legend="Minimal Accent Border"
            bordered
            class="custom-fieldset-1 mbe4"
          >
            <ag-input
              .value=${this.custom.field1}
              @input=${s=>{this.custom.field1=s.target.value,this.requestUpdate()}}
              label="Email Address"
              type="email"
              placeholder="you@company.com"
              class="mbe3"
            />
            <ag-input
              .value=${this.custom.field2}
              @input=${s=>{this.custom.field2=s.target.value,this.requestUpdate()}}
              label="Department"
              placeholder="Engineering"
            />
          </ag-fieldset>

          <ag-fieldset
            legend="Subtle Card Style"
            bordered
            class="custom-fieldset-2"
          >
            <ag-input
              .value=${this.custom.field3}
              @input=${s=>{this.custom.field3=s.target.value,this.requestUpdate()}}
              label="Project Name"
              placeholder="Q4 Marketing Campaign"
              class="mbe3"
            />
            <ag-input
              .value=${this.custom.field4}
              @input=${s=>{this.custom.field4=s.target.value,this.requestUpdate()}}
              label="Budget"
              placeholder="$50,000"
            />
          </ag-fieldset>
        </div>
      </section>
    `}}customElements.define("fieldset-lit-examples",os);const Fs=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Fieldset</h2>
      <p class="mbs2 mbe3">Group related form controls with a descriptive legend</p>
    </div>
    <VueFieldset
      legend="Personal Information"
      class="mbe6"
    >
      <VueInput
        v-model:value="personalInfo.firstName"
        label="First Name"
        placeholder="John"
        class="mbe3"
      >
        <template #addon-left>
          <User
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <VueInput
        v-model:value="personalInfo.lastName"
        label="Last Name"
        placeholder="Doe"
        class="mbe3"
      >
        <template #addon-left>
          <User
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <VueInput
        v-model:value="personalInfo.email"
        label="Email"
        type="email"
        placeholder="john.doe@example.com"
        class="mbe3"
      >
        <template #addon-left>
          <Mail
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <VueInput
        v-model:value="personalInfo.phone"
        label="Phone Number"
        type="tel"
        placeholder="(555) 123-4567"
      >
        <template #addon-left>
          <Phone
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
    </VueFieldset>

    <div class="mbe4">
      <h2>Bordered Fieldset</h2>
      <p class="mbs2 mbe3">Add visual borders and padding for better content grouping</p>
    </div>
    <VueFieldset
      legend="Shipping Address"
      :bordered="true"
      class="mbe6"
    >
      <VueInput
        v-model:value="address.street"
        label="Street Address"
        placeholder="123 Main St"
        class="mbe3"
      >
        <template #addon-left>
          <MapPin
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <div
        class="mbe3"
        style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--ag-space-3);"
      >
        <VueInput
          v-model:value="address.city"
          label="City"
          placeholder="San Francisco"
        >
          <template #addon-left>
            <Building2
              :size="18"
              color="var(--ag-secondary)"
            />
          </template>
        </VueInput>
        <VueInput
          v-model:value="address.zip"
          label="ZIP Code"
          placeholder="94102"
        />
      </div>
      <VueInput
        v-model:value="address.country"
        label="Country"
        placeholder="United States"
      >
        <template #addon-left>
          <MapPin
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
    </VueFieldset>

    <div class="mbe4">
      <h2>Radio Button Group</h2>
      <p class="mbs2 mbe3">Use fieldset to group related radio button choices</p>
    </div>
    <VueFieldset
      legend="Preferred Contact Method"
      :bordered="true"
      class="mbe6"
    >
      <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
        <VueRadio
          name="contact-method"
          value="email"
          label-text="Email"
          :checked="contactMethod === 'email'"
          @change="contactMethod = 'email'"
        />
        <VueRadio
          name="contact-method"
          value="phone"
          label-text="Phone"
          :checked="contactMethod === 'phone'"
          @change="contactMethod = 'phone'"
        />
        <VueRadio
          name="contact-method"
          value="sms"
          label-text="Text Message (SMS)"
          :checked="contactMethod === 'sms'"
          @change="contactMethod = 'sms'"
        />
        <VueRadio
          name="contact-method"
          value="mail"
          label-text="Postal Mail"
          :checked="contactMethod === 'mail'"
          @change="contactMethod = 'mail'"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h2>Checkbox Group</h2>
      <p class="mbs2 mbe3">Group multiple checkboxes for selecting multiple options</p>
    </div>
    <VueFieldset
      legend="Notification Preferences"
      :bordered="true"
      class="mbe6"
    >
      <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
        <VueCheckbox
          name="notifications"
          value="product-updates"
          label-text="Product Updates"
          :checked="notifications.productUpdates"
          @change="notifications.productUpdates = !notifications.productUpdates"
        />
        <VueCheckbox
          name="notifications"
          value="newsletter"
          label-text="Weekly Newsletter"
          :checked="notifications.newsletter"
          @change="notifications.newsletter = !notifications.newsletter"
        />
        <VueCheckbox
          name="notifications"
          value="special-offers"
          label-text="Special Offers & Promotions"
          :checked="notifications.specialOffers"
          @change="notifications.specialOffers = !notifications.specialOffers"
        />
        <VueCheckbox
          name="notifications"
          value="security-alerts"
          label-text="Security Alerts"
          :checked="notifications.securityAlerts"
          @change="notifications.securityAlerts = !notifications.securityAlerts"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h2>Horizontal Layout</h2>
      <p class="mbs2 mbe3">Arrange form controls horizontally with flexible wrapping</p>
    </div>
    <VueFieldset
      legend="Date of Birth"
      :bordered="true"
      layout="horizontal"
      class="mbe6"
    >
      <VueInput
        v-model:value="dateOfBirth.month"
        label="Month"
        placeholder="MM"
        size="small"
        style="width: 80px;"
      />
      <VueInput
        v-model:value="dateOfBirth.day"
        label="Day"
        placeholder="DD"
        size="small"
        style="width: 80px;"
      />
      <VueInput
        v-model:value="dateOfBirth.year"
        label="Year"
        placeholder="YYYY"
        size="small"
        style="width: 100px;"
      />
    </VueFieldset>

    <div class="mbe4">
      <h2>Visually Hidden Legend</h2>
      <p class="mbs2 mbe3">Hide legend visually while keeping it accessible to screen readers</p>
    </div>
    <VueFieldset
      legend="Search Options"
      :bordered="true"
      :legend-hidden="true"
      class="mbe6"
    >
      <VueInput
        v-model:value="search.query"
        label="Search Query"
        placeholder="Enter search terms..."
        class="mbe3"
      >
        <template #addon-left>
          <Search
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <div style="display: flex; flex-direction: column; gap: var(--ag-space-2);">
        <VueCheckbox
          name="search-options"
          value="case-sensitive"
          label-text="Case Sensitive"
          size="small"
          :checked="search.caseSensitive"
          @change="search.caseSensitive = !search.caseSensitive"
        />
        <VueCheckbox
          name="search-options"
          value="whole-words"
          label-text="Match Whole Words Only"
          size="small"
          :checked="search.wholeWords"
          @change="search.wholeWords = !search.wholeWords"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h2>Nested Fieldsets</h2>
      <p class="mbs2 mbe3">Organize complex forms with nested groupings and action buttons</p>
    </div>
    <div class="mbe6">
      <VueFieldset
        legend="Account Settings"
        :bordered="true"
        class="mbe4"
      >
        <VueFieldset
          legend="Profile"
          class="mbe4"
        >
          <VueInput
            v-model:value="account.username"
            label="Username"
            placeholder="johndoe"
            class="mbe3"
          >
            <template #addon-left>
              <User
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueInput
            v-model:value="account.displayName"
            label="Display Name"
            placeholder="John Doe"
          >
            <template #addon-left>
              <User
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
        </VueFieldset>

        <VueFieldset
          legend="Privacy Settings"
          class="mbe4"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <VueCheckbox
              name="privacy"
              value="profile-public"
              label-text="Make Profile Public"
              :checked="account.privacy.profilePublic"
              @change="account.privacy.profilePublic = !account.privacy.profilePublic"
            />
            <VueCheckbox
              name="privacy"
              value="activity-visible"
              label-text="Show Activity to Followers"
              :checked="account.privacy.activityVisible"
              @change="account.privacy.activityVisible = !account.privacy.activityVisible"
            />
            <VueCheckbox
              name="privacy"
              value="searchable"
              label-text="Allow Search Engines to Index Profile"
              :checked="account.privacy.searchable"
              @change="account.privacy.searchable = !account.privacy.searchable"
            />
          </div>
        </VueFieldset>

        <VueFieldset
          legend="Danger Zone"
          class="mbe4"
        >
          <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-bottom: var(--ag-space-3);">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          <VueButton
            :bordered="true"
            variant="danger"
            shape="rounded"
            size="sm"
          >
            Delete Account
          </VueButton>
        </VueFieldset>
      </VueFieldset>

      <div style="display: flex; gap: var(--ag-space-3); justify-content: space-between;">
        <VueButton
          :bordered="true"
          shape="rounded"
        >
          Cancel
        </VueButton>
        <div style="display: flex; gap: var(--ag-space-3);">
          <VueButton
            :bordered="true"
            shape="rounded"
            class="monochrome-button"
          >
            Reset to Default
          </VueButton>
          <VueButton
            shape="rounded"
            class="monochrome-button-filled"
          >
            Save Changes
          </VueButton>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Complete Checkout Form</h2>
      <p class="mbs2 mbe3">Realistic payment form with validation and action buttons</p>
    </div>
    <div class="mbe6">
      <VueFieldset
        legend="Payment Information"
        :bordered="true"
        class="mbe4"
      >
        <VueInput
          v-model:value="payment.cardNumber"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          :required="true"
          :invalid="!!paymentErrors.cardNumber"
          :error-message="paymentErrors.cardNumber"
          @blur="validateCardNumber"
          class="mbe3"
        >
          <template #addon-left>
            <CreditCard
              :size="18"
              :color="paymentErrors.cardNumber ? 'var(--ag-error)' : 'var(--ag-secondary)'"
            />
          </template>
        </VueInput>
        <div
          class="mbe3"
          style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--ag-space-3);"
        >
          <VueInput
            v-model:value="payment.expiry"
            label="Expiry Date"
            placeholder="MM/YY"
            :required="true"
            :invalid="!!paymentErrors.expiry"
            :error-message="paymentErrors.expiry"
            @blur="validateExpiry"
          >
            <template #addon-left>
              <Calendar
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueInput
            v-model:value="payment.cvv"
            label="CVV"
            type="password"
            placeholder="123"
            :required="true"
            :invalid="!!paymentErrors.cvv"
            :error-message="paymentErrors.cvv"
            @blur="validateCVV"
          />
        </div>
        <VueInput
          v-model:value="payment.nameOnCard"
          label="Name on Card"
          placeholder="John Doe"
          :required="true"
          :invalid="!!paymentErrors.nameOnCard"
          :error-message="paymentErrors.nameOnCard"
          @blur="validateNameOnCard"
          class="mbe3"
        >
          <template #addon-left>
            <User
              :size="18"
              color="var(--ag-secondary)"
            />
          </template>
        </VueInput>
        <VueInput
          v-model:value="payment.billingZip"
          label="Billing ZIP Code"
          placeholder="94102"
          :required="true"
        >
          <template #addon-left>
            <MapPin
              :size="18"
              color="var(--ag-secondary)"
            />
          </template>
        </VueInput>
      </VueFieldset>

      <div style="display: flex; gap: var(--ag-space-3); justify-content: flex-end;">
        <VueButton
          :bordered="true"
          shape="rounded"
        >
          ← Back to Cart
        </VueButton>
        <VueButton
          variant="primary"
          shape="rounded"
        >
          Complete Purchase
        </VueButton>
      </div>
    </div>

    <div class="mbe4">
      <h2>Compact Forms with Small Components</h2>
      <p class="mbs2 mbe3">Create compact UIs with small inputs, buttons, and fieldsets</p>
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <div>
        <VueFieldset
          legend="Quick Filter"
          :bordered="true"
          class="mbe3"
        >
          <VueInput
            v-model:value="sizes.smallName"
            label="Search"
            size="small"
            placeholder="Type to search..."
            class="mbe2"
          >
            <template #addon-left>
              <Search
                :size="16"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-2);">
            <VueCheckbox
              name="small-filter"
              value="active"
              label-text="Active only"
              size="small"
            />
            <VueCheckbox
              name="small-filter"
              value="recent"
              label-text="Recent"
              size="small"
              :checked="true"
            />
          </div>
        </VueFieldset>
        <div style="display: flex; gap: var(--ag-space-2); justify-content: flex-end;">
          <VueButton
            :bordered="true"
            size="sm"
            shape="rounded"
          >
            Clear
          </VueButton>
          <VueButton
            size="sm"
            shape="rounded"
          >
            Apply
          </VueButton>
        </div>
      </div>

      <div>
        <VueFieldset
          legend="Email Preferences"
          :bordered="true"
          class="mbe3"
        >
          <VueInput
            v-model:value="sizes.defaultName"
            label="Email Address"
            placeholder="you@example.com"
            class="mbe3"
          >
            <template #addon-left>
              <Mail
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueCheckbox
            name="default-agree"
            value="agree"
            label-text="Send me product updates"
          />
        </VueFieldset>
        <div style="display: flex; gap: var(--ag-space-2); justify-content: flex-end;">
          <VueButton
            :bordered="true"
            shape="rounded"
          >
            Unsubscribe
          </VueButton>
          <VueButton
            variant="success"
            shape="rounded"
          >
            Subscribe
          </VueButton>
        </div>
      </div>

      <div>
        <VueFieldset
          legend="Confirmation"
          :bordered="true"
          class="mbe3"
        >
          <VueInput
            v-model:value="sizes.largeName"
            label="Full Name"
            size="default"
            placeholder="Enter your name"
            class="mbe3"
          >
            <template #addon-left>
              <User
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueCheckbox
            name="large-agree"
            value="agree"
            label-text="I understand and agree to the terms"
            size="medium"
          />
        </VueFieldset>
        <VueButton
          size="md"
          shape="rounded"
          class="monochrome-button-filled"
        >
          Confirm & Continue
        </VueButton>
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance:
        <code>::part(ag-fieldset)</code>,
        <code>::part(ag-legend)</code>,
        <code>::part(ag-content)</code>
      </p>
    </div>
    <div class="mbe6">
      <VueFieldset
        legend="Minimal Accent Border"
        :bordered="true"
        class="custom-fieldset-1 mbe4"
      >
        <VueInput
          v-model:value="custom.field1"
          label="Email Address"
          type="email"
          placeholder="you@company.com"
          class="mbe3"
        />
        <VueInput
          v-model:value="custom.field2"
          label="Department"
          placeholder="Engineering"
        />
      </VueFieldset>

      <VueFieldset
        legend="Subtle Card Style"
        :bordered="true"
        class="custom-fieldset-2"
      >
        <VueInput
          v-model:value="custom.field3"
          label="Project Name"
          placeholder="Q4 Marketing Campaign"
          class="mbe3"
        />
        <VueInput
          v-model:value="custom.field4"
          label="Budget"
          placeholder="$50,000"
        />
      </VueFieldset>
    </div>
  </section>
</template>

<script>
import { VueFieldset } from "agnosticui-core/fieldset/vue";
import VueInput from "agnosticui-core/input/vue";
import { VueRadio } from "agnosticui-core/radio/vue";
import { VueCheckbox } from "agnosticui-core/checkbox/vue";
import VueButton from "agnosticui-core/button/vue";
import {
  Search,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  Calendar,
} from "lucide-vue-next";

export default {
  name: "FieldsetExamples",
  components: {
    VueFieldset,
    VueInput,
    VueRadio,
    VueCheckbox,
    VueButton,
    Search,
    CreditCard,
    Mail,
    Phone,
    MapPin,
    User,
    Building2,
    Calendar,
  },
  data() {
    return {
      // Personal Information
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },

      // Shipping Address
      address: {
        street: "",
        city: "",
        zip: "",
        country: "",
      },

      // Contact Method
      contactMethod: "email",

      // Notifications
      notifications: {
        productUpdates: true,
        newsletter: false,
        specialOffers: true,
        securityAlerts: true,
      },

      // Date of Birth
      dateOfBirth: {
        month: "",
        day: "",
        year: "",
      },

      // Search
      search: {
        query: "",
        caseSensitive: false,
        wholeWords: false,
      },

      // Account Settings
      account: {
        username: "",
        displayName: "",
        privacy: {
          profilePublic: true,
          activityVisible: true,
          searchable: false,
        },
      },

      // Payment Information
      payment: {
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: "",
        billingZip: "",
      },
      paymentErrors: {
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: "",
      },

      // Sizes
      sizes: {
        smallName: "",
        defaultName: "",
        largeName: "",
      },

      // Custom
      custom: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
      },
    };
  },
  methods: {
    validateCardNumber() {
      // Simple validation - just check length (real validation would be more complex)
      const cleaned = this.payment.cardNumber.replace(/\\s/g, "");
      if (cleaned && cleaned.length < 13) {
        this.paymentErrors.cardNumber =
          "Card number must be at least 13 digits";
      } else {
        this.paymentErrors.cardNumber = "";
      }
    },
    validateExpiry() {
      // Simple MM/YY validation
      const expiryPattern = /^(0[1-9]|1[0-2])\\/\\d{2}$/;
      if (this.payment.expiry && !expiryPattern.test(this.payment.expiry)) {
        this.paymentErrors.expiry = "Format must be MM/YY";
      } else {
        this.paymentErrors.expiry = "";
      }
    },
    validateCVV() {
      if (
        this.payment.cvv &&
        (this.payment.cvv.length < 3 || this.payment.cvv.length > 4)
      ) {
        this.paymentErrors.cvv = "CVV must be 3 or 4 digits";
      } else {
        this.paymentErrors.cvv = "";
      }
    },
    validateNameOnCard() {
      if (this.payment.nameOnCard && this.payment.nameOnCard.length < 2) {
        this.paymentErrors.nameOnCard = "Please enter the name on your card";
      } else {
        this.paymentErrors.nameOnCard = "";
      }
    },
  },
};
<\/script>

<style scoped>
/* Custom Fieldset 1 - Minimal with accent border */
.custom-fieldset-1::part(ag-fieldset) {
  border-left: 3px solid var(--ag-primary);
  border-top: var(--ag-border-width-1) solid var(--ag-border);
  border-right: var(--ag-border-width-1) solid var(--ag-border);
  border-bottom: var(--ag-border-width-1) solid var(--ag-border);
  border-radius: var(--ag-radius-md);
  padding: var(--ag-space-5);
}

.custom-fieldset-1::part(ag-legend) {
  font-weight: 600;
  color: var(--ag-text-primary);
}

/* Custom Fieldset 2 - Subtle card with shadow */
.custom-fieldset-2::part(ag-fieldset) {
  border: var(--ag-border-width-1) solid var(--ag-border);
  border-radius: var(--ag-radius-lg);
  padding: var(--ag-space-5);
  background: var(--ag-background-secondary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.custom-fieldset-2::part(ag-legend) {
  font-weight: 600;
  font-size: 1.125rem;
}

/* Monochrome button styling using CSS parts */
.monochrome-button::part(ag-button) {
  background: transparent;
  color: var(--ag-text-primary);
  border: 2px solid var(--ag-text-primary);
}

.monochrome-button::part(ag-button):hover {
  background: var(--ag-text-primary);
  color: var(--ag-background-primary);
}

.monochrome-button-filled::part(ag-button) {
  background: var(--ag-text-primary);
  color: var(--ag-background-primary);
  border: 2px solid var(--ag-text-primary);
}

.monochrome-button-filled::part(ag-button):hover {
  background: var(--ag-text-secondary);
  border-color: var(--ag-text-secondary);
}
</style>
`,cs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/fieldset';
import 'agnosticui-core/input';
import 'agnosticui-core/radio';
import 'agnosticui-core/checkbox';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';

export class FieldsetLitExamples extends LitElement {
  constructor() {
    super();
    // Personal Information
    this.personalInfo = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    // Shipping Address
    this.address = {
      street: '',
      city: '',
      zip: '',
      country: '',
    };
    // Contact Method
    this.contactMethod = 'email';
    // Notifications
    this.notifications = {
      productUpdates: true,
      newsletter: false,
      specialOffers: true,
      securityAlerts: true,
    };
    // Date of Birth
    this.dateOfBirth = {
      month: '',
      day: '',
      year: '',
    };
    // Search
    this.search = {
      query: '',
      caseSensitive: false,
      wholeWords: false,
    };
    // Account Settings
    this.account = {
      username: '',
      displayName: '',
      privacy: {
        profilePublic: true,
        activityVisible: true,
        searchable: false,
      },
    };
    // Payment Information
    this.payment = {
      cardNumber: '',
      expiry: '',
      cvv: '',
      nameOnCard: '',
      billingZip: '',
    };
    this.paymentErrors = {
      cardNumber: '',
      expiry: '',
      cvv: '',
      nameOnCard: '',
    };
    // Sizes
    this.sizes = {
      smallName: '',
      defaultName: '',
      largeName: '',
    };
    // Custom
    this.custom = {
      field1: '',
      field2: '',
      field3: '',
      field4: '',
    };
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  validateCardNumber() {
    const cleaned = this.payment.cardNumber.replace(/\\s/g, '');
    if (cleaned && cleaned.length < 13) {
      this.paymentErrors.cardNumber = 'Card number must be at least 13 digits';
    } else {
      this.paymentErrors.cardNumber = '';
    }
    this.requestUpdate();
  }

  validateExpiry() {
    const expiryPattern = /^(0[1-9]|1[0-2])\\/\\d{2}$/;
    if (this.payment.expiry && !expiryPattern.test(this.payment.expiry)) {
      this.paymentErrors.expiry = 'Format must be MM/YY';
    } else {
      this.paymentErrors.expiry = '';
    }
    this.requestUpdate();
  }

  validateCVV() {
    if (this.payment.cvv && (this.payment.cvv.length < 3 || this.payment.cvv.length > 4)) {
      this.paymentErrors.cvv = 'CVV must be 3 or 4 digits';
    } else {
      this.paymentErrors.cvv = '';
    }
    this.requestUpdate();
  }

  validateNameOnCard() {
    if (this.payment.nameOnCard && this.payment.nameOnCard.length < 2) {
      this.paymentErrors.nameOnCard = 'Please enter the name on your card';
    } else {
      this.paymentErrors.nameOnCard = '';
    }
    this.requestUpdate();
  }

  render() {
    return html\`
      <style>
        /* Custom Fieldset 1 - Minimal with accent border */
        .custom-fieldset-1::part(ag-fieldset) {
          border-left: 3px solid var(--ag-primary);
          border-top: var(--ag-border-width-1) solid var(--ag-border);
          border-right: var(--ag-border-width-1) solid var(--ag-border);
          border-bottom: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-md);
          padding: var(--ag-space-5);
        }

        .custom-fieldset-1::part(ag-legend) {
          font-weight: 600;
          color: var(--ag-text-primary);
        }

        /* Custom Fieldset 2 - Subtle card with shadow */
        .custom-fieldset-2::part(ag-fieldset) {
          border: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-lg);
          padding: var(--ag-space-5);
          background: var(--ag-background-secondary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .custom-fieldset-2::part(ag-legend) {
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* Monochrome button styling using CSS parts */
        .monochrome-button::part(ag-button) {
          background: transparent;
          color: var(--ag-text-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button::part(ag-button):hover {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
        }

        .monochrome-button-filled::part(ag-button) {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button-filled::part(ag-button):hover {
          background: var(--ag-text-secondary);
          border-color: var(--ag-text-secondary);
        }
      </style>
      <section>
        <div class="mbe4">
          <h2>Basic Fieldset</h2>
          <p class="mbs2 mbe3">Group related form controls with a descriptive legend</p>
        </div>
        <ag-fieldset
          legend="Personal Information"
          class="mbe6"
        >
          <ag-input
            .value=\${this.personalInfo.firstName}
            @input=\${(e) => { this.personalInfo.firstName = e.target.value; this.requestUpdate(); }}
            label="First Name"
            placeholder="John"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=\${this.personalInfo.lastName}
            @input=\${(e) => { this.personalInfo.lastName = e.target.value; this.requestUpdate(); }}
            label="Last Name"
            placeholder="Doe"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=\${this.personalInfo.email}
            @input=\${(e) => { this.personalInfo.email = e.target.value; this.requestUpdate(); }}
            label="Email"
            type="email"
            placeholder="john.doe@example.com"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=\${this.personalInfo.phone}
            @input=\${(e) => { this.personalInfo.phone = e.target.value; this.requestUpdate(); }}
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </ag-icon>
          </ag-input>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Bordered Fieldset</h2>
          <p class="mbs2 mbe3">Add visual borders and padding for better content grouping</p>
        </div>
        <ag-fieldset
          legend="Shipping Address"
          bordered
          class="mbe6"
        >
          <ag-input
            .value=\${this.address.street}
            @input=\${(e) => { this.address.street = e.target.value; this.requestUpdate(); }}
            label="Street Address"
            placeholder="123 Main St"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </ag-icon>
          </ag-input>
          <div
            class="mbe3"
            style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--ag-space-3);"
          >
            <ag-input
              .value=\${this.address.city}
              @input=\${(e) => { this.address.city = e.target.value; this.requestUpdate(); }}
              label="City"
              placeholder="San Francisco"
            >
              <ag-icon slot="addon-left" size="18">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                  <path d="M9 22v-4h6v4"/>
                  <path d="M8 6h.01"/>
                  <path d="M16 6h.01"/>
                  <path d="M12 6h.01"/>
                  <path d="M12 10h.01"/>
                  <path d="M12 14h.01"/>
                  <path d="M16 10h.01"/>
                  <path d="M16 14h.01"/>
                  <path d="M8 10h.01"/>
                  <path d="M8 14h.01"/>
                </svg>
              </ag-icon>
            </ag-input>
            <ag-input
              .value=\${this.address.zip}
              @input=\${(e) => { this.address.zip = e.target.value; this.requestUpdate(); }}
              label="ZIP Code"
              placeholder="94102"
            />
          </div>
          <ag-input
            .value=\${this.address.country}
            @input=\${(e) => { this.address.country = e.target.value; this.requestUpdate(); }}
            label="Country"
            placeholder="United States"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </ag-icon>
          </ag-input>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Radio Button Group</h2>
          <p class="mbs2 mbe3">Use fieldset to group related radio button choices</p>
        </div>
        <ag-fieldset
          legend="Preferred Contact Method"
          bordered
          class="mbe6"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <ag-radio
              name="contact-method"
              value="email"
              label-text="Email"
              ?checked=\${this.contactMethod === 'email'}
              @change=\${() => { this.contactMethod = 'email'; this.requestUpdate(); }}
            />
            <ag-radio
              name="contact-method"
              value="phone"
              label-text="Phone"
              ?checked=\${this.contactMethod === 'phone'}
              @change=\${() => { this.contactMethod = 'phone'; this.requestUpdate(); }}
            />
            <ag-radio
              name="contact-method"
              value="sms"
              label-text="Text Message (SMS)"
              ?checked=\${this.contactMethod === 'sms'}
              @change=\${() => { this.contactMethod = 'sms'; this.requestUpdate(); }}
            />
            <ag-radio
              name="contact-method"
              value="mail"
              label-text="Postal Mail"
              ?checked=\${this.contactMethod === 'mail'}
              @change=\${() => { this.contactMethod = 'mail'; this.requestUpdate(); }}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Checkbox Group</h2>
          <p class="mbs2 mbe3">Group multiple checkboxes for selecting multiple options</p>
        </div>
        <ag-fieldset
          legend="Notification Preferences"
          bordered
          class="mbe6"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <ag-checkbox
              name="notifications"
              value="product-updates"
              label-text="Product Updates"
              ?checked=\${this.notifications.productUpdates}
              @change=\${() => { this.notifications.productUpdates = !this.notifications.productUpdates; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="notifications"
              value="newsletter"
              label-text="Weekly Newsletter"
              ?checked=\${this.notifications.newsletter}
              @change=\${() => { this.notifications.newsletter = !this.notifications.newsletter; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="notifications"
              value="special-offers"
              label-text="Special Offers & Promotions"
              ?checked=\${this.notifications.specialOffers}
              @change=\${() => { this.notifications.specialOffers = !this.notifications.specialOffers; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="notifications"
              value="security-alerts"
              label-text="Security Alerts"
              ?checked=\${this.notifications.securityAlerts}
              @change=\${() => { this.notifications.securityAlerts = !this.notifications.securityAlerts; this.requestUpdate(); }}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Horizontal Layout</h2>
          <p class="mbs2 mbe3">Arrange form controls horizontally with flexible wrapping</p>
        </div>
        <ag-fieldset
          legend="Date of Birth"
          bordered
          layout="horizontal"
          class="mbe6"
        >
          <ag-input
            .value=\${this.dateOfBirth.month}
            @input=\${(e) => { this.dateOfBirth.month = e.target.value; this.requestUpdate(); }}
            label="Month"
            placeholder="MM"
            size="small"
            style="width: 80px;"
          />
          <ag-input
            .value=\${this.dateOfBirth.day}
            @input=\${(e) => { this.dateOfBirth.day = e.target.value; this.requestUpdate(); }}
            label="Day"
            placeholder="DD"
            size="small"
            style="width: 80px;"
          />
          <ag-input
            .value=\${this.dateOfBirth.year}
            @input=\${(e) => { this.dateOfBirth.year = e.target.value; this.requestUpdate(); }}
            label="Year"
            placeholder="YYYY"
            size="small"
            style="width: 100px;"
          />
        </ag-fieldset>

        <div class="mbe4">
          <h2>Visually Hidden Legend</h2>
          <p class="mbs2 mbe3">Hide legend visually while keeping it accessible to screen readers</p>
        </div>
        <ag-fieldset
          legend="Search Options"
          bordered
          legend-hidden
          class="mbe6"
        >
          <ag-input
            .value=\${this.search.query}
            @input=\${(e) => { this.search.query = e.target.value; this.requestUpdate(); }}
            label="Search Query"
            placeholder="Enter search terms..."
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
          </ag-input>
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-2);">
            <ag-checkbox
              name="search-options"
              value="case-sensitive"
              label-text="Case Sensitive"
              size="small"
              ?checked=\${this.search.caseSensitive}
              @change=\${() => { this.search.caseSensitive = !this.search.caseSensitive; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="search-options"
              value="whole-words"
              label-text="Match Whole Words Only"
              size="small"
              ?checked=\${this.search.wholeWords}
              @change=\${() => { this.search.wholeWords = !this.search.wholeWords; this.requestUpdate(); }}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance:
            <code>::part(ag-fieldset)</code>,
            <code>::part(ag-legend)</code>,
            <code>::part(ag-content)</code>
          </p>
        </div>
        <div class="mbe6">
          <ag-fieldset
            legend="Minimal Accent Border"
            bordered
            class="custom-fieldset-1 mbe4"
          >
            <ag-input
              .value=\${this.custom.field1}
              @input=\${(e) => { this.custom.field1 = e.target.value; this.requestUpdate(); }}
              label="Email Address"
              type="email"
              placeholder="you@company.com"
              class="mbe3"
            />
            <ag-input
              .value=\${this.custom.field2}
              @input=\${(e) => { this.custom.field2 = e.target.value; this.requestUpdate(); }}
              label="Department"
              placeholder="Engineering"
            />
          </ag-fieldset>

          <ag-fieldset
            legend="Subtle Card Style"
            bordered
            class="custom-fieldset-2"
          >
            <ag-input
              .value=\${this.custom.field3}
              @input=\${(e) => { this.custom.field3 = e.target.value; this.requestUpdate(); }}
              label="Project Name"
              placeholder="Q4 Marketing Campaign"
              class="mbe3"
            />
            <ag-input
              .value=\${this.custom.field4}
              @input=\${(e) => { this.custom.field4 = e.target.value; this.requestUpdate(); }}
              label="Budget"
              placeholder="$50,000"
            />
          </ag-fieldset>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('fieldset-lit-examples', FieldsetLitExamples);
`,gs=`import { useState } from "react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";
import { ReactInput } from "agnosticui-core/input/react";
import { ReactRadio } from "agnosticui-core/radio/react";
import { ReactCheckbox } from "agnosticui-core/checkbox/react";
import { ReactButton } from "agnosticui-core/button/react";
import {
  Search,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  Calendar,
} from "lucide-react";

export default function FieldsetReactExamples() {
  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Shipping Address
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zip: "",
    country: "",
  });

  // Contact Method
  const [contactMethod, setContactMethod] = useState("email");

  // Notifications
  const [notifications, setNotifications] = useState({
    productUpdates: true,
    newsletter: false,
    specialOffers: true,
    securityAlerts: true,
  });

  // Date of Birth
  const [dateOfBirth, setDateOfBirth] = useState({
    month: "",
    day: "",
    year: "",
  });

  // Search
  const [search, setSearch] = useState({
    query: "",
    caseSensitive: false,
    wholeWords: false,
  });

  // Account Settings
  const [account, setAccount] = useState({
    username: "",
    displayName: "",
    privacy: {
      profilePublic: true,
      activityVisible: true,
      searchable: false,
    },
  });

  // Payment Information
  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
    billingZip: "",
  });

  const [paymentErrors, setPaymentErrors] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  // Sizes
  const [sizes, setSizes] = useState({
    smallName: "",
    defaultName: "",
    largeName: "",
  });

  // Custom
  const [custom, setCustom] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const validateCardNumber = () => {
    const cleaned = payment.cardNumber.replace(/\\s/g, "");
    if (cleaned && cleaned.length < 13) {
      setPaymentErrors((prev) => ({
        ...prev,
        cardNumber: "Card number must be at least 13 digits",
      }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, cardNumber: "" }));
    }
  };

  const validateExpiry = () => {
    const expiryPattern = /^(0[1-9]|1[0-2])\\/\\d{2}$/;
    if (payment.expiry && !expiryPattern.test(payment.expiry)) {
      setPaymentErrors((prev) => ({ ...prev, expiry: "Format must be MM/YY" }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, expiry: "" }));
    }
  };

  const validateCVV = () => {
    if (payment.cvv && (payment.cvv.length < 3 || payment.cvv.length > 4)) {
      setPaymentErrors((prev) => ({ ...prev, cvv: "CVV must be 3 or 4 digits" }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, cvv: "" }));
    }
  };

  const validateNameOnCard = () => {
    if (payment.nameOnCard && payment.nameOnCard.length < 2) {
      setPaymentErrors((prev) => ({
        ...prev,
        nameOnCard: "Please enter the name on your card",
      }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, nameOnCard: "" }));
    }
  };

  return (
    <section>
      <style>{\`
        /* Custom Fieldset 1 - Minimal with accent border */
        .custom-fieldset-1::part(ag-fieldset) {
          border-left: 3px solid var(--ag-primary);
          border-top: var(--ag-border-width-1) solid var(--ag-border);
          border-right: var(--ag-border-width-1) solid var(--ag-border);
          border-bottom: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-md);
          padding: var(--ag-space-5);
        }

        .custom-fieldset-1::part(ag-legend) {
          font-weight: 600;
          color: var(--ag-text-primary);
        }

        /* Custom Fieldset 2 - Subtle card with shadow */
        .custom-fieldset-2::part(ag-fieldset) {
          border: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-lg);
          padding: var(--ag-space-5);
          background: var(--ag-background-secondary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .custom-fieldset-2::part(ag-legend) {
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* Monochrome button styling using CSS parts */
        .monochrome-button::part(ag-button) {
          background: transparent;
          color: var(--ag-text-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button::part(ag-button):hover {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
        }

        .monochrome-button-filled::part(ag-button) {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button-filled::part(ag-button):hover {
          background: var(--ag-text-secondary);
          border-color: var(--ag-text-secondary);
        }
      \`}</style>

      <div className="mbe4">
        <h2>Basic Fieldset</h2>
        <p className="mbs2 mbe3">Group related form controls with a descriptive legend</p>
      </div>
      <ReactFieldset legend="Personal Information" className="mbe6">
        <ReactInput
          value={personalInfo.firstName}
          onInput={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
          label="First Name"
          placeholder="John"
          className="mbe3"
        >
          <User size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <ReactInput
          value={personalInfo.lastName}
          onInput={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
          label="Last Name"
          placeholder="Doe"
          className="mbe3"
        >
          <User size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <ReactInput
          value={personalInfo.email}
          onInput={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
          label="Email"
          type="email"
          placeholder="john.doe@example.com"
          className="mbe3"
        >
          <Mail size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <ReactInput
          value={personalInfo.phone}
          onInput={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
        >
          <Phone size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Bordered Fieldset</h2>
        <p className="mbs2 mbe3">Add visual borders and padding for better content grouping</p>
      </div>
      <ReactFieldset legend="Shipping Address" bordered className="mbe6">
        <ReactInput
          value={address.street}
          onInput={(e) => setAddress({ ...address, street: e.target.value })}
          label="Street Address"
          placeholder="123 Main St"
          className="mbe3"
        >
          <MapPin size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <div
          className="mbe3"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--ag-space-3)" }}
        >
          <ReactInput
            value={address.city}
            onInput={(e) => setAddress({ ...address, city: e.target.value })}
            label="City"
            placeholder="San Francisco"
          >
            <Building2 size={18} color="var(--ag-secondary)" slot="addon-left" />
          </ReactInput>
          <ReactInput
            value={address.zip}
            onInput={(e) => setAddress({ ...address, zip: e.target.value })}
            label="ZIP Code"
            placeholder="94102"
          />
        </div>
        <ReactInput
          value={address.country}
          onInput={(e) => setAddress({ ...address, country: e.target.value })}
          label="Country"
          placeholder="United States"
        >
          <MapPin size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Radio Button Group</h2>
        <p className="mbs2 mbe3">Use fieldset to group related radio button choices</p>
      </div>
      <ReactFieldset legend="Preferred Contact Method" bordered className="mbe6">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ag-space-3)" }}>
          <ReactRadio
            name="contact-method"
            value="email"
            labelText="Email"
            checked={contactMethod === "email"}
            onChange={() => setContactMethod("email")}
          />
          <ReactRadio
            name="contact-method"
            value="phone"
            labelText="Phone"
            checked={contactMethod === "phone"}
            onChange={() => setContactMethod("phone")}
          />
          <ReactRadio
            name="contact-method"
            value="sms"
            labelText="Text Message (SMS)"
            checked={contactMethod === "sms"}
            onChange={() => setContactMethod("sms")}
          />
          <ReactRadio
            name="contact-method"
            value="mail"
            labelText="Postal Mail"
            checked={contactMethod === "mail"}
            onChange={() => setContactMethod("mail")}
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Checkbox Group</h2>
        <p className="mbs2 mbe3">Group multiple checkboxes for selecting multiple options</p>
      </div>
      <ReactFieldset legend="Notification Preferences" bordered className="mbe6">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ag-space-3)" }}>
          <ReactCheckbox
            name="notifications"
            value="product-updates"
            labelText="Product Updates"
            checked={notifications.productUpdates}
            onChange={() =>
              setNotifications({ ...notifications, productUpdates: !notifications.productUpdates })
            }
          />
          <ReactCheckbox
            name="notifications"
            value="newsletter"
            labelText="Weekly Newsletter"
            checked={notifications.newsletter}
            onChange={() =>
              setNotifications({ ...notifications, newsletter: !notifications.newsletter })
            }
          />
          <ReactCheckbox
            name="notifications"
            value="special-offers"
            labelText="Special Offers & Promotions"
            checked={notifications.specialOffers}
            onChange={() =>
              setNotifications({ ...notifications, specialOffers: !notifications.specialOffers })
            }
          />
          <ReactCheckbox
            name="notifications"
            value="security-alerts"
            labelText="Security Alerts"
            checked={notifications.securityAlerts}
            onChange={() =>
              setNotifications({ ...notifications, securityAlerts: !notifications.securityAlerts })
            }
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Horizontal Layout</h2>
        <p className="mbs2 mbe3">Arrange form controls horizontally with flexible wrapping</p>
      </div>
      <ReactFieldset legend="Date of Birth" bordered layout="horizontal" className="mbe6">
        <ReactInput
          value={dateOfBirth.month}
          onInput={(e) => setDateOfBirth({ ...dateOfBirth, month: e.target.value })}
          label="Month"
          placeholder="MM"
          size="small"
          style={{ width: "80px" }}
        />
        <ReactInput
          value={dateOfBirth.day}
          onInput={(e) => setDateOfBirth({ ...dateOfBirth, day: e.target.value })}
          label="Day"
          placeholder="DD"
          size="small"
          style={{ width: "80px" }}
        />
        <ReactInput
          value={dateOfBirth.year}
          onInput={(e) => setDateOfBirth({ ...dateOfBirth, year: e.target.value })}
          label="Year"
          placeholder="YYYY"
          size="small"
          style={{ width: "100px" }}
        />
      </ReactFieldset>

      <div className="mbe4">
        <h2>Visually Hidden Legend</h2>
        <p className="mbs2 mbe3">Hide legend visually while keeping it accessible to screen readers</p>
      </div>
      <ReactFieldset legend="Search Options" bordered legendHidden className="mbe6">
        <ReactInput
          value={search.query}
          onInput={(e) => setSearch({ ...search, query: e.target.value })}
          label="Search Query"
          placeholder="Enter search terms..."
          className="mbe3"
        >
          <Search size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ag-space-2)" }}>
          <ReactCheckbox
            name="search-options"
            value="case-sensitive"
            labelText="Case Sensitive"
            size="small"
            checked={search.caseSensitive}
            onChange={() => setSearch({ ...search, caseSensitive: !search.caseSensitive })}
          />
          <ReactCheckbox
            name="search-options"
            value="whole-words"
            labelText="Match Whole Words Only"
            size="small"
            checked={search.wholeWords}
            onChange={() => setSearch({ ...search, wholeWords: !search.wholeWords })}
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Complete Checkout Form</h2>
        <p className="mbs2 mbe3">Realistic payment form with validation and action buttons</p>
      </div>
      <div className="mbe6">
        <ReactFieldset legend="Payment Information" bordered className="mbe4">
          <ReactInput
            value={payment.cardNumber}
            onInput={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            required
            invalid={!!paymentErrors.cardNumber}
            errorMessage={paymentErrors.cardNumber}
            onBlur={validateCardNumber}
            className="mbe3"
          >
            <CreditCard
              size={18}
              color={paymentErrors.cardNumber ? "var(--ag-error)" : "var(--ag-secondary)"}
              slot="addon-left"
            />
          </ReactInput>
          <div
            className="mbe3"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ag-space-3)" }}
          >
            <ReactInput
              value={payment.expiry}
              onInput={(e) => setPayment({ ...payment, expiry: e.target.value })}
              label="Expiry Date"
              placeholder="MM/YY"
              required
              invalid={!!paymentErrors.expiry}
              errorMessage={paymentErrors.expiry}
              onBlur={validateExpiry}
            >
              <Calendar size={18} color="var(--ag-secondary)" slot="addon-left" />
            </ReactInput>
            <ReactInput
              value={payment.cvv}
              onInput={(e) => setPayment({ ...payment, cvv: e.target.value })}
              label="CVV"
              type="password"
              placeholder="123"
              required
              invalid={!!paymentErrors.cvv}
              errorMessage={paymentErrors.cvv}
              onBlur={validateCVV}
            />
          </div>
          <ReactInput
            value={payment.nameOnCard}
            onInput={(e) => setPayment({ ...payment, nameOnCard: e.target.value })}
            label="Name on Card"
            placeholder="John Doe"
            required
            invalid={!!paymentErrors.nameOnCard}
            errorMessage={paymentErrors.nameOnCard}
            onBlur={validateNameOnCard}
            className="mbe3"
          >
            <User size={18} color="var(--ag-secondary)" slot="addon-left" />
          </ReactInput>
          <ReactInput
            value={payment.billingZip}
            onInput={(e) => setPayment({ ...payment, billingZip: e.target.value })}
            label="Billing ZIP Code"
            placeholder="94102"
            required
          >
            <MapPin size={18} color="var(--ag-secondary)" slot="addon-left" />
          </ReactInput>
        </ReactFieldset>

        <div style={{ display: "flex", gap: "var(--ag-space-3)", justifyContent: "flex-end" }}>
          <ReactButton bordered shape="rounded">
            ← Back to Cart
          </ReactButton>
          <ReactButton variant="primary" shape="rounded">
            Complete Purchase
          </ReactButton>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance:
          <code>::part(ag-fieldset)</code>,
          <code>::part(ag-legend)</code>,
          <code>::part(ag-content)</code>
        </p>
      </div>
      <div className="mbe6">
        <ReactFieldset legend="Minimal Accent Border" bordered className="custom-fieldset-1 mbe4">
          <ReactInput
            value={custom.field1}
            onInput={(e) => setCustom({ ...custom, field1: e.target.value })}
            label="Email Address"
            type="email"
            placeholder="you@company.com"
            className="mbe3"
          />
          <ReactInput
            value={custom.field2}
            onInput={(e) => setCustom({ ...custom, field2: e.target.value })}
            label="Department"
            placeholder="Engineering"
          />
        </ReactFieldset>

        <ReactFieldset legend="Subtle Card Style" bordered className="custom-fieldset-2">
          <ReactInput
            value={custom.field3}
            onInput={(e) => setCustom({ ...custom, field3: e.target.value })}
            label="Project Name"
            placeholder="Q4 Marketing Campaign"
            className="mbe3"
          />
          <ReactInput
            value={custom.field4}
            onInput={(e) => setCustom({ ...custom, field4: e.target.value })}
            label="Budget"
            placeholder="$50,000"
          />
        </ReactFieldset>
      </div>
    </section>
  );
}
`,Rs=JSON.parse('{"title":"Fieldset","description":"","frontmatter":{},"headers":[],"relativePath":"components/fieldset.md","filePath":"components/fieldset.md"}'),us={name:"components/fieldset.md"},Os=Object.assign(us,{setup(F){return(s,d)=>(B(),f("div",null,[d[1]||(d[1]=e("h1",{id:"fieldset",tabindex:"-1"},[p("Fieldset "),e("a",{class:"header-anchor",href:"#fieldset","aria-label":'Permalink to "Fieldset"'},"​")],-1)),a(x),d[2]||(d[2]=e("p",null,"A semantic fieldset component that groups related form controls with an optional legend. Follows WAI-ARIA best practices for accessible form grouping.",-1)),d[3]||(d[3]=e("h2",{id:"examples",tabindex:"-1"},[p("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(Y,{component:"fieldset","vue-code":v(Fs),"lit-code":v(cs),"react-code":v(gs)},{vue:t(()=>[a(ds)]),lit:t(()=>[...d[0]||(d[0]=[e("fieldset-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),d[4]||(d[4]=z("",62))]))}});export{Rs as __pageData,Os as default};
