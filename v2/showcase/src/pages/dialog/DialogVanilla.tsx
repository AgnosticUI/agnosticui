import { ReactButton } from "agnosticui-core/react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useEffect, useRef, useState, ReactNode } from "react";
import "agnosticui-core";
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
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-lit</code>
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
                onClick={() => {
                  console.log("asdf");
                  setBasicOpen(true);
                }}
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
      </div>
    </ComponentLayout>
  );
};

export default DialogVanilla;
