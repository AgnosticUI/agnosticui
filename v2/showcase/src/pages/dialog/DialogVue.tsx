import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
import "agnosticui-core";
import { useState } from "react";

const DialogVue = () => {
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
      framework="Vue"
      frameworkIcon={vueIcon}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>npm install agnostic-vue</code>
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
                <code>{`import VueDialog from 'agnosticui-core/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> The VueDialog component is a thin wrapper around the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-dialog</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                The Vue wrapper handles event forwarding and provides a native Vue developer experience.
              </p>
              <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
                <p className="text-sm text-blue-900 dark:text-blue-100 mb-2">
                  <strong>Try it live:</strong> See the VueDialog component in action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/s/agnosticui-vue-dialog-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
                  </svg>
                  Open in CodeSandbox
                </a>
              </div>
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
          code={`<template>
  <button @click="open = true">Open Dialog</button>

  <VueDialog
    :open="open"
    heading="Welcome"
    description="This is a basic dialog example."
    @dialog-close="open = false"
  >
    <p>Dialog content goes here. Click outside or press Escape to close.</p>
  </VueDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueDialog from 'agnosticui-core/vue';
import 'agnosticui-core';

const open = ref(false);
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
              <ag-dialog
                open={headerSlotOpen}
              >
                <div slot="header">
                  <h2 className="text-xl font-bold text-purple-600">Custom Header</h2>
                  <p className="text-sm text-gray-500">With custom styling</p>
                </div>
                <p>This dialog has a custom header using the header slot.</p>
              </ag-dialog>
            </>
          }
          code={`<template>
  <button @click="open = true">Open Dialog with Custom Header</button>

  <VueDialog :open="open" @dialog-close="open = false">
    <template #header>
      <h2 class="text-xl font-bold text-purple-600">Custom Header</h2>
      <p class="text-sm text-gray-500">With custom styling</p>
    </template>
    <p>This dialog has a custom header using the header slot.</p>
  </VueDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
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
          code={`<template>
  <button @click="open = true">Open Dialog with Footer</button>

  <VueDialog
    :open="open"
    heading="Confirm Action"
    description="Are you sure you want to proceed?"
    @dialog-close="open = false"
  >
    <p>This action cannot be undone.</p>
    <template #footer>
      <div class="flex gap-2 justify-end">
        <button @click="open = false">Cancel</button>
        <button @click="handleConfirm">Confirm</button>
      </div>
    </template>
  </VueDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);

const handleConfirm = () => {
  console.log('Confirmed!');
  open.value = false;
};
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
          code={`<template>
  <button @click="open = true">Open Dialog with Close Button</button>

  <VueDialog
    :open="open"
    heading="Dialog Title"
    description="This dialog has a close button."
    :showCloseButton="true"
    @dialog-close="open = false"
  >
    <p>Click the X button in the top-right to close.</p>
  </VueDialog>
</template>`}
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
          code={`<template>
  <button @click="open = true">Open Dialog with Events</button>

  <VueDialog
    :open="open"
    heading="Event Handling"
    description="Check the console for event logs."
    @dialog-open="handleDialogOpen"
    @dialog-close="handleDialogClose"
    @dialog-cancel="handleDialogCancel"
  >
    <p>Open your browser console to see event logs.</p>
    <ul>
      <li>dialog-open: Fired when dialog opens</li>
      <li>dialog-close: Fired when dialog closes normally</li>
      <li>dialog-cancel: Fired when closed via Escape or backdrop</li>
    </ul>
  </VueDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);

const handleDialogOpen = (event: Event) => {
  console.log('Dialog opened:', event);
};

const handleDialogClose = (event: Event) => {
  console.log('Dialog closed:', event);
  open.value = false;
};

const handleDialogCancel = (event: Event) => {
  console.log('Dialog cancelled:', event);
  open.value = false;
};
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
          code={`<template>
  <button @click="open = true">Open Dialog (No Escape)</button>

  <VueDialog
    :open="open"
    heading="No Escape Key"
    description="Press Escape - it won't close!"
    :closeOnEscape="false"
    @dialog-close="open = false"
  >
    <p>This dialog cannot be closed with the Escape key.</p>
    <button @click="open = false">Close Dialog</button>
  </VueDialog>
</template>`}
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
          code={`<template>
  <button @click="open = true">Open Dialog (No Backdrop Close)</button>

  <VueDialog
    :open="open"
    heading="No Backdrop Close"
    description="Click outside - it won't close!"
    :closeOnBackdrop="false"
    @dialog-close="open = false"
  >
    <p>This dialog cannot be closed by clicking the backdrop.</p>
    <button @click="open = false">Close Dialog</button>
  </VueDialog>
</template>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogVue;
