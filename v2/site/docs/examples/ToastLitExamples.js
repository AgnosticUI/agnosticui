import { LitElement, html } from 'lit';
import 'agnosticui-core/toast';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';

const toastKeys = [
  "showDefault", "showSuccess", "showInfo", "showPrimary", "showWarning",
  "showError", "showDanger", "showMonochrome", "showTopStart", "showTop",
  "showTopEnd", "showBottomStart", "showBottom", "showBottomEnd", "showBordered",
  "showBorderedLeft", "showNotRounded", "showQuickDismiss", "showAutoDismiss",
  "showNoAutoDismiss", "showNoPause", "showNoCloseButton", "showIconSuccess",
  "showIconInfo", "showCustomGradient",
];

const initialToastsState = toastKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {});

export class ToastLitExamples extends LitElement {
  static get properties() {
    return {
      toasts: { type: Object, state: true },
    };
  }

  constructor() {
    super();
    this.toasts = initialToastsState;
    this.activeToastKey = null;
  }
  
  // No shadow DOM
  createRenderRoot() {
    return this;
  }

  showToast(toastKey) {
    let newToasts = { ...this.toasts };
    if (this.activeToastKey && this.activeToastKey !== toastKey) {
      newToasts[this.activeToastKey] = false;
    }
    newToasts[toastKey] = true;
    this.toasts = newToasts;
    this.activeToastKey = toastKey;
  }

  closeToast(toastKey) {
    this.toasts = { ...this.toasts, [toastKey]: false };
    if (this.activeToastKey === toastKey) {
      this.activeToastKey = null;
    }
  }

