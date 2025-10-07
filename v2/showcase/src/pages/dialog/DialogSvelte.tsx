import { ReactButton } from "agnosticui-core/react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
import "agnosticui-core";
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

const DialogSvelte = () => {
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
      framework="Svelte"
      frameworkIcon={svelteIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-svelte</code>
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
                <code>{`import 'agnosticui-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> Svelte works directly with the{" "}
                <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">
                  ag-dialog
                </code>{" "}
                web component using standard HTML syntax. The previews below
                show the web component as it would appear in your Svelte
                application. Svelte's reactivity works seamlessly with web
                components through standard DOM properties and events.
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
                <p>
                  Dialog content goes here. Click outside or press Escape to
                  close.
                </p>
              </DialogWrapper>
            </>
          }
          code={`<script>\n  import 'agnosticui-core';\n\n  let open = false;\n</script>\n\n<button on:click={() => open = true}>Open Dialog</button>\n\n<ag-dialog\n  open={open}\n  heading=\"Welcome\"\n  description=\"This is a basic dialog example.\"\n  on:dialog-close={() => open = false}\n>\n  <p>Dialog content goes here. Click outside or press Escape to close.</p>\n</ag-dialog>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DialogSvelte;
