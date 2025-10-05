import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useEffect, useRef, useState, ReactNode } from "react";
import "agnosticui-core";

interface DialogWrapperProps {
  children?: ReactNode;
  open?: boolean;
  heading?: string;
  description?: string;
  showCloseButton?: boolean;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  onDialogOpen?: (event: Event) => void;
  onDialogClose?: (event: Event) => void;
  onDialogCancel?: (event: Event) => void;
}

// Helper component to render ag-dialog in React
const DialogWrapper = ({ children, ...props }: DialogWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const listeners: Array<{ event: string; handler: EventListener }> = [];

    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        const propName = key.replace(/^on/, '');
        const eventName = (propName.charAt(0).toLowerCase() + propName.slice(1)).replace(
          /([A-Z])/g,
          '-$1'
        ).toLowerCase();
        const handler = value as EventListener;
        element.addEventListener(eventName, handler);
        listeners.push({ event: eventName, handler });
      } else if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        } else {
          element.removeAttribute(key);
        }
      } else if (value !== undefined && value !== null) {
        element.setAttribute(key, String(value));
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    };
  }, [props]);

  return <ag-dialog ref={ref}>{children}</ag-dialog>;
};

const DialogVanilla = () => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [headerSlotOpen, setHeaderSlotOpen] = useState(false);
  const [footerOpen, setFooterOpen] = useState(false);
  const [closeButtonOpen, setCloseButtonOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [escapeOpen, setEscapeOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  return (
    <ComponentLayout
      componentName="Dialog"
      framework="Vanilla (Web Components)"
      frameworkIcon={javascriptIcon}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>npm install agnostic-lit</code>
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
                <code>{`import 'agnostic-core';`}</code>
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
                onClick={
                  () => {
                    console.log('asdf')
                    setBasicOpen(true)
                  }
                }
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Dialog
              </button>

              <DialogWrapper
                open={basicOpen}
                heading="Welcome"
                description="This is a basic dialog example."
                onDialogClose={() => setBasicOpen(false)}
              >
                <p>Dialog content goes here. Click outside or press Escape to close.</p>
              </DialogWrapper>
            </>
          }
          language="javascript"
          code={`import "agnosticui-core";

<button id="openBtn">Open Dialog</button>

<ag-dialog id="dialog" heading="Welcome" description="This is a basic dialog example.">
  <p>Dialog content goes here. Click outside or press Escape to close.</p>
</ag-dialog>

<script>
  const openBtn = document.getElementById('openBtn');
  const dialog = document.getElementById('dialog');

  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });

  dialog.addEventListener('dialog-close', () => {
    dialog.open = false;
  });
</script>`}
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
              <DialogWrapper
                open={headerSlotOpen}
                onDialogClose={() => setHeaderSlotOpen(false)}
              >
                <div slot="header">
                  <h2 className="text-xl font-bold text-purple-600">Custom Header</h2>
                  <p className="text-sm text-gray-500">With custom styling</p>
                </div>
                <p>This dialog has a custom header using the header slot.</p>
              </DialogWrapper>
            </>
          }
          code={`<button id="openBtn">Open Dialog with Custom Header</button>

<ag-dialog id="dialog">
  <div slot="header">
    <h2 class="text-xl font-bold text-purple-600">Custom Header</h2>
    <p class="text-sm text-gray-500">With custom styling</p>
  </div>
  <p>This dialog has a custom header using the header slot.</p>
</ag-dialog>

<script>
  const openBtn = document.getElementById('openBtn');
  const dialog = document.getElementById('dialog');

  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });

  dialog.addEventListener('dialog-close', () => {
    dialog.open = false;
  });
</script>`}
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
              <DialogWrapper
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
                    onClick={() => setFooterOpen(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                </div>
              </DialogWrapper>
            </>
          }
          language="javascript"
          code={`<button id="openBtn">Open Dialog with Footer</button>

<ag-dialog
  id="dialog"
  heading="Confirm Action"
  description="Are you sure you want to proceed?"
>
  <p>This action cannot be undone.</p>
  <div slot="footer" class="flex gap-2 justify-end">
    <button id="cancelBtn">Cancel</button>
    <button id="confirmBtn">Confirm</button>
  </div>
</ag-dialog>

<script>
  const openBtn = document.getElementById('openBtn');
  const dialog = document.getElementById('dialog');
  const cancelBtn = document.getElementById('cancelBtn');
  const confirmBtn = document.getElementById('confirmBtn');

  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });

  cancelBtn.addEventListener('click', () => {
    dialog.open = false;
  });

  confirmBtn.addEventListener('click', () => {
    console.log('Confirmed!');
    dialog.open = false;
  });

  dialog.addEventListener('dialog-close', () => {
    dialog.open = false;
  });
</script>`}
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
              <DialogWrapper
                open={closeButtonOpen}
                heading="Dialog Title"
                description="This dialog has a close button."
                showCloseButton={true}
                onDialogClose={() => setCloseButtonOpen(false)}
              >
                <p>Click the X button in the top-right to close.</p>
              </DialogWrapper>
            </>
          }
          code={`<button id="openBtn">Open Dialog with Close Button</button>

<ag-dialog
  id="dialog"
  heading="Dialog Title"
  description="This dialog has a close button."
  showCloseButton
>
  <p>Click the X button in the top-right to close.</p>
</ag-dialog>

<script>
  const openBtn = document.getElementById('openBtn');
  const dialog = document.getElementById('dialog');

  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });

  dialog.addEventListener('dialog-close', () => {
    dialog.open = false;
  });
</script>`}
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
              <DialogWrapper
                open={eventsOpen}
                heading="Event Handling"
                description="Check the console for event logs."
                onDialogOpen={(e) => console.log('Dialog opened:', e)}
                onDialogClose={(e) => { console.log('Dialog closed:', e); setEventsOpen(false); }}
                onDialogCancel={(e) => { console.log('Dialog cancelled:', e); setEventsOpen(false); }}
              >
                <p>Open your browser console to see event logs.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>dialog-open: Fired when dialog opens</li>
                  <li>dialog-close: Fired when dialog closes normally</li>
                  <li>dialog-cancel: Fired when closed via Escape or backdrop</li>
                </ul>
              </DialogWrapper>
            </>
          }
          language="javascript"
          code={`<button id="openBtn">Open Dialog with Events</button>

<ag-dialog
  id="dialog"
  heading="Event Handling"
  description="Check the console for event logs."
>
  <p>Open your browser console to see event logs.</p>
  <ul>
    <li>dialog-open: Fired when dialog opens</li>
    <li>dialog-close: Fired when dialog closes normally</li>
    <li>dialog-cancel: Fired when closed via Escape or backdrop</li>
  </ul>
</ag-dialog>

<script>
  const openBtn = document.getElementById('openBtn');
  const dialog = document.getElementById('dialog');

  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });

  dialog.addEventListener('dialog-open', (event) => {
    console.log('Dialog opened:', event);
  });

  dialog.addEventListener('dialog-close', (event) => {
    console.log('Dialog closed:', event);
    dialog.open = false;
  });

  dialog.addEventListener('dialog-cancel', (event) => {
    console.log('Dialog cancelled:', event);
    dialog.open = false;
  });
</script>`}
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
              <DialogWrapper
                open={escapeOpen}
                heading="No Escape Key"
                description="Press Escape - it won't close!"
                noCloseOnEscape={true}
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
              </DialogWrapper>
            </>
          }
          code={`<button id="openBtn">Open Dialog (No Escape)</button>

<ag-dialog
  id="dialog"
  heading="No Escape Key"
  description="Press Escape - it won't close!"
  no-close-on-escape
>
  <p>This dialog cannot be closed with the Escape key.</p>
  <button id="closeBtn">Close Dialog</button>
</ag-dialog>

<script>
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const dialog = document.getElementById('dialog');

  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });

  closeBtn.addEventListener('click', () => {
    dialog.open = false;
  });

  dialog.addEventListener('dialog-close', () => {
    dialog.open = false;
  });
</script>`}
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
              <DialogWrapper
                open={backdropOpen}
                heading="No Backdrop Close"
                description="Click outside - it won't close!"
                noCloseOnBackdrop={true}
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
              </DialogWrapper>
            </>
          }
          code={`<button id="openBtn">Open Dialog (No Backdrop Close)</button>

<ag-dialog
  id="dialog"
  heading="No Backdrop Close"
  description="Click outside - it won't close!"
  no-close-on-backdrop
>
  <p>This dialog cannot be closed by clicking the backdrop.</p>
  <button id="closeBtn">Close Dialog</button>
</ag-dialog>

<script>
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const dialog = document.getElementById('dialog');

  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });

  closeBtn.addEventListener('click', () => {
    dialog.open = false;
  });

  dialog.addEventListener('dialog-close', () => {
    dialog.open = false;
  });
</script>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogVanilla;
