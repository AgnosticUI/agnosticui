import { useState } from "react";
import { ReactToast } from "agnosticui-core/toast/react";
import { ReactButton } from "agnosticui-core/button/react";
import {
  AlertTriangle,
  AlertCircle,
  XCircle,
  CheckCircle,
  Info,
  Sparkles,
} from "lucide-react";

const toastKeys = [
  "showDefault", "showSuccess", "showInfo", "showPrimary", "showWarning",
  "showError", "showDanger", "showMonochrome", "showTopStart", "showTop",
  "showTopEnd", "showBottomStart", "showBottom", "showBottomEnd", "showBordered",
  "showBorderedLeft", "showNotRounded", "showQuickDismiss", "showAutoDismiss",
  "showNoAutoDismiss", "showNoPause", "showNoCloseButton", "showIconSuccess",
  "showIconInfo", "showCustomGradient",
];

const initialToastsState = toastKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {});

export default function ToastReactExamples() {
  const [toasts, setToasts] = useState(initialToastsState);
  let activeToastKey = null;

  const showToast = (toastKey) => {
    if (activeToastKey && activeToastKey !== toastKey) {
      setToasts(prev => ({ ...prev, [activeToastKey]: false }));
    }
    setToasts(prev => ({ ...prev, [toastKey]: true }));
    activeToastKey = toastKey;
  };

  const closeToast = (toastKey) => {
    setToasts(prev => ({ ...prev, [toastKey]: false }));
    if (activeToastKey === toastKey) {
      activeToastKey = null;
    }
  };

  return (
    <section>
    <div class="mbe4 guidance-note">
      <h3>Demo Pattern: Single Toast Display</h3>
      <p>
        This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications.
        See the documentation below for alternative approaches if you need multiple simultaneous toasts.
      </p>
    </div>
    <div className="mbe4">
      <h2>Toast Types</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showDefault')}>Show Default Toast</ReactButton>
        <ReactToast open={toasts.showDefault} onToastClose={() => closeToast('showDefault')}>Default toast notification</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showSuccess')}>Show Success Toast</ReactButton>
        <ReactToast open={toasts.showSuccess} type="success" onToastClose={() => closeToast('showSuccess')}>Operation completed successfully!</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showInfo')}>Show Info Toast</ReactButton>
        <ReactToast open={toasts.showInfo} type="info" onToastClose={() => closeToast('showInfo')}>New message received!</ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showPrimary')}>Show Primary Toast</ReactButton>
        <ReactToast open={toasts.showPrimary} type="primary" onToastClose={() => closeToast('showPrimary')}>New feature available!</ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showWarning')}>Show Warning Toast</ReactButton>
        <ReactToast open={toasts.showWarning} type="warning" onToastClose={() => closeToast('showWarning')}>
          <div className="flex-inline items-center"><AlertTriangle size={20} className="mie3" />Warning: This action cannot be undone.</div>
        </ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showError')}>Show Error Toast</ReactButton>
        <ReactToast open={toasts.showError} type="error" onToastClose={() => closeToast('showError')}>
          <div className="flex-inline items-center"><AlertCircle size={20} className="mie3" />An error occurred. Please try again.</div>
        </ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showDanger')}>Show Danger Toast</ReactButton>
        <ReactToast open={toasts.showDanger} type="danger" onToastClose={() => closeToast('showDanger')}>
          <div className="flex-inline items-center"><XCircle size={20} className="mie3" />Critical error detected!</div>
        </ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showMonochrome')}>Show Monochrome Toast</ReactButton>
        <ReactToast open={toasts.showMonochrome} type="monochrome" onToastClose={() => closeToast('showMonochrome')}>
          <div className="flex-inline items-center">Modern monochrome notification</div>
        </ReactToast>
    </div>

    <div className="mbe4">
        <h2>Positions</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showTopStart')}>Top Start</ReactButton>
        <ReactToast open={toasts.showTopStart} position="top-start" onToastClose={() => closeToast('showTopStart')}>Toast at top-start</ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showTop')}>Top (Full Width)</ReactButton>
        <ReactToast open={toasts.showTop} position="top" onToastClose={() => closeToast('showTop')}>Toast at top (full width)</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showTopEnd')}>Top End (Default)</ReactButton>
        <ReactToast open={toasts.showTopEnd} position="top-end" onToastClose={() => closeToast('showTopEnd')}>Toast at top-end (default)</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBottomStart')}>Bottom Start</ReactButton>
        <ReactToast open={toasts.showBottomStart} position="bottom-start" onToastClose={() => closeToast('showBottomStart')}>Toast at bottom-start</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBottom')}>Bottom (Full Width)</ReactButton>
        <ReactToast open={toasts.showBottom} position="bottom" onToastClose={() => closeToast('showBottom')}>Toast at bottom (full width)</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBottomEnd')}>Bottom End</ReactButton>
        <ReactToast open={toasts.showBottomEnd} position="bottom-end" onToastClose={() => closeToast('showBottomEnd')}>Toast at bottom-end</ReactToast>
    </div>
    
    <div className="mbe4">
        <h2>Border Styles</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showBordered')}>Bordered Toast</ReactButton>
        <ReactToast open={toasts.showBordered} type="info" bordered onToastClose={() => closeToast('showBordered')}>Toast with border</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBorderedLeft')}>Left Border Toast</ReactButton>
        <ReactToast open={toasts.showBorderedLeft} type="success" borderedLeft onToastClose={() => closeToast('showBorderedLeft')}>
            <div className="flex-inline items-center"><CheckCircle size={20} className="mie3" />Toast with left border accent</div>
        </ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showNotRounded')}>Not Rounded Toast</ReactButton>
        <ReactToast open={toasts.showNotRounded} type="primary" rounded={false} onToastClose={() => closeToast('showNotRounded')}>Toast without rounded corners</ReactToast>
    </div>

    <div className="mbe4">
        <h2>Auto-Dismiss Options</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showQuickDismiss')}>Quick Dismiss (2s)</ReactButton>
        <ReactToast open={toasts.showQuickDismiss} duration={2000} type="info" onToastClose={() => closeToast('showQuickDismiss')}>This toast will auto-dismiss in 2 seconds</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showAutoDismiss')}>Auto-Dismiss (5s)</ReactButton>
        <ReactToast open={toasts.showAutoDismiss} duration={5000} type="info" onToastClose={() => closeToast('showAutoDismiss')}>This toast will auto-dismiss in 5 seconds (default)</ReactToast>
    
        <ReactButton className="demo-button" onClick={() => showToast('showNoAutoDismiss')}>No Auto-Dismiss</ReactButton>
        <ReactToast open={toasts.showNoAutoDismiss} autoDismiss={false} type="warning" onToastClose={() => closeToast('showNoAutoDismiss')}>This toast will not auto-dismiss. Click X to close.</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showNoPause')}>No Pause on Hover</ReactButton>
        <ReactToast open={toasts.showNoPause} pauseOnHover={false} duration={3000} type="info" onToastClose={() => closeToast('showNoPause')}>Hover won't pause this toast's timer</ReactToast>
    </div>

    <div className="mbe4">
        <h2>Close Button Options</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showNoCloseButton')}>No Close Button</ReactButton>
        <ReactToast open={toasts.showNoCloseButton} showCloseButton={false} type="info" duration={3000} onToastClose={() => closeToast('showNoCloseButton')}>Toast without close button (auto-dismisses)</ReactToast>
    </div>

    <div className="mbe4">
        <h2>With Icons</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showIconSuccess')}>Success with Icon</ReactButton>
        <ReactToast open={toasts.showIconSuccess} type="success" onToastClose={() => closeToast('showIconSuccess')}>
            <div className="flex-inline items-center"><CheckCircle size={20} className="mie3" />File uploaded successfully!</div>
        </ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showIconInfo')}>Info with Icon</ReactButton>
        <ReactToast open={toasts.showIconInfo} type="info" onToastClose={() => closeToast('showIconInfo')}>
            <div className="flex-inline items-center"><Info size={20} className="mie3" />You have 3 unread messages</div>
        </ReactToast>
    </div>

    <div className="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p
        className="mbe2"
        style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
      >
        Customize toast appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div className="stacked flex-align-start mbe4">
      <ReactButton className="demo-button" onClick={() => showToast('showCustomGradient')}>Custom Gradient Toast</ReactButton>
      <ReactToast
        open={toasts.showCustomGradient}
        className="custom-gradient-toast"
        position="top-end"
        onToastClose={() => closeToast('showCustomGradient')}
      >
        <div className="flex-inline items-center"><Sparkles size={20} className="mie3" />Custom styled toast with gradient</div>
      </ReactToast>
    </div>
    </section>
  );
}
