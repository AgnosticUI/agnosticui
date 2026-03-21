import{i as h,z as t,a as p,x as o}from"./property-CemaeiRl.Cea_q1B7.js";var l=Object.defineProperty,r=(n,i,s,d)=>{for(var e=void 0,g=n.length-1,v;g>=0;g--)(v=n[g])&&(e=v(i,s,e)||e);return e&&l(i,s,e),e};const c=class extends p{constructor(){super(),this.text="",this.imgSrc="",this.imgAlt="",this.size="md",this.shape="circle",this.variant="default",this.ariaLabel=""}_renderContent(){return this.imgSrc?o`<img
        class="avatar-image"
        part="ag-avatar-image"
        src="${this.imgSrc}"
        alt="${this.imgAlt}"
      />`:this.text?o`<span class="avatar-text" part="ag-avatar-text">${this.text}</span>`:o`<slot></slot>`}render(){const i=this.imgSrc&&!this.imgAlt?"presentation":"img",s=this.ariaLabel||(this.imgSrc?this.imgAlt:this.text);return o`
      <div
        class="avatar"
        part="ag-avatar"
        role="${i}"
        aria-label="${s||"Avatar"}"
      >
        ${this._renderContent()}
      </div>
    `}};c.styles=h`
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
  `;let a=c;r([t({type:String})],a.prototype,"text");r([t({type:String,attribute:"img-src"})],a.prototype,"imgSrc");r([t({type:String,attribute:"img-alt"})],a.prototype,"imgAlt");r([t({type:String,reflect:!0})],a.prototype,"size");r([t({type:String,reflect:!0})],a.prototype,"shape");r([t({type:String,reflect:!0})],a.prototype,"variant");r([t({type:String,reflect:!0,attribute:"aria-label"})],a.prototype,"ariaLabel");customElements.get("ag-avatar")||customElements.define("ag-avatar",a);export{a};
