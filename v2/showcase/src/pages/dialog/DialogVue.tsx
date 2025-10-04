import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
import "agnosticui-core";
import "agnosticui-core/dialog";
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
        const eventName = key.replace(/^on/, '').replace(/([A-Z])/g, '-$1').toLowerCase();
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
          code={`<template>\n  <button @click=\"open = true\">Open Dialog</button>\n\n  <VueDialog\n    :open=\"open\"\n    heading=\"Welcome\"\n    description=\"This is a basic dialog example.\"\n    @dialog-close=\"open = false\"\n  >\n    <p>Dialog content goes here. Click outside or press Escape to close.</p>\n  </VueDialog>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\nimport VueDialog from 'agnosticui-core/vue';\nimport 'agnosticui-core';\n\nconst open = ref(false);\n</script>`}
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
          code={`<template>\n  <button @click=\"open = true\">Open Dialog with Custom Header</button>\n\n  <VueDialog :open=\"open\" @dialog-close=\"open = false\">
    <template #header>
      <h2 class=\"text-xl font-bold text-purple-600\">Custom Header</h2>
      <p class=\"text-sm text-gray-500\">With custom styling</p>
    </template>
    <p>This dialog has a custom header using the header slot.</p>
  </VueDialog>
</template>\n\n<script setup lang=\"ts\">
import { ref } from 'vue';\n\nconst open = ref(false);\n</script>`}
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
          code={`<template>\n  <button @click=\"open = true\">Open Dialog with Footer</button>\n\n  <VueDialog\n    :open=\"open\"\n    heading=\"Confirm Action\"\n    description=\"Are you sure you want to proceed?\"\n    @dialog-close=\"open = false\"
  >\n    <p>This action cannot be undone.</p>\n    <template #footer>\n      <div class=\"flex gap-2 justify-end\">\n        <button @click=\"open = false\">Cancel</button>\n        <button @click=\"handleConfirm\">Confirm</button>\n      </div>\n    </template>\n  </VueDialog>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\nconst open = ref(false);\n\nconst handleConfirm = () => {\n  console.log('Confirmed!');\n  open.value = false;\n};\n</script>`}
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
          code={`<template>\n  <button @click=\"open = true\">Open Dialog with Close Button</button>\n\n  <VueDialog\n    :open=\"open\"\n    heading=\"Dialog Title\"\n    description=\"This dialog has a close button.\"\n    :showCloseButton=\"true\"\n    @dialog-close=\"open = false\"
  >\n    <p>Click the X button in the top-right to close.</p>\n  </VueDialog>\n</template>`}
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
          code={`<template>\n  <button @click=\"open = true\">Open Dialog with Events</button>\n\n  <VueDialog\n    :open=\"open\"\n    heading=\"Event Handling\"\n    description=\"Check the console for event logs.\"\n    @dialog-open=\"handleDialogOpen\"\n    @dialog-close=\"handleDialogClose\"\n    @dialog-cancel=\"handleDialogCancel\"
  >\n    <p>Open your browser console to see event logs.</p>\n    <ul>\n      <li>dialog-open: Fired when dialog opens</li>\n      <li>dialog-close: Fired when dialog closes normally</li>\n      <li>dialog-cancel: Fired when closed via Escape or backdrop</li>\n    </ul>\n  </VueDialog>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\nconst open = ref(false);\n\nconst handleDialogOpen = (event: Event) => {\n  console.log('Dialog opened:', event);\n};\n\nconst handleDialogClose = (event: Event) => {\n  console.log('Dialog closed:', event);\n  open.value = false;\n};\n\nconst handleDialogCancel = (event: Event) => {\n  console.log('Dialog cancelled:', event);\n  open.value = false;\n};\n</script>`}
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
          code={`<template>\n  <button @click=\"open = true\">Open Dialog (No Escape)</button>\n\n  <VueDialog\n    :open=\"open\"\n    heading=\"No Escape Key\"\n    description=\"Press Escape - it won't close!\"\n    :closeOnEscape=\"false\"\n    @dialog-close=\"open = false\"
  >\n    <p>This dialog cannot be closed with the Escape key.</p>\n    <button @click=\"open = false\">Close Dialog</button>\n  </VueDialog>\n</template>`}
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
          code={`<template>\n  <button @click=\"open = true\">Open Dialog (No Backdrop Close)</button>\n\n  <VueDialog\n    :open=\"open\"\n    heading=\"No Backdrop Close\"\n    description=\"Click outside - it won't close!\"\n    :closeOnBackdrop=\"false\"\n    @dialog-close=\"open = false\"
  >\n    <p>This dialog cannot be closed by clicking the backdrop.</p>\n    <button @click=\"open = false\">Close Dialog</button>\n  </VueDialog>\n</template>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogVue;
