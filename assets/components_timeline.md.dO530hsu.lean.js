import{A as H}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as S,z as g,a as T,E as z,x as q}from"./chunks/Button.CFkPNK98.js";import{d as M,p as j,c,o as v,r as f,e as B,_ as O,C as d,j as s,G as n,w as a,a as t,N as h,ae as N,k as D}from"./chunks/framework.NAAYCHZu.js";import{m as W}from"./chunks/VueIcon.vue_vue_type_script_setup_true_lang-C2Sky3bU.ZDZQrz2P.js";import{v as U}from"./chunks/VueCard.BQ5uE2ZR.js";import{v as G}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.BFu3fx1f.js";import{v as Y}from"./chunks/VueBadge.vue_vue_type_script_setup_true_lang-DAPP5_-i.DsJaNbQm.js";import{k as K}from"./chunks/VueIconButton.vue_vue_type_script_setup_true_lang-DKCTvvr9.eRmVYD3g.js";import{F as Q}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/Icon.DjToxxjJ.js";import"./chunks/Badge.BOsSM_r3.js";import"./chunks/IconButton.BtJ1Qrre.js";import"./chunks/Spinner.BAWZdYqW.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Badge.BqyNxupE.js";import"./chunks/IconButton.Dwr_J5XX.js";var J=Object.defineProperty,k=(e,i,r,A)=>{for(var p=void 0,m=e.length-1,y;m>=0;m--)(y=e[m])&&(p=y(i,r,p)||p);return p&&J(i,r,p),p};const P=class extends T{constructor(){super(),this.orientation="horizontal",this.variant="",this.compact=!1}updated(i){super.updated(i),(i.has("orientation")||i.has("variant"))&&this._updateChildItems()}_updateChildItems(){var A;const i=(A=this.shadowRoot)==null?void 0:A.querySelector("slot");if(!i)return;const r=i.assignedElements({flatten:!0}).filter(p=>p.tagName.toLowerCase()==="ag-timeline-item");r.forEach((p,m)=>{p.setAttribute("orientation",this.orientation),this.variant&&p.setAttribute("variant",this.variant),p.toggleAttribute("first",m===0),p.toggleAttribute("last",m===r.length-1)})}render(){return q`
      <ul 
        class="timeline-container"
        part="ag-timeline-container"
        role="list"
        aria-label=${this.ariaLabel??z}
      >
        <slot @slotchange=${this._updateChildItems}></slot>
      </ul>
    `}};P.styles=S`
    :host {
      display: block;
    }

    .timeline-container {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      position: relative;
    }

    slot {
      display: contents;
    }

    /* Horizontal orientation (default) */
    :host([orientation="horizontal"]) .timeline-container {
      flex-direction: row;
      align-items: stretch;
    }

    /* Vertical orientation */
    :host([orientation="vertical"]) .timeline-container {
      flex-direction: column;
      align-items: stretch;
    }
  `;let E=P;k([g({type:String,reflect:!0})],E.prototype,"orientation");k([g({type:String,reflect:!0})],E.prototype,"variant");k([g({type:Boolean})],E.prototype,"compact");k([g({type:String,attribute:"aria-label"})],E.prototype,"ariaLabel");const V=class extends T{constructor(){super(),this.orientation="horizontal",this.variant="",this.first=!1,this.last=!1}render(){return q`
      <li class="item-container" part="ag-item-container" role="listitem">
        <div class="connector connector-before" part="ag-connector" aria-hidden="true"></div>
        
        <div class="ag-start" part="ag-start">
          <slot name="ag-start"></slot>
        </div>
        
        <div 
          class="ag-marker" 
          part="ag-marker"
          role=${this.markerAriaLabel?"img":z}
          aria-label=${this.markerAriaLabel??z}
        >
          <slot name="ag-marker"></slot>
        </div>
        
        <div class="ag-end" part="ag-end">
          <slot name="ag-end"></slot>
        </div>
        
        <div class="connector connector-after" part="ag-connector" aria-hidden="true"></div>
      </li>
    `}};V.styles=S`
    :host {
      display: block;
      position: relative;
    }

    :host([orientation="horizontal"]) {
      flex: 1;
    }

    .item-container {
      display: grid;
      position: relative;
      align-items: center;
    }

    /* Horizontal layout - 3x3 grid */
    :host([orientation="horizontal"]) .item-container {
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      grid-template-rows: auto auto auto;
      justify-items: center;
      align-items: center;
    }

    /* Vertical layout - 3x3 grid */
    /* Vertical layout - Flush alignment */
    :host([orientation="vertical"]) .item-container {
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      /* Rows: connector-before (0), marker (auto), connector-after + spacing (minmax ensures minimum gap between items) */
      grid-template-rows: 0 auto minmax(var(--ag-timeline-vertical-spacing, var(--ag-space-4)), 1fr);
      align-items: start;
      justify-items: center;
    }

    /* Start slot positioning */
    .ag-start {
      margin: var(--ag-space-1);
      /* Reset line-height for slotted content */
      line-height: normal;
    }

    :host([orientation="horizontal"]) .ag-start {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      align-self: end;
      justify-self: center;
    }

    :host([orientation="vertical"]) .ag-start {
      grid-column: 1 / 2;
      grid-row: 2 / 4;
      align-self: var(--ag-timeline-start-align, start);
      justify-self: end;
      margin: 0 var(--ag-space-2) 0 0;
    }

    /* Marker slot positioning */
    .ag-marker {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      /* Reset line-height for slotted content */
      line-height: normal;
    }

    /* Ensure consistent sizing for slotted marker content */
    .ag-marker ::slotted(*) {
      box-sizing: border-box;
    }

    /* End slot positioning */
    .ag-end {
      margin: var(--ag-space-1);
      /* Reset line-height for slotted content */
      line-height: normal;
    }

    :host([orientation="horizontal"]) .ag-end {
      grid-column: 1 / 4;
      grid-row: 3 / 4;
      align-self: start;
      justify-self: center;
    }

    :host([orientation="vertical"]) .ag-end {
      grid-column: 3 / 4;
      grid-row: 2 / 4;
      align-self: var(--ag-timeline-end-align, start);
      justify-self: start;
      margin: 0 0 0 var(--ag-space-2);
    }

    /* Connector lines */
    .connector {
      border: none;
      background: var(--ag-timeline-connector-color, var(--ag-border));
      margin: 0;
    }

    .connector-before {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .connector-after {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }

    /* Horizontal connectors */
    :host([orientation="horizontal"]) .connector {
      width: 100%;
      height: var(--ag-timeline-connector-width, 2px);
    }

    :host([orientation="horizontal"][first]) .connector-before {
      border-radius: var(--ag-radius-full) 0 0 var(--ag-radius-full);
    }

    :host([orientation="horizontal"][last]) .connector-after {
      border-radius: 0 var(--ag-radius-full) var(--ag-radius-full) 0;
    }

    /* Vertical connectors */
    :host([orientation="vertical"]) .connector {
      height: 100%;
      width: var(--ag-timeline-connector-width, 2px);
    }

    :host([orientation="vertical"]) .connector-before {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    :host([orientation="vertical"]) .connector-after {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
      z-index: 0;
    }

    :host([orientation="vertical"][first]) .connector-before {
      border-radius: var(--ag-radius-full) var(--ag-radius-full) 0 0;
    }

    :host([orientation="vertical"][last]) .connector-after {
      border-radius: 0 0 var(--ag-radius-full) var(--ag-radius-full);
    }

    /* Hide first connector on first item */
    :host([first]) .connector-before {
      display: none;
    }

    /* Hide last connector on last item */
    :host([last]) .connector-after {
      display: none;
    }

    /* Variant colors */
    :host([variant="primary"]) .connector {
      background: var(--ag-primary);
    }

    :host([variant="success"]) .connector {
      background: var(--ag-success);
    }

    :host([variant="warning"]) .connector {
      background: var(--ag-warning);
    }

    :host([variant="danger"]) .connector {
      background: var(--ag-danger);
    }

    :host([variant="monochrome"]) .connector {
      background: var(--ag-text-muted);
    }
  `;let C=V;k([g({type:String,reflect:!0})],C.prototype,"orientation");k([g({type:String,reflect:!0})],C.prototype,"variant");k([g({type:String,attribute:"marker-aria-label"})],C.prototype,"markerAriaLabel");k([g({type:Boolean,reflect:!0})],C.prototype,"first");k([g({type:Boolean,reflect:!0})],C.prototype,"last");customElements.get("ag-timeline")||customElements.define("ag-timeline",E);customElements.get("ag-timeline-item")||customElements.define("ag-timeline-item",C);const X=["orientation","variant","compact","responsive","aria-label"],Z=M({__name:"Timeline",props:{orientation:{default:"horizontal"},variant:{default:""},compact:{type:Boolean,default:!1},responsive:{type:Boolean,default:!1},ariaLabel:{default:void 0}},setup(e){const i=j();return(r,A)=>(v(),c("ag-timeline",{ref_key:"timelineRef",ref:i,orientation:e.orientation,variant:e.variant,compact:e.compact,responsive:e.responsive,"aria-label":e.ariaLabel},[f(r.$slots,"default")],8,X))}}),_=["marker-aria-label"],ii={key:0,slot:"ag-start"},si={key:1,slot:"ag-marker"},ai={key:2,slot:"ag-end"},ni=M({__name:"TimelineItem",props:{markerAriaLabel:{default:void 0}},setup(e){return(i,r)=>(v(),c("ag-timeline-item",{"marker-aria-label":e.markerAriaLabel},[i.$slots["ag-start"]?(v(),c("span",ii,[f(i.$slots,"ag-start")])):B("",!0),i.$slots["ag-marker"]?(v(),c("span",si,[f(i.$slots,"ag-marker")])):B("",!0),i.$slots["ag-end"]?(v(),c("span",ai,[f(i.$slots,"ag-end")])):B("",!0)],8,_))}}),ti="border: 1px solid var(--ag-border); padding: var(--ag-space-2); border-radius: var(--ag-radius); background-color: var(--ag-background); margin-block-end: var(--ag-space-4);",I="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;",ei=`${I} background: var(--ag-success); color: white;`,li=`${I} background: var(--ag-primary); color: white;`,ri=`${I} background: transparent; border: 1px solid var(--ag-border); color: var(--ag-text-secondary);`,pi=M({name:"TimelineExamples",components:{AgTimeline:Z,AgTimelineItem:ni,AgIcon:W,AgCard:U,VueButton:G,AgBadge:Y,AgIconButton:K},setup(){return{cardStyle:ti,stepMarkerCompleted:ei,stepMarkerCurrent:li,stepMarkerPending:ri}}}),hi={class:"mbe4"},di={class:"mbe4"},gi={class:"mbe4"},ki={class:"mbe4"},oi={class:"mbe4"},Fi={class:"mbe4"},mi={class:"mbe4"},yi={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-block-end":"var(--ag-space-2)"}},ci={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-block-end":"var(--ag-space-2)"}},vi={style:{display:"flex",gap:"var(--ag-space-1)"}},ui={style:{display:"flex","align-items":"center",gap:"var(--ag-space-2)","margin-block-end":"var(--ag-space-2)"}},bi={class:"mbe4"},Ci={style:{display:"flex","justify-content":"space-between","align-items":"start","margin-block-end":"0.75rem"}},Ai={style:{width:"24px",height:"24px","border-radius":"50%",background:"var(--ag-background-primary)",border:"2px solid var(--ag-background-primary-inverted)",display:"flex","align-items":"center","justify-content":"center"}},Ei={style:{display:"flex",gap:"0.5rem","flex-wrap":"wrap"}},fi={style:{display:"flex",gap:"0.5rem"}};function xi(e,i,r,A,p,m){const y=d("AgIcon"),l=d("AgTimelineItem"),o=d("AgTimeline"),u=d("AgBadge"),x=d("VueButton"),b=d("AgCard"),$=d("AgIconButton"),w=d("AgButton"),L=d("AgSpinner");return v(),c("section",null,[i[91]||(i[91]=s("div",{class:"mbe4"},[s("h2",null,"Horizontal Timeline")],-1)),s("div",hi,[n(o,{orientation:"horizontal",responsive:!1},{default:a(()=>[n(l,null,{"ag-start":a(()=>[...i[0]||(i[0]=[t("2023-01-01",-1)])]),"ag-marker":a(()=>[n(y,{type:"success",size:"18"},{default:a(()=>[...i[1]||(i[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 0 24 24",width:"18"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})],-1)])]),_:1})]),"ag-end":a(()=>[...i[2]||(i[2]=[t("Step 1 Completed",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[3]||(i[3]=[t("2023-02-01",-1)])]),"ag-marker":a(()=>[n(y,{type:"info",size:"18"},{default:a(()=>[...i[4]||(i[4]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 0 24 24",width:"18"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)])]),_:1})]),"ag-end":a(()=>[...i[5]||(i[5]=[t("Step 2 In Progress",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[6]||(i[6]=[t("2023-03-01",-1)])]),"ag-marker":a(()=>[n(y,{type:"warning",size:"18"},{default:a(()=>[...i[7]||(i[7]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 0 24 24",width:"18"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{fill:"currentColor",d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})],-1)])]),_:1})]),"ag-end":a(()=>[...i[8]||(i[8]=[t("Step 3 Pending",-1)])]),_:1})]),_:1})]),i[92]||(i[92]=s("div",{class:"mbe4"},[s("h2",null,"Numbered Steps Timeline"),s("p",{style:{color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.5rem"}}," A horizontal stepper using numbered circles to indicate progress. Markers are fully customizable via slots. ")],-1)),s("div",di,[n(o,{orientation:"horizontal",responsive:!1},{default:a(()=>[n(l,null,{"ag-start":a(()=>[...i[9]||(i[9]=[t("Step 1",-1)])]),"ag-marker":a(()=>[s("div",{style:h(e.stepMarkerCompleted)},"1",4)]),"ag-end":a(()=>[...i[10]||(i[10]=[t("Completed",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[11]||(i[11]=[t("Step 2",-1)])]),"ag-marker":a(()=>[s("div",{style:h(e.stepMarkerCurrent)},"2",4)]),"ag-end":a(()=>[...i[12]||(i[12]=[t("Current",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[13]||(i[13]=[t("Step 3",-1)])]),"ag-marker":a(()=>[s("div",{style:h(e.stepMarkerPending)},"3",4)]),"ag-end":a(()=>[...i[14]||(i[14]=[t("Pending",-1)])]),_:1})]),_:1})]),i[93]||(i[93]=s("div",{class:"mbe4"},[s("h2",null,"Vertical Timeline")],-1)),s("div",gi,[n(o,{orientation:"vertical",variant:"primary"},{default:a(()=>[n(l,null,{"ag-start":a(()=>[...i[15]||(i[15]=[t("09:00 AM",-1)])]),"ag-marker":a(()=>[...i[16]||(i[16]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[17]||(i[17]=[s("strong",null,"Breakfast",-1),s("p",null,"Oatmeal and coffee",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[18]||(i[18]=[t("10:00 AM",-1)])]),"ag-marker":a(()=>[...i[19]||(i[19]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[20]||(i[20]=[s("strong",null,"Meeting",-1),s("p",null,"Daily standup",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[21]||(i[21]=[t("11:00 AM",-1)])]),"ag-marker":a(()=>[...i[22]||(i[22]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[23]||(i[23]=[s("strong",null,"Work",-1),s("p",null,"Focus time",-1)])]),_:1})]),_:1})]),i[94]||(i[94]=s("div",{class:"mbe4"},[s("h2",null,"Vertical with Card at End")],-1)),s("div",ki,[n(o,{orientation:"vertical",variant:"primary",style:{"--ag-timeline-end-align":"center"}},{default:a(()=>[n(l,null,{"ag-start":a(()=>[...i[24]||(i[24]=[t("09:00 AM",-1)])]),"ag-marker":a(()=>[...i[25]||(i[25]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[s("div",{style:h(e.cardStyle)},[...i[26]||(i[26]=[s("strong",null,"Breakfast",-1),s("p",{style:{margin:"0"}},"Oatmeal and coffee",-1)])],4)]),_:1}),n(l,null,{"ag-start":a(()=>[...i[27]||(i[27]=[t("10:00 AM",-1)])]),"ag-marker":a(()=>[...i[28]||(i[28]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[s("div",{style:h(e.cardStyle)},[...i[29]||(i[29]=[s("strong",null,"Meeting",-1),s("p",{style:{margin:"0"}},"Daily standup",-1)])],4)]),_:1})]),_:1})]),i[95]||(i[95]=s("div",{class:"mbe4"},[s("h2",null,"Vertical with Card at Start")],-1)),s("div",oi,[n(o,{orientation:"vertical",variant:"primary",style:{"--ag-timeline-start-align":"center"}},{default:a(()=>[n(l,null,{"ag-start":a(()=>[s("div",{style:h(e.cardStyle)},[...i[30]||(i[30]=[s("strong",null,"Breakfast",-1),s("p",{style:{margin:"0"}},"Oatmeal and coffee",-1)])],4)]),"ag-marker":a(()=>[...i[31]||(i[31]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[32]||(i[32]=[t("09:00 AM",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[s("div",{style:h(e.cardStyle)},[...i[33]||(i[33]=[s("strong",null,"Meeting",-1),s("p",{style:{margin:"0"}},"Daily standup",-1)])],4)]),"ag-marker":a(()=>[...i[34]||(i[34]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[35]||(i[35]=[t("10:00 AM",-1)])]),_:1})]),_:1})]),i[96]||(i[96]=s("div",{class:"mbe4"},[s("h2",null,"Vertical Alternating")],-1)),s("div",Fi,[n(o,{orientation:"vertical",variant:"primary",style:{"--ag-timeline-start-align":"center","--ag-timeline-end-align":"center"}},{default:a(()=>[n(l,null,{"ag-start":a(()=>[s("div",{style:h(e.cardStyle)},[...i[36]||(i[36]=[s("strong",null,"Step 1",-1),s("p",{style:{margin:"0"}},"Start with a card",-1)])],4)]),"ag-marker":a(()=>[...i[37]||(i[37]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[38]||(i[38]=[t("09:00 AM",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[39]||(i[39]=[t("10:00 AM",-1)])]),"ag-marker":a(()=>[...i[40]||(i[40]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[s("div",{style:h(e.cardStyle)},[...i[41]||(i[41]=[s("strong",null,"Step 2",-1),s("p",{style:{margin:"0"}},"End has the card",-1)])],4)]),_:1}),n(l,null,{"ag-start":a(()=>[s("div",{style:h(e.cardStyle)},[...i[42]||(i[42]=[s("strong",null,"Step 3",-1),s("p",{style:{margin:"0"}},"Back to start card",-1)])],4)]),"ag-marker":a(()=>[...i[43]||(i[43]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[44]||(i[44]=[t("11:00 AM",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[45]||(i[45]=[t("12:00 PM",-1)])]),"ag-marker":a(()=>[...i[46]||(i[46]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[s("div",{style:h(e.cardStyle)},[...i[47]||(i[47]=[s("strong",null,"Step 4",-1),s("p",{style:{margin:"0"}},"End has the card",-1)])],4)]),_:1})]),_:1})]),i[97]||(i[97]=s("div",{class:"mbe4"},[s("h2",null,"Vertical Rich")],-1)),s("div",mi,[n(o,{orientation:"vertical",variant:"primary",style:{"--ag-timeline-end-align":"center","--ag-timeline-start-align":"center"}},{default:a(()=>[n(l,null,{"ag-start":a(()=>[...i[48]||(i[48]=[t("09:00 AM",-1)])]),"ag-marker":a(()=>[...i[49]||(i[49]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[n(b,{animated:"",rounded:"md"},{default:a(()=>[s("div",yi,[i[51]||(i[51]=s("strong",null,"Project Kickoff",-1)),n(u,{variant:"success"},{default:a(()=>[...i[50]||(i[50]=[t("New",-1)])]),_:1})]),i[53]||(i[53]=s("p",{style:{margin:"0 0 var(--ag-space-2) 0"}},"Initial meeting with the stakeholders to define the project scope.",-1)),n(x,{variant:"primary",shape:"rounded",size:"sm"},{default:a(()=>[...i[52]||(i[52]=[t("View Details",-1)])]),_:1})]),_:1})]),_:1}),n(l,null,{"ag-start":a(()=>[n(b,{animated:"",rounded:"md"},{default:a(()=>[s("div",ci,[i[55]||(i[55]=s("strong",null,"Design Review",-1)),n(u,{variant:"info"},{default:a(()=>[...i[54]||(i[54]=[t("In Progress",-1)])]),_:1})]),i[58]||(i[58]=s("p",{style:{margin:"0 0 var(--ag-space-2) 0"}},"Reviewing the initial mockups with the design team.",-1)),s("div",vi,[n(x,{variant:"primary",shape:"rounded",size:"sm"},{default:a(()=>[...i[56]||(i[56]=[t("Approve",-1)])]),_:1}),n(x,{variant:"primary",shape:"rounded",size:"sm",bordered:""},{default:a(()=>[...i[57]||(i[57]=[t("Reject",-1)])]),_:1})])]),_:1})]),"ag-marker":a(()=>[...i[59]||(i[59]=[s("div",{style:{width:"12px",height:"12px","border-radius":"50%",background:"var(--ag-primary)"}},null,-1)])]),"ag-end":a(()=>[...i[60]||(i[60]=[t("11:00 AM",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[61]||(i[61]=[t("02:00 PM",-1)])]),"ag-marker":a(()=>[n(y,{type:"warning",size:"24"},{default:a(()=>[...i[62]||(i[62]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})],-1)])]),_:1})]),"ag-end":a(()=>[n(b,{animated:"",rounded:"md"},{default:a(()=>[s("div",ui,[i[64]||(i[64]=s("strong",null,"Client Call",-1)),n($,{size:"sm",label:"Call Client"},{default:a(()=>[...i[63]||(i[63]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z"})],-1)])]),_:1})]),i[65]||(i[65]=s("p",{style:{margin:"0"}},"Discuss feedback on the latest release.",-1))]),_:1})]),_:1})]),_:1})]),i[98]||(i[98]=s("div",{class:"mbe4"},[s("h2",null,"Order Tracking Timeline"),s("p",{style:{color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.5rem"}}," A real-world e-commerce order tracking timeline with custom bordered markers and integrated components. ")],-1)),s("div",bi,[n(o,{orientation:"vertical",variant:"monochrome"},{default:a(()=>[n(l,null,{"ag-start":a(()=>[...i[66]||(i[66]=[s("div",{style:{"text-align":"right",color:"var(--ag-background-primary-inverted)","font-weight":"500"}}," Order Placed ",-1),s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.25rem"}}," Mar 15, 2024 10:32 AM ",-1)])]),"ag-marker":a(()=>[...i[67]||(i[67]=[s("div",{style:{width:"24px",height:"24px","border-radius":"50%",background:"var(--ag-background-primary)",border:"2px solid var(--ag-background-primary-inverted)",display:"flex","align-items":"center","justify-content":"center"}},[s("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",fill:"currentColor",style:{color:"var(--ag-background-primary-inverted)"}})])],-1)])]),"ag-end":a(()=>[n(b,{style:{background:"var(--ag-background-primary)","border-color":"var(--ag-background-primary-inverted)","margin-bottom":"var(--ag-space-4)"}},{default:a(()=>[s("div",Ci,[i[69]||(i[69]=s("div",null,[s("div",{style:{color:"var(--ag-background-primary-inverted)","font-weight":"600","margin-block-end":"0.25rem"}},"Order #AG-2024-7821"),s("div",{style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}},"Thank you for your purchase!")],-1)),n(u,{type:"success",style:{"--ag-badge-font-size":"0.75rem"}},{default:a(()=>[...i[68]||(i[68]=[t(" Confirmed ",-1)])]),_:1})]),i[71]||(i[71]=s("div",{style:{color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-end":"0.5rem"}}," Items: 3 • Total: $127.98 ",-1)),n(w,{mode:"secondary",size:"small",style:{width:"100%","--ag-button-bgcolor":"transparent","--ag-button-border-color":"var(--ag-background-primary-inverted)","--ag-button-color":"var(--ag-background-primary-inverted)"}},{default:a(()=>[...i[70]||(i[70]=[t(" View Order Details ",-1)])]),_:1})]),_:1})]),_:1}),n(l,null,{"ag-start":a(()=>[...i[72]||(i[72]=[s("div",{style:{"text-align":"right",color:"var(--ag-background-primary-inverted)","font-weight":"500"}}," Payment Verified ",-1),s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.25rem","margin-block-end":"var(--ag-space-4)"}}," Mar 15, 2024 10:33 AM ",-1)])]),"ag-marker":a(()=>[...i[73]||(i[73]=[s("div",{style:{width:"24px",height:"24px","border-radius":"50%",background:"var(--ag-background-primary)",border:"2px solid var(--ag-background-primary-inverted)",display:"flex","align-items":"center","justify-content":"center"}},[s("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",fill:"currentColor",style:{color:"var(--ag-background-primary-inverted)"}})])],-1)])]),"ag-end":a(()=>[...i[74]||(i[74]=[s("div",{style:{color:"var(--ag-text-secondary)","font-size":"0.9rem","padding-inline-start":"0.5rem"}}," Payment of $127.98 confirmed via ****-4242 ",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[75]||(i[75]=[s("div",{style:{"text-align":"right",color:"var(--ag-background-primary-inverted)","font-weight":"500"}}," Processing ",-1),s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.25rem"}}," Mar 15, 2024 2:15 PM ",-1)])]),"ag-marker":a(()=>[s("div",Ai,[n(L,{size:"small",style:{"--ag-spinner-color":"var(--ag-background-primary-inverted)",width:"14px",height:"14px"}})])]),"ag-end":a(()=>[n(b,{style:{background:"var(--ag-background-primary)","border-color":"var(--ag-background-primary-inverted)","margin-bottom":"var(--ag-space-4)"}},{default:a(()=>[i[79]||(i[79]=s("div",{style:{color:"var(--ag-background-primary-inverted)","font-weight":"500","margin-block-end":"0.5rem"}},"Your order is being prepared",-1)),s("div",Ei,[n(u,{type:"info",style:{"--ag-badge-font-size":"0.75rem"}},{default:a(()=>[...i[76]||(i[76]=[t("Wireless Headphones",-1)])]),_:1}),n(u,{type:"info",style:{"--ag-badge-font-size":"0.75rem"}},{default:a(()=>[...i[77]||(i[77]=[t("USB-C Cable",-1)])]),_:1}),n(u,{type:"info",style:{"--ag-badge-font-size":"0.75rem"}},{default:a(()=>[...i[78]||(i[78]=[t("Phone Case",-1)])]),_:1})])]),_:1})]),_:1}),n(l,null,{"ag-start":a(()=>[...i[80]||(i[80]=[s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-weight":"500"}}," Shipped ",-1),s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.25rem","margin-block-end":"var(--ag-space-4)"}}," Estimated: Mar 16 ",-1)])]),"ag-marker":a(()=>[...i[81]||(i[81]=[s("div",{style:{width:"24px",height:"24px","border-radius":"50%",background:"var(--ag-background-primary)",border:"2px solid var(--ag-border)"}},null,-1)])]),"ag-end":a(()=>[...i[82]||(i[82]=[s("div",{style:{color:"var(--ag-text-secondary)","font-size":"0.9rem","padding-inline-start":"0.5rem","font-style":"italic"}}," Awaiting shipment pickup... ",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[83]||(i[83]=[s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-weight":"500"}}," Out for Delivery ",-1),s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.25rem","margin-block-end":"var(--ag-space-4)"}}," Estimated: Mar 18 ",-1)])]),"ag-marker":a(()=>[...i[84]||(i[84]=[s("div",{style:{width:"24px",height:"24px","border-radius":"50%",background:"var(--ag-background-primary)",border:"2px solid var(--ag-border)"}},null,-1)])]),"ag-end":a(()=>[...i[85]||(i[85]=[s("div",{style:{color:"var(--ag-text-secondary)","font-size":"0.9rem","padding-inline-start":"0.5rem"}}," Your package is on the way ",-1)])]),_:1}),n(l,null,{"ag-start":a(()=>[...i[86]||(i[86]=[s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-weight":"500"}}," Delivered ",-1),s("div",{style:{"text-align":"right",color:"var(--ag-text-secondary)","font-size":"0.875rem","margin-block-start":"0.25rem"}}," Estimated: Mar 19 ",-1)])]),"ag-marker":a(()=>[...i[87]||(i[87]=[s("div",{style:{width:"24px",height:"24px","border-radius":"50%",background:"var(--ag-background-primary)",border:"2px solid var(--ag-border)"}},null,-1)])]),"ag-end":a(()=>[n(b,{style:{background:"var(--ag-background-subtle)","border-color":"var(--ag-border)","margin-bottom":"var(--ag-space-4)"}},{default:a(()=>[i[90]||(i[90]=s("div",{style:{color:"var(--ag-text-secondary)","margin-block-end":"0.5rem"}},"Package will be delivered to your address",-1)),s("div",fi,[n(w,{mode:"secondary",size:"small",isDisabled:"",style:{flex:"1"}},{default:a(()=>[...i[88]||(i[88]=[t(" Track Package ",-1)])]),_:1}),n(w,{mode:"secondary",size:"small",isDisabled:"",style:{flex:"1"}},{default:a(()=>[...i[89]||(i[89]=[t(" Get Help ",-1)])]),_:1})])]),_:1})]),_:1})]),_:1})])])}const wi=O(pi,[["render",xi]]),F=`
  border: 1px solid var(--ag-border);
  padding: var(--ag-space-2);
  border-radius: var(--ag-radius);
  background-color: var(--ag-background);
  margin-block-end: var(--ag-space-4);
`,R="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;",Bi=`${R} background: var(--ag-success); color: white;`,Di=`${R} background: var(--ag-primary); color: white;`,zi=`${R} background: transparent; border: 1px solid var(--ag-border); color: var(--ag-text-secondary);`;class Ti extends T{createRenderRoot(){return this}render(){return q`
      <section>
        <!-- Horizontal Timeline -->
        <div class="mbe4">
          <h2>Horizontal Timeline</h2>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="horizontal" .responsive=${!1}>
            <ag-timeline-item>
              <span slot="ag-start">2023-01-01</span>
              <ag-icon type="success" size="18" slot="ag-marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </ag-icon>
              <span slot="ag-end">Step 1 Completed</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">2023-02-01</span>
              <ag-icon type="info" size="18" slot="ag-marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                  />
                </svg>
              </ag-icon>
              <span slot="ag-end">Step 2 In Progress</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">2023-03-01</span>
              <ag-icon type="warning" size="18" slot="ag-marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                  />
                </svg>
              </ag-icon>
              <span slot="ag-end">Step 3 Pending</span>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Numbered Steps Timeline -->
        <div class="mbe4">
          <h2>Numbered Steps Timeline</h2>
          <p
            style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.5rem;"
          >
            A horizontal stepper using numbered circles to indicate progress. Markers are fully customizable via slots.
          </p>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="horizontal" .responsive=${!1}>
            <ag-timeline-item>
              <span slot="ag-start">Step 1</span>
              <div slot="ag-marker" style="${Bi}">1</div>
              <span slot="ag-end">Completed</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">Step 2</span>
              <div slot="ag-marker" style="${Di}">2</div>
              <span slot="ag-end">Current</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">Step 3</span>
              <div slot="ag-marker" style="${zi}">3</div>
              <span slot="ag-end">Pending</span>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical Timeline -->
        <div class="mbe4">
          <h2>Vertical Timeline</h2>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="vertical" variant="primary">
            <ag-timeline-item>
              <span slot="ag-start">09:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end">
                <strong>Breakfast</strong>
                <p>Oatmeal and coffee</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">10:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end">
                <strong>Meeting</strong>
                <p>Daily standup</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">11:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end">
                <strong>Work</strong>
                <p>Focus time</p>
              </div>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical with Card at End -->
        <div class="mbe4">
          <h2>Vertical with Card at End</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-end-align: center"
          >
            <ag-timeline-item>
              <span slot="ag-start">09:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="${F}">
                <strong>Breakfast</strong>
                <p style="margin: 0">Oatmeal and coffee</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">10:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="${F}">
                <strong>Meeting</strong>
                <p style="margin: 0">Daily standup</p>
              </div>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical with Card at Start -->
        <div class="mbe4">
          <h2>Vertical with Card at Start</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-start-align: center"
          >
            <ag-timeline-item>
              <div slot="ag-start" style="${F}">
                <strong>Breakfast</strong>
                <p style="margin: 0">Oatmeal and coffee</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">09:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start" style="${F}">
                <strong>Meeting</strong>
                <p style="margin: 0">Daily standup</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">10:00 AM</span>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical Alternating -->
        <div class="mbe4">
          <h2>Vertical Alternating</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-start-align: center; --ag-timeline-end-align: center"
          >
            <ag-timeline-item>
              <div slot="ag-start" style="${F}">
                <strong>Step 1</strong>
                <p style="margin: 0">Start with a card</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">09:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">10:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="${F}">
                <strong>Step 2</strong>
                <p style="margin: 0">End has the card</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start" style="${F}">
                <strong>Step 3</strong>
                <p style="margin: 0">Back to start card</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">11:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">12:00 PM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="${F}">
                <strong>Step 4</strong>
                <p style="margin: 0">End has the card</p>
              </div>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical Rich -->
        <div class="mbe4">
          <h2>Vertical Rich</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-end-align: center; --ag-timeline-start-align: center"
          >
            <ag-timeline-item>
              <span slot="ag-start">09:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <ag-card slot="ag-end" animated rounded="md">
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);"
                >
                  <strong>Project Kickoff</strong>
                  <ag-badge variant="success">New</ag-badge>
                </div>
                <p style="margin: 0 0 var(--ag-space-2) 0;">
                  Initial meeting with the stakeholders to define the project
                  scope.
                </p>
                <ag-button variant="primary" shape="rounded" size="sm"
                  >View Details</ag-button
                >
              </ag-card>
            </ag-timeline-item>
            <ag-timeline-item>
              <ag-card slot="ag-start" animated rounded="md">
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);"
                >
                  <strong>Design Review</strong>
                  <ag-badge variant="info">In Progress</ag-badge>
                </div>
                <p style="margin: 0 0 var(--ag-space-2) 0;">
                  Reviewing the initial mockups with the design team.
                </p>
                <div style="display: flex; gap: var(--ag-space-1);">
                  <ag-button variant="primary" shape="rounded" size="sm"
                    >Approve</ag-button
                  >
                  <ag-button variant="primary" shape="rounded" size="sm" bordered
                    >Reject</ag-button
                  >
                </div>
              </ag-card>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">11:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">02:00 PM</span>
              <ag-icon slot="ag-marker" type="warning" size="24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                  />
                </svg>
              </ag-icon>
              <ag-card slot="ag-end" animated rounded="md">
                <div
                  style="display: flex; align-items: center; gap: var(--ag-space-2); margin-block-end: var(--ag-space-2);"
                >
                  <strong>Client Call</strong>
                  <ag-icon-button size="sm" label="Call Client">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z"
                      />
                    </svg>
                  </ag-icon-button>
                </div>
                <p style="margin: 0;">
                  Discuss feedback on the latest release.
                </p>
              </ag-card>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Order Tracking Timeline -->
        <div class="mbe4">
          <h2>Order Tracking Timeline</h2>
          <p
            style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.5rem;"
          >
            A real-world e-commerce order tracking timeline with custom bordered
            markers and integrated components.
          </p>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="vertical" variant="monochrome">
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;"
                >
                  Order Placed
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;"
                >
                  Mar 15, 2024 10:32 AM
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style="color: var(--ag-background-primary-inverted);"
                  />
                </svg>
              </div>
              <ag-card
                slot="ag-end"
                style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);"
              >
                <div
                  style="display: flex; justify-content: space-between; align-items: start; margin-block-end: 0.75rem;"
                >
                  <div>
                    <div
                      style="color: var(--ag-background-primary-inverted); font-weight: 600; margin-block-end: 0.25rem;"
                    >
                      Order #AG-2024-7821
                    </div>
                    <div
                      style="color: var(--ag-text-secondary); font-size: 0.875rem;"
                    >
                      Thank you for your purchase!
                    </div>
                  </div>
                  <ag-badge
                    type="success"
                    style="--ag-badge-font-size: 0.75rem;"
                    >Confirmed</ag-badge
                  >
                </div>
                <div
                  style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-end: 0.5rem;"
                >
                  Items: 3 • Total: $127.98
                </div>
                <ag-button
                  mode="secondary"
                  size="small"
                  style="width: 100%; --ag-button-bgcolor: transparent; --ag-button-border-color: var(--ag-background-primary-inverted); --ag-button-color: var(--ag-background-primary-inverted);"
                  >View Order Details</ag-button
                >
              </ag-card>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;"
                >
                  Payment Verified
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);"
                >
                  Mar 15, 2024 10:33 AM
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style="color: var(--ag-background-primary-inverted);"
                  />
                </svg>
              </div>
              <div
                slot="ag-end"
                style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;"
              >
                Payment of $127.98 confirmed via ****-4242
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;"
                >
                  Processing
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;"
                >
                  Mar 15, 2024 2:15 PM
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;"
              >
                <ag-spinner
                  size="small"
                  style="--ag-spinner-color: var(--ag-background-primary-inverted); width: 14px; height: 14px;"
                ></ag-spinner>
              </div>
              <ag-card
                slot="ag-end"
                style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);"
              >
                <div
                  style="color: var(--ag-background-primary-inverted); font-weight: 500; margin-block-end: 0.5rem;"
                >
                  Your order is being prepared
                </div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <ag-badge type="info" style="--ag-badge-font-size: 0.75rem;"
                    >Wireless Headphones</ag-badge
                  >
                  <ag-badge type="info" style="--ag-badge-font-size: 0.75rem;"
                    >USB-C Cable</ag-badge
                  >
                  <ag-badge type="info" style="--ag-badge-font-size: 0.75rem;"
                    >Phone Case</ag-badge
                  >
                </div>
              </ag-card>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;"
                >
                  Shipped
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);"
                >
                  Estimated: Mar 16
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"
              ></div>
              <div
                slot="ag-end"
                style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem; font-style: italic;"
              >
                Awaiting shipment pickup...
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;"
                >
                  Out for Delivery
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);"
                >
                  Estimated: Mar 18
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"
              ></div>
              <div
                slot="ag-end"
                style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;"
              >
                Your package is on the way
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;"
                >
                  Delivered
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;"
                >
                  Estimated: Mar 19
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"
              ></div>
              <ag-card
                slot="ag-end"
                style="background: var(--ag-background-subtle); border-color: var(--ag-border); margin-bottom: var(--ag-space-4);"
              >
                <div
                  style="color: var(--ag-text-secondary); margin-block-end: 0.5rem;"
                >
                  Package will be delivered to your address
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <ag-button
                    mode="secondary"
                    size="small"
                    .isDisabled=${!0}
                    style="flex: 1;"
                    >Track Package</ag-button
                  >
                  <ag-button
                    mode="secondary"
                    size="small"
                    .isDisabled=${!0}
                    style="flex: 1;"
                    >Get Help</ag-button
                  >
                </div>
              </ag-card>
            </ag-timeline-item>
          </ag-timeline>
        </div>
      </section>
    `}}customElements.define("timeline-lit-examples",Ti);const qi=`<template>
  <section>
    <!-- Horizontal Timeline -->
    <div class="mbe4">
      <h2>Horizontal Timeline</h2>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="horizontal"
        :responsive="false"
      >
        <AgTimelineItem>
          <template #ag-start>2023-01-01</template>
          <template #ag-marker>
            <AgIcon
              type="success"
              size="18"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 1 Completed</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-02-01</template>
          <template #ag-marker>
            <AgIcon
              type="info"
              size="18"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                />
              </svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 2 In Progress</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-03-01</template>
          <template #ag-marker>
            <AgIcon
              type="warning"
              size="18"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path
                  fill="currentColor"
                  d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                />
              </svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 3 Pending</template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Numbered Steps Timeline -->
    <div class="mbe4">
      <h2>Numbered Steps Timeline</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.5rem;">
        A horizontal stepper using numbered circles to indicate progress. Markers are fully customizable via slots.
      </p>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="horizontal"
        :responsive="false"
      >
        <AgTimelineItem>
          <template #ag-start>Step 1</template>
          <template #ag-marker>
            <div :style="stepMarkerCompleted">1</div>
          </template>
          <template #ag-end>Completed</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>Step 2</template>
          <template #ag-marker>
            <div :style="stepMarkerCurrent">2</div>
          </template>
          <template #ag-end>Current</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>Step 3</template>
          <template #ag-marker>
            <div :style="stepMarkerPending">3</div>
          </template>
          <template #ag-end>Pending</template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical Timeline -->
    <div class="mbe4">
      <h2>Vertical Timeline</h2>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
      >
        <AgTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Breakfast</strong>
            <p>Oatmeal and coffee</p>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Meeting</strong>
            <p>Daily standup</p>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>11:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Work</strong>
            <p>Focus time</p>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical with Card at End -->
    <div class="mbe4">
      <h2>Vertical with Card at End</h2>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
        style="--ag-timeline-end-align: center"
      >
        <AgTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Breakfast</strong>
              <p style="margin: 0">Oatmeal and coffee</p>
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Meeting</strong>
              <p style="margin: 0">Daily standup</p>
            </div>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical with Card at Start -->
    <div class="mbe4">
      <h2>Vertical with Card at Start</h2>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
        style="--ag-timeline-start-align: center"
      >
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Breakfast</strong>
              <p style="margin: 0">Oatmeal and coffee</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>09:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Meeting</strong>
              <p style="margin: 0">Daily standup</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>10:00 AM</template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical Alternating -->
    <div class="mbe4">
      <h2>Vertical Alternating</h2>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
        style="--ag-timeline-start-align: center; --ag-timeline-end-align: center"
      >
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Step 1</strong>
              <p style="margin: 0">Start with a card</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>09:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Step 2</strong>
              <p style="margin: 0">End has the card</p>
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Step 3</strong>
              <p style="margin: 0">Back to start card</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>11:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>12:00 PM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Step 4</strong>
              <p style="margin: 0">End has the card</p>
            </div>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical Rich -->
    <div class="mbe4">
      <h2>Vertical Rich</h2>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
        style="--ag-timeline-end-align: center; --ag-timeline-start-align: center"
      >
        <AgTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <AgCard
              animated
              rounded="md"
            >
              <div style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);">
                <strong>Project Kickoff</strong>
                <AgBadge variant="success">New</AgBadge>
              </div>
              <p style="margin: 0 0 var(--ag-space-2) 0;">Initial meeting with the stakeholders to define the project scope.</p>
              <VueButton
                variant="primary"
                shape="rounded"
                size="sm"
              >View Details</VueButton>
            </AgCard>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <AgCard
              animated
              rounded="md"
            >
              <div style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);">
                <strong>Design Review</strong>
                <AgBadge variant="info">In Progress</AgBadge>
              </div>
              <p style="margin: 0 0 var(--ag-space-2) 0;">Reviewing the initial mockups with the design team.</p>
              <div style="display: flex; gap: var(--ag-space-1);">
                <VueButton
                  variant="primary"
                  shape="rounded"
                  size="sm"
                >Approve</VueButton>
                <VueButton
                  variant="primary"
                  shape="rounded"
                  size="sm"
                  bordered
                >Reject</VueButton>
              </div>
            </AgCard>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>11:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>02:00 PM</template>
          <template #ag-marker>
            <AgIcon
              type="warning"
              size="24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
            </AgIcon>
          </template>
          <template #ag-end>
            <AgCard
              animated
              rounded="md"
            >
              <div style="display: flex; align-items: center; gap: var(--ag-space-2); margin-block-end: var(--ag-space-2);">
                <strong>Client Call</strong>
                <AgIconButton
                  size="sm"
                  label="Call Client"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                    />
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z" />
                  </svg>
                </AgIconButton>
              </div>
              <p style="margin: 0;">Discuss feedback on the latest release.</p>
            </AgCard>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Order Tracking Timeline -->
    <div class="mbe4">
      <h2>Order Tracking Timeline</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.5rem;">
        A real-world e-commerce order tracking timeline with custom bordered markers and integrated components.
      </p>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="monochrome"
      >
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;">
              Order Placed
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;">
              Mar 15, 2024 10:32 AM
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  fill="currentColor"
                  style="color: var(--ag-background-primary-inverted);"
                />
              </svg>
            </div>
          </template>
          <template #ag-end>
            <AgCard style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-block-end: 0.75rem;">
                <div>
                  <div style="color: var(--ag-background-primary-inverted); font-weight: 600; margin-block-end: 0.25rem;">Order #AG-2024-7821</div>
                  <div style="color: var(--ag-text-secondary); font-size: 0.875rem;">Thank you for your purchase!</div>
                </div>
                <AgBadge
                  type="success"
                  style="--ag-badge-font-size: 0.75rem;"
                >
                  Confirmed
                </AgBadge>
              </div>
              <div style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-end: 0.5rem;">
                Items: 3 • Total: $127.98
              </div>
              <AgButton
                mode="secondary"
                size="small"
                style="width: 100%; --ag-button-bgcolor: transparent; --ag-button-border-color: var(--ag-background-primary-inverted); --ag-button-color: var(--ag-background-primary-inverted);"
              >
                View Order Details
              </AgButton>
            </AgCard>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;">
              Payment Verified
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);">
              Mar 15, 2024 10:33 AM
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  fill="currentColor"
                  style="color: var(--ag-background-primary-inverted);"
                />
              </svg>
            </div>
          </template>
          <template #ag-end>
            <div style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;">
              Payment of $127.98 confirmed via ****-4242
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;">
              Processing
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;">
              Mar 15, 2024 2:15 PM
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;">
              <AgSpinner
                size="small"
                style="--ag-spinner-color: var(--ag-background-primary-inverted); width: 14px; height: 14px;"
              ></AgSpinner>
            </div>
          </template>
          <template #ag-end>
            <AgCard style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);">
              <div style="color: var(--ag-background-primary-inverted); font-weight: 500; margin-block-end: 0.5rem;">Your order is being prepared</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <AgBadge
                  type="info"
                  style="--ag-badge-font-size: 0.75rem;"
                >Wireless Headphones</AgBadge>
                <AgBadge
                  type="info"
                  style="--ag-badge-font-size: 0.75rem;"
                >USB-C Cable</AgBadge>
                <AgBadge
                  type="info"
                  style="--ag-badge-font-size: 0.75rem;"
                >Phone Case</AgBadge>
              </div>
            </AgCard>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;">
              Shipped
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);">
              Estimated: Mar 16
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"></div>
          </template>
          <template #ag-end>
            <div style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem; font-style: italic;">
              Awaiting shipment pickup...
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;">
              Out for Delivery
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);">
              Estimated: Mar 18
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"></div>
          </template>
          <template #ag-end>
            <div style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;">
              Your package is on the way
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;">
              Delivered
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;">
              Estimated: Mar 19
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"></div>
          </template>
          <template #ag-end>
            <AgCard style="background: var(--ag-background-subtle); border-color: var(--ag-border); margin-bottom: var(--ag-space-4);">
              <div style="color: var(--ag-text-secondary); margin-block-end: 0.5rem;">Package will be delivered to your address</div>
              <div style="display: flex; gap: 0.5rem;">
                <AgButton
                  mode="secondary"
                  size="small"
                  isDisabled
                  style="flex: 1;"
                >
                  Track Package
                </AgButton>
                <AgButton
                  mode="secondary"
                  size="small"
                  isDisabled
                  style="flex: 1;"
                >
                  Get Help
                </AgButton>
              </div>
            </AgCard>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  VueTimeline as AgTimeline,
  VueTimelineItem as AgTimelineItem,
} from "agnosticui-core/timeline/vue";
import { VueIcon as AgIcon } from "agnosticui-core/icon/vue";
import { VueCard as AgCard } from "agnosticui-core/card/vue";
import VueButton from "agnosticui-core/button/vue";
import { VueBadge as AgBadge } from "agnosticui-core/badge/vue";
import { VueIconButton as AgIconButton } from "agnosticui-core/icon-button/vue";

const cardStyle =
  "border: 1px solid var(--ag-border); padding: var(--ag-space-2); border-radius: var(--ag-radius); background-color: var(--ag-background); margin-block-end: var(--ag-space-4);";

const stepMarkerBase = "width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;";
const stepMarkerCompleted = \`\${stepMarkerBase} background: var(--ag-success); color: white;\`;
const stepMarkerCurrent = \`\${stepMarkerBase} background: var(--ag-primary); color: white;\`;
const stepMarkerPending = \`\${stepMarkerBase} background: transparent; border: 1px solid var(--ag-border); color: var(--ag-text-secondary);\`;

export default defineComponent({
  name: "TimelineExamples",
  components: {
    AgTimeline,
    AgTimelineItem,
    AgIcon,
    AgCard,
    VueButton,
    AgBadge,
    AgIconButton,
  },
  setup() {
    return {
      cardStyle,
      stepMarkerCompleted,
      stepMarkerCurrent,
      stepMarkerPending,
    };
  },
});
<\/script>
`,Mi=`import { LitElement, html } from "lit";
import "agnosticui-core/timeline";
import "agnosticui-core/icon";
import "agnosticui-core/card";
import "agnosticui-core/button";
import "agnosticui-core/badge";
import "agnosticui-core/icon-button";
import "agnosticui-core/spinner";

const cardStyle = \`
  border: 1px solid var(--ag-border);
  padding: var(--ag-space-2);
  border-radius: var(--ag-radius);
  background-color: var(--ag-background);
  margin-block-end: var(--ag-space-4);
\`;

const stepMarkerBase = "width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;";
const stepMarkerCompleted = \`\${stepMarkerBase} background: var(--ag-success); color: white;\`;
const stepMarkerCurrent = \`\${stepMarkerBase} background: var(--ag-primary); color: white;\`;
const stepMarkerPending = \`\${stepMarkerBase} background: transparent; border: 1px solid var(--ag-border); color: var(--ag-text-secondary);\`;

class TimelineLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <!-- Horizontal Timeline -->
        <div class="mbe4">
          <h2>Horizontal Timeline</h2>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="horizontal" .responsive=\${false}>
            <ag-timeline-item>
              <span slot="ag-start">2023-01-01</span>
              <ag-icon type="success" size="18" slot="ag-marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </ag-icon>
              <span slot="ag-end">Step 1 Completed</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">2023-02-01</span>
              <ag-icon type="info" size="18" slot="ag-marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                  />
                </svg>
              </ag-icon>
              <span slot="ag-end">Step 2 In Progress</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">2023-03-01</span>
              <ag-icon type="warning" size="18" slot="ag-marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                  />
                </svg>
              </ag-icon>
              <span slot="ag-end">Step 3 Pending</span>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Numbered Steps Timeline -->
        <div class="mbe4">
          <h2>Numbered Steps Timeline</h2>
          <p
            style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.5rem;"
          >
            A horizontal stepper using numbered circles to indicate progress. Markers are fully customizable via slots.
          </p>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="horizontal" .responsive=\${false}>
            <ag-timeline-item>
              <span slot="ag-start">Step 1</span>
              <div slot="ag-marker" style="\${stepMarkerCompleted}">1</div>
              <span slot="ag-end">Completed</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">Step 2</span>
              <div slot="ag-marker" style="\${stepMarkerCurrent}">2</div>
              <span slot="ag-end">Current</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">Step 3</span>
              <div slot="ag-marker" style="\${stepMarkerPending}">3</div>
              <span slot="ag-end">Pending</span>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical Timeline -->
        <div class="mbe4">
          <h2>Vertical Timeline</h2>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="vertical" variant="primary">
            <ag-timeline-item>
              <span slot="ag-start">09:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end">
                <strong>Breakfast</strong>
                <p>Oatmeal and coffee</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">10:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end">
                <strong>Meeting</strong>
                <p>Daily standup</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">11:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end">
                <strong>Work</strong>
                <p>Focus time</p>
              </div>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical with Card at End -->
        <div class="mbe4">
          <h2>Vertical with Card at End</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-end-align: center"
          >
            <ag-timeline-item>
              <span slot="ag-start">09:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="\${cardStyle}">
                <strong>Breakfast</strong>
                <p style="margin: 0">Oatmeal and coffee</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">10:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="\${cardStyle}">
                <strong>Meeting</strong>
                <p style="margin: 0">Daily standup</p>
              </div>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical with Card at Start -->
        <div class="mbe4">
          <h2>Vertical with Card at Start</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-start-align: center"
          >
            <ag-timeline-item>
              <div slot="ag-start" style="\${cardStyle}">
                <strong>Breakfast</strong>
                <p style="margin: 0">Oatmeal and coffee</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">09:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start" style="\${cardStyle}">
                <strong>Meeting</strong>
                <p style="margin: 0">Daily standup</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">10:00 AM</span>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical Alternating -->
        <div class="mbe4">
          <h2>Vertical Alternating</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-start-align: center; --ag-timeline-end-align: center"
          >
            <ag-timeline-item>
              <div slot="ag-start" style="\${cardStyle}">
                <strong>Step 1</strong>
                <p style="margin: 0">Start with a card</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">09:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">10:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="\${cardStyle}">
                <strong>Step 2</strong>
                <p style="margin: 0">End has the card</p>
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start" style="\${cardStyle}">
                <strong>Step 3</strong>
                <p style="margin: 0">Back to start card</p>
              </div>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">11:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">12:00 PM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <div slot="ag-end" style="\${cardStyle}">
                <strong>Step 4</strong>
                <p style="margin: 0">End has the card</p>
              </div>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Vertical Rich -->
        <div class="mbe4">
          <h2>Vertical Rich</h2>
        </div>
        <div class="mbe4">
          <ag-timeline
            orientation="vertical"
            variant="primary"
            style="--ag-timeline-end-align: center; --ag-timeline-start-align: center"
          >
            <ag-timeline-item>
              <span slot="ag-start">09:00 AM</span>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <ag-card slot="ag-end" animated rounded="md">
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);"
                >
                  <strong>Project Kickoff</strong>
                  <ag-badge variant="success">New</ag-badge>
                </div>
                <p style="margin: 0 0 var(--ag-space-2) 0;">
                  Initial meeting with the stakeholders to define the project
                  scope.
                </p>
                <ag-button variant="primary" shape="rounded" size="sm"
                  >View Details</ag-button
                >
              </ag-card>
            </ag-timeline-item>
            <ag-timeline-item>
              <ag-card slot="ag-start" animated rounded="md">
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);"
                >
                  <strong>Design Review</strong>
                  <ag-badge variant="info">In Progress</ag-badge>
                </div>
                <p style="margin: 0 0 var(--ag-space-2) 0;">
                  Reviewing the initial mockups with the design team.
                </p>
                <div style="display: flex; gap: var(--ag-space-1);">
                  <ag-button variant="primary" shape="rounded" size="sm"
                    >Approve</ag-button
                  >
                  <ag-button variant="primary" shape="rounded" size="sm" bordered
                    >Reject</ag-button
                  >
                </div>
              </ag-card>
              <div
                slot="ag-marker"
                style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"
              ></div>
              <span slot="ag-end">11:00 AM</span>
            </ag-timeline-item>
            <ag-timeline-item>
              <span slot="ag-start">02:00 PM</span>
              <ag-icon slot="ag-marker" type="warning" size="24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                  />
                </svg>
              </ag-icon>
              <ag-card slot="ag-end" animated rounded="md">
                <div
                  style="display: flex; align-items: center; gap: var(--ag-space-2); margin-block-end: var(--ag-space-2);"
                >
                  <strong>Client Call</strong>
                  <ag-icon-button size="sm" label="Call Client">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z"
                      />
                    </svg>
                  </ag-icon-button>
                </div>
                <p style="margin: 0;">
                  Discuss feedback on the latest release.
                </p>
              </ag-card>
            </ag-timeline-item>
          </ag-timeline>
        </div>

        <!-- Order Tracking Timeline -->
        <div class="mbe4">
          <h2>Order Tracking Timeline</h2>
          <p
            style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.5rem;"
          >
            A real-world e-commerce order tracking timeline with custom bordered
            markers and integrated components.
          </p>
        </div>
        <div class="mbe4">
          <ag-timeline orientation="vertical" variant="monochrome">
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;"
                >
                  Order Placed
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;"
                >
                  Mar 15, 2024 10:32 AM
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style="color: var(--ag-background-primary-inverted);"
                  />
                </svg>
              </div>
              <ag-card
                slot="ag-end"
                style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);"
              >
                <div
                  style="display: flex; justify-content: space-between; align-items: start; margin-block-end: 0.75rem;"
                >
                  <div>
                    <div
                      style="color: var(--ag-background-primary-inverted); font-weight: 600; margin-block-end: 0.25rem;"
                    >
                      Order #AG-2024-7821
                    </div>
                    <div
                      style="color: var(--ag-text-secondary); font-size: 0.875rem;"
                    >
                      Thank you for your purchase!
                    </div>
                  </div>
                  <ag-badge
                    type="success"
                    style="--ag-badge-font-size: 0.75rem;"
                    >Confirmed</ag-badge
                  >
                </div>
                <div
                  style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-end: 0.5rem;"
                >
                  Items: 3 • Total: $127.98
                </div>
                <ag-button
                  mode="secondary"
                  size="small"
                  style="width: 100%; --ag-button-bgcolor: transparent; --ag-button-border-color: var(--ag-background-primary-inverted); --ag-button-color: var(--ag-background-primary-inverted);"
                  >View Order Details</ag-button
                >
              </ag-card>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;"
                >
                  Payment Verified
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);"
                >
                  Mar 15, 2024 10:33 AM
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style="color: var(--ag-background-primary-inverted);"
                  />
                </svg>
              </div>
              <div
                slot="ag-end"
                style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;"
              >
                Payment of $127.98 confirmed via ****-4242
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;"
                >
                  Processing
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;"
                >
                  Mar 15, 2024 2:15 PM
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;"
              >
                <ag-spinner
                  size="small"
                  style="--ag-spinner-color: var(--ag-background-primary-inverted); width: 14px; height: 14px;"
                ></ag-spinner>
              </div>
              <ag-card
                slot="ag-end"
                style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);"
              >
                <div
                  style="color: var(--ag-background-primary-inverted); font-weight: 500; margin-block-end: 0.5rem;"
                >
                  Your order is being prepared
                </div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <ag-badge type="info" style="--ag-badge-font-size: 0.75rem;"
                    >Wireless Headphones</ag-badge
                  >
                  <ag-badge type="info" style="--ag-badge-font-size: 0.75rem;"
                    >USB-C Cable</ag-badge
                  >
                  <ag-badge type="info" style="--ag-badge-font-size: 0.75rem;"
                    >Phone Case</ag-badge
                  >
                </div>
              </ag-card>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;"
                >
                  Shipped
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);"
                >
                  Estimated: Mar 16
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"
              ></div>
              <div
                slot="ag-end"
                style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem; font-style: italic;"
              >
                Awaiting shipment pickup...
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;"
                >
                  Out for Delivery
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);"
                >
                  Estimated: Mar 18
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"
              ></div>
              <div
                slot="ag-end"
                style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;"
              >
                Your package is on the way
              </div>
            </ag-timeline-item>
            <ag-timeline-item>
              <div slot="ag-start">
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;"
                >
                  Delivered
                </div>
                <div
                  style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;"
                >
                  Estimated: Mar 19
                </div>
              </div>
              <div
                slot="ag-marker"
                style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"
              ></div>
              <ag-card
                slot="ag-end"
                style="background: var(--ag-background-subtle); border-color: var(--ag-border); margin-bottom: var(--ag-space-4);"
              >
                <div
                  style="color: var(--ag-text-secondary); margin-block-end: 0.5rem;"
                >
                  Package will be delivered to your address
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <ag-button
                    mode="secondary"
                    size="small"
                    .isDisabled=\${true}
                    style="flex: 1;"
                    >Track Package</ag-button
                  >
                  <ag-button
                    mode="secondary"
                    size="small"
                    .isDisabled=\${true}
                    style="flex: 1;"
                    >Get Help</ag-button
                  >
                </div>
              </ag-card>
            </ag-timeline-item>
          </ag-timeline>
        </div>
      </section>
    \`;
  }
}

customElements.define("timeline-lit-examples", TimelineLitExamples);`,Ii=`import {
  ReactTimeline,
  ReactTimelineItem,
} from "agnosticui-core/timeline/react";
import { ReactIcon } from "agnosticui-core/icon/react";
import { ReactCard } from "agnosticui-core/card/react";
import { ReactButton } from "agnosticui-core/button/react";
import { ReactBadge } from "agnosticui-core/badge/react";
import { ReactIconButton } from "agnosticui-core/icon-button/react";
import { ReactSpinner } from "agnosticui-core/spinner/react";

const cardStyle = {
  border: "1px solid var(--ag-border)",
  padding: "var(--ag-space-2)",
  borderRadius: "var(--ag-radius)",
  backgroundColor: "var(--ag-background)",
  marginBottom: "var(--ag-space-4)",
};

const stepMarkerBase = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
};

const stepMarkerCompleted = {
  ...stepMarkerBase,
  background: "var(--ag-success)",
  color: "white",
};

const stepMarkerCurrent = {
  ...stepMarkerBase,
  background: "var(--ag-primary)",
  color: "white",
};

const stepMarkerPending = {
  ...stepMarkerBase,
  background: "transparent",
  border: "1px solid var(--ag-border)",
  color: "var(--ag-text-secondary)",
};

export default function TimelineReactExamples() {
  return (
    <section>
      {/* Horizontal Timeline */}
      <div className="mbe4">
        <h2>Horizontal Timeline</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline orientation="horizontal" responsive={false}>
          <ReactTimelineItem>
            <div slot="ag-start">2023-01-01</div>
            <div slot="ag-marker">
              <ReactIcon type="success" size="18">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">Step 1 Completed</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">2023-02-01</div>
            <div slot="ag-marker">
              <ReactIcon type="info" size="18">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                  />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">Step 2 In Progress</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">2023-03-01</div>
            <div slot="ag-marker">
              <ReactIcon type="warning" size="18">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                  />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">Step 3 Pending</div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Numbered Steps Timeline */}
      <div className="mbe4">
        <h2>Numbered Steps Timeline</h2>
        <p
          style={{
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
            marginTop: "0.5rem",
          }}
        >
          A horizontal stepper using numbered circles to indicate progress. Markers are fully customizable via slots.
        </p>
      </div>
      <div className="mbe4">
        <ReactTimeline orientation="horizontal" responsive={false}>
          <ReactTimelineItem>
            <div slot="ag-start">Step 1</div>
            <div slot="ag-marker">
              <div style={stepMarkerCompleted}>1</div>
            </div>
            <div slot="ag-end">Completed</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">Step 2</div>
            <div slot="ag-marker">
              <div style={stepMarkerCurrent}>2</div>
            </div>
            <div slot="ag-end">Current</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">Step 3</div>
            <div slot="ag-marker">
              <div style={stepMarkerPending}>3</div>
            </div>
            <div slot="ag-end">Pending</div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical Timeline */}
      <div className="mbe4">
        <h2>Vertical Timeline</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline orientation="vertical" variant="primary">
          <ReactTimelineItem>
            <div slot="ag-start">09:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <strong>Breakfast</strong>
              <p>Oatmeal and coffee</p>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">10:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <strong>Meeting</strong>
              <p>Daily standup</p>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">11:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <strong>Work</strong>
              <p>Focus time</p>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical with Card at End */}
      <div className="mbe4">
        <h2>Vertical with Card at End</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{ "--ag-timeline-end-align": "center" }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">09:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Breakfast</strong>
                <p style={{ margin: 0 }}>Oatmeal and coffee</p>
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">10:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Meeting</strong>
                <p style={{ margin: 0 }}>Daily standup</p>
              </div>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical with Card at Start */}
      <div className="mbe4">
        <h2>Vertical with Card at Start</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{ "--ag-timeline-start-align": "center" }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Breakfast</strong>
                <p style={{ margin: 0 }}>Oatmeal and coffee</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">09:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Meeting</strong>
                <p style={{ margin: 0 }}>Daily standup</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">10:00 AM</div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical Alternating */}
      <div className="mbe4">
        <h2>Vertical Alternating</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{
            "--ag-timeline-start-align": "center",
            "--ag-timeline-end-align": "center",
          }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Step 1</strong>
                <p style={{ margin: 0 }}>Start with a card</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">09:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">10:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Step 2</strong>
                <p style={{ margin: 0 }}>End has the card</p>
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Step 3</strong>
                <p style={{ margin: 0 }}>Back to start card</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">11:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">12:00 PM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Step 4</strong>
                <p style={{ margin: 0 }}>End has the card</p>
              </div>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical Rich */}
      <div className="mbe4">
        <h2>Vertical Rich</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{
            "--ag-timeline-end-align": "center",
            "--ag-timeline-start-align": "center",
          }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">09:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <ReactCard animated rounded="md">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--ag-space-2)",
                  }}
                >
                  <strong>Project Kickoff</strong>
                  <ReactBadge variant="success">New</ReactBadge>
                </div>
                <p style={{ margin: "0 0 var(--ag-space-2) 0" }}>
                  Initial meeting with the stakeholders to define the project
                  scope.
                </p>
                <ReactButton variant="primary" shape="rounded" size="sm">
                  View Details
                </ReactButton>
              </ReactCard>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <ReactCard animated rounded="md">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--ag-space-2)",
                  }}
                >
                  <strong>Design Review</strong>
                  <ReactBadge variant="info">In Progress</ReactBadge>
                </div>
                <p style={{ margin: "0 0 var(--ag-space-2) 0" }}>
                  Reviewing the initial mockups with the design team.
                </p>
                <div style={{ display: "flex", gap: "var(--ag-space-1)" }}>
                  <ReactButton variant="primary" shape="rounded" size="sm">
                    Approve
                  </ReactButton>
                  <ReactButton
                    variant="primary"
                    shape="rounded"
                    size="sm"
                    bordered
                  >
                    Reject
                  </ReactButton>
                </div>
              </ReactCard>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">11:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">02:00 PM</div>
            <div slot="ag-marker">
              <ReactIcon type="warning" size="24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">
              <ReactCard animated rounded="md">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--ag-space-2)",
                    marginBottom: "var(--ag-space-2)",
                  }}
                >
                  <strong>Client Call</strong>
                  <ReactIconButton size="sm" label="Call Client">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z" />
                    </svg>
                  </ReactIconButton>
                </div>
                <p style={{ margin: 0 }}>
                  Discuss feedback on the latest release.
                </p>
              </ReactCard>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Order Tracking Timeline */}
      <div className="mbe4">
        <h2>Order Tracking Timeline</h2>
        <p
          style={{
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
            marginTop: "0.5rem",
          }}
        >
          A real-world e-commerce order tracking timeline with custom bordered
          markers and integrated components.
        </p>
      </div>
      <div className="mbe4">
        <ReactTimeline orientation="vertical" variant="monochrome">
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-background-primary-inverted)",
                  fontWeight: 500,
                }}
              >
                Order Placed
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                Mar 15, 2024 10:32 AM
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-background-primary-inverted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style={{ color: "var(--ag-background-primary-inverted)" }}
                  />
                </svg>
              </div>
            </div>
            <div slot="ag-end">
              <ReactCard
                style={{
                  background: "var(--ag-background-primary)",
                  borderColor: "var(--ag-background-primary-inverted)",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--ag-background-primary-inverted)",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                      }}
                    >
                      Order #AG-2024-7821
                    </div>
                    <div
                      style={{
                        color: "var(--ag-text-secondary)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Thank you for your purchase!
                    </div>
                  </div>
                  <ReactBadge
                    type="success"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    Confirmed
                  </ReactBadge>
                </div>
                <div
                  style={{
                    color: "var(--ag-text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Items: 3 • Total: $127.98
                </div>
                <ReactButton
                  mode="secondary"
                  size="small"
                  style={{
                    width: "100%",
                    "--ag-button-bgcolor": "transparent",
                    "--ag-button-border-color":
                      "var(--ag-background-primary-inverted)",
                    "--ag-button-color": "var(--ag-background-primary-inverted)",
                  }}
                >
                  View Order Details
                </ReactButton>
              </ReactCard>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-background-primary-inverted)",
                  fontWeight: 500,
                }}
              >
                Payment Verified
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                Mar 15, 2024 10:33 AM
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-background-primary-inverted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style={{ color: "var(--ag-background-primary-inverted)" }}
                  />
                </svg>
              </div>
            </div>
            <div slot="ag-end">
              <div
                style={{
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.9rem",
                  paddingLeft: "0.5rem",
                }}
              >
                Payment of $127.98 confirmed via ****-4242
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-background-primary-inverted)",
                  fontWeight: 500,
                }}
              >
                Processing
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                Mar 15, 2024 2:15 PM
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-background-primary-inverted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ReactSpinner
                  size="small"
                  style={{
                    "--ag-spinner-color":
                      "var(--ag-background-primary-inverted)",
                    width: "14px",
                    height: "14px",
                  }}
                />
              </div>
            </div>
            <div slot="ag-end">
              <ReactCard
                style={{
                  background: "var(--ag-background-primary)",
                  borderColor: "var(--ag-background-primary-inverted)",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                <div
                  style={{
                    color: "var(--ag-background-primary-inverted)",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  Your order is being prepared
                </div>
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  <ReactBadge
                    type="info"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    Wireless Headphones
                  </ReactBadge>
                  <ReactBadge
                    type="info"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    USB-C Cable
                  </ReactBadge>
                  <ReactBadge
                    type="info"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    Phone Case
                  </ReactBadge>
                </div>
              </ReactCard>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontWeight: 500,
                }}
              >
                Shipped
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                Estimated: Mar 16
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-border)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div
                style={{
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.9rem",
                  paddingLeft: "0.5rem",
                  fontStyle: "italic",
                }}
              >
                Awaiting shipment pickup...
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontWeight: 500,
                }}
              >
                Out for Delivery
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                Estimated: Mar 18
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-border)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div
                style={{
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.9rem",
                  paddingLeft: "0.5rem",
                }}
              >
                Your package is on the way
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontWeight: 500,
                }}
              >
                Delivered
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                Estimated: Mar 19
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-border)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <ReactCard
                style={{
                  background: "var(--ag-background-subtle)",
                  borderColor: "var(--ag-border)",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                <div
                  style={{
                    color: "var(--ag-text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Package will be delivered to your address
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <ReactButton
                    mode="secondary"
                    size="small"
                    isDisabled
                    style={{ flex: 1 }}
                  >
                    Track Package
                  </ReactButton>
                  <ReactButton
                    mode="secondary"
                    size="small"
                    isDisabled
                    style={{ flex: 1 }}
                  >
                    Get Help
                  </ReactButton>
                </div>
              </ReactCard>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>
    </section>
  );
}`,ns=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeline.md","filePath":"components/timeline.md"}'),Ri={name:"components/timeline.md"},ts=Object.assign(Ri,{setup(e){return(i,r)=>(v(),c("div",null,[r[1]||(r[1]=s("h1",{id:"timeline",tabindex:"-1"},[t("Timeline "),s("a",{class:"header-anchor",href:"#timeline","aria-label":'Permalink to "Timeline"'},"​")],-1)),n(H),r[2]||(r[2]=s("p",null,"Timeline is a semantic component for displaying chronological events, processes, or activities in either horizontal or vertical orientation. It provides flexible slots for dates, markers, and descriptions with support for rich content including cards, badges, and interactive elements.",-1)),r[3]||(r[3]=s("h2",{id:"examples",tabindex:"-1"},[t("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(Q,{component:"timeline","vue-code":D(qi),"lit-code":D(Mi),"react-code":D(Ii)},{vue:a(()=>[n(wi)]),lit:a(()=>[...r[0]||(r[0]=[s("timeline-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),r[4]||(r[4]=N("",29))]))}});export{ns as __pageData,ts as default};
