import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
import "agnosticui-core";
import { useState } from "react";

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
              <ag-dialog
                open={basicOpen}
                heading="Welcome"
                description="This is a basic dialog example."
              >
                <p>Dialog content goes here. Click outside or press Escape to close.</p>
              </ag-dialog>
            </>
          }
          code={`<script>
  import 'agnosticui-core';

  let open = false;
</script>

<button on:click={() => open = true}>Open Dialog</button>

<ag-dialog
  open={open}
  heading="Welcome"
  description="This is a basic dialog example."
  on:dialog-close={() => open = false}
>
  <p>Dialog content goes here. Click outside or press Escape to close.</p>
</ag-dialog>`}
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
              <ag-dialog open={headerSlotOpen}>
                <div slot="header">
                  <h2 className="text-xl font-bold text-purple-600">Custom Header</h2>
                  <p className="text-sm text-gray-500">With custom styling</p>
                </div>
                <p>This dialog has a custom header using the header slot.</p>
              </ag-dialog>
            </>
          }
          code={`<script>
  let open = false;
</script>

<button on:click={() => open = true}>Open Dialog with Custom Header</button>

<ag-dialog open={open} on:dialog-close={() => open = false}>
  <div slot="header">
    <h2 class="text-xl font-bold text-purple-600">Custom Header</h2>
    <p class="text-sm text-gray-500">With custom styling</p>
  </div>
  <p>This dialog has a custom header using the header slot.</p>
</ag-dialog>`}
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
              <ag-dialog
                open={footerOpen}
                heading="Confirm Action"
                description="Are you sure you want to proceed?"
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
              </ag-dialog>
            </>
          }
          code={`<script>
  let open = false;

  function handleConfirm() {
    console.log('Confirmed!');
    open = false;
  }
</script>

<button on:click={() => open = true}>Open Dialog with Footer</button>

<ag-dialog
  open={open}
  heading="Confirm Action"
  description="Are you sure you want to proceed?"
  on:dialog-close={() => open = false}
>
  <p>This action cannot be undone.</p>
  <div slot="footer" class="flex gap-2 justify-end">
    <button on:click={() => open = false}>Cancel</button>
    <button on:click={handleConfirm}>Confirm</button>
  </div>
</ag-dialog>`}
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
              <ag-dialog
                open={closeButtonOpen}
                heading="Dialog Title"
                description="This dialog has a close button."
                showCloseButton={true}
              >
                <p>Click the X button in the top-right to close.</p>
              </ag-dialog>
            </>
          }
          code={`<script>
  let open = false;
</script>

<button on:click={() => open = true}>Open Dialog with Close Button</button>

<ag-dialog
  open={open}
  heading="Dialog Title"
  description="This dialog has a close button."
  showCloseButton={true}
  on:dialog-close={() => open = false}
>
  <p>Click the X button in the top-right to close.</p>
</ag-dialog>`}
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
              <ag-dialog
                open={eventsOpen}
                heading="Event Handling"
                description="Check the console for event logs."
              >
                <p>Open your browser console to see event logs.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>dialog-open: Fired when dialog opens</li>
                  <li>dialog-close: Fired when dialog closes normally</li>
                  <li>dialog-cancel: Fired when closed via Escape or backdrop</li>
                </ul>
              </ag-dialog>
            </>
          }
          code={`<script>
  let open = false;

  function handleDialogOpen(event) {
    console.log('Dialog opened:', event);
  }

  function handleDialogClose(event) {
    console.log('Dialog closed:', event);
    open = false;
  }

  function handleDialogCancel(event) {
    console.log('Dialog cancelled:', event);
    open = false;
  }
</script>

<button on:click={() => open = true}>Open Dialog with Events</button>

<ag-dialog
  open={open}
  heading="Event Handling"
  description="Check the console for event logs."
  on:dialog-open={handleDialogOpen}
  on:dialog-close={handleDialogClose}
  on:dialog-cancel={handleDialogCancel}
>
  <p>Open your browser console to see event logs.</p>
  <ul>
    <li>dialog-open: Fired when dialog opens</li>
    <li>dialog-close: Fired when dialog closes normally</li>
    <li>dialog-cancel: Fired when closed via Escape or backdrop</li>
  </ul>
</ag-dialog>`}
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
              <ag-dialog
                open={escapeOpen}
                heading="No Escape Key"
                description="Press Escape - it won't close!"
                closeOnEscape={false}
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
              </ag-dialog>
            </>
          }
          code={`<script>
  let open = false;
</script>

<button on:click={() => open = true}>Open Dialog (No Escape)</button>

<ag-dialog
  open={open}
  heading="No Escape Key"
  description="Press Escape - it won't close!"
  closeOnEscape={false}
  on:dialog-close={() => open = false}
>
  <p>This dialog cannot be closed with the Escape key.</p>
  <button on:click={() => open = false}>Close Dialog</button>
</ag-dialog>`}
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
              <ag-dialog
                open={backdropOpen}
                heading="No Backdrop Close"
                description="Click outside - it won't close!"
                closeOnBackdrop={false}
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
              </ag-dialog>
            </>
          }
          code={`<script>
  let open = false;
</script>

<button on:click={() => open = true}>Open Dialog (No Backdrop Close)</button>

<ag-dialog
  open={open}
  heading="No Backdrop Close"
  description="Click outside - it won't close!"
  closeOnBackdrop={false}
  on:dialog-close={() => open = false}
>
  <p>This dialog cannot be closed by clicking the backdrop.</p>
  <button on:click={() => open = false}>Close Dialog</button>
</ag-dialog>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogSvelte;
