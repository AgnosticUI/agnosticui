import { ReactDrawer, ReactButton } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import reactIcon from "@/assets/icons/react.svg";
import styles from "@/shared/styles.module.css";

const DrawerReact = () => {
  const [open, setOpen] = useState(false);

  return (
    <ComponentLayout
      componentName="Drawer"
      framework="React"
      frameworkIcon={reactIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-react</code>
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
                <code>{`import { ReactDrawer } from 'agnosticui-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple drawer with heading, description, custom footer actions, and a close button, positioned at the bottom."
          preview={
            <>
              <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open Drawer
              </button>
              <ReactDrawer
                open={open}
                heading="Welcome"
                description="This is a basic drawer example."
                showCloseButton={true}
                position="bottom"
                onDialogClose={() => setOpen(false)}
              >
                <p>
                  Drawer content goes here. Click outside, press Escape, or use the close button to close.
                </p>
                <div slot="footer" className="flex gap-2 justify-end">
                  <ReactButton
                    ghost={true}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </ReactButton>
                  <ReactButton
                    shape="rounded"
                    onClick={() => {
                      console.log("Confirmed!");
                      setOpen(false);
                    }}
                    variant="primary"
                  >
                    Confirm
                  </ReactButton>
                </div>
              </ReactDrawer>
            </>
          }
          language="typescript"
          code={`import { ReactDrawer, ReactButton } from "agnosticui-core/react";
import { useState } from "react";

const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Open Drawer</button>

<ReactDrawer
  open={open}
  heading="Welcome"
  description="This is a basic drawer example."
  showCloseButton={true}
  position="bottom"
  onDialogClose={() => setOpen(false)}
>
  <p>Drawer content goes here. Click outside, press Escape, or use the close button to close.</p>
  <div slot="footer" className="flex gap-2 justify-end">
    <ReactButton ghost={true} onClick={() => setOpen(false)}>
      Cancel
    </ReactButton>
    <ReactButton shape="rounded" variant="primary" onClick={() => setOpen(false)}>
      Confirm
    </ReactButton>
  </div>
</ReactDrawer>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default DrawerReact;
