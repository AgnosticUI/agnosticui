import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
import "agnosticui-core";
import { useEffect, useRef, useState, ReactNode } from "react";

interface DialogWrapperProps {
  children?: ReactNode;
  open?: boolean;
  heading?: string;
  description?: string;
  showCloseButton?: boolean;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
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

const DialogSvelte = () => {
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
      framework="Svelte"
      frameworkIcon={svelteIcon}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>npm install agnostic-svelte</code>
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
                <code>{`import 'agnosticui-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> Svelte works directly with the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-dialog</code> web component using standard HTML syntax.
                The previews below show the web component as it would appear in your Svelte application.
                Svelte's reactivity works seamlessly with web components through standard DOM properties and events.
              </p>
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
          code={`<script>\n  import 'agnosticui-core';\n\n  let open = false;\n</script>\n\n<button on:click={() => open = true}>Open Dialog</button>\n\n<ag-dialog\n  open={open}\n  heading=\"Welcome\"\n  description=\"This is a basic dialog example.\"\n  on:dialog-close={() => open = false}\n>\n  <p>Dialog content goes here. Click outside or press Escape to close.</p>\n</ag-dialog>`}
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
              <DialogWrapper open={headerSlotOpen} onDialogClose={() => setHeaderSlotOpen(false)}>
                <div slot="header">
                  <h2 className="text-xl font-bold text-purple-600">Custom Header</h2>
                  <p className="text-sm text-gray-500">With custom styling</p>
                </div>
                <p>This dialog has a custom header using the header slot.</p>
              </DialogWrapper>
            </>
          }
          code={`<script>\n  let open = false;\n</script>\n\n<button on:click={() => open = true}>Open Dialog with Custom Header</button>\n\n<ag-dialog open={open} on:dialog-close={() => open = false}>\n  <div slot=\"header\">
    <h2 class=\"text-xl font-bold text-purple-600\">Custom Header</h2>\n    <p class=\"text-sm text-gray-500\">With custom styling</p>\n  </div>\n  <p>This dialog has a custom header using the header slot.</p>\n</ag-dialog>`}
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
          code={`<script>\n  let open = false;\n\n  function handleConfirm() {\n    console.log('Confirmed!');\n    open = false;\n  }\n</script>\n\n<button on:click={() => open = true}>Open Dialog with Footer</button>\n\n<ag-dialog\n  open={open}\n  heading=\"Confirm Action\"\n  description=\"Are you sure you want to proceed?\"\n  on:dialog-close={() => open = false}\n>\n  <p>This action cannot be undone.</p>\n  <div slot=\"footer\" class=\"flex gap-2 justify-end\">
    <button on:click={() => open = false}>Cancel</button>\n    <button on:click={handleConfirm}>Confirm</button>\n  </div>\n</ag-dialog>`}
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
          code={`<script>\n  let open = false;\n</script>\n\n<button on:click={() => open = true}>Open Dialog with Close Button</button>\n\n<ag-dialog\n  open={open}\n  heading=\"Dialog Title\"\n  description=\"This dialog has a close button.\"\n  showCloseButton={true}\n  on:dialog-close={() => open = false}\n>\n  <p>Click the X button in the top-right to close.</p>\n</ag-dialog>`}
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
                onDialogClose={() => setEventsOpen(false)}
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
          code={`<script>\n  let open = false;\n\n  function handleDialogOpen(event) {\n    console.log('Dialog opened:', event);\n  }\n\n  function handleDialogClose(event) {\n    console.log('Dialog closed:', event);\n    open = false;\n  }\n\n  function handleDialogCancel(event) {\n    console.log('Dialog cancelled:', event);\n    open = false;\n  }\n</script>\n\n<button on:click={() => open = true}>Open Dialog with Events</button>\n\n<ag-dialog\n  open={open}\n  heading=\"Event Handling\"\n  description=\"Check the console for event logs.\"\n  on:dialog-open={handleDialogOpen}\n  on:dialog-close={handleDialogClose}\n  on:dialog-cancel={handleDialogCancel}\n>\n  <p>Open your browser console to see event logs.</p>\n  <ul>\n    <li>dialog-open: Fired when dialog opens</li>\n    <li>dialog-close: Fired when dialog closes normally</li>\n    <li>dialog-cancel: Fired when closed via Escape or backdrop</li>\n  </ul>\n</ag-dialog>`}
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
              </DialogWrapper>
            </>
          }
          code={`<script>\n  let open = false;\n</script>\n\n<button on:click={() => open = true}>Open Dialog (No Escape)</button>\n\n<ag-dialog\n  open={open}\n  heading=\"No Escape Key\"\n  description=\"Press Escape - it won't close!\"\n  closeOnEscape={false}\n  on:dialog-close={() => open = false}\n>\n  <p>This dialog cannot be closed with the Escape key.</p>\n  <button on:click={() => open = false}>Close Dialog</button>\n</ag-dialog>`}
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
              </DialogWrapper>
            </>
          }
          code={`<script>\n  let open = false;\n</script>\n\n<button on:click={() => open = true}>Open Dialog (No Backdrop Close)</button>\n\n<ag-dialog\n  open={open}\n  heading=\"No Backdrop Close\"\n  description=\"Click outside - it won't close!\"\n  closeOnBackdrop={false}\n  on:dialog-close={() => open = false}\n>\n  <p>This dialog cannot be closed by clicking the backdrop.</p>\n  <button on:click={() => open = false}>Close Dialog</button>\n</ag-dialog>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogSvelte;
