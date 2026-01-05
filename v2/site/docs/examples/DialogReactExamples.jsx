import { useState } from "react";
import ReactDialog, {
  ReactDialogHeader,
  ReactDialogFooter,
} from "agnosticui-core/dialog/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function DialogReactExamples() {
  const [isBasicDialogOpen, setIsBasicDialogOpen] = useState(false);
  const [isHeaderFooterDialogOpen, setIsHeaderFooterDialogOpen] = useState(false);
  const [isCloseButtonDialogOpen, setIsCloseButtonDialogOpen] = useState(false);
  const [isNoEscapeDialogOpen, setIsNoEscapeDialogOpen] = useState(false);
  const [isNoBackdropDialogOpen, setIsNoBackdropDialogOpen] = useState(false);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);
  const [lastEvent, setLastEvent] = useState(null);

  const handleDialogOpen = () => {
    setLastEvent("dialog-open");
  };

  const handleDialogClose = () => {
    setLastEvent("dialog-close");
  };

  const handleDialogCancel = () => {
    setLastEvent("dialog-cancel");
  };

  const showEventDialog = () => {
    setIsEventDialogOpen(true);
    setLastEvent(null);
  };

  return (
    <section>
      {/* Basic Dialog */}
      <div className="mbe4">
        <h2>Basic Dialog</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsBasicDialogOpen(true)}>
          Open Basic Dialog
        </ReactButton>
        <ReactDialog
          open={isBasicDialogOpen}
          onOpenChange={setIsBasicDialogOpen}
          heading="Basic Dialog"
          description="This is a basic dialog with heading and description."
        >
          <p>This is the basic dialog content.</p>
        </ReactDialog>
      </div>

      {/* With Header and Footer */}
      <div className="mbe4">
        <h2>With Header and Footer</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsHeaderFooterDialogOpen(true)}>
          Open Dialog with Header/Footer
        </ReactButton>
        <ReactDialog
          open={isHeaderFooterDialogOpen}
          onOpenChange={setIsHeaderFooterDialogOpen}
        >
          <ReactDialogHeader>
            <h2 className="m0 p0 b0">My Header</h2>
          </ReactDialogHeader>
          <p>This dialog uses dialog header and footer components.</p>
          <ReactDialogFooter>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsHeaderFooterDialogOpen(false)}>
                Cancel
              </ReactButton>
              <ReactButton
                variant="primary"
                onClick={() => setIsHeaderFooterDialogOpen(false)}
              >
                Confirm
              </ReactButton>
            </div>
          </ReactDialogFooter>
        </ReactDialog>
      </div>

      {/* With Close Button */}
      <div className="mbe4">
        <h2>With Close Button</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsCloseButtonDialogOpen(true)}>
          Open Dialog with Close Button
        </ReactButton>
        <ReactDialog
          open={isCloseButtonDialogOpen}
          onOpenChange={setIsCloseButtonDialogOpen}
          heading="Dialog with Close Button"
          description="Click the X button to close this dialog."
          showCloseButton
        >
          <p>This dialog includes a close button in the top-right corner.</p>
        </ReactDialog>
      </div>

      {/* No Close on Escape */}
      <div className="mbe4">
        <h2>No Close on Escape</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsNoEscapeDialogOpen(true)}>
          Open No Escape Dialog
        </ReactButton>
        <ReactDialog
          open={isNoEscapeDialogOpen}
          onOpenChange={setIsNoEscapeDialogOpen}
          heading="No Close on Escape"
          description="Pressing Escape will not close this dialog."
          noCloseOnEscape
          showCloseButton
        >
          <p>Try pressing the Escape key - the dialog will not close.</p>
          <p>Use the close button instead.</p>
        </ReactDialog>
      </div>

      {/* No Close on Backdrop */}
      <div className="mbe4">
        <h2>No Close on Backdrop</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsNoBackdropDialogOpen(true)}>
          Open No Backdrop Close Dialog
        </ReactButton>
        <ReactDialog
          open={isNoBackdropDialogOpen}
          onOpenChange={setIsNoBackdropDialogOpen}
          heading="No Close on Backdrop"
          description="Clicking the backdrop will not close this dialog."
          noCloseOnBackdrop
          showCloseButton
        >
          <p>Try clicking outside the dialog - it will not close.</p>
          <p>Use the close button instead.</p>
        </ReactDialog>
      </div>

      {/* Event Handling */}
      <div className="mbe4">
        <h2>Event Handling</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={showEventDialog}>Open Event Dialog</ReactButton>
        <ReactDialog
          open={isEventDialogOpen}
          onOpenChange={setIsEventDialogOpen}
          heading="Event Testing"
          description="This dialog demonstrates event handling."
          showCloseButton
          onDialogOpen={handleDialogOpen}
          onDialogClose={handleDialogClose}
          onDialogCancel={handleDialogCancel}
        >
          <p>Try closing this dialog in different ways:</p>
          <ul>
            <li>Click the X button (triggers dialog-close)</li>
            <li>Press Escape (triggers dialog-cancel)</li>
            <li>Click the backdrop (triggers dialog-cancel)</li>
          </ul>
          {lastEvent && (
            <p
              style={{
                marginTop: "1rem",
                padding: "0.5rem",
                background: "var(--ag-background-secondary)",
                borderRadius: "4px",
              }}
            >
              Last event: <strong>{lastEvent}</strong>
            </p>
          )}
        </ReactDialog>
      </div>

      {/* Customized with CSS Shadow Parts */}
      <div className="mbe4">
        <h2>Customized with CSS Shadow Parts</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsCustomDialogOpen(true)}>
          Open Customized Dialog
        </ReactButton>
        <ReactDialog
          open={isCustomDialogOpen}
          onOpenChange={setIsCustomDialogOpen}
          className="custom-parts-dialog"
          heading="Styled Dialog"
          description="This dialog is customized using CSS Shadow Parts."
          showCloseButton
        >
          <p>
            This dialog demonstrates CSS Shadow Parts customization with styled
            backdrop, container, header, heading, content, footer, and close button.
          </p>
          <ReactDialogFooter>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsCustomDialogOpen(false)}>
                Close
              </ReactButton>
            </div>
          </ReactDialogFooter>
        </ReactDialog>
      </div>
    </section>
  );
}
