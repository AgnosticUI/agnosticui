var T=Object.defineProperty;var U=(n,s,i)=>s in n?T(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i;var A=(n,s,i)=>U(n,typeof s!="symbol"?s+"":s,i);import{A as $}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as P,z as F,a as D,E as u,x as l}from"./chunks/Button.CFkPNK98.js";import{n as z}from"./chunks/state-CovhUvdr.DWhhlYib.js";import{d as E,p as N,c as m,o as k,r as v,e as y,K as _,_ as L,C as d,j as a,G as e,w as o,F as H,B as J,b as W,ak as G,X as Y,ae as j,a as M,k as B}from"./chunks/framework.NAAYCHZu.js";import{$ as K}from"./chunks/VueAvatar.Bxmfm8pX.js";import{L as O}from"./chunks/VueInput.vue_vue_type_script_setup_true_lang-cOALNmlO.XBEE9wQH.js";import{v as Q}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.BFu3fx1f.js";import{T as X}from"./chunks/trash-2.nw5yXCyH.js";import{c as Z}from"./chunks/createLucideIcon.B61Wqv9x.js";import{S as ss}from"./chunks/send.CyjvY3bo.js";import{M as as}from"./chunks/message-circle.BqeLtm1M.js";import{F as is}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/Icon.DjToxxjJ.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/form-control-utils.CX0RHW4_.js";import"./chunks/sdk.m.DhOmSlC9.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=Z("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);var ns=Object.defineProperty,c=(n,s,i,r)=>{for(var h=void 0,b=n.length-1,t;b>=0;b--)(t=n[b])&&(h=t(s,i,h)||h);return h&&ns(s,i,h),h};const w=class extends D{constructor(){super(),this._avatarError=!1,this.from="them",this.message="",this.time="",this.author="",this.avatarUrl="",this.footer="",this.variant="default"}willUpdate(s){super.willUpdate(s),s.has("avatarUrl")&&(this._avatarError=!1)}_handleAvatarError(){this._avatarError=!0}_formatDateTime(s){const i=new Date(s);return!isNaN(i.getTime())&&s.includes("T")?new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric"}).format(i):s}_getAriaLabel(){const s=[];if(this.author?s.push(`Message from ${this.author}`):s.push("Message"),this.time){const i=this._formatDateTime(this.time);s.push(`at ${i}`)}return s.join(" ")}_renderAvatar(){return this.querySelector('[slot="avatar"]')?l`
        <div class="chat-avatar" part="ag-chat-avatar">
          <slot name="avatar"></slot>
        </div>
      `:this.avatarUrl?this._avatarError?l`
        <div class="chat-avatar" part="ag-chat-avatar">
          <div class="avatar-placeholder" part="ag-avatar-placeholder">
            ${this.author?this.author.charAt(0).toUpperCase():"?"}
          </div>
        </div>
      `:l`
      <div class="chat-avatar" part="ag-chat-avatar">
        <img
          class="avatar-image"
          part="ag-avatar-image"
          src="${this.avatarUrl}"
          alt="${this.author||"Avatar"}"
          @error="${this._handleAvatarError}"
        />
      </div>
    `:u}_renderHeader(){if(this.querySelector('[slot="header"]'))return l`
        <div class="chat-header" part="ag-header">
          <slot name="header"></slot>
        </div>
      `;if(!this.author&&!this.time)return u;const s=this.time?this._formatDateTime(this.time):"",i=this.time&&this.time.includes("T")?this.time:void 0;return l`
      <div class="chat-header" part="ag-header">
        ${this.author?l`<span part="ag-author">${this.author}</span>`:u}
        ${this.time?l`
              <time 
                class="chat-time" 
                part="ag-chat-time"
                datetime="${i||u}"
              >
                ${s}
              </time>
            `:u}
      </div>
    `}_renderFooter(){return this.querySelector('[slot="footer"]')?l`
        <div class="chat-footer" part="ag-footer">
          <slot name="footer"></slot>
        </div>
      `:this.footer?l`
      <div class="chat-footer" part="ag-footer">${this.footer}</div>
    `:u}render(){return l`
      <div class="chat-wrapper" role="article" aria-label="${this._getAriaLabel()}">
        ${this._renderAvatar()}
        ${this._renderHeader()}
        
        <div class="chat-bubble" part="ag-bubble">
          <slot>${this.message}</slot>
        </div>
        
        ${this._renderFooter()}
      </div>
    `}};w.styles=P`
    :host {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: var(--ag-space-2);
      margin-block-end: var(--ag-space-4);
      width: 100%;
    }

    .chat-wrapper {
      display: contents;
    }

    /* Avatar Styles */
    .chat-avatar {
      grid-row: span 2 / span 2;
      align-self: flex-end;
      width: 2.5rem;
      height: 2.5rem;
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      border-radius: var(--ag-radius-full);
      object-fit: cover;
      background-color: var(--ag-background-secondary);
    }

    .avatar-placeholder {
      width: 100%;
      height: 100%;
      border-radius: var(--ag-radius-full);
      background-color: var(--ag-background-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ag-text-secondary);
      font-size: var(--ag-font-size-sm);
    }

    /* Header Styles */
    .chat-header {
      grid-row-start: 1;
      display: flex;
      gap: var(--ag-space-2);
      font-size: var(--ag-font-size-xs);
      color: var(--ag-text-secondary);
      align-items: center;
    }

    /* Bubble Styles */
    .chat-bubble {
      grid-row-end: 3;
      border-radius: var(--ag-radius-lg);
      min-inline-size: 2.5rem;
      max-inline-size: var(--ag-message-bubble-max-width, 90%);
      min-block-size: 2rem;
      padding: var(--ag-space-3) var(--ag-space-4);
      display: inline-flex;
      align-items: center;
      position: relative;
      width: fit-content;
      word-wrap: break-word;
      overflow-wrap: anywhere;
      hyphens: auto;
      font-size: var(--ag-font-size-base);
      line-height: var(--ag-line-height-base);
    }

    .chat-bubble::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0.75rem;
      height: 0.75rem;
      background-color: inherit;
    }

    /* Footer Styles */
    .chat-footer {
      grid-row-start: 3;
      display: flex;
      gap: var(--ag-space-2);
      font-size: var(--ag-font-size-xs);
      color: var(--ag-text-secondary);
      margin-block-start: var(--ag-space-1);
    }

    /* From Them (Start) Layout */
    :host([from="them"]) {
      grid-template-columns: auto 1fr;
      place-items: start;
    }

    :host([from="them"]) .chat-avatar {
      grid-column-start: 1;
    }

    :host([from="them"]) .chat-header,
    :host([from="them"]) .chat-footer {
      grid-column-start: 2;
    }

    :host([from="them"]) .chat-bubble {
      grid-column-start: 2;
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
      border-end-start-radius: var(--ag-radius-sm);
    }

    :host([from="them"]) .chat-bubble::before {
      inset-inline-start: -0.5rem;
      clip-path: polygon(100% 0, 0 100%, 100% 100%);
    }

    /* From Me (End) Layout */
    :host([from="me"]) {
      grid-template-columns: 1fr auto;
      place-items: end;
    }

    :host([from="me"]) .chat-avatar {
      grid-column-start: 2;
    }

    :host([from="me"]) .chat-header,
    :host([from="me"]) .chat-footer {
      grid-column-start: 1;
      justify-content: flex-end;
    }

    :host([from="me"]) .chat-bubble {
      grid-column-start: 1;
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
      border-end-end-radius: var(--ag-radius-sm);
    }

    :host([from="me"]) .chat-bubble::before {
      inset-inline-end: -0.5rem;
      clip-path: polygon(0 0, 0 100%, 100% 100%);
    }

    /* Variant Styles */
    /* Success variant */
    :host([variant="success"]) .chat-bubble {
      background-color: var(--ag-success-background, #d4edda);
      color: var(--ag-success-text, #155724);
    }

    /* Warning variant */
    :host([variant="warning"]) .chat-bubble {
      background-color: var(--ag-warning-background, #fff3cd);
      color: var(--ag-warning-text, #856404);
    }

    /* Danger variant */
    :host([variant="danger"]) .chat-bubble {
      background-color: var(--ag-danger-background, #f8d7da);
      color: var(--ag-danger-text, #721c24);
    }

    /* Info variant */
    :host([variant="info"]) .chat-bubble {
      background-color: var(--ag-info-background, #d1ecf1);
      color: var(--ag-info-text, #0c5460);
    }

    /* Neutral variant */
    :host([variant="neutral"]) .chat-bubble {
      background-color: var(--ag-neutral-background, #e2e3e5);
      color: var(--ag-neutral-text, #383d41);
    }

    /* Monochrome variant */
    :host([variant="monochrome"]) .chat-bubble {
      background-color: var(--ag-monochrome-background, #6c757d);
      color: var(--ag-monochrome-text, #ffffff);
    }
  `;let g=w;c([F({type:String,reflect:!0})],g.prototype,"from");c([F({type:String})],g.prototype,"message");c([F({type:String})],g.prototype,"time");c([F({type:String})],g.prototype,"author");c([F({type:String,attribute:"avatar-url"})],g.prototype,"avatarUrl");c([F({type:String})],g.prototype,"footer");c([F({type:String,reflect:!0})],g.prototype,"variant");c([z()],g.prototype,"_avatarError");customElements.get("ag-message-bubble")||customElements.define("ag-message-bubble",g);const ts=["from","message","time","author","avatar-url","footer","variant"],ls={key:1,slot:"header"},rs={key:2,slot:"footer"},hs={key:3,slot:"avatar"},os=E({__name:"VueMessageBubble",props:{from:{default:"them"},message:{default:""},time:{default:""},author:{default:""},avatarUrl:{default:""},footer:{default:""},variant:{default:"default"}},setup(n){const s=N(null);return(i,r)=>(k(),m("ag-message-bubble",_({ref_key:"agComponent",ref:s,from:n.from,message:n.message,time:n.time,author:n.author,"avatar-url":n.avatarUrl,footer:n.footer,variant:n.variant},i.$attrs),[i.$slots.default?v(i.$slots,"default",{key:0}):y("",!0),i.$slots.header?(k(),m("span",ls,[v(i.$slots,"header")])):y("",!0),i.$slots.footer?(k(),m("span",rs,[v(i.$slots,"footer")])):y("",!0),i.$slots.avatar?(k(),m("span",hs,[v(i.$slots,"avatar")])):y("",!0)],16,ts))}}),ps=E({name:"MessageBubbleExamples",components:{VueMessageBubble:os,VueAvatar:K,VueInput:O,VueButton:Q,MessageCircle:as,Send:ss,Bot:es,Trash2:X},data(){return{newMessage:"",messages:[],messageIdCounter:1,botResponses:["That's interesting! Tell me more.","I understand what you mean.","Thanks for sharing that!","Great point!","I appreciate your message.","That makes sense to me.","Interesting perspective!"]}},methods:{sendMessage(){if(!this.newMessage.trim())return;const s=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});this.messages.push({id:this.messageIdCounter++,from:"me",text:this.newMessage,author:"Me",time:s,avatarUrl:"https://i.pravatar.cc/150?img=8",footer:"Sent"}),this.newMessage="",this.$nextTick(()=>{const i=this.$el.querySelector(".messages-container");i&&(i.scrollTop=i.scrollHeight)})},addBotResponse(){const s=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),i=this.botResponses[Math.floor(Math.random()*this.botResponses.length)];this.messages.push({id:this.messageIdCounter++,from:"them",text:i,author:"AI Assistant",time:s,avatarUrl:"https://i.pravatar.cc/150?img=5",footer:"Read"}),this.$nextTick(()=>{const r=this.$el.querySelector(".messages-container");r&&(r.scrollTop=r.scrollHeight)})},clearMessages(){confirm("Are you sure you want to clear all messages?")&&(this.messages=[],this.messageIdCounter=1)}}}),ks={class:"chat-demo-container mbe6"},gs={class:"messages-container"},ds={key:0,class:"empty-state"},ms={class:"input-area"},cs={class:"quick-actions"},Fs={class:"message-container mbe6"},us={class:"message-container mbe6"},ys={class:"message-container mbe6"},bs={class:"variant-section"},vs={class:"variant-section"},fs={class:"variant-section"},Cs={class:"variant-section"},Bs={class:"variant-section"},As={class:"variant-section"},Ms={class:"message-container mbe6"},Ds={class:"message-container mbe6"},Es={class:"message-container mbe6"};function ws(n,s,i,r,h,b){const t=d("VueMessageBubble"),x=d("MessageCircle"),S=d("VueInput"),I=d("Send"),f=d("VueButton"),R=d("Bot"),V=d("Trash2"),C=d("VueAvatar");return k(),m("section",null,[s[10]||(s[10]=a("div",{class:"mbe4"},[a("h2",null,"Interactive Chat Demo"),a("p",null,"Type a message and click Send to add it to the conversation. This demonstrates real-world integration with VueInput and VueButton.")],-1)),a("div",ks,[a("div",gs,[e(G,{name:"message-fade"},{default:o(()=>[(k(!0),m(H,null,J(n.messages,p=>(k(),W(t,{key:p.id,from:p.from,message:p.text,author:p.author,time:p.time,"avatar-url":p.avatarUrl,footer:p.footer,class:"message-item"},null,8,["from","message","author","time","avatar-url","footer"]))),128))]),_:1}),n.messages.length===0?(k(),m("div",ds," No messages yet. Start the conversation! ")):y("",!0)]),a("div",ms,[e(S,{value:n.newMessage,"onUpdate:value":s[0]||(s[0]=p=>n.newMessage=p),placeholder:"Type your message...",rounded:"",onKeyup:Y(n.sendMessage,["enter"])},{"addon-left":o(()=>[e(x,{size:18,color:"var(--ag-primary)"})]),_:1},8,["value","onKeyup"]),e(f,{variant:"primary",shape:"rounded",onClick:n.sendMessage,disabled:!n.newMessage.trim(),class:"send-button"},{default:o(()=>[e(I,{size:18}),s[1]||(s[1]=a("span",{class:"mis1"},"Send",-1))]),_:1},8,["onClick","disabled"])]),a("div",cs,[e(f,{size:"sm",shape:"rounded",bordered:!0,onClick:n.addBotResponse,class:"mie2"},{default:o(()=>[e(R,{size:16}),s[2]||(s[2]=a("span",{class:"mis1"},"Add Bot Reply",-1))]),_:1},8,["onClick"]),e(f,{size:"sm",shape:"rounded",variant:"danger",bordered:!0,onClick:n.clearMessages},{default:o(()=>[e(V,{size:16}),s[3]||(s[3]=a("span",{class:"mis1"},"Clear All",-1))]),_:1},8,["onClick"])])]),s[11]||(s[11]=a("div",{class:"mbe4"},[a("h2",null,"Basic Message Bubbles"),a("p",null,'Messages can be sent from "me" or "them" with author, time, and optional footer.')],-1)),a("div",Fs,[e(t,{from:"them",message:"Hey, are we still on for lunch?",author:"Sarah",time:"11:30 AM"}),e(t,{from:"me",message:"Yes! Where should we go?",author:"Me",time:"11:32 AM"}),e(t,{from:"them",message:"How about that new Italian place?",author:"Sarah",time:"11:33 AM"}),e(t,{from:"me",message:"Sounds perfect. See you there at 12:30.",author:"Me",time:"11:35 AM"})]),s[12]||(s[12]=a("div",{class:"mbe4"},[a("h2",null,"Delivery Status"),a("p",null,"Use the footer prop to display delivery status indicators.")],-1)),a("div",us,[e(t,{from:"me",message:"Hey, did you get my last message?",author:"Me",time:"2:30 PM",footer:"Delivered"}),e(t,{from:"me",message:"Just checking in!",author:"Me",time:"2:31 PM",footer:"Seen"}),e(t,{from:"them",message:"Yes, I saw it! Thanks for sending.",author:"Sarah",time:"2:32 PM",footer:"Read"}),e(t,{from:"me",message:"Great! Let's catch up later.",author:"Me",time:"2:33 PM",footer:"Sending..."})]),s[13]||(s[13]=a("div",{class:"mbe4"},[a("h2",null,"Color Variants"),a("p",null,"Different semantic variants for various message types.")],-1)),a("div",ys,[a("div",bs,[s[4]||(s[4]=a("h3",null,"Success",-1)),e(t,{from:"them",message:"Payment completed successfully!",author:"System",time:"10:02 AM",variant:"success"}),e(t,{from:"me",message:"Great, thanks for confirming",author:"Me",time:"10:03 AM",variant:"success"})]),a("div",vs,[s[5]||(s[5]=a("h3",null,"Warning",-1)),e(t,{from:"them",message:"Your session will expire in 5 minutes",author:"System",time:"10:04 AM",variant:"warning"}),e(t,{from:"me",message:"I'll save my work now",author:"Me",time:"10:05 AM",variant:"warning"})]),a("div",fs,[s[6]||(s[6]=a("h3",null,"Danger",-1)),e(t,{from:"them",message:"Error: Unable to process your request",author:"System",time:"10:06 AM",variant:"danger"}),e(t,{from:"me",message:"Let me try again",author:"Me",time:"10:07 AM",variant:"danger"})]),a("div",Cs,[s[7]||(s[7]=a("h3",null,"Info",-1)),e(t,{from:"them",message:"New features available in version 2.0",author:"System",time:"10:08 AM",variant:"info"}),e(t,{from:"me",message:"Sounds interesting!",author:"Me",time:"10:09 AM",variant:"info"})]),a("div",Bs,[s[8]||(s[8]=a("h3",null,"Neutral",-1)),e(t,{from:"them",message:"This is a neutral informational message",author:"System",time:"10:10 AM",variant:"neutral"})]),a("div",As,[s[9]||(s[9]=a("h3",null,"Monochrome",-1)),e(t,{from:"them",message:"Simple monochrome styling",author:"System",time:"10:12 AM",variant:"monochrome"})])]),s[14]||(s[14]=a("div",{class:"mbe4"},[a("h2",null,"With Avatar URLs"),a("p",null,"Display user avatars using the avatarUrl prop.")],-1)),a("div",Ms,[e(t,{from:"them",message:"I have an avatar!",author:"Jane Smith",time:"10:05 AM","avatar-url":"https://i.pravatar.cc/150?img=1"}),e(t,{from:"me",message:"Me too!",author:"Me",time:"10:06 AM","avatar-url":"https://i.pravatar.cc/150?img=2"})]),s[15]||(s[15]=a("div",{class:"mbe4"},[a("h2",null,"Custom Avatar Component"),a("p",null,"Use the avatar slot to provide custom avatar components with more control.")],-1)),a("div",Ds,[e(t,{from:"them",message:"I'm using a custom Avatar component with text initials!",author:"Jane Smith",time:"10:00 AM"},{avatar:o(()=>[e(C,{text:"JS",variant:"info",size:"sm"})]),_:1}),e(t,{from:"me",message:"And I'm using an Avatar with an image and different styling!",author:"Me",time:"10:01 AM"},{avatar:o(()=>[e(C,{"img-src":"https://i.pravatar.cc/150?img=10","img-alt":"User avatar",variant:"success",size:"sm"})]),_:1}),e(t,{from:"them",message:"Avatar components give you more control over styling and variants!",author:"Alex Chen",time:"10:02 AM"},{avatar:o(()=>[e(C,{text:"AC",variant:"warning",size:"sm",shape:"square"})]),_:1})]),s[16]||(s[16]=a("div",{class:"mbe4"},[a("h2",null,"Long Content"),a("p",null,"Message bubbles adapt to longer content with proper text wrapping.")],-1)),a("div",Es,[e(t,{from:"them",message:"This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text.",author:"Alex",time:"10:20 AM","avatar-url":"https://i.pravatar.cc/150?img=4"}),e(t,{from:"me",message:"I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy.",author:"Me",time:"10:21 AM",footer:"Delivered","avatar-url":"https://i.pravatar.cc/150?img=8"})])])}const qs=L(ps,[["render",ws],["__scopeId","data-v-ca6e9108"]]);class q extends D{constructor(){super(),this.newMessage="",this.messages=[],this.messageIdCounter=1,this.botResponses=["That's interesting! Tell me more.","I understand what you mean.","Thanks for sharing that!","Great point!","I appreciate your message.","That makes sense to me.","Interesting perspective!"]}createRenderRoot(){return this}sendMessage(){if(!this.newMessage.trim())return;const i=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});this.messages=[...this.messages,{id:this.messageIdCounter++,from:"me",text:this.newMessage,author:"Me",time:i,avatarUrl:"https://i.pravatar.cc/150?img=8",footer:"Sent"}],this.newMessage="",setTimeout(()=>{const r=this.querySelector(".messages-container");r&&(r.scrollTop=r.scrollHeight)},0)}addBotResponse(){const i=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),r=this.botResponses[Math.floor(Math.random()*this.botResponses.length)];this.messages=[...this.messages,{id:this.messageIdCounter++,from:"them",text:r,author:"AI Assistant",time:i,avatarUrl:"https://i.pravatar.cc/150?img=5",footer:"Read"}],setTimeout(()=>{const h=this.querySelector(".messages-container");h&&(h.scrollTop=h.scrollHeight)},0)}clearMessages(){confirm("Are you sure you want to clear all messages?")&&(this.messages=[],this.messageIdCounter=1)}handleKeyUp(s){s.key==="Enter"&&this.sendMessage()}handleInput(s){this.newMessage=s.target.value}render(){return l`
      <section>
        <!-- Interactive Chat Demo -->
        <div class="mbe4">
          <h2>Interactive Chat Demo</h2>
          <p>Type a message and click Send to add it to the conversation. This demonstrates real-world integration with ag-input and ag-button.</p>
        </div>
        <div class="chat-demo-container mbe6">
          <!-- Messages Container -->
          <div class="messages-container">
            ${this.messages.map(s=>l`
              <ag-message-bubble
                from=${s.from}
                message=${s.text}
                author=${s.author}
                time=${s.time}
                avatar-url=${s.avatarUrl}
                footer=${s.footer}
                class="message-item"
              ></ag-message-bubble>
            `)}

            ${this.messages.length===0?l`
              <div class="empty-state">
                No messages yet. Start the conversation!
              </div>
            `:""}
          </div>

          <!-- Input Area -->
          <div class="input-area">
            <ag-input
              .value=${this.newMessage}
              @input=${this.handleInput}
              @keyup=${this.handleKeyUp}
              placeholder="Type your message..."
              rounded
            >
              <ag-icon slot="addon-left" size="18">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-primary)" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </ag-icon>
            </ag-input>

            <ag-button
              variant="primary"
              shape="rounded"
              @click=${this.sendMessage}
              ?disabled=${!this.newMessage.trim()}
              class="send-button"
            >
              <ag-icon size="18" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </ag-icon>
              <span class="mis1">Send</span>
            </ag-button>
          </div>

          <!-- Quick Actions -->
          <div class="quick-actions">
            <ag-button
              size="sm"
              shape="rounded"
              bordered
              @click=${this.addBotResponse}
              class="mie2"
            >
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </ag-icon>
              <span class="mis1">Add Bot Reply</span>
            </ag-button>

            <ag-button
              size="sm"
              shape="rounded"
              variant="danger"
              bordered
              @click=${this.clearMessages}
            >
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </ag-icon>
              <span class="mis1">Clear All</span>
            </ag-button>
          </div>
        </div>

        <!-- Basic Example -->
        <div class="mbe4">
          <h2>Basic Message Bubbles</h2>
          <p>Messages can be sent from "me" or "them" with author, time, and optional footer.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="Hey, are we still on for lunch?"
            author="Sarah"
            time="11:30 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Yes! Where should we go?"
            author="Me"
            time="11:32 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="How about that new Italian place?"
            author="Sarah"
            time="11:33 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Sounds perfect. See you there at 12:30."
            author="Me"
            time="11:35 AM"
          ></ag-message-bubble>
        </div>

        <!-- Delivery Status -->
        <div class="mbe4">
          <h2>Delivery Status</h2>
          <p>Use the footer prop to display delivery status indicators.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="me"
            message="Hey, did you get my last message?"
            author="Me"
            time="2:30 PM"
            footer="Delivered"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Just checking in!"
            author="Me"
            time="2:31 PM"
            footer="Seen"
          ></ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="Yes, I saw it! Thanks for sending."
            author="Sarah"
            time="2:32 PM"
            footer="Read"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Great! Let's catch up later."
            author="Me"
            time="2:33 PM"
            footer="Sending..."
          ></ag-message-bubble>
        </div>

        <!-- Color Variants -->
        <div class="mbe4">
          <h2>Color Variants</h2>
          <p>Different semantic variants for various message types.</p>
        </div>
        <div class="message-container mbe6">
          <div class="variant-section">
            <h3>Success</h3>
            <ag-message-bubble
              from="them"
              message="Payment completed successfully!"
              author="System"
              time="10:02 AM"
              variant="success"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Great, thanks for confirming"
              author="Me"
              time="10:03 AM"
              variant="success"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Warning</h3>
            <ag-message-bubble
              from="them"
              message="Your session will expire in 5 minutes"
              author="System"
              time="10:04 AM"
              variant="warning"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="I'll save my work now"
              author="Me"
              time="10:05 AM"
              variant="warning"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Danger</h3>
            <ag-message-bubble
              from="them"
              message="Error: Unable to process your request"
              author="System"
              time="10:06 AM"
              variant="danger"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Let me try again"
              author="Me"
              time="10:07 AM"
              variant="danger"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Info</h3>
            <ag-message-bubble
              from="them"
              message="New features available in version 2.0"
              author="System"
              time="10:08 AM"
              variant="info"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Sounds interesting!"
              author="Me"
              time="10:09 AM"
              variant="info"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Neutral</h3>
            <ag-message-bubble
              from="them"
              message="This is a neutral informational message"
              author="System"
              time="10:10 AM"
              variant="neutral"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Monochrome</h3>
            <ag-message-bubble
              from="them"
              message="Simple monochrome styling"
              author="System"
              time="10:12 AM"
              variant="monochrome"
            ></ag-message-bubble>
          </div>
        </div>

        <!-- With Avatars -->
        <div class="mbe4">
          <h2>With Avatar URLs</h2>
          <p>Display user avatars using the avatarUrl prop.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="I have an avatar!"
            author="Jane Smith"
            time="10:05 AM"
            avatar-url="https://i.pravatar.cc/150?img=1"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Me too!"
            author="Me"
            time="10:06 AM"
            avatar-url="https://i.pravatar.cc/150?img=2"
          ></ag-message-bubble>
        </div>

        <!-- Custom Avatar Slot -->
        <div class="mbe4">
          <h2>Custom Avatar Component</h2>
          <p>Use the avatar slot to provide custom avatar components with more control.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="I'm using a custom Avatar component with text initials!"
            author="Jane Smith"
            time="10:00 AM"
          >
            <ag-avatar slot="avatar" text="JS" variant="info" size="sm"></ag-avatar>
          </ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="And I'm using an Avatar with an image and different styling!"
            author="Me"
            time="10:01 AM"
          >
            <ag-avatar
              slot="avatar"
              img-src="https://i.pravatar.cc/150?img=10"
              img-alt="User avatar"
              variant="success"
              size="sm"
            ></ag-avatar>
          </ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="Avatar components give you more control over styling and variants!"
            author="Alex Chen"
            time="10:02 AM"
          >
            <ag-avatar
              slot="avatar"
              text="AC"
              variant="warning"
              size="sm"
              shape="square"
            ></ag-avatar>
          </ag-message-bubble>
        </div>

        <!-- Long Content -->
        <div class="mbe4">
          <h2>Long Content</h2>
          <p>Message bubbles adapt to longer content with proper text wrapping.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text."
            author="Alex"
            time="10:20 AM"
            avatar-url="https://i.pravatar.cc/150?img=4"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy."
            author="Me"
            time="10:21 AM"
            footer="Delivered"
            avatar-url="https://i.pravatar.cc/150?img=8"
          ></ag-message-bubble>
        </div>
      </section>

      <style>
        /* Chat Demo Styles */
        .chat-demo-container {
          max-width: 700px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 12px;
          padding: 20px;
          background-color: var(--vp-c-bg);
        }

        .messages-container {
          min-height: 400px;
          max-height: 500px;
          overflow-y: auto;
          padding: 20px;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 360px;
          color: var(--vp-c-text-3);
          font-style: italic;
        }

        .input-area {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          align-items: flex-end;
        }

        .input-area > :first-child {
          flex: 1;
        }

        .send-button {
          flex-shrink: 0;
        }

        .quick-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* Scrollbar styling */
        .messages-container::-webkit-scrollbar {
          width: 8px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: var(--vp-c-bg);
          border-radius: 4px;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: var(--vp-c-divider);
          border-radius: 4px;
        }

        .messages-container::-webkit-scrollbar-thumb:hover {
          background: var(--vp-c-text-3);
        }

        /* Standard Example Styles */
        .message-container {
          max-width: 600px;
          border: 1px solid var(--vp-c-divider);
          padding: 20px;
          border-radius: 8px;
          background-color: var(--vp-c-bg-soft);
        }

        .variant-section {
          margin-bottom: 24px;
        }

        .variant-section:last-child {
          margin-bottom: 0;
        }

        .variant-section h4 {
          margin: 0 0 12px 0;
          font-size: 13px;
          font-weight: 600;
          color: var(--vp-c-text-2);
        }
      </style>
    `}}A(q,"properties",{newMessage:{type:String},messages:{type:Array},messageIdCounter:{type:Number}});customElements.define("message-bubble-lit-examples",q);const xs=`<template>
  <section>
    <!-- Interactive Chat Demo -->
    <div class="mbe4">
      <h2>Interactive Chat Demo</h2>
      <p>Type a message and click Send to add it to the conversation. This demonstrates real-world integration with VueInput and VueButton.</p>
    </div>
    <div class="chat-demo-container mbe6">
      <!-- Messages Container -->
      <div class="messages-container">
        <TransitionGroup name="message-fade">
          <VueMessageBubble
            v-for="message in messages"
            :key="message.id"
            :from="message.from"
            :message="message.text"
            :author="message.author"
            :time="message.time"
            :avatar-url="message.avatarUrl"
            :footer="message.footer"
            class="message-item"
          />
        </TransitionGroup>

        <div
          v-if="messages.length === 0"
          class="empty-state"
        >
          No messages yet. Start the conversation!
        </div>
      </div>

      <!-- Input Area -->
      <div class="input-area">
        <VueInput
          v-model:value="newMessage"
          placeholder="Type your message..."
          rounded
          @keyup.enter="sendMessage"
        >
          <template #addon-left>
            <MessageCircle
              :size="18"
              color="var(--ag-primary)"
            />
          </template>
        </VueInput>

        <VueButton
          variant="primary"
          shape="rounded"
          @click="sendMessage"
          :disabled="!newMessage.trim()"
          class="send-button"
        >
          <Send :size="18" />
          <span class="mis1">Send</span>
        </VueButton>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <VueButton
          size="sm"
          shape="rounded"
          :bordered="true"
          @click="addBotResponse"
          class="mie2"
        >
          <Bot :size="16" />
          <span class="mis1">Add Bot Reply</span>
        </VueButton>

        <VueButton
          size="sm"
          shape="rounded"
          variant="danger"
          :bordered="true"
          @click="clearMessages"
        >
          <Trash2 :size="16" />
          <span class="mis1">Clear All</span>
        </VueButton>
      </div>
    </div>

    <!-- Basic Example -->
    <div class="mbe4">
      <h2>Basic Message Bubbles</h2>
      <p>Messages can be sent from "me" or "them" with author, time, and optional footer.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="Hey, are we still on for lunch?"
        author="Sarah"
        time="11:30 AM"
      />
      <VueMessageBubble
        from="me"
        message="Yes! Where should we go?"
        author="Me"
        time="11:32 AM"
      />
      <VueMessageBubble
        from="them"
        message="How about that new Italian place?"
        author="Sarah"
        time="11:33 AM"
      />
      <VueMessageBubble
        from="me"
        message="Sounds perfect. See you there at 12:30."
        author="Me"
        time="11:35 AM"
      />
    </div>

    <!-- Delivery Status -->
    <div class="mbe4">
      <h2>Delivery Status</h2>
      <p>Use the footer prop to display delivery status indicators.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="me"
        message="Hey, did you get my last message?"
        author="Me"
        time="2:30 PM"
        footer="Delivered"
      />
      <VueMessageBubble
        from="me"
        message="Just checking in!"
        author="Me"
        time="2:31 PM"
        footer="Seen"
      />
      <VueMessageBubble
        from="them"
        message="Yes, I saw it! Thanks for sending."
        author="Sarah"
        time="2:32 PM"
        footer="Read"
      />
      <VueMessageBubble
        from="me"
        message="Great! Let's catch up later."
        author="Me"
        time="2:33 PM"
        footer="Sending..."
      />
    </div>

    <!-- Color Variants -->
    <div class="mbe4">
      <h2>Color Variants</h2>
      <p>Different semantic variants for various message types.</p>
    </div>
    <div class="message-container mbe6">
      <div class="variant-section">
        <h3>Success</h3>
        <VueMessageBubble
          from="them"
          message="Payment completed successfully!"
          author="System"
          time="10:02 AM"
          variant="success"
        />
        <VueMessageBubble
          from="me"
          message="Great, thanks for confirming"
          author="Me"
          time="10:03 AM"
          variant="success"
        />
      </div>

      <div class="variant-section">
        <h3>Warning</h3>
        <VueMessageBubble
          from="them"
          message="Your session will expire in 5 minutes"
          author="System"
          time="10:04 AM"
          variant="warning"
        />
        <VueMessageBubble
          from="me"
          message="I'll save my work now"
          author="Me"
          time="10:05 AM"
          variant="warning"
        />
      </div>

      <div class="variant-section">
        <h3>Danger</h3>
        <VueMessageBubble
          from="them"
          message="Error: Unable to process your request"
          author="System"
          time="10:06 AM"
          variant="danger"
        />
        <VueMessageBubble
          from="me"
          message="Let me try again"
          author="Me"
          time="10:07 AM"
          variant="danger"
        />
      </div>

      <div class="variant-section">
        <h3>Info</h3>
        <VueMessageBubble
          from="them"
          message="New features available in version 2.0"
          author="System"
          time="10:08 AM"
          variant="info"
        />
        <VueMessageBubble
          from="me"
          message="Sounds interesting!"
          author="Me"
          time="10:09 AM"
          variant="info"
        />
      </div>

      <div class="variant-section">
        <h3>Neutral</h3>
        <VueMessageBubble
          from="them"
          message="This is a neutral informational message"
          author="System"
          time="10:10 AM"
          variant="neutral"
        />
      </div>

      <div class="variant-section">
        <h3>Monochrome</h3>
        <VueMessageBubble
          from="them"
          message="Simple monochrome styling"
          author="System"
          time="10:12 AM"
          variant="monochrome"
        />
      </div>
    </div>

    <!-- With Avatars -->
    <div class="mbe4">
      <h2>With Avatar URLs</h2>
      <p>Display user avatars using the avatarUrl prop.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="I have an avatar!"
        author="Jane Smith"
        time="10:05 AM"
        avatar-url="https://i.pravatar.cc/150?img=1"
      />
      <VueMessageBubble
        from="me"
        message="Me too!"
        author="Me"
        time="10:06 AM"
        avatar-url="https://i.pravatar.cc/150?img=2"
      />
    </div>

    <!-- Custom Avatar Slot -->
    <div class="mbe4">
      <h2>Custom Avatar Component</h2>
      <p>Use the avatar slot to provide custom avatar components with more control.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="I'm using a custom Avatar component with text initials!"
        author="Jane Smith"
        time="10:00 AM"
      >
        <template #avatar>
          <VueAvatar
            text="JS"
            variant="info"
            size="sm"
          />
        </template>
      </VueMessageBubble>
      <VueMessageBubble
        from="me"
        message="And I'm using an Avatar with an image and different styling!"
        author="Me"
        time="10:01 AM"
      >
        <template #avatar>
          <VueAvatar
            img-src="https://i.pravatar.cc/150?img=10"
            img-alt="User avatar"
            variant="success"
            size="sm"
          />
        </template>
      </VueMessageBubble>
      <VueMessageBubble
        from="them"
        message="Avatar components give you more control over styling and variants!"
        author="Alex Chen"
        time="10:02 AM"
      >
        <template #avatar>
          <VueAvatar
            text="AC"
            variant="warning"
            size="sm"
            shape="square"
          />
        </template>
      </VueMessageBubble>
    </div>

    <!-- Long Content -->
    <div class="mbe4">
      <h2>Long Content</h2>
      <p>Message bubbles adapt to longer content with proper text wrapping.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text."
        author="Alex"
        time="10:20 AM"
        avatar-url="https://i.pravatar.cc/150?img=4"
      />
      <VueMessageBubble
        from="me"
        message="I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy."
        author="Me"
        time="10:21 AM"
        footer="Delivered"
        avatar-url="https://i.pravatar.cc/150?img=8"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueMessageBubble } from "agnosticui-core/message-bubble/vue";
import { VueAvatar } from "agnosticui-core/avatar/vue";
import VueInput from "agnosticui-core/input/vue";
import VueButton from "agnosticui-core/button/vue";
import { MessageCircle, Send, Bot, Trash2 } from "lucide-vue-next";

export default defineComponent({
  name: "MessageBubbleExamples",
  components: {
    VueMessageBubble,
    VueAvatar,
    VueInput,
    VueButton,
    MessageCircle,
    Send,
    Bot,
    Trash2,
  },
  data() {
    return {
      newMessage: "",
      messages: [] as Array<{
        id: number;
        from: "me" | "them";
        text: string;
        author: string;
        time: string;
        avatarUrl: string;
        footer: string;
      }>,
      messageIdCounter: 1,
      botResponses: [
        "That's interesting! Tell me more.",
        "I understand what you mean.",
        "Thanks for sharing that!",
        "Great point!",
        "I appreciate your message.",
        "That makes sense to me.",
        "Interesting perspective!",
      ],
    };
  },
  methods: {
    sendMessage() {
      if (!this.newMessage.trim()) return;

      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      this.messages.push({
        id: this.messageIdCounter++,
        from: "me",
        text: this.newMessage,
        author: "Me",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=8",
        footer: "Sent",
      });

      // Clear input
      this.newMessage = "";

      // Auto-scroll to bottom
      this.$nextTick(() => {
        const container = this.$el.querySelector(".messages-container");
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },

    addBotResponse() {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const randomResponse =
        this.botResponses[Math.floor(Math.random() * this.botResponses.length)];

      this.messages.push({
        id: this.messageIdCounter++,
        from: "them",
        text: randomResponse,
        author: "AI Assistant",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=5",
        footer: "Read",
      });

      // Auto-scroll to bottom
      this.$nextTick(() => {
        const container = this.$el.querySelector(".messages-container");
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },

    clearMessages() {
      if (confirm("Are you sure you want to clear all messages?")) {
        this.messages = [];
        this.messageIdCounter = 1;
      }
    },
  },
});
<\/script>

<style scoped>
/* Chat Demo Styles */
.chat-demo-container {
  max-width: 700px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  background-color: var(--vp-c-bg);
}

.messages-container {
  min-height: 400px;
  max-height: 500px;
  overflow-y: auto;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  margin-bottom: 16px;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 360px;
  color: var(--vp-c-text-3);
  font-style: italic;
}

.message-fade-enter-active {
  animation: message-fade-in var(--ag-motion-medium, 0.2s) ease-out;
}

.message-fade-leave-active {
  animation: message-fade-out var(--ag-motion-fast, 0.15s) ease-in;
}

.message-fade-move {
  transition: transform var(--ag-motion-medium, 0.2s) ease;
}

@keyframes message-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes message-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

.input-area {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-end;
}

.input-area > :first-child {
  flex: 1;
}

.send-button {
  flex-shrink: 0;
}

.quick-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* Scrollbar styling */
.messages-container::-webkit-scrollbar {
  width: 8px;
}

.messages-container::-webkit-scrollbar-track {
  background: var(--vp-c-bg);
  border-radius: 4px;
}

.messages-container::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 4px;
}

.messages-container::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-text-3);
}

/* Standard Example Styles */
.message-container {
  max-width: 600px;
  border: 1px solid var(--vp-c-divider);
  padding: 20px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.variant-section {
  margin-bottom: 24px;
}

.variant-section:last-child {
  margin-bottom: 0;
}

.variant-section h4 {
  margin: 0 0 12px 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
</style>
`,Ss=`import { LitElement, html } from 'lit';
import 'agnosticui-core/message-bubble';
import 'agnosticui-core/avatar';
import 'agnosticui-core/input';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';

export class MessageBubbleLitExamples extends LitElement {
  static properties = {
    newMessage: { type: String },
    messages: { type: Array },
    messageIdCounter: { type: Number }
  };

  constructor() {
    super();
    this.newMessage = '';
    this.messages = [];
    this.messageIdCounter = 1;
    this.botResponses = [
      "That's interesting! Tell me more.",
      "I understand what you mean.",
      "Thanks for sharing that!",
      "Great point!",
      "I appreciate your message.",
      "That makes sense to me.",
      "Interesting perspective!",
    ];
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    this.messages = [...this.messages, {
      id: this.messageIdCounter++,
      from: "me",
      text: this.newMessage,
      author: "Me",
      time: time,
      avatarUrl: "https://i.pravatar.cc/150?img=8",
      footer: "Sent",
    }];

    this.newMessage = '';

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = this.querySelector('.messages-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  }

  addBotResponse() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const randomResponse =
      this.botResponses[Math.floor(Math.random() * this.botResponses.length)];

    this.messages = [...this.messages, {
      id: this.messageIdCounter++,
      from: "them",
      text: randomResponse,
      author: "AI Assistant",
      time: time,
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      footer: "Read",
    }];

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = this.querySelector('.messages-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  }

  clearMessages() {
    if (confirm("Are you sure you want to clear all messages?")) {
      this.messages = [];
      this.messageIdCounter = 1;
    }
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  handleInput(e) {
    this.newMessage = e.target.value;
  }

  render() {
    return html\`
      <section>
        <!-- Interactive Chat Demo -->
        <div class="mbe4">
          <h2>Interactive Chat Demo</h2>
          <p>Type a message and click Send to add it to the conversation. This demonstrates real-world integration with ag-input and ag-button.</p>
        </div>
        <div class="chat-demo-container mbe6">
          <!-- Messages Container -->
          <div class="messages-container">
            \${this.messages.map(message => html\`
              <ag-message-bubble
                from=\${message.from}
                message=\${message.text}
                author=\${message.author}
                time=\${message.time}
                avatar-url=\${message.avatarUrl}
                footer=\${message.footer}
                class="message-item"
              ></ag-message-bubble>
            \`)}

            \${this.messages.length === 0 ? html\`
              <div class="empty-state">
                No messages yet. Start the conversation!
              </div>
            \` : ''}
          </div>

          <!-- Input Area -->
          <div class="input-area">
            <ag-input
              .value=\${this.newMessage}
              @input=\${this.handleInput}
              @keyup=\${this.handleKeyUp}
              placeholder="Type your message..."
              rounded
            >
              <ag-icon slot="addon-left" size="18">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-primary)" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </ag-icon>
            </ag-input>

            <ag-button
              variant="primary"
              shape="rounded"
              @click=\${this.sendMessage}
              ?disabled=\${!this.newMessage.trim()}
              class="send-button"
            >
              <ag-icon size="18" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </ag-icon>
              <span class="mis1">Send</span>
            </ag-button>
          </div>

          <!-- Quick Actions -->
          <div class="quick-actions">
            <ag-button
              size="sm"
              shape="rounded"
              bordered
              @click=\${this.addBotResponse}
              class="mie2"
            >
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </ag-icon>
              <span class="mis1">Add Bot Reply</span>
            </ag-button>

            <ag-button
              size="sm"
              shape="rounded"
              variant="danger"
              bordered
              @click=\${this.clearMessages}
            >
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </ag-icon>
              <span class="mis1">Clear All</span>
            </ag-button>
          </div>
        </div>

        <!-- Basic Example -->
        <div class="mbe4">
          <h2>Basic Message Bubbles</h2>
          <p>Messages can be sent from "me" or "them" with author, time, and optional footer.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="Hey, are we still on for lunch?"
            author="Sarah"
            time="11:30 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Yes! Where should we go?"
            author="Me"
            time="11:32 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="How about that new Italian place?"
            author="Sarah"
            time="11:33 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Sounds perfect. See you there at 12:30."
            author="Me"
            time="11:35 AM"
          ></ag-message-bubble>
        </div>

        <!-- Delivery Status -->
        <div class="mbe4">
          <h2>Delivery Status</h2>
          <p>Use the footer prop to display delivery status indicators.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="me"
            message="Hey, did you get my last message?"
            author="Me"
            time="2:30 PM"
            footer="Delivered"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Just checking in!"
            author="Me"
            time="2:31 PM"
            footer="Seen"
          ></ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="Yes, I saw it! Thanks for sending."
            author="Sarah"
            time="2:32 PM"
            footer="Read"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Great! Let's catch up later."
            author="Me"
            time="2:33 PM"
            footer="Sending..."
          ></ag-message-bubble>
        </div>

        <!-- Color Variants -->
        <div class="mbe4">
          <h2>Color Variants</h2>
          <p>Different semantic variants for various message types.</p>
        </div>
        <div class="message-container mbe6">
          <div class="variant-section">
            <h3>Success</h3>
            <ag-message-bubble
              from="them"
              message="Payment completed successfully!"
              author="System"
              time="10:02 AM"
              variant="success"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Great, thanks for confirming"
              author="Me"
              time="10:03 AM"
              variant="success"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Warning</h3>
            <ag-message-bubble
              from="them"
              message="Your session will expire in 5 minutes"
              author="System"
              time="10:04 AM"
              variant="warning"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="I'll save my work now"
              author="Me"
              time="10:05 AM"
              variant="warning"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Danger</h3>
            <ag-message-bubble
              from="them"
              message="Error: Unable to process your request"
              author="System"
              time="10:06 AM"
              variant="danger"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Let me try again"
              author="Me"
              time="10:07 AM"
              variant="danger"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Info</h3>
            <ag-message-bubble
              from="them"
              message="New features available in version 2.0"
              author="System"
              time="10:08 AM"
              variant="info"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Sounds interesting!"
              author="Me"
              time="10:09 AM"
              variant="info"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Neutral</h3>
            <ag-message-bubble
              from="them"
              message="This is a neutral informational message"
              author="System"
              time="10:10 AM"
              variant="neutral"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Monochrome</h3>
            <ag-message-bubble
              from="them"
              message="Simple monochrome styling"
              author="System"
              time="10:12 AM"
              variant="monochrome"
            ></ag-message-bubble>
          </div>
        </div>

        <!-- With Avatars -->
        <div class="mbe4">
          <h2>With Avatar URLs</h2>
          <p>Display user avatars using the avatarUrl prop.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="I have an avatar!"
            author="Jane Smith"
            time="10:05 AM"
            avatar-url="https://i.pravatar.cc/150?img=1"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Me too!"
            author="Me"
            time="10:06 AM"
            avatar-url="https://i.pravatar.cc/150?img=2"
          ></ag-message-bubble>
        </div>

        <!-- Custom Avatar Slot -->
        <div class="mbe4">
          <h2>Custom Avatar Component</h2>
          <p>Use the avatar slot to provide custom avatar components with more control.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="I'm using a custom Avatar component with text initials!"
            author="Jane Smith"
            time="10:00 AM"
          >
            <ag-avatar slot="avatar" text="JS" variant="info" size="sm"></ag-avatar>
          </ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="And I'm using an Avatar with an image and different styling!"
            author="Me"
            time="10:01 AM"
          >
            <ag-avatar
              slot="avatar"
              img-src="https://i.pravatar.cc/150?img=10"
              img-alt="User avatar"
              variant="success"
              size="sm"
            ></ag-avatar>
          </ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="Avatar components give you more control over styling and variants!"
            author="Alex Chen"
            time="10:02 AM"
          >
            <ag-avatar
              slot="avatar"
              text="AC"
              variant="warning"
              size="sm"
              shape="square"
            ></ag-avatar>
          </ag-message-bubble>
        </div>

        <!-- Long Content -->
        <div class="mbe4">
          <h2>Long Content</h2>
          <p>Message bubbles adapt to longer content with proper text wrapping.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text."
            author="Alex"
            time="10:20 AM"
            avatar-url="https://i.pravatar.cc/150?img=4"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy."
            author="Me"
            time="10:21 AM"
            footer="Delivered"
            avatar-url="https://i.pravatar.cc/150?img=8"
          ></ag-message-bubble>
        </div>
      </section>

      <style>
        /* Chat Demo Styles */
        .chat-demo-container {
          max-width: 700px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 12px;
          padding: 20px;
          background-color: var(--vp-c-bg);
        }

        .messages-container {
          min-height: 400px;
          max-height: 500px;
          overflow-y: auto;
          padding: 20px;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 360px;
          color: var(--vp-c-text-3);
          font-style: italic;
        }

        .input-area {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          align-items: flex-end;
        }

        .input-area > :first-child {
          flex: 1;
        }

        .send-button {
          flex-shrink: 0;
        }

        .quick-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* Scrollbar styling */
        .messages-container::-webkit-scrollbar {
          width: 8px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: var(--vp-c-bg);
          border-radius: 4px;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: var(--vp-c-divider);
          border-radius: 4px;
        }

        .messages-container::-webkit-scrollbar-thumb:hover {
          background: var(--vp-c-text-3);
        }

        /* Standard Example Styles */
        .message-container {
          max-width: 600px;
          border: 1px solid var(--vp-c-divider);
          padding: 20px;
          border-radius: 8px;
          background-color: var(--vp-c-bg-soft);
        }

        .variant-section {
          margin-bottom: 24px;
        }

        .variant-section:last-child {
          margin-bottom: 0;
        }

        .variant-section h4 {
          margin: 0 0 12px 0;
          font-size: 13px;
          font-weight: 600;
          color: var(--vp-c-text-2);
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('message-bubble-lit-examples', MessageBubbleLitExamples);
`,Is=`import { useState } from "react";
import { ReactMessageBubble } from "agnosticui-core/message-bubble/react";
import { ReactAvatar } from "agnosticui-core/avatar/react";
import { ReactInput } from "agnosticui-core/input/react";
import { ReactButton } from "agnosticui-core/button/react";
import { ReactIcon } from "agnosticui-core/icon/react";

export default function MessageBubbleReactExamples() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageIdCounter, setMessageIdCounter] = useState(1);

  const botResponses = [
    "That's interesting! Tell me more.",
    "I understand what you mean.",
    "Thanks for sharing that!",
    "Great point!",
    "I appreciate your message.",
    "That makes sense to me.",
    "Interesting perspective!",
  ];

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    setMessages([
      ...messages,
      {
        id: messageIdCounter,
        from: "me",
        text: newMessage,
        author: "Me",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=8",
        footer: "Sent",
      },
    ]);

    setMessageIdCounter(messageIdCounter + 1);
    setNewMessage("");

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = document.querySelector(".messages-container");
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  };

  const addBotResponse = () => {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const randomResponse =
      botResponses[Math.floor(Math.random() * botResponses.length)];

    setMessages([
      ...messages,
      {
        id: messageIdCounter,
        from: "them",
        text: randomResponse,
        author: "AI Assistant",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=5",
        footer: "Read",
      },
    ]);

    setMessageIdCounter(messageIdCounter + 1);

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = document.querySelector(".messages-container");
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  };

  const clearMessages = () => {
    if (window.confirm("Are you sure you want to clear all messages?")) {
      setMessages([]);
      setMessageIdCounter(1);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section>
      {/* Interactive Chat Demo */}
      <div className="mbe4">
        <h2>Interactive Chat Demo</h2>
        <p>
          Type a message and click Send to add it to the conversation. This
          demonstrates real-world integration with ReactInput and ReactButton.
        </p>
      </div>
      <div className="chat-demo-container mbe6">
        {/* Messages Container */}
        <div className="messages-container">
          {messages.map((message) => (
            <ReactMessageBubble
              key={message.id}
              from={message.from}
              message={message.text}
              author={message.author}
              time={message.time}
              avatarUrl={message.avatarUrl}
              footer={message.footer}
              className="message-item"
            />
          ))}

          {messages.length === 0 && (
            <div className="empty-state">
              No messages yet. Start the conversation!
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <ReactInput
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder="Type your message..."
            rounded
          >
            <ReactIcon slot="addon-left" size="18">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-primary)"
                strokeWidth="2"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </ReactIcon>
          </ReactInput>

          <ReactButton
            variant="primary"
            shape="rounded"
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="send-button"
          >
            <ReactIcon size="18" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </ReactIcon>
            <span className="mis1">Send</span>
          </ReactButton>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <ReactButton
            size="sm"
            shape="rounded"
            bordered
            onClick={addBotResponse}
            className="mie2"
          >
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </ReactIcon>
            <span className="mis1">Add Bot Reply</span>
          </ReactButton>

          <ReactButton
            size="sm"
            shape="rounded"
            variant="danger"
            bordered
            onClick={clearMessages}
          >
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </ReactIcon>
            <span className="mis1">Clear All</span>
          </ReactButton>
        </div>
      </div>

      {/* Basic Example */}
      <div className="mbe4">
        <h2>Basic Message Bubbles</h2>
        <p>
          Messages can be sent from "me" or "them" with author, time, and
          optional footer.
        </p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="Hey, are we still on for lunch?"
          author="Sarah"
          time="11:30 AM"
        />
        <ReactMessageBubble
          from="me"
          message="Yes! Where should we go?"
          author="Me"
          time="11:32 AM"
        />
        <ReactMessageBubble
          from="them"
          message="How about that new Italian place?"
          author="Sarah"
          time="11:33 AM"
        />
        <ReactMessageBubble
          from="me"
          message="Sounds perfect. See you there at 12:30."
          author="Me"
          time="11:35 AM"
        />
      </div>

      {/* Delivery Status */}
      <div className="mbe4">
        <h2>Delivery Status</h2>
        <p>Use the footer prop to display delivery status indicators.</p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="me"
          message="Hey, did you get my last message?"
          author="Me"
          time="2:30 PM"
          footer="Delivered"
        />
        <ReactMessageBubble
          from="me"
          message="Just checking in!"
          author="Me"
          time="2:31 PM"
          footer="Seen"
        />
        <ReactMessageBubble
          from="them"
          message="Yes, I saw it! Thanks for sending."
          author="Sarah"
          time="2:32 PM"
          footer="Read"
        />
        <ReactMessageBubble
          from="me"
          message="Great! Let's catch up later."
          author="Me"
          time="2:33 PM"
          footer="Sending..."
        />
      </div>

      {/* Color Variants */}
      <div className="mbe4">
        <h2>Color Variants</h2>
        <p>Different semantic variants for various message types.</p>
      </div>
      <div className="message-container mbe6">
        <div className="variant-section">
          <h3>Success</h3>
          <ReactMessageBubble
            from="them"
            message="Payment completed successfully!"
            author="System"
            time="10:02 AM"
            variant="success"
          />
          <ReactMessageBubble
            from="me"
            message="Great, thanks for confirming"
            author="Me"
            time="10:03 AM"
            variant="success"
          />
        </div>

        <div className="variant-section">
          <h3>Warning</h3>
          <ReactMessageBubble
            from="them"
            message="Your session will expire in 5 minutes"
            author="System"
            time="10:04 AM"
            variant="warning"
          />
          <ReactMessageBubble
            from="me"
            message="I'll save my work now"
            author="Me"
            time="10:05 AM"
            variant="warning"
          />
        </div>

        <div className="variant-section">
          <h3>Danger</h3>
          <ReactMessageBubble
            from="them"
            message="Error: Unable to process your request"
            author="System"
            time="10:06 AM"
            variant="danger"
          />
          <ReactMessageBubble
            from="me"
            message="Let me try again"
            author="Me"
            time="10:07 AM"
            variant="danger"
          />
        </div>

        <div className="variant-section">
          <h3>Info</h3>
          <ReactMessageBubble
            from="them"
            message="New features available in version 2.0"
            author="System"
            time="10:08 AM"
            variant="info"
          />
          <ReactMessageBubble
            from="me"
            message="Sounds interesting!"
            author="Me"
            time="10:09 AM"
            variant="info"
          />
        </div>

        <div className="variant-section">
          <h3>Neutral</h3>
          <ReactMessageBubble
            from="them"
            message="This is a neutral informational message"
            author="System"
            time="10:10 AM"
            variant="neutral"
          />
        </div>

        <div className="variant-section">
          <h3>Monochrome</h3>
          <ReactMessageBubble
            from="them"
            message="Simple monochrome styling"
            author="System"
            time="10:12 AM"
            variant="monochrome"
          />
        </div>
      </div>

      {/* With Avatars */}
      <div className="mbe4">
        <h2>With Avatar URLs</h2>
        <p>Display user avatars using the avatarUrl prop.</p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="I have an avatar!"
          author="Jane Smith"
          time="10:05 AM"
          avatarUrl="https://i.pravatar.cc/150?img=1"
        />
        <ReactMessageBubble
          from="me"
          message="Me too!"
          author="Me"
          time="10:06 AM"
          avatarUrl="https://i.pravatar.cc/150?img=2"
        />
      </div>

      {/* Custom Avatar Slot */}
      <div className="mbe4">
        <h2>Custom Avatar Component</h2>
        <p>
          Use the avatar slot to provide custom avatar components with more
          control.
        </p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="I'm using a custom Avatar component with text initials!"
          author="Jane Smith"
          time="10:00 AM"
        >
          <ReactAvatar slot="avatar" text="JS" variant="info" size="sm" />
        </ReactMessageBubble>
        <ReactMessageBubble
          from="me"
          message="And I'm using an Avatar with an image and different styling!"
          author="Me"
          time="10:01 AM"
        >
          <ReactAvatar
            slot="avatar"
            imgSrc="https://i.pravatar.cc/150?img=10"
            imgAlt="User avatar"
            variant="success"
            size="sm"
          />
        </ReactMessageBubble>
        <ReactMessageBubble
          from="them"
          message="Avatar components give you more control over styling and variants!"
          author="Alex Chen"
          time="10:02 AM"
        >
          <ReactAvatar
            slot="avatar"
            text="AC"
            variant="warning"
            size="sm"
            shape="square"
          />
        </ReactMessageBubble>
      </div>

      {/* Long Content */}
      <div className="mbe4">
        <h2>Long Content</h2>
        <p>
          Message bubbles adapt to longer content with proper text wrapping.
        </p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text."
          author="Alex"
          time="10:20 AM"
          avatarUrl="https://i.pravatar.cc/150?img=4"
        />
        <ReactMessageBubble
          from="me"
          message="I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy."
          author="Me"
          time="10:21 AM"
          footer="Delivered"
          avatarUrl="https://i.pravatar.cc/150?img=8"
        />
      </div>
    </section>
  );
}
`,sa=JSON.parse('{"title":"MessageBubble","description":"","frontmatter":{},"headers":[],"relativePath":"components/message-bubble.md","filePath":"components/message-bubble.md"}'),Rs={name:"components/message-bubble.md"},aa=Object.assign(Rs,{setup(n){return(s,i)=>(k(),m("div",null,[i[1]||(i[1]=a("h1",{id:"messagebubble",tabindex:"-1"},[M("MessageBubble "),a("a",{class:"header-anchor",href:"#messagebubble","aria-label":'Permalink to "MessageBubble"'},"​")],-1)),e($),i[2]||(i[2]=a("p",null,"A versatile message bubble component for building chat interfaces and messaging UIs. MessageBubble supports different sender types, delivery statuses, avatars, color variants, and custom styling through CSS Shadow Parts.",-1)),i[3]||(i[3]=a("h2",{id:"examples",tabindex:"-1"},[M("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(is,{component:"message-bubble","vue-code":B(xs),"lit-code":B(Ss),"react-code":B(Is)},{vue:o(()=>[e(qs)]),lit:o(()=>[...i[0]||(i[0]=[a("message-bubble-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=j("",29))]))}});export{sa as __pageData,aa as default};
