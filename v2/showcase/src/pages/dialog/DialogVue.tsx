import { ReactButton } from "agnosticui-core/react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
import "agnosticui-core";
import "agnosticui-core/dialog";
import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "@/shared/styles.module.css";

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
      if (key.startsWith("on") && typeof value === "function") {
        const propName = key.replace(/^on/, "");
        const eventName = (propName.charAt(0).toLowerCase() + propName.slice(1))
          .replace(/([A-Z])/g, "-$1")
          .toLowerCase();
        const handler = value as EventListener;
        element.addEventListener(eventName, handler);
        listeners.push({ event: eventName, handler });
      } else if (typeof value === "boolean") {
        if (value) {
          element.setAttribute(key, "");
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
      framework="Vue"
      frameworkIcon={vueIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-vue</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Import */}
        <section>
          <h2 className={styles.heading2}>Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>{`import VueDialog from 'agnosticui-core/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> The VueDialog component is a thin wrapper
                around the{" "}
                <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">
                  ag-dialog
                </code>{" "}
                web component. The previews below show the underlying web
                component, while the code examples demonstrate the proper Vue
                syntax. The Vue wrapper handles event forwarding and provides a
                native Vue developer experience.
              </p>
              <div className={styles.dividerSection}>
                <p className={styles.smallParagraphBlue}>
                  <strong>Try it live:</strong> See the VueDialog component in
                  action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/s/agnosticui-vue-dialog-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
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
                <p>
                  Dialog content goes here. Click outside or press Escape to
                  close.
                </p>
              </DialogWrapper>
            </>
          }
          code={`<template>\n  <button @click=\"open = true\">Open Dialog</button>\n\n  <VueDialog\n    :open=\"open\"\n    heading=\"Welcome\"\n    description=\"This is a basic dialog example.\"\n    @dialog-close=\"open = false\"\n  >\n    <p>Dialog content goes here. Click outside or press Escape to close.</p>\n  </VueDialog>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\nimport VueDialog from 'agnosticui-core/vue';\nimport 'agnosticui-core';\n\nconst open = ref(false);\n</script>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogVue;
