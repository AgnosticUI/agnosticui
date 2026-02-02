import{i as g,z as o,a as b,x as n}from"./Button.DkmThuAs.js";import"./CloseButton.otVweCM4.js";var v=Object.defineProperty,t=(l,r,s,u)=>{for(var a=void 0,i=l.length-1,d;i>=0;i--)(d=l[i])&&(a=d(r,s,a)||a);return a&&v(r,s,a),a};const c=class extends b{constructor(){super(),this._handleDismiss=()=>{const r=new CustomEvent("alert-dismiss",{detail:{variant:this.variant},bubbles:!0,composed:!0});this.dispatchEvent(r),this.onAlertDismiss&&this.onAlertDismiss(r)},this.variant="default",this.bordered=!1,this.rounded=!1,this.borderedLeft=!1,this.dismissible=!1}render(){const r=["alert",this.rounded?"alert-rounded":"",this.bordered?"alert-bordered":"",this.borderedLeft?"alert-border-left":"",`alert-${this.variant}`].filter(Boolean).join(" ");return n`
      <div class="${r}" part="ag-alert" role="alert">
        <div class="alert-content">
          <slot></slot>
        </div>
        ${this.dismissible?n`
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
    .alert-bordered.alert-warning {
      border-color: var(--ag-warning);
    }
    .alert-bordered.alert-info {
      border-color: var(--ag-info);
    }
    .alert-bordered.alert-success {
      border-color: var(--ag-success);
    }
    .alert-bordered.alert-danger,
    .alert-bordered.alert-error {
      border-color: var(--ag-danger);
    }
    .alert-bordered.alert-primary {
      border-color: var(--ag-primary);
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
      background-color: var(--ag-info-background);
      color: var(--ag-text-primary);
    }
    .alert-bordered.alert-monochrome {
      border-color: var(--ag-text-primary);
    }
    .alert-border-left.alert-monochrome {
      border-inline-start-color: var(--ag-text-primary);
    }
  `;let e=c;t([o({type:String})],e.prototype,"variant");t([o({type:Boolean})],e.prototype,"bordered");t([o({type:Boolean})],e.prototype,"rounded");t([o({type:Boolean})],e.prototype,"borderedLeft");t([o({type:Boolean})],e.prototype,"dismissible");t([o({attribute:!1})],e.prototype,"onAlertDismiss");customElements.get("ag-alert")||customElements.define("ag-alert",e);