  render() {
    return html`
      <section>
        <div class="mbe4 guidance-note">
          <h3>Demo Pattern: Single Toast Display</h3>
          <p>
            This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications.
            See the documentation below for alternative approaches if you need multiple simultaneous toasts.
          </p>
        </div>
        <div class="mbe4">
          <h2>Toast Types</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${() => this.showToast('showDefault')}>Show Default Toast</ag-button>
          <ag-toast .open=${this.toasts.showDefault} @toast-close=${() => this.closeToast('showDefault')}>Default toast notification</ag-toast>
          
          <ag-button class="demo-button" @click=${() => this.showToast('showSuccess')}>Show Success Toast</ag-button>
          <ag-toast .open=${this.toasts.showSuccess} type="success" @toast-close=${() => this.closeToast('showSuccess')}>Operation completed successfully!</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showInfo')}>Show Info Toast</ag-button>
          <ag-toast .open=${this.toasts.showInfo} type="info" @toast-close=${() => this.closeToast('showInfo')}>New message received!</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showPrimary')}>Show Primary Toast</ag-button>
          <ag-toast .open=${this.toasts.showPrimary} type="primary" @toast-close=${() => this.closeToast('showPrimary')}>New feature available!</ag-toast>
          
          <ag-button class="demo-button" @click=${() => this.showToast('showWarning')}>Show Warning Toast</ag-button>
          <ag-toast .open=${this.toasts.showWarning} type="warning" @toast-close=${() => this.closeToast('showWarning')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg></ag-icon>Warning: This action cannot be undone.</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showError')}>Show Error Toast</ag-button>
          <ag-toast .open=${this.toasts.showError} type="error" @toast-close=${() => this.closeToast('showError')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></ag-icon>An error occurred. Please try again.</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showDanger')}>Show Danger Toast</ag-button>
          <ag-toast .open=${this.toasts.showDanger} type="danger" @toast-close=${() => this.closeToast('showDanger')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line></svg></ag-icon>Critical error detected!</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showMonochrome')}>Show Monochrome Toast</ag-button>
          <ag-toast .open=${this.toasts.showMonochrome} type="monochrome" @toast-close=${() => this.closeToast('showMonochrome')}>
            <div class="flex-inline items-center">Modern monochrome notification</div>
          </ag-toast>
        </div>

        <div class="mbe4">
          <h2>Positions</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${() => this.showToast('showTopStart')}>Top Start</ag-button>
          <ag-toast .open=${this.toasts.showTopStart} position="top-start" @toast-close=${() => this.closeToast('showTopStart')}>Toast at top-start</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showTop')}>Top (Full Width)</ag-button>
          <ag-toast .open=${this.toasts.showTop} position="top" @toast-close=${() => this.closeToast('showTop')}>Toast at top (full width)</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showTopEnd')}>Top End (Default)</ag-button>
          <ag-toast .open=${this.toasts.showTopEnd} position="top-end" @toast-close=${() => this.closeToast('showTopEnd')}>Toast at top-end (default)</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showBottomStart')}>Bottom Start</ag-button>
          <ag-toast .open=${this.toasts.showBottomStart} position="bottom-start" @toast-close=${() => this.closeToast('showBottomStart')}>Toast at bottom-start</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showBottom')}>Bottom (Full Width)</ag-button>
          <ag-toast .open=${this.toasts.showBottom} position="bottom" @toast-close=${() => this.closeToast('showBottom')}>Toast at bottom (full width)</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showBottomEnd')}>Bottom End</ag-button>
          <ag-toast .open=${this.toasts.showBottomEnd} position="bottom-end" @toast-close=${() => this.closeToast('showBottomEnd')}>Toast at bottom-end</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Border Styles</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${() => this.showToast('showBordered')}>Bordered Toast</ag-button>
          <ag-toast .open=${this.toasts.showBordered} type="info" bordered @toast-close=${() => this.closeToast('showBordered')}>Toast with border</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showBorderedLeft')}>Left Border Toast</ag-button>
          <ag-toast .open=${this.toasts.showBorderedLeft} type="success" borderedLeft @toast-close=${() => this.closeToast('showBorderedLeft')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></ag-icon>Toast with left border accent</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showNotRounded')}>Not Rounded Toast</ag-button>
          <ag-toast .open=${this.toasts.showNotRounded} type="primary" .rounded=${false} @toast-close=${() => this.closeToast('showNotRounded')}>Toast without rounded corners</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Auto-Dismiss Options</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${() => this.showToast('showQuickDismiss')}>Quick Dismiss (2s)</ag-button>
          <ag-toast .open=${this.toasts.showQuickDismiss} .duration=${2000} type="info" @toast-close=${() => this.closeToast('showQuickDismiss')}>This toast will auto-dismiss in 2 seconds</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showAutoDismiss')}>Auto-Dismiss (5s)</ag-button>
          <ag-toast .open=${this.toasts.showAutoDismiss} .duration=${5000} type="info" @toast-close=${() => this.closeToast('showAutoDismiss')}>This toast will auto-dismiss in 5 seconds (default)</ag-toast>
          
          <ag-button class="demo-button" @click=${() => this.showToast('showNoAutoDismiss')}>No Auto-Dismiss</ag-button>
          <ag-toast .open=${this.toasts.showNoAutoDismiss} .autoDismiss=${false} type="warning" @toast-close=${() => this.closeToast('showNoAutoDismiss')}>This toast will not auto-dismiss. Click X to close.</ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showNoPause')}>No Pause on Hover</ag-button>
          <ag-toast .open=${this.toasts.showNoPause} .pauseOnHover=${false} .duration=${3000} type="info" @toast-close=${() => this.closeToast('showNoPause')}>Hover won't pause this toast's timer</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Close Button Options</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${() => this.showToast('showNoCloseButton')}>No Close Button</ag-button>
          <ag-toast .open=${this.toasts.showNoCloseButton} .showCloseButton=${false} type="info" .duration=${3000} @toast-close=${() => this.closeToast('showNoCloseButton')}>Toast without close button (auto-dismisses)</ag-toast>
        </div>

        <div class="mbe4">
          <h2>With Icons</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${() => this.showToast('showIconSuccess')}>Success with Icon</ag-button>
          <ag-toast .open=${this.toasts.showIconSuccess} type="success" @toast-close=${() => this.closeToast('showIconSuccess')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></ag-icon>File uploaded successfully!</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${() => this.showToast('showIconInfo')}>Info with Icon</ag-button>
          <ag-toast .open=${this.toasts.showIconInfo} type="info" @toast-close=${() => this.closeToast('showIconInfo')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg></ag-icon>You have 3 unread messages</div>
          </ag-toast>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize toast appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${() => this.showToast('showCustomGradient')}>Custom Gradient Toast</ag-button>
          <ag-toast
            .open=${this.toasts.showCustomGradient}
            class="custom-gradient-toast"
            position="top-end"
            @toast-close=${() => this.closeToast('showCustomGradient')}
          >
            <div class="flex-inline items-center">
              <ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.6 3.3-3.2 8.7-8.7 3.2 3.2 8.7 8.7-3.2-3.2-8.7-8.7-3.2z"></path></svg></ag-icon>
              Custom styled toast with gradient
            </div>
          </ag-toast>
        </div>
      </section>
    `;
  }
}
customElements.define('toast-lit-examples', ToastLitExamples);
