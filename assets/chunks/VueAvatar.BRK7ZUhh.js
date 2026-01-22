import{i as v,z as n,a as p,x as g}from"./Button.DkmThuAs.js";import{s as u}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as f,c as x,o as y,r as b,K as z,p as S,v as w,P as k,s as $}from"./framework.NAAYCHZu.js";var A=Object.defineProperty,o=(a,e,s,t)=>{for(var i=void 0,l=a.length-1,c;l>=0;l--)(c=a[l])&&(i=c(e,s,i)||i);return i&&A(e,s,i),i};const d=class extends p{constructor(){super(),this.text="",this.imgSrc="",this.imgAlt="",this.size="md",this.shape="circle",this.variant="default",this.ariaLabel=""}_renderContent(){return this.imgSrc?g`<img
        class="avatar-image"
        part="ag-avatar-image"
        src="${this.imgSrc}"
        alt="${this.imgAlt}"
      />`:this.text?g`<span class="avatar-text" part="ag-avatar-text">${this.text}</span>`:g`<slot></slot>`}render(){const e=this.imgSrc&&!this.imgAlt?"presentation":"img",s=this.ariaLabel||(this.imgSrc?this.imgAlt:this.text);return g`
      <div
        class="avatar"
        part="ag-avatar"
        role="${e}"
        aria-label="${s||"Avatar"}"
      >
        ${this._renderContent()}
      </div>
    `}};d.styles=v`
    :host {
      display: inline-flex;
    }

    .avatar {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      max-inline-size: 100%;
      background: var(--ag-background-tertiary);
      color: var(--ag-text-primary);
      border-radius: 50%;
      font-size: var(--ag-font-size-base);
      font-weight: 500;
    }

    /* Sizes */
    :host([size="xs"]) .avatar {
      width: var(--ag-space-6);
      height: var(--ag-space-6);
      font-size: var(--ag-font-size-xs);
    }

    :host([size="sm"]) .avatar {
      width: var(--ag-space-8);
      height: var(--ag-space-8);
      font-size: var(--ag-font-size-sm);
    }

    :host([size="md"]) .avatar {
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      font-size: var(--ag-font-size-base);
    }

    :host([size="lg"]) .avatar {
      width: var(--ag-space-12);
      height: var(--ag-space-12);
      font-size: var(--ag-font-size-lg);
    }

    :host([size="xl"]) .avatar {
      width: var(--ag-space-14);
      height: var(--ag-space-14);
      font-size: var(--ag-font-size-xl);
    }

    /* Shapes */
    :host([shape="circle"]) .avatar {
      border-radius: 50%;
    }

    :host([shape="square"]) .avatar {
      border-radius: 0;
    }

    :host([shape="rounded"]) .avatar {
      border-radius: var(--ag-radius-md);
    }

    /* Variants */
    :host([variant="info"]) .avatar {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }

    :host([variant="warning"]) .avatar {
      background: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    :host([variant="success"]) .avatar {
      background: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="error"]) .avatar {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="transparent"]) .avatar {
      background: transparent;
    }

    :host([variant="monochrome"]) .avatar {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-text {
      user-select: none;
    }
  `;let r=d;o([n({type:String})],r.prototype,"text");o([n({type:String,attribute:"img-src"})],r.prototype,"imgSrc");o([n({type:String,attribute:"img-alt"})],r.prototype,"imgAlt");o([n({type:String,reflect:!0})],r.prototype,"size");o([n({type:String,reflect:!0})],r.prototype,"shape");o([n({type:String,reflect:!0})],r.prototype,"variant");o([n({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");customElements.get("ag-avatar")||customElements.define("ag-avatar",r);const h=class extends p{render(){return g`
      <div class="avatar-group" part="ag-avatar-group">
        <slot></slot>
      </div>
    `}};h.styles=v`
    :host {
      display: inline-flex;
    }

    .avatar-group {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* Overlap avatars except the first one */
    ::slotted(ag-avatar:not(:first-child)) {
      margin-inline-start: calc(-1 * 0.625rem);
    }

    /* Optional: Add z-index stacking so later avatars appear on top when hovered */
    ::slotted(ag-avatar) {
      transition: transform 0.2s ease;
      position: relative;
    }

    ::slotted(ag-avatar:hover) {
      transform: translateY(-2px);
      z-index: 10;
    }
  `;let m=h;customElements.get("ag-avatar-group")||customElements.define("ag-avatar-group",m);customElements.get("ag-avatar")||customElements.define("ag-avatar",r);customElements.get("ag-avatar-group")||customElements.define("ag-avatar-group",m);const E=f({name:"VueAvatar",props:{text:{type:String,default:""},imgSrc:{type:String,default:""},imgAlt:{type:String,default:""},size:{type:String,default:"md"},shape:{type:String,default:"circle"},variant:{type:String,default:"default"},ariaLabel:{type:String,default:""}},setup(a){const e=S(null),s=()=>{const t=e.value;t&&(t.text=a.text,t.imgSrc=a.imgSrc,t.imgAlt=a.imgAlt,t.size=a.size,t.shape=a.shape,t.variant=a.variant,t.ariaLabel=a.ariaLabel)};return w(async()=>{await customElements.whenDefined("ag-avatar"),await k(),s()}),$(()=>{e.value&&s()}),{agComponent:e}}});function L(a,e,s,t,i,l){return y(),x("ag-avatar",z({ref:"agComponent"},a.$attrs),[b(a.$slots,"default")],16)}const V=u(E,[["render",L]]);export{V as $};
