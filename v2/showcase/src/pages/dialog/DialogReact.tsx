import { ReactDialog } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import reactIcon from "@/assets/icons/react.svg";

const DialogReact = () => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [headerSlotOpen, setHeaderSlotOpen] = useState(false);
  const [footerOpen, setFooterOpen] = useState(false);
  const [closeButtonOpen, setCloseButtonOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [escapeOpen, setEscapeOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  const handleDialogOpen = () => {
    console.log("Dialog opened...");
  };

  const handleDialogClose = () => {
    console.log("Dialog closed...");
  };

  const handleDialogCancel = () => {
    console.log("Dialog cancelled...");
  };

  return (
    <ComponentLayout
      componentName="Dialog"
      framework="React"
      frameworkIcon={reactIcon}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>npm install agnostic-react</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Import */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { ReactDialog } from 'agnosticui-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple dialog with heading and description."
          preview={
            <>
              <button
                onClick={() => setBasicOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog
              </button>
              <ReactDialog
                open={basicOpen}
                heading="Welcome"
                description="This is a basic dialog example."
                onDialogClose={() => setBasicOpen(false)}
              >
                <p>Dialog content goes here. Click outside or press Escape to close.</p>
              </ReactDialog>
            </>
          }
          language="typescript"
          code={`import { ReactDialog } from "agnosticui-core/react";
import { useState } from "react";

const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Open Dialog</button>

<ReactDialog
  open={open}
  heading="Welcome"
  description="This is a basic dialog example."
  onDialogClose={() => setOpen(false)}
>
  <p>Dialog content goes here. Click outside or press Escape to close.</p>
</ReactDialog>`}
        />

        {/* Dialog with Custom Header Slot */}
        <CodeExample
          title="Custom Header Slot"
          description="Use the header slot for custom header content."
          preview={
            <>
              <button
                onClick={() => setHeaderSlotOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog with Custom Header
              </button>
              <ReactDialog
                open={headerSlotOpen}
                onDialogClose={() => setHeaderSlotOpen(false)}
              >
                <div slot="header">
                  <h2 className="text-xl font-bold text-purple-600">Custom Header</h2>
                  <p className="text-sm text-gray-500">With custom styling</p>
                </div>
                <p>This dialog has a custom header using the header slot.</p>
              </ReactDialog>
            </>
          }
          language="typescript"
          code={`<ReactDialog open={open} onDialogClose={() => setOpen(false)}>
  <div slot="header">
    <h2 className="text-xl font-bold text-purple-600">Custom Header</h2>
    <p className="text-sm text-gray-500">With custom styling</p>
  </div>
  <p>This dialog has a custom header using the header slot.</p>
</ReactDialog>`}
        />

        {/* Dialog with Footer Actions */}
        <CodeExample
          title="Dialog with Footer"
          description="Add action buttons in the footer slot."
          preview={
            <>
              <button
                onClick={() => setFooterOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog with Footer
              </button>
              <ReactDialog
                open={footerOpen}
                heading="Confirm Action"
                description="Are you sure you want to proceed?"
                onDialogClose={() => setFooterOpen(false)}
              >
                <p>This action cannot be undone.</p>
                <div slot="footer" className="flex gap-2 justify-end">
                  <button
                    onClick={() => setFooterOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      console.log("Confirmed!");
                      setFooterOpen(false);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                </div>
              </ReactDialog>
            </>
          }
          language="typescript"
          code={`<ReactDialog
  open={open}
  heading="Confirm Action"
  description="Are you sure you want to proceed?"
  onDialogClose={() => setOpen(false)}
>
  <p>This action cannot be undone.</p>
  <div slot="footer" className="flex gap-2 justify-end">
    <button onClick={() => setOpen(false)}>Cancel</button>
    <button onClick={() => setOpen(false)}>Confirm</button>
  </div>
</ReactDialog>`}
        />

        {/* Dialog with Close Button */}
        <CodeExample
          title="With Close Button"
          description="Enable the built-in close button in the top-right corner."
          preview={
            <>
              <button
                onClick={() => setCloseButtonOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog with Close Button
              </button>
              <ReactDialog
                open={closeButtonOpen}
                heading="Dialog Title"
                description="This dialog has a close button."
                showCloseButton={true}
                onDialogClose={() => setCloseButtonOpen(false)}
              >
                <p>Click the X button in the top-right to close.</p>
              </ReactDialog>
            </>
          }
          language="typescript"
          code={`<ReactDialog
  open={open}
  heading="Dialog Title"
  description="This dialog has a close button."
  showCloseButton={true}
  onDialogClose={() => setOpen(false)}
>
  <p>Click the X button in the top-right to close.</p>
</ReactDialog>`}
        />

        {/* Dialog Events */}
        <CodeExample
          title="Dialog Events"
          description="Handle dialog open, close, and cancel events."
          preview={
            <>
              <button
                onClick={() => setEventsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog with Events
              </button>
              <ReactDialog
                open={eventsOpen}
                heading="Event Handling"
                description="Check the console for event logs."
                onDialogOpen={handleDialogOpen}
                onDialogClose={() => {
                  handleDialogClose();
                  setEventsOpen(false);
                }}
                onDialogCancel={() => {
                  handleDialogCancel();
                  setEventsOpen(false);
                }}
              >
                <p>Open your browser console to see event logs.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>dialog-open: Fired when dialog opens</li>
                  <li>dialog-close: Fired when dialog closes normally</li>
                  <li>dialog-cancel: Fired when closed via Escape or backdrop</li>
                </ul>
              </ReactDialog>
            </>
          }
          language="typescript"
          code={`const handleDialogOpen = () => {
  console.log("Dialog opened...");
};

const handleDialogClose = () => {
  console.log("Dialog closed...");
};

const handleDialogCancel = () => {
  console.log("Dialog cancelled...");
};

<ReactDialog
  open={open}
  heading="Event Handling"
  description="Check the console for event logs."
  onDialogOpen={handleDialogOpen}
  onDialogClose={handleDialogClose}
  onDialogCancel={handleDialogCancel}
>
  <p>Open your browser console to see event logs.</p>
</ReactDialog>`}
        />

        {/* Disable Escape Key */}
        <CodeExample
          title="Disable Close on Escape"
          description="Prevent closing the dialog with the Escape key."
          preview={
            <>
              <button
                onClick={() => setEscapeOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog (No Escape)
              </button>
              <ReactDialog
                open={escapeOpen}
                heading="No Escape Key"
                description="Press Escape - it won't close!"
                closeOnEscape={false}
                onDialogClose={() => setEscapeOpen(false)}
              >
                <p>This dialog cannot be closed with the Escape key.</p>
                <div className="mt-4">
                  <button
                    onClick={() => setEscapeOpen(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Close Dialog
                  </button>
                </div>
              </ReactDialog>
            </>
          }
          language="typescript"
          code={`<ReactDialog
  open={open}
  heading="No Escape Key"
  description="Press Escape - it won't close!"
  closeOnEscape={false}
  onDialogClose={() => setOpen(false)}
>
  <p>This dialog cannot be closed with the Escape key.</p>
  <button onClick={() => setOpen(false)}>Close Dialog</button>
</ReactDialog>`}
        />

        {/* Disable Backdrop Click */}
        <CodeExample
          title="Disable Close on Backdrop Click"
          description="Prevent closing the dialog by clicking outside."
          preview={
            <>
              <button
                onClick={() => setBackdropOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog (No Backdrop Close)
              </button>
              <ReactDialog
                open={backdropOpen}
                heading="No Backdrop Close"
                description="Click outside - it won't close!"
                closeOnBackdrop={false}
                onDialogClose={() => setBackdropOpen(false)}
              >
                <p>This dialog cannot be closed by clicking the backdrop.</p>
                <div className="mt-4">
                  <button
                    onClick={() => setBackdropOpen(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Close Dialog
                  </button>
                </div>
              </ReactDialog>
            </>
          }
          language="typescript"
          code={`<ReactDialog
  open={open}
  heading="No Backdrop Close"
  description="Click outside - it won't close!"
  closeOnBackdrop={false}
  onDialogClose={() => setOpen(false)}
>
  <p>This dialog cannot be closed by clicking the backdrop.</p>
  <button onClick={() => setOpen(false)}>Close Dialog</button>
</ReactDialog>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogReact;
