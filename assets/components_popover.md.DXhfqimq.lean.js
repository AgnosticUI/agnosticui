var C=Object.defineProperty;var E=(o,s,l)=>s in o?C(o,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[s]=l;var d=(o,s,l)=>E(o,typeof s!="symbol"?s+"":s,l);import{A as B}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{k as x}from"./chunks/VuePopover.sNZuxlA7.js";import{v as A}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.DjpUppN5.js";import{_ as f,C as r,c as y,o as u,j as i,G as t,w as n,a,Z as F,t as g,p as c,ae as w,k}from"./chunks/framework.NAAYCHZu.js";import{c as P}from"./chunks/createLucideIcon.B61Wqv9x.js";import{M as D}from"./chunks/menu.SiK0ns-Z.js";import{F as q}from"./chunks/FrameworkExample.Z9eaTrCu.js";import{a as T,x as R}from"./chunks/Button.DkmThuAs.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/floating-ui.dom-muqvZJIo.ByzMQtLc.js";import"./chunks/CloseButton.otVweCM4.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=P("ellipsis-vertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]),V={name:"PopoverExamples",components:{VuePopover:x,VueButton:A,Menu:D,MoreVertical:S},setup(){const o=c(0),s=c(0);return{showCount:o,hideCount:s,handleShow:()=>{o.value++},handleHide:()=>{s.value++}}}},z={class:"stacked-mobile mbe4"},H={slot:"trigger",style:{background:"none",border:"none",cursor:"pointer",padding:"8px",display:"flex","align-items":"center",gap:"4px"},"aria-label":"More options"},N={slot:"trigger",style:{background:"none",border:"none",cursor:"pointer",padding:"8px"},"aria-label":"Menu"},L={class:"stacked-mobile mbe4"},O={class:"mbe4",style:{display:"grid","grid-template-columns":"1fr 1fr 1fr","grid-template-rows":"auto auto auto",gap:"1rem","place-items":"center","max-width":"275px",margin:"0 auto"}},M={style:{"grid-column":"2","grid-row":"1"}},U={style:{"grid-column":"3","grid-row":"2"}},W={style:{"grid-column":"2","grid-row":"3"}},I={style:{"grid-column":"1","grid-row":"2"}},J={class:"stacked-mobile mbe4"},j={slot:"content"},Y={style:{display:"flex","flex-direction":"column",gap:"12px"}},$={style:{"padding-top":"8px","border-top":"1px solid var(--ag-border)"}},G={slot:"content"},K={class:"stacked-mobile mbe4"},Z={class:"mbe4"},Q={style:{"margin-bottom":"16px",padding:"12px",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)",border:"1px solid var(--ag-border)"}},X={style:{margin:"4px 0","font-size":"14px"}},_={style:{margin:"4px 0","font-size":"14px"}},ss={class:"stacked-mobile mbe4"},is={class:"stacked-mobile mbe4"};function ts(o,s,l,h,os,hs){const e=r("VuePopover"),p=r("VueButton"),m=r("MoreVertical"),b=r("Menu");return u(),y("section",null,[s[61]||(s[61]=i("div",{class:"mbe4"},[i("h2",null,"Basic Popover")],-1)),i("div",z,[t(e,null,{default:n(()=>[...s[2]||(s[2]=[i("button",{slot:"trigger"},"Open Popover",-1),i("span",{slot:"title"},"Popover Title",-1),i("div",{slot:"content"},[i("p",null,"This is the popover content. You can put any content here including text, links, buttons, and more.")],-1)])]),_:1}),t(e,null,{default:n(()=>[t(p,{slot:"trigger",variant:"primary"},{default:n(()=>[...s[3]||(s[3]=[a(" Button Trigger ",-1)])]),_:1}),s[4]||(s[4]=i("span",{slot:"title"},"User Information",-1)),s[5]||(s[5]=i("div",{slot:"content"},[i("p",null,"Popovers can contain rich content and interactive elements.")],-1))]),_:1}),t(e,null,{default:n(()=>[i("a",{href:"#",slot:"trigger",style:{"text-decoration":"underline",cursor:"pointer"},onClick:s[0]||(s[0]=F(()=>{},["prevent"]))}," Link Trigger "),s[6]||(s[6]=i("span",{slot:"title"},"Link Popover",-1)),s[7]||(s[7]=i("div",{slot:"content"},[i("p",null,"Popovers can be triggered from links too.")],-1))]),_:1}),t(e,null,{default:n(()=>[i("button",H,[t(m,{size:20})]),s[8]||(s[8]=i("span",{slot:"title"},"More Options",-1)),s[9]||(s[9]=i("div",{slot:"content"},[i("div",{style:{display:"flex","flex-direction":"column",gap:"8px"}},[i("button",{style:{"text-align":"left",padding:"8px",background:"none",border:"none",cursor:"pointer","border-radius":"var(--ag-radius-sm)"}}," Edit "),i("button",{style:{"text-align":"left",padding:"8px",background:"none",border:"none",cursor:"pointer","border-radius":"var(--ag-radius-sm)"}}," Share "),i("button",{style:{"text-align":"left",padding:"8px",background:"none",border:"none",cursor:"pointer",color:"var(--ag-error)","border-radius":"var(--ag-radius-sm)"}}," Delete ")])],-1))]),_:1}),t(e,null,{default:n(()=>[i("button",N,[t(b,{size:24})]),s[10]||(s[10]=i("span",{slot:"title"},"Navigation Menu",-1)),s[11]||(s[11]=i("div",{slot:"content"},[i("nav",{style:{display:"flex","flex-direction":"column",gap:"4px"}},[i("a",{href:"#",style:{padding:"8px","text-decoration":"none",color:"var(--ag-text-primary)","border-radius":"var(--ag-radius-sm)"}},"Home"),i("a",{href:"#",style:{padding:"8px","text-decoration":"none",color:"var(--ag-text-primary)","border-radius":"var(--ag-radius-sm)"}},"About"),i("a",{href:"#",style:{padding:"8px","text-decoration":"none",color:"var(--ag-text-primary)","border-radius":"var(--ag-radius-sm)"}},"Contact")])],-1))]),_:1})]),s[62]||(s[62]=i("div",{class:"mbe4"},[i("h2",null,"Trigger Types")],-1)),i("div",L,[t(e,{"trigger-type":"click"},{default:n(()=>[t(p,{slot:"trigger"},{default:n(()=>[...s[12]||(s[12]=[a("Click Trigger",-1)])]),_:1}),s[13]||(s[13]=i("span",{slot:"title"},"Click Popover",-1)),s[14]||(s[14]=i("div",{slot:"content"},[i("p",null,"This popover opens when you click the button.")],-1))]),_:1}),t(e,{"trigger-type":"hover"},{default:n(()=>[t(p,{slot:"trigger",variant:"secondary"},{default:n(()=>[...s[15]||(s[15]=[a(" Hover Trigger ",-1)])]),_:1}),s[16]||(s[16]=i("span",{slot:"title"},"Hover Popover",-1)),s[17]||(s[17]=i("div",{slot:"content"},[i("p",null,"This popover opens when you hover over the button.")],-1))]),_:1}),t(e,{"trigger-type":"focus"},{default:n(()=>[t(p,{slot:"trigger",variant:"success"},{default:n(()=>[...s[18]||(s[18]=[a(" Focus Trigger ",-1)])]),_:1}),s[19]||(s[19]=i("span",{slot:"title"},"Focus Popover",-1)),s[20]||(s[20]=i("div",{slot:"content"},[i("p",null,"This popover opens when the button receives focus (keyboard navigation).")],-1))]),_:1})]),s[63]||(s[63]=i("div",{class:"mbe4"},[i("h2",null,"Placement Options")],-1)),i("div",O,[i("div",M,[t(e,{placement:"top"},{default:n(()=>[t(p,{slot:"trigger"},{default:n(()=>[...s[21]||(s[21]=[a("Top",-1)])]),_:1}),s[22]||(s[22]=i("span",{slot:"title"},"Top Placement",-1)),s[23]||(s[23]=i("div",{slot:"content"},[i("p",null,"Popover positioned above")],-1))]),_:1})]),i("div",U,[t(e,{placement:"right"},{default:n(()=>[t(p,{slot:"trigger"},{default:n(()=>[...s[24]||(s[24]=[a("Right",-1)])]),_:1}),s[25]||(s[25]=i("span",{slot:"title"},"Right Placement",-1)),s[26]||(s[26]=i("div",{slot:"content"},[i("p",null,"Popover positioned to the right")],-1))]),_:1})]),i("div",W,[t(e,{placement:"bottom"},{default:n(()=>[t(p,{slot:"trigger"},{default:n(()=>[...s[27]||(s[27]=[a("Bottom",-1)])]),_:1}),s[28]||(s[28]=i("span",{slot:"title"},"Bottom Placement",-1)),s[29]||(s[29]=i("div",{slot:"content"},[i("p",null,"Popover positioned below")],-1))]),_:1})]),i("div",I,[t(e,{placement:"left"},{default:n(()=>[t(p,{slot:"trigger"},{default:n(()=>[...s[30]||(s[30]=[a("Left",-1)])]),_:1}),s[31]||(s[31]=i("span",{slot:"title"},"Left Placement",-1)),s[32]||(s[32]=i("div",{slot:"content"},[i("p",null,"Popover positioned to the left")],-1))]),_:1})])]),s[64]||(s[64]=i("div",{class:"mbe4"},[i("h2",null,"Rich Content")],-1)),i("div",J,[t(e,null,{default:n(()=>[t(p,{slot:"trigger",variant:"primary"},{default:n(()=>[...s[33]||(s[33]=[a(" User Profile ",-1)])]),_:1}),s[36]||(s[36]=i("span",{slot:"title"},"John Doe",-1)),i("div",j,[i("div",Y,[s[35]||(s[35]=i("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[i("div",{style:{width:"48px",height:"48px","border-radius":"50%",background:"display: flex","align-items":"center","justify-content":"center",color:"white","font-weight":"bold"}}," JD "),i("div",null,[i("div",{style:{"font-weight":"600"}},"John Doe"),i("div",{style:{"font-size":"14px",color:"var(--ag-text-secondary)"}},"john@example.com")])],-1)),i("div",$,[t(p,{variant:"primary",style:{width:"100%"}},{default:n(()=>[...s[34]||(s[34]=[a(" View Profile ",-1)])]),_:1})])])])]),_:1}),t(e,null,{default:n(()=>[t(p,{slot:"trigger",variant:"secondary"},{default:n(()=>[...s[37]||(s[37]=[a(" Add Comment ",-1)])]),_:1}),s[41]||(s[41]=i("span",{slot:"title"},"New Comment",-1)),i("div",G,[i("form",{style:{display:"flex","flex-direction":"column",gap:"12px","min-width":"250px"},onSubmit:s[1]||(s[1]=F(()=>{},["prevent"]))},[s[39]||(s[39]=i("div",null,[i("label",{style:{display:"block","margin-bottom":"4px","font-size":"14px"}},"Name"),i("input",{type:"text",placeholder:"Your name",style:{width:"100%",padding:"8px",border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-sm)","box-sizing":"border-box"}})],-1)),s[40]||(s[40]=i("div",null,[i("label",{style:{display:"block","margin-bottom":"4px","font-size":"14px"}},"Comment"),i("textarea",{placeholder:"Your comment",rows:"3",style:{width:"100%",padding:"8px",border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-sm)",resize:"vertical","box-sizing":"border-box"}})],-1)),t(p,{variant:"primary",type:"submit"},{default:n(()=>[...s[38]||(s[38]=[a(" Submit ",-1)])]),_:1})],32)])]),_:1})]),s[65]||(s[65]=i("div",{class:"mbe4"},[i("h2",null,"Without Close Button")],-1)),i("div",K,[t(e,{"show-close-button":!1},{default:n(()=>[t(p,{slot:"trigger"},{default:n(()=>[...s[42]||(s[42]=[a("No Close Button",-1)])]),_:1}),s[43]||(s[43]=i("span",{slot:"title"},"Title Only",-1)),s[44]||(s[44]=i("div",{slot:"content"},[i("p",null,"This popover has no close button. Click outside to close.")],-1))]),_:1}),t(e,{arrow:!1},{default:n(()=>[t(p,{slot:"trigger",variant:"secondary"},{default:n(()=>[...s[45]||(s[45]=[a(" No Arrow ",-1)])]),_:1}),s[46]||(s[46]=i("span",{slot:"title"},"Popover Without Arrow",-1)),s[47]||(s[47]=i("div",{slot:"content"},[i("p",null,"This popover doesn't have an arrow pointing to the trigger.")],-1))]),_:1})]),i("div",Z,[s[50]||(s[50]=i("h2",null,"Event Handling",-1)),s[51]||(s[51]=i("p",{class:"mbs2 mbe3"}," Listen to show and hide events to track when the popover opens and closes. ",-1)),i("div",Q,[i("p",X,[s[48]||(s[48]=i("strong",null,"Show events:",-1)),a(" "+g(h.showCount),1)]),i("p",_,[s[49]||(s[49]=i("strong",null,"Hide events:",-1)),a(" "+g(h.hideCount),1)])])]),i("div",ss,[t(e,{onShow:h.handleShow,onHide:h.handleHide},{default:n(()=>[t(p,{slot:"trigger",variant:"primary"},{default:n(()=>[...s[52]||(s[52]=[a(" Toggle Popover ",-1)])]),_:1}),s[53]||(s[53]=i("span",{slot:"title"},"Event Tracking",-1)),s[54]||(s[54]=i("div",{slot:"content"},[i("p",null,"Open and close this popover to see the event counts above.")],-1))]),_:1},8,["onShow","onHide"])]),s[66]||(s[66]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization"),i("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples. ")],-1)),i("div",is,[t(e,{class:"custom-popover-gradient"},{default:n(()=>[t(p,{slot:"trigger",variant:"primary"},{default:n(()=>[...s[55]||(s[55]=[a(" Gradient Popover ",-1)])]),_:1}),s[56]||(s[56]=i("span",{slot:"title",style:{color:"white"}},"Customized Style",-1)),s[57]||(s[57]=i("div",{slot:"content",style:{color:"white"}},[i("p",{style:{color:"white"}},"This popover has been customized with CSS Shadow Parts for a gradient background!")],-1))]),_:1}),t(e,{class:"custom-popover-success"},{default:n(()=>[t(p,{slot:"trigger",variant:"success"},{default:n(()=>[...s[58]||(s[58]=[a(" Success Popover ",-1)])]),_:1}),s[59]||(s[59]=i("span",{slot:"title",style:{color:"white"}},"Success Theme",-1)),s[60]||(s[60]=i("div",{slot:"content",style:{color:"white"}},[i("p",{style:{color:"white"}},"A success-themed popover with custom styling.")],-1))]),_:1})])])}const ns=f(V,[["render",ts]]);class v extends T{constructor(){super(),this.showCount=0,this.hideCount=0}createRenderRoot(){return this}handleShow(){this.showCount++}handleHide(){this.hideCount++}render(){return R`
      <section>
        <div class="mbe4">
          <h2>Basic Popover</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover>
            <button slot="trigger">Open Popover</button>
            <span slot="title">Popover Title</span>
            <div slot="content">
              <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <ag-button slot="trigger" variant="primary">Button Trigger</ag-button>
            <span slot="title">User Information</span>
            <div slot="content">
              <p>Popovers can contain rich content and interactive elements.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <a
              href="#"
              slot="trigger"
              style="text-decoration: underline; cursor: pointer;"
              @click=${s=>s.preventDefault()}
            >
              Link Trigger
            </a>
            <span slot="title">Link Popover</span>
            <div slot="content">
              <p>Popovers can be triggered from links too.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <button
              slot="trigger"
              style="background: none; border: none; cursor: pointer; padding: 8px; display: flex; align-items: center; gap: 4px;"
              aria-label="More options"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
            <span slot="title">More Options</span>
            <div slot="content">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
                  Edit
                </button>
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
                  Share
                </button>
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; color: var(--ag-error); border-radius: var(--ag-radius-sm);">
                  Delete
                </button>
              </div>
            </div>
          </ag-popover>
          <ag-popover>
            <button
              slot="trigger"
              style="background: none; border: none; cursor: pointer; padding: 8px;"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <span slot="title">Navigation Menu</span>
            <div slot="content">
              <nav style="display: flex; flex-direction: column; gap: 4px;">
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >Home</a>
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >About</a>
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >Contact</a>
              </nav>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Trigger Types</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover trigger-type="click">
            <ag-button slot="trigger">Click Trigger</ag-button>
            <span slot="title">Click Popover</span>
            <div slot="content">
              <p>This popover opens when you click the button.</p>
            </div>
          </ag-popover>
          <ag-popover trigger-type="hover">
            <ag-button slot="trigger" variant="secondary">Hover Trigger</ag-button>
            <span slot="title">Hover Popover</span>
            <div slot="content">
              <p>This popover opens when you hover over the button.</p>
            </div>
          </ag-popover>
          <ag-popover trigger-type="focus">
            <ag-button slot="trigger" variant="success">Focus Trigger</ag-button>
            <span slot="title">Focus Popover</span>
            <div slot="content">
              <p>This popover opens when the button receives focus (keyboard navigation).</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Placement Options</h2>
        </div>
        <div
          class="mbe4"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto auto auto; gap: 1rem; place-items: center; max-width: 275px; margin: 0 auto;"
        >
          <div style="grid-column: 2; grid-row: 1;">
            <ag-popover placement="top">
              <ag-button slot="trigger">Top</ag-button>
              <span slot="title">Top Placement</span>
              <div slot="content">
                <p>Popover positioned above</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 3; grid-row: 2;">
            <ag-popover placement="right">
              <ag-button slot="trigger">Right</ag-button>
              <span slot="title">Right Placement</span>
              <div slot="content">
                <p>Popover positioned to the right</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 2; grid-row: 3;">
            <ag-popover placement="bottom">
              <ag-button slot="trigger">Bottom</ag-button>
              <span slot="title">Bottom Placement</span>
              <div slot="content">
                <p>Popover positioned below</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 1; grid-row: 2;">
            <ag-popover placement="left">
              <ag-button slot="trigger">Left</ag-button>
              <span slot="title">Left Placement</span>
              <div slot="content">
                <p>Popover positioned to the left</p>
              </div>
            </ag-popover>
          </div>
        </div>

        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover>
            <ag-button slot="trigger" variant="primary">User Profile</ag-button>
            <span slot="title">John Doe</span>
            <div slot="content">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--ag-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    JD
                  </div>
                  <div>
                    <div style="font-weight: 600;">John Doe</div>
                    <div style="font-size: 14px; color: var(--ag-text-secondary);">john@example.com</div>
                  </div>
                </div>
                <div style="padding-top: 8px; border-top: 1px solid var(--ag-border);">
                  <ag-button variant="primary" style="width: 100%;">View Profile</ag-button>
                </div>
              </div>
            </div>
          </ag-popover>
          <ag-popover>
            <ag-button slot="trigger" variant="secondary">Add Comment</ag-button>
            <span slot="title">New Comment</span>
            <div slot="content">
              <form
                style="display: flex; flex-direction: column; gap: 12px; min-width: 250px;"
                @submit=${s=>s.preventDefault()}
              >
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); box-sizing: border-box;"
                  >
                </div>
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Comment</label>
                  <textarea
                    placeholder="Your comment"
                    rows="3"
                    style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); resize: vertical; box-sizing: border-box;"
                  ></textarea>
                </div>
                <ag-button variant="primary" type="submit">Submit</ag-button>
              </form>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Without Close Button</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover show-close-button="false">
            <ag-button slot="trigger">No Close Button</ag-button>
            <span slot="title">Title Only</span>
            <div slot="content">
              <p>This popover has no close button. Click outside to close.</p>
            </div>
          </ag-popover>
          <ag-popover arrow="false">
            <ag-button slot="trigger" variant="secondary">No Arrow</ag-button>
            <span slot="title">Popover Without Arrow</span>
            <div slot="content">
              <p>This popover doesn't have an arrow pointing to the trigger.</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">
            Listen to show and hide events to track when the popover opens and closes.
          </p>
          <div style="margin-bottom: 16px; padding: 12px; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);">
            <p style="margin: 4px 0; font-size: 14px;">
              <strong>Show events:</strong> ${this.showCount}
            </p>
            <p style="margin: 4px 0; font-size: 14px;">
              <strong>Hide events:</strong> ${this.hideCount}
            </p>
          </div>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover
            @show=${this.handleShow}
            @hide=${this.handleHide}
          >
            <ag-button slot="trigger" variant="primary">Toggle Popover</ag-button>
            <span slot="title">Event Tracking</span>
            <div slot="content">
              <p>Open and close this popover to see the event counts above.</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover class="custom-popover-gradient">
            <ag-button slot="trigger" variant="primary">Gradient Popover</ag-button>
            <span slot="title" style="color: white;">Customized Style</span>
            <div slot="content" style="color: white;">
              <p style="color: white;">This popover has been customized with CSS Shadow Parts for a gradient background!</p>
            </div>
          </ag-popover>
          <ag-popover class="custom-popover-success">
            <ag-button slot="trigger" variant="success">Success Popover</ag-button>
            <span slot="title" style="color: white;">Success Theme</span>
            <div slot="content" style="color: white;">
              <p style="color: white;">A success-themed popover with custom styling.</p>
            </div>
          </ag-popover>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-popover-gradient::part(ag-popover) {
          background: linear-gradient(135deg, #4338ca 0%, #6b21a8 100%);
          color: white;
          border: none;
          box-shadow: 0 20px 40px rgba(67, 56, 202, 0.5);
        }

        /* How to match a custom gradient? Just hide ¯\\_(ツ)_/¯  */
        .custom-popover-gradient::part(ag-popover-arrow) {
          display: none;
        }

        .custom-popover-success::part(ag-popover) {
          background: #059669;
          color: white;
          border: 2px solid #047857;
          box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
        }

        /* The border-based arrow, floating-ui's flip, and other complexities makes
        the ROI on having an arrow questionable. So, we just hide ¯\\_(ツ)_/¯  */
        .custom-popover-success::part(ag-popover-arrow) {
          display: none;
        }
      </style>
    `}}d(v,"properties",{showCount:{type:Number},hideCount:{type:Number}});customElements.define("popover-lit-examples",v);const as=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Popover</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover>
        <button slot="trigger">Open Popover</button>
        <span slot="title">Popover Title</span>
        <div slot="content">
          <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
        </div>
      </VuePopover>
      <VuePopover>
        <VueButton
          slot="trigger"
          variant="primary"
        >
          Button Trigger
        </VueButton>
        <span slot="title">User Information</span>
        <div slot="content">
          <p>Popovers can contain rich content and interactive elements.</p>
        </div>
      </VuePopover>
      <VuePopover>
        <a
          href="#"
          slot="trigger"
          style="text-decoration: underline; cursor: pointer;"
          @click.prevent
        >
          Link Trigger
        </a>
        <span slot="title">Link Popover</span>
        <div slot="content">
          <p>Popovers can be triggered from links too.</p>
        </div>
      </VuePopover>
      <VuePopover>
        <button
          slot="trigger"
          style="background: none; border: none; cursor: pointer; padding: 8px; display: flex; align-items: center; gap: 4px;"
          aria-label="More options"
        >
          <MoreVertical :size="20" />
        </button>
        <span slot="title">More Options</span>
        <div slot="content">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
              Edit
            </button>
            <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
              Share
            </button>
            <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; color: var(--ag-error); border-radius: var(--ag-radius-sm);">
              Delete
            </button>
          </div>
        </div>
      </VuePopover>
      <VuePopover>
        <button
          slot="trigger"
          style="background: none; border: none; cursor: pointer; padding: 8px;"
          aria-label="Menu"
        >
          <Menu :size="24" />
        </button>
        <span slot="title">Navigation Menu</span>
        <div slot="content">
          <nav style="display: flex; flex-direction: column; gap: 4px;">
            <a
              href="#"
              style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
            >Home</a>
            <a
              href="#"
              style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
            >About</a>
            <a
              href="#"
              style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
            >Contact</a>
          </nav>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h2>Trigger Types</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover trigger-type="click">
        <VueButton slot="trigger">Click Trigger</VueButton>
        <span slot="title">Click Popover</span>
        <div slot="content">
          <p>This popover opens when you click the button.</p>
        </div>
      </VuePopover>
      <VuePopover trigger-type="hover">
        <VueButton
          slot="trigger"
          variant="secondary"
        >
          Hover Trigger
        </VueButton>
        <span slot="title">Hover Popover</span>
        <div slot="content">
          <p>This popover opens when you hover over the button.</p>
        </div>
      </VuePopover>
      <VuePopover trigger-type="focus">
        <VueButton
          slot="trigger"
          variant="success"
        >
          Focus Trigger
        </VueButton>
        <span slot="title">Focus Popover</span>
        <div slot="content">
          <p>This popover opens when the button receives focus (keyboard navigation).</p>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h2>Placement Options</h2>
    </div>
    <div
      class="mbe4"
      style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto auto auto; gap: 1rem; place-items: center; max-width: 275px; margin: 0 auto;"
    >
      <div style="grid-column: 2; grid-row: 1;">
        <VuePopover placement="top">
          <VueButton slot="trigger">Top</VueButton>
          <span slot="title">Top Placement</span>
          <div slot="content">
            <p>Popover positioned above</p>
          </div>
        </VuePopover>
      </div>
      <div style="grid-column: 3; grid-row: 2;">
        <VuePopover placement="right">
          <VueButton slot="trigger">Right</VueButton>
          <span slot="title">Right Placement</span>
          <div slot="content">
            <p>Popover positioned to the right</p>
          </div>
        </VuePopover>
      </div>
      <div style="grid-column: 2; grid-row: 3;">
        <VuePopover placement="bottom">
          <VueButton slot="trigger">Bottom</VueButton>
          <span slot="title">Bottom Placement</span>
          <div slot="content">
            <p>Popover positioned below</p>
          </div>
        </VuePopover>
      </div>
      <div style="grid-column: 1; grid-row: 2;">
        <VuePopover placement="left">
          <VueButton slot="trigger">Left</VueButton>
          <span slot="title">Left Placement</span>
          <div slot="content">
            <p>Popover positioned to the left</p>
          </div>
        </VuePopover>
      </div>
    </div>

    <div class="mbe4">
      <h2>Rich Content</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover>
        <VueButton
          slot="trigger"
          variant="primary"
        >
          User Profile
        </VueButton>
        <span slot="title">John Doe</span>
        <div slot="content">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 48px; height: 48px; border-radius: 50%; background: display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                JD
              </div>
              <div>
                <div style="font-weight: 600;">John Doe</div>
                <div style="font-size: 14px; color: var(--ag-text-secondary);">john@example.com</div>
              </div>
            </div>
            <div style="padding-top: 8px; border-top: 1px solid var(--ag-border);">
              <VueButton
                variant="primary"
                style="width: 100%;"
              >
                View Profile
              </VueButton>
            </div>
          </div>
        </div>
      </VuePopover>
      <VuePopover>
        <VueButton
          slot="trigger"
          variant="secondary"
        >
          Add Comment
        </VueButton>
        <span slot="title">New Comment</span>
        <div slot="content">
          <form
            style="display: flex; flex-direction: column; gap: 12px; min-width: 250px;"
            @submit.prevent
          >
            <div>
              <label style="display: block; margin-bottom: 4px; font-size: 14px;">Name</label>
              <input
                type="text"
                placeholder="Your name"
                style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); box-sizing: border-box;"
              >
            </div>
            <div>
              <label style="display: block; margin-bottom: 4px; font-size: 14px;">Comment</label>
              <textarea
                placeholder="Your comment"
                rows="3"
                style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); resize: vertical; box-sizing: border-box;"
              />
            </div>
            <VueButton
              variant="primary"
              type="submit"
            >
              Submit
            </VueButton>
          </form>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h2>Without Close Button</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover :show-close-button="false">
        <VueButton slot="trigger">No Close Button</VueButton>
        <span slot="title">Title Only</span>
        <div slot="content">
          <p>This popover has no close button. Click outside to close.</p>
        </div>
      </VuePopover>
      <VuePopover :arrow="false">
        <VueButton
          slot="trigger"
          variant="secondary"
        >
          No Arrow
        </VueButton>
        <span slot="title">Popover Without Arrow</span>
        <div slot="content">
          <p>This popover doesn't have an arrow pointing to the trigger.</p>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h2>Event Handling</h2>
      <p class="mbs2 mbe3">
        Listen to show and hide events to track when the popover opens and closes.
      </p>
      <div style="margin-bottom: 16px; padding: 12px; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);">
        <p style="margin: 4px 0; font-size: 14px;">
          <strong>Show events:</strong> {{ showCount }}
        </p>
        <p style="margin: 4px 0; font-size: 14px;">
          <strong>Hide events:</strong> {{ hideCount }}
        </p>
      </div>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover
        @show="handleShow"
        @hide="handleHide"
      >
        <VueButton
          slot="trigger"
          variant="primary"
        >
          Toggle Popover
        </VueButton>
        <span slot="title">Event Tracking</span>
        <div slot="content">
          <p>Open and close this popover to see the event counts above.</p>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover class="custom-popover-gradient">
        <VueButton
          slot="trigger"
          variant="primary"
        >
          Gradient Popover
        </VueButton>
        <span
          slot="title"
          style="color: white;"
        >Customized Style</span>
        <div
          slot="content"
          style="color: white;"
        >
          <p style="color: white;">This popover has been customized with CSS Shadow Parts for a gradient background!</p>
        </div>
      </VuePopover>
      <VuePopover class="custom-popover-success">
        <VueButton
          slot="trigger"
          variant="success"
        >
          Success Popover
        </VueButton>
        <span
          slot="title"
          style="color: white;"
        >Success Theme</span>
        <div
          slot="content"
          style="color: white;"
        >
          <p style="color: white;">A success-themed popover with custom styling.</p>
        </div>
      </VuePopover>
    </div>
  </section>
</template>

<script>
import { VuePopover } from "agnosticui-core/popover/vue";
import VueButton from "agnosticui-core/button/vue";
import { Menu, MoreVertical } from "lucide-vue-next";
import { ref } from "vue";

export default {
  name: "PopoverExamples",
  components: {
    VuePopover,
    VueButton,
    Menu,
    MoreVertical,
  },
  setup() {
    const showCount = ref(0);
    const hideCount = ref(0);

    const handleShow = () => {
      showCount.value++;
    };

    const handleHide = () => {
      hideCount.value++;
    };

    return {
      showCount,
      hideCount,
      handleShow,
      handleHide,
    };
  },
};
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-popover-gradient::part(ag-popover) {
  background: linear-gradient(135deg, #4338ca 0%, #6b21a8 100%);
  color: white;
  border: none;
  box-shadow: 0 20px 40px rgba(67, 56, 202, 0.5);
}

/* How to match a custom gradient? Just hide ¯\\_(ツ)_/¯  */
.custom-popover-gradient::part(ag-popover-arrow) {
  display: none;
}

.custom-popover-success::part(ag-popover) {
  background: #059669;
  color: white;
  border: 2px solid #047857;
  box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
}

/* The border-based arrow, floating-ui's flip, and other complexities makes
the ROI on having an arrow questionable. So, we just hide ¯\\_(ツ)_/¯  */
.custom-popover-success::part(ag-popover-arrow) {
  display: none;
}
</style>
`,es=`import { LitElement, html } from 'lit';
import 'agnosticui-core/popover';
import 'agnosticui-core/button';

export class PopoverLitExamples extends LitElement {
  static properties = {
    showCount: { type: Number },
    hideCount: { type: Number }
  };

  constructor() {
    super();
    this.showCount = 0;
    this.hideCount = 0;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleShow() {
    this.showCount++;
  }

  handleHide() {
    this.hideCount++;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Popover</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover>
            <button slot="trigger">Open Popover</button>
            <span slot="title">Popover Title</span>
            <div slot="content">
              <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <ag-button slot="trigger" variant="primary">Button Trigger</ag-button>
            <span slot="title">User Information</span>
            <div slot="content">
              <p>Popovers can contain rich content and interactive elements.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <a
              href="#"
              slot="trigger"
              style="text-decoration: underline; cursor: pointer;"
              @click=\${(e) => e.preventDefault()}
            >
              Link Trigger
            </a>
            <span slot="title">Link Popover</span>
            <div slot="content">
              <p>Popovers can be triggered from links too.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <button
              slot="trigger"
              style="background: none; border: none; cursor: pointer; padding: 8px; display: flex; align-items: center; gap: 4px;"
              aria-label="More options"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
            <span slot="title">More Options</span>
            <div slot="content">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
                  Edit
                </button>
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
                  Share
                </button>
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; color: var(--ag-error); border-radius: var(--ag-radius-sm);">
                  Delete
                </button>
              </div>
            </div>
          </ag-popover>
          <ag-popover>
            <button
              slot="trigger"
              style="background: none; border: none; cursor: pointer; padding: 8px;"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <span slot="title">Navigation Menu</span>
            <div slot="content">
              <nav style="display: flex; flex-direction: column; gap: 4px;">
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >Home</a>
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >About</a>
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >Contact</a>
              </nav>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Trigger Types</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover trigger-type="click">
            <ag-button slot="trigger">Click Trigger</ag-button>
            <span slot="title">Click Popover</span>
            <div slot="content">
              <p>This popover opens when you click the button.</p>
            </div>
          </ag-popover>
          <ag-popover trigger-type="hover">
            <ag-button slot="trigger" variant="secondary">Hover Trigger</ag-button>
            <span slot="title">Hover Popover</span>
            <div slot="content">
              <p>This popover opens when you hover over the button.</p>
            </div>
          </ag-popover>
          <ag-popover trigger-type="focus">
            <ag-button slot="trigger" variant="success">Focus Trigger</ag-button>
            <span slot="title">Focus Popover</span>
            <div slot="content">
              <p>This popover opens when the button receives focus (keyboard navigation).</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Placement Options</h2>
        </div>
        <div
          class="mbe4"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto auto auto; gap: 1rem; place-items: center; max-width: 275px; margin: 0 auto;"
        >
          <div style="grid-column: 2; grid-row: 1;">
            <ag-popover placement="top">
              <ag-button slot="trigger">Top</ag-button>
              <span slot="title">Top Placement</span>
              <div slot="content">
                <p>Popover positioned above</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 3; grid-row: 2;">
            <ag-popover placement="right">
              <ag-button slot="trigger">Right</ag-button>
              <span slot="title">Right Placement</span>
              <div slot="content">
                <p>Popover positioned to the right</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 2; grid-row: 3;">
            <ag-popover placement="bottom">
              <ag-button slot="trigger">Bottom</ag-button>
              <span slot="title">Bottom Placement</span>
              <div slot="content">
                <p>Popover positioned below</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 1; grid-row: 2;">
            <ag-popover placement="left">
              <ag-button slot="trigger">Left</ag-button>
              <span slot="title">Left Placement</span>
              <div slot="content">
                <p>Popover positioned to the left</p>
              </div>
            </ag-popover>
          </div>
        </div>

        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover>
            <ag-button slot="trigger" variant="primary">User Profile</ag-button>
            <span slot="title">John Doe</span>
            <div slot="content">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--ag-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    JD
                  </div>
                  <div>
                    <div style="font-weight: 600;">John Doe</div>
                    <div style="font-size: 14px; color: var(--ag-text-secondary);">john@example.com</div>
                  </div>
                </div>
                <div style="padding-top: 8px; border-top: 1px solid var(--ag-border);">
                  <ag-button variant="primary" style="width: 100%;">View Profile</ag-button>
                </div>
              </div>
            </div>
          </ag-popover>
          <ag-popover>
            <ag-button slot="trigger" variant="secondary">Add Comment</ag-button>
            <span slot="title">New Comment</span>
            <div slot="content">
              <form
                style="display: flex; flex-direction: column; gap: 12px; min-width: 250px;"
                @submit=\${(e) => e.preventDefault()}
              >
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); box-sizing: border-box;"
                  >
                </div>
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Comment</label>
                  <textarea
                    placeholder="Your comment"
                    rows="3"
                    style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); resize: vertical; box-sizing: border-box;"
                  ></textarea>
                </div>
                <ag-button variant="primary" type="submit">Submit</ag-button>
              </form>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Without Close Button</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover show-close-button="false">
            <ag-button slot="trigger">No Close Button</ag-button>
            <span slot="title">Title Only</span>
            <div slot="content">
              <p>This popover has no close button. Click outside to close.</p>
            </div>
          </ag-popover>
          <ag-popover arrow="false">
            <ag-button slot="trigger" variant="secondary">No Arrow</ag-button>
            <span slot="title">Popover Without Arrow</span>
            <div slot="content">
              <p>This popover doesn't have an arrow pointing to the trigger.</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">
            Listen to show and hide events to track when the popover opens and closes.
          </p>
          <div style="margin-bottom: 16px; padding: 12px; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);">
            <p style="margin: 4px 0; font-size: 14px;">
              <strong>Show events:</strong> \${this.showCount}
            </p>
            <p style="margin: 4px 0; font-size: 14px;">
              <strong>Hide events:</strong> \${this.hideCount}
            </p>
          </div>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover
            @show=\${this.handleShow}
            @hide=\${this.handleHide}
          >
            <ag-button slot="trigger" variant="primary">Toggle Popover</ag-button>
            <span slot="title">Event Tracking</span>
            <div slot="content">
              <p>Open and close this popover to see the event counts above.</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover class="custom-popover-gradient">
            <ag-button slot="trigger" variant="primary">Gradient Popover</ag-button>
            <span slot="title" style="color: white;">Customized Style</span>
            <div slot="content" style="color: white;">
              <p style="color: white;">This popover has been customized with CSS Shadow Parts for a gradient background!</p>
            </div>
          </ag-popover>
          <ag-popover class="custom-popover-success">
            <ag-button slot="trigger" variant="success">Success Popover</ag-button>
            <span slot="title" style="color: white;">Success Theme</span>
            <div slot="content" style="color: white;">
              <p style="color: white;">A success-themed popover with custom styling.</p>
            </div>
          </ag-popover>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-popover-gradient::part(ag-popover) {
          background: linear-gradient(135deg, #4338ca 0%, #6b21a8 100%);
          color: white;
          border: none;
          box-shadow: 0 20px 40px rgba(67, 56, 202, 0.5);
        }

        /* How to match a custom gradient? Just hide ¯\\\\_(ツ)_/¯  */
        .custom-popover-gradient::part(ag-popover-arrow) {
          display: none;
        }

        .custom-popover-success::part(ag-popover) {
          background: #059669;
          color: white;
          border: 2px solid #047857;
          box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
        }

        /* The border-based arrow, floating-ui's flip, and other complexities makes
        the ROI on having an arrow questionable. So, we just hide ¯\\\\_(ツ)_/¯  */
        .custom-popover-success::part(ag-popover-arrow) {
          display: none;
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('popover-lit-examples', PopoverLitExamples);
`,ls=`import { useState } from "react";
import { ReactPopover } from "agnosticui-core/popover/react";
import { ReactButton } from "agnosticui-core/button/react";

// Simple SVG icon components
const MoreVertical = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function PopoverReactExamples() {
  const [showCount, setShowCount] = useState(0);
  const [hideCount, setHideCount] = useState(0);

  const handleShow = () => {
    setShowCount(showCount + 1);
  };

  const handleHide = () => {
    setHideCount(hideCount + 1);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Popover</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover>
          <button slot="trigger">Open Popover</button>
          <span slot="title">Popover Title</span>
          <div slot="content">
            <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
          </div>
        </ReactPopover>
        <ReactPopover>
          <ReactButton slot="trigger" variant="primary">Button Trigger</ReactButton>
          <span slot="title">User Information</span>
          <div slot="content">
            <p>Popovers can contain rich content and interactive elements.</p>
          </div>
        </ReactPopover>
        <ReactPopover>
          <a
            href="#"
            slot="trigger"
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={(e) => e.preventDefault()}
          >
            Link Trigger
          </a>
          <span slot="title">Link Popover</span>
          <div slot="content">
            <p>Popovers can be triggered from links too.</p>
          </div>
        </ReactPopover>
        <ReactPopover>
          <button
            slot="trigger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center", gap: "4px" }}
            aria-label="More options"
          >
            <MoreVertical />
          </button>
          <span slot="title">More Options</span>
          <div slot="content">
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button style={{ textAlign: "left", padding: "8px", background: "none", border: "none", cursor: "pointer", borderRadius: "var(--ag-radius-sm)" }}>
                Edit
              </button>
              <button style={{ textAlign: "left", padding: "8px", background: "none", border: "none", cursor: "pointer", borderRadius: "var(--ag-radius-sm)" }}>
                Share
              </button>
              <button style={{ textAlign: "left", padding: "8px", background: "none", border: "none", cursor: "pointer", color: "var(--ag-error)", borderRadius: "var(--ag-radius-sm)" }}>
                Delete
              </button>
            </div>
          </div>
        </ReactPopover>
        <ReactPopover>
          <button
            slot="trigger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
            aria-label="Menu"
          >
            <Menu />
          </button>
          <span slot="title">Navigation Menu</span>
          <div slot="content">
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <a
                href="#"
                style={{ padding: "8px", textDecoration: "none", color: "var(--ag-text-primary)", borderRadius: "var(--ag-radius-sm)" }}
              >Home</a>
              <a
                href="#"
                style={{ padding: "8px", textDecoration: "none", color: "var(--ag-text-primary)", borderRadius: "var(--ag-radius-sm)" }}
              >About</a>
              <a
                href="#"
                style={{ padding: "8px", textDecoration: "none", color: "var(--ag-text-primary)", borderRadius: "var(--ag-radius-sm)" }}
              >Contact</a>
            </nav>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Trigger Types</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover triggerType="click">
          <ReactButton slot="trigger">Click Trigger</ReactButton>
          <span slot="title">Click Popover</span>
          <div slot="content">
            <p>This popover opens when you click the button.</p>
          </div>
        </ReactPopover>
        <ReactPopover triggerType="hover">
          <ReactButton slot="trigger" variant="secondary">Hover Trigger</ReactButton>
          <span slot="title">Hover Popover</span>
          <div slot="content">
            <p>This popover opens when you hover over the button.</p>
          </div>
        </ReactPopover>
        <ReactPopover triggerType="focus">
          <ReactButton slot="trigger" variant="success">Focus Trigger</ReactButton>
          <span slot="title">Focus Popover</span>
          <div slot="content">
            <p>This popover opens when the button receives focus (keyboard navigation).</p>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Placement Options</h2>
      </div>
      <div
        className="mbe4"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto auto", gap: "1rem", placeItems: "center", maxWidth: "275px", margin: "0 auto" }}
      >
        <div style={{ gridColumn: "2", gridRow: "1" }}>
          <ReactPopover placement="top">
            <ReactButton slot="trigger">Top</ReactButton>
            <span slot="title">Top Placement</span>
            <div slot="content">
              <p>Popover positioned above</p>
            </div>
          </ReactPopover>
        </div>
        <div style={{ gridColumn: "3", gridRow: "2" }}>
          <ReactPopover placement="right">
            <ReactButton slot="trigger">Right</ReactButton>
            <span slot="title">Right Placement</span>
            <div slot="content">
              <p>Popover positioned to the right</p>
            </div>
          </ReactPopover>
        </div>
        <div style={{ gridColumn: "2", gridRow: "3" }}>
          <ReactPopover placement="bottom">
            <ReactButton slot="trigger">Bottom</ReactButton>
            <span slot="title">Bottom Placement</span>
            <div slot="content">
              <p>Popover positioned below</p>
            </div>
          </ReactPopover>
        </div>
        <div style={{ gridColumn: "1", gridRow: "2" }}>
          <ReactPopover placement="left">
            <ReactButton slot="trigger">Left</ReactButton>
            <span slot="title">Left Placement</span>
            <div slot="content">
              <p>Popover positioned to the left</p>
            </div>
          </ReactPopover>
        </div>
      </div>

      <div className="mbe4">
        <h2>Rich Content</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover>
          <ReactButton slot="trigger" variant="primary">User Profile</ReactButton>
          <span slot="title">John Doe</span>
          <div slot="content">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--ag-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>
                  JD
                </div>
                <div>
                  <div style={{ fontWeight: "600" }}>John Doe</div>
                  <div style={{ fontSize: "14px", color: "var(--ag-text-secondary)" }}>john@example.com</div>
                </div>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid var(--ag-border)" }}>
                <ReactButton variant="primary" style={{ width: "100%" }}>View Profile</ReactButton>
              </div>
            </div>
          </div>
        </ReactPopover>
        <ReactPopover>
          <ReactButton slot="trigger" variant="secondary">Add Comment</ReactButton>
          <span slot="title">New Comment</span>
          <div slot="content">
            <form
              style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "250px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={{ width: "100%", padding: "8px", border: "1px solid var(--ag-border)", borderRadius: "var(--ag-radius-sm)", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Comment</label>
                <textarea
                  placeholder="Your comment"
                  rows="3"
                  style={{ width: "100%", padding: "8px", border: "1px solid var(--ag-border)", borderRadius: "var(--ag-radius-sm)", resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <ReactButton variant="primary" type="submit">Submit</ReactButton>
            </form>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Without Close Button</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover showCloseButton={false}>
          <ReactButton slot="trigger">No Close Button</ReactButton>
          <span slot="title">Title Only</span>
          <div slot="content">
            <p>This popover has no close button. Click outside to close.</p>
          </div>
        </ReactPopover>
        <ReactPopover arrow={false}>
          <ReactButton slot="trigger" variant="secondary">No Arrow</ReactButton>
          <span slot="title">Popover Without Arrow</span>
          <div slot="content">
            <p>This popover doesn't have an arrow pointing to the trigger.</p>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Event Handling</h2>
        <p className="mbs2 mbe3">
          Listen to show and hide events to track when the popover opens and closes.
        </p>
        <div style={{ marginBottom: "16px", padding: "12px", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)", border: "1px solid var(--ag-border)" }}>
          <p style={{ margin: "4px 0", fontSize: "14px" }}>
            <strong>Show events:</strong> {showCount}
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px" }}>
            <strong>Hide events:</strong> {hideCount}
          </p>
        </div>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover
          onShow={handleShow}
          onHide={handleHide}
        >
          <ReactButton slot="trigger" variant="primary">Toggle Popover</ReactButton>
          <span slot="title">Event Tracking</span>
          <div slot="content">
            <p>Open and close this popover to see the event counts above.</p>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover className="custom-popover-gradient">
          <ReactButton slot="trigger" variant="primary">Gradient Popover</ReactButton>
          <span slot="title" style={{ color: "white" }}>Customized Style</span>
          <div slot="content" style={{ color: "white" }}>
            <p style={{ color: "white" }}>This popover has been customized with CSS Shadow Parts for a gradient background!</p>
          </div>
        </ReactPopover>
        <ReactPopover className="custom-popover-success">
          <ReactButton slot="trigger" variant="success">Success Popover</ReactButton>
          <span slot="title" style={{ color: "white" }}>Success Theme</span>
          <div slot="content" style={{ color: "white" }}>
            <p style={{ color: "white" }}>A success-themed popover with custom styling.</p>
          </div>
        </ReactPopover>
      </div>
    </section>
  );
}
`,fs=JSON.parse('{"title":"Popover","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover.md","filePath":"components/popover.md"}'),ps={name:"components/popover.md"},ws=Object.assign(ps,{setup(o){return(s,l)=>(u(),y("div",null,[l[1]||(l[1]=i("h1",{id:"popover",tabindex:"-1"},[a("Popover "),i("a",{class:"header-anchor",href:"#popover","aria-label":'Permalink to "Popover"'},"​")],-1)),t(B),l[2]||(l[2]=i("p",null,"A popover is a floating element that displays rich content in a panel anchored to a trigger element. Unlike tooltips which show brief hints, popovers can contain interactive content like forms, buttons, and complex layouts.",-1)),l[3]||(l[3]=i("h2",{id:"examples",tabindex:"-1"},[a("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(q,{component:"popover","vue-code":k(as),"lit-code":k(es),"react-code":k(ls)},{vue:n(()=>[t(ns)]),lit:n(()=>[...l[0]||(l[0]=[i("popover-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),l[4]||(l[4]=w("",54))]))}});export{fs as __pageData,ws as default};
