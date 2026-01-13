import{i as g,z as t,a as b,x as d}from"./Button.Bujdzq23.js";import"./CloseButton.yKDcmacg.js";var v=Object.defineProperty,o=(l,r,s,u)=>{for(var a=void 0,i=l.length-1,n;i>=0;i--)(n=l[i])&&(a=n(r,s,a)||a);return a&&v(r,s,a),a};const c=class extends b{constructor(){super(),this._handleDismiss=()=>{const r=new CustomEvent("alert-dismiss",{detail:{variant:this.variant},bubbles:!0,composed:!0});this.dispatchEvent(r),this.onAlertDismiss&&this.onAlertDismiss(r)},this.variant="default",this.bordered=!1,this.rounded=!1,this.borderedLeft=!1,this.dismissible=!1}render(){const r=["alert",this.rounded?"alert-rounded":"",this.bordered?"alert-bordered":"",this.borderedLeft?"alert-border-left":"",`alert-${this.variant}`].filter(Boolean).join(" ");return d`
      <div class="${r}" part="ag-alert" role="alert">
        <div class="alert-content">
          <slot></slot>
        </div>
        ${this.dismissible?d`
          <div class="alert-close">
            <ag-close-button
              @click=${this._handleDismiss}
              aria-label="Dismiss alert"
              size="sm"
            ></ag-close-button>
          </div>
        `:""}
      </div>
    `}};c.styles=g`
    .alert {
      position: relative;
      padding: var(--ag-space-3);
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
      border-width: var(--ag-border-width-1);
      border-style: solid;
      border-color: transparent;
      display: flex;
      align-items: flex-start;
      gap: var(--ag-space-2);
    }
    .alert-content {
      flex: 1;
    }
    .alert-close {
      flex-shrink: 0;
      margin-inline-start: auto;
    }
    .alert-rounded {
      border-radius: var(--ag-radius-md);
    }
    .alert-bordered {
      border-color: var(--ag-border);
    }
    .alert-border-left {
      border-inline-start-width: var(--ag-border-width-3);
      border-inline-start-color: var(--ag-border);
    }
    .alert-warning {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .alert-border-left.alert-warning {
      border-inline-start-color: var(--ag-warning);
    }
    .alert-info {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }
    .alert-border-left.alert-info {
      border-inline-start-color: var(--ag-info);
    }
    .alert-success {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }
    .alert-border-left.alert-success {
      border-inline-start-color: var(--ag-success);
    }
    .alert-danger,
    .alert-error {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }
    .alert-border-left.alert-danger,
    .alert-border-left.alert-error {
      border-inline-start-color: var(--ag-danger);
    }
    .alert-primary {
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }
    .alert-border-left.alert-primary {
      border-inline-start-color: var(--ag-primary);
    }
    .alert-monochrome {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
    .alert-border-left.alert-monochrome {
      border-inline-start-color: var(--ag-text-primary);
    }
  `;let e=c;o([t({type:String})],e.prototype,"variant");o([t({type:Boolean})],e.prototype,"bordered");o([t({type:Boolean})],e.prototype,"rounded");o([t({type:Boolean})],e.prototype,"borderedLeft");o([t({type:Boolean})],e.prototype,"dismissible");o([t({attribute:!1})],e.prototype,"onAlertDismiss");customElements.get("ag-alert")||customElements.define("ag-alert",e);
